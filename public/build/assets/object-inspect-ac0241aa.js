import{a as wt,c as $t}from"./@inertiajs-2b766590.js";const Et={},_t=Object.freeze(Object.defineProperty({__proto__:null,default:Et},Symbol.toStringTag,{value:"Module"})),Mt=wt(_t);var U=typeof Map=="function"&&Map.prototype,D=Object.getOwnPropertyDescriptor&&U?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,W=U&&D&&typeof D.get=="function"?D.get:null,et=U&&Map.prototype.forEach,G=typeof Set=="function"&&Set.prototype,B=Object.getOwnPropertyDescriptor&&G?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,I=G&&B&&typeof B.get=="function"?B.get:null,rt=G&&Set.prototype.forEach,Wt=typeof WeakMap=="function"&&WeakMap.prototype,w=Wt?WeakMap.prototype.has:null,It=typeof WeakSet=="function"&&WeakSet.prototype,$=It?WeakSet.prototype.has:null,Lt=typeof WeakRef=="function"&&WeakRef.prototype,nt=Lt?WeakRef.prototype.deref:null,At=Boolean.prototype.valueOf,Rt=Object.prototype.toString,Tt=Function.prototype.toString,kt=String.prototype.match,K=String.prototype.slice,s=String.prototype.replace,qt=String.prototype.toUpperCase,at=String.prototype.toLowerCase,st=RegExp.prototype.test,it=Array.prototype.concat,u=Array.prototype.join,Nt=Array.prototype.slice,ot=Math.floor,z=typeof BigInt=="function"?BigInt.prototype.valueOf:null,C=Object.getOwnPropertySymbols,F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,h=typeof Symbol=="function"&&typeof Symbol.iterator=="object",o=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===h||"symbol")?Symbol.toStringTag:null,gt=Object.prototype.propertyIsEnumerable,lt=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null);function ft(t,e){if(t===1/0||t===-1/0||t!==t||t&&t>-1e3&&t<1e3||st.call(/e/,e))return e;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof t=="number"){var a=t<0?-ot(-t):ot(t);if(a!==t){var i=String(a),r=K.call(e,i.length+1);return s.call(i,n,"$&_")+"."+s.call(s.call(r,/([0-9]{3})/g,"$&_"),/_$/,"")}}return s.call(e,n,"$&_")}var H=Mt,ut=H.custom,ct=St(ut)?ut:null,te=function t(e,n,a,i){var r=n||{};if(y(r,"quoteStyle")&&r.quoteStyle!=="single"&&r.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(y(r,"maxStringLength")&&(typeof r.maxStringLength=="number"?r.maxStringLength<0&&r.maxStringLength!==1/0:r.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var c=y(r,"customInspect")?r.customInspect:!0;if(typeof c!="boolean"&&c!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(y(r,"indent")&&r.indent!==null&&r.indent!=="	"&&!(parseInt(r.indent,10)===r.indent&&r.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(y(r,"numericSeparator")&&typeof r.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var v=r.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return ht(e,r);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var l=String(e);return v?ft(e,l):l}if(typeof e=="bigint"){var p=String(e)+"n";return v?ft(e,p):p}var L=typeof r.depth>"u"?5:r.depth;if(typeof a>"u"&&(a=0),a>=L&&L>0&&typeof e=="object")return V(e)?"[Array]":"[Object]";var S=bt(r,a);if(typeof i>"u")i=[];else if(mt(i,e)>=0)return"[Circular]";function f(m,_,Ot){if(_&&(i=Nt.call(i),i.push(_)),Ot){var tt={depth:r.depth};return y(r,"quoteStyle")&&(tt.quoteStyle=r.quoteStyle),t(m,tt,a+1,i)}return t(m,r,a+1,i)}if(typeof e=="function"&&!pt(e)){var Q=Jt(e),X=M(e,f);return"[Function"+(Q?": "+Q:" (anonymous)")+"]"+(X.length>0?" { "+u.call(X,", ")+" }":"")}if(St(e)){var Y=h?s.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):F.call(e);return typeof e=="object"&&!h?O(Y):Y}if(Yt(e)){for(var d="<"+at.call(String(e.nodeName)),A=e.attributes||[],E=0;E<A.length;E++)d+=" "+A[E].name+"="+vt(Dt(A[E].value),"double",r);return d+=">",e.childNodes&&e.childNodes.length&&(d+="..."),d+="</"+at.call(String(e.nodeName))+">",d}if(V(e)){if(e.length===0)return"[]";var R=M(e,f);return S&&!xt(R)?"["+J(R,S)+"]":"[ "+u.call(R,", ")+" ]"}if(Ct(e)){var T=M(e,f);return!("cause"in Error.prototype)&&"cause"in e&&!gt.call(e,"cause")?"{ ["+String(e)+"] "+u.call(it.call("[cause]: "+f(e.cause),T),", ")+" }":T.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+u.call(T,", ")+" }"}if(typeof e=="object"&&c){if(ct&&typeof e[ct]=="function"&&H)return H(e,{depth:L-a});if(c!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(Ut(e)){var Z=[];return et&&et.call(e,function(m,_){Z.push(f(_,e,!0)+" => "+f(m,e))}),yt("Map",W.call(e),Z,S)}if(Qt(e)){var x=[];return rt&&rt.call(e,function(m){x.push(f(m,e))}),yt("Set",I.call(e),x,S)}if(Gt(e))return P("WeakMap");if(Xt(e))return P("WeakSet");if(Kt(e))return P("WeakRef");if(zt(e))return O(f(Number(e)));if(Ht(e))return O(f(z.call(e)));if(Ft(e))return O(At.call(e));if(Pt(e))return O(f(String(e)));if(typeof window<"u"&&e===window)return"{ [object Window] }";if(e===$t)return"{ [object globalThis] }";if(!Bt(e)&&!pt(e)){var k=M(e,f),b=lt?lt(e)===Object.prototype:e instanceof Object||e.constructor===Object,q=e instanceof Object?"":"null prototype",j=!b&&o&&Object(e)===e&&o in e?K.call(g(e),8,-1):q?"Object":"",dt=b||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",N=dt+(j||q?"["+u.call(it.call([],j||[],q||[]),": ")+"] ":"");return k.length===0?N+"{}":S?N+"{"+J(k,S)+"}":N+"{ "+u.call(k,", ")+" }"}return String(e)};function vt(t,e,n){var a=(n.quoteStyle||e)==="double"?'"':"'";return a+t+a}function Dt(t){return s.call(String(t),/"/g,"&quot;")}function V(t){return g(t)==="[object Array]"&&(!o||!(typeof t=="object"&&o in t))}function Bt(t){return g(t)==="[object Date]"&&(!o||!(typeof t=="object"&&o in t))}function pt(t){return g(t)==="[object RegExp]"&&(!o||!(typeof t=="object"&&o in t))}function Ct(t){return g(t)==="[object Error]"&&(!o||!(typeof t=="object"&&o in t))}function Pt(t){return g(t)==="[object String]"&&(!o||!(typeof t=="object"&&o in t))}function zt(t){return g(t)==="[object Number]"&&(!o||!(typeof t=="object"&&o in t))}function Ft(t){return g(t)==="[object Boolean]"&&(!o||!(typeof t=="object"&&o in t))}function St(t){if(h)return t&&typeof t=="object"&&t instanceof Symbol;if(typeof t=="symbol")return!0;if(!t||typeof t!="object"||!F)return!1;try{return F.call(t),!0}catch{}return!1}function Ht(t){if(!t||typeof t!="object"||!z)return!1;try{return z.call(t),!0}catch{}return!1}var Vt=Object.prototype.hasOwnProperty||function(t){return t in this};function y(t,e){return Vt.call(t,e)}function g(t){return Rt.call(t)}function Jt(t){if(t.name)return t.name;var e=kt.call(Tt.call(t),/^function\s*([\w$]+)/);return e?e[1]:null}function mt(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0,a=t.length;n<a;n++)if(t[n]===e)return n;return-1}function Ut(t){if(!W||!t||typeof t!="object")return!1;try{W.call(t);try{I.call(t)}catch{return!0}return t instanceof Map}catch{}return!1}function Gt(t){if(!w||!t||typeof t!="object")return!1;try{w.call(t,w);try{$.call(t,$)}catch{return!0}return t instanceof WeakMap}catch{}return!1}function Kt(t){if(!nt||!t||typeof t!="object")return!1;try{return nt.call(t),!0}catch{}return!1}function Qt(t){if(!I||!t||typeof t!="object")return!1;try{I.call(t);try{W.call(t)}catch{return!0}return t instanceof Set}catch{}return!1}function Xt(t){if(!$||!t||typeof t!="object")return!1;try{$.call(t,$);try{w.call(t,w)}catch{return!0}return t instanceof WeakSet}catch{}return!1}function Yt(t){return!t||typeof t!="object"?!1:typeof HTMLElement<"u"&&t instanceof HTMLElement?!0:typeof t.nodeName=="string"&&typeof t.getAttribute=="function"}function ht(t,e){if(t.length>e.maxStringLength){var n=t.length-e.maxStringLength,a="... "+n+" more character"+(n>1?"s":"");return ht(K.call(t,0,e.maxStringLength),e)+a}var i=s.call(s.call(t,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,Zt);return vt(i,"single",e)}function Zt(t){var e=t.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return n?"\\"+n:"\\x"+(e<16?"0":"")+qt.call(e.toString(16))}function O(t){return"Object("+t+")"}function P(t){return t+" { ? }"}function yt(t,e,n,a){var i=a?J(n,a):u.call(n,", ");return t+" ("+e+") {"+i+"}"}function xt(t){for(var e=0;e<t.length;e++)if(mt(t[e],`
`)>=0)return!1;return!0}function bt(t,e){var n;if(t.indent==="	")n="	";else if(typeof t.indent=="number"&&t.indent>0)n=u.call(Array(t.indent+1)," ");else return null;return{base:n,prev:u.call(Array(e+1),n)}}function J(t,e){if(t.length===0)return"";var n=`
`+e.prev+e.base;return n+u.call(t,","+n)+`
`+e.prev}function M(t,e){var n=V(t),a=[];if(n){a.length=t.length;for(var i=0;i<t.length;i++)a[i]=y(t,i)?e(t[i],t):""}var r=typeof C=="function"?C(t):[],c;if(h){c={};for(var v=0;v<r.length;v++)c["$"+r[v]]=r[v]}for(var l in t)y(t,l)&&(n&&String(Number(l))===l&&l<t.length||h&&c["$"+l]instanceof Symbol||(st.call(/[^\w$]/,l)?a.push(e(l,t)+": "+e(t[l],t)):a.push(l+": "+e(t[l],t))));if(typeof C=="function")for(var p=0;p<r.length;p++)gt.call(t,r[p])&&a.push("["+e(r[p])+"]: "+e(t[r[p]],t));return a}export{te as o};
