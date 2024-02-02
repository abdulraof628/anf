import{r as L,o as f,c as x,a as g,u as h,w as c,F as C,H as S,L as I,b as B,j as O,d as s,p as y,h as A,v as M,t as d,g as m,n as R,e as H,q as v,W as U}from"./app-2fbad965.js";import{B as N}from"./Authenticated-499a0b94.js";import{B as w}from"./Button-8c97b1d0.js";import{r as j}from"./PencilIcon-432c82f7.js";import{r as z}from"./SearchIcon-b908a6fa.js";import{r as q}from"./TrashIcon-58cdd129.js";import{C as P}from"./ConfirmationModal-17386d3a.js";import{P as V}from"./Pagination-782c8536.js";import{h as W}from"./moment-fbc5633a.js";import{s as _}from"./multiselect-a5ec7b3c.js";import{Z as E}from"./vue-datepicker-37101e15.js";import{M as T}from"./Modal-39f96d77.js";import{b as F}from"./toggle-050c0d2d.js";import"./ApplicationLogo-b842f7dc.js";import"./XIcon-d4b58fa0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-280521bb.js";import"./VueFinalModal.esm-cd69b3f2.js";class Y{constructor(e){this.standards={strict:"strict",loose:"loose",html5:"html5"},this.previewBody=null,this.close=null,this.previewBodyUtilPrintBtn=null,this.selectArray=[],this.counter=0,this.settings={standard:this.standards.html5},Object.assign(this.settings,e),this.init()}init(){this.counter++,this.settings.id=`printArea_${this.counter}`;let e="";this.settings.url&&!this.settings.asyncUrl&&(e=this.settings.url);let r=this;if(this.settings.asyncUrl)return void r.settings.asyncUrl(function(n){let t=r.getPrintWindow(n);r.settings.preview?r.previewIfrmaeLoad():r.print(t)},r.settings.vue);let o=this.getPrintWindow(e);this.settings.url||this.write(o.doc),this.settings.preview?this.previewIfrmaeLoad():this.print(o)}addEvent(e,r,o){e.addEventListener?e.addEventListener(r,o,!1):e.attachEvent?e.attachEvent("on"+r,o):e["on"+r]=o}previewIfrmaeLoad(){let e=document.getElementById("vue-pirnt-nb-previewBox");if(e){let r=this,o=e.querySelector("iframe");this.settings.previewBeforeOpenCallback(),this.addEvent(o,"load",function(){r.previewBoxShow(),r.removeCanvasImg(),r.settings.previewOpenCallback()}),this.addEvent(e.querySelector(".previewBodyUtilPrintBtn"),"click",function(){r.settings.beforeOpenCallback(),r.settings.openCallback(),o.contentWindow.print(),r.settings.closeCallback()})}}removeCanvasImg(){let e=this;try{if(e.elsdom){let r=e.elsdom.querySelectorAll(".canvasImg");for(let o=0;o<r.length;o++)r[o].remove()}}catch(r){console.log(r)}}print(e){var r=this;let o=document.getElementById(this.settings.id)||e.f,n=document.getElementById(this.settings.id).contentWindow||e.f.contentWindow;r.settings.beforeOpenCallback(),r.addEvent(o,"load",function(){n.focus(),r.settings.openCallback(),n.print(),o.remove(),r.settings.closeCallback(),r.removeCanvasImg()})}write(e){e.open(),e.write(`${this.docType()}<html>${this.getHead()}${this.getBody()}</html>`),e.close()}docType(){return this.settings.standard===this.standards.html5?"<!DOCTYPE html>":`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01${this.settings.standard===this.standards.loose?" Transitional":""}//EN" "http://www.w3.org/TR/html4/${this.settings.standard===this.standards.loose?"loose":"strict"}.dtd">`}getHead(){let e="",r="",o="";this.settings.extraHead&&this.settings.extraHead.replace(/([^,]+)/g,t=>{e+=t}),[].forEach.call(document.querySelectorAll("link"),function(t){t.href.indexOf(".css")>=0&&(r+=`<link type="text/css" rel="stylesheet" href="${t.href}" >`)});let n=document.styleSheets;if(n&&n.length>0)for(let t=0;t<n.length;t++)try{if(n[t].cssRules||n[t].rules){let l=n[t].cssRules||n[t].rules;for(let a=0;a<l.length;a++)o+=l[a].cssText}}catch(l){console.log(n[t].href+l)}return this.settings.extraCss&&this.settings.extraCss.replace(/([^,\s]+)/g,t=>{r+=`<link type="text/css" rel="stylesheet" href="${t}">`}),`<head><title>${this.settings.popTitle}</title>${e}${r}<style type="text/css">${o}</style></head>`}getBody(){let e=this.settings.ids;return e=e.replace(new RegExp("#","g"),""),this.elsdom=this.beforeHanler(document.getElementById(e)),"<body>"+this.getFormData(this.elsdom).outerHTML+"</body>"}beforeHanler(e){let r=e.querySelectorAll("canvas");for(let o=0;o<r.length;o++)if(!r[o].style.display){let n=r[o].parentNode,t=r[o].toDataURL("image/png"),l=new Image;l.className="canvasImg",l.style.display="none",l.src=t,n.appendChild(l)}return e}getFormData(e){let r=e.cloneNode(!0),o=r.querySelectorAll("input,select,textarea"),n=r.querySelectorAll(".canvasImg,canvas"),t=-1;for(let l=0;l<n.length;l++){let a=n[l].parentNode,i=n[l];i.tagName.toLowerCase()==="canvas"?a.removeChild(i):i.style.display="block"}for(let l=0;l<o.length;l++){let a=o[l],i=a.getAttribute("type"),u=o[l];if(i||(i=a.tagName==="SELECT"?"select":a.tagName==="TEXTAREA"?"textarea":""),a.tagName==="INPUT")i==="radio"||i==="checkbox"?a.checked&&u.setAttribute("checked",a.checked):(u.value=a.value,u.setAttribute("value",a.value));else if(i==="select"){t++;for(let b=0;b<e.querySelectorAll("select").length;b++){let k=e.querySelectorAll("select")[b];if(!k.getAttribute("newbs")&&k.setAttribute("newbs",b),k.getAttribute("newbs")==t){let $=e.querySelectorAll("select")[t].selectedIndex;a.options[$].setAttribute("selected",!0)}}}else u.innerHTML=a.value,u.setAttribute("html",a.value)}return r}getPrintWindow(e){var r=this.Iframe(e);return{f:r,win:r.contentWindow||r,doc:r.doc}}previewBoxShow(){let e=document.getElementById("vue-pirnt-nb-previewBox");e&&(document.querySelector("html").setAttribute("style","overflow: hidden"),e.style.display="block")}previewBoxHide(){let e=document.getElementById("vue-pirnt-nb-previewBox");e&&(document.querySelector("html").setAttribute("style","overflow: visible;"),e.querySelector("iframe")&&e.querySelector("iframe").remove(),e.style.display="none")}previewBox(){let e=document.getElementById("vue-pirnt-nb-previewBox"),r="previewBody";if(e)return e.querySelector("iframe")&&e.querySelector("iframe").remove(),{close:e.querySelector(".previewClose"),previewBody:e.querySelector(".previewBody")};let o=document.createElement("div");o.setAttribute("id","vue-pirnt-nb-previewBox"),o.setAttribute("style","position: fixed;top: 0px;left: 0px;width: 100%;height: 100%;background: white;display:none"),o.style.zIndex=this.settings.zIndex;let n=document.createElement("div");n.setAttribute("class","previewHeader"),n.setAttribute("style","padding: 5px 20px;"),n.innerHTML=this.settings.previewTitle,o.appendChild(n),this.close=document.createElement("div");let t=this.close;t.setAttribute("class","previewClose"),t.setAttribute("style","position: absolute;top: 5px;right: 20px;width: 25px;height: 20px;cursor: pointer;");let l=document.createElement("div"),a=document.createElement("div");l.setAttribute("class","closeBefore"),l.setAttribute("style","position: absolute;width: 3px;height: 100%;background: #040404;transform: rotate(45deg); top: 0px;left: 50%;"),a.setAttribute("class","closeAfter"),a.setAttribute("style","position: absolute;width: 3px;height: 100%;background: #040404;transform: rotate(-45deg); top: 0px;left: 50%;"),t.appendChild(l),t.appendChild(a),n.appendChild(t),this.previewBody=document.createElement("div");let i=this.previewBody;i.setAttribute("class",r),i.setAttribute("style","display: flex;flex-direction: column; height: 100%;"),o.appendChild(i);let u=document.createElement("div");u.setAttribute("class","previewBodyUtil"),u.setAttribute("style","height: 32px;background: #474747;position: relative;"),i.appendChild(u),this.previewBodyUtilPrintBtn=document.createElement("div");let b=this.previewBodyUtilPrintBtn;return b.setAttribute("class","previewBodyUtilPrintBtn"),b.innerHTML=this.settings.previewPrintBtnLabel,b.setAttribute("style","position: absolute;padding: 2px 10px;margin-top: 3px;left: 24px;font-size: 14px;color: white;cursor: pointer;background-color: rgba(0,0,0,.12);background-image: linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,0));background-clip: padding-box;border: 1px solid rgba(0,0,0,.35);border-color: rgba(0,0,0,.32) rgba(0,0,0,.38) rgba(0,0,0,.42);box-shadow: inset 0 1px 0 hsla(0,0%,100%,.05), inset 0 0 1px hsla(0,0%,100%,.15), 0 1px 0 hsla(0,0%,100%,.05);"),u.appendChild(b),document.body.appendChild(o),{close:this.close,previewBody:this.previewBody}}iframeBox(e,r){let o=document.createElement("iframe");return o.style.border="0px",o.style.position="absolute",o.style.width="0px",o.style.height="0px",o.style.right="0px",o.style.top="0px",o.setAttribute("id",e),o.setAttribute("src",r),o}Iframe(e){let r=this.settings.id;e=e||new Date().getTime();let o=this,n=this.iframeBox(r,e);try{if(this.settings.preview){n.setAttribute("style","border: 0px;flex: 1;");let t=this.previewBox(),l=t.previewBody,a=t.close;l.appendChild(n),this.addEvent(a,"click",function(){o.previewBoxHide()})}else document.body.appendChild(n);n.doc=null,n.doc=n.contentDocument?n.contentDocument:n.contentWindow?n.contentWindow.document:n.document}catch(t){throw new Error(t+". iframes may not be supported in this browser.")}if(n.doc==null)throw new Error("Cannot find document.");return n}}var D={directiveName:"print",mounted(p,e,r){let o=e.instance,n="";var t,l,a;l="click",a=()=>{if(typeof e.value=="string")n=e.value;else{if(typeof e.value!="object"||!e.value.id)return void window.print();{n=e.value.id;let u=n.replace(new RegExp("#","g"),"");document.getElementById(u)||(console.log("id in Error"),n="")}}i()},(t=p).addEventListener?t.addEventListener(l,a,!1):t.attachEvent?t.attachEvent("on"+l,a):t["on"+l]=a;const i=()=>{new Y({ids:n,vue:o,url:e.value.url,standard:"",extraHead:e.value.extraHead,extraCss:e.value.extraCss,zIndex:e.value.zIndex||20002,previewTitle:e.value.previewTitle||"打印预览",previewPrintBtnLabel:e.value.previewPrintBtnLabel||"打印",popTitle:e.value.popTitle,preview:e.value.preview||!1,asyncUrl:e.value.asyncUrl,previewBeforeOpenCallback(){e.value.previewBeforeOpenCallback&&e.value.previewBeforeOpenCallback(o)},previewOpenCallback(){e.value.previewOpenCallback&&e.value.previewOpenCallback(o)},openCallback(){e.value.openCallback&&e.value.openCallback(o)},closeCallback(){e.value.closeCallback&&e.value.closeCallback(o)},beforeOpenCallback(){e.value.beforeOpenCallback&&e.value.beforeOpenCallback(o)}})}},install:function(p){p.directive("print",D)}};const Z={class:"py-4 px-4"},G={class:"flex justify-end"},X=s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"currentColor",viewBox:"0 0 512 512"},[s("path",{d:"M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"})],-1),J=s("span",null,"Settings",-1),K=s("hr",{class:"my-3 border border-dashed border-gray-400"},null,-1),Q={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mb-3"},ee={class:"relative w-full"},te=s("svg",{class:"absolute top-2.5 left-3 h-5 w-5 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[s("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),re={class:"w-full"},oe={class:"w-full"},se={class:"multiselect-single-label"},ne={class:"w-full"},le={class:"multiselect-single-label"},ae={class:"w-full"},ie={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},pe={class:"min-w-full divide-y divide-gray-200"},de=s("thead",{class:"bg-gray-300"},[s("tr",null,[s("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),s("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Name"),s("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/12"},"Centre"),s("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/12"},"Month / Year"),s("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Total Present"),s("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Total Absent"),s("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),ce={class:"bg-white divide-y divide-gray-200"},ue={key:0},ge=s("td",{class:"text-center",colspan:"10"},[s("div",{class:"p-3"}," No Record Found! ")],-1),be=[ge],fe={class:"px-6 py-4 whitespace-nowrap"},he={class:"text-sm font-medium text-gray-700"},me={class:"px-6 py-4 whitespace-nowrap"},xe={class:"flex flex-col space-y-1 text-sm text-gray-900"},ye={class:"font-semibold"},we={class:"flex items-center text-sm space-x-2"},ve={class:"text-xs px-2 py-1 border text-indigo-700 font-semibold border-indigo-500 rounded bg-indigo-200"},_e={class:"text-xs px-2 py-1 border text-blue-700 font-semibold border-blue-500 rounded bg-blue-200"},ke={class:"px-6 py-4 whitespace-nowrap"},Ce={class:"text-sm font-medium text-gray-900"},Be={class:"px-6 py-4 whitespace-nowrap"},Le={class:"text-sm font-medium text-gray-900"},Ae={class:"px-6 py-4 whitespace-nowrap"},Se={class:"text-sm font-medium text-gray-900"},Pe={class:"px-6 py-4 whitespace-nowrap"},Ee={class:"text-sm font-medium text-gray-900"},Te={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},De={class:"flex justify-center space-x-2"},$e={class:"p-6 overflow-y-auto no-scrollbar"},Ie={class:"flex justify-center"},Oe={class:"flex justify-between space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},Me={components:{SearchIcon:z,TrashIcon:q,PencilIcon:j,Head:S,Link:I,ConfirmationModal:P,Multiselect:_,Datepicker:E,Modal:T,Toggle:F},data(){return{component:{file:null,data:""},generate:{id:"",running:!1},printing:!1,show_progress_report:!1,show_create_progress_report:!1,isOpen:!1,confirmationData:"",confirmationRoute:"",open_modal:!1,params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?this.$page.props.filter.centre_id:"",programme_id:this.$page.props.filter.programme_id?this.$page.props.filter.programme_id:"",date:this.$page.props.filter.date?this.$page.props.filter.date:{month:new Date().getMonth(),year:new Date().getFullYear()},programme_level:this.$page.props.filter.programme_level?this.$page.props.filter.programme_level:""},form:{create_bulk:!1,student_id:"",student_fee_id:"",date:"",from_date:"",to_date:""},list:{students:[],student_fees:[]},loading:{students:!1,student_fees:!1},form_error:{student_id:"",student_fee_id:""}}},watch:{"params.date":{handler(){this.search()},deep:!0}},methods:{viewProgressReport(p){this.$inertia.get(this.route("progress_report.details"),{progress_report_id:p},{})},showProgressReport(p,e){this.generate.running||(this.generate.running=!0,B.get(route("progress_report.full_reports"),{responseType:"blob",params:{progress_report_id:p,student_fee:e}}).then(r=>{const o=new Blob([r.data],{type:"application/pdf"}),n=URL.createObjectURL(o);window.open(n,"_blank"),this.generate.running=!1}).catch(r=>{console.error("Error fetching PDF:",r),this.generate.running=!1}))},search(){this.$inertia.get(this.route("progress_report"),this.params,{replace:!0,preserveState:!0})},showCreateProgressReport(){this.show_create_progress_report=!0},findStudents(p){O.debounce(e=>"400ms")(10),p&&(this.loading.students=!0,B.get(route("students.find"),{params:{keyword:p}}).then(e=>{this.list.students=e.data,this.loading.students=!1}))},findStudentFees(){this.loading.student_fees=!0,B.get(route("students.fees",this.form.student_id)).then(p=>{this.list.student_fees=p.data,this.loading.student_fees=!1})},createProgressReport(){this.$inertia.post(route("progress_report.create"),this.form)}},directives:{print:D}},tt=Object.assign(Me,{__name:"Index",setup(p){return(e,r)=>{const o=L("debounce"),n=L("print");return f(),x(C,null,[g(h(S),{title:"Progress Report"}),g(N,null,{header:c(()=>[]),default:c(()=>[s("div",Z,[e.$page.props.can.view_progress_report_settings?(f(),x(C,{key:0},[s("div",G,[g(w,{class:"py-2 px-4 space-x-2",route:e.route("progress_report.settings")},{default:c(()=>[X,J]),_:1},8,["route"])]),K],64)):y("",!0),s("div",Q,[s("div",ee,[te,A(s("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md","onUpdate:modelValue":r[0]||(r[0]=t=>e.params.search=t)},null,512),[[o,e.search,"800ms"],[M,e.params.search]])]),s("div",re,[g(h(_),{onSelect:e.search,modelValue:e.params.centre_id,"onUpdate:modelValue":r[1]||(r[1]=t=>e.params.centre_id=t),valueProp:"ID",appendNewOption:!1,searchable:!0,options:e.$page.props.allowed_centres,clearOnSelect:!0,canClear:!1,canDeselect:!1,trackBy:"label",label:"label",placeholder:"Centre",classes:{container:"relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},null,8,["onSelect","modelValue","options"])]),s("div",oe,[g(h(_),{onSelect:e.search,onDeselect:e.search,modelValue:e.params.programme_id,"onUpdate:modelValue":r[2]||(r[2]=t=>e.params.programme_id=t),valueProp:"id",appendNewOption:!1,searchable:!0,options:e.$page.props.programmes,clearOnSelect:!0,canClear:!1,canDeselect:!0,trackBy:"name",label:"name",placeholder:"All Programmes",classes:{container:"relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},{singlelabel:c(({value:t})=>[s("div",se,d(t.name),1)]),option:c(({option:t})=>[m(d(t.name)+" ("+d(t.country_name)+") ",1)]),_:1},8,["onSelect","onDeselect","modelValue","options"])]),s("div",ne,[g(h(_),{onSelect:e.search,onDeselect:e.search,modelValue:e.params.programme_level,"onUpdate:modelValue":r[3]||(r[3]=t=>e.params.programme_level=t),valueProp:"level",appendNewOption:!1,searchable:!0,options:e.$page.props.levels,clearOnSelect:!1,canClear:!1,canDeselect:!0,trackBy:"level",label:"level",placeholder:"All Levels",classes:{container:"relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},{singlelabel:c(({value:t})=>[s("div",le," Level "+d(t.level),1)]),option:c(({option:t})=>[m(" Level "+d(t.level),1)]),_:1},8,["onSelect","onDeselect","modelValue","options"])]),s("div",ae,[g(h(E),{class:R("w-full rounded-lg shadow-sm"),"input-class-name":"progress-report-date-picker focus:ring-0",modelValue:e.params.date,"onUpdate:modelValue":r[4]||(r[4]=t=>e.params.date=t),format:"MMMM yyyy","month-picker":!0,"auto-apply":!0,placeholder:"Month / Year"},null,8,["modelValue"])])]),s("div",ie,[s("table",pe,[de,s("tbody",ce,[e.$page.props.progress_reports.data.length?y("",!0):(f(),x("tr",ue,be)),(f(!0),x(C,null,H(e.$page.props.progress_reports.data,(t,l)=>(f(),x("tr",{class:"hover:bg-gray-200",key:t.report_id},[s("td",fe,[s("div",he,d(++l),1)]),s("td",me,[s("div",xe,[s("span",ye,d(t.student_name),1),s("div",we,[s("div",ve,d(t.programme_name),1),s("div",_e," Level "+d(t.programme_level),1)])])]),s("td",ke,[s("div",Ce,d(t.centre_name),1)]),s("td",Be,[s("div",Le,d(h(W)(t.month).format("MMMM Y")),1)]),s("td",Ae,[s("div",Se,d(t.total_present+"/"+t.total_class),1)]),s("td",Pe,[s("div",Ee,d(t.total_absent+"/"+t.total_class),1)]),s("td",Te,[s("div",De,[e.$page.props.can.view_progress_report?(f(),v(w,{key:0,buttonType:"blue",onClick:a=>e.viewProgressReport(t.progress_report_id)},{default:c(()=>[m("View Details")]),_:2},1032,["onClick"])):y("",!0),e.$page.props.can.view_progress_report?(f(),v(w,{key:1,class:"py-1 px-2",onClick:a=>e.showProgressReport(t.progress_report_id,t.student_fee)},{default:c(()=>[m(d(e.generate.id==t.progress_report_id&&e.generate.running?"Generating...":"Show / Print"),1)]),_:2},1032,["onClick"])):y("",!0)])])]))),128))])]),g(V,{page_data:e.$page.props.progress_reports,params:e.params},null,8,["page_data","params"])])]),g(P,{show:e.isOpen,onClose:r[5]||(r[5]=t=>e.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Artwork",confirmationText:"Are you sure want to delete this artwork?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:e.confirmationRoute,confirmationData:e.confirmationData},null,8,["show","confirmationRoute","confirmationData"]),g(T,{showModal:e.show_progress_report,modalType:"lg",onHideModal:r[7]||(r[7]=t=>e.show_progress_report=!1)},{content:c(()=>[s("div",$e,[s("div",Ie,[e.component.file?(f(),v(U(e.component.file),{key:0,data:e.component.data},null,8,["data"])):y("",!0)])])]),footer:c(()=>[s("div",Oe,[A((f(),v(w,{buttonType:"info"},{default:c(()=>[m("Print")]),_:1})),[[n,"#progress_report"]]),g(w,{buttonType:"gray",onClick:r[6]||(r[6]=t=>e.show_progress_report=!1)},{default:c(()=>[m("Close")]),_:1})])]),_:1},8,["showModal"])]),_:1})],64)}}});export{tt as default};
