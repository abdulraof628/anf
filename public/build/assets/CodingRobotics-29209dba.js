import{o as a,c as d,a as i,u as g,w as n,F as b,H as S,L as D,b as _,d as e,k as P,p as v,e as x,t as c,n as y,g as u,G as T,h as k,v as V,l as M}from"./app-a1be8f15.js";import{B}from"./Authenticated-f9e5f311.js";import{B as m}from"./Button-20f4633f.js";import L from"./StudentInformation-b5b631d5.js";import{Z as $}from"./vue-datepicker-3873764d.js";import{M as O}from"./Modal-5e6eaf52.js";import{h as R}from"./moment-fbc5633a.js";import{s as h}from"./multiselect-74981e66.js";import N from"./FeedbackSummary-b2ac1c4b.js";import"./ApplicationLogo-3ccc7998.js";import"./XIcon-12adda7f.js";import"./toggle-d5abfc64.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VueFinalModal.esm-1b403a0f.js";const z={class:"md:grid md:grid-cols-2"},I={class:"md:mt-0 md:col-span-2"},U={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},A={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},H={class:"sm:row-span-3"},E={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},Z={class:"sm:row-span-3"},F={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},J=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800 self-end"},"Progress Report Listing"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),G={class:"mb-4"},Y={class:"overflow-x-auto"},q={class:"table-auto min-w-full divide-y divide-gray-200"},K=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Date"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),Q={class:"bg-white divide-y divide-gray-200"},W={key:0},X=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),ee=[X],te={class:"px-4 py-2 whitespace-nowrap"},oe={class:"text-sm font-medium text-gray-700"},se={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},re={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},ie={class:"flex items-center justify-between py-3 px-4 border-b rounded-t font-semibold"},ae=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Update Progress Report ",-1),de=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ne=[de],le={class:"p-6 overflow-y-auto no-scrollbar"},ce={class:"grid grid-rows-1"},pe={class:"grid grid-cols-2 gap-4"},ge={class:"mb-3"},be=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Date ",-1),ue={class:"mt-1 flex rounded-md.shadow-sm"},me=e("div",{class:"grid grid-cols-1"},[e("hr",{class:"my-4"})],-1),he={class:"grid grid-cols-2 gap-4"},fe={class:"mb-3"},_e=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Lesson ",-1),ve={class:"mt-1 flex rounded-md.shadow-sm"},xe={class:"mb-3"},ye=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Topic ",-1),we={class:"mt-1 flex rounded-md.shadow-sm"},je={class:"grid grid-cols-12 gap-4"},Ce={class:"col-span-11"},ke={class:"mb-3"},Se=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Learning Objective ",-1),$e={class:"mt-1 flex rounded-md.shadow-sm"},Oe={class:"col-span-1 self-end"},De={class:"mb-3"},Pe=e("label",{for:"",class:"block text-sm font-bold text-gray-700"},null,-1),Te={class:"mt-1 flex rounded-md.shadow-sm"},Ve={class:"flex items-center"},Me={key:0,"aria-hidden":"true",class:"w-4 h-4 text-white animate-spin fill-indigo-600",viewBox:"0 0 100 101",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Be=e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),Le=e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),Re=[Be,Le],Ne={class:"grid grid-cols-1 py-3"},ze=e("div",{class:"mb-3"},[e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Objectives ")],-1),Ie={key:0,class:"grid grid-cols-1 divide-y divide-neutral-200 border-x border-t border-b mb-3"},Ue=e("div",{class:"p-3 bg-gray-50"},"No objectives found.",-1),Ae=[Ue],He={key:1,class:"grid grid-cols-1 divide-y divide-gray-400 divide-dashed border-x border-t border-b border-gray-300 mb-3"},Ee={key:0,class:"p-3 bg-gray-50"},Ze={class:"p-5 bg-gray-50 hover:bg-gray-100"},Fe={class:"space-y-2 ml-2 text-sm"},Je={class:"flex space-x-4 items-center justify-between"},Ge={class:"flex items-center space-x-2"},Ye={class:"text-slate-800 uppercase font-sans font-bold"},qe={class:"text-slate-800 font-bold font-sans"},Ke=["onClick"],Qe=e("div",{class:"border border-b-black"},null,-1),We={class:"flex flex-col space-y-1"},Xe={class:"bg-gray-300 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-gray-400 uppercase font-sans"},et={class:"grid grid-cols-1"},tt={class:"mb-3"},ot=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Comments ",-1),st={class:"mt-1 flex rounded-md.shadow-sm"},rt={class:"grid grid-cols-2 gap-4"},it={class:"mb-3"},at=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Status ",-1),dt={class:"mt-1 flex rounded-md.shadow-sm"},nt=["value"],lt={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},ct={components:{Head:S,Link:D,Datepicker:$,Modal:O,Multiselect:h},data(){return{show_progress_report:!1,searching:!1,progress_report_list:{},disabled:{lessons:!0,topics:!0,objectives:!0},options:{lessons:[],topics:[],objectives:[],activities_procedures:[]},loading:{topics:!1,objectives:!1,lessons:!1},search:{lesson_id:"",topic_id:"",objective_id:""},form:{date:"",report_data:[],comments:"",attendance_status:""}}},methods:{viewProgressReport(r){this.clearSearch(),this.form.report_id=this.$page.props.progress_reports[r].id,this.form.date=this.$page.props.progress_reports[r].date,this.form.report_data=JSON.parse(this.$page.props.progress_reports[r].report_data)?JSON.parse(this.$page.props.progress_reports[r].report_data):[],this.form.attendance_status=this.$page.props.progress_reports[r].attendance_status,this.form.comments=this.$page.props.progress_reports[r].comments,this.show_progress_report=!0},updateProgressReport(){this.$inertia.post(route("progress_report.store"),this.form,{onBefore:r=>{},preserveScroll:!0,preserveState:!1})},getTopics(r){this.loading.topics=!0,this.disabled.topics=!0,this.disabled.objectives=!0,this.options.topics=[],this.options.objectives=[],this.search.topic_id="",this.search.objective_id="",_.get(route("progress_report.get_coding_topics",r)).then(t=>{this.options.topics=t.data,this.disabled.topics=!1,this.loading.topics=!1})},getObjectives(r){this.loading.objectives=!0,this.disabled.objectives=!0,this.options.objectives=[],this.search.objective_id="",_.get(route("progress_report.get_coding_objectives",r)).then(t=>{this.options.objectives=t.data,this.disabled.objectives=!1,this.loading.objectives=!1})},addItem(){this.searching||this.search.lesson_id&&this.search.topic_id&&this.search.objective_id&&(this.form.report_data.some(t=>t.objective_id===this.search.objective_id)?alert("Item Exists!"):(this.searching=!0,_.get(route("progress_report.get_coding_activities_procedures",this.search.objective_id)).then(t=>{var w,j,C;const s={lesson_id:this.search.lesson_id,lesson_name:(w=this.$page.props.coding_lessons.find(l=>l.id===this.search.lesson_id))==null?void 0:w.name,topic_id:this.search.topic_id,topic_name:(j=this.options.topics.find(l=>l.id===this.search.topic_id))==null?void 0:j.name,objective_id:this.search.objective_id,objective_name:(C=this.options.objectives.find(l=>l.id===this.search.objective_id))==null?void 0:C.name,activities_procedures:[]},o=this.form.report_data.length;this.form.report_data.push(s);const p=o,f=this.form.report_data[p];t.data.forEach(l=>{f.activities_procedures.push({id:l.id,name:l.name,achieved:!1})}),this.searching=!1})))},deleteItem(r){this.form.report_data.splice(r,1)},clearSearch(){this.search.term_book_id="",this.search.topic_id="",this.search.lesson_id=""}}},kt=Object.assign(ct,{__name:"CodingRobotics",setup(r){return(t,s)=>(a(),d(b,null,[i(g(S),{title:"Progress Report"}),i(B,null,{header:n(()=>[]),default:n(()=>[e("div",z,[e("div",I,[e("form",{onSubmit:s[0]||(s[0]=P((...o)=>t.submit&&t.submit(...o),["prevent"]))},[e("div",U,[e("div",A,[e("div",H,[i(L)])]),e("div",E,[e("div",Z,[e("div",F,[J,e("div",G,[e("div",Y,[e("table",q,[K,e("tbody",Q,[t.$page.props.progress_reports.length?v("",!0):(a(),d("tr",W,ee)),(a(!0),d(b,null,x(t.$page.props.progress_reports,(o,p)=>(a(),d("tr",{class:"hover:bg-gray-200",key:o.report_id},[e("td",te,[e("div",oe,c(g(R)(o.date).format("DD/MM/Y")),1)]),e("td",se,[e("span",{class:y(["inline-flex items-center justify-center px-2 py-1 text-xs rounded",o.attendance_status_class_name])},c(o.attendance_status_name),3)]),e("td",re,[i(m,{buttonType:"blue",onClick:f=>t.viewProgressReport(p)},{default:n(()=>[u("View / Update")]),_:2},1032,["onClick"])])]))),128))])])])])])])]),i(N,{report_details:t.$page.props.report_details},null,8,["report_details"])])],32)])]),i(O,{showModal:t.show_progress_report,modalType:"lg",onHideModal:s[11]||(s[11]=o=>t.show_progress_report=!1)},{header:n(()=>[e("div",ie,[ae,e("button",{type:"button",onClick:s[1]||(s[1]=o=>t.show_progress_report=!1),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},ne)])]),content:n(()=>[e("div",le,[e("div",ce,[e("div",pe,[e("div",ge,[be,e("div",ue,[i(g($),{class:y("w-full rounded-lg shadow-sm"),"input-class-name":"coding-report-date-picker focus:ring-0",style:T(t.$page.props.errors.date?"--dp-border-color: #fa9e9e":"--dp-border-color: #cccccc"),enableTimePicker:!1,"auto-apply":!0,placeholder:"Select Date",format:"dd/MM/yyyy",modelValue:t.form.date,"onUpdate:modelValue":s[2]||(s[2]=o=>t.form.date=o)},null,8,["style","modelValue"])])])]),me,e("div",he,[e("div",fe,[_e,e("div",ve,[i(g(h),{onSelect:s[3]||(s[3]=o=>t.getTopics(t.search.lesson_id)),modelValue:t.search.lesson_id,"onUpdate:modelValue":s[4]||(s[4]=o=>t.search.lesson_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.$page.props.coding_lessons,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",placeholder:"Please Select",classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not_allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["modelValue","options"])])]),e("div",xe,[ye,e("div",we,[i(g(h),{onSelect:s[5]||(s[5]=o=>t.getObjectives(t.search.topic_id)),modelValue:t.search.topic_id,"onUpdate:modelValue":s[6]||(s[6]=o=>t.search.topic_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.options.topics,disabled:t.disabled.topics,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",loading:t.loading.topics,placeholder:"Please Select",classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not_allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["modelValue","options","disabled","loading"])])])]),e("div",je,[e("div",Ce,[e("div",ke,[Se,e("div",$e,[i(g(h),{"option-height":104,"custom-label":t.customLabel,modelValue:t.search.objective_id,"onUpdate:modelValue":s[7]||(s[7]=o=>t.search.objective_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.options.objectives,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",disabled:t.disabled.objectives,placeholder:"Please Select",loading:t.loading.objectives,classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not-allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["custom-label","modelValue","options","disabled","loading"])])])]),e("div",Oe,[e("div",De,[Pe,e("div",Te,[i(m,{class:"py-3 px-4",buttonType:"info",onClick:t.addItem},{default:n(()=>[e("div",Ve,[t.searching?(a(),d("svg",Me,Re)):v("",!0),u(" "+c(t.searching?"":"Add"),1)])]),_:1},8,["onClick"])])])])]),e("div",Ne,[ze,t.form.report_data?(a(),d("div",He,[t.form.report_data.length?v("",!0):(a(),d("div",Ee,"No objectives found.")),(a(!0),d(b,null,x(t.form.report_data,(o,p)=>(a(),d("div",Ze,[e("div",Fe,[e("div",Je,[e("div",Ge,[e("span",Ye,c(o.lesson_name)+" : ",1),e("span",qe,c(o.topic_name),1)]),e("label",{class:"text-red-500 hover:text-red-600 cursor-pointer uppercase font-bold",onClick:f=>t.deleteItem(p)},"Delete",8,Ke)]),Qe,e("div",We,[e("span",Xe,c(o.objective_name),1)])])]))),256))])):(a(),d("div",Ie,Ae))]),e("div",et,[e("div",tt,[ot,e("div",st,[k(e("textarea",{class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300",rows:"4","onUpdate:modelValue":s[8]||(s[8]=o=>t.form.comments=o)},null,512),[[V,t.form.comments]])])])]),e("div",rt,[e("div",it,[at,e("div",dt,[k(e("select",{name:"attendance_status",id:"attendance_status",class:y(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.attendance_status?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[9]||(s[9]=o=>t.form.attendance_status=o),autocomplete:"off"},[(a(!0),d(b,null,x(t.$page.props.attendance_status,(o,p)=>(a(),d("option",{value:o.id},c(o.name),9,nt))),256))],2),[[M,t.form.attendance_status]])])])])])])]),footer:n(()=>[e("div",lt,[i(m,{buttonType:"gray",onClick:s[10]||(s[10]=o=>t.show_progress_report=!1)},{default:n(()=>[u("Cancel")]),_:1}),i(m,{onClick:t.updateProgressReport},{default:n(()=>[u("Save")]),_:1},8,["onClick"])])]),_:1},8,["showModal"])]),_:1})],64))}});export{kt as default};
