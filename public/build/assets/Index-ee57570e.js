import{x as g,v as n,u as d,P as s,F as h,a6 as w,q as i,y as e,z as u,K as _,bv as C,G as a,V as p,m as $,C as M,t as m,W as O}from"./@vue-64c42e7d.js";import{B as T}from"./Authenticated-6651b23d.js";import{B as c}from"./Button-df73f7a0.js";import{r as V,a as R,b as j}from"./@heroicons-3c270557.js";import{H as v,L as B}from"./@inertiajs-41d03628.js";import{C as k}from"./ConfirmationModal-617f2ef8.js";import{P as z}from"./Pagination-9bf8dba3.js";import{h as I}from"./moment-3968d9f3.js";import{a as y}from"./axios-9cbf0d09.js";import{s as f,b as A}from"./@vueform-ba82ac10.js";import{Z as D}from"./@vuepic-339c593a.js";import{M as L}from"./Modal-1ff46134.js";import{t as N}from"./vue3-print-nb-dcda0647.js";import{e as U}from"./vue-debounce-ed417ae1.js";import"./ApplicationLogo-64527dd0.js";import"./radix-vue-2488f6ae.js";import"./@floating-ui-7a9770d8.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-f96983da.js";import"./app-98c3eb01.js";import"./pusher-js-2bcba7e2.js";import"./cropperjs-2c7c67ce.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./v-calendar-1cb1b359.js";import"./@popperjs-f3391c26.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-deae3e94.js";import"./@radix-icons-03b844c4.js";import"./moment-timezone-65f24d9a.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-60a7aae7.js";import"./vue-68dd36d7.js";import"./lodash.clonedeep-8b83a099.js";import"./qs-589f641c.js";import"./side-channel-1ba8a7fc.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-a3a9a537.js";import"./deepmerge-89e33937.js";import"./nprogress-34a09d83.js";import"./lucide-vue-next-48142e2c.js";import"./@headlessui-28549402.js";import"./vue-final-modal-a9484404.js";const F={class:"py-4 px-4"},H={class:"flex justify-end"},Y=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"currentColor",viewBox:"0 0 512 512"},[e("path",{d:"M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"})],-1),Z=e("span",null,"Settings",-1),E=e("hr",{class:"my-3 border border-dashed border-gray-400"},null,-1),G={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2 mb-3"},K={class:"relative w-full"},W=e("svg",{class:"absolute top-2.5 left-3 h-5 w-5 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),q={class:"w-full"},J={class:"w-full"},Q={class:"multiselect-single-label"},X={class:"w-full"},ee={class:"multiselect-single-label"},te={class:"w-full"},oe={class:"w-full"},re={class:"shadow overflow-auto border-b border-gray-200 sm:rounded-lg"},se={class:"min-w-full divide-y divide-gray-200"},ae=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/12"},"Centre"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/12"},"Month / Year"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Total Present"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Total Absent"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),ne={class:"bg-white divide-y divide-gray-200"},le={key:0},ie=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found ")],-1),pe=[ie],de={class:"px-6 py-4 whitespace-nowrap"},ce={class:"text-sm font-medium text-gray-700"},ge={class:"px-6 py-4 whitespace-nowrap"},ue={class:"flex flex-col space-y-1 text-sm text-gray-900"},me={class:"font-semibold"},fe={class:"flex items-center text-sm space-x-2"},be={class:"text-xs px-2 py-1 border text-indigo-700 font-semibold border-indigo-500 rounded bg-indigo-200"},xe={class:"text-xs px-2 py-1 border text-blue-700 font-semibold border-blue-500 rounded bg-blue-200"},he={class:"px-6 py-4 whitespace-nowrap"},ye={class:"text-sm font-medium text-gray-900"},we={class:"px-6 py-4 whitespace-nowrap"},_e={class:"text-sm font-medium text-gray-900"},ve={class:"px-6 py-4 whitespace-nowrap"},ke={class:"text-sm font-medium text-gray-900"},De={class:"px-6 py-4 whitespace-nowrap"},Le={class:"text-sm font-medium text-gray-900"},Pe={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},Se={class:"flex justify-center space-x-2"},Ce={class:"p-6 overflow-y-auto scrollbar"},$e={class:"flex justify-center"},Me={class:"flex justify-between space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},Oe={components:{SearchIcon:V,TrashIcon:R,PencilIcon:j,Head:v,Link:B,ConfirmationModal:k,Multiselect:f,Datepicker:D,Modal:L,Toggle:A},data(){return{component:{file:null,data:""},generate:{id:"",running:!1},printing:!1,show_progress_report:!1,show_create_progress_report:!1,isOpen:!1,confirmationData:"",confirmationRoute:"",open_modal:!1,params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?this.$page.props.filter.centre_id:"",programme_id:this.$page.props.filter.programme_id?this.$page.props.filter.programme_id:"",date:this.$page.props.filter.date?this.$page.props.filter.date:{month:new Date().getMonth(),year:new Date().getFullYear()},programme_level:this.$page.props.filter.programme_level?this.$page.props.filter.programme_level:""},form:{create_bulk:!1,student_id:"",student_fee_id:"",date:"",from_date:"",to_date:""},list:{students:[],student_fees:[]},loading:{students:!1,student_fees:!1},form_error:{student_id:"",student_fee_id:""}}},watch:{"params.date":{handler(){this.search()},deep:!0}},methods:{viewProgressReport(l){this.$inertia.get(this.route("progress_report.details"),{progress_report_id:l},{})},showProgressReport(l,t){this.generate.running||(this.generate.running=!0,y.get(route("progress_report.full_reports"),{responseType:"blob",params:{progress_report_id:l,student_fee:t}}).then(r=>{const b=new Blob([r.data],{type:"application/pdf"}),x=URL.createObjectURL(b);window.open(x,"_blank"),this.generate.running=!1}).catch(r=>{console.error("Error fetching PDF:",r),this.generate.running=!1}))},search(){this.$inertia.get(this.route("progress_report"),this.params,{replace:!0,preserveState:!0})},showCreateProgressReport(){this.show_create_progress_report=!0},findStudents(l){U(t=>"400ms")(10),l&&(this.loading.students=!0,y.get(route("students.find"),{params:{keyword:l}}).then(t=>{this.list.students=t.data,this.loading.students=!1}))},findStudentFees(){this.loading.student_fees=!0,y.get(route("students.fees",this.form.student_id)).then(l=>{this.list.student_fees=l.data,this.loading.student_fees=!1})},createProgressReport(){this.$inertia.post(route("progress_report.create"),this.form)}},directives:{print:N}},Vt=Object.assign(Oe,{__name:"Index",setup(l){return(t,r)=>{const b=w("debounce"),x=w("print");return i(),g(h,null,[n(d(v),{title:"Progress Report"}),n(T,null,{header:s(()=>[]),default:s(()=>[e("div",F,[t.$page.props.can.view_progress_report_settings?(i(),g(h,{key:0},[e("div",H,[n(c,{class:"py-2 px-4 space-x-2",url:t.route("progress_report.settings")},{default:s(()=>[Y,Z]),_:1},8,["url"])]),E],64)):u("",!0),e("div",G,[e("div",K,[W,_(e("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md","onUpdate:modelValue":r[0]||(r[0]=o=>t.params.search=o)},null,512),[[b,t.search,"800ms"],[C,t.params.search]])]),e("div",q,[n(d(f),{onSelect:t.search,modelValue:t.params.centre_id,"onUpdate:modelValue":r[1]||(r[1]=o=>t.params.centre_id=o),valueProp:"ID",appendNewOption:!1,searchable:!0,options:t.$page.props.allowed_centres,clearOnSelect:!0,canClear:!1,canDeselect:!1,trackBy:"label",label:"label",placeholder:"Centre",classes:{container:"relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},null,8,["onSelect","modelValue","options"])]),e("div",J,[n(d(f),{onSelect:t.search,onDeselect:t.search,modelValue:t.params.programme_id,"onUpdate:modelValue":r[2]||(r[2]=o=>t.params.programme_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.$page.props.programmes,clearOnSelect:!0,closeOnDeselect:!0,canClear:!1,canDeselect:!0,trackBy:"name",label:"name",placeholder:"All Programmes",classes:{container:"relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},{singlelabel:s(({value:o})=>[e("div",Q,a(o.name),1)]),option:s(({option:o})=>[p(a(o.name)+" ("+a(o.country_name)+") ",1)]),_:1},8,["onSelect","onDeselect","modelValue","options"])]),e("div",X,[n(d(f),{onSelect:t.search,onDeselect:t.search,modelValue:t.params.programme_level,"onUpdate:modelValue":r[3]||(r[3]=o=>t.params.programme_level=o),valueProp:"level",appendNewOption:!1,searchable:!0,options:t.$page.props.levels,clearOnSelect:!1,closeOnDeselect:!0,canClear:!1,canDeselect:!0,trackBy:"level",label:"level",placeholder:"All Levels",classes:{container:"relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},{singlelabel:s(({value:o})=>[e("div",ee," Level "+a(o.level),1)]),option:s(({option:o})=>[p(" Level "+a(o.level),1)]),_:1},8,["onSelect","onDeselect","modelValue","options"])]),e("div",te,[n(d(D),{class:$("w-full rounded-lg shadow-sm"),"input-class-name":"progress-report-date-picker focus:ring-0",modelValue:t.params.date,"onUpdate:modelValue":r[4]||(r[4]=o=>t.params.date=o),format:"MMMM yyyy","month-picker":!0,"auto-apply":!0,placeholder:"Month / Year",clearable:!1},null,8,["modelValue"])]),e("div",oe,[n(c,{buttonType:"gray",class:"py-2 px-3",url:t.route("progress_report")},{default:s(()=>[p("Clear Search")]),_:1},8,["url"])])]),e("div",re,[e("table",se,[ae,e("tbody",ne,[t.$page.props.progress_reports.data.length?u("",!0):(i(),g("tr",le,pe)),(i(!0),g(h,null,M(t.$page.props.progress_reports.data,(o,P)=>(i(),g("tr",{class:"hover:bg-gray-200",key:o.report_id},[e("td",de,[e("div",ce,a(++P),1)]),e("td",ge,[e("div",ue,[e("span",me,a(o.student_name),1),e("div",fe,[e("div",be,a(o.programme_name),1),e("div",xe," Level "+a(o.programme_level),1)])])]),e("td",he,[e("div",ye,a(o.centre_name),1)]),e("td",we,[e("div",_e,a(d(I)(o.month).format("MMMM Y")),1)]),e("td",ve,[e("div",ke,a(o.total_present+"/"+o.total_class),1)]),e("td",De,[e("div",Le,a(o.total_absent+"/"+o.total_class),1)]),e("td",Pe,[e("div",Se,[t.$page.props.can.view_progress_report?(i(),m(c,{key:0,buttonType:"blue",onClick:S=>t.viewProgressReport(o.progress_report_id)},{default:s(()=>[p("View Details")]),_:2},1032,["onClick"])):u("",!0),t.$page.props.can.view_progress_report?(i(),m(c,{key:1,class:"py-1 px-4",onClick:S=>t.showProgressReport(o.progress_report_id,o.student_fee)},{default:s(()=>[p(a(t.generate.id==o.progress_report_id&&t.generate.running?"Generating...":"Show / Print"),1)]),_:2},1032,["onClick"])):u("",!0)])])]))),128))])])]),n(z,{page_data:t.$page.props.progress_reports,params:t.params},null,8,["page_data","params"])]),n(k,{show:t.isOpen,onClose:r[5]||(r[5]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Artwork",confirmationText:"Are you sure want to delete this artwork?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"]),n(L,{showModal:t.show_progress_report,modalType:"lg",onHideModal:r[7]||(r[7]=o=>t.show_progress_report=!1)},{content:s(()=>[e("div",Ce,[e("div",$e,[t.component.file?(i(),m(O(t.component.file),{key:0,data:t.component.data},null,8,["data"])):u("",!0)])])]),footer:s(()=>[e("div",Me,[_((i(),m(c,{buttonType:"info"},{default:s(()=>[p("Print")]),_:1})),[[x,"#progress_report"]]),n(c,{buttonType:"gray",onClick:r[6]||(r[6]=o=>t.show_progress_report=!1)},{default:s(()=>[p("Close")]),_:1})])]),_:1},8,["showModal"])]),_:1})],64)}}});export{Vt as default};
