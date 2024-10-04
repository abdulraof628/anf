import{s as ne}from"./side-channel-51e4be2c.js";var ie=String.prototype.replace,le=/%20/g,$={RFC1738:"RFC1738",RFC3986:"RFC3986"},_={default:$.RFC3986,formatters:{RFC1738:function(i){return ie.call(i,le,"+")},RFC3986:function(i){return String(i)}},RFC1738:$.RFC1738,RFC3986:$.RFC3986},fe=_,L=Object.prototype.hasOwnProperty,x=Array.isArray,b=function(){for(var i=[],e=0;e<256;++e)i.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return i}(),oe=function(e){for(;e.length>1;){var a=e.pop(),r=a.obj[a.prop];if(x(r)){for(var t=[],l=0;l<r.length;++l)typeof r[l]<"u"&&t.push(r[l]);a.obj[a.prop]=t}}},X=function(e,a){for(var r=a&&a.plainObjects?Object.create(null):{},t=0;t<e.length;++t)typeof e[t]<"u"&&(r[t]=e[t]);return r},ue=function i(e,a,r){if(!a)return e;if(typeof a!="object"){if(x(e))e.push(a);else if(e&&typeof e=="object")(r&&(r.plainObjects||r.allowPrototypes)||!L.call(Object.prototype,a))&&(e[a]=!0);else return[e,a];return e}if(!e||typeof e!="object")return[e].concat(a);var t=e;return x(e)&&!x(a)&&(t=X(e,r)),x(e)&&x(a)?(a.forEach(function(l,n){if(L.call(e,n)){var c=e[n];c&&typeof c=="object"&&l&&typeof l=="object"?e[n]=i(c,l,r):e.push(l)}else e[n]=l}),e):Object.keys(a).reduce(function(l,n){var c=a[n];return L.call(l,n)?l[n]=i(l[n],c,r):l[n]=c,l},t)},ce=function(e,a){return Object.keys(a).reduce(function(r,t){return r[t]=a[t],r},e)},de=function(i,e,a){var r=i.replace(/\+/g," ");if(a==="iso-8859-1")return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch{return r}},H=1024,se=function(e,a,r,t,l){if(e.length===0)return e;var n=e;if(typeof e=="symbol"?n=Symbol.prototype.toString.call(e):typeof e!="string"&&(n=String(e)),r==="iso-8859-1")return escape(n).replace(/%u[0-9a-f]{4}/gi,function(h){return"%26%23"+parseInt(h.slice(2),16)+"%3B"});for(var c="",o=0;o<n.length;o+=H){for(var d=n.length>=H?n.slice(o,o+H):n,f=[],p=0;p<d.length;++p){var u=d.charCodeAt(p);if(u===45||u===46||u===95||u===126||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||l===fe.RFC1738&&(u===40||u===41)){f[f.length]=d.charAt(p);continue}if(u<128){f[f.length]=b[u];continue}if(u<2048){f[f.length]=b[192|u>>6]+b[128|u&63];continue}if(u<55296||u>=57344){f[f.length]=b[224|u>>12]+b[128|u>>6&63]+b[128|u&63];continue}p+=1,u=65536+((u&1023)<<10|d.charCodeAt(p)&1023),f[f.length]=b[240|u>>18]+b[128|u>>12&63]+b[128|u>>6&63]+b[128|u&63]}c+=f.join("")}return c},ye=function(e){for(var a=[{obj:{o:e},prop:"o"}],r=[],t=0;t<a.length;++t)for(var l=a[t],n=l.obj[l.prop],c=Object.keys(n),o=0;o<c.length;++o){var d=c[o],f=n[d];typeof f=="object"&&f!==null&&r.indexOf(f)===-1&&(a.push({obj:n,prop:d}),r.push(f))}return oe(a),e},pe=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},me=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},he=function(e,a){return[].concat(e,a)},ve=function(e,a){if(x(e)){for(var r=[],t=0;t<e.length;t+=1)r.push(a(e[t]));return r}return a(e)},Y={arrayToObject:X,assign:ce,combine:he,compact:ye,decode:de,encode:se,isBuffer:me,isRegExp:pe,maybeMap:ve,merge:ue},Z=ne,I=Y,A=_,be=Object.prototype.hasOwnProperty,q={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,a){return e+"["+a+"]"},repeat:function(e){return e}},w=Array.isArray,we=Array.prototype.push,ee=function(i,e){we.apply(i,w(e)?e:[e])},ge=Date.prototype.toISOString,J=A.default,m={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:I.encode,encodeValuesOnly:!1,format:J,formatter:A.formatters[J],indices:!1,serializeDate:function(e){return ge.call(e)},skipNulls:!1,strictNullHandling:!1},Ee=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},B={},xe=function i(e,a,r,t,l,n,c,o,d,f,p,u,h,v,g,E,j,P){for(var s=e,F=P,N=0,M=!1;(F=F.get(B))!==void 0&&!M;){var V=F.get(e);if(N+=1,typeof V<"u"){if(V===N)throw new RangeError("Cyclic object value");M=!0}typeof F.get(B)>"u"&&(N=0)}if(typeof f=="function"?s=f(a,s):s instanceof Date?s=h(s):r==="comma"&&w(s)&&(s=I.maybeMap(s,function(Q){return Q instanceof Date?h(Q):Q})),s===null){if(n)return d&&!E?d(a,m.encoder,j,"key",v):a;s=""}if(Ee(s)||I.isBuffer(s)){if(d){var ae=E?a:d(a,m.encoder,j,"key",v);return[g(ae)+"="+g(d(s,m.encoder,j,"value",v))]}return[g(a)+"="+g(String(s))]}var C=[];if(typeof s>"u")return C;var S;if(r==="comma"&&w(s))E&&d&&(s=I.maybeMap(s,d)),S=[{value:s.length>0?s.join(",")||null:void 0}];else if(w(f))S=f;else{var k=Object.keys(s);S=p?k.sort(p):k}var U=o?a.replace(/\./g,"%2E"):a,T=t&&w(s)&&s.length===1?U+"[]":U;if(l&&w(s)&&s.length===0)return T+"[]";for(var R=0;R<S.length;++R){var D=S[R],G=typeof D=="object"&&typeof D.value<"u"?D.value:s[D];if(!(c&&G===null)){var K=u&&o?D.replace(/\./g,"%2E"):D,te=w(s)?typeof r=="function"?r(T,K):T:T+(u?"."+K:"["+K+"]");P.set(e,N);var W=Z();W.set(B,P),ee(C,i(G,te,r,t,l,n,c,o,r==="comma"&&E&&w(s)?null:d,f,p,u,h,v,g,E,j,W))}}return C},De=function(e){if(!e)return m;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.encodeDotInKeys<"u"&&typeof e.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var a=e.charset||m.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=A.default;if(typeof e.format<"u"){if(!be.call(A.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var t=A.formatters[r],l=m.filter;(typeof e.filter=="function"||w(e.filter))&&(l=e.filter);var n;if(e.arrayFormat in q?n=e.arrayFormat:"indices"in e?n=e.indices?"indices":"repeat":n=m.arrayFormat,"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var c=typeof e.allowDots>"u"?e.encodeDotInKeys===!0?!0:m.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:m.addQueryPrefix,allowDots:c,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:m.allowEmptyArrays,arrayFormat:n,charset:a,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:m.charsetSentinel,commaRoundTrip:e.commaRoundTrip,delimiter:typeof e.delimiter>"u"?m.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:m.encode,encodeDotInKeys:typeof e.encodeDotInKeys=="boolean"?e.encodeDotInKeys:m.encodeDotInKeys,encoder:typeof e.encoder=="function"?e.encoder:m.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:m.encodeValuesOnly,filter:l,format:r,formatter:t,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:m.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:m.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:m.strictNullHandling}},Oe=function(i,e){var a=i,r=De(e),t,l;typeof r.filter=="function"?(l=r.filter,a=l("",a)):w(r.filter)&&(l=r.filter,t=l);var n=[];if(typeof a!="object"||a===null)return"";var c=q[r.arrayFormat],o=c==="comma"&&r.commaRoundTrip;t||(t=Object.keys(a)),r.sort&&t.sort(r.sort);for(var d=Z(),f=0;f<t.length;++f){var p=t[f];r.skipNulls&&a[p]===null||ee(n,xe(a[p],p,c,o,r.allowEmptyArrays,r.strictNullHandling,r.skipNulls,r.encodeDotInKeys,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.format,r.formatter,r.encodeValuesOnly,r.charset,d))}var u=n.join(r.delimiter),h=r.addQueryPrefix===!0?"?":"";return r.charsetSentinel&&(r.charset==="iso-8859-1"?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&"),u.length>0?h+u:""},O=Y,z=Object.prototype.hasOwnProperty,Se=Array.isArray,y={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:O.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictNullHandling:!1},Ae=function(i){return i.replace(/&#(\d+);/g,function(e,a){return String.fromCharCode(parseInt(a,10))})},re=function(i,e){return i&&typeof i=="string"&&e.comma&&i.indexOf(",")>-1?i.split(","):i},je="utf8=%26%2310003%3B",Fe="utf8=%E2%9C%93",Ne=function(e,a){var r={__proto__:null},t=a.ignoreQueryPrefix?e.replace(/^\?/,""):e;t=t.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var l=a.parameterLimit===1/0?void 0:a.parameterLimit,n=t.split(a.delimiter,l),c=-1,o,d=a.charset;if(a.charsetSentinel)for(o=0;o<n.length;++o)n[o].indexOf("utf8=")===0&&(n[o]===Fe?d="utf-8":n[o]===je&&(d="iso-8859-1"),c=o,o=n.length);for(o=0;o<n.length;++o)if(o!==c){var f=n[o],p=f.indexOf("]="),u=p===-1?f.indexOf("="):p+1,h,v;u===-1?(h=a.decoder(f,y.decoder,d,"key"),v=a.strictNullHandling?null:""):(h=a.decoder(f.slice(0,u),y.decoder,d,"key"),v=O.maybeMap(re(f.slice(u+1),a),function(E){return a.decoder(E,y.decoder,d,"value")})),v&&a.interpretNumericEntities&&d==="iso-8859-1"&&(v=Ae(v)),f.indexOf("[]=")>-1&&(v=Se(v)?[v]:v);var g=z.call(r,h);g&&a.duplicates==="combine"?r[h]=O.combine(r[h],v):(!g||a.duplicates==="last")&&(r[h]=v)}return r},Te=function(i,e,a,r){for(var t=r?e:re(e,a),l=i.length-1;l>=0;--l){var n,c=i[l];if(c==="[]"&&a.parseArrays)n=a.allowEmptyArrays&&(t===""||a.strictNullHandling&&t===null)?[]:[].concat(t);else{n=a.plainObjects?Object.create(null):{};var o=c.charAt(0)==="["&&c.charAt(c.length-1)==="]"?c.slice(1,-1):c,d=a.decodeDotInKeys?o.replace(/%2E/g,"."):o,f=parseInt(d,10);!a.parseArrays&&d===""?n={0:t}:!isNaN(f)&&c!==d&&String(f)===d&&f>=0&&a.parseArrays&&f<=a.arrayLimit?(n=[],n[f]=t):d!=="__proto__"&&(n[d]=t)}t=n}return t},Ie=function(e,a,r,t){if(e){var l=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/,c=/(\[[^[\]]*])/g,o=r.depth>0&&n.exec(l),d=o?l.slice(0,o.index):l,f=[];if(d){if(!r.plainObjects&&z.call(Object.prototype,d)&&!r.allowPrototypes)return;f.push(d)}for(var p=0;r.depth>0&&(o=c.exec(l))!==null&&p<r.depth;){if(p+=1,!r.plainObjects&&z.call(Object.prototype,o[1].slice(1,-1))&&!r.allowPrototypes)return;f.push(o[1])}if(o){if(r.strictDepth===!0)throw new RangeError("Input depth exceeded depth option of "+r.depth+" and strictDepth is true");f.push("["+l.slice(o.index)+"]")}return Te(f,a,r,t)}},Pe=function(e){if(!e)return y;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.decodeDotInKeys<"u"&&typeof e.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(e.decoder!==null&&typeof e.decoder<"u"&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var a=typeof e.charset>"u"?y.charset:e.charset,r=typeof e.duplicates>"u"?y.duplicates:e.duplicates;if(r!=="combine"&&r!=="first"&&r!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var t=typeof e.allowDots>"u"?e.decodeDotInKeys===!0?!0:y.allowDots:!!e.allowDots;return{allowDots:t,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:y.allowEmptyArrays,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:y.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:y.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:y.arrayLimit,charset:a,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:y.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:y.comma,decodeDotInKeys:typeof e.decodeDotInKeys=="boolean"?e.decodeDotInKeys:y.decodeDotInKeys,decoder:typeof e.decoder=="function"?e.decoder:y.decoder,delimiter:typeof e.delimiter=="string"||O.isRegExp(e.delimiter)?e.delimiter:y.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:y.depth,duplicates:r,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:y.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:y.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:y.plainObjects,strictDepth:typeof e.strictDepth=="boolean"?!!e.strictDepth:y.strictDepth,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:y.strictNullHandling}},Ce=function(i,e){var a=Pe(e);if(i===""||i===null||typeof i>"u")return a.plainObjects?Object.create(null):{};for(var r=typeof i=="string"?Ne(i,a):i,t=a.plainObjects?Object.create(null):{},l=Object.keys(r),n=0;n<l.length;++n){var c=l[n],o=Ie(c,r[c],a,typeof i=="string");t=O.merge(t,o,a)}return a.allowSparse===!0?t:O.compact(t)},Re=Oe,Ke=Ce,Qe=_,Le={formats:Qe,parse:Ke,stringify:Re};export{Le as l};
