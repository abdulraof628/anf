import{c as i,b as d,u,w as n,F as m,H as S,L as P,ac as y,o as a,d as e,e as V,j as w,h as f,t as g,n as j,k as _,C as $,f as k,y as T,l as M,g as B}from"./app-05a13f32.js";import{B as N}from"./Authenticated-c6ad5246.js";import{B as x}from"./Button-18ee2f20.js";import R from"./StudentInformation-6d951f78.js";import{Z as O}from"./main-4804b97d.js";import{M as D}from"./Modal-ec2e7cc4.js";import{h as U}from"./moment-fbc5633a.js";import{s as v}from"./multiselect-956e8f5e.js";/* empty css                                                         *//* empty css            */import"./ApplicationLogo-c397ffdd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-f2139e27.js";import"./default.css_vue_type_style_index_0_src_true_lang-1a75c667.js";import"./VueFinalModal.esm-9c20a319.js";const L={class:"md:grid md:grid-cols-2"},I={class:"md:mt-0 md:col-span-2"},z={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},A={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},H={class:"sm:row-span-3"},E={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},Z={class:"sm:row-span-3"},F={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},J=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800 self-end"},"Progress Report Listing"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),Y={class:"mb-4"},q={class:"overflow-x-auto"},G={class:"table-auto min-w-full divide-y divide-gray-200"},K=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Date"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),Q={class:"bg-white divide-y divide-gray-200"},W={key:0},X=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),ee=[X],te={class:"px-4 py-2 whitespace-nowrap"},oe={class:"text-sm font-medium text-gray-700"},se={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},re={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},ie=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Update Progress Report ",-1),ae={class:"p-6 overflow-y-auto no-scrollbar"},de={class:"grid grid-rows-1"},ne={class:"grid grid-cols-2 gap-4"},le={class:"mb-3"},ce=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Date ",-1),pe={class:"mt-1 flex rounded-md.shadow-sm"},ge=e("div",{class:"grid grid-cols-1"},[e("hr",{class:"my-4"})],-1),ue={class:"grid grid-cols-4 gap-4"},be={class:"mb-3"},me=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Lesson ",-1),he={class:"mt-1 flex rounded-md.shadow-sm"},fe={class:"mb-3"},_e=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Topic ",-1),xe={class:"mt-1 flex rounded-md.shadow-sm"},ve={class:"mb-3"},ye=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Learning Objective ",-1),we={class:"mt-1 flex rounded-md.shadow-sm"},je={class:"flex self-end"},ke={class:"mb-3"},Ce=e("label",{for:"",class:"block text-sm font-bold text-gray-700"},null,-1),Se={class:"mt-1 flex rounded-md.shadow-sm"},Oe={class:"flex items-center"},De={key:0,"aria-hidden":"true",class:"w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Pe=e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),Ve=e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),$e=[Pe,Ve],Te={class:"grid grid-cols-1 py-3"},Me=e("div",{class:"mb-3"},[e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Objectives ")],-1),Be={key:0,class:"grid grid-cols-1 divide-y divide-neutral-200 border-x border-t border-b mb-3"},Ne=e("div",{class:"p-3 bg-gray-50"},"No objectives found.",-1),Re=[Ne],Ue={key:1,class:"grid grid-cols-1 divide-y divide-neutral-200 border-x border-t border-b mb-3"},Le={key:0,class:"p-3 bg-gray-50"},Ie={class:"p-5 bg-gray-50 hover:bg-gray-100"},ze={class:"group space-y-4"},Ae={class:"flex justify-between items-center font-medium cursor-pointer list-none"},He={class:"space-y-2 ml-2 text-sm"},Ee={class:"flex space-x-4 items-center justify-between"},Ze={class:"flex items-center space-x-2"},Fe={class:"text-slate-800 uppercase font-sans font-bold"},Je={class:"text-slate-800 font-bold font-sans"},Ye=["onClick"],qe=e("div",{class:"border border-b-black"},null,-1),Ge={class:"flex flex-col space-y-1"},Ke={class:"bg-gray-300 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-gray-400 uppercase font-sans"},Qe=e("span",{class:"transition group-open:rotate-180"},[e("svg",{fill:"none",height:"24","shape-rendering":"geometricPrecision",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",width:"24"},[e("path",{d:"M6 9l6 6 6-6"})])],-1),We={class:"text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg divide-y"},Xe={class:"w-full"},et={class:"flex items-center pl-3"},tt=["id","value","onUpdate:modelValue"],ot=["for"],st={class:"grid grid-cols-1"},rt={class:"mb-3"},it=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Comments ",-1),at={class:"mt-1 flex rounded-md.shadow-sm"},dt={class:"grid grid-cols-2 gap-4"},nt={class:"mb-3"},lt=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Status ",-1),ct={class:"mt-1 flex rounded-md.shadow-sm"},pt=["value"],gt={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},ut={components:{Head:S,Link:P,Datepicker:O,Modal:D,Multiselect:v},data(){return{show_progress_report:!1,searching:!1,progress_report_list:{},disabled:{lessons:!0,topics:!0,objectives:!0},options:{lessons:[],topics:[],objectives:[],activities_procedures:[]},loading:{topics:!1,objectives:!1,lessons:!1},search:{lesson_id:"",topic_id:"",objective_id:""},form:{date:"",report_data:[],comments:"",attendance_status:""}}},methods:{viewProgressReport(r){this.clearSearch(),this.form.report_id=this.$page.props.progress_reports[r].id,this.form.date=this.$page.props.progress_reports[r].date,this.form.report_data=JSON.parse(this.$page.props.progress_reports[r].report_data)?JSON.parse(this.$page.props.progress_reports[r].report_data):[],this.form.attendance_status=this.$page.props.progress_reports[r].attendance_status,this.form.comments=this.$page.props.progress_reports[r].comments,this.show_progress_report=!0},updateProgressReport(){this.$inertia.post(route("progress_report.store"),this.form,{onBefore:r=>{},preserveScroll:!0,preserveState:!1})},getTopics(r){this.loading.topics=!0,this.disabled.topics=!0,this.disabled.objectives=!0,this.options.topics=[],this.options.objectives=[],this.search.topic_id="",this.search.objective_id="",y.get(route("progress_report.get_coding_topics",r)).then(t=>{this.options.topics=t.data,this.disabled.topics=!1,this.loading.topics=!1})},getObjectives(r){this.loading.objectives=!0,this.disabled.objectives=!0,this.options.objectives=[],this.search.objective_id="",y.get(route("progress_report.get_coding_objectives",r)).then(t=>{this.options.objectives=t.data,this.disabled.objectives=!1,this.loading.objectives=!1})},addItem(){this.searching||this.search.lesson_id&&this.search.topic_id&&this.search.objective_id&&(this.form.report_data.some(t=>t.objective_id===this.search.objective_id)?alert("Item Exists!"):(this.searching=!0,y.get(route("progress_report.get_coding_activities_procedures",this.search.objective_id)).then(t=>{var b,h,C;const s={lesson_id:this.search.lesson_id,lesson_name:(b=this.$page.props.coding_lessons.find(p=>p.id===this.search.lesson_id))==null?void 0:b.name,topic_id:this.search.topic_id,topic_name:(h=this.options.topics.find(p=>p.id===this.search.topic_id))==null?void 0:h.name,objective_id:this.search.objective_id,objective_name:(C=this.options.objectives.find(p=>p.id===this.search.objective_id))==null?void 0:C.name,activities_procedures:[]},o=this.form.report_data.length;this.form.report_data.push(s);const l=o,c=this.form.report_data[l];t.data.forEach(p=>{c.activities_procedures.push({id:p.id,name:p.name,achieved:!1})}),this.searching=!1})))},deleteItem(r){this.form.report_data.splice(r,1)},clearSearch(){this.search.term_book_id="",this.search.topic_id="",this.search.lesson_id=""}}},Pt=Object.assign(ut,{__name:"Coding",setup(r){return(t,s)=>(a(),i(m,null,[d(u(S),{title:"Progress Report"}),d(N,null,{header:n(()=>[]),default:n(()=>[e("div",L,[e("div",I,[e("form",{onSubmit:s[0]||(s[0]=V((...o)=>t.submit&&t.submit(...o),["prevent"]))},[e("div",z,[e("div",A,[e("div",H,[d(R)])]),e("div",E,[e("div",Z,[e("div",F,[J,e("div",Y,[e("div",q,[e("table",G,[K,e("tbody",Q,[t.$page.props.progress_reports.length?w("",!0):(a(),i("tr",W,ee)),(a(!0),i(m,null,f(t.$page.props.progress_reports,(o,l)=>(a(),i("tr",{class:"hover:bg-gray-200",key:o.report_id},[e("td",te,[e("div",oe,g(u(U)(o.date).format("DD/MM/Y")),1)]),e("td",se,[e("span",{class:j(["inline-flex items-center justify-center px-2 py-1 text-xs rounded",o.attendance_status_class_name])},g(o.attendance_status_name),3)]),e("td",re,[d(x,{buttonType:"blue",onClick:c=>t.viewProgressReport(l)},{default:n(()=>[_("View / Update")]),_:2},1032,["onClick"])])]))),128))])])])])])])])])],32)])]),d(D,{modalType:"lg",showModal:t.show_progress_report,onHideModal:s[10]||(s[10]=o=>t.show_progress_report=!1)},{header:n(()=>[ie]),content:n(()=>[e("div",ae,[e("div",de,[e("div",ne,[e("div",le,[ce,e("div",pe,[d(u(O),{class:j("w-full rounded-lg shadow-sm"),style:$(t.$page.props.errors.date?"--dp-border-color: #fa9e9e":"--dp-border-color: #cccccc"),enableTimePicker:!1,"auto-apply":!0,placeholder:"Select Date",format:"dd/MM/yyyy",modelValue:t.form.date,"onUpdate:modelValue":s[1]||(s[1]=o=>t.form.date=o)},null,8,["style","modelValue"])])])]),ge,e("div",ue,[e("div",be,[me,e("div",he,[d(u(v),{onSelect:s[2]||(s[2]=o=>t.getTopics(t.search.lesson_id)),modelValue:t.search.lesson_id,"onUpdate:modelValue":s[3]||(s[3]=o=>t.search.lesson_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.$page.props.coding_lessons,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",placeholder:"Please Select",classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not_allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["modelValue","options"])])]),e("div",fe,[_e,e("div",xe,[d(u(v),{onSelect:s[4]||(s[4]=o=>t.getObjectives(t.search.topic_id)),modelValue:t.search.topic_id,"onUpdate:modelValue":s[5]||(s[5]=o=>t.search.topic_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.options.topics,disabled:t.disabled.topics,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",loading:t.loading.topics,placeholder:"Please Select",classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not_allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["modelValue","options","disabled","loading"])])]),e("div",ve,[ye,e("div",we,[d(u(v),{"option-height":104,"custom-label":t.customLabel,modelValue:t.search.objective_id,"onUpdate:modelValue":s[6]||(s[6]=o=>t.search.objective_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.options.objectives,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",disabled:t.disabled.objectives,placeholder:"Please Select",loading:t.loading.objectives,classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not-allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["custom-label","modelValue","options","disabled","loading"])])]),e("div",je,[e("div",ke,[Ce,e("div",Se,[d(x,{class:"py-3 px-4",buttonType:"info",onClick:t.addItem},{default:n(()=>[e("div",Oe,[t.searching?(a(),i("svg",De,$e)):w("",!0),_(" "+g(t.searching?"Adding":"Add"),1)])]),_:1},8,["onClick"])])])])]),e("div",Te,[Me,t.form.report_data?(a(),i("div",Ue,[t.form.report_data.length?w("",!0):(a(),i("div",Le,"No objectives found.")),(a(!0),i(m,null,f(t.form.report_data,(o,l)=>(a(),i("div",Ie,[e("details",ze,[e("summary",Ae,[e("div",He,[e("div",Ee,[e("div",Ze,[e("span",Fe,g(o.lesson_name)+" : ",1),e("span",Je,g(o.topic_name),1)]),e("label",{class:"text-red-500 hover:text-red-600 cursor-pointer uppercase font-bold",onClick:c=>t.deleteItem(l)},"Delete",8,Ye)]),qe,e("div",Ge,[e("span",Ke,g(o.objective_name),1)])]),Qe]),e("ul",We,[(a(!0),i(m,null,f(o.activities_procedures,(c,b)=>(a(),i("li",Xe,[e("div",et,[k(e("input",{id:c.id,type:"checkbox",value:c.id,"onUpdate:modelValue":h=>t.form.report_data[l].activities_procedures[b].achieved=h,class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-300 focus:ring-0"},null,8,tt),[[T,t.form.report_data[l].activities_procedures[b].achieved]]),e("label",{for:c.id,class:"w-full py-3 ml-2 text-sm font-medium text-gray-900 cursor-pointer"},g(c.name),9,ot)])]))),256))])])]))),256))])):(a(),i("div",Be,Re))]),e("div",st,[e("div",rt,[it,e("div",at,[k(e("textarea",{class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300",rows:"4","onUpdate:modelValue":s[7]||(s[7]=o=>t.form.comments=o)},null,512),[[M,t.form.comments]])])])]),e("div",dt,[e("div",nt,[lt,e("div",ct,[k(e("select",{name:"attendance_status",id:"attendance_status",class:j(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.attendance_status?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[8]||(s[8]=o=>t.form.attendance_status=o),autocomplete:"off"},[(a(!0),i(m,null,f(t.$page.props.attendance_status,(o,l)=>(a(),i("option",{value:o.id},g(o.name),9,pt))),256))],2),[[B,t.form.attendance_status]])])])])])])]),footer:n(()=>[e("div",gt,[d(x,{buttonType:"gray",onClick:s[9]||(s[9]=o=>t.show_progress_report=!1)},{default:n(()=>[_("Cancel")]),_:1}),d(x,{onClick:t.updateProgressReport},{default:n(()=>[_("Save")]),_:1},8,["onClick"])])]),_:1},8,["showModal"])]),_:1})],64))}});export{Pt as default};
