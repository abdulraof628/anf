import{B as L}from"./Authenticated-214cc5de.js";import{H as T,L as N}from"./@inertiajs-2b766590.js";import D from"./StudentInformation-6bcca172.js";import{h as U}from"./moment-a9aaa855.js";import{a as C}from"./axios-1779699b.js";import R from"./FeedbackSummary-b9f0af05.js";import{e as E}from"./vue-debounce-ed417ae1.js";import{_ as P}from"./Card-e481dfab.js";import{_ as M,a as O,b as j,c as $,d as z,e as f}from"./TableRow-7ae90bc5.js";import{_ as A}from"./DialogModal-5bb61319.js";import{_ as F}from"./Collapsible-08c65aae.js";import{x as g,v as t,u as i,O as s,F as y,b7 as v,q as d,U as r,t as k,B,I as w,J as u,y as n,m as J}from"./@vue-39dc9ff3.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ef5f5861.js";import"./pusher-js-68b5c933.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./@radix-icons-9ff33614.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";import"./lucide-vue-next-7b48dc26.js";const H=n("div",{class:"p-3"}," No Record Found ",-1),Y={class:"p-1 grid grid-cols-1 gap-4"},q={class:""},G=n("span",{class:"text-red-500"},"*",-1),K={class:"mb-3"},Q=n("span",{class:"text-red-500"},"*",-1),W={class:""},X={class:""},Z={class:"mb-3"},x={key:0,class:"px-4 py-2 bg-slate-100 rounded-lg"},ee={class:"flex items-center space-x-2"},te={class:"p-1"},se={class:"divide-y"},oe={class:""},re={class:"cursor-pointer"},ae={class:""},ie={class:""},le={components:{Head:T,Link:N},data(){return{show_progress_report:!1,open_objectives:!1,searching:!1,progress_report_list:{},list:{teachers:[]},options:{lessons:[],topics:[],objectives:[]},loading:{lessons:!1,teachers:!1},search:{lesson_id:"",topic_id:""},form:{teacher_user_id:"",date:"",report_data:[],comments:"",attendance_status:""}}},methods:{viewProgressReport(l){this.clearSearch(),this.form.report_id=this.$page.props.progress_reports[l].id,this.form.teacher_user_id=this.$page.props.progress_reports[l].teacher_user_id,this.form.teacher_name=this.$page.props.progress_reports[l].display_name,this.form.date=this.$page.props.progress_reports[l].date,this.form.report_data=JSON.parse(this.$page.props.progress_reports[l].report_data)?JSON.parse(this.$page.props.progress_reports[l].report_data):[],this.form.attendance_status=this.$page.props.progress_reports[l].attendance_status,this.form.comments=this.$page.props.progress_reports[l].comments,this.show_progress_report=!0},updateProgressReport(){!this.form.date||this.form.attendance_status==3||this.form.attendance_status==1&&this.form.report_data.length<1||this.form.attendance_status==1&&!this.form.teacher_user_id||this.$inertia.post(route("progress_report.store"),this.form,{preserveScroll:!0,preserveState:!1})},findTeachers:E(function(l){l&&(this.loading.teachers=!0,C.get(route("teachers.find"),{params:{keyword:l}}).then(e=>{this.list.teachers=e.data,this.loading.teachers=!1}))},1e3),getTopics(l){this.loading.topics=!0,this.options.topics=[],this.options.objectives=[],this.search.topic_id="",this.search.objective_id="",C.get(route("progress_report.get_little_bot_topics",l)).then(e=>{this.options.topics=e.data,this.loading.topics=!1})},addItem(){this.searching||this.search.lesson_id&&this.search.topic_id&&(this.form.report_data.some(e=>e.topic_id===this.search.topic_id)?alert("Item Exists!"):(this.searching=!0,C.get(route("progress_report.get_little_bot_objectives",this.search.topic_id)).then(e=>{var c;const a={lesson_id:this.search.lesson_id,lesson_name:this.$page.props.little_bot_lessons.find(m=>m.id===this.search.lesson_id).name,topic_id:this.search.topic_id,topic_name:(c=this.options.topics.find(m=>m.id===this.search.topic_id))==null?void 0:c.name,objectives:[]},b=this.form.report_data.length;this.form.report_data.push(a);const p=b,V=this.form.report_data[p];e.data.forEach(m=>{V.objectives.push({id:m.id,name:m.name,achieved:!1})}),this.searching=!1})))},deleteItem(l){this.form.report_data.splice(l,1)},clearSearch(){this.form.teacher_user_id="",this.search.lesson_id="",this.search.topic_id=""}}},at=Object.assign(le,{__name:"LittleBot",setup(l){return(e,a)=>{const b=v("Button"),p=v("Label"),V=v("Datepicker"),c=v("ComboBox"),m=v("Checkbox"),I=v("Textarea");return d(),g(y,null,[t(i(T),{title:"Progress Report"}),t(L,null,{header:s(()=>[]),default:s(()=>[t(D),t(P,null,{title:s(()=>[r("Progress Reports")]),content:s(()=>[t(i(M),null,{default:s(()=>[t(i(O),{class:"bg-gray-100"},{default:s(()=>[t(i(j),null,{default:s(()=>[t(i($),null,{default:s(()=>[r("#")]),_:1}),t(i($),null,{default:s(()=>[r("Date")]),_:1}),t(i($),null,{default:s(()=>[r("Teacher's Name")]),_:1}),t(i($),{class:"text-center"},{default:s(()=>[r("Status")]),_:1}),t(i($),{class:"text-center"},{default:s(()=>[r("Action")]),_:1})]),_:1})]),_:1}),t(i(z),null,{default:s(()=>[e.$page.props.progress_reports.length?B("",!0):(d(),k(i(j),{key:0},{default:s(()=>[t(i(f),{class:"text-center",colspan:"10"},{default:s(()=>[H]),_:1})]),_:1})),(d(!0),g(y,null,w(e.$page.props.progress_reports,(o,_)=>(d(),k(i(j),null,{default:s(()=>[t(i(f),null,{default:s(()=>[r(u(_+1),1)]),_:2},1024),t(i(f),null,{default:s(()=>[r(u(i(U)(o.date).format("DD/MM/Y")),1)]),_:2},1024),t(i(f),null,{default:s(()=>[r(u(o.display_name),1)]),_:2},1024),t(i(f),{class:"text-center"},{default:s(()=>[n("span",{class:J(["inline-flex items-center justify-center px-2 py-1 text-xs rounded",[{"bg-green-200 text-green-600":o.attendance_status==1},{"bg-red-200 text-red-600":o.attendance_status==2},{"bg-gray-200 text-gray-600":o.attendance_status==3}]])},u(o.attendance_status_name),3)]),_:2},1024),t(i(f),{class:"text-center"},{default:s(()=>[t(b,{variant:"outline",onClick:h=>e.viewProgressReport(_)},{default:s(()=>[r("Edit")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(R,{report_details:e.$page.props.report_details},null,8,["report_details"]),t(A,{open:e.show_progress_report,"onUpdate:open":a[9]||(a[9]=o=>e.show_progress_report=o)},{title:s(()=>[r("Edit Progress Report")]),content:s(()=>[n("div",Y,[n("div",q,[t(p,{id:"date"},{default:s(()=>[r("Date"),G]),_:1}),t(V,{modelValue:e.form.date,"onUpdate:modelValue":a[0]||(a[0]=o=>e.form.date=o),mode:"date",format:"dd/MM/Y",error:!e.form.date,teleport:"#date",teleportCenter:!0},null,8,["modelValue","error"])]),n("div",K,[t(p,null,{default:s(()=>[r("Teacher's Name"),Q]),_:1}),t(c,{items:e.list.teachers,"label-property":"display_name","value-property":"ID",error:e.form.attendance_status==1&&!e.form.teacher_user_id,modelValue:e.form.teacher_user_id,"onUpdate:modelValue":a[1]||(a[1]=o=>e.form.teacher_user_id=o),"select-placeholder":e.form.teacher_name,"search-placeholder":"Search teacher...",onSearch:e.findTeachers,loading:e.loading.teachers},null,8,["items","error","modelValue","select-placeholder","onSearch","loading"])]),n("div",W,[t(p,null,{default:s(()=>[r("Lesson")]),_:1}),t(c,{items:e.$page.props.little_bot_lessons,"label-property":"name","value-property":"id",modelValue:e.search.lesson_id,"onUpdate:modelValue":a[2]||(a[2]=o=>e.search.lesson_id=o),"select-placeholder":"Select Lesson","search-placeholder":"Search lesson...",onSelect:a[3]||(a[3]=o=>e.getTopics(e.search.lesson_id))},null,8,["items","modelValue"])]),n("div",X,[t(p,null,{default:s(()=>[r("Topic")]),_:1}),t(c,{items:e.options.topics,"label-property":"name","value-property":"id",modelValue:e.search.topic_id,"onUpdate:modelValue":a[4]||(a[4]=o=>e.search.topic_id=o),"select-placeholder":"Select Topic","search-placeholder":"Search topic...",onSelect:e.addItem,loading:e.loading.topics},null,8,["items","modelValue","onSelect","loading"])]),n("div",Z,[t(p,null,{default:s(()=>[r("Objectives")]),_:1}),e.form.report_data.length?(d(!0),g(y,{key:1},w(e.form.report_data,(o,_)=>(d(),k(F,{class:"bg-white",modelValue:e.open_objectives,"onUpdate:modelValue":a[5]||(a[5]=h=>e.open_objectives=h)},{trigger:s(()=>[n("div",ee,[t(p,null,{default:s(()=>[r(u(o.lesson_name)+" : ",1)]),_:2},1024),t(p,null,{default:s(()=>[r(u(o.topic_name),1)]),_:2},1024),t(p,{class:"text-red-600 cursor-pointer",onClick:h=>e.deleteItem(_)},{default:s(()=>[r("Delete")]),_:2},1032,["onClick"])])]),content:s(()=>[n("div",te,[n("ul",se,[(d(!0),g(y,null,w(o.objectives,(h,S)=>(d(),g("li",oe,[t(p,{class:"flex items-center space-x-2 py-2"},{default:s(()=>[t(m,{value:h.id,checked:e.form.report_data[_].objectives[S].achieved,onClick:ne=>e.form.report_data[_].objectives[S].achieved=!e.form.report_data[_].objectives[S].achieved},null,8,["value","checked","onClick"]),n("span",re,u(h.name),1)]),_:2},1024)]))),256))])])]),_:2},1032,["modelValue"]))),256)):(d(),g("div",x,[t(p,null,{default:s(()=>[r("No objectives found.")]),_:1})])),!e.form.report_data.length&&e.form.attendance_status==1?(d(),k(p,{key:2,class:"text-xs text-red-500 font-semibold"},{default:s(()=>[r("At least one (1) objective is required.")]),_:1})):B("",!0)]),n("div",ae,[t(p,null,{default:s(()=>[r("Comments")]),_:1}),t(I,{rows:"3",modelValue:e.form.comments,"onUpdate:modelValue":a[6]||(a[6]=o=>e.form.comments=o),modelModifiers:{lazy:!0}},null,8,["modelValue"])]),n("div",ie,[t(p,null,{default:s(()=>[r("Status")]),_:1}),t(c,{items:e.$page.props.attendance_status,"label-property":"name","value-property":"id",error:e.form.attendance_status==3,modelValue:e.form.attendance_status,"onUpdate:modelValue":a[7]||(a[7]=o=>e.form.attendance_status=o),"select-placeholder":"Select Status","search-placeholder":"Search status..."},null,8,["items","error","modelValue"])])])]),footer:s(()=>[t(b,{variant:"outline",onClick:a[8]||(a[8]=o=>e.show_progress_report=!1)},{default:s(()=>[r("Cancel")]),_:1}),t(b,{onClick:e.updateProgressReport},{default:s(()=>[r("Save")]),_:1},8,["onClick"])]),_:1},8,["open"])]),_:1})],64)}}});export{at as default};