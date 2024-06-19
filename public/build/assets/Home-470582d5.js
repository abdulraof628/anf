import{_ as pe,z as u,V as L,a2 as C,A as He,O as Ue,a0 as Xe,B as $,N as re,a4 as Te,E as w,a3 as v,F as V,r as Ye,o as m,c as x,a as z,u as R,w as E,f as We,b as Ae,H as Fe,d as n,e as ie,t as Le,s as ae,q as T,g as q,h as Me,v as Ge,n as qe}from"./app-864f64ce.js";import{_ as Je,a as Ke}from"./Authenticated-8306e1bd.js";import{s as Qe}from"./simplebar.min-0d13ec8c.js";import{s as De}from"./multiselect-e1fa0468.js";import{T as Ne}from"./TimeAgo-43efdf94.js";import"./XIcon-d99c81f1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-1512b636.js";import"./keyboard-39c9e581.js";import"./use-resolve-button-type-4aed63cd.js";import"./menu-fd4ea28f.js";import"./moment-a9aaa855.js";/**
 * Vue 3 Carousel 0.3.3
 * (c) 2024
 * @license MIT
 */const f={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},je={itemsToShow:{default:f.itemsToShow,type:Number},itemsToScroll:{default:f.itemsToScroll,type:Number},wrapAround:{default:f.wrapAround,type:Boolean},throttle:{default:f.throttle,type:Number},snapAlign:{default:f.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:f.transition,type:Number},breakpoints:{default:f.breakpoints,type:Object},autoplay:{default:f.autoplay,type:Number},pauseAutoplayOnHover:{default:f.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:f.mouseDrag,type:Boolean},touchDrag:{default:f.touchDrag,type:Boolean},dir:{default:f.dir,validator(t){return["rtl","ltr"].includes(t)}},i18n:{default:f.i18n,type:Object},settings:{default(){return{}},type:Object}};function Ze({config:t,slidesCount:e}){const{snapAlign:o,wrapAround:i,itemsToShow:s=1}=t;if(i)return Math.max(e-1,0);let r;switch(o){case"start":r=e-s;break;case"end":r=e-1;break;case"center":case"center-odd":r=e-Math.ceil((s-.5)/2);break;case"center-even":r=e-Math.ceil(s/2);break;default:r=0;break}return Math.max(r,0)}function et({config:t,slidesCount:e}){const{wrapAround:o,snapAlign:i,itemsToShow:s=1}=t;let r=0;if(o||s>e)return r;switch(i){case"start":r=0;break;case"end":r=s-1;break;case"center":case"center-odd":r=Math.floor((s-1)/2);break;case"center-even":r=Math.floor((s-2)/2);break;default:r=0;break}return r}function ce({val:t,max:e,min:o}){return e<o?t:Math.min(Math.max(t,o),e)}function tt({config:t,currentSlide:e,slidesCount:o}){const{snapAlign:i,wrapAround:s,itemsToShow:r=1}=t;let c=e;switch(i){case"center":case"center-odd":c-=(r-1)/2;break;case"center-even":c-=(r-2)/2;break;case"end":c-=r-1;break}return s?c:ce({val:c,max:o-r,min:0})}function Ee(t){return t?t.reduce((e,o)=>{var i;return o.type===V?[...e,...Ee(o.children)]:((i=o.type)===null||i===void 0?void 0:i.name)==="CarouselSlide"?[...e,o]:e},[]):[]}function J({val:t,max:e,min:o=0}){return t>e?J({val:t-(e+1),max:e,min:o}):t<o?J({val:t+(e+1),max:e,min:o}):t}function ot(t,e){let o;return e?function(...i){const s=this;o||(t.apply(s,i),o=!0,setTimeout(()=>o=!1,e))}:t}function st(t,e){let o;return function(...i){o&&clearTimeout(o),o=setTimeout(()=>{t(...i),o=null},e)}}function $e(t="",e={}){return Object.entries(e).reduce((o,[i,s])=>o.replace(`{${i}}`,String(s)),t)}var nt=pe({name:"ARIA",setup(){const t=v("config",L(Object.assign({},f))),e=v("currentSlide",u(0)),o=v("slidesCount",u(0));return()=>w("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},$e(t.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:o.value}))}}),Pe=pe({name:"Carousel",props:je,setup(t,{slots:e,emit:o,expose:i}){var s;const r=u(null),c=u([]),d=u(0),p=u(0),a=L(Object.assign({},f));let _=Object.assign({},f),k;const g=u((s=t.modelValue)!==null&&s!==void 0?s:0),D=u(0),H=u(0),A=u(0),P=u(0);let N,K;C("config",a),C("slidesCount",p),C("currentSlide",g),C("maxSlide",A),C("minSlide",P),C("slideWidth",d);function Q(){k=Object.assign({},t.breakpoints),_=Object.assign(Object.assign(Object.assign({},_),t),{i18n:Object.assign(Object.assign({},_.i18n),t.i18n),breakpoints:void 0}),ge(_)}function U(){if(!k||!Object.keys(k).length)return;const l=Object.keys(k).map(h=>Number(h)).sort((h,S)=>+S-+h);let b=Object.assign({},_);l.some(h=>{const S=window.matchMedia(`(min-width: ${h}px)`).matches;return S&&(b=Object.assign(Object.assign({},b),k[h])),S}),ge(b)}function ge(l){Object.entries(l).forEach(([b,h])=>a[b]=h)}const fe=st(()=>{U(),X(),I()},16);function I(){if(!r.value)return;const l=r.value.getBoundingClientRect();d.value=l.width/a.itemsToShow}function X(){p.value<=0||(H.value=Math.ceil((p.value-1)/2),A.value=Ze({config:a,slidesCount:p.value}),P.value=et({config:a,slidesCount:p.value}),a.wrapAround||(g.value=ce({val:g.value,max:A.value,min:P.value})))}He(()=>{Ue(()=>I()),setTimeout(()=>I(),1e3),U(),be(),window.addEventListener("resize",fe,{passive:!0}),o("init")}),Xe(()=>{K&&clearTimeout(K),N&&clearInterval(N),window.removeEventListener("resize",fe,{passive:!0})});let y=!1;const Y={x:0,y:0},W={x:0,y:0},M=L({x:0,y:0}),F=u(!1),Z=u(!1),ze=()=>{F.value=!0},Re=()=>{F.value=!1};function he(l){["INPUT","TEXTAREA","SELECT"].includes(l.target.tagName)||(y=l.type==="touchstart",y||l.preventDefault(),!(!y&&l.button!==0||j.value)&&(Y.x=y?l.touches[0].clientX:l.clientX,Y.y=y?l.touches[0].clientY:l.clientY,document.addEventListener(y?"touchmove":"mousemove",me,!0),document.addEventListener(y?"touchend":"mouseup",ve,!0)))}const me=ot(l=>{Z.value=!0,W.x=y?l.touches[0].clientX:l.clientX,W.y=y?l.touches[0].clientY:l.clientY;const b=W.x-Y.x,h=W.y-Y.y;M.y=h,M.x=b},a.throttle);function ve(){const l=a.dir==="rtl"?-1:1,b=Math.sign(M.x)*.4,h=Math.round(M.x/d.value+b)*l;if(h&&!y){const S=Ce=>{window.removeEventListener("click",S,!0)};window.addEventListener("click",S,!0)}O(g.value-h),M.x=0,M.y=0,Z.value=!1,document.removeEventListener(y?"touchmove":"mousemove",me,!0),document.removeEventListener(y?"touchend":"mouseup",ve,!0)}function be(){!a.autoplay||a.autoplay<=0||(N=setInterval(()=>{a.pauseAutoplayOnHover&&F.value||G()},a.autoplay))}function xe(){N&&(clearInterval(N),N=null),be()}const j=u(!1);function O(l){const b=a.wrapAround?l:ce({val:l,max:A.value,min:P.value});g.value===b||j.value||(o("slide-start",{slidingToIndex:l,currentSlideIndex:g.value,prevSlideIndex:D.value,slidesCount:p.value}),j.value=!0,D.value=g.value,g.value=b,K=setTimeout(()=>{if(a.wrapAround){const h=J({val:b,max:A.value,min:0});h!==g.value&&(g.value=h,o("loop",{currentSlideIndex:g.value,slidingToIndex:l}))}o("update:modelValue",g.value),o("slide-end",{currentSlideIndex:g.value,prevSlideIndex:D.value,slidesCount:p.value}),j.value=!1,xe()},a.transition))}function G(){O(g.value+a.itemsToScroll)}function ee(){O(g.value-a.itemsToScroll)}const we={slideTo:O,next:G,prev:ee};C("nav",we),C("isSliding",j);const _e=$(()=>tt({config:a,currentSlide:g.value,slidesCount:p.value}));C("slidesToScroll",_e);const Ve=$(()=>{const l=a.dir==="rtl"?-1:1,b=_e.value*d.value*l;return{transform:`translateX(${M.x-b}px)`,transition:`${j.value?a.transition:0}ms`,margin:a.wrapAround?`0 -${p.value*d.value}px`:"",width:"100%"}});function ye(){Q(),U(),X(),I(),xe()}Object.keys(je).forEach(l=>{["modelValue"].includes(l)||re(()=>t[l],ye)}),re(()=>t.modelValue,l=>{l!==g.value&&O(Number(l))}),re(p,X),o("before-init"),Q();const ke={config:a,slidesCount:p,slideWidth:d,next:G,prev:ee,slideTo:O,currentSlide:g,maxSlide:A,minSlide:P,middleSlide:H};i({updateBreakpointsConfigs:U,updateSlidesData:X,updateSlideWidth:I,initDefaultConfigs:Q,restartCarousel:ye,slideTo:O,next:G,prev:ee,nav:we,data:ke});const te=e.default||e.slides,oe=e.addons,Se=L(ke);return()=>{const l=Ee(te==null?void 0:te(Se)),b=(oe==null?void 0:oe(Se))||[];l.forEach((se,ne)=>se.props.index=ne);let h=l;if(a.wrapAround){const se=l.map((le,B)=>Te(le,{index:-l.length+B,isClone:!0,key:`clone-before-${B}`})),ne=l.map((le,B)=>Te(le,{index:l.length+B,isClone:!0,key:`clone-after-${B}`}));h=[...se,...l,...ne]}c.value=l,p.value=Math.max(l.length,1);const S=w("ol",{class:"carousel__track",style:Ve.value,onMousedownCapture:a.mouseDrag?he:null,onTouchstartPassiveCapture:a.touchDrag?he:null},h),Ce=w("div",{class:"carousel__viewport"},S);return w("section",{ref:r,class:{carousel:!0,"is-sliding":j.value,"is-dragging":Z.value,"is-hover":F.value,"carousel--rtl":a.dir==="rtl"},dir:a.dir,"aria-label":a.i18n.ariaGallery,tabindex:"0",onMouseenter:ze,onMouseleave:Re},[Ce,b,w(nt)])}}}),de;(function(t){t.arrowUp="arrowUp",t.arrowDown="arrowDown",t.arrowRight="arrowRight",t.arrowLeft="arrowLeft"})(de||(de={}));const lt={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function rt(t){return t in de}const ue=t=>{const e=v("config",L(Object.assign({},f))),o=String(t.name),i=`icon${o.charAt(0).toUpperCase()+o.slice(1)}`;if(!o||typeof o!="string"||!rt(o))return;const s=lt[o],r=w("path",{d:s}),c=e.i18n[i]||t.title||o,d=w("title",c);return w("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":c},[d,r])};ue.props={name:String,title:String};const Ie=(t,{slots:e,attrs:o})=>{const{next:i,prev:s}=e||{},r=v("config",L(Object.assign({},f))),c=v("maxSlide",u(1)),d=v("minSlide",u(1)),p=v("currentSlide",u(1)),a=v("nav",{}),{dir:_,wrapAround:k,i18n:g}=r,D=_==="rtl",H=w("button",{type:"button",class:["carousel__prev",!k&&p.value<=d.value&&"carousel__prev--disabled",o==null?void 0:o.class],"aria-label":g.ariaPreviousSlide,onClick:a.prev},(s==null?void 0:s())||w(ue,{name:D?"arrowRight":"arrowLeft"})),A=w("button",{type:"button",class:["carousel__next",!k&&p.value>=c.value&&"carousel__next--disabled",o==null?void 0:o.class],"aria-label":g.ariaNextSlide,onClick:a.next},(i==null?void 0:i())||w(ue,{name:D?"arrowLeft":"arrowRight"}));return[H,A]},it=()=>{const t=v("config",L(Object.assign({},f))),e=v("maxSlide",u(1)),o=v("minSlide",u(1)),i=v("currentSlide",u(1)),s=v("nav",{}),r=d=>J({val:i.value,max:e.value,min:0})===d,c=[];for(let d=o.value;d<e.value+1;d++){const p=w("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":r(d)},"aria-label":$e(t.i18n.ariaNavigateToSlide,{slideNumber:d+1}),onClick:()=>s.slideTo(d)}),a=w("li",{class:"carousel__pagination-item",key:d},p);c.push(a)}return w("ol",{class:"carousel__pagination"},c)};var Be=pe({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(t,{slots:e}){const o=v("config",L(Object.assign({},f))),i=v("currentSlide",u(0)),s=v("slidesToScroll",u(0)),r=v("isSliding",u(!1)),c=$(()=>t.index===i.value),d=$(()=>t.index===i.value-1),p=$(()=>t.index===i.value+1),a=$(()=>{const _=Math.floor(s.value),k=Math.ceil(s.value+o.itemsToShow-1);return t.index>=_&&t.index<=k});return()=>{var _;return w("li",{style:{width:`${100/o.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":t.isClone,"carousel__slide--visible":a.value,"carousel__slide--active":c.value,"carousel__slide--prev":d.value,"carousel__slide--next":p.value,"carousel__slide--sliding":r.value},"aria-hidden":!a.value},(_=e.default)===null||_===void 0?void 0:_.call(e,{isActive:c.value,isClone:t.isClone,isPrev:d.value,isNext:p.value,isSliding:r.value,isVisible:a.value}))}}});const at={class:"flex justify-center"},ct={class:"flex-1 max-w-lg"},dt=n("div",{class:"flex items-center space-y-3 bg-white pb-3 pt-2.5 px-4 shadow-md rounded-xl"},[n("h2",{class:"text-lg md:text-2xl mx-1 font-extrabold"},"Stories")],-1),ut={class:"mt-3 flex flex-col space-y-3 bg-white py-3 px-4 shadow-md rounded-xl"},pt={class:"flex flex-row text-sm items-center"},gt={class:"flex justify-between items-center flex-1 font-bold leading-tight select-none"},ft={class:"flex flex-col mx-1"},ht={class:"text-slate-900 md:text-lg font-bold"},mt=n("span",{class:"text-xs font-medium text-slate-500"},"ALFA and Friends Maths",-1),vt={class:"flex items-center"},bt=n("hr",null,null,-1),xt={class:"text-sm text-slate-800"},wt={class:"carousel__item h-full"},_t=["src","onDblclick"],yt={class:"flex items-center space-x-4"},kt={key:0,class:""},St=["onClick"],Ct=n("path",{d:"M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"},null,-1),Tt=[Ct],At=["onClick"],Lt=n("path",{d:"M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"},null,-1),Mt=[Lt],jt={key:1,class:"text-xs font-semibold select-none"},Ot={key:1,class:""},Dt=n("textarea",{class:"bg-white border border-gray-300 p-2 rounded w-full resize-none focus:ring-0 focus:border-2 focus:border-indigo-300 text-sm",rows:"2",placeholder:"Drop a comment..."},null,-1),Nt=n("div",{class:"flex justify-end"},[n("button",{class:"px-4 py-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white rounded"},"Comment")],-1),Et=[Dt,Nt],$t={key:0,class:""},Pt=n("div",{class:"flex flex-col items-center justify-center mt-20"},[n("img",{width:"80",height:"80",src:"https://img.icons8.com/dusk/64/activity-feed.png",alt:"activity-feed"}),n("span",{class:"text-slate-500 text-lg"},"Couldn't find any posts yet.")],-1),It=[Pt],Bt={key:0,class:"flex flex-col justify-center items-start space-y-4"},zt={key:0,class:"w-full"},Rt={class:"overflow-x-auto scrollbar pb-3"},Vt={class:"flex space-x-4"},Ht={class:"relative w-28 h-28"},Ut=["src"],Xt={class:"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50"},Yt=["onClick"],Wt={class:"flex items-center justify-center w-full"},Ft=n("div",{class:"flex flex-col items-center justify-center py-6"},[n("svg",{class:"w-8 h-8 mb-1 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 16"},[n("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})]),n("p",{class:"text-sm text-gray-500 dark:text-gray-400"},[n("span",{class:"font-semibold"},"Click to upload")]),n("span",{class:"text-xs text-center text-slate-500"},[q("Hold "),n("strong",null,"Shift"),q(" or "),n("strong",null,"CTRL"),q(" and click on image to select multiple images")])],-1),Gt=n("input",{id:"dropzone-file",type:"file",class:"hidden",multiple:""},null,-1),qt=[Ft,Gt],Jt={class:"flex w-full"},Kt=n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",class:"h-5 w-5 text-white",fill:"currentColor"},[n("path",{d:"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c10 0 18.8-4.9 24.2-12.5l-99.2-99.2c-14.9-14.9-23.3-35.1-23.3-56.1v-33c-15.9-4.7-32.8-7.2-50.3-7.2H178.3zM384 224c-17.7 0-32 14.3-32 32v82.7c0 17 6.7 33.3 18.7 45.3L478.1 491.3c18.7 18.7 49.1 18.7 67.9 0l73.4-73.4c18.7-18.7 18.7-49.1 0-67.9L512 242.7c-12-12-28.3-18.7-45.3-18.7H384zm24 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"})],-1),Qt=n("span",{class:"text-sm"},"Tags",-1),Zt=[Kt,Qt],eo=["disabled"],to={key:1,class:""},oo={class:"flex items-center mb-2 rounded-t text-xl font-semibold dark:text-white text-slate-800"},so=n("path",{d:"M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z"},null,-1),no=[so],lo=n("h3",{class:"flex-1 text-center text-lg"},"Tag Students",-1),ro=n("hr",{class:"mb-3"},null,-1),io={class:""},Oe=window.URL||window.webkitURL,ao=/^image\/\w+$/,co={components:{simplebar:Qe,Multiselect:De,TimeAgo:Ne,Carousel:Pe,Slide:Be,Pagination:it,Navigation:Ie},data(){return{show_create_post:!1,show_add_tag:!1,loading:{students:!1},student_list:[],form:{caption:"",photos:[],tagged_students:[]}}},methods:{toggleLike(t,e){if(this.isLikedByCurrentStudent(t)){const o=this.$page.props.posts[t].post_likes.findIndex(i=>i.liked_by===this.$page.props.current_active_child.student_id);this.$page.props.posts[t].post_likes.splice(o,1)}else this.$page.props.posts[t].post_likes.push({liked_by:this.$page.props.current_active_child.student_id});Ae.post(route("parent.like_post"),{post_id:e,to_delete:!this.isLikedByCurrentStudent(t)}).then(o=>{console.log(o)})},toggleComment(t){this.posts[t].show_comment=!this.posts[t].show_comment},showCreatePost(){this.show_create_post=!0},showAddTag(){this.show_add_tag=!0},changePhoto({target:t}){const{files:e}=t;e&&e.length>0&&Array.from(e).forEach(i=>{this.read(i,t).then(s=>{this.form.photos.push({name:Date.now()+Math.floor(Math.random()*1e3),url:s.url,file:i})}).catch(this.alert)})},read(t,e){return new Promise((o,i)=>{if(!t){o();return}ao.test(t.type)?Oe?o({loaded:!0,name:t.name,type:t.type,url:Oe.createObjectURL(t)}):alert("Your browser is not supported."):alert("Please select a valid image file.")})},removePhoto(t){this.form.photos.splice(t,1)},findStudents(t){t&&(this.loading.students=!0,Ae.get(route("students.find"),{params:{keyword:t}}).then(e=>{console.log(e),this.student_list=e.data.length>0?e.data:[],this.loading.students=!1}))},post(){this.$inertia.post(route("parent.create_post"),this.form,{preserveState:!1})},isLikedByCurrentStudent(t){return this.$page.props.posts[t].post_likes.some(e=>e.liked_by==this.$page.props.current_active_child.student_id)}}},ko=Object.assign(co,{__name:"Home",setup(t){return(e,o)=>{const i=Ye("debounce");return m(),x(V,null,[z(R(Fe),{title:"Home"}),z(Je,null,{default:E(()=>[n("div",at,[n("div",ct,[dt,(m(!0),x(V,null,ie(e.$page.props.posts,(s,r)=>(m(),x("div",ut,[n("div",pt,[n("div",gt,[n("div",ft,[n("span",ht,Le(s.post_author_name),1),mt]),n("div",vt,[z(Ne,{class:"text-gray-500 font-medium text-xs",datetime:s.post_date},null,8,["datetime"])])])]),bt,n("span",xt,Le(s.post_title),1),s.post_images.length?(m(),ae(R(Pe),{key:0,mouseDrag:s.post_images.length>1,touchDrag:s.post_images.length>1},{addons:E(()=>[s.post_images.length>1?(m(),ae(R(Ie),{key:0})):T("",!0)]),default:E(()=>[(m(!0),x(V,null,ie(s.post_images,(c,d)=>(m(),ae(R(Be),{key:c},{default:E(()=>[n("div",wt,[n("img",{src:"storage/posts/"+c.image_filename,class:"select-none h-full",onDblclick:p=>e.toggleLike(r,s.post_id)},null,40,_t)])]),_:2},1024))),128))]),_:2},1032,["mouseDrag","touchDrag"])):T("",!0),n("div",yt,[e.$page.props.can.create_posts?T("",!0):(m(),x("div",kt,[e.isLikedByCurrentStudent(r)?(m(),x("svg",{key:0,onClick:c=>e.toggleLike(r,s.post_id),xmlns:"http://www.w3.org/2000/svg",class:"inline-block h-6 w-6 text-red-500 cursor-pointer",fill:"currentColor",viewBox:"0 0 512 512"},Tt,8,St)):(m(),x("svg",{key:1,onClick:c=>e.toggleLike(r,s.post_id),xmlns:"http://www.w3.org/2000/svg",class:"inline-block h-6 w-6 text-gray-500 hover:text-red-500 cursor-pointer",fill:"currentColor",viewBox:"0 0 512 512"},Mt,8,At))])),e.isLikedByCurrentStudent(r)&&!e.$page.props.can.create_posts?(m(),x("span",jt,"You liked this")):T("",!0)]),s.show_comment?(m(),x("div",Ot,Et)):T("",!0)]))),256)),e.$page.props.posts.length?T("",!0):(m(),x("div",$t,It))])])]),_:1}),z(Ke,{isOpen:e.show_create_post,onClose:o[7]||(o[7]=s=>this.show_create_post=!1)},We({default:E(()=>[e.show_add_tag?T("",!0):(m(),x("div",Bt,[Me(n("textarea",{class:"bg-white border border-gray-300 p-2 rounded w-full resize-none focus:ring-0 focus:border-2 focus:border-indigo-300 text-sm",rows:"3",placeholder:"What's happening today?","onUpdate:modelValue":o[0]||(o[0]=s=>e.form.caption=s)},null,512),[[Ge,e.form.caption]]),e.form.photos.length?(m(),x("div",zt,[n("div",Rt,[n("div",Vt,[(m(!0),x(V,null,ie(e.form.photos,(s,r)=>(m(),x("div",{class:"relative",key:r},[n("div",Ht,[n("img",{src:s.url,class:"w-full h-full"},null,8,Ut),n("div",Xt,[n("button",{class:"text-xs py-1 px-2 rounded text-red-500 font-semibold bg-white",onClick:c=>e.removePhoto(r)}," Delete ",8,Yt)])])]))),128))])])])):T("",!0),n("div",Wt,[n("label",{for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",onChange:o[1]||(o[1]=(...s)=>e.changePhoto&&e.changePhoto(...s))},qt,32)]),n("div",Jt,[n("div",{class:"flex space-x-1 items-center text-white bg-blue-600 py-2 px-3 rounded cursor-pointer",onClick:o[2]||(o[2]=(...s)=>e.showAddTag&&e.showAddTag(...s))},Zt)]),n("button",{type:"button",class:qe(["text-white font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center",(e.form.photos.length||e.form.caption)&&e.form.tagged_students.length?"bg-indigo-600 hover:bg-indigo-700":"bg-indigo-400 cursor-not-allowed"]),disabled:(!e.form.caption||!e.form.photos.length)&&!e.form.tagged_students,onClick:o[3]||(o[3]=(...s)=>e.post&&e.post(...s))},"Post",10,eo),n("button",{type:"button",class:"text-white bg-gray-400 hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center",onClick:o[4]||(o[4]=s=>e.show_create_post=!1)},"Cancel")])),e.show_add_tag?(m(),x("div",to,[n("div",oo,[(m(),x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"h-5 w-5 cursor-pointer",fill:"currentColor",onClick:o[5]||(o[5]=s=>e.show_add_tag=!1)},no)),lo]),ro,n("div",io,[Me(z(R(De),{mode:"tags",onOpen:e.showAddTag,modelValue:e.form.tagged_students,"onUpdate:modelValue":o[6]||(o[6]=s=>e.form.tagged_students=s),loading:e.loading.students,options:e.student_list,valueProp:"id",placeholder:"Search for students",label:"name",noOptionsText:"No items",noResultsText:"No items","show-options":!1,closeOnSelect:!1,canDeselect:!1,searchable:!0,minChars:1,classes:{container:"relative mx-auto w-full flex items-center justify-end box-border rounded border-gray-200 shadow-sm cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none mt-0",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"ring-0 ring-opacity-30",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5 rtl:pl-0 rtl:pr-3.5 h-10",tags:"flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2 rtl:pl-0 rtl:pr-2",tag:"bg-indigo-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center rtl:pl-0 rtl:pr-2 rtl:mr-0 rtl:ml-1",tagDisabled:"pr-2 opacity-50 rtl:pl-2",tagWrapper:"overflow-hidden overflow-ellipsis",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"multiselect-tag-remove-icon bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60 hover:scale-105",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500 rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5 text-sm",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none rtl:mr-0 rtl:ml-3.5",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 rtl:pr-0 rtl:pl-3.5",clearIcon:"multiselect-tag-remove-icon w-10 h-4 py-px box-content inline-block",dropdown:"max-h-44 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b scrollbar",dropdownTop:"-translate-y-full top-px bottom-auto rounded-b-none rounded-t ",dropdownHidden:"",options:"flex flex-col p-0 m-0 list-none",optionsTop:"",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-indigo-100 bg-indigo-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left text-sm",noResults:"py-2 px-3 text-gray-600 bg-white text-left text-sm",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["onOpen","modelValue","loading","options"]),[[i,e.findStudents,"1s"]])])])):T("",!0)]),_:2},[e.show_add_tag?void 0:{name:"header",fn:E(()=>[q("Create Post")]),key:"0"}]),1032,["isOpen"])],64)}}});export{ko as default};
