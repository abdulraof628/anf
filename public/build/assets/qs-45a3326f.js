import{s as ne}from"./side-channel-401220dd.js";var te=String.prototype.replace,ie=/%20/g,$={RFC1738:"RFC1738",RFC3986:"RFC3986"},B={default:$.RFC3986,formatters:{RFC1738:function(l){return te.call(l,ie,"+")},RFC3986:function(l){return String(l)}},RFC1738:$.RFC1738,RFC3986:$.RFC3986},le=B,L=Object.prototype.hasOwnProperty,x=Array.isArray,b=function(){for(var l=[],e=0;e<256;++e)l.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return l}(),fe=function(e){for(;e.length>1;){var r=e.pop(),a=r.obj[r.prop];if(x(a)){for(var t=[],f=0;f<a.length;++f)typeof a[f]<"u"&&t.push(a[f]);r.obj[r.prop]=t}}},J=function(e,r){for(var a=r&&r.plainObjects?Object.create(null):{},t=0;t<e.length;++t)typeof e[t]<"u"&&(a[t]=e[t]);return a},oe=function l(e,r,a){if(!r)return e;if(typeof r!="object"){if(x(e))e.push(r);else if(e&&typeof e=="object")(a&&(a.plainObjects||a.allowPrototypes)||!L.call(Object.prototype,r))&&(e[r]=!0);else return[e,r];return e}if(!e||typeof e!="object")return[e].concat(r);var t=e;return x(e)&&!x(r)&&(t=J(e,a)),x(e)&&x(r)?(r.forEach(function(f,i){if(L.call(e,i)){var o=e[i];o&&typeof o=="object"&&f&&typeof f=="object"?e[i]=l(o,f,a):e.push(f)}else e[i]=f}),e):Object.keys(r).reduce(function(f,i){var o=r[i];return L.call(f,i)?f[i]=l(f[i],o,a):f[i]=o,f},t)},ue=function(e,r){return Object.keys(r).reduce(function(a,t){return a[t]=r[t],a},e)},ce=function(l,e,r){var a=l.replace(/\+/g," ");if(r==="iso-8859-1")return a.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(a)}catch{return a}},se=function(e,r,a,t,f){if(e.length===0)return e;var i=e;if(typeof e=="symbol"?i=Symbol.prototype.toString.call(e):typeof e!="string"&&(i=String(e)),a==="iso-8859-1")return escape(i).replace(/%u[0-9a-f]{4}/gi,function(c){return"%26%23"+parseInt(c.slice(2),16)+"%3B"});for(var o="",u=0;u<i.length;++u){var n=i.charCodeAt(u);if(n===45||n===46||n===95||n===126||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122||f===le.RFC1738&&(n===40||n===41)){o+=i.charAt(u);continue}if(n<128){o=o+b[n];continue}if(n<2048){o=o+(b[192|n>>6]+b[128|n&63]);continue}if(n<55296||n>=57344){o=o+(b[224|n>>12]+b[128|n>>6&63]+b[128|n&63]);continue}u+=1,n=65536+((n&1023)<<10|i.charCodeAt(u)&1023),o+=b[240|n>>18]+b[128|n>>12&63]+b[128|n>>6&63]+b[128|n&63]}return o},de=function(e){for(var r=[{obj:{o:e},prop:"o"}],a=[],t=0;t<r.length;++t)for(var f=r[t],i=f.obj[f.prop],o=Object.keys(i),u=0;u<o.length;++u){var n=o[u],c=i[n];typeof c=="object"&&c!==null&&a.indexOf(c)===-1&&(r.push({obj:i,prop:n}),a.push(c))}return fe(r),e},ye=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},pe=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},me=function(e,r){return[].concat(e,r)},ve=function(e,r){if(x(e)){for(var a=[],t=0;t<e.length;t+=1)a.push(r(e[t]));return a}return r(e)},X={arrayToObject:J,assign:ue,combine:me,compact:de,decode:ce,encode:se,isBuffer:pe,isRegExp:ye,maybeMap:ve,merge:oe},Y=ne,I=X,j=B,he=Object.prototype.hasOwnProperty,Z={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},w=Array.isArray,be=Array.prototype.push,q=function(l,e){be.apply(l,w(e)?e:[e])},we=Date.prototype.toISOString,W=j.default,y={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:I.encode,encodeValuesOnly:!1,format:W,formatter:j.formatters[W],indices:!1,serializeDate:function(e){return we.call(e)},skipNulls:!1,strictNullHandling:!1},ge=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},H={},Ee=function l(e,r,a,t,f,i,o,u,n,c,v,h,m,p,g,E,A,P){for(var s=e,F=P,N=0,_=!1;(F=F.get(H))!==void 0&&!_;){var M=F.get(e);if(N+=1,typeof M<"u"){if(M===N)throw new RangeError("Cyclic object value");_=!0}typeof F.get(H)>"u"&&(N=0)}if(typeof c=="function"?s=c(r,s):s instanceof Date?s=m(s):a==="comma"&&w(s)&&(s=I.maybeMap(s,function(Q){return Q instanceof Date?m(Q):Q})),s===null){if(i)return n&&!E?n(r,y.encoder,A,"key",p):r;s=""}if(ge(s)||I.isBuffer(s)){if(n){var re=E?r:n(r,y.encoder,A,"key",p);return[g(re)+"="+g(n(s,y.encoder,A,"value",p))]}return[g(r)+"="+g(String(s))]}var C=[];if(typeof s>"u")return C;var S;if(a==="comma"&&w(s))E&&n&&(s=I.maybeMap(s,n)),S=[{value:s.length>0?s.join(",")||null:void 0}];else if(w(c))S=c;else{var V=Object.keys(s);S=v?V.sort(v):V}var k=u?r.replace(/\./g,"%2E"):r,T=t&&w(s)&&s.length===1?k+"[]":k;if(f&&w(s)&&s.length===0)return T+"[]";for(var R=0;R<S.length;++R){var O=S[R],U=typeof O=="object"&&typeof O.value<"u"?O.value:s[O];if(!(o&&U===null)){var K=h&&u?O.replace(/\./g,"%2E"):O,ae=w(s)?typeof a=="function"?a(T,K):T:T+(h?"."+K:"["+K+"]");P.set(e,N);var G=Y();G.set(H,P),q(C,l(U,ae,a,t,f,i,o,u,a==="comma"&&E&&w(s)?null:n,c,v,h,m,p,g,E,A,G))}}return C},xe=function(e){if(!e)return y;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.encodeDotInKeys<"u"&&typeof e.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var r=e.charset||y.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var a=j.default;if(typeof e.format<"u"){if(!he.call(j.formatters,e.format))throw new TypeError("Unknown format option provided.");a=e.format}var t=j.formatters[a],f=y.filter;(typeof e.filter=="function"||w(e.filter))&&(f=e.filter);var i;if(e.arrayFormat in Z?i=e.arrayFormat:"indices"in e?i=e.indices?"indices":"repeat":i=y.arrayFormat,"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var o=typeof e.allowDots>"u"?e.encodeDotInKeys===!0?!0:y.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:y.addQueryPrefix,allowDots:o,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:y.allowEmptyArrays,arrayFormat:i,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:y.charsetSentinel,commaRoundTrip:e.commaRoundTrip,delimiter:typeof e.delimiter>"u"?y.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:y.encode,encodeDotInKeys:typeof e.encodeDotInKeys=="boolean"?e.encodeDotInKeys:y.encodeDotInKeys,encoder:typeof e.encoder=="function"?e.encoder:y.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:y.encodeValuesOnly,filter:f,format:a,formatter:t,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:y.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:y.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:y.strictNullHandling}},Oe=function(l,e){var r=l,a=xe(e),t,f;typeof a.filter=="function"?(f=a.filter,r=f("",r)):w(a.filter)&&(f=a.filter,t=f);var i=[];if(typeof r!="object"||r===null)return"";var o=Z[a.arrayFormat],u=o==="comma"&&a.commaRoundTrip;t||(t=Object.keys(r)),a.sort&&t.sort(a.sort);for(var n=Y(),c=0;c<t.length;++c){var v=t[c];a.skipNulls&&r[v]===null||q(i,Ee(r[v],v,o,u,a.allowEmptyArrays,a.strictNullHandling,a.skipNulls,a.encodeDotInKeys,a.encode?a.encoder:null,a.filter,a.sort,a.allowDots,a.serializeDate,a.format,a.formatter,a.encodeValuesOnly,a.charset,n))}var h=i.join(a.delimiter),m=a.addQueryPrefix===!0?"?":"";return a.charsetSentinel&&(a.charset==="iso-8859-1"?m+="utf8=%26%2310003%3B&":m+="utf8=%E2%9C%93&"),h.length>0?m+h:""},D=X,z=Object.prototype.hasOwnProperty,De=Array.isArray,d={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!0,decoder:D.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Se=function(l){return l.replace(/&#(\d+);/g,function(e,r){return String.fromCharCode(parseInt(r,10))})},ee=function(l,e){return l&&typeof l=="string"&&e.comma&&l.indexOf(",")>-1?l.split(","):l},je="utf8=%26%2310003%3B",Ae="utf8=%E2%9C%93",Fe=function(e,r){var a={__proto__:null},t=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=r.parameterLimit===1/0?void 0:r.parameterLimit,i=t.split(r.delimiter,f),o=-1,u,n=r.charset;if(r.charsetSentinel)for(u=0;u<i.length;++u)i[u].indexOf("utf8=")===0&&(i[u]===Ae?n="utf-8":i[u]===je&&(n="iso-8859-1"),o=u,u=i.length);for(u=0;u<i.length;++u)if(u!==o){var c=i[u],v=c.indexOf("]="),h=v===-1?c.indexOf("="):v+1,m,p;h===-1?(m=r.decoder(c,d.decoder,n,"key"),p=r.strictNullHandling?null:""):(m=r.decoder(c.slice(0,h),d.decoder,n,"key"),p=D.maybeMap(ee(c.slice(h+1),r),function(E){return r.decoder(E,d.decoder,n,"value")})),p&&r.interpretNumericEntities&&n==="iso-8859-1"&&(p=Se(p)),c.indexOf("[]=")>-1&&(p=De(p)?[p]:p);var g=z.call(a,m);g&&r.duplicates==="combine"?a[m]=D.combine(a[m],p):(!g||r.duplicates==="last")&&(a[m]=p)}return a},Ne=function(l,e,r,a){for(var t=a?e:ee(e,r),f=l.length-1;f>=0;--f){var i,o=l[f];if(o==="[]"&&r.parseArrays)i=r.allowEmptyArrays&&t===""?[]:[].concat(t);else{i=r.plainObjects?Object.create(null):{};var u=o.charAt(0)==="["&&o.charAt(o.length-1)==="]"?o.slice(1,-1):o,n=r.decodeDotInKeys?u.replace(/%2E/g,"."):u,c=parseInt(n,10);!r.parseArrays&&n===""?i={0:t}:!isNaN(c)&&o!==n&&String(c)===n&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(i=[],i[c]=t):n!=="__proto__"&&(i[n]=t)}t=i}return t},Te=function(e,r,a,t){if(e){var f=a.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,o=/(\[[^[\]]*])/g,u=a.depth>0&&i.exec(f),n=u?f.slice(0,u.index):f,c=[];if(n){if(!a.plainObjects&&z.call(Object.prototype,n)&&!a.allowPrototypes)return;c.push(n)}for(var v=0;a.depth>0&&(u=o.exec(f))!==null&&v<a.depth;){if(v+=1,!a.plainObjects&&z.call(Object.prototype,u[1].slice(1,-1))&&!a.allowPrototypes)return;c.push(u[1])}return u&&c.push("["+f.slice(u.index)+"]"),Ne(c,r,a,t)}},Ie=function(e){if(!e)return d;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.decodeDotInKeys<"u"&&typeof e.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(e.decoder!==null&&typeof e.decoder<"u"&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=typeof e.charset>"u"?d.charset:e.charset,a=typeof e.duplicates>"u"?d.duplicates:e.duplicates;if(a!=="combine"&&a!=="first"&&a!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var t=typeof e.allowDots>"u"?e.decodeDotInKeys===!0?!0:d.allowDots:!!e.allowDots;return{allowDots:t,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:d.allowEmptyArrays,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:d.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:d.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:d.arrayLimit,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:d.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:d.comma,decodeDotInKeys:typeof e.decodeDotInKeys=="boolean"?e.decodeDotInKeys:d.decodeDotInKeys,decoder:typeof e.decoder=="function"?e.decoder:d.decoder,delimiter:typeof e.delimiter=="string"||D.isRegExp(e.delimiter)?e.delimiter:d.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:d.depth,duplicates:a,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:d.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:d.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:d.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:d.strictNullHandling}},Pe=function(l,e){var r=Ie(e);if(l===""||l===null||typeof l>"u")return r.plainObjects?Object.create(null):{};for(var a=typeof l=="string"?Fe(l,r):l,t=r.plainObjects?Object.create(null):{},f=Object.keys(a),i=0;i<f.length;++i){var o=f[i],u=Te(o,a[o],r,typeof l=="string");t=D.merge(t,u,r)}return r.allowSparse===!0?t:D.compact(t)},Ce=Oe,Re=Pe,Ke=B,$e={formats:Ke,parse:Re,stringify:Ce};export{$e as l};
