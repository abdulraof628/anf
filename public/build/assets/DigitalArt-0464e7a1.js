import{o as i,c as a,a as d,u as m,w as l,F as h,H as D,L as T,b as _,d as e,l as V,q as w,e as y,t as c,n as k,g as x,i as j,h as C,C as M,v as L,m as B}from"./app-6f86c80f.js";import{B as A}from"./Authenticated-ab1eb90a.js";import{B as v}from"./Button-df280131.js";import N from"./StudentInformation-b8b3dd19.js";import{Z as $}from"./vue-datepicker-e01a7d74.js";import{M as P}from"./Modal-c3384ab9.js";import{h as R}from"./moment-a9aaa855.js";import{s as b}from"./multiselect-3bd6966c.js";import U from"./FeedbackSummary-9ee89a0e.js";import"./ApplicationLogo-b3712262.js";import"./XIcon-0d28af2b.js";import"./vue3-perfect-scrollbar-5488d579.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VueFinalModal.esm-e3baa723.js";const z={class:"md:grid md:grid-cols-2"},I={class:"md:mt-0 md:col-span-2"},H={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},Z={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},E={class:"sm:row-span-3"},F={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},J={class:"sm:row-span-3"},q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},Y=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800 self-end"},"Progress Report Listing"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),G={class:"mb-4"},K={class:"overflow-x-auto"},Q={class:"table-auto min-w-full divide-y divide-gray-200"},W=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Date"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),X={class:"bg-white divide-y divide-gray-200"},ee={key:0},te=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),oe=[te],se={class:"px-4 py-2 whitespace-nowrap"},re={class:"text-sm font-medium text-gray-700"},ie={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},ae={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},de={class:"flex items-center justify-between py-3 px-4 border-b rounded-t font-semibold"},ne=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Update Progress Report ",-1),le=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ce=[le],pe={class:"p-6 overflow-y-auto no-scrollbar"},ue={class:"grid grid-rows-1"},me={class:"grid grid-cols-2 gap-4"},ge={class:"mb-3"},he=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Date ",-1),be={class:"mt-1 flex rounded-md.shadow-sm"},fe=e("div",{class:"grid grid-cols-1"},[e("hr",{class:"mb-10 mt-5 border border-dashed border-gray-400"})],-1),_e={class:"grid grid-cols-2 gap-4"},ye={class:"mb-3"},xe=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Theme ",-1),ve={class:"mt-1 flex rounded-md.shadow-sm"},we={class:"mb-3"},ke=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Lesson ",-1),Ce={class:"mt-1 flex rounded-md.shadow-sm"},Se={class:"grid grid-cols-1 gap-4"},Oe={class:"mb-3"},De=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Activity ",-1),$e={class:"mt-1 flex rounded-md.shadow-sm"},Pe={class:"grid grid-cols-12 gap-4"},Te={class:"col-span-11"},Ve={class:"mb-3"},je=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Learning Outcome ",-1),Me={class:"mt-1 flex rounded-md.shadow-sm"},Le={class:"col-span-1 self-end"},Be={class:"mb-3"},Ae=e("label",{for:"",class:"block text-sm font-bold text-gray-700"},null,-1),Ne={class:"mt-1 flex rounded-md.shadow-sm"},Re={class:"flex items-center"},Ue={key:0,"aria-hidden":"true",class:"w-4 h-4 text-white animate-spin fill-indigo-600",viewBox:"0 0 100 101",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},ze=e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),Ie=e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),He=[ze,Ie],Ze={class:"grid grid-cols-1 py-3"},Ee=e("div",{class:"mb-3"},[e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Objectives ")],-1),Fe={key:0,class:"grid grid-cols-1 divide-y divide-neutral-200 border-x border-t border-b mb-3"},Je=e("div",{class:"p-3 bg-gray-50"},"No objectives found.",-1),qe=[Je],Ye={key:1,class:"grid grid-cols-1 divide-y divide-gray-400 divide-dashed border-x border-t border-b border-gray-300 mb-3"},Ge={key:0,class:"p-3 bg-gray-50"},Ke={class:"p-5 bg-white hover:bg-indigo-50 divide-y"},Qe={class:"group space-y-4"},We={class:"flex justify-between items-center font-medium cursor-pointer list-none"},Xe={class:"space-y-2 ml-2 text-sm"},et={class:"flex space-x-4 items-center justify-between"},tt={class:"text-slate-700 font-bold font-sans"},ot=["onClick"],st=e("div",{class:"border border-b-black border-dashed"},null,-1),rt={class:"flex space-x-2 pt-2"},it={class:"focus:outline-none text-[12px] bg-indigo-100 text-indigo-700 border border-indigo-500 rounded font-medium py-1 px-2 select-none"},at={class:"focus:outline-none text-[12px] bg-gray-100 text-gray-700 border border-gray-500 rounded font-medium py-1 px-2 select-none"},dt={class:"flex"},nt={class:"focus:outline-none text-[14px] text-gray-700 font-medium py-1 select-none"},lt=e("span",{class:"transition group-open:rotate-180"},[e("svg",{fill:"none",height:"24","shape-rendering":"geometricPrecision",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",width:"24"},[e("path",{d:"M6 9l6 6 6-6"})])],-1),ct={class:"text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg divide-y"},pt={class:"w-full"},ut={class:"flex items-center pl-3"},mt=["id","value","onUpdate:modelValue"],gt=["for"],ht=e("div",{class:"grid grid-cols-1"},[e("hr",{class:"mb-8 mt-8 border border-dashed border-gray-400"})],-1),bt={class:"grid grid-cols-1"},ft={class:"mb-3"},_t=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Comments ",-1),yt={class:"mt-1 flex rounded-md.shadow-sm"},xt={class:"grid grid-cols-2 gap-4"},vt={class:"mb-3"},wt=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Status ",-1),kt={class:"mt-1 flex rounded-md.shadow-sm"},Ct=["value"],St={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},Ot={components:{Head:D,Link:T,Datepicker:$,Modal:P,Multiselect:b},data(){return{show_progress_report:!1,searching:!1,progress_report_list:{},disabled:{themes:!0,lessons:!0,activities:!0,outcomes:!0},options:{themes:[],lessons:[],activities:[],outcomes:[],objectives:[]},loading:{themes:!1,lessons:!1,activities:!1,outcomes:!1},search:{theme_id:"",lesson_id:"",activity_id:"",outcome_id:""},form:{date:"",report_data:[],comments:"",attendance_status:""}}},methods:{viewProgressReport(r){this.clearSearch(),this.form.report_id=this.$page.props.progress_reports[r].id,this.form.date=this.$page.props.progress_reports[r].date,this.form.report_data=JSON.parse(this.$page.props.progress_reports[r].report_data)?JSON.parse(this.$page.props.progress_reports[r].report_data):[],this.form.attendance_status=this.$page.props.progress_reports[r].attendance_status,this.form.comments=this.$page.props.progress_reports[r].comments,this.show_progress_report=!0},updateProgressReport(){this.$inertia.post(route("progress_report.store"),this.form,{onBefore:r=>{},preserveScroll:!0,preserveState:!1})},getLessons(r){this.loading.lessons=!0,this.disabled.lessons=!0,this.disabled.activities=!0,this.disabled.outcomes=!0,this.options.lessons=[],this.options.activities=[],this.options.outcomes=[],this.search.lesson_id="",this.search.activity_id="",this.search.outcome_id="",_.get(route("progress_report.get_art_lessons",r)).then(t=>{this.options.lessons=t.data,this.disabled.lessons=!1,this.loading.lessons=!1})},getActivity(r){this.loading.activities=!0,this.disabled.activities=!0,this.disabled.outcomes=!0,this.options.activities=[],this.options.outcomes=[],this.search.activity_id="",this.search.outcome_id="",_.get(route("progress_report.get_art_activities",r)).then(t=>{this.options.activities=t.data,this.disabled.activities=!1,this.loading.activities=!1})},getOutcomes(r){this.loading.outcomes=!0,this.disabled.outcomes=!0,this.options.outcomes=[],this.search.outcome_id="",_.get(route("progress_report.get_art_learning_outcomes",r)).then(t=>{this.options.outcomes=t.data,this.disabled.outcomes=!1,this.loading.outcomes=!1})},addItem(){this.searching||this.search.theme_id&&this.search.lesson_id&&this.search.activity_id&&this.search.outcome_id&&(this.form.report_data.some(t=>t.outcome_id===this.search.outcome_id)?alert("Item exists!"):(this.searching=!0,_.get(route("progress_report.get_art_objectives",this.search.outcome_id)).then(t=>{var g,f,S,O;const s={theme_id:this.search.theme_id,theme_name:(g=this.$page.props.art_themes.find(n=>n.id===this.search.theme_id))==null?void 0:g.name,lesson_id:this.search.lesson_id,lesson_name:(f=this.options.lessons.find(n=>n.id===this.search.lesson_id))==null?void 0:f.name,activity_id:this.search.activity_id,activity_name:(S=this.options.activities.find(n=>n.id===this.search.activity_id))==null?void 0:S.name,outcome_id:this.search.outcome_id,outcome_name:(O=this.options.outcomes.find(n=>n.id===this.search.outcome_id))==null?void 0:O.name,objectives:[]},o=this.form.report_data.length;this.form.report_data.push(s);const p=o,u=this.form.report_data[p];t.data.forEach(n=>{u.objectives.push({id:n.id,name:n.name,achieved:!1})}),this.searching=!1})))},deleteItem(r){this.form.report_data.splice(r,1)},clearSearch(){this.search.term_book_id="",this.search.lesson_id="",this.search.activity_id=""},scrollToTop(){const r=this.$refs.progress_report;r&&(r.scrollTop=0)}},updated(){this.scrollToTop()}},It=Object.assign(Ot,{__name:"DigitalArt",setup(r){return(t,s)=>(i(),a(h,null,[d(m(D),{title:"Progress Report"}),d(A,null,{header:l(()=>[]),default:l(()=>[e("div",z,[e("div",I,[e("form",{onSubmit:s[0]||(s[0]=V((...o)=>t.submit&&t.submit(...o),["prevent"]))},[e("div",H,[e("div",Z,[e("div",E,[d(N)])]),e("div",F,[e("div",J,[e("div",q,[Y,e("div",G,[e("div",K,[e("table",Q,[W,e("tbody",X,[t.$page.props.progress_reports.length?w("",!0):(i(),a("tr",ee,oe)),(i(!0),a(h,null,y(t.$page.props.progress_reports,(o,p)=>(i(),a("tr",{class:"hover:bg-gray-200",key:o.report_id},[e("td",se,[e("div",re,c(m(R)(o.date).format("DD/MM/Y")),1)]),e("td",ie,[e("span",{class:k(["inline-flex items-center justify-center px-2 py-1 text-xs rounded",o.attendance_status_class_name])},c(o.attendance_status_name),3)]),e("td",ae,[d(v,{buttonType:"blue",onClick:u=>t.viewProgressReport(p)},{default:l(()=>[x("View / Update")]),_:2},1032,["onClick"])])]))),128))])])])])])])]),d(U,{report_details:t.$page.props.report_details},null,8,["report_details"])])],32)])]),d(P,{showModal:t.show_progress_report,modalType:"lg",onHideModal:s[13]||(s[13]=o=>t.show_progress_report=!1),ref:"progress_report"},{header:l(()=>[e("div",de,[ne,e("button",{type:"button",onClick:s[1]||(s[1]=o=>t.show_progress_report=!1),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},ce)])]),content:l(()=>[e("div",pe,[e("div",ue,[e("div",me,[e("div",ge,[he,e("div",be,[d(m($),{class:k("w-full rounded-lg shadow-sm"),"input-class-name":"digital-art-report-date-picker focus:ring-0",style:j(t.$page.props.errors.date?"--dp-border-color: #fa9e9e":"--dp-border-color: #cccccc"),enableTimePicker:!1,"auto-apply":!0,placeholder:"Select Date",format:"dd/MM/yyyy",modelValue:t.form.date,"onUpdate:modelValue":s[2]||(s[2]=o=>t.form.date=o)},null,8,["style","modelValue"])])])]),fe,e("div",_e,[e("div",ye,[xe,e("div",ve,[d(m(b),{onSelect:s[3]||(s[3]=o=>t.getLessons(t.search.theme_id)),modelValue:t.search.theme_id,"onUpdate:modelValue":s[4]||(s[4]=o=>t.search.theme_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.$page.props.art_themes,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",loading:t.loading.themes,placeholder:"Please Select",classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not_allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["modelValue","options","loading"])])]),e("div",we,[ke,e("div",Ce,[d(m(b),{onSelect:s[5]||(s[5]=o=>t.getActivity(t.search.lesson_id)),modelValue:t.search.lesson_id,"onUpdate:modelValue":s[6]||(s[6]=o=>t.search.lesson_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.options.lessons,disabled:t.disabled.lessons,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",loading:t.loading.lessons,placeholder:"Please Select",classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not_allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["modelValue","options","disabled","loading"])])])]),e("div",Se,[e("div",Oe,[De,e("div",$e,[d(m(b),{onSelect:s[7]||(s[7]=o=>t.getOutcomes(t.search.activity_id)),"option-height":104,"custom-label":t.customLabel,modelValue:t.search.activity_id,"onUpdate:modelValue":s[8]||(s[8]=o=>t.search.activity_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.options.activities,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",disabled:t.disabled.activities,placeholder:"Please Select",loading:t.loading.activities,classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not-allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["custom-label","modelValue","options","disabled","loading"])])])]),e("div",Pe,[e("div",Te,[e("div",Ve,[je,e("div",Me,[d(m(b),{"option-height":104,"custom-label":t.customLabel,modelValue:t.search.outcome_id,"onUpdate:modelValue":s[9]||(s[9]=o=>t.search.outcome_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.options.outcomes,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",disabled:t.disabled.outcomes,placeholder:"Please Select",loading:t.loading.outcomes,classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not-allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["custom-label","modelValue","options","disabled","loading"])])])]),e("div",Le,[e("div",Be,[Ae,e("div",Ne,[d(v,{class:"py-3 px-4",buttonType:"info",onClick:t.addItem},{default:l(()=>[e("div",Re,[t.searching?(i(),a("svg",Ue,He)):w("",!0),x(" "+c(t.searching?"":"Add"),1)])]),_:1},8,["onClick"])])])])]),e("div",Ze,[Ee,t.form.report_data?(i(),a("div",Ye,[t.form.report_data.length?w("",!0):(i(),a("div",Ge,"No objectives found.")),(i(!0),a(h,null,y(t.form.report_data,(o,p)=>(i(),a("div",Ke,[e("details",Qe,[e("summary",We,[e("div",Xe,[e("div",et,[e("span",tt,c(o.theme_name),1),e("label",{class:"text-red-500 hover:text-red-600 cursor-pointer uppercase font-bold hover:underline",onClick:u=>t.deleteItem(p)},"Delete",8,ot)]),st,e("div",rt,[e("span",it,c(o.lesson_name),1),e("span",at,"Activity: "+c(o.activity_name),1)]),e("div",dt,[e("span",nt,"Learning Outcome: "+c(o.outcome_name),1)])]),lt]),e("ul",ct,[(i(!0),a(h,null,y(o.objectives,(u,g)=>(i(),a("li",pt,[e("div",ut,[C(e("input",{id:u.id,type:"checkbox",value:u.id,"onUpdate:modelValue":f=>t.form.report_data[p].objectives[g].achieved=f,class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-300 focus:ring-0"},null,8,mt),[[M,t.form.report_data[p].objectives[g].achieved]]),e("label",{for:u.id,class:"w-full py-3 ml-2 text-sm font-medium text-gray-900 cursor-pointer"},c(u.name),9,gt)])]))),256))])])]))),256))])):(i(),a("div",Fe,qe))]),ht,e("div",bt,[e("div",ft,[_t,e("div",yt,[C(e("textarea",{class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300",rows:"4","onUpdate:modelValue":s[10]||(s[10]=o=>t.form.comments=o)},null,512),[[L,t.form.comments]])])])]),e("div",xt,[e("div",vt,[wt,e("div",kt,[C(e("select",{name:"attendance_status",id:"attendance_status",class:k(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.attendance_status?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[11]||(s[11]=o=>t.form.attendance_status=o),autocomplete:"off"},[(i(!0),a(h,null,y(t.$page.props.attendance_status,(o,p)=>(i(),a("option",{value:o.id},c(o.name),9,Ct))),256))],2),[[B,t.form.attendance_status]])])])])])])]),footer:l(()=>[e("div",St,[d(v,{buttonType:"gray",onClick:s[12]||(s[12]=o=>t.show_progress_report=!1)},{default:l(()=>[x("Cancel")]),_:1}),d(v,{onClick:t.updateProgressReport},{default:l(()=>[x("Save")]),_:1},8,["onClick"])])]),_:1},8,["showModal"])]),_:1})],64))}});export{It as default};
