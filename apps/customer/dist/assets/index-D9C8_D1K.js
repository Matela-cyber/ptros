function Ib(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Cb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Nx={exports:{}},md={},Sx={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tl=Symbol.for("react.element"),Nb=Symbol.for("react.portal"),Sb=Symbol.for("react.fragment"),bb=Symbol.for("react.strict_mode"),kb=Symbol.for("react.profiler"),Rb=Symbol.for("react.provider"),Ab=Symbol.for("react.context"),Pb=Symbol.for("react.forward_ref"),Db=Symbol.for("react.suspense"),Ob=Symbol.for("react.memo"),jb=Symbol.for("react.lazy"),q_=Symbol.iterator;function Lb(t){return t===null||typeof t!="object"?null:(t=q_&&t[q_]||t["@@iterator"],typeof t=="function"?t:null)}var bx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kx=Object.assign,Rx={};function wo(t,e,n){this.props=t,this.context=e,this.refs=Rx,this.updater=n||bx}wo.prototype.isReactComponent={};wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ax(){}Ax.prototype=wo.prototype;function Tm(t,e,n){this.props=t,this.context=e,this.refs=Rx,this.updater=n||bx}var Im=Tm.prototype=new Ax;Im.constructor=Tm;kx(Im,wo.prototype);Im.isPureReactComponent=!0;var H_=Array.isArray,Px=Object.prototype.hasOwnProperty,Cm={current:null},Dx={key:!0,ref:!0,__self:!0,__source:!0};function Ox(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Px.call(e,r)&&!Dx.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Tl,type:t,key:i,ref:o,props:s,_owner:Cm.current}}function Mb(t,e){return{$$typeof:Tl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Tl}function Vb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var G_=/\/+/g;function Uh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Vb(""+t.key):e.toString(36)}function jc(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Tl:case Nb:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Uh(o,0):r,H_(s)?(n="",t!=null&&(n=t.replace(G_,"$&/")+"/"),jc(s,e,n,"",function(d){return d})):s!=null&&(Nm(s)&&(s=Mb(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(G_,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",H_(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+Uh(i,a);o+=jc(i,e,n,l,s)}else if(l=Lb(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+Uh(i,a++),o+=jc(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function lc(t,e,n){if(t==null)return t;var r=[],s=0;return jc(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Fb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},Lc={transition:null},Ub={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Lc,ReactCurrentOwner:Cm};function jx(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:lc,forEach:function(t,e,n){lc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return lc(t,function(){e++}),e},toArray:function(t){return lc(t,function(e){return e})||[]},only:function(t){if(!Nm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=wo;ae.Fragment=Sb;ae.Profiler=kb;ae.PureComponent=Tm;ae.StrictMode=bb;ae.Suspense=Db;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ub;ae.act=jx;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=kx({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Cm.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Px.call(e,l)&&!Dx.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var d=0;d<l;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Tl,type:t.type,key:s,ref:i,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:Ab,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Rb,_context:t},t.Consumer=t};ae.createElement=Ox;ae.createFactory=function(t){var e=Ox.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:Pb,render:t}};ae.isValidElement=Nm;ae.lazy=function(t){return{$$typeof:jb,_payload:{_status:-1,_result:t},_init:Fb}};ae.memo=function(t,e){return{$$typeof:Ob,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=Lc.transition;Lc.transition={};try{t()}finally{Lc.transition=e}};ae.unstable_act=jx;ae.useCallback=function(t,e){return Nt.current.useCallback(t,e)};ae.useContext=function(t){return Nt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Nt.current.useEffect(t,e)};ae.useId=function(){return Nt.current.useId()};ae.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Nt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};ae.useRef=function(t){return Nt.current.useRef(t)};ae.useState=function(t){return Nt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Nt.current.useTransition()};ae.version="18.3.1";Sx.exports=ae;var A=Sx.exports;const Lx=Cb(A),Bb=Ib({__proto__:null,default:Lx},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $b=A,zb=Symbol.for("react.element"),Wb=Symbol.for("react.fragment"),qb=Object.prototype.hasOwnProperty,Hb=$b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gb={key:!0,ref:!0,__self:!0,__source:!0};function Mx(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)qb.call(e,r)&&!Gb.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:zb,type:t,key:i,ref:o,props:s,_owner:Hb.current}}md.Fragment=Wb;md.jsx=Mx;md.jsxs=Mx;Nx.exports=md;var u=Nx.exports,Lf={},Vx={exports:{}},Kt={},Fx={exports:{}},Ux={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,X){var ee=z.length;z.push(X);e:for(;0<ee;){var be=ee-1>>>1,Ve=z[be];if(0<s(Ve,X))z[be]=X,z[ee]=Ve,ee=be;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var X=z[0],ee=z.pop();if(ee!==X){z[0]=ee;e:for(var be=0,Ve=z.length,bs=Ve>>>1;be<bs;){var Yt=2*(be+1)-1,ks=z[Yt],an=Yt+1,Er=z[an];if(0>s(ks,ee))an<Ve&&0>s(Er,ks)?(z[be]=Er,z[an]=ee,be=an):(z[be]=ks,z[Yt]=ee,be=Yt);else if(an<Ve&&0>s(Er,ee))z[be]=Er,z[an]=ee,be=an;else break e}}return X}function s(z,X){var ee=z.sortIndex-X.sortIndex;return ee!==0?ee:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],d=[],h=1,f=null,m=3,_=!1,T=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(z){for(var X=n(d);X!==null;){if(X.callback===null)r(d);else if(X.startTime<=z)r(d),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(d)}}function O(z){if(k=!1,C(z),!T)if(n(l)!==null)T=!0,st(M);else{var X=n(d);X!==null&&on(O,X.startTime-z)}}function M(z,X){T=!1,k&&(k=!1,N(y),y=-1),_=!0;var ee=m;try{for(C(X),f=n(l);f!==null&&(!(f.expirationTime>X)||z&&!b());){var be=f.callback;if(typeof be=="function"){f.callback=null,m=f.priorityLevel;var Ve=be(f.expirationTime<=X);X=t.unstable_now(),typeof Ve=="function"?f.callback=Ve:f===n(l)&&r(l),C(X)}else r(l);f=n(l)}if(f!==null)var bs=!0;else{var Yt=n(d);Yt!==null&&on(O,Yt.startTime-X),bs=!1}return bs}finally{f=null,m=ee,_=!1}}var L=!1,x=null,y=-1,E=5,S=-1;function b(){return!(t.unstable_now()-S<E)}function P(){if(x!==null){var z=t.unstable_now();S=z;var X=!0;try{X=x(!0,z)}finally{X?I():(L=!1,x=null)}}else L=!1}var I;if(typeof w=="function")I=function(){w(P)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,Te=he.port2;he.port1.onmessage=P,I=function(){Te.postMessage(null)}}else I=function(){R(P,0)};function st(z){x=z,L||(L=!0,I())}function on(z,X){y=R(function(){z(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,st(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var ee=m;m=X;try{return z()}finally{m=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=m;m=z;try{return X()}finally{m=ee}},t.unstable_scheduleCallback=function(z,X,ee){var be=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?be+ee:be):ee=be,z){case 1:var Ve=-1;break;case 2:Ve=250;break;case 5:Ve=1073741823;break;case 4:Ve=1e4;break;default:Ve=5e3}return Ve=ee+Ve,z={id:h++,callback:X,priorityLevel:z,startTime:ee,expirationTime:Ve,sortIndex:-1},ee>be?(z.sortIndex=ee,e(d,z),n(l)===null&&z===n(d)&&(k?(N(y),y=-1):k=!0,on(O,ee-be))):(z.sortIndex=Ve,e(l,z),T||_||(T=!0,st(M))),z},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(z){var X=m;return function(){var ee=m;m=X;try{return z.apply(this,arguments)}finally{m=ee}}}})(Ux);Fx.exports=Ux;var Kb=Fx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qb=A,Gt=Kb;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bx=new Set,Ua={};function li(t,e){eo(t,e),eo(t+"Capture",e)}function eo(t,e){for(Ua[t]=e,t=0;t<e.length;t++)Bx.add(e[t])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=Object.prototype.hasOwnProperty,Yb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,K_={},Q_={};function Xb(t){return Mf.call(Q_,t)?!0:Mf.call(K_,t)?!1:Yb.test(t)?Q_[t]=!0:(K_[t]=!0,!1)}function Jb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Zb(t,e,n,r){if(e===null||typeof e>"u"||Jb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sm=/[\-:]([a-z])/g;function bm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sm,bm);lt[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sm,bm);lt[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sm,bm);lt[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function km(t,e,n,r){var s=lt.hasOwnProperty(e)?lt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Zb(e,n,s,r)&&(n=null),r||s===null?Xb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mr=Qb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cc=Symbol.for("react.element"),Ci=Symbol.for("react.portal"),Ni=Symbol.for("react.fragment"),Rm=Symbol.for("react.strict_mode"),Vf=Symbol.for("react.profiler"),$x=Symbol.for("react.provider"),zx=Symbol.for("react.context"),Am=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),Uf=Symbol.for("react.suspense_list"),Pm=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),Wx=Symbol.for("react.offscreen"),Y_=Symbol.iterator;function Xo(t){return t===null||typeof t!="object"?null:(t=Y_&&t[Y_]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Bh;function ua(t){if(Bh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bh=e&&e[1]||""}return`
`+Bh+t}var $h=!1;function zh(t,e){if(!t||$h)return"";$h=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$h=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ua(t):""}function ek(t){switch(t.tag){case 5:return ua(t.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return t=zh(t.type,!1),t;case 11:return t=zh(t.type.render,!1),t;case 1:return t=zh(t.type,!0),t;default:return""}}function Bf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ni:return"Fragment";case Ci:return"Portal";case Vf:return"Profiler";case Rm:return"StrictMode";case Ff:return"Suspense";case Uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zx:return(t.displayName||"Context")+".Consumer";case $x:return(t._context.displayName||"Context")+".Provider";case Am:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pm:return e=t.displayName||null,e!==null?e:Bf(t.type)||"Memo";case Ar:e=t._payload,t=t._init;try{return Bf(t(e))}catch{}}return null}function tk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bf(e);case 8:return e===Rm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function is(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nk(t){var e=qx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uc(t){t._valueTracker||(t._valueTracker=nk(t))}function Hx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qx(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function iu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $f(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function X_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=is(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gx(t,e){e=e.checked,e!=null&&km(t,"checked",e,!1)}function zf(t,e){Gx(t,e);var n=is(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wf(t,e.type,is(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function J_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wf(t,e,n){(e!=="number"||iu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var da=Array.isArray;function Ui(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+is(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function qf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(da(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:is(n)}}function Kx(t,e){var n=is(e.value),r=is(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ev(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var dc,Yx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(dc=dc||document.createElement("div"),dc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=dc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rk=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(t){rk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wa[e]=wa[t]})});function Xx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wa.hasOwnProperty(t)&&wa[t]?(""+e).trim():e+"px"}function Jx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Xx(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var sk=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gf(t,e){if(e){if(sk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Kf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qf=null;function Dm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yf=null,Bi=null,$i=null;function tv(t){if(t=Nl(t)){if(typeof Yf!="function")throw Error(U(280));var e=t.stateNode;e&&(e=wd(e),Yf(t.stateNode,t.type,e))}}function Zx(t){Bi?$i?$i.push(t):$i=[t]:Bi=t}function eE(){if(Bi){var t=Bi,e=$i;if($i=Bi=null,tv(t),e)for(t=0;t<e.length;t++)tv(e[t])}}function tE(t,e){return t(e)}function nE(){}var Wh=!1;function rE(t,e,n){if(Wh)return t(e,n);Wh=!0;try{return tE(t,e,n)}finally{Wh=!1,(Bi!==null||$i!==null)&&(nE(),eE())}}function $a(t,e){var n=t.stateNode;if(n===null)return null;var r=wd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Xf=!1;if(sr)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){Xf=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{Xf=!1}function ik(t,e,n,r,s,i,o,a,l){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var xa=!1,ou=null,au=!1,Jf=null,ok={onError:function(t){xa=!0,ou=t}};function ak(t,e,n,r,s,i,o,a,l){xa=!1,ou=null,ik.apply(ok,arguments)}function lk(t,e,n,r,s,i,o,a,l){if(ak.apply(this,arguments),xa){if(xa){var d=ou;xa=!1,ou=null}else throw Error(U(198));au||(au=!0,Jf=d)}}function ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nv(t){if(ci(t)!==t)throw Error(U(188))}function ck(t){var e=t.alternate;if(!e){if(e=ci(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return nv(s),t;if(i===r)return nv(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function iE(t){return t=ck(t),t!==null?oE(t):null}function oE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=oE(t);if(e!==null)return e;t=t.sibling}return null}var aE=Gt.unstable_scheduleCallback,rv=Gt.unstable_cancelCallback,uk=Gt.unstable_shouldYield,dk=Gt.unstable_requestPaint,Ue=Gt.unstable_now,hk=Gt.unstable_getCurrentPriorityLevel,Om=Gt.unstable_ImmediatePriority,lE=Gt.unstable_UserBlockingPriority,lu=Gt.unstable_NormalPriority,fk=Gt.unstable_LowPriority,cE=Gt.unstable_IdlePriority,gd=null,Pn=null;function pk(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(gd,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:yk,mk=Math.log,gk=Math.LN2;function yk(t){return t>>>=0,t===0?32:31-(mk(t)/gk|0)|0}var hc=64,fc=4194304;function ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=ha(a):(i&=o,i!==0&&(r=ha(i)))}else o=n&~s,o!==0?r=ha(o):i!==0&&(r=ha(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),s=1<<n,r|=t[n],e&=~s;return r}function _k(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-yn(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=_k(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function Zf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uE(){var t=hc;return hc<<=1,!(hc&4194240)&&(hc=64),t}function qh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Il(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function wk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-yn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function jm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ge=0;function dE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hE,Lm,fE,pE,mE,ep=!1,pc=[],Wr=null,qr=null,Hr=null,za=new Map,Wa=new Map,Dr=[],xk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sv(t,e){switch(t){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(e.pointerId)}}function Zo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Nl(e),e!==null&&Lm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Ek(t,e,n,r,s){switch(e){case"focusin":return Wr=Zo(Wr,t,e,n,r,s),!0;case"dragenter":return qr=Zo(qr,t,e,n,r,s),!0;case"mouseover":return Hr=Zo(Hr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return za.set(i,Zo(za.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Wa.set(i,Zo(Wa.get(i)||null,t,e,n,r,s)),!0}return!1}function gE(t){var e=Fs(t.target);if(e!==null){var n=ci(e);if(n!==null){if(e=n.tag,e===13){if(e=sE(n),e!==null){t.blockedOn=e,mE(t.priority,function(){fE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qf=r,n.target.dispatchEvent(r),Qf=null}else return e=Nl(n),e!==null&&Lm(e),t.blockedOn=n,!1;e.shift()}return!0}function iv(t,e,n){Mc(t)&&n.delete(e)}function Tk(){ep=!1,Wr!==null&&Mc(Wr)&&(Wr=null),qr!==null&&Mc(qr)&&(qr=null),Hr!==null&&Mc(Hr)&&(Hr=null),za.forEach(iv),Wa.forEach(iv)}function ea(t,e){t.blockedOn===e&&(t.blockedOn=null,ep||(ep=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,Tk)))}function qa(t){function e(s){return ea(s,t)}if(0<pc.length){ea(pc[0],t);for(var n=1;n<pc.length;n++){var r=pc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wr!==null&&ea(Wr,t),qr!==null&&ea(qr,t),Hr!==null&&ea(Hr,t),za.forEach(e),Wa.forEach(e),n=0;n<Dr.length;n++)r=Dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dr.length&&(n=Dr[0],n.blockedOn===null);)gE(n),n.blockedOn===null&&Dr.shift()}var zi=mr.ReactCurrentBatchConfig,uu=!0;function Ik(t,e,n,r){var s=ge,i=zi.transition;zi.transition=null;try{ge=1,Mm(t,e,n,r)}finally{ge=s,zi.transition=i}}function Ck(t,e,n,r){var s=ge,i=zi.transition;zi.transition=null;try{ge=4,Mm(t,e,n,r)}finally{ge=s,zi.transition=i}}function Mm(t,e,n,r){if(uu){var s=tp(t,e,n,r);if(s===null)tf(t,e,r,du,n),sv(t,r);else if(Ek(s,t,e,n,r))r.stopPropagation();else if(sv(t,r),e&4&&-1<xk.indexOf(t)){for(;s!==null;){var i=Nl(s);if(i!==null&&hE(i),i=tp(t,e,n,r),i===null&&tf(t,e,r,du,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else tf(t,e,r,null,n)}}var du=null;function tp(t,e,n,r){if(du=null,t=Dm(r),t=Fs(t),t!==null)if(e=ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return du=t,null}function yE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hk()){case Om:return 1;case lE:return 4;case lu:case fk:return 16;case cE:return 536870912;default:return 16}default:return 16}}var Ur=null,Vm=null,Vc=null;function _E(){if(Vc)return Vc;var t,e=Vm,n=e.length,r,s="value"in Ur?Ur.value:Ur.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Vc=s.slice(t,1<r?1-r:void 0)}function Fc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function mc(){return!0}function ov(){return!1}function Qt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mc:ov,this.isPropagationStopped=ov,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mc)},persist:function(){},isPersistent:mc}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fm=Qt(xo),Cl=De({},xo,{view:0,detail:0}),Nk=Qt(Cl),Hh,Gh,ta,yd=De({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Um,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ta&&(ta&&t.type==="mousemove"?(Hh=t.screenX-ta.screenX,Gh=t.screenY-ta.screenY):Gh=Hh=0,ta=t),Hh)},movementY:function(t){return"movementY"in t?t.movementY:Gh}}),av=Qt(yd),Sk=De({},yd,{dataTransfer:0}),bk=Qt(Sk),kk=De({},Cl,{relatedTarget:0}),Kh=Qt(kk),Rk=De({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),Ak=Qt(Rk),Pk=De({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dk=Qt(Pk),Ok=De({},xo,{data:0}),lv=Qt(Ok),jk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Mk[t])?!!e[t]:!1}function Um(){return Vk}var Fk=De({},Cl,{key:function(t){if(t.key){var e=jk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Um,charCode:function(t){return t.type==="keypress"?Fc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Uk=Qt(Fk),Bk=De({},yd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cv=Qt(Bk),$k=De({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Um}),zk=Qt($k),Wk=De({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),qk=Qt(Wk),Hk=De({},yd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gk=Qt(Hk),Kk=[9,13,27,32],Bm=sr&&"CompositionEvent"in window,Ea=null;sr&&"documentMode"in document&&(Ea=document.documentMode);var Qk=sr&&"TextEvent"in window&&!Ea,vE=sr&&(!Bm||Ea&&8<Ea&&11>=Ea),uv=" ",dv=!1;function wE(t,e){switch(t){case"keyup":return Kk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Si=!1;function Yk(t,e){switch(t){case"compositionend":return xE(e);case"keypress":return e.which!==32?null:(dv=!0,uv);case"textInput":return t=e.data,t===uv&&dv?null:t;default:return null}}function Xk(t,e){if(Si)return t==="compositionend"||!Bm&&wE(t,e)?(t=_E(),Vc=Vm=Ur=null,Si=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vE&&e.locale!=="ko"?null:e.data;default:return null}}var Jk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Jk[t.type]:e==="textarea"}function EE(t,e,n,r){Zx(r),e=hu(e,"onChange"),0<e.length&&(n=new Fm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ta=null,Ha=null;function Zk(t){DE(t,0)}function _d(t){var e=Ri(t);if(Hx(e))return t}function e1(t,e){if(t==="change")return e}var TE=!1;if(sr){var Qh;if(sr){var Yh="oninput"in document;if(!Yh){var fv=document.createElement("div");fv.setAttribute("oninput","return;"),Yh=typeof fv.oninput=="function"}Qh=Yh}else Qh=!1;TE=Qh&&(!document.documentMode||9<document.documentMode)}function pv(){Ta&&(Ta.detachEvent("onpropertychange",IE),Ha=Ta=null)}function IE(t){if(t.propertyName==="value"&&_d(Ha)){var e=[];EE(e,Ha,t,Dm(t)),rE(Zk,e)}}function t1(t,e,n){t==="focusin"?(pv(),Ta=e,Ha=n,Ta.attachEvent("onpropertychange",IE)):t==="focusout"&&pv()}function n1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _d(Ha)}function r1(t,e){if(t==="click")return _d(e)}function s1(t,e){if(t==="input"||t==="change")return _d(e)}function i1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var En=typeof Object.is=="function"?Object.is:i1;function Ga(t,e){if(En(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Mf.call(e,s)||!En(t[s],e[s]))return!1}return!0}function mv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gv(t,e){var n=mv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mv(n)}}function CE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?CE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function NE(){for(var t=window,e=iu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=iu(t.document)}return e}function $m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function o1(t){var e=NE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&CE(n.ownerDocument.documentElement,n)){if(r!==null&&$m(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=gv(n,i);var o=gv(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var a1=sr&&"documentMode"in document&&11>=document.documentMode,bi=null,np=null,Ia=null,rp=!1;function yv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rp||bi==null||bi!==iu(r)||(r=bi,"selectionStart"in r&&$m(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ia&&Ga(Ia,r)||(Ia=r,r=hu(np,"onSelect"),0<r.length&&(e=new Fm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bi)))}function gc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ki={animationend:gc("Animation","AnimationEnd"),animationiteration:gc("Animation","AnimationIteration"),animationstart:gc("Animation","AnimationStart"),transitionend:gc("Transition","TransitionEnd")},Xh={},SE={};sr&&(SE=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function vd(t){if(Xh[t])return Xh[t];if(!ki[t])return t;var e=ki[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in SE)return Xh[t]=e[n];return t}var bE=vd("animationend"),kE=vd("animationiteration"),RE=vd("animationstart"),AE=vd("transitionend"),PE=new Map,_v="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _s(t,e){PE.set(t,e),li(e,[t])}for(var Jh=0;Jh<_v.length;Jh++){var Zh=_v[Jh],l1=Zh.toLowerCase(),c1=Zh[0].toUpperCase()+Zh.slice(1);_s(l1,"on"+c1)}_s(bE,"onAnimationEnd");_s(kE,"onAnimationIteration");_s(RE,"onAnimationStart");_s("dblclick","onDoubleClick");_s("focusin","onFocus");_s("focusout","onBlur");_s(AE,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));li("onBeforeInput",["compositionend","keypress","textInput","paste"]);li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u1=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function vv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,lk(r,e,void 0,t),t.currentTarget=null}function DE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,d=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;vv(s,a,d),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,d=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;vv(s,a,d),i=l}}}if(au)throw t=Jf,au=!1,Jf=null,t}function Ce(t,e){var n=e[lp];n===void 0&&(n=e[lp]=new Set);var r=t+"__bubble";n.has(r)||(OE(e,t,2,!1),n.add(r))}function ef(t,e,n){var r=0;e&&(r|=4),OE(n,t,r,e)}var yc="_reactListening"+Math.random().toString(36).slice(2);function Ka(t){if(!t[yc]){t[yc]=!0,Bx.forEach(function(n){n!=="selectionchange"&&(u1.has(n)||ef(n,!1,t),ef(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yc]||(e[yc]=!0,ef("selectionchange",!1,e))}}function OE(t,e,n,r){switch(yE(e)){case 1:var s=Ik;break;case 4:s=Ck;break;default:s=Mm}n=s.bind(null,e,n,t),s=void 0,!Xf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function tf(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=Fs(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}rE(function(){var d=i,h=Dm(n),f=[];e:{var m=PE.get(t);if(m!==void 0){var _=Fm,T=t;switch(t){case"keypress":if(Fc(n)===0)break e;case"keydown":case"keyup":_=Uk;break;case"focusin":T="focus",_=Kh;break;case"focusout":T="blur",_=Kh;break;case"beforeblur":case"afterblur":_=Kh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=av;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=bk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=zk;break;case bE:case kE:case RE:_=Ak;break;case AE:_=qk;break;case"scroll":_=Nk;break;case"wheel":_=Gk;break;case"copy":case"cut":case"paste":_=Dk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=cv}var k=(e&4)!==0,R=!k&&t==="scroll",N=k?m!==null?m+"Capture":null:m;k=[];for(var w=d,C;w!==null;){C=w;var O=C.stateNode;if(C.tag===5&&O!==null&&(C=O,N!==null&&(O=$a(w,N),O!=null&&k.push(Qa(w,O,C)))),R)break;w=w.return}0<k.length&&(m=new _(m,T,null,n,h),f.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Qf&&(T=n.relatedTarget||n.fromElement)&&(Fs(T)||T[ir]))break e;if((_||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=d,T=T?Fs(T):null,T!==null&&(R=ci(T),T!==R||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=d),_!==T)){if(k=av,O="onMouseLeave",N="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(k=cv,O="onPointerLeave",N="onPointerEnter",w="pointer"),R=_==null?m:Ri(_),C=T==null?m:Ri(T),m=new k(O,w+"leave",_,n,h),m.target=R,m.relatedTarget=C,O=null,Fs(h)===d&&(k=new k(N,w+"enter",T,n,h),k.target=C,k.relatedTarget=R,O=k),R=O,_&&T)t:{for(k=_,N=T,w=0,C=k;C;C=vi(C))w++;for(C=0,O=N;O;O=vi(O))C++;for(;0<w-C;)k=vi(k),w--;for(;0<C-w;)N=vi(N),C--;for(;w--;){if(k===N||N!==null&&k===N.alternate)break t;k=vi(k),N=vi(N)}k=null}else k=null;_!==null&&wv(f,m,_,k,!1),T!==null&&R!==null&&wv(f,R,T,k,!0)}}e:{if(m=d?Ri(d):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var M=e1;else if(hv(m))if(TE)M=s1;else{M=n1;var L=t1}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=r1);if(M&&(M=M(t,d))){EE(f,M,n,h);break e}L&&L(t,m,d),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&Wf(m,"number",m.value)}switch(L=d?Ri(d):window,t){case"focusin":(hv(L)||L.contentEditable==="true")&&(bi=L,np=d,Ia=null);break;case"focusout":Ia=np=bi=null;break;case"mousedown":rp=!0;break;case"contextmenu":case"mouseup":case"dragend":rp=!1,yv(f,n,h);break;case"selectionchange":if(a1)break;case"keydown":case"keyup":yv(f,n,h)}var x;if(Bm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Si?wE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(vE&&n.locale!=="ko"&&(Si||y!=="onCompositionStart"?y==="onCompositionEnd"&&Si&&(x=_E()):(Ur=h,Vm="value"in Ur?Ur.value:Ur.textContent,Si=!0)),L=hu(d,y),0<L.length&&(y=new lv(y,t,null,n,h),f.push({event:y,listeners:L}),x?y.data=x:(x=xE(n),x!==null&&(y.data=x)))),(x=Qk?Yk(t,n):Xk(t,n))&&(d=hu(d,"onBeforeInput"),0<d.length&&(h=new lv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:d}),h.data=x))}DE(f,e)})}function Qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=$a(t,n),i!=null&&r.unshift(Qa(t,i,s)),i=$a(t,e),i!=null&&r.push(Qa(t,i,s))),t=t.return}return r}function vi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wv(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,d=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&d!==null&&(a=d,s?(l=$a(n,i),l!=null&&o.unshift(Qa(n,l,a))):s||(l=$a(n,i),l!=null&&o.push(Qa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var d1=/\r\n?/g,h1=/\u0000|\uFFFD/g;function xv(t){return(typeof t=="string"?t:""+t).replace(d1,`
`).replace(h1,"")}function _c(t,e,n){if(e=xv(e),xv(t)!==e&&n)throw Error(U(425))}function fu(){}var sp=null,ip=null;function op(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ap=typeof setTimeout=="function"?setTimeout:void 0,f1=typeof clearTimeout=="function"?clearTimeout:void 0,Ev=typeof Promise=="function"?Promise:void 0,p1=typeof queueMicrotask=="function"?queueMicrotask:typeof Ev<"u"?function(t){return Ev.resolve(null).then(t).catch(m1)}:ap;function m1(t){setTimeout(function(){throw t})}function nf(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),qa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);qa(e)}function Gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),Rn="__reactFiber$"+Eo,Ya="__reactProps$"+Eo,ir="__reactContainer$"+Eo,lp="__reactEvents$"+Eo,g1="__reactListeners$"+Eo,y1="__reactHandles$"+Eo;function Fs(t){var e=t[Rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ir]||n[Rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tv(t);t!==null;){if(n=t[Rn])return n;t=Tv(t)}return e}t=n,n=t.parentNode}return null}function Nl(t){return t=t[Rn]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function wd(t){return t[Ya]||null}var cp=[],Ai=-1;function vs(t){return{current:t}}function Se(t){0>Ai||(t.current=cp[Ai],cp[Ai]=null,Ai--)}function xe(t,e){Ai++,cp[Ai]=t.current,t.current=e}var os={},vt=vs(os),jt=vs(!1),Ks=os;function to(t,e){var n=t.type.contextTypes;if(!n)return os;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Lt(t){return t=t.childContextTypes,t!=null}function pu(){Se(jt),Se(vt)}function Iv(t,e,n){if(vt.current!==os)throw Error(U(168));xe(vt,e),xe(jt,n)}function jE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,tk(t)||"Unknown",s));return De({},n,r)}function mu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||os,Ks=vt.current,xe(vt,t),xe(jt,jt.current),!0}function Cv(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=jE(t,e,Ks),r.__reactInternalMemoizedMergedChildContext=t,Se(jt),Se(vt),xe(vt,t)):Se(jt),xe(jt,n)}var Kn=null,xd=!1,rf=!1;function LE(t){Kn===null?Kn=[t]:Kn.push(t)}function _1(t){xd=!0,LE(t)}function ws(){if(!rf&&Kn!==null){rf=!0;var t=0,e=ge;try{var n=Kn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kn=null,xd=!1}catch(s){throw Kn!==null&&(Kn=Kn.slice(t+1)),aE(Om,ws),s}finally{ge=e,rf=!1}}return null}var Pi=[],Di=0,gu=null,yu=0,Xt=[],Jt=0,Qs=null,Qn=1,Yn="";function js(t,e){Pi[Di++]=yu,Pi[Di++]=gu,gu=t,yu=e}function ME(t,e,n){Xt[Jt++]=Qn,Xt[Jt++]=Yn,Xt[Jt++]=Qs,Qs=t;var r=Qn;t=Yn;var s=32-yn(r)-1;r&=~(1<<s),n+=1;var i=32-yn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Qn=1<<32-yn(e)+s|n<<s|r,Yn=i+t}else Qn=1<<i|n<<s|r,Yn=t}function zm(t){t.return!==null&&(js(t,1),ME(t,1,0))}function Wm(t){for(;t===gu;)gu=Pi[--Di],Pi[Di]=null,yu=Pi[--Di],Pi[Di]=null;for(;t===Qs;)Qs=Xt[--Jt],Xt[Jt]=null,Yn=Xt[--Jt],Xt[Jt]=null,Qn=Xt[--Jt],Xt[Jt]=null}var Wt=null,$t=null,ke=!1,dn=null;function VE(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,$t=Gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,$t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qs!==null?{id:Qn,overflow:Yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,$t=null,!0):!1;default:return!1}}function up(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dp(t){if(ke){var e=$t;if(e){var n=e;if(!Nv(t,e)){if(up(t))throw Error(U(418));e=Gr(n.nextSibling);var r=Wt;e&&Nv(t,e)?VE(r,n):(t.flags=t.flags&-4097|2,ke=!1,Wt=t)}}else{if(up(t))throw Error(U(418));t.flags=t.flags&-4097|2,ke=!1,Wt=t}}}function Sv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function vc(t){if(t!==Wt)return!1;if(!ke)return Sv(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!op(t.type,t.memoizedProps)),e&&(e=$t)){if(up(t))throw FE(),Error(U(418));for(;e;)VE(t,e),e=Gr(e.nextSibling)}if(Sv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$t=Gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$t=null}}else $t=Wt?Gr(t.stateNode.nextSibling):null;return!0}function FE(){for(var t=$t;t;)t=Gr(t.nextSibling)}function no(){$t=Wt=null,ke=!1}function qm(t){dn===null?dn=[t]:dn.push(t)}var v1=mr.ReactCurrentBatchConfig;function na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function wc(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bv(t){var e=t._init;return e(t._payload)}function UE(t){function e(N,w){if(t){var C=N.deletions;C===null?(N.deletions=[w],N.flags|=16):C.push(w)}}function n(N,w){if(!t)return null;for(;w!==null;)e(N,w),w=w.sibling;return null}function r(N,w){for(N=new Map;w!==null;)w.key!==null?N.set(w.key,w):N.set(w.index,w),w=w.sibling;return N}function s(N,w){return N=Xr(N,w),N.index=0,N.sibling=null,N}function i(N,w,C){return N.index=C,t?(C=N.alternate,C!==null?(C=C.index,C<w?(N.flags|=2,w):C):(N.flags|=2,w)):(N.flags|=1048576,w)}function o(N){return t&&N.alternate===null&&(N.flags|=2),N}function a(N,w,C,O){return w===null||w.tag!==6?(w=df(C,N.mode,O),w.return=N,w):(w=s(w,C),w.return=N,w)}function l(N,w,C,O){var M=C.type;return M===Ni?h(N,w,C.props.children,O,C.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ar&&bv(M)===w.type)?(O=s(w,C.props),O.ref=na(N,w,C),O.return=N,O):(O=Hc(C.type,C.key,C.props,null,N.mode,O),O.ref=na(N,w,C),O.return=N,O)}function d(N,w,C,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==C.containerInfo||w.stateNode.implementation!==C.implementation?(w=hf(C,N.mode,O),w.return=N,w):(w=s(w,C.children||[]),w.return=N,w)}function h(N,w,C,O,M){return w===null||w.tag!==7?(w=qs(C,N.mode,O,M),w.return=N,w):(w=s(w,C),w.return=N,w)}function f(N,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return w=df(""+w,N.mode,C),w.return=N,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case cc:return C=Hc(w.type,w.key,w.props,null,N.mode,C),C.ref=na(N,null,w),C.return=N,C;case Ci:return w=hf(w,N.mode,C),w.return=N,w;case Ar:var O=w._init;return f(N,O(w._payload),C)}if(da(w)||Xo(w))return w=qs(w,N.mode,C,null),w.return=N,w;wc(N,w)}return null}function m(N,w,C,O){var M=w!==null?w.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return M!==null?null:a(N,w,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case cc:return C.key===M?l(N,w,C,O):null;case Ci:return C.key===M?d(N,w,C,O):null;case Ar:return M=C._init,m(N,w,M(C._payload),O)}if(da(C)||Xo(C))return M!==null?null:h(N,w,C,O,null);wc(N,C)}return null}function _(N,w,C,O,M){if(typeof O=="string"&&O!==""||typeof O=="number")return N=N.get(C)||null,a(w,N,""+O,M);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case cc:return N=N.get(O.key===null?C:O.key)||null,l(w,N,O,M);case Ci:return N=N.get(O.key===null?C:O.key)||null,d(w,N,O,M);case Ar:var L=O._init;return _(N,w,C,L(O._payload),M)}if(da(O)||Xo(O))return N=N.get(C)||null,h(w,N,O,M,null);wc(w,O)}return null}function T(N,w,C,O){for(var M=null,L=null,x=w,y=w=0,E=null;x!==null&&y<C.length;y++){x.index>y?(E=x,x=null):E=x.sibling;var S=m(N,x,C[y],O);if(S===null){x===null&&(x=E);break}t&&x&&S.alternate===null&&e(N,x),w=i(S,w,y),L===null?M=S:L.sibling=S,L=S,x=E}if(y===C.length)return n(N,x),ke&&js(N,y),M;if(x===null){for(;y<C.length;y++)x=f(N,C[y],O),x!==null&&(w=i(x,w,y),L===null?M=x:L.sibling=x,L=x);return ke&&js(N,y),M}for(x=r(N,x);y<C.length;y++)E=_(x,N,y,C[y],O),E!==null&&(t&&E.alternate!==null&&x.delete(E.key===null?y:E.key),w=i(E,w,y),L===null?M=E:L.sibling=E,L=E);return t&&x.forEach(function(b){return e(N,b)}),ke&&js(N,y),M}function k(N,w,C,O){var M=Xo(C);if(typeof M!="function")throw Error(U(150));if(C=M.call(C),C==null)throw Error(U(151));for(var L=M=null,x=w,y=w=0,E=null,S=C.next();x!==null&&!S.done;y++,S=C.next()){x.index>y?(E=x,x=null):E=x.sibling;var b=m(N,x,S.value,O);if(b===null){x===null&&(x=E);break}t&&x&&b.alternate===null&&e(N,x),w=i(b,w,y),L===null?M=b:L.sibling=b,L=b,x=E}if(S.done)return n(N,x),ke&&js(N,y),M;if(x===null){for(;!S.done;y++,S=C.next())S=f(N,S.value,O),S!==null&&(w=i(S,w,y),L===null?M=S:L.sibling=S,L=S);return ke&&js(N,y),M}for(x=r(N,x);!S.done;y++,S=C.next())S=_(x,N,y,S.value,O),S!==null&&(t&&S.alternate!==null&&x.delete(S.key===null?y:S.key),w=i(S,w,y),L===null?M=S:L.sibling=S,L=S);return t&&x.forEach(function(P){return e(N,P)}),ke&&js(N,y),M}function R(N,w,C,O){if(typeof C=="object"&&C!==null&&C.type===Ni&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case cc:e:{for(var M=C.key,L=w;L!==null;){if(L.key===M){if(M=C.type,M===Ni){if(L.tag===7){n(N,L.sibling),w=s(L,C.props.children),w.return=N,N=w;break e}}else if(L.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ar&&bv(M)===L.type){n(N,L.sibling),w=s(L,C.props),w.ref=na(N,L,C),w.return=N,N=w;break e}n(N,L);break}else e(N,L);L=L.sibling}C.type===Ni?(w=qs(C.props.children,N.mode,O,C.key),w.return=N,N=w):(O=Hc(C.type,C.key,C.props,null,N.mode,O),O.ref=na(N,w,C),O.return=N,N=O)}return o(N);case Ci:e:{for(L=C.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===C.containerInfo&&w.stateNode.implementation===C.implementation){n(N,w.sibling),w=s(w,C.children||[]),w.return=N,N=w;break e}else{n(N,w);break}else e(N,w);w=w.sibling}w=hf(C,N.mode,O),w.return=N,N=w}return o(N);case Ar:return L=C._init,R(N,w,L(C._payload),O)}if(da(C))return T(N,w,C,O);if(Xo(C))return k(N,w,C,O);wc(N,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,w!==null&&w.tag===6?(n(N,w.sibling),w=s(w,C),w.return=N,N=w):(n(N,w),w=df(C,N.mode,O),w.return=N,N=w),o(N)):n(N,w)}return R}var ro=UE(!0),BE=UE(!1),_u=vs(null),vu=null,Oi=null,Hm=null;function Gm(){Hm=Oi=vu=null}function Km(t){var e=_u.current;Se(_u),t._currentValue=e}function hp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Wi(t,e){vu=t,Hm=Oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pt=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(Hm!==t)if(t={context:t,memoizedValue:e,next:null},Oi===null){if(vu===null)throw Error(U(308));Oi=t,vu.dependencies={lanes:0,firstContext:t}}else Oi=Oi.next=t;return e}var Us=null;function Qm(t){Us===null?Us=[t]:Us.push(t)}function $E(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Qm(e)):(n.next=s.next,s.next=n),e.interleaved=n,or(t,r)}function or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pr=!1;function Ym(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,or(t,n)}return s=r.interleaved,s===null?(e.next=e,Qm(r)):(e.next=s.next,s.next=e),r.interleaved=e,or(t,n)}function Uc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jm(t,n)}}function kv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wu(t,e,n,r){var s=t.updateQueue;Pr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,d=l.next;l.next=null,o===null?i=d:o.next=d,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=l))}if(i!==null){var f=s.baseState;o=0,h=d=l=null,a=i;do{var m=a.lane,_=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,k=a;switch(m=e,_=n,k.tag){case 1:if(T=k.payload,typeof T=="function"){f=T.call(_,f,m);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=k.payload,m=typeof T=="function"?T.call(_,f,m):T,m==null)break e;f=De({},f,m);break e;case 2:Pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=_,l=f):h=h.next=_,o|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(h===null&&(l=f),s.baseState=l,s.firstBaseUpdate=d,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Xs|=o,t.lanes=o,t.memoizedState=f}}function Rv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var Sl={},Dn=vs(Sl),Xa=vs(Sl),Ja=vs(Sl);function Bs(t){if(t===Sl)throw Error(U(174));return t}function Xm(t,e){switch(xe(Ja,e),xe(Xa,t),xe(Dn,Sl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hf(e,t)}Se(Dn),xe(Dn,e)}function so(){Se(Dn),Se(Xa),Se(Ja)}function WE(t){Bs(Ja.current);var e=Bs(Dn.current),n=Hf(e,t.type);e!==n&&(xe(Xa,t),xe(Dn,n))}function Jm(t){Xa.current===t&&(Se(Dn),Se(Xa))}var Re=vs(0);function xu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sf=[];function Zm(){for(var t=0;t<sf.length;t++)sf[t]._workInProgressVersionPrimary=null;sf.length=0}var Bc=mr.ReactCurrentDispatcher,of=mr.ReactCurrentBatchConfig,Ys=0,Ae=null,Ge=null,et=null,Eu=!1,Ca=!1,Za=0,w1=0;function dt(){throw Error(U(321))}function eg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!En(t[n],e[n]))return!1;return!0}function tg(t,e,n,r,s,i){if(Ys=i,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bc.current=t===null||t.memoizedState===null?I1:C1,t=n(r,s),Ca){i=0;do{if(Ca=!1,Za=0,25<=i)throw Error(U(301));i+=1,et=Ge=null,e.updateQueue=null,Bc.current=N1,t=n(r,s)}while(Ca)}if(Bc.current=Tu,e=Ge!==null&&Ge.next!==null,Ys=0,et=Ge=Ae=null,Eu=!1,e)throw Error(U(300));return t}function ng(){var t=Za!==0;return Za=0,t}function bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ae.memoizedState=et=t:et=et.next=t,et}function sn(){if(Ge===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=et===null?Ae.memoizedState:et.next;if(e!==null)et=e,Ge=t;else{if(t===null)throw Error(U(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},et===null?Ae.memoizedState=et=t:et=et.next=t}return et}function el(t,e){return typeof e=="function"?e(t):e}function af(t){var e=sn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ge,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,d=i;do{var h=d.lane;if((Ys&h)===h)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var f={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Ae.lanes|=h,Xs|=h}d=d.next}while(d!==null&&d!==i);l===null?o=r:l.next=a,En(r,e.memoizedState)||(Pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ae.lanes|=i,Xs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lf(t){var e=sn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);En(i,e.memoizedState)||(Pt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function qE(){}function HE(t,e){var n=Ae,r=sn(),s=e(),i=!En(r.memoizedState,s);if(i&&(r.memoizedState=s,Pt=!0),r=r.queue,rg(QE.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,tl(9,KE.bind(null,n,r,s,e),void 0,null),rt===null)throw Error(U(349));Ys&30||GE(n,e,s)}return s}function GE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function KE(t,e,n,r){e.value=n,e.getSnapshot=r,YE(e)&&XE(t)}function QE(t,e,n){return n(function(){YE(e)&&XE(t)})}function YE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!En(t,n)}catch{return!0}}function XE(t){var e=or(t,1);e!==null&&_n(e,t,1,-1)}function Av(t){var e=bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:t},e.queue=t,t=t.dispatch=T1.bind(null,Ae,t),[e.memoizedState,t]}function tl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function JE(){return sn().memoizedState}function $c(t,e,n,r){var s=bn();Ae.flags|=t,s.memoizedState=tl(1|e,n,void 0,r===void 0?null:r)}function Ed(t,e,n,r){var s=sn();r=r===void 0?null:r;var i=void 0;if(Ge!==null){var o=Ge.memoizedState;if(i=o.destroy,r!==null&&eg(r,o.deps)){s.memoizedState=tl(e,n,i,r);return}}Ae.flags|=t,s.memoizedState=tl(1|e,n,i,r)}function Pv(t,e){return $c(8390656,8,t,e)}function rg(t,e){return Ed(2048,8,t,e)}function ZE(t,e){return Ed(4,2,t,e)}function eT(t,e){return Ed(4,4,t,e)}function tT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nT(t,e,n){return n=n!=null?n.concat([t]):null,Ed(4,4,tT.bind(null,e,t),n)}function sg(){}function rT(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&eg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sT(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&eg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function iT(t,e,n){return Ys&21?(En(n,e)||(n=uE(),Ae.lanes|=n,Xs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pt=!0),t.memoizedState=n)}function x1(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=of.transition;of.transition={};try{t(!1),e()}finally{ge=n,of.transition=r}}function oT(){return sn().memoizedState}function E1(t,e,n){var r=Yr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},aT(t))lT(e,n);else if(n=$E(t,e,n,r),n!==null){var s=Ct();_n(n,t,r,s),cT(n,e,r)}}function T1(t,e,n){var r=Yr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(aT(t))lT(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,En(a,o)){var l=e.interleaved;l===null?(s.next=s,Qm(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=$E(t,e,s,r),n!==null&&(s=Ct(),_n(n,t,r,s),cT(n,e,r))}}function aT(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function lT(t,e){Ca=Eu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jm(t,n)}}var Tu={readContext:rn,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},I1={readContext:rn,useCallback:function(t,e){return bn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:Pv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$c(4194308,4,tT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $c(4194308,4,t,e)},useInsertionEffect:function(t,e){return $c(4,2,t,e)},useMemo:function(t,e){var n=bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=E1.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=bn();return t={current:t},e.memoizedState=t},useState:Av,useDebugValue:sg,useDeferredValue:function(t){return bn().memoizedState=t},useTransition:function(){var t=Av(!1),e=t[0];return t=x1.bind(null,t[1]),bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,s=bn();if(ke){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),rt===null)throw Error(U(349));Ys&30||GE(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Pv(QE.bind(null,r,i,t),[t]),r.flags|=2048,tl(9,KE.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=bn(),e=rt.identifierPrefix;if(ke){var n=Yn,r=Qn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Za++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=w1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},C1={readContext:rn,useCallback:rT,useContext:rn,useEffect:rg,useImperativeHandle:nT,useInsertionEffect:ZE,useLayoutEffect:eT,useMemo:sT,useReducer:af,useRef:JE,useState:function(){return af(el)},useDebugValue:sg,useDeferredValue:function(t){var e=sn();return iT(e,Ge.memoizedState,t)},useTransition:function(){var t=af(el)[0],e=sn().memoizedState;return[t,e]},useMutableSource:qE,useSyncExternalStore:HE,useId:oT,unstable_isNewReconciler:!1},N1={readContext:rn,useCallback:rT,useContext:rn,useEffect:rg,useImperativeHandle:nT,useInsertionEffect:ZE,useLayoutEffect:eT,useMemo:sT,useReducer:lf,useRef:JE,useState:function(){return lf(el)},useDebugValue:sg,useDeferredValue:function(t){var e=sn();return Ge===null?e.memoizedState=t:iT(e,Ge.memoizedState,t)},useTransition:function(){var t=lf(el)[0],e=sn().memoizedState;return[t,e]},useMutableSource:qE,useSyncExternalStore:HE,useId:oT,unstable_isNewReconciler:!1};function cn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Td={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ct(),s=Yr(t),i=er(r,s);i.payload=e,n!=null&&(i.callback=n),e=Kr(t,i,s),e!==null&&(_n(e,t,s,r),Uc(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ct(),s=Yr(t),i=er(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Kr(t,i,s),e!==null&&(_n(e,t,s,r),Uc(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ct(),r=Yr(t),s=er(n,r);s.tag=2,e!=null&&(s.callback=e),e=Kr(t,s,r),e!==null&&(_n(e,t,r,n),Uc(e,t,r))}};function Dv(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Ga(n,r)||!Ga(s,i):!0}function uT(t,e,n){var r=!1,s=os,i=e.contextType;return typeof i=="object"&&i!==null?i=rn(i):(s=Lt(e)?Ks:vt.current,r=e.contextTypes,i=(r=r!=null)?to(t,s):os),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Td,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Ov(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Td.enqueueReplaceState(e,e.state,null)}function pp(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Ym(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=rn(i):(i=Lt(e)?Ks:vt.current,s.context=to(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(fp(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Td.enqueueReplaceState(s,s.state,null),wu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function io(t,e){try{var n="",r=e;do n+=ek(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function cf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var S1=typeof WeakMap=="function"?WeakMap:Map;function dT(t,e,n){n=er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Cu||(Cu=!0,Cp=r),mp(t,e)},n}function hT(t,e,n){n=er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){mp(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){mp(t,e),typeof r!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new S1;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=B1.bind(null,t,e,n),e.then(t,t))}function Lv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mv(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=er(-1,1),e.tag=2,Kr(n,e,1))),n.lanes|=1),t)}var b1=mr.ReactCurrentOwner,Pt=!1;function Tt(t,e,n,r){e.child=t===null?BE(e,null,n,r):ro(e,t.child,n,r)}function Vv(t,e,n,r,s){n=n.render;var i=e.ref;return Wi(e,s),r=tg(t,e,n,r,i,s),n=ng(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ar(t,e,s)):(ke&&n&&zm(e),e.flags|=1,Tt(t,e,r,s),e.child)}function Fv(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!hg(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,fT(t,e,i,r,s)):(t=Hc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ga,n(o,r)&&t.ref===e.ref)return ar(t,e,s)}return e.flags|=1,t=Xr(i,r),t.ref=e.ref,t.return=e,e.child=t}function fT(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Ga(i,r)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Pt=!0);else return e.lanes=t.lanes,ar(t,e,s)}return gp(t,e,n,r,s)}function pT(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(Li,Bt),Bt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xe(Li,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,xe(Li,Bt),Bt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,xe(Li,Bt),Bt|=r;return Tt(t,e,s,n),e.child}function mT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gp(t,e,n,r,s){var i=Lt(n)?Ks:vt.current;return i=to(e,i),Wi(e,s),n=tg(t,e,n,r,i,s),r=ng(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ar(t,e,s)):(ke&&r&&zm(e),e.flags|=1,Tt(t,e,n,s),e.child)}function Uv(t,e,n,r,s){if(Lt(n)){var i=!0;mu(e)}else i=!1;if(Wi(e,s),e.stateNode===null)zc(t,e),uT(e,n,r),pp(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=rn(d):(d=Lt(n)?Ks:vt.current,d=to(e,d));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==d)&&Ov(e,o,r,d),Pr=!1;var m=e.memoizedState;o.state=m,wu(e,r,o,s),l=e.memoizedState,a!==r||m!==l||jt.current||Pr?(typeof h=="function"&&(fp(e,n,h,r),l=e.memoizedState),(a=Pr||Dv(e,n,a,r,m,l,d))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,zE(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:cn(e.type,a),o.props=d,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=rn(l):(l=Lt(n)?Ks:vt.current,l=to(e,l));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Ov(e,o,r,l),Pr=!1,m=e.memoizedState,o.state=m,wu(e,r,o,s);var T=e.memoizedState;a!==f||m!==T||jt.current||Pr?(typeof _=="function"&&(fp(e,n,_,r),T=e.memoizedState),(d=Pr||Dv(e,n,d,r,m,T,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=l,r=d):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return yp(t,e,n,r,i,s)}function yp(t,e,n,r,s,i){mT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Cv(e,n,!1),ar(t,e,i);r=e.stateNode,b1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,i),e.child=ro(e,null,a,i)):Tt(t,e,a,i),e.memoizedState=r.state,s&&Cv(e,n,!0),e.child}function gT(t){var e=t.stateNode;e.pendingContext?Iv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Iv(t,e.context,!1),Xm(t,e.containerInfo)}function Bv(t,e,n,r,s){return no(),qm(s),e.flags|=256,Tt(t,e,n,r),e.child}var _p={dehydrated:null,treeContext:null,retryLane:0};function vp(t){return{baseLanes:t,cachePool:null,transitions:null}}function yT(t,e,n){var r=e.pendingProps,s=Re.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),xe(Re,s&1),t===null)return dp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Nd(o,r,0,null),t=qs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=vp(n),e.memoizedState=_p,t):ig(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return k1(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Xr(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Xr(a,i):(i=qs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?vp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=_p,r}return i=t.child,t=i.sibling,r=Xr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ig(t,e){return e=Nd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xc(t,e,n,r){return r!==null&&qm(r),ro(e,t.child,null,n),t=ig(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function k1(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=cf(Error(U(422))),xc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Nd({mode:"visible",children:r.children},s,0,null),i=qs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=vp(o),e.memoizedState=_p,i);if(!(e.mode&1))return xc(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(U(419)),r=cf(i,r,void 0),xc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Pt||a){if(r=rt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,or(t,s),_n(r,t,s,-1))}return dg(),r=cf(Error(U(421))),xc(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=$1.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,$t=Gr(s.nextSibling),Wt=e,ke=!0,dn=null,t!==null&&(Xt[Jt++]=Qn,Xt[Jt++]=Yn,Xt[Jt++]=Qs,Qn=t.id,Yn=t.overflow,Qs=e),e=ig(e,r.children),e.flags|=4096,e)}function $v(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hp(t.return,e,n)}function uf(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function _T(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Tt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$v(t,n,e);else if(t.tag===19)$v(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(xe(Re,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&xu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),uf(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&xu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}uf(e,!0,n,null,i);break;case"together":uf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function R1(t,e,n){switch(e.tag){case 3:gT(e),no();break;case 5:WE(e);break;case 1:Lt(e.type)&&mu(e);break;case 4:Xm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;xe(_u,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(xe(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?yT(t,e,n):(xe(Re,Re.current&1),t=ar(t,e,n),t!==null?t.sibling:null);xe(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _T(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),xe(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,pT(t,e,n)}return ar(t,e,n)}var vT,wp,wT,xT;vT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wp=function(){};wT=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Bs(Dn.current);var i=null;switch(n){case"input":s=$f(t,s),r=$f(t,r),i=[];break;case"select":s=De({},s,{value:void 0}),r=De({},r,{value:void 0}),i=[];break;case"textarea":s=qf(t,s),r=qf(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fu)}Gf(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var a=s[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ua.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var l=r[d];if(a=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&l!==a&&(l!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&Ce("scroll",t),i||a===l||(i=[])):(i=i||[]).push(d,l))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};xT=function(t,e,n,r){n!==r&&(e.flags|=4)};function ra(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function A1(t,e,n){var r=e.pendingProps;switch(Wm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return Lt(e.type)&&pu(),ht(e),null;case 3:return r=e.stateNode,so(),Se(jt),Se(vt),Zm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dn!==null&&(bp(dn),dn=null))),wp(t,e),ht(e),null;case 5:Jm(e);var s=Bs(Ja.current);if(n=e.type,t!==null&&e.stateNode!=null)wT(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return ht(e),null}if(t=Bs(Dn.current),vc(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Rn]=e,r[Ya]=i,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(s=0;s<fa.length;s++)Ce(fa[s],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":X_(r,i),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ce("invalid",r);break;case"textarea":Z_(r,i),Ce("invalid",r)}Gf(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&_c(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&_c(r.textContent,a,t),s=["children",""+a]):Ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":uc(r),J_(r,i,!0);break;case"textarea":uc(r),ev(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=fu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rn]=e,t[Ya]=r,vT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Kf(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),s=r;break;case"iframe":case"object":case"embed":Ce("load",t),s=r;break;case"video":case"audio":for(s=0;s<fa.length;s++)Ce(fa[s],t);s=r;break;case"source":Ce("error",t),s=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),s=r;break;case"details":Ce("toggle",t),s=r;break;case"input":X_(t,r),s=$f(t,r),Ce("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=De({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":Z_(t,r),s=qf(t,r),Ce("invalid",t);break;default:s=r}Gf(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?Jx(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Yx(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ba(t,l):typeof l=="number"&&Ba(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ua.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Ce("scroll",t):l!=null&&km(t,i,l,o))}switch(n){case"input":uc(t),J_(t,r,!1);break;case"textarea":uc(t),ev(t);break;case"option":r.value!=null&&t.setAttribute("value",""+is(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ui(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ui(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=fu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ht(e),null;case 6:if(t&&e.stateNode!=null)xT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Bs(Ja.current),Bs(Dn.current),vc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rn]=e,(i=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:_c(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_c(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=e,e.stateNode=r}return ht(e),null;case 13:if(Se(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&$t!==null&&e.mode&1&&!(e.flags&128))FE(),no(),e.flags|=98560,i=!1;else if(i=vc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[Rn]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ht(e),i=!1}else dn!==null&&(bp(dn),dn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?Qe===0&&(Qe=3):dg())),e.updateQueue!==null&&(e.flags|=4),ht(e),null);case 4:return so(),wp(t,e),t===null&&Ka(e.stateNode.containerInfo),ht(e),null;case 10:return Km(e.type._context),ht(e),null;case 17:return Lt(e.type)&&pu(),ht(e),null;case 19:if(Se(Re),i=e.memoizedState,i===null)return ht(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ra(i,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xu(t),o!==null){for(e.flags|=128,ra(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xe(Re,Re.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ue()>oo&&(e.flags|=128,r=!0,ra(i,!1),e.lanes=4194304)}else{if(!r)if(t=xu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ra(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ke)return ht(e),null}else 2*Ue()-i.renderingStartTime>oo&&n!==1073741824&&(e.flags|=128,r=!0,ra(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ue(),e.sibling=null,n=Re.current,xe(Re,r?n&1|2:n&1),e):(ht(e),null);case 22:case 23:return ug(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function P1(t,e){switch(Wm(e),e.tag){case 1:return Lt(e.type)&&pu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),Se(jt),Se(vt),Zm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jm(e),null;case 13:if(Se(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Re),null;case 4:return so(),null;case 10:return Km(e.type._context),null;case 22:case 23:return ug(),null;case 24:return null;default:return null}}var Ec=!1,mt=!1,D1=typeof WeakSet=="function"?WeakSet:Set,H=null;function ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function xp(t,e,n){try{n()}catch(r){je(t,e,r)}}var zv=!1;function O1(t,e){if(sp=uu,t=NE(),$m(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,d=0,h=0,f=t,m=null;t:for(;;){for(var _;f!==n||s!==0&&f.nodeType!==3||(a=o+s),f!==i||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++d===s&&(a=o),m===i&&++h===r&&(l=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ip={focusedElem:t,selectionRange:n},uu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var k=T.memoizedProps,R=T.memoizedState,N=e.stateNode,w=N.getSnapshotBeforeUpdate(e.elementType===e.type?k:cn(e.type,k),R);N.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){je(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return T=zv,zv=!1,T}function Na(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&xp(e,n,i)}s=s.next}while(s!==r)}}function Id(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ep(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ET(t){var e=t.alternate;e!==null&&(t.alternate=null,ET(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rn],delete e[Ya],delete e[lp],delete e[g1],delete e[y1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function TT(t){return t.tag===5||t.tag===3||t.tag===4}function Wv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||TT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fu));else if(r!==4&&(t=t.child,t!==null))for(Tp(t,e,n),t=t.sibling;t!==null;)Tp(t,e,n),t=t.sibling}function Ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ip(t,e,n),t=t.sibling;t!==null;)Ip(t,e,n),t=t.sibling}var it=null,un=!1;function kr(t,e,n){for(n=n.child;n!==null;)IT(t,e,n),n=n.sibling}function IT(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(gd,n)}catch{}switch(n.tag){case 5:mt||ji(n,e);case 6:var r=it,s=un;it=null,kr(t,e,n),it=r,un=s,it!==null&&(un?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(un?(t=it,n=n.stateNode,t.nodeType===8?nf(t.parentNode,n):t.nodeType===1&&nf(t,n),qa(t)):nf(it,n.stateNode));break;case 4:r=it,s=un,it=n.stateNode.containerInfo,un=!0,kr(t,e,n),it=r,un=s;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&xp(n,e,o),s=s.next}while(s!==r)}kr(t,e,n);break;case 1:if(!mt&&(ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,e,a)}kr(t,e,n);break;case 21:kr(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,kr(t,e,n),mt=r):kr(t,e,n);break;default:kr(t,e,n)}}function qv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new D1),e.forEach(function(r){var s=z1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:it=a.stateNode,un=!1;break e;case 3:it=a.stateNode.containerInfo,un=!0;break e;case 4:it=a.stateNode.containerInfo,un=!0;break e}a=a.return}if(it===null)throw Error(U(160));IT(i,o,s),it=null,un=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(d){je(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)CT(e,t),e=e.sibling}function CT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),Sn(t),r&4){try{Na(3,t,t.return),Id(3,t)}catch(k){je(t,t.return,k)}try{Na(5,t,t.return)}catch(k){je(t,t.return,k)}}break;case 1:ln(e,t),Sn(t),r&512&&n!==null&&ji(n,n.return);break;case 5:if(ln(e,t),Sn(t),r&512&&n!==null&&ji(n,n.return),t.flags&32){var s=t.stateNode;try{Ba(s,"")}catch(k){je(t,t.return,k)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Gx(s,i),Kf(a,o);var d=Kf(a,i);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?Jx(s,f):h==="dangerouslySetInnerHTML"?Yx(s,f):h==="children"?Ba(s,f):km(s,h,f,d)}switch(a){case"input":zf(s,i);break;case"textarea":Kx(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?Ui(s,!!i.multiple,_,!1):m!==!!i.multiple&&(i.defaultValue!=null?Ui(s,!!i.multiple,i.defaultValue,!0):Ui(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ya]=i}catch(k){je(t,t.return,k)}}break;case 6:if(ln(e,t),Sn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(k){je(t,t.return,k)}}break;case 3:if(ln(e,t),Sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qa(e.containerInfo)}catch(k){je(t,t.return,k)}break;case 4:ln(e,t),Sn(t);break;case 13:ln(e,t),Sn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(lg=Ue())),r&4&&qv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(d=mt)||h,ln(e,t),mt=d):ln(e,t),Sn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(H=t,h=t.child;h!==null;){for(f=H=h;H!==null;){switch(m=H,_=m.child,m.tag){case 0:case 11:case 14:case 15:Na(4,m,m.return);break;case 1:ji(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(k){je(r,n,k)}}break;case 5:ji(m,m.return);break;case 22:if(m.memoizedState!==null){Gv(f);continue}}_!==null?(_.return=m,H=_):Gv(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{s=f.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Xx("display",o))}catch(k){je(t,t.return,k)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(k){je(t,t.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ln(e,t),Sn(t),r&4&&qv(t);break;case 21:break;default:ln(e,t),Sn(t)}}function Sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(TT(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ba(s,""),r.flags&=-33);var i=Wv(t);Ip(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Wv(t);Tp(t,a,o);break;default:throw Error(U(161))}}catch(l){je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function j1(t,e,n){H=t,NT(t)}function NT(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ec;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||mt;a=Ec;var d=mt;if(Ec=o,(mt=l)&&!d)for(H=s;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?Kv(s):l!==null?(l.return=o,H=l):Kv(s);for(;i!==null;)H=i,NT(i),i=i.sibling;H=s,Ec=a,mt=d}Hv(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):Hv(t)}}function Hv(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||Id(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:cn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Rv(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&qa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}mt||e.flags&512&&Ep(e)}catch(m){je(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Gv(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Kv(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Id(4,e)}catch(l){je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){je(e,s,l)}}var i=e.return;try{Ep(e)}catch(l){je(e,i,l)}break;case 5:var o=e.return;try{Ep(e)}catch(l){je(e,o,l)}}}catch(l){je(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var L1=Math.ceil,Iu=mr.ReactCurrentDispatcher,og=mr.ReactCurrentOwner,tn=mr.ReactCurrentBatchConfig,de=0,rt=null,$e=null,at=0,Bt=0,Li=vs(0),Qe=0,nl=null,Xs=0,Cd=0,ag=0,Sa=null,kt=null,lg=0,oo=1/0,Gn=null,Cu=!1,Cp=null,Qr=null,Tc=!1,Br=null,Nu=0,ba=0,Np=null,Wc=-1,qc=0;function Ct(){return de&6?Ue():Wc!==-1?Wc:Wc=Ue()}function Yr(t){return t.mode&1?de&2&&at!==0?at&-at:v1.transition!==null?(qc===0&&(qc=uE()),qc):(t=ge,t!==0||(t=window.event,t=t===void 0?16:yE(t.type)),t):1}function _n(t,e,n,r){if(50<ba)throw ba=0,Np=null,Error(U(185));Il(t,n,r),(!(de&2)||t!==rt)&&(t===rt&&(!(de&2)&&(Cd|=n),Qe===4&&Or(t,at)),Mt(t,r),n===1&&de===0&&!(e.mode&1)&&(oo=Ue()+500,xd&&ws()))}function Mt(t,e){var n=t.callbackNode;vk(t,e);var r=cu(t,t===rt?at:0);if(r===0)n!==null&&rv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rv(n),e===1)t.tag===0?_1(Qv.bind(null,t)):LE(Qv.bind(null,t)),p1(function(){!(de&6)&&ws()}),n=null;else{switch(dE(r)){case 1:n=Om;break;case 4:n=lE;break;case 16:n=lu;break;case 536870912:n=cE;break;default:n=lu}n=OT(n,ST.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ST(t,e){if(Wc=-1,qc=0,de&6)throw Error(U(327));var n=t.callbackNode;if(qi()&&t.callbackNode!==n)return null;var r=cu(t,t===rt?at:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Su(t,r);else{e=r;var s=de;de|=2;var i=kT();(rt!==t||at!==e)&&(Gn=null,oo=Ue()+500,Ws(t,e));do try{F1();break}catch(a){bT(t,a)}while(!0);Gm(),Iu.current=i,de=s,$e!==null?e=0:(rt=null,at=0,e=Qe)}if(e!==0){if(e===2&&(s=Zf(t),s!==0&&(r=s,e=Sp(t,s))),e===1)throw n=nl,Ws(t,0),Or(t,r),Mt(t,Ue()),n;if(e===6)Or(t,r);else{if(s=t.current.alternate,!(r&30)&&!M1(s)&&(e=Su(t,r),e===2&&(i=Zf(t),i!==0&&(r=i,e=Sp(t,i))),e===1))throw n=nl,Ws(t,0),Or(t,r),Mt(t,Ue()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Ls(t,kt,Gn);break;case 3:if(Or(t,r),(r&130023424)===r&&(e=lg+500-Ue(),10<e)){if(cu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Ct(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=ap(Ls.bind(null,t,kt,Gn),e);break}Ls(t,kt,Gn);break;case 4:if(Or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-yn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*L1(r/1960))-r,10<r){t.timeoutHandle=ap(Ls.bind(null,t,kt,Gn),r);break}Ls(t,kt,Gn);break;case 5:Ls(t,kt,Gn);break;default:throw Error(U(329))}}}return Mt(t,Ue()),t.callbackNode===n?ST.bind(null,t):null}function Sp(t,e){var n=Sa;return t.current.memoizedState.isDehydrated&&(Ws(t,e).flags|=256),t=Su(t,e),t!==2&&(e=kt,kt=n,e!==null&&bp(e)),t}function bp(t){kt===null?kt=t:kt.push.apply(kt,t)}function M1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!En(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Or(t,e){for(e&=~ag,e&=~Cd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function Qv(t){if(de&6)throw Error(U(327));qi();var e=cu(t,0);if(!(e&1))return Mt(t,Ue()),null;var n=Su(t,e);if(t.tag!==0&&n===2){var r=Zf(t);r!==0&&(e=r,n=Sp(t,r))}if(n===1)throw n=nl,Ws(t,0),Or(t,e),Mt(t,Ue()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ls(t,kt,Gn),Mt(t,Ue()),null}function cg(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(oo=Ue()+500,xd&&ws())}}function Js(t){Br!==null&&Br.tag===0&&!(de&6)&&qi();var e=de;de|=1;var n=tn.transition,r=ge;try{if(tn.transition=null,ge=1,t)return t()}finally{ge=r,tn.transition=n,de=e,!(de&6)&&ws()}}function ug(){Bt=Li.current,Se(Li)}function Ws(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,f1(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Wm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pu();break;case 3:so(),Se(jt),Se(vt),Zm();break;case 5:Jm(r);break;case 4:so();break;case 13:Se(Re);break;case 19:Se(Re);break;case 10:Km(r.type._context);break;case 22:case 23:ug()}n=n.return}if(rt=t,$e=t=Xr(t.current,null),at=Bt=e,Qe=0,nl=null,ag=Cd=Xs=0,kt=Sa=null,Us!==null){for(e=0;e<Us.length;e++)if(n=Us[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Us=null}return t}function bT(t,e){do{var n=$e;try{if(Gm(),Bc.current=Tu,Eu){for(var r=Ae.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Eu=!1}if(Ys=0,et=Ge=Ae=null,Ca=!1,Za=0,og.current=null,n===null||n.return===null){Qe=1,nl=e,$e=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=at,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Lv(o);if(_!==null){_.flags&=-257,Mv(_,o,a,i,e),_.mode&1&&jv(i,d,e),e=_,l=d;var T=e.updateQueue;if(T===null){var k=new Set;k.add(l),e.updateQueue=k}else T.add(l);break e}else{if(!(e&1)){jv(i,d,e),dg();break e}l=Error(U(426))}}else if(ke&&a.mode&1){var R=Lv(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Mv(R,o,a,i,e),qm(io(l,a));break e}}i=l=io(l,a),Qe!==4&&(Qe=2),Sa===null?Sa=[i]:Sa.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var N=dT(i,l,e);kv(i,N);break e;case 1:a=l;var w=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Qr===null||!Qr.has(C)))){i.flags|=65536,e&=-e,i.lanes|=e;var O=hT(i,a,e);kv(i,O);break e}}i=i.return}while(i!==null)}AT(n)}catch(M){e=M,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function kT(){var t=Iu.current;return Iu.current=Tu,t===null?Tu:t}function dg(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),rt===null||!(Xs&268435455)&&!(Cd&268435455)||Or(rt,at)}function Su(t,e){var n=de;de|=2;var r=kT();(rt!==t||at!==e)&&(Gn=null,Ws(t,e));do try{V1();break}catch(s){bT(t,s)}while(!0);if(Gm(),de=n,Iu.current=r,$e!==null)throw Error(U(261));return rt=null,at=0,Qe}function V1(){for(;$e!==null;)RT($e)}function F1(){for(;$e!==null&&!uk();)RT($e)}function RT(t){var e=DT(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?AT(t):$e=e,og.current=null}function AT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=P1(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,$e=null;return}}else if(n=A1(n,e,Bt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Qe===0&&(Qe=5)}function Ls(t,e,n){var r=ge,s=tn.transition;try{tn.transition=null,ge=1,U1(t,e,n,r)}finally{tn.transition=s,ge=r}return null}function U1(t,e,n,r){do qi();while(Br!==null);if(de&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(wk(t,i),t===rt&&($e=rt=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tc||(Tc=!0,OT(lu,function(){return qi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=tn.transition,tn.transition=null;var o=ge;ge=1;var a=de;de|=4,og.current=null,O1(t,n),CT(n,t),o1(ip),uu=!!sp,ip=sp=null,t.current=n,j1(n),dk(),de=a,ge=o,tn.transition=i}else t.current=n;if(Tc&&(Tc=!1,Br=t,Nu=s),i=t.pendingLanes,i===0&&(Qr=null),pk(n.stateNode),Mt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Cu)throw Cu=!1,t=Cp,Cp=null,t;return Nu&1&&t.tag!==0&&qi(),i=t.pendingLanes,i&1?t===Np?ba++:(ba=0,Np=t):ba=0,ws(),null}function qi(){if(Br!==null){var t=dE(Nu),e=tn.transition,n=ge;try{if(tn.transition=null,ge=16>t?16:t,Br===null)var r=!1;else{if(t=Br,Br=null,Nu=0,de&6)throw Error(U(331));var s=de;for(de|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var d=a[l];for(H=d;H!==null;){var h=H;switch(h.tag){case 0:case 11:case 15:Na(8,h,i)}var f=h.child;if(f!==null)f.return=h,H=f;else for(;H!==null;){h=H;var m=h.sibling,_=h.return;if(ET(h),h===d){H=null;break}if(m!==null){m.return=_,H=m;break}H=_}}}var T=i.alternate;if(T!==null){var k=T.child;if(k!==null){T.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Na(9,i,i.return)}var N=i.sibling;if(N!==null){N.return=i.return,H=N;break e}H=i.return}}var w=t.current;for(H=w;H!==null;){o=H;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,H=C;else e:for(o=w;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Id(9,a)}}catch(M){je(a,a.return,M)}if(a===o){H=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,H=O;break e}H=a.return}}if(de=s,ws(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(gd,t)}catch{}r=!0}return r}finally{ge=n,tn.transition=e}}return!1}function Yv(t,e,n){e=io(n,e),e=dT(t,e,1),t=Kr(t,e,1),e=Ct(),t!==null&&(Il(t,1,e),Mt(t,e))}function je(t,e,n){if(t.tag===3)Yv(t,t,n);else for(;e!==null;){if(e.tag===3){Yv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qr===null||!Qr.has(r))){t=io(n,t),t=hT(e,t,1),e=Kr(e,t,1),t=Ct(),e!==null&&(Il(e,1,t),Mt(e,t));break}}e=e.return}}function B1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ct(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(at&n)===n&&(Qe===4||Qe===3&&(at&130023424)===at&&500>Ue()-lg?Ws(t,0):ag|=n),Mt(t,e)}function PT(t,e){e===0&&(t.mode&1?(e=fc,fc<<=1,!(fc&130023424)&&(fc=4194304)):e=1);var n=Ct();t=or(t,e),t!==null&&(Il(t,e,n),Mt(t,n))}function $1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),PT(t,n)}function z1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),PT(t,n)}var DT;DT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||jt.current)Pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pt=!1,R1(t,e,n);Pt=!!(t.flags&131072)}else Pt=!1,ke&&e.flags&1048576&&ME(e,yu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zc(t,e),t=e.pendingProps;var s=to(e,vt.current);Wi(e,n),s=tg(null,e,r,t,s,n);var i=ng();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Lt(r)?(i=!0,mu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ym(e),s.updater=Td,e.stateNode=s,s._reactInternals=e,pp(e,r,t,n),e=yp(null,e,r,!0,i,n)):(e.tag=0,ke&&i&&zm(e),Tt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zc(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=q1(r),t=cn(r,t),s){case 0:e=gp(null,e,r,t,n);break e;case 1:e=Uv(null,e,r,t,n);break e;case 11:e=Vv(null,e,r,t,n);break e;case 14:e=Fv(null,e,r,cn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:cn(r,s),gp(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:cn(r,s),Uv(t,e,r,s,n);case 3:e:{if(gT(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,zE(t,e),wu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=io(Error(U(423)),e),e=Bv(t,e,r,n,s);break e}else if(r!==s){s=io(Error(U(424)),e),e=Bv(t,e,r,n,s);break e}else for($t=Gr(e.stateNode.containerInfo.firstChild),Wt=e,ke=!0,dn=null,n=BE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),r===s){e=ar(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return WE(e),t===null&&dp(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,op(r,s)?o=null:i!==null&&op(r,i)&&(e.flags|=32),mT(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&dp(e),null;case 13:return yT(t,e,n);case 4:return Xm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ro(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:cn(r,s),Vv(t,e,r,s,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,xe(_u,r._currentValue),r._currentValue=o,i!==null)if(En(i.value,o)){if(i.children===s.children&&!jt.current){e=ar(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=er(-1,n&-n),l.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?l.next=l:(l.next=h.next,h.next=l),d.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),hp(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hp(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Tt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Wi(e,n),s=rn(s),r=r(s),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,s=cn(r,e.pendingProps),s=cn(r.type,s),Fv(t,e,r,s,n);case 15:return fT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:cn(r,s),zc(t,e),e.tag=1,Lt(r)?(t=!0,mu(e)):t=!1,Wi(e,n),uT(e,r,s),pp(e,r,s,n),yp(null,e,r,!0,t,n);case 19:return _T(t,e,n);case 22:return pT(t,e,n)}throw Error(U(156,e.tag))};function OT(t,e){return aE(t,e)}function W1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new W1(t,e,n,r)}function hg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function q1(t){if(typeof t=="function")return hg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Am)return 11;if(t===Pm)return 14}return 2}function Xr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hc(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")hg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ni:return qs(n.children,s,i,e);case Rm:o=8,s|=8;break;case Vf:return t=en(12,n,e,s|2),t.elementType=Vf,t.lanes=i,t;case Ff:return t=en(13,n,e,s),t.elementType=Ff,t.lanes=i,t;case Uf:return t=en(19,n,e,s),t.elementType=Uf,t.lanes=i,t;case Wx:return Nd(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $x:o=10;break e;case zx:o=9;break e;case Am:o=11;break e;case Pm:o=14;break e;case Ar:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=en(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function qs(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function Nd(t,e,n,r){return t=en(22,t,r,e),t.elementType=Wx,t.lanes=n,t.stateNode={isHidden:!1},t}function df(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function hf(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function H1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qh(0),this.expirationTimes=qh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qh(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function fg(t,e,n,r,s,i,o,a,l){return t=new H1(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=en(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ym(i),t}function G1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ci,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jT(t){if(!t)return os;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Lt(n))return jE(t,n,e)}return e}function LT(t,e,n,r,s,i,o,a,l){return t=fg(n,r,!0,t,s,i,o,a,l),t.context=jT(null),n=t.current,r=Ct(),s=Yr(n),i=er(r,s),i.callback=e??null,Kr(n,i,s),t.current.lanes=s,Il(t,s,r),Mt(t,r),t}function Sd(t,e,n,r){var s=e.current,i=Ct(),o=Yr(s);return n=jT(n),e.context===null?e.context=n:e.pendingContext=n,e=er(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Kr(s,e,o),t!==null&&(_n(t,s,o,i),Uc(t,s,o)),o}function bu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pg(t,e){Xv(t,e),(t=t.alternate)&&Xv(t,e)}function K1(){return null}var MT=typeof reportError=="function"?reportError:function(t){console.error(t)};function mg(t){this._internalRoot=t}bd.prototype.render=mg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Sd(t,e,null,null)};bd.prototype.unmount=mg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Js(function(){Sd(null,t,null,null)}),e[ir]=null}};function bd(t){this._internalRoot=t}bd.prototype.unstable_scheduleHydration=function(t){if(t){var e=pE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dr.length&&e!==0&&e<Dr[n].priority;n++);Dr.splice(n,0,t),n===0&&gE(t)}};function gg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jv(){}function Q1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=bu(o);i.call(d)}}var o=LT(e,r,t,0,null,!1,!1,"",Jv);return t._reactRootContainer=o,t[ir]=o.current,Ka(t.nodeType===8?t.parentNode:t),Js(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var d=bu(l);a.call(d)}}var l=fg(t,0,!1,null,null,!1,!1,"",Jv);return t._reactRootContainer=l,t[ir]=l.current,Ka(t.nodeType===8?t.parentNode:t),Js(function(){Sd(e,l,n,r)}),l}function Rd(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=bu(o);a.call(l)}}Sd(e,o,t,s)}else o=Q1(n,e,t,s,r);return bu(o)}hE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ha(e.pendingLanes);n!==0&&(jm(e,n|1),Mt(e,Ue()),!(de&6)&&(oo=Ue()+500,ws()))}break;case 13:Js(function(){var r=or(t,1);if(r!==null){var s=Ct();_n(r,t,1,s)}}),pg(t,1)}};Lm=function(t){if(t.tag===13){var e=or(t,134217728);if(e!==null){var n=Ct();_n(e,t,134217728,n)}pg(t,134217728)}};fE=function(t){if(t.tag===13){var e=Yr(t),n=or(t,e);if(n!==null){var r=Ct();_n(n,t,e,r)}pg(t,e)}};pE=function(){return ge};mE=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};Yf=function(t,e,n){switch(e){case"input":if(zf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=wd(r);if(!s)throw Error(U(90));Hx(r),zf(r,s)}}}break;case"textarea":Kx(t,n);break;case"select":e=n.value,e!=null&&Ui(t,!!n.multiple,e,!1)}};tE=cg;nE=Js;var Y1={usingClientEntryPoint:!1,Events:[Nl,Ri,wd,Zx,eE,cg]},sa={findFiberByHostInstance:Fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X1={bundleType:sa.bundleType,version:sa.version,rendererPackageName:sa.rendererPackageName,rendererConfig:sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iE(t),t===null?null:t.stateNode},findFiberByHostInstance:sa.findFiberByHostInstance||K1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ic.isDisabled&&Ic.supportsFiber)try{gd=Ic.inject(X1),Pn=Ic}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y1;Kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gg(e))throw Error(U(200));return G1(t,e,null,n)};Kt.createRoot=function(t,e){if(!gg(t))throw Error(U(299));var n=!1,r="",s=MT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=fg(t,1,!1,null,null,n,!1,r,s),t[ir]=e.current,Ka(t.nodeType===8?t.parentNode:t),new mg(e)};Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=iE(e),t=t===null?null:t.stateNode,t};Kt.flushSync=function(t){return Js(t)};Kt.hydrate=function(t,e,n){if(!kd(e))throw Error(U(200));return Rd(null,t,e,!0,n)};Kt.hydrateRoot=function(t,e,n){if(!gg(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=MT;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=LT(e,null,t,1,n??null,s,!1,i,o),t[ir]=e.current,Ka(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new bd(e)};Kt.render=function(t,e,n){if(!kd(e))throw Error(U(200));return Rd(null,t,e,!1,n)};Kt.unmountComponentAtNode=function(t){if(!kd(t))throw Error(U(40));return t._reactRootContainer?(Js(function(){Rd(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1};Kt.unstable_batchedUpdates=cg;Kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kd(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Rd(t,e,n,!1,r)};Kt.version="18.3.1-next-f1338f8080-20240426";function VT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(VT)}catch(t){console.error(t)}}VT(),Vx.exports=Kt;var J1=Vx.exports,Zv=J1;Lf.createRoot=Zv.createRoot,Lf.hydrateRoot=Zv.hydrateRoot;/**
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
 */const Z1=()=>{};var e0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const B=function(t,e){if(!t)throw To(e)},To=function(t){return new Error("Firebase Database ("+FT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,d=l?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|d>>6,_=d&63;l||(_=64,o||(m=64)),r.push(n[h],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(UT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||d==null||f==null)throw new tR;const m=i<<2|a>>4;if(r.push(m),d!==64){const _=a<<4&240|d>>2;if(r.push(_),f!==64){const T=d<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BT=function(t){const e=UT(t);return yg.encodeByteArray(e,!0)},ku=function(t){return BT(t).replace(/\./g,"")},Ru=function(t){try{return yg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(t){return $T(void 0,t)}function $T(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!rR(n)||(t[n]=$T(t[n],e[n]));return t}function rR(t){return t!=="__proto__"}/**
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
 */function sR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iR=()=>sR().__FIREBASE_DEFAULTS__,oR=()=>{if(typeof process>"u"||typeof e0>"u")return;const t=e0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ru(t[1]);return e&&JSON.parse(e)},Ad=()=>{try{return Z1()||iR()||oR()||aR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zT=t=>{var e,n;return(n=(e=Ad())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},_g=t=>{const e=zT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},WT=()=>{var t;return(t=Ad())==null?void 0:t.config},qT=t=>{var e;return(e=Ad())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pd(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function wg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ku(JSON.stringify(n)),ku(JSON.stringify(o)),""].join(".")}const ka={};function lR(){const t={prod:[],emulator:[]};for(const e of Object.keys(ka))ka[e]?t.emulator.push(e):t.prod.push(e);return t}function cR(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let t0=!1;function Dd(t,e){if(typeof window>"u"||typeof document>"u"||!gr(window.location.host)||ka[t]===e||ka[t]||t0)return;ka[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=lR().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function d(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{t0=!0,o()},m}function h(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=cR(r),_=n("text"),T=document.getElementById(_)||document.createElement("span"),k=n("learnmore"),R=document.getElementById(k)||document.createElement("a"),N=n("preprendIcon"),w=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const C=m.element;a(C),h(R,k);const O=d();l(w,N),C.append(w,T,R,O),document.body.appendChild(C)}i?(T.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function uR(){var e;const t=(e=Ad())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function HT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fR(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pR(){return FT.NODE_ADMIN===!0}function mR(){return!uR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gR(){try{return typeof indexedDB=="object"}catch{return!1}}function yR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="FirebaseError";class zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_R,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bl.prototype.create)}}class bl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?vR(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new zn(s,a,r)}}function vR(t,e){return t.replace(wR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=rl(Ru(i[0])||""),n=rl(Ru(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},xR=function(t){const e=GT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ER=function(t){const e=GT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ao(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function kp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Au(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function as(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(n0(i)&&n0(o)){if(!as(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function n0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ma(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],d,h;for(let f=0;f<80;f++){f<40?f<20?(d=a^i&(o^a),h=1518500249):(d=i^o^a,h=1859775393):f<60?(d=i&o|a&(i|o),h=2400959708):(d=i^o^a,h=3395469782);const m=(s<<5|s>>>27)+d+l+h+r[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function IR(t,e){const n=new CR(t,e);return n.subscribe.bind(n)}class CR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");NR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ff),s.error===void 0&&(s.error=ff),s.complete===void 0&&(s.complete=ff);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ff(){}function KT(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Od=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ee(t){return t&&t._delegate?t._delegate:t}class lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ms="[DEFAULT]";/**
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
 */class bR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RR(e))try{this.getOrInitializeService({instanceIdentifier:Ms})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ms){return this.instances.has(e)}getOptions(e=Ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ms){return this.component?this.component.multipleInstances?e:Ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kR(t){return t===Ms?void 0:t}function RR(t){return t.instantiationMode==="EAGER"}/**
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
 */class AR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const PR={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},DR=se.INFO,OR={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},jR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=OR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jd{constructor(e){this.name=e,this._logLevel=DR,this._logHandler=jR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const LR=(t,e)=>e.some(n=>t instanceof n);let r0,s0;function MR(){return r0||(r0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VR(){return s0||(s0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const QT=new WeakMap,Rp=new WeakMap,YT=new WeakMap,pf=new WeakMap,Eg=new WeakMap;function FR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Jr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&QT.set(n,t)}).catch(()=>{}),Eg.set(e,t),e}function UR(t){if(Rp.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Rp.set(t,e)}let Ap={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||YT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BR(t){Ap=t(Ap)}function $R(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mf(this),e,...n);return YT.set(r,e.sort?e.sort():[e]),Jr(r)}:VR().includes(t)?function(...e){return t.apply(mf(this),e),Jr(QT.get(this))}:function(...e){return Jr(t.apply(mf(this),e))}}function zR(t){return typeof t=="function"?$R(t):(t instanceof IDBTransaction&&UR(t),LR(t,MR())?new Proxy(t,Ap):t)}function Jr(t){if(t instanceof IDBRequest)return FR(t);if(pf.has(t))return pf.get(t);const e=zR(t);return e!==t&&(pf.set(t,e),Eg.set(e,t)),e}const mf=t=>Eg.get(t);function WR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Jr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jr(o.result),l.oldVersion,l.newVersion,Jr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const qR=["get","getKey","getAll","getAllKeys","count"],HR=["put","add","delete","clear"],gf=new Map;function i0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gf.get(e))return gf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=HR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qR.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),s&&l.done]))[0]};return gf.set(e,i),i}BR(t=>({...t,get:(e,n,r)=>i0(e,n)||t.get(e,n,r),has:(e,n)=>!!i0(e,n)||t.has(e,n)}));/**
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
 */class GR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pp="@firebase/app",o0="0.14.7";/**
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
 */const cr=new jd("@firebase/app"),QR="@firebase/app-compat",YR="@firebase/analytics-compat",XR="@firebase/analytics",JR="@firebase/app-check-compat",ZR="@firebase/app-check",eA="@firebase/auth",tA="@firebase/auth-compat",nA="@firebase/database",rA="@firebase/data-connect",sA="@firebase/database-compat",iA="@firebase/functions",oA="@firebase/functions-compat",aA="@firebase/installations",lA="@firebase/installations-compat",cA="@firebase/messaging",uA="@firebase/messaging-compat",dA="@firebase/performance",hA="@firebase/performance-compat",fA="@firebase/remote-config",pA="@firebase/remote-config-compat",mA="@firebase/storage",gA="@firebase/storage-compat",yA="@firebase/firestore",_A="@firebase/ai",vA="@firebase/firestore-compat",wA="firebase",xA="12.8.0";/**
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
 */const Dp="[DEFAULT]",EA={[Pp]:"fire-core",[QR]:"fire-core-compat",[XR]:"fire-analytics",[YR]:"fire-analytics-compat",[ZR]:"fire-app-check",[JR]:"fire-app-check-compat",[eA]:"fire-auth",[tA]:"fire-auth-compat",[nA]:"fire-rtdb",[rA]:"fire-data-connect",[sA]:"fire-rtdb-compat",[iA]:"fire-fn",[oA]:"fire-fn-compat",[aA]:"fire-iid",[lA]:"fire-iid-compat",[cA]:"fire-fcm",[uA]:"fire-fcm-compat",[dA]:"fire-perf",[hA]:"fire-perf-compat",[fA]:"fire-rc",[pA]:"fire-rc-compat",[mA]:"fire-gcs",[gA]:"fire-gcs-compat",[yA]:"fire-fst",[vA]:"fire-fst-compat",[_A]:"fire-vertex","fire-js":"fire-js",[wA]:"fire-js-all"};/**
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
 */const Pu=new Map,TA=new Map,Op=new Map;function a0(t,e){try{t.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ls(t){const e=t.name;if(Op.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;Op.set(e,t);for(const n of Pu.values())a0(n,t);for(const n of TA.values())a0(n,t);return!0}function kl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const IA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zr=new bl("app","Firebase",IA);/**
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
 */class CA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=xA;function XT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Dp,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Zr.create("bad-app-name",{appName:String(s)});if(n||(n=WT()),!n)throw Zr.create("no-options");const i=Pu.get(s);if(i){if(as(n,i.options)&&as(r,i.config))return i;throw Zr.create("duplicate-app",{appName:s})}const o=new AR(s);for(const l of Op.values())o.addComponent(l);const a=new CA(n,r,o);return Pu.set(s,a),a}function Ld(t=Dp){const e=Pu.get(t);if(!e&&t===Dp&&WT())return XT();if(!e)throw Zr.create("no-app",{appName:t});return e}function nn(t,e,n){let r=EA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(o.join(" "));return}ls(new lr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const NA="firebase-heartbeat-database",SA=1,sl="firebase-heartbeat-store";let yf=null;function JT(){return yf||(yf=WR(NA,SA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(sl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zr.create("idb-open",{originalErrorMessage:t.message})})),yf}async function bA(t){try{const n=(await JT()).transaction(sl),r=await n.objectStore(sl).get(ZT(t));return await n.done,r}catch(e){if(e instanceof zn)cr.warn(e.message);else{const n=Zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(n.message)}}}async function l0(t,e){try{const r=(await JT()).transaction(sl,"readwrite");await r.objectStore(sl).put(e,ZT(t)),await r.done}catch(n){if(n instanceof zn)cr.warn(n.message);else{const r=Zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cr.warn(r.message)}}}function ZT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kA=1024,RA=30;class AA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=c0();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>RA){const o=OA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){cr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=c0(),{heartbeatsToSend:r,unsentEntries:s}=PA(this._heartbeatsCache.heartbeats),i=ku(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return cr.warn(n),""}}}function c0(){return new Date().toISOString().substring(0,10)}function PA(t,e=kA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),u0(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),u0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gR()?yR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return l0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return l0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function u0(t){return ku(JSON.stringify({version:2,heartbeats:t})).length}function OA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function jA(t){ls(new lr("platform-logger",e=>new GR(e),"PRIVATE")),ls(new lr("heartbeat",e=>new AA(e),"PRIVATE")),nn(Pp,o0,t),nn(Pp,o0,"esm2020"),nn("fire-js","")}jA("");var LA="firebase",MA="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(LA,MA,"app");function eI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VA=eI,tI=new bl("auth","Firebase",eI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new jd("@firebase/auth");function FA(t,...e){Du.logLevel<=se.WARN&&Du.warn(`Auth (${xs}): ${t}`,...e)}function Gc(t,...e){Du.logLevel<=se.ERROR&&Du.error(`Auth (${xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,...e){throw Tg(t,...e)}function On(t,...e){return Tg(t,...e)}function nI(t,e,n){const r={...VA(),[e]:n};return new bl("auth","Firebase",r).create(e,{appName:t.name})}function tr(t){return nI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tI.create(t,...e)}function K(t,e,...n){if(!t)throw Tg(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gc(e),new Error(e)}function ur(t,e){t||Xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function UA(){return d0()==="http:"||d0()==="https:"}function d0(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UA()||hR()||"connection"in navigator)?navigator.onLine:!0}function $A(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ur(n>e,"Short delay should be less than long delay!"),this.isMobile=xg()||HT()}get(){return BA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t,e){ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qA=new Rl(3e4,6e4);function _r(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function vr(t,e,n,r,s={}){return sI(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Io({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:l,...i};return dR()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&gr(t.emulatorConfig.host)&&(d.credentials="include"),rI.fetch()(await iI(t,t.config.apiHost,n,a),d)})}async function sI(t,e,n){t._canInitEmulator=!1;const r={...zA,...e};try{const s=new GA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Cc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,d]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Cc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Cc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw nI(t,h,d);Tn(t,h)}}catch(s){if(s instanceof zn)throw s;Tn(t,"network-request-failed",{message:String(s)})}}async function Al(t,e,n,r,s={}){const i=await vr(t,e,n,r,s);return"mfaPendingCredential"in i&&Tn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function iI(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ig(t.config,s):`${t.config.apiScheme}://${s}`;return WA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function HA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class GA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(On(this.auth,"network-request-failed")),qA.get())})}}function Cc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=On(t,e,r);return s.customData._tokenResponse=n,s}function h0(t){return t!==void 0&&t.enterprise!==void 0}class KA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return HA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function QA(t,e){return vr(t,"GET","/v2/recaptchaConfig",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t,e){return vr(t,"POST","/v1/accounts:delete",e)}async function Ou(t,e){return vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XA(t,e=!1){const n=Ee(t),r=await n.getIdToken(e),s=Cg(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ra(_f(s.auth_time)),issuedAtTime:Ra(_f(s.iat)),expirationTime:Ra(_f(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _f(t){return Number(t)*1e3}function Cg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gc("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ru(n);return s?JSON.parse(s):(Gc("Failed to decode base64 JWT payload"),null)}catch(s){return Gc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function f0(t){const e=Cg(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zn&&JA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ju(t){var f;const e=t.auth,n=await t.getIdToken(),r=await il(t,Ou(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?oI(s.providerUserInfo):[],o=tP(t.providerData,i),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),d=a?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Lp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function eP(t){const e=Ee(t);await ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function oI(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,e){const n=await sI(t,{},async()=>{const r=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await iI(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&gr(t.emulatorConfig.host)&&(l.credentials="include"),rI.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rP(t,e){return vr(t,"POST","/v2/accounts:revokeToken",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):f0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=f0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await nP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Hi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hi,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new ZA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await il(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XA(this,e)}reload(){return eP(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ju(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(tr(this.auth));const e=await this.getIdToken();return await il(this,YA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,d=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:_,providerData:T,stsTokenManager:k}=n;K(f&&k,e,"internal-error");const R=Hi.fromJSON(this.name,k);K(typeof f=="string",e,"internal-error"),Rr(r,e.name),Rr(s,e.name),K(typeof m=="boolean",e,"internal-error"),K(typeof _=="boolean",e,"internal-error"),Rr(i,e.name),Rr(o,e.name),Rr(a,e.name),Rr(l,e.name),Rr(d,e.name),Rr(h,e.name);const N=new fn({uid:f,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:R,createdAt:d,lastLoginAt:h});return T&&Array.isArray(T)&&(N.providerData=T.map(w=>({...w}))),l&&(N._redirectEventId=l),N}static async _fromIdTokenResponse(e,n,r=!1){const s=new Hi;s.updateFromServerResponse(n);const i=new fn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ju(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?oI(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Hi;a.updateFromIdToken(r);const l=new fn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Lp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=new Map;function Jn(t){ur(t instanceof Function,"Expected a class definition");let e=p0.get(t);return e?(ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,p0.set(t,e),e)}/**
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
 */class aI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}aI.type="NONE";const m0=aI;/**
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
 */function Kc(t,e,n){return`firebase:${t}:${e}:${n}`}class Gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Kc(this.userKey,s.apiKey,i),this.fullPersistenceKey=Kc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ou(this.auth,{idToken:e}).catch(()=>{});return n?fn._fromGetAccountInfoResponse(this.auth,n,e):null}return fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gi(Jn(m0),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Jn(m0);const o=Kc(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const h=await d._get(o);if(h){let f;if(typeof h=="string"){const m=await Ou(e,{idToken:h}).catch(()=>{});if(!m)break;f=await fn._fromGetAccountInfoResponse(e,m,h)}else f=fn._fromJSON(e,h);d!==i&&(a=f),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Gi(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Gi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fI(e))return"Blackberry";if(pI(e))return"Webos";if(cI(e))return"Safari";if((e.includes("chrome/")||uI(e))&&!e.includes("edge/"))return"Chrome";if(hI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lI(t=wt()){return/firefox\//i.test(t)}function cI(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uI(t=wt()){return/crios\//i.test(t)}function dI(t=wt()){return/iemobile/i.test(t)}function hI(t=wt()){return/android/i.test(t)}function fI(t=wt()){return/blackberry/i.test(t)}function pI(t=wt()){return/webos/i.test(t)}function Ng(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sP(t=wt()){var e;return Ng(t)&&!!((e=window.navigator)!=null&&e.standalone)}function iP(){return fR()&&document.documentMode===10}function mI(t=wt()){return Ng(t)||hI(t)||pI(t)||fI(t)||/windows phone/i.test(t)||dI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t,e=[]){let n;switch(t){case"Browser":n=g0(wt());break;case"Worker":n=`${g0(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${r}`}/**
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
 */class oP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function aP(t,e={}){return vr(t,"GET","/v2/passwordPolicy",_r(t,e))}/**
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
 */const lP=6;class cP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??lP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new y0(this),this.idTokenSubscription=new y0(this),this.beforeStateQueue=new oP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Gi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ou(this,{idToken:e}),r=await fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ju(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rt(this.app))return Promise.reject(tr(this));const n=e?Ee(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rt(this.app)?Promise.reject(tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aP(this),n=new cP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Gi.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&FA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ui(t){return Ee(t)}class y0{constructor(e){this.auth=e,this.observer=null,this.addObserver=IR(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Md={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dP(t){Md=t}function yI(t){return Md.loadJS(t)}function hP(){return Md.recaptchaEnterpriseScript}function fP(){return Md.gapiScript}function pP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class mP{constructor(){this.enterprise=new gP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class gP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const yP="recaptcha-enterprise",_I="NO_RECAPTCHA";class _P{constructor(e){this.type=yP,this.auth=ui(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{QA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new KA(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;h0(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(_I)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mP().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&h0(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=hP();l.length!==0&&(l+=a),yI(l).then(()=>{s(a,i,o)}).catch(d=>{o(d)})}}).catch(a=>{o(a)})})}}async function _0(t,e,n,r=!1,s=!1){const i=new _P(t);let o;if(s)o=_I;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,d=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Mp(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await _0(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await _0(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t,e){const n=kl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(as(i,e??{}))return s;Tn(s,"already-initialized")}return n.initialize({options:e})}function wP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xP(t,e,n){const r=ui(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=vI(e),{host:o,port:a}=EP(e),l=a===null?"":`:${a}`,d={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(as(d,r.config.emulator)&&as(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,gr(o)?(Pd(`${i}//${o}${l}`),Dd("Auth",!0)):TP()}function vI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function EP(t){const e=vI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:v0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:v0(o)}}}function v0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}async function IP(t,e){return vr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(t,e){return Al(t,"POST","/v1/accounts:signInWithPassword",_r(t,e))}async function NP(t,e){return vr(t,"POST","/v1/accounts:sendOobCode",_r(t,e))}async function SP(t,e){return NP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bP(t,e){return Al(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}async function kP(t,e){return Al(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends Sg{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ol(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ol(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mp(e,n,"signInWithPassword",CP);case"emailLink":return bP(e,{email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mp(e,r,"signUpPassword",IP);case"emailLink":return kP(e,{idToken:n,email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(t,e){return Al(t,"POST","/v1/accounts:signInWithIdp",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP="http://localhost";class Zs extends Sg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Zs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ki(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ki(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ki(e,n)}buildRequest(){const e={requestUri:RP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Io(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PP(t){const e=pa(ma(t)).link,n=e?pa(ma(e)).deep_link_id:null,r=pa(ma(t)).deep_link_id;return(r?pa(ma(r)).link:null)||r||n||e||t}class bg{constructor(e){const n=pa(ma(e)),r=n.apiKey??null,s=n.oobCode??null,i=AP(n.mode??null);K(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=PP(e);try{return new bg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.providerId=Co.PROVIDER_ID}static credential(e,n){return ol._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bg.parseLink(n);return K(r,"argument-error"),ol._fromEmailAndCode(e,r.code,r.tenantId)}}Co.PROVIDER_ID="password";Co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pl extends wI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Pl{constructor(){super("facebook.com")}static credential(e){return Zs._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";jr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zs._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Lr.credential(n,r)}catch{return null}}}Lr.GOOGLE_SIGN_IN_METHOD="google.com";Lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Pl{constructor(){super("github.com")}static credential(e){return Zs._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.GITHUB_SIGN_IN_METHOD="github.com";Mr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Pl{constructor(){super("twitter.com")}static credential(e,n){return Zs._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vr.credential(n,r)}catch{return null}}}Vr.TWITTER_SIGN_IN_METHOD="twitter.com";Vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e){return Al(t,"POST","/v1/accounts:signUp",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await fn._fromIdTokenResponse(e,r,s),o=w0(r);return new ei({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=w0(r);return new ei({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function w0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu extends zn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Lu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Lu(e,n,r,s)}}function xI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Lu._fromErrorAndOperation(t,i,e,r):i})}async function OP(t,e,n=!1){const r=await il(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ei._forOperation(t,"link",r)}/**
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
 */async function jP(t,e,n=!1){const{auth:r}=t;if(Rt(r.app))return Promise.reject(tr(r));const s="reauthenticate";try{const i=await il(t,xI(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=Cg(i.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),ei._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e,n=!1){if(Rt(t.app))return Promise.reject(tr(t));const r="signIn",s=await xI(t,r,e),i=await ei._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function LP(t,e){return EI(ui(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(t,e,n){var r;K(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),K(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),K(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(K(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(K(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t){const e=ui(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function VP(t,e,n){if(Rt(t.app))return Promise.reject(tr(t));const r=ui(t),o=await Mp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",DP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&TI(t),l}),a=await ei._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function FP(t,e,n){return Rt(t.app)?Promise.reject(tr(t)):LP(Ee(t),Co.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&TI(t),r})}async function UP(t,e){const n=Ee(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&MP(n.auth,s,e);const{email:i}=await SP(n.auth,s);i!==t.email&&await t.reload()}function BP(t,e,n,r){return Ee(t).onIdTokenChanged(e,n,r)}function $P(t,e,n){return Ee(t).beforeAuthStateChanged(e,n)}function zP(t,e,n,r){return Ee(t).onAuthStateChanged(e,n,r)}function II(t){return Ee(t).signOut()}async function WP(t){return Ee(t).delete()}const Mu="__sak";/**
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
 */class CI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mu,"1"),this.storage.removeItem(Mu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=1e3,HP=10;class NI extends CI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);iP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,HP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}NI.type="LOCAL";const GP=NI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI extends CI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}SI.type="SESSION";const bI=SI;/**
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
 */function KP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Vd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async d=>d(n.origin,i)),l=await KP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class QP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const d=kg("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===d)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return window}function YP(t){jn().location.href=t}/**
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
 */function kI(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function XP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function ZP(){return kI()?self:null}/**
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
 */const RI="firebaseLocalStorageDb",eD=1,Vu="firebaseLocalStorage",AI="fbase_key";class Dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fd(t,e){return t.transaction([Vu],e?"readwrite":"readonly").objectStore(Vu)}function tD(){const t=indexedDB.deleteDatabase(RI);return new Dl(t).toPromise()}function Vp(){const t=indexedDB.open(RI,eD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vu,{keyPath:AI})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vu)?e(r):(r.close(),await tD(),e(await Vp()))})})}async function x0(t,e,n){const r=Fd(t,!0).put({[AI]:e,value:n});return new Dl(r).toPromise()}async function nD(t,e){const n=Fd(t,!1).get(e),r=await new Dl(n).toPromise();return r===void 0?null:r.value}function E0(t,e){const n=Fd(t,!0).delete(e);return new Dl(n).toPromise()}const rD=800,sD=3;class PI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vd._getInstance(ZP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await XP(),!this.activeServiceWorker)return;this.sender=new QP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vp();return await x0(e,Mu,"1"),await E0(e,Mu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>x0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>E0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fd(s,!1).getAll();return new Dl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}PI.type="LOCAL";const iD=PI;new Rl(3e4,6e4);/**
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
 */function oD(t,e){return e?Jn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rg extends Sg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ki(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ki(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aD(t){return EI(t.auth,new Rg(t),t.bypassAuthState)}function lD(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),jP(n,new Rg(t),t.bypassAuthState)}async function cD(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),OP(n,new Rg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aD;case"linkViaPopup":case"linkViaRedirect":return cD;case"reauthViaPopup":case"reauthViaRedirect":return lD;default:Tn(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD=new Rl(2e3,1e4);class Mi extends DI{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Mi.currentPopupAction&&Mi.currentPopupAction.cancel(),Mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=kg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uD.get())};e()}}Mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD="pendingRedirect",Qc=new Map;class hD extends DI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qc.get(this.auth._key());if(!e){try{const r=await fD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qc.set(this.auth._key(),e)}return this.bypassAuthState||Qc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fD(t,e){const n=gD(e),r=mD(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function pD(t,e){Qc.set(t._key(),e)}function mD(t){return Jn(t._redirectPersistence)}function gD(t){return Kc(dD,t.config.apiKey,t.name)}async function yD(t,e,n=!1){if(Rt(t.app))return Promise.reject(tr(t));const r=ui(t),s=oD(r,e),o=await new hD(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=10*60*1e3;class vD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!OI(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(On(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_D&&this.cachedEventUids.clear(),this.cachedEventUids.has(T0(e))}saveEventToCache(e){this.cachedEventUids.add(T0(e)),this.lastProcessedEventTime=Date.now()}}function T0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function OI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return OI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xD(t,e={}){return vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TD=/^https?/;async function ID(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xD(t);for(const n of e)try{if(CD(n))return}catch{}Tn(t,"unauthorized-domain")}function CD(t){const e=jp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TD.test(n))return!1;if(ED.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ND=new Rl(3e4,6e4);function I0(){const t=jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SD(t){return new Promise((e,n)=>{var s,i,o;function r(){I0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{I0(),n(On(t,"network-request-failed"))},timeout:ND.get()})}if((i=(s=jn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=jn().gapi)!=null&&o.load)r();else{const a=pP("iframefcb");return jn()[a]=()=>{gapi.load?r():n(On(t,"network-request-failed"))},yI(`${fP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Yc=null,e})}let Yc=null;function bD(t){return Yc=Yc||SD(t),Yc}/**
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
 */const kD=new Rl(5e3,15e3),RD="__/auth/iframe",AD="emulator/auth/iframe",PD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OD(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ig(e,AD):`https://${t.config.authDomain}/${RD}`,r={apiKey:e.apiKey,appName:t.name,v:xs},s=DD.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Io(r).slice(1)}`}async function jD(t){const e=await bD(t),n=jn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:OD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PD,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=On(t,"network-request-failed"),a=jn().setTimeout(()=>{i(o)},kD.get());function l(){jn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const LD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MD=500,VD=600,FD="_blank",UD="http://localhost";class C0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BD(t,e,n,r=MD,s=VD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...LD,width:r.toString(),height:s.toString(),top:i,left:o},d=wt().toLowerCase();n&&(a=uI(d)?FD:n),lI(d)&&(e=e||UD,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[_,T])=>`${m}${_}=${T},`,"");if(sP(d)&&a!=="_self")return $D(e||"",a),new C0(null);const f=window.open(e||"",a,h);K(f,t,"popup-blocked");try{f.focus()}catch{}return new C0(f)}function $D(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const zD="__/auth/handler",WD="emulator/auth/handler",qD=encodeURIComponent("fac");async function N0(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xs,eventId:s};if(e instanceof wI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Pl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),d=l?`#${qD}=${encodeURIComponent(l)}`:"";return`${HD(t)}?${Io(a).slice(1)}${d}`}function HD({config:t}){return t.emulator?Ig(t,WD):`https://${t.authDomain}/${zD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="webStorageSupport";class GD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bI,this._completeRedirectFn=yD,this._overrideRedirectResult=pD}async _openPopup(e,n,r,s){var o;ur((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await N0(e,n,r,jp(),s);return BD(e,i,kg())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await N0(e,n,r,jp(),s);return YP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ur(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jD(e),r=new vD(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vf,{type:vf},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[vf];i!==void 0&&n(!!i),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ID(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mI()||cI()||Ng()}}const KD=GD;var S0="@firebase/auth",b0="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XD(t){ls(new lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gI(t)},d=new uP(r,s,i,l);return wP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ls(new lr("auth-internal",e=>{const n=ui(e.getProvider("auth").getImmediate());return(r=>new QD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(S0,b0,YD(t)),nn(S0,b0,"esm2020")}/**
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
 */const JD=5*60,ZD=qT("authIdTokenMaxAge")||JD;let k0=null;const e2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZD)return;const s=n==null?void 0:n.token;k0!==s&&(k0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function t2(t=Ld()){const e=kl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vP(t,{popupRedirectResolver:KD,persistence:[iD,GP,bI]}),r=qT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=e2(i.toString());$P(n,o,()=>o(n.currentUser)),BP(n,a=>o(a))}}const s=zT("auth");return s&&xP(n,`http://${s}`),n}function n2(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}dP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=On("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",n2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XD("Browser");var R0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,jI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,y){function E(){}E.prototype=y.prototype,x.F=y.prototype,x.prototype=new E,x.prototype.constructor=x,x.D=function(S,b,P){for(var I=Array(arguments.length-2),he=2;he<arguments.length;he++)I[he-2]=arguments[he];return y.prototype[b].apply(S,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,y,E){E||(E=0);const S=Array(16);if(typeof y=="string")for(var b=0;b<16;++b)S[b]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(b=0;b<16;++b)S[b]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=x.g[0],E=x.g[1],b=x.g[2];let P=x.g[3],I;I=y+(P^E&(b^P))+S[0]+3614090360&4294967295,y=E+(I<<7&4294967295|I>>>25),I=P+(b^y&(E^b))+S[1]+3905402710&4294967295,P=y+(I<<12&4294967295|I>>>20),I=b+(E^P&(y^E))+S[2]+606105819&4294967295,b=P+(I<<17&4294967295|I>>>15),I=E+(y^b&(P^y))+S[3]+3250441966&4294967295,E=b+(I<<22&4294967295|I>>>10),I=y+(P^E&(b^P))+S[4]+4118548399&4294967295,y=E+(I<<7&4294967295|I>>>25),I=P+(b^y&(E^b))+S[5]+1200080426&4294967295,P=y+(I<<12&4294967295|I>>>20),I=b+(E^P&(y^E))+S[6]+2821735955&4294967295,b=P+(I<<17&4294967295|I>>>15),I=E+(y^b&(P^y))+S[7]+4249261313&4294967295,E=b+(I<<22&4294967295|I>>>10),I=y+(P^E&(b^P))+S[8]+1770035416&4294967295,y=E+(I<<7&4294967295|I>>>25),I=P+(b^y&(E^b))+S[9]+2336552879&4294967295,P=y+(I<<12&4294967295|I>>>20),I=b+(E^P&(y^E))+S[10]+4294925233&4294967295,b=P+(I<<17&4294967295|I>>>15),I=E+(y^b&(P^y))+S[11]+2304563134&4294967295,E=b+(I<<22&4294967295|I>>>10),I=y+(P^E&(b^P))+S[12]+1804603682&4294967295,y=E+(I<<7&4294967295|I>>>25),I=P+(b^y&(E^b))+S[13]+4254626195&4294967295,P=y+(I<<12&4294967295|I>>>20),I=b+(E^P&(y^E))+S[14]+2792965006&4294967295,b=P+(I<<17&4294967295|I>>>15),I=E+(y^b&(P^y))+S[15]+1236535329&4294967295,E=b+(I<<22&4294967295|I>>>10),I=y+(b^P&(E^b))+S[1]+4129170786&4294967295,y=E+(I<<5&4294967295|I>>>27),I=P+(E^b&(y^E))+S[6]+3225465664&4294967295,P=y+(I<<9&4294967295|I>>>23),I=b+(y^E&(P^y))+S[11]+643717713&4294967295,b=P+(I<<14&4294967295|I>>>18),I=E+(P^y&(b^P))+S[0]+3921069994&4294967295,E=b+(I<<20&4294967295|I>>>12),I=y+(b^P&(E^b))+S[5]+3593408605&4294967295,y=E+(I<<5&4294967295|I>>>27),I=P+(E^b&(y^E))+S[10]+38016083&4294967295,P=y+(I<<9&4294967295|I>>>23),I=b+(y^E&(P^y))+S[15]+3634488961&4294967295,b=P+(I<<14&4294967295|I>>>18),I=E+(P^y&(b^P))+S[4]+3889429448&4294967295,E=b+(I<<20&4294967295|I>>>12),I=y+(b^P&(E^b))+S[9]+568446438&4294967295,y=E+(I<<5&4294967295|I>>>27),I=P+(E^b&(y^E))+S[14]+3275163606&4294967295,P=y+(I<<9&4294967295|I>>>23),I=b+(y^E&(P^y))+S[3]+4107603335&4294967295,b=P+(I<<14&4294967295|I>>>18),I=E+(P^y&(b^P))+S[8]+1163531501&4294967295,E=b+(I<<20&4294967295|I>>>12),I=y+(b^P&(E^b))+S[13]+2850285829&4294967295,y=E+(I<<5&4294967295|I>>>27),I=P+(E^b&(y^E))+S[2]+4243563512&4294967295,P=y+(I<<9&4294967295|I>>>23),I=b+(y^E&(P^y))+S[7]+1735328473&4294967295,b=P+(I<<14&4294967295|I>>>18),I=E+(P^y&(b^P))+S[12]+2368359562&4294967295,E=b+(I<<20&4294967295|I>>>12),I=y+(E^b^P)+S[5]+4294588738&4294967295,y=E+(I<<4&4294967295|I>>>28),I=P+(y^E^b)+S[8]+2272392833&4294967295,P=y+(I<<11&4294967295|I>>>21),I=b+(P^y^E)+S[11]+1839030562&4294967295,b=P+(I<<16&4294967295|I>>>16),I=E+(b^P^y)+S[14]+4259657740&4294967295,E=b+(I<<23&4294967295|I>>>9),I=y+(E^b^P)+S[1]+2763975236&4294967295,y=E+(I<<4&4294967295|I>>>28),I=P+(y^E^b)+S[4]+1272893353&4294967295,P=y+(I<<11&4294967295|I>>>21),I=b+(P^y^E)+S[7]+4139469664&4294967295,b=P+(I<<16&4294967295|I>>>16),I=E+(b^P^y)+S[10]+3200236656&4294967295,E=b+(I<<23&4294967295|I>>>9),I=y+(E^b^P)+S[13]+681279174&4294967295,y=E+(I<<4&4294967295|I>>>28),I=P+(y^E^b)+S[0]+3936430074&4294967295,P=y+(I<<11&4294967295|I>>>21),I=b+(P^y^E)+S[3]+3572445317&4294967295,b=P+(I<<16&4294967295|I>>>16),I=E+(b^P^y)+S[6]+76029189&4294967295,E=b+(I<<23&4294967295|I>>>9),I=y+(E^b^P)+S[9]+3654602809&4294967295,y=E+(I<<4&4294967295|I>>>28),I=P+(y^E^b)+S[12]+3873151461&4294967295,P=y+(I<<11&4294967295|I>>>21),I=b+(P^y^E)+S[15]+530742520&4294967295,b=P+(I<<16&4294967295|I>>>16),I=E+(b^P^y)+S[2]+3299628645&4294967295,E=b+(I<<23&4294967295|I>>>9),I=y+(b^(E|~P))+S[0]+4096336452&4294967295,y=E+(I<<6&4294967295|I>>>26),I=P+(E^(y|~b))+S[7]+1126891415&4294967295,P=y+(I<<10&4294967295|I>>>22),I=b+(y^(P|~E))+S[14]+2878612391&4294967295,b=P+(I<<15&4294967295|I>>>17),I=E+(P^(b|~y))+S[5]+4237533241&4294967295,E=b+(I<<21&4294967295|I>>>11),I=y+(b^(E|~P))+S[12]+1700485571&4294967295,y=E+(I<<6&4294967295|I>>>26),I=P+(E^(y|~b))+S[3]+2399980690&4294967295,P=y+(I<<10&4294967295|I>>>22),I=b+(y^(P|~E))+S[10]+4293915773&4294967295,b=P+(I<<15&4294967295|I>>>17),I=E+(P^(b|~y))+S[1]+2240044497&4294967295,E=b+(I<<21&4294967295|I>>>11),I=y+(b^(E|~P))+S[8]+1873313359&4294967295,y=E+(I<<6&4294967295|I>>>26),I=P+(E^(y|~b))+S[15]+4264355552&4294967295,P=y+(I<<10&4294967295|I>>>22),I=b+(y^(P|~E))+S[6]+2734768916&4294967295,b=P+(I<<15&4294967295|I>>>17),I=E+(P^(b|~y))+S[13]+1309151649&4294967295,E=b+(I<<21&4294967295|I>>>11),I=y+(b^(E|~P))+S[4]+4149444226&4294967295,y=E+(I<<6&4294967295|I>>>26),I=P+(E^(y|~b))+S[11]+3174756917&4294967295,P=y+(I<<10&4294967295|I>>>22),I=b+(y^(P|~E))+S[2]+718787259&4294967295,b=P+(I<<15&4294967295|I>>>17),I=E+(P^(b|~y))+S[9]+3951481745&4294967295,x.g[0]=x.g[0]+y&4294967295,x.g[1]=x.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,x.g[2]=x.g[2]+b&4294967295,x.g[3]=x.g[3]+P&4294967295}r.prototype.v=function(x,y){y===void 0&&(y=x.length);const E=y-this.blockSize,S=this.C;let b=this.h,P=0;for(;P<y;){if(b==0)for(;P<=E;)s(this,x,P),P+=this.blockSize;if(typeof x=="string"){for(;P<y;)if(S[b++]=x.charCodeAt(P++),b==this.blockSize){s(this,S),b=0;break}}else for(;P<y;)if(S[b++]=x[P++],b==this.blockSize){s(this,S),b=0;break}}this.h=b,this.o+=y},r.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var y=1;y<x.length-8;++y)x[y]=0;y=this.o*8;for(var E=x.length-8;E<x.length;++E)x[E]=y&255,y/=256;for(this.v(x),x=Array(16),y=0,E=0;E<4;++E)for(let S=0;S<32;S+=8)x[y++]=this.g[E]>>>S&255;return x};function i(x,y){var E=a;return Object.prototype.hasOwnProperty.call(E,x)?E[x]:E[x]=y(x)}function o(x,y){this.h=y;const E=[];let S=!0;for(let b=x.length-1;b>=0;b--){const P=x[b]|0;S&&P==y||(E[b]=P,S=!1)}this.g=E}var a={};function l(x){return-128<=x&&x<128?i(x,function(y){return new o([y|0],y<0?-1:0)}):new o([x|0],x<0?-1:0)}function d(x){if(isNaN(x)||!isFinite(x))return f;if(x<0)return R(d(-x));const y=[];let E=1;for(let S=0;x>=E;S++)y[S]=x/E|0,E*=4294967296;return new o(y,0)}function h(x,y){if(x.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(x.charAt(0)=="-")return R(h(x.substring(1),y));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=d(Math.pow(y,8));let S=f;for(let P=0;P<x.length;P+=8){var b=Math.min(8,x.length-P);const I=parseInt(x.substring(P,P+b),y);b<8?(b=d(Math.pow(y,b)),S=S.j(b).add(d(I))):(S=S.j(E),S=S.add(d(I)))}return S}var f=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-R(this).m();let x=0,y=1;for(let E=0;E<this.g.length;E++){const S=this.i(E);x+=(S>=0?S:4294967296+S)*y,y*=4294967296}return x},t.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(T(this))return"0";if(k(this))return"-"+R(this).toString(x);const y=d(Math.pow(x,6));var E=this;let S="";for(;;){const b=O(E,y).g;E=N(E,b.j(y));let P=((E.g.length>0?E.g[0]:E.h)>>>0).toString(x);if(E=b,T(E))return P+S;for(;P.length<6;)P="0"+P;S=P+S}},t.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function T(x){if(x.h!=0)return!1;for(let y=0;y<x.g.length;y++)if(x.g[y]!=0)return!1;return!0}function k(x){return x.h==-1}t.l=function(x){return x=N(this,x),k(x)?-1:T(x)?0:1};function R(x){const y=x.g.length,E=[];for(let S=0;S<y;S++)E[S]=~x.g[S];return new o(E,~x.h).add(m)}t.abs=function(){return k(this)?R(this):this},t.add=function(x){const y=Math.max(this.g.length,x.g.length),E=[];let S=0;for(let b=0;b<=y;b++){let P=S+(this.i(b)&65535)+(x.i(b)&65535),I=(P>>>16)+(this.i(b)>>>16)+(x.i(b)>>>16);S=I>>>16,P&=65535,I&=65535,E[b]=I<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function N(x,y){return x.add(R(y))}t.j=function(x){if(T(this)||T(x))return f;if(k(this))return k(x)?R(this).j(R(x)):R(R(this).j(x));if(k(x))return R(this.j(R(x)));if(this.l(_)<0&&x.l(_)<0)return d(this.m()*x.m());const y=this.g.length+x.g.length,E=[];for(var S=0;S<2*y;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(let b=0;b<x.g.length;b++){const P=this.i(S)>>>16,I=this.i(S)&65535,he=x.i(b)>>>16,Te=x.i(b)&65535;E[2*S+2*b]+=I*Te,w(E,2*S+2*b),E[2*S+2*b+1]+=P*Te,w(E,2*S+2*b+1),E[2*S+2*b+1]+=I*he,w(E,2*S+2*b+1),E[2*S+2*b+2]+=P*he,w(E,2*S+2*b+2)}for(x=0;x<y;x++)E[x]=E[2*x+1]<<16|E[2*x];for(x=y;x<2*y;x++)E[x]=0;return new o(E,0)};function w(x,y){for(;(x[y]&65535)!=x[y];)x[y+1]+=x[y]>>>16,x[y]&=65535,y++}function C(x,y){this.g=x,this.h=y}function O(x,y){if(T(y))throw Error("division by zero");if(T(x))return new C(f,f);if(k(x))return y=O(R(x),y),new C(R(y.g),R(y.h));if(k(y))return y=O(x,R(y)),new C(R(y.g),y.h);if(x.g.length>30){if(k(x)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,S=y;S.l(x)<=0;)E=M(E),S=M(S);var b=L(E,1),P=L(S,1);for(S=L(S,2),E=L(E,2);!T(S);){var I=P.add(S);I.l(x)<=0&&(b=b.add(E),P=I),S=L(S,1),E=L(E,1)}return y=N(x,b.j(y)),new C(b,y)}for(b=f;x.l(y)>=0;){for(E=Math.max(1,Math.floor(x.m()/y.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),P=d(E),I=P.j(y);k(I)||I.l(x)>0;)E-=S,P=d(E),I=P.j(y);T(P)&&(P=m),b=b.add(P),x=N(x,I)}return new C(b,x)}t.B=function(x){return O(this,x).h},t.and=function(x){const y=Math.max(this.g.length,x.g.length),E=[];for(let S=0;S<y;S++)E[S]=this.i(S)&x.i(S);return new o(E,this.h&x.h)},t.or=function(x){const y=Math.max(this.g.length,x.g.length),E=[];for(let S=0;S<y;S++)E[S]=this.i(S)|x.i(S);return new o(E,this.h|x.h)},t.xor=function(x){const y=Math.max(this.g.length,x.g.length),E=[];for(let S=0;S<y;S++)E[S]=this.i(S)^x.i(S);return new o(E,this.h^x.h)};function M(x){const y=x.g.length+1,E=[];for(let S=0;S<y;S++)E[S]=x.i(S)<<1|x.i(S-1)>>>31;return new o(E,x.h)}function L(x,y){const E=y>>5;y%=32;const S=x.g.length-E,b=[];for(let P=0;P<S;P++)b[P]=y>0?x.i(P+E)>>>y|x.i(P+E+1)<<32-y:x.i(P+E);return new o(b,x.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,jI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=h,es=o}).apply(typeof R0<"u"?R0:typeof self<"u"?self:typeof window<"u"?window:{});var Nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var LI,ga,MI,Xc,Fp,VI,FI,UI;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nc=="object"&&Nc];for(var p=0;p<c.length;++p){var g=c[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(c,p){if(p)e:{var g=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var D=c[v];if(!(D in g))break e;g=g[D]}c=c[c.length-1],v=g[c],p=p(v),p!=v&&p!=null&&e(g,c,{configurable:!0,writable:!0,value:p})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(p){var g=[],v;for(v in p)Object.prototype.hasOwnProperty.call(p,v)&&g.push([v,p[v]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function l(c,p,g){return c.call.apply(c.bind,arguments)}function d(c,p,g){return d=l,d.apply(null,arguments)}function h(c,p){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function f(c,p){function g(){}g.prototype=p.prototype,c.Z=p.prototype,c.prototype=new g,c.prototype.constructor=c,c.Ob=function(v,D,j){for(var $=Array(arguments.length-2),te=2;te<arguments.length;te++)$[te-2]=arguments[te];return p.prototype[D].apply(v,$)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function _(c){const p=c.length;if(p>0){const g=Array(p);for(let v=0;v<p;v++)g[v]=c[v];return g}return[]}function T(c,p){for(let v=1;v<arguments.length;v++){const D=arguments[v];var g=typeof D;if(g=g!="object"?g:D?Array.isArray(D)?"array":g:"null",g=="array"||g=="object"&&typeof D.length=="number"){g=c.length||0;const j=D.length||0;c.length=g+j;for(let $=0;$<j;$++)c[g+$]=D[$]}else c.push(D)}}class k{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function R(c){o.setTimeout(()=>{throw c},0)}function N(){var c=x;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class w{constructor(){this.h=this.g=null}add(p,g){const v=C.get();v.set(p,g),this.h?this.h.next=v:this.g=v,this.h=v}}var C=new k(()=>new O,c=>c.reset());class O{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let M,L=!1,x=new w,y=()=>{const c=Promise.resolve(void 0);M=()=>{c.then(E)}};function E(){for(var c;c=N();){try{c.h.call(c.g)}catch(g){R(g)}var p=C;p.j(c),p.h<100&&(p.h++,c.next=p.g,p.g=c)}L=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};o.addEventListener("test",g,p),o.removeEventListener("test",g,p)}catch{}return c}();function I(c){return/^[\s\xa0]*$/.test(c)}function he(c,p){b.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,p)}f(he,b),he.prototype.init=function(c,p){const g=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget,p||(g=="mouseover"?p=c.fromElement:g=="mouseout"&&(p=c.toElement)),this.relatedTarget=p,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&he.Z.h.call(this)},he.prototype.h=function(){he.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Te="closure_listenable_"+(Math.random()*1e6|0),st=0;function on(c,p,g,v,D){this.listener=c,this.proxy=null,this.src=p,this.type=g,this.capture=!!v,this.ha=D,this.key=++st,this.da=this.fa=!1}function z(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function X(c,p,g){for(const v in c)p.call(g,c[v],v,c)}function ee(c,p){for(const g in c)p.call(void 0,c[g],g,c)}function be(c){const p={};for(const g in c)p[g]=c[g];return p}const Ve="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bs(c,p){let g,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(g in v)c[g]=v[g];for(let j=0;j<Ve.length;j++)g=Ve[j],Object.prototype.hasOwnProperty.call(v,g)&&(c[g]=v[g])}}function Yt(c){this.src=c,this.g={},this.h=0}Yt.prototype.add=function(c,p,g,v,D){const j=c.toString();c=this.g[j],c||(c=this.g[j]=[],this.h++);const $=an(c,p,v,D);return $>-1?(p=c[$],g||(p.fa=!1)):(p=new on(p,this.src,j,!!v,D),p.fa=g,c.push(p)),p};function ks(c,p){const g=p.type;if(g in c.g){var v=c.g[g],D=Array.prototype.indexOf.call(v,p,void 0),j;(j=D>=0)&&Array.prototype.splice.call(v,D,1),j&&(z(p),c.g[g].length==0&&(delete c.g[g],c.h--))}}function an(c,p,g,v){for(let D=0;D<c.length;++D){const j=c[D];if(!j.da&&j.listener==p&&j.capture==!!g&&j.ha==v)return D}return-1}var Er="closure_lm_"+(Math.random()*1e6|0),vh={};function Gy(c,p,g,v,D){if(Array.isArray(p)){for(let j=0;j<p.length;j++)Gy(c,p[j],g,v,D);return null}return g=Yy(g),c&&c[Te]?c.J(p,g,a(v)?!!v.capture:!1,D):QS(c,p,g,!1,v,D)}function QS(c,p,g,v,D,j){if(!p)throw Error("Invalid event type");const $=a(D)?!!D.capture:!!D;let te=xh(c);if(te||(c[Er]=te=new Yt(c)),g=te.add(p,g,v,$,j),g.proxy)return g;if(v=YS(),g.proxy=v,v.src=c,v.listener=g,c.addEventListener)P||(D=$),D===void 0&&(D=!1),c.addEventListener(p.toString(),v,D);else if(c.attachEvent)c.attachEvent(Qy(p.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function YS(){function c(g){return p.call(c.src,c.listener,g)}const p=XS;return c}function Ky(c,p,g,v,D){if(Array.isArray(p))for(var j=0;j<p.length;j++)Ky(c,p[j],g,v,D);else v=a(v)?!!v.capture:!!v,g=Yy(g),c&&c[Te]?(c=c.i,j=String(p).toString(),j in c.g&&(p=c.g[j],g=an(p,g,v,D),g>-1&&(z(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete c.g[j],c.h--)))):c&&(c=xh(c))&&(p=c.g[p.toString()],c=-1,p&&(c=an(p,g,v,D)),(g=c>-1?p[c]:null)&&wh(g))}function wh(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[Te])ks(p.i,c);else{var g=c.type,v=c.proxy;p.removeEventListener?p.removeEventListener(g,v,c.capture):p.detachEvent?p.detachEvent(Qy(g),v):p.addListener&&p.removeListener&&p.removeListener(v),(g=xh(p))?(ks(g,c),g.h==0&&(g.src=null,p[Er]=null)):z(c)}}}function Qy(c){return c in vh?vh[c]:vh[c]="on"+c}function XS(c,p){if(c.da)c=!0;else{p=new he(p,this);const g=c.listener,v=c.ha||c.src;c.fa&&wh(c),c=g.call(v,p)}return c}function xh(c){return c=c[Er],c instanceof Yt?c:null}var Eh="__closure_events_fn_"+(Math.random()*1e9>>>0);function Yy(c){return typeof c=="function"?c:(c[Eh]||(c[Eh]=function(p){return c.handleEvent(p)}),c[Eh])}function ut(){S.call(this),this.i=new Yt(this),this.M=this,this.G=null}f(ut,S),ut.prototype[Te]=!0,ut.prototype.removeEventListener=function(c,p,g,v){Ky(this,c,p,g,v)};function xt(c,p){var g,v=c.G;if(v)for(g=[];v;v=v.G)g.push(v);if(c=c.M,v=p.type||p,typeof p=="string")p=new b(p,c);else if(p instanceof b)p.target=p.target||c;else{var D=p;p=new b(v,c),bs(p,D)}D=!0;let j,$;if(g)for($=g.length-1;$>=0;$--)j=p.g=g[$],D=Yl(j,v,!0,p)&&D;if(j=p.g=c,D=Yl(j,v,!0,p)&&D,D=Yl(j,v,!1,p)&&D,g)for($=0;$<g.length;$++)j=p.g=g[$],D=Yl(j,v,!1,p)&&D}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var c=this.i;for(const p in c.g){const g=c.g[p];for(let v=0;v<g.length;v++)z(g[v]);delete c.g[p],c.h--}}this.G=null},ut.prototype.J=function(c,p,g,v){return this.i.add(String(c),p,!1,g,v)},ut.prototype.K=function(c,p,g,v){return this.i.add(String(c),p,!0,g,v)};function Yl(c,p,g,v){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();let D=!0;for(let j=0;j<p.length;++j){const $=p[j];if($&&!$.da&&$.capture==g){const te=$.listener,He=$.ha||$.src;$.fa&&ks(c.i,$),D=te.call(He,v)!==!1&&D}}return D&&!v.defaultPrevented}function JS(c,p){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=d(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:o.setTimeout(c,p||0)}function Xy(c){c.g=JS(()=>{c.g=null,c.i&&(c.i=!1,Xy(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class ZS extends S{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Xy(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jo(c){S.call(this),this.h=c,this.g={}}f(jo,S);var Jy=[];function Zy(c){X(c.g,function(p,g){this.g.hasOwnProperty(g)&&wh(p)},c),c.g={}}jo.prototype.N=function(){jo.Z.N.call(this),Zy(this)},jo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Th=o.JSON.stringify,eb=o.JSON.parse,tb=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function e_(){}function t_(){}var Lo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ih(){b.call(this,"d")}f(Ih,b);function Ch(){b.call(this,"c")}f(Ch,b);var Rs={},n_=null;function Xl(){return n_=n_||new ut}Rs.Ia="serverreachability";function r_(c){b.call(this,Rs.Ia,c)}f(r_,b);function Mo(c){const p=Xl();xt(p,new r_(p))}Rs.STAT_EVENT="statevent";function s_(c,p){b.call(this,Rs.STAT_EVENT,c),this.stat=p}f(s_,b);function Et(c){const p=Xl();xt(p,new s_(p,c))}Rs.Ja="timingevent";function i_(c,p){b.call(this,Rs.Ja,c),this.size=p}f(i_,b);function Vo(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},p)}function Fo(){this.g=!0}Fo.prototype.ua=function(){this.g=!1};function nb(c,p,g,v,D,j){c.info(function(){if(c.g)if(j){var $="",te=j.split("&");for(let ye=0;ye<te.length;ye++){var He=te[ye].split("=");if(He.length>1){const Xe=He[0];He=He[1];const Nn=Xe.split("_");$=Nn.length>=2&&Nn[1]=="type"?$+(Xe+"="+He+"&"):$+(Xe+"=redacted&")}}}else $=null;else $=j;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+p+`
`+g+`
`+$})}function rb(c,p,g,v,D,j,$){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+p+`
`+g+`
`+j+" "+$})}function gi(c,p,g,v){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+ib(c,g)+(v?" "+v:"")})}function sb(c,p){c.info(function(){return"TIMEOUT: "+p})}Fo.prototype.info=function(){};function ib(c,p){if(!c.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(c=0;c<j.length;c++)if(Array.isArray(j[c])){var g=j[c];if(!(g.length<2)){var v=g[1];if(Array.isArray(v)&&!(v.length<1)){var D=v[0];if(D!="noop"&&D!="stop"&&D!="close")for(let $=1;$<v.length;$++)v[$]=""}}}}return Th(j)}catch{return p}}var Jl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},o_={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},a_;function Nh(){}f(Nh,e_),Nh.prototype.g=function(){return new XMLHttpRequest},a_=new Nh;function Uo(c){return encodeURIComponent(String(c))}function ob(c){var p=1;c=c.split(":");const g=[];for(;p>0&&c.length;)g.push(c.shift()),p--;return c.length&&g.push(c.join(":")),g}function Tr(c,p,g,v){this.j=c,this.i=p,this.l=g,this.S=v||1,this.V=new jo(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new l_}function l_(){this.i=null,this.g="",this.h=!1}var c_={},Sh={};function bh(c,p,g){c.M=1,c.A=ec(Cn(p)),c.u=g,c.R=!0,u_(c,null)}function u_(c,p){c.F=Date.now(),Zl(c),c.B=Cn(c.A);var g=c.B,v=c.S;Array.isArray(v)||(v=[String(v)]),T_(g.i,"t",v),c.C=0,g=c.j.L,c.h=new l_,c.g=B_(c.j,g?p:null,!c.u),c.P>0&&(c.O=new ZS(d(c.Y,c,c.g),c.P)),p=c.V,g=c.g,v=c.ba;var D="readystatechange";Array.isArray(D)||(D&&(Jy[0]=D.toString()),D=Jy);for(let j=0;j<D.length;j++){const $=Gy(g,D[j],v||p.handleEvent,!1,p.h||p);if(!$)break;p.g[$.key]=$}p=c.J?be(c.J):{},c.u?(c.v||(c.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,p)):(c.v="GET",c.g.ea(c.B,c.v,null,p)),Mo(),nb(c.i,c.v,c.B,c.l,c.S,c.u)}Tr.prototype.ba=function(c){c=c.target;const p=this.O;p&&Nr(c)==3?p.j():this.Y(c)},Tr.prototype.Y=function(c){try{if(c==this.g)e:{const te=Nr(this.g),He=this.g.ya(),ye=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||R_(this.g)))){this.K||te!=4||He==7||(He==8||ye<=0?Mo(3):Mo(2)),kh(this);var p=this.g.ca();this.X=p;var g=ab(this);if(this.o=p==200,rb(this.i,this.v,this.B,this.l,this.S,te,p),this.o){if(this.U&&!this.L){t:{if(this.g){var v,D=this.g;if((v=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(v)){var j=v;break t}}j=null}if(c=j)gi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Rh(this,c);else{this.o=!1,this.m=3,Et(12),As(this),Bo(this);break e}}if(this.R){c=!0;let Xe;for(;!this.K&&this.C<g.length;)if(Xe=lb(this,g),Xe==Sh){te==4&&(this.m=4,Et(14),c=!1),gi(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==c_){this.m=4,Et(15),gi(this.i,this.l,g,"[Invalid Chunk]"),c=!1;break}else gi(this.i,this.l,Xe,null),Rh(this,Xe);if(d_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||g.length!=0||this.h.h||(this.m=1,Et(16),c=!1),this.o=this.o&&c,!c)gi(this.i,this.l,g,"[Invalid Chunked Response]"),As(this),Bo(this);else if(g.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Vh($),$.P=!0,Et(11))}}else gi(this.i,this.l,g,null),Rh(this,g);te==4&&As(this),this.o&&!this.K&&(te==4?M_(this.j,this):(this.o=!1,Zl(this)))}else Eb(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,Et(12)):(this.m=0,Et(13)),As(this),Bo(this)}}}catch{}finally{}};function ab(c){if(!d_(c))return c.g.la();const p=R_(c.g);if(p==="")return"";let g="";const v=p.length,D=Nr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return As(c),Bo(c),"";c.h.i=new o.TextDecoder}for(let j=0;j<v;j++)c.h.h=!0,g+=c.h.i.decode(p[j],{stream:!(D&&j==v-1)});return p.length=0,c.h.g+=g,c.C=0,c.h.g}function d_(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function lb(c,p){var g=c.C,v=p.indexOf(`
`,g);return v==-1?Sh:(g=Number(p.substring(g,v)),isNaN(g)?c_:(v+=1,v+g>p.length?Sh:(p=p.slice(v,v+g),c.C=v+g,p)))}Tr.prototype.cancel=function(){this.K=!0,As(this)};function Zl(c){c.T=Date.now()+c.H,h_(c,c.H)}function h_(c,p){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Vo(d(c.aa,c),p)}function kh(c){c.D&&(o.clearTimeout(c.D),c.D=null)}Tr.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(sb(this.i,this.B),this.M!=2&&(Mo(),Et(17)),As(this),this.m=2,Bo(this)):h_(this,this.T-c)};function Bo(c){c.j.I==0||c.K||M_(c.j,c)}function As(c){kh(c);var p=c.O;p&&typeof p.dispose=="function"&&p.dispose(),c.O=null,Zy(c.V),c.g&&(p=c.g,c.g=null,p.abort(),p.dispose())}function Rh(c,p){try{var g=c.j;if(g.I!=0&&(g.g==c||Ah(g.h,c))){if(!c.L&&Ah(g.h,c)&&g.I==3){try{var v=g.Ba.g.parse(p)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<c.F)ic(g),rc(g);else break e;Mh(g),Et(18)}}else g.xa=D[1],0<g.xa-g.K&&D[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Vo(d(g.Va,g),6e3));m_(g.h)<=1&&g.ta&&(g.ta=void 0)}else Ds(g,11)}else if((c.L||g.g==c)&&ic(g),!I(p))for(D=g.Ba.g.parse(p),p=0;p<D.length;p++){let ye=D[p];const Xe=ye[0];if(!(Xe<=g.K))if(g.K=Xe,ye=ye[1],g.I==2)if(ye[0]=="c"){g.M=ye[1],g.ba=ye[2];const Nn=ye[3];Nn!=null&&(g.ka=Nn,g.j.info("VER="+g.ka));const Os=ye[4];Os!=null&&(g.za=Os,g.j.info("SVER="+g.za));const Sr=ye[5];Sr!=null&&typeof Sr=="number"&&Sr>0&&(v=1.5*Sr,g.O=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const br=c.g;if(br){const ac=br.g?br.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ac){var j=v.h;j.g||ac.indexOf("spdy")==-1&&ac.indexOf("quic")==-1&&ac.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Ph(j,j.h),j.h=null))}if(v.G){const Fh=br.g?br.g.getResponseHeader("X-HTTP-Session-Id"):null;Fh&&(v.wa=Fh,Ie(v.J,v.G,Fh))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-c.F,g.j.info("Handshake RTT: "+g.T+"ms")),v=g;var $=c;if(v.na=U_(v,v.L?v.ba:null,v.W),$.L){g_(v.h,$);var te=$,He=v.O;He&&(te.H=He),te.D&&(kh(te),Zl(te)),v.g=$}else j_(v);g.i.length>0&&sc(g)}else ye[0]!="stop"&&ye[0]!="close"||Ds(g,7);else g.I==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?Ds(g,7):Lh(g):ye[0]!="noop"&&g.l&&g.l.qa(ye),g.A=0)}}Mo(4)}catch{}}var cb=class{constructor(c,p){this.g=c,this.map=p}};function f_(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function p_(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function m_(c){return c.h?1:c.g?c.g.size:0}function Ah(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function Ph(c,p){c.g?c.g.add(p):c.h=p}function g_(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}f_.prototype.cancel=function(){if(this.i=y_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function y_(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const g of c.g.values())p=p.concat(g.G);return p}return _(c.i)}var __=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ub(c,p){if(c){c=c.split("&");for(let g=0;g<c.length;g++){const v=c[g].indexOf("=");let D,j=null;v>=0?(D=c[g].substring(0,v),j=c[g].substring(v+1)):D=c[g],p(D,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Ir(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;c instanceof Ir?(this.l=c.l,$o(this,c.j),this.o=c.o,this.g=c.g,zo(this,c.u),this.h=c.h,Dh(this,I_(c.i)),this.m=c.m):c&&(p=String(c).match(__))?(this.l=!1,$o(this,p[1]||"",!0),this.o=Wo(p[2]||""),this.g=Wo(p[3]||"",!0),zo(this,p[4]),this.h=Wo(p[5]||"",!0),Dh(this,p[6]||"",!0),this.m=Wo(p[7]||"")):(this.l=!1,this.i=new Ho(null,this.l))}Ir.prototype.toString=function(){const c=[];var p=this.j;p&&c.push(qo(p,v_,!0),":");var g=this.g;return(g||p=="file")&&(c.push("//"),(p=this.o)&&c.push(qo(p,v_,!0),"@"),c.push(Uo(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&c.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(qo(g,g.charAt(0)=="/"?fb:hb,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",qo(g,mb)),c.join("")},Ir.prototype.resolve=function(c){const p=Cn(this);let g=!!c.j;g?$o(p,c.j):g=!!c.o,g?p.o=c.o:g=!!c.g,g?p.g=c.g:g=c.u!=null;var v=c.h;if(g)zo(p,c.u);else if(g=!!c.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var D=p.h.lastIndexOf("/");D!=-1&&(v=p.h.slice(0,D+1)+v)}if(D=v,D==".."||D==".")v="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){v=D.lastIndexOf("/",0)==0,D=D.split("/");const j=[];for(let $=0;$<D.length;){const te=D[$++];te=="."?v&&$==D.length&&j.push(""):te==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),v&&$==D.length&&j.push("")):(j.push(te),v=!0)}v=j.join("/")}else v=D}return g?p.h=v:g=c.i.toString()!=="",g?Dh(p,I_(c.i)):g=!!c.m,g&&(p.m=c.m),p};function Cn(c){return new Ir(c)}function $o(c,p,g){c.j=g?Wo(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function zo(c,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);c.u=p}else c.u=null}function Dh(c,p,g){p instanceof Ho?(c.i=p,gb(c.i,c.l)):(g||(p=qo(p,pb)),c.i=new Ho(p,c.l))}function Ie(c,p,g){c.i.set(p,g)}function ec(c){return Ie(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Wo(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function qo(c,p,g){return typeof c=="string"?(c=encodeURI(c).replace(p,db),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function db(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var v_=/[#\/\?@]/g,hb=/[#\?:]/g,fb=/[#\?]/g,pb=/[#\?@]/g,mb=/#/g;function Ho(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function Ps(c){c.g||(c.g=new Map,c.h=0,c.i&&ub(c.i,function(p,g){c.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}t=Ho.prototype,t.add=function(c,p){Ps(this),this.i=null,c=yi(this,c);let g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(p),this.h+=1,this};function w_(c,p){Ps(c),p=yi(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function x_(c,p){return Ps(c),p=yi(c,p),c.g.has(p)}t.forEach=function(c,p){Ps(this),this.g.forEach(function(g,v){g.forEach(function(D){c.call(p,D,v,this)},this)},this)};function E_(c,p){Ps(c);let g=[];if(typeof p=="string")x_(c,p)&&(g=g.concat(c.g.get(yi(c,p))));else for(c=Array.from(c.g.values()),p=0;p<c.length;p++)g=g.concat(c[p]);return g}t.set=function(c,p){return Ps(this),this.i=null,c=yi(this,c),x_(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},t.get=function(c,p){return c?(c=E_(this,c),c.length>0?String(c[0]):p):p};function T_(c,p,g){w_(c,p),g.length>0&&(c.i=null,c.g.set(yi(c,p),_(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(let v=0;v<p.length;v++){var g=p[v];const D=Uo(g);g=E_(this,g);for(let j=0;j<g.length;j++){let $=D;g[j]!==""&&($+="="+Uo(g[j])),c.push($)}}return this.i=c.join("&")};function I_(c){const p=new Ho;return p.i=c.i,c.g&&(p.g=new Map(c.g),p.h=c.h),p}function yi(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function gb(c,p){p&&!c.j&&(Ps(c),c.i=null,c.g.forEach(function(g,v){const D=v.toLowerCase();v!=D&&(w_(this,v),T_(this,D,g))},c)),c.j=p}function yb(c,p){const g=new Fo;if(o.Image){const v=new Image;v.onload=h(Cr,g,"TestLoadImage: loaded",!0,p,v),v.onerror=h(Cr,g,"TestLoadImage: error",!1,p,v),v.onabort=h(Cr,g,"TestLoadImage: abort",!1,p,v),v.ontimeout=h(Cr,g,"TestLoadImage: timeout",!1,p,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else p(!1)}function _b(c,p){const g=new Fo,v=new AbortController,D=setTimeout(()=>{v.abort(),Cr(g,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:v.signal}).then(j=>{clearTimeout(D),j.ok?Cr(g,"TestPingServer: ok",!0,p):Cr(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(D),Cr(g,"TestPingServer: error",!1,p)})}function Cr(c,p,g,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(g)}catch{}}function vb(){this.g=new tb}function Oh(c){this.i=c.Sb||null,this.h=c.ab||!1}f(Oh,e_),Oh.prototype.g=function(){return new tc(this.i,this.h)};function tc(c,p){ut.call(this),this.H=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(tc,ut),t=tc.prototype,t.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=p,this.readyState=1,Ko(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(p.body=c),(this.H||o).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Go(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ko(this)),this.g&&(this.readyState=3,Ko(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;C_(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function C_(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?Go(this):Ko(this),this.readyState==3&&C_(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,Go(this))},t.Na=function(c){this.g&&(this.response=c,Go(this))},t.ga=function(){this.g&&Go(this)};function Go(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Ko(c)}t.setRequestHeader=function(c,p){this.A.append(c,p)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=p.next();return c.join(`\r
`)};function Ko(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(tc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function N_(c){let p="";return X(c,function(g,v){p+=v,p+=":",p+=g,p+=`\r
`}),p}function jh(c,p,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=N_(g),typeof c=="string"?g!=null&&Uo(g):Ie(c,p,g))}function Oe(c){ut.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Oe,ut);var wb=/^https?$/i,xb=["POST","PUT"];t=Oe.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,p,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():a_.g(),this.g.onreadystatechange=m(d(this.Ca,this));try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(j){S_(this,j);return}if(c=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)g.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const j of v.keys())g.set(j,v.get(j));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),D=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(xb,p,void 0)>=0)||v||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,$]of g)this.g.setRequestHeader(j,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(j){S_(this,j)}};function S_(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.o=5,b_(c),nc(c)}function b_(c){c.A||(c.A=!0,xt(c,"complete"),xt(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,xt(this,"complete"),xt(this,"abort"),nc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nc(this,!0)),Oe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?k_(this):this.Xa())},t.Xa=function(){k_(this)};function k_(c){if(c.h&&typeof i<"u"){if(c.v&&Nr(c)==4)setTimeout(c.Ca.bind(c),0);else if(xt(c,"readystatechange"),Nr(c)==4){c.h=!1;try{const j=c.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var v;if(v=j===0){let $=String(c.D).match(__)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),v=!wb.test($?$.toLowerCase():"")}g=v}if(g)xt(c,"complete"),xt(c,"success");else{c.o=6;try{var D=Nr(c)>2?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.ca()+"]",b_(c)}}finally{nc(c)}}}}function nc(c,p){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const g=c.g;c.g=null,p||xt(c,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Nr(c){return c.g?c.g.readyState:0}t.ca=function(){try{return Nr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),eb(p)}};function R_(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Eb(c){const p={};c=(c.g&&Nr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(I(c[v]))continue;var g=ob(c[v]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=p[D]||[];p[D]=j,j.push(g)}ee(p,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qo(c,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||p}function A_(c){this.za=0,this.i=[],this.j=new Fo,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Qo("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Qo("baseRetryDelayMs",5e3,c),this.Za=Qo("retryDelaySeedMs",1e4,c),this.Ta=Qo("forwardChannelMaxRetries",2,c),this.va=Qo("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new f_(c&&c.concurrentRequestLimit),this.Ba=new vb,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=A_.prototype,t.ka=8,t.I=1,t.connect=function(c,p,g,v){Et(0),this.W=c,this.H=p||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.J=U_(this,null,this.W),sc(this)};function Lh(c){if(P_(c),c.I==3){var p=c.V++,g=Cn(c.J);if(Ie(g,"SID",c.M),Ie(g,"RID",p),Ie(g,"TYPE","terminate"),Yo(c,g),p=new Tr(c,c.j,p),p.M=2,p.A=ec(Cn(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=p.A,g=!0),g||(p.g=B_(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Zl(p)}F_(c)}function rc(c){c.g&&(Vh(c),c.g.cancel(),c.g=null)}function P_(c){rc(c),c.v&&(o.clearTimeout(c.v),c.v=null),ic(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function sc(c){if(!p_(c.h)&&!c.m){c.m=!0;var p=c.Ea;M||y(),L||(M(),L=!0),x.add(p,c),c.D=0}}function Tb(c,p){return m_(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=p.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Vo(d(c.Ea,c,p),V_(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const D=new Tr(this,this.j,c);let j=this.o;if(this.U&&(j?(j=be(j),bs(j,this.U)):j=this.U),this.u!==null||this.R||(D.J=j,j=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(p+=v,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=O_(this,D,p),g=Cn(this.J),Ie(g,"RID",c),Ie(g,"CVER",22),this.G&&Ie(g,"X-HTTP-Session-Id",this.G),Yo(this,g),j&&(this.R?p="headers="+Uo(N_(j))+"&"+p:this.u&&jh(g,this.u,j)),Ph(this.h,D),this.Ra&&Ie(g,"TYPE","init"),this.S?(Ie(g,"$req",p),Ie(g,"SID","null"),D.U=!0,bh(D,g,null)):bh(D,g,p),this.I=2}}else this.I==3&&(c?D_(this,c):this.i.length==0||p_(this.h)||D_(this))};function D_(c,p){var g;p?g=p.l:g=c.V++;const v=Cn(c.J);Ie(v,"SID",c.M),Ie(v,"RID",g),Ie(v,"AID",c.K),Yo(c,v),c.u&&c.o&&jh(v,c.u,c.o),g=new Tr(c,c.j,g,c.D+1),c.u===null&&(g.J=c.o),p&&(c.i=p.G.concat(c.i)),p=O_(c,g,1e3),g.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Ph(c.h,g),bh(g,v,p)}function Yo(c,p){c.H&&X(c.H,function(g,v){Ie(p,v,g)}),c.l&&X({},function(g,v){Ie(p,v,g)})}function O_(c,p,g){g=Math.min(c.i.length,g);const v=c.l?d(c.l.Ka,c.l,c):null;e:{var D=c.i;let te=-1;for(;;){const He=["count="+g];te==-1?g>0?(te=D[0].g,He.push("ofs="+te)):te=0:He.push("ofs="+te);let ye=!0;for(let Xe=0;Xe<g;Xe++){var j=D[Xe].g;const Nn=D[Xe].map;if(j-=te,j<0)te=Math.max(0,D[Xe].g-100),ye=!1;else try{j="req"+j+"_"||"";try{var $=Nn instanceof Map?Nn:Object.entries(Nn);for(const[Os,Sr]of $){let br=Sr;a(Sr)&&(br=Th(Sr)),He.push(j+Os+"="+encodeURIComponent(br))}}catch(Os){throw He.push(j+"type="+encodeURIComponent("_badmap")),Os}}catch{v&&v(Nn)}}if(ye){$=He.join("&");break e}}$=void 0}return c=c.i.splice(0,g),p.G=c,$}function j_(c){if(!c.g&&!c.v){c.Y=1;var p=c.Da;M||y(),L||(M(),L=!0),x.add(p,c),c.A=0}}function Mh(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Vo(d(c.Da,c),V_(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,L_(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Vo(d(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Et(10),rc(this),L_(this))};function Vh(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function L_(c){c.g=new Tr(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var p=Cn(c.na);Ie(p,"RID","rpc"),Ie(p,"SID",c.M),Ie(p,"AID",c.K),Ie(p,"CI",c.F?"0":"1"),!c.F&&c.ia&&Ie(p,"TO",c.ia),Ie(p,"TYPE","xmlhttp"),Yo(c,p),c.u&&c.o&&jh(p,c.u,c.o),c.O&&(c.g.H=c.O);var g=c.g;c=c.ba,g.M=1,g.A=ec(Cn(p)),g.u=null,g.R=!0,u_(g,c)}t.Va=function(){this.C!=null&&(this.C=null,rc(this),Mh(this),Et(19))};function ic(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function M_(c,p){var g=null;if(c.g==p){ic(c),Vh(c),c.g=null;var v=2}else if(Ah(c.h,p))g=p.G,g_(c.h,p),v=1;else return;if(c.I!=0){if(p.o)if(v==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var D=c.D;v=Xl(),xt(v,new i_(v,g)),sc(c)}else j_(c);else if(D=p.m,D==3||D==0&&p.X>0||!(v==1&&Tb(c,p)||v==2&&Mh(c)))switch(g&&g.length>0&&(p=c.h,p.i=p.i.concat(g)),D){case 1:Ds(c,5);break;case 4:Ds(c,10);break;case 3:Ds(c,6);break;default:Ds(c,2)}}}function V_(c,p){let g=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(g*=2),g*p}function Ds(c,p){if(c.j.info("Error code "+p),p==2){var g=d(c.bb,c),v=c.Ua;const D=!v;v=new Ir(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||$o(v,"https"),ec(v),D?yb(v.toString(),g):_b(v.toString(),g)}else Et(2);c.I=0,c.l&&c.l.pa(p),F_(c),P_(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function F_(c){if(c.I=0,c.ja=[],c.l){const p=y_(c.h);(p.length!=0||c.i.length!=0)&&(T(c.ja,p),T(c.ja,c.i),c.h.i.length=0,_(c.i),c.i.length=0),c.l.oa()}}function U_(c,p,g){var v=g instanceof Ir?Cn(g):new Ir(g);if(v.g!="")p&&(v.g=p+"."+v.g),zo(v,v.u);else{var D=o.location;v=D.protocol,p=p?p+"."+D.hostname:D.hostname,D=+D.port;const j=new Ir(null);v&&$o(j,v),p&&(j.g=p),D&&zo(j,D),g&&(j.h=g),v=j}return g=c.G,p=c.wa,g&&p&&Ie(v,g,p),Ie(v,"VER",c.ka),Yo(c,v),v}function B_(c,p,g){if(p&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Aa&&!c.ma?new Oe(new Oh({ab:g})):new Oe(c.ma),p.Fa(c.L),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $_(){}t=$_.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function oc(){}oc.prototype.g=function(c,p){return new Ut(c,p)};function Ut(c,p){ut.call(this),this.g=new A_(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(c?c["X-WebChannel-Client-Profile"]=p.sa:c={"X-WebChannel-Client-Profile":p.sa}),this.g.U=c,(c=p&&p.Qb)&&!I(c)&&(this.g.u=c),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!I(p)&&(this.g.G=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new _i(this)}f(Ut,ut),Ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Lh(this.g)},Ut.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.v&&(g={},g.__data__=Th(c),c=g);p.i.push(new cb(p.Ya++,c)),p.I==3&&sc(p)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Lh(this.g),delete this.g,Ut.Z.N.call(this)};function z_(c){Ih.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const g in p){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}f(z_,Ih);function W_(){Ch.call(this),this.status=1}f(W_,Ch);function _i(c){this.g=c}f(_i,$_),_i.prototype.ra=function(){xt(this.g,"a")},_i.prototype.qa=function(c){xt(this.g,new z_(c))},_i.prototype.pa=function(c){xt(this.g,new W_)},_i.prototype.oa=function(){xt(this.g,"b")},oc.prototype.createWebChannel=oc.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,UI=function(){return new oc},FI=function(){return Xl()},VI=Rs,Fp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Jl.NO_ERROR=0,Jl.TIMEOUT=8,Jl.HTTP_ERROR=6,Xc=Jl,o_.COMPLETE="complete",MI=o_,t_.EventType=Lo,Lo.OPEN="a",Lo.CLOSE="b",Lo.ERROR="c",Lo.MESSAGE="d",ut.prototype.listen=ut.prototype.J,ga=t_,Oe.prototype.listenOnce=Oe.prototype.K,Oe.prototype.getLastError=Oe.prototype.Ha,Oe.prototype.getLastErrorCode=Oe.prototype.ya,Oe.prototype.getStatus=Oe.prototype.ca,Oe.prototype.getResponseJson=Oe.prototype.La,Oe.prototype.getResponseText=Oe.prototype.la,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Fa,LI=Oe}).apply(typeof Nc<"u"?Nc:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let No="12.8.0";function r2(t){No=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ti=new jd("@firebase/firestore");function xi(){return ti.logLevel}function q(t,...e){if(ti.logLevel<=se.DEBUG){const n=e.map(Ag);ti.debug(`Firestore (${No}): ${t}`,...n)}}function dr(t,...e){if(ti.logLevel<=se.ERROR){const n=e.map(Ag);ti.error(`Firestore (${No}): ${t}`,...n)}}function lo(t,...e){if(ti.logLevel<=se.WARN){const n=e.map(Ag);ti.warn(`Firestore (${No}): ${t}`,...n)}}function Ag(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,BI(t,r,n)}function BI(t,e,n){let r=`FIRESTORE (${No}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw dr(r),new Error(r)}function me(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||BI(e,s,r)}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $I{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class i2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class o2{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string",31837,{l:r}),new $I(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new pt(e)}}class a2{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class l2{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new a2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class A0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){me(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new A0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new A0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=u2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Up(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return wf(s)===wf(i)?le(s,i):wf(s)?1:-1}return le(t.length,e.length)}const d2=55296,h2=57343;function wf(t){const e=t.charCodeAt(0);return e>=d2&&e<=h2}function co(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="__name__";class kn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return kn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=kn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return le(e.length,n.length)}static compareSegments(e,n){const r=kn.isNumericId(e),s=kn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?kn.extractNumericId(e).compare(kn.extractNumericId(n)):Up(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return es.fromString(e.substring(4,e.length-2))}}class we extends kn{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new we(n)}static emptyPath(){return new we([])}}const f2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends kn{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return f2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===P0}static keyField(){return new ot([P0])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function zI(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function p2(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function D0(t){if(!G.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function O0(t){if(G.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function WI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ud(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ud(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function We(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ol(t,e){if(!WI(t))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=-62135596800,L0=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*L0);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<j0)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/L0}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ol(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-j0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:We("string",fe._jsonSchemaVersion),seconds:We("number"),nanoseconds:We("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const al=-1;function m2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new cs(s,G.empty(),e)}function g2(t){return new cs(t.readTime,t.key,al)}class cs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cs(J.min(),G.empty(),al)}static max(){return new cs(J.max(),G.empty(),al)}}function y2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class v2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==_2)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const d=l;n(e[d]).next(h=>{o[d]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function w2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Bd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Bd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=-1;function $d(t){return t==null}function Fu(t){return t===0&&1/t==-1/0}function x2(t){return typeof t=="number"&&Number.isInteger(t)&&!Fu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="";function E2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=M0(e)),e=T2(t.get(n),e);return M0(e)}function T2(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case qI:n+="";break;default:n+=i}}return n}function M0(t){return t+qI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function HI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe=class Bp{constructor(e,n){this.comparator=e,this.root=n||ts.EMPTY}insert(e,n){return new Bp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ts.BLACK,null,null))}remove(e){return new Bp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ts.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sc(this.root,e,this.comparator,!0)}},Sc=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ts=class Hn{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Hn.RED,this.left=s??Hn.EMPTY,this.right=i??Hn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Hn(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Hn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Hn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Hn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Hn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}};ts.EMPTY=null,ts.RED=!0,ts.BLACK=!1;ts.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ts(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new F0(this.data.getIterator())}getIteratorFrom(e){return new F0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class F0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new zt([])}unionWith(e){let n=new Ye(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class GI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new GI("Invalid base64 string: "+i):i}}(e);return new ct(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const I2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function us(t){if(me(!!t,39018),typeof t=="string"){let e=0;const n=I2.exec(t);if(me(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ds(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="server_timestamp",QI="__type__",YI="__previous_value__",XI="__local_write_time__";function Og(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[QI])==null?void 0:r.stringValue)===KI}function zd(t){const e=t.mapValue.fields[YI];return Og(e)?zd(e):e}function ll(t){const e=us(t.mapValue.fields[XI].timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e,n,r,s,i,o,a,l,d,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=h,this.apiKey=f}}const Uu="(default)";class cl{constructor(e,n){this.projectId=e,this.database=n||Uu}static empty(){return new cl("","")}get isDefaultDatabase(){return this.database===Uu}isEqual(e){return e instanceof cl&&e.projectId===this.projectId&&e.database===this.database}}function N2(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cl(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="__type__",S2="__max__",bc={mapValue:{}},ZI="__vector__",Bu="value";function hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Og(t)?4:k2(t)?9007199254740991:b2(t)?10:11:Q(28295,{value:t})}function Bn(t,e){if(t===e)return!0;const n=hs(t);if(n!==hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ll(t).isEqual(ll(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=us(s.timestampValue),a=us(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ds(s.bytesValue).isEqual(ds(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),a=Fe(i.doubleValue);return o===a?Fu(o)===Fu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return co(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(V0(o)!==V0(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Bn(o[l],a[l])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function ul(t,e){return(t.values||[]).find(n=>Bn(n,e))!==void 0}function uo(t,e){if(t===e)return 0;const n=hs(t),r=hs(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Fe(i.integerValue||i.doubleValue),l=Fe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return U0(t.timestampValue,e.timestampValue);case 4:return U0(ll(t),ll(e));case 5:return Up(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ds(i),l=ds(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let d=0;d<a.length&&d<l.length;d++){const h=le(a[d],l[d]);if(h!==0)return h}return le(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=le(Fe(i.latitude),Fe(o.latitude));return a!==0?a:le(Fe(i.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return B0(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,_,T,k;const a=i.fields||{},l=o.fields||{},d=(m=a[Bu])==null?void 0:m.arrayValue,h=(_=l[Bu])==null?void 0:_.arrayValue,f=le(((T=d==null?void 0:d.values)==null?void 0:T.length)||0,((k=h==null?void 0:h.values)==null?void 0:k.length)||0);return f!==0?f:B0(d,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===bc.mapValue&&o===bc.mapValue)return 0;if(i===bc.mapValue)return 1;if(o===bc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),d=o.fields||{},h=Object.keys(d);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=Up(l[f],h[f]);if(m!==0)return m;const _=uo(a[l[f]],d[h[f]]);if(_!==0)return _}return le(l.length,h.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function U0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=us(t),r=us(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function B0(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=uo(n[s],r[s]);if(i)return i}return le(n.length,r.length)}function ho(t){return $p(t)}function $p(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=us(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ds(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=$p(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${$p(n.fields[o])}`;return s+"}"}(t.mapValue):Q(61005,{value:t})}function Jc(t){switch(hs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zd(t);return e?16+Jc(e):16;case 5:return 2*t.stringValue.length;case 6:return ds(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Jc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Es(r.fields,(i,o)=>{s+=i.length+Jc(o)}),s}(t.mapValue);default:throw Q(13486,{value:t})}}function $0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zp(t){return!!t&&"integerValue"in t}function jg(t){return!!t&&"arrayValue"in t}function z0(t){return!!t&&"nullValue"in t}function W0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zc(t){return!!t&&"mapValue"in t}function b2(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[JI])==null?void 0:r.stringValue)===ZI}function Aa(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Aa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Aa(t.arrayValue.values[n]);return e}return{...t}}function k2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===S2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Aa(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Aa(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Zc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Zc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Es(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new At(Aa(this.value))}}function eC(t){const e=[];return Es(t.fields,(n,r)=>{const s=new ot([n]);if(Zc(r)){const i=eC(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,J.min(),J.min(),J.min(),At.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,J.min(),J.min(),At.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,J.min(),J.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $u{constructor(e,n){this.position=e,this.inclusive=n}}function q0(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=uo(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function H0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zu{constructor(e,n="asc"){this.field=e,this.dir=n}}function R2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class tC{}class ze extends tC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new P2(e,n,r):n==="array-contains"?new j2(e,r):n==="in"?new L2(e,r):n==="not-in"?new M2(e,r):n==="array-contains-any"?new V2(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new D2(e,r):new O2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(uo(n,this.value)):n!==null&&hs(this.value)===hs(n)&&this.matchesComparison(uo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class In extends tC{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new In(e,n)}matches(e){return nC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function nC(t){return t.op==="and"}function rC(t){return A2(t)&&nC(t)}function A2(t){for(const e of t.filters)if(e instanceof In)return!1;return!0}function Wp(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+ho(t.value);if(rC(t))return t.filters.map(e=>Wp(e)).join(",");{const e=t.filters.map(n=>Wp(n)).join(",");return`${t.op}(${e})`}}function sC(t,e){return t instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&Bn(r.value,s.value)}(t,e):t instanceof In?function(r,s){return s instanceof In&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&sC(o,s.filters[a]),!0):!1}(t,e):void Q(19439)}function iC(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${ho(n.value)}`}(t):t instanceof In?function(n){return n.op.toString()+" {"+n.getFilters().map(iC).join(" ,")+"}"}(t):"Filter"}class P2 extends ze{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class D2 extends ze{constructor(e,n){super(e,"in",n),this.keys=oC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class O2 extends ze{constructor(e,n){super(e,"not-in",n),this.keys=oC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function oC(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class j2 extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jg(n)&&ul(n.arrayValue,this.value)}}class L2 extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ul(this.value.arrayValue,n)}}class M2 extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ul(this.value.arrayValue,n)}}class V2 extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ul(this.value.arrayValue,r))}}/**
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
 */class F2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function G0(t,e=null,n=[],r=[],s=null,i=null,o=null){return new F2(t,e,n,r,s,i,o)}function Lg(t){const e=Z(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),$d(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ho(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ho(r)).join(",")),e.Te=n}return e.Te}function Mg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!R2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!H0(t.startAt,e.startAt)&&H0(t.endAt,e.endAt)}function qp(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function U2(t,e,n,r,s,i,o,a){return new jl(t,e,n,r,s,i,o,a)}function Wd(t){return new jl(t)}function K0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function B2(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function aC(t){return t.collectionGroup!==null}function Pa(t){const e=Z(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ye(ot.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new zu(i,r))}),n.has(ot.keyField().canonicalString())||e.Ie.push(new zu(ot.keyField(),r))}return e.Ie}function Ln(t){const e=Z(t);return e.Ee||(e.Ee=$2(e,Pa(t))),e.Ee}function $2(t,e){if(t.limitType==="F")return G0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new zu(s.field,i)});const n=t.endAt?new $u(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $u(t.startAt.position,t.startAt.inclusive):null;return G0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hp(t,e){const n=t.filters.concat([e]);return new jl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Gp(t,e,n){return new jl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qd(t,e){return Mg(Ln(t),Ln(e))&&t.limitType===e.limitType}function lC(t){return`${Lg(Ln(t))}|lt:${t.limitType}`}function Ei(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>iC(s)).join(", ")}]`),$d(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ho(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ho(s)).join(",")),`Target(${r})`}(Ln(t))}; limitType=${t.limitType})`}function Hd(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Pa(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const d=q0(o,a,l);return o.inclusive?d<=0:d<0}(r.startAt,Pa(r),s)||r.endAt&&!function(o,a,l){const d=q0(o,a,l);return o.inclusive?d>=0:d>0}(r.endAt,Pa(r),s))}(t,e)}function z2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cC(t){return(e,n)=>{let r=!1;for(const s of Pa(t)){const i=W2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function W2(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),d=a.data.field(i);return l!==null&&d!==null?uo(l,d):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return HI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2=new qe(G.comparator);function hr(){return q2}const uC=new qe(G.comparator);function ya(...t){let e=uC;for(const n of t)e=e.insert(n.key,n);return e}function dC(t){let e=uC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $s(){return Da()}function hC(){return Da()}function Da(){return new di(t=>t.toString(),(t,e)=>t.isEqual(e))}const H2=new qe(G.comparator),G2=new Ye(G.comparator);function ce(...t){let e=G2;for(const n of t)e=e.add(n);return e}const K2=new Ye(le);function Q2(){return K2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fu(e)?"-0":e}}function fC(t){return{integerValue:""+t}}function Y2(t,e){return x2(e)?fC(e):Vg(t,e)}/**
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
 */class Gd{constructor(){this._=void 0}}function X2(t,e,n){return t instanceof dl?function(s,i){const o={fields:{[QI]:{stringValue:KI},[XI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Og(i)&&(i=zd(i)),i&&(o.fields[YI]=i),{mapValue:o}}(n,e):t instanceof hl?mC(t,e):t instanceof fl?gC(t,e):function(s,i){const o=pC(s,i),a=Q0(o)+Q0(s.Ae);return zp(o)&&zp(s.Ae)?fC(a):Vg(s.serializer,a)}(t,e)}function J2(t,e,n){return t instanceof hl?mC(t,e):t instanceof fl?gC(t,e):n}function pC(t,e){return t instanceof Wu?function(r){return zp(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class dl extends Gd{}class hl extends Gd{constructor(e){super(),this.elements=e}}function mC(t,e){const n=yC(e);for(const r of t.elements)n.some(s=>Bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class fl extends Gd{constructor(e){super(),this.elements=e}}function gC(t,e){let n=yC(e);for(const r of t.elements)n=n.filter(s=>!Bn(s,r));return{arrayValue:{values:n}}}class Wu extends Gd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Q0(t){return Fe(t.integerValue||t.doubleValue)}function yC(t){return jg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e,n){this.field=e,this.transform=n}}function eO(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof hl&&s instanceof hl||r instanceof fl&&s instanceof fl?co(r.elements,s.elements,Bn):r instanceof Wu&&s instanceof Wu?Bn(r.Ae,s.Ae):r instanceof dl&&s instanceof dl}(t.transform,e.transform)}class tO{constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kd{}function _C(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wC(t.key,vn.none()):new Ll(t.key,t.data,vn.none());{const n=t.data,r=At.empty();let s=new Ye(ot.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ts(t.key,r,new zt(s.toArray()),vn.none())}}function nO(t,e,n){t instanceof Ll?function(s,i,o){const a=s.value.clone(),l=X0(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ts?function(s,i,o){if(!eu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=X0(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(vC(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Oa(t,e,n,r){return t instanceof Ll?function(i,o,a,l){if(!eu(i.precondition,o))return a;const d=i.value.clone(),h=J0(i.fieldTransforms,l,o);return d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ts?function(i,o,a,l){if(!eu(i.precondition,o))return a;const d=J0(i.fieldTransforms,l,o),h=o.data;return h.setAll(vC(i)),h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return eu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function rO(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=pC(r.transform,s||null);i!=null&&(n===null&&(n=At.empty()),n.set(r.field,i))}return n||null}function Y0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&co(r,s,(i,o)=>eO(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ll extends Kd{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ts extends Kd{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function X0(t,e,n){const r=new Map;me(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,J2(o,a,n[s]))}return r}function J0(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,X2(i,o,e))}return r}class wC extends Kd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sO extends Kd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nO(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Oa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Oa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hC();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=_C(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,(n,r)=>Y0(n,r))&&co(this.baseMutations,e.baseMutations,(n,r)=>Y0(n,r))}}class Fg{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){me(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return H2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Fg(e,n,r,s)}}/**
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
 */class oO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,ue;function lO(t){switch(t){case V.OK:return Q(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function xC(t){if(t===void 0)return dr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Be.OK:return V.OK;case Be.CANCELLED:return V.CANCELLED;case Be.UNKNOWN:return V.UNKNOWN;case Be.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Be.INTERNAL:return V.INTERNAL;case Be.UNAVAILABLE:return V.UNAVAILABLE;case Be.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Be.NOT_FOUND:return V.NOT_FOUND;case Be.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Be.ABORTED:return V.ABORTED;case Be.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Be.DATA_LOSS:return V.DATA_LOSS;default:return Q(39323,{code:t})}}(ue=Be||(Be={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function cO(){return new TextEncoder}/**
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
 */const uO=new es([4294967295,4294967295],0);function Z0(t){const e=cO().encode(t),n=new jI;return n.update(e),new Uint8Array(n.digest())}function ew(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new es([n,r],0),new es([s,i],0)]}class Ug{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _a(`Invalid padding: ${n}`);if(r<0)throw new _a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _a(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=es.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(es.fromNumber(r)));return s.compare(uO)===1&&(s=new es([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Z0(e),[r,s]=ew(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ug(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=Z0(e),[r,s]=ew(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ml.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Qd(J.min(),s,new qe(le),hr(),ce())}}class Ml{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ml(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class EC{constructor(e,n){this.targetId=e,this.Ce=n}}class TC{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class tw{constructor(){this.ve=0,this.Fe=nw(),this.Me=ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ce(),n=ce(),r=ce();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q(38017,{changeType:i})}}),new Ml(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=nw()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class dO{constructor(e){this.Ge=e,this.ze=new Map,this.je=hr(),this.He=kc(),this.Je=kc(),this.Ze=new qe(le)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(qp(i))if(r===0){const o=new G(i.path);this.et(n,o,gt.newNoDocument(o,J.min()))}else me(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,d)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ds(r).toUint8Array()}catch(l){if(l instanceof GI)return lo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Ug(o,s,i)}catch(l){return lo(l instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&qp(a.target)){const l=new G(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,gt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=ce();this.Je.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Qd(e,n,this.Ze,this.je,r);return this.je=hr(),this.He=kc(),this.Je=kc(),this.Ze=new qe(le),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new tw,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Ye(le),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Ye(le),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new tw),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function kc(){return new qe(G.comparator)}function nw(){return new qe(G.comparator)}const hO={asc:"ASCENDING",desc:"DESCENDING"},fO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pO={and:"AND",or:"OR"};class mO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kp(t,e){return t.useProto3Json||$d(e)?e:{value:e}}function qu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gO(t,e){return qu(t,e.toTimestamp())}function Mn(t){return me(!!t,49232),J.fromTimestamp(function(n){const r=us(n);return new fe(r.seconds,r.nanos)}(t))}function Bg(t,e){return Qp(t,e).canonicalString()}function Qp(t,e){const n=function(s){return new we(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function CC(t){const e=we.fromString(t);return me(RC(e),10190,{key:e.toString()}),e}function Yp(t,e){return Bg(t.databaseId,e.path)}function xf(t,e){const n=CC(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(SC(n))}function NC(t,e){return Bg(t.databaseId,e)}function yO(t){const e=CC(t);return e.length===4?we.emptyPath():SC(e)}function Xp(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function SC(t){return me(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function rw(t,e,n){return{name:Yp(t,e),fields:n.value.mapValue.fields}}function _O(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Q(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,h){return d.useProto3Json?(me(h===void 0||typeof h=="string",58123),ct.fromBase64String(h||"")):(me(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ct.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(d){const h=d.code===void 0?V.UNKNOWN:xC(d.code);return new W(h,d.message||"")}(o);n=new TC(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xf(t,r.document.name),i=Mn(r.document.updateTime),o=r.document.createTime?Mn(r.document.createTime):J.min(),a=new At({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,i,o,a),d=r.targetIds||[],h=r.removedTargetIds||[];n=new tu(d,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xf(t,r.document),i=r.readTime?Mn(r.readTime):J.min(),o=gt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new tu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xf(t,r.document),i=r.removedTargetIds||[];n=new tu([],i,s,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new aO(s,i),a=r.targetId;n=new EC(a,o)}}return n}function vO(t,e){let n;if(e instanceof Ll)n={update:rw(t,e.key,e.value)};else if(e instanceof wC)n={delete:Yp(t,e.key)};else if(e instanceof Ts)n={update:rw(t,e.key,e.data),updateMask:bO(e.fieldMask)};else{if(!(e instanceof sO))return Q(16599,{dt:e.type});n={verify:Yp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof dl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof hl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof fl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Wu)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gO(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q(27497)}(t,e.precondition)),n}function wO(t,e){return t&&t.length>0?(me(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Mn(s.updateTime):Mn(i);return o.isEqual(J.min())&&(o=Mn(i)),new tO(o,s.transformResults||[])}(n,e))):[]}function xO(t,e){return{documents:[NC(t,e.path)]}}function EO(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=NC(t,s);const i=function(d){if(d.length!==0)return kC(In.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(h=>function(m){return{field:Ti(m.field),direction:CO(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Kp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:n,parent:s}}function TO(t){let e=yO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){me(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const m=bC(f);return m instanceof In&&rC(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(T){return new zu(Ii(T.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,$d(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,_=f.values||[];return new $u(_,m)}(n.startAt));let d=null;return n.endAt&&(d=function(f){const m=!f.before,_=f.values||[];return new $u(_,m)}(n.endAt)),U2(e,s,o,i,a,"F",l,d)}function IO(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ii(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ii(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ii(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ii(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Ii(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return In.create(n.compositeFilter.filters.map(r=>bC(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function CO(t){return hO[t]}function NO(t){return fO[t]}function SO(t){return pO[t]}function Ti(t){return{fieldPath:t.canonicalString()}}function Ii(t){return ot.fromServerFormat(t.fieldPath)}function kC(t){return t instanceof ze?function(n){if(n.op==="=="){if(W0(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NAN"}};if(z0(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(W0(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NAN"}};if(z0(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(n.field),op:NO(n.op),value:n.value}}}(t):t instanceof In?function(n){const r=n.getFilters().map(s=>kC(s));return r.length===1?r[0]:{compositeFilter:{op:SO(n.op),filters:r}}}(t):Q(54877,{filter:t})}function bO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function AC(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r,s,i=J.min(),o=J.min(),a=ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new $r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e){this.yt=e}}function RO(t){const e=TO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gp(e,e.limit,"L"):e}/**
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
 */class AO{constructor(){this.Sn=new PO}addToCollectionParentIndex(e,n){return this.Sn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(cs.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(cs.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class PO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(we.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(we.comparator)).toArray()}}/**
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
 */const sw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},PC=41943040;class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(PC,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new fo(0)}static ar(){return new fo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="LruGarbageCollector",DO=1048576;function ow([t,e],[n,r]){const s=le(t,n);return s===0?le(e,r):s}class OO{constructor(e){this.Pr=e,this.buffer=new Ye(ow),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ow(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class jO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(iw,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bo(n)?q(iw,"Ignoring IndexedDB error during garbage collection: ",n):await So(n)}await this.Ar(3e5)})}}class LO{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Bd.ce);const r=new OO(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(sw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sw):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,a,l,d;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(d=Date.now(),xi()<=se.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(d-l)+`ms
Total Duration: ${d-h}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function MO(t,e){return new LO(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this.changes=new di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class FO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Oa(r.mutation,s,zt.empty(),fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=$s();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ya();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$s();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=hr();const o=Da(),a=function(){return Da()}();return n.forEach((l,d)=>{const h=r.get(d.key);s.has(d.key)&&(h===void 0||h.mutation instanceof Ts)?i=i.insert(d.key,d):h!==void 0?(o.set(d.key,h.mutation.getFieldMask()),Oa(h.mutation,d,h.mutation.getFieldMask(),fe.now())):o.set(d.key,zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,h)=>o.set(d,h)),n.forEach((d,h)=>a.set(d,new FO(h,o.get(d)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Da();let s=new qe((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const d=n.get(l);if(d===null)return;let h=r.get(l)||zt.empty();h=a.applyToLocalView(d,h),r.set(l,h);const f=(s.get(a.batchId)||ce()).add(l);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),d=l.key,h=l.value,f=hC();h.forEach(m=>{if(!i.has(m)){const _=_C(n.get(m),r.get(m));_!==null&&f.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return B2(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve($s());let a=al,l=i;return o.next(d=>F.forEach(d,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,ce())).next(h=>({batchId:a,changes:dC(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=ya();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ya();return this.indexManager.getCollectionParents(e,i).next(a=>F.forEach(a,l=>{const d=function(f,m){return new jl(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,d)=>{const h=d.getKey();o.get(h)===null&&(o=o.insert(h,gt.newInvalidDocument(h)))});let a=ya();return o.forEach((l,d)=>{const h=i.get(l);h!==void 0&&Oa(h.mutation,d,zt.empty(),fe.now()),Hd(n,d)&&(a=a.insert(l,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return F.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Mn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:RO(s.bundledQuery),readTime:Mn(s.readTime)}}(n)),F.resolve()}}/**
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
 */class $O{constructor(){this.overlays=new qe(G.comparator),this.Lr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$s();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=$s(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,d=l.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe((d,h)=>d-h);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let h=i.get(d.largestBatchId);h===null&&(h=$s(),i=i.insert(d.largestBatchId,h)),h.set(d.getKey(),d)}}const a=$s(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,h)=>a.set(d,h)),!(a.size()>=s)););return F.resolve(a)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oO(n,r));let i=this.Lr.get(n);i===void 0&&(i=ce(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class zO{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class WO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Ye(Ze.Kr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iO(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Jr=this.Jr.add(new Ze(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Dg:this.Yn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const a=this.Zr(o.Hr);i.push(a)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(le);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],a=>{r=r.add(a.Hr)})}),F.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new G(i),0);let a=new Ye(le);return this.Jr.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(a=a.add(l.Hr)),!0)},o),F.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){me(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return F.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Jr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e){this.ti=e,this.docs=function(){return new qe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=hr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=hr();const o=n.path,a=new G(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:d,value:{document:h}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||y2(g2(h),r)<=0||(s.has(h.key)||Hd(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q(9500)}ni(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HO(this)}getSize(e){return F.resolve(this.size)}}class HO extends VO{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.persistence=e,this.ri=new di(n=>Lg(n),Mg),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new $g,this.targetCount=0,this.oi=fo._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),F.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new fo(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.lr(n),F.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n){this._i={},this.overlays={},this.ai=new Bd(0),this.ui=!1,this.ui=!0,this.ci=new zO,this.referenceDelegate=e(this),this.li=new GO(this),this.indexManager=new AO,this.remoteDocumentCache=function(s){return new qO(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new kO(n),this.Pi=new BO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $O,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new WO(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new KO(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return F.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class KO extends v2{constructor(e){super(),this.currentSequenceNumber=e}}class zg{constructor(e){this.persistence=e,this.Ri=new $g,this.Ai=null}static Vi(e){return new zg(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const s=G.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Hu{constructor(e,n){this.persistence=e,this.fi=new di(r=>E2(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=MO(this,n)}static Vi(e,n){return new Hu(e,n)}Ti(){}Ii(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return F.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,i.removeEntry(o,J.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Jc(e.data.value)),n}wr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Wg(e,n.fromCache,r,s)}}/**
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
 */class QO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class YO{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return mR()?8:w2(wt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new QO;return this.ys(e,n,o).next(a=>{if(i.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(xi()<=se.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Ei(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(xi()<=se.DEBUG&&q("QueryEngine","Query:",Ei(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(xi()<=se.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Ei(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(n))):F.resolve())}gs(e,n){if(K0(n))return F.resolve(null);let r=Ln(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Gp(n,null,"F"),r=Ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.bs(n,a);return this.Ss(n,d,o,l.readTime)?this.gs(e,Gp(n,null,"F")):this.Ds(e,d,n,l)}))})))}ps(e,n,r,s){return K0(n)||s.isEqual(J.min())?F.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?F.resolve(null):(xi()<=se.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ei(n)),this.Ds(e,o,n,m2(s,al)).next(a=>a))})}bs(e,n){let r=new Ye(cC(e));return n.forEach((s,i)=>{Hd(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return xi()<=se.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Ei(n)),this.fs.getDocumentsMatchingQuery(e,n,cs.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="LocalStore",XO=3e8;class JO{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new qe(le),this.Fs=new di(i=>Lg(i),Mg),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UO(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function ZO(t,e,n,r){return new JO(t,e,n,r)}async function OC(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ce();for(const d of s){o.push(d.batchId);for(const h of d.mutations)l=l.add(h.key)}for(const d of i){a.push(d.batchId);for(const h of d.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(d=>({Ns:d,removedBatchIds:o,addedBatchIds:a}))})})}function ej(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,d,h){const f=d.batch,m=f.keys();let _=F.resolve();return m.forEach(T=>{_=_.next(()=>h.getEntry(l,T)).next(k=>{const R=d.docVersions.get(T);me(R!==null,48541),k.version.compareTo(R)<0&&(f.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),h.addEntry(k)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ce();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(l=l.add(a.batch.mutations[d].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function jC(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function tj(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const a=[];e.targetChanges.forEach((h,f)=>{const m=s.get(f);if(!m)return;a.push(n.li.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.li.addMatchingKeys(i,h.addedDocuments,f)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(ct.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(f,_),function(k,R,N){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=XO?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(m,_,h)&&a.push(n.li.updateTargetData(i,_))});let l=hr(),d=ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(nj(i,o,e.documentUpdates).next(h=>{l=h.Bs,d=h.Ls})),!r.isEqual(J.min())){const h=n.li.getLastRemoteSnapshotVersion(i).next(f=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(n.vs=s,i))}function nj(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=hr();return n.forEach((a,l)=>{const d=i.get(a);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q(qg,"Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",l.version)}),{Bs:o,Ls:s}})}function rj(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Dg),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sj(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new $r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Jp(t,e,n){const r=Z(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bo(o))throw o;q(qg,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function aw(t,e,n){const r=Z(t);let s=J.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,d,h){const f=Z(l),m=f.Fs.get(h);return m!==void 0?F.resolve(f.vs.get(m)):f.li.getTargetData(d,h)}(r,o,Ln(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:ce())).next(a=>(ij(r,z2(e),a),{documents:a,ks:i})))}function ij(t,e,n){let r=t.Ms.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class lw{constructor(){this.activeTargetIds=Q2()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oj{constructor(){this.vo=new lw,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new lw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aj{Mo(e){}shutdown(){}}/**
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
 */const cw="ConnectivityMonitor";class uw{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(cw,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(cw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rc=null;function Zp(){return Rc===null?Rc=function(){return 268435456+Math.round(2147483648*Math.random())}():Rc++,"0x"+Rc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="RestConnection",lj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class cj{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Uu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Zp(),a=this.Qo(e,n.toUriEncodedString());q(Ef,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:d}=new URL(a),h=gr(d);return this.zo(e,a,l,r,h).then(f=>(q(Ef,`Received RPC '${e}' ${o}: `,f),f),f=>{throw lo(Ef,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+No}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=lj[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uj{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection",ia=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Qi extends cj{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Qi.c_){const e=FI();ia(e,VI.STAT_EVENT,n=>{n.stat===Fp.PROXY?q(ft,"STAT_EVENT: detected buffering proxy"):n.stat===Fp.NOPROXY&&q(ft,"STAT_EVENT: detected no buffering proxy")}),Qi.c_=!0}}zo(e,n,r,s,i){const o=Zp();return new Promise((a,l)=>{const d=new LI;d.setWithCredentials(!0),d.listenOnce(MI.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Xc.NO_ERROR:const f=d.getResponseJson();q(ft,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Xc.TIMEOUT:q(ft,`RPC '${e}' ${o} timed out`),l(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Xc.HTTP_ERROR:const m=d.getStatus();if(q(ft,`RPC '${e}' ${o} failed with status:`,m,"response text:",d.getResponseText()),m>0){let _=d.getResponseJson();Array.isArray(_)&&(_=_[0]);const T=_==null?void 0:_.error;if(T&&T.status&&T.message){const k=function(N){const w=N.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(w)>=0?w:V.UNKNOWN}(T.status);l(new W(k,T.message))}else l(new W(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new W(V.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{q(ft,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);q(ft,`RPC '${e}' ${o} sending request:`,s),d.send(n,"POST",h,r,15)})}T_(e,n,r){const s=Zp(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const d=i.join("");q(ft,`Creating RPC '${e}' stream ${s}: ${d}`,a);const h=o.createWebChannel(d,a);this.I_(h);let f=!1,m=!1;const _=new uj({Ho:T=>{m?q(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(f||(q(ft,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),q(ft,`RPC '${e}' stream ${s} sending:`,T),h.send(T))},Jo:()=>h.close()});return ia(h,ga.EventType.OPEN,()=>{m||(q(ft,`RPC '${e}' stream ${s} transport opened.`),_.i_())}),ia(h,ga.EventType.CLOSE,()=>{m||(m=!0,q(ft,`RPC '${e}' stream ${s} transport closed`),_.o_(),this.E_(h))}),ia(h,ga.EventType.ERROR,T=>{m||(m=!0,lo(ft,`RPC '${e}' stream ${s} transport errored. Name:`,T.name,"Message:",T.message),_.o_(new W(V.UNAVAILABLE,"The operation could not be completed")))}),ia(h,ga.EventType.MESSAGE,T=>{var k;if(!m){const R=T.data[0];me(!!R,16349);const N=R,w=(N==null?void 0:N.error)||((k=N[0])==null?void 0:k.error);if(w){q(ft,`RPC '${e}' stream ${s} received error:`,w);const C=w.status;let O=function(x){const y=Be[x];if(y!==void 0)return xC(y)}(C),M=w.message;O===void 0&&(O=V.INTERNAL,M="Unknown error status: "+C+" with message "+w.message),m=!0,_.o_(new W(O,M)),h.close()}else q(ft,`RPC '${e}' stream ${s} received:`,R),_.__(R)}}),Qi.u_(),setTimeout(()=>{_.s_()},0),_}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return UI()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dj(t){return new Qi(t)}function Tf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t){return new mO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qi.c_=!1;class LC{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="PersistentStream";class MC{constructor(e,n,r,s,i,o,a,l){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new LC(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(dr(n.toString()),dr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(dw,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(dw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hj extends MC{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=_O(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Mn(o.readTime):J.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Xp(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=qp(l)?{documents:xO(i,l)}:{query:EO(i,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=IC(i,o.resumeToken);const d=Kp(i,o.expectedCount);d!==null&&(a.expectedCount=d)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=qu(i,o.snapshotVersion.toTimestamp());const d=Kp(i,o.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=IO(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Xp(this.serializer),n.removeTarget=e,this.K_(n)}}class fj extends MC{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=wO(e.writeResults,e.commitTime),r=Mn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Xp(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>vO(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pj{}class mj extends pj{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Qp(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(V.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,Qp(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function gj(t,e,n,r){return new mj(t,e,n,r)}class yj{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const ni="RemoteStore";class _j{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{hi(this)&&(q(ni,"Restarting streams for network reachability change."),await async function(l){const d=Z(l);d.Ea.add(4),await Vl(d),d.Va.set("Unknown"),d.Ea.delete(4),await Xd(d)}(this))})}),this.Va=new yj(r,s)}}async function Xd(t){if(hi(t))for(const e of t.Ra)await e(!0)}async function Vl(t){for(const e of t.Ra)await e(!1)}function VC(t,e){const n=Z(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Qg(n)?Kg(n):ko(n).O_()&&Gg(n,e))}function Hg(t,e){const n=Z(t),r=ko(n);n.Ia.delete(e),r.O_()&&FC(n,e),n.Ia.size===0&&(r.O_()?r.L_():hi(n)&&n.Va.set("Unknown"))}function Gg(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ko(t).Z_(e)}function FC(t,e){t.da.$e(e),ko(t).X_(e)}function Kg(t){t.da=new dO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ko(t).start(),t.Va.ua()}function Qg(t){return hi(t)&&!ko(t).x_()&&t.Ia.size>0}function hi(t){return Z(t).Ea.size===0}function UC(t){t.da=void 0}async function vj(t){t.Va.set("Online")}async function wj(t){t.Ia.forEach((e,n)=>{Gg(t,e)})}async function xj(t,e){UC(t),Qg(t)?(t.Va.ha(e),Kg(t)):t.Va.set("Unknown")}async function Ej(t,e,n){if(t.Va.set("Online"),e instanceof TC&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.da.removeTarget(a))}(t,e)}catch(r){q(ni,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gu(t,r)}else if(e instanceof tu?t.da.Xe(e):e instanceof EC?t.da.st(e):t.da.tt(e),!n.isEqual(J.min()))try{const r=await jC(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.da.Tt(o);return a.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ia.get(d);h&&i.Ia.set(d,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,d)=>{const h=i.Ia.get(l);if(!h)return;i.Ia.set(l,h.withResumeToken(ct.EMPTY_BYTE_STRING,h.snapshotVersion)),FC(i,l);const f=new $r(h.target,l,d,h.sequenceNumber);Gg(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q(ni,"Failed to raise snapshot:",r),await Gu(t,r)}}async function Gu(t,e,n){if(!bo(e))throw e;t.Ea.add(1),await Vl(t),t.Va.set("Offline"),n||(n=()=>jC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(ni,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Xd(t)})}function BC(t,e){return e().catch(n=>Gu(t,n,e))}async function Jd(t){const e=Z(t),n=fs(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Dg;for(;Tj(e);)try{const s=await rj(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,Ij(e,s)}catch(s){await Gu(e,s)}$C(e)&&zC(e)}function Tj(t){return hi(t)&&t.Ta.length<10}function Ij(t,e){t.Ta.push(e);const n=fs(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function $C(t){return hi(t)&&!fs(t).x_()&&t.Ta.length>0}function zC(t){fs(t).start()}async function Cj(t){fs(t).ra()}async function Nj(t){const e=fs(t);for(const n of t.Ta)e.ea(n.mutations)}async function Sj(t,e,n){const r=t.Ta.shift(),s=Fg.from(r,e,n);await BC(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Jd(t)}async function bj(t,e){e&&fs(t).Y_&&await async function(r,s){if(function(o){return lO(o)&&o!==V.ABORTED}(s.code)){const i=r.Ta.shift();fs(r).B_(),await BC(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Jd(r)}}(t,e),$C(t)&&zC(t)}async function hw(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),q(ni,"RemoteStore received new credentials");const r=hi(n);n.Ea.add(3),await Vl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Xd(n)}async function kj(t,e){const n=Z(t);e?(n.Ea.delete(2),await Xd(n)):e||(n.Ea.add(2),await Vl(n),n.Va.set("Unknown"))}function ko(t){return t.ma||(t.ma=function(n,r,s){const i=Z(n);return i.sa(),new hj(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:vj.bind(null,t),Yo:wj.bind(null,t),t_:xj.bind(null,t),J_:Ej.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Qg(t)?Kg(t):t.Va.set("Unknown")):(await t.ma.stop(),UC(t))})),t.ma}function fs(t){return t.fa||(t.fa=function(n,r,s){const i=Z(n);return i.sa(),new fj(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Cj.bind(null,t),t_:bj.bind(null,t),ta:Nj.bind(null,t),na:Sj.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Jd(t)):(await t.fa.stop(),t.Ta.length>0&&(q(ni,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Yg(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xg(t,e){if(dr("AsyncQueue",`${e}: ${t}`),bo(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{static emptySet(e){return new Yi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ya(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Yi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.ga=new qe(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class po{constructor(e,n,r,s,i,o,a,l,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new po(e,n,Yi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rj{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Aj{constructor(){this.queries=pw(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=Z(n),i=s.queries;s.queries=pw(),i.forEach((o,a)=>{for(const l of a.ba)l.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function pw(){return new di(t=>lC(t),qd)}async function Jg(t,e){const n=Z(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new Rj,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Xg(o,`Initialization of query '${Ei(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&ey(n)}async function Zg(t,e){const n=Z(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Pj(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.ba)a.Fa(s)&&(r=!0);o.wa=s}}r&&ey(n)}function Dj(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function ey(t){t.Ca.forEach(e=>{e.next()})}var em,mw;(mw=em||(em={})).Ma="default",mw.Cache="cache";class ty{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new po(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==em.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.key=e}}class qC{constructor(e){this.key=e}}class Oj{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ce(),this.mutatedKeys=ce(),this.eu=cC(e),this.tu=new Yi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new fw,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const m=s.get(h),_=Hd(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let R=!1;m&&_?m.data.isEqual(_.data)?T!==k&&(r.track({type:3,doc:_}),R=!0):this.su(m,_)||(r.track({type:2,doc:_}),R=!0,(l&&this.eu(_,l)>0||d&&this.eu(_,d)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),R=!0):m&&!_&&(r.track({type:1,doc:m}),R=!0,(l||d)&&(a=!0)),R&&(_?(o=o.add(_),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Ss:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,f)=>function(_,T){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:R})}};return k(_)-k(T)}(h.type,f.type)||this.eu(h.doc,f.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,d=l!==this.Xa;return this.Xa=l,o.length!==0||d?{snapshot:new po(this.query,e.tu,i,o,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new fw,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ce(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new qC(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new WC(r))}),n}cu(e){this.Za=e.ks,this.Ya=ce();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return po.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ny="SyncEngine";class jj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Lj{constructor(e){this.key=e,this.hu=!1}}class Mj{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new di(a=>lC(a),qd),this.Iu=new Map,this.Eu=new Set,this.Ru=new qe(G.comparator),this.Au=new Map,this.Vu=new $g,this.du={},this.mu=new Map,this.fu=fo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Vj(t,e,n=!0){const r=XC(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await HC(r,e,n,!0),s}async function Fj(t,e){const n=XC(t);await HC(n,e,!0,!1)}async function HC(t,e,n,r){const s=await sj(t.localStore,Ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await Uj(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&VC(t.remoteStore,s),a}async function Uj(t,e,n,r,s){t.pu=(f,m,_)=>async function(k,R,N,w){let C=R.view.ru(N);C.Ss&&(C=await aw(k.localStore,R.query,!1).then(({documents:x})=>R.view.ru(x,C)));const O=w&&w.targetChanges.get(R.targetId),M=w&&w.targetMismatches.get(R.targetId)!=null,L=R.view.applyChanges(C,k.isPrimaryClient,O,M);return yw(k,R.targetId,L.au),L.snapshot}(t,f,m,_);const i=await aw(t.localStore,e,!0),o=new Oj(e,i.ks),a=o.ru(i.documents),l=Ml.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(a,t.isPrimaryClient,l);yw(t,n,d.au);const h=new jj(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),d.snapshot}async function Bj(t,e,n){const r=Z(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!qd(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Jp(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Hg(r.remoteStore,s.targetId),tm(r,s.targetId)}).catch(So)):(tm(r,s.targetId),await Jp(r.localStore,s.targetId,!0))}async function $j(t,e){const n=Z(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hg(n.remoteStore,r.targetId))}async function zj(t,e,n){const r=Yj(t);try{const s=await function(o,a){const l=Z(o),d=fe.now(),h=a.reduce((_,T)=>_.add(T.key),ce());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=hr(),k=ce();return l.xs.getEntries(_,h).next(R=>{T=R,T.forEach((N,w)=>{w.isValidDocument()||(k=k.add(N))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,T)).next(R=>{f=R;const N=[];for(const w of a){const C=rO(w,f.get(w.key).overlayedDocument);C!=null&&N.push(new Ts(w.key,C,eC(C.value.mapValue),vn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,d,N,a)}).next(R=>{m=R;const N=R.applyToLocalDocumentSet(f,k);return l.documentOverlayCache.saveOverlays(_,R.batchId,N)})}).then(()=>({batchId:m.batchId,changes:dC(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let d=o.du[o.currentUser.toKey()];d||(d=new qe(le)),d=d.insert(a,l),o.du[o.currentUser.toKey()]=d}(r,s.batchId,n),await Fl(r,s.changes),await Jd(r.remoteStore)}catch(s){const i=Xg(s,"Failed to persist write");n.reject(i)}}async function GC(t,e){const n=Z(t);try{const r=await tj(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?me(o.hu,14607):s.removedDocuments.size>0&&(me(o.hu,42227),o.hu=!1))}),await Fl(n,r,e)}catch(r){await So(r)}}function gw(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let d=!1;l.queries.forEach((h,f)=>{for(const m of f.ba)m.va(a)&&(d=!0)}),d&&ey(l)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Wj(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new qe(G.comparator);o=o.insert(i,gt.newNoDocument(i,J.min()));const a=ce().add(i),l=new Qd(J.min(),new Map,new qe(le),o,a);await GC(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),ry(r)}else await Jp(r.localStore,e,!1).then(()=>tm(r,e,n)).catch(So)}async function qj(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await ej(n.localStore,e);QC(n,r,null),KC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fl(n,s)}catch(s){await So(s)}}async function Hj(t,e,n){const r=Z(t);try{const s=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let h;return l.mutationQueue.lookupMutationBatch(d,a).next(f=>(me(f!==null,37113),h=f.keys(),l.mutationQueue.removeMutationBatch(d,f))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,h)).next(()=>l.localDocuments.getDocuments(d,h))})}(r.localStore,e);QC(r,e,n),KC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fl(r,s)}catch(s){await So(s)}}function KC(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function QC(t,e,n){const r=Z(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function tm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||YC(t,r)})}function YC(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Hg(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),ry(t))}function yw(t,e,n){for(const r of n)r instanceof WC?(t.Vu.addReference(r.key,e),Gj(t,r)):r instanceof qC?(q(ny,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||YC(t,r.key)):Q(19791,{wu:r})}function Gj(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(q(ny,"New document in limbo: "+n),t.Eu.add(r),ry(t))}function ry(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(we.fromString(e)),r=t.fu.next();t.Au.set(r,new Lj(n)),t.Ru=t.Ru.insert(n,r),VC(t.remoteStore,new $r(Ln(Wd(n.path)),r,"TargetPurposeLimboResolution",Bd.ce))}}async function Fl(t,e,n){const r=Z(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(d=>{var h;if((d||n)&&r.isPrimaryClient){const f=d?!d.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(d){s.push(d);const f=Wg.Es(l.targetId,d);i.push(f)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(l,d){const h=Z(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(d,m=>F.forEach(m.Ts,_=>h.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>F.forEach(m.Is,_=>h.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!bo(f))throw f;q(qg,"Failed to update sequence numbers: "+f)}for(const f of d){const m=f.targetId;if(!f.fromCache){const _=h.vs.get(m),T=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(T);h.vs=h.vs.insert(m,k)}}}(r.localStore,i))}async function Kj(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){q(ny,"User change. New user:",e.toKey());const r=await OC(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(l=>{l.reject(new W(V.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fl(n,r.Ns)}}function Qj(t,e){const n=Z(t),r=n.Au.get(e);if(r&&r.hu)return ce().add(r.key);{let s=ce();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function XC(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=GC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wj.bind(null,e),e.Pu.J_=Pj.bind(null,e.eventManager),e.Pu.yu=Dj.bind(null,e.eventManager),e}function Yj(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Hj.bind(null,e),e}class Ku{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return ZO(this.persistence,new YO,e.initialUser,this.serializer)}Cu(e){return new DC(zg.Vi,this.serializer)}Du(e){return new oj}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ku.provider={build:()=>new Ku};class Xj extends Ku{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){me(this.persistence.referenceDelegate instanceof Hu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new jO(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new DC(r=>Hu.Vi(r,n),this.serializer)}}class nm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kj.bind(null,this.syncEngine),await kj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Aj}()}createDatastore(e){const n=Yd(e.databaseInfo.databaseId),r=dj(e.databaseInfo);return gj(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new _j(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>gw(this.syncEngine,n,0),function(){return uw.v()?new uw:new aj}())}createSyncEngine(e,n){return function(s,i,o,a,l,d,h){const f=new Mj(s,i,o,a,l,d);return h&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Z(s);q(ni,"RemoteStore shutting down."),i.Ea.add(5),await Vl(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}nm.provider={build:()=>new nm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):dr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="FirestoreClient";class Jj{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=Pg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(ps,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(ps,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function If(t,e){t.asyncQueue.verifyOperationInProgress(),q(ps,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await OC(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _w(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zj(t);q(ps,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>hw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>hw(e.remoteStore,s)),t._onlineComponents=e}async function Zj(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(ps,"Using user provided OfflineComponentProvider");try{await If(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;lo("Error using user provided cache. Falling back to memory cache: "+n),await If(t,new Ku)}}else q(ps,"Using default OfflineComponentProvider"),await If(t,new Xj(void 0));return t._offlineComponents}async function JC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(ps,"Using user provided OnlineComponentProvider"),await _w(t,t._uninitializedComponentsProvider._online)):(q(ps,"Using default OnlineComponentProvider"),await _w(t,new nm))),t._onlineComponents}function eL(t){return JC(t).then(e=>e.syncEngine)}async function Qu(t){const e=await JC(t),n=e.eventManager;return n.onListen=Vj.bind(null,e.syncEngine),n.onUnlisten=Bj.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Fj.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$j.bind(null,e.syncEngine),n}function tL(t,e,n,r){const s=new sy(r),i=new ty(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>Jg(await Qu(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>Zg(await Qu(t),i))}}function nL(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,d){const h=new sy({next:m=>{h.Nu(),o.enqueueAndForget(()=>Zg(i,f));const _=m.docs.has(a);!_&&m.fromCache?d.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?d.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(m)},error:m=>d.reject(m)}),f=new ty(Wd(a.path),h,{includeMetadataChanges:!0,Ka:!0});return Jg(i,f)}(await Qu(t),t.asyncQueue,e,n,r)),r.promise}function rL(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,d){const h=new sy({next:m=>{h.Nu(),o.enqueueAndForget(()=>Zg(i,f)),m.fromCache&&l.source==="server"?d.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(m)},error:m=>d.reject(m)}),f=new ty(a,h,{includeMetadataChanges:!0,Ka:!0});return Jg(i,f)}(await Qu(t),t.asyncQueue,e,n,r)),r.promise}function sL(t,e){const n=new nr;return t.asyncQueue.enqueueAndForget(async()=>zj(await eL(t),e,n)),n.promise}/**
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
 */function ZC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iL="ComponentProvider",vw=new Map;function oL(t,e,n,r,s){return new C2(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ZC(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN="firestore.googleapis.com",ww=!0;class xw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=eN,this.ssl=ww}else this.host=e.host,this.ssl=e.ssl??ww;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=PC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<DO)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}p2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZC(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zd{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new s2;switch(r.type){case"firstParty":return new l2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vw.get(n);r&&(q(iL,"Removing Datastore"),vw.delete(n),r.terminate())}(this),Promise.resolve()}}function aL(t,e,n,r={}){var d;t=qt(t,Zd);const s=gr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(Pd(`https://${a}`),Dd("Firestore",!0)),i.host!==eN&&i.host!==a&&lo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:s,emulatorOptions:r};if(!as(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=pt.MOCK_USER;else{h=wg(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new pt(m)}t._authCredentials=new i2(new $I(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fi(this.firestore,e,this._query)}}class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ol(n,Le._jsonSchema))return new Le(e,r||null,new G(we.fromString(n.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:We("string",Le._jsonSchemaVersion),referencePath:We("string")};class ns extends fi{constructor(e,n,r){super(e,n,Wd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new G(e))}withConverter(e){return new ns(this.firestore,e,this._path)}}function Ul(t,e,...n){if(t=Ee(t),zI("collection","path",e),t instanceof Zd){const r=we.fromString(e,...n);return O0(r),new ns(t,null,r)}{if(!(t instanceof Le||t instanceof ns))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return O0(r),new ns(t.firestore,null,r)}}function Vn(t,e,...n){if(t=Ee(t),arguments.length===1&&(e=Pg.newId()),zI("doc","path",e),t instanceof Zd){const r=we.fromString(e,...n);return D0(r),new Le(t,null,new G(r))}{if(!(t instanceof Le||t instanceof ns))throw new W(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return D0(r),new Le(t.firestore,t instanceof ns?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="AsyncQueue";class Tw{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new LC(this,"async_queue_retry"),this._c=()=>{const r=Tf();r&&q(Ew,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Tf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Tf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new nr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!bo(e))throw e;q(Ew,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,dr("INTERNAL UNHANDLED ERROR: ",Iw(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Yg.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Q(47125,{Pc:Iw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Iw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ms extends Zd{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Tw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tw(e),this._firestoreClient=void 0,await e}}}function lL(t,e){const n=typeof t=="object"?t:Ld(),r=typeof t=="string"?t:Uu,s=kl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=_g("firestore");i&&aL(s,...i)}return s}function eh(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||cL(t),t._firestoreClient}function cL(t){var r,s,i,o;const e=t._freezeSettings(),n=oL(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Jj(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zt(ct.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zt(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ol(e,Zt._jsonSchema))return Zt.fromBase64String(e.bytes)}}Zt._jsonSchemaVersion="firestore/bytes/1.0",Zt._jsonSchema={type:We("string",Zt._jsonSchemaVersion),bytes:We("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Fn._jsonSchemaVersion}}static fromJSON(e){if(Ol(e,Fn._jsonSchema))return new Fn(e.latitude,e.longitude)}}Fn._jsonSchemaVersion="firestore/geoPoint/1.0",Fn._jsonSchema={type:We("string",Fn._jsonSchemaVersion),latitude:We("number"),longitude:We("number")};/**
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
 */class wn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:wn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ol(e,wn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new wn(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wn._jsonSchemaVersion="firestore/vectorValue/1.0",wn._jsonSchema={type:We("string",wn._jsonSchemaVersion),vectorValues:We("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL=/^__.*__$/;class dL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ts(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ll(e,this.data,n,this.fieldTransforms)}}class tN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ts(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nN(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:t})}}class oy{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new oy({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Yu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(nN(this.dataSource)&&uL.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class hL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Yd(e)}createContext(e,n,r,s=!1){return new oy({dataSource:e,methodName:n,targetDoc:r,path:ot.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nh(t){const e=t._freezeSettings(),n=Yd(t._databaseId);return new hL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rN(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);ly("Data must be an object, but it was:",o,r);const a=sN(r,o);let l,d;if(i.merge)l=new zt(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const m=mo(e,f,n);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);aN(h,m)||h.push(m)}l=new zt(h),d=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,d=o.fieldTransforms;return new dL(new At(a),l,d)}class rh extends th{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rh}}class ay extends th{_toFieldTransform(e){return new Z2(e.path,new dl)}isEqual(e){return e instanceof ay}}function fL(t,e,n,r){const s=t.createContext(1,e,n);ly("Data must be an object, but it was:",s,r);const i=[],o=At.empty();Es(r,(l,d)=>{const h=oN(e,l,n);d=Ee(d);const f=s.childContextForFieldPath(h);if(d instanceof rh)i.push(h);else{const m=Bl(d,f);m!=null&&(i.push(h),o.set(h,m))}});const a=new zt(i);return new tN(o,a,s.fieldTransforms)}function pL(t,e,n,r,s,i){const o=t.createContext(1,e,n),a=[mo(e,r,n)],l=[s];if(i.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(mo(e,i[m])),l.push(i[m+1]);const d=[],h=At.empty();for(let m=a.length-1;m>=0;--m)if(!aN(d,a[m])){const _=a[m];let T=l[m];T=Ee(T);const k=o.childContextForFieldPath(_);if(T instanceof rh)d.push(_);else{const R=Bl(T,k);R!=null&&(d.push(_),h.set(_,R))}}const f=new zt(d);return new tN(h,f,o.fieldTransforms)}function mL(t,e,n,r=!1){return Bl(n,t.createContext(r?4:3,e))}function Bl(t,e){if(iN(t=Ee(t)))return ly("Unsupported field value:",e,t),sN(t,e);if(t instanceof th)return function(r,s){if(!nN(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Bl(a,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Y2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=fe.fromDate(r);return{timestampValue:qu(s.serializer,i)}}if(r instanceof fe){const i=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qu(s.serializer,i)}}if(r instanceof Fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zt)return{bytesValue:IC(s.serializer,r._byteString)};if(r instanceof Le){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof wn)return function(o,a){const l=o instanceof wn?o.toArray():o;return{mapValue:{fields:{[JI]:{stringValue:ZI},[Bu]:{arrayValue:{values:l.map(h=>{if(typeof h!="number")throw a.createError("VectorValues must only contain numeric values.");return Vg(a.serializer,h)})}}}}}}(r,s);if(AC(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Ud(r)}`)}(t,e)}function sN(t,e){const n={};return HI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(t,(r,s)=>{const i=Bl(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function iN(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof Fn||t instanceof Zt||t instanceof Le||t instanceof th||t instanceof wn||AC(t))}function ly(t,e,n){if(!iN(n)||!WI(n)){const r=Ud(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function mo(t,e,n){if((e=Ee(e))instanceof iy)return e._internalPath;if(typeof e=="string")return oN(t,e);throw Yu("Field path arguments must be of type string or ",t,!1,void 0,n)}const gL=new RegExp("[~\\*/\\[\\]]");function oN(t,e,n){if(e.search(gL)>=0)throw Yu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new iy(...e.split("."))._internalPath}catch{throw Yu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new W(V.INVALID_ARGUMENT,a+t+l)}function aN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{convertValue(e,n="none"){switch(hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Es(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Bu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Fe(o.doubleValue));return new wn(n)}convertGeoPoint(e){return new Fn(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ll(e));default:return null}}convertTimestamp(e){const n=us(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);me(RC(r),9688,{name:e});const s=new cl(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||dr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class cy extends yL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function Cf(){return new ay("serverTimestamp")}const Cw="@firebase/firestore",Nw="4.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lN{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _L(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(mo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _L extends lN{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uy{}class vL extends uy{}function sh(t,e,...n){let r=[];e instanceof uy&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof dy).length,a=i.filter(l=>l instanceof ih).length;if(o>1||o>0&&a>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ih extends vL{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ih(e,n,r)}_apply(e){const n=this._parse(e);return uN(e._query,n),new fi(e.firestore,e.converter,Hp(e._query,n))}_parse(e){const n=nh(e.firestore);return function(i,o,a,l,d,h,f){let m;if(d.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){kw(f,h);const T=[];for(const k of f)T.push(bw(l,i,k));m={arrayValue:{values:T}}}else m=bw(l,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||kw(f,h),m=mL(a,o,f,h==="in"||h==="not-in");return ze.create(d,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function pl(t,e,n){const r=e,s=mo("where",t);return ih._create(s,r,n)}class dy extends uy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new dy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:In.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)uN(o,l),o=Hp(o,l)}(e._query,n),new fi(e.firestore,e.converter,Hp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function bw(t,e,n){if(typeof(n=Ee(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aC(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!G.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $0(t,new G(r))}if(n instanceof Le)return $0(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ud(n)}.`)}function kw(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uN(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function dN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class va{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hs extends lN{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new nu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Hs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Hs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Hs._jsonSchema={type:We("string",Hs._jsonSchemaVersion),bundleSource:We("string","DocumentSnapshot"),bundleName:We("string"),bundle:We("string")};class nu extends Hs{data(e={}){return super.data(e)}}class Gs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new va(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new nu(this._firestore,this._userDataWriter,r.key,r,new va(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new nu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new va(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new nu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new va(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,h=-1;return a.type!==0&&(d=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:wL(a.type),doc:l,oldIndex:d,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Gs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function wL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */Gs._jsonSchemaVersion="firestore/querySnapshot/1.0",Gs._jsonSchema={type:We("string",Gs._jsonSchemaVersion),bundleSource:We("string","QuerySnapshot"),bundleName:We("string"),bundle:We("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t){t=qt(t,Le);const e=qt(t.firestore,ms),n=eh(e);return nL(n,t._key).then(r=>hN(e,t,r))}function hy(t){t=qt(t,fi);const e=qt(t.firestore,ms),n=eh(e),r=new cy(e);return cN(t._query),rL(n,t._query).then(s=>new Gs(e,r,t,s))}function xL(t,e,n){t=qt(t,Le);const r=qt(t.firestore,ms),s=dN(t.converter,e),i=nh(r);return fy(r,[rN(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,vn.none())])}function rm(t,e,n,...r){t=qt(t,Le);const s=qt(t.firestore,ms),i=nh(s);let o;return o=typeof(e=Ee(e))=="string"||e instanceof iy?pL(i,"updateDoc",t._key,e,n,r):fL(i,"updateDoc",t._key,e),fy(s,[o.toMutation(t._key,vn.exists(!0))])}function EL(t,e){const n=qt(t.firestore,ms),r=Vn(t),s=dN(t.converter,e),i=nh(t.firestore);return fy(n,[rN(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,vn.exists(!1))]).then(()=>r)}function TL(t,...e){var d,h,f;t=Ee(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Sw(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Sw(e[r])){const m=e[r];e[r]=(d=m.next)==null?void 0:d.bind(m),e[r+1]=(h=m.error)==null?void 0:h.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let i,o,a;if(t instanceof Le)o=qt(t.firestore,ms),a=Wd(t._key.path),i={next:m=>{e[r]&&e[r](hN(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=qt(t,fi);o=qt(m.firestore,ms),a=m._query;const _=new cy(o);i={next:T=>{e[r]&&e[r](new Gs(o,_,m,T))},error:e[r+1],complete:e[r+2]},cN(t._query)}const l=eh(o);return tL(l,a,s,i)}function fy(t,e){const n=eh(t);return sL(n,e)}function hN(t,e,n){const r=n.docs.get(e._key),s=new cy(t);return new Hs(t,s,e._key,r,new va(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){r2(xs),ls(new lr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ms(new o2(r.getProvider("auth-internal")),new c2(o,r.getProvider("app-check-internal")),N2(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),nn(Cw,Nw,e),nn(Cw,Nw,"esm2020")})();var Rw={};const Aw="@firebase/database",Pw="1.1.0";/**
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
 */let fN="";function IL(t){fN=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:rl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CL(e)}}catch{}return new NL},zs=pN("localStorage"),SL=pN("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new jd("@firebase/database"),bL=function(){let t=1;return function(){return t++}}(),mN=function(t){const e=SR(t),n=new TR;n.update(e);const r=n.digest();return yg.encodeByteArray(r)},zl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=zl.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let ja=null,Dw=!0;const kL=function(t,e){B(!0,"Can't turn on custom loggers persistently."),Xi.logLevel=se.VERBOSE,ja=Xi.log.bind(Xi)},yt=function(...t){if(Dw===!0&&(Dw=!1,ja===null&&SL.get("logging_enabled")===!0&&kL()),ja){const e=zl.apply(null,t);ja(e)}},Wl=function(t){return function(...e){yt(t,...e)}},sm=function(...t){const e="FIREBASE INTERNAL ERROR: "+zl(...t);Xi.error(e)},fr=function(...t){const e=`FIREBASE FATAL ERROR: ${zl(...t)}`;throw Xi.error(e),new Error(e)},Ht=function(...t){const e="FIREBASE WARNING: "+zl(...t);Xi.warn(e)},RL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},gN=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},AL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},go="[MIN_NAME]",ri="[MAX_NAME]",Ro=function(t,e){if(t===e)return 0;if(t===go||e===ri)return-1;if(e===go||t===ri)return 1;{const n=Ow(t),r=Ow(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},PL=function(t,e){return t===e?0:t<e?-1:1},oa=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},py=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=nt(e[r]),n+=":",n+=py(t[e[r]]);return n+="}",n},yN=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Ft(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _N=function(t){B(!gN(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const d=[];for(l=n;l;l-=1)d.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)d.push(i%2?1:0),i=Math.floor(i/2);d.push(s?1:0),d.reverse();const h=d.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(h.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},DL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},OL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jL(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const LL=new RegExp("^-?(0*)\\d{1,10}$"),ML=-2147483648,VL=2147483647,Ow=function(t){if(LL.test(t)){const e=Number(t);if(e>=ML&&e<=VL)return e}return null},ql=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ht("Exception was thrown by user callback.",n),e},Math.floor(0))}},FL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},La=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class UL{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Rt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ht(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ht(e)}}class ru{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ru.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="5",vN="v",wN="s",xN="r",EN="f",TN=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,IN="ls",CN="p",im="ac",NN="websocket",SN="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1,d=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $L(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function kN(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===NN)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===SN)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$L(t)&&(n.ns=t.namespace);const s=[];return Ft(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(){this.counters_={}}incrementCounter(e,n=1){yr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf={},Sf={};function gy(t){const e=t.toString();return Nf[e]||(Nf[e]=new zL),Nf[e]}function WL(t,e){const n=t.toString();return Sf[n]||(Sf[n]=e()),Sf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ql(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw="start",HL="close",GL="pLPCommand",KL="pRTLPCB",RN="id",AN="pw",PN="ser",QL="cb",YL="seg",XL="ts",JL="d",ZL="dframe",DN=1870,ON=30,eM=DN-ON,tM=25e3,nM=3e4;class Vi{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wl(e),this.stats_=gy(n),this.urlFn=l=>(this.appCheckToken&&(l[im]=this.appCheckToken),kN(n,SN,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nM)),AL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yy((...i)=>{const[o,a,l,d,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===jw)this.id=a,this.password=l;else if(o===HL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[jw]="t",r[PN]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[QL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[vN]=my,this.transportSessionId&&(r[wN]=this.transportSessionId),this.lastSessionId&&(r[IN]=this.lastSessionId),this.applicationId&&(r[CN]=this.applicationId),this.appCheckToken&&(r[im]=this.appCheckToken),typeof location<"u"&&location.hostname&&TN.test(location.hostname)&&(r[xN]=EN);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Vi.forceAllow_=!0}static forceDisallow(){Vi.forceDisallow_=!0}static isAvailable(){return Vi.forceAllow_?!0:!Vi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!DL()&&!OL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=BT(n),s=yN(r,eM);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[ZL]="t",r[RN]=e,r[AN]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class yy{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bL(),window[GL+this.uniqueCallbackIdentifier]=e,window[KL+this.uniqueCallbackIdentifier]=n,this.myIFrame=yy.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){yt("frame writing exception"),a.stack&&yt(a.stack),yt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||yt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[RN]=this.myID,e[AN]=this.myPW,e[PN]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ON+r.length<=DN;){const o=this.pendingSegs.shift();r=r+"&"+YL+s+"="+o.seg+"&"+XL+s+"="+o.ts+"&"+JL+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(tM)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{yt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM=16384,sM=45e3;let Xu=null;typeof MozWebSocket<"u"?Xu=MozWebSocket:typeof WebSocket<"u"&&(Xu=WebSocket);class hn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wl(this.connId),this.stats_=gy(n),this.connURL=hn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[vN]=my,typeof location<"u"&&location.hostname&&TN.test(location.hostname)&&(o[xN]=EN),n&&(o[wN]=n),r&&(o[IN]=r),s&&(o[im]=s),i&&(o[CN]=i),kN(e,NN,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zs.set("previous_websocket_failure",!0);try{let r;pR(),this.mySock=new Xu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Xu!==null&&!hn.forceDisallow_}static previouslyFailed(){return zs.isInMemoryStorage||zs.get("previous_websocket_failure")===!0}markConnectionHealthy(){zs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=rl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=yN(n,rM);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{static get ALL_TRANSPORTS(){return[Vi,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=hn&&hn.isAvailable();let r=n&&!hn.previouslyFailed();if(e.webSocketOnly&&(n||Ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[hn];else{const s=this.transports_=[];for(const i of ml.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);ml.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ml.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM=6e4,oM=5e3,aM=10*1024,lM=100*1024,bf="t",Lw="d",cM="s",Mw="r",uM="e",Vw="o",Fw="a",Uw="n",Bw="p",dM="h";class hM{constructor(e,n,r,s,i,o,a,l,d,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=d,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wl("c:"+this.id+":"),this.transportManager_=new ml(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=La(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>lM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>aM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bf in e){const n=e[bf];n===Fw?this.upgradeIfSecondaryHealthy_():n===Mw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Vw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=oa("t",e),r=oa("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Uw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=oa("t",e),r=oa("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=oa(bf,e);if(Lw in e){const r=e[Lw];if(n===dM){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Uw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===cM?this.onConnectionShutdown_(r):n===Mw?this.onReset_(r):n===uM?sm("Server Error: "+r):n===Vw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),my!==r&&Ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),La(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(iM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):La(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(oM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends LN{static getInstance(){return new Ju}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=32,zw=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new _e("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function gs(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function MN(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function fM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function VN(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function FN(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function Ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof _e)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new _e(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function Dt(t,e){const n=ie(t),r=ie(e);if(n===null)return e;if(n===r)return Dt(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _y(t,e){if(gs(t)!==gs(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function pn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(gs(t)>gs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class pM{constructor(e,n){this.errorPrefix_=n,this.parts_=VN(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Od(this.parts_[r]);UN(this)}}function mM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Od(e),UN(t)}function gM(t){const e=t.parts_.pop();t.byteLength_-=Od(e),t.parts_.length>0&&(t.byteLength_-=1)}function UN(t){if(t.byteLength_>zw)throw new Error(t.errorPrefix_+"has a key path longer than "+zw+" bytes ("+t.byteLength_+").");if(t.parts_.length>$w)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$w+") or object contains a cycle "+Vs(t))}function Vs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy extends LN{static getInstance(){return new vy}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=1e3,yM=60*5*1e3,Ww=30*1e3,_M=1.3,vM=3e4,wM="server_kill",qw=3;class rr extends jN{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=rr.nextPersistentConnectionId_++,this.log_=Wl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=aa,this.maxReconnectDelay_=yM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ju.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(nt(i)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new vg,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,d=a.s;rr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),d!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(d,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yr(e,"w")){const r=ao(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ER(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ww)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=xR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):sm("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=aa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=aa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vM&&(this.reconnectDelay_=aa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_M)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+rr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},d=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:d};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?yt("getToken() completed but was canceled"):(yt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new hM(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ht(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(wM)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ht(f),l())}}}interrupt(e){yt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){yt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],kp(this.interruptReasons_)&&(this.reconnectDelay_=aa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>py(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new _e(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){yt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qw&&(this.reconnectDelay_=Ww,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){yt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fN.replace(/\./g,"-")]=1,xg()?e["framework.cordova"]=1:HT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ju.getInstance().currentlyOnline();return kp(this.interruptReasons_)&&e}}rr.nextPersistentConnectionId_=0;rr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ne(go,e),s=new ne(go,n);return this.compare(r,s)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac;class BN extends oh{static get __EMPTY_NODE(){return Ac}static set __EMPTY_NODE(e){Ac=e}compare(e,n){return Ro(e.name,n.name)}isDefinedOn(e){throw To("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(ri,Ac)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,Ac)}toString(){return".key"}}const Ji=new BN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tt.RED,this.left=s??Ot.EMPTY_NODE,this.right=i??Ot.EMPTY_NODE}copy(e,n,r,s,i){return new tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ot.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ot.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class xM{copy(e,n,r,s,i){return this}insert(e,n,r){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ot{constructor(e,n=Ot.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ot(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new Ot(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Pc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Pc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Pc(this.root_,null,this.comparator_,!0,e)}}Ot.EMPTY_NODE=new xM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(t,e){return Ro(t.name,e.name)}function wy(t,e){return Ro(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let om;function TM(t){om=t}const $N=function(t){return typeof t=="number"?"number:"+_N(t):"string:"+t},zN=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yr(e,".sv"),"Priority must be a string or number.")}else B(t===om||t.isEmpty(),"priority of unexpected type.");B(t===om||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hw;class Je{static set __childrenNodeConstructor(e){Hw=e}static get __childrenNodeConstructor(){return Hw}constructor(e,n=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zN(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:ie(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||gs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$N(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_N(this.value_):e+=this.value_,this.lazyHash_=mN(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Je.VALUE_TYPE_ORDER.indexOf(n),i=Je.VALUE_TYPE_ORDER.indexOf(r);return B(s>=0,"Unknown leaf type: "+n),B(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let WN,qN;function IM(t){WN=t}function CM(t){qN=t}class NM extends oh{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Ro(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(ri,new Je("[PRIORITY-POST]",qN))}makePost(e,n){const r=WN(e);return new ne(n,new Je("[PRIORITY-POST]",r))}toString(){return".priority"}}const Me=new NM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM=Math.log(2);class bM{constructor(e){const n=i=>parseInt(Math.log(i)/SM,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zu=function(t,e,n,r){t.sort(e);const s=function(l,d){const h=d-l;let f,m;if(h===0)return null;if(h===1)return f=t[l],m=n?n(f):f,new tt(m,f.node,tt.BLACK,null,null);{const _=parseInt(h/2,10)+l,T=s(l,_),k=s(_+1,d);return f=t[_],m=n?n(f):f,new tt(m,f.node,tt.BLACK,T,k)}},i=function(l){let d=null,h=null,f=t.length;const m=function(T,k){const R=f-T,N=f;f-=T;const w=s(R+1,N),C=t[R],O=n?n(C):C;_(new tt(O,C.node,k,null,w))},_=function(T){d?(d.left=T,d=T):(h=T,d=T)};for(let T=0;T<l.count;++T){const k=l.nextBitIsOne(),R=Math.pow(2,l.count-(T+1));k?m(R,tt.BLACK):(m(R,tt.BLACK),m(R,tt.RED))}return h},o=new bM(t.length),a=i(o);return new Ot(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kf;const wi={};class Zn{static get Default(){return B(wi&&Me,"ChildrenNode.ts has not been loaded"),kf=kf||new Zn({".priority":wi},{".priority":Me}),kf}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ao(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ot?n:null}hasIndex(e){return yr(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Ji,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(ne.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Zu(r,e.getCompare()):a=wi;const l=e.toString(),d={...this.indexSet_};d[l]=e;const h={...this.indexes_};return h[l]=a,new Zn(h,d)}addToIndexes(e,n){const r=Au(this.indexes_,(s,i)=>{const o=ao(this.indexSet_,i);if(B(o,"Missing index implementation for "+i),s===wi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ne.Wrap);let d=l.getNext();for(;d;)d.name!==e.name&&a.push(d),d=l.getNext();return a.push(e),Zu(a,o.getCompare())}else return wi;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new ne(e.name,a))),l.insert(e,e.node)}});return new Zn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Au(this.indexes_,s=>{if(s===wi)return s;{const i=n.get(e.name);return i?s.remove(new ne(e.name,i)):s}});return new Zn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la;class Y{static get EMPTY_NODE(){return la||(la=new Y(new Ot(wy),null,Zn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&zN(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||la}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?la:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ne(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?la:this.priorityNode_;return new Y(s,o,i)}}updateChild(e,n){const r=ie(e);if(r===null)return n;{B(ie(e)!==".priority"||gs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ve(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Me,(o,a)=>{n[o]=a.val(e),r++,i&&Y.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$N(this.getPriority().val())+":"),this.forEachChild(Me,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":mN(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new ne(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ne.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hl?-1:0}withIndex(e){if(e===Ji||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ji||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Me),s=n.getIterator(Me);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ji?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kM extends Y{constructor(){super(new Ot(wy),Y.EMPTY_NODE,Zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const Hl=new kM;Object.defineProperties(ne,{MIN:{value:new ne(go,Y.EMPTY_NODE)},MAX:{value:new ne(ri,Hl)}});BN.__EMPTY_NODE=Y.EMPTY_NODE;Je.__childrenNodeConstructor=Y;TM(Hl);CM(Hl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM=!0;function _t(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Je(n,_t(e))}if(!(t instanceof Array)&&RM){const n=[];let r=!1;if(Ft(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=_t(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ne(o,l)))}}),n.length===0)return Y.EMPTY_NODE;const i=Zu(n,EM,o=>o.name,wy);if(r){const o=Zu(n,Me.getCompare());return new Y(i,_t(e),new Zn({".priority":o},{".priority":Me}))}else return new Y(i,_t(e),Zn.Default)}else{let n=Y.EMPTY_NODE;return Ft(t,(r,s)=>{if(yr(t,r)&&r.substring(0,1)!=="."){const i=_t(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(_t(e))}}IM(_t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM extends oh{constructor(e){super(),this.indexPath_=e,B(!oe(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Ro(e.name,n.name):i}makePost(e,n){const r=_t(e),s=Y.EMPTY_NODE.updateChild(this.indexPath_,r);return new ne(n,s)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,Hl);return new ne(ri,e)}toString(){return VN(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM extends oh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ro(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const r=_t(e);return new ne(n,r)}toString(){return".value"}}const DM=new PM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(t){return{type:"value",snapshotNode:t}}function yo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function yl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function OM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(gl(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(yo(n,r)):o.trackChildChange(yl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Me,(s,i)=>{n.hasChild(s)||r.trackChildChange(gl(s,i))}),n.isLeafNode()||n.forEachChild(Me,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(yl(s,i,o))}else r.trackChildChange(yo(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.indexedFilter_=new xy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_l.getStartPost_(e),this.endPost_=_l.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new ne(n,r))||(r=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Y.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(Y.EMPTY_NODE);const i=this;return n.forEachChild(Me,(o,a)=>{i.matches(new ne(o,a))||(s=s.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new _l(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new ne(n,r))||(r=Y.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=Y.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(Y.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,_)=>f(_,m)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const l=new ne(n,r),d=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=s.getChildAfterChild(this.index_,d,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const _=m==null?1:o(m,l);if(h&&!r.isEmpty()&&_>=0)return i!=null&&i.trackChildChange(yl(n,r,f)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(gl(n,f));const k=a.updateImmediateChild(n,Y.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(i!=null&&i.trackChildChange(yo(m.name,m.node)),k.updateImmediateChild(m.name,m.node)):k}}else return r.isEmpty()?e:h&&o(d,l)>=0?(i!=null&&(i.trackChildChange(gl(d.name,d.node)),i.trackChildChange(yo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(d.name,Y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:go}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ri}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new Ey;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function LM(t){return t.loadsAllData()?new xy(t.getIndex()):t.hasLimit()?new jM(t):new _l(t)}function Gw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Me?n="$priority":t.index_===DM?n="$value":t.index_===Ji?n="$key":(B(t.index_ instanceof AM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=nt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+nt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=nt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Kw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends jN{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Wl("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=ed.getListenId_(e,r),a={};this.listens_[o]=a;const l=Gw(e._queryParams);this.restRequest_(i+".json",l,(d,h)=>{let f=h;if(d===404&&(f=null,d=null),d===null&&this.onDataUpdate_(i,f,!1,r),ao(this.listens_,o)===a){let m;d?d===401?m="permission_denied":m="rest_error:"+d:m="ok",s(m,null)}})}unlisten(e,n){const r=ed.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Gw(e._queryParams),r=e._path.toString(),s=new vg;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Io(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=rl(a.responseText)}catch{Ht("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ht("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(){return{value:null,children:new Map}}function GN(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ie(e);t.children.has(r)||t.children.set(r,td());const s=t.children.get(r);e=ve(e),GN(s,e,n)}}function am(t,e,n){t.value!==null?n(e,t.value):VM(t,(r,s)=>{const i=new _e(e.toString()+"/"+r);am(s,i,n)})}function VM(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ft(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=10*1e3,UM=30*1e3,BM=5*60*1e3;class $M{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new FM(e);const r=Qw+(UM-Qw)*Math.random();La(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ft(e,(s,i)=>{i>0&&yr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),La(this.reportStats_.bind(this),Math.floor(Math.random()*2*BM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mn||(mn={}));function KN(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ty(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Iy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=mn.ACK_USER_WRITE,this.source=KN()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new nd(pe(),n,this.revert)}}else return B(ie(this.path)===e,"operationForChild called for unrelated child."),new nd(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.source=e,this.path=n,this.type=mn.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new vl(this.source,pe()):new vl(this.source,ve(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=mn.OVERWRITE}operationForChild(e){return oe(this.path)?new si(this.source,pe(),this.snap.getImmediateChild(e)):new si(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=mn.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new si(this.source,pe(),n.value):new wl(this.source,pe(),n)}else return B(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wl(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function WM(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(OM(o.childName,o.snapshotNode))}),ca(t,s,"child_removed",e,r,n),ca(t,s,"child_added",e,r,n),ca(t,s,"child_moved",i,r,n),ca(t,s,"child_changed",e,r,n),ca(t,s,"value",e,r,n),s}function ca(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>HM(t,a,l)),o.forEach(a=>{const l=qM(t,a,i);s.forEach(d=>{d.respondsTo(a.type)&&e.push(d.createEvent(l,t.query_))})})}function qM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function HM(t,e,n){if(e.childName==null||n.childName==null)throw To("Should only compare child_ events.");const r=new ne(e.childName,e.snapshotNode),s=new ne(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t,e){return{eventCache:t,serverCache:e}}function Ma(t,e,n,r){return ah(new ii(e,n,r),t.serverCache)}function QN(t,e,n,r){return ah(t.eventCache,new ii(e,n,r))}function lm(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function oi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rf;const GM=()=>(Rf||(Rf=new Ot(PL)),Rf);class Ne{static fromObject(e){let n=new Ne(null);return Ft(e,(r,s)=>{n=n.set(new _e(r),s)}),n}constructor(e,n=GM()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(oe(e))return null;{const r=ie(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ve(e),n);return i!=null?{path:Ke(new _e(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=ie(e),r=this.children.get(n);return r!==null?r.subtree(ve(e)):new Ne(null)}}set(e,n){if(oe(e))return new Ne(n,this.children);{const r=ie(e),i=(this.children.get(r)||new Ne(null)).set(ve(e),n),o=this.children.insert(r,i);return new Ne(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new Ne(null):new Ne(null,this.children);{const n=ie(e),r=this.children.get(n);if(r){const s=r.remove(ve(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ne(null):new Ne(this.value,i)}else return this}}get(e){if(oe(e))return this.value;{const n=ie(e),r=this.children.get(n);return r?r.get(ve(e)):null}}setTree(e,n){if(oe(e))return n;{const r=ie(e),i=(this.children.get(r)||new Ne(null)).setTree(ve(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ne(this.value,o)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ke(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(oe(e))return null;{const i=ie(e),o=this.children.get(i);return o?o.findOnPath_(ve(e),Ke(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,r){if(oe(e))return this;{this.value&&r(n,this.value);const s=ie(e),i=this.children.get(s);return i?i.foreachOnPath_(ve(e),Ke(n,s),r):new Ne(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.writeTree_=e}static empty(){return new xn(new Ne(null))}}function Va(t,e,n){if(oe(e))return new xn(new Ne(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Dt(s,e);return i=i.updateChild(o,n),new xn(t.writeTree_.set(s,i))}else{const s=new Ne(n),i=t.writeTree_.setTree(e,s);return new xn(i)}}}function Yw(t,e,n){let r=t;return Ft(n,(s,i)=>{r=Va(r,Ke(e,s),i)}),r}function Xw(t,e){if(oe(e))return xn.empty();{const n=t.writeTree_.setTree(e,new Ne(null));return new xn(n)}}function cm(t,e){return pi(t,e)!=null}function pi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Dt(n.path,e)):null}function Jw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(r,s)=>{e.push(new ne(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new ne(r,s.value))}),e}function rs(t,e){if(oe(e))return t;{const n=pi(t,e);return n!=null?new xn(new Ne(n)):new xn(t.writeTree_.subtree(e))}}function um(t){return t.writeTree_.isEmpty()}function _o(t,e){return YN(pe(),t.writeTree_,e)}function YN(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(B(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=YN(Ke(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ke(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t,e){return eS(e,t)}function KM(t,e,n,r,s){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Va(t.visibleWrites,e,n)),t.lastWriteId=r}function QM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function YM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&XM(a,r.path)?s=!1:pn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return JM(t),!0;if(r.snap)t.visibleWrites=Xw(t.visibleWrites,r.path);else{const a=r.children;Ft(a,l=>{t.visibleWrites=Xw(t.visibleWrites,Ke(r.path,l))})}return!0}else return!1}function XM(t,e){if(t.snap)return pn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&pn(Ke(t.path,n),e))return!0;return!1}function JM(t){t.visibleWrites=XN(t.allWrites,ZM,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ZM(t){return t.visible}function XN(t,e,n){let r=xn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)pn(n,o)?(a=Dt(n,o),r=Va(r,a,i.snap)):pn(o,n)&&(a=Dt(o,n),r=Va(r,pe(),i.snap.getChild(a)));else if(i.children){if(pn(n,o))a=Dt(n,o),r=Yw(r,a,i.children);else if(pn(o,n))if(a=Dt(o,n),oe(a))r=Yw(r,pe(),i.children);else{const l=ao(i.children,ie(a));if(l){const d=l.getChild(ve(a));r=Va(r,pe(),d)}}}else throw To("WriteRecord should have .snap or .children")}}return r}function JN(t,e,n,r,s){if(!r&&!s){const i=pi(t.visibleWrites,e);if(i!=null)return i;{const o=rs(t.visibleWrites,e);if(um(o))return n;if(n==null&&!cm(o,pe()))return null;{const a=n||Y.EMPTY_NODE;return _o(o,a)}}}else{const i=rs(t.visibleWrites,e);if(!s&&um(i))return n;if(!s&&n==null&&!cm(i,pe()))return null;{const o=function(d){return(d.visible||s)&&(!r||!~r.indexOf(d.writeId))&&(pn(d.path,e)||pn(e,d.path))},a=XN(t.allWrites,o,e),l=n||Y.EMPTY_NODE;return _o(a,l)}}}function eV(t,e,n){let r=Y.EMPTY_NODE;const s=pi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Me,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=rs(t.visibleWrites,e);return n.forEachChild(Me,(o,a)=>{const l=_o(rs(i,new _e(o)),a);r=r.updateImmediateChild(o,l)}),Jw(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=rs(t.visibleWrites,e);return Jw(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function tV(t,e,n,r,s){B(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ke(e,n);if(cm(t.visibleWrites,i))return null;{const o=rs(t.visibleWrites,i);return um(o)?s.getChild(n):_o(o,s.getChild(n))}}function nV(t,e,n,r){const s=Ke(e,n),i=pi(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=rs(t.visibleWrites,s);return _o(o,r.getNode().getImmediateChild(n))}else return null}function rV(t,e){return pi(t.visibleWrites,e)}function sV(t,e,n,r,s,i,o){let a;const l=rs(t.visibleWrites,e),d=pi(l,pe());if(d!=null)a=d;else if(n!=null)a=_o(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=m.getNext();for(;_&&h.length<s;)f(_,r)!==0&&h.push(_),_=m.getNext();return h}else return[]}function iV(){return{visibleWrites:xn.empty(),allWrites:[],lastWriteId:-1}}function rd(t,e,n,r){return JN(t.writeTree,t.treePath,e,n,r)}function Ny(t,e){return eV(t.writeTree,t.treePath,e)}function Zw(t,e,n,r){return tV(t.writeTree,t.treePath,e,n,r)}function sd(t,e){return rV(t.writeTree,Ke(t.treePath,e))}function oV(t,e,n,r,s,i){return sV(t.writeTree,t.treePath,e,n,r,s,i)}function Sy(t,e,n){return nV(t.writeTree,t.treePath,e,n)}function ZN(t,e){return eS(Ke(t.treePath,e),t.writeTree)}function eS(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,yl(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,gl(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,yo(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,yl(r,e.snapshotNode,s.oldSnap));else throw To("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const tS=new lV;class by{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ii(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:oi(this.viewCache_),i=oV(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cV(t){return{filter:t}}function uV(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function dV(t,e,n,r,s){const i=new aV;let o,a;if(n.type===mn.OVERWRITE){const d=n;d.source.fromUser?o=dm(t,e,d.path,d.snap,r,s,i):(B(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered()&&!oe(d.path),o=id(t,e,d.path,d.snap,r,s,a,i))}else if(n.type===mn.MERGE){const d=n;d.source.fromUser?o=fV(t,e,d.path,d.children,r,s,i):(B(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered(),o=hm(t,e,d.path,d.children,r,s,a,i))}else if(n.type===mn.ACK_USER_WRITE){const d=n;d.revert?o=gV(t,e,d.path,r,s,i):o=pV(t,e,d.path,d.affectedTree,r,s,i)}else if(n.type===mn.LISTEN_COMPLETE)o=mV(t,e,n.path,r,i);else throw To("Unknown operation type: "+n.type);const l=i.getChanges();return hV(e,o,l),{viewCache:o,changes:l}}function hV(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=lm(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(HN(lm(e)))}}function nS(t,e,n,r,s,i){const o=e.eventCache;if(sd(r,n)!=null)return e;{let a,l;if(oe(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=oi(e),h=d instanceof Y?d:Y.EMPTY_NODE,f=Ny(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const d=rd(r,oi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const d=ie(n);if(d===".priority"){B(gs(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=Zw(r,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=ve(n);let f;if(o.isCompleteForChild(d)){l=e.serverCache.getNode();const m=Zw(r,n,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(d).updateChild(h,m):f=o.getNode().getImmediateChild(d)}else f=Sy(r,d,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),d,f,h,s,i):a=o.getNode()}}return Ma(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function id(t,e,n,r,s,i,o,a){const l=e.serverCache;let d;const h=o?t.filter:t.filter.getIndexedFilter();if(oe(n))d=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);d=h.updateFullNode(l.getNode(),_,null)}else{const _=ie(n);if(!l.isCompleteForPath(n)&&gs(n)>1)return e;const T=ve(n),R=l.getNode().getImmediateChild(_).updateChild(T,r);_===".priority"?d=h.updatePriority(l.getNode(),R):d=h.updateChild(l.getNode(),_,R,T,tS,null)}const f=QN(e,d,l.isFullyInitialized()||oe(n),h.filtersNodes()),m=new by(s,f,i);return nS(t,f,n,s,m,a)}function dm(t,e,n,r,s,i,o){const a=e.eventCache;let l,d;const h=new by(s,e,i);if(oe(n))d=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ma(e,d,!0,t.filter.filtersNodes());else{const f=ie(n);if(f===".priority")d=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ma(e,d,a.isFullyInitialized(),a.isFiltered());else{const m=ve(n),_=a.getNode().getImmediateChild(f);let T;if(oe(m))T=r;else{const k=h.getCompleteChild(f);k!=null?MN(m)===".priority"&&k.getChild(FN(m)).isEmpty()?T=k:T=k.updateChild(m,r):T=Y.EMPTY_NODE}if(_.equals(T))l=e;else{const k=t.filter.updateChild(a.getNode(),f,T,m,h,o);l=Ma(e,k,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ex(t,e){return t.eventCache.isCompleteForChild(e)}function fV(t,e,n,r,s,i,o){let a=e;return r.foreach((l,d)=>{const h=Ke(n,l);ex(e,ie(h))&&(a=dm(t,a,h,d,s,i,o))}),r.foreach((l,d)=>{const h=Ke(n,l);ex(e,ie(h))||(a=dm(t,a,h,d,s,i,o))}),a}function tx(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function hm(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,d;oe(n)?d=r:d=new Ne(null).setTree(n,r);const h=e.serverCache.getNode();return d.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),T=tx(t,_,m);l=id(t,l,new _e(f),T,s,i,o,a)}}),d.children.inorderTraversal((f,m)=>{const _=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!_){const T=e.serverCache.getNode().getImmediateChild(f),k=tx(t,T,m);l=id(t,l,new _e(f),k,s,i,o,a)}}),l}function pV(t,e,n,r,s,i,o){if(sd(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(oe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return id(t,e,n,l.getNode().getChild(n),s,i,a,o);if(oe(n)){let d=new Ne(null);return l.getNode().forEachChild(Ji,(h,f)=>{d=d.set(new _e(h),f)}),hm(t,e,n,d,s,i,a,o)}else return e}else{let d=new Ne(null);return r.foreach((h,f)=>{const m=Ke(n,h);l.isCompleteForPath(m)&&(d=d.set(h,l.getNode().getChild(m)))}),hm(t,e,n,d,s,i,a,o)}}function mV(t,e,n,r,s){const i=e.serverCache,o=QN(e,i.getNode(),i.isFullyInitialized()||oe(n),i.isFiltered());return nS(t,o,n,r,tS,s)}function gV(t,e,n,r,s,i){let o;if(sd(r,n)!=null)return e;{const a=new by(r,e,s),l=e.eventCache.getNode();let d;if(oe(n)||ie(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=rd(r,oi(e));else{const f=e.serverCache.getNode();B(f instanceof Y,"serverChildren would be complete if leaf node"),h=Ny(r,f)}h=h,d=t.filter.updateFullNode(l,h,i)}else{const h=ie(n);let f=Sy(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?d=t.filter.updateChild(l,h,f,ve(n),a,i):e.eventCache.getNode().hasChild(h)?d=t.filter.updateChild(l,h,Y.EMPTY_NODE,ve(n),a,i):d=l,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=rd(r,oi(e)),o.isLeafNode()&&(d=t.filter.updateFullNode(d,o,i)))}return o=e.serverCache.isFullyInitialized()||sd(r,pe())!=null,Ma(e,d,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new xy(r.getIndex()),i=LM(r);this.processor_=cV(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),d=i.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),h=new ii(l,o.isFullyInitialized(),s.filtersNodes()),f=new ii(d,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=ah(f,h),this.eventGenerator_=new zM(this.query_)}get query(){return this.query_}}function _V(t){return t.viewCache_.serverCache.getNode()}function vV(t,e){const n=oi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function nx(t){return t.eventRegistrations_.length===0}function wV(t,e){t.eventRegistrations_.push(e)}function rx(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function sx(t,e,n,r){e.type===mn.MERGE&&e.source.queryId!==null&&(B(oi(t.viewCache_),"We should always have a full cache before handling merges"),B(lm(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=dV(t.processor_,s,e,n,r);return uV(t.processor_,i.viewCache),B(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,rS(t,i.changes,i.viewCache.eventCache.getNode(),null)}function xV(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(i,o)=>{r.push(yo(i,o))}),n.isFullyInitialized()&&r.push(HN(n.getNode())),rS(t,r,n.getNode(),e)}function rS(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return WM(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let od;class EV{constructor(){this.views=new Map}}function TV(t){B(!od,"__referenceConstructor has already been defined"),od=t}function IV(){return B(od,"Reference.ts has not been loaded"),od}function CV(t){return t.views.size===0}function ky(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return B(i!=null,"SyncTree gave us an op for an invalid query."),sx(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(sx(o,e,n,r));return i}}function NV(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=rd(n,s?r:null),l=!1;a?l=!0:r instanceof Y?(a=Ny(n,r),l=!1):(a=Y.EMPTY_NODE,l=!1);const d=ah(new ii(a,l,!1),new ii(r,s,!1));return new yV(e,d)}return o}function SV(t,e,n,r,s,i){const o=NV(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),wV(o,n),xV(o,n)}function bV(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=ys(t);if(s==="default")for(const[l,d]of t.views.entries())o=o.concat(rx(d,n,r)),nx(d)&&(t.views.delete(l),d.query._queryParams.loadsAllData()||i.push(d.query));else{const l=t.views.get(s);l&&(o=o.concat(rx(l,n,r)),nx(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!ys(t)&&i.push(new(IV())(e._repo,e._path)),{removed:i,events:o}}function sS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Zi(t,e){let n=null;for(const r of t.views.values())n=n||vV(r,e);return n}function iS(t,e){if(e._queryParams.loadsAllData())return lh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function oS(t,e){return iS(t,e)!=null}function ys(t){return lh(t)!=null}function lh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ad;function kV(t){B(!ad,"__referenceConstructor has already been defined"),ad=t}function RV(){return B(ad,"Reference.ts has not been loaded"),ad}let AV=1;class ix{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ne(null),this.pendingWriteTree_=iV(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function PV(t,e,n,r,s){return KM(t.pendingWriteTree_,e,n,r,s),s?Gl(t,new si(KN(),e,n)):[]}function Fi(t,e,n=!1){const r=QM(t.pendingWriteTree_,e);if(YM(t.pendingWriteTree_,e)){let i=new Ne(null);return r.snap!=null?i=i.set(pe(),!0):Ft(r.children,o=>{i=i.set(new _e(o),!0)}),Gl(t,new nd(r.path,i,n))}else return[]}function ch(t,e,n){return Gl(t,new si(Ty(),e,n))}function DV(t,e,n){const r=Ne.fromObject(n);return Gl(t,new wl(Ty(),e,r))}function OV(t,e){return Gl(t,new vl(Ty(),e))}function jV(t,e,n){const r=Ry(t,n);if(r){const s=Ay(r),i=s.path,o=s.queryId,a=Dt(i,e),l=new vl(Iy(o),a);return Py(t,i,l)}else return[]}function fm(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||oS(o,e))){const l=bV(o,e,n,r);CV(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const d=l.removed;if(a=l.events,!s){const h=d.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(m,_)=>ys(_));if(h&&!f){const m=t.syncPointTree_.subtree(i);if(!m.isEmpty()){const _=VV(m);for(let T=0;T<_.length;++T){const k=_[T],R=k.query,N=uS(t,k);t.listenProvider_.startListening(Fa(R),ld(t,R),N.hashFn,N.onComplete)}}}!f&&d.length>0&&!r&&(h?t.listenProvider_.stopListening(Fa(e),null):d.forEach(m=>{const _=t.queryToTagMap.get(uh(m));t.listenProvider_.stopListening(Fa(m),_)}))}FV(t,d)}return a}function LV(t,e,n,r){const s=Ry(t,r);if(s!=null){const i=Ay(s),o=i.path,a=i.queryId,l=Dt(o,e),d=new si(Iy(a),l,n);return Py(t,o,d)}else return[]}function MV(t,e,n,r){const s=Ry(t,r);if(s){const i=Ay(s),o=i.path,a=i.queryId,l=Dt(o,e),d=Ne.fromObject(n),h=new wl(Iy(a),l,d);return Py(t,o,h)}else return[]}function ox(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(m,_)=>{const T=Dt(m,s);i=i||Zi(_,T),o=o||ys(_)});let a=t.syncPointTree_.get(s);a?(o=o||ys(a),i=i||Zi(a,pe())):(a=new EV,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=Y.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,T)=>{const k=Zi(T,pe());k&&(i=i.updateImmediateChild(_,k))}));const d=oS(a,e);if(!d&&!e._queryParams.loadsAllData()){const m=uh(e);B(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const _=UV();t.queryToTagMap.set(m,_),t.tagToQueryMap.set(_,m)}const h=Cy(t.pendingWriteTree_,s);let f=SV(a,e,n,h,i,l);if(!d&&!o&&!r){const m=iS(a,e);f=f.concat(BV(t,e,m))}return f}function aS(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Dt(o,e),d=Zi(a,l);if(d)return d});return JN(s,e,i,n,!0)}function Gl(t,e){return lS(e,t.syncPointTree_,null,Cy(t.pendingWriteTree_,pe()))}function lS(t,e,n,r){if(oe(t.path))return cS(t,e,n,r);{const s=e.get(pe());n==null&&s!=null&&(n=Zi(s,pe()));let i=[];const o=ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const d=n?n.getImmediateChild(o):null,h=ZN(r,o);i=i.concat(lS(a,l,d,h))}return s&&(i=i.concat(ky(s,t,r,n))),i}}function cS(t,e,n,r){const s=e.get(pe());n==null&&s!=null&&(n=Zi(s,pe()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,d=ZN(r,o),h=t.operationForChild(o);h&&(i=i.concat(cS(h,a,l,d)))}),s&&(i=i.concat(ky(s,t,r,n))),i}function uS(t,e){const n=e.query,r=ld(t,n);return{hashFn:()=>(_V(e)||Y.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?jV(t,n._path,r):OV(t,n._path);{const i=jL(s,n);return fm(t,n,null,i)}}}}function ld(t,e){const n=uh(e);return t.queryToTagMap.get(n)}function uh(t){return t._path.toString()+"$"+t._queryIdentifier}function Ry(t,e){return t.tagToQueryMap.get(e)}function Ay(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function Py(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const s=Cy(t.pendingWriteTree_,e);return ky(r,n,s,null)}function VV(t){return t.fold((e,n,r)=>{if(n&&ys(n))return[lh(n)];{let s=[];return n&&(s=sS(n)),Ft(r,(i,o)=>{s=s.concat(o)}),s}})}function Fa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(RV())(t._repo,t._path):t}function FV(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=uh(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function UV(){return AV++}function BV(t,e,n){const r=e._path,s=ld(t,e),i=uS(t,n),o=t.listenProvider_.startListening(Fa(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)B(!ys(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((d,h,f)=>{if(!oe(d)&&h&&ys(h))return[lh(h).query];{let m=[];return h&&(m=m.concat(sS(h).map(_=>_.query))),Ft(f,(_,T)=>{m=m.concat(T)}),m}});for(let d=0;d<l.length;++d){const h=l[d];t.listenProvider_.stopListening(Fa(h),ld(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Dy(n)}node(){return this.node_}}class Oy{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ke(this.path_,e);return new Oy(this.syncTree_,n)}node(){return aS(this.syncTree_,this.path_)}}const $V=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ax=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return zV(t[".sv"],e,n);if(typeof t[".sv"]=="object")return WV(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},zV=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},WV=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const s=e.node();if(B(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},qV=function(t,e,n,r){return jy(e,new Oy(n,t),r)},HV=function(t,e,n){return jy(t,new Dy(e),n)};function jy(t,e,n){const r=t.getPriority().val(),s=ax(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=ax(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Je(a,_t(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Je(s))),o.forEachChild(Me,(a,l)=>{const d=jy(l,e.getImmediateChild(a),n);d!==l&&(i=i.updateImmediateChild(a,d))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function My(t,e){let n=e instanceof _e?e:new _e(e),r=t,s=ie(n);for(;s!==null;){const i=ao(r.node.children,s)||{children:{},childCount:0};r=new Ly(s,r,i),n=ve(n),s=ie(n)}return r}function Ao(t){return t.node.value}function dS(t,e){t.node.value=e,pm(t)}function hS(t){return t.node.childCount>0}function GV(t){return Ao(t)===void 0&&!hS(t)}function dh(t,e){Ft(t.node.children,(n,r)=>{e(new Ly(n,t,r))})}function fS(t,e,n,r){n&&e(t),dh(t,s=>{fS(s,e,!0)})}function KV(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Kl(t){return new _e(t.parent===null?t.name:Kl(t.parent)+"/"+t.name)}function pm(t){t.parent!==null&&QV(t.parent,t.name,t)}function QV(t,e,n){const r=GV(n),s=yr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,pm(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,pm(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YV=/[\[\].#$\/\u0000-\u001F\u007F]/,XV=/[\[\].#$\u0000-\u001F\u007F]/,Af=10*1024*1024,pS=function(t){return typeof t=="string"&&t.length!==0&&!YV.test(t)},mS=function(t){return typeof t=="string"&&t.length!==0&&!XV.test(t)},JV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mS(t)},gS=function(t,e,n){const r=n instanceof _e?new pM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vs(r));if(typeof e=="function")throw new Error(t+"contains a function "+Vs(r)+" with contents = "+e.toString());if(gN(e))throw new Error(t+"contains "+e.toString()+" "+Vs(r));if(typeof e=="string"&&e.length>Af/3&&Od(e)>Af)throw new Error(t+"contains a string greater than "+Af+" utf8 bytes "+Vs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Ft(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!pS(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mM(r,o),gS(t,a,r),gM(r)}),s&&i)throw new Error(t+' contains ".value" child '+Vs(r)+" in addition to actual children.")}},yS=function(t,e,n,r){if(!mS(n))throw new Error(KT(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ZV=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yS(t,e,n)},e4=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JV(n))throw new Error(KT(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _S(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!_y(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function vS(t,e,n){_S(t,n),wS(t,r=>_y(r,e))}function mi(t,e,n){_S(t,n),wS(t,r=>pn(r,e)||pn(e,r))}function wS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(n4(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function n4(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ja&&yt("event: "+n.toString()),ql(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4="repo_interrupt",s4=25;class i4{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new t4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=td(),this.transactionQueueTree_=new Ly,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function o4(t,e,n){if(t.stats_=gy(t.repoInfo_),t.forceRestClient_||FL())t.server_=new ed(t.repoInfo_,(r,s,i,o)=>{lx(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>cx(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new rr(t.repoInfo_,e,(r,s,i,o)=>{lx(t,r,s,i,o)},r=>{cx(t,r)},r=>{l4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=WL(t.repoInfo_,()=>new $M(t.stats_,t.server_)),t.infoData_=new MM,t.infoSyncTree_=new ix({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ch(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vy(t,"connected",!1),t.serverSyncTree_=new ix({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const d=o(a,l);mi(t.eventQueue_,r._path,d)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function a4(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xS(t){return $V({timestamp:a4(t)})}function lx(t,e,n,r,s){t.dataUpdateCount++;const i=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Au(n,d=>_t(d));o=MV(t.serverSyncTree_,i,l,s)}else{const l=_t(n);o=LV(t.serverSyncTree_,i,l,s)}else if(r){const l=Au(n,d=>_t(d));o=DV(t.serverSyncTree_,i,l)}else{const l=_t(n);o=ch(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Uy(t,i)),mi(t.eventQueue_,a,o)}function cx(t,e){Vy(t,"connected",e),e===!1&&u4(t)}function l4(t,e){Ft(e,(n,r)=>{Vy(t,n,r)})}function Vy(t,e,n){const r=new _e("/.info/"+e),s=_t(n);t.infoData_.updateSnapshot(r,s);const i=ch(t.infoSyncTree_,r,s);mi(t.eventQueue_,r,i)}function c4(t){return t.nextWriteId_++}function u4(t){ES(t,"onDisconnectEvents");const e=xS(t),n=td();am(t.onDisconnect_,pe(),(s,i)=>{const o=qV(s,i,t.serverSyncTree_,e);GN(n,s,o)});let r=[];am(n,pe(),(s,i)=>{r=r.concat(ch(t.serverSyncTree_,s,i));const o=g4(t,s);Uy(t,o)}),t.onDisconnect_=td(),mi(t.eventQueue_,pe(),r)}function d4(t,e,n){let r;ie(e._path)===".info"?r=ox(t.infoSyncTree_,e,n):r=ox(t.serverSyncTree_,e,n),vS(t.eventQueue_,e._path,r)}function h4(t,e,n){let r;ie(e._path)===".info"?r=fm(t.infoSyncTree_,e,n):r=fm(t.serverSyncTree_,e,n),vS(t.eventQueue_,e._path,r)}function f4(t){t.persistentConnection_&&t.persistentConnection_.interrupt(r4)}function ES(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),yt(n,...e)}function TS(t,e,n){return aS(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function Fy(t,e=t.transactionQueueTree_){if(e||hh(t,e),Ao(e)){const n=CS(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&p4(t,Kl(e),n)}else hS(e)&&dh(e,n=>{Fy(t,n)})}function p4(t,e,n){const r=n.map(d=>d.currentWriteId),s=TS(t,e,r);let i=s;const o=s.hash();for(let d=0;d<n.length;d++){const h=n[d];B(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Dt(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,d=>{ES(t,"transaction put response",{path:l.toString(),status:d});let h=[];if(d==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(Fi(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();hh(t,My(t.transactionQueueTree_,e)),Fy(t,t.transactionQueueTree_),mi(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)ql(f[m])}else{if(d==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ht("transaction at "+l.toString()+" failed: "+d);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=d}Uy(t,e)}},o)}function Uy(t,e){const n=IS(t,e),r=Kl(n),s=CS(t,n);return m4(t,s,r),r}function m4(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],d=Dt(n,l.path);let h=!1,f;if(B(d!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,s=s.concat(Fi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=s4)h=!0,f="maxretry",s=s.concat(Fi(t.serverSyncTree_,l.currentWriteId,!0));else{const m=TS(t,l.path,o);l.currentInputSnapshot=m;const _=e[a].update(m.val());if(_!==void 0){gS("transaction failed: Data returned ",_,l.path);let T=_t(_);typeof _=="object"&&_!=null&&yr(_,".priority")||(T=T.updatePriority(m.getPriority()));const R=l.currentWriteId,N=xS(t),w=HV(T,m,N);l.currentOutputSnapshotRaw=T,l.currentOutputSnapshotResolved=w,l.currentWriteId=c4(t),o.splice(o.indexOf(R),1),s=s.concat(PV(t.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),s=s.concat(Fi(t.serverSyncTree_,R,!0))}else h=!0,f="nodata",s=s.concat(Fi(t.serverSyncTree_,l.currentWriteId,!0))}mi(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}hh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ql(r[a]);Fy(t,t.transactionQueueTree_)}function IS(t,e){let n,r=t.transactionQueueTree_;for(n=ie(e);n!==null&&Ao(r)===void 0;)r=My(r,n),e=ve(e),n=ie(e);return r}function CS(t,e){const n=[];return NS(t,e,n),n.sort((r,s)=>r.order-s.order),n}function NS(t,e,n){const r=Ao(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);dh(e,s=>{NS(t,s,n)})}function hh(t,e){const n=Ao(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,dS(e,n.length>0?n:void 0)}dh(e,r=>{hh(t,r)})}function g4(t,e){const n=Kl(IS(t,e)),r=My(t.transactionQueueTree_,e);return KV(r,s=>{Pf(t,s)}),Pf(t,r),fS(r,s=>{Pf(t,s)}),n}function Pf(t,e){const n=Ao(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Fi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?dS(e,void 0):n.length=i+1,mi(t.eventQueue_,Kl(e),s);for(let o=0;o<r.length;o++)ql(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y4(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function _4(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ht(`Invalid query segment '${n}' in query '${t}'`)}return e}const ux=function(t,e){const n=v4(t),r=n.namespace;n.domain==="firebase.com"&&fr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&fr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||RL();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bN(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new _e(n.pathString)}},v4=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let d=t.indexOf("//");d>=0&&(a=t.substring(0,d-1),t=t.substring(d+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(s=y4(t.substring(h,f)));const m=_4(t.substring(Math.min(t.length,f)));d=e.indexOf(":"),d>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(d+1),10)):d=e.length;const _=e.slice(0,d);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),i=r}"ns"in m&&(i=m.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+nt(this.snapshot.exportVal())}}class x4{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return oe(this._path)?null:MN(this._path)}get ref(){return new Is(this._repo,this._path)}get _queryIdentifier(){const e=Kw(this._queryParams),n=py(e);return n==="{}"?"default":n}get _queryObject(){return Kw(this._queryParams)}isEqual(e){if(e=Ee(e),!(e instanceof By))return!1;const n=this._repo===e._repo,r=_y(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+fM(this._path)}}class Is extends By{constructor(e,n){super(e,n,new Ey,!1)}get parent(){const e=FN(this._path);return e===null?null:new Is(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class cd{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),r=mm(this.ref,e);return new cd(this._node.getChild(n),r,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new cd(s,mm(this.ref,r),Me)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function T4(t,e){return t=Ee(t),t._checkNotDeleted("ref"),mm(t._root,e)}function mm(t,e){return t=Ee(t),ie(t._path)===null?ZV("child","path",e):yS("child","path",e),new Is(t._repo,Ke(t._path,e))}class $y{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new w4("value",this,new cd(e.snapshotNode,new Is(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new x4(this,e,n):null}matches(e){return e instanceof $y?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function I4(t,e,n,r,s){const i=new E4(n,void 0),o=new $y(i);return d4(t._repo,t,o),()=>h4(t._repo,t,o)}function C4(t,e,n,r){return I4(t,"value",e)}TV(Is);kV(Is);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4="FIREBASE_DATABASE_EMULATOR_HOST",gm={};let S4=!1;function b4(t,e,n,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=gr(i);t.repoInfo_=new bN(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function k4(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||fr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),yt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ux(i,s),a=o.repoInfo,l;typeof process<"u"&&Rw&&(l=Rw[N4]),l?(i=`http://${l}?ns=${a.namespace}`,o=ux(i,s),a=o.repoInfo):o.repoInfo.secure;const d=new BL(t.name,t.options,e);e4("Invalid Firebase Database URL",o),oe(o.path)||fr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=A4(a,t,d,new UL(t,n));return new P4(h,t)}function R4(t,e){const n=gm[e];(!n||n[t.key]!==t)&&fr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),f4(t),delete n[t.key]}function A4(t,e,n,r){let s=gm[e.name];s||(s={},gm[e.name]=s);let i=s[t.toURLString()];return i&&fr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new i4(t,S4,n,r),s[t.toURLString()]=i,i}class P4{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(o4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Is(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(R4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fr("Cannot call "+e+" on a deleted database.")}}function D4(t=Ld(),e){const n=kl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=_g("database");r&&O4(n,...r)}return n}function O4(t,e,n,r={}){t=Ee(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&as(r,i.repoInfo_.emulatorOptions))return;fr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&fr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ru(ru.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:wg(r.mockUserToken,t.app.options.projectId);o=new ru(a)}gr(e)&&(Pd(e),Dd("Database",!0)),b4(i,s,r,o)}/**
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
 */function j4(t){IL(xs),ls(new lr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return k4(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),nn(Aw,Pw,t),nn(Aw,Pw,"esm2020")}rr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};j4();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="firebasestorage.googleapis.com",L4="storageBucket",M4=2*60*1e3,V4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends zn{constructor(e,n,r=0){super(Df(e),`Firebase Storage: ${n} (${Df(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Wn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Df(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $n;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($n||($n={}));function Df(t){return"storage/"+t}function F4(){const t="An unknown error occurred, please check the error payload for server response.";return new Wn($n.UNKNOWN,t)}function U4(){return new Wn($n.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function B4(){return new Wn($n.CANCELED,"User canceled the upload/download.")}function $4(t){return new Wn($n.INVALID_URL,"Invalid URL '"+t+"'.")}function z4(t){return new Wn($n.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function dx(t){return new Wn($n.INVALID_ARGUMENT,t)}function bS(){return new Wn($n.APP_DELETED,"The Firebase app was deleted.")}function W4(t){return new Wn($n.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gn.makeFromUrl(e,n)}catch{return new gn(e,"")}if(r.path==="")return r;throw z4(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function d(O){O.path_=decodeURIComponent(O.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${h}/b/${s}/o${m}`,"i"),T={bucket:1,path:3},k=n===SS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",N=new RegExp(`^https?://${k}/${s}/${R}`,"i"),C=[{regex:a,indices:l,postModify:i},{regex:_,indices:T,postModify:d},{regex:N,indices:{bucket:1,path:2},postModify:d}];for(let O=0;O<C.length;O++){const M=C[O],L=M.regex.exec(e);if(L){const x=L[M.indices.bucket];let y=L[M.indices.path];y||(y=""),r=new gn(x,y),M.postModify(r);break}}if(r==null)throw $4(e);return r}}class q4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H4(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let d=!1;function h(...R){d||(d=!0,e.apply(null,R))}function f(R){s=setTimeout(()=>{s=null,t(_,l())},R)}function m(){i&&clearTimeout(i)}function _(R,...N){if(d){m();return}if(R){m(),h.call(null,R,...N);return}if(l()||o){m(),h.call(null,R,...N);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,f(C)}let T=!1;function k(R){T||(T=!0,m(),!d&&(s!==null?(R||(a=2),clearTimeout(s),f(0)):R||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function G4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(t){return t!==void 0}function hx(t,e,n,r){if(r<e)throw dx(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw dx(`Invalid value for '${t}'. Expected ${n} or less.`)}function Q4(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ud;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ud||(ud={}));/**
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
 */function Y4(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{constructor(e,n,r,s,i,o,a,l,d,h,f,m=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,k)=>{this.resolve_=T,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Dc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ud.NO_ERROR,l=i.getStatus();if(!a||Y4(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===ud.ABORT;r(!1,new Dc(!1,null,h));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new Dc(d,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());K4(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=F4();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?bS():B4();o(l)}else{const l=U4();o(l)}};this.canceled_?n(!1,new Dc(!1,null,!0)):this.backoffId_=H4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&G4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Dc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function J4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Z4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function e3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function t3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function n3(t,e,n,r,s,i,o=!0,a=!1){const l=Q4(t.urlParams),d=t.url+l,h=Object.assign({},t.headers);return e3(h,e),J4(h,n),Z4(h,i),t3(h,r),new X4(d,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r3(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function s3(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class dd{constructor(e,n){this._service=e,n instanceof gn?this._location=n:this._location=gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new dd(e,n)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return s3(this._location.path)}get storage(){return this._service}get parent(){const e=r3(this._location.path);if(e===null)return null;const n=new gn(this._location.bucket,e);return new dd(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw W4(e)}}function fx(t,e){const n=e==null?void 0:e[L4];return n==null?null:gn.makeFromBucketSpec(n,t)}function i3(t,e,n,r={}){t.host=`${e}:${n}`;const s=gr(e);s&&(Pd(`https://${t.host}/b`),Dd("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:wg(i,t.app.options.projectId))}class o3{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=SS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=M4,this._maxUploadRetryTime=V4,this._requests=new Set,s!=null?this._bucket=gn.makeFromBucketSpec(s,this._host):this._bucket=fx(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=fx(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hx("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hx("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new dd(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new q4(bS());{const o=n3(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const px="@firebase/storage",mx="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="storage";function a3(t=Ld(),e){t=Ee(t);const r=kl(t,kS).getImmediate({identifier:e}),s=_g("storage");return s&&l3(r,...s),r}function l3(t,e,n,r={}){i3(t,e,n,r)}function c3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new o3(n,r,s,e,xs)}function u3(){ls(new lr(kS,c3,"PUBLIC").setMultipleInstances(!0)),nn(px,mx,""),nn(px,mx,"esm2020")}u3();const d3={apiKey:"AIzaSyBXSeU4cfq171-Mq0GWhxViYl3UUyYwQoE",authDomain:"ptros-lesotho-d145d.firebaseapp.com",databaseURL:"https://ptros-lesotho-d145d-default-rtdb.firebaseio.com/",projectId:"ptros-lesotho-d145d",storageBucket:"ptros-lesotho-d145d.firebasestorage.app",messagingSenderId:"355339066230",appId:"1:355339066230:web:fca735feb941dbd8e57857"},fh=XT(d3),Un=t2(fh),Vt=lL(fh);a3(fh);const h3=D4(fh);/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xl.apply(this,arguments)}var zr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(zr||(zr={}));const gx="popstate";function f3(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return ym("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:hd(s)}return m3(e,n,null,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zy(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function p3(){return Math.random().toString(36).substr(2,8)}function yx(t,e){return{usr:t.state,key:t.key,idx:e}}function ym(t,e,n,r){return n===void 0&&(n=null),xl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Po(e):e,{state:n,key:e&&e.key||r||p3()})}function hd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Po(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function m3(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=zr.Pop,l=null,d=h();d==null&&(d=0,o.replaceState(xl({},o.state,{idx:d}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=zr.Pop;let R=h(),N=R==null?null:R-d;d=R,l&&l({action:a,location:k.location,delta:N})}function m(R,N){a=zr.Push;let w=ym(k.location,R,N);d=h()+1;let C=yx(w,d),O=k.createHref(w);try{o.pushState(C,"",O)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;s.location.assign(O)}i&&l&&l({action:a,location:k.location,delta:1})}function _(R,N){a=zr.Replace;let w=ym(k.location,R,N);d=h();let C=yx(w,d),O=k.createHref(w);o.replaceState(C,"",O),i&&l&&l({action:a,location:k.location,delta:0})}function T(R){let N=s.location.origin!=="null"?s.location.origin:s.location.href,w=typeof R=="string"?R:hd(R);return w=w.replace(/ $/,"%20"),Pe(N,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,N)}let k={get action(){return a},get location(){return t(s,o)},listen(R){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(gx,f),l=R,()=>{s.removeEventListener(gx,f),l=null}},createHref(R){return e(s,R)},createURL:T,encodeLocation(R){let N=T(R);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:m,replace:_,go(R){return o.go(R)}};return k}var _x;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_x||(_x={}));function g3(t,e,n){return n===void 0&&(n="/"),y3(t,e,n)}function y3(t,e,n,r){let s=typeof e=="string"?Po(e):e,i=vo(s.pathname||"/",n);if(i==null)return null;let o=RS(t);_3(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let d=k3(i);a=S3(o[l],d)}return a}function RS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(Pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let d=ss([r,l.relativePath]),h=n.concat(l);i.children&&i.children.length>0&&(Pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),RS(i.children,e,h,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:C3(d,i.index),routesMeta:h})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of AS(i.path))s(i,o,l)}),e}function AS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=AS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function _3(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:N3(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const v3=/^:[\w-]+$/,w3=3,x3=2,E3=1,T3=10,I3=-2,vx=t=>t==="*";function C3(t,e){let n=t.split("/"),r=n.length;return n.some(vx)&&(r+=I3),e&&(r+=x3),n.filter(s=>!vx(s)).reduce((s,i)=>s+(v3.test(i)?w3:i===""?E3:T3),r)}function N3(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function S3(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],d=a===r.length-1,h=i==="/"?e:e.slice(i.length)||"/",f=_m({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},h),m=l.route;if(!f)return null;Object.assign(s,f.params),o.push({params:s,pathname:ss([i,f.pathname]),pathnameBase:O3(ss([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=ss([i,f.pathnameBase]))}return o}function _m(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=b3(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((d,h,f)=>{let{paramName:m,isOptional:_}=h;if(m==="*"){let k=a[f]||"";o=i.slice(0,i.length-k.length).replace(/(.)\/+$/,"$1")}const T=a[f];return _&&!T?d[m]=void 0:d[m]=(T||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:t}}function b3(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zy(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function k3(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zy(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function vo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const R3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,A3=t=>R3.test(t);function P3(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Po(t):t,i;if(n)if(A3(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),zy(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=wx(n.substring(1),"/"):i=wx(n,e)}else i=e;return{pathname:i,search:j3(r),hash:L3(s)}}function wx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Of(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function D3(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Wy(t,e){let n=D3(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qy(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Po(t):(s=xl({},t),Pe(!s.pathname||!s.pathname.includes("?"),Of("?","pathname","search",s)),Pe(!s.pathname||!s.pathname.includes("#"),Of("#","pathname","hash",s)),Pe(!s.search||!s.search.includes("#"),Of("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;s.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=P3(s,a),d=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(d||h)&&(l.pathname+="/"),l}const ss=t=>t.join("/").replace(/\/\/+/g,"/"),O3=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),j3=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,L3=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function M3(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const PS=["post","put","patch","delete"];new Set(PS);const V3=["get",...PS];new Set(V3);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function El(){return El=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},El.apply(this,arguments)}const ph=A.createContext(null),DS=A.createContext(null),wr=A.createContext(null),mh=A.createContext(null),xr=A.createContext({outlet:null,matches:[],isDataRoute:!1}),OS=A.createContext(null);function F3(t,e){let{relative:n}=e===void 0?{}:e;Do()||Pe(!1);let{basename:r,navigator:s}=A.useContext(wr),{hash:i,pathname:o,search:a}=gh(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ss([r,o])),s.createHref({pathname:l,search:a,hash:i})}function Do(){return A.useContext(mh)!=null}function Oo(){return Do()||Pe(!1),A.useContext(mh).location}function jS(t){A.useContext(wr).static||A.useLayoutEffect(t)}function Cs(){let{isDataRoute:t}=A.useContext(xr);return t?Z3():U3()}function U3(){Do()||Pe(!1);let t=A.useContext(ph),{basename:e,future:n,navigator:r}=A.useContext(wr),{matches:s}=A.useContext(xr),{pathname:i}=Oo(),o=JSON.stringify(Wy(s,n.v7_relativeSplatPath)),a=A.useRef(!1);return jS(()=>{a.current=!0}),A.useCallback(function(d,h){if(h===void 0&&(h={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let f=qy(d,JSON.parse(o),i,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ss([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,i,t])}function B3(){let{matches:t}=A.useContext(xr),e=t[t.length-1];return e?e.params:{}}function gh(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=A.useContext(wr),{matches:s}=A.useContext(xr),{pathname:i}=Oo(),o=JSON.stringify(Wy(s,r.v7_relativeSplatPath));return A.useMemo(()=>qy(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function $3(t,e){return z3(t,e)}function z3(t,e,n,r){Do()||Pe(!1);let{navigator:s}=A.useContext(wr),{matches:i}=A.useContext(xr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let d=Oo(),h;if(e){var f;let R=typeof e=="string"?Po(e):e;l==="/"||(f=R.pathname)!=null&&f.startsWith(l)||Pe(!1),h=R}else h=d;let m=h.pathname||"/",_=m;if(l!=="/"){let R=l.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(R.length).join("/")}let T=g3(t,{pathname:_}),k=K3(T&&T.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:ss([l,s.encodeLocation?s.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?l:ss([l,s.encodeLocation?s.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),i,n,r);return e&&k?A.createElement(mh.Provider,{value:{location:El({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:zr.Pop}},k):k}function W3(){let t=J3(),e=M3(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:s},n):null,null)}const q3=A.createElement(W3,null);class H3 extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?A.createElement(xr.Provider,{value:this.props.routeContext},A.createElement(OS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function G3(t){let{routeContext:e,match:n,children:r}=t,s=A.useContext(ph);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(xr.Provider,{value:e},r)}function K3(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||Pe(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=h),f.route.id){let{loaderData:m,errors:_}=n,T=f.route.loader&&m[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||T){l=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let _,T=!1,k=null,R=null;n&&(_=a&&f.route.id?a[f.route.id]:void 0,k=f.route.errorElement||q3,l&&(d<0&&m===0?(eF("route-fallback"),T=!0,R=null):d===m&&(T=!0,R=f.route.hydrateFallbackElement||null)));let N=e.concat(o.slice(0,m+1)),w=()=>{let C;return _?C=k:T?C=R:f.route.Component?C=A.createElement(f.route.Component,null):f.route.element?C=f.route.element:C=h,A.createElement(G3,{match:f,routeContext:{outlet:h,matches:N,isDataRoute:n!=null},children:C})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?A.createElement(H3,{location:n.location,revalidation:n.revalidation,component:k,error:_,children:w(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):w()},null)}var LS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(LS||{}),MS=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(MS||{});function Q3(t){let e=A.useContext(ph);return e||Pe(!1),e}function Y3(t){let e=A.useContext(DS);return e||Pe(!1),e}function X3(t){let e=A.useContext(xr);return e||Pe(!1),e}function VS(t){let e=X3(),n=e.matches[e.matches.length-1];return n.route.id||Pe(!1),n.route.id}function J3(){var t;let e=A.useContext(OS),n=Y3(),r=VS();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Z3(){let{router:t}=Q3(LS.UseNavigateStable),e=VS(MS.UseNavigateStable),n=A.useRef(!1);return jS(()=>{n.current=!0}),A.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,El({fromRouteId:e},i)))},[t,e])}const xx={};function eF(t,e,n){xx[t]||(xx[t]=!0)}function tF(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function FS(t){let{to:e,replace:n,state:r,relative:s}=t;Do()||Pe(!1);let{future:i,static:o}=A.useContext(wr),{matches:a}=A.useContext(xr),{pathname:l}=Oo(),d=Cs(),h=qy(e,Wy(a,i.v7_relativeSplatPath),l,s==="path"),f=JSON.stringify(h);return A.useEffect(()=>d(JSON.parse(f),{replace:n,state:r,relative:s}),[d,f,s,n,r]),null}function It(t){Pe(!1)}function nF(t){let{basename:e="/",children:n=null,location:r,navigationType:s=zr.Pop,navigator:i,static:o=!1,future:a}=t;Do()&&Pe(!1);let l=e.replace(/^\/*/,"/"),d=A.useMemo(()=>({basename:l,navigator:i,static:o,future:El({v7_relativeSplatPath:!1},a)}),[l,a,i,o]);typeof r=="string"&&(r=Po(r));let{pathname:h="/",search:f="",hash:m="",state:_=null,key:T="default"}=r,k=A.useMemo(()=>{let R=vo(h,l);return R==null?null:{location:{pathname:R,search:f,hash:m,state:_,key:T},navigationType:s}},[l,h,f,m,_,T,s]);return k==null?null:A.createElement(wr.Provider,{value:d},A.createElement(mh.Provider,{children:n,value:k}))}function US(t){let{children:e,location:n}=t;return $3(vm(e),n)}new Promise(()=>{});function vm(t,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(t,(r,s)=>{if(!A.isValidElement(r))return;let i=[...e,s];if(r.type===A.Fragment){n.push.apply(n,vm(r.props.children,i));return}r.type!==It&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=vm(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fd(){return fd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fd.apply(this,arguments)}function BS(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function rF(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function sF(t,e){return t.button===0&&(!e||e==="_self")&&!rF(t)}const iF=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],oF=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],aF="6";try{window.__reactRouterVersion=aF}catch{}const lF=A.createContext({isTransitioning:!1}),cF="startTransition",Ex=Bb[cF];function uF(t){let{basename:e,children:n,future:r,window:s}=t,i=A.useRef();i.current==null&&(i.current=f3({window:s,v5Compat:!0}));let o=i.current,[a,l]=A.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},h=A.useCallback(f=>{d&&Ex?Ex(()=>l(f)):l(f)},[l,d]);return A.useLayoutEffect(()=>o.listen(h),[o,h]),A.useEffect(()=>tF(r),[r]),A.createElement(nF,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const dF=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hF=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ai=A.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:l,to:d,preventScrollReset:h,viewTransition:f}=e,m=BS(e,iF),{basename:_}=A.useContext(wr),T,k=!1;if(typeof d=="string"&&hF.test(d)&&(T=d,dF))try{let C=new URL(window.location.href),O=d.startsWith("//")?new URL(C.protocol+d):new URL(d),M=vo(O.pathname,_);O.origin===C.origin&&M!=null?d=M+O.search+O.hash:k=!0}catch{}let R=F3(d,{relative:s}),N=mF(d,{replace:o,state:a,target:l,preventScrollReset:h,relative:s,viewTransition:f});function w(C){r&&r(C),C.defaultPrevented||N(C)}return A.createElement("a",fd({},m,{href:T||R,onClick:k||i?r:w,ref:n,target:l}))}),fF=A.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:a,to:l,viewTransition:d,children:h}=e,f=BS(e,oF),m=gh(l,{relative:f.relative}),_=Oo(),T=A.useContext(DS),{navigator:k,basename:R}=A.useContext(wr),N=T!=null&&gF(m)&&d===!0,w=k.encodeLocation?k.encodeLocation(m).pathname:m.pathname,C=_.pathname,O=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;s||(C=C.toLowerCase(),O=O?O.toLowerCase():null,w=w.toLowerCase()),O&&R&&(O=vo(O,R)||O);const M=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let L=C===w||!o&&C.startsWith(w)&&C.charAt(M)==="/",x=O!=null&&(O===w||!o&&O.startsWith(w)&&O.charAt(w.length)==="/"),y={isActive:L,isPending:x,isTransitioning:N},E=L?r:void 0,S;typeof i=="function"?S=i(y):S=[i,L?"active":null,x?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let b=typeof a=="function"?a(y):a;return A.createElement(ai,fd({},f,{"aria-current":E,className:S,ref:n,style:b,to:l,viewTransition:d}),typeof h=="function"?h(y):h)});var wm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wm||(wm={}));var Tx;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Tx||(Tx={}));function pF(t){let e=A.useContext(ph);return e||Pe(!1),e}function mF(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:a}=e===void 0?{}:e,l=Cs(),d=Oo(),h=gh(t,{relative:o});return A.useCallback(f=>{if(sF(f,n)){f.preventDefault();let m=r!==void 0?r:hd(d)===hd(h);l(t,{replace:m,state:s,preventScrollReset:i,relative:o,viewTransition:a})}},[d,l,h,r,s,n,t,i,o,a])}function gF(t,e){e===void 0&&(e={});let n=A.useContext(lF);n==null&&Pe(!1);let{basename:r}=pF(wm.useViewTransitionState),s=gh(t,{relative:e.relative});if(!n.isTransitioning)return!1;let i=vo(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=vo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return _m(s.pathname,o)!=null||_m(s.pathname,i)!=null}function yF({children:t}){const[e,n]=A.useState(!1),[r,s]=A.useState(null),i="AIzaSyAwX-3N2xv84NUElCJRpKMh7UJpQEQnNH0";return A.useEffect(()=>{if(window.google&&window.google.maps){n(!0),window.mapsReady=!0,window.dispatchEvent(new CustomEvent("mapsReady"));return}console.log("Loading Google Maps with API key...");const o=()=>{console.log("✅ Google Maps loaded successfully"),window.mapsReady=!0,n(!0),s(null),window.dispatchEvent(new CustomEvent("mapsReady"))};window.initMap=o;const a=document.createElement("script");return a.src=`https://maps.googleapis.com/maps/api/js?key=${i}&libraries=places,geometry&callback=initMap`,a.async=!0,a.defer=!0,a.onerror=()=>{const l="Failed to load Google Maps";console.error(l),s(l)},document.head.appendChild(a),()=>{const l=document.querySelector('script[src*="maps.googleapis.com"]');if(l&&document.head.contains(l))try{document.head.removeChild(l)}catch(d){console.warn("Failed to remove script:",d)}window.initMap&&delete window.initMap,window.mapsReady=!1}},[]),r?u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-red-50",children:u.jsxs("div",{className:"text-center",children:[u.jsxs("p",{className:"text-red-600 font-medium",children:["⚠️ ",r]}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Please check your Google Maps API key configuration."})]})}):e?u.jsx(u.Fragment,{children:t}):u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Initializing maps..."})]})})}function _F(){const[t,e]=A.useState(!1),n=[{path:"/dashboard",icon:"🏠",label:"Home"},{path:"/orders",icon:"📦",label:"My Orders"},{path:"/track",icon:"📍",label:"Track Order"},{path:"/track-map",icon:"🗺️",label:"Live Tracking"},{path:"/profile",icon:"👤",label:"My Profile"},{path:"/settings",icon:"⚙️",label:"Settings"}];return u.jsxs("aside",{className:`bg-blue-900 text-white ${t?"w-20":"w-64"} transition-all duration-300 flex flex-col h-screen fixed left-0 top-0 z-50`,children:[u.jsx("div",{className:"p-6 border-b border-blue-800",children:u.jsxs("div",{className:"flex items-center justify-between",children:[!t&&u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"w-10 h-10 bg-white rounded-lg flex items-center justify-center",children:u.jsx("span",{className:"text-blue-900 font-bold text-xl",children:"P"})}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-bold",children:"PTROS"}),u.jsx("p",{className:"text-xs text-blue-300",children:"Customer"})]})]}),t&&u.jsx("div",{className:"w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto",children:u.jsx("span",{className:"text-blue-900 font-bold text-xl",children:"P"})}),u.jsx("button",{onClick:()=>e(!t),className:"text-blue-300 hover:text-white",children:t?"→":"←"})]})}),u.jsx("nav",{className:"flex-1 p-4 overflow-y-auto",children:u.jsx("ul",{className:"space-y-2",children:n.map(r=>u.jsx("li",{children:u.jsxs(fF,{to:r.path,className:({isActive:s})=>`flex items-center px-4 py-3 rounded-lg transition-colors ${s?"bg-blue-800 text-white":"text-blue-200 hover:bg-blue-800 hover:text-white"}`,children:[u.jsx("span",{className:"text-xl mr-3",children:r.icon}),!t&&u.jsx("span",{children:r.label})]})},r.path))})}),!t&&u.jsx("div",{className:"p-4 border-t border-blue-800",children:u.jsxs("div",{className:"bg-blue-800 rounded-lg p-4",children:[u.jsx("p",{className:"text-xs text-blue-300 mb-2",children:"Active Orders"}),u.jsx("p",{className:"text-2xl font-bold",children:"3"})]})})]})}function vF({user:t,userProfile:e}){var o,a;const[n,r]=A.useState(!1),s=Cs(),i=async()=>{try{await II(Un),s("/login")}catch(l){console.error("Error logging out:",l)}};return u.jsx("header",{className:"bg-white border-b shadow-sm py-4 px-6 ml-64",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:"text",placeholder:"Search your orders...",className:"pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"}),u.jsx("span",{className:"absolute left-3 top-2.5",children:"🔍"})]}),u.jsxs("button",{className:"relative p-2 hover:bg-gray-100 rounded-lg",children:[u.jsx("span",{children:"🔔"}),u.jsx("span",{className:"absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center",children:"2"})]})]}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("div",{className:"text-right hidden md:block",children:[u.jsx("p",{className:"font-medium text-gray-800",children:(e==null?void 0:e.fullName)||t.email}),u.jsx("p",{className:"text-sm text-gray-500",children:"Customer"})]}),u.jsxs("div",{className:"relative",children:[u.jsxs("button",{onClick:()=>r(!n),className:"flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg",children:[u.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center",children:u.jsx("span",{className:"text-blue-600 font-semibold",children:((o=e==null?void 0:e.fullName)==null?void 0:o[0])||((a=t.email)==null?void 0:a[0])||"C"})}),u.jsx("span",{children:"▼"})]}),n&&u.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50",children:[u.jsxs("div",{className:"p-4 border-b",children:[u.jsx("p",{className:"font-medium",children:t.email}),u.jsx("p",{className:"text-sm text-gray-500",children:"Customer"})]}),u.jsxs("div",{className:"py-2",children:[u.jsx("a",{href:"/profile",className:"block px-4 py-2 hover:bg-gray-100",children:"👤 My Profile"}),u.jsx("a",{href:"/settings",className:"block px-4 py-2 hover:bg-gray-100",children:"⚙️ Settings"}),u.jsx("a",{href:"#",className:"block px-4 py-2 hover:bg-gray-100",children:"🆘 Help & Support"})]}),u.jsx("div",{className:"border-t py-2",children:u.jsx("button",{onClick:i,className:"w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600",children:"🚪 Logout"})})]})]})]})]})})}function wF({user:t,userProfile:e}){const[n,r]=A.useState([]),[s,i]=A.useState({totalOrders:0,activeOrders:0,completedOrders:0,totalSpent:0});A.useEffect(()=>{(async()=>{try{const l=sh(Ul(Vt,"deliveries"),pl("customerId","==",t.uid)),d=await hy(l),h=[];d.forEach(f=>{var _,T;const m=f.data();h.push({id:f.id,trackingCode:m.trackingCode,status:m.status,pickupAddress:m.pickupAddress,deliveryAddress:m.deliveryAddress,createdAt:((_=m.createdAt)==null?void 0:_.toDate())||new Date,estimatedDelivery:(T=m.estimatedDelivery)==null?void 0:T.toDate()})}),r(h.slice(0,5)),i({totalOrders:h.length,activeOrders:h.filter(f=>f.status!=="delivered").length,completedOrders:h.filter(f=>f.status==="delivered").length,totalSpent:0})}catch(l){console.error("Error fetching deliveries:",l)}})()},[t.uid]);const o=[{label:"Create Order",icon:"📝",path:"/orders/new",color:"bg-blue-600 hover:bg-blue-700"},{label:"Track Order",icon:"📍",path:"/track",color:"bg-green-600 hover:bg-green-700"},{label:"Live Tracking",icon:"🗺️",path:"/track-map",color:"bg-cyan-600 hover:bg-cyan-700"},{label:"My Orders",icon:"📦",path:"/orders",color:"bg-purple-600 hover:bg-purple-700"}];return u.jsxs("div",{children:[u.jsxs("div",{className:"mb-8",children:[u.jsxs("h1",{className:"text-3xl font-bold text-gray-800",children:["Welcome Back, ",(e==null?void 0:e.fullName)||"Customer","!"]}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Here's an overview of your deliveries and account."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:[u.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"p-3 bg-blue-100 rounded-lg mr-4",children:u.jsx("span",{className:"text-2xl",children:"📦"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Total Orders"}),u.jsx("p",{className:"text-3xl font-bold",children:s.totalOrders})]})]})}),u.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"p-3 bg-yellow-100 rounded-lg mr-4",children:u.jsx("span",{className:"text-2xl",children:"⏳"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Active Orders"}),u.jsx("p",{className:"text-3xl font-bold",children:s.activeOrders})]})]})}),u.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"p-3 bg-green-100 rounded-lg mr-4",children:u.jsx("span",{className:"text-2xl",children:"✅"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Completed"}),u.jsx("p",{className:"text-3xl font-bold",children:s.completedOrders})]})]})}),u.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"p-3 bg-purple-100 rounded-lg mr-4",children:u.jsx("span",{className:"text-2xl",children:"💰"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Total Spent"}),u.jsxs("p",{className:"text-3xl font-bold",children:["M",s.totalSpent]})]})]})})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 mb-8",children:[u.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Quick Actions"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:o.map((a,l)=>u.jsxs("a",{href:a.path,className:`${a.color} text-white p-4 rounded-lg flex flex-col items-center justify-center text-center transition transform hover:scale-105`,children:[u.jsx("span",{className:"text-3xl mb-2",children:a.icon}),u.jsx("span",{className:"font-medium",children:a.label})]},l))})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"text-xl font-bold mb-4",children:"Recent Orders"}),n.length===0?u.jsx("p",{className:"text-gray-500 text-center py-8",children:"No orders yet"}):u.jsx("div",{className:"overflow-x-auto",children:u.jsxs("table",{className:"w-full",children:[u.jsx("thead",{children:u.jsxs("tr",{className:"border-b",children:[u.jsx("th",{className:"text-left py-3 px-4",children:"Tracking Code"}),u.jsx("th",{className:"text-left py-3 px-4",children:"Delivery To"}),u.jsx("th",{className:"text-left py-3 px-4",children:"Status"}),u.jsx("th",{className:"text-left py-3 px-4",children:"Date"})]})}),u.jsx("tbody",{children:n.map(a=>u.jsxs("tr",{className:"border-b hover:bg-gray-50",children:[u.jsx("td",{className:"py-3 px-4 font-medium",children:a.trackingCode}),u.jsx("td",{className:"py-3 px-4",children:a.deliveryAddress}),u.jsx("td",{className:"py-3 px-4",children:u.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${a.status==="delivered"?"bg-green-100 text-green-800":a.status==="in_transit"?"bg-blue-100 text-blue-800":"bg-yellow-100 text-yellow-800"}`,children:a.status})}),u.jsx("td",{className:"py-3 px-4",children:a.createdAt.toLocaleDateString()})]},a.id))})]})})]})]})}let xF={data:""},EF=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||xF},TF=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,IF=/\/\*[^]*?\*\/|  +/g,Ix=/\n+/g,Fr=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?Fr(o,i):i+"{"+Fr(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=Fr(o,e?e.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=Fr.p?Fr.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},qn={},$S=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+$S(t[n]);return e}return t},CF=(t,e,n,r,s)=>{let i=$S(t),o=qn[i]||(qn[i]=(l=>{let d=0,h=11;for(;d<l.length;)h=101*h+l.charCodeAt(d++)>>>0;return"go"+h})(i));if(!qn[o]){let l=i!==t?t:(d=>{let h,f,m=[{}];for(;h=TF.exec(d.replace(IF,""));)h[4]?m.shift():h[3]?(f=h[3].replace(Ix," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][h[1]]=h[2].replace(Ix," ").trim();return m[0]})(t);qn[o]=Fr(s?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&qn.g?qn.g:null;return n&&(qn.g=qn[o]),((l,d,h,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=h?l+d.data:d.data+l)})(qn[o],e,r,a),o},NF=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Fr(a,""):a===!1?"":a}return r+s+(o??"")},"");function yh(t){let e=this||{},n=t.call?t(e.p):t;return CF(n.unshift?n.raw?NF(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,EF(e.target),e.g,e.o,e.k)}let zS,xm,Em;yh.bind({g:1});let pr=yh.bind({k:1});function SF(t,e,n,r){Fr.p=e,zS=t,xm=n,Em=r}function Ns(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),l=a.className||s.className;n.p=Object.assign({theme:xm&&xm()},a),n.o=/ *go\d+/.test(l),a.className=yh.apply(n,r)+(l?" "+l:"");let d=t;return t[0]&&(d=a.as||t,delete a.as),Em&&d[0]&&Em(a),zS(d,a)}return s}}var bF=t=>typeof t=="function",pd=(t,e)=>bF(t)?t(e):t,kF=(()=>{let t=0;return()=>(++t).toString()})(),WS=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),RF=20,Hy="default",qS=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return qS(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},su=[],HS={toasts:[],pausedAt:void 0,settings:{toastLimit:RF}},An={},GS=(t,e=Hy)=>{An[e]=qS(An[e]||HS,t),su.forEach(([n,r])=>{n===e&&r(An[e])})},KS=t=>Object.keys(An).forEach(e=>GS(t,e)),AF=t=>Object.keys(An).find(e=>An[e].toasts.some(n=>n.id===t)),_h=(t=Hy)=>e=>{GS(e,t)},PF={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},DF=(t={},e=Hy)=>{let[n,r]=A.useState(An[e]||HS),s=A.useRef(An[e]);A.useEffect(()=>(s.current!==An[e]&&r(An[e]),su.push([e,r]),()=>{let o=su.findIndex(([a])=>a===e);o>-1&&su.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var a,l,d;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||PF[o.type],style:{...t.style,...(d=t[o.type])==null?void 0:d.style,...o.style}}});return{...n,toasts:i}},OF=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||kF()}),Ql=t=>(e,n)=>{let r=OF(e,t,n);return _h(r.toasterId||AF(r.id))({type:2,toast:r}),r.id},re=(t,e)=>Ql("blank")(t,e);re.error=Ql("error");re.success=Ql("success");re.loading=Ql("loading");re.custom=Ql("custom");re.dismiss=(t,e)=>{let n={type:3,toastId:t};e?_h(e)(n):KS(n)};re.dismissAll=t=>re.dismiss(void 0,t);re.remove=(t,e)=>{let n={type:4,toastId:t};e?_h(e)(n):KS(n)};re.removeAll=t=>re.remove(void 0,t);re.promise=(t,e,n)=>{let r=re.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?pd(e.success,s):void 0;return i?re.success(i,{id:r,...n,...n==null?void 0:n.success}):re.dismiss(r),s}).catch(s=>{let i=e.error?pd(e.error,s):void 0;i?re.error(i,{id:r,...n,...n==null?void 0:n.error}):re.dismiss(r)}),t};var jF=1e3,LF=(t,e="default")=>{let{toasts:n,pausedAt:r}=DF(t,e),s=A.useRef(new Map).current,i=A.useCallback((f,m=jF)=>{if(s.has(f))return;let _=setTimeout(()=>{s.delete(f),o({type:4,toastId:f})},m);s.set(f,_)},[]);A.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(_=>{if(_.duration===1/0)return;let T=(_.duration||0)+_.pauseDuration-(f-_.createdAt);if(T<0){_.visible&&re.dismiss(_.id);return}return setTimeout(()=>re.dismiss(_.id,e),T)});return()=>{m.forEach(_=>_&&clearTimeout(_))}},[n,r,e]);let o=A.useCallback(_h(e),[e]),a=A.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=A.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),d=A.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),h=A.useCallback((f,m)=>{let{reverseOrder:_=!1,gutter:T=8,defaultPosition:k}=m||{},R=n.filter(C=>(C.position||k)===(f.position||k)&&C.height),N=R.findIndex(C=>C.id===f.id),w=R.filter((C,O)=>O<N&&C.visible).length;return R.filter(C=>C.visible).slice(..._?[w+1]:[0,w]).reduce((C,O)=>C+(O.height||0)+T,0)},[n]);return A.useEffect(()=>{n.forEach(f=>{if(f.dismissed)i(f.id,f.removeDelay);else{let m=s.get(f.id);m&&(clearTimeout(m),s.delete(f.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:d,calculateOffset:h}}},MF=pr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,VF=pr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,FF=pr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,UF=Ns("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${MF} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${VF} 0.15s ease-out forwards;
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
    animation: ${FF} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,BF=pr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,$F=Ns("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${BF} 1s linear infinite;
`,zF=pr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,WF=pr`
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
}`,qF=Ns("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${zF} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${WF} 0.2s ease-out forwards;
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
`,HF=Ns("div")`
  position: absolute;
`,GF=Ns("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,KF=pr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,QF=Ns("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${KF} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,YF=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?A.createElement(QF,null,e):e:n==="blank"?null:A.createElement(GF,null,A.createElement($F,{...r}),n!=="loading"&&A.createElement(HF,null,n==="error"?A.createElement(UF,{...r}):A.createElement(qF,{...r})))},XF=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,JF=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,ZF="0%{opacity:0;} 100%{opacity:1;}",e6="0%{opacity:1;} 100%{opacity:0;}",t6=Ns("div")`
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
`,n6=Ns("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,r6=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=WS()?[ZF,e6]:[XF(n),JF(n)];return{animation:e?`${pr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${pr(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},s6=A.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?r6(t.position||e||"top-center",t.visible):{opacity:0},i=A.createElement(YF,{toast:t}),o=A.createElement(n6,{...t.ariaProps},pd(t.message,t));return A.createElement(t6,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):A.createElement(A.Fragment,null,i,o))});SF(A.createElement);var i6=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=A.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return A.createElement("div",{ref:i,className:e,style:n},s)},o6=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:WS()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},a6=yh`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Oc=16,Ss=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:d}=LF(n,i);return A.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Oc,left:Oc,right:Oc,bottom:Oc,pointerEvents:"none",...o},className:a,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(h=>{let f=h.position||e,m=d.calculateOffset(h,{reverseOrder:t,gutter:r,defaultPosition:e}),_=o6(f,m);return A.createElement(i6,{id:h.id,key:h.id,onHeightUpdate:d.updateHeight,className:h.visible?a6:"",style:_},h.type==="custom"?pd(h.message,h):s?s(h):A.createElement(s6,{toast:h,position:f}))}))};function l6(){const[t,e]=A.useState([]),[n,r]=A.useState(!0),[s,i]=A.useState("all");A.useEffect(()=>{o()},[]);const o=async()=>{try{const l=Un.currentUser;if(!l)return;const d=sh(Ul(Vt,"deliveries"),pl("customerId","==",l.uid)),h=await hy(d),f=[];h.forEach(m=>{var T,k;const _=m.data();f.push({id:m.id,trackingCode:_.trackingCode,status:_.status,pickupAddress:_.pickupAddress,deliveryAddress:_.deliveryAddress,createdAt:((T=_.createdAt)==null?void 0:T.toDate())||new Date,estimatedDelivery:(k=_.estimatedDelivery)==null?void 0:k.toDate()})}),f.sort((m,_)=>_.createdAt.getTime()-m.createdAt.getTime()),e(f),r(!1)}catch(l){console.error("Error fetching orders:",l),re.error("Failed to load orders"),r(!1)}},a=t.filter(l=>s==="all"?!0:s==="pending"?l.status==="pending":s==="active"?l.status==="assigned"||l.status==="in_transit":s==="completed"?l.status==="delivered":!0);return u.jsxs("div",{children:[u.jsx(Ss,{position:"top-right"}),u.jsxs("div",{className:"mb-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"My Orders"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"View and track all your deliveries"})]}),u.jsx("div",{className:"bg-white rounded-xl shadow p-6 mb-6",children:u.jsxs("div",{className:"flex flex-wrap gap-3",children:[u.jsxs("button",{onClick:()=>i("all"),className:`px-4 py-2 rounded-lg font-medium transition ${s==="all"?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:["All Orders (",t.length,")"]}),u.jsx("button",{onClick:()=>i("pending"),className:`px-4 py-2 rounded-lg font-medium transition ${s==="pending"?"bg-yellow-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Pending"}),u.jsx("button",{onClick:()=>i("active"),className:`px-4 py-2 rounded-lg font-medium transition ${s==="active"?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"In Transit"}),u.jsx("button",{onClick:()=>i("completed"),className:`px-4 py-2 rounded-lg font-medium transition ${s==="completed"?"bg-green-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Completed"})]})}),n?u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:[u.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Loading your orders..."})]}):a.length===0?u.jsx("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:u.jsx("p",{className:"text-gray-500 text-lg",children:"No orders found"})}):u.jsx("div",{className:"space-y-4",children:a.map(l=>u.jsx(ai,{to:`/orders/${l.id}`,className:"bg-white rounded-xl shadow p-6 hover:shadow-lg transition",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center space-x-4 mb-2",children:[u.jsx("h3",{className:"text-lg font-bold",children:l.trackingCode}),u.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${l.status==="delivered"?"bg-green-100 text-green-800":l.status==="in_transit"?"bg-blue-100 text-blue-800":l.status==="pending"?"bg-yellow-100 text-yellow-800":"bg-gray-100 text-gray-800"}`,children:l.status})]}),u.jsxs("p",{className:"text-gray-600",children:["To: ",l.deliveryAddress]}),u.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["Ordered on ",l.createdAt.toLocaleDateString()]})]}),u.jsx("div",{className:"text-right",children:u.jsx("span",{className:"text-2xl",children:"→"})})]})},l.id))})]})}function c6(){const{id:t}=B3(),e=Cs(),[n,r]=A.useState(null),[s,i]=A.useState(!0);if(A.useEffect(()=>{(async()=>{var l,d,h;try{if(!t)return;const f=Vn(Vt,"deliveries",t),m=await $l(f);if(m.exists()){const _=m.data();r({id:m.id,trackingCode:_.trackingCode,status:_.status,pickupAddress:_.pickupAddress,deliveryAddress:_.deliveryAddress,packageDetails:_.packageDetails,carrierName:_.carrierName,createdAt:((l=_.createdAt)==null?void 0:l.toDate())||new Date,estimatedDelivery:(d=_.estimatedDelivery)==null?void 0:d.toDate(),actualDelivery:(h=_.actualDelivery)==null?void 0:h.toDate(),currentLocation:_.currentLocation})}else re.error("Order not found"),e("/orders")}catch(f){console.error("Error fetching order:",f),re.error("Failed to load order details")}finally{i(!1)}})()},[t,e]),s)return u.jsx("div",{className:"flex items-center justify-center min-h-screen",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Loading order details..."})]})});if(!n)return u.jsx("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:u.jsx("p",{className:"text-gray-500 text-lg",children:"Order not found"})});const o=()=>{const a=["pending","assigned","picked_up","in_transit","delivered"];return a.map((l,d)=>({step:l,completed:a.indexOf(n.status)>=d}))};return u.jsxs("div",{children:[u.jsx(Ss,{position:"top-right"}),u.jsx("button",{onClick:()=>e("/orders"),className:"mb-6 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-medium",children:"← Back to Orders"}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[u.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[u.jsx("div",{className:"bg-white rounded-xl shadow p-6",children:u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold",children:n.trackingCode}),u.jsxs("p",{className:"text-gray-600 mt-2",children:["Ordered on ",n.createdAt.toLocaleDateString()]})]}),u.jsx("span",{className:`px-4 py-2 rounded-full text-lg font-medium ${n.status==="delivered"?"bg-green-100 text-green-800":n.status==="in_transit"?"bg-blue-100 text-blue-800":"bg-yellow-100 text-yellow-800"}`,children:n.status})]})}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"text-xl font-bold mb-6",children:"Delivery Progress"}),u.jsx("div",{className:"flex items-center justify-between",children:o().map((a,l)=>u.jsxs("div",{className:"flex flex-col items-center flex-1",children:[u.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2 ${a.completed?"bg-blue-600 text-white":"bg-gray-200 text-gray-600"}`,children:a.completed?"✓":l+1}),u.jsx("p",{className:`text-sm text-center ${a.completed?"text-blue-600":"text-gray-500"}`,children:a.step}),l<o().length-1&&u.jsx("div",{className:`h-1 w-full mx-2 mt-4 ${a.completed?"bg-blue-600":"bg-gray-200"}`})]},l))})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"text-xl font-bold mb-4",children:"Delivery Details"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Pickup Address"}),u.jsx("p",{className:"text-gray-800 font-medium",children:n.pickupAddress})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Delivery Address"}),u.jsx("p",{className:"text-gray-800 font-medium",children:n.deliveryAddress})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Package Details"}),u.jsx("p",{className:"text-gray-800 font-medium",children:n.packageDetails})]}),n.carrierName&&u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Carrier"}),u.jsx("p",{className:"text-gray-800 font-medium",children:n.carrierName})]}),n.estimatedDelivery&&u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Estimated Delivery"}),u.jsx("p",{className:"text-gray-800 font-medium",children:n.estimatedDelivery.toLocaleDateString()})]})]})]})]}),u.jsxs("div",{className:"space-y-6",children:[n.status!=="delivered"&&u.jsxs("div",{className:"bg-blue-50 rounded-xl p-6 border border-blue-200",children:[u.jsx("h3",{className:"font-bold mb-4",children:"Need Help?"}),u.jsx("button",{className:"w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium",children:"📞 Contact Carrier"}),u.jsx("button",{className:"w-full mt-2 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 font-medium",children:"💬 Chat Support"})]}),n.status==="delivered"&&n.actualDelivery&&u.jsxs("div",{className:"bg-green-50 rounded-xl p-6 border border-green-200",children:[u.jsx("h3",{className:"font-bold mb-2",children:"✓ Delivered"}),u.jsxs("p",{className:"text-sm text-green-800",children:["Your package was delivered on"," ",n.actualDelivery.toLocaleDateString()]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"font-bold mb-4",children:"Actions"}),u.jsx("button",{className:"w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium mb-2",children:"📱 Share Tracking"}),u.jsx("button",{className:"w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium",children:"🖨️ Print Receipt"})]})]})]})]})}function Cx({value:t,onChange:e,onSelect:n,placeholder:r="Enter address..."}){const[s,i]=A.useState([]),o=A.useRef(null),a=A.useRef(null),l=A.useRef(null);A.useEffect(()=>{window.google&&window.google.maps&&(a.current=new window.google.maps.places.AutocompleteService,l.current=new window.google.maps.places.PlacesService(document.createElement("div")))},[]);const d=f=>{const m=f.target.value;e(m),m.length>2&&a.current?a.current.getPlacePredictions({input:m,componentRestrictions:{country:"ls"}},_=>{i(_||[])}):i([])},h=(f,m)=>{e(m),i([]),n&&l.current&&l.current.getDetails({placeId:f},_=>{n(_)})};return u.jsxs("div",{className:"relative",children:[u.jsx("input",{ref:o,type:"text",value:t,onChange:d,placeholder:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"}),s.length>0&&u.jsx("div",{className:"absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-50",children:s.map((f,m)=>u.jsxs("button",{onClick:()=>h(f.place_id,f.description),className:"w-full text-left px-4 py-2 hover:bg-gray-100 border-b last:border-b-0",children:[u.jsx("p",{className:"font-medium text-sm",children:f.main_text}),u.jsx("p",{className:"text-xs text-gray-500",children:f.secondary_text})]},m))})]})}const jf=30*60*1e3,u6=()=>{const t=A.useRef(null),e=A.useRef(new Map),n=A.useCallback(()=>{var a;return!t.current&&((a=window.google)!=null&&a.maps)&&(t.current=new window.google.maps.Geocoder),t.current},[]),r=A.useCallback(()=>{const a=Date.now();for(const[l,d]of e.current.entries())a-d.timestamp>jf&&e.current.delete(l)},[]),s=A.useCallback(async(a,l="ls")=>{if(!a.trim())return null;const d=`${a}-${l}`,h=e.current.get(d);return h&&Date.now()-h.timestamp<jf?h:new Promise(f=>{try{const m=n();if(!m){console.warn("Geocoder not available"),f(null);return}m.geocode({address:a.trim(),componentRestrictions:{country:l}},(_,T)=>{if(T==="OK"&&(_!=null&&_[0])){const k={lat:_[0].geometry.location.lat(),lng:_[0].geometry.location.lng(),address:_[0].formatted_address};e.current.set(d,{...k,timestamp:Date.now()}),f(k)}else console.warn("Geocoding failed:",T),f(null)})}catch(m){console.error("Geocoder error:",m),f(null)}})},[n]),i=A.useCallback(async(a,l)=>{const d=`${a}-${l}-reverse`,h=e.current.get(d);return h&&Date.now()-h.timestamp<jf?h.address:new Promise(f=>{try{const m=n();if(!m){f(null);return}m.geocode({location:{lat:a,lng:l}},(_,T)=>{if(T==="OK"&&(_!=null&&_[0])){const k=_[0].formatted_address;e.current.set(d,{lat:a,lng:l,address:k,timestamp:Date.now()}),f(k)}else console.warn("Reverse geocoding failed:",T),f(null)})}catch(m){console.error("Reverse geocoder error:",m),f(null)}})},[n]),o=A.useCallback(()=>{e.current.clear()},[]);return{geocodeAddress:s,reverseGeocode:i,clearCache:o,clearExpiredCache:r}};function d6({user:t}){const e=Cs(),{geocodeAddress:n}=u6(),[r,s]=A.useState({packageDescription:"",packageWeight:"",packageValue:"",packageDimensions:"",pickupAddress:"",pickupCoordinates:null,pickupContactName:"",pickupContactPhone:"",pickupInstructions:"",pickupDate:new Date().toISOString().split("T")[0],pickupTime:"09:00",deliveryAddress:"",deliveryCoordinates:null,deliveryContactName:"",deliveryContactPhone:"",deliveryInstructions:"",deliveryDate:new Date().toISOString().split("T")[0],deliveryTimeWindow:"09:00-17:00",priority:"standard",paymentMethod:"card_prepaid",paymentAmount:"",isFragile:!1,requiresSignature:!0,insuranceRequired:!1,notes:""}),[i,o]=A.useState(!0),[a,l]=A.useState(!1),[d,h]=A.useState(!1);A.useEffect(()=>{(async()=>{try{if(!t)return;const L=await $l(Vn(Vt,"users",t.uid));if(L.exists()){const x=L.data();s(y=>({...y,pickupContactName:x.fullName||y.pickupContactName,pickupContactPhone:x.phone||y.pickupContactPhone,pickupAddress:x.address||y.pickupAddress}))}}catch(L){console.error("Error fetching user profile:",L)}finally{o(!1)}})()},[t]);const f=async M=>{const L=await n(M,"ls");return L?{lat:L.lat,lng:L.lng,address:L.address}:null},m=M=>{const{name:L,value:x,type:y}=M.target;if(y==="checkbox"){const E=M.target.checked;s(S=>({...S,[L]:E}))}else s(y==="number"?E=>({...E,[L]:x===""?"":Number(x)}):E=>({...E,[L]:x}))},_=async M=>{if(s(L=>({...L,pickupAddress:M,pickupCoordinates:null})),M.length>10){const L=await f(M);L&&s(x=>({...x,pickupCoordinates:L}))}},T=async M=>{if(s(L=>({...L,deliveryAddress:M,deliveryCoordinates:null})),M.length>10){const L=await f(M);L&&s(x=>({...x,deliveryCoordinates:L}))}},k=()=>{const M="PTR",L=Math.floor(1e5+Math.random()*9e5);return`${M}-${L}`},R=()=>r.packageDescription?!r.pickupAddress||!r.deliveryAddress?(re.error("Pickup and delivery addresses are required"),!1):!r.deliveryContactName||!r.deliveryContactPhone?(re.error("Delivery contact information is required"),!1):!0:(re.error("Package description is required"),!1),N=(M,L,x,y)=>{const S=(x-M)*Math.PI/180,b=(y-L)*Math.PI/180,P=Math.sin(S/2)*Math.sin(S/2)+Math.cos(M*Math.PI/180)*Math.cos(x*Math.PI/180)*Math.sin(b/2)*Math.sin(b/2);return 6371*(2*Math.atan2(Math.sqrt(P),Math.sqrt(1-P)))},w=M=>M<10?"Same day":M<50?"1 day":"1-2 days",C=(M,L)=>{const x=M||100,y=L*10,E=Math.round(x*.15);return Math.max(50,E+y)},O=async M=>{if(M.preventDefault(),!!R()){l(!0),h(!0);try{let L=r.pickupCoordinates,x=r.deliveryCoordinates;L||(L=await f(r.pickupAddress)),x||(x=await f(r.deliveryAddress)),h(!1),(!L||!x)&&re.error("Unable to get coordinates for addresses. Order will be created without location data.",{duration:5e3});const y=k();let E=0,S="1-2 days",b=0;L&&x&&(E=N(L.lat,L.lng,x.lat,x.lng),S=w(E),b=C(r.packageValue?Number(r.packageValue):0,E));const P={trackingCode:y,status:"pending",priority:r.priority,customerId:t.uid,customerEmail:t.email||"",customerName:r.pickupContactName||"",customerPhone:r.pickupContactPhone||"",packageDescription:r.packageDescription,packageWeight:r.packageWeight?Number(r.packageWeight):null,packageValue:r.packageValue?Number(r.packageValue):null,packageDimensions:r.packageDimensions,pickupAddress:r.pickupAddress,pickupLocation:L?{lat:L.lat,lng:L.lng,address:L.address,timestamp:fe.now()}:null,pickupContactName:r.pickupContactName,pickupContactPhone:r.pickupContactPhone,pickupInstructions:r.pickupInstructions,pickupDateTime:fe.fromDate(new Date(`${r.pickupDate}T${r.pickupTime}`)),deliveryAddress:r.deliveryAddress,deliveryLocation:x?{lat:x.lat,lng:x.lng,address:x.address,timestamp:fe.now()}:null,deliveryContactName:r.deliveryContactName,deliveryContactPhone:r.deliveryContactPhone,deliveryInstructions:r.deliveryInstructions,deliveryDate:fe.fromDate(new Date(r.deliveryDate)),deliveryTimeWindow:r.deliveryTimeWindow,distance:E>0?Math.round(E*100)/100:null,estimatedDeliveryTime:S,estimatedEarnings:b,carrierId:null,carrierEmail:null,carrierName:null,assignedAt:null,paymentMethod:r.paymentMethod,paymentAmount:r.paymentAmount?Number(r.paymentAmount):b,paymentStatus:"pending",isFragile:r.isFragile,requiresSignature:r.requiresSignature,insuranceRequired:r.insuranceRequired,notes:r.notes,createdAt:Cf(),updatedAt:Cf(),createdBy:t.uid,proofOfDelivery:{otp:null,verified:!1,verifiedAt:null,photoUrl:null,signatureUrl:null},currentLocation:L?{lat:L.lat,lng:L.lng,timestamp:fe.now(),address:r.pickupAddress,locationType:"pickup_point",status:"waiting_for_pickup"}:null,locationHistory:L?[{lat:L.lat,lng:L.lng,timestamp:fe.now(),status:"created_at_pickup",address:r.pickupAddress}]:[],milestones:{created:Cf(),assigned:null,pickedUp:null,inTransit:null,outForDelivery:null,delivered:null}},I=await EL(Ul(Vt,"deliveries"),P),he=u.jsxs("div",{children:[u.jsx("p",{className:"font-bold",children:"✅ Order Created Successfully!"}),u.jsxs("div",{className:"mt-2 space-y-1",children:[u.jsxs("p",{className:"text-sm",children:[u.jsx("span",{className:"font-semibold",children:"Tracking Code:"})," ",y]}),E>0&&u.jsxs("p",{className:"text-sm",children:[u.jsx("span",{className:"font-semibold",children:"Distance:"})," ",E.toFixed(1)," km"]}),L&&x&&u.jsx("p",{className:"text-sm text-green-600",children:"✓ Location tracking initialized at pickup point"}),u.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Package location is set to pickup address until carrier picks it up."})]})]});re.success(he,{duration:6e3}),s({packageDescription:"",packageWeight:"",packageValue:"",packageDimensions:"",pickupAddress:"",pickupCoordinates:null,pickupContactName:"",pickupContactPhone:"",pickupInstructions:"",pickupDate:new Date().toISOString().split("T")[0],pickupTime:"09:00",deliveryAddress:"",deliveryCoordinates:null,deliveryContactName:"",deliveryContactPhone:"",deliveryInstructions:"",deliveryDate:new Date().toISOString().split("T")[0],deliveryTimeWindow:"09:00-17:00",priority:"standard",paymentMethod:"card_prepaid",paymentAmount:"",isFragile:!1,requiresSignature:!0,insuranceRequired:!1,notes:""}),setTimeout(()=>{e(`/orders/${I.id}`)},2e3)}catch(L){console.error("Error creating order:",L),re.error(`Failed to create order: ${L.message}`)}finally{l(!1),h(!1)}}};return i?u.jsxs("div",{className:"flex justify-center items-center h-64",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"}),u.jsx("p",{className:"ml-4 text-gray-600",children:"Loading profile..."})]}):u.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[u.jsx(Ss,{position:"top-right"}),u.jsx("div",{className:"mb-8",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Create New Order"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Fill in delivery details. Package location will start at pickup address."})]}),u.jsx("button",{onClick:()=>e("/orders"),className:"px-4 py-2 text-sm text-gray-600 hover:text-gray-800",children:"← Back to Orders"})]})}),u.jsx("div",{className:"mb-6 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3",children:u.jsx("span",{className:"text-white text-sm",children:"📍"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-blue-800",children:"Location Tracking"}),u.jsx("p",{className:"text-sm text-blue-700",children:"Package location will be initialized at the pickup address and updated as the carrier moves."})]})]})}),u.jsxs("form",{onSubmit:O,className:"space-y-8",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[u.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"1"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Package Information"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Package Description *"}),u.jsx("textarea",{name:"packageDescription",value:r.packageDescription,onChange:m,rows:3,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Describe what's being delivered (e.g., Documents, Electronics, Food, etc.)",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Weight (kg)"}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:"number",name:"packageWeight",value:r.packageWeight,onChange:m,step:"0.1",min:"0",className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"e.g., 2.5"}),u.jsx("span",{className:"absolute right-3 top-3 text-gray-500",children:"kg"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Dimensions (L×W×H cm)"}),u.jsx("input",{type:"text",name:"packageDimensions",value:r.packageDimensions,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"e.g., 30×20×15"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Declared Value (M)"}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:"number",name:"packageValue",value:r.packageValue,onChange:m,min:"0",className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"e.g., 500"}),u.jsx("span",{className:"absolute right-3 top-3 text-gray-500",children:"M"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Priority Level"}),u.jsxs("select",{name:"priority",value:r.priority,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",children:[u.jsx("option",{value:"standard",children:"Standard (1-2 days)"}),u.jsx("option",{value:"express",children:"Express (Same day)"}),u.jsx("option",{value:"urgent",children:"Urgent (Within hours)"})]})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[u.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"2"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Pickup Details (Start Location)"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Pickup Address *"}),u.jsx(Cx,{value:r.pickupAddress,onChange:_,placeholder:"Start typing address..."}),r.pickupCoordinates&&u.jsxs("div",{className:"mt-2 flex items-center text-sm text-green-600",children:[u.jsx("span",{className:"mr-2",children:"✓"}),u.jsxs("span",{children:["Coordinates ready: ",r.pickupCoordinates.lat.toFixed(6),","," ",r.pickupCoordinates.lng.toFixed(6)]})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Contact Name *"}),u.jsx("input",{type:"text",name:"pickupContactName",value:r.pickupContactName,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Contact Phone *"}),u.jsx("input",{type:"tel",name:"pickupContactPhone",value:r.pickupContactPhone,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Pickup Date"}),u.jsx("input",{type:"date",name:"pickupDate",value:r.pickupDate,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Pickup Time"}),u.jsx("input",{type:"time",name:"pickupTime",value:r.pickupTime,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"})]}),u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Pickup Instructions"}),u.jsx("textarea",{name:"pickupInstructions",value:r.pickupInstructions,onChange:m,rows:2,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Special instructions for pickup (e.g., call before arrival, etc.)"})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[u.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"3"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Delivery Details (Destination)"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Delivery Address *"}),u.jsx(Cx,{value:r.deliveryAddress,onChange:T,placeholder:"Start typing address..."}),r.deliveryCoordinates&&u.jsxs("div",{className:"mt-2 flex items-center text-sm text-green-600",children:[u.jsx("span",{className:"mr-2",children:"✓"}),u.jsxs("span",{children:["Coordinates ready: ",r.deliveryCoordinates.lat.toFixed(6),","," ",r.deliveryCoordinates.lng.toFixed(6)]})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Recipient Name *"}),u.jsx("input",{type:"text",name:"deliveryContactName",value:r.deliveryContactName,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Recipient Phone *"}),u.jsx("input",{type:"tel",name:"deliveryContactPhone",value:r.deliveryContactPhone,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Delivery Date"}),u.jsx("input",{type:"date",name:"deliveryDate",value:r.deliveryDate,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Time Window"}),u.jsxs("select",{name:"deliveryTimeWindow",value:r.deliveryTimeWindow,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",children:[u.jsx("option",{value:"09:00-17:00",children:"9:00 AM - 5:00 PM"}),u.jsx("option",{value:"08:00-16:00",children:"8:00 AM - 4:00 PM"}),u.jsx("option",{value:"10:00-18:00",children:"10:00 AM - 6:00 PM"}),u.jsx("option",{value:"anytime",children:"Anytime"})]})]}),u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Delivery Instructions"}),u.jsx("textarea",{name:"deliveryInstructions",value:r.deliveryInstructions,onChange:m,rows:2,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Special instructions for delivery (e.g., leave at reception, etc.)"})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[u.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"4"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Special Requirements & Payment"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800",children:"Payment Information"}),u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Payment Method"}),u.jsxs("select",{name:"paymentMethod",value:r.paymentMethod,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",children:[u.jsx("option",{value:"card_prepaid",children:"Card Prepaid"}),u.jsx("option",{value:"cash_on_delivery",children:"Cash on Delivery"}),u.jsx("option",{value:"mobile_money",children:"Mobile Money"}),u.jsx("option",{value:"bank_transfer",children:"Bank Transfer"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Payment Amount (M)"}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:"number",name:"paymentAmount",value:r.paymentAmount,onChange:m,min:"0",className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Leave blank for auto-calculation"}),u.jsx("span",{className:"absolute right-3 top-3 text-gray-500",children:"M"})]}),u.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Leave blank to auto-calculate based on distance and package value"})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800",children:"Special Requirements"}),u.jsxs("div",{className:"space-y-4 mb-6",children:[u.jsxs("div",{className:"flex items-center p-3 bg-gray-50 rounded-lg",children:[u.jsx("input",{type:"checkbox",id:"isFragile",name:"isFragile",checked:r.isFragile,onChange:m,className:"h-5 w-5 text-blue-600 rounded focus:ring-blue-500"}),u.jsxs("label",{htmlFor:"isFragile",className:"ml-3 text-gray-700",children:[u.jsx("span",{className:"font-medium",children:"Fragile items"}),u.jsx("span",{className:"block text-sm text-gray-500",children:"Handle with care"})]})]}),u.jsxs("div",{className:"flex items-center p-3 bg-gray-50 rounded-lg",children:[u.jsx("input",{type:"checkbox",id:"requiresSignature",name:"requiresSignature",checked:r.requiresSignature,onChange:m,className:"h-5 w-5 text-blue-600 rounded focus:ring-blue-500"}),u.jsxs("label",{htmlFor:"requiresSignature",className:"ml-3 text-gray-700",children:[u.jsx("span",{className:"font-medium",children:"Signature required"}),u.jsx("span",{className:"block text-sm text-gray-500",children:"Upon delivery"})]})]}),u.jsxs("div",{className:"flex items-center p-3 bg-gray-50 rounded-lg",children:[u.jsx("input",{type:"checkbox",id:"insuranceRequired",name:"insuranceRequired",checked:r.insuranceRequired,onChange:m,className:"h-5 w-5 text-blue-600 rounded focus:ring-blue-500"}),u.jsxs("label",{htmlFor:"insuranceRequired",className:"ml-3 text-gray-700",children:[u.jsx("span",{className:"font-medium",children:"Insurance required"}),u.jsx("span",{className:"block text-sm text-gray-500",children:"For high-value items"})]})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Additional Notes"}),u.jsx("textarea",{name:"notes",value:r.notes,onChange:m,rows:4,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Any additional information or special requests..."})]})]})]})]}),(r.pickupCoordinates||r.deliveryCoordinates)&&u.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6",children:[u.jsxs("h3",{className:"text-lg font-semibold text-green-800 mb-4 flex items-center",children:[u.jsx("span",{className:"mr-2",children:"✅"}),"Location Tracking Ready"]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.pickupCoordinates&&u.jsxs("div",{className:"bg-white p-4 rounded-lg border border-green-200",children:[u.jsx("div",{className:"font-medium text-green-700 mb-1",children:"📍 Pickup Location"}),u.jsxs("div",{className:"text-sm text-gray-600",children:[u.jsx("div",{className:"truncate",children:r.pickupAddress}),u.jsxs("div",{className:"text-xs font-mono mt-1",children:[r.pickupCoordinates.lat.toFixed(6),","," ",r.pickupCoordinates.lng.toFixed(6)]})]})]}),r.deliveryCoordinates&&u.jsxs("div",{className:"bg-white p-4 rounded-lg border border-green-200",children:[u.jsx("div",{className:"font-medium text-green-700 mb-1",children:"🎯 Delivery Location"}),u.jsxs("div",{className:"text-sm text-gray-600",children:[u.jsx("div",{className:"truncate",children:r.deliveryAddress}),u.jsxs("div",{className:"text-xs font-mono mt-1",children:[r.deliveryCoordinates.lat.toFixed(6),","," ",r.deliveryCoordinates.lng.toFixed(6)]})]})]})]}),u.jsx("p",{className:"text-sm text-green-700 mt-4",children:"Package location will start at pickup coordinates and update as the carrier moves."})]}),u.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6",children:u.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[u.jsx("div",{children:r.pickupCoordinates&&r.deliveryCoordinates&&u.jsx("p",{className:"text-sm text-green-600",children:"✓ Ready for location-based tracking"})}),u.jsxs("div",{className:"flex space-x-4",children:[u.jsx("button",{type:"button",onClick:()=>e("/orders"),className:"px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition",children:"Cancel"}),u.jsx("button",{type:"submit",disabled:a,className:"px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center shadow-md",children:a?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"}),d?"Getting coordinates...":"Creating Order..."]}):u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"mr-2",children:"📦"}),"Create Order"]})})]})]})})]}),u.jsxs("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-3 gap-4",children:[u.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-xl p-4",children:[u.jsx("div",{className:"text-blue-600 font-medium mb-2",children:"📍 Location Tracking"}),u.jsx("p",{className:"text-sm text-blue-700",children:"Package location starts at pickup address and updates automatically as the carrier moves."})]}),u.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-xl p-4",children:[u.jsx("div",{className:"text-green-600 font-medium mb-2",children:"💰 Pricing"}),u.jsx("p",{className:"text-sm text-green-700",children:"Distance-based calculation: M10 per km + 15% of package value (minimum M50)."})]}),u.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-xl p-4",children:[u.jsx("div",{className:"text-purple-600 font-medium mb-2",children:"🚚 Carrier Assignment"}),u.jsx("p",{className:"text-sm text-purple-700",children:"Auto-assigns nearest available carrier. OTP verification included."})]})]})]})}function h6(){const[t,e]=A.useState(""),[n,r]=A.useState(null),[s,i]=A.useState(!1),o=async a=>{var l;if(a.preventDefault(),!t.trim()){re.error("Please enter a tracking code");return}i(!0);try{const d=sh(Ul(Vt,"deliveries"),pl("trackingCode","==",t.toUpperCase())),h=await hy(d);if(h.empty)re.error("Tracking code not found"),r(null);else{const f=h.docs[0],m=f.data();r({id:f.id,trackingCode:m.trackingCode,status:m.status,deliveryAddress:m.deliveryAddress,carrierName:m.carrierName,estimatedDelivery:(l=m.estimatedDelivery)==null?void 0:l.toDate()}),re.success("Order found!")}}catch(d){console.error("Error tracking order:",d),re.error("Failed to track order")}finally{i(!1)}};return u.jsxs("div",{children:[u.jsx(Ss,{position:"top-right"}),u.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Track Your Order"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Enter your tracking code to get real-time updates"})]}),u.jsx(ai,{to:"/track-map",className:"px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 font-medium flex items-center gap-2 h-fit",children:"🗺️ View Live Map"})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 mb-8",children:[u.jsx("form",{onSubmit:o,children:u.jsxs("div",{className:"flex gap-4",children:[u.jsx("div",{className:"flex-1",children:u.jsx("input",{type:"text",value:t,onChange:a=>e(a.target.value),placeholder:"e.g., PTR-001234",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-lg",disabled:s})}),u.jsx("button",{type:"submit",disabled:s,className:"px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed",children:s?"Tracking...":"Track"})]})}),u.jsxs("div",{className:"mt-6 pt-6 border-t",children:[u.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Recent Searches"}),u.jsxs("div",{className:"flex flex-wrap gap-2",children:[u.jsx("button",{className:"px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm",children:"PTR-001"}),u.jsx("button",{className:"px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm",children:"PTR-045"}),u.jsx("button",{className:"px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm",children:"PTR-089"})]})]})]}),n&&u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow p-8",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-2xl font-bold",children:n.trackingCode}),u.jsxs("p",{className:"text-gray-600 mt-1",children:["Destination: ",n.deliveryAddress]})]}),u.jsx("span",{className:`px-4 py-2 rounded-full text-lg font-medium ${n.status==="delivered"?"bg-green-100 text-green-800":n.status==="in_transit"?"bg-blue-100 text-blue-800":"bg-yellow-100 text-yellow-800"}`,children:n.status})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0",children:u.jsx("span",{className:"text-blue-600 text-lg",children:"✓"})}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium",children:"Order Received"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Your order has been received"})]})]}),u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${n.status!=="pending"?"bg-blue-100":"bg-gray-200"}`,children:u.jsx("span",{className:`text-lg ${n.status!=="pending"?"text-blue-600":"text-gray-400"}`,children:n.status!=="pending"?"✓":"2"})}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium",children:n.carrierName?`Assigned to ${n.carrierName}`:"Waiting for Carrier"}),u.jsx("p",{className:"text-sm text-gray-500",children:n.carrierName?"Your carrier has been assigned":"Waiting for a carrier to pick up"})]})]}),u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${n.status==="in_transit"||n.status==="delivered"?"bg-blue-100":"bg-gray-200"}`,children:u.jsx("span",{className:n.status==="in_transit"||n.status==="delivered"?"text-blue-600 text-lg":"text-gray-400",children:n.status==="in_transit"||n.status==="delivered"?"✓":"3"})}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium",children:"In Transit"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Your package is on its way"})]})]}),u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${n.status==="delivered"?"bg-green-100":"bg-gray-200"}`,children:u.jsx("span",{className:n.status==="delivered"?"text-green-600 text-lg":"text-gray-400",children:n.status==="delivered"?"✓":"4"})}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium",children:"Delivered"}),u.jsx("p",{className:"text-sm text-gray-500",children:n.estimatedDelivery?`Estimated: ${n.estimatedDelivery.toLocaleDateString()}`:"Delivery in progress"})]})]})]})]}),u.jsxs("div",{className:"bg-blue-50 rounded-xl p-6 border border-blue-200",children:[u.jsx("h3",{className:"font-bold mb-4",children:"Need Help?"}),u.jsx("p",{className:"text-gray-700 mb-4",children:"If you have any questions about your delivery, our support team is here to help."}),u.jsx("button",{className:"w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium",children:"📞 Contact Support"})]})]}),!n&&t&&!s&&u.jsx("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:u.jsx("p",{className:"text-gray-600",children:"Enter a tracking code and click Track to see order details"})})]})}function f6({user:t}){const[e,n]=A.useState([]),[r,s]=A.useState({}),[i,o]=A.useState(!1),[a,l]=A.useState(null),[d,h]=A.useState(null),[f,m]=A.useState(!0),_=A.useRef(null),T=A.useRef(null),k=A.useRef(new Map),R=A.useRef(null),N=A.useRef(null),w=A.useRef(null),C={lat:-29.31,lng:27.48};A.useEffect(()=>{const y=()=>{var b;return(b=window.google)!=null&&b.maps?(console.log("✅ Google Maps API is loaded"),o(!0),!0):!1};if(y())return;const E=()=>{y()&&window.removeEventListener("mapsReady",E)};window.addEventListener("mapsReady",E);const S=setTimeout(()=>{var b;(b=window.google)!=null&&b.maps||(window.removeEventListener("mapsReady",E),l("Google Maps failed to load. Please refresh the page."))},15e3);return()=>{window.removeEventListener("mapsReady",E),clearTimeout(S)}},[]),A.useEffect(()=>{if(!(t!=null&&t.uid))return;m(!0);const y=sh(Ul(Vt,"deliveries"),pl("customerId","==",t.uid),pl("status","in",["assigned","picked_up","in_transit","out_for_delivery","delivered"])),E=TL(y,P=>{const I=[];P.forEach(he=>{const Te=he.data(),st=r[he.id],on=st?{lat:st.lat,lng:st.lng,timestamp:new Date(st.timestamp)}:Te.currentLocation;I.push({id:he.id,trackingCode:Te.trackingCode,status:Te.status,pickupAddress:Te.pickupAddress,deliveryAddress:Te.deliveryAddress,estimatedDeliveryTime:Te.estimatedDeliveryTime,distance:Te.distance,currentLocation:on,pickupLocation:Te.pickupLocation,deliveryLocation:Te.deliveryLocation,carrierName:Te.carrierName,deliveryContactName:Te.deliveryContactName,deliveryDate:Te.deliveryDate})}),n(I),m(!1),I.length>0&&!d&&h(I[0].id)},P=>{console.error("Error loading deliveries:",P),m(!1)}),S=T4(h3,"deliveryTracks"),b=C4(S,P=>{const I=P.val()||{};s(I)});return()=>{E();try{b&&b()}catch{}}},[t==null?void 0:t.uid,r]),A.useEffect(()=>{if(!(!i||!window.google||!_.current)){console.log("🔄 Initializing Tracking Map...");try{const y={center:C,zoom:12,mapTypeId:window.google.maps.MapTypeId.ROADMAP,zoomControl:!0,mapTypeControl:!1,scaleControl:!0,streetViewControl:!0,rotateControl:!1,fullscreenControl:!0,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]},E=new window.google.maps.Map(_.current,y);T.current=E,console.log("✅ Tracking Map initialized successfully"),k.current=new Map,l(null)}catch(y){console.error("❌ Error initializing map:",y),l("Failed to initialize map. Please check console for details.")}}},[i]);const O=A.useCallback(()=>{if(!T.current||!window.google||!i||!d)return;const y=e.find(I=>I.id===d);if(!y)return;const E=[];y.pickupLocation&&E.push({id:`pickup-${y.id}`,type:"pickup",lat:y.pickupLocation.lat,lng:y.pickupLocation.lng,title:"Pickup Location",content:`
          <div style="padding: 10px; min-width: 220px; font-family: system-ui;">
            <h3 style="margin: 0 0 5px 0; color: #059669; font-size: 14px; font-weight: 600;">📍 Pickup Point</h3>
            <p style="margin: 0 0 5px 0; color: #4B5563; font-size: 12px;">${y.pickupAddress}</p>
            <p style="margin: 0; font-size: 11px; color: #6B7280;">
              ${y.pickupLocation.lat.toFixed(4)}, ${y.pickupLocation.lng.toFixed(4)}
            </p>
          </div>
        `,deliveryId:y.id}),y.currentLocation&&E.push({id:`current-${y.id}`,type:"current",lat:y.currentLocation.lat,lng:y.currentLocation.lng,title:`Order: ${y.trackingCode}`,content:`
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
        `,deliveryId:y.id}),y.deliveryLocation&&E.push({id:`delivery-${y.id}`,type:"delivery",lat:y.deliveryLocation.lat,lng:y.deliveryLocation.lng,title:"Delivery Location",content:`
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
        `,deliveryId:y.id});const S=new Set(k.current.keys()),b=new Set(E.map(I=>I.id));for(const I of S)if(!b.has(I)){const he=k.current.get(I);he&&(he.setMap(null),k.current.delete(I))}const P=[];if(E.forEach(I=>{const he=k.current.get(I.id),Te={lat:I.lat,lng:I.lng};let st;if(he)he.setPosition(Te),st=he;else try{const on=I.type==="pickup"?"#059669":I.type==="delivery"?"#DC2626":"#3B82F6",z={path:window.google.maps.SymbolPath.CIRCLE,fillColor:on,fillOpacity:1,strokeColor:"#FFFFFF",strokeWeight:2,scale:I.type==="current"?12:9};st=new window.google.maps.Marker({position:Te,map:T.current,icon:z,title:I.title}),st.addListener("click",()=>{N.current||(N.current=new window.google.maps.InfoWindow),N.current.setContent(I.content),N.current.open(T.current,st)}),k.current.set(I.id,st)}catch(on){console.error("Error creating marker:",on);return}P.push(st)}),w.current&&w.current.setMap(null),y.pickupLocation&&y.currentLocation&&y.deliveryLocation){const I=[{lat:y.pickupLocation.lat,lng:y.pickupLocation.lng}];y.currentLocation&&I.push({lat:y.currentLocation.lat,lng:y.currentLocation.lng}),I.push({lat:y.deliveryLocation.lat,lng:y.deliveryLocation.lng}),w.current=new window.google.maps.Polyline({path:I,geodesic:!0,strokeColor:"#3B82F6",strokeOpacity:.7,strokeWeight:3,map:T.current})}if(P.length>0){const I=new window.google.maps.LatLngBounds;P.forEach(he=>{I.extend(he.getPosition())}),I.isEmpty()||T.current.fitBounds(I,50)}},[e,d,i]);A.useEffect(()=>(R.current&&clearTimeout(R.current),R.current=setTimeout(()=>{O()},300),()=>{R.current&&clearTimeout(R.current)}),[e,d,i,O]);const M=y=>{const E=e.find(S=>S.id===y);E!=null&&E.currentLocation&&T.current&&(T.current.setCenter({lat:E.currentLocation.lat,lng:E.currentLocation.lng}),T.current.setZoom(16))},L=y=>{switch(y){case"assigned":return"bg-blue-50 border-blue-200 text-blue-700";case"picked_up":return"bg-purple-50 border-purple-200 text-purple-700";case"in_transit":return"bg-amber-50 border-amber-200 text-amber-700";case"out_for_delivery":return"bg-blue-50 border-blue-200 text-blue-700";case"delivered":return"bg-green-50 border-green-200 text-green-700";default:return"bg-gray-50 border-gray-200 text-gray-700"}},x=y=>{switch(y){case"assigned":return"📋";case"picked_up":return"📦";case"in_transit":return"🚚";case"out_for_delivery":return"🚗";case"delivered":return"✅";default:return"📍"}};return i?a?u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:[u.jsx("div",{className:"text-6xl mb-4",children:"🗺️"}),u.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"Map Error"}),u.jsx("p",{className:"text-red-600 mb-4",children:a}),u.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Refresh Page"})]}):f?u.jsxs("div",{className:"flex justify-center items-center h-64",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"}),u.jsx("p",{className:"ml-4 text-gray-600",children:"Loading your deliveries..."})]}):u.jsxs("div",{children:[u.jsx(Ss,{position:"top-right"}),u.jsxs("div",{className:"mb-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Track Your Orders"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Real-time tracking of your deliveries"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Active Orders"}),u.jsx("div",{className:"text-2xl font-bold text-blue-600",children:e.length})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"In Transit"}),u.jsx("div",{className:"text-2xl font-bold text-amber-600",children:e.filter(y=>y.status==="in_transit").length})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Delivered"}),u.jsx("div",{className:"text-2xl font-bold text-green-600",children:e.filter(y=>y.status==="delivered").length})]})]}),e.length===0?u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:[u.jsx("div",{className:"text-6xl mb-4",children:"📦"}),u.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"No active orders"}),u.jsx("p",{className:"text-gray-500",children:"Your orders will appear here once they are assigned to a carrier"})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl shadow overflow-hidden mb-8",children:[u.jsx("div",{className:"border-b px-6 py-4 bg-gray-50",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("h3",{className:"font-medium text-gray-700",children:"Real-time Order Tracking"}),u.jsxs("div",{className:"flex items-center space-x-4 text-sm",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"w-3 h-3 rounded-full bg-green-600 mr-2"}),u.jsx("span",{children:"Pickup"})]}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600 mr-2"}),u.jsx("span",{children:"Current"})]}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"w-3 h-3 rounded-full bg-red-600 mr-2"}),u.jsx("span",{children:"Destination"})]})]})]})}),u.jsx("div",{ref:_,className:"w-full h-[500px] bg-gray-100",style:{minHeight:"500px"}}),u.jsx("div",{className:"border-t px-6 py-4 bg-gray-50",children:u.jsx("div",{className:"text-sm text-gray-500",children:"Click on markers for details. Your package location updates in real-time."})})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[u.jsxs("div",{className:"lg:col-span-1",children:[u.jsx("h3",{className:"text-xl font-bold mb-4",children:"Your Orders"}),u.jsx("div",{className:"space-y-3",children:e.map(y=>u.jsxs("div",{onClick:()=>{h(y.id),M(y.id)},className:`p-4 rounded-lg border-2 cursor-pointer transition ${d===y.id?"border-blue-600 bg-blue-50":"border-gray-200 bg-white hover:border-gray-300"}`,children:[u.jsx("div",{className:"flex items-start justify-between",children:u.jsxs("div",{children:[u.jsx("div",{className:"font-bold text-gray-800",children:y.trackingCode}),u.jsxs("div",{className:`text-xs mt-1 inline-block px-2 py-1 rounded ${L(y.status)}`,children:[x(y.status)," ",y.status.replace(/_/g," ")]})]})}),y.distance&&u.jsxs("div",{className:"text-xs text-gray-500 mt-2",children:["Distance: ",y.distance," km"]})]},y.id))})]}),u.jsx("div",{className:"lg:col-span-2",children:d&&e.find(y=>y.id===d)?(()=>{var E;const y=e.find(S=>S.id===d);return u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h4",{className:"text-lg font-bold text-gray-800 mb-4",children:"Order Summary"}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-sm text-gray-600",children:"Tracking Code"}),u.jsx("div",{className:"font-bold text-gray-800",children:y.trackingCode})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-sm text-gray-600",children:"Status"}),u.jsxs("div",{className:`inline-block px-3 py-1 rounded-lg text-sm font-medium ${L(y.status)}`,children:[x(y.status)," ",y.status.replace(/_/g," ")]})]}),y.carrierName&&u.jsxs("div",{children:[u.jsx("div",{className:"text-sm text-gray-600",children:"Carrier"}),u.jsx("div",{className:"font-medium text-gray-800",children:y.carrierName})]}),y.distance&&u.jsxs("div",{children:[u.jsx("div",{className:"text-sm text-gray-600",children:"Distance"}),u.jsxs("div",{className:"font-medium text-gray-800",children:[y.distance," km"]})]}),y.estimatedDeliveryTime&&u.jsxs("div",{children:[u.jsx("div",{className:"text-sm text-gray-600",children:"Estimated Delivery"}),u.jsx("div",{className:"font-medium text-green-600",children:y.estimatedDeliveryTime})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h4",{className:"text-lg font-bold text-gray-800 mb-4",children:"Route Information"}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("div",{className:"pb-4 border-b",children:u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold",children:"1"}),u.jsxs("div",{className:"ml-3 flex-1",children:[u.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Pickup Location"}),u.jsx("div",{className:"text-sm text-gray-600 mt-1",children:y.pickupAddress})]})]})}),u.jsx("div",{className:"pb-4 border-b",children:u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold",children:"2"}),u.jsxs("div",{className:"ml-3 flex-1",children:[u.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Current Location"}),u.jsx("div",{className:"text-sm text-gray-600 mt-1",children:((E=y.currentLocation)==null?void 0:E.address)||"In transit"})]})]})}),u.jsx("div",{children:u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold",children:"3"}),u.jsxs("div",{className:"ml-3 flex-1",children:[u.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Delivery Location"}),u.jsx("div",{className:"text-sm text-gray-600 mt-1",children:y.deliveryAddress}),u.jsxs("div",{className:"text-xs text-gray-500 mt-2",children:["Recipient: ",y.deliveryContactName]})]})]})})]})]})]})})():null})]})]})]}):u.jsxs("div",{className:"flex flex-col items-center justify-center h-96",children:[u.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),u.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"Loading map..."}),u.jsx("p",{className:"text-gray-500",children:"This may take a few moments"})]})}function p6({user:t,userProfile:e}){var h,f;const[n,r]=A.useState({fullName:(e==null?void 0:e.fullName)||"",email:(t==null?void 0:t.email)||"",phone:(e==null?void 0:e.phone)||"",address:(e==null?void 0:e.address)||"",whatsapp:(e==null?void 0:e.whatsapp)||""}),[s,i]=A.useState(!1),[o,a]=A.useState(!1),l=m=>{const{name:_,value:T}=m.target;r(k=>({...k,[_]:T}))},d=async()=>{i(!0);try{t&&(await rm(Vn(Vt,"users",t.uid),{fullName:n.fullName,phone:n.phone,address:n.address,whatsapp:n.whatsapp,updatedAt:new Date}),re.success("Profile updated successfully!"),a(!1))}catch(m){console.error("Error updating profile:",m),re.error("Failed to update profile")}finally{i(!1)}};return u.jsxs("div",{children:[u.jsx(Ss,{position:"top-right"}),u.jsxs("div",{className:"mb-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"My Profile"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Manage your personal information"})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[u.jsx("div",{className:"lg:col-span-2",children:u.jsxs("div",{className:"bg-white rounded-xl shadow p-8",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsx("h2",{className:"text-2xl font-bold",children:"Personal Information"}),u.jsx("button",{onClick:()=>a(!o),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",children:o?"Cancel":"Edit"})]}),u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name"}),u.jsx("input",{type:"text",name:"fullName",value:n.fullName,onChange:l,disabled:!o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email"}),u.jsx("input",{type:"email",value:n.email,disabled:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number"}),u.jsx("input",{type:"tel",name:"phone",value:n.phone,onChange:l,disabled:!o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"WhatsApp Number"}),u.jsx("input",{type:"tel",name:"whatsapp",value:n.whatsapp,onChange:l,disabled:!o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Default Address"}),u.jsx("input",{type:"text",name:"address",value:n.address,onChange:l,disabled:!o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"})]}),o&&u.jsx("button",{onClick:d,disabled:s,className:"w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed",children:s?"Saving...":"Save Changes"})]})]})}),u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"font-bold mb-4",children:"Account Information"}),u.jsxs("div",{className:"space-y-3 text-sm",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-gray-500",children:"Member Since"}),u.jsx("p",{className:"font-medium",children:e!=null&&e.createdAt?new Date(((f=(h=e.createdAt).toDate)==null?void 0:f.call(h))||e.createdAt).toLocaleDateString():"N/A"})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-gray-500",children:"Account Status"}),u.jsx("p",{className:"font-medium text-green-600",children:"Active"})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-gray-500",children:"Verified Email"}),u.jsx("p",{className:"font-medium",children:"✓ Yes"})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"font-bold mb-4",children:"Activity"}),u.jsxs("div",{className:"space-y-3 text-sm",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("p",{className:"text-gray-600",children:"Total Orders"}),u.jsx("p",{className:"font-bold",children:"12"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("p",{className:"text-gray-600",children:"Completed"}),u.jsx("p",{className:"font-bold text-green-600",children:"10"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("p",{className:"text-gray-600",children:"In Progress"}),u.jsx("p",{className:"font-bold text-blue-600",children:"2"})]})]})]})]})]})]})}function m6(){const t=Cs(),[e,n]=A.useState({emailNotifications:!0,smsNotifications:!0,pushNotifications:!0,showProfile:!0}),[r,s]=A.useState(!1),[i,o]=A.useState(!1),a=h=>{n(f=>({...f,[h]:!f[h]})),re.success("Preference updated")},l=async()=>{try{await II(Un),re.success("Logged out successfully"),t("/login")}catch(h){console.error("Error logging out:",h),re.error("Failed to logout")}},d=async()=>{o(!0);try{const h=Un.currentUser;h&&(await WP(h),re.success("Account deleted successfully"),t("/login"))}catch(h){console.error("Error deleting account:",h),re.error("Failed to delete account. Please try again later.")}finally{o(!1),s(!1)}};return u.jsxs("div",{children:[u.jsx(Ss,{position:"top-right"}),u.jsxs("div",{className:"mb-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Settings"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Manage your preferences and account"})]}),u.jsxs("div",{className:"max-w-2xl space-y-6",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-6",children:"Notifications"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-gray-800",children:"Email Notifications"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Receive updates about your deliveries via email"})]}),u.jsx("button",{onClick:()=>a("emailNotifications"),className:`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${e.emailNotifications?"bg-blue-600":"bg-gray-300"}`,children:u.jsx("span",{className:`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${e.emailNotifications?"translate-x-7":"translate-x-1"}`})})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-gray-800",children:"SMS Notifications"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Receive text message updates about your deliveries"})]}),u.jsx("button",{onClick:()=>a("smsNotifications"),className:`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${e.smsNotifications?"bg-blue-600":"bg-gray-300"}`,children:u.jsx("span",{className:`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${e.smsNotifications?"translate-x-7":"translate-x-1"}`})})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-gray-800",children:"Push Notifications"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Receive push notifications from the app"})]}),u.jsx("button",{onClick:()=>a("pushNotifications"),className:`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${e.pushNotifications?"bg-blue-600":"bg-gray-300"}`,children:u.jsx("span",{className:`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${e.pushNotifications?"translate-x-7":"translate-x-1"}`})})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-6",children:"Privacy"}),u.jsx("div",{className:"space-y-4",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-gray-800",children:"Public Profile"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Let other users see your profile information"})]}),u.jsx("button",{onClick:()=>a("showProfile"),className:`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${e.showProfile?"bg-blue-600":"bg-gray-300"}`,children:u.jsx("span",{className:`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${e.showProfile?"translate-x-7":"translate-x-1"}`})})]})})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-6",children:"Security"}),u.jsx("button",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 mb-3",children:"🔐 Change Password"}),u.jsx("button",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50",children:"🔑 Two-Factor Authentication"})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-6",children:"Account"}),u.jsx("button",{onClick:l,className:"w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 mb-3",children:"🚪 Logout"}),u.jsx("button",{onClick:()=>s(!0),className:"w-full px-4 py-3 border border-red-300 rounded-lg text-red-600 font-medium hover:bg-red-50",children:"🗑️ Delete Account"})]}),r&&u.jsxs("div",{className:"bg-red-50 rounded-xl shadow p-6 border border-red-200",children:[u.jsx("h3",{className:"text-lg font-bold text-red-800 mb-3",children:"⚠️ Delete Account"}),u.jsx("p",{className:"text-red-700 mb-6",children:"Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed."}),u.jsxs("div",{className:"flex gap-3",children:[u.jsx("button",{onClick:()=>s(!1),className:"flex-1 px-4 py-2 border border-red-300 rounded-lg text-red-600 font-medium hover:bg-red-100",children:"Cancel"}),u.jsx("button",{onClick:d,disabled:i,className:"flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed",children:i?"Deleting...":"Delete Permanently"})]})]})]})]})}function g6({user:t}){const[e,n]=A.useState(null),[r,s]=A.useState(!0);return A.useEffect(()=>{(async()=>{if(t)try{const o=await $l(Vn(Vt,"users",t.uid));o.exists()&&n(o.data())}catch(o){console.error("Error fetching user profile:",o)}s(!1)})()},[t]),r?u.jsx("div",{className:"flex items-center justify-center min-h-screen",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Loading dashboard..."})]})}):u.jsxs("div",{className:"flex min-h-screen bg-gray-50",children:[u.jsx(_F,{}),u.jsxs("div",{className:"flex-1 flex flex-col",children:[u.jsx(vF,{user:t,userProfile:e}),u.jsx("main",{className:"flex-1 p-6",children:u.jsxs(US,{children:[u.jsx(It,{path:"/",element:u.jsx(FS,{to:"/dashboard",replace:!0})}),u.jsx(It,{path:"/dashboard",element:u.jsx(wF,{user:t,userProfile:e})}),u.jsx(It,{path:"/orders",element:u.jsx(l6,{})}),u.jsx(It,{path:"/orders/new",element:u.jsx(d6,{user:t})}),u.jsx(It,{path:"/orders/:id",element:u.jsx(c6,{})}),u.jsx(It,{path:"/track",element:u.jsx(h6,{})}),u.jsx(It,{path:"/track-map",element:u.jsx(f6,{user:t})}),u.jsx(It,{path:"/profile",element:u.jsx(p6,{user:t,userProfile:e})}),u.jsx(It,{path:"/settings",element:u.jsx(m6,{})})]})})]})]})}function y6(){const t=Cs(),[e,n]=A.useState(""),[r,s]=A.useState(""),[i,o]=A.useState(!1),[a,l]=A.useState(""),[d,h]=A.useState(!1),f=async m=>{m.preventDefault(),o(!0),l(""),h(!1);try{const T=(await FP(Un,e,r)).user,k=await $l(Vn(Vt,"users",T.uid));if(!k.exists()){l("Account not found. Please contact support."),await Un.signOut(),o(!1);return}const R=k.data();if(R.role!=="customer"){l("This account is not a customer account. Please use the correct portal."),await Un.signOut(),o(!1);return}T.emailVerified||R.emailVerified===!0?T.emailVerified&&!R.emailVerified&&await rm(Vn(Vt,"users",T.uid),{emailVerified:!0,updatedAt:new Date}):(h(!0),T.emailVerified&&!R.emailVerified&&await rm(Vn(Vt,"users",T.uid),{emailVerified:!0,updatedAt:new Date})),console.log("Customer login successful for:",T.email),t("/dashboard")}catch(_){console.error("Login error:",_),_.code==="auth/invalid-credential"||_.code==="auth/user-not-found"||_.code==="auth/wrong-password"?l("Invalid email or password. Please try again."):_.code==="auth/too-many-requests"?l("Too many failed attempts. Please try again later."):_.code==="auth/user-disabled"?l("This account has been disabled. Please contact support."):_.code==="auth/network-request-failed"?l("Network error. Please check your internet connection."):l(_.message||"Login failed. Please try again.")}finally{o(!1)}};return u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-emerald-900 p-4",children:u.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[u.jsx("div",{className:"w-12 h-12 bg-green-600 rounded-full flex items-center justify-center",children:u.jsx("span",{className:"text-white font-bold text-xl",children:"P"})}),u.jsx("h1",{className:"text-3xl font-bold text-green-800",children:"PTROS Customer"})]}),u.jsx("p",{className:"text-gray-600",children:"Sign in to track deliveries and manage orders"})]}),d&&u.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6",children:u.jsxs("div",{className:"flex",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx("span",{className:"text-yellow-600",children:"⚠️"})}),u.jsxs("div",{className:"ml-3",children:[u.jsx("h4",{className:"text-sm font-medium text-yellow-800",children:"Verify Your Email"}),u.jsx("p",{className:"text-sm text-yellow-700 mt-1",children:"Please verify your email for full account security. Check your inbox for the verification email."})]})]})}),a&&u.jsx("div",{className:"bg-red-50 border-l-4 border-red-500 p-4 mb-6",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx("span",{className:"text-red-500",children:"⚠️"})}),u.jsx("div",{className:"ml-3",children:u.jsx("p",{className:"text-red-700 text-sm",children:a})})]})}),u.jsxs("form",{onSubmit:f,className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),u.jsx("input",{type:"email",placeholder:"your@email.com",value:e,onChange:m=>n(m.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition",required:!0,disabled:i})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),u.jsx("input",{type:"password",placeholder:"Enter your password",value:r,onChange:m=>s(m.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition",required:!0,minLength:6,disabled:i}),u.jsx("div",{className:"text-right mt-2",children:u.jsx(ai,{to:"/forgot-password",className:"text-sm text-green-600 hover:text-green-800",children:"Forgot password?"})})]}),u.jsx("button",{type:"submit",disabled:i,className:"w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center",children:i?u.jsxs(u.Fragment,{children:[u.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Signing in..."]}):"Sign In"})]}),u.jsxs("div",{className:"flex items-center my-8",children:[u.jsx("div",{className:"flex-grow border-t border-gray-300"}),u.jsx("span",{className:"mx-4 text-gray-500 text-sm",children:"OR"}),u.jsx("div",{className:"flex-grow border-t border-gray-300"})]}),u.jsxs("div",{className:"text-center",children:[u.jsx("p",{className:"text-gray-600 mb-4",children:"New to PTROS?"}),u.jsx(ai,{to:"/register",className:"inline-block w-full py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition",children:"Create Customer Account"})]}),u.jsxs("div",{className:"mt-8 p-4 bg-green-50 border border-green-200 rounded-lg",children:[u.jsx("h4",{className:"text-sm font-medium text-green-800 mb-2",children:"Customer Benefits"}),u.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[u.jsx("li",{children:"• Track deliveries in real-time"}),u.jsx("li",{children:"• View delivery history"}),u.jsx("li",{children:"• Get SMS/email notifications"}),u.jsx("li",{children:"• Manage your delivery addresses"})]})]}),u.jsx("div",{className:"text-center mt-8 pt-6 border-t border-gray-200",children:u.jsxs("p",{className:"text-sm text-gray-500",children:["Need help?"," ",u.jsx("a",{href:"mailto:support@ptros.co.ls",className:"text-green-600 hover:text-green-800",children:"Contact Support"})]})})]})})}function _6(){const t=Cs(),[e,n]=A.useState({email:"",password:"",confirmPassword:"",fullName:"",phone:"",whatsapp:"",homeAddress:"",city:"Maseru",acceptTerms:!1,marketingOptIn:!1}),[r,s]=A.useState(!1),[i,o]=A.useState(""),[a,l]=A.useState(1),[d,h]=A.useState(!1),f=w=>{const{name:C,value:O,type:M}=w.target;if(M==="checkbox"){const L=w.target.checked;n(x=>({...x,[C]:L}))}else n(L=>({...L,[C]:O}))},m=()=>e.fullName.trim()?e.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)?e.password.length<8?(o("Password must be at least 8 characters"),!1):e.password!==e.confirmPassword?(o("Passwords do not match"),!1):!0:(o("Valid email is required"),!1):(o("Full name is required"),!1),_=()=>e.phone.match(/^\+?[0-9\s\-]{10,}$/)?e.homeAddress.trim()?!0:(o("Home address is required"),!1):(o("Valid phone number is required"),!1),T=()=>{o(""),!(a===1&&!m())&&(a===2&&!_()||l(a+1))},k=()=>{o(""),l(a-1)},R=async w=>{if(w.preventDefault(),s(!0),o(""),!e.acceptTerms){o("You must accept the terms and conditions"),s(!1);return}try{const O=(await VP(Un,e.email,e.password)).user;await UP(O,{url:window.location.origin+"/dashboard",handleCodeInApp:!0}),await xL(Vn(Vt,"users",O.uid),{email:e.email,role:"customer",fullName:e.fullName,phone:e.phone,whatsapp:e.whatsapp||e.phone,homeAddress:e.homeAddress,city:e.city,country:"Lesotho",coordinates:null,addressBook:[{id:"home",name:"Home",address:e.homeAddress,city:e.city,isDefault:!0,type:"home",createdAt:new Date}],emailVerified:!1,isApproved:!0,status:"active",marketingOptIn:e.marketingOptIn,notificationPreferences:{email:!0,sms:!0,whatsapp:!!e.whatsapp,push:!0},totalOrders:0,totalSpent:0,loyaltyPoints:0,createdAt:new Date,updatedAt:new Date,registrationMethod:"website",lastLogin:null}),console.log("✅ Customer profile saved to Firestore"),h(!0)}catch(C){console.error("Registration error:",C),C.code==="auth/email-already-in-use"?o("This email is already registered. Please login or use a different email."):C.code==="auth/weak-password"?o("Password is too weak. Use at least 8 characters with letters and numbers."):C.code==="auth/invalid-email"?o("Invalid email address. Please enter a valid email."):C.code==="auth/operation-not-allowed"?o("Email/password accounts are not enabled. Please contact support."):o(C.message||"Registration failed. Please try again.")}finally{s(!1)}},N=["Maseru","Teyateyaneng","Mafeteng","Hlotse","Mohale's Hoek","Maputsoe","Qacha's Nek","Quthing","Butha-Buthe","Mokhotlong","Thaba-Tseka","Semonkong","Roma"];return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4",children:u.jsxs("div",{className:"max-w-4xl mx-auto",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsx(ai,{to:"/",className:"inline-block mb-4",children:u.jsxs("div",{className:"flex items-center justify-center gap-2",children:[u.jsx("div",{className:"w-10 h-10 bg-green-600 rounded-full flex items-center justify-center",children:u.jsx("span",{className:"text-white font-bold text-xl",children:"P"})}),u.jsx("h1",{className:"text-3xl font-bold text-green-800",children:"PTROS Customer"})]})}),u.jsx("h2",{className:"text-2xl font-semibold text-gray-700",children:"Create Your Account"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Register to track deliveries and manage your orders"})]}),u.jsxs("div",{className:"mb-8",children:[u.jsxs("div",{className:"flex justify-between items-center mb-2",children:[u.jsx("div",{className:`text-sm font-medium ${a>=1?"text-green-600":"text-gray-400"}`,children:"1. Account"}),u.jsx("div",{className:`text-sm font-medium ${a>=2?"text-green-600":"text-gray-400"}`,children:"2. Contact & Address"}),u.jsx("div",{className:`text-sm font-medium ${a>=3?"text-green-600":"text-gray-400"}`,children:"3. Complete"})]}),u.jsx("div",{className:"h-2 bg-gray-200 rounded-full",children:u.jsx("div",{className:"h-full bg-green-600 rounded-full transition-all duration-300",style:{width:`${(a-1)*50}%`}})})]}),u.jsx("div",{className:"bg-white rounded-2xl shadow-xl overflow-hidden",children:d?u.jsxs("div",{className:"p-12 text-center",children:[u.jsx("div",{className:"w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:u.jsx("span",{className:"text-green-600 text-4xl",children:"✓"})}),u.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Account Created Successfully!"}),u.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6 text-left max-w-md mx-auto",children:[u.jsxs("div",{className:"flex items-start mb-4",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx("span",{className:"text-blue-500 text-xl",children:"📧"})}),u.jsxs("div",{className:"ml-3",children:[u.jsx("h4",{className:"font-medium text-blue-800 mb-1",children:"Check Your Email"}),u.jsxs("p",{className:"text-sm text-blue-700",children:["We've sent a verification email to"," ",u.jsx("span",{className:"font-semibold",children:e.email}),"."]})]})]}),u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx("span",{className:"text-green-500 text-xl",children:"✅"})}),u.jsxs("div",{className:"ml-3",children:[u.jsx("h4",{className:"font-medium text-green-800 mb-1",children:"You Can Login Now"}),u.jsx("p",{className:"text-sm text-green-700",children:"Your account is active! You can login immediately. Verify your email later for full features."})]})]})]}),u.jsxs("div",{className:"space-y-4 max-w-md mx-auto",children:[u.jsx("button",{onClick:()=>t("/login"),className:"w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium",children:"Go to Login"}),u.jsx("div",{className:"text-sm text-gray-500",children:u.jsx("p",{children:"Need help? Contact support: support@ptros.co.ls"})})]})]}):u.jsxs(u.Fragment,{children:[i&&u.jsx("div",{className:"bg-red-50 border-l-4 border-red-500 p-4 m-6",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx("span",{className:"text-red-500",children:"⚠️"})}),u.jsx("div",{className:"ml-3",children:u.jsx("p",{className:"text-red-700",children:i})})]})}),u.jsxs("form",{onSubmit:R,children:[a===1&&u.jsxs("div",{className:"p-8",children:[u.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Account Information"}),u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name *"}),u.jsx("input",{type:"text",name:"fullName",value:e.fullName,onChange:f,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",placeholder:"John Doe",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address *"}),u.jsx("input",{type:"email",name:"email",value:e.email,onChange:f,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",placeholder:"john@example.com",required:!0}),u.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"We'll send a verification email to this address"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password *"}),u.jsx("input",{type:"password",name:"password",value:e.password,onChange:f,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",placeholder:"At least 8 characters",minLength:8,required:!0}),u.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Minimum 8 characters"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Confirm Password *"}),u.jsx("input",{type:"password",name:"confirmPassword",value:e.confirmPassword,onChange:f,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",placeholder:"Confirm your password",required:!0})]})]})]}),u.jsx("div",{className:"mt-8 flex justify-end",children:u.jsx("button",{type:"button",onClick:T,className:"px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition",children:"Next: Contact & Address →"})})]}),a===2&&u.jsxs("div",{className:"p-8",children:[u.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Contact Details & Home Address"}),u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number *"}),u.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:f,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",placeholder:"+266 5000 0000",required:!0}),u.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"For delivery notifications"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"WhatsApp Number (Optional)"}),u.jsx("input",{type:"tel",name:"whatsapp",value:e.whatsapp,onChange:f,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",placeholder:"+266 5000 0000"}),u.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"For WhatsApp delivery updates"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"City *"}),u.jsx("select",{name:"city",value:e.city,onChange:f,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",required:!0,children:N.map(w=>u.jsx("option",{value:w,children:w},w))})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Home Address *"}),u.jsx("span",{className:"text-xs text-gray-500",children:"Your permanent address"})]}),u.jsx("textarea",{name:"homeAddress",value:e.homeAddress,onChange:f,rows:3,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",placeholder:"Your complete home address (house number, street, area)",required:!0}),u.jsxs("div",{className:"mt-2 text-sm text-gray-600",children:[u.jsx("p",{className:"font-medium mb-1",children:"ℹ️ Important:"}),u.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[u.jsxs("li",{children:["This is your ",u.jsx("strong",{children:"home address"})," for your profile"]}),u.jsxs("li",{children:["You can add ",u.jsx("strong",{children:"delivery addresses"})," ","later when creating orders"]}),u.jsx("li",{children:"Delivery addresses can be pinned on a map for accuracy"})]})]})]}),u.jsx("div",{className:"space-y-4",children:u.jsxs("div",{className:"flex items-start",children:[u.jsx("input",{type:"checkbox",id:"marketingOptIn",name:"marketingOptIn",checked:e.marketingOptIn,onChange:f,className:"mt-1 mr-3"}),u.jsx("label",{htmlFor:"marketingOptIn",className:"text-sm text-gray-700",children:"I'd like to receive special offers, promotions, and delivery updates via email and SMS"})]})})]}),u.jsxs("div",{className:"mt-8 flex justify-between",children:[u.jsx("button",{type:"button",onClick:k,className:"px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium",children:"← Back"}),u.jsx("button",{type:"button",onClick:T,className:"px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium",children:"Next: Review & Create →"})]})]}),a===3&&u.jsxs("div",{className:"p-8",children:[u.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Review Your Information"}),u.jsxs("div",{className:"bg-gray-50 rounded-xl p-6 mb-8",children:[u.jsx("h4",{className:"font-semibold text-lg mb-4",children:"Account Details"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Full Name"}),u.jsx("p",{className:"font-medium",children:e.fullName})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Email"}),u.jsx("p",{className:"font-medium",children:e.email})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Phone"}),u.jsx("p",{className:"font-medium",children:e.phone})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"City"}),u.jsx("p",{className:"font-medium",children:e.city})]}),u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Home Address"}),u.jsx("p",{className:"font-medium",children:e.homeAddress})]})]})]}),u.jsx("div",{className:"mb-8",children:u.jsxs("div",{className:"flex items-start mb-4",children:[u.jsx("input",{type:"checkbox",id:"acceptTerms",name:"acceptTerms",checked:e.acceptTerms,onChange:f,className:"mt-1 mr-3",required:!0}),u.jsxs("label",{htmlFor:"acceptTerms",className:"text-sm text-gray-700",children:["I agree to the PTROS Terms of Service and Privacy Policy. I understand that:",u.jsxs("ul",{className:"list-disc pl-5 mt-2 space-y-1 text-gray-600",children:[u.jsx("li",{children:"My account will be active immediately"}),u.jsx("li",{children:"I should verify my email for security"}),u.jsx("li",{children:"Delivery addresses will be selected per order"}),u.jsx("li",{children:"PTROS will process my data according to the Privacy Policy"})]})]})]})}),u.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4 mb-6",children:u.jsxs("div",{className:"flex",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx("span",{className:"text-green-600",children:"✓"})}),u.jsxs("div",{className:"ml-3",children:[u.jsx("h4",{className:"text-sm font-medium text-green-800",children:"Instant Access"}),u.jsxs("div",{className:"text-sm text-green-700 mt-1",children:[u.jsx("p",{children:"• Your account will be active immediately"}),u.jsx("p",{children:"• You can login right after registration"}),u.jsx("p",{children:"• Verify email later for enhanced security"})]})]})]})}),u.jsxs("div",{className:"mt-8 flex justify-between",children:[u.jsx("button",{type:"button",onClick:k,className:"px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium",children:"← Back"}),u.jsx("button",{type:"submit",disabled:r||!e.acceptTerms,className:"px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed",children:r?u.jsxs("span",{className:"flex items-center",children:[u.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Creating Account..."]}):"Create Account & Send Verification"})]})]})]})]})}),u.jsxs("div",{className:"text-center mt-8",children:[u.jsxs("p",{className:"text-gray-600",children:["Already have an account?"," ",u.jsx(ai,{to:"/login",className:"text-green-600 hover:text-green-800 font-medium",children:"Login here"})]}),u.jsx("p",{className:"text-sm text-gray-500 mt-4",children:"Need help? Contact PTROS Support: support@ptros.co.ls or +266 2222 3333"})]})]})})}const v6="customer";function w6(){const[t,e]=A.useState(!0),[n,r]=A.useState(null),[s,i]=A.useState(null);return A.useEffect(()=>{const o=zP(Un,async a=>{var l;if(a){const d=await $l(Vn(Vt,"users",a.uid)),h=d.exists()?(l=d.data())==null?void 0:l.role:null;r(a),i(h)}else r(null),i(null);e(!1)});return()=>o()},[]),t?u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-700",children:"Loading PTROS Customer..."})]})}):u.jsxs(uF,{children:[u.jsx(yF,{children:u.jsx(US,{children:n?u.jsx(u.Fragment,{children:s===v6?u.jsx(It,{path:"/*",element:u.jsx(g6,{user:n})}):u.jsx(It,{path:"*",element:u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-red-50",children:u.jsxs("div",{className:"text-center p-10",children:[u.jsx("h1",{className:"text-4xl font-bold text-red-600 mb-4",children:"Access Denied"}),u.jsx("p",{className:"text-xl mb-4",children:"This portal is for customers only."}),u.jsxs("p",{className:"text-lg",children:["You are logged in as: ",u.jsx("strong",{children:s})]}),u.jsx("button",{onClick:()=>Un.signOut(),className:"mt-8 px-8 py-4 bg-red-600 text-white rounded-lg text-lg hover:bg-red-700",children:"Logout"})]})})})}):u.jsxs(u.Fragment,{children:[u.jsx(It,{path:"/login",element:u.jsx(y6,{})}),u.jsx(It,{path:"/register",element:u.jsx(_6,{})}),u.jsx(It,{path:"*",element:u.jsx(FS,{to:"/login",replace:!0})})]})})}),u.jsx(Ss,{})]})}Lf.createRoot(document.getElementById("root")).render(u.jsx(Lx.StrictMode,{children:u.jsx(w6,{})}));
