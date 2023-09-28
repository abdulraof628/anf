import{c as n,b as d,u as m,w as a,F as h,H as D,L as $,ac as v,o as i,d as e,e as j,j as w,h as f,t as u,n as k,k as _,D as M,f as C,y as O,l as T,g as B}from"./app-abb14225.js";import{B as U}from"./Authenticated-cf6f3e2c.js";import{B as x}from"./Button-8060ba77.js";import N from"./StudentInformation-e896a0b8.js";import{Z as P}from"./main-222ca33c.js";import{M as V}from"./Modal-a84178b6.js";import{h as L}from"./moment-fbc5633a.js";import{s as y}from"./multiselect-eca2bb49.js";/* empty css                                                         */import"./ApplicationLogo-86d866bd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-9a0666f4.js";import"./TimeAgo-fee1d65d.js";import"./VueFinalModal.esm-94ae4589.js";/* empty css                                                              */const R={class:"md:grid md:grid-cols-2"},I={class:"md:mt-0 md:col-span-2"},z={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},A={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},H={class:"sm:row-span-3"},E={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},Z={class:"sm:row-span-3"},F={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},J=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800 self-end"},"Progress Report Listing"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),Y={class:"mb-4"},q={class:"overflow-x-auto"},G={class:"table-auto min-w-full divide-y divide-gray-200"},K=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Date"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),Q={class:"bg-white divide-y divide-gray-200"},W={key:0},X=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),ee=[X],te={class:"px-4 py-2 whitespace-nowrap"},se={class:"text-sm font-medium text-gray-700"},oe={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},re={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},ne=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Update Progress Report ",-1),ie={class:"p-6 overflow-y-auto no-scrollbar"},de={class:"grid grid-rows-1"},ae={class:"grid grid-cols-2 gap-4"},le={class:"mb-3"},ce=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Date ",-1),pe={class:"mt-1 flex rounded-md.shadow-sm"},ue=e("div",{class:"grid grid-cols-1"},[e("hr",{class:"my-4"})],-1),me={class:"grid grid-cols-4 gap-4"},ge={class:"mb-3"},he=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Term / Book ",-1),be={class:"mt-1 flex rounded-md.shadow-sm"},fe={class:"mb-3"},_e=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Unit ",-1),xe={class:"mt-1 flex rounded-md.shadow-sm"},ye={class:"mb-3"},ve=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Lesson ",-1),we={class:"mt-1 flex rounded-md.shadow-sm"},ke={class:"flex self-end"},Ce={class:"mb-3"},Se=e("label",{for:"",class:"block text-sm font-bold text-gray-700"},null,-1),De={class:"mt-1 flex rounded-md.shadow-sm"},Pe={class:"flex items-center"},Ve={key:0,"aria-hidden":"true",class:"w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$e=e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),je=e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),Me=[$e,je],Oe={class:"grid grid-cols-1 py-3"},Te=e("div",{class:"mb-3"},[e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Objectives ")],-1),Be={key:0,class:"grid grid-cols-1 divide-y divide-neutral-200 border-x border-t border-b mb-3"},Ue=e("div",{class:"p-3 bg-gray-50"},"No objectives found.",-1),Ne=[Ue],Le={key:1,class:"grid grid-cols-1 divide-y divide-gray-400 divide-dotted border-x border-t border-b border-gray-200 mb-3"},Re={key:0,class:"p-3 bg-gray-50"},Ie={class:"p-5 bg-white hover:bg-indigo-50 divide-y"},ze={class:"group space-y-4"},Ae={class:"flex justify-between items-center font-medium cursor-pointer list-none"},He={class:"space-y-2 ml-2 text-sm"},Ee={class:"flex space-x-4 items-center justify-between"},Ze={class:"text-slate-700 font-bold font-sans"},Fe=["onClick"],Je=e("div",{class:"border border-b-black border-dashed"},null,-1),Ye={class:"flex space-x-2"},qe={class:"focus:outline-none text-[12px] bg-indigo-100 text-indigo-700 border border-indigo-500 rounded font-medium py-1 px-2 select-none"},Ge={class:"focus:outline-none text-[12px] bg-gray-100 text-gray-700 border border-gray-500 rounded font-medium py-1 px-2 select-none"},Ke=e("span",{class:"transition group-open:rotate-180"},[e("svg",{fill:"none",height:"24","shape-rendering":"geometricPrecision",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",width:"24"},[e("path",{d:"M6 9l6 6 6-6"})])],-1),Qe={class:"text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg divide-y"},We={class:"w-full"},Xe={class:"flex items-center pl-3"},et=["id","value","onUpdate:modelValue"],tt=["for"],st={class:"grid grid-cols-1"},ot={class:"mb-3"},rt=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Comments ",-1),nt={class:"mt-1 flex rounded-md.shadow-sm"},it={class:"grid grid-cols-2 gap-4"},dt={class:"mb-3"},at=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"}," Status ",-1),lt={class:"mt-1 flex rounded-md.shadow-sm"},ct=["value"],pt={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},ut={components:{Head:D,Link:$,Datepicker:P,Modal:V,Multiselect:y},data(){return{show_progress_report:!1,searching:!1,progress_report_list:{},disabled:{terms_books:!0,units:!0,lessons:!0},options:{terms_books:[],units:[],lessons:[],objectives:[]},loading:{terms_books:!1,units:!1,lessons:!1,objectives:!1},search:{term_book_id:"",unit_id:"",lesson_id:""},form:{date:"",report_data:[],comments:"",attendance_status:""}}},methods:{viewProgressReport(r){this.clearSearch(),this.form.report_id=this.$page.props.progress_reports[r].id,this.form.date=this.$page.props.progress_reports[r].date,this.form.report_data=JSON.parse(this.$page.props.progress_reports[r].report_data)?JSON.parse(this.$page.props.progress_reports[r].report_data):[],this.form.attendance_status=this.$page.props.progress_reports[r].attendance_status,this.form.comments=this.$page.props.progress_reports[r].comments,this.show_progress_report=!0},updateProgressReport(){this.$inertia.post(route("progress_report.store"),this.form,{onBefore:r=>{},preserveScroll:!0,preserveState:!1})},getUnits(r){this.loading.units=!0,this.disabled.units=!0,this.disabled.lessons=!0,this.options.units=[],this.options.lessons=[],this.search.unit_id="",this.search.lesson_id="",v.get(route("progress_report.get_math_units",r)).then(t=>{this.options.units=t.data,this.disabled.units=!1,this.loading.units=!1})},getLessons(r){this.loading.lessons=!0,this.disabled.lessons=!0,this.options.lessons=[],this.search.lesson_id="",v.get(route("progress_report.get_math_lessons",r)).then(t=>{this.options.lessons=t.data,this.disabled.lessons=!1,this.loading.lessons=!1})},addItem(){this.searching||this.search.term_book_id&&this.search.unit_id&&this.search.lesson_id&&(this.form.report_data.some(t=>t.lesson_id===this.search.lesson_id)?alert("Item Exists!"):(this.searching=!0,v.get(route("progress_report.get_math_objectives",this.search.lesson_id)).then(t=>{var g,b,S;const o={term_book_id:this.search.term_book_id,term_book_name:(g=this.$page.props.math_terms_books.find(p=>p.id===this.search.term_book_id))==null?void 0:g.name,unit_id:this.search.unit_id,unit_name:(b=this.options.units.find(p=>p.id===this.search.unit_id))==null?void 0:b.name,lesson_id:this.search.lesson_id,lesson_name:(S=this.options.lessons.find(p=>p.id===this.search.lesson_id))==null?void 0:S.name,objectives:[]},s=this.form.report_data.length;this.form.report_data.push(o);const l=s,c=this.form.report_data[l];t.data.forEach(p=>{c.objectives.push({id:p.id,name:p.name,achieved:!1})}),this.searching=!1})))},deleteItem(r){this.form.report_data.splice(r,1)},clearSearch(){this.search.term_book_id="",this.search.unit_id="",this.search.lesson_id=""}}},Vt=Object.assign(ut,{__name:"Math",setup(r){return(t,o)=>(i(),n(h,null,[d(m(D),{title:"Progress Report"}),d(U,null,{header:a(()=>[]),default:a(()=>[e("div",R,[e("div",I,[e("form",{onSubmit:o[0]||(o[0]=j((...s)=>t.submit&&t.submit(...s),["prevent"]))},[e("div",z,[e("div",A,[e("div",H,[d(N)])]),e("div",E,[e("div",Z,[e("div",F,[J,e("div",Y,[e("div",q,[e("table",G,[K,e("tbody",Q,[t.$page.props.progress_reports.length?w("",!0):(i(),n("tr",W,ee)),(i(!0),n(h,null,f(t.$page.props.progress_reports,(s,l)=>(i(),n("tr",{class:"hover:bg-gray-200",key:s.report_id},[e("td",te,[e("div",se,u(m(L)(s.date).format("DD/MM/Y")),1)]),e("td",oe,[e("span",{class:k(["inline-flex items-center justify-center px-2 py-1 text-xs rounded",s.attendance_status_class_name])},u(s.attendance_status_name),3)]),e("td",re,[d(x,{buttonType:"blue",onClick:c=>t.viewProgressReport(l)},{default:a(()=>[_("View / Update")]),_:2},1032,["onClick"])])]))),128))])])])])])])])])],32)])]),d(V,{modalType:"lg",showModal:t.show_progress_report,onHideModal:o[10]||(o[10]=s=>t.show_progress_report=!1)},{header:a(()=>[ne]),content:a(()=>[e("div",ie,[e("div",de,[e("div",ae,[e("div",le,[ce,e("div",pe,[d(m(P),{class:k("w-full rounded-lg shadow-sm"),style:M(t.$page.props.errors.date?"--dp-border-color: #fa9e9e":"--dp-border-color: #cccccc"),enableTimePicker:!1,"auto-apply":!0,placeholder:"Select Date",format:"dd/MM/yyyy",modelValue:t.form.date,"onUpdate:modelValue":o[1]||(o[1]=s=>t.form.date=s)},null,8,["style","modelValue"])])])]),ue,e("div",me,[e("div",ge,[he,e("div",be,[d(m(y),{onSelect:o[2]||(o[2]=s=>t.getUnits(t.search.term_book_id)),modelValue:t.search.term_book_id,"onUpdate:modelValue":o[3]||(o[3]=s=>t.search.term_book_id=s),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.$page.props.math_terms_books,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",loading:t.loading.terms_books,placeholder:"Please Select",classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not_allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["modelValue","options","loading"])])]),e("div",fe,[_e,e("div",xe,[d(m(y),{onSelect:o[4]||(o[4]=s=>t.getLessons(t.search.unit_id)),modelValue:t.search.unit_id,"onUpdate:modelValue":o[5]||(o[5]=s=>t.search.unit_id=s),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.options.units,disabled:t.disabled.units,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",loading:t.loading.units,placeholder:"Please Select",classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not_allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["modelValue","options","disabled","loading"])])]),e("div",ye,[ve,e("div",we,[d(m(y),{"option-height":104,"custom-label":t.customLabel,modelValue:t.search.lesson_id,"onUpdate:modelValue":o[6]||(o[6]=s=>t.search.lesson_id=s),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.options.lessons,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",disabled:t.disabled.lessons,placeholder:"Please Select",loading:t.loading.lessons,classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not-allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["custom-label","modelValue","options","disabled","loading"])])]),e("div",ke,[e("div",Ce,[Se,e("div",De,[d(x,{class:"py-3 px-4",buttonType:"info",onClick:t.addItem},{default:a(()=>[e("div",Pe,[t.searching?(i(),n("svg",Ve,Me)):w("",!0),_(" "+u(t.searching?"Adding":"Add"),1)])]),_:1},8,["onClick"])])])])]),e("div",Oe,[Te,t.form.report_data?(i(),n("div",Le,[t.form.report_data.length?w("",!0):(i(),n("div",Re,"No objectives found.")),(i(!0),n(h,null,f(t.form.report_data,(s,l)=>(i(),n("div",Ie,[e("details",ze,[e("summary",Ae,[e("div",He,[e("div",Ee,[e("span",Ze,u(s.term_book_name),1),e("label",{class:"text-red-500 hover:text-red-600 cursor-pointer uppercase font-bold hover:underline",onClick:c=>t.deleteItem(l)},"Delete",8,Fe)]),Je,e("div",Ye,[e("span",qe,"Unit "+u(s.unit_name),1),e("span",Ge,"Lesson "+u(s.lesson_name),1)])]),Ke]),e("ul",Qe,[(i(!0),n(h,null,f(s.objectives,(c,g)=>(i(),n("li",We,[e("div",Xe,[C(e("input",{id:c.id,type:"checkbox",value:c.id,"onUpdate:modelValue":b=>t.form.report_data[l].objectives[g].achieved=b,class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-300 focus:ring-0"},null,8,et),[[O,t.form.report_data[l].objectives[g].achieved]]),e("label",{for:c.id,class:"w-full py-3 ml-2 text-sm font-medium text-gray-900 cursor-pointer"},u(c.name),9,tt)])]))),256))])])]))),256))])):(i(),n("div",Be,Ne))]),e("div",st,[e("div",ot,[rt,e("div",nt,[C(e("textarea",{class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300",rows:"4","onUpdate:modelValue":o[7]||(o[7]=s=>t.form.comments=s)},null,512),[[T,t.form.comments]])])])]),e("div",it,[e("div",dt,[at,e("div",lt,[C(e("select",{name:"attendance_status",id:"attendance_status",class:k(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.attendance_status?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[8]||(o[8]=s=>t.form.attendance_status=s),autocomplete:"off"},[(i(!0),n(h,null,f(t.$page.props.attendance_status,(s,l)=>(i(),n("option",{value:s.id},u(s.name),9,ct))),256))],2),[[B,t.form.attendance_status]])])])])])])]),footer:a(()=>[e("div",pt,[d(x,{buttonType:"gray",onClick:o[9]||(o[9]=s=>t.show_progress_report=!1)},{default:a(()=>[_("Cancel")]),_:1}),d(x,{onClick:t.updateProgressReport},{default:a(()=>[_("Save")]),_:1},8,["onClick"])])]),_:1},8,["showModal"])]),_:1})],64))}});export{Vt as default};
