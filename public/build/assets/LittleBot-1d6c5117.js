import{B as N}from"./Authenticated-63a330e4.js";import{H as T,L as D}from"./@inertiajs-4f2e6820.js";import I from"./StudentInformation-91783b00.js";import{h as R}from"./moment-a9aaa855.js";import{a as C}from"./axios-1779699b.js";import U from"./FeedbackSummary-b6ea8e73.js";import{e as E}from"./vue-debounce-ed417ae1.js";import{_ as P}from"./Card-6bd18383.js";import{_ as M,a as z,b as j,c as $,d as O,e as c}from"./TableRow-19fee62a.js";import{_ as A}from"./DialogModal-9102a744.js";import{_ as F}from"./Collapsible-eaae5bd3.js";import{y as g,x as s,u as i,Q as o,F as y,be as v,t as d,W as a,v as k,z as n,C as B,J as w,K as _,q as J}from"./@vue-66b8c761.js";import"./ApplicationLogo-f9b7ff8a.js";import"./radix-vue-aa72069b.js";import"./@floating-ui-b481b296.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-073cd217.js";import"./pusher-js-cb9cdec3.js";import"./@vueform-4cba997d.js";import"./@vuepic-d831316d.js";import"./@babel-1b80a44a.js";import"./cropperjs-c64556db.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./v-calendar-2d2eee44.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-b3927753.js";import"./@radix-icons-de95313b.js";import"./lodash.isequal-802c39ac.js";import"./vue-978cb4c7.js";import"./lodash.clonedeep-6494eade.js";import"./qs-740c36f9.js";import"./side-channel-eec8ae42.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-d4161e53.js";import"./deepmerge-89e33937.js";import"./nprogress-5b8a22ad.js";import"./lucide-vue-next-bc441494.js";const H={class:"p-1 grid grid-cols-1 gap-4"},Y={class:""},q={class:"mb-3"},K={class:""},Q={class:""},W={class:"mb-3"},G={key:0,class:"px-4 py-2 bg-slate-100 rounded-lg"},X={class:"flex items-center space-x-2"},Z={class:"p-1"},x={class:"divide-y"},ee={class:""},te={class:"cursor-pointer"},se={class:""},oe={class:""},re={components:{Head:T,Link:D},data(){return{show_progress_report:!1,open_objectives:!1,searching:!1,progress_report_list:{},list:{teachers:[]},options:{lessons:[],topics:[],objectives:[]},loading:{lessons:!1,teachers:!1},search:{lesson_id:"",topic_id:""},form:{teacher_user_id:"",date:"",report_data:[],comments:"",attendance_status:""}}},methods:{viewProgressReport(l){this.clearSearch(),this.form.report_id=this.$page.props.progress_reports[l].id,this.form.teacher_user_id=this.$page.props.progress_reports[l].teacher_user_id,this.form.teacher_name=this.$page.props.progress_reports[l].display_name,this.form.date=this.$page.props.progress_reports[l].date,this.form.report_data=JSON.parse(this.$page.props.progress_reports[l].report_data)?JSON.parse(this.$page.props.progress_reports[l].report_data):[],this.form.attendance_status=this.$page.props.progress_reports[l].attendance_status,this.form.comments=this.$page.props.progress_reports[l].comments,this.show_progress_report=!0},updateProgressReport(){!this.form.date||this.form.attendance_status==3||this.form.attendance_status==1&&this.form.report_data.length<1||this.form.attendance_status==1&&!this.form.teacher_user_id||this.$inertia.post(route("progress_report.store"),this.form,{preserveScroll:!0,preserveState:!1})},findTeachers:E(function(l){l&&(this.loading.teachers=!0,C.get(route("teachers.find"),{params:{keyword:l}}).then(t=>{this.list.teachers=t.data,this.loading.teachers=!1}))},1e3),getTopics(l){this.loading.topics=!0,this.options.topics=[],this.options.objectives=[],this.search.topic_id="",this.search.objective_id="",C.get(route("progress_report.get_little_bot_topics",l)).then(t=>{this.options.topics=t.data,this.loading.topics=!1})},addItem(){this.searching||this.search.lesson_id&&this.search.topic_id&&(this.form.report_data.some(t=>t.topic_id===this.search.topic_id)?alert("Item Exists!"):(this.searching=!0,C.get(route("progress_report.get_little_bot_objectives",this.search.topic_id)).then(t=>{var u;const e={lesson_id:this.search.lesson_id,lesson_name:this.$page.props.little_bot_lessons.find(m=>m.id===this.search.lesson_id).name,topic_id:this.search.topic_id,topic_name:(u=this.options.topics.find(m=>m.id===this.search.topic_id))==null?void 0:u.name,objectives:[]},b=this.form.report_data.length;this.form.report_data.push(e);const p=b,V=this.form.report_data[p];t.data.forEach(m=>{V.objectives.push({id:m.id,name:m.name,achieved:!1})}),this.searching=!1})))},deleteItem(l){this.form.report_data.splice(l,1)},clearSearch(){this.form.teacher_user_id="",this.search.lesson_id="",this.search.topic_id=""}}},st=Object.assign(re,{__name:"LittleBot",setup(l){return(t,e)=>{const b=v("Button"),p=v("Label"),V=v("Datepicker"),u=v("ComboBox"),m=v("Checkbox"),L=v("Textarea");return d(),g(y,null,[s(i(T),{title:"Progress Report"}),s(N,null,{header:o(()=>e[10]||(e[10]=[])),default:o(()=>[s(I),s(P,null,{title:o(()=>e[11]||(e[11]=[a("Progress Reports")])),content:o(()=>[s(i(M),null,{default:o(()=>[s(i(z),{class:"bg-gray-100"},{default:o(()=>[s(i(j),null,{default:o(()=>[s(i($),null,{default:o(()=>e[12]||(e[12]=[a("#")])),_:1}),s(i($),null,{default:o(()=>e[13]||(e[13]=[a("Date")])),_:1}),s(i($),null,{default:o(()=>e[14]||(e[14]=[a("Teacher's Name")])),_:1}),s(i($),{class:"text-center"},{default:o(()=>e[15]||(e[15]=[a("Status")])),_:1}),s(i($),{class:"text-center"},{default:o(()=>e[16]||(e[16]=[a("Action")])),_:1})]),_:1})]),_:1}),s(i(O),null,{default:o(()=>[t.$page.props.progress_reports.length?B("",!0):(d(),k(i(j),{key:0},{default:o(()=>[s(i(c),{class:"text-center",colspan:"10"},{default:o(()=>e[17]||(e[17]=[n("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(d(!0),g(y,null,w(t.$page.props.progress_reports,(r,f)=>(d(),k(i(j),null,{default:o(()=>[s(i(c),null,{default:o(()=>[a(_(f+1),1)]),_:2},1024),s(i(c),null,{default:o(()=>[a(_(i(R)(r.date).format("DD/MM/Y")),1)]),_:2},1024),s(i(c),null,{default:o(()=>[a(_(r.display_name),1)]),_:2},1024),s(i(c),{class:"text-center"},{default:o(()=>[n("span",{class:J(["inline-flex items-center justify-center px-2 py-1 text-xs rounded",[{"bg-green-200 text-green-600":r.attendance_status==1},{"bg-red-200 text-red-600":r.attendance_status==2},{"bg-gray-200 text-gray-600":r.attendance_status==3}]])},_(r.attendance_status_name),3)]),_:2},1024),s(i(c),{class:"text-center"},{default:o(()=>[s(b,{variant:"outline",onClick:h=>t.viewProgressReport(f)},{default:o(()=>e[18]||(e[18]=[a("Edit")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),s(U,{report_details:t.$page.props.report_details},null,8,["report_details"]),s(A,{open:t.show_progress_report,"onUpdate:open":e[9]||(e[9]=r=>t.show_progress_report=r)},{title:o(()=>e[19]||(e[19]=[a("Edit Progress Report")])),content:o(()=>[n("div",H,[n("div",Y,[s(p,null,{default:o(()=>e[20]||(e[20]=[a("Date"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),s(V,{modelValue:t.form.date,"onUpdate:modelValue":e[0]||(e[0]=r=>t.form.date=r),mode:"date",format:"dd/MM/Y",error:!t.form.date},null,8,["modelValue","error"])]),n("div",q,[s(p,null,{default:o(()=>e[21]||(e[21]=[a("Teacher's Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),s(u,{items:t.list.teachers,"label-property":"display_name","value-property":"ID",error:t.form.attendance_status==1&&!t.form.teacher_user_id,modelValue:t.form.teacher_user_id,"onUpdate:modelValue":e[1]||(e[1]=r=>t.form.teacher_user_id=r),"select-placeholder":t.form.teacher_name,"search-placeholder":"Search teacher...",onSearch:t.findTeachers,loading:t.loading.teachers},null,8,["items","error","modelValue","select-placeholder","onSearch","loading"])]),n("div",K,[s(p,null,{default:o(()=>e[22]||(e[22]=[a("Lesson")])),_:1}),s(u,{items:t.$page.props.little_bot_lessons,"label-property":"name","value-property":"id",modelValue:t.search.lesson_id,"onUpdate:modelValue":e[2]||(e[2]=r=>t.search.lesson_id=r),"select-placeholder":"Select Lesson","search-placeholder":"Search lesson...",onSelect:e[3]||(e[3]=r=>t.getTopics(t.search.lesson_id))},null,8,["items","modelValue"])]),n("div",Q,[s(p,null,{default:o(()=>e[23]||(e[23]=[a("Topic")])),_:1}),s(u,{items:t.options.topics,"label-property":"name","value-property":"id",modelValue:t.search.topic_id,"onUpdate:modelValue":e[4]||(e[4]=r=>t.search.topic_id=r),"select-placeholder":"Select Topic","search-placeholder":"Search topic...",onSelect:t.addItem,loading:t.loading.topics},null,8,["items","modelValue","onSelect","loading"])]),n("div",W,[s(p,null,{default:o(()=>e[24]||(e[24]=[a("Objectives")])),_:1}),t.form.report_data.length?(d(!0),g(y,{key:1},w(t.form.report_data,(r,f)=>(d(),k(F,{class:"bg-white",modelValue:t.open_objectives,"onUpdate:modelValue":e[5]||(e[5]=h=>t.open_objectives=h)},{trigger:o(()=>[n("div",X,[s(p,null,{default:o(()=>[a(_(r.lesson_name)+" : ",1)]),_:2},1024),s(p,null,{default:o(()=>[a(_(r.topic_name),1)]),_:2},1024),s(p,{class:"text-red-600 cursor-pointer",onClick:h=>t.deleteItem(f)},{default:o(()=>e[26]||(e[26]=[a("Delete")])),_:2},1032,["onClick"])])]),content:o(()=>[n("div",Z,[n("ul",x,[(d(!0),g(y,null,w(r.objectives,(h,S)=>(d(),g("li",ee,[s(p,{class:"flex items-center space-x-2 py-2"},{default:o(()=>[s(m,{value:h.id,checked:t.form.report_data[f].objectives[S].achieved,onClick:ae=>t.form.report_data[f].objectives[S].achieved=!t.form.report_data[f].objectives[S].achieved},null,8,["value","checked","onClick"]),n("span",te,_(h.name),1)]),_:2},1024)]))),256))])])]),_:2},1032,["modelValue"]))),256)):(d(),g("div",G,[s(p,null,{default:o(()=>e[25]||(e[25]=[a("No objectives found.")])),_:1})])),!t.form.report_data.length&&t.form.attendance_status==1?(d(),k(p,{key:2,class:"text-xs text-red-500 font-semibold"},{default:o(()=>e[27]||(e[27]=[a("At least one (1) objective is required.")])),_:1})):B("",!0)]),n("div",se,[s(p,null,{default:o(()=>e[28]||(e[28]=[a("Comments")])),_:1}),s(L,{rows:"3",modelValue:t.form.comments,"onUpdate:modelValue":e[6]||(e[6]=r=>t.form.comments=r),modelModifiers:{lazy:!0}},null,8,["modelValue"])]),n("div",oe,[s(p,null,{default:o(()=>e[29]||(e[29]=[a("Status")])),_:1}),s(u,{items:t.$page.props.attendance_status,"label-property":"name","value-property":"id",error:t.form.attendance_status==3,modelValue:t.form.attendance_status,"onUpdate:modelValue":e[7]||(e[7]=r=>t.form.attendance_status=r),"select-placeholder":"Select Status","search-placeholder":"Search status..."},null,8,["items","error","modelValue"])])])]),footer:o(()=>[s(b,{variant:"outline",onClick:e[8]||(e[8]=r=>t.show_progress_report=!1)},{default:o(()=>e[30]||(e[30]=[a("Cancel")])),_:1}),s(b,{onClick:t.updateProgressReport},{default:o(()=>e[31]||(e[31]=[a("Save")])),_:1},8,["onClick"])]),_:1},8,["open"])]),_:1})],64)}}});export{st as default};
