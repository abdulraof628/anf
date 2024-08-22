import{r as V,o as r,c as a,a as i,u as h,w as c,F as b,H as D,L as j,k as O,b as v,d as e,q as d,e as w,t as p,n as S,g as m,s as L,i as M,h as _,C as T,v as B,m as N}from"./app-070f43c1.js";import{B as U}from"./Authenticated-5cc29ae1.js";import{B as k}from"./Button-cc0ba7f6.js";import I from"./StudentInformation-5031262a.js";import{Z as P}from"./vue-datepicker-02c14968.js";import{M as $}from"./Modal-3b540ba8.js";import{h as R}from"./moment-55cb88ed.js";import{s as x}from"./multiselect-11e4f434.js";import z from"./FeedbackSummary-d6fd5b3f.js";import"./ApplicationLogo-df1a20ae.js";import"./XIcon-a374af23.js";import"./perfect-scrollbar.esm-4df541d0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-0eb71379.js";import"./VueFinalModal.esm-55eaa35b.js";const A={class:"md:grid md:grid-cols-2"},H={class:"md:mt-0 md:col-span-2"},E={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},Z={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},q={class:"sm:row-span-3"},F={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},J={class:"sm:row-span-3"},W={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},Y=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800 self-end"},"Progress Report Listing"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),G={class:"mb-4"},K={class:"overflow-x-auto"},Q={class:"table-auto min-w-full divide-y divide-gray-200"},X=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Date"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Teacher Name"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),ee={class:"bg-white divide-y divide-gray-200"},te={key:0},oe=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),se=[oe],re={class:"px-6 py-2 whitespace-nowrap"},ne={class:"text-sm font-medium text-gray-700"},ae={class:"px-6 py-2 whitespace-nowrap"},ie={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},de={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},le={class:"flex items-center justify-between py-3 px-4 border-b rounded-t font-semibold"},ce=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Update Progress Report ",-1),pe=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ue=[pe],ge={class:"p-6 overflow-y-auto scrollbar"},me={class:"grid grid-rows-1"},he={class:"grid grid-cols-1 2xl:grid-cols-3 gap-4"},fe={class:""},be=e("span",{for:"date",class:"block text-sm font-bold text-gray-700"},[m(" Date"),e("span",{class:"text-red-500"},"*")],-1),_e={class:"mt-1 flex rounded-md.shadow-sm"},xe={key:0,class:"text-red-500 font-semibold"},ye={class:""},ve=e("label",{for:"class_name",class:"block text-sm font-bold text-gray-700"},[m(" Teacher's Name "),e("span",{class:"text-red-500"},"*")],-1),we={class:"mt-1 flex rounded-md.shadow-sm"},ke={key:0,class:"text-red-500 font-semibold"},Ce={class:""},Se={class:"flex items-center 2xl:mt-5"},Te=e("label",{for:"revision",class:"select-none w-full py-3 ml-2 text-sm font-medium text-gray-900 cursor-pointer"},"Revision",-1),De=e("div",{class:"grid grid-cols-1"},[e("hr",{class:"my-4"})],-1),Pe={class:"grid grid-cols-1 gap-4"},$e={class:"mb-3"},Ve=e("span",{for:"term_book_id",class:"block text-sm font-bold text-gray-700"}," Term / Book ",-1),je={class:"mt-1 flex rounded-md.shadow-sm"},Oe={class:"grid grid-cols-1 gap-4"},Le={class:"mb-3"},Me=e("span",{for:"unit_id",class:"block text-sm font-bold text-gray-700"}," Unit ",-1),Be={class:"mt-1 flex rounded-md.shadow-sm"},Ne={class:"grid grid-cols-12 gap-4"},Ue={class:"col-span-11"},Ie={class:"mb-3"},Re=e("span",{for:"lesson_id",class:"block text-sm font-bold text-gray-700"}," Lesson ",-1),ze={class:"mt-1 flex rounded-md.shadow-sm"},Ae={class:"col-span-1 self-end"},He={class:"mb-3"},Ee=e("span",{class:"block text-sm font-bold text-gray-700"},null,-1),Ze={class:"mt-1 flex rounded-md.shadow-sm"},qe={class:"flex items-center"},Fe={key:0,"aria-hidden":"true",class:"w-4 h-4 text-white animate-spin fill-indigo-600",viewBox:"0 0 100 101",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Je=e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),We=e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),Ye=[Je,We],Ge={class:"grid grid-cols-1 py-3"},Ke=e("div",{class:"mb-3"},[e("span",{class:"block text-sm font-bold text-gray-700"},[m(" Objectives"),e("span",{class:"text-red-500"},"*")])],-1),Qe={key:0,class:"grid grid-cols-1 divide-y divide-neutral-200 border-x border-t border-b mb-3"},Xe=e("div",{class:"p-3"},"No objectives found.",-1),et=[Xe],tt={key:1,class:"grid grid-cols-1 divide-y divide-gray-400 divide-dashed border-x border-t border-b border-gray-300 mb-3"},ot={key:0,class:"p-3"},st={class:"p-5 bg-white hover:bg-indigo-50 divide-y"},rt={class:"group space-y-4"},nt={class:"flex justify-between items-center font-medium cursor-pointer list-none"},at={class:"space-y-2 ml-2 text-sm"},it={class:"flex space-x-4 items-center justify-between"},dt={class:"text-slate-700 font-bold font-sans"},lt=["onClick"],ct=e("div",{class:"border border-b-black border-dashed"},null,-1),pt={class:"flex space-x-2"},ut={class:"focus:outline-none text-[12px] bg-indigo-100 text-indigo-700 border border-indigo-500 rounded font-medium py-1 px-2 select-none"},gt={class:"focus:outline-none text-[12px] bg-gray-100 text-gray-700 border border-gray-500 rounded font-medium py-1 px-2 select-none"},mt={key:0,class:"transition group-open:rotate-180"},ht=e("svg",{fill:"none",height:"24","shape-rendering":"geometricPrecision",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",width:"24"},[e("path",{d:"M6 9l6 6 6-6"})],-1),ft=[ht],bt={key:0,class:"text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg divide-y"},_t={class:"w-full"},xt={class:"flex items-center pl-3"},yt=["id","value","onUpdate:modelValue"],vt=["for"],wt={key:2,class:"text-red-500 font-semibold"},kt={class:"grid grid-cols-1"},Ct={class:"mb-3"},St=e("span",{class:"block text-sm font-bold text-gray-700"}," Comments ",-1),Tt={class:"mt-1 flex rounded-md.shadow-sm"},Dt={class:"grid grid-cols-1 2xl:grid-cols-2 gap-4"},Pt={class:"mb-3"},$t=e("span",{class:"block text-sm font-bold text-gray-700"},[m(" Status"),e("span",{class:"text-red-500"},"*")],-1),Vt={class:"mt-1 flex rounded-md.shadow-sm"},jt=["value"],Ot={key:0,class:"text-red-500 font-semibold"},Lt={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},Mt={components:{Head:D,Link:j,Datepicker:P,Modal:$,Multiselect:x},data(){return{value:[],show_progress_report:!1,searching:!1,progress_report_list:{},disabled:{terms_books:!0,units:!0,lessons:!0},list:{teachers:[]},options:{terms_books:[],units:[],lessons:[],objectives:[]},loading:{terms_books:!1,units:!1,lessons:!1,objectives:!1,teachers:!1},search:{term_book_id:"",unit_id:[],lesson_id:[]},form:{teacher_user_id:"",revision:!1,date:"",report_data:[],comments:"",attendance_status:""}}},methods:{viewProgressReport(n){this.clearSearch(),this.form.report_id=this.$page.props.progress_reports[n].id,this.form.teacher_user_id=this.$page.props.progress_reports[n].teacher_user_id,this.form.teacher_name=this.$page.props.progress_reports[n].display_name,this.form.date=this.$page.props.progress_reports[n].date,this.form.report_data=JSON.parse(this.$page.props.progress_reports[n].report_data)?JSON.parse(this.$page.props.progress_reports[n].report_data):[],this.form.attendance_status=this.$page.props.progress_reports[n].attendance_status,this.form.comments=this.$page.props.progress_reports[n].comments,this.form.revision=String(this.$page.props.progress_reports[n].revision),this.show_progress_report=!0},updateProgressReport(){!this.form.date||this.form.attendance_status==3||this.form.attendance_status==1&&this.form.report_data.length<1||this.form.attendance_status==1&&!this.form.teacher_user_id||this.$inertia.post(route("progress_report.store"),this.form,{preserveScroll:!0,preserveState:!1})},findTeachers(n){O(t=>"400ms")(10),n&&(this.loading.teachers=!0,v.get(route("teachers.find"),{params:{keyword:n}}).then(t=>{this.list.teachers=t.data,this.loading.teachers=!1}))},getUnits(n){this.loading.units=!0,this.disabled.units=!0,this.disabled.lessons=!0,this.options.units=[],this.options.lessons=[],this.search.unit_id=[],this.search.lesson_id="",v.get(route("progress_report.get_math_units",n)).then(t=>{this.options.units=t.data,this.disabled.units=!1,this.loading.units=!1})},getLessons(n){this.loading.lessons=!0,this.disabled.lessons=!0,this.options.lessons=[],this.search.lesson_id="",v.get(route("progress_report.get_math_lessons",n)).then(t=>{this.options.lessons=t.data,this.disabled.lessons=!1,this.loading.lessons=!1})},addItem(){this.searching||this.search.term_book_id&&this.search.unit_id&&this.search.lesson_id&&(this.form.report_data.some(t=>t.lesson_id===this.search.lesson_id)?alert("Item Exists!"):(this.searching=!0,v.get(route("progress_report.get_math_objectives",this.search.lesson_id)).then(t=>{var l,f,y;const s={term_book_id:this.search.term_book_id,term_book_name:(l=this.$page.props.math_terms_books.find(g=>g.id===this.search.term_book_id))==null?void 0:l.name,unit_id:this.search.unit_id,unit_name:(f=this.options.units.find(g=>g.id===this.search.unit_id))==null?void 0:f.name,lesson_id:this.search.lesson_id,lesson_name:(y=this.options.lessons.find(g=>g.id===this.search.lesson_id))==null?void 0:y.name,objectives:[]},C=this.form.report_data.length;this.form.report_data.push(s);const o=C,u=this.form.report_data[o];t.data.forEach(g=>{u.objectives.push({id:g.id,name:g.name,achieved:!1})}),this.searching=!1})))},deleteItem(n){this.form.report_data.splice(n,1)},clearSearch(){this.search.term_book_id="",this.search.unit_id=[],this.search.lesson_id=""}}},Gt=Object.assign(Mt,{__name:"Math",setup(n){return(t,s)=>{const C=V("debounce");return r(),a(b,null,[i(h(D),{title:"Progress Report"}),i(U,null,{header:c(()=>[]),default:c(()=>[e("div",A,[e("div",H,[e("div",E,[e("div",Z,[e("div",q,[i(I)])]),e("div",F,[e("div",J,[e("div",W,[Y,e("div",G,[e("div",K,[e("table",Q,[X,e("tbody",ee,[t.$page.props.progress_reports.length?d("",!0):(r(),a("tr",te,se)),(r(!0),a(b,null,w(t.$page.props.progress_reports,(o,u)=>(r(),a("tr",{class:"hover:bg-gray-200",key:o.report_id},[e("td",re,[e("div",ne,p(h(R)(o.date).format("DD/MM/Y")),1)]),e("td",ae,p(o.display_name),1),e("td",ie,[e("span",{class:S(["inline-flex items-center justify-center px-2 py-1 text-xs rounded",o.attendance_status_class_name])},p(o.attendance_status_name),3)]),e("td",de,[i(k,{buttonType:"blue",onClick:l=>t.viewProgressReport(u)},{default:c(()=>[m("View / Update")]),_:2},1032,["onClick"])])]))),128))])])])])])])]),i(z,{report_details:t.$page.props.report_details},null,8,["report_details"])])])]),t.show_progress_report?(r(),L($,{key:0,showModal:t.show_progress_report,modalType:"lg",onHideModal:s[12]||(s[12]=o=>t.show_progress_report=!1)},{header:c(()=>[e("div",le,[ce,e("button",{type:"button",onClick:s[0]||(s[0]=o=>t.show_progress_report=!1),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},ue)])]),content:c(()=>[e("div",ge,[e("div",me,[e("div",he,[e("div",fe,[be,e("div",_e,[i(h(P),{class:S("w-full rounded-lg shadow-sm"),id:"date","input-class-name":"math-report-date-picker focus:ring-0",style:M(t.$page.props.errors.date?"--dp-border-color: #fa9e9e":"--dp-border-color: #cccccc"),enableTimePicker:!1,"auto-apply":!0,placeholder:"Select Date",format:"dd/MM/yyyy",modelValue:t.form.date,"onUpdate:modelValue":s[1]||(s[1]=o=>t.form.date=o)},null,8,["style","modelValue"])]),t.form.date?d("",!0):(r(),a("small",xe,"This field is required."))]),e("div",ye,[ve,e("div",we,[_(i(h(x),{modelValue:t.form.teacher_user_id,"onUpdate:modelValue":s[2]||(s[2]=o=>t.form.teacher_user_id=o),valueProp:"ID",loading:t.loading.teachers,placeholder:t.form.teacher_name,options:t.list.teachers,searchable:!0,noOptionsText:"Nothing found",noResultsText:"Nothing found",clearOnSelect:!0,canClear:!1,canDeselect:!1,"internal-search":!1,trackBy:"display_name",label:"display_name",classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-[38px]",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded-md pl-3.5 mt-0.5 h-[36px]",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-700",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","loading","placeholder","options"]),[[C,t.findTeachers]])]),t.form.attendance_status==1&&!t.form.teacher_user_id?(r(),a("small",ke,"This field is required.")):d("",!0)]),e("div",Ce,[e("div",Se,[_(e("input",{id:"revision",type:"checkbox",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-300 focus:ring-0","onUpdate:modelValue":s[3]||(s[3]=o=>t.form.revision=o)},null,512),[[T,t.form.revision]]),Te])])]),De,e("div",Pe,[e("div",$e,[Ve,e("div",je,[i(h(x),{id:"term_book_id",onSelect:s[4]||(s[4]=o=>t.getUnits(t.search.term_book_id)),modelValue:t.search.term_book_id,"onUpdate:modelValue":s[5]||(s[5]=o=>t.search.term_book_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.$page.props.math_terms_books,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",loading:t.loading.terms_books,placeholder:"Please Select",classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not_allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["modelValue","options","loading"])])])]),e("div",Oe,[e("div",Le,[Me,e("div",Be,[i(h(x),{id:"unit_id",onSelect:s[6]||(s[6]=o=>t.getLessons(t.search.unit_id)),modelValue:t.search.unit_id,"onUpdate:modelValue":s[7]||(s[7]=o=>t.search.unit_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.options.units,disabled:t.disabled.units,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",loading:t.loading.units,placeholder:"Please Select",classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not_allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["modelValue","options","disabled","loading"])])])]),e("div",Ne,[e("div",Ue,[e("div",Ie,[Re,e("div",ze,[i(h(x),{id:"lesson_id","option-height":104,modelValue:t.search.lesson_id,"onUpdate:modelValue":s[8]||(s[8]=o=>t.search.lesson_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.options.lessons,clearOnSelect:!1,canClear:!1,canDeselect:!1,trackBy:"name",label:"name",disabled:t.disabled.lessons,placeholder:"Please Select",loading:t.loading.lessons,classes:{container:"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer rounded-sm bg-white text-base leading-snug border-gray-300",containerDisabled:"cursor-not-allowed bg-gray-100 border focus:border-gray-200 h-10",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",search:"w-full absolute inset-0 border-gray-300 focus:outline-none focus:border-transparent focus:ring-0 appearance-none text-base font-sans bg-white rounded-sm",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["modelValue","options","disabled","loading"])])])]),e("div",Ae,[e("div",He,[Ee,e("div",Ze,[i(k,{class:"py-3 px-4",buttonType:"info",onClick:t.addItem},{default:c(()=>[e("div",qe,[t.searching?(r(),a("svg",Fe,Ye)):d("",!0),m(" "+p(t.searching?"":"Add"),1)])]),_:1},8,["onClick"])])])])]),e("div",Ge,[Ke,t.form.report_data?(r(),a("div",tt,[t.form.report_data.length?d("",!0):(r(),a("div",ot,"No objectives found.")),(r(!0),a(b,null,w(t.form.report_data,(o,u)=>(r(),a("div",st,[e("details",rt,[e("summary",nt,[e("div",at,[e("div",it,[e("span",dt,p(o.term_book_name),1),e("span",{class:"text-red-500 hover:text-red-600 cursor-pointer uppercase font-bold hover:underline",onClick:l=>t.deleteItem(u)},"Delete",8,lt)]),ct,e("div",pt,[e("span",ut,"Unit "+p(o.unit_name),1),e("span",gt,"Lesson "+p(o.lesson_name),1)])]),t.form.revision?d("",!0):(r(),a("span",mt,ft))]),t.form.revision?d("",!0):(r(),a("ul",bt,[(r(!0),a(b,null,w(o.objectives,(l,f)=>(r(),a("li",_t,[e("div",xt,[_(e("input",{id:l.id,type:"checkbox",value:l.id,"onUpdate:modelValue":y=>t.form.report_data[u].objectives[f].achieved=y,class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-300 focus:ring-0"},null,8,yt),[[T,t.form.report_data[u].objectives[f].achieved]]),e("label",{for:l.id,class:"w-full py-3 ml-2 text-sm font-medium text-gray-900 cursor-pointer"},p(l.name),9,vt)])]))),256))]))])]))),256))])):(r(),a("div",Qe,et)),!t.form.report_data.length&&t.form.attendance_status==1?(r(),a("small",wt,"At least one (1) objective is required.")):d("",!0)]),e("div",kt,[e("div",Ct,[St,e("div",Tt,[_(e("textarea",{id:"comments",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300",rows:"4","onUpdate:modelValue":s[9]||(s[9]=o=>t.form.comments=o),placeholder:"What you see is what you get...",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false"},null,512),[[B,t.form.comments,void 0,{lazy:!0}]])])])]),e("div",Dt,[e("div",Pt,[$t,e("div",Vt,[_(e("select",{name:"attendance_status",id:"attendance_status",class:S(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.attendance_status?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[10]||(s[10]=o=>t.form.attendance_status=o),autocomplete:"off"},[(r(!0),a(b,null,w(t.$page.props.attendance_status,(o,u)=>(r(),a("option",{value:o.id},p(o.name),9,jt))),256))],2),[[N,t.form.attendance_status]])]),t.form.attendance_status==3?(r(),a("small",Ot,"This field is required.")):d("",!0)])])])])]),footer:c(()=>[e("div",Lt,[i(k,{buttonType:"gray",onClick:s[11]||(s[11]=o=>t.show_progress_report=!1)},{default:c(()=>[m("Cancel")]),_:1}),i(k,{onClick:t.updateProgressReport},{default:c(()=>[m("Save")]),_:1},8,["onClick"])])]),_:1},8,["showModal"])):d("",!0)]),_:1})],64)}}});export{Gt as default};
