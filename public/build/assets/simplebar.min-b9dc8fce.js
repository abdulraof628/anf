import{K as te,D as ie,M as re}from"./app-0dc97b57.js";var se=typeof global=="object"&&global&&global.Object===Object&&global;const le=se;var oe=typeof self=="object"&&self&&self.Object===Object&&self,ne=le||oe||Function("return this")();const Y=ne;var ae=Y.Symbol;const _=ae;var q=Object.prototype,ce=q.hasOwnProperty,he=q.toString,T=_?_.toStringTag:void 0;function ue(t){var i=ce.call(t,T),r=t[T];try{t[T]=void 0;var e=!0}catch{}var s=he.call(t);return e&&(i?t[T]=r:delete t[T]),s}var fe=Object.prototype,de=fe.toString;function ve(t){return de.call(t)}var pe="[object Null]",me="[object Undefined]",$=_?_.toStringTag:void 0;function ge(t){return t==null?t===void 0?me:pe:$&&$ in Object(t)?ue(t):ve(t)}function be(t){return t!=null&&typeof t=="object"}var ye="[object Symbol]";function Ee(t){return typeof t=="symbol"||be(t)&&ge(t)==ye}var xe=/\s/;function Se(t){for(var i=t.length;i--&&xe.test(t.charAt(i)););return i}var Oe=/^\s+/;function we(t){return t&&t.slice(0,Se(t)+1).replace(Oe,"")}function R(t){var i=typeof t;return t!=null&&(i=="object"||i=="function")}var P=0/0,We=/^[-+]0x[0-9a-f]+$/i,ke=/^0b[01]+$/i,Ae=/^0o[0-7]+$/i,ze=parseInt;function X(t){if(typeof t=="number")return t;if(Ee(t))return P;if(R(t)){var i=typeof t.valueOf=="function"?t.valueOf():t;t=R(i)?i+"":i}if(typeof t!="string")return t===0?t:+t;t=we(t);var r=ke.test(t);return r||Ae.test(t)?ze(t.slice(2),r?2:8):We.test(t)?P:+t}var Me=function(){return Y.Date.now()};const B=Me;var Te="Expected a function",Ne=Math.max,Ce=Math.min;function L(t,i,r){var e,s,l,n,o,a,c=0,v=!1,u=!1,p=!0;if(typeof t!="function")throw new TypeError(Te);i=X(i)||0,R(r)&&(v=!!r.leading,u="maxWait"in r,l=u?Ne(X(r.maxWait)||0,i):l,p="trailing"in r?!!r.trailing:p);function f(h){var g=e,b=s;return e=s=void 0,c=h,n=t.apply(b,g),n}function W(h){return c=h,o=setTimeout(m,i),v?f(h):n}function E(h){var g=h-a,b=h-c,H=i-g;return u?Ce(H,l-b):H}function y(h){var g=h-a,b=h-c;return a===void 0||g>=i||g<0||u&&b>=l}function m(){var h=B();if(y(h))return x(h);o=setTimeout(m,E(h))}function x(h){return o=void 0,p&&e?f(h):(e=s=void 0,n)}function C(){o!==void 0&&clearTimeout(o),c=0,e=a=s=o=void 0}function j(){return o===void 0?n:x(B())}function M(){var h=B(),g=y(h);if(e=arguments,s=this,a=h,g){if(o===void 0)return W(a);if(u)return clearTimeout(o),o=setTimeout(m,i),f(a)}return o===void 0&&(o=setTimeout(m,i)),n}return M.cancel=C,M.flush=j,M}var Le="Expected a function";function _e(t,i,r){var e=!0,s=!0;if(typeof t!="function")throw new TypeError(Le);return R(r)&&(e="leading"in r?!!r.leading:e,s="trailing"in r?!!r.trailing:s),L(t,i,{leading:e,maxWait:i,trailing:s})}var Re=!!(typeof window<"u"&&window.document&&window.document.createElement),De=Re;const U=te(De);var z=function(){return z=Object.assign||function(i){for(var r,e=1,s=arguments.length;e<s;e++){r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(i[l]=r[l])}return i},z.apply(this,arguments)},A=null,I=null;U&&window.addEventListener("resize",function(){I!==window.devicePixelRatio&&(I=window.devicePixelRatio,A=null)});function F(){if(A===null){if(typeof document>"u")return A=0,A;var t=document.body,i=document.createElement("div");i.classList.add("simplebar-hide-scrollbar"),t.appendChild(i);var r=i.getBoundingClientRect().right;t.removeChild(i),A=r}return A}function G(t){return!t||!t.ownerDocument||!t.ownerDocument.defaultView?window:t.ownerDocument.defaultView}function Q(t){return!t||!t.ownerDocument?document:t.ownerDocument}var Z=function(t){var i={},r=Array.prototype.reduce.call(t,function(e,s){var l=s.name.match(/data-simplebar-(.+)/);if(l){var n=l[1].replace(/\W+(.)/g,function(o,a){return a.toUpperCase()});switch(s.value){case"true":e[n]=!0;break;case"false":e[n]=!1;break;case void 0:e[n]=!0;break;default:e[n]=s.value}}return e},i);return r};function K(t,i){var r;t&&(r=t.classList).add.apply(r,i.split(" "))}function J(t,i){t&&i.split(" ").forEach(function(r){t.classList.remove(r)})}function ee(t){return".".concat(t.split(" ").join("."))}var je=Object.freeze({__proto__:null,getElementWindow:G,getElementDocument:Q,getOptions:Z,addClasses:K,removeClasses:J,classNamesToQuery:ee}),S=G,V=Q,Be=Z,O=K,w=J,d=ee,D=function(){function t(i,r){r===void 0&&(r={});var e=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var s=S(e.el);e.scrollXTicking||(s.requestAnimationFrame(e.scrollX),e.scrollXTicking=!0),e.scrollYTicking||(s.requestAnimationFrame(e.scrollY),e.scrollYTicking=!0),e.isScrolling||(e.isScrolling=!0,O(e.el,e.classNames.scrolling)),e.showScrollbar("x"),e.showScrollbar("y"),e.onStopScrolling()},this.scrollX=function(){e.axis.x.isOverflowing&&e.positionScrollbar("x"),e.scrollXTicking=!1},this.scrollY=function(){e.axis.y.isOverflowing&&e.positionScrollbar("y"),e.scrollYTicking=!1},this._onStopScrolling=function(){w(e.el,e.classNames.scrolling),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isScrolling=!1},this.onMouseEnter=function(){e.isMouseEntering||(O(e.el,e.classNames.mouseEntered),e.showScrollbar("x"),e.showScrollbar("y"),e.isMouseEntering=!0),e.onMouseEntered()},this._onMouseEntered=function(){w(e.el,e.classNames.mouseEntered),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isMouseEntering=!1},this._onMouseMove=function(s){e.mouseX=s.clientX,e.mouseY=s.clientY,(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseMoveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseMoveForAxis("y")},this.onMouseLeave=function(){e.onMouseMove.cancel(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseLeaveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseLeaveForAxis("y"),e.mouseX=-1,e.mouseY=-1},this._onWindowResize=function(){e.scrollbarWidth=e.getScrollbarWidth(),e.hideNativeScrollbar()},this.onPointerEvent=function(s){if(!(!e.axis.x.track.el||!e.axis.y.track.el||!e.axis.x.scrollbar.el||!e.axis.y.scrollbar.el)){var l,n;e.axis.x.track.rect=e.axis.x.track.el.getBoundingClientRect(),e.axis.y.track.rect=e.axis.y.track.el.getBoundingClientRect(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&(l=e.isWithinBounds(e.axis.x.track.rect)),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&(n=e.isWithinBounds(e.axis.y.track.rect)),(l||n)&&(s.stopPropagation(),s.type==="pointerdown"&&s.pointerType!=="touch"&&(l&&(e.axis.x.scrollbar.rect=e.axis.x.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.x.scrollbar.rect)?e.onDragStart(s,"x"):e.onTrackClick(s,"x")),n&&(e.axis.y.scrollbar.rect=e.axis.y.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.y.scrollbar.rect)?e.onDragStart(s,"y"):e.onTrackClick(s,"y"))))}},this.drag=function(s){var l,n,o,a,c,v,u,p,f,W,E;if(!(!e.draggedAxis||!e.contentWrapperEl)){var y,m=e.axis[e.draggedAxis].track,x=(n=(l=m.rect)===null||l===void 0?void 0:l[e.axis[e.draggedAxis].sizeAttr])!==null&&n!==void 0?n:0,C=e.axis[e.draggedAxis].scrollbar,j=(a=(o=e.contentWrapperEl)===null||o===void 0?void 0:o[e.axis[e.draggedAxis].scrollSizeAttr])!==null&&a!==void 0?a:0,M=parseInt((v=(c=e.elStyles)===null||c===void 0?void 0:c[e.axis[e.draggedAxis].sizeAttr])!==null&&v!==void 0?v:"0px",10);s.preventDefault(),s.stopPropagation(),e.draggedAxis==="y"?y=s.pageY:y=s.pageX;var h=y-((p=(u=m.rect)===null||u===void 0?void 0:u[e.axis[e.draggedAxis].offsetAttr])!==null&&p!==void 0?p:0)-e.axis[e.draggedAxis].dragOffset;h=e.draggedAxis==="x"&&e.isRtl?((W=(f=m.rect)===null||f===void 0?void 0:f[e.axis[e.draggedAxis].sizeAttr])!==null&&W!==void 0?W:0)-C.size-h:h;var g=h/(x-C.size),b=g*(j-M);e.draggedAxis==="x"&&e.isRtl&&(b=!((E=t.getRtlHelpers())===null||E===void 0)&&E.isScrollingToNegative?-b:b),e.contentWrapperEl[e.axis[e.draggedAxis].scrollOffsetAttr]=b}},this.onEndDrag=function(s){var l=V(e.el),n=S(e.el);s.preventDefault(),s.stopPropagation(),w(e.el,e.classNames.dragging),l.removeEventListener("mousemove",e.drag,!0),l.removeEventListener("mouseup",e.onEndDrag,!0),e.removePreventClickId=n.setTimeout(function(){l.removeEventListener("click",e.preventClick,!0),l.removeEventListener("dblclick",e.preventClick,!0),e.removePreventClickId=null})},this.preventClick=function(s){s.preventDefault(),s.stopPropagation()},this.el=i,this.options=z(z({},t.defaultOptions),r),this.classNames=z(z({},t.defaultOptions.classNames),r.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},typeof this.el!="object"||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=_e(this._onMouseMove,64),this.onWindowResize=L(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=L(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=L(this._onMouseEntered,this.stopScrollDelay),this.init()}return t.getRtlHelpers=function(){if(t.rtlHelpers)return t.rtlHelpers;var i=document.createElement("div");i.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var r=i.firstElementChild,e=r==null?void 0:r.firstElementChild;if(!e)return null;document.body.appendChild(r),r.scrollLeft=0;var s=t.getOffset(r),l=t.getOffset(e);r.scrollLeft=-999;var n=t.getOffset(e);return document.body.removeChild(r),t.rtlHelpers={isScrollOriginAtZero:s.left!==l.left,isScrollingToNegative:l.left!==n.left},t.rtlHelpers},t.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display==="none"||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:F()}catch{return F()}},t.getOffset=function(i){var r=i.getBoundingClientRect(),e=V(i),s=S(i);return{top:r.top+(s.pageYOffset||e.documentElement.scrollTop),left:r.left+(s.pageXOffset||e.documentElement.scrollLeft)}},t.prototype.init=function(){U&&(this.initDOM(),this.rtlHelpers=t.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},t.prototype.initDOM=function(){var i,r;this.wrapperEl=this.el.querySelector(d(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(d(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(d(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(d(this.classNames.offset)),this.maskEl=this.el.querySelector(d(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,d(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(d(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(d(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(d(this.classNames.track)).concat(d(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(d(this.classNames.track)).concat(d(this.classNames.vertical))),this.axis.x.scrollbar.el=((i=this.axis.x.track.el)===null||i===void 0?void 0:i.querySelector(d(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=((r=this.axis.y.track.el)===null||r===void 0?void 0:r.querySelector(d(this.classNames.scrollbar)))||null,this.options.autoHide||(O(this.axis.x.scrollbar.el,this.classNames.visible),O(this.axis.y.scrollbar.el,this.classNames.visible))},t.prototype.initListeners=function(){var i=this,r,e=S(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),(r=this.contentWrapperEl)===null||r===void 0||r.addEventListener("scroll",this.onScroll),e.addEventListener("resize",this.onWindowResize),!!this.contentEl){if(window.ResizeObserver){var s=!1,l=e.ResizeObserver||ResizeObserver;this.resizeObserver=new l(function(){s&&e.requestAnimationFrame(function(){i.recalculate()})}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),e.requestAnimationFrame(function(){s=!0})}this.mutationObserver=new e.MutationObserver(function(){e.requestAnimationFrame(function(){i.recalculate()})}),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},t.prototype.recalculate=function(){if(!(!this.heightAutoObserverEl||!this.contentEl||!this.contentWrapperEl||!this.wrapperEl||!this.placeholderEl)){var i=S(this.el);this.elStyles=i.getComputedStyle(this.el),this.isRtl=this.elStyles.direction==="rtl";var r=this.contentEl.offsetWidth,e=this.heightAutoObserverEl.offsetHeight<=1,s=this.heightAutoObserverEl.offsetWidth<=1||r>0,l=this.contentWrapperEl.offsetWidth,n=this.elStyles.overflowX,o=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var a=this.contentEl.scrollHeight,c=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=e?"auto":"100%",this.placeholderEl.style.width=s?"".concat(r||c,"px"):"auto",this.placeholderEl.style.height="".concat(a,"px");var v=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=r!==0&&c>r,this.axis.y.isOverflowing=a>v,this.axis.x.isOverflowing=n==="hidden"?!1:this.axis.x.isOverflowing,this.axis.y.isOverflowing=o==="hidden"?!1:this.axis.y.isOverflowing,this.axis.x.forceVisible=this.options.forceVisible==="x"||this.options.forceVisible===!0,this.axis.y.forceVisible=this.options.forceVisible==="y"||this.options.forceVisible===!0,this.hideNativeScrollbar();var u=this.axis.x.isOverflowing?this.scrollbarWidth:0,p=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&c>l-p,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&a>v-u,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},t.prototype.getScrollbarSize=function(i){var r,e;if(i===void 0&&(i="y"),!this.axis[i].isOverflowing||!this.contentEl)return 0;var s=this.contentEl[this.axis[i].scrollSizeAttr],l=(e=(r=this.axis[i].track.el)===null||r===void 0?void 0:r[this.axis[i].offsetSizeAttr])!==null&&e!==void 0?e:0,n=l/s,o;return o=Math.max(~~(n*l),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(o=Math.min(o,this.options.scrollbarMaxSize)),o},t.prototype.positionScrollbar=function(i){var r,e,s;i===void 0&&(i="y");var l=this.axis[i].scrollbar;if(!(!this.axis[i].isOverflowing||!this.contentWrapperEl||!l.el||!this.elStyles)){var n=this.contentWrapperEl[this.axis[i].scrollSizeAttr],o=((r=this.axis[i].track.el)===null||r===void 0?void 0:r[this.axis[i].offsetSizeAttr])||0,a=parseInt(this.elStyles[this.axis[i].sizeAttr],10),c=this.contentWrapperEl[this.axis[i].scrollOffsetAttr];c=i==="x"&&this.isRtl&&(!((e=t.getRtlHelpers())===null||e===void 0)&&e.isScrollOriginAtZero)?-c:c,i==="x"&&this.isRtl&&(c=!((s=t.getRtlHelpers())===null||s===void 0)&&s.isScrollingToNegative?c:-c);var v=c/(n-a),u=~~((o-l.size)*v);u=i==="x"&&this.isRtl?-u+(o-l.size):u,l.el.style.transform=i==="x"?"translate3d(".concat(u,"px, 0, 0)"):"translate3d(0, ".concat(u,"px, 0)")}},t.prototype.toggleTrackVisibility=function(i){i===void 0&&(i="y");var r=this.axis[i].track.el,e=this.axis[i].scrollbar.el;!r||!e||!this.contentWrapperEl||(this.axis[i].isOverflowing||this.axis[i].forceVisible?(r.style.visibility="visible",this.contentWrapperEl.style[this.axis[i].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(i))):(r.style.visibility="hidden",this.contentWrapperEl.style[this.axis[i].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(i))),this.axis[i].isOverflowing?e.style.display="block":e.style.display="none")},t.prototype.showScrollbar=function(i){i===void 0&&(i="y"),this.axis[i].isOverflowing&&!this.axis[i].scrollbar.isVisible&&(O(this.axis[i].scrollbar.el,this.classNames.visible),this.axis[i].scrollbar.isVisible=!0)},t.prototype.hideScrollbar=function(i){i===void 0&&(i="y"),this.axis[i].isOverflowing&&this.axis[i].scrollbar.isVisible&&(w(this.axis[i].scrollbar.el,this.classNames.visible),this.axis[i].scrollbar.isVisible=!1)},t.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},t.prototype.onMouseMoveForAxis=function(i){i===void 0&&(i="y");var r=this.axis[i];!r.track.el||!r.scrollbar.el||(r.track.rect=r.track.el.getBoundingClientRect(),r.scrollbar.rect=r.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(r.track.rect)?(this.showScrollbar(i),O(r.track.el,this.classNames.hover),this.isWithinBounds(r.scrollbar.rect)?O(r.scrollbar.el,this.classNames.hover):w(r.scrollbar.el,this.classNames.hover)):(w(r.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(i)))},t.prototype.onMouseLeaveForAxis=function(i){i===void 0&&(i="y"),w(this.axis[i].track.el,this.classNames.hover),w(this.axis[i].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(i)},t.prototype.onDragStart=function(i,r){var e;r===void 0&&(r="y");var s=V(this.el),l=S(this.el),n=this.axis[r].scrollbar,o=r==="y"?i.pageY:i.pageX;this.axis[r].dragOffset=o-(((e=n.rect)===null||e===void 0?void 0:e[this.axis[r].offsetAttr])||0),this.draggedAxis=r,O(this.el,this.classNames.dragging),s.addEventListener("mousemove",this.drag,!0),s.addEventListener("mouseup",this.onEndDrag,!0),this.removePreventClickId===null?(s.addEventListener("click",this.preventClick,!0),s.addEventListener("dblclick",this.preventClick,!0)):(l.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},t.prototype.onTrackClick=function(i,r){var e=this,s,l,n,o;r===void 0&&(r="y");var a=this.axis[r];if(!(!this.options.clickOnTrack||!a.scrollbar.el||!this.contentWrapperEl)){i.preventDefault();var c=S(this.el);this.axis[r].scrollbar.rect=a.scrollbar.el.getBoundingClientRect();var v=this.axis[r].scrollbar,u=(l=(s=v.rect)===null||s===void 0?void 0:s[this.axis[r].offsetAttr])!==null&&l!==void 0?l:0,p=parseInt((o=(n=this.elStyles)===null||n===void 0?void 0:n[this.axis[r].sizeAttr])!==null&&o!==void 0?o:"0px",10),f=this.contentWrapperEl[this.axis[r].scrollOffsetAttr],W=r==="y"?this.mouseY-u:this.mouseX-u,E=W<0?-1:1,y=E===-1?f-p:f+p,m=40,x=function(){e.contentWrapperEl&&(E===-1?f>y&&(f-=m,e.contentWrapperEl[e.axis[r].scrollOffsetAttr]=f,c.requestAnimationFrame(x)):f<y&&(f+=m,e.contentWrapperEl[e.axis[r].scrollOffsetAttr]=f,c.requestAnimationFrame(x)))};x()}},t.prototype.getContentElement=function(){return this.contentEl},t.prototype.getScrollElement=function(){return this.contentWrapperEl},t.prototype.removeListeners=function(){var i=S(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),i.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},t.prototype.unMount=function(){this.removeListeners()},t.prototype.isWithinBounds=function(i){return this.mouseX>=i.left&&this.mouseX<=i.left+i.width&&this.mouseY>=i.top&&this.mouseY<=i.top+i.height},t.prototype.findChild=function(i,r){var e=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector;return Array.prototype.filter.call(i.children,function(s){return e.call(s,r)})[0]},t.rtlHelpers=null,t.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},t.getOptions=Be,t.helpers=je,t}(),k=function(){return k=Object.assign||function(i){for(var r,e=1,s=arguments.length;e<s;e++){r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(i[l]=r[l])}return i},k.apply(this,arguments)},Ve={beforeUnmount:"beforeUnmount",unmount:"unmount"},N;function He(t){var i,r=t.h,e=t.emit,s=t.slots,l=t.props,n=function(a){return e("scroll",a)},o=k(k({},D.defaultOptions.classNames),l.classNames);return r("div",k({ref:"element"},{"data-simplebar":"init"}),[r("div",{class:o.wrapper},[r("div",{class:o.heightAutoObserverWrapperEl},[r("div",{class:o.heightAutoObserverEl})]),r("div",{class:o.mask},[r("div",{class:o.offset},[r("div",k(k({},{onScroll:n,class:o.contentWrapper,tabIndex:0,role:"region","aria-label":l.ariaLabel||D.defaultOptions.ariaLabel}),{ref:"scrollElement"}),[r("div",{class:o.contentEl,ref:"contentElement"},(i=s.default)===null||i===void 0?void 0:i.call(s))])])]),r("div",{class:o.placeholder})]),r("div",{class:"".concat(o.track," simplebar-horizontal")},[r("div",{class:o.scrollbar})]),r("div",{class:"".concat(o.track," simplebar-vertical")},[r("div",{class:o.scrollbar})])])}var Pe=ie((N={name:"simplebar-vue",props:{autoHide:{type:Boolean,default:void 0},classNames:Object,forceVisible:{type:[Boolean,String],validator:function(t){return typeof t=="boolean"||t==="x"||t==="y"},default:void 0},ariaLabel:String,direction:{type:String,validator:function(t){return t==="ltr"||t==="rtl"}},timeout:Number,clickOnTrack:{type:Boolean,default:void 0},scrollbarMinSize:Number,scrollbarMaxSize:Number},emits:["scroll"],data:function(){return{}},mounted:function(){for(var t=D.getOptions(this.$refs.element.attributes),i=0,r=Object.entries(this.$props);i<r.length;i++){var e=r[i],s=e[0],l=e[1];l!=null&&typeof l!="function"&&(t[s]=l)}this.SimpleBar=new D(this.$refs.element,t),this.scrollElement=this.$refs.scrollElement,this.contentElement=this.$refs.contentElement}},N[Ve.beforeUnmount]=function(){var t;(t=this.SimpleBar)===null||t===void 0||t.unMount(),this.SimpleBar=void 0},N.methods={recalculate:function(){var t;(t=this.SimpleBar)===null||t===void 0||t.recalculate()}},N.render=function(t){var i=this;return He({h:typeof t=="function"?t:re,emit:function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return i.$emit.apply(i,r)},slots:this.$slots,props:this.$props})},N));export{Pe as s};
