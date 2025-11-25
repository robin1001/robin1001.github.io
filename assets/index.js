(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();var tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Va(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yp={exports:{}},bl={},vp={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),jh=Symbol.for("react.portal"),Uh=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Wh=Symbol.for("react.profiler"),Vh=Symbol.for("react.provider"),qh=Symbol.for("react.context"),Gh=Symbol.for("react.forward_ref"),Kh=Symbol.for("react.suspense"),Qh=Symbol.for("react.memo"),Xh=Symbol.for("react.lazy"),fu=Symbol.iterator;function Yh(e){return e===null||typeof e!="object"?null:(e=fu&&e[fu]||e["@@iterator"],typeof e=="function"?e:null)}var wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xp=Object.assign,kp={};function or(e,n,t){this.props=e,this.context=n,this.refs=kp,this.updater=t||wp}or.prototype.isReactComponent={};or.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _p(){}_p.prototype=or.prototype;function qa(e,n,t){this.props=e,this.context=n,this.refs=kp,this.updater=t||wp}var Ga=qa.prototype=new _p;Ga.constructor=qa;xp(Ga,or.prototype);Ga.isPureReactComponent=!0;var du=Array.isArray,Sp=Object.prototype.hasOwnProperty,Ka={current:null},Cp={key:!0,ref:!0,__self:!0,__source:!0};function Ep(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Sp.call(n,r)&&!Cp.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ai,type:e,key:l,ref:o,props:i,_owner:Ka.current}}function Jh(e,n){return{$$typeof:ai,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Qa(e){return typeof e=="object"&&e!==null&&e.$$typeof===ai}function Zh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var hu=/\/+/g;function Jl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Zh(""+e.key):n.toString(36)}function $i(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ai:case jh:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Jl(o,0):r,du(i)?(t="",e!=null&&(t=e.replace(hu,"$&/")+"/"),$i(i,n,t,"",function(u){return u})):i!=null&&(Qa(i)&&(i=Jh(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(hu,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",du(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Jl(l,a);o+=$i(l,n,t,s,i)}else if(s=Yh(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Jl(l,a++),o+=$i(l,n,t,s,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function vi(e,n,t){if(e==null)return e;var r=[],i=0;return $i(e,r,"","",function(l){return n.call(t,l,i++)}),r}function em(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},Bi={transition:null},nm={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Bi,ReactCurrentOwner:Ka};function Pp(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:vi,forEach:function(e,n,t){vi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return vi(e,function(){n++}),n},toArray:function(e){return vi(e,function(n){return n})||[]},only:function(e){if(!Qa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=or;H.Fragment=Uh;H.Profiler=Wh;H.PureComponent=qa;H.StrictMode=Hh;H.Suspense=Kh;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nm;H.act=Pp;H.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xp({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=Ka.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)Sp.call(n,s)&&!Cp.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ai,type:e.type,key:i,ref:l,props:r,_owner:o}};H.createContext=function(e){return e={$$typeof:qh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vh,_context:e},e.Consumer=e};H.createElement=Ep;H.createFactory=function(e){var n=Ep.bind(null,e);return n.type=e,n};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Gh,render:e}};H.isValidElement=Qa;H.lazy=function(e){return{$$typeof:Xh,_payload:{_status:-1,_result:e},_init:em}};H.memo=function(e,n){return{$$typeof:Qh,type:e,compare:n===void 0?null:n}};H.startTransition=function(e){var n=Bi.transition;Bi.transition={};try{e()}finally{Bi.transition=n}};H.unstable_act=Pp;H.useCallback=function(e,n){return Me.current.useCallback(e,n)};H.useContext=function(e){return Me.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};H.useEffect=function(e,n){return Me.current.useEffect(e,n)};H.useId=function(){return Me.current.useId()};H.useImperativeHandle=function(e,n,t){return Me.current.useImperativeHandle(e,n,t)};H.useInsertionEffect=function(e,n){return Me.current.useInsertionEffect(e,n)};H.useLayoutEffect=function(e,n){return Me.current.useLayoutEffect(e,n)};H.useMemo=function(e,n){return Me.current.useMemo(e,n)};H.useReducer=function(e,n,t){return Me.current.useReducer(e,n,t)};H.useRef=function(e){return Me.current.useRef(e)};H.useState=function(e){return Me.current.useState(e)};H.useSyncExternalStore=function(e,n,t){return Me.current.useSyncExternalStore(e,n,t)};H.useTransition=function(){return Me.current.useTransition()};H.version="18.3.1";vp.exports=H;var S=vp.exports;const tm=Va(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm=S,im=Symbol.for("react.element"),lm=Symbol.for("react.fragment"),om=Object.prototype.hasOwnProperty,am=rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sm={key:!0,ref:!0,__self:!0,__source:!0};function Tp(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)om.call(n,r)&&!sm.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:im,type:e,key:l,ref:o,props:i,_owner:am.current}}bl.Fragment=lm;bl.jsx=Tp;bl.jsxs=Tp;yp.exports=bl;var P=yp.exports,$o={},Np={exports:{}},Qe={},Ip={exports:{}},bp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(F,$){var y=F.length;F.push($);e:for(;0<y;){var q=y-1>>>1,Y=F[q];if(0<i(Y,$))F[q]=$,F[y]=Y,y=q;else break e}}function t(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var $=F[0],y=F.pop();if(y!==$){F[0]=y;e:for(var q=0,Y=F.length,w=Y>>>1;q<w;){var ye=2*(q+1)-1,ln=F[ye],te=ye+1,mn=F[te];if(0>i(ln,y))te<Y&&0>i(mn,ln)?(F[q]=mn,F[te]=y,q=te):(F[q]=ln,F[ye]=y,q=ye);else if(te<Y&&0>i(mn,y))F[q]=mn,F[te]=y,q=te;else break e}}return $}function i(F,$){var y=F.sortIndex-$.sortIndex;return y!==0?y:F.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],u=[],c=1,p=null,d=3,f=!1,v=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(F){for(var $=t(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=F)r(u),$.sortIndex=$.expirationTime,n(s,$);else break;$=t(u)}}function _(F){if(x=!1,m(F),!v)if(t(s)!==null)v=!0,he(T);else{var $=t(u);$!==null&&fe(_,$.startTime-F)}}function T(F,$){v=!1,x&&(x=!1,h(L),L=-1),f=!0;var y=d;try{for(m($),p=t(s);p!==null&&(!(p.expirationTime>$)||F&&!A());){var q=p.callback;if(typeof q=="function"){p.callback=null,d=p.priorityLevel;var Y=q(p.expirationTime<=$);$=e.unstable_now(),typeof Y=="function"?p.callback=Y:p===t(s)&&r(s),m($)}else r(s);p=t(s)}if(p!==null)var w=!0;else{var ye=t(u);ye!==null&&fe(_,ye.startTime-$),w=!1}return w}finally{p=null,d=y,f=!1}}var k=!1,I=null,L=-1,O=5,z=-1;function A(){return!(e.unstable_now()-z<O)}function D(){if(I!==null){var F=e.unstable_now();z=F;var $=!0;try{$=I(!0,F)}finally{$?Q():(k=!1,I=null)}}else k=!1}var Q;if(typeof g=="function")Q=function(){g(D)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,W=oe.port2;oe.port1.onmessage=D,Q=function(){W.postMessage(null)}}else Q=function(){C(D,0)};function he(F){I=F,k||(k=!0,Q())}function fe(F,$){L=C(function(){F(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){v||f||(v=!0,he(T))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(F){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var y=d;d=$;try{return F()}finally{d=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,$){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var y=d;d=F;try{return $()}finally{d=y}},e.unstable_scheduleCallback=function(F,$,y){var q=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?q+y:q):y=q,F){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=y+Y,F={id:c++,callback:$,priorityLevel:F,startTime:y,expirationTime:Y,sortIndex:-1},y>q?(F.sortIndex=y,n(u,F),t(s)===null&&F===t(u)&&(x?(h(L),L=-1):x=!0,fe(_,y-q))):(F.sortIndex=Y,n(s,F),v||f||(v=!0,he(T))),F},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(F){var $=d;return function(){var y=d;d=$;try{return F.apply(this,arguments)}finally{d=y}}}})(bp);Ip.exports=bp;var um=Ip.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm=S,Ke=um;function N(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lp=new Set,Ur={};function Et(e,n){Zt(e,n),Zt(e+"Capture",n)}function Zt(e,n){for(Ur[e]=n,e=0;e<n.length;e++)Lp.add(n[e])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bo=Object.prototype.hasOwnProperty,pm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mu={},gu={};function fm(e){return Bo.call(gu,e)?!0:Bo.call(mu,e)?!1:pm.test(e)?gu[e]=!0:(mu[e]=!0,!1)}function dm(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hm(e,n,t,r){if(n===null||typeof n>"u"||dm(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Fe(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ce[n]=new Fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xa=/[\-:]([a-z])/g;function Ya(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Xa,Ya);Ce[n]=new Fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Xa,Ya);Ce[n]=new Fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Xa,Ya);Ce[n]=new Fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ja(e,n,t,r){var i=Ce.hasOwnProperty(n)?Ce[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(hm(n,t,i,r)&&(t=null),r||i===null?fm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var $n=cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wi=Symbol.for("react.element"),Ft=Symbol.for("react.portal"),zt=Symbol.for("react.fragment"),Za=Symbol.for("react.strict_mode"),jo=Symbol.for("react.profiler"),Mp=Symbol.for("react.provider"),Fp=Symbol.for("react.context"),es=Symbol.for("react.forward_ref"),Uo=Symbol.for("react.suspense"),Ho=Symbol.for("react.suspense_list"),ns=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),zp=Symbol.for("react.offscreen"),yu=Symbol.iterator;function mr(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Zl;function Pr(e){if(Zl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Zl=n&&n[1]||""}return`
`+Zl+e}var eo=!1;function no(e,n){if(!e||eo)return"";eo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{eo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Pr(e):""}function mm(e){switch(e.tag){case 5:return Pr(e.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return e=no(e.type,!1),e;case 11:return e=no(e.type.render,!1),e;case 1:return e=no(e.type,!0),e;default:return""}}function Wo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zt:return"Fragment";case Ft:return"Portal";case jo:return"Profiler";case Za:return"StrictMode";case Uo:return"Suspense";case Ho:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fp:return(e.displayName||"Context")+".Consumer";case Mp:return(e._context.displayName||"Context")+".Provider";case es:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ns:return n=e.displayName||null,n!==null?n:Wo(e.type)||"Memo";case Hn:n=e._payload,e=e._init;try{return Wo(e(n))}catch{}}return null}function gm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wo(n);case 8:return n===Za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rp(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ym(e){var n=Rp(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xi(e){e._valueTracker||(e._valueTracker=ym(e))}function Ap(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Rp(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vo(e,n){var t=n.checked;return ce({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function vu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=rt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Op(e,n){n=n.checked,n!=null&&Ja(e,"checked",n,!1)}function qo(e,n){Op(e,n);var t=rt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Go(e,n.type,t):n.hasOwnProperty("defaultValue")&&Go(e,n.type,rt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function wu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Go(e,n,t){(n!=="number"||rl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Tr=Array.isArray;function Vt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+rt(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ko(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(N(91));return ce({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(N(92));if(Tr(t)){if(1<t.length)throw Error(N(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:rt(t)}}function Dp(e,n){var t=rt(n.value),r=rt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ku(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function $p(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?$p(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ki,Bp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ki=ki||document.createElement("div"),ki.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ki.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Hr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vm=["Webkit","ms","Moz","O"];Object.keys(br).forEach(function(e){vm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),br[n]=br[e]})});function jp(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||br.hasOwnProperty(e)&&br[e]?(""+n).trim():n+"px"}function Up(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=jp(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var wm=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xo(e,n){if(n){if(wm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(N(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(N(61))}if(n.style!=null&&typeof n.style!="object")throw Error(N(62))}}function Yo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jo=null;function ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zo=null,qt=null,Gt=null;function _u(e){if(e=ci(e)){if(typeof Zo!="function")throw Error(N(280));var n=e.stateNode;n&&(n=Rl(n),Zo(e.stateNode,e.type,n))}}function Hp(e){qt?Gt?Gt.push(e):Gt=[e]:qt=e}function Wp(){if(qt){var e=qt,n=Gt;if(Gt=qt=null,_u(e),n)for(e=0;e<n.length;e++)_u(n[e])}}function Vp(e,n){return e(n)}function qp(){}var to=!1;function Gp(e,n,t){if(to)return e(n,t);to=!0;try{return Vp(e,n,t)}finally{to=!1,(qt!==null||Gt!==null)&&(qp(),Wp())}}function Wr(e,n){var t=e.stateNode;if(t===null)return null;var r=Rl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(N(231,n,typeof t));return t}var ea=!1;if(zn)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){ea=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{ea=!1}function xm(e,n,t,r,i,l,o,a,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var Lr=!1,il=null,ll=!1,na=null,km={onError:function(e){Lr=!0,il=e}};function _m(e,n,t,r,i,l,o,a,s){Lr=!1,il=null,xm.apply(km,arguments)}function Sm(e,n,t,r,i,l,o,a,s){if(_m.apply(this,arguments),Lr){if(Lr){var u=il;Lr=!1,il=null}else throw Error(N(198));ll||(ll=!0,na=u)}}function Pt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Kp(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Su(e){if(Pt(e)!==e)throw Error(N(188))}function Cm(e){var n=e.alternate;if(!n){if(n=Pt(e),n===null)throw Error(N(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Su(i),e;if(l===r)return Su(i),n;l=l.sibling}throw Error(N(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(t.alternate!==r)throw Error(N(190))}if(t.tag!==3)throw Error(N(188));return t.stateNode.current===t?e:n}function Qp(e){return e=Cm(e),e!==null?Xp(e):null}function Xp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Xp(e);if(n!==null)return n;e=e.sibling}return null}var Yp=Ke.unstable_scheduleCallback,Cu=Ke.unstable_cancelCallback,Em=Ke.unstable_shouldYield,Pm=Ke.unstable_requestPaint,de=Ke.unstable_now,Tm=Ke.unstable_getCurrentPriorityLevel,rs=Ke.unstable_ImmediatePriority,Jp=Ke.unstable_UserBlockingPriority,ol=Ke.unstable_NormalPriority,Nm=Ke.unstable_LowPriority,Zp=Ke.unstable_IdlePriority,Ll=null,kn=null;function Im(e){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(Ll,e,void 0,(e.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:Mm,bm=Math.log,Lm=Math.LN2;function Mm(e){return e>>>=0,e===0?32:31-(bm(e)/Lm|0)|0}var _i=64,Si=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function al(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=Nr(a):(l&=o,l!==0&&(r=Nr(l)))}else o=t&~i,o!==0?r=Nr(o):l!==0&&(r=Nr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-pn(n),i=1<<t,r|=e[t],n&=~i;return r}function Fm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zm(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-pn(l),a=1<<o,s=i[o];s===-1?(!(a&t)||a&r)&&(i[o]=Fm(a,n)):s<=n&&(e.expiredLanes|=a),l&=~a}}function ta(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ef(){var e=_i;return _i<<=1,!(_i&4194240)&&(_i=64),e}function ro(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function si(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-pn(n),e[n]=t}function Rm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-pn(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function is(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-pn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var X=0;function nf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tf,ls,rf,lf,of,ra=!1,Ci=[],Qn=null,Xn=null,Yn=null,Vr=new Map,qr=new Map,Vn=[],Am="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eu(e,n){switch(e){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":Vr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(n.pointerId)}}function yr(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=ci(n),n!==null&&ls(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Om(e,n,t,r,i){switch(n){case"focusin":return Qn=yr(Qn,e,n,t,r,i),!0;case"dragenter":return Xn=yr(Xn,e,n,t,r,i),!0;case"mouseover":return Yn=yr(Yn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Vr.set(l,yr(Vr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,qr.set(l,yr(qr.get(l)||null,e,n,t,r,i)),!0}return!1}function af(e){var n=ht(e.target);if(n!==null){var t=Pt(n);if(t!==null){if(n=t.tag,n===13){if(n=Kp(t),n!==null){e.blockedOn=n,of(e.priority,function(){rf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ji(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ia(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Jo=r,t.target.dispatchEvent(r),Jo=null}else return n=ci(t),n!==null&&ls(n),e.blockedOn=t,!1;n.shift()}return!0}function Pu(e,n,t){ji(e)&&t.delete(n)}function Dm(){ra=!1,Qn!==null&&ji(Qn)&&(Qn=null),Xn!==null&&ji(Xn)&&(Xn=null),Yn!==null&&ji(Yn)&&(Yn=null),Vr.forEach(Pu),qr.forEach(Pu)}function vr(e,n){e.blockedOn===n&&(e.blockedOn=null,ra||(ra=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Dm)))}function Gr(e){function n(i){return vr(i,e)}if(0<Ci.length){vr(Ci[0],e);for(var t=1;t<Ci.length;t++){var r=Ci[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Qn!==null&&vr(Qn,e),Xn!==null&&vr(Xn,e),Yn!==null&&vr(Yn,e),Vr.forEach(n),qr.forEach(n),t=0;t<Vn.length;t++)r=Vn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vn.length&&(t=Vn[0],t.blockedOn===null);)af(t),t.blockedOn===null&&Vn.shift()}var Kt=$n.ReactCurrentBatchConfig,sl=!0;function $m(e,n,t,r){var i=X,l=Kt.transition;Kt.transition=null;try{X=1,os(e,n,t,r)}finally{X=i,Kt.transition=l}}function Bm(e,n,t,r){var i=X,l=Kt.transition;Kt.transition=null;try{X=4,os(e,n,t,r)}finally{X=i,Kt.transition=l}}function os(e,n,t,r){if(sl){var i=ia(e,n,t,r);if(i===null)ho(e,n,r,ul,t),Eu(e,r);else if(Om(i,e,n,t,r))r.stopPropagation();else if(Eu(e,r),n&4&&-1<Am.indexOf(e)){for(;i!==null;){var l=ci(i);if(l!==null&&tf(l),l=ia(e,n,t,r),l===null&&ho(e,n,r,ul,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else ho(e,n,r,null,t)}}var ul=null;function ia(e,n,t,r){if(ul=null,e=ts(r),e=ht(e),e!==null)if(n=Pt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Kp(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ul=e,null}function sf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tm()){case rs:return 1;case Jp:return 4;case ol:case Nm:return 16;case Zp:return 536870912;default:return 16}default:return 16}}var Gn=null,as=null,Ui=null;function uf(){if(Ui)return Ui;var e,n=as,t=n.length,r,i="value"in Gn?Gn.value:Gn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Ui=i.slice(e,1<r?1-r:void 0)}function Hi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ei(){return!0}function Tu(){return!1}function Xe(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ei:Tu,this.isPropagationStopped=Tu,this}return ce(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ei)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ei)},persist:function(){},isPersistent:Ei}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ss=Xe(ar),ui=ce({},ar,{view:0,detail:0}),jm=Xe(ui),io,lo,wr,Ml=ce({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(io=e.screenX-wr.screenX,lo=e.screenY-wr.screenY):lo=io=0,wr=e),io)},movementY:function(e){return"movementY"in e?e.movementY:lo}}),Nu=Xe(Ml),Um=ce({},Ml,{dataTransfer:0}),Hm=Xe(Um),Wm=ce({},ui,{relatedTarget:0}),oo=Xe(Wm),Vm=ce({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),qm=Xe(Vm),Gm=ce({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Km=Xe(Gm),Qm=ce({},ar,{data:0}),Iu=Xe(Qm),Xm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ym={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Jm[e])?!!n[e]:!1}function us(){return Zm}var eg=ce({},ui,{key:function(e){if(e.key){var n=Xm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ym[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ng=Xe(eg),tg=ce({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bu=Xe(tg),rg=ce({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),ig=Xe(rg),lg=ce({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),og=Xe(lg),ag=ce({},Ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sg=Xe(ag),ug=[9,13,27,32],cs=zn&&"CompositionEvent"in window,Mr=null;zn&&"documentMode"in document&&(Mr=document.documentMode);var cg=zn&&"TextEvent"in window&&!Mr,cf=zn&&(!cs||Mr&&8<Mr&&11>=Mr),Lu=" ",Mu=!1;function pf(e,n){switch(e){case"keyup":return ug.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function pg(e,n){switch(e){case"compositionend":return ff(n);case"keypress":return n.which!==32?null:(Mu=!0,Lu);case"textInput":return e=n.data,e===Lu&&Mu?null:e;default:return null}}function fg(e,n){if(Rt)return e==="compositionend"||!cs&&pf(e,n)?(e=uf(),Ui=as=Gn=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cf&&n.locale!=="ko"?null:n.data;default:return null}}var dg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!dg[e.type]:n==="textarea"}function df(e,n,t,r){Hp(r),n=cl(n,"onChange"),0<n.length&&(t=new ss("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Fr=null,Kr=null;function hg(e){Cf(e,0)}function Fl(e){var n=Dt(e);if(Ap(n))return e}function mg(e,n){if(e==="change")return n}var hf=!1;if(zn){var ao;if(zn){var so="oninput"in document;if(!so){var zu=document.createElement("div");zu.setAttribute("oninput","return;"),so=typeof zu.oninput=="function"}ao=so}else ao=!1;hf=ao&&(!document.documentMode||9<document.documentMode)}function Ru(){Fr&&(Fr.detachEvent("onpropertychange",mf),Kr=Fr=null)}function mf(e){if(e.propertyName==="value"&&Fl(Kr)){var n=[];df(n,Kr,e,ts(e)),Gp(hg,n)}}function gg(e,n,t){e==="focusin"?(Ru(),Fr=n,Kr=t,Fr.attachEvent("onpropertychange",mf)):e==="focusout"&&Ru()}function yg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fl(Kr)}function vg(e,n){if(e==="click")return Fl(n)}function wg(e,n){if(e==="input"||e==="change")return Fl(n)}function xg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var dn=typeof Object.is=="function"?Object.is:xg;function Qr(e,n){if(dn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Bo.call(n,i)||!dn(e[i],n[i]))return!1}return!0}function Au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ou(e,n){var t=Au(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Au(t)}}function gf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yf(){for(var e=window,n=rl();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=rl(e.document)}return n}function ps(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function kg(e){var n=yf(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&gf(t.ownerDocument.documentElement,t)){if(r!==null&&ps(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ou(t,l);var o=Ou(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _g=zn&&"documentMode"in document&&11>=document.documentMode,At=null,la=null,zr=null,oa=!1;function Du(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;oa||At==null||At!==rl(r)||(r=At,"selectionStart"in r&&ps(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Qr(zr,r)||(zr=r,r=cl(la,"onSelect"),0<r.length&&(n=new ss("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=At)))}function Pi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ot={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionend:Pi("Transition","TransitionEnd")},uo={},vf={};zn&&(vf=document.createElement("div").style,"AnimationEvent"in window||(delete Ot.animationend.animation,delete Ot.animationiteration.animation,delete Ot.animationstart.animation),"TransitionEvent"in window||delete Ot.transitionend.transition);function zl(e){if(uo[e])return uo[e];if(!Ot[e])return e;var n=Ot[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in vf)return uo[e]=n[t];return e}var wf=zl("animationend"),xf=zl("animationiteration"),kf=zl("animationstart"),_f=zl("transitionend"),Sf=new Map,$u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lt(e,n){Sf.set(e,n),Et(n,[e])}for(var co=0;co<$u.length;co++){var po=$u[co],Sg=po.toLowerCase(),Cg=po[0].toUpperCase()+po.slice(1);lt(Sg,"on"+Cg)}lt(wf,"onAnimationEnd");lt(xf,"onAnimationIteration");lt(kf,"onAnimationStart");lt("dblclick","onDoubleClick");lt("focusin","onFocus");lt("focusout","onBlur");lt(_f,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Et("onBeforeInput",["compositionend","keypress","textInput","paste"]);Et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function Bu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Sm(r,n,void 0,e),e.currentTarget=null}function Cf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;Bu(i,a,u),l=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;Bu(i,a,u),l=s}}}if(ll)throw e=na,ll=!1,na=null,e}function re(e,n){var t=n[pa];t===void 0&&(t=n[pa]=new Set);var r=e+"__bubble";t.has(r)||(Ef(n,e,2,!1),t.add(r))}function fo(e,n,t){var r=0;n&&(r|=4),Ef(t,e,r,n)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[Ti]){e[Ti]=!0,Lp.forEach(function(t){t!=="selectionchange"&&(Eg.has(t)||fo(t,!1,e),fo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ti]||(n[Ti]=!0,fo("selectionchange",!1,n))}}function Ef(e,n,t,r){switch(sf(n)){case 1:var i=$m;break;case 4:i=Bm;break;default:i=os}t=i.bind(null,n,t,e),i=void 0,!ea||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function ho(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ht(a),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}Gp(function(){var u=l,c=ts(t),p=[];e:{var d=Sf.get(e);if(d!==void 0){var f=ss,v=e;switch(e){case"keypress":if(Hi(t)===0)break e;case"keydown":case"keyup":f=ng;break;case"focusin":v="focus",f=oo;break;case"focusout":v="blur",f=oo;break;case"beforeblur":case"afterblur":f=oo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=ig;break;case wf:case xf:case kf:f=qm;break;case _f:f=og;break;case"scroll":f=jm;break;case"wheel":f=sg;break;case"copy":case"cut":case"paste":f=Km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=bu}var x=(n&4)!==0,C=!x&&e==="scroll",h=x?d!==null?d+"Capture":null:d;x=[];for(var g=u,m;g!==null;){m=g;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,h!==null&&(_=Wr(g,h),_!=null&&x.push(Yr(g,_,m)))),C)break;g=g.return}0<x.length&&(d=new f(d,v,null,t,c),p.push({event:d,listeners:x}))}}if(!(n&7)){e:{if(d=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",d&&t!==Jo&&(v=t.relatedTarget||t.fromElement)&&(ht(v)||v[Rn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(v=t.relatedTarget||t.toElement,f=u,v=v?ht(v):null,v!==null&&(C=Pt(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(f=null,v=u),f!==v)){if(x=Nu,_="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=bu,_="onPointerLeave",h="onPointerEnter",g="pointer"),C=f==null?d:Dt(f),m=v==null?d:Dt(v),d=new x(_,g+"leave",f,t,c),d.target=C,d.relatedTarget=m,_=null,ht(c)===u&&(x=new x(h,g+"enter",v,t,c),x.target=m,x.relatedTarget=C,_=x),C=_,f&&v)n:{for(x=f,h=v,g=0,m=x;m;m=Lt(m))g++;for(m=0,_=h;_;_=Lt(_))m++;for(;0<g-m;)x=Lt(x),g--;for(;0<m-g;)h=Lt(h),m--;for(;g--;){if(x===h||h!==null&&x===h.alternate)break n;x=Lt(x),h=Lt(h)}x=null}else x=null;f!==null&&ju(p,d,f,x,!1),v!==null&&C!==null&&ju(p,C,v,x,!0)}}e:{if(d=u?Dt(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var T=mg;else if(Fu(d))if(hf)T=wg;else{T=yg;var k=gg}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=vg);if(T&&(T=T(e,u))){df(p,T,t,c);break e}k&&k(e,d,u),e==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&Go(d,"number",d.value)}switch(k=u?Dt(u):window,e){case"focusin":(Fu(k)||k.contentEditable==="true")&&(At=k,la=u,zr=null);break;case"focusout":zr=la=At=null;break;case"mousedown":oa=!0;break;case"contextmenu":case"mouseup":case"dragend":oa=!1,Du(p,t,c);break;case"selectionchange":if(_g)break;case"keydown":case"keyup":Du(p,t,c)}var I;if(cs)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Rt?pf(e,t)&&(L="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(cf&&t.locale!=="ko"&&(Rt||L!=="onCompositionStart"?L==="onCompositionEnd"&&Rt&&(I=uf()):(Gn=c,as="value"in Gn?Gn.value:Gn.textContent,Rt=!0)),k=cl(u,L),0<k.length&&(L=new Iu(L,e,null,t,c),p.push({event:L,listeners:k}),I?L.data=I:(I=ff(t),I!==null&&(L.data=I)))),(I=cg?pg(e,t):fg(e,t))&&(u=cl(u,"onBeforeInput"),0<u.length&&(c=new Iu("onBeforeInput","beforeinput",null,t,c),p.push({event:c,listeners:u}),c.data=I))}Cf(p,n)})}function Yr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function cl(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Wr(e,t),l!=null&&r.unshift(Yr(e,l,i)),l=Wr(e,n),l!=null&&r.push(Yr(e,l,i))),e=e.return}return r}function Lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ju(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var a=t,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Wr(t,l),s!=null&&o.unshift(Yr(t,s,a))):i||(s=Wr(t,l),s!=null&&o.push(Yr(t,s,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Pg=/\r\n?/g,Tg=/\u0000|\uFFFD/g;function Uu(e){return(typeof e=="string"?e:""+e).replace(Pg,`
`).replace(Tg,"")}function Ni(e,n,t){if(n=Uu(n),Uu(e)!==n&&t)throw Error(N(425))}function pl(){}var aa=null,sa=null;function ua(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ca=typeof setTimeout=="function"?setTimeout:void 0,Ng=typeof clearTimeout=="function"?clearTimeout:void 0,Hu=typeof Promise=="function"?Promise:void 0,Ig=typeof queueMicrotask=="function"?queueMicrotask:typeof Hu<"u"?function(e){return Hu.resolve(null).then(e).catch(bg)}:ca;function bg(e){setTimeout(function(){throw e})}function mo(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Gr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Gr(n)}function Jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Wu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),wn="__reactFiber$"+sr,Jr="__reactProps$"+sr,Rn="__reactContainer$"+sr,pa="__reactEvents$"+sr,Lg="__reactListeners$"+sr,Mg="__reactHandles$"+sr;function ht(e){var n=e[wn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Rn]||t[wn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Wu(e);e!==null;){if(t=e[wn])return t;e=Wu(e)}return n}e=t,t=e.parentNode}return null}function ci(e){return e=e[wn]||e[Rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Rl(e){return e[Jr]||null}var fa=[],$t=-1;function ot(e){return{current:e}}function ie(e){0>$t||(e.current=fa[$t],fa[$t]=null,$t--)}function ee(e,n){$t++,fa[$t]=e.current,e.current=n}var it={},Ne=ot(it),Oe=ot(!1),wt=it;function er(e,n){var t=e.type.contextTypes;if(!t)return it;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function De(e){return e=e.childContextTypes,e!=null}function fl(){ie(Oe),ie(Ne)}function Vu(e,n,t){if(Ne.current!==it)throw Error(N(168));ee(Ne,n),ee(Oe,t)}function Pf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(N(108,gm(e)||"Unknown",i));return ce({},t,r)}function dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||it,wt=Ne.current,ee(Ne,e),ee(Oe,Oe.current),!0}function qu(e,n,t){var r=e.stateNode;if(!r)throw Error(N(169));t?(e=Pf(e,n,wt),r.__reactInternalMemoizedMergedChildContext=e,ie(Oe),ie(Ne),ee(Ne,e)):ie(Oe),ee(Oe,t)}var In=null,Al=!1,go=!1;function Tf(e){In===null?In=[e]:In.push(e)}function Fg(e){Al=!0,Tf(e)}function at(){if(!go&&In!==null){go=!0;var e=0,n=X;try{var t=In;for(X=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}In=null,Al=!1}catch(i){throw In!==null&&(In=In.slice(e+1)),Yp(rs,at),i}finally{X=n,go=!1}}return null}var Bt=[],jt=0,hl=null,ml=0,Ye=[],Je=0,xt=null,bn=1,Ln="";function pt(e,n){Bt[jt++]=ml,Bt[jt++]=hl,hl=e,ml=n}function Nf(e,n,t){Ye[Je++]=bn,Ye[Je++]=Ln,Ye[Je++]=xt,xt=e;var r=bn;e=Ln;var i=32-pn(r)-1;r&=~(1<<i),t+=1;var l=32-pn(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bn=1<<32-pn(n)+i|t<<i|r,Ln=l+e}else bn=1<<l|t<<i|r,Ln=e}function fs(e){e.return!==null&&(pt(e,1),Nf(e,1,0))}function ds(e){for(;e===hl;)hl=Bt[--jt],Bt[jt]=null,ml=Bt[--jt],Bt[jt]=null;for(;e===xt;)xt=Ye[--Je],Ye[Je]=null,Ln=Ye[--Je],Ye[Je]=null,bn=Ye[--Je],Ye[Je]=null}var Ge=null,Ve=null,le=!1,cn=null;function If(e,n){var t=en(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Gu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ge=e,Ve=Jn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ge=e,Ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=xt!==null?{id:bn,overflow:Ln}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=en(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ge=e,Ve=null,!0):!1;default:return!1}}function da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ha(e){if(le){var n=Ve;if(n){var t=n;if(!Gu(e,n)){if(da(e))throw Error(N(418));n=Jn(t.nextSibling);var r=Ge;n&&Gu(e,n)?If(r,t):(e.flags=e.flags&-4097|2,le=!1,Ge=e)}}else{if(da(e))throw Error(N(418));e.flags=e.flags&-4097|2,le=!1,Ge=e}}}function Ku(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Ii(e){if(e!==Ge)return!1;if(!le)return Ku(e),le=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ua(e.type,e.memoizedProps)),n&&(n=Ve)){if(da(e))throw bf(),Error(N(418));for(;n;)If(e,n),n=Jn(n.nextSibling)}if(Ku(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ve=Jn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ve=null}}else Ve=Ge?Jn(e.stateNode.nextSibling):null;return!0}function bf(){for(var e=Ve;e;)e=Jn(e.nextSibling)}function nr(){Ve=Ge=null,le=!1}function hs(e){cn===null?cn=[e]:cn.push(e)}var zg=$n.ReactCurrentBatchConfig;function xr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(N(309));var r=t.stateNode}if(!r)throw Error(N(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(N(284));if(!t._owner)throw Error(N(290,e))}return e}function bi(e,n){throw e=Object.prototype.toString.call(n),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Qu(e){var n=e._init;return n(e._payload)}function Lf(e){function n(h,g){if(e){var m=h.deletions;m===null?(h.deletions=[g],h.flags|=16):m.push(g)}}function t(h,g){if(!e)return null;for(;g!==null;)n(h,g),g=g.sibling;return null}function r(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function i(h,g){return h=tt(h,g),h.index=0,h.sibling=null,h}function l(h,g,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<g?(h.flags|=2,g):m):(h.flags|=2,g)):(h.flags|=1048576,g)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,g,m,_){return g===null||g.tag!==6?(g=So(m,h.mode,_),g.return=h,g):(g=i(g,m),g.return=h,g)}function s(h,g,m,_){var T=m.type;return T===zt?c(h,g,m.props.children,_,m.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Hn&&Qu(T)===g.type)?(_=i(g,m.props),_.ref=xr(h,g,m),_.return=h,_):(_=Xi(m.type,m.key,m.props,null,h.mode,_),_.ref=xr(h,g,m),_.return=h,_)}function u(h,g,m,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==m.containerInfo||g.stateNode.implementation!==m.implementation?(g=Co(m,h.mode,_),g.return=h,g):(g=i(g,m.children||[]),g.return=h,g)}function c(h,g,m,_,T){return g===null||g.tag!==7?(g=vt(m,h.mode,_,T),g.return=h,g):(g=i(g,m),g.return=h,g)}function p(h,g,m){if(typeof g=="string"&&g!==""||typeof g=="number")return g=So(""+g,h.mode,m),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wi:return m=Xi(g.type,g.key,g.props,null,h.mode,m),m.ref=xr(h,null,g),m.return=h,m;case Ft:return g=Co(g,h.mode,m),g.return=h,g;case Hn:var _=g._init;return p(h,_(g._payload),m)}if(Tr(g)||mr(g))return g=vt(g,h.mode,m,null),g.return=h,g;bi(h,g)}return null}function d(h,g,m,_){var T=g!==null?g.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(h,g,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case wi:return m.key===T?s(h,g,m,_):null;case Ft:return m.key===T?u(h,g,m,_):null;case Hn:return T=m._init,d(h,g,T(m._payload),_)}if(Tr(m)||mr(m))return T!==null?null:c(h,g,m,_,null);bi(h,m)}return null}function f(h,g,m,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(m)||null,a(g,h,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case wi:return h=h.get(_.key===null?m:_.key)||null,s(g,h,_,T);case Ft:return h=h.get(_.key===null?m:_.key)||null,u(g,h,_,T);case Hn:var k=_._init;return f(h,g,m,k(_._payload),T)}if(Tr(_)||mr(_))return h=h.get(m)||null,c(g,h,_,T,null);bi(g,_)}return null}function v(h,g,m,_){for(var T=null,k=null,I=g,L=g=0,O=null;I!==null&&L<m.length;L++){I.index>L?(O=I,I=null):O=I.sibling;var z=d(h,I,m[L],_);if(z===null){I===null&&(I=O);break}e&&I&&z.alternate===null&&n(h,I),g=l(z,g,L),k===null?T=z:k.sibling=z,k=z,I=O}if(L===m.length)return t(h,I),le&&pt(h,L),T;if(I===null){for(;L<m.length;L++)I=p(h,m[L],_),I!==null&&(g=l(I,g,L),k===null?T=I:k.sibling=I,k=I);return le&&pt(h,L),T}for(I=r(h,I);L<m.length;L++)O=f(I,h,L,m[L],_),O!==null&&(e&&O.alternate!==null&&I.delete(O.key===null?L:O.key),g=l(O,g,L),k===null?T=O:k.sibling=O,k=O);return e&&I.forEach(function(A){return n(h,A)}),le&&pt(h,L),T}function x(h,g,m,_){var T=mr(m);if(typeof T!="function")throw Error(N(150));if(m=T.call(m),m==null)throw Error(N(151));for(var k=T=null,I=g,L=g=0,O=null,z=m.next();I!==null&&!z.done;L++,z=m.next()){I.index>L?(O=I,I=null):O=I.sibling;var A=d(h,I,z.value,_);if(A===null){I===null&&(I=O);break}e&&I&&A.alternate===null&&n(h,I),g=l(A,g,L),k===null?T=A:k.sibling=A,k=A,I=O}if(z.done)return t(h,I),le&&pt(h,L),T;if(I===null){for(;!z.done;L++,z=m.next())z=p(h,z.value,_),z!==null&&(g=l(z,g,L),k===null?T=z:k.sibling=z,k=z);return le&&pt(h,L),T}for(I=r(h,I);!z.done;L++,z=m.next())z=f(I,h,L,z.value,_),z!==null&&(e&&z.alternate!==null&&I.delete(z.key===null?L:z.key),g=l(z,g,L),k===null?T=z:k.sibling=z,k=z);return e&&I.forEach(function(D){return n(h,D)}),le&&pt(h,L),T}function C(h,g,m,_){if(typeof m=="object"&&m!==null&&m.type===zt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case wi:e:{for(var T=m.key,k=g;k!==null;){if(k.key===T){if(T=m.type,T===zt){if(k.tag===7){t(h,k.sibling),g=i(k,m.props.children),g.return=h,h=g;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Hn&&Qu(T)===k.type){t(h,k.sibling),g=i(k,m.props),g.ref=xr(h,k,m),g.return=h,h=g;break e}t(h,k);break}else n(h,k);k=k.sibling}m.type===zt?(g=vt(m.props.children,h.mode,_,m.key),g.return=h,h=g):(_=Xi(m.type,m.key,m.props,null,h.mode,_),_.ref=xr(h,g,m),_.return=h,h=_)}return o(h);case Ft:e:{for(k=m.key;g!==null;){if(g.key===k)if(g.tag===4&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){t(h,g.sibling),g=i(g,m.children||[]),g.return=h,h=g;break e}else{t(h,g);break}else n(h,g);g=g.sibling}g=Co(m,h.mode,_),g.return=h,h=g}return o(h);case Hn:return k=m._init,C(h,g,k(m._payload),_)}if(Tr(m))return v(h,g,m,_);if(mr(m))return x(h,g,m,_);bi(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,g!==null&&g.tag===6?(t(h,g.sibling),g=i(g,m),g.return=h,h=g):(t(h,g),g=So(m,h.mode,_),g.return=h,h=g),o(h)):t(h,g)}return C}var tr=Lf(!0),Mf=Lf(!1),gl=ot(null),yl=null,Ut=null,ms=null;function gs(){ms=Ut=yl=null}function ys(e){var n=gl.current;ie(gl),e._currentValue=n}function ma(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Qt(e,n){yl=e,ms=Ut=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ae=!0),e.firstContext=null)}function tn(e){var n=e._currentValue;if(ms!==e)if(e={context:e,memoizedValue:n,next:null},Ut===null){if(yl===null)throw Error(N(308));Ut=e,yl.dependencies={lanes:0,firstContext:e}}else Ut=Ut.next=e;return n}var mt=null;function vs(e){mt===null?mt=[e]:mt.push(e)}function Ff(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,vs(n)):(t.next=i.next,i.next=t),n.interleaved=t,An(e,r)}function An(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Wn=!1;function ws(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Zn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,An(e,t)}return i=r.interleaved,i===null?(n.next=n,vs(r)):(n.next=i.next,i.next=n),r.interleaved=n,An(e,t)}function Wi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,is(e,t)}}function Xu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function vl(e,n,t,r){var i=e.updateQueue;Wn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,o===null?l=u:o.next=u,o=s;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=s))}if(l!==null){var p=i.baseState;o=0,c=u=s=null,a=l;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(d=n,f=t,x.tag){case 1:if(v=x.payload,typeof v=="function"){p=v.call(f,p,d);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(f,p,d):v,d==null)break e;p=ce({},p,d);break e;case 2:Wn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,s=p):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(s=p),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);_t|=o,e.lanes=o,e.memoizedState=p}}function Yu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var pi={},_n=ot(pi),Zr=ot(pi),ei=ot(pi);function gt(e){if(e===pi)throw Error(N(174));return e}function xs(e,n){switch(ee(ei,n),ee(Zr,e),ee(_n,pi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Qo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Qo(n,e)}ie(_n),ee(_n,n)}function rr(){ie(_n),ie(Zr),ie(ei)}function Rf(e){gt(ei.current);var n=gt(_n.current),t=Qo(n,e.type);n!==t&&(ee(Zr,e),ee(_n,t))}function ks(e){Zr.current===e&&(ie(_n),ie(Zr))}var ae=ot(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var yo=[];function _s(){for(var e=0;e<yo.length;e++)yo[e]._workInProgressVersionPrimary=null;yo.length=0}var Vi=$n.ReactCurrentDispatcher,vo=$n.ReactCurrentBatchConfig,kt=0,se=null,ve=null,xe=null,xl=!1,Rr=!1,ni=0,Rg=0;function Ee(){throw Error(N(321))}function Ss(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!dn(e[t],n[t]))return!1;return!0}function Cs(e,n,t,r,i,l){if(kt=l,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Vi.current=e===null||e.memoizedState===null?$g:Bg,e=t(r,i),Rr){l=0;do{if(Rr=!1,ni=0,25<=l)throw Error(N(301));l+=1,xe=ve=null,n.updateQueue=null,Vi.current=jg,e=t(r,i)}while(Rr)}if(Vi.current=kl,n=ve!==null&&ve.next!==null,kt=0,xe=ve=se=null,xl=!1,n)throw Error(N(300));return e}function Es(){var e=ni!==0;return ni=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?se.memoizedState=xe=e:xe=xe.next=e,xe}function rn(){if(ve===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var n=xe===null?se.memoizedState:xe.next;if(n!==null)xe=n,ve=e;else{if(e===null)throw Error(N(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},xe===null?se.memoizedState=xe=e:xe=xe.next=e}return xe}function ti(e,n){return typeof n=="function"?n(e):n}function wo(e){var n=rn(),t=n.queue;if(t===null)throw Error(N(311));t.lastRenderedReducer=e;var r=ve,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,u=l;do{var c=u.lane;if((kt&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=p,o=r):s=s.next=p,se.lanes|=c,_t|=c}u=u.next}while(u!==null&&u!==l);s===null?o=r:s.next=a,dn(r,n.memoizedState)||(Ae=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,se.lanes|=l,_t|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function xo(e){var n=rn(),t=n.queue;if(t===null)throw Error(N(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);dn(l,n.memoizedState)||(Ae=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Af(){}function Of(e,n){var t=se,r=rn(),i=n(),l=!dn(r.memoizedState,i);if(l&&(r.memoizedState=i,Ae=!0),r=r.queue,Ps(Bf.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||xe!==null&&xe.memoizedState.tag&1){if(t.flags|=2048,ri(9,$f.bind(null,t,r,i,n),void 0,null),ke===null)throw Error(N(349));kt&30||Df(t,n,i)}return i}function Df(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=se.updateQueue,n===null?(n={lastEffect:null,stores:null},se.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function $f(e,n,t,r){n.value=t,n.getSnapshot=r,jf(n)&&Uf(e)}function Bf(e,n,t){return t(function(){jf(n)&&Uf(e)})}function jf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!dn(e,t)}catch{return!0}}function Uf(e){var n=An(e,1);n!==null&&fn(n,e,1,-1)}function Ju(e){var n=yn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},n.queue=e,e=e.dispatch=Dg.bind(null,se,e),[n.memoizedState,e]}function ri(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=se.updateQueue,n===null?(n={lastEffect:null,stores:null},se.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Hf(){return rn().memoizedState}function qi(e,n,t,r){var i=yn();se.flags|=e,i.memoizedState=ri(1|n,t,void 0,r===void 0?null:r)}function Ol(e,n,t,r){var i=rn();r=r===void 0?null:r;var l=void 0;if(ve!==null){var o=ve.memoizedState;if(l=o.destroy,r!==null&&Ss(r,o.deps)){i.memoizedState=ri(n,t,l,r);return}}se.flags|=e,i.memoizedState=ri(1|n,t,l,r)}function Zu(e,n){return qi(8390656,8,e,n)}function Ps(e,n){return Ol(2048,8,e,n)}function Wf(e,n){return Ol(4,2,e,n)}function Vf(e,n){return Ol(4,4,e,n)}function qf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gf(e,n,t){return t=t!=null?t.concat([e]):null,Ol(4,4,qf.bind(null,n,e),t)}function Ts(){}function Kf(e,n){var t=rn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ss(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Qf(e,n){var t=rn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ss(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Xf(e,n,t){return kt&21?(dn(t,n)||(t=ef(),se.lanes|=t,_t|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=t)}function Ag(e,n){var t=X;X=t!==0&&4>t?t:4,e(!0);var r=vo.transition;vo.transition={};try{e(!1),n()}finally{X=t,vo.transition=r}}function Yf(){return rn().memoizedState}function Og(e,n,t){var r=nt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Jf(e))Zf(n,t);else if(t=Ff(e,n,t,r),t!==null){var i=Le();fn(t,e,r,i),ed(t,n,r)}}function Dg(e,n,t){var r=nt(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Jf(e))Zf(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,a=l(o,t);if(i.hasEagerState=!0,i.eagerState=a,dn(a,o)){var s=n.interleaved;s===null?(i.next=i,vs(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Ff(e,n,i,r),t!==null&&(i=Le(),fn(t,e,r,i),ed(t,n,r))}}function Jf(e){var n=e.alternate;return e===se||n!==null&&n===se}function Zf(e,n){Rr=xl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ed(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,is(e,t)}}var kl={readContext:tn,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},$g={readContext:tn,useCallback:function(e,n){return yn().memoizedState=[e,n===void 0?null:n],e},useContext:tn,useEffect:Zu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,qi(4194308,4,qf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return qi(4194308,4,e,n)},useInsertionEffect:function(e,n){return qi(4,2,e,n)},useMemo:function(e,n){var t=yn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=yn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Og.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var n=yn();return e={current:e},n.memoizedState=e},useState:Ju,useDebugValue:Ts,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Ju(!1),n=e[0];return e=Ag.bind(null,e[1]),yn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=se,i=yn();if(le){if(t===void 0)throw Error(N(407));t=t()}else{if(t=n(),ke===null)throw Error(N(349));kt&30||Df(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Zu(Bf.bind(null,r,l,e),[e]),r.flags|=2048,ri(9,$f.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=yn(),n=ke.identifierPrefix;if(le){var t=Ln,r=bn;t=(r&~(1<<32-pn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ni++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Rg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Bg={readContext:tn,useCallback:Kf,useContext:tn,useEffect:Ps,useImperativeHandle:Gf,useInsertionEffect:Wf,useLayoutEffect:Vf,useMemo:Qf,useReducer:wo,useRef:Hf,useState:function(){return wo(ti)},useDebugValue:Ts,useDeferredValue:function(e){var n=rn();return Xf(n,ve.memoizedState,e)},useTransition:function(){var e=wo(ti)[0],n=rn().memoizedState;return[e,n]},useMutableSource:Af,useSyncExternalStore:Of,useId:Yf,unstable_isNewReconciler:!1},jg={readContext:tn,useCallback:Kf,useContext:tn,useEffect:Ps,useImperativeHandle:Gf,useInsertionEffect:Wf,useLayoutEffect:Vf,useMemo:Qf,useReducer:xo,useRef:Hf,useState:function(){return xo(ti)},useDebugValue:Ts,useDeferredValue:function(e){var n=rn();return ve===null?n.memoizedState=e:Xf(n,ve.memoizedState,e)},useTransition:function(){var e=xo(ti)[0],n=rn().memoizedState;return[e,n]},useMutableSource:Af,useSyncExternalStore:Of,useId:Yf,unstable_isNewReconciler:!1};function sn(e,n){if(e&&e.defaultProps){n=ce({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ga(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ce({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Dl={isMounted:function(e){return(e=e._reactInternals)?Pt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Le(),i=nt(e),l=Mn(r,i);l.payload=n,t!=null&&(l.callback=t),n=Zn(e,l,i),n!==null&&(fn(n,e,i,r),Wi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Le(),i=nt(e),l=Mn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Zn(e,l,i),n!==null&&(fn(n,e,i,r),Wi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Le(),r=nt(e),i=Mn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Zn(e,i,r),n!==null&&(fn(n,e,r,t),Wi(n,e,r))}};function ec(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!Qr(t,r)||!Qr(i,l):!0}function nd(e,n,t){var r=!1,i=it,l=n.contextType;return typeof l=="object"&&l!==null?l=tn(l):(i=De(n)?wt:Ne.current,r=n.contextTypes,l=(r=r!=null)?er(e,i):it),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Dl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function nc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Dl.enqueueReplaceState(n,n.state,null)}function ya(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},ws(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=tn(l):(l=De(n)?wt:Ne.current,i.context=er(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(ga(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Dl.enqueueReplaceState(i,i.state,null),vl(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,n){try{var t="",r=n;do t+=mm(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function ko(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function va(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Ug=typeof WeakMap=="function"?WeakMap:Map;function td(e,n,t){t=Mn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Sl||(Sl=!0,Na=r),va(e,n)},t}function rd(e,n,t){t=Mn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){va(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){va(e,n),typeof r!="function"&&(et===null?et=new Set([this]):et.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function tc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Ug;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=ty.bind(null,e,n,t),n.then(e,e))}function rc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ic(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Mn(-1,1),n.tag=2,Zn(t,n,1))),t.lanes|=1),e)}var Hg=$n.ReactCurrentOwner,Ae=!1;function be(e,n,t,r){n.child=e===null?Mf(n,null,t,r):tr(n,e.child,t,r)}function lc(e,n,t,r,i){t=t.render;var l=n.ref;return Qt(n,i),r=Cs(e,n,t,r,l,i),t=Es(),e!==null&&!Ae?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,On(e,n,i)):(le&&t&&fs(n),n.flags|=1,be(e,n,r,i),n.child)}function oc(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Rs(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,id(e,n,l,r,i)):(e=Xi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Qr,t(o,r)&&e.ref===n.ref)return On(e,n,i)}return n.flags|=1,e=tt(l,r),e.ref=n.ref,e.return=n,n.child=e}function id(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Qr(l,r)&&e.ref===n.ref)if(Ae=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Ae=!0);else return n.lanes=e.lanes,On(e,n,i)}return wa(e,n,t,r,i)}function ld(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Wt,We),We|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ee(Wt,We),We|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,ee(Wt,We),We|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,ee(Wt,We),We|=r;return be(e,n,i,t),n.child}function od(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function wa(e,n,t,r,i){var l=De(t)?wt:Ne.current;return l=er(n,l),Qt(n,i),t=Cs(e,n,t,r,l,i),r=Es(),e!==null&&!Ae?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,On(e,n,i)):(le&&r&&fs(n),n.flags|=1,be(e,n,t,i),n.child)}function ac(e,n,t,r,i){if(De(t)){var l=!0;dl(n)}else l=!1;if(Qt(n,i),n.stateNode===null)Gi(e,n),nd(n,t,r),ya(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var s=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=tn(u):(u=De(t)?wt:Ne.current,u=er(n,u));var c=t.getDerivedStateFromProps,p=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==u)&&nc(n,o,r,u),Wn=!1;var d=n.memoizedState;o.state=d,vl(n,r,o,i),s=n.memoizedState,a!==r||d!==s||Oe.current||Wn?(typeof c=="function"&&(ga(n,t,c,r),s=n.memoizedState),(a=Wn||ec(n,t,a,r,d,s,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,zf(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:sn(n.type,a),o.props=u,p=n.pendingProps,d=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=tn(s):(s=De(t)?wt:Ne.current,s=er(n,s));var f=t.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||d!==s)&&nc(n,o,r,s),Wn=!1,d=n.memoizedState,o.state=d,vl(n,r,o,i);var v=n.memoizedState;a!==p||d!==v||Oe.current||Wn?(typeof f=="function"&&(ga(n,t,f,r),v=n.memoizedState),(u=Wn||ec(n,t,u,r,d,v,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),o.props=r,o.state=v,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),r=!1)}return xa(e,n,t,r,l,i)}function xa(e,n,t,r,i,l){od(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&qu(n,t,!1),On(e,n,l);r=n.stateNode,Hg.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=tr(n,e.child,null,l),n.child=tr(n,null,a,l)):be(e,n,a,l),n.memoizedState=r.state,i&&qu(n,t,!0),n.child}function ad(e){var n=e.stateNode;n.pendingContext?Vu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Vu(e,n.context,!1),xs(e,n.containerInfo)}function sc(e,n,t,r,i){return nr(),hs(i),n.flags|=256,be(e,n,t,r),n.child}var ka={dehydrated:null,treeContext:null,retryLane:0};function _a(e){return{baseLanes:e,cachePool:null,transitions:null}}function sd(e,n,t){var r=n.pendingProps,i=ae.current,l=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ae,i&1),e===null)return ha(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=jl(o,r,0,null),e=vt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=_a(t),n.memoizedState=ka,e):Ns(n,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Wg(e,n,o,r,a,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=tt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=tt(a,l):(l=vt(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?_a(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=ka,r}return l=e.child,e=l.sibling,r=tt(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ns(e,n){return n=jl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Li(e,n,t,r){return r!==null&&hs(r),tr(n,e.child,null,t),e=Ns(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wg(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=ko(Error(N(422))),Li(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=jl({mode:"visible",children:r.children},i,0,null),l=vt(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&tr(n,e.child,null,o),n.child.memoizedState=_a(o),n.memoizedState=ka,l);if(!(n.mode&1))return Li(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(N(419)),r=ko(l,r,void 0),Li(e,n,o,r)}if(a=(o&e.childLanes)!==0,Ae||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,An(e,i),fn(r,e,i,-1))}return zs(),r=ko(Error(N(421))),Li(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=ry.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,Ve=Jn(i.nextSibling),Ge=n,le=!0,cn=null,e!==null&&(Ye[Je++]=bn,Ye[Je++]=Ln,Ye[Je++]=xt,bn=e.id,Ln=e.overflow,xt=n),n=Ns(n,r.children),n.flags|=4096,n)}function uc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ma(e.return,n,t)}function _o(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function ud(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(be(e,n,r.children,t),r=ae.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uc(e,t,n);else if(e.tag===19)uc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ae,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&wl(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),_o(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&wl(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}_o(n,!0,t,null,l);break;case"together":_o(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function On(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),_t|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(N(153));if(n.child!==null){for(e=n.child,t=tt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=tt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Vg(e,n,t){switch(n.tag){case 3:ad(n),nr();break;case 5:Rf(n);break;case 1:De(n.type)&&dl(n);break;case 4:xs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ee(gl,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ee(ae,ae.current&1),n.flags|=128,null):t&n.child.childLanes?sd(e,n,t):(ee(ae,ae.current&1),e=On(e,n,t),e!==null?e.sibling:null);ee(ae,ae.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return ud(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ae,ae.current),r)break;return null;case 22:case 23:return n.lanes=0,ld(e,n,t)}return On(e,n,t)}var cd,Sa,pd,fd;cd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Sa=function(){};pd=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,gt(_n.current);var l=null;switch(t){case"input":i=Vo(e,i),r=Vo(e,r),l=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),l=[];break;case"textarea":i=Ko(e,i),r=Ko(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pl)}Xo(t,r);var o;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ur.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(l||(l=[]),l.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ur.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&re("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}t&&(l=l||[]).push("style",t);var u=l;(n.updateQueue=u)&&(n.flags|=4)}};fd=function(e,n,t,r){t!==r&&(n.flags|=4)};function kr(e,n){if(!le)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function qg(e,n,t){var r=n.pendingProps;switch(ds(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(n),null;case 1:return De(n.type)&&fl(),Pe(n),null;case 3:return r=n.stateNode,rr(),ie(Oe),ie(Ne),_s(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ii(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,cn!==null&&(La(cn),cn=null))),Sa(e,n),Pe(n),null;case 5:ks(n);var i=gt(ei.current);if(t=n.type,e!==null&&n.stateNode!=null)pd(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(N(166));return Pe(n),null}if(e=gt(_n.current),Ii(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[wn]=n,r[Jr]=l,e=(n.mode&1)!==0,t){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Ir.length;i++)re(Ir[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":vu(r,l),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},re("invalid",r);break;case"textarea":xu(r,l),re("invalid",r)}Xo(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Ni(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Ni(r.textContent,a,e),i=["children",""+a]):Ur.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&re("scroll",r)}switch(t){case"input":xi(r),wu(r,l,!0);break;case"textarea":xi(r),ku(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=pl)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$p(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[wn]=n,e[Jr]=r,cd(e,n,!1,!1),n.stateNode=e;e:{switch(o=Yo(t,r),t){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ir.length;i++)re(Ir[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":vu(e,r),i=Vo(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),re("invalid",e);break;case"textarea":xu(e,r),i=Ko(e,r),re("invalid",e);break;default:i=r}Xo(t,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Up(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Bp(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Hr(e,s):typeof s=="number"&&Hr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ur.hasOwnProperty(l)?s!=null&&l==="onScroll"&&re("scroll",e):s!=null&&Ja(e,l,s,o))}switch(t){case"input":xi(e),wu(e,r,!1);break;case"textarea":xi(e),ku(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Vt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Vt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=pl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Pe(n),null;case 6:if(e&&n.stateNode!=null)fd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(N(166));if(t=gt(ei.current),gt(_n.current),Ii(n)){if(r=n.stateNode,t=n.memoizedProps,r[wn]=n,(l=r.nodeValue!==t)&&(e=Ge,e!==null))switch(e.tag){case 3:Ni(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ni(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[wn]=n,n.stateNode=r}return Pe(n),null;case 13:if(ie(ae),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Ve!==null&&n.mode&1&&!(n.flags&128))bf(),nr(),n.flags|=98560,l=!1;else if(l=Ii(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(N(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(N(317));l[wn]=n}else nr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Pe(n),l=!1}else cn!==null&&(La(cn),cn=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ae.current&1?we===0&&(we=3):zs())),n.updateQueue!==null&&(n.flags|=4),Pe(n),null);case 4:return rr(),Sa(e,n),e===null&&Xr(n.stateNode.containerInfo),Pe(n),null;case 10:return ys(n.type._context),Pe(n),null;case 17:return De(n.type)&&fl(),Pe(n),null;case 19:if(ie(ae),l=n.memoizedState,l===null)return Pe(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)kr(l,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=wl(e),o!==null){for(n.flags|=128,kr(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ee(ae,ae.current&1|2),n.child}e=e.sibling}l.tail!==null&&de()>lr&&(n.flags|=128,r=!0,kr(l,!1),n.lanes=4194304)}else{if(!r)if(e=wl(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),kr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!le)return Pe(n),null}else 2*de()-l.renderingStartTime>lr&&t!==1073741824&&(n.flags|=128,r=!0,kr(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=de(),n.sibling=null,t=ae.current,ee(ae,r?t&1|2:t&1),n):(Pe(n),null);case 22:case 23:return Fs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?We&1073741824&&(Pe(n),n.subtreeFlags&6&&(n.flags|=8192)):Pe(n),null;case 24:return null;case 25:return null}throw Error(N(156,n.tag))}function Gg(e,n){switch(ds(n),n.tag){case 1:return De(n.type)&&fl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return rr(),ie(Oe),ie(Ne),_s(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ks(n),null;case 13:if(ie(ae),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(N(340));nr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ie(ae),null;case 4:return rr(),null;case 10:return ys(n.type._context),null;case 22:case 23:return Fs(),null;case 24:return null;default:return null}}var Mi=!1,Te=!1,Kg=typeof WeakSet=="function"?WeakSet:Set,R=null;function Ht(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){pe(e,n,r)}else t.current=null}function Ca(e,n,t){try{t()}catch(r){pe(e,n,r)}}var cc=!1;function Qg(e,n){if(aa=sl,e=yf(),ps(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,a=-1,s=-1,u=0,c=0,p=e,d=null;n:for(;;){for(var f;p!==t||i!==0&&p.nodeType!==3||(a=o+i),p!==l||r!==0&&p.nodeType!==3||(s=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(f=p.firstChild)!==null;)d=p,p=f;for(;;){if(p===e)break n;if(d===t&&++u===i&&(a=o),d===l&&++c===r&&(s=o),(f=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=f}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(sa={focusedElem:e,selectionRange:t},sl=!1,R=n;R!==null;)if(n=R,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,R=e;else for(;R!==null;){n=R;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,C=v.memoizedState,h=n.stateNode,g=h.getSnapshotBeforeUpdate(n.elementType===n.type?x:sn(n.type,x),C);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(_){pe(n,n.return,_)}if(e=n.sibling,e!==null){e.return=n.return,R=e;break}R=n.return}return v=cc,cc=!1,v}function Ar(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Ca(n,t,l)}i=i.next}while(i!==r)}}function $l(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ea(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function dd(e){var n=e.alternate;n!==null&&(e.alternate=null,dd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[wn],delete n[Jr],delete n[pa],delete n[Lg],delete n[Mg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hd(e){return e.tag===5||e.tag===3||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pa(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=pl));else if(r!==4&&(e=e.child,e!==null))for(Pa(e,n,t),e=e.sibling;e!==null;)Pa(e,n,t),e=e.sibling}function Ta(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ta(e,n,t),e=e.sibling;e!==null;)Ta(e,n,t),e=e.sibling}var _e=null,un=!1;function jn(e,n,t){for(t=t.child;t!==null;)md(e,n,t),t=t.sibling}function md(e,n,t){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(Ll,t)}catch{}switch(t.tag){case 5:Te||Ht(t,n);case 6:var r=_e,i=un;_e=null,jn(e,n,t),_e=r,un=i,_e!==null&&(un?(e=_e,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):_e.removeChild(t.stateNode));break;case 18:_e!==null&&(un?(e=_e,t=t.stateNode,e.nodeType===8?mo(e.parentNode,t):e.nodeType===1&&mo(e,t),Gr(e)):mo(_e,t.stateNode));break;case 4:r=_e,i=un,_e=t.stateNode.containerInfo,un=!0,jn(e,n,t),_e=r,un=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Ca(t,n,o),i=i.next}while(i!==r)}jn(e,n,t);break;case 1:if(!Te&&(Ht(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){pe(t,n,a)}jn(e,n,t);break;case 21:jn(e,n,t);break;case 22:t.mode&1?(Te=(r=Te)||t.memoizedState!==null,jn(e,n,t),Te=r):jn(e,n,t);break;default:jn(e,n,t)}}function fc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Kg),n.forEach(function(r){var i=iy.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function an(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:_e=a.stateNode,un=!1;break e;case 3:_e=a.stateNode.containerInfo,un=!0;break e;case 4:_e=a.stateNode.containerInfo,un=!0;break e}a=a.return}if(_e===null)throw Error(N(160));md(l,o,i),_e=null,un=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){pe(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)gd(n,e),n=n.sibling}function gd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(an(n,e),gn(e),r&4){try{Ar(3,e,e.return),$l(3,e)}catch(x){pe(e,e.return,x)}try{Ar(5,e,e.return)}catch(x){pe(e,e.return,x)}}break;case 1:an(n,e),gn(e),r&512&&t!==null&&Ht(t,t.return);break;case 5:if(an(n,e),gn(e),r&512&&t!==null&&Ht(t,t.return),e.flags&32){var i=e.stateNode;try{Hr(i,"")}catch(x){pe(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Op(i,l),Yo(a,o);var u=Yo(a,l);for(o=0;o<s.length;o+=2){var c=s[o],p=s[o+1];c==="style"?Up(i,p):c==="dangerouslySetInnerHTML"?Bp(i,p):c==="children"?Hr(i,p):Ja(i,c,p,u)}switch(a){case"input":qo(i,l);break;case"textarea":Dp(i,l);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var f=l.value;f!=null?Vt(i,!!l.multiple,f,!1):d!==!!l.multiple&&(l.defaultValue!=null?Vt(i,!!l.multiple,l.defaultValue,!0):Vt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Jr]=l}catch(x){pe(e,e.return,x)}}break;case 6:if(an(n,e),gn(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){pe(e,e.return,x)}}break;case 3:if(an(n,e),gn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Gr(n.containerInfo)}catch(x){pe(e,e.return,x)}break;case 4:an(n,e),gn(e);break;case 13:an(n,e),gn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Ls=de())),r&4&&fc(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(Te=(u=Te)||c,an(n,e),Te=u):an(n,e),gn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(R=e,c=e.child;c!==null;){for(p=R=c;R!==null;){switch(d=R,f=d.child,d.tag){case 0:case 11:case 14:case 15:Ar(4,d,d.return);break;case 1:Ht(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,t=d.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(x){pe(r,t,x)}}break;case 5:Ht(d,d.return);break;case 22:if(d.memoizedState!==null){hc(p);continue}}f!==null?(f.return=d,R=f):hc(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{i=p.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=p.stateNode,s=p.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=jp("display",o))}catch(x){pe(e,e.return,x)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(x){pe(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:an(n,e),gn(e),r&4&&fc(e);break;case 21:break;default:an(n,e),gn(e)}}function gn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(hd(t)){var r=t;break e}t=t.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hr(i,""),r.flags&=-33);var l=pc(e);Ta(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=pc(e);Pa(e,a,o);break;default:throw Error(N(161))}}catch(s){pe(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Xg(e,n,t){R=e,yd(e)}function yd(e,n,t){for(var r=(e.mode&1)!==0;R!==null;){var i=R,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Mi;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Te;a=Mi;var u=Te;if(Mi=o,(Te=s)&&!u)for(R=i;R!==null;)o=R,s=o.child,o.tag===22&&o.memoizedState!==null?mc(i):s!==null?(s.return=o,R=s):mc(i);for(;l!==null;)R=l,yd(l),l=l.sibling;R=i,Mi=a,Te=u}dc(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,R=l):dc(e)}}function dc(e){for(;R!==null;){var n=R;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Te||$l(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Te)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:sn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Yu(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Yu(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&Gr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Te||n.flags&512&&Ea(n)}catch(d){pe(n,n.return,d)}}if(n===e){R=null;break}if(t=n.sibling,t!==null){t.return=n.return,R=t;break}R=n.return}}function hc(e){for(;R!==null;){var n=R;if(n===e){R=null;break}var t=n.sibling;if(t!==null){t.return=n.return,R=t;break}R=n.return}}function mc(e){for(;R!==null;){var n=R;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{$l(4,n)}catch(s){pe(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){pe(n,i,s)}}var l=n.return;try{Ea(n)}catch(s){pe(n,l,s)}break;case 5:var o=n.return;try{Ea(n)}catch(s){pe(n,o,s)}}}catch(s){pe(n,n.return,s)}if(n===e){R=null;break}var a=n.sibling;if(a!==null){a.return=n.return,R=a;break}R=n.return}}var Yg=Math.ceil,_l=$n.ReactCurrentDispatcher,Is=$n.ReactCurrentOwner,nn=$n.ReactCurrentBatchConfig,G=0,ke=null,ge=null,Se=0,We=0,Wt=ot(0),we=0,ii=null,_t=0,Bl=0,bs=0,Or=null,Re=null,Ls=0,lr=1/0,Nn=null,Sl=!1,Na=null,et=null,Fi=!1,Kn=null,Cl=0,Dr=0,Ia=null,Ki=-1,Qi=0;function Le(){return G&6?de():Ki!==-1?Ki:Ki=de()}function nt(e){return e.mode&1?G&2&&Se!==0?Se&-Se:zg.transition!==null?(Qi===0&&(Qi=ef()),Qi):(e=X,e!==0||(e=window.event,e=e===void 0?16:sf(e.type)),e):1}function fn(e,n,t,r){if(50<Dr)throw Dr=0,Ia=null,Error(N(185));si(e,t,r),(!(G&2)||e!==ke)&&(e===ke&&(!(G&2)&&(Bl|=t),we===4&&qn(e,Se)),$e(e,r),t===1&&G===0&&!(n.mode&1)&&(lr=de()+500,Al&&at()))}function $e(e,n){var t=e.callbackNode;zm(e,n);var r=al(e,e===ke?Se:0);if(r===0)t!==null&&Cu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Cu(t),n===1)e.tag===0?Fg(gc.bind(null,e)):Tf(gc.bind(null,e)),Ig(function(){!(G&6)&&at()}),t=null;else{switch(nf(r)){case 1:t=rs;break;case 4:t=Jp;break;case 16:t=ol;break;case 536870912:t=Zp;break;default:t=ol}t=Ed(t,vd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function vd(e,n){if(Ki=-1,Qi=0,G&6)throw Error(N(327));var t=e.callbackNode;if(Xt()&&e.callbackNode!==t)return null;var r=al(e,e===ke?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=El(e,r);else{n=r;var i=G;G|=2;var l=xd();(ke!==e||Se!==n)&&(Nn=null,lr=de()+500,yt(e,n));do try{ey();break}catch(a){wd(e,a)}while(!0);gs(),_l.current=l,G=i,ge!==null?n=0:(ke=null,Se=0,n=we)}if(n!==0){if(n===2&&(i=ta(e),i!==0&&(r=i,n=ba(e,i))),n===1)throw t=ii,yt(e,0),qn(e,r),$e(e,de()),t;if(n===6)qn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Jg(i)&&(n=El(e,r),n===2&&(l=ta(e),l!==0&&(r=l,n=ba(e,l))),n===1))throw t=ii,yt(e,0),qn(e,r),$e(e,de()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(N(345));case 2:ft(e,Re,Nn);break;case 3:if(qn(e,r),(r&130023424)===r&&(n=Ls+500-de(),10<n)){if(al(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ca(ft.bind(null,e,Re,Nn),n);break}ft(e,Re,Nn);break;case 4:if(qn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-pn(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yg(r/1960))-r,10<r){e.timeoutHandle=ca(ft.bind(null,e,Re,Nn),r);break}ft(e,Re,Nn);break;case 5:ft(e,Re,Nn);break;default:throw Error(N(329))}}}return $e(e,de()),e.callbackNode===t?vd.bind(null,e):null}function ba(e,n){var t=Or;return e.current.memoizedState.isDehydrated&&(yt(e,n).flags|=256),e=El(e,n),e!==2&&(n=Re,Re=t,n!==null&&La(n)),e}function La(e){Re===null?Re=e:Re.push.apply(Re,e)}function Jg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!dn(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qn(e,n){for(n&=~bs,n&=~Bl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-pn(n),r=1<<t;e[t]=-1,n&=~r}}function gc(e){if(G&6)throw Error(N(327));Xt();var n=al(e,0);if(!(n&1))return $e(e,de()),null;var t=El(e,n);if(e.tag!==0&&t===2){var r=ta(e);r!==0&&(n=r,t=ba(e,r))}if(t===1)throw t=ii,yt(e,0),qn(e,n),$e(e,de()),t;if(t===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ft(e,Re,Nn),$e(e,de()),null}function Ms(e,n){var t=G;G|=1;try{return e(n)}finally{G=t,G===0&&(lr=de()+500,Al&&at())}}function St(e){Kn!==null&&Kn.tag===0&&!(G&6)&&Xt();var n=G;G|=1;var t=nn.transition,r=X;try{if(nn.transition=null,X=1,e)return e()}finally{X=r,nn.transition=t,G=n,!(G&6)&&at()}}function Fs(){We=Wt.current,ie(Wt)}function yt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Ng(t)),ge!==null)for(t=ge.return;t!==null;){var r=t;switch(ds(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fl();break;case 3:rr(),ie(Oe),ie(Ne),_s();break;case 5:ks(r);break;case 4:rr();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:ys(r.type._context);break;case 22:case 23:Fs()}t=t.return}if(ke=e,ge=e=tt(e.current,null),Se=We=n,we=0,ii=null,bs=Bl=_t=0,Re=Or=null,mt!==null){for(n=0;n<mt.length;n++)if(t=mt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}mt=null}return e}function wd(e,n){do{var t=ge;try{if(gs(),Vi.current=kl,xl){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(kt=0,xe=ve=se=null,Rr=!1,ni=0,Is.current=null,t===null||t.return===null){we=1,ii=n,ge=null;break}e:{var l=e,o=t.return,a=t,s=n;if(n=Se,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=a,p=c.tag;if(!(c.mode&1)&&(p===0||p===11||p===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=rc(o);if(f!==null){f.flags&=-257,ic(f,o,a,l,n),f.mode&1&&tc(l,u,n),n=f,s=u;var v=n.updateQueue;if(v===null){var x=new Set;x.add(s),n.updateQueue=x}else v.add(s);break e}else{if(!(n&1)){tc(l,u,n),zs();break e}s=Error(N(426))}}else if(le&&a.mode&1){var C=rc(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ic(C,o,a,l,n),hs(ir(s,a));break e}}l=s=ir(s,a),we!==4&&(we=2),Or===null?Or=[l]:Or.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var h=td(l,s,n);Xu(l,h);break e;case 1:a=s;var g=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof g.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(et===null||!et.has(m)))){l.flags|=65536,n&=-n,l.lanes|=n;var _=rd(l,a,n);Xu(l,_);break e}}l=l.return}while(l!==null)}_d(t)}catch(T){n=T,ge===t&&t!==null&&(ge=t=t.return);continue}break}while(!0)}function xd(){var e=_l.current;return _l.current=kl,e===null?kl:e}function zs(){(we===0||we===3||we===2)&&(we=4),ke===null||!(_t&268435455)&&!(Bl&268435455)||qn(ke,Se)}function El(e,n){var t=G;G|=2;var r=xd();(ke!==e||Se!==n)&&(Nn=null,yt(e,n));do try{Zg();break}catch(i){wd(e,i)}while(!0);if(gs(),G=t,_l.current=r,ge!==null)throw Error(N(261));return ke=null,Se=0,we}function Zg(){for(;ge!==null;)kd(ge)}function ey(){for(;ge!==null&&!Em();)kd(ge)}function kd(e){var n=Cd(e.alternate,e,We);e.memoizedProps=e.pendingProps,n===null?_d(e):ge=n,Is.current=null}function _d(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Gg(t,n),t!==null){t.flags&=32767,ge=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ge=null;return}}else if(t=qg(t,n,We),t!==null){ge=t;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);we===0&&(we=5)}function ft(e,n,t){var r=X,i=nn.transition;try{nn.transition=null,X=1,ny(e,n,t,r)}finally{nn.transition=i,X=r}return null}function ny(e,n,t,r){do Xt();while(Kn!==null);if(G&6)throw Error(N(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Rm(e,l),e===ke&&(ge=ke=null,Se=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Fi||(Fi=!0,Ed(ol,function(){return Xt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=nn.transition,nn.transition=null;var o=X;X=1;var a=G;G|=4,Is.current=null,Qg(e,t),gd(t,e),kg(sa),sl=!!aa,sa=aa=null,e.current=t,Xg(t),Pm(),G=a,X=o,nn.transition=l}else e.current=t;if(Fi&&(Fi=!1,Kn=e,Cl=i),l=e.pendingLanes,l===0&&(et=null),Im(t.stateNode),$e(e,de()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sl)throw Sl=!1,e=Na,Na=null,e;return Cl&1&&e.tag!==0&&Xt(),l=e.pendingLanes,l&1?e===Ia?Dr++:(Dr=0,Ia=e):Dr=0,at(),null}function Xt(){if(Kn!==null){var e=nf(Cl),n=nn.transition,t=X;try{if(nn.transition=null,X=16>e?16:e,Kn===null)var r=!1;else{if(e=Kn,Kn=null,Cl=0,G&6)throw Error(N(331));var i=G;for(G|=4,R=e.current;R!==null;){var l=R,o=l.child;if(R.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Ar(8,c,l)}var p=c.child;if(p!==null)p.return=c,R=p;else for(;R!==null;){c=R;var d=c.sibling,f=c.return;if(dd(c),c===u){R=null;break}if(d!==null){d.return=f,R=d;break}R=f}}}var v=l.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}R=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,R=o;else e:for(;R!==null;){if(l=R,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Ar(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,R=h;break e}R=l.return}}var g=e.current;for(R=g;R!==null;){o=R;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,R=m;else e:for(o=g;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$l(9,a)}}catch(T){pe(a,a.return,T)}if(a===o){R=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,R=_;break e}R=a.return}}if(G=i,at(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(Ll,e)}catch{}r=!0}return r}finally{X=t,nn.transition=n}}return!1}function yc(e,n,t){n=ir(t,n),n=td(e,n,1),e=Zn(e,n,1),n=Le(),e!==null&&(si(e,1,n),$e(e,n))}function pe(e,n,t){if(e.tag===3)yc(e,e,t);else for(;n!==null;){if(n.tag===3){yc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(et===null||!et.has(r))){e=ir(t,e),e=rd(n,e,1),n=Zn(n,e,1),e=Le(),n!==null&&(si(n,1,e),$e(n,e));break}}n=n.return}}function ty(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Le(),e.pingedLanes|=e.suspendedLanes&t,ke===e&&(Se&t)===t&&(we===4||we===3&&(Se&130023424)===Se&&500>de()-Ls?yt(e,0):bs|=t),$e(e,n)}function Sd(e,n){n===0&&(e.mode&1?(n=Si,Si<<=1,!(Si&130023424)&&(Si=4194304)):n=1);var t=Le();e=An(e,n),e!==null&&(si(e,n,t),$e(e,t))}function ry(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Sd(e,t)}function iy(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(n),Sd(e,t)}var Cd;Cd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Oe.current)Ae=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ae=!1,Vg(e,n,t);Ae=!!(e.flags&131072)}else Ae=!1,le&&n.flags&1048576&&Nf(n,ml,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Gi(e,n),e=n.pendingProps;var i=er(n,Ne.current);Qt(n,t),i=Cs(null,n,r,e,i,t);var l=Es();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,De(r)?(l=!0,dl(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ws(n),i.updater=Dl,n.stateNode=i,i._reactInternals=n,ya(n,r,e,t),n=xa(null,n,r,!0,l,t)):(n.tag=0,le&&l&&fs(n),be(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Gi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=oy(r),e=sn(r,e),i){case 0:n=wa(null,n,r,e,t);break e;case 1:n=ac(null,n,r,e,t);break e;case 11:n=lc(null,n,r,e,t);break e;case 14:n=oc(null,n,r,sn(r.type,e),t);break e}throw Error(N(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),wa(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),ac(e,n,r,i,t);case 3:e:{if(ad(n),e===null)throw Error(N(387));r=n.pendingProps,l=n.memoizedState,i=l.element,zf(e,n),vl(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=ir(Error(N(423)),n),n=sc(e,n,r,t,i);break e}else if(r!==i){i=ir(Error(N(424)),n),n=sc(e,n,r,t,i);break e}else for(Ve=Jn(n.stateNode.containerInfo.firstChild),Ge=n,le=!0,cn=null,t=Mf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(nr(),r===i){n=On(e,n,t);break e}be(e,n,r,t)}n=n.child}return n;case 5:return Rf(n),e===null&&ha(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,ua(r,i)?o=null:l!==null&&ua(r,l)&&(n.flags|=32),od(e,n),be(e,n,o,t),n.child;case 6:return e===null&&ha(n),null;case 13:return sd(e,n,t);case 4:return xs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=tr(n,null,r,t):be(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),lc(e,n,r,i,t);case 7:return be(e,n,n.pendingProps,t),n.child;case 8:return be(e,n,n.pendingProps.children,t),n.child;case 12:return be(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,ee(gl,r._currentValue),r._currentValue=o,l!==null)if(dn(l.value,o)){if(l.children===i.children&&!Oe.current){n=On(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Mn(-1,t&-t),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),ma(l.return,t,n),a.lanes|=t;break}s=s.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(N(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),ma(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}be(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Qt(n,t),i=tn(i),r=r(i),n.flags|=1,be(e,n,r,t),n.child;case 14:return r=n.type,i=sn(r,n.pendingProps),i=sn(r.type,i),oc(e,n,r,i,t);case 15:return id(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),Gi(e,n),n.tag=1,De(r)?(e=!0,dl(n)):e=!1,Qt(n,t),nd(n,r,i),ya(n,r,i,t),xa(null,n,r,!0,e,t);case 19:return ud(e,n,t);case 22:return ld(e,n,t)}throw Error(N(156,n.tag))};function Ed(e,n){return Yp(e,n)}function ly(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,n,t,r){return new ly(e,n,t,r)}function Rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oy(e){if(typeof e=="function")return Rs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===es)return 11;if(e===ns)return 14}return 2}function tt(e,n){var t=e.alternate;return t===null?(t=en(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Xi(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")Rs(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case zt:return vt(t.children,i,l,n);case Za:o=8,i|=8;break;case jo:return e=en(12,t,n,i|2),e.elementType=jo,e.lanes=l,e;case Uo:return e=en(13,t,n,i),e.elementType=Uo,e.lanes=l,e;case Ho:return e=en(19,t,n,i),e.elementType=Ho,e.lanes=l,e;case zp:return jl(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mp:o=10;break e;case Fp:o=9;break e;case es:o=11;break e;case ns:o=14;break e;case Hn:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return n=en(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function vt(e,n,t,r){return e=en(7,e,r,n),e.lanes=t,e}function jl(e,n,t,r){return e=en(22,e,r,n),e.elementType=zp,e.lanes=t,e.stateNode={isHidden:!1},e}function So(e,n,t){return e=en(6,e,null,n),e.lanes=t,e}function Co(e,n,t){return n=en(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ay(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ro(0),this.expirationTimes=ro(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ro(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function As(e,n,t,r,i,l,o,a,s){return e=new ay(e,n,t,a,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=en(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ws(l),e}function sy(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ft,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Pd(e){if(!e)return it;e=e._reactInternals;e:{if(Pt(e)!==e||e.tag!==1)throw Error(N(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(De(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(N(171))}if(e.tag===1){var t=e.type;if(De(t))return Pf(e,t,n)}return n}function Td(e,n,t,r,i,l,o,a,s){return e=As(t,r,!0,e,i,l,o,a,s),e.context=Pd(null),t=e.current,r=Le(),i=nt(t),l=Mn(r,i),l.callback=n??null,Zn(t,l,i),e.current.lanes=i,si(e,i,r),$e(e,r),e}function Ul(e,n,t,r){var i=n.current,l=Le(),o=nt(i);return t=Pd(t),n.context===null?n.context=t:n.pendingContext=t,n=Mn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Zn(i,n,o),e!==null&&(fn(e,i,o,l),Wi(e,i,o)),o}function Pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Os(e,n){vc(e,n),(e=e.alternate)&&vc(e,n)}function uy(){return null}var Nd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ds(e){this._internalRoot=e}Hl.prototype.render=Ds.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(N(409));Ul(e,n,null,null)};Hl.prototype.unmount=Ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;St(function(){Ul(null,e,null,null)}),n[Rn]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var n=lf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Vn.length&&n!==0&&n<Vn[t].priority;t++);Vn.splice(t,0,e),t===0&&af(e)}};function $s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wc(){}function cy(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=Pl(o);l.call(u)}}var o=Td(n,r,e,0,null,!1,!1,"",wc);return e._reactRootContainer=o,e[Rn]=o.current,Xr(e.nodeType===8?e.parentNode:e),St(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Pl(s);a.call(u)}}var s=As(e,0,!1,null,null,!1,!1,"",wc);return e._reactRootContainer=s,e[Rn]=s.current,Xr(e.nodeType===8?e.parentNode:e),St(function(){Ul(n,s,t,r)}),s}function Vl(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=Pl(o);a.call(s)}}Ul(n,o,e,i)}else o=cy(t,n,e,i,r);return Pl(o)}tf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Nr(n.pendingLanes);t!==0&&(is(n,t|1),$e(n,de()),!(G&6)&&(lr=de()+500,at()))}break;case 13:St(function(){var r=An(e,1);if(r!==null){var i=Le();fn(r,e,1,i)}}),Os(e,1)}};ls=function(e){if(e.tag===13){var n=An(e,134217728);if(n!==null){var t=Le();fn(n,e,134217728,t)}Os(e,134217728)}};rf=function(e){if(e.tag===13){var n=nt(e),t=An(e,n);if(t!==null){var r=Le();fn(t,e,n,r)}Os(e,n)}};lf=function(){return X};of=function(e,n){var t=X;try{return X=e,n()}finally{X=t}};Zo=function(e,n,t){switch(n){case"input":if(qo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Rl(r);if(!i)throw Error(N(90));Ap(r),qo(r,i)}}}break;case"textarea":Dp(e,t);break;case"select":n=t.value,n!=null&&Vt(e,!!t.multiple,n,!1)}};Vp=Ms;qp=St;var py={usingClientEntryPoint:!1,Events:[ci,Dt,Rl,Hp,Wp,Ms]},_r={findFiberByHostInstance:ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fy={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qp(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zi.isDisabled&&zi.supportsFiber)try{Ll=zi.inject(fy),kn=zi}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;Qe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$s(n))throw Error(N(200));return sy(e,n,null,t)};Qe.createRoot=function(e,n){if(!$s(e))throw Error(N(299));var t=!1,r="",i=Nd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=As(e,1,!1,null,null,t,!1,r,i),e[Rn]=n.current,Xr(e.nodeType===8?e.parentNode:e),new Ds(n)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Qp(n),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return St(e)};Qe.hydrate=function(e,n,t){if(!Wl(n))throw Error(N(200));return Vl(null,e,n,!0,t)};Qe.hydrateRoot=function(e,n,t){if(!$s(e))throw Error(N(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Nd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Td(n,null,e,1,t??null,i,!1,l,o),e[Rn]=n.current,Xr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Hl(n)};Qe.render=function(e,n,t){if(!Wl(n))throw Error(N(200));return Vl(null,e,n,!1,t)};Qe.unmountComponentAtNode=function(e){if(!Wl(e))throw Error(N(40));return e._reactRootContainer?(St(function(){Vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Rn]=null})}),!0):!1};Qe.unstable_batchedUpdates=Ms;Qe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Wl(t))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Vl(e,n,t,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function Id(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Id)}catch(e){console.error(e)}}Id(),Np.exports=Qe;var dy=Np.exports,xc=dy;$o.createRoot=xc.createRoot,$o.hydrateRoot=xc.hydrateRoot;/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var kc="popstate";function hy(e={}){function n(r,i){let{pathname:l,search:o,hash:a}=r.location;return Ma("",{pathname:l,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:li(i)}return gy(n,t,null,e)}function ue(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function hn(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function my(){return Math.random().toString(36).substring(2,10)}function _c(e,n){return{usr:e.state,key:e.key,idx:n}}function Ma(e,n,t=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?ur(n):n,state:t,key:n&&n.key||r||my()}}function li({pathname:e="/",search:n="",hash:t=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),t&&t!=="#"&&(e+=t.charAt(0)==="#"?t:"#"+t),e}function ur(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substring(t),e=e.substring(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substring(r),e=e.substring(0,r)),e&&(n.pathname=e)}return n}function gy(e,n,t,r={}){let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,a="POP",s=null,u=c();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function c(){return(o.state||{idx:null}).idx}function p(){a="POP";let C=c(),h=C==null?null:C-u;u=C,s&&s({action:a,location:x.location,delta:h})}function d(C,h){a="PUSH";let g=Ma(x.location,C,h);u=c()+1;let m=_c(g,u),_=x.createHref(g);try{o.pushState(m,"",_)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(_)}l&&s&&s({action:a,location:x.location,delta:1})}function f(C,h){a="REPLACE";let g=Ma(x.location,C,h);u=c();let m=_c(g,u),_=x.createHref(g);o.replaceState(m,"",_),l&&s&&s({action:a,location:x.location,delta:0})}function v(C){return yy(C)}let x={get action(){return a},get location(){return e(i,o)},listen(C){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(kc,p),s=C,()=>{i.removeEventListener(kc,p),s=null}},createHref(C){return n(i,C)},createURL:v,encodeLocation(C){let h=v(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:f,go(C){return o.go(C)}};return x}function yy(e,n=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),ue(t,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:li(e);return r=r.replace(/ $/,"%20"),!n&&r.startsWith("//")&&(r=t+r),new URL(r,t)}function bd(e,n,t="/"){return vy(e,n,t,!1)}function vy(e,n,t,r){let i=typeof n=="string"?ur(n):n,l=Dn(i.pathname||"/",t);if(l==null)return null;let o=Ld(e);wy(o);let a=null;for(let s=0;a==null&&s<o.length;++s){let u=by(l);a=Ny(o[s],u,r)}return a}function Ld(e,n=[],t=[],r="",i=!1){let l=(o,a,s=i,u)=>{let c={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(r)&&s)return;ue(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let p=Fn([r,c.relativePath]),d=t.concat(c);o.children&&o.children.length>0&&(ue(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Ld(o.children,n,d,p,s)),!(o.path==null&&!o.index)&&n.push({path:p,score:Py(p,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))l(o,a);else for(let u of Md(o.path))l(o,a,!0,u)}),n}function Md(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Md(r.join("/")),a=[];return a.push(...o.map(s=>s===""?l:[l,s].join("/"))),i&&a.push(...o),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function wy(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Ty(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var xy=/^:[\w-]+$/,ky=3,_y=2,Sy=1,Cy=10,Ey=-2,Sc=e=>e==="*";function Py(e,n){let t=e.split("/"),r=t.length;return t.some(Sc)&&(r+=Ey),n&&(r+=_y),t.filter(i=>!Sc(i)).reduce((i,l)=>i+(xy.test(l)?ky:l===""?Sy:Cy),r)}function Ty(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function Ny(e,n,t=!1){let{routesMeta:r}=e,i={},l="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,c=l==="/"?n:n.slice(l.length)||"/",p=Tl({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c),d=s.route;if(!p&&u&&t&&!r[r.length-1].route.index&&(p=Tl({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},c)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Fn([l,p.pathname]),pathnameBase:Ry(Fn([l,p.pathnameBase])),route:d}),p.pathnameBase!=="/"&&(l=Fn([l,p.pathnameBase]))}return o}function Tl(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Iy(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,{paramName:c,isOptional:p},d)=>{if(c==="*"){let v=a[d]||"";o=l.slice(0,l.length-v.length).replace(/(.)\/+$/,"$1")}const f=a[d];return p&&!f?u[c]=void 0:u[c]=(f||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:o,pattern:e}}function Iy(e,n=!1,t=!0){hn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function by(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return hn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function Dn(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}var Ly=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,My=e=>Ly.test(e);function Fy(e,n="/"){let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?ur(e):e,l;if(t)if(My(t))l=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),hn(!1,`Pathnames cannot have embedded double slashes - normalizing ${o} -> ${t}`)}t.startsWith("/")?l=Cc(t.substring(1),"/"):l=Cc(t,n)}else l=n;return{pathname:l,search:Ay(r),hash:Oy(i)}}function Cc(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Eo(e,n,t,r){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zy(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Fd(e){let n=zy(e);return n.map((t,r)=>r===n.length-1?t.pathname:t.pathnameBase)}function zd(e,n,t,r=!1){let i;typeof e=="string"?i=ur(e):(i={...e},ue(!i.pathname||!i.pathname.includes("?"),Eo("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),Eo("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),Eo("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,a;if(o==null)a=t;else{let p=n.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),p-=1;i.pathname=d.join("/")}a=p>=0?n[p]:"/"}let s=Fy(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(l||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}var Fn=e=>e.join("/").replace(/\/\/+/g,"/"),Ry=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ay=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Oy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Dy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Rd=["POST","PUT","PATCH","DELETE"];new Set(Rd);var $y=["GET",...Rd];new Set($y);var cr=S.createContext(null);cr.displayName="DataRouter";var ql=S.createContext(null);ql.displayName="DataRouterState";S.createContext(!1);var Ad=S.createContext({isTransitioning:!1});Ad.displayName="ViewTransition";var By=S.createContext(new Map);By.displayName="Fetchers";var jy=S.createContext(null);jy.displayName="Await";var Cn=S.createContext(null);Cn.displayName="Navigation";var fi=S.createContext(null);fi.displayName="Location";var En=S.createContext({outlet:null,matches:[],isDataRoute:!1});En.displayName="Route";var Bs=S.createContext(null);Bs.displayName="RouteError";function Uy(e,{relative:n}={}){ue(di(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=S.useContext(Cn),{hash:i,pathname:l,search:o}=hi(e,{relative:n}),a=l;return t!=="/"&&(a=l==="/"?t:Fn([t,l])),r.createHref({pathname:a,search:o,hash:i})}function di(){return S.useContext(fi)!=null}function st(){return ue(di(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(fi).location}var Od="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Dd(e){S.useContext(Cn).static||S.useLayoutEffect(e)}function js(){let{isDataRoute:e}=S.useContext(En);return e?t1():Hy()}function Hy(){ue(di(),"useNavigate() may be used only in the context of a <Router> component.");let e=S.useContext(cr),{basename:n,navigator:t}=S.useContext(Cn),{matches:r}=S.useContext(En),{pathname:i}=st(),l=JSON.stringify(Fd(r)),o=S.useRef(!1);return Dd(()=>{o.current=!0}),S.useCallback((s,u={})=>{if(hn(o.current,Od),!o.current)return;if(typeof s=="number"){t.go(s);return}let c=zd(s,JSON.parse(l),i,u.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Fn([n,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[n,t,l,i,e])}S.createContext(null);function Wy(){let{matches:e}=S.useContext(En),n=e[e.length-1];return n?n.params:{}}function hi(e,{relative:n}={}){let{matches:t}=S.useContext(En),{pathname:r}=st(),i=JSON.stringify(Fd(t));return S.useMemo(()=>zd(e,JSON.parse(i),r,n==="path"),[e,i,r,n])}function Vy(e,n){return $d(e,n)}function $d(e,n,t,r,i){var g;ue(di(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=S.useContext(Cn),{matches:o}=S.useContext(En),a=o[o.length-1],s=a?a.params:{},u=a?a.pathname:"/",c=a?a.pathnameBase:"/",p=a&&a.route;{let m=p&&p.path||"";Bd(u,!p||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let d=st(),f;if(n){let m=typeof n=="string"?ur(n):n;ue(c==="/"||((g=m.pathname)==null?void 0:g.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${m.pathname}" was given in the \`location\` prop.`),f=m}else f=d;let v=f.pathname||"/",x=v;if(c!=="/"){let m=c.replace(/^\//,"").split("/");x="/"+v.replace(/^\//,"").split("/").slice(m.length).join("/")}let C=bd(e,{pathname:x});hn(p||C!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),hn(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Xy(C&&C.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:Fn([c,l.encodeLocation?l.encodeLocation(m.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?c:Fn([c,l.encodeLocation?l.encodeLocation(m.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathnameBase])})),o,t,r,i);return n&&h?S.createElement(fi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...f},navigationType:"POP"}},h):h}function qy(){let e=n1(),n=Dy(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:l},"ErrorBoundary")," or"," ",S.createElement("code",{style:l},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},n),t?S.createElement("pre",{style:i},t):null,o)}var Gy=S.createElement(qy,null),Ky=class extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){this.props.onError?this.props.onError(e,n):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?S.createElement(En.Provider,{value:this.props.routeContext},S.createElement(Bs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Qy({routeContext:e,match:n,children:t}){let r=S.useContext(cr);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(En.Provider,{value:e},t)}function Xy(e,n=[],t=null,r=null,i=null){if(e==null){if(!t)return null;if(t.errors)e=t.matches;else if(n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,o=t==null?void 0:t.errors;if(o!=null){let c=l.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);ue(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),l=l.slice(0,Math.min(l.length,c+1))}let a=!1,s=-1;if(t)for(let c=0;c<l.length;c++){let p=l[c];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(s=c),p.route.id){let{loaderData:d,errors:f}=t,v=p.route.loader&&!d.hasOwnProperty(p.route.id)&&(!f||f[p.route.id]===void 0);if(p.route.lazy||v){a=!0,s>=0?l=l.slice(0,s+1):l=[l[0]];break}}}let u=t&&r?(c,p)=>{var d,f;r(c,{location:t.location,params:((f=(d=t.matches)==null?void 0:d[0])==null?void 0:f.params)??{},errorInfo:p})}:void 0;return l.reduceRight((c,p,d)=>{let f,v=!1,x=null,C=null;t&&(f=o&&p.route.id?o[p.route.id]:void 0,x=p.route.errorElement||Gy,a&&(s<0&&d===0?(Bd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,C=null):s===d&&(v=!0,C=p.route.hydrateFallbackElement||null)));let h=n.concat(l.slice(0,d+1)),g=()=>{let m;return f?m=x:v?m=C:p.route.Component?m=S.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=c,S.createElement(Qy,{match:p,routeContext:{outlet:c,matches:h,isDataRoute:t!=null},children:m})};return t&&(p.route.ErrorBoundary||p.route.errorElement||d===0)?S.createElement(Ky,{location:t.location,revalidation:t.revalidation,component:x,error:f,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:u}):g()},null)}function Us(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yy(e){let n=S.useContext(cr);return ue(n,Us(e)),n}function Jy(e){let n=S.useContext(ql);return ue(n,Us(e)),n}function Zy(e){let n=S.useContext(En);return ue(n,Us(e)),n}function Hs(e){let n=Zy(e),t=n.matches[n.matches.length-1];return ue(t.route.id,`${e} can only be used on routes that contain a unique "id"`),t.route.id}function e1(){return Hs("useRouteId")}function n1(){var r;let e=S.useContext(Bs),n=Jy("useRouteError"),t=Hs("useRouteError");return e!==void 0?e:(r=n.errors)==null?void 0:r[t]}function t1(){let{router:e}=Yy("useNavigate"),n=Hs("useNavigate"),t=S.useRef(!1);return Dd(()=>{t.current=!0}),S.useCallback(async(i,l={})=>{hn(t.current,Od),t.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:n,...l}))},[e,n])}var Ec={};function Bd(e,n,t){!n&&!Ec[e]&&(Ec[e]=!0,hn(!1,t))}S.memo(r1);function r1({routes:e,future:n,state:t,unstable_onError:r}){return $d(e,void 0,t,r,n)}function Yi(e){ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function i1({basename:e="/",children:n=null,location:t,navigationType:r="POP",navigator:i,static:l=!1}){ue(!di(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),a=S.useMemo(()=>({basename:o,navigator:i,static:l,future:{}}),[o,i,l]);typeof t=="string"&&(t=ur(t));let{pathname:s="/",search:u="",hash:c="",state:p=null,key:d="default"}=t,f=S.useMemo(()=>{let v=Dn(s,o);return v==null?null:{location:{pathname:v,search:u,hash:c,state:p,key:d},navigationType:r}},[o,s,u,c,p,d,r]);return hn(f!=null,`<Router basename="${o}"> is not able to match the URL "${s}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`),f==null?null:S.createElement(Cn.Provider,{value:a},S.createElement(fi.Provider,{children:n,value:f}))}function l1({children:e,location:n}){return Vy(Fa(e),n)}function Fa(e,n=[]){let t=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let l=[...n,i];if(r.type===S.Fragment){t.push.apply(t,Fa(r.props.children,l));return}ue(r.type===Yi,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ue(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Fa(r.props.children,l)),t.push(o)}),t}var Ji="get",Zi="application/x-www-form-urlencoded";function Gl(e){return e!=null&&typeof e.tagName=="string"}function o1(e){return Gl(e)&&e.tagName.toLowerCase()==="button"}function a1(e){return Gl(e)&&e.tagName.toLowerCase()==="form"}function s1(e){return Gl(e)&&e.tagName.toLowerCase()==="input"}function u1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function c1(e,n){return e.button===0&&(!n||n==="_self")&&!u1(e)}var Ri=null;function p1(){if(Ri===null)try{new FormData(document.createElement("form"),0),Ri=!1}catch{Ri=!0}return Ri}var f1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Po(e){return e!=null&&!f1.has(e)?(hn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zi}"`),null):e}function d1(e,n){let t,r,i,l,o;if(a1(e)){let a=e.getAttribute("action");r=a?Dn(a,n):null,t=e.getAttribute("method")||Ji,i=Po(e.getAttribute("enctype"))||Zi,l=new FormData(e)}else if(o1(e)||s1(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||a.getAttribute("action");if(r=s?Dn(s,n):null,t=e.getAttribute("formmethod")||a.getAttribute("method")||Ji,i=Po(e.getAttribute("formenctype"))||Po(a.getAttribute("enctype"))||Zi,l=new FormData(a,e),!p1()){let{name:u,type:c,value:p}=e;if(c==="image"){let d=u?`${u}.`:"";l.append(`${d}x`,"0"),l.append(`${d}y`,"0")}else u&&l.append(u,p)}}else{if(Gl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Ji,r=null,i=Zi,o=e}return l&&i==="text/plain"&&(o=l,l=void 0),{action:r,method:t.toLowerCase(),encType:i,formData:l,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ws(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function h1(e,n,t){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${t}`:n&&Dn(r.pathname,n)==="/"?r.pathname=`${n.replace(/\/$/,"")}/_root.${t}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${t}`,r}async function m1(e,n){if(e.id in n)return n[e.id];try{let t=await import(e.module);return n[e.id]=t,t}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function g1(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function y1(e,n,t){let r=await Promise.all(e.map(async i=>{let l=n.routes[i.route.id];if(l){let o=await m1(l,t);return o.links?o.links():[]}return[]}));return k1(r.flat(1).filter(g1).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Pc(e,n,t,r,i,l){let o=(s,u)=>t[u]?s.route.id!==t[u].route.id:!0,a=(s,u)=>{var c;return t[u].pathname!==s.pathname||((c=t[u].route.path)==null?void 0:c.endsWith("*"))&&t[u].params["*"]!==s.params["*"]};return l==="assets"?n.filter((s,u)=>o(s,u)||a(s,u)):l==="data"?n.filter((s,u)=>{var p;let c=r.routes[s.route.id];if(!c||!c.hasLoader)return!1;if(o(s,u)||a(s,u))return!0;if(s.route.shouldRevalidate){let d=s.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=t[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function v1(e,n,{includeHydrateFallback:t}={}){return w1(e.map(r=>{let i=n.routes[r.route.id];if(!i)return[];let l=[i.module];return i.clientActionModule&&(l=l.concat(i.clientActionModule)),i.clientLoaderModule&&(l=l.concat(i.clientLoaderModule)),t&&i.hydrateFallbackModule&&(l=l.concat(i.hydrateFallbackModule)),i.imports&&(l=l.concat(i.imports)),l}).flat(1))}function w1(e){return[...new Set(e)]}function x1(e){let n={},t=Object.keys(e).sort();for(let r of t)n[r]=e[r];return n}function k1(e,n){let t=new Set;return new Set(n),e.reduce((r,i)=>{let l=JSON.stringify(x1(i));return t.has(l)||(t.add(l),r.push({key:l,link:i})),r},[])}function jd(){let e=S.useContext(cr);return Ws(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function _1(){let e=S.useContext(ql);return Ws(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Vs=S.createContext(void 0);Vs.displayName="FrameworkContext";function Ud(){let e=S.useContext(Vs);return Ws(e,"You must render this element inside a <HydratedRouter> element"),e}function S1(e,n){let t=S.useContext(Vs),[r,i]=S.useState(!1),[l,o]=S.useState(!1),{onFocus:a,onBlur:s,onMouseEnter:u,onMouseLeave:c,onTouchStart:p}=n,d=S.useRef(null);S.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let x=h=>{h.forEach(g=>{o(g.isIntersecting)})},C=new IntersectionObserver(x,{threshold:.5});return d.current&&C.observe(d.current),()=>{C.disconnect()}}},[e]),S.useEffect(()=>{if(r){let x=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(x)}}},[r]);let f=()=>{i(!0)},v=()=>{i(!1),o(!1)};return t?e!=="intent"?[l,d,{}]:[l,d,{onFocus:Sr(a,f),onBlur:Sr(s,v),onMouseEnter:Sr(u,f),onMouseLeave:Sr(c,v),onTouchStart:Sr(p,f)}]:[!1,d,{}]}function Sr(e,n){return t=>{e&&e(t),t.defaultPrevented||n(t)}}function C1({page:e,...n}){let{router:t}=jd(),r=S.useMemo(()=>bd(t.routes,e,t.basename),[t.routes,e,t.basename]);return r?S.createElement(P1,{page:e,matches:r,...n}):null}function E1(e){let{manifest:n,routeModules:t}=Ud(),[r,i]=S.useState([]);return S.useEffect(()=>{let l=!1;return y1(e,n,t).then(o=>{l||i(o)}),()=>{l=!0}},[e,n,t]),r}function P1({page:e,matches:n,...t}){let r=st(),{manifest:i,routeModules:l}=Ud(),{basename:o}=jd(),{loaderData:a,matches:s}=_1(),u=S.useMemo(()=>Pc(e,n,s,i,r,"data"),[e,n,s,i,r]),c=S.useMemo(()=>Pc(e,n,s,i,r,"assets"),[e,n,s,i,r]),p=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,x=!1;if(n.forEach(h=>{var m;let g=i.routes[h.route.id];!g||!g.hasLoader||(!u.some(_=>_.route.id===h.route.id)&&h.route.id in a&&((m=l[h.route.id])!=null&&m.shouldRevalidate)||g.hasClientLoader?x=!0:v.add(h.route.id))}),v.size===0)return[];let C=h1(e,o,"data");return x&&v.size>0&&C.searchParams.set("_routes",n.filter(h=>v.has(h.route.id)).map(h=>h.route.id).join(",")),[C.pathname+C.search]},[o,a,r,i,u,n,e,l]),d=S.useMemo(()=>v1(c,i),[c,i]),f=E1(c);return S.createElement(S.Fragment,null,p.map(v=>S.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...t})),d.map(v=>S.createElement("link",{key:v,rel:"modulepreload",href:v,...t})),f.map(({key:v,link:x})=>S.createElement("link",{key:v,nonce:t.nonce,...x})))}function T1(...e){return n=>{e.forEach(t=>{typeof t=="function"?t(n):t!=null&&(t.current=n)})}}var Hd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Hd&&(window.__reactRouterVersion="7.9.6")}catch{}function N1({basename:e,children:n,window:t}){let r=S.useRef();r.current==null&&(r.current=hy({window:t,v5Compat:!0}));let i=r.current,[l,o]=S.useState({action:i.action,location:i.location}),a=S.useCallback(s=>{S.startTransition(()=>o(s))},[o]);return S.useLayoutEffect(()=>i.listen(a),[i,a]),S.createElement(i1,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:i})}var Wd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ct=S.forwardRef(function({onClick:n,discover:t="render",prefetch:r="none",relative:i,reloadDocument:l,replace:o,state:a,target:s,to:u,preventScrollReset:c,viewTransition:p,...d},f){let{basename:v}=S.useContext(Cn),x=typeof u=="string"&&Wd.test(u),C,h=!1;if(typeof u=="string"&&x&&(C=u,Hd))try{let O=new URL(window.location.href),z=u.startsWith("//")?new URL(O.protocol+u):new URL(u),A=Dn(z.pathname,v);z.origin===O.origin&&A!=null?u=A+z.search+z.hash:h=!0}catch{hn(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let g=Uy(u,{relative:i}),[m,_,T]=S1(r,d),k=M1(u,{replace:o,state:a,target:s,preventScrollReset:c,relative:i,viewTransition:p});function I(O){n&&n(O),O.defaultPrevented||k(O)}let L=S.createElement("a",{...d,...T,href:C||g,onClick:h||l?n:I,ref:T1(f,_),target:s,"data-discover":!x&&t==="render"?"true":void 0});return m&&!x?S.createElement(S.Fragment,null,L,S.createElement(C1,{page:g})):L});Ct.displayName="Link";var I1=S.forwardRef(function({"aria-current":n="page",caseSensitive:t=!1,className:r="",end:i=!1,style:l,to:o,viewTransition:a,children:s,...u},c){let p=hi(o,{relative:u.relative}),d=st(),f=S.useContext(ql),{navigator:v,basename:x}=S.useContext(Cn),C=f!=null&&O1(p)&&a===!0,h=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,g=d.pathname,m=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(g=g.toLowerCase(),m=m?m.toLowerCase():null,h=h.toLowerCase()),m&&x&&(m=Dn(m,x)||m);const _=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let T=g===h||!i&&g.startsWith(h)&&g.charAt(_)==="/",k=m!=null&&(m===h||!i&&m.startsWith(h)&&m.charAt(h.length)==="/"),I={isActive:T,isPending:k,isTransitioning:C},L=T?n:void 0,O;typeof r=="function"?O=r(I):O=[r,T?"active":null,k?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let z=typeof l=="function"?l(I):l;return S.createElement(Ct,{...u,"aria-current":L,className:O,ref:c,style:z,to:o,viewTransition:a},typeof s=="function"?s(I):s)});I1.displayName="NavLink";var b1=S.forwardRef(({discover:e="render",fetcherKey:n,navigate:t,reloadDocument:r,replace:i,state:l,method:o=Ji,action:a,onSubmit:s,relative:u,preventScrollReset:c,viewTransition:p,...d},f)=>{let v=R1(),x=A1(a,{relative:u}),C=o.toLowerCase()==="get"?"get":"post",h=typeof a=="string"&&Wd.test(a),g=m=>{if(s&&s(m),m.defaultPrevented)return;m.preventDefault();let _=m.nativeEvent.submitter,T=(_==null?void 0:_.getAttribute("formmethod"))||o;v(_||m.currentTarget,{fetcherKey:n,method:T,navigate:t,replace:i,state:l,relative:u,preventScrollReset:c,viewTransition:p})};return S.createElement("form",{ref:f,method:C,action:x,onSubmit:r?s:g,...d,"data-discover":!h&&e==="render"?"true":void 0})});b1.displayName="Form";function L1(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vd(e){let n=S.useContext(cr);return ue(n,L1(e)),n}function M1(e,{target:n,replace:t,state:r,preventScrollReset:i,relative:l,viewTransition:o}={}){let a=js(),s=st(),u=hi(e,{relative:l});return S.useCallback(c=>{if(c1(c,n)){c.preventDefault();let p=t!==void 0?t:li(s)===li(u);a(e,{replace:p,state:r,preventScrollReset:i,relative:l,viewTransition:o})}},[s,a,u,t,r,n,e,i,l,o])}var F1=0,z1=()=>`__${String(++F1)}__`;function R1(){let{router:e}=Vd("useSubmit"),{basename:n}=S.useContext(Cn),t=e1();return S.useCallback(async(r,i={})=>{let{action:l,method:o,encType:a,formData:s,body:u}=d1(r,n);if(i.navigate===!1){let c=i.fetcherKey||z1();await e.fetch(c,t,i.action||l,{preventScrollReset:i.preventScrollReset,formData:s,body:u,formMethod:i.method||o,formEncType:i.encType||a,flushSync:i.flushSync})}else await e.navigate(i.action||l,{preventScrollReset:i.preventScrollReset,formData:s,body:u,formMethod:i.method||o,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:t,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,n,t])}function A1(e,{relative:n}={}){let{basename:t}=S.useContext(Cn),r=S.useContext(En);ue(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),l={...hi(e||".",{relative:n})},o=st();if(e==null){l.search=o.search;let a=new URLSearchParams(l.search),s=a.getAll("index");if(s.some(c=>c==="")){a.delete("index"),s.filter(p=>p).forEach(p=>a.append("index",p));let c=a.toString();l.search=c?`?${c}`:""}}return(!e||e===".")&&i.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Fn([t,l.pathname])),li(l)}function O1(e,{relative:n}={}){let t=S.useContext(Ad);ue(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Vd("useViewTransitionState"),i=hi(e,{relative:n});if(!t.isTransitioning)return!1;let l=Dn(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=Dn(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Tl(i.pathname,o)!=null||Tl(i.pathname,l)!=null}const qd=S.createContext(void 0),D1={zh:{"banner.title":"个人主页","banner.home":"个人主页","banner.publications":"Publications","banner.blog":"Blog","banner.github":"GitHub","profile.bio":"个人简介","profile.education":"学历背景","profile.work":"工作背景","profile.name":"张彬彬","profile.title.prefix":"","profile.title.link":"WeNet 开源社区","profile.title.suffix":"创始人","profile.bio.text":`**大家好，我是张彬彬，欢迎来到我的主页。**

- 🔭 我是 [WeNet 开源社区](https://wenet.org.cn/) 的创始人，我曾创建或参与创建的开源项目有：

  - [WeNet](https://github.com/wenet-e2e/wenet), 流行的，产品优先的端到端语音识别框架。

  - [WenetSpeech](http://wenet.org.cn/WenetSpeech/), 1万小时的大规模多领域中文语音识别开源数据集。

  - 语音识别公开课（创建者之一）: 1) [WeNet 实战课程](https://edu.speechhome.com/p/t_pc/goods_pc_detail/goods_detail/course_27jU7hlWuYqO7ymQ6zYO2yIPEHC?app_id=appzxw56sw27444), 2) [语音识别：从入门到精通](https://www.shenlanxueyuan.com/course/245).

- 🌱 我的兴趣包括语音、深度学习框架和编译器、计算机体系结构。`,"education.master":"硕士","education.bachelor":"学士","education.school":"西北工业大学","education.master.period":"2014 - 2017","education.master.desc":"语音识别、深度学习","education.bachelor.period":"2010 - 2014","education.bachelor.desc":"计算机科学与技术","work.techlead":"Tech Lead","work.speechtechlead":"Speech Tech Lead","work.speechscientist":"Speech Scientist","work.speechintern":"Speech Intern","work.horizon":"地平线","work.mobvoi":"出门问问","work.microsoft":"微软","work.baidu":"百度","work.horizon.current.period":"2021.11 - 至今","work.horizon.current.desc":"语音识别、语音合成、大模型等","work.mobvoi.period":"2018.08 - 2021.11","work.mobvoi.desc":"专注于语音技术和产品，端到端语音识别","work.microsoft.period":"2017.04 - 2018.08","work.microsoft.desc":"专注于声学建模","work.horizon.intern.period":"2016","work.horizon.intern.desc":"专注于声学建模","work.baidu.period":"2015","work.baidu.desc":"专注于声学建模","work.present":"至今"},en:{"banner.title":"Personal Homepage","banner.home":"Home","banner.publications":"Publications","banner.blog":"Blog","banner.github":"GitHub","profile.bio":"About","profile.education":"Education","profile.work":"Work Experience","profile.name":"Binbin Zhang","profile.title.prefix":"Founder of ","profile.title.link":"WeNet Open Source Community","profile.title.suffix":"","profile.bio.text":`**Hi everyone, This is Binbin Zhang, nice to meet you.**

- 🔭 I'm a believer of open source. I'm the founder of [WeNet Community](https://wenet.org.cn/). Here are the open source projects that I created:

  - [WeNet](https://github.com/wenet-e2e/wenet), a popular, production first and production ready end-to-end speech recognition toolkit.

  - [WenetSpeech](http://wenet.org.cn/WenetSpeech/), a 10000+ hours open source multi-domain chinese corpus for speech recognition.

  - Open courses(co-creator) on speech recognition: 1) [WeNet in Action](https://edu.speechhome.com/p/t_pc/goods_pc_detail/goods_detail/course_27jU7hlWuYqO7ymQ6zYO2yIPEHC?app_id=appzxw56sw27444), 2) [Automatic Speech Recognition](https://www.shenlanxueyuan.com/course/245).

- 🌱 My interests include speech, deep learning frameworks and compilers, and computer architecture.`,"education.master":"Master's Degree","education.bachelor":"Bachelor's Degree","education.school":"Northwestern Polytechnical University","education.master.period":"2014 - 2017","education.master.desc":"Speech Recognition, Deep Learning","education.bachelor.period":"2010 - 2014","education.bachelor.desc":"Computer Science and Technology","work.techlead":"Tech Lead","work.speechtechlead":"Speech Tech Lead","work.speechscientist":"Speech Scientist","work.speechintern":"Speech Intern","work.horizon":"Horizon Robotics","work.mobvoi":"Mobvoi","work.microsoft":"Microsoft","work.baidu":"Baidu Inc","work.horizon.current.period":"2021.11 - Present","work.horizon.current.desc":"Speech recognition, speech synthesis, large language models, etc.","work.mobvoi.period":"2018.08 - 2021.11","work.mobvoi.desc":"Focusing on speech technology and products, end-to-end speech recognition","work.microsoft.period":"2017.04 - 2018.08","work.microsoft.desc":"Focusing on acoustic modeling","work.horizon.intern.period":"2016","work.horizon.intern.desc":"Focusing on acoustic modeling","work.baidu.period":"2015","work.baidu.desc":"Focusing on acoustic modeling","work.present":"Present"}},$1=({children:e})=>{const[n,t]=S.useState("zh"),r=i=>{const l=D1[n][i];return l!==void 0?l:i};return P.jsx(qd.Provider,{value:{language:n,setLanguage:t,t:r},children:e})},Gd=()=>{const e=S.useContext(qd);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e},B1=()=>{const{t:e,language:n,setLanguage:t}=Gd(),r=[{nameKey:"banner.publications",url:"https://scholar.google.com/citations?user=IduEkNQAAAAJ",iconType:"google-scholar"},{nameKey:"banner.blog",url:"/blog",iconType:"blog"},{nameKey:"banner.github",url:"https://github.com/robin1001",iconType:"github"}],i=o=>{switch(o.iconType){case"google-scholar":return P.jsx("svg",{className:"banner-link-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:P.jsx("path",{d:"M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"})});case"github":return P.jsx("svg",{className:"banner-link-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:P.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})});case"blog":return P.jsx("svg",{className:"banner-link-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:P.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"})});default:return null}},l=()=>{t(n==="zh"?"en":"zh")};return P.jsx("div",{className:"banner",children:P.jsx("div",{className:"banner-content",children:P.jsxs("div",{className:"banner-header",children:[P.jsxs(Ct,{to:"/",className:"banner-title-link",children:[P.jsx("svg",{className:"banner-link-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:P.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})}),P.jsx("span",{className:"banner-title-text",children:e("banner.title")})]}),P.jsxs("div",{className:"banner-right",children:[P.jsx("div",{className:"banner-links",children:r.map((o,a)=>o.url.startsWith("http")?P.jsxs("a",{href:o.url,className:"banner-link",target:"_blank",rel:"noopener noreferrer",children:[i(o),P.jsx("span",{className:"banner-link-text",children:e(o.nameKey)})]},a):P.jsxs(Ct,{to:o.url,className:"banner-link",children:[i(o),P.jsx("span",{className:"banner-link-text",children:e(o.nameKey)})]},a))}),P.jsx("button",{className:"language-toggle",onClick:l,children:n==="zh"?"EN":"中文"})]})]})})})};function j1(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const U1=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,H1=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,W1={};function Tc(e,n){return(W1.jsx?H1:U1).test(e)}const V1=/[ \t\n\f\r]/g;function q1(e){return typeof e=="object"?e.type==="text"?Nc(e.value):!1:Nc(e)}function Nc(e){return e.replace(V1,"")===""}class mi{constructor(n,t,r){this.normal=t,this.property=n,r&&(this.space=r)}}mi.prototype.normal={};mi.prototype.property={};mi.prototype.space=void 0;function Kd(e,n){const t={},r={};for(const i of e)Object.assign(t,i.property),Object.assign(r,i.normal);return new mi(t,r,n)}function za(e){return e.toLowerCase()}class je{constructor(n,t){this.attribute=t,this.property=n}}je.prototype.attribute="";je.prototype.booleanish=!1;je.prototype.boolean=!1;je.prototype.commaOrSpaceSeparated=!1;je.prototype.commaSeparated=!1;je.prototype.defined=!1;je.prototype.mustUseProperty=!1;je.prototype.number=!1;je.prototype.overloadedBoolean=!1;je.prototype.property="";je.prototype.spaceSeparated=!1;je.prototype.space=void 0;let G1=0;const U=Tt(),me=Tt(),Ra=Tt(),b=Tt(),Z=Tt(),Yt=Tt(),He=Tt();function Tt(){return 2**++G1}const Aa=Object.freeze(Object.defineProperty({__proto__:null,boolean:U,booleanish:me,commaOrSpaceSeparated:He,commaSeparated:Yt,number:b,overloadedBoolean:Ra,spaceSeparated:Z},Symbol.toStringTag,{value:"Module"})),To=Object.keys(Aa);class qs extends je{constructor(n,t,r,i){let l=-1;if(super(n,t),Ic(this,"space",i),typeof r=="number")for(;++l<To.length;){const o=To[l];Ic(this,To[l],(r&Aa[o])===Aa[o])}}}qs.prototype.defined=!0;function Ic(e,n,t){t&&(e[n]=t)}function pr(e){const n={},t={};for(const[r,i]of Object.entries(e.properties)){const l=new qs(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),n[r]=l,t[za(r)]=r,t[za(l.attribute)]=r}return new mi(n,t,e.space)}const Qd=pr({properties:{ariaActiveDescendant:null,ariaAtomic:me,ariaAutoComplete:null,ariaBusy:me,ariaChecked:me,ariaColCount:b,ariaColIndex:b,ariaColSpan:b,ariaControls:Z,ariaCurrent:null,ariaDescribedBy:Z,ariaDetails:null,ariaDisabled:me,ariaDropEffect:Z,ariaErrorMessage:null,ariaExpanded:me,ariaFlowTo:Z,ariaGrabbed:me,ariaHasPopup:null,ariaHidden:me,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Z,ariaLevel:b,ariaLive:null,ariaModal:me,ariaMultiLine:me,ariaMultiSelectable:me,ariaOrientation:null,ariaOwns:Z,ariaPlaceholder:null,ariaPosInSet:b,ariaPressed:me,ariaReadOnly:me,ariaRelevant:null,ariaRequired:me,ariaRoleDescription:Z,ariaRowCount:b,ariaRowIndex:b,ariaRowSpan:b,ariaSelected:me,ariaSetSize:b,ariaSort:null,ariaValueMax:b,ariaValueMin:b,ariaValueNow:b,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function Xd(e,n){return n in e?e[n]:n}function Yd(e,n){return Xd(e,n.toLowerCase())}const K1=pr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Yt,acceptCharset:Z,accessKey:Z,action:null,allow:null,allowFullScreen:U,allowPaymentRequest:U,allowUserMedia:U,alt:null,as:null,async:U,autoCapitalize:null,autoComplete:Z,autoFocus:U,autoPlay:U,blocking:Z,capture:null,charSet:null,checked:U,cite:null,className:Z,cols:b,colSpan:null,content:null,contentEditable:me,controls:U,controlsList:Z,coords:b|Yt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:U,defer:U,dir:null,dirName:null,disabled:U,download:Ra,draggable:me,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:U,formTarget:null,headers:Z,height:b,hidden:Ra,high:b,href:null,hrefLang:null,htmlFor:Z,httpEquiv:Z,id:null,imageSizes:null,imageSrcSet:null,inert:U,inputMode:null,integrity:null,is:null,isMap:U,itemId:null,itemProp:Z,itemRef:Z,itemScope:U,itemType:Z,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:U,low:b,manifest:null,max:null,maxLength:b,media:null,method:null,min:null,minLength:b,multiple:U,muted:U,name:null,nonce:null,noModule:U,noValidate:U,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:U,optimum:b,pattern:null,ping:Z,placeholder:null,playsInline:U,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:U,referrerPolicy:null,rel:Z,required:U,reversed:U,rows:b,rowSpan:b,sandbox:Z,scope:null,scoped:U,seamless:U,selected:U,shadowRootClonable:U,shadowRootDelegatesFocus:U,shadowRootMode:null,shape:null,size:b,sizes:null,slot:null,span:b,spellCheck:me,src:null,srcDoc:null,srcLang:null,srcSet:null,start:b,step:null,style:null,tabIndex:b,target:null,title:null,translate:null,type:null,typeMustMatch:U,useMap:null,value:me,width:b,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Z,axis:null,background:null,bgColor:null,border:b,borderColor:null,bottomMargin:b,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:U,declare:U,event:null,face:null,frame:null,frameBorder:null,hSpace:b,leftMargin:b,link:null,longDesc:null,lowSrc:null,marginHeight:b,marginWidth:b,noResize:U,noHref:U,noShade:U,noWrap:U,object:null,profile:null,prompt:null,rev:null,rightMargin:b,rules:null,scheme:null,scrolling:me,standby:null,summary:null,text:null,topMargin:b,valueType:null,version:null,vAlign:null,vLink:null,vSpace:b,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:U,disableRemotePlayback:U,prefix:null,property:null,results:b,security:null,unselectable:null},space:"html",transform:Yd}),Q1=pr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:He,accentHeight:b,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:b,amplitude:b,arabicForm:null,ascent:b,attributeName:null,attributeType:null,azimuth:b,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:b,by:null,calcMode:null,capHeight:b,className:Z,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:b,diffuseConstant:b,direction:null,display:null,dur:null,divisor:b,dominantBaseline:null,download:U,dx:null,dy:null,edgeMode:null,editable:null,elevation:b,enableBackground:null,end:null,event:null,exponent:b,externalResourcesRequired:null,fill:null,fillOpacity:b,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Yt,g2:Yt,glyphName:Yt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:b,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:b,horizOriginX:b,horizOriginY:b,id:null,ideographic:b,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:b,k:b,k1:b,k2:b,k3:b,k4:b,kernelMatrix:He,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:b,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:b,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:b,overlineThickness:b,paintOrder:null,panose1:null,path:null,pathLength:b,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Z,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:b,pointsAtY:b,pointsAtZ:b,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:He,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:He,rev:He,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:He,requiredFeatures:He,requiredFonts:He,requiredFormats:He,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:b,specularExponent:b,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:b,strikethroughThickness:b,string:null,stroke:null,strokeDashArray:He,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:b,strokeOpacity:b,strokeWidth:null,style:null,surfaceScale:b,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:He,tabIndex:b,tableValues:null,target:null,targetX:b,targetY:b,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:He,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:b,underlineThickness:b,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:b,values:null,vAlphabetic:b,vMathematical:b,vectorEffect:null,vHanging:b,vIdeographic:b,version:null,vertAdvY:b,vertOriginX:b,vertOriginY:b,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:b,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Xd}),Jd=pr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),Zd=pr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Yd}),eh=pr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),X1={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Y1=/[A-Z]/g,bc=/-[a-z]/g,J1=/^data[-\w.:]+$/i;function Z1(e,n){const t=za(n);let r=n,i=je;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&J1.test(n)){if(n.charAt(4)==="-"){const l=n.slice(5).replace(bc,nv);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=n.slice(4);if(!bc.test(l)){let o=l.replace(Y1,ev);o.charAt(0)!=="-"&&(o="-"+o),n="data"+o}}i=qs}return new i(r,n)}function ev(e){return"-"+e.toLowerCase()}function nv(e){return e.charAt(1).toUpperCase()}const tv=Kd([Qd,K1,Jd,Zd,eh],"html"),Gs=Kd([Qd,Q1,Jd,Zd,eh],"svg");function rv(e){return e.join(" ").trim()}var Ks={},Lc=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,iv=/\n/g,lv=/^\s*/,ov=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,av=/^:\s*/,sv=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,uv=/^[;\s]*/,cv=/^\s+|\s+$/g,pv=`
`,Mc="/",Fc="*",dt="",fv="comment",dv="declaration";function hv(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function i(v){var x=v.match(iv);x&&(t+=x.length);var C=v.lastIndexOf(pv);r=~C?v.length-C:r+v.length}function l(){var v={line:t,column:r};return function(x){return x.position=new o(v),u(),x}}function o(v){this.start=v,this.end={line:t,column:r},this.source=n.source}o.prototype.content=e;function a(v){var x=new Error(n.source+":"+t+":"+r+": "+v);if(x.reason=v,x.filename=n.source,x.line=t,x.column=r,x.source=e,!n.silent)throw x}function s(v){var x=v.exec(e);if(x){var C=x[0];return i(C),e=e.slice(C.length),x}}function u(){s(lv)}function c(v){var x;for(v=v||[];x=p();)x!==!1&&v.push(x);return v}function p(){var v=l();if(!(Mc!=e.charAt(0)||Fc!=e.charAt(1))){for(var x=2;dt!=e.charAt(x)&&(Fc!=e.charAt(x)||Mc!=e.charAt(x+1));)++x;if(x+=2,dt===e.charAt(x-1))return a("End of comment missing");var C=e.slice(2,x-2);return r+=2,i(C),e=e.slice(x),r+=2,v({type:fv,comment:C})}}function d(){var v=l(),x=s(ov);if(x){if(p(),!s(av))return a("property missing ':'");var C=s(sv),h=v({type:dv,property:zc(x[0].replace(Lc,dt)),value:C?zc(C[0].replace(Lc,dt)):dt});return s(uv),h}}function f(){var v=[];c(v);for(var x;x=d();)x!==!1&&(v.push(x),c(v));return v}return u(),f()}function zc(e){return e?e.replace(cv,dt):dt}var mv=hv,gv=tl&&tl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ks,"__esModule",{value:!0});Ks.default=vv;const yv=gv(mv);function vv(e,n){let t=null;if(!e||typeof e!="string")return t;const r=(0,yv.default)(e),i=typeof n=="function";return r.forEach(l=>{if(l.type!=="declaration")return;const{property:o,value:a}=l;i?n(o,a,l):a&&(t=t||{},t[o]=a)}),t}var Kl={};Object.defineProperty(Kl,"__esModule",{value:!0});Kl.camelCase=void 0;var wv=/^--[a-zA-Z0-9_-]+$/,xv=/-([a-z])/g,kv=/^[^-]+$/,_v=/^-(webkit|moz|ms|o|khtml)-/,Sv=/^-(ms)-/,Cv=function(e){return!e||kv.test(e)||wv.test(e)},Ev=function(e,n){return n.toUpperCase()},Rc=function(e,n){return"".concat(n,"-")},Pv=function(e,n){return n===void 0&&(n={}),Cv(e)?e:(e=e.toLowerCase(),n.reactCompat?e=e.replace(Sv,Rc):e=e.replace(_v,Rc),e.replace(xv,Ev))};Kl.camelCase=Pv;var Tv=tl&&tl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Nv=Tv(Ks),Iv=Kl;function Oa(e,n){var t={};return!e||typeof e!="string"||(0,Nv.default)(e,function(r,i){r&&i&&(t[(0,Iv.camelCase)(r,n)]=i)}),t}Oa.default=Oa;var bv=Oa;const Lv=Va(bv),nh=th("end"),Qs=th("start");function th(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Mv(e){const n=Qs(e),t=nh(e);if(n&&t)return{start:n,end:t}}function $r(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Ac(e.position):"start"in e||"end"in e?Ac(e):"line"in e||"column"in e?Da(e):""}function Da(e){return Oc(e&&e.line)+":"+Oc(e&&e.column)}function Ac(e){return Da(e&&e.start)+"-"+Da(e&&e.end)}function Oc(e){return e&&typeof e=="number"?e:1}class Ie extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",l={},o=!1;if(t&&("line"in t&&"column"in t?l={place:t}:"start"in t&&"end"in t?l={place:t}:"type"in t?l={ancestors:[t],place:t.position}:l={...t}),typeof n=="string"?i=n:!l.cause&&n&&(o=!0,i=n.message,l.cause=n),!l.ruleId&&!l.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?l.ruleId=r:(l.source=r.slice(0,s),l.ruleId=r.slice(s+1))}if(!l.place&&l.ancestors&&l.ancestors){const s=l.ancestors[l.ancestors.length-1];s&&(l.place=s.position)}const a=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=$r(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=o&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ie.prototype.file="";Ie.prototype.name="";Ie.prototype.reason="";Ie.prototype.message="";Ie.prototype.stack="";Ie.prototype.column=void 0;Ie.prototype.line=void 0;Ie.prototype.ancestors=void 0;Ie.prototype.cause=void 0;Ie.prototype.fatal=void 0;Ie.prototype.place=void 0;Ie.prototype.ruleId=void 0;Ie.prototype.source=void 0;const Xs={}.hasOwnProperty,Fv=new Map,zv=/[A-Z]/g,Rv=new Set(["table","tbody","thead","tfoot","tr"]),Av=new Set(["td","th"]),rh="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Ov(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Vv(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Wv(t,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Gs:tv,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},l=ih(i,e,void 0);return l&&typeof l!="string"?l:i.create(e,i.Fragment,{children:l||void 0},void 0)}function ih(e,n,t){if(n.type==="element")return Dv(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return $v(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return jv(e,n,t);if(n.type==="mdxjsEsm")return Bv(e,n);if(n.type==="root")return Uv(e,n,t);if(n.type==="text")return Hv(e,n)}function Dv(e,n,t){const r=e.schema;let i=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Gs,e.schema=i),e.ancestors.push(n);const l=oh(e,n.tagName,!1),o=qv(e,n);let a=Js(e,n);return Rv.has(n.tagName)&&(a=a.filter(function(s){return typeof s=="string"?!q1(s):!0})),lh(e,o,l,n),Ys(o,a),e.ancestors.pop(),e.schema=r,e.create(n,l,o,t)}function $v(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}oi(e,n.position)}function Bv(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);oi(e,n.position)}function jv(e,n,t){const r=e.schema;let i=r;n.name==="svg"&&r.space==="html"&&(i=Gs,e.schema=i),e.ancestors.push(n);const l=n.name===null?e.Fragment:oh(e,n.name,!0),o=Gv(e,n),a=Js(e,n);return lh(e,o,l,n),Ys(o,a),e.ancestors.pop(),e.schema=r,e.create(n,l,o,t)}function Uv(e,n,t){const r={};return Ys(r,Js(e,n)),e.create(n,e.Fragment,r,t)}function Hv(e,n){return n.value}function lh(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function Ys(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function Wv(e,n,t){return r;function r(i,l,o,a){const u=Array.isArray(o.children)?t:n;return a?u(l,o,a):u(l,o)}}function Vv(e,n){return t;function t(r,i,l,o){const a=Array.isArray(l.children),s=Qs(r);return n(i,l,o,a,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function qv(e,n){const t={};let r,i;for(i in n.properties)if(i!=="children"&&Xs.call(n.properties,i)){const l=Kv(e,i,n.properties[i]);if(l){const[o,a]=l;e.tableCellAlignToStyle&&o==="align"&&typeof a=="string"&&Av.has(n.tagName)?r=a:t[o]=a}}if(r){const l=t.style||(t.style={});l[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function Gv(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const l=r.data.estree.body[0];l.type;const o=l.expression;o.type;const a=o.properties[0];a.type,Object.assign(t,e.evaluater.evaluateExpression(a.argument))}else oi(e,n.position);else{const i=r.name;let l;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,l=e.evaluater.evaluateExpression(a.expression)}else oi(e,n.position);else l=r.value===null?!0:r.value;t[i]=l}return t}function Js(e,n){const t=[];let r=-1;const i=e.passKeys?new Map:Fv;for(;++r<n.children.length;){const l=n.children[r];let o;if(e.passKeys){const s=l.type==="element"?l.tagName:l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement"?l.name:void 0;if(s){const u=i.get(s)||0;o=s+"-"+u,i.set(s,u+1)}}const a=ih(e,l,o);a!==void 0&&t.push(a)}return t}function Kv(e,n,t){const r=Z1(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?j1(t):rv(t)),r.property==="style"){let i=typeof t=="object"?t:Qv(e,String(t));return e.stylePropertyNameCase==="css"&&(i=Xv(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?X1[r.property]||r.property:r.attribute,t]}}function Qv(e,n){try{return Lv(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const r=t,i=new Ie("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=rh+"#cannot-parse-style-attribute",i}}function oh(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let l=-1,o;for(;++l<i.length;){const a=Tc(i[l])?{type:"Identifier",name:i[l]}:{type:"Literal",value:i[l]};o=o?{type:"MemberExpression",object:o,property:a,computed:!!(l&&a.type==="Literal"),optional:!1}:a}r=o}else r=Tc(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const i=r.value;return Xs.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);oi(e)}function oi(e,n){const t=new Ie("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=rh+"#cannot-handle-mdx-estrees-without-createevaluater",t}function Xv(e){const n={};let t;for(t in e)Xs.call(e,t)&&(n[Yv(t)]=e[t]);return n}function Yv(e){let n=e.replace(zv,Jv);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function Jv(e){return"-"+e.toLowerCase()}const No={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Zv={};function e0(e,n){const t=Zv,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return ah(e,r,i)}function ah(e,n,t){if(n0(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Dc(e.children,n,t)}return Array.isArray(e)?Dc(e,n,t):""}function Dc(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=ah(e[i],n,t);return r.join("")}function n0(e){return!!(e&&typeof e=="object")}const $c=document.createElement("i");function Zs(e){const n="&"+e+";";$c.innerHTML=n;const t=$c.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function Sn(e,n,t,r){const i=e.length;let l=0,o;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)o=Array.from(r),o.unshift(n,t),e.splice(...o);else for(t&&e.splice(n,t);l<r.length;)o=r.slice(l,l+1e4),o.unshift(n,0),e.splice(...o),l+=1e4,n+=1e4}function Ze(e,n){return e.length>0?(Sn(e,e.length,0,n),e):n}const Bc={}.hasOwnProperty;function t0(e){const n={};let t=-1;for(;++t<e.length;)r0(n,e[t]);return n}function r0(e,n){let t;for(t in n){const i=(Bc.call(e,t)?e[t]:void 0)||(e[t]={}),l=n[t];let o;if(l)for(o in l){Bc.call(i,o)||(i[o]=[]);const a=l[o];i0(i[o],Array.isArray(a)?a:a?[a]:[])}}}function i0(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);Sn(e,0,0,r)}function sh(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function Jt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const xn=ut(/[A-Za-z]/),qe=ut(/[\dA-Za-z]/),l0=ut(/[#-'*+\--9=?A-Z^-~]/);function $a(e){return e!==null&&(e<32||e===127)}const Ba=ut(/\d/),o0=ut(/[\dA-Fa-f]/),a0=ut(/[!-/:-@[-`{-~]/);function B(e){return e!==null&&e<-2}function Be(e){return e!==null&&(e<0||e===32)}function K(e){return e===-2||e===-1||e===32}const s0=ut(new RegExp("\\p{P}|\\p{S}","u")),u0=ut(/\s/);function ut(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function fr(e){const n=[];let t=-1,r=0,i=0;for(;++t<e.length;){const l=e.charCodeAt(t);let o="";if(l===37&&qe(e.charCodeAt(t+1))&&qe(e.charCodeAt(t+2)))i=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(o=String.fromCharCode(l));else if(l>55295&&l<57344){const a=e.charCodeAt(t+1);l<56320&&a>56319&&a<57344?(o=String.fromCharCode(l,a),i=1):o="�"}else o=String.fromCharCode(l);o&&(n.push(e.slice(r,t),encodeURIComponent(o)),r=t+i+1,o=""),i&&(t+=i,i=0)}return n.join("")+e.slice(r)}function ne(e,n,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let l=0;return o;function o(s){return K(s)?(e.enter(t),a(s)):n(s)}function a(s){return K(s)&&l++<i?(e.consume(s),a):(e.exit(t),n(s))}}const c0={tokenize:p0};function p0(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ne(e,n,"linePrefix")}function i(a){return e.enter("paragraph"),l(a)}function l(a){const s=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=s),t=s,o(a)}function o(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return B(a)?(e.consume(a),e.exit("chunkText"),l):(e.consume(a),o)}}const f0={tokenize:d0},jc={tokenize:h0};function d0(e){const n=this,t=[];let r=0,i,l,o;return a;function a(m){if(r<t.length){const _=t[r];return n.containerState=_[1],e.attempt(_[0].continuation,s,u)(m)}return u(m)}function s(m){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&g();const _=n.events.length;let T=_,k;for(;T--;)if(n.events[T][0]==="exit"&&n.events[T][1].type==="chunkFlow"){k=n.events[T][1].end;break}h(r);let I=_;for(;I<n.events.length;)n.events[I][1].end={...k},I++;return Sn(n.events,T+1,0,n.events.slice(_)),n.events.length=I,u(m)}return a(m)}function u(m){if(r===t.length){if(!i)return d(m);if(i.currentConstruct&&i.currentConstruct.concrete)return v(m);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(jc,c,p)(m)}function c(m){return i&&g(),h(r),d(m)}function p(m){return n.parser.lazy[n.now().line]=r!==t.length,o=n.now().offset,v(m)}function d(m){return n.containerState={},e.attempt(jc,f,v)(m)}function f(m){return r++,t.push([n.currentConstruct,n.containerState]),d(m)}function v(m){if(m===null){i&&g(),h(0),e.consume(m);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:l}),x(m)}function x(m){if(m===null){C(e.exit("chunkFlow"),!0),h(0),e.consume(m);return}return B(m)?(e.consume(m),C(e.exit("chunkFlow")),r=0,n.interrupt=void 0,a):(e.consume(m),x)}function C(m,_){const T=n.sliceStream(m);if(_&&T.push(null),m.previous=l,l&&(l.next=m),l=m,i.defineSkip(m.start),i.write(T),n.parser.lazy[m.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<o&&(!i.events[k][1].end||i.events[k][1].end.offset>o))return;const I=n.events.length;let L=I,O,z;for(;L--;)if(n.events[L][0]==="exit"&&n.events[L][1].type==="chunkFlow"){if(O){z=n.events[L][1].end;break}O=!0}for(h(r),k=I;k<n.events.length;)n.events[k][1].end={...z},k++;Sn(n.events,L+1,0,n.events.slice(I)),n.events.length=k}}function h(m){let _=t.length;for(;_-- >m;){const T=t[_];n.containerState=T[1],T[0].exit.call(n,e)}t.length=m}function g(){i.write([null]),l=void 0,i=void 0,n.containerState._closeFlow=void 0}}function h0(e,n,t){return ne(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Uc(e){if(e===null||Be(e)||u0(e))return 1;if(s0(e))return 2}function eu(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const l=e[i].resolveAll;l&&!r.includes(l)&&(n=l(n,t),r.push(l))}return n}const ja={name:"attention",resolveAll:m0,tokenize:g0};function m0(e,n){let t=-1,r,i,l,o,a,s,u,c;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const p={...e[r][1].end},d={...e[t][1].start};Hc(p,-s),Hc(d,s),o={type:s>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},a={type:s>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:d},l={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},i={type:s>1?"strong":"emphasis",start:{...o.start},end:{...a.end}},e[r][1].end={...o.start},e[t][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Ze(u,[["enter",e[r][1],n],["exit",e[r][1],n]])),u=Ze(u,[["enter",i,n],["enter",o,n],["exit",o,n],["enter",l,n]]),u=Ze(u,eu(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),u=Ze(u,[["exit",l,n],["enter",a,n],["exit",a,n],["exit",i,n]]),e[t][1].end.offset-e[t][1].start.offset?(c=2,u=Ze(u,[["enter",e[t][1],n],["exit",e[t][1],n]])):c=0,Sn(e,r-1,t-r+3,u),t=r+u.length-c-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function g0(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Uc(r);let l;return o;function o(s){return l=s,e.enter("attentionSequence"),a(s)}function a(s){if(s===l)return e.consume(s),a;const u=e.exit("attentionSequence"),c=Uc(s),p=!c||c===2&&i||t.includes(s),d=!i||i===2&&c||t.includes(r);return u._open=!!(l===42?p:p&&(i||!d)),u._close=!!(l===42?d:d&&(c||!p)),n(s)}}function Hc(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const y0={name:"autolink",tokenize:v0};function v0(e,n,t){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(f){return xn(f)?(e.consume(f),o):f===64?t(f):u(f)}function o(f){return f===43||f===45||f===46||qe(f)?(r=1,a(f)):u(f)}function a(f){return f===58?(e.consume(f),r=0,s):(f===43||f===45||f===46||qe(f))&&r++<32?(e.consume(f),a):(r=0,u(f))}function s(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),n):f===null||f===32||f===60||$a(f)?t(f):(e.consume(f),s)}function u(f){return f===64?(e.consume(f),c):l0(f)?(e.consume(f),u):t(f)}function c(f){return qe(f)?p(f):t(f)}function p(f){return f===46?(e.consume(f),r=0,c):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),n):d(f)}function d(f){if((f===45||qe(f))&&r++<63){const v=f===45?d:p;return e.consume(f),v}return t(f)}}const Ql={partial:!0,tokenize:w0};function w0(e,n,t){return r;function r(l){return K(l)?ne(e,i,"linePrefix")(l):i(l)}function i(l){return l===null||B(l)?n(l):t(l)}}const uh={continuation:{tokenize:k0},exit:_0,name:"blockQuote",tokenize:x0};function x0(e,n,t){const r=this;return i;function i(o){if(o===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),l}return t(o)}function l(o){return K(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(o))}}function k0(e,n,t){const r=this;return i;function i(o){return K(o)?ne(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):l(o)}function l(o){return e.attempt(uh,n,t)(o)}}function _0(e){e.exit("blockQuote")}const ch={name:"characterEscape",tokenize:S0};function S0(e,n,t){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),i}function i(l){return a0(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(l)}}const ph={name:"characterReference",tokenize:C0};function C0(e,n,t){const r=this;let i=0,l,o;return a;function a(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),s}function s(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),l=31,o=qe,c(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,o=o0,c):(e.enter("characterReferenceValue"),l=7,o=Ba,c(p))}function c(p){if(p===59&&i){const d=e.exit("characterReferenceValue");return o===qe&&!Zs(r.sliceSerialize(d))?t(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return o(p)&&i++<l?(e.consume(p),c):t(p)}}const Wc={partial:!0,tokenize:P0},Vc={concrete:!0,name:"codeFenced",tokenize:E0};function E0(e,n,t){const r=this,i={partial:!0,tokenize:T};let l=0,o=0,a;return s;function s(k){return u(k)}function u(k){const I=r.events[r.events.length-1];return l=I&&I[1].type==="linePrefix"?I[2].sliceSerialize(I[1],!0).length:0,a=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(k)}function c(k){return k===a?(o++,e.consume(k),c):o<3?t(k):(e.exit("codeFencedFenceSequence"),K(k)?ne(e,p,"whitespace")(k):p(k))}function p(k){return k===null||B(k)?(e.exit("codeFencedFence"),r.interrupt?n(k):e.check(Wc,x,_)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),d(k))}function d(k){return k===null||B(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(k)):K(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ne(e,f,"whitespace")(k)):k===96&&k===a?t(k):(e.consume(k),d)}function f(k){return k===null||B(k)?p(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),v(k))}function v(k){return k===null||B(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(k)):k===96&&k===a?t(k):(e.consume(k),v)}function x(k){return e.attempt(i,_,C)(k)}function C(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),h}function h(k){return l>0&&K(k)?ne(e,g,"linePrefix",l+1)(k):g(k)}function g(k){return k===null||B(k)?e.check(Wc,x,_)(k):(e.enter("codeFlowValue"),m(k))}function m(k){return k===null||B(k)?(e.exit("codeFlowValue"),g(k)):(e.consume(k),m)}function _(k){return e.exit("codeFenced"),n(k)}function T(k,I,L){let O=0;return z;function z(W){return k.enter("lineEnding"),k.consume(W),k.exit("lineEnding"),A}function A(W){return k.enter("codeFencedFence"),K(W)?ne(k,D,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(W):D(W)}function D(W){return W===a?(k.enter("codeFencedFenceSequence"),Q(W)):L(W)}function Q(W){return W===a?(O++,k.consume(W),Q):O>=o?(k.exit("codeFencedFenceSequence"),K(W)?ne(k,oe,"whitespace")(W):oe(W)):L(W)}function oe(W){return W===null||B(W)?(k.exit("codeFencedFence"),I(W)):L(W)}}}function P0(e,n,t){const r=this;return i;function i(o){return o===null?t(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l)}function l(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}const Io={name:"codeIndented",tokenize:N0},T0={partial:!0,tokenize:I0};function N0(e,n,t){const r=this;return i;function i(u){return e.enter("codeIndented"),ne(e,l,"linePrefix",5)(u)}function l(u){const c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?o(u):t(u)}function o(u){return u===null?s(u):B(u)?e.attempt(T0,o,s)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||B(u)?(e.exit("codeFlowValue"),o(u)):(e.consume(u),a)}function s(u){return e.exit("codeIndented"),n(u)}}function I0(e,n,t){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?t(o):B(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):ne(e,l,"linePrefix",5)(o)}function l(o){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?n(o):B(o)?i(o):t(o)}}const b0={name:"codeText",previous:M0,resolve:L0,tokenize:F0};function L0(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function M0(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function F0(e,n,t){let r=0,i,l;return o;function o(p){return e.enter("codeText"),e.enter("codeTextSequence"),a(p)}function a(p){return p===96?(e.consume(p),r++,a):(e.exit("codeTextSequence"),s(p))}function s(p){return p===null?t(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),s):p===96?(l=e.enter("codeTextSequence"),i=0,c(p)):B(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||B(p)?(e.exit("codeTextData"),s(p)):(e.consume(p),u)}function c(p){return p===96?(e.consume(p),i++,c):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(p)):(l.type="codeTextData",u(p))}}class z0{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const l=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Cr(this.left,r),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Cr(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Cr(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);Cr(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Cr(this.left,t.reverse())}}}function Cr(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function fh(e){const n={};let t=-1,r,i,l,o,a,s,u;const c=new z0(e);for(;++t<c.length;){for(;t in n;)t=n[t];if(r=c.get(t),t&&r[1].type==="chunkFlow"&&c.get(t-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,l=0,l<s.length&&s[l][1].type==="lineEndingBlank"&&(l+=2),l<s.length&&s[l][1].type==="content"))for(;++l<s.length&&s[l][1].type!=="content";)s[l][1].type==="chunkText"&&(s[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,R0(c,t)),t=n[t],u=!0);else if(r[1]._container){for(l=t,i=void 0;l--;)if(o=c.get(l),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(c.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=l);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...c.get(i)[1].start},a=c.slice(i,t),a.unshift(r),c.splice(i,t-i+1,a))}}return Sn(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function R0(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const l=[];let o=t._tokenizer;o||(o=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const a=o.events,s=[],u={};let c,p,d=-1,f=t,v=0,x=0;const C=[x];for(;f;){for(;e.get(++i)[1]!==f;);l.push(i),f._tokenizer||(c=r.sliceStream(f),f.next||c.push(null),p&&o.defineSkip(f.start),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(c),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),p=f,f=f.next}for(f=t;++d<a.length;)a[d][0]==="exit"&&a[d-1][0]==="enter"&&a[d][1].type===a[d-1][1].type&&a[d][1].start.line!==a[d][1].end.line&&(x=d+1,C.push(x),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(o.events=[],f?(f._tokenizer=void 0,f.previous=void 0):C.pop(),d=C.length;d--;){const h=a.slice(C[d],C[d+1]),g=l.pop();s.push([g,g+h.length-1]),e.splice(g,2,h)}for(s.reverse(),d=-1;++d<s.length;)u[v+s[d][0]]=v+s[d][1],v+=s[d][1]-s[d][0]-1;return u}const A0={resolve:D0,tokenize:$0},O0={partial:!0,tokenize:B0};function D0(e){return fh(e),e}function $0(e,n){let t;return r;function r(a){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?l(a):B(a)?e.check(O0,o,l)(a):(e.consume(a),i)}function l(a){return e.exit("chunkContent"),e.exit("content"),n(a)}function o(a){return e.consume(a),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function B0(e,n,t){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),ne(e,l,"linePrefix")}function l(o){if(o===null||B(o))return t(o);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?n(o):e.interrupt(r.parser.constructs.flow,t,n)(o)}}function dh(e,n,t,r,i,l,o,a,s){const u=s||Number.POSITIVE_INFINITY;let c=0;return p;function p(h){return h===60?(e.enter(r),e.enter(i),e.enter(l),e.consume(h),e.exit(l),d):h===null||h===32||h===41||$a(h)?t(h):(e.enter(r),e.enter(o),e.enter(a),e.enter("chunkString",{contentType:"string"}),x(h))}function d(h){return h===62?(e.enter(l),e.consume(h),e.exit(l),e.exit(i),e.exit(r),n):(e.enter(a),e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===62?(e.exit("chunkString"),e.exit(a),d(h)):h===null||h===60||B(h)?t(h):(e.consume(h),h===92?v:f)}function v(h){return h===60||h===62||h===92?(e.consume(h),f):f(h)}function x(h){return!c&&(h===null||h===41||Be(h))?(e.exit("chunkString"),e.exit(a),e.exit(o),e.exit(r),n(h)):c<u&&h===40?(e.consume(h),c++,x):h===41?(e.consume(h),c--,x):h===null||h===32||h===40||$a(h)?t(h):(e.consume(h),h===92?C:x)}function C(h){return h===40||h===41||h===92?(e.consume(h),x):x(h)}}function hh(e,n,t,r,i,l){const o=this;let a=0,s;return u;function u(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(l),c}function c(f){return a>999||f===null||f===91||f===93&&!s||f===94&&!a&&"_hiddenFootnoteSupport"in o.parser.constructs?t(f):f===93?(e.exit(l),e.enter(i),e.consume(f),e.exit(i),e.exit(r),n):B(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),p(f))}function p(f){return f===null||f===91||f===93||B(f)||a++>999?(e.exit("chunkString"),c(f)):(e.consume(f),s||(s=!K(f)),f===92?d:p)}function d(f){return f===91||f===92||f===93?(e.consume(f),a++,p):p(f)}}function mh(e,n,t,r,i,l){let o;return a;function a(d){return d===34||d===39||d===40?(e.enter(r),e.enter(i),e.consume(d),e.exit(i),o=d===40?41:d,s):t(d)}function s(d){return d===o?(e.enter(i),e.consume(d),e.exit(i),e.exit(r),n):(e.enter(l),u(d))}function u(d){return d===o?(e.exit(l),s(o)):d===null?t(d):B(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),ne(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(d))}function c(d){return d===o||d===null||B(d)?(e.exit("chunkString"),u(d)):(e.consume(d),d===92?p:c)}function p(d){return d===o||d===92?(e.consume(d),c):c(d)}}function Br(e,n){let t;return r;function r(i){return B(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):K(i)?ne(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const j0={name:"definition",tokenize:H0},U0={partial:!0,tokenize:W0};function H0(e,n,t){const r=this;let i;return l;function l(f){return e.enter("definition"),o(f)}function o(f){return hh.call(r,e,a,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function a(f){return i=Jt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),s):t(f)}function s(f){return Be(f)?Br(e,u)(f):u(f)}function u(f){return dh(e,c,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function c(f){return e.attempt(U0,p,p)(f)}function p(f){return K(f)?ne(e,d,"whitespace")(f):d(f)}function d(f){return f===null||B(f)?(e.exit("definition"),r.parser.defined.push(i),n(f)):t(f)}}function W0(e,n,t){return r;function r(a){return Be(a)?Br(e,i)(a):t(a)}function i(a){return mh(e,l,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function l(a){return K(a)?ne(e,o,"whitespace")(a):o(a)}function o(a){return a===null||B(a)?n(a):t(a)}}const V0={name:"hardBreakEscape",tokenize:q0};function q0(e,n,t){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),i}function i(l){return B(l)?(e.exit("hardBreakEscape"),n(l)):t(l)}}const G0={name:"headingAtx",resolve:K0,tokenize:Q0};function K0(e,n){let t=e.length-2,r=3,i,l;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},l={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},Sn(e,r,t-r+1,[["enter",i,n],["enter",l,n],["exit",l,n],["exit",i,n]])),e}function Q0(e,n,t){let r=0;return i;function i(c){return e.enter("atxHeading"),l(c)}function l(c){return e.enter("atxHeadingSequence"),o(c)}function o(c){return c===35&&r++<6?(e.consume(c),o):c===null||Be(c)?(e.exit("atxHeadingSequence"),a(c)):t(c)}function a(c){return c===35?(e.enter("atxHeadingSequence"),s(c)):c===null||B(c)?(e.exit("atxHeading"),n(c)):K(c)?ne(e,a,"whitespace")(c):(e.enter("atxHeadingText"),u(c))}function s(c){return c===35?(e.consume(c),s):(e.exit("atxHeadingSequence"),a(c))}function u(c){return c===null||c===35||Be(c)?(e.exit("atxHeadingText"),a(c)):(e.consume(c),u)}}const X0=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],qc=["pre","script","style","textarea"],Y0={concrete:!0,name:"htmlFlow",resolveTo:ew,tokenize:nw},J0={partial:!0,tokenize:rw},Z0={partial:!0,tokenize:tw};function ew(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function nw(e,n,t){const r=this;let i,l,o,a,s;return u;function u(w){return c(w)}function c(w){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(w),p}function p(w){return w===33?(e.consume(w),d):w===47?(e.consume(w),l=!0,x):w===63?(e.consume(w),i=3,r.interrupt?n:y):xn(w)?(e.consume(w),o=String.fromCharCode(w),C):t(w)}function d(w){return w===45?(e.consume(w),i=2,f):w===91?(e.consume(w),i=5,a=0,v):xn(w)?(e.consume(w),i=4,r.interrupt?n:y):t(w)}function f(w){return w===45?(e.consume(w),r.interrupt?n:y):t(w)}function v(w){const ye="CDATA[";return w===ye.charCodeAt(a++)?(e.consume(w),a===ye.length?r.interrupt?n:D:v):t(w)}function x(w){return xn(w)?(e.consume(w),o=String.fromCharCode(w),C):t(w)}function C(w){if(w===null||w===47||w===62||Be(w)){const ye=w===47,ln=o.toLowerCase();return!ye&&!l&&qc.includes(ln)?(i=1,r.interrupt?n(w):D(w)):X0.includes(o.toLowerCase())?(i=6,ye?(e.consume(w),h):r.interrupt?n(w):D(w)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(w):l?g(w):m(w))}return w===45||qe(w)?(e.consume(w),o+=String.fromCharCode(w),C):t(w)}function h(w){return w===62?(e.consume(w),r.interrupt?n:D):t(w)}function g(w){return K(w)?(e.consume(w),g):z(w)}function m(w){return w===47?(e.consume(w),z):w===58||w===95||xn(w)?(e.consume(w),_):K(w)?(e.consume(w),m):z(w)}function _(w){return w===45||w===46||w===58||w===95||qe(w)?(e.consume(w),_):T(w)}function T(w){return w===61?(e.consume(w),k):K(w)?(e.consume(w),T):m(w)}function k(w){return w===null||w===60||w===61||w===62||w===96?t(w):w===34||w===39?(e.consume(w),s=w,I):K(w)?(e.consume(w),k):L(w)}function I(w){return w===s?(e.consume(w),s=null,O):w===null||B(w)?t(w):(e.consume(w),I)}function L(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||Be(w)?T(w):(e.consume(w),L)}function O(w){return w===47||w===62||K(w)?m(w):t(w)}function z(w){return w===62?(e.consume(w),A):t(w)}function A(w){return w===null||B(w)?D(w):K(w)?(e.consume(w),A):t(w)}function D(w){return w===45&&i===2?(e.consume(w),he):w===60&&i===1?(e.consume(w),fe):w===62&&i===4?(e.consume(w),q):w===63&&i===3?(e.consume(w),y):w===93&&i===5?(e.consume(w),$):B(w)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(J0,Y,Q)(w)):w===null||B(w)?(e.exit("htmlFlowData"),Q(w)):(e.consume(w),D)}function Q(w){return e.check(Z0,oe,Y)(w)}function oe(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),W}function W(w){return w===null||B(w)?Q(w):(e.enter("htmlFlowData"),D(w))}function he(w){return w===45?(e.consume(w),y):D(w)}function fe(w){return w===47?(e.consume(w),o="",F):D(w)}function F(w){if(w===62){const ye=o.toLowerCase();return qc.includes(ye)?(e.consume(w),q):D(w)}return xn(w)&&o.length<8?(e.consume(w),o+=String.fromCharCode(w),F):D(w)}function $(w){return w===93?(e.consume(w),y):D(w)}function y(w){return w===62?(e.consume(w),q):w===45&&i===2?(e.consume(w),y):D(w)}function q(w){return w===null||B(w)?(e.exit("htmlFlowData"),Y(w)):(e.consume(w),q)}function Y(w){return e.exit("htmlFlow"),n(w)}}function tw(e,n,t){const r=this;return i;function i(o){return B(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l):t(o)}function l(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}function rw(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ql,n,t)}}const iw={name:"htmlText",tokenize:lw};function lw(e,n,t){const r=this;let i,l,o;return a;function a(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),s}function s(y){return y===33?(e.consume(y),u):y===47?(e.consume(y),T):y===63?(e.consume(y),m):xn(y)?(e.consume(y),L):t(y)}function u(y){return y===45?(e.consume(y),c):y===91?(e.consume(y),l=0,v):xn(y)?(e.consume(y),g):t(y)}function c(y){return y===45?(e.consume(y),f):t(y)}function p(y){return y===null?t(y):y===45?(e.consume(y),d):B(y)?(o=p,fe(y)):(e.consume(y),p)}function d(y){return y===45?(e.consume(y),f):p(y)}function f(y){return y===62?he(y):y===45?d(y):p(y)}function v(y){const q="CDATA[";return y===q.charCodeAt(l++)?(e.consume(y),l===q.length?x:v):t(y)}function x(y){return y===null?t(y):y===93?(e.consume(y),C):B(y)?(o=x,fe(y)):(e.consume(y),x)}function C(y){return y===93?(e.consume(y),h):x(y)}function h(y){return y===62?he(y):y===93?(e.consume(y),h):x(y)}function g(y){return y===null||y===62?he(y):B(y)?(o=g,fe(y)):(e.consume(y),g)}function m(y){return y===null?t(y):y===63?(e.consume(y),_):B(y)?(o=m,fe(y)):(e.consume(y),m)}function _(y){return y===62?he(y):m(y)}function T(y){return xn(y)?(e.consume(y),k):t(y)}function k(y){return y===45||qe(y)?(e.consume(y),k):I(y)}function I(y){return B(y)?(o=I,fe(y)):K(y)?(e.consume(y),I):he(y)}function L(y){return y===45||qe(y)?(e.consume(y),L):y===47||y===62||Be(y)?O(y):t(y)}function O(y){return y===47?(e.consume(y),he):y===58||y===95||xn(y)?(e.consume(y),z):B(y)?(o=O,fe(y)):K(y)?(e.consume(y),O):he(y)}function z(y){return y===45||y===46||y===58||y===95||qe(y)?(e.consume(y),z):A(y)}function A(y){return y===61?(e.consume(y),D):B(y)?(o=A,fe(y)):K(y)?(e.consume(y),A):O(y)}function D(y){return y===null||y===60||y===61||y===62||y===96?t(y):y===34||y===39?(e.consume(y),i=y,Q):B(y)?(o=D,fe(y)):K(y)?(e.consume(y),D):(e.consume(y),oe)}function Q(y){return y===i?(e.consume(y),i=void 0,W):y===null?t(y):B(y)?(o=Q,fe(y)):(e.consume(y),Q)}function oe(y){return y===null||y===34||y===39||y===60||y===61||y===96?t(y):y===47||y===62||Be(y)?O(y):(e.consume(y),oe)}function W(y){return y===47||y===62||Be(y)?O(y):t(y)}function he(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),n):t(y)}function fe(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),F}function F(y){return K(y)?ne(e,$,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):$(y)}function $(y){return e.enter("htmlTextData"),o(y)}}const nu={name:"labelEnd",resolveAll:uw,resolveTo:cw,tokenize:pw},ow={tokenize:fw},aw={tokenize:dw},sw={tokenize:hw};function uw(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&Sn(e,0,e.length,t),e}function cw(e,n){let t=e.length,r=0,i,l,o,a;for(;t--;)if(i=e[t][1],l){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(l=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=t);const s={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[l][1].start},end:{...e[o][1].end}},c={type:"labelText",start:{...e[l+r+2][1].end},end:{...e[o-2][1].start}};return a=[["enter",s,n],["enter",u,n]],a=Ze(a,e.slice(l+1,l+r+3)),a=Ze(a,[["enter",c,n]]),a=Ze(a,eu(n.parser.constructs.insideSpan.null,e.slice(l+r+4,o-3),n)),a=Ze(a,[["exit",c,n],e[o-2],e[o-1],["exit",u,n]]),a=Ze(a,e.slice(o+1)),a=Ze(a,[["exit",s,n]]),Sn(e,l,e.length,a),e}function pw(e,n,t){const r=this;let i=r.events.length,l,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){l=r.events[i][1];break}return a;function a(d){return l?l._inactive?p(d):(o=r.parser.defined.includes(Jt(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(d),e.exit("labelMarker"),e.exit("labelEnd"),s):t(d)}function s(d){return d===40?e.attempt(ow,c,o?c:p)(d):d===91?e.attempt(aw,c,o?u:p)(d):o?c(d):p(d)}function u(d){return e.attempt(sw,c,p)(d)}function c(d){return n(d)}function p(d){return l._balanced=!0,t(d)}}function fw(e,n,t){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return Be(p)?Br(e,l)(p):l(p)}function l(p){return p===41?c(p):dh(e,o,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function o(p){return Be(p)?Br(e,s)(p):c(p)}function a(p){return t(p)}function s(p){return p===34||p===39||p===40?mh(e,u,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):c(p)}function u(p){return Be(p)?Br(e,c)(p):c(p)}function c(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),n):t(p)}}function dw(e,n,t){const r=this;return i;function i(a){return hh.call(r,e,l,o,"reference","referenceMarker","referenceString")(a)}function l(a){return r.parser.defined.includes(Jt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(a):t(a)}function o(a){return t(a)}}function hw(e,n,t){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),i}function i(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),n):t(l)}}const mw={name:"labelStartImage",resolveAll:nu.resolveAll,tokenize:gw};function gw(e,n,t){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),l}function l(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),o):t(a)}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):n(a)}}const yw={name:"labelStartLink",resolveAll:nu.resolveAll,tokenize:vw};function vw(e,n,t){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),l}function l(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(o):n(o)}}const bo={name:"lineEnding",tokenize:ww};function ww(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ne(e,n,"linePrefix")}}const el={name:"thematicBreak",tokenize:xw};function xw(e,n,t){let r=0,i;return l;function l(u){return e.enter("thematicBreak"),o(u)}function o(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||B(u))?(e.exit("thematicBreak"),n(u)):t(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),K(u)?ne(e,a,"whitespace")(u):a(u))}}const ze={continuation:{tokenize:Cw},exit:Pw,name:"list",tokenize:Sw},kw={partial:!0,tokenize:Tw},_w={partial:!0,tokenize:Ew};function Sw(e,n,t){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return a;function a(f){const v=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:Ba(f)){if(r.containerState.type||(r.containerState.type=v,e.enter(v,{_container:!0})),v==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(el,t,u)(f):u(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(f)}return t(f)}function s(f){return Ba(f)&&++o<10?(e.consume(f),s):(!r.interrupt||o<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),u(f)):t(f)}function u(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(Ql,r.interrupt?t:c,e.attempt(kw,d,p))}function c(f){return r.containerState.initialBlankLine=!0,l++,d(f)}function p(f){return K(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),d):t(f)}function d(f){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(f)}}function Cw(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Ql,i,l);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ne(e,n,"listItemIndent",r.containerState.size+1)(a)}function l(a){return r.containerState.furtherBlankLines||!K(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(_w,n,o)(a))}function o(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,ne(e,e.attempt(ze,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Ew(e,n,t){const r=this;return ne(e,i,"listItemIndent",r.containerState.size+1);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?n(l):t(l)}}function Pw(e){e.exit(this.containerState.type)}function Tw(e,n,t){const r=this;return ne(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(l){const o=r.events[r.events.length-1];return!K(l)&&o&&o[1].type==="listItemPrefixWhitespace"?n(l):t(l)}}const Gc={name:"setextUnderline",resolveTo:Nw,tokenize:Iw};function Nw(e,n){let t=e.length,r,i,l;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(i=t)}else e[t][1].type==="content"&&e.splice(t,1),!l&&e[t][1].type==="definition"&&(l=t);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",l?(e.splice(i,0,["enter",o,n]),e.splice(l+1,0,["exit",e[r][1],n]),e[r][1].end={...e[l][1].end}):e[r][1]=o,e.push(["exit",o,n]),e}function Iw(e,n,t){const r=this;let i;return l;function l(u){let c=r.events.length,p;for(;c--;)if(r.events[c][1].type!=="lineEnding"&&r.events[c][1].type!=="linePrefix"&&r.events[c][1].type!=="content"){p=r.events[c][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,o(u)):t(u)}function o(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),K(u)?ne(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||B(u)?(e.exit("setextHeadingLine"),n(u)):t(u)}}const bw={tokenize:Lw};function Lw(e){const n=this,t=e.attempt(Ql,r,e.attempt(this.parser.constructs.flowInitial,i,ne(e,e.attempt(this.parser.constructs.flow,i,e.attempt(A0,i)),"linePrefix")));return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const Mw={resolveAll:yh()},Fw=gh("string"),zw=gh("text");function gh(e){return{resolveAll:yh(e==="text"?Rw:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],l=t.attempt(i,o,a);return o;function o(c){return u(c)?l(c):a(c)}function a(c){if(c===null){t.consume(c);return}return t.enter("data"),t.consume(c),s}function s(c){return u(c)?(t.exit("data"),l(c)):(t.consume(c),s)}function u(c){if(c===null)return!0;const p=i[c];let d=-1;if(p)for(;++d<p.length;){const f=p[d];if(!f.previous||f.previous.call(r,r.previous))return!0}return!1}}}function yh(e){return n;function n(t,r){let i=-1,l;for(;++i<=t.length;)l===void 0?t[i]&&t[i][1].type==="data"&&(l=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==l+2&&(t[l][1].end=t[i-1][1].end,t.splice(l+2,i-l-2),i=l+2),l=void 0);return e?e(t,r):t}}function Rw(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],i=n.sliceStream(r);let l=i.length,o=-1,a=0,s;for(;l--;){const u=i[l];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)a++,o--;if(o)break;o=-1}else if(u===-2)s=!0,a++;else if(u!==-1){l++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(a=0),a){const u={type:t===e.length||s||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?o:r.start._bufferIndex+o,_index:r.start._index+l,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(t,0,["enter",u,n],["exit",u,n]),t+=2)}t++}return e}const Aw={42:ze,43:ze,45:ze,48:ze,49:ze,50:ze,51:ze,52:ze,53:ze,54:ze,55:ze,56:ze,57:ze,62:uh},Ow={91:j0},Dw={[-2]:Io,[-1]:Io,32:Io},$w={35:G0,42:el,45:[Gc,el],60:Y0,61:Gc,95:el,96:Vc,126:Vc},Bw={38:ph,92:ch},jw={[-5]:bo,[-4]:bo,[-3]:bo,33:mw,38:ph,42:ja,60:[y0,iw],91:yw,92:[V0,ch],93:nu,95:ja,96:b0},Uw={null:[ja,Mw]},Hw={null:[42,95]},Ww={null:[]},Vw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Hw,contentInitial:Ow,disable:Ww,document:Aw,flow:$w,flowInitial:Dw,insideSpan:Uw,string:Bw,text:jw},Symbol.toStringTag,{value:"Module"}));function qw(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},l=[];let o=[],a=[];const s={attempt:I(T),check:I(k),consume:g,enter:m,exit:_,interrupt:I(k,{interrupt:!0})},u={code:null,containerState:{},defineSkip:x,events:[],now:v,parser:e,previous:null,sliceSerialize:d,sliceStream:f,write:p};let c=n.tokenize.call(u,s);return n.resolveAll&&l.push(n),u;function p(A){return o=Ze(o,A),C(),o[o.length-1]!==null?[]:(L(n,0),u.events=eu(l,u.events,u),u.events)}function d(A,D){return Kw(f(A),D)}function f(A){return Gw(o,A)}function v(){const{_bufferIndex:A,_index:D,line:Q,column:oe,offset:W}=r;return{_bufferIndex:A,_index:D,line:Q,column:oe,offset:W}}function x(A){i[A.line]=A.column,z()}function C(){let A;for(;r._index<o.length;){const D=o[r._index];if(typeof D=="string")for(A=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===A&&r._bufferIndex<D.length;)h(D.charCodeAt(r._bufferIndex));else h(D)}}function h(A){c=c(A)}function g(A){B(A)?(r.line++,r.column=1,r.offset+=A===-3?2:1,z()):A!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=A}function m(A,D){const Q=D||{};return Q.type=A,Q.start=v(),u.events.push(["enter",Q,u]),a.push(Q),Q}function _(A){const D=a.pop();return D.end=v(),u.events.push(["exit",D,u]),D}function T(A,D){L(A,D.from)}function k(A,D){D.restore()}function I(A,D){return Q;function Q(oe,W,he){let fe,F,$,y;return Array.isArray(oe)?Y(oe):"tokenize"in oe?Y([oe]):q(oe);function q(te){return mn;function mn(Bn){const Nt=Bn!==null&&te[Bn],It=Bn!==null&&te.null,yi=[...Array.isArray(Nt)?Nt:Nt?[Nt]:[],...Array.isArray(It)?It:It?[It]:[]];return Y(yi)(Bn)}}function Y(te){return fe=te,F=0,te.length===0?he:w(te[F])}function w(te){return mn;function mn(Bn){return y=O(),$=te,te.partial||(u.currentConstruct=te),te.name&&u.parser.constructs.disable.null.includes(te.name)?ln():te.tokenize.call(D?Object.assign(Object.create(u),D):u,s,ye,ln)(Bn)}}function ye(te){return A($,y),W}function ln(te){return y.restore(),++F<fe.length?w(fe[F]):he}}}function L(A,D){A.resolveAll&&!l.includes(A)&&l.push(A),A.resolve&&Sn(u.events,D,u.events.length-D,A.resolve(u.events.slice(D),u)),A.resolveTo&&(u.events=A.resolveTo(u.events,u))}function O(){const A=v(),D=u.previous,Q=u.currentConstruct,oe=u.events.length,W=Array.from(a);return{from:oe,restore:he};function he(){r=A,u.previous=D,u.currentConstruct=Q,u.events.length=oe,a=W,z()}}function z(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Gw(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,l=n.end._bufferIndex;let o;if(t===i)o=[e[t].slice(r,l)];else{if(o=e.slice(t,i),r>-1){const a=o[0];typeof a=="string"?o[0]=a.slice(r):o.shift()}l>0&&o.push(e[i].slice(0,l))}return o}function Kw(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const l=e[t];let o;if(typeof l=="string")o=l;else switch(l){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&i)continue;o=" ";break}default:o=String.fromCharCode(l)}i=l===-2,r.push(o)}return r.join("")}function Qw(e){const r={constructs:t0([Vw,...(e||{}).extensions||[]]),content:i(c0),defined:[],document:i(f0),flow:i(bw),lazy:{},string:i(Fw),text:i(zw)};return r;function i(l){return o;function o(a){return qw(r,l,a)}}}function Xw(e){for(;!fh(e););return e}const Kc=/[\0\t\n\r]/g;function Yw(){let e=1,n="",t=!0,r;return i;function i(l,o,a){const s=[];let u,c,p,d,f;for(l=n+(typeof l=="string"?l.toString():new TextDecoder(o||void 0).decode(l)),p=0,n="",t&&(l.charCodeAt(0)===65279&&p++,t=void 0);p<l.length;){if(Kc.lastIndex=p,u=Kc.exec(l),d=u&&u.index!==void 0?u.index:l.length,f=l.charCodeAt(d),!u){n=l.slice(p);break}if(f===10&&p===d&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),p<d&&(s.push(l.slice(p,d)),e+=d-p),f){case 0:{s.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,s.push(-2);e++<c;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}p=d+1}return a&&(r&&s.push(-5),n&&s.push(n),s.push(null)),s}}const Jw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Zw(e){return e.replace(Jw,ex)}function ex(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),l=i===120||i===88;return sh(t.slice(l?2:1),l?16:10)}return Zs(t)||e}const vh={}.hasOwnProperty;function nx(e,n,t){return typeof n!="string"&&(t=n,n=void 0),tx(t)(Xw(Qw(t).document().write(Yw()(e,n,!0))))}function tx(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(cu),autolinkProtocol:O,autolinkEmail:O,atxHeading:l(au),blockQuote:l(It),characterEscape:O,characterReference:O,codeFenced:l(yi),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:l(yi,o),codeText:l(Mh,o),codeTextData:O,data:O,codeFlowValue:O,definition:l(Fh),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:l(zh),hardBreakEscape:l(su),hardBreakTrailing:l(su),htmlFlow:l(uu,o),htmlFlowData:O,htmlText:l(uu,o),htmlTextData:O,image:l(Rh),label:o,link:l(cu),listItem:l(Ah),listItemValue:d,listOrdered:l(pu,p),listUnordered:l(pu),paragraph:l(Oh),reference:w,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:l(au),strong:l(Dh),thematicBreak:l(Bh)},exit:{atxHeading:s(),atxHeadingSequence:T,autolink:s(),autolinkEmail:Nt,autolinkProtocol:Bn,blockQuote:s(),characterEscapeValue:z,characterReferenceMarkerHexadecimal:ln,characterReferenceMarkerNumeric:ln,characterReferenceValue:te,characterReference:mn,codeFenced:s(C),codeFencedFence:x,codeFencedFenceInfo:f,codeFencedFenceMeta:v,codeFlowValue:z,codeIndented:s(h),codeText:s(W),codeTextData:z,data:z,definition:s(),definitionDestinationString:_,definitionLabelString:g,definitionTitleString:m,emphasis:s(),hardBreakEscape:s(D),hardBreakTrailing:s(D),htmlFlow:s(Q),htmlFlowData:z,htmlText:s(oe),htmlTextData:z,image:s(fe),label:$,labelText:F,lineEnding:A,link:s(he),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:ye,resourceDestinationString:y,resourceTitleString:q,resource:Y,setextHeading:s(L),setextHeadingLineSequence:I,setextHeadingText:k,strong:s(),thematicBreak:s()}};wh(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(E){let M={type:"root",children:[]};const j={stack:[M],tokenStack:[],config:n,enter:a,exit:u,buffer:o,resume:c,data:t},V=[];let J=-1;for(;++J<E.length;)if(E[J][1].type==="listOrdered"||E[J][1].type==="listUnordered")if(E[J][0]==="enter")V.push(J);else{const on=V.pop();J=i(E,on,J)}for(J=-1;++J<E.length;){const on=n[E[J][0]];vh.call(on,E[J][1].type)&&on[E[J][1].type].call(Object.assign({sliceSerialize:E[J][2].sliceSerialize},j),E[J][1])}if(j.tokenStack.length>0){const on=j.tokenStack[j.tokenStack.length-1];(on[1]||Qc).call(j,void 0,on[0])}for(M.position={start:Un(E.length>0?E[0][1].start:{line:1,column:1,offset:0}),end:Un(E.length>0?E[E.length-2][1].end:{line:1,column:1,offset:0})},J=-1;++J<n.transforms.length;)M=n.transforms[J](M)||M;return M}function i(E,M,j){let V=M-1,J=-1,on=!1,ct,Pn,dr,hr;for(;++V<=j;){const Ue=E[V];switch(Ue[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ue[0]==="enter"?J++:J--,hr=void 0;break}case"lineEndingBlank":{Ue[0]==="enter"&&(ct&&!hr&&!J&&!dr&&(dr=V),hr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:hr=void 0}if(!J&&Ue[0]==="enter"&&Ue[1].type==="listItemPrefix"||J===-1&&Ue[0]==="exit"&&(Ue[1].type==="listUnordered"||Ue[1].type==="listOrdered")){if(ct){let bt=V;for(Pn=void 0;bt--;){const Tn=E[bt];if(Tn[1].type==="lineEnding"||Tn[1].type==="lineEndingBlank"){if(Tn[0]==="exit")continue;Pn&&(E[Pn][1].type="lineEndingBlank",on=!0),Tn[1].type="lineEnding",Pn=bt}else if(!(Tn[1].type==="linePrefix"||Tn[1].type==="blockQuotePrefix"||Tn[1].type==="blockQuotePrefixWhitespace"||Tn[1].type==="blockQuoteMarker"||Tn[1].type==="listItemIndent"))break}dr&&(!Pn||dr<Pn)&&(ct._spread=!0),ct.end=Object.assign({},Pn?E[Pn][1].start:Ue[1].end),E.splice(Pn||V,0,["exit",ct,Ue[2]]),V++,j++}if(Ue[1].type==="listItemPrefix"){const bt={type:"listItem",_spread:!1,start:Object.assign({},Ue[1].start),end:void 0};ct=bt,E.splice(V,0,["enter",bt,Ue[2]]),V++,j++,dr=void 0,hr=!0}}}return E[M][1]._spread=on,j}function l(E,M){return j;function j(V){a.call(this,E(V),V),M&&M.call(this,V)}}function o(){this.stack.push({type:"fragment",children:[]})}function a(E,M,j){this.stack[this.stack.length-1].children.push(E),this.stack.push(E),this.tokenStack.push([M,j||void 0]),E.position={start:Un(M.start),end:void 0}}function s(E){return M;function M(j){E&&E.call(this,j),u.call(this,j)}}function u(E,M){const j=this.stack.pop(),V=this.tokenStack.pop();if(V)V[0].type!==E.type&&(M?M.call(this,E,V[0]):(V[1]||Qc).call(this,E,V[0]));else throw new Error("Cannot close `"+E.type+"` ("+$r({start:E.start,end:E.end})+"): it’s not open");j.position.end=Un(E.end)}function c(){return e0(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function d(E){if(this.data.expectingFirstListItemValue){const M=this.stack[this.stack.length-2];M.start=Number.parseInt(this.sliceSerialize(E),10),this.data.expectingFirstListItemValue=void 0}}function f(){const E=this.resume(),M=this.stack[this.stack.length-1];M.lang=E}function v(){const E=this.resume(),M=this.stack[this.stack.length-1];M.meta=E}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function C(){const E=this.resume(),M=this.stack[this.stack.length-1];M.value=E.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const E=this.resume(),M=this.stack[this.stack.length-1];M.value=E.replace(/(\r?\n|\r)$/g,"")}function g(E){const M=this.resume(),j=this.stack[this.stack.length-1];j.label=M,j.identifier=Jt(this.sliceSerialize(E)).toLowerCase()}function m(){const E=this.resume(),M=this.stack[this.stack.length-1];M.title=E}function _(){const E=this.resume(),M=this.stack[this.stack.length-1];M.url=E}function T(E){const M=this.stack[this.stack.length-1];if(!M.depth){const j=this.sliceSerialize(E).length;M.depth=j}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function I(E){const M=this.stack[this.stack.length-1];M.depth=this.sliceSerialize(E).codePointAt(0)===61?1:2}function L(){this.data.setextHeadingSlurpLineEnding=void 0}function O(E){const j=this.stack[this.stack.length-1].children;let V=j[j.length-1];(!V||V.type!=="text")&&(V=$h(),V.position={start:Un(E.start),end:void 0},j.push(V)),this.stack.push(V)}function z(E){const M=this.stack.pop();M.value+=this.sliceSerialize(E),M.position.end=Un(E.end)}function A(E){const M=this.stack[this.stack.length-1];if(this.data.atHardBreak){const j=M.children[M.children.length-1];j.position.end=Un(E.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(M.type)&&(O.call(this,E),z.call(this,E))}function D(){this.data.atHardBreak=!0}function Q(){const E=this.resume(),M=this.stack[this.stack.length-1];M.value=E}function oe(){const E=this.resume(),M=this.stack[this.stack.length-1];M.value=E}function W(){const E=this.resume(),M=this.stack[this.stack.length-1];M.value=E}function he(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const M=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=M,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function fe(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const M=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=M,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function F(E){const M=this.sliceSerialize(E),j=this.stack[this.stack.length-2];j.label=Zw(M),j.identifier=Jt(M).toLowerCase()}function $(){const E=this.stack[this.stack.length-1],M=this.resume(),j=this.stack[this.stack.length-1];if(this.data.inReference=!0,j.type==="link"){const V=E.children;j.children=V}else j.alt=M}function y(){const E=this.resume(),M=this.stack[this.stack.length-1];M.url=E}function q(){const E=this.resume(),M=this.stack[this.stack.length-1];M.title=E}function Y(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function ye(E){const M=this.resume(),j=this.stack[this.stack.length-1];j.label=M,j.identifier=Jt(this.sliceSerialize(E)).toLowerCase(),this.data.referenceType="full"}function ln(E){this.data.characterReferenceType=E.type}function te(E){const M=this.sliceSerialize(E),j=this.data.characterReferenceType;let V;j?(V=sh(M,j==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):V=Zs(M);const J=this.stack[this.stack.length-1];J.value+=V}function mn(E){const M=this.stack.pop();M.position.end=Un(E.end)}function Bn(E){z.call(this,E);const M=this.stack[this.stack.length-1];M.url=this.sliceSerialize(E)}function Nt(E){z.call(this,E);const M=this.stack[this.stack.length-1];M.url="mailto:"+this.sliceSerialize(E)}function It(){return{type:"blockquote",children:[]}}function yi(){return{type:"code",lang:null,meta:null,value:""}}function Mh(){return{type:"inlineCode",value:""}}function Fh(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function zh(){return{type:"emphasis",children:[]}}function au(){return{type:"heading",depth:0,children:[]}}function su(){return{type:"break"}}function uu(){return{type:"html",value:""}}function Rh(){return{type:"image",title:null,url:"",alt:null}}function cu(){return{type:"link",title:null,url:"",children:[]}}function pu(E){return{type:"list",ordered:E.type==="listOrdered",start:null,spread:E._spread,children:[]}}function Ah(E){return{type:"listItem",spread:E._spread,checked:null,children:[]}}function Oh(){return{type:"paragraph",children:[]}}function Dh(){return{type:"strong",children:[]}}function $h(){return{type:"text",value:""}}function Bh(){return{type:"thematicBreak"}}}function Un(e){return{line:e.line,column:e.column,offset:e.offset}}function wh(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?wh(e,r):rx(e,r)}}function rx(e,n){let t;for(t in n)if(vh.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function Qc(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+$r({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+$r({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+$r({start:n.start,end:n.end})+") is still open")}function ix(e){const n=this;n.parser=t;function t(r){return nx(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function lx(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function ox(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function ax(e,n){const t=n.value?n.value+`
`:"",r={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(l.data={meta:n.meta}),e.patch(n,l),l=e.applyData(n,l),l={type:"element",tagName:"pre",properties:{},children:[l]},e.patch(n,l),l}function sx(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function ux(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function cx(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=fr(r.toLowerCase()),l=e.footnoteOrder.indexOf(r);let o,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=l+1,a+=1,e.footnoteCounts.set(r,a);const s={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(n,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(n,u),e.applyData(n,u)}function px(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function fx(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function xh(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=e.all(n),l=i[0];l&&l.type==="text"?l.value="["+l.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function dx(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return xh(e,n);const i={src:fr(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,l),e.applyData(n,l)}function hx(e,n){const t={src:fr(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function mx(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function gx(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return xh(e,n);const i={href:fr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,l),e.applyData(n,l)}function yx(e,n){const t={href:fr(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function vx(e,n,t){const r=e.all(n),i=t?wx(t):kh(n),l={},o=[];if(typeof n.checked=="boolean"){const c=r[0];let p;c&&c.type==="element"&&c.tagName==="p"?p=c:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const c=r[a];(i||a!==0||c.type!=="element"||c.tagName!=="p")&&o.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!i?o.push(...c.children):o.push(c)}const s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&o.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:l,children:o};return e.patch(n,u),e.applyData(n,u)}function wx(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=kh(t[r])}return n}function kh(e){const n=e.spread;return n??e.children.length>1}function xx(e,n){const t={},r=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const l={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,l),e.applyData(n,l)}function kx(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function _x(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function Sx(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Cx(e,n){const t=e.all(n),r=t.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],o),i.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},a=Qs(n.children[1]),s=nh(n.children[n.children.length-1]);a&&s&&(o.position={start:a,end:s}),i.push(o)}const l={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,l),e.applyData(n,l)}function Ex(e,n,t){const r=t?t.children:void 0,l=(r?r.indexOf(n):1)===0?"th":"td",o=t&&t.type==="table"?t.align:void 0,a=o?o.length:n.children.length;let s=-1;const u=[];for(;++s<a;){const p=n.children[s],d={},f=o?o[s]:void 0;f&&(d.align=f);let v={type:"element",tagName:l,properties:d,children:[]};p&&(v.children=e.all(p),e.patch(p,v),v=e.applyData(p,v)),u.push(v)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(n,c),e.applyData(n,c)}function Px(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Xc=9,Yc=32;function Tx(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),i=0;const l=[];for(;r;)l.push(Jc(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n);return l.push(Jc(n.slice(i),i>0,!1)),l.join("")}function Jc(e,n,t){let r=0,i=e.length;if(n){let l=e.codePointAt(r);for(;l===Xc||l===Yc;)r++,l=e.codePointAt(r)}if(t){let l=e.codePointAt(i-1);for(;l===Xc||l===Yc;)i--,l=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Nx(e,n){const t={type:"text",value:Tx(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function Ix(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const bx={blockquote:lx,break:ox,code:ax,delete:sx,emphasis:ux,footnoteReference:cx,heading:px,html:fx,imageReference:dx,image:hx,inlineCode:mx,linkReference:gx,link:yx,listItem:vx,list:xx,paragraph:kx,root:_x,strong:Sx,table:Cx,tableCell:Px,tableRow:Ex,text:Nx,thematicBreak:Ix,toml:Ai,yaml:Ai,definition:Ai,footnoteDefinition:Ai};function Ai(){}const _h=-1,Xl=0,jr=1,Nl=2,tu=3,ru=4,iu=5,lu=6,Sh=7,Ch=8,Zc=typeof self=="object"?self:globalThis,Lx=(e,n)=>{const t=(i,l)=>(e.set(l,i),i),r=i=>{if(e.has(i))return e.get(i);const[l,o]=n[i];switch(l){case Xl:case _h:return t(o,i);case jr:{const a=t([],i);for(const s of o)a.push(r(s));return a}case Nl:{const a=t({},i);for(const[s,u]of o)a[r(s)]=r(u);return a}case tu:return t(new Date(o),i);case ru:{const{source:a,flags:s}=o;return t(new RegExp(a,s),i)}case iu:{const a=t(new Map,i);for(const[s,u]of o)a.set(r(s),r(u));return a}case lu:{const a=t(new Set,i);for(const s of o)a.add(r(s));return a}case Sh:{const{name:a,message:s}=o;return t(new Zc[a](s),i)}case Ch:return t(BigInt(o),i);case"BigInt":return t(Object(BigInt(o)),i);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:a}=new Uint8Array(o);return t(new DataView(a),o)}}return t(new Zc[l](o),i)};return r},ep=e=>Lx(new Map,e)(0),Mt="",{toString:Mx}={},{keys:Fx}=Object,Er=e=>{const n=typeof e;if(n!=="object"||!e)return[Xl,n];const t=Mx.call(e).slice(8,-1);switch(t){case"Array":return[jr,Mt];case"Object":return[Nl,Mt];case"Date":return[tu,Mt];case"RegExp":return[ru,Mt];case"Map":return[iu,Mt];case"Set":return[lu,Mt];case"DataView":return[jr,t]}return t.includes("Array")?[jr,t]:t.includes("Error")?[Sh,t]:[Nl,t]},Oi=([e,n])=>e===Xl&&(n==="function"||n==="symbol"),zx=(e,n,t,r)=>{const i=(o,a)=>{const s=r.push(o)-1;return t.set(a,s),s},l=o=>{if(t.has(o))return t.get(o);let[a,s]=Er(o);switch(a){case Xl:{let c=o;switch(s){case"bigint":a=Ch,c=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);c=null;break;case"undefined":return i([_h],o)}return i([a,c],o)}case jr:{if(s){let d=o;return s==="DataView"?d=new Uint8Array(o.buffer):s==="ArrayBuffer"&&(d=new Uint8Array(o)),i([s,[...d]],o)}const c=[],p=i([a,c],o);for(const d of o)c.push(l(d));return p}case Nl:{if(s)switch(s){case"BigInt":return i([s,o.toString()],o);case"Boolean":case"Number":case"String":return i([s,o.valueOf()],o)}if(n&&"toJSON"in o)return l(o.toJSON());const c=[],p=i([a,c],o);for(const d of Fx(o))(e||!Oi(Er(o[d])))&&c.push([l(d),l(o[d])]);return p}case tu:return i([a,o.toISOString()],o);case ru:{const{source:c,flags:p}=o;return i([a,{source:c,flags:p}],o)}case iu:{const c=[],p=i([a,c],o);for(const[d,f]of o)(e||!(Oi(Er(d))||Oi(Er(f))))&&c.push([l(d),l(f)]);return p}case lu:{const c=[],p=i([a,c],o);for(const d of o)(e||!Oi(Er(d)))&&c.push(l(d));return p}}const{message:u}=o;return i([a,{name:s,message:u}],o)};return l},np=(e,{json:n,lossy:t}={})=>{const r=[];return zx(!(n||t),!!n,new Map,r)(e),r},Il=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?ep(np(e,n)):structuredClone(e):(e,n)=>ep(np(e,n));function Rx(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function Ax(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function Ox(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||Rx,r=e.options.footnoteBackLabel||Ax,i=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let s=-1;for(;++s<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;const c=e.all(u),p=String(u.identifier).toUpperCase(),d=fr(p.toLowerCase());let f=0;const v=[],x=e.footnoteCounts.get(p);for(;x!==void 0&&++f<=x;){v.length>0&&v.push({type:"text",value:" "});let g=typeof t=="string"?t:t(s,f);typeof g=="string"&&(g={type:"text",value:g}),v.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+d+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,f),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const C=c[c.length-1];if(C&&C.type==="element"&&C.tagName==="p"){const g=C.children[C.children.length-1];g&&g.type==="text"?g.value+=" ":C.children.push({type:"text",value:" "}),C.children.push(...v)}else c.push(...v);const h={type:"element",tagName:"li",properties:{id:n+"fn-"+d},children:e.wrap(c,!0)};e.patch(u,h),a.push(h)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...Il(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const Eh=function(e){if(e==null)return jx;if(typeof e=="function")return Yl(e);if(typeof e=="object")return Array.isArray(e)?Dx(e):$x(e);if(typeof e=="string")return Bx(e);throw new Error("Expected function, string, or object as test")};function Dx(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Eh(e[t]);return Yl(r);function r(...i){let l=-1;for(;++l<n.length;)if(n[l].apply(this,i))return!0;return!1}}function $x(e){const n=e;return Yl(t);function t(r){const i=r;let l;for(l in e)if(i[l]!==n[l])return!1;return!0}}function Bx(e){return Yl(n);function n(t){return t&&t.type===e}}function Yl(e){return n;function n(t,r,i){return!!(Ux(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function jx(){return!0}function Ux(e){return e!==null&&typeof e=="object"&&"type"in e}const Ph=[],Hx=!0,tp=!1,Wx="skip";function Vx(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const l=Eh(i),o=r?-1:1;a(e,void 0,[])();function a(s,u,c){const p=s&&typeof s=="object"?s:{};if(typeof p.type=="string"){const f=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(s.type+(f?"<"+f+">":""))+")"})}return d;function d(){let f=Ph,v,x,C;if((!n||l(s,u,c[c.length-1]||void 0))&&(f=qx(t(s,c)),f[0]===tp))return f;if("children"in s&&s.children){const h=s;if(h.children&&f[0]!==Wx)for(x=(r?h.children.length:-1)+o,C=c.concat(h);x>-1&&x<h.children.length;){const g=h.children[x];if(v=a(g,x,C)(),v[0]===tp)return v;x=typeof v[1]=="number"?v[1]:x+o}}return f}}}function qx(e){return Array.isArray(e)?e:typeof e=="number"?[Hx,e]:e==null?Ph:[e]}function Th(e,n,t,r){let i,l,o;typeof n=="function"&&typeof t!="function"?(l=void 0,o=n,i=t):(l=n,o=t,i=r),Vx(e,l,a,i);function a(s,u){const c=u[u.length-1],p=c?c.children.indexOf(s):void 0;return o(s,p,c)}}const Ua={}.hasOwnProperty,Gx={};function Kx(e,n){const t=n||Gx,r=new Map,i=new Map,l=new Map,o={...bx,...t.handlers},a={all:u,applyData:Xx,definitionById:r,footnoteById:i,footnoteCounts:l,footnoteOrder:[],handlers:o,one:s,options:t,patch:Qx,wrap:Jx};return Th(e,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){const p=c.type==="definition"?r:i,d=String(c.identifier).toUpperCase();p.has(d)||p.set(d,c)}}),a;function s(c,p){const d=c.type,f=a.handlers[d];if(Ua.call(a.handlers,d)&&f)return f(a,c,p);if(a.options.passThrough&&a.options.passThrough.includes(d)){if("children"in c){const{children:x,...C}=c,h=Il(C);return h.children=a.all(c),h}return Il(c)}return(a.options.unknownHandler||Yx)(a,c,p)}function u(c){const p=[];if("children"in c){const d=c.children;let f=-1;for(;++f<d.length;){const v=a.one(d[f],c);if(v){if(f&&d[f-1].type==="break"&&(!Array.isArray(v)&&v.type==="text"&&(v.value=rp(v.value)),!Array.isArray(v)&&v.type==="element")){const x=v.children[0];x&&x.type==="text"&&(x.value=rp(x.value))}Array.isArray(v)?p.push(...v):p.push(v)}}}return p}}function Qx(e,n){e.position&&(n.position=Mv(e))}function Xx(e,n){let t=n;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,l=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const o="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:o}}t.type==="element"&&l&&Object.assign(t.properties,Il(l)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function Yx(e,n){const t=n.data||{},r="value"in n&&!(Ua.call(t,"hProperties")||Ua.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Jx(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function rp(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function ip(e,n){const t=Kx(e,n),r=t.one(e,void 0),i=Ox(t),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&l.children.push({type:"text",value:`
`},i),l}function Zx(e,n){return e&&"run"in e?async function(t,r){const i=ip(t,{file:r,...n});await e.run(i,r)}:function(t,r){return ip(t,{file:r,...e||n})}}function lp(e){if(e)throw e}var nl=Object.prototype.hasOwnProperty,Nh=Object.prototype.toString,op=Object.defineProperty,ap=Object.getOwnPropertyDescriptor,sp=function(n){return typeof Array.isArray=="function"?Array.isArray(n):Nh.call(n)==="[object Array]"},up=function(n){if(!n||Nh.call(n)!=="[object Object]")return!1;var t=nl.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&nl.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var i;for(i in n);return typeof i>"u"||nl.call(n,i)},cp=function(n,t){op&&t.name==="__proto__"?op(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},pp=function(n,t){if(t==="__proto__")if(nl.call(n,t)){if(ap)return ap(n,t).value}else return;return n[t]},ek=function e(){var n,t,r,i,l,o,a=arguments[0],s=1,u=arguments.length,c=!1;for(typeof a=="boolean"&&(c=a,a=arguments[1]||{},s=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});s<u;++s)if(n=arguments[s],n!=null)for(t in n)r=pp(a,t),i=pp(n,t),a!==i&&(c&&i&&(up(i)||(l=sp(i)))?(l?(l=!1,o=r&&sp(r)?r:[]):o=r&&up(r)?r:{},cp(a,{name:t,newValue:e(c,o,i)})):typeof i<"u"&&cp(a,{name:t,newValue:i}));return a};const Lo=Va(ek);function Ha(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function nk(){const e=[],n={run:t,use:r};return n;function t(...i){let l=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);a(null,...i);function a(s,...u){const c=e[++l];let p=-1;if(s){o(s);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,c?tk(c,a)(...u):o(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function tk(e,n){let t;return r;function r(...o){const a=e.length>o.length;let s;a&&o.push(i);try{s=e.apply(this,o)}catch(u){const c=u;if(a&&t)throw c;return i(c)}a||(s&&s.then&&typeof s.then=="function"?s.then(l,i):s instanceof Error?i(s):l(s))}function i(o,...a){t||(t=!0,n(o,...a))}function l(o){i(null,o)}}const vn={basename:rk,dirname:ik,extname:lk,join:ok,sep:"/"};function rk(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');gi(e);let t=0,r=-1,i=e.length,l;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(l){t=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let o=-1,a=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(l){t=i+1;break}}else o<0&&(l=!0,o=i+1),a>-1&&(e.codePointAt(i)===n.codePointAt(a--)?a<0&&(r=i):(a=-1,r=o));return t===r?r=o:r<0&&(r=e.length),e.slice(t,r)}function ik(e){if(gi(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function lk(e){gi(e);let n=e.length,t=-1,r=0,i=-1,l=0,o;for(;n--;){const a=e.codePointAt(n);if(a===47){if(o){r=n+1;break}continue}t<0&&(o=!0,t=n+1),a===46?i<0?i=n:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||t<0||l===0||l===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function ok(...e){let n=-1,t;for(;++n<e.length;)gi(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":ak(t)}function ak(e){gi(e);const n=e.codePointAt(0)===47;let t=sk(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function sk(e,n){let t="",r=0,i=-1,l=0,o=-1,a,s;for(;++o<=e.length;){if(o<e.length)a=e.codePointAt(o);else{if(a===47)break;a=47}if(a===47){if(!(i===o-1||l===1))if(i!==o-1&&l===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(s=t.lastIndexOf("/"),s!==t.length-1){s<0?(t="",r=0):(t=t.slice(0,s),r=t.length-1-t.lastIndexOf("/")),i=o,l=0;continue}}else if(t.length>0){t="",r=0,i=o,l=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,o):t=e.slice(i+1,o),r=o-i-1;i=o,l=0}else a===46&&l>-1?l++:l=-1}return t}function gi(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const uk={cwd:ck};function ck(){return"/"}function Wa(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function pk(e){if(typeof e=="string")e=new URL(e);else if(!Wa(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return fk(e)}function fk(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const Mo=["history","path","basename","stem","extname","dirname"];class Ih{constructor(n){let t;n?Wa(n)?t={path:n}:typeof n=="string"||dk(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":uk.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Mo.length;){const l=Mo[r];l in t&&t[l]!==void 0&&t[l]!==null&&(this[l]=l==="history"?[...t[l]]:t[l])}let i;for(i in t)Mo.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?vn.basename(this.path):void 0}set basename(n){zo(n,"basename"),Fo(n,"basename"),this.path=vn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?vn.dirname(this.path):void 0}set dirname(n){fp(this.basename,"dirname"),this.path=vn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?vn.extname(this.path):void 0}set extname(n){if(Fo(n,"extname"),fp(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=vn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){Wa(n)&&(n=pk(n)),zo(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?vn.basename(this.path,this.extname):void 0}set stem(n){zo(n,"stem"),Fo(n,"stem"),this.path=vn.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new Ie(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Fo(e,n){if(e&&e.includes(vn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+vn.sep+"`")}function zo(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function fp(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function dk(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const hk=function(e){const r=this.constructor.prototype,i=r[e],l=function(){return i.apply(l,arguments)};return Object.setPrototypeOf(l,r),l},mk={}.hasOwnProperty;class ou extends hk{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=nk()}copy(){const n=new ou;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(Lo(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Oo("data",this.frozen),this.namespace[n]=t,this):mk.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Oo("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Di(n),r=this.parser||this.Parser;return Ro("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),Ro("process",this.parser||this.Parser),Ao("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(l,o){const a=Di(n),s=r.parse(a);r.run(s,a,function(c,p,d){if(c||!p||!d)return u(c);const f=p,v=r.stringify(f,d);vk(v)?d.value=v:d.result=v,u(c,d)});function u(c,p){c||!p?o(c):l?l(p):t(void 0,p)}}}processSync(n){let t=!1,r;return this.freeze(),Ro("processSync",this.parser||this.Parser),Ao("processSync",this.compiler||this.Compiler),this.process(n,i),hp("processSync","process",t),r;function i(l,o){t=!0,lp(l),r=o}}run(n,t,r){dp(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?l(void 0,r):new Promise(l);function l(o,a){const s=Di(t);i.run(n,s,u);function u(c,p,d){const f=p||n;c?a(c):o?o(f):r(void 0,f,d)}}}runSync(n,t){let r=!1,i;return this.run(n,t,l),hp("runSync","run",r),i;function l(o,a){lp(o),i=a,r=!0}}stringify(n,t){this.freeze();const r=Di(t),i=this.compiler||this.Compiler;return Ao("stringify",i),dp(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(Oo("use",this.frozen),n!=null)if(typeof n=="function")s(n,t);else if(typeof n=="object")Array.isArray(n)?a(n):o(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function l(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[c,...p]=u;s(c,p)}else o(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function o(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=Lo(!0,i.settings,u.settings))}function a(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){const p=u[c];l(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,c){let p=-1,d=-1;for(;++p<r.length;)if(r[p][0]===u){d=p;break}if(d===-1)r.push([u,...c]);else if(c.length>0){let[f,...v]=c;const x=r[d][1];Ha(x)&&Ha(f)&&(f=Lo(!0,x,f)),r[d]=[u,f,...v]}}}}const gk=new ou().freeze();function Ro(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ao(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Oo(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function dp(e){if(!Ha(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function hp(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Di(e){return yk(e)?e:new Ih(e)}function yk(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function vk(e){return typeof e=="string"||wk(e)}function wk(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const xk="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",mp=[],gp={allowDangerousHtml:!0},kk=/^(https?|ircs?|mailto|xmpp)$/i,_k=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function bh(e){const n=Sk(e),t=Ck(e);return Ek(n.runSync(n.parse(t),t),e)}function Sk(e){const n=e.rehypePlugins||mp,t=e.remarkPlugins||mp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...gp}:gp;return gk().use(ix).use(t).use(Zx,r).use(n)}function Ck(e){const n=e.children||"",t=new Ih;return typeof n=="string"&&(t.value=n),t}function Ek(e,n){const t=n.allowedElements,r=n.allowElement,i=n.components,l=n.disallowedElements,o=n.skipHtml,a=n.unwrapDisallowed,s=n.urlTransform||Pk;for(const c of _k)Object.hasOwn(n,c.from)&&(""+c.from+(c.to?"use `"+c.to+"` instead":"remove it")+xk+c.id,void 0);return Th(e,u),Ov(e,{Fragment:P.Fragment,components:i,ignoreInvalidStyle:!0,jsx:P.jsx,jsxs:P.jsxs,passKeys:!0,passNode:!0});function u(c,p,d){if(c.type==="raw"&&d&&typeof p=="number")return o?d.children.splice(p,1):d.children[p]={type:"text",value:c.value},p;if(c.type==="element"){let f;for(f in No)if(Object.hasOwn(No,f)&&Object.hasOwn(c.properties,f)){const v=c.properties[f],x=No[f];(x===null||x.includes(c.tagName))&&(c.properties[f]=s(String(v||""),f,c))}}if(c.type==="element"){let f=t?!t.includes(c.tagName):l?l.includes(c.tagName):!1;if(!f&&r&&typeof p=="number"&&(f=!r(c,p,d)),f&&d&&typeof p=="number")return a&&c.children?d.children.splice(p,1,...c.children):d.children.splice(p,1),p}}}function Pk(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||t!==-1&&n>t||r!==-1&&n>r||kk.test(e.slice(0,n))?e:""}const Tk=()=>{const{t:e}=Gd(),n={nameKey:"profile.name",image:"https://wenet.org.cn/images/avatars/binbin.jpg",bioKey:"profile.bio.text",education:[{degree:"硕士",degreeKey:"education.master",school:"西北工业大学",schoolKey:"education.school",period:"2014 - 2017",periodKey:"education.master.period",description:"语音识别、深度学习",descriptionKey:"education.master.desc",logo:""},{degree:"学士",degreeKey:"education.bachelor",school:"西北工业大学",schoolKey:"education.school",period:"2010 - 2014",periodKey:"education.bachelor.period",description:"计算机科学与技术",descriptionKey:"education.bachelor.desc",logo:""}],work:[{position:"Tech Lead",positionKey:"work.techlead",company:"Horizon Robotics",companyKey:"work.horizon",period:"2021.11 - 至今",periodKey:"work.horizon.current.period",description:"语音识别、语音合成、大模型等",descriptionKey:"work.horizon.current.desc",logo:"https://logo.clearbit.com/horizon.ai"},{position:"Speech Tech Lead",positionKey:"work.speechtechlead",company:"Mobvoi",companyKey:"work.mobvoi",period:"2018.08 - 2021.11",periodKey:"work.mobvoi.period",description:"专注于语音技术和产品，端到端语音识别",descriptionKey:"work.mobvoi.desc",logo:"https://logo.clearbit.com/mobvoi.com"},{position:"Speech Scientist",positionKey:"work.speechscientist",company:"Microsoft",companyKey:"work.microsoft",period:"2017.04 - 2018.08",periodKey:"work.microsoft.period",description:"专注于声学建模",descriptionKey:"work.microsoft.desc",logo:"https://logo.clearbit.com/microsoft.com"},{position:"Speech Intern",positionKey:"work.speechintern",company:"Horizon Robotics",companyKey:"work.horizon",period:"2016",periodKey:"work.horizon.intern.period",description:"专注于声学建模",descriptionKey:"work.horizon.intern.desc",logo:"https://logo.clearbit.com/horizon.ai"},{position:"Speech Intern",positionKey:"work.speechintern",company:"Baidu Inc",companyKey:"work.baidu",period:"2015",periodKey:"work.baidu.period",description:"专注于声学建模",descriptionKey:"work.baidu.desc",logo:"https://logo.clearbit.com/baidu.com"}]};return P.jsxs("div",{className:"profile",children:[P.jsxs("div",{className:"profile-header",children:[P.jsx("div",{className:"profile-image-container",children:P.jsx("img",{src:n.image,alt:e(n.nameKey),className:"profile-image"})}),P.jsxs("div",{className:"profile-header-info",children:[P.jsxs("h1",{className:"profile-name",children:[e(n.nameKey),P.jsx("span",{className:"profile-name-separator",children:"@"}),P.jsx("img",{src:"https://wenet.org.cn/images/wenet_logo/wenet_blank.png",alt:"WeNet",className:"profile-name-logo"})]}),P.jsxs("p",{className:"profile-title",children:[e("profile.title.prefix")!==""&&P.jsx("span",{children:e("profile.title.prefix")}),P.jsx("a",{href:"https://wenet.org.cn",target:"_blank",rel:"noopener noreferrer",className:"profile-title-link",children:e("profile.title.link")}),e("profile.title.suffix")!==""&&P.jsx("span",{children:e("profile.title.suffix")})]})]})]}),P.jsxs("div",{className:"profile-section",children:[P.jsx("h2",{className:"section-title",children:e("profile.bio")}),P.jsx("div",{className:"profile-bio",children:P.jsx(bh,{children:e(n.bioKey)})})]}),P.jsxs("div",{className:"profile-section",children:[P.jsx("h2",{className:"section-title",children:e("profile.education")}),P.jsx("div",{className:"timeline",children:n.education.map((t,r)=>P.jsx("div",{className:"timeline-item",children:P.jsxs("div",{className:"timeline-content",children:[P.jsx("p",{className:"timeline-period",children:e(t.periodKey)}),P.jsx("h3",{className:"timeline-title",children:e(t.degreeKey)}),P.jsxs("div",{className:"timeline-company",children:[t.logo&&P.jsx("img",{src:t.logo,alt:`${e(t.schoolKey)} logo`,className:"timeline-logo",onError:i=>{i.target.style.display="none"}}),P.jsx("p",{className:"timeline-subtitle",children:e(t.schoolKey)})]}),P.jsx("p",{className:"timeline-description",children:e(t.descriptionKey)})]})},r))})]}),P.jsxs("div",{className:"profile-section",children:[P.jsx("h2",{className:"section-title",children:e("profile.work")}),P.jsx("div",{className:"timeline",children:n.work.map((t,r)=>P.jsx("div",{className:"timeline-item",children:P.jsxs("div",{className:"timeline-content",children:[P.jsx("p",{className:"timeline-period",children:e(t.periodKey).replace("至今",e("work.present"))}),P.jsx("h3",{className:"timeline-title",children:e(t.positionKey)}),P.jsxs("div",{className:"timeline-company",children:[t.logo&&P.jsx("img",{src:t.logo,alt:`${e(t.companyKey)} logo`,className:"timeline-logo",onError:i=>{i.target.style.display="none"}}),P.jsx("p",{className:"timeline-subtitle",children:e(t.companyKey)})]}),P.jsx("p",{className:"timeline-description",children:e(t.descriptionKey)})]})},r))})]})]})},Nk=`---
title: C标准库
tags: [program]
---

# 15 Header
* 合格程序员 ctype.h stdio.h stdlib.h string.h
* 熟练程序员 assert.h limits.h stddef.h time.h
* 优秀程序员 float.h math.h error.h locate.h setjmp.h signal.h stdarg.h


# assert.h

\`\`\` c
/* assert.h standard header */
#undef assert

#ifdef NDEBUG
    #define assert(test) ((void) 0)
#else
    void _Assert(char *);
    #define _STR(x) _VAL(x)
    #define _VAL(x) #x
    #define assert(test) ((test) ? (void) 0 \\
        _Assert(__FILE__":"__STR__(__LINE__)"" #test)
#endif

/* _Assert function, xassert.c */
#include <assert.h>
#include <stdio.h>
#include <stdlib.h>

void _Assert(char *msg) 
{
    fputs(msg, stdrr);
    fputs("-- assertion failed\\n", msg);
    abort();
}
\`\`\`

# ctype.h

> 该头文件中声明了识别和转换字符的函数。实现，转换表？

* isalnum
* isalpha
* iscntrl
* isdigit
* isgraph
* ispunct
* isspace ('' '\\f' '\\t' '\\v' '\\r' '\\n')
* isupper
* isdigit
* tolower
* toupper

# errno.h

> 系统调用出错标志变量(平时编程中数学运算溢出)

# float.h

> 定义了浮点数值运算中可以展开为各种范围和参数的宏。eg, FLT_MAX_EXP, DBL_MAX_EXP, 
FLT_MAX, FLT_MIN, DBL_MAX, DBL_MIN

# limits.h

> 定义了数值的范围，eg. CHAR_MIN, CHAR_MAX, INT_MAX, INT_MIN, SHRT_MIN, SHRT_MAX

# locale.h

> 区域设置

* setlocale
* localeconv

# math.h

> 数学库

* NaN Not a Number, 对负数开方sqrt(-1.0)、对负数求对数(log(-1.0))、0.0/0.0、0.0*inf、inf/inf、inf-inf这些操作都会得到nan。
* inf
* sin, cos, tan
* log, log10, exp, sqrt
* floor, ceil
* fabs

# setjmp.h

> 实现在函数间的跳转

* jmp_buf
* setjmp
* longjmp

# signal.h

> 进程间通信信号

* SIGINT, SIGABRT
* signal
* raise

# stdarg.h

> 变长参数的处理。参数传递是通过栈来实现的，一般调用都是从右至左的顺序压参数入栈，
因此参数与参数之间是相邻的，知道前一个参数的类型及地址，根据后一个参数的类型就可以获取后一个参数的内容。
对于变长参数函数，结合一定的条件，我们可以根据最后一个指定参数获取之后的省略参数内容。

>  那么，要怎么指定上诉的“一定的条件”呢？最简单的方法就像printf等函数一样，
使用格式化占位符。分析格式化字符串参数，通过事先定义好的格式化占位符可知可变参数的类型及个数，
从而获取各个参数内容。一般对于可变参数类型相同的函数也可直接在强制参数中指定可变参数的个数和类型，
这样也能获取各个参数的内容。

* va_list
* va_start
* va_arg
* va_end

\`\`\` c
int var_print
//sum为求和函数，其参数类型都为int,但参数个数不定
//第一个参数（强制参数）n指定后面有多少可变参数
int sum(unsigned int n, ...)
{
    int sum=0;
    va_list args;
    va_start(args, n);
    while (n0) {
        //通过va_arg(args,int)依次获取参数的值
        sum + =va_arg(args,int);
        n--;
    }
    va_end(args);
    return sum;
}
\`\`\`
# stddef.h

> 提供了实现遍历可变参数的宏

* ptrdiff_t, size_t, wchar_t, NULL, offsetof

# stdio.h

> 输入输出，文件IO

# stdlib.h

> 定义和声明那些没有明显归属的宏和函数。

* 整型数学 abs, div, labs, ldiv
* 算法 bsearch, qsort, rand, srand
* 文本转换 atof, atoi, atol, strtod, strtol, strtoul
* 多字节转换 mblen, mbstowcs, mbtowc, wcstombs, wctomb
* 存储分配 calloc, malloc, realloc, free
* 环境接口 abort, atexit, exit, getenv, system

# string.h

> 数组和字符串数组操作

* memcpy, memcmp, memset
* strcpy, strcat, strlen, 
* strchr, strrchr, strstr 
* strerror

\`\`\` c
#include <string.h>
static char str[] = "?a???b...#c";
char *t;
t = strtok(str, "?"); /* t points to the token "a" */
t = strtok(NULL, ","); /* t points to the token "??b" */
\`\`\`

# time.h

> 时间相关函数

* struct tm 
* clock
* struct tm *localtime(const time_t *timer)
* strftime

\`\`\` c 
struct tm {
    int tm_sec;
    int tm_min;
    int tm_hour;
    int tm_mday;
    int tm_mon;
    int tm_year;
    int tm_wday;
    int tm_yday;
    int tm_isdst;
};
\`\`\`
`,Ik=`---
title: 黄鹤楼赋
tags: [genius]
---

  南维高拱，极目楚天，北斗平临，尽收云梦，擒蛇望龟，金鹤驻足。北镇大江之惊涛，南安荆楚之黎庶，西接天府之膏腴，东连吴越之沃土。九省通衢，聚四方之英杰;唯楚有才，变历史之风云。雄胜岳阳楼，壮盖滕王阁，名冠群楼，享誉四海。


  重阳前后，岁在庚辰。阁楼高可摘星辰，四座雄而震龙伯。登崇阿于林阴，赋诗词于名楼。念太白之别情，感崔颢之乡愁;大浪千叠，疑周郎之雄兵;彤霞万里，惊赤壁之烈焰;苍松古槐，仰武穆之忠魂;香檀紫竹，慕屈子之高风。黄瓦红柱，鱼龙凌空。虹桥与仙楼齐名，涛声与金石共歌。高山流水，天下知音;千湖环绕，渔歌互答。微风不寒，拂面若杨柳之息;楚乐飘升，嘤嘤唤黄鹤归来。


  大江东去，烟波浩淼;朝暮之间，变幻万端。朝雾起而失晴川之树，暮霭笼而隐龟山之塔。白云红日，引百鸟来朝;朝晖落霞，逗江豚出水。楚天神韵，江城风采，虽东坡豪词，青莲佳句不能状其形貌，子安之赋，范公之文不能名其佳处也。


  古往今来，看英雄辈出;少年得志，知时运自创。朝读诗书，暮修人伦，展翅而上九万里，焉用好风频借力?我辈生遇其时，岂甘蓬蒿!少当益壮，当吞云吐雾于九天;志存高远，应击浪遏舟于中流。兴万里之江山，旺千年之社稷。


  璐，年方及笄，慕织锦之慧，叹咏絮之才，锥锋不利，敬毛遂之脱颖，班门弄斧，鄙义府之忧叹。有才必施，有策必献，不待杨意，不等三顾，怀鸿鹄之志，借六月之息，上九万里何难!我辈豪情，各领风骚。


`,bk=`---
title: 写给二十岁的你
tags: [genius]
---

> 2012年农历11月22日于西安

岁月如白驹过隙，一个清新而又不失文艺的开头，正像迈进二十岁的你，清新而又洒脱。你说，明天不过也是个普通的日子罢了。然而，文与字仍是我最喜欢送你的礼物。一横一竖，愿字如其言，文如其声，陪你走过异样的年华。

仰望永远是生活不可或缺的一部分，因为头顶总有一方天空，晴天亦或星空，我们都赋予它独特的内涵，正如一直追逐的梦。男子天生的好战让年轻的我们曾深深追逐踏马横扫欧洲的拿破仑，对强权政治的幻想又让我们沉迷于彼得大帝所铸就的辉煌，至今，英雄依在，确早已不是仰望的主角。因为路漫漫，不同的地方便仰望到不同东西。渐渐地在看似平坦的地方看着清晰的远方，有时还会沉浸在那份丰满的小幸福中尽情遐想。然而,狂歌空度日,梦里几回雄，不失的是仰望的勇气。

锦瑟华年谁与度，唯有君知处，爱情是这个年华的主角。你侬我侬，相依相偎时的那分缱绻；几度失落几度愁,敏感不时划伤青涩的眷恋。指尖相碰的瞬间、相伴走过的时光、自习室失声的笑、多日不见的思念，越是孤独的日子里，这份守候越发让人幸福。正如你说，所以幸福，很大程度上是因为有你。所以,更要看到未来,看到更远。还不够成熟，甚至还不知道如何去呵护这份青涩的爱，还在彼此的任性后黯然伤心。相伴而相勉，相依而相励，有理想的地方才是爱情的归宿。

二十岁,成长了，当然也会慢慢懂得自己真正想要的东西。思想总会随着岁月或是阅历慢慢的变化，独立的个性却是背后的支撑点。正如这个世界上，有追求的人总是最值得人尊敬的，精神所赋予的力量远比荣誉所带来的更大，更强烈，也更伟大，正如那些对自己代码负责的人一样。看不清的时候,沉下心来积淀,看得清的时候,整理行装征战。说不清的时候，就为那颗有所为、有所求的年轻、高贵的心，再带上那句“一个人可以不成功，但不能不成长”，心中将有无限的满足。

岁月如白驹过隙，二十岁的你，何不为自己华美的生命喝彩!
`,Lk=`---
title: 秋夜
tags: [genius]
---

不知不觉中，秋已走到末头。


夜凉如水，秋风所至，树影婆娑，合肥深夜的街头，饿与累交困的我，静静的看着车窗外，痴想着回去后的泡面和那张温暖的床。离酒店的那个十字路口拐弯的时候，一惊，又看到那对摆夜市的小夫妻。


昨天晚上回来的时候，大概十点多，就是和同学在他们那儿买的吃的。回去的路上，还讨论着那对夫妻，同学说，小夫妻两个都挺清秀的。


下车后，我不禁打了个寒颤，天真冷了。透过月色，马路对面路灯下，三轮车的背后，那对小夫妻相拥坐在这夜这秋风中，男主人搂着女主人后背，女主人刚好就依偎在了男人的肩头。伴着皎洁的月色和徐徐的秋风，画面真美，我心里又是一惊，尽管不论是他们的穿着还是身体都略显单薄。“一份炒面，一份馄饨”，两个人忙了起来，我在旁边暗暗庆幸可以不用吃泡面了。女主人数着混沌，灯光下，更显得她脸色白皙，瓜子脸上缀着一对清澈的眼睛，睫毛整齐而修长，确实很清秀。男主人烧着油，开始炒面，身材单薄的他，脸色淡泊，目光平和，也相当清秀。看他们准备的时候，我瞥了瞥手机，猛的一惊，已经凌晨一点了，我不禁问：“大哥，这么晚了，怎么还不收摊？”，“家离这儿近，看情况，有时早，有时晚。”男主人亲切的答道，女主人一旁肯定的点了点头。挺辛苦的，我想。饭打包好了，回去的路上，扭头，他们又恢复了刚才的姿势，在寂寞清冷的夜里，相守着一份小幸福，相依而相偎。


自己向来不屑没有墓碑的爱情，鲜于在平淡中感受生活，崇尚痛苦并快乐着的幸福。然而，深夜遇见清秀的你们的故事，也钦慕不已。不安深夜里，有归宿，有执，有念，有温度，有你！


“是的，有你！”，我不禁在秋风中喃喃。


`,Mk=`---
title: 生活的平庸将使人痛苦不堪
tags: [genius]
---

生活不是战场，鲜有重要的人做重要的决定，你的柔弱、犹豫，寡断，你的睿智、坚决、果断只是小时刻的小事件而已，所以，生活是平庸的。然而，生活的平庸将使人痛苦不堪。

`,Fk=`---
title: 生命是一袭华美的袍
tags: [genius]
---

> “生命是一袭华美的袍，爬满了蚤子。”  ——张爱玲(19岁)


`,zk=`---
title: C++ note
tags: [program]
---

# cc

## 复制构造函数 & 赋值构造函数

> 只有单个行参，而且该形参是对本类类型对象的引用（常用const修饰），即为复制构造函数，一种特殊的构造函数。

> 赋值是二元运算，所以该操作符有两个形参，第一个对应着左操作数，第二个对应着右操作数。当操作符为成员函数时，它的第一个操作数隐士绑定到this指针，右操作数一般作为const引用传递。赋值操作符的返回类型应该与内置类型运算返回的类型相同，内置类型的赋值运算一般返回对右操作数的引用，因此，赋值操作符也返回对同一类型的引用。

\`\`\` c
class C {
private:
    C(const C &); // Disable copy
    C & operator = (const C &); // Disable assign
};
\`\`\`

## Google C++ Style Guide

* 函数超过10行时不要使用內联
* -inl.h內联函数实现文件 \\| 定义函数模板
* 输入：const型，输出参数：指针
* 最好给纯接口类加上Interface后缀
* 名称为foo_的变量其访问函数为foo()，而其修改器(mutator)则为set_foo()，访问器常在头文件中定义为内联函数。
* 请按下面的规则次序来定义类：公共成员位于私有成员前；方法位于数据成员前(变量)等等。
* scoped_ptr \\| shared_ptr
* 使用cpplint.py来检测风格错误
* 类型转换(Casting),需要类型转换时请使用static_cast<>()
* 类成员以下划线结束 int val_;
* 禁止使用异常
* 常量命名, 在名称前加k：kDaysInAWeek
* 函数形式参数位置和花括号位置

![Google CC Guide](/public/img/google_cc_guide.jpg)

## 标准库比较接口

* 函数形式

\`\`\` cpp
int compare(int a, int b) {
    return a < b;
}
\`\`\`

*  函数对象

\`\`\` cpp
struct Node {
	int left, right, parent;
	int w;
	char ch;
	int id;
	Node(): left(-1), right(-1), parent(-1), w(0) {}
    Node(int l, int r, int ww): left(l), right(r), w(ww), parent(-1) {}
};

struct NodeCmp {
	bool operator () ( const Node *n1, const Node *n2 ) {
		return n1->w > n2->w;
	}
};
priority_queue<Node *, vector<Node *>, NodeCmp> que;
\`\`\`

* 友元形式

\`\`\` cpp
struct Distance {
	int node_id;
	int dis;
	friend bool operator < (Distance d1, Distance d2) {
		return d1.dis > d2.dis;
	}
	Distance() {}
};
priority_queue<Distance> que;
\`\`\`


`,Rk=`---
title: Vim
tags: [program]
---

## Simple & Stupid Vim Configuration

\`\`\` sh
set nocompatible " be iMproved
syntax on
set nu
set ts=4
set expandtab
set sw=4
set autoindent
set hlsearch
set bs=2
"set nowrap
"set laststatus=2
""colorscheme darkblue
colorscheme default

"让vim记忆上次编辑的位置
"autocmd BufReadPost *
"   \\ if line("'\\"")>0&&line("'\\"")<=line("$") |
    \\   exe "normal g'\\"" |
    \\ endif

set encoding=utf-8
set fileencodings=utf-8,gb18030,gb2312,ucs-bom,gbk,cp936

\`\`\`


`,Ak=`---
title: 函数式程序设计 & Emacs
tags: [program]
---

# Emacs & Lisp

## Lisp
* '( 1 2 3) & (list 1 2 3)
* progn--begin
* 宏

\`\`\` lisp
;;emacs lisp incr
(defmacro incr (var)
"Add one to the named variable."
 \`(setq ,var (+ ,var 1)))

;;common lisp when
(defmacro when (condition &rest body)
  \`(if (not ,condition) (prong ,@body)))
;;从宏定义的格式来看，定义宏中的形式体必须使用反引号“\`”，表示对该形式体不求值，但是要对新宏的参数求值；
;;新宏的参数有两类，一个是新宏的形参，一个是新宏的形式体。
;;这两者的共同点就是都要通过逗号“,”来求值；
;;不同点有两处，一是形参用逗号直接求值，形式体则用逗号和@ 即 “,@” 去掉对形式体求值后所得到的表达式最外层列表的括号，将这个表达式嵌入到最外围列表的最后面；二是形参要做一系列处理，而形式体则直接求值嵌入，不做任何变化，这是因为这个形式体本来就是新宏的处理语句，定义宏只需要照搬即可，不需要也不应该做其他变化。
;;阅读宏定义代码或者自己去编写宏定义时，只要能牢牢把握住上面提到的差异，应该比较容易理解那些或简单、或复杂的宏代码了。

;;while
(defmacro while. (test &rest body)
  (let ((label (gensym)))
  \`(tagbody
    ,label
    (cond (,test ,@body (go ,label))))))
\`\`\`

## emacs keynotes
* (global-set-key "M-?" command)，设置全局快捷键
* load-file：打开emacs lisp文件
* load-path：emacs load启动，(append load-path ("/your/directory/here")))
* require provied,像C的include的一样，在别的文件中引用内容
* autoload，在调用时进行加载
* message: (message "i am %s %d" "number" 1)
* buffer-name: 当前buffer name, buffer-file-name
* current-buffer other-buffer 当前buffer对象和最邻近使用的buffer
* interactive：M-x函数名或快捷键可以激活
* 快捷键 (global-set-key (kbd "S-<f12>") 'semantic-ia-fast-jump) or [S-f12] S-C-M
* add-to-list
* 函数名重映射 \`(defalias 'scroll-ahead 'scroll-up)\`


## emacs lisp grammer

### let

\`\`\` lisp
(defun square_add (a b)
  (let ((x (+ a b))
		(y (- a b)))
	(* x y)))
\`\`\`

### inner function

\`\`\` lisp
(defun factorial (n)
  (defun iter (product counter)
	(if (> counter n)
		product
	  (iter (* product counter) (+ counter 1))))
  (iter 1 1))
factorial
(factorial 10)
3628800
\`\`\`

### cond

\`\`\` cpp
(defun my_abs (x)
  (cond ((> x 0) x)
		((< x 0) (- x))
		(else 0)))
my_abs
(my_abs 2)
2
(my_abs -2)
2
\`\`\`

## Plugin

### w3m
* w3m-goto-url

### emms

\`\`\` lisp
;;emms
(require 'emms-setup)
(emms-standard)
(emms-default-players)
\`\`\`

## important functions
* isearch-forward(backward): search
* help
* other-window: next windows, back to recent edit window, (other-window -1)

## Writing Emacs Extensions

### Customizing Emacs
* lisp的特性，前缀s表达式，list,garbage collection
* 定制快捷键 \`(global-set-key "\\M-?" command)\`

### Simple New Commands
* 切换窗口函数定义

\`\`\` lisp
(defun other-window-backward ( )
"Select the previous window."
(interactive)
(other-window -1))
;;interaction with "p", wtih argument
(defun other-window-backward (n)
"Select Nth previous window."
(interactive "p")
(other-window (- n)))
;;
(defun other-window-backward (&optional n)
"Select Nth previous window."
(interactive "p")
(if n
(other-window (- n))
;ifn s non-nil
(other-window -1)))
;ifn snil
\`\`\`

### minor mode

\`\`\` lisp
(if evil-mode
	(message "yes")
  (message "no"))
\`\`\`

# Racket
## quote
* like strings, but fast in eq?
* 可以是任意序列的字符
## struct
* better style and more concise
* have type not list

\`\`\` lisp 
(struct foo (bar baz quux))
(define x (foo 1 2 3))
(foo? x)
(fool-bar x)
\`\`\` 
## implementing
* what your interpreter can and cannot assume check & error &
* implement variables & enviroment \`(define (eval e env))\`
* implementing closure
    > lack of magic: the interpreter uses a closure data stucture(with two parts)to keep the enviroment it will need to use later
(struct closure (env fun))
* evaluate a function expression
    * a function is not a value, a closure is a value, so evaluating a funciton returns a closure
    * create a funciton out of the function a and b the current enviroment when the function was evaluate 

# python的函数式特性
## 函数赋值

\`\`\` python
def square(n):
    return n*n
f = square
square(10)
\`\`\`

## lambda

\`\`\` python
square = lambda x: x*x;
square(10)
\`\`\`

## 内置函数

\`\`\` python
map(square, [1, 2, 3])
reduce & filter
\`\`\`

## 消除控制流

\`\`\` python
def func1(lst) :
  new_lst = []
  for n in lst :
    if odd(n) :
      new_lst.append(square(n))
  return new_lst
可以改进为
def func2(lst) :
  return map(square, filter(odd, lst))
\`\`\`

## 列表推导

\`\`\` python
[x for x in lis if x % 2 == 0]
\`\`\`

## 闭包，计算函数的导数

\`\`\` python
def d(f) :
  def calc(x) :
    dx = 0.000001  # 表示无穷小的Δx
    return (f(x+dx) - f(x)) / dx  # 计算斜率。注意，此处引用了外层作用域的变量 f
  return calc  # 此处用函数作为返回值（也就是函数 f 的导数）

f = lambda x : x**2 + x + 1  # 先把二次函数用代码表达出来
f1 = d(f)  # 这个f1 就是 f 的一阶导数啦。注意，导数依然是个函数

f1(3)
\`\`\`
`,Ok=`---
title: 自然语言处理
tags: [note]
---

* TOC
{:toc}

# 参考书籍
* 朱拉夫斯基和曼宁《语音与语言处理》
* 曼宁、舒策、拉哈万《信息检索导论》（2008）
* 伯德、克莱因、洛普《使用Python进行自然语言处理》（2009）
* 做实验的数据可以在[Peter Norvig](http://norvig.com/ngrams/)查找

# Basic Text Processing

## Regular Expression
* []: [wW]oodchuck, [0-9], [a-z]
* '[^]: not, [\\^a-z]'
* \\|: or
* ?, *, +, .: times 
* ^, &: start & end

## Word Tokenization

### shakespeare

\`\`\` sh
tr -sc 'a-zA-Z' '\\n' < shakespeare.txt | sort | uniq -c | sort -n -r | less
\`\`\`

* 将非单词替换为\\n
* 排序
* 去重，并统计出现次数， uniq -c
* 按出现次数排序，逆序输出
* 如何统计每个单词的重复出现次数 \`tr -s "\\t| " "\\n" < word.txt | sort | uniq -c\`

### 中文的分词
* max-match, 最大前向匹配
* 最大后向匹配
* 语言模型结合viterbi算法打分

## Word Normaliztion & Stemming
* stem: Porter's algorithm
* affix

## Sentence Segmentation
* ?, !: 通常没有歧义
* .: 存在歧义，如Dr. 2014.12等。 解决方法，使用决策树判断.是否为句子结束

# Edit Distance
* Levenshtein distance: 替换代价为2,可以理解为先删除再插入
* 算法: 动态规划, 通过回溯二维数组pre[i,j] = DOWN, LEFT, DIAG来记录回溯信息
* 加权Edit Distance 
    * confusion matrix, a容易被拼写为e;
    * 物理键盘的布局

![Confusion Matrix](/pulibc/img/nlp/confusion_matrix.png)

![Weigted Edit](/public/img/nlp/weighted_edit.png)

# Language Modeling

## 理论 & 应用
* 机器翻译, Spell Correction, 语音识别
* 一些工具 SRILM, Google N-Gram Release
* a) Markov假设, b)取log避免下溢

## Perplexity，如何评价一个语言模型
* P[P(W)] = P(W)^1/N, 取对数即为1/NlogP(W)
* Perplexity越小，better model

## 数据稀疏
> 测试数据中出现训练集不存在的语法怎么办？

* Add-One Smoothing V个人感觉应为所有uigram即单词个数,不论是几元文法

![Add One](/public/img/nlp/add_one.png)

>  在V >> c(wi-1)时，即训练语料库中绝大部分n-gram未出现的情况（一般都是如此），Add-one Smoothing后有些“喧宾夺主”的现象，效果不佳。
所以n-gram中一般不使用，但在文本分类中使用

* Good-Turing Estimate(参考数学之美)
    * 一般来说，出现一次的词的数量比出现两次的多，出现两次的比出现三次的多。这种定律成为Zipf定律。
    * 基本思想是利用频率的类别信息对频率进行平滑。调整出现频率为c的n-gram频率
    * 改进策略就是“对出现次数超过某个阈值的gram，不进行平滑，阈值一般取8~10”
    * 估计P_{0},就得先统计N_{0}

* Stupid Backoff

> 思想很简单找得到直接mle，找不到回退，乘以0.4作为惩罚。
  如计算bigram如下若该bigram存在，则直接计算score，不存在则回退计算其unigram score， 0.4作为惩罚因子。

    \`\`\` python
    def score(self, sentence):
       """ Takes a list of strings as argument and returns the log-probability
       of the sentence using your language model. Use whatever data you
       computed in train() here."""
       score = 0.0
       previous = sentence[0]
       for token in sentence[1:]:
           bicount = self.bigramCounts[(previous, token)]
           bi_unicount = self.unigramCounts[previous]
           unicount = self.unigramCounts[token]
           if bicount > 0:
               score += math.log(bicount)
               score -= math.log(bi_unicount)
           else:
               score += math.log(0.4)
               score += math.log(unicount + 1)
               score -= math.log(self.total + self.vocab_size)
           previous = token
       return score
    \`\`\`

# Spelling Correction

## 拼写错误 

> 据统计，80%的拼写错误编辑距离为1，几乎所有的拼写错误编辑距离小于等于2
Kukich（1992）指出有25%~40%的拼写错误都属于Real-word类型

* 拼写错误类型，Non-word和Real-word(虽然拼写错误，但仍出现在词典中)
* $w = arg max P(x\\|w)P(w)$, 前者为channel(error) model, 后者为language model, 可以使用unigram, bigram and on
* $P(x\\|w)$ 中包含了transpose error，confusion matrix

## 如何写一个拼写检查器
* 根据编辑距离对x生成候选集合$w$, 并计算P(x\\|w)
* 选择语言模型(unigram \\| bigram \\| ...)
* $w = arg max P(x\\|w)P(w)$

## Peter Norvig Corrector
> 参考[How to Write a Spelling Corrector](http://norvig.com/spell-correct.html)，这段代码非常简洁优美。

\`\`\` python
import re, collections

def words(text): return re.findall('[a-z]+', text.lower()) 

def train(features):
    model = collections.defaultdict(lambda: 1)
    for f in features:
        model[f] += 1
    return model

NWORDS = train(words(file('big.txt').read()))

alphabet = 'abcdefghijklmnopqrstuvwxyz'

def edits1(word):
    n = len(word)
    return set([word[0:i]+word[i+1:] for i in range(n)] +                     # deletion
               [word[0:i]+word[i+1]+word[i]+word[i+2:] for i in range(n-1)] + # transposition
               [word[0:i]+c+word[i+1:] for i in range(n) for c in alphabet] + # alteration
               [word[0:i]+c+word[i:] for i in range(n+1) for c in alphabet])  # insertion

def known_edits2(word):
    return set(e2 for e1 in edits1(word) for e2 in edits1(e1) if e2 in NWORDS)

def known(words): return set(w for w in words if w in NWORDS)

def correct(word):
    candidates = known([word]) or known(edits1(word)) or known_edits2(word) or [word]
    return max(candidates, key=lambda w: NWORDS[w])

if __name__ == '__main__':
    while True:
        print correct(raw_input(">"))
\`\`\`

# Text Classification
## 方法(Naive Bayes, SVM)
## Naive Bayes
> 基本和原来机器学习时内容一致，几个在实践时需要关注的问题
* 取log，避免下溢
* Add-One Smoothing
* 频率为统计频率，not boolean freqency

# Sentiment Anylasis
> Also Opnion Extraction, Opnion Mining, Sentiment Mining, Subjectivity Anylasis

## Steps
* tokenize
* Feature Extraction
* 分类器，这里分类器可以使用Naive Bayes, Svm, MatEnt等，后两者效果要好。

## Naive Bayes in Sentiment
> 主题仅与词出现有关系，和出现次数关系不大。所以这里使用Boolean Multinomial Naive Bayes(Mutivariate Benoulli Naive Bayes),
  即贝努利频率，相应的Add-one方法更改为Add-delta
$$P(w|c) = \\frac{n_{k}+\\alpha} {n+\\alpha|V|}$$


## 情感词典

### 成熟开放的情感词典
* GI（The General Inquirer）
* LIWC (Linguistic Inquiry and Word Count)
* ...

### Learning Sentiment Lexicons
* 利用and和but连接词的词性关系(这个想法很棒)

# Discriminative classifiers: Maximum Entropy classifiers

## 生成模型 & 判别模型
> 判别方法：由数据直接学习决策函数Y=f(X)或者条件概率分布P(Y\\|X)作为预测的模型，即判别模型。基本思想是有限样本条件下建立判别函数，不考虑样本的产生模型，直接研究预测模型。典型的判别模型包括k近邻，感知级，决策树，支持向量机等。
> 生成方法：由数据学习联合概率密度分布P(X,Y)，然后求出条件概率分布P(Y\\|X)作为预测的模型，即生成模型：P(Y\\|X)= P(X,Y)/ P(X)。基本思想是首先建立样本的联合概率概率密度模型P(X,Y)，然后再得到后验概率P(Y\\|X)，再利用它进行分类

# Pos Tagging词性标注

## Homework
1. regular expression
2. autocorrect(edit distance, language model)
3. test

> 不同点有两处，一是形参用逗号直接求值，形式体则用逗号和@ 即 “,@” 去掉对形式体求值后所得到的表达式最外层列表的括号，将这个表达式嵌入到最外围列表的最后面；二是形参要做一系列处理，而形式体则直接求值嵌入，不做任何变化，这是因为这个形式体本来就是新宏的处理语句，定义宏只需要照搬即可，不需要也不应该做其他变化。

> Everything should be made as simple as possible, but not any simpler

`,Dk=`---
title: Shell & Tools
tags: [note, program]
---

### \${}

> 利用\${ }还可针对不同的变数状态赋值(沒设定、空值、非空值):

* \${var-myvar} 假如$var沒有设定，則使用myvar作返回值，空值及非空值时不作处理
* \${var:-myvar} 假如$var沒有设定或为空值，則使用myvar作返回值，非空值时不作处理
* \${var+myvar} 假如$var設为空值或非空值，均使用myvar作返回值，沒设定时不作处理
* \${var:+myvar} 若$var为非空值，則使用myvar作返回值，沒设定及空值时不作处理
* \${var=myvar} 若$var沒设定，則使用myvar作返回值，同时将$var赋值为myvar，空值及非空值时不作处理
* \${var:=myvar} 若$var沒设定或为空值，則使用myvar作返回值，同时将$var 赋值为myvar，非空值时不作处理
* \${var?myvar} 若$var沒设定，則将myvar輸出至STDERR，空值及非空值时不作处理
* \${var:?myvar} 若$var没设定或为空值，则将myvar输出至STDERR，非空值时不作处理

使用频次比较高的用法为\${var:+myvar}，一般用在shell可选的参数中，例如:
\`\`\` sh
param=
# equal to script.sh other_params 
script.sh \${param:+"--param $param"} other_params
\`\`\`

## shell program
* $\\*引用所有参数, $#存放参数的个数, $0引用程序名, $i第i个参数
* 数学计算

\`\`\` sh
$ var=1+1 error # error,"1+1"
$ let var+=1 | let "var+=1"
$ var=\`expr $var + 1\` 
$ ((var+=1)) 
$ var=$[$var+1] #自己推荐使用这个哈
\`\`\`

## 数组

\`\`\` sh
a=(1 2 3 4 5)   #() 数组
a[1] = 100      #赋值
echo \${#a[*]}   #length
echo \${a[*]}    #all element
c=(\${a[@]:1:4}) #\${数组名[@或*]:起始位置:长度} 切片原先数组  
\`\`\`

## 括号 () {}

> () 为了在子shell中执行一组命令，可以用命令分隔符(即",")隔开每一个命令，并把所有的命令用圆括号()括起来。 
> {} 如果使用{}来代替()，那么相应的命令将在当前shell中作为一个整体被执行

## 字符串

\`\`\`
| 表达式                           | 含义                                                                          |
|----------------------------------+-------------------------------------------------------------------------------|
| \${#string}                       | $string的长度                                                                 |
| \${string:position}               | 在$string中, 从位置$position开始提取子串                                      |
| \${string:position:length}        | 在$string中, 从位置$position开始提取长度为$length的子串                       |
| \${string#substring}              | 从变量$string的开头, 删除最短匹配$substring的子串                             |
| \${string##substring}             | 从变量$string的开头, 删除最长匹配$substring的子串                             |
| \${string%substring}              | 从变量$string的结尾, 删除最短匹配$substring的子串                             |
| \${string%%substring}             | 从变量$string的结尾, 删除最长匹配$substring的子串                             |
| \${string/substring/replacement}  | 使用$replacement, 来代替第一个匹配的$substring                                |
| \${string//substring/replacement} | 使用$replacement, 代替所有匹配的$substring                                    |
| \${string/#substring/replacement} | 如果$string的前缀匹配$substring, 那么就用$replacement来代替匹配到的$substring |
| \${string/%substring/replacement} | 如果$string的后缀匹配$substring, 那么就用$replacemen                          |
\`\`\`

## sed

* -e 连续执行多个编辑

\`\`\` sh
sed -e "s:aa:bb:" -e "s:\\d::" file
\`\`\`

* -i 在源文件上进行替换

\`\`\` sh
#如删除windows下文件的^M显示
sed -i 's/^M//g' filename 
\`\`\`

* \\(\\)表示分组，_1,_2引用，标准正则表达式使用()

\`\`\` sh
#如根据路径取x.wav的文件名
sed "s:.*/\\(.*\\)\\.wav:\\1:"
\`\`\`

## grep
* -P perl形式的正则表达式
* -v 不匹配的项
* -H 显示文件名
* -f 从文件中取得模式
* -i 忽略大小写

## cut(default tab)

\`\`\` sh
#-d分割符, -f域
$ cut -d' ' -f2
\`\`\`

## tr
* 只接收标准输入
* tr set1 set2
* tr " " "\\n" 将空格换成回车
* tr "a-z" "A-Z" 或者 tr [:lower:] [:upper:] 大小写转换
* tr -s " " 将多个空格替换为1个
* tr -d 删除, tr -cd '[a-z]'
* tr -sc 'a-z' '\\n', -c取不是'a-z', 所以将不是a-z的字符替换为换行

## find
* -L 包含链接文件，默认不查找链接文件
* -name 文件名
* -type (f d l)
* -mmin 最近修改时间
* -maxdepth 

\`\`\` sh
$ find -L . -name "*.sh" -type f
\`\`\`

## awk
* 以awk文件方式运行, -f

\`\`\` awk
#!/bin/awk
{print $0}
\`\`\`

\`\`\` awk
awk -f strcat.awk if.sh
\`\`\`

* 字符串连接 a ("" | "+") b
* print printf

\`\`\` sh
{print $0}
{printf("%04d %s", NR, $0)} 
\`\`\`

* -v 可带输入变量

\`\`\` sh
awk -v num=10 '{print num}'
\`\`\`

* 关联数组

\`\`\` sh
#!/bin/awk
#word count
BEGIN {
	FS="[^a-zA-Z]"
}
{
	for(i=1; i<=NF; i++)
		words[tolower($i)]++;
}
END {
	delete words[""]
	for (x in words)
		print x, words[x];
}
\`\`\`

* getline close(在脚本中要两次读取同一文件时要close)

\`\`\` sh
#将拼音级的抄本查表转换成音素级抄本
#!/bin/bash

if [ $# -ne 2 ]; then
	echo "Usage: pinyin2phone.sh dict_file pinyin2phone"
	exit -1
fi

dict=$1
awk -v phone_map=$2 \\
'BEGIN {
	while (getline < phone_map) {
		t = "";
		for (i=2; i<=NF; i++)
			t = t " " $i;
		map[$1] = t;
		#print $1, t
	}
    close(phone_map) #此处也可以不写
}
{
	line = $1;
	for (i=2; i<=NF; i++)
		line = line " " map[$i];
	print line;
}
' $dict 
\`\`\`

* 字符串处理函数

\`\`\` sh
gsub(r,s)    在整个$0中用s替代r
gsub(r,s,t)    在整个t中用s替代r
index(s,t)    返回s中字符串t的第一位置
length(s)    返回s长度
match(s,r)    测试s是否包含匹配r的字符串
split(s,a,fs)    在fs上将s分成序列a
sprint(fmt,exp)    返回经fmt格式化后的exp
sub(r,s)    用$0中最左边最长的子串代替s
substr(s,p)    返回字符串s中从p开始的后缀部分
substr(s,p,n)    返回字符串s中从p开始长度为n的后缀部分
\`\`\`

\`\`\` sh
#仅仅使用begin在shell中格式化字符串
awk x=10 'BEGIN{printf("S%04d", x)}'
awk 'BEGIN{print split("123#456#678", myarray, "#")}'
awk '{BEGIN {print match("ANCD", /d/)}'
\`\`\`

* system,调用shell命令

\`\`\` sh
#function system(expr) uses /bin/sh to execute expr and returns the exit status of the command expr.
#假设文件file中每一行均为文件名，cat所有文件
$ awk '{system("cat" " "  $0)}' file
\`\`\`

* 莫给NR，NF加$,经常犯这个错
* other example

\`\`\` sh
# emulate cat.

     { print }

# emulate wc.

     { chars += length($0) + 1  # add one for the \\n
       words += NF
     }

     END{ print NR, words, chars }
\`\`\`

## BRE vs ERE
> Basic vs Extended Regular Expressions In basic regular expressions the meta-characters ?, +, {, |, (, and ) lose their special meaning; 
instead use the backslashed versions \\?, \\+, \\{, \\|, \\(, and \\)

* 注意与linux命令中通配符区分 *其在命令中表示任意字符重复任意次*
* grep sed awk均使用BRE，grep在-E选项时可使用ERE
* 所以sed ":.*/\\(.*\\).wav:\\1:"就比较好理解了 
`,$k=`---
title: Notes on DeepLearn Toolbox
tags: [note, dl]
---

> 直接上代码去理解，不搞虚头八脑的东西，不听别人胡扯啦。

## 梯度下降
在整个数据进行梯度下降， 模型精度高，但每轮计算量大。随机梯度下降计算量小，模型精度不够。minibatch很好的结合了二者的优点，又易于并行。

\`\`\` matlab
times = 1000;
[m, n] = size(x);
w = zeros(n, 1); % init with 1
%简单梯度下降
for i=1:times
    delta = 1.0/m * x' * (x*w - y);
    w = w - alpha * delta;
end
%SGD
for i=1:times
    for j=1:m
        delta = 1.0/m * x(j, :)' * (x(j, :) * w - y(j));
        w = w - alpha * delta;
    end
end
%minibatch
batch = 10;
for i=1:times
    for j=1:batch:m-1
        delta = 1.0/m * x(j:j+batch-1, :)' * (x(j:j+batch-1, :) * w - y(j:j+batch-1));
        w = w - alpha * delta;
    end
end
\`\`\`

## 神经网络

### 训练流程

\`\`\` matlab
%L the sum squared error for each training batch
nn.learningRate = 2; %typically needs to be lower when using 'sigm' activation function and non-normalized inputs.
nn.scaling_learningRate = 1; %Scaling factor for the learning rate (each epoch)
L = zeros(numepochs*numbatches,1);
n = 1;
for i = 1 : numepochs
    %shuffle, 有木有啊
    kk = randperm(m);
    for l = 1 : numbatches
        batch_x = train_x(kk((l - 1) * batchsize + 1 : l * batchsize), :);
        batch_y = train_y(kk((l - 1) * batchsize + 1 : l * batchsize), :);
        %前向计算
        nn = nnff(nn, batch_x, batch_y);
        %反向计算梯度
        nn = nnbp(nn);
        %修正权值
        nn = nnapplygrads(nn);
        L(n) = nn.L;     
        n = n + 1;
    end
    nn.learningRate = nn.learningRate * nn.scaling_learningRate;
end
\`\`\`

### 前向计算
\`\`\` matlab
%以sigmod函数和softmax为例
function nn = nnff(nn, x, y)
    m = size(x, 1);
    x = [ones(m,1) x];
    nn.a{1} = x;
    %计算所有隐层输入    
    for i = 2 : n-1
        nn.a{i} = sigm(nn.a{i - 1} * nn.W{i - 1}');
        %Add the bias term
        nn.a{i} = [ones(m,1) nn.a{i}];
    end
    %softmax， 计算损失
end
\`\`\`

### 反向计算梯度

\`\`\` matlab
function nn = nnbp(nn)
    d{n} = - nn.e;
    %反向传播到第2层
    for i = (n - 1) : -1 : 2
        d_act = nn.a{i} .* (1 - nn.a{i});              
        d{i} = (d{i + 1} * nn.W{i}) .* d_act;
    end
    for i = 1 : (n - 1)
        if i+1==n
            nn.dW{i} = (d{i + 1}' * nn.a{i}) / size(d{i + 1}, 1);
        else
            nn.dW{i} = (d{i + 1}(:,2:end)' * nn.a{i}) / size(d{i + 1}, 1);      
        end
    end
end
\`\`\`

### 梯度下降

\`\`\` matlab
function nn = nnapplygrads(nn)   
    for i = 1 : (nn.n - 1)
        nn.W{i} = nn.W{i} - nn.learningRate * dW
    end
end
\`\`\`

### Dropout

\`\`\` matlab
%初始化参数时
nn.dropoutFraction = 0.5;   %  Dropout fraction 
%in nnff前向计算
if(nn.dropoutFraction > 0)
    if(nn.testing)
        %测试时这是什么意思
        nn.a{i} = nn.a{i}.*(1 - nn.dropoutFraction);
    else
        %相当与随机在输入向量中采点，即仅一部分用来特征计算下一层
        nn.dropOutMask{i} = (rand(size(nn.a{i}))>nn.dropoutFraction);
        nn.a{i} = nn.a{i}.*nn.dropOutMask{i};
    end
end
%in 反向计算梯度
%计算梯度时用相同的mask, 即有的输出不产生上一层的梯度
if(nn.dropoutFraction>0)
    d{i} = d{i} .* [ones(size(d{i},1),1) nn.dropOutMask{i}];
end
\`\`\`

## Stacked Auto Encoder

> 作预训练，逐层初始化整个网络，即为w取得比较好的初值。

\`\`\` matlab
function sae = saesetup(size)
    for u = 2 : numel(size)
        sae.ae{u-1} = nnsetup([size(u-1) size(u) size(u-1)]);
    end
end

function sae = saetrain(sae, x, opts)
    for i = 1 : numel(sae.ae);
        %逐层初始化，这一层输出t.a{1}=x, t.a{2}输出
        disp(['Training AE ' num2str(i) '/' num2str(numel(sae.ae))]);
        %每一次三层网络，输入与输出相等，取前2层的w
        sae.ae{i} = nntrain(sae.ae{i}, x, x, opts);
        t = nnff(sae.ae{i}, x, x);
        x = t.a{2};
        %remove bias term
        x = x(:,2:end);
    end
end
\`\`\`

## Momentum冲量

\`\`\` matlab
%初始化时
nn.momentum = 0.5;
nn.vW{i - 1} = zeros(size(nn.W{i - 1}));
%梯度下降nnapplygrads
if(nn.momentum>0)
    nn.vW{i} = nn.momentum*nn.vW{i} + dW;
    dW = nn.vW{i};
end
\`\`\`

## Sparse

\`\`\` matlab
%init
nn.nonSparsityPenalty = 0; %  Non sparsity penalty
nn.sparsityTarget = 0.05;  %  Sparsity target
nn.inputZeroMaskedFraction = 0; %  Used for Denoising AutoEncoders
nn.p{i}     = zeros(1, nn.size(i));
%nnff
if(nn.nonsparsitypenalty>0)
    nn.p{i} = 0.99 * nn.p{i} + 0.01 * mean(nn.a{i}, 1);
end
%nnbp
if(nn.nonSparsityPenalty>0)
    pi = repmat(nn.p{i}, size(nn.a{i}, 1), 1);
    sparsityError = [zeros(size(nn.a{i},1),1) nn.nonSparsityPenalty ... 
                    * (-nn.sparsityTarget ./ pi + (1 - nn.sparsityTarget) ./ (1 - pi))];
end
\`\`\`
`,Bk=`---
title: Kernel Method & SVM
tags: [note]
---

# Kernel Methods

## 对偶表示

许多线性参数模型可以转换为等价的对偶表示，在预测时也依赖于在训练数据上使用核函数后的线性组合。在此考虑以下回归模型，其参数由正规化的最小平方损失函数决定(page293)。

![](/public/img/svm/6-2.png) 

![](/public/img/svm/6-7.png)

![](/public/img/svm/6-8.png)

![](/public/img/svm/6-9.png)

可以将其完全转换为对偶形式，预测时也使用对偶形式。对偶形式有一下有点:
* 完全使用核函数形式表示
* 无需显示声明基函数
* 预测形式中 $\\mathbf{w}$ 消去了

## 核函数

核函数将内积映射为核。如果我们的算法最终表达形式为内积形式，则可以选择合适的核通过核替换(kernel trick)简化运算。

$$k(\\mathbf{x}, {\\mathbf{x}}^{'}) = {\\phi(\\mathbf{x})}^{T} {\\phi({\\mathbf{x}}^{'})}$$

## Radial Basis Function


`,jk=`---
title:  卷积神经网络及其在语音识别中的应用
tags: [asr, dl]
---

# 参考文献
1. Notes on Convolutional Neural Networks
2. Applying Convolutional Neural Networks Concepts to Hybrid NN-HMM Model for Speech Recognition
3. IBM-Tara N. Sainath-Deep Convolutional Neural Networks for LVCSR
4. code guide: DeeplearnToolbox & kaldi CNN

# 卷积特征提取

## 离散卷积

![Conv](/public/img/cnn/convolution.jpg)

* 卷积的长度M+N-1,不补0有效长度M-N+1
* 重要性质之一：交换律

\`\`\` matlab
%matlab 卷积函数
conv(x, h, 'full') %所有长度,M+N-1
conv(x, h, 'valid') %有效长度,M-N+1
\`\`\`

## 图片特征提取
* NN在图像中的问题:参数多，图片的局部性
* 卷积提取特征,如均值滤波窗,Gasussion模糊,Laplace算子,梯度算子，SIFT中的LoG

$$
\\begin{bmatrix}
0 &  -1 &  0  \\\\ 
-1 &  4 &  -1\\\\ 
0 &  -1 &  0
\\end{bmatrix}
$$

![Lena](/public/img/cnn/lena.jpg)

![CNN](/public/img/cnn/lena_cnn.png)

# 卷积神经网络结构

![MyLenet](/public/img/cnn/mylenet.png)
* 卷积层C，所谓的权值共享
* 降采样层S, Pooling
* 全连接层，就是NN

# CNN算法

> 这里主要参考"Notes on Convolutional Neural Networks"中的公式推导,前向和后向算法均以卷积形式给出。 具体的实现也以DeeplearnxToolbox中CNN在mnist库上的应用为例。

## 前向
* 卷积层：第一层时仅有输入图片一个输入，中间卷积层结果是对输入卷积Kij的累和。
* pooling: average, max, stochastic

> max pooling的意思就是用图像某一区域像素值的最大值来表示该区域的特征，而mean pool的意思用图像某一区域像素值的均值来表示该区域的特征。这两个pooling操作都提高了提取特征的不变性，而特征提取的误差主要来自两个方面：（1）邻域大小受限造成的估计值方差增大；（2）卷积层参数误差造成估计均值的偏移。一般来说，mean-pooling能减小第一种误差，更多的保留图像的背景信息，max-pooling能减小第二种误差，更多的保留纹理信息。在图像处理中，使用max pooling多于mean pooling 

## 后向ebp
* 降采样层对 $\\delta$ 升采样，一一对应
* 若降采样层后为全连接层，计算方式与普通NN相同，所以此处仅考虑降采样层后为卷积层的形式。

# 在语音识别中的应用
> 卷积窗仅在频域轴上移动，同一个patch不同滤波器作用的结果分为一组(h1, h2, ..., hn)，max pooling时在patch_step中的hn中取max，例h1 = (1, 3, 2), h2 = (2, 1, 1), h1 h2为一个patch，max pooling的结果为(2, 3, 2)。

## keypoint
* convolution only frequence axis, 卷积窗仅在频域轴上移动
* feature type, filter-bank特征，按频率分组，将时域拼接的上下文帧转换为frequency bands特征
* convolution over all axis, 即不使用local filter，在整个频域上使用相同核
* fast implementation, 将二维滤波器（卷积核）拉伸为一维向量
* 语音识别中卷积（滤波器）的使用

![CNN_Speech1](/public/img/cnn/cnn_speech1.png "语音识别中卷积（滤波器）的使用")

## 语音识别卷积神经网络的深度结构(多个全连接层)

![CNN_Speech2](/public/img/cnn/cnn_speech3.png) 

## kaldi CNN代码解析

> 因为卷积核移动和不同的卷积核，输入与输出之间是一对多的关系，一般是按输入顺序查找输出。这里的一个技巧是先确定出输出的维度，查找与之相应的输入，前向，后向，卷积和pooling时均使用该技巧。

### 卷积层 nnet-convolution-component.h

\`\`\` cpp
  void PropagateFnc(const CuMatrixBase<BaseFloat> &in, CuMatrixBase<BaseFloat> *out) {
    // useful dims
    int32 num_splice = input_dim_ / patch_stride_; //帧数
    int32 num_patches = 1 + (patch_stride_ - patch_dim_) / patch_step_; //patch num
    int32 num_filters = filters_.NumRows(); //filter数量，一行为一个filter
    int32 num_frames = in.NumRows(); //batch中的数据数
    int32 filter_dim = filters_.NumCols(); //filter的核大小

    // we will need the buffers 
    if (vectorized_feature_patches_.size() == 0) {
      vectorized_feature_patches_.resize(num_patches);
      feature_patch_diffs_.resize(num_patches);
    }

    /* Prepare feature patches, the layout is:
     * |----------|----------|----------|---------| (in = spliced frames)
     *   xxx        xxx        xxx        xxx       (x = selected elements)
     *
     *   xxx : patch dim
     *    xxx 
     *   ^---: patch step
     * |----------| : patch stride
     *
     *   xxx-xxx-xxx-xxx : filter dim
     *  
     */
    for (int32 p=0; p<num_patches; p++) {
      vectorized_feature_patches_[p].Resize(num_frames, filter_dim, kSetZero);
      // build-up a column selection mask:
      std::vector<int32> column_mask;
	  /*
       *|-XXX---------|
       *|-XXX---------|
       *|-XXX---------|
       *|-XXX---------|
	   column_mask的位置, p * patch_step + s * patch_stride_ + d
	   */
      for (int32 s=0; s<num_splice; s++) {
        for (int32 d=0; d<patch_dim_; d++) {
          column_mask.push_back(p * patch_step_ + s * patch_stride_ + d);
        }
      }
      KALDI_ASSERT(column_mask.size() == filter_dim);
      // select the current patch columns, 一行为一个输入数据。
      vectorized_feature_patches_[p].CopyCols(in, column_mask);
    }

    // compute filter activations
    for (int32 p=0; p<num_patches; p++) {
      //patch p 在输出中的位置tgt
      CuSubMatrix<BaseFloat> tgt(out->ColRange(p * num_filters, num_filters));
      tgt.AddVecToRows(1.0, bias_, 0.0); // add bias
      // apply all filters
      tgt.AddMatMat(1.0, vectorized_feature_patches_[p], kNoTrans, filters_, kTrans, 1.0);
    }
  }
  //后向程序仅是对公式的翻译
  void BackpropagateFnc(const CuMatrixBase<BaseFloat> &in, const CuMatrixBase<BaseFloat> &out,
                        const CuMatrixBase<BaseFloat> &out_diff, CuMatrixBase<BaseFloat> *in_diff) {
  }
  void Update(const CuMatrixBase<BaseFloat> &input, const CuMatrixBase<BaseFloat> &diff) {
  }
\`\`\`

### pooling层 nnet-max-pooling-component.h

\`\`\` cpp
  void PropagateFnc(const CuMatrixBase<BaseFloat> &in, CuMatrixBase<BaseFloat> *out) {                                                                
    // useful dims                                                                                                                                    
    int32 num_patches = input_dim_ / pool_stride_;                                                                                                    
    int32 num_pools = 1 + (num_patches - pool_size_) / pool_step_;                                                                                    
    //pool_step_ pool步移， pool_size_，pool步长                                                                                                                                                  
    // do the max-pooling (pools indexed by q),为每个输出q选择max                                                                                                        
    for (int32 q = 0; q < num_pools; q++) {                                                                                                           
      // get output buffer of the pool                                                                                                                
      CuSubMatrix<BaseFloat> pool(out->ColRange(q*pool_stride_, pool_stride_));                                                                       
      pool.Set(-1e20); // reset (large negative value)                                                                                                
      for (int32 r = 0; r < pool_size_; r++) { // max                                                                                                 
        int32 p = r + q * pool_step_; // p = input patch                                                                                              
        pool.Max(in.ColRange(p*pool_stride_, pool_stride_)); //*this = max(*this, A)                                                                                      
      }                                                                                                                                               
    }                                                                                                                                                 
  } 
  //max-pool，若其为max，后向误差乘以1，否则0，这里有个scale的操作
  //因为中间部分可能多次计算，相对的边缘部分在shift中计算次数较少
  void BackpropagateFnc(const CuMatrixBase<BaseFloat> &in, const CuMatrixBase<BaseFloat> &out,
                        const CuMatrixBase<BaseFloat> &out_diff, CuMatrixBase<BaseFloat> *in_diff) {
    // useful dims
    int32 num_patches = input_dim_ / pool_stride_;
    int32 num_pools = 1 + (num_patches - pool_size_) / pool_step_;
    //scale 数组
    std::vector<int32> patch_summands(num_patches, 0);
    in_diff->SetZero(); // reset
    //遍历所有pool输出
    for(int32 q=0; q<num_pools; q++) { // sum
      for(int32 r=0; r<pool_size_; r++) {
        //对应q时的输入
        int32 p = r + q * pool_step_; // patch number
        CuSubMatrix<BaseFloat> in_p(in.ColRange(p*pool_stride_, pool_stride_));
        CuSubMatrix<BaseFloat> out_q(out.ColRange(q*pool_stride_, pool_stride_));
        CuSubMatrix<BaseFloat> tgt(in_diff->ColRange(p*pool_stride_, pool_stride_));
        CuMatrix<BaseFloat> src(out_diff.ColRange(q*pool_stride_, pool_stride_));
        //find max mask
        CuMatrix<BaseFloat> mask;
        in_p.EqualElementMask(out_q, &mask);
        src.MulElements(mask);
        tgt.AddMat(1.0, src);
        patch_summands[p] += 1;
      }
    }
    //scale操作
    for(int32 p=0; p<num_patches; p++) {
      CuSubMatrix<BaseFloat> tgt(in_diff->ColRange(p*pool_stride_, pool_stride_));
      KALDI_ASSERT(patch_summands[p] > 0); // patch at least in one pool
      tgt.Scale(1.0/patch_summands[p]);
    }
  }

\`\`\`

`,Uk=`---
title: Algorithm and Data Structrue Questions for Interview 
tags: [program]
---

## Experience
* 命名style
* 单元测试和assert的使用
* anotation
* 括号匹配，标点无遗漏
* c++注意输入参数为引用
* 慢下来, 特别边界条件点&& || < > = !=的判断
* 尽量一次整对

## Array
* qsort
* binary search
* heap sort
* min(max) k element
* 在一个字符串中找到第一个只出现一次的字符。如输入abaccdeff，则输出b(char arr) 
* 仅含0,1的数组排序
    * 求和，再赋值O(2N)
    * 快排(交换两端的0和1)
* 调整数组长度，使基数位于偶数之前（同上）
* Joseph环 

## Bit
* ip parse
* 1 bit of integer

## List
* merge list
* 链表是否有环
> 注意不一定从首位相连，有可能局部有环
两个人在环形操场跑步，跑的快的总能追上跑的慢的

* 两个链表是否相交（相交则尾节点一致），扩展求相交的节点
* 链表长度
* 输入一个单向链表，输出该链表中倒数第k个结点
    * record all(use vector)
    * two pass
* Joseph环
* O(1)删除单向链表节点（如何避免查找，直接删除）

## Stack
* min stack
* 给定入栈序列，判断一个序列是否为出栈序列

## String
* strcmp
* reverse(first reverse all, then reverse every word)

\`\`\`
"I am a student." 则输出"student. a am I";
\`\`\`

* 在字符串中删除特定的字符


## Tree
* depth of a tree
* the max distance of a tree(expand problem of tree depth)
* 就地反转二叉树
* 按层次遍历二叉树，将同层的节点打印在同一行上。不同层的节点分行打印
* BiTree to BiLink
* sum path

\`\`\`
输入一个整数和一棵二元树。
从树的根结点开始往下访问一直到叶结点所经过的所有结点形成一条路径。
打印出和与输入整数相等的所有路径。
例如输入整数22 和如下二元树
10
/ \\
5 12
/ \\
4 7
则打印出两条路径：10, 12 和10, 5, 7。
\`\`\`

## BT
* sum path
* 背包问题
* 1-N所有排列组合

## DP
* sum array max sum
* 找零钱
* 背包问题
* 走楼梯问题
* 最长公共子序列

## Hash
* two sum
* 在字符串中删除特定的字符。

`,Hk=`---
title: Notes on Advanced Unix Enviroment Programming
tags: [note, program]
---

# 3. File IO

* strerror perror, perror(argv[0]) 通过这种方式在管道程序中知道具体是哪个程序错误
* 进程表 文件表 v节点表 每个进程保存当前打开文件的偏移量
* dup dup2复制文件描述符，即共享


# 4. FILE & DIR
* stat fstat lstat返回文件信息

\`\`\` c
struct stat {
    mode_t st_mode; /* file type & mode */
    ino_t st_ino; /* i-node number */
    dev_t st_dev; /* device number */
    dev_t st_rdev; /* device number for special files */
    nlink_t st_nlink; /*number of links */
    uid_t st_uid; /* user ID of owner */
    gid_t st_gid; /* group ID of owner */
    off_t st_size; /* size in bytes */
    time_t st_atime; /* time of last access */
    time_t st_mtime; /* time of last modification */
    time_t st_ctime; /* time of last file status change */
    blksize_t st_blksize; /* best I/O block size */
    blkcnt_t st_blocks; /* number of disk blocks allocated */
};
\`\`\`

* 文件访问权限 u(user) g(group) o(other)
    * dir 都应具有执行权限
    * int access(const char *pathname, int mode)

# 5. Std IO
* tmpnam
* tmpfile
* mkstemp

# 6. System Data File & Info
* /etc/passwd 
* /etc/group
* uname

# 7. Process Enviroment
* exit函数总是执行一个标准IO的清理关闭工作，为所有打开流调用fclose函数
* atexit(void (*func)(void))
* getenv & putenv
* 共享库：在所有进程都可以引用的存储区，维护例程的副本开销发生在该程序第一次被调用时。另一个优点是用库函数的新版本代替老版本，而无需对使用该库的程序重新链接编辑。
* malloc calloc realloc

# 8. 进程控制
* 特殊进程ID
    * ID == 0 调度进程
    * ID == 1 Init进程
    * ID == 2 守护进程
* fork文件共享，具有指向相同的文件表。失败原因：1. 系统限制， 2. 系统对用户的限制
* fork有下面两种用法
    * 一个父进程希望复制自己，如网络程序中父进程创建子进程处理请求
    * 一个进程要执行一个不同的程序。在这种情况下，子进程从fork返回后立即调用exec

* 僵尸进程：在Unix术语中，一个已经终止，但是其父进程尚未对其进行善后处理，终止子进程的有关信息，释放它仍占用的资源的进程被称为僵尸进程。
* wait waitpid
* 进程时间：墙上时钟时间 用户CPU时间 系统CPU时间
* exec函数族。当进程调用一种exec函数时，该进程执行的程序完全替换为新程序，而新程序则是从其main函数开始执行。因为调用exec并不创建新进程，所以前后的进程ID并未改变。exec只是用一个全新的程序替换了当前进程的正文、数据、堆和栈段。
* system system在其实现中调用了fork, exec, waitpid

\`\`\` c
// system实现
#include <stdio.h>
//#include <stdlib.h>
#include <unistd.h>
#include <signal.h>
#include <errno.h>

static void error_exit(char *msg) {
    perror(msg);
    //exit(1);
}

static int system(const char *cmd_string)
{
    pid_t pid;
    int status;
    if (cmd_string == NULL) return 1;
    if ((pid = fork()) < 0) {
        status = -1;
    }
    else if (pid == 0) {
        execl("/bin/sh", "sh", "-c", cmd_string, (char *)0);
        _exit(127);
    }
    else {
        while(waitpid(pid, &status, 0) < 0) {
            if (errno != EINTR) {
                status = -1;
                break;
            }
        }
    }

    return status;
}

int main() {
    int status;
    if ((status = system("date")) < 0) error_exit("data error");

    return 0;
}
\`\`\`

# 9. 进程关系
* 终端登录 /etc/ttys
* 进程租 gid
* 会话 sid
* 作业控制 
    * SIGINT(Ctrl+C)
    * SIGQUIT(Ctrl+\\\\)
    * SIGTSTP(Ctrl+Z)

\`\`\` sh
make all > make.out &
[1]     1475
作业号  进程ID
\`\`\`

* stty tostop禁止后台作业输出至控制台


# 10. 信号
* 信号处理（忽略、捕捉、系统默认）
* 重要典型信号(SIGABRT, SIGHUP, SIGKILL, SIGCHLD)
* signal函数
* 可重入函数：可以被信号中断的函数，不可重入函数如malloc, free有以下原因:
    * 它们使用静态数据结构
    * 它们调用malloc或free
    * 它们是标准的IO函数，标准IO好多均以不可重入的方式使用了全局数据结构
* alarm pause
* abort
* 僵尸进程解决方案
    * 忽略 signal(SIGCHLD,SIG_IGN);
    * 等 wait waitpid
    * 异步通知 捕捉信号SIGCHLD，并处理
    * 调用fork两次 APUE8.6节

\`\`\` c
// 调用fork两次，避免僵尸进程
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>

void error_exit(char *msg) {
    perror(msg);
    exit(1);
}

int main() 
{
    pid_t pid;
    if (pid = fork() < 0) {
        error_exit("fork error");
    }
    else if (pid == 0) {
        if ((pid = fork()) < 0) error_exit("fork error");
        else if (pid > 0) exit(0);

        sleep(2);
        printf("second child, pid %d ppid %d\\n", getpid(), getppid());
        exit(0);
    }
    if (waitpid(pid, NULL, 0) != pid) {
        error_exit("waitpid error");
    }
    return 0;
}
\`\`\`

# 11. 线程
* 标示 pthread_equal(tid1, tid2) pthread_self()
* pthread_create(pthread *tid, *attr, void *(*thread_func)(void *), void *arg)
* 线程终止
    * 从启动例程中返回
    * 被同一进程中的其他线程取消 pthread_cancel(tid)
    * 线程调用pthread_exit(void *sta)
* int pthread_join(tid, void **sta)
* 互斥量 pthread_mutex_t
    * pthread_mutex_init(*mutex, *attr)
    * pthread_mutex_destroy(*mutex)
    * pthread_mutex_lock(*mutex)
    * pthread_mutex_unlock(*mutex)
* 读写锁
    * 读模式加锁状态
    * 写模式加锁状态
    * 不加锁状态
> 一次只有一个线程可以占有写模式的读写锁，但是多个线程可以同时占有读模式的读写锁。读写锁非常适用于对数据结构读的次数远远大于写的情况。

* 条件变量

利用线程间共享的全局变量进行同步，主要包括两个动作，一个线 程等待条件白能量的条件成立而挂起，另一个线程使条件成立。为了防止竞争，条件变量总是和一个互斥锁结合在一起。

传递给pthread_cond_wait的互斥量对条件进行保护，调用者把锁住的互斥量传给函数。函数把调用线程放到等待条件的线程列表上，然后对这个互斥量解锁，这两个操作是原子操作。pthread_cond_wait返回时，互斥量被再次锁住。 pthread_cond_wait相当于解锁，允许其他线程加锁。

\`\`\` c
pthread_cond_t cond;
pthread_cond_init
pthread_cond_destroy
pthread_cond_wait
pthread_cond_signal
pthread_cond_broadcast
\`\`\`

* 线程同步的几种方式: 互斥量，读写锁，条件变量

# 12. 线程控制
* 线程属性 互斥量，读写锁属性
* 线程安全函数
* 线程私有数据
* 守护线程：朱线程结束后会自动把daemon线程杀死。例如javapython线程库中的setdaemon方法

# 13. 守护进程

> 守护进程也称精灵进程(daemon)是生存期较长的一种进程。它们常常在系统自举时启动，仅在系统关闭时才终止。因为它们没有控制终端，所以说它们是在后台运行的。Unix系统中有很多守护进程，它们执行日常事务活动

* init kevent syslog
* 守护进程一般为单实例进程

# 14. 高级IO

* 记录锁fcntl
* 多输入多输出的解决方案
    * 设置为非阻塞IO，然后轮询状态
    * 异步IO，内核通过信号通知
    * IO多路转接
* IO多路转接
> 先构造一张有关描述符的列表，然后调用一个函数，直到这些描述符中的一个已经准备好进行IO时，该函数才返回
* select poll epoll
* readn writen

# 15. 进程间通信
* 管道 特点：半双工，进程具有公共祖先

\`\`\` c
int pipe(int fid[2]) // 返回两个设备Id，0为读，1为写，通过read,write系统调用进行读写
\`\`\`

* popen pcolse及其实现
* FIFO命名管道
* 消息队列 msgget msgsnd msgrev
* 信号量，信号实际上是同步原语而不是IPC，常用于共享资源（如共享存储）的同步访问
* 共享存储
* IPC速度比较 共享存储 > 管道 > FIFO > socket
* Question: shell的管道如何实现？

# 16. 网络IPC: 套接字
* socket 函数族 socket, bind, connect, listen, accept
* 网络字节序 htonl, htons, ntohl, ntohs

# 17. 高级进程间通信
* 基于Streams管道，全双工
* Unix域套接字：用于同一台机器上运行的进程之间的通信


`,Wk=`---
title: MPI并行计算
tags: [note]
---

# Reference
[MPI Tutorial](http://mpitutorial.com/)

# Basic Function
* MPI_Init, MPI_Comm_rank, MPI_Comm_size, MPI_Abort, MPI_Finalize
* MPI_Send, MPI_Recv
* MPI_Bcast, MPI_Scatter, MPI_Gather, MPI_Reduce
* MPI_Allgather, MPI_Allreduce

# Attention

* MPI_IN_PLACE, 指定输入输出buffer相同

\`\`\` c 
MPI_Allreduce(MPI_IN_PLACE, pData, (int) nData, GetDataType(pData), MPI_SUM, Communicator())
\`\`\`

# Simple Example

\`\`\` c
#include <mpi.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv) {
    // Initialize the MPI environment
    MPI_Init(NULL, NULL);
    // Find out rank, size
    int world_rank;
    MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);
    int world_size;
    MPI_Comm_size(MPI_COMM_WORLD, &world_size);

    // We are assuming at least 2 processes for this task
    if (world_size < 2) {
        fprintf(stderr, "World size must be greater than 1 for %s\\n", argv[0]);
        MPI_Abort(MPI_COMM_WORLD, 1);
    }

    int number;
    if (world_rank == 0) {
        // If we are rank 0, set the number to -1 and send it to process 1
        number = -1;
        MPI_Send(&number, 1, MPI_INT, 1, 0, MPI_COMM_WORLD);
    } else if (world_rank == 1) {
        MPI_Recv(&number, 1, MPI_INT, 0, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
        printf("Process 1 received number %d from process 0\\n", number);
    }
    MPI_Finalize();
}
\`\`\`

# 异步编程

\`\`\` c
//MPI_Request send_req_, recv_req_;
//MPI_Status send_status_, recv_status_;
void NnetMpiSync::SyncTest() {
    int s = 1, r = 2;
    MPI_Isend(&s, 1, MPI_INT, peer_, 2, MPI_COMM_WORLD, &send_req_);
    MPI_Irecv(&r, 1, MPI_INT, peer_, 2, MPI_COMM_WORLD, &recv_req_);
    MPI_Wait(&send_req_, &send_status_);
    MPI_Wait(&recv_req_, &recv_status_);
    std::cout << "rank " << rank_ << " " << s << " " << r 
    << std::endl << std::flush;
}
\`\`\`


# Function Graph

## MPI_Bcast & MPI_Scatter

![Broadcast vs Scatter](/public/img/mpi/broadcastvsscatter.png)

## MPI_Gather & MPI_Allgather

![Gather](/public/img/mpi/gather.png)

![Allgather](/public/img/mpi/allgather.png)

## MPI_Reduce & MPI_Allreduce

![Reduce](/public/img/mpi/reduce.png)

![Allreduce](/public/img/mpi/allreduce.png)

`,Vk=`---
title: 线程池
tags: [program]
---

# 线程池

在面向对象编程中，创建和销毁对象是很费时间的，因为创建一个对象要获取内存资源或者其它更多资源。在Java中更是如此，虚拟机将试图跟踪每一个对象，以便能够在对象销毁后进行垃圾回收。所以提高服务程序效率的一个手段就是尽可能减少创建和销毁对象的次数，特别是一些很耗资源的对象创建和销毁。如何利用已有对象来服务就是一个需要解决的关键问题，其实这就是一些"池化资源"技术产生的原因。

同样，线程的创建亦是如此。

假设一个服务器完成一项任务所需时间为：T1 创建线程时间，T2 在线程中执行任务的时间，T3 销毁线程时间。

如果：T1 + T3 远大于 T2，则可以采用线程池，以提高服务器性能。

一个线程池包括以下四个基本组成部分：

* 线程池管理器（ThreadPool）：用于创建并管理线程池，包括 创建线程池，销毁线程池，添加新任务；
* 工作线程（PoolWorker）：线程池中线程，在没有任务时处于等待状态，可以循环的执行任务；
* 任务接口（Task）：每个任务必须实现的接口，以供工作线程调度任务的执行，它主要规定了任务的入口，任务执行完后的收尾工作，任务的执行状态等；
* 任务队列（TaskQueue）：用于存放没有处理的任务。提供一种缓冲机制。

线程池技术正是关注如何缩短或调整T1,T3时间的技术，从而提高服务器程序性能的。它把T1，T3分别安排在服务器程序的启动和结束的时间段或者一些空闲的时间段，这样在服务器程序处理客户请求时，不会有T1，T3的开销了。

# 线程池的实现

\`\`\` cpp
/* Created on 2016-05-24
 * Author: Binbin Zhang
 */
#ifndef THREAD_POOL_H_
#define THREAD_POOL_H_

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>

#include <unistd.h>
#include <pthread.h>

#include <vector>
#include <queue>

void ErrorExit(const char *msg) {
    perror(msg);
    exit(1);
}

// Thread interface for thread class
class Threadable {
public:
    virtual void operator() () = 0;
    virtual ~Threadable() {}
    static void *Run(void *in) {
        Threadable *t = static_cast<Threadable *>(in);
        (*t)();
        return NULL;
    }
};

// ThreadPool
class ThreadPool {
public:
    ThreadPool(int num_thread = 1): num_thread_(num_thread), stop_(false) {
        if (pthread_mutex_init(&mutex_, NULL) != 0) {
            ErrorExit("mutex init error");
        }
        if (pthread_cond_init(&cond_, NULL) != 0) {
            ErrorExit("cond init error");
        }
        // Create num_thread thread at once
        threads_.resize(num_thread_);
        for (int i = 0; i < threads_.size(); i++) {
            if (pthread_create(&threads_[i], NULL, 
                               ThreadPool::WorkerThread, (void *)this) != 0) {
                ErrorExit("pthread create error");
            }
        }
    }

    ~ThreadPool() {
        pthread_mutex_lock(&mutex_);
        stop_ = true;
        pthread_mutex_unlock(&mutex_);
        // notify all thread to stop
        pthread_cond_broadcast(&cond_);

        for (int i = 0; i < threads_.size(); i++) {
            pthread_join(threads_[i], NULL);
        }

        pthread_mutex_destroy(&mutex_);
        pthread_cond_destroy(&cond_);
    }

    void AddTask(Threadable *task) {
        pthread_mutex_lock(&mutex_);
        task_queue_.push(task);
        pthread_mutex_unlock(&mutex_);
        pthread_cond_signal(&cond_);
    }

    // Wait a task to execute  
    Threadable *WaitTask() {
        Threadable *task = NULL;
        pthread_mutex_lock(&mutex_);
        while (!stop_ && task_queue_.empty()) {
            pthread_cond_wait(&cond_, &mutex_);
        }
        if (task_queue_.size() > 0) {
            task = task_queue_.front();
            task_queue_.pop();
        }
        // else stop_ = true return NULL
        pthread_mutex_unlock(&mutex_);
        return task;
    }

    // PoolWorker thread
    static void *WorkerThread(void *arg) {
        ThreadPool *pool = static_cast<ThreadPool *>(arg);
        for(;;) {
            Threadable *task = pool->WaitTask();
            // Stop
            if (task == NULL) break;
            else {
                (*task)(); // Run the task
                delete task;
            }
        }
    }

private:
    int num_thread_;
    bool stop_;
    std::vector<pthread_t> threads_;
    std::queue<Threadable *> task_queue_; //TaskQueue
    pthread_cond_t cond_;
    pthread_mutex_t mutex_;
};

#endif
\`\`\`

# 扩展为单例模式

\`\`\` cpp
class ThreadPool {
private:
    ThreadPool() {} // private constructor
    ThreadPool(const ThreadPool &); // Disable copy
    ThreadPool & operator = (const ThreadPool &); // Disable assign
public:
    ThreadPool &Instance() {
        static ThreadPool instance;
        return instance;
    }
};
\`\`\`

`,qk=`---
title: 实模式和保护模式 
tags: [program]
---

# 段寄存器

段寄存器的产生源于Intel 8086 CPU体系结构中数据总线与地址总线的宽度不一致。8086数据总线为16位，地址总线为20位(1M)。为了访问1M的地址空间，通过段基址+段偏移的方式完成，如图。

![Real Addressing](/public/img/osmode/real_addressing.png)

# 保护模式

保护模式与实模式相对应。

在80286及以后，内存地址改为16位或32位，至少可以访问到2^32=4G的内存空间。但为了保证后续的CPU能够运行旧的CPU，只能保持向下兼容。因此，80286及以后的CPU首先进入实模式，然后通过切换机制再进入到保护模式。

在实模式下，所有的段都是可以读、写和可执行的。

保护模式下主要有两个特点，一是如名，提供了段间的保护机制，二是寻址空间变大，达到4G。
	
## 描述符

8字节，描述段基址，段限等。

![Descriptor](/public/img/osmode/descriptor.png)

## 段选择子

2字节，描述段在描述符表中的索引。

![Selector](/public/img/osmode/selector.png)

## 描述符表

所谓描述符表的基址也就是此描述符表在内存中的起始地址，也即表中第一个描述符
所在的内存地址，系统中用两个特殊的寄存器来存放，一个用于存放全局描述符表的基址，
称之为“全局描述符表寄存器（GDTR）”，另一个用来存放局部描述符表的基址，称之为“局部描述符表寄存器（LDTR）”，它们的结构如下图所示：

![Table](/public/img/osmode/table.png)

## 保护模式寻址

在保护模式下，以前实模式下的段寄存器还是有用的，不过它不再用来存放段的基址，
而是用来存放“段选择子”，它的名字也变成了“段选择子寄存器”，在访问内存的时候，我们需要给出的是“段选择子”，而不是段基址。

保护模式下的寻址，通过段选择子寄存器（段寄存器）、描述符表、描述符共同完成，如图所示：
	
![Protect Addressing](/public/img/osmode/protect_addressing.png)


`,Gk=`---
title:  深度学习平台的分布式实现
tags: [asr, dl]
---

## 参考文献
1. Theano-MPI: a Theano-based Distributed Training Framework
2. Deep learning with Elastic Averaging SGD
3. SCALABLE TRAINING OF DEEP LEARNING MACHINES BY INCREMENTAL BLOCK TRAINING WITH INTRA-BLOCK PARALLEL OPTIMIZATION AND BLOCKWISE MODEL-UPDATE FILTERING
4. https://github.com/Microsoft/CNTK/wiki/Multiple-GPUs-and-machines
5. http://chuansong.me/n/316789851542
6. Parallel training of DNNs with natural gradient and parameter averaging

## 思路和方法

并行化和分布式计算一直是大规模机器学习中一个让人兴奋的话题, 特别是今天，越来越多
的数据被应用到深度神经网络的训练中, 对训练速度提出了很高的要求。例如，1000h的语音数据
的复杂模型(LSTM, BLSTM)训练单卡需要一周左右的时间，大部分时间在等模型。
最近，研究了一下近年的关于深度学习的分布式训练的论文和算法，并尝试进行了简单实现。

主流的深度学习的分布式训练大致可以分为两类，基于模型的并行和基于数据的并行。基于模型的
并行，每个worker分到模型的不同部分，仅负责对局部模型参数的更新，类似Hogwild!方法。
数据并行则是在不同worker上使用不同的数据，适于大量数据和较小模型的训练方式。

另外一个分类方法是根据模型更新方法可以分为两类，基于梯度的模型更新和直接基于模型的更新。
基于梯度的模型更新，server的模型更新依赖于梯度计算，如DownpourSGD（既DistBelief）。
直接基于模型的更新，server和worker的模型更新直接基于模型，通过模型之间的计算更新，如
BSP(Model Average), EASGD和BMUF等。

![DownpourSGD](/public/img/parallel/downpour.png)

下面是BSP，EASGD和BMUF的基本原理和自己的简单实现。

## BSP(Bulk Synchronize Parallel, Model Average)

BSP或者模型平均，思路十分简单，每隔一段时间对所有worker上的模型做下平均作为更新后的新模型。
基于MPI的实现也十分简单，直接使用MPI_Allreduce函数即可。
Povey的论文"Parallel training of DNNs with natural gradient and parameter averaging"中对这种方法
进行了讨论，kaldi的nnet2的并行也基于Model Average。

### BSP with MPI 

![BSP](/public/img/parallel/bsp.png)

### Worker Code

\`\`\` cpp
bool BspWorker::Synchronize(int num_worker_samples) {
    int num_all_samples = num_worker_samples; 
    AllReduce(&num_all_samples, 1); 
    // All workers finished it's data, return instantly
    if (num_all_samples <= 0) {
        KALDI_LOG << "All worker finished their data";
        return false;
    }   
    // 1. Calc scale
    float factor = float(num_worker_samples) / num_all_samples;
    KALDI_ASSERT(factor >= 0.0 && factor <= 1.0);
    // 2. Do average
    KALDI_ASSERT(gpu_params_.size() == cpu_params_.size());
    for (int i = 0; i < gpu_params_.size(); i++) {
        // scale factor
        gpu_params_[i]->Scale(factor);
        // copy from gpu to host
        cpu_params_[i]->CopyFromVec(*gpu_params_[i]);
        // sum, average 
        AllReduce(cpu_params_[i]->Data(), cpu_params_[i]->Dim());
        // copy to gpu
        gpu_params_[i]->CopyFromVec(*cpu_params_[i]);
    }   

    return true;
}
\`\`\`

## EASGD(Elastic Averaging SGD)

EASGD的优化目标为使所有worker上的loss最小，并且各个worker与server之间的模型差异也要小，
这样把worker节点上的参数跟参数服务器的中心变量联系在一起，这样使得Worker本地的变量会围绕中心变量进行变化。
该算法是Facebook和Yan LeCun团队的成果，需要使用server参数服务器。

### EASGD Algorithm 

![EASGD](/public/img/parallel/easgd.png)

### Server Code

\`\`\` cpp
void EasgdServer::Run() {
    int num_running_workers = NumNodes() - 1;
    MPI_Status status;
    int msg_type, worker_rank;
    while (num_running_workers > 0) {
        // tag 0, msg type 
        MPI_Recv(&msg_type, 1, MPI_INT, MPI_ANY_SOURCE, MPI_ANY_SOURCE,
            MPI_COMM_WORLD, &status);
        worker_rank = status.MPI_SOURCE;
        KALDI_LOG << "Worker rank " << worker_rank << " Msg " << msg_type;
        switch (msg_type) {
            case kMsgFinished:
                num_running_workers--;
                KALDI_LOG << "Worker " << worker_rank << " Finished ";
                break;
            case kMsgSynchronize:
                Update(worker_rank);
                break;
            default:
                KALDI_WARN << "Unknown mpi msg type " << msg_type;
        }
    }

    KALDI_LOG << "All worker finished";
}

void EasgdServer::Update(int worker_rank) {
    // 1. copy server_gpu_params_ to server_cpu_params_ 
    for (int i = 0; i < server_cpu_params_.size(); i++) {
        server_cpu_params_[i]->CopyFromVec(*server_gpu_params_[i]);
    }
    // 2. send server_cpu_params_ and recv worker_cpu_params_
    MPI_Status status;
    for (int i = 0; i < server_cpu_params_.size(); i++) {
        MPI_Sendrecv(server_cpu_params_[i]->Data(), server_cpu_params_[i]->Dim(),
                     MPI_FLOAT, worker_rank, kTagModel,
                     worker_cpu_params_[i]->Data(), worker_cpu_params_[i]->Dim(),
                     MPI_FLOAT, worker_rank, kTagModel,
                     MPI_COMM_WORLD, &status);
    }
    // 3. copy worker_cpu_params_ to worker_gpu_params_
    for (int i = 0; i < worker_gpu_params_.size(); i++) {
        worker_gpu_params_[i]->CopyFromVec(*worker_cpu_params_[i]);
    }
    // 4. update server gpu model
    for (int i = 0; i < server_gpu_params_.size(); i++) {
        //x_server = x_server + alpha(x_worker - x_server)
        //         = (1 - alpha) * x_server + alpha * x_worker
        server_gpu_params_[i]->AddVec(alpha_, *worker_gpu_params_[i], 1 - alpha_);
    }
}
\`\`\`

### Worker Code

\`\`\` cpp
bool EasgdWorker::Synchronize(int num_worker_samples) {
    (void)num_worker_samples;
    int msg_type = kMsgSynchronize;
    // 1. send synchronize signal 
    MPI_Send(&msg_type, 1, MPI_INT, MainNode(), kTagMsg, MPI_COMM_WORLD);
    // 2.1 copy worker_gpu_params_ to worker_cpu_params_
    for (int i = 0; i < worker_gpu_params_.size(); i++) {
        worker_cpu_params_[i]->CopyFromVec(*worker_gpu_params_[i]);
    }   
    // 2.2 send woker_cpu_params_ and recv server_cpu_params_
    MPI_Status status;
    for (int i = 0; i < server_cpu_params_.size(); i++) {
        MPI_Sendrecv(worker_cpu_params_[i]->Data(), worker_cpu_params_[i]->Dim(), 
                     MPI_FLOAT, MainNode(), kTagModel,
                     server_cpu_params_[i]->Data(), server_cpu_params_[i]->Dim(),
                     MPI_FLOAT, MainNode(), kTagModel,
                     MPI_COMM_WORLD, &status);
    }   

    // 2.3 copy server_gpu_params_ to server_cpu_params_ 
    for (int i = 0; i < server_gpu_params_.size(); i++) {
        server_gpu_params_[i]->CopyFromVec(*server_cpu_params_[i]);
    }   
    // 2.4 update worker gpu model
    for (int i = 0; i < worker_gpu_params_.size(); i++) {
        worker_gpu_params_[i]->AddVec(alpha_, *server_gpu_params_[i], 1 - alpha_);
    }   
    
    // always return ture
    return true;
}
\`\`\`

## BMUF(Block Momentum Update Filtering)

微软的BMUF在形式上与EASGD比较类似，但有两个显著不同点：
1. BMUF中worker在每次同步更新之后，使用相同的global model作为本地初始模型，在该模型上迭代。
2. BMUF使用momentum

### BMUF Algorithm

![BMUF](/public/img/parallel/bmuf.jpg)

### Worker Code

\`\`\` cpp 
bool BmufWorker::Synchronize(int num_worker_samples) {
    int num_all_samples = num_worker_samples; 
    AllReduce(&num_all_samples, 1); 
    // All workers finished it's data, return instantly
    if (num_all_samples <= 0) {
        KALDI_LOG << "All worker finished their data";
        return false;
    }   
    
    // Do BMUF(Block Momentum Update Filtering)
    for (int i = 0; i < gpu_params_.size(); i++) {
        // 1. calc grad w(t) - wg(t-1)
        grad_gpu_params_[i]->CopyFromVec(*gpu_params_[i]);
        grad_gpu_params_[i]->AddVec(-1.0, *prev_gpu_params_[i]);
        grad_cpu_params_[i]->CopyFromVec(*grad_gpu_params_[i]);
        // 2. reduce
        AllReduce(grad_cpu_params_[i]->Data(), grad_cpu_params_[i]->Dim());
        // 3. copy to gpu
        grad_gpu_params_[i]->CopyFromVec(*grad_cpu_params_[i]);
        // 4. calc mometum grad:  d(t) = m * g(t-1) + (1 - m) * lr * g(t)
        float lr = (1.0 - momentum_) * learn_rate_;
        grad_gpu_params_[i]->AddVec(momentum_, *prev_grad_gpu_params_[i], lr);
        // 5. update model w(t) = w(t-1) + d(t)
        gpu_params_[i]->CopyFromVec(*prev_gpu_params_[i]);
        gpu_params_[i]->AddVec(1.0, *grad_gpu_params_[i]);

        // 6. update prev
        prev_gpu_params_[i]->CopyFromVec(*gpu_params_[i]);
        prev_grad_gpu_params_[i]->CopyFromVec(*grad_gpu_params_[i]);
    }   
    return true;
}
\`\`\`

`,Kk=`---
title: 苏轼词
tags: [genius]
---

东坡一生，宦海沉浮，辗转天涯，历经眉州、京师、密州、徐州、湖州、黄州，折转京师、杭州、颖州、扬州、惠州、海南，终卒于常州，尽受颠沛流离之苦，天纵之才、天涯流落、乐天豁达的碰撞，遂有千古不朽的诗篇。

摘录个人喜好的诗词于此。

## 杭州

**临江仙·送钱穆父**

一别都门三改火，天涯踏尽红尘。依然一笑作春温。无波真古井，有节是秋筠。

惆怅孤帆连夜发，送行淡月微云。尊前不用翠眉颦。人生如逆旅，我亦是行人。


## 密州

**江城子 密州出猎**

老夫聊发少年狂，左牵黄，右擎苍。锦帽貂裘，千骑卷平冈。为报倾城随太守，亲射虎，看孙郎。

酒酣胸胆尚开张。鬓微霜，又何妨！持节云中，何日遣冯唐。会挽雕弓如满月，西北望，射天狼。

**水调歌头**

丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。

明月几时有？把酒问青天，不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。

转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。

**江城子 乙卯正月二十日夜记梦**

十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。纵使相逢应不识，尘满面，鬓如霜。

夜来幽梦忽还乡，小轩窗，正梳妆。相顾无言，惟有泪千行。料得年年肠断处，明月夜，短松冈。

**望江南超然台作**

春未老，风细柳斜斜。试上超然台上看，半壕春水一城花。烟雨暗千家。

寒食后，酒醒却咨嗟。休对故人思故国，且将新火试新茶。诗酒趁年华。


## 徐州

**浣溪沙**

徐门石潭谢雨，道上作五首。潭在城东二十里，常与泗水增减清浊相应。

簌簌衣巾落枣花，村南村北响缫车。牛衣古柳卖黄瓜。

酒困路长惟欲睡，日高人渴漫思茶。敲门试问野人家。

**江城子·别徐州**

天涯流落思无穷！既相逢，却匆匆。携手佳人，和泪折残红。为问东风余几许？春纵在，与谁同！

隋堤三月水溶溶。背归鸿，去吴中。回首彭城，清泗与淮通。欲寄相思千点泪，流不到，楚江东。


## 黄州

**定风波** 

三月七日，沙湖道中遇雨，雨具先去，同行皆狼狈，余独不觉。已而遂晴，故作此。 

莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。

料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。

**卜算子黄州定惠院寓居作**

缺月挂疏桐，漏断人初静。谁见幽人独往来，缥缈孤鸿影。

惊起却回头，有恨无人省。拣尽寒枝不肯栖，寂寞沙洲冷。

**念奴娇 赤壁怀古**

大江东去，浪淘尽、千古风流人物，故垒西边，人道是、三国周郎赤壁。

乱石崩云，惊涛裂岸，卷起千堆雪。江山如画，一时多少豪杰。

遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间、樯橹灰飞烟灭。

故国神游，多情应笑我，早生华发。人生如梦，一樽还酹江月。

**浣溪沙 游蕲水清泉寺**

游蕲水清泉寺，寺临兰溪，溪水西流。

山下兰芽短浸溪，松间沙路净无泥。潇潇暮雨子规啼。

谁道人生无再少？门前流水尚能西！休将白发唱黄鸡。

**临江仙夜归临皋**

夜饮东坡醒复醉，归来仿佛三更。家童鼻息已雷鸣。敲门都不应，倚杖听江声。

长恨此身非我有，何时忘却营营？夜阑风静縠纹平，小舟从此逝，江海寄余生。

**水调歌头·黄州快哉亭赠张偓佺**

落日绣帘卷，亭下水连空。知君为我，新作窗户湿青红。长记平山堂上，欹枕江南烟雨，杳杳没孤鸿。认得醉翁语，山色有无中。

一千顷，都镜净，倒碧峰。忽然浪起，掀舞一叶白头翁。堪笑兰台公子，未解庄生天籁，刚道有雌雄。一点浩然气，千里快哉风。


## 不定

**蝶恋花**

花褪残红青杏小，燕子飞时，绿水人家绕。枝上柳绵吹又少，天涯何处无芳草。

墙里秋千墙外道，墙外行人，墙里佳人笑。笑渐不闻声渐悄，多情却被无情恼。
`,Qk=`---
title: Notes on frontend development
tags: [note, program]
---

以前在做一些开发的时候，零碎的接触了一些前端开发的东西，但没有有效
的笔记、记录和整理，每次都在重复简单的搜索、Copy的过程。
最近想做一个网页版的类似微软Aether的东西，需要比较复杂的前端开发，
刚好趁着这个机会将该过程记录下来。


`,Xk=`---
title: Notes on FST
tags: [note, asr]
---

# FST Algorithms

## Determine

*A weighted automaton is said to be deterministic or subsequential if it
has a unique initial state and if no two transitions leaving any state share the same input label.*

## Compose

FST的compose操作用于组合不同层次的信息。低层次(细粒度）的FST A可以通过和高层次的（粗粒度）的FST B进行compose操作，生成输入为低层次（细粒度），输出为高层次（粗粒度）的FST C. 即 C = A * B，其中*表示compose操作。例如在语音识别任务中，最终生成的解码图为HCLG,H/C/L/G分别表示不同层级的FST，其中:

* H表示HMM层级的FST，输入为senone状态，输出为context-dependent phone。
* C表示Context层级的FST，语音识别中的音素建模时考虑当前音素的上一个音素和下一个音素，即输入为context-dependent phones，输出为phone。
* L表示Lexicon层级的FST，对单个的词来讲，输入为该词的phone序列，输出为该词。
* G表示Grammar层级的FST，一般Grammar指语言模型，是将arpa的语言模型表示为等价的FST的形式，输入输出均为词。

可以看到，从H->C->L->G，低层次的FST的输出粒度刚好对应高一层次FST的输入粒度，通过compose H\\*C\\*L\\*G，即可将HMM/Context/Lexicon/Grammar所有层次的信息构建在一个FST HCLG中，该HCLG输入为语音识别声学模型的建模单元senone，输出为词。

### eps-free compose

首先，我们来看不包含epsilon的compose过程，其算法描述如下图所示：

![epsilon free compose](/public/img/fst/epsilon_free_compose.png)

其中I表示FST的start state集合，F表示final state集合。算法中的乘号表示笛卡尔积，即叉积。
假设I1的集合为{1,2}，I2的集合为{1,2,3}，则I1和I2的叉积为{(1,1),(1,2),(1,3),(2,1),(2,2),(2,3)}。
该算法使用一个队列，会在开始将I1和I2的所有叉积结果(二元组）加入队列（第1行），然后开始执行一个类似广搜的过程。
二元组的表示为(q1,q2), 其中q1为FST T1中的状态，q2为FST T2中的状态。

算法的核心为第12行，从当前队列弹出一个二元组(q1,q2)，当q1和q2的边(e1,e2)满足o[e1]=i[e2]时，即把(n(e1),n(e2))加入队列。
其中i(e)表示边e的输入符号，o(e)表示边e的输出符号，n(e)表示边e跳转到的下一个状态。

下图中给出给出T1和T2 compose的一个示例。

![epsilon free example](/public/img/fst/epsilon_free_example.png)

### General compose

当T1和T2中包含epsilon时，需要特殊考虑。
当二元组(q1,q2)中q1含有epsilon输出边或q2中含有epsilon输入边时，分为以下三种情况。
* q1中含有epsilon输出边e时，(q1,q2)可以通过epsilon输入边跳转到(n(e),q2)；
* q2中含有epsilon输入边e时, (q1,q2)可以通过epsilon输入跳转到(q1,n(e))；
* q1和q2中分别时含有epsilon边输出边e1和epsilons输入边e2时，(q1,q2)则可以到达三个状态(n(e1),q2),(q1,n(e2)),(n(e1),n(e2))。

若对如下图的包含epsilon的FST T1和T2若执行上述的epsilon free compose算法时，考虑到以上三种情况，则会产生下图(a)中所示的FST(图中还可以加上由(2,1)->(3,2)输入为c输出为e的一条边)。

![general compose example](/public/img/fst/general_compose_example.png)

可以看到，图中由很多条含有epsilon的路径。这些路径有相同的输入序列，相同的输出序列，这就产生了冗余，而且当FST中含有由权重时，这些路径会产生不同权重的输出。

为了解决这个问题，除了一条epsilon路径外，其他的epsilon路径都要被过滤掉。也就是仅保留一条路径，而过滤掉由于$\\epsilon$产生的与之相关的等价路径。
为此我们要在T1和T2中引入两个辅助符号$\\epsilon1$和$\\epsilon2$。
在T1中所有的状态上加上$\\epsilon:\\epsilon1$的自跳，将T1中边上的epsilon输出全都标记为$\\epsilon2$。
在T1中所有的状态上加上$\\epsilon2:\\epsilon$的自跳，将T2中边上的epsilon输入全都标记为$\\epsilon1$。
通过观察，我们可以制定如下四条过滤规则：
* 禁止($\\epsilon2$,$\\epsilon2$)后直接跟($\\epsilon1$,$\\epsilon1$)，($\\epsilon2$,$\\epsilon2$)($\\epsilon1$,$\\epsilon1$)等价路径($\\epsilon2$,$\\epsilon1$)。图示中，从(1,1)到(2,1)再到(2,2)等价于从(1,1)直接到(2,2)。
* 对称的，禁止($\\epsilon1$,$\\epsilon1$)后直接跟($\\epsilon2$,$\\epsilon2$)，($\\epsilon1$,$\\epsilon1$)($\\epsilon2$,$\\epsilon2$)等价路径($\\epsilon2$,$\\epsilon1$). 图示中，从(1，1)到(1,2)再到(2,2)等价于从(1,1)直接到(2,2)。
* 禁止($\\epsilon1$,$\\epsilon1$)后直接跟($\\epsilon2$,$\\epsilon1$)，($\\epsilon1$,$\\epsilon1$)($\\epsilon2$,$\\epsilon1$)等价路径($\\epsilon2$,$\\epsilon1$)($\\epsilon1$,$\\epsilon1$)。 图示中，不存在该种情况。
* 对称的，禁止($\\epsilon2$,$\\epsilon2$)后直接跟($\\epsilon2$,$\\epsilon1$)，($\\epsilon2$,$\\epsilon2$)($\\epsilon2$,$\\epsilon1$)路径($\\epsilon2$,$\\epsilon1$)($\\epsilon2$,$\\epsilon2$). 图示中，从(1,1)到(2,1)再到(3,2)等价于从(1,1)到(2,2)再到(3,2)。

举例第一条规则解释一下，假设原始compose状态为(q1,q2)，($\\epsilon2$,$\\epsilon2$)表示T1通过含有$\\epsilon$的输出边e1，T2在经过自跳转, 到达(n(e1),q2).
同理($\\epsilon1$,$\\epsilon1$)表示T1在自跳转, T2通过含有$\\epsilon$的输入边e2，到达(q1,n(e2)); 则(q1,q2)通过($\\epsilon2$,$\\epsilon2$)($\\epsilon1$,$\\epsilon1$)可以到达(n(e1),n(e2))，然而该跳转可以通过($\\epsilon2$,$\\epsilon1$)一步达到，即q1经过e1输出$\\epsilon$，q2经过e2输入$\\epsilon$到达(n(e1),n(e2))。
同理，剩余3条规则也可以举出相应的例子。

假如从上图进行图形化的理解，($\\epsilon1$,$\\epsilon1$)表示向右走，($\\epsilon2$,$\\epsilon2$)表示向下走，先向右再向下或者先向下再向右均等价于直接从左上到右下对角线走（第1/2条规则）。
先向右走再走对角线等价于先走对角线再向右走（第3条规则）。
先向下走再走对角线等价于先走对角线再向下走（第4条规则）。
由次可见，该算法其实是一条优先走对角线的算法。

以上4条过滤规则可以构建FST $F$表示,如Fig.7中(b)图所示。最终T1和T2 Compose的结果可以表示为：
$$\\tilde{T1} * F * \\tilde{T2}$$

在实际的实现过程中， 并不显式构建$\\tilde{T1}$, $F$和$\\tilde{T2}$，而是通过辅助code的技巧实现。仅需在compose的状态由二元组(q1,q2)变为(q1,q2,q3)，其中q3表示filter $F$的状态，q3的取值为{0,1}，0表示F跳转到了0状态上, 1表示F跳转到1或者2状态。q3的下一个状态的取值则为：

![next q](/public/img/fst/next_q.png)

其中，otherwise表示dead state，这种情况下不会做继续扩展。

当然，我们也可以采用其他的规则做filter，上述的这种方法在[Filters for Efficient Composition of Weighted Finite-State Transducers](http://openfst.org/twiki/pub/FST/FstAdvancedUsage/ciaa10.pdf)中被称作Epsilon-Sequence Filter。
### 算法复杂度分析

在compose算法中，最为耗时的部分为在二元组(q1,q2)中，找到满足eps-free compose算法第10行的所有(e1,e2)。
假设q1有N1条边，q2有N2条边，通过穷举的话，算法的复杂度为(N1*N2)，时间复杂度很高。
Openfst通过引入[Matcher](http://www.openfst.org/twiki/bin/view/FST/FstAdvancedUsage#Matchers)，**对从特定状态中查找该状态是否含有某个input/output label进行优化**。

> Matchers can find and iterate through requested labels at FST states; their principal use is in composition matching. In the simplest form, these are just a search or hash keyed on labels.

Matcher的基本结构为：

\`\`\` cpp
// Specifies matcher action.
enum MatchType {
   MATCH_INPUT, // Match input label.
   MATCH_OUTPUT, // Match output label.
   MATCH_NONE, // Match nothing.
   MATCH_UNKNOWN, // Match type unknown.
};

template <class F>
class SomeMatcher {
  public:
   SomeMatcher(const F &fst, MatchType type);
   SomeMatcher(const SomeMatcher &matcher);
   // Specifies the current state.
   void SetState(StateId s);
   // This finds matches to a label at the current state.
   // Returns true if a match found. kNoLabel matches any
   // 'non-consuming' transitions, e.g., epsilon transitions,
   // which do not require a matching symbol.
   bool Find(Label label);
   // These iterate through any matches found:
   // No more matches.
   bool Done() const;
   // Current arc (when !Done)
   const A& Value() const;
   // Advance to next arc (when !Done)
   void Next();
};

// 其基本逻辑为
// 1. 通过SetState()设定要查找的状态；
// 2. 通过Find()函数查找相应的label，可能查找到多个；
// 3. 通过Value(), Next(), Done()返回查找的结果；
\`\`\`

常见的Matcher有：

* SortedMatcher， 假设FST已经预先按照ilabel/olable进行过排序，则可以使用二分查找。这样复杂度降为O(N1•logN2)(N2>N1)或者O(N2•logN1)(N1>N2)。
* HashMatcher，直接构建哈希表(unordered_map, unordered_multimap)进行查找。Openfst中使用unordered_multimap构建以label为key，arc为value的哈希表LabelTable进行快速的查找，同时使用unordered_map构建<state, LableTable>对访问过的state进行cache。

SortedMatcher和HashMatcher的具体实现可以参考[link](http://www.openfst.org/doxygen/fst/html/matcher_8h_source.html)。

Kaldi的Compose fsttablecompose中自己实现了一个[TableMatcher](https://github.com/kaldi-asr/kaldi/blob/master/src/fstext/table-matcher.h)， 对于有4条弧以下的state采用SortedMatcher，对于4条弧以上的state构建了一个vector<vector<ArcId> *> tables_; 第一个vector为state vector用于cache，第二个vector中下标为olabel/ilabel，value为其在arc中的位置，所以该vector的长度为ilabel/olabel的最大值，属于典型的以空间换时间的算法。

> /// TableMatcher is a matcher specialized for the case where the output
/// side of the left FST always has either all-epsilons coming out of
/// a state, or a majority of the symbol table.  Therefore we can
/// either store nothing (for the all-epsilon case) or store a lookup
/// table from Labels to arc offsets

### Look-Ahead Composition Filter

经典的FST Compose算法一般来说效率已经可以满足大部分的应用需求。但在一些场景下，比如FST中存在大量的输入输出为epsilon时，经典的Compose算法可能会创建了大量的无用节点（create significant numbers of non-coaccessible composition states that waste both time and space)。 比如语音识别中，H/L中均是多个输入产生一个输出，H和L中都有大量esp，L中为支持静音，也存在大量的eps的跳转。

那么如何优化该问题？类似于编译原理中的LL文法，在满足了T1的输出等于T2输入的条件下，我们可以向前多看一些状态的输入/输出来确定当前的Compose状态是否是一个有效的扩展，假设确定有效，保留当前Compose状态，反之，提前裁剪掉该状态（避免了之后对该Compose状态的无用扩展)。比如，常见的几种思想有：
* String Potential Filter：判断通过(q1,q2)可以到达新组合出的状态($q1^{'}$,$q2^{'}$)，从$q1^{'}$到T1的终结点的所有输出的集合记为u, 从$q1^{'}$到T2终结点的所有输入的集合记为v.假设u和v的交集为空集的时候，说明($q1^{'}$,$q2^{'}$)不能通过组合到终结点，输入无效状态。可以直接裁剪掉。该方法需要同时在T1上维护所有状态的u，在T2上维护所有状态的v。

* Label Reachability Filter：Label Reachability filter是找T1的FST中状态q，通过任意路径到达其他任意状态$q^{'}$的输出label集合。假设该集合有序，就可以使用2分查找预判T2中的下一个状态的输入是否在该集合中，从而确定是否要拓展。该方法仅需在T1上维护label的集合。该集合表示可以有两种。
    1. 点表示，即枚举有序表示该集合
    2. 区间表示，当该集合有序时，并且集合比较大的时，使用点表示比较浪费且查找慢。可以通过区间表示提升效率。例如{1,2,3,4,7,8,9,10}通过区间表示为{(1,4),(7,10)}，不仅节省了空间，而且查找效率更高，例如点表示罚查找1二分法需要4次，而区间表示仅需要2次。区间表示法区间数量越少，则查找效率越高。

在Openfst中，使用Label Reachability Filter对Compose进行优化，并且使用区间表示集合的算法对性能优化。
该方法要求为FST中的每一个状态都构建一个上述的集合label reachability的集合。
假设FST中共有N个节点，其输出符号表的大小为M，则可以构建一个N*M的矩阵R，矩阵中第i行第j个元素表示第FST中第i个状态到达其他任意状态时是否有label为j的输出，有则R(i,j)=1，反之则为0。
在用区间表示法表示时，矩阵中每一行的1的越连续越好，矩阵中所有行的连续1的区间越少越好。该问题可以通过调换矩阵中的列去调优（即交换label的id）。
该问题被称为Consecutive One’s Property (C1P)问题，可以通过一些具体的算法结局。
在Openfst中，可以使用如下命令将普通FST转换成olabel_lookahead的FST。

\`\`\` sh

fstconvert --fst_type=olabel_lookahead --save_relabel_opairs=g.irelabel.txt input.fst output.fst

\`\`\`

[Filters for Efficient Composition of Weighted Finite-State Transducers](http://openfst.org/twiki/pub/FST/FstAdvancedUsage/ciaa10.pdf)中比较了Compose时，使用各种filter的性能，如下图所示。从图中可以看出

![next q](/public/img/fst/compose_comparison.png)

1. 在一些情况下，epsilon-sequencing的算法比epsilon-matching的算法性高很多。
2. 在语音识别的L*G中，Label Richability的算法性能比epsilon-sequencing更高效。

### Openfst中的Compose实现

Openfst中Compose操作实现为延迟求值模式。通过ComposeFst类实现，ComposeFst类在构建时可以通过ComposeFstOptions控制相关的参数。
ComposeFstOptions中有如下几个比较重要的概念：

* Matcher
* Filter
* StateTable

其中Matcher的作用在上面已经介绍过，其功能为在Fst的状态上查找某个ilabel/olabel所对应的边Arc。

找到left Fst和right FST对应的Arc之后，Filter进一步判断当前的两个边做Compose是不是一个有效的compose状态。

> A composition filter determines which matches are allowed to proceed in composition. The basic filters handle correct epsilon matching. In particular, they ensure that redundant epsilon paths, which would be incorrect with non-idempotent weights, are not created. More generally, composition filters can be used to block or modify composition paths for efficiency or other purposes usually working in tandem with specialized matchers. 

Filter的基本接口如下：

\`\`\` c++
template <class M1, M2>
class SomeComposeFilter {
 public:
   typedef typename M1::FST1 FST1;                                                                                                            
   typedef typename M1::FST2 FST2;                                                                                                            
   typedef typename FST1::Arc Arc;                                                                                                            
   // Apply filter at current composition state to these transitions.
   // If an arc label to be matched is kNolabel, then that side does not consume a symbol.
   // Returns the new filter state or, if disallowed, FilterState::NoState().
   // The filter is permitted to modify its inputs, e.g. for optimizations. 
   FilterState FilterArc(A *arc1, A *arc2) const;

   // Apply filter at current composition state to these final weights
   // (cf. superfinal transitions). The filter may modify its inputs,
   // e.g. for optimizations. 
   void FilterFinal(Weight *final1, Weight *final2) const;
};
\`\`\`
Openfst中常见的Filter有SequenceComposeFilter(默认Filter)和LookAheadComposeFilter。

StateTable作用是将Compose过程中生成的状态对（元组）映射到一个新的State Id. 
> State tables determine the bijective mapping between state tuples (e.g. in composition triples of two FST states and a composition filter state) and their corresponding state IDs

StateTable的基本接口如下：
\`\`\` c++
template <class T>
class SomeStateTable {
   typedef typename T StateTuple;
   // Required constructors. 
   SomeStateTable(); 
   // Lookup state ID by tuple. If it doesn't exist, then add it.  
   StateId FindState(const StateTuple &);  
   // Lookup state tuple by state ID.  
   const StateTuple<StateId> &Tuple(StateId) const;
 };
\`\`\`

Openfst中Compose核心接口实现如下面代码所示。可以看到，ComposeFstOptions需要传递复杂的参数。在使用默认参数时，
ComposeFst会根据输入fst1和fst2的性质（是left FST还是right FST，是match input还是match output，是不是lookahead的FST等）判断，自动选择合适的Matcher和Filter(CreateBase函数)。所以在不确定使用何种参数时，直接使用默认的就可以。

\`\`\` c++
template <class Arc, class M = Matcher<Fst<Arc>>,
          class Filter = SequenceComposeFilter<M>,
          class StateTable =
              GenericComposeStateTable<Arc, typename Filter::FilterState>>
struct ComposeFstOptions : public CacheOptions {
  M *matcher1;              // FST1 matcher.
  M *matcher2;              // FST2 matcher.
  Filter *filter;           // Composition filter.
  StateTable *state_table;  // Composition state table.

  explicit ComposeFstOptions(const CacheOptions &opts = CacheOptions(),
                             M *matcher1 = nullptr, M *matcher2 = nullptr,
                             Filter *filter = nullptr,
                             StateTable *state_table = nullptr)
      : CacheOptions(opts),
        matcher1(matcher1),
        matcher2(matcher2),
        filter(filter),
        state_table(state_table) {}
};

ComposeFst(const Fst<Arc> &fst1, const Fst<Arc> &fst2,
           const CacheOptions &opts = CacheOptions())
       :ImplToFst<Impl>(CreateBase(fst1, fst2, opts)) {}

// Create compose implementation specifying no matcher type.
static std::shared_ptr<Impl> CreateBase(const Fst<Arc> &fst1,
                                        const Fst<Arc> &fst2,
                                        const CacheOptions &opts) {
  switch (LookAheadMatchType(fst1, fst2)) {  // Check for lookahead matchers
    default:
    case MATCH_NONE: {  // Default composition (no look-ahead).
      ComposeFstOptions<Arc> nopts(opts);
      return CreateBase1(fst1, fst2, nopts);
    }
    case MATCH_OUTPUT: {  // Lookahead on fst1.
      using M = typename DefaultLookAhead<Arc, MATCH_OUTPUT>::FstMatcher;
      using F = typename DefaultLookAhead<Arc, MATCH_OUTPUT>::ComposeFilter;
      ComposeFstOptions<Arc, M, F> nopts(opts);
      return CreateBase1(fst1, fst2, nopts);
    }
    case MATCH_INPUT: {  // Lookahead on fst2
      using M = typename DefaultLookAhead<Arc, MATCH_INPUT>::FstMatcher;
      using F = typename DefaultLookAhead<Arc, MATCH_INPUT>::ComposeFilter;
      ComposeFstOptions<Arc, M, F> nopts(opts);
      return CreateBase1(fst1, fst2, nopts);
    }
  }
}

// Identifies and verifies the capabilities of the matcher to be used for
// lookahead with the composition filters below. This version is passed two
// matchers.
template <class Matcher1, class Matcher2>
MatchType LookAheadMatchType(const Matcher1 &m1, const Matcher2 &m2) {
  const auto type1 = m1.Type(false);
  const auto type2 = m2.Type(false);
  if (type1 == MATCH_OUTPUT && m1.Flags() & kOutputLookAheadMatcher) {
    return MATCH_OUTPUT;
  } else if (type2 == MATCH_INPUT && m2.Flags() & kInputLookAheadMatcher) {
    return MATCH_INPUT;
  } else if (m1.Flags() & kOutputLookAheadMatcher &&
             m1.Type(true) == MATCH_OUTPUT) {
    return MATCH_OUTPUT;
  } else if (m2.Flags() & kInputLookAheadMatcher &&
             m2.Type(true) == MATCH_INPUT) {
    return MATCH_INPUT;
  } else {
    return MATCH_NONE;
  }
}

\`\`\`

# Reference
* [Weighted automata algorithms](https://cs.nyu.edu/~mohri/pub/hwa.pdf)
* [Filters for Efficient Composition of Weighted Finite-State Transducers](http://openfst.org/twiki/pub/FST/FstAdvancedUsage/ciaa10.pdf)
* [Openfst官网](http://www.openfst.org/twiki/bin/view/FST/WebHome)
* [OpenFst: A General and Efficient Weighted Finite-State Transducer Library](http://www.openfst.org/twiki/pub/FST/FstBackground/ciaa.pdf)
* Openfst Tutorial [Part1](http://www.openfst.org/twiki/pub/FST/FstHltTutorial/tutorial_part1.pdf) [Part2](http://www.openfst.org/twiki/pub/FST/FstHltTutorial/tutorial_part2.pdf) [Part3](http://www.openfst.org/twiki/pub/FST/FstHltTutorial/tutorial_part3.pdf)
`,Yk=`---
title: Notes on G2P(Graphemes to Phonemes)
tags: [note, asr]
---

# G2P Task
G2P在语音识别、语音合成、自然语音处理中都有着广泛的应用。
G2P的目标的是给定一个词，生成其发音音素序列。例如
> PHONIX -> /f i n I k s/

例如在语音合成中，一般使用Phone label作为神经网络的输入，因此需要把词转换为其相应的音素序列，然后进行处理。
对于常见的词，可以在预先生成的词典中查找该词的phone发音，然而，当该词未在词典中出现时(OOV, Out Of Vocabulary)，就需要对该词的发音phone进行预测。
例如英文中，人名、地名、实体名等中都会存在大量的OOV。

本文中介绍解决该问题的两种方法
1. 基于传统方法的Phonetisaurus G2P
2. 基于深度学习Sequence to Sequence方法的G2P

以上2种方法均在训练阶段使用标注的数据训练模型，在inference时使用预先训练的模型对发音做预测。

# Phonetisaurus G2P

> Phonetisaurus is suitable for training, evaluating and using grapheme-to-phoneme models for speech recognition using the OpenFst framework.

Phonetisaurus是一个基于Openfst框架的G2P工具。它将G2P的问题分成以下3个字问题。

1. 对齐问题。自动对单词的Character序列和Phone序列进行对齐，即找到哪些Character对应的是哪个发音。例如在PHONIX中PH->f, O->i, N->n, I->I, X->{k,s}
2. 训练问题。利用1中的方法对训练词典中所有的词生成对齐，然后训练一个joint sequence的ngram model.
3. 解码问题。利用训练好的模型预测输入词的Phone Sequence。


## 对齐问题

在本文中考虑character到phone的one-to-many和many-to-one的映射关系。例如:
* many-to-one: sh - [ S ], ph - [ f ]
* one-to-many: x - [ k s ], u - [ j u ]

考虑实际情况，many的时候均有最大长度限制(感觉上一般为2或者3)。
此外还需考虑到insertion与deletion，例如hour中h不发音。

将一个单词character序列与其对应的phone序列满足上述条件的各种组合展开。考虑最简单的one-to-one的情况， 以fix -> /f I k s/为例，则可能的对齐有(@左边为character，右边为phone，_表示空)：
1. _@f i@I i@k x@s 
2. f@f _@I i@k x@s
3. f@f i@I _@k x@s
4. f@f i@I x@k _@s

所有的对齐可以通过fst表示为lattice的形式，如下图所示:
![align fst](/public/img/g2p/align_fst.png)

假设character->phone的映射满足一定概率，则每条边上的的映射则通过概率引入权重，lattice即转换为WFST，那么最有可能的对齐序列可以通过FST的最短路径算法得到。

那么如何得到character->phone映射概率呢？我们可以通过前向后向算法和EM算法在整个词典上的数据集上进行估计。
1. 对词典中所有的词生成可能对齐的fst lattice表示。
2. 对所有可能的character->phone的映射组合进行概率初始化，并将初始值代入每个FST中。
3. E步：利用前向后向算法，计算每个FST中每条边上的概率（即每个词中character->phone概率的局部估计）。
4. M步：利用所有词的局部估计对所有character->phone的概率进行更新，并带入FST lattice中。
5. 重复3，4直至满足一定条件。

其中，E步和M步的一些细节，包括论文中的一些公式，看的不是很懂，就不详细展开了。

其实，到这里时，我们可以拿到所有character->phone的映射的概率，对于任意一个新词，我们可以生成该词对应的fst lattice表示，代入每个character->phone的概率，使用fst最短路径算法，即可以得到该词的phone sequence。这样的缺点是仅仅孤立考虑了每个character->phone的映射概率，并没有考虑到其上下文。假设能在建模时引入发音的上下文，则可以得到更为精确的G2P模型，由此引出训练问题。

## 训练问题

Phonetisaurus中通过ngram对上下文建模。具体做法如下：
1. 将词典中所有词的对齐转换为joint align pair，例如对fix有f@f i@I x@{k,s}。
2. 利用1中所有词的joint align训练ngram。
3. 将ngram转为WFST表示。

## 解码问题

在ngram G2P模型上直接做最短路径的搜索即可。

## Usage

\`\`\` sh
# Prepare data
wget https://raw.githubusercontent.com/cmusphinx/cmudict/master/cmudict.dict
cat cmudict.dict \\
    | perl -pe 's/\\([0-9]+\\)//;
    s/\\s+/ /g; s/^\\s+//;
    s/\\s+$//; @_ = split (/\\s+/);
    $w = shift (@_);
    $_ = $w."\\t".join (" ", @_)."\\n";' \\
    > cmudict.formatted.dict

# Align the dictionary (5m-10m)
phonetisaurus-align --input=cmudict.formatted.dict \\
  --ofile=cmudict.formatted.corpus --seq1_del=false

# Train an n-gram model (5s-10s):
ngram-count -kndiscount -order 8 -text cmudict.formatted.corpus \\
    -lm cmudict.o8.arpa

# Convert to OpenFst format (10s-20s):
phonetisaurus-arpa2wfst --lm=cmudict.o8.arpa --ofile=cmudict.o8.fst

# Test
phonetisaurus-g2pfst --nbest=1 --model=cmudict.o8.fst  --wordlist=test.wlist
\`\`\`

# Sequence to Sequence

G2P可以看作是把Character的序列转为Phone的序列，也就是一个Sequence to Sequence的任务。用当下流行的深度学习技术，也可以直接解决该问题。[g2p-seq2seq](https://github.com/cmusphinx/g2p-seq2seq)中实现了一个基于Transformer的G2P。

# 中文G2P
在中文中，若G2P的输入为汉字，输出为音节syllable，即input和output存在一一对应的关系，则可以使用CRF，即序列标注的方式做中文G2P。

# Reference
* WFST-based Grapheme-to-Phoneme Conversion: Open Source Tools for Alignment, Model-Building and Decoding
* [g2p-seq2seq](https://github.com/cmusphinx/g2p-seq2seq)

`,Jk=`---
title: Overview of Linux Namespaces
tags: [note, program]
---

> Namespaces are a Linux kernel feature which were introduced back in 2002 with Linux 2.4.19. The idea behind a namespace is to wrap certain global system resources in an abstraction layer. This makes it appear like the processes within a namespace have their own isolated instance of the resource.
> Namespaces是Linux内核提供的一种功能，在2002年的Linux 2.4.19中引入。namespace的基本思想是通过namespaces将一些特定的全局系统资源封装在一个抽象层中，从而使在不同命名空间中的进程有自己独特的一个隔离的资源环境。

本文翻译自Linux Programmer's Manual， 在linux系统中使用如下命令即可查看原始英文说明。
\`\`\`sh
$ man namespaces
\`\`\`

一个namespace封装了一个抽象的全局系统资源， 在该namespace中的进程有独立隔离的全局资源的实例。对该namespace中全局资源的修改仅对该命名空间的进程可见，而对其他namespace中的进程不可见。**namespace一种用法是用来实现容器(container)**。

Linux系统中提供以下资源的namespaces。

| Namespace 	| Constant(宏表示) 	| Isolates(隔离的资源)                                                	|
|-----------	|------------------	|---------------------------------------------------------------------	|
| IPC       	| CLONE_NEWIPC     	| System V IPC, POSIX message queues(System V IPC, POSIX消息队列)     	|
| Network   	| CLONE_NEWNET     	| Network devices, stacks, ports etc.(网络设备、协议栈、端口等)       	|
| Mount     	| CLONE_NEWNS      	| Mount points(文件系统挂在点)                                        	|
| PID       	| CLONE_NEWPID     	| Process IDs(进程ID)                                                 	|
| User      	| CLONE_NEWUSER    	| User and group IDs(用户和组ID)                                      	|
| UTS       	| CLONE_NEWUTS     	| Hostname and NIS domain name(Hostname和Network Information Service) 	|

本文介绍与/proc下文件相关的各种命名空间，并且综述和namespaces相关的API。

## The namespaces API

在下文介绍的/proc下的各种文件中，namespace API涉及到如下的系统调用。

**clone(2)**

clone(2)系统调用的作用是创建一个新的进程。在调用该函数时，可以指定一个或者多个CLONE_NEW* flag，这时系统就会为每个flag创建新的namespace，该进程的所有子进程继承该进程的命名空间。(该系统调用还实现了一些与namespaces无关的功能)。

**setns(2)**

setns(2)系统调用可以使被调用的进程加入一个已有的namespaces。要加入的已有的namespace通过一个文件描述符指定，参考下文中的/proc/[pid]/ns中的描述。

**unshare(2)**

unshare(2)系统调用可以将一个进程从原来的namespace转移到一个新的namespace。在调用该函数时，可以指定一个或者多个CLONE_NEW* flag，这时系统就会为每个flag创建新的namespace。调用该函数的进程的namespace也就变成了新的namespace（该系统调用还实现了一些与namespaces无关的功能）。

在大多数情况下，通过clone(2)和unshare(2)创建新的命名空间需要CAP_SYS_ADMIN(系统管理员)的权限。仅有User namespaces例外，从Linux3.8开始，创建User namespaces无需特殊权限。

## /proc/[pid]/ns/ 文件夹

每个进程在/proc目录下都有自己独特的子文件夹/proc/[pid]/ns/，该文件夹中包含可以被setns(2)操作的所有类型的namespace。例如

\`\`\`sh
$ ls -l /proc/$$/ns
total 0
lrwxrwxrwx. 1 mtk mtk 0 Jan 14 01:20 ipc -> ipc:[4026531839]
lrwxrwxrwx. 1 mtk mtk 0 Jan 14 01:20 mnt -> mnt:[4026531840]
lrwxrwxrwx. 1 mtk mtk 0 Jan 14 01:20 net -> net:[4026531956]
lrwxrwxrwx. 1 mtk mtk 0 Jan 14 01:20 pid -> pid:[4026531836]
lrwxrwxrwx. 1 mtk mtk 0 Jan 14 01:20 user -> user:[4026531837]
lrwxrwxrwx. 1 mtk mtk 0 Jan 14 01:20 uts -> uts:[4026531838]
\`\`\`

Bind mounting(see mount(2)，TODO) 该文件夹中的任意一个文件都绑定到文件系统中的一个其他位置（类似软连接），这样即使在该namespace中的进程都结束的情况下，我们也能确保namespace继续存在。

打开该文件夹下的一个文件（或者该文件的一个绑定链接文件）返回该pid下该namespace的一个文件描述符。只要该文件描述符持续打开，该namespace就会一直存在，即使该namespace中的进程全部结束。可以通过setns(2)调用该文件描述符。

在Linux3.7和更早的版本中，这些文件通过硬连接的方式显示。从Linux3.8开始，它们通过符号链接（软链接）表示。如果两个进程在相同的namespace中，这两个进程的/proc/[pid]/ns/xxx符号链接则有相同的inode numbers。一个应用程序可以通过stat(2)系统调用中的stat.st_ino检查其是否又相同的inode number。该符号链接的内容是一个字符串，该字符串含有namespace的类型和inode number。

\`\`\`sh
$ readlink /proc/$$/ns/uts
uts:[4026531838]
\`\`\`
/proc/[pid]/ns/文件夹下每个文件的具体含义如下：

* /proc/[pid]/ns/ipc (since Linux 3.0): 该进程的IPC namespace描述符。
* /proc/[pid]/ns/mnt (since Linux 3.8): 该进程的mount namespace描述符。
* /proc/[pid]/ns/net (since Linux 3.0): 该进程的network namespace描述符。
* /proc/[pid]/ns/pid (since Linux 3.8): 该进程的PID namespace描述符。
* /proc/[pid]/ns/user (since Linux 3.8): 该进程的user namespace描述符.
* /proc/[pid]/ns/uts (since Linux 3.0): 该进程的UTS namespace描述符。

## IPC namespaces (CLONE_NEWIPC)

IPC namespaces隔离特定的IPC资源，具体来讲即System V IPC对象(see svipc(7))和POSIX消息队列(message queues, see mq_overview(7))。这两种IPC机制的共同特性是其 IPC对象是通过一定的机制区分，而不是通过文件系统的路径名区分。

每个IPC namespace有自己的System V IPC标示符集合和POSIX消息队列文件系统。在一个IPC namespace中创建的IPC对象仅对于该IPC namespace中的所有进程可见，而对其他IPC namespace中的进程不可见。

下列/proc的接口在每个IPC namespace中不同。
* POSIX消息队列接口 /proc/sys/fs/mqueue.
* System V IPC接口 /proc/sys/kernel, 即msgmax, msgmnb, msgmni, sem, shmall, shmmax,shmmni,shm_rmid_forced.
* System V IPC接口 /proc/sysvipc.

当一个IPC namespace销毁的时候（例如，当一个namespace中的最后一个进程结束的时候），在该namespace中的所有IPC对象都会自动销毁。

要使用IPC namespace，Linux内核需要打开CONFIG_IPC_NS配置选项。

##  Network namespaces (CLONE_NEWNET)

网络namespaces提供和网络相关的系统资源的隔离，例如网络设备、IPv4和IPv6协议栈，IP路由表，防火墙，/proc/net文件夹，/sys/class/net文件夹，端口号(socket)等。一个物理的网络设备仅能在一个网络空间李，一个虚拟的网络设备("veth")对可以提供类管道的抽象，该抽象可以在网络namespace之间创建通道，还可以用桥接物理网络设备和其他的网络namespace.

当一个网络namespace释放的时候(例如，当该namespace中的最后一个进程结束的时候)，它的物理网络设备转移到其初始的网络namespace（而不是父进程的namespace)。

要使用IPC namespace，Linux内核需要打开CONFIG_NET_NS配置选项。


## Mount namespaces (CLONE_NEWNS)

Mount namespaces隔离一系列文件系统的挂载点，也就是在处在不同mount namespace中的进程所能看的文件系统的层级不同。mount namespace的挂载点可以由mount(2)和unmount修改。

/proc/[pid]/mounts文件(从Linux 2.4.19开始)列出该进程mount namespace中的所有文件系统。该文件的格式可以查看fstab(5). Linux内核从2.6.15开始，该文件是可轮询的。即打开该文件读取时，该文件的改变可以触发select(2)将该文件描述符标记为可读，出错时poll(2)和epoll_wait(2)可以标记该文件。

/proc/[pid]/mountstats文件(从Linux 2.6.17开始)可以导出该进程mount namespace中的挂载点的统计、配置等的信息。仅有该进程可以读该文件。该文件的行格式如下：

\`\`\`sh
device /dev/sda7 mounted on /home with fstype ext3 [statistics]
(       1      )            ( 2 )             (3 ) (4)
\`\`\`

每个字段具体含义如下：
1. 挂载设备名（没有设备时显示"nodevice")
2. 文件系统树中的挂在点
3. 文件系统的类型
4. 可选的，显示统计和配置信息。目前（从Linux 2.6.26），该字段仅支持NFS文件系统的导出信息。

例如

\`\`\`sh
device sysfs mounted on /sys with fstype sysfs
device proc mounted on /proc with fstype proc
device udev mounted on /dev with fstype devtmpfs
device devpts mounted on /dev/pts with fstype devpts
\`\`\`

## PID namespaces (CLONE_NEWPID)

See pid_namespaces(7).

## User namespaces (CLONE_NEWUSER)

See user_namespaces(7).

## UTS namespaces (CLONE_NEWUTS)

UTS namespace提供系统标示符的隔离，包活hostname和NIS。hostname可以通过sethostname(2)和setdomainname(2)设定，可以通过uname(2), gethostname(2)和getdomainname(2)检索。

要使用UTS namespace，Linux内核需要打开CONFIG_UTS_NS配置选项。

`,Zk=`---
title: CTC search
tags: [note, program]
---


## CTC prefix beam search

> CTC prefix beam search图示

<style>.pdf-embed-container { position: relative; padding-bottom: 98.25%; height: 0; overflow: hidden; max-width: 100%; margin-bottom: 20px; } .pdf-embed-container iframe, .pdf-embed-container object, .pdf-embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='pdf-embed-container'><iframe title="PDF file" width="800" height="600" src="/public/pdf/prefix_beam_search.pdf" frameborder="0" allowfullscreen></iframe></div>


`;function e_(e){const n=/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/,t=e.match(n);if(!t)return{frontmatter:{},body:e};const r=t[1],i=t[2],l={};return r.split(`
`).forEach(o=>{const a=o.indexOf(":");if(a>0){const s=o.substring(0,a).trim();let u=o.substring(a+1).trim();u.startsWith("[")&&u.endsWith("]")?(u=u.slice(1,-1),l[s]=u.split(",").map(c=>c.trim()).filter(c=>c)):((u.startsWith('"')&&u.endsWith('"')||u.startsWith("'")&&u.endsWith("'"))&&(u=u.slice(1,-1)),l[s]=u)}}),{frontmatter:l,body:i}}function n_(e){const n=e.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/);return n?{date:n[1],slug:n[2]}:{date:"",slug:e.replace(/\.md$/,"")}}async function Lh(){const e=Object.assign({"/blogs/2010-05-23-cstdlib.md":Nk,"/blogs/2010-06-01-huanghelou.md":Ik,"/blogs/2012-11-22-to-yuanliu.md":bk,"/blogs/2013-10-11-fallnight.md":Lk,"/blogs/2013-10-12-common-life.md":Mk,"/blogs/2013-10-12-genius.md":Fk,"/blogs/2014-09-01-program.md":zk,"/blogs/2014-09-01-vim.md":Rk,"/blogs/2014-11-11-function-language.md":Ak,"/blogs/2014-11-22-nlp.md":Ok,"/blogs/2014-11-25-shell.md":Dk,"/blogs/2014-11-26-deeplearning-toolbox.md":$k,"/blogs/2014-12-12-svm.md":Bk,"/blogs/2015-01-26-cnn.md":jk,"/blogs/2016-05-13-interview-problems.md":Uk,"/blogs/2016-05-14-apue.md":Hk,"/blogs/2016-05-20-mpi.md":Wk,"/blogs/2016-05-24-thread-pool.md":Vk,"/blogs/2016-06-10-os-mode.md":qk,"/blogs/2016-08-05-parallel-training.md":Gk,"/blogs/2018-09-12-sushi.md":Kk,"/blogs/2019-07-20-frontend.md":Qk,"/blogs/2019-07-23-fst.md":Xk,"/blogs/2019-09-10-g2p.md":Yk,"/blogs/2019-09-18-namespace.md":Jk,"/blogs/2020-12-11-ctc-search.md":Zk}),n=[];for(const t in e){const r=e[t],i=t.split("/").pop()||"",{frontmatter:l,body:o}=e_(r),{date:a,slug:s}=n_(i);n.push({slug:s,title:l.title||s,tags:l.tags||[],date:a,content:o})}return n.sort((t,r)=>!t.date&&!r.date?0:t.date?r.date?r.date.localeCompare(t.date):-1:1),n}async function t_(e){return(await Lh()).find(t=>t.slug===e)||null}const r_=()=>{const[e,n]=S.useState([]),[t,r]=S.useState(!0);return S.useEffect(()=>{(async()=>{try{const l=await Lh();n(l)}catch(l){console.error("Failed to load blog posts:",l)}finally{r(!1)}})()},[]),t?P.jsx("div",{className:"blog-container",children:P.jsx("div",{className:"blog-loading",children:"加载中..."})}):P.jsx("div",{className:"blog-container",children:P.jsxs("div",{className:"blog-content",children:[P.jsx("h1",{className:"blog-title",children:"博客文章"}),P.jsx("div",{className:"blog-list",children:e.length===0?P.jsx("div",{className:"blog-empty",children:"暂无文章"}):e.map(i=>P.jsxs(Ct,{to:`/blog/${i.slug}`,className:"blog-item",children:[P.jsxs("div",{className:"blog-item-header",children:[P.jsx("h2",{className:"blog-item-title",children:i.title}),i.date&&P.jsx("span",{className:"blog-item-date",children:i.date})]}),i.tags&&i.tags.length>0&&P.jsx("div",{className:"blog-item-tags",children:i.tags.map((l,o)=>P.jsx("span",{className:"blog-tag",children:l},o))})]},i.slug))})]})})},Do="https://robin1001-1256283475.cos.ap-shanghai.myqcloud.com";function i_(e){return e.replace(/!\[([^\]]*)\]\(([^\)]+)\)/g,(n,t,r)=>{if(r.startsWith("http://")||r.startsWith("https://"))return n;if(r.startsWith("/public/"))return`![${t}](${Do}${r})`;if(r.startsWith("/img/"))return`![${t}](${Do}${r})`;if(r.match(/^\/[^\/]+\/img\//)){const i=r.replace(/^\/[^\/]+/,"/public");return`![${t}](${Do}${i})`}return n})}const l_=()=>{const{slug:e}=Wy(),n=js(),[t,r]=S.useState(null),[i,l]=S.useState(!0),o=S.useMemo(()=>t?i_(t.content):"",[t]);return S.useEffect(()=>{(async()=>{if(!e){l(!1);return}try{const s=await t_(e);s?r(s):n("/blog",{replace:!0})}catch(s){console.error("Failed to load blog post:",s)}finally{l(!1)}})()},[e,n]),i?P.jsx("div",{className:"blog-container",children:P.jsx("div",{className:"blog-loading",children:"加载中..."})}):t?P.jsx("div",{className:"blog-container",children:P.jsxs("div",{className:"blog-content",children:[P.jsx(Ct,{to:"/blog",className:"blog-back-link",children:"← 返回博客列表"}),P.jsxs("article",{className:"blog-article",children:[P.jsxs("header",{className:"blog-article-header",children:[P.jsx("h1",{className:"blog-article-title",children:t.title}),P.jsxs("div",{className:"blog-article-meta",children:[t.date&&P.jsxs("span",{className:"blog-article-date",children:["发布时间: ",t.date]}),t.tags&&t.tags.length>0&&P.jsx("div",{className:"blog-article-tags",children:t.tags.map((a,s)=>P.jsx("span",{className:"blog-tag",children:a},s))})]})]}),P.jsx("div",{className:"blog-article-content",children:P.jsx(bh,{children:o})})]})]})}):P.jsxs("div",{className:"blog-container",children:[P.jsx("div",{className:"blog-empty",children:"文章不存在"}),P.jsx(Ct,{to:"/blog",className:"blog-back-link",children:"返回博客列表"})]})};function o_(){const e=js(),n=st();return S.useEffect(()=>{const t=n.search;if(t.startsWith("/?/")){const r=t.slice(3).replace(/~and~/g,"&"),i=r.split("&").find(l=>!l.includes("="))||r.split("&")[0];i&&e(i,{replace:!0})}},[n,e]),null}function a_(){return P.jsx($1,{children:P.jsxs(N1,{children:[P.jsx(o_,{}),P.jsxs("div",{className:"App",children:[P.jsx(B1,{}),P.jsxs(l1,{children:[P.jsx(Yi,{path:"/",element:P.jsx(Tk,{})}),P.jsx(Yi,{path:"/blog",element:P.jsx(r_,{})}),P.jsx(Yi,{path:"/blog/:slug",element:P.jsx(l_,{})})]})]})]})})}$o.createRoot(document.getElementById("root")).render(P.jsx(tm.StrictMode,{children:P.jsx(a_,{})}));
