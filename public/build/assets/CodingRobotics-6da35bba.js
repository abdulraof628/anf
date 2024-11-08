import{B as L}from"./Authenticated-e544629c.js";import{H as B,L as N}from"./@inertiajs-dde9cc4c.js";import R from"./StudentInformation-2e66ca96.js";import{h as U}from"./moment-a9aaa855.js";import{a as j}from"./axios-1779699b.js";import D from"./FeedbackSummary-58fd8bef.js";import{e as I}from"./vue-debounce-ed417ae1.js";import{_ as O}from"./Card-9d1429a6.js";import{_ as E,a as P,b as k,c as g,d as M,e as c}from"./TableRow-27ad490d.js";import{_ as z}from"./DialogModal-d673a68c.js";import{_ as A}from"./Collapsible-1a15da1f.js";import{y as $,x as s,u as l,Q as o,F as C,be as _,t as m,W as i,v as V,z as n,C as w,J as T,K as u,q as F}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-47014c23.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-dc86d4f5.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./DialogDescription-dbd48133.js";import"./vue3-markdown-13648449.js";import"./groq-sdk-5d132fed.js";import"./lucide-vue-next-81b3e39b.js";const J={class:"p-1 grid grid-cols-1 gap-4"},H={class:""},Y={class:""},q={class:"mb-3"},K={class:""},Q={class:""},W={class:""},G={class:"mb-3"},X={key:0,class:"px-4 py-2 bg-slate-100 rounded-lg"},Z={class:"flex items-center space-x-2"},x={class:"p-1"},ee={class:""},te={class:""},se={components:{Head:B,Link:N},data(){return{show_progress_report:!1,open_objectives:[],searching:!1,progress_report_list:{},list:{teachers:[]},options:{lessons:[],topics:[],objectives:[],activities_procedures:[]},loading:{topics:!1,objectives:!1,lessons:!1,teachers:!1},search:{lesson_id:"",topic_id:"",objective_id:""},form:{teacher_user_id:"",revision:!1,date:"",report_data:[],comments:"",attendance_status:""}}},methods:{viewProgressReport(a){this.clearSearch(),this.form.report_id=this.$page.props.progress_reports[a].id,this.form.teacher_user_id=this.$page.props.progress_reports[a].teacher_user_id,this.form.teacher_name=this.$page.props.progress_reports[a].display_name,this.form.date=this.$page.props.progress_reports[a].date,this.form.report_data=JSON.parse(this.$page.props.progress_reports[a].report_data)?JSON.parse(this.$page.props.progress_reports[a].report_data):[],this.form.attendance_status=this.$page.props.progress_reports[a].attendance_status,this.form.comments=this.$page.props.progress_reports[a].comments,this.form.revision=!!this.$page.props.progress_reports[a].revision,this.show_progress_report=!0},updateProgressReport(){!this.form.date||this.form.attendance_status==3||this.form.attendance_status==1&&this.form.report_data.length<1||this.form.attendance_status==1&&!this.form.teacher_user_id||this.$inertia.post(route("progress_report.store"),this.form,{preserveScroll:!0,preserveState:!1})},findTeachers:I(function(a){a&&(this.loading.teachers=!0,j.get(route("teachers.find"),{params:{keyword:a}}).then(t=>{this.list.teachers=t.data,this.loading.teachers=!1}))},1e3),getTopics(a){this.loading.topics=!0,this.options.topics=[],this.options.objectives=[],this.search.topic_id="",this.search.objective_id="",j.get(route("progress_report.get_coding_topics",a)).then(t=>{this.options.topics=t.data,this.loading.topics=!1})},getObjectives(a){this.loading.objectives=!0,this.options.objectives=[],this.search.objective_id="",j.get(route("progress_report.get_coding_objectives",a)).then(t=>{this.options.objectives=t.data,this.loading.objectives=!1})},addItem(){this.searching||this.search.lesson_id&&this.search.topic_id&&this.search.objective_id&&(this.form.report_data.some(t=>t.objective_id===this.search.objective_id)?alert("Item Exists!"):(this.searching=!0,j.get(route("progress_report.get_coding_activities_procedures",this.search.objective_id)).then(t=>{var d,v,b;const e={lesson_id:this.search.lesson_id,lesson_name:(d=this.$page.props.coding_lessons.find(r=>r.id===this.search.lesson_id))==null?void 0:d.name,topic_id:this.search.topic_id,topic_name:(v=this.options.topics.find(r=>r.id===this.search.topic_id))==null?void 0:v.name,objective_id:this.search.objective_id,objective_name:(b=this.options.objectives.find(r=>r.id===this.search.objective_id))==null?void 0:b.name,activities_procedures:[]},h=this.form.report_data.length;this.form.report_data.push(e);const p=h,y=this.form.report_data[p];t.data.forEach(r=>{y.activities_procedures.push({id:r.id,name:r.name,achieved:!1})}),this.searching=!1})))},deleteItem(a){this.form.report_data.splice(a,1)},clearSearch(){this.form.teacher_user_id="",this.search.objective_id="",this.search.topic_id="",this.search.lesson_id=""}}},st=Object.assign(se,{__name:"CodingRobotics",setup(a){return(t,e)=>{const h=_("Button"),p=_("Label"),y=_("Datepicker"),d=_("ComboBox"),v=_("Checkbox"),b=_("Textarea");return m(),$(C,null,[s(l(B),{title:"Progress Report"}),s(L,null,{header:o(()=>e[13]||(e[13]=[])),default:o(()=>[s(R),s(O,null,{title:o(()=>e[14]||(e[14]=[i("Progress Reports")])),content:o(()=>[s(l(E),null,{default:o(()=>[s(l(P),{class:"bg-gray-100"},{default:o(()=>[s(l(k),null,{default:o(()=>[s(l(g),null,{default:o(()=>e[15]||(e[15]=[i("#")])),_:1}),s(l(g),null,{default:o(()=>e[16]||(e[16]=[i("Date")])),_:1}),s(l(g),null,{default:o(()=>e[17]||(e[17]=[i("Teacher's Name")])),_:1}),s(l(g),{class:"text-center"},{default:o(()=>e[18]||(e[18]=[i("Status")])),_:1}),s(l(g),{class:"text-center"},{default:o(()=>e[19]||(e[19]=[i("Action")])),_:1})]),_:1})]),_:1}),s(l(M),null,{default:o(()=>[t.$page.props.progress_reports.length?w("",!0):(m(),V(l(k),{key:0},{default:o(()=>[s(l(c),{class:"text-center",colspan:"10"},{default:o(()=>e[20]||(e[20]=[n("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(m(!0),$(C,null,T(t.$page.props.progress_reports,(r,f)=>(m(),V(l(k),null,{default:o(()=>[s(l(c),null,{default:o(()=>[i(u(f+1),1)]),_:2},1024),s(l(c),null,{default:o(()=>[i(u(l(U)(r.date).format("DD/MM/Y")),1)]),_:2},1024),s(l(c),null,{default:o(()=>[i(u(r.display_name),1)]),_:2},1024),s(l(c),{class:"text-center"},{default:o(()=>[n("span",{class:F(["inline-flex items-center justify-center px-2 py-1 text-xs rounded",[{"bg-green-200 text-green-600":r.attendance_status==1},{"bg-red-200 text-red-600":r.attendance_status==2},{"bg-gray-200 text-gray-600":r.attendance_status==3}]])},u(r.attendance_status_name),3)]),_:2},1024),s(l(c),{class:"text-center"},{default:o(()=>[s(h,{variant:"outline",onClick:S=>t.viewProgressReport(f)},{default:o(()=>e[21]||(e[21]=[i("Edit")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),s(D,{report_details:t.$page.props.report_details},null,8,["report_details"]),s(z,{open:t.show_progress_report,"onUpdate:open":e[12]||(e[12]=r=>t.show_progress_report=r)},{title:o(()=>e[22]||(e[22]=[i("Edit Progress Report")])),content:o(()=>[n("div",J,[n("div",H,[s(p,{id:"date"},{default:o(()=>e[23]||(e[23]=[i("Date"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),s(y,{modelValue:t.form.date,"onUpdate:modelValue":e[0]||(e[0]=r=>t.form.date=r),mode:"date",format:"dd/MM/Y",error:!t.form.date,teleport:"#date",teleportCenter:!0},null,8,["modelValue","error"])]),n("div",Y,[s(p,null,{default:o(()=>e[24]||(e[24]=[i("Teacher's Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),s(d,{items:t.list.teachers,"label-property":"display_name","value-property":"ID",error:t.form.attendance_status==1&&!t.form.teacher_user_id,modelValue:t.form.teacher_user_id,"onUpdate:modelValue":e[1]||(e[1]=r=>t.form.teacher_user_id=r),"select-placeholder":t.form.teacher_name,"search-placeholder":"Search teacher...",onSearch:t.findTeachers,loading:t.loading.teachers},null,8,["items","error","modelValue","select-placeholder","onSearch","loading"])]),n("div",q,[s(p,{class:"flex items-center space-x-2"},{default:o(()=>[s(v,{value:t.form.revision,checked:t.form.revision,onClick:e[2]||(e[2]=r=>t.form.revision=!t.form.revision)},null,8,["value","checked"]),e[25]||(e[25]=n("span",{class:"cursor-pointer"},"Revision",-1))]),_:1})]),n("div",K,[s(p,null,{default:o(()=>e[26]||(e[26]=[i("Lesson")])),_:1}),s(d,{items:t.$page.props.coding_lessons,"label-property":"name","value-property":"id",modelValue:t.search.lesson_id,"onUpdate:modelValue":e[3]||(e[3]=r=>t.search.lesson_id=r),"select-placeholder":"Select Lesson","search-placeholder":"Search lesson...",onSelect:e[4]||(e[4]=r=>t.getTopics(t.search.lesson_id))},null,8,["items","modelValue"])]),n("div",Q,[s(p,null,{default:o(()=>e[27]||(e[27]=[i("Topic")])),_:1}),s(d,{items:t.options.topics,"label-property":"name","value-property":"id",modelValue:t.search.topic_id,"onUpdate:modelValue":e[5]||(e[5]=r=>t.search.topic_id=r),"select-placeholder":"Select Topic","search-placeholder":"Search topic...",onSelect:e[6]||(e[6]=r=>t.getObjectives(t.search.topic_id)),loading:t.loading.topics},null,8,["items","modelValue","loading"])]),n("div",W,[s(p,null,{default:o(()=>e[28]||(e[28]=[i("Learning Objective")])),_:1}),s(d,{items:t.options.objectives,"label-property":"name","value-property":"id",modelValue:t.search.objective_id,"onUpdate:modelValue":e[7]||(e[7]=r=>t.search.objective_id=r),"select-placeholder":"Select Objective","search-placeholder":"Search objective...",onSelect:e[8]||(e[8]=r=>t.addItem()),loading:t.loading.objectives},null,8,["items","modelValue","loading"])]),n("div",G,[s(p,null,{default:o(()=>e[29]||(e[29]=[i("Objectives")])),_:1}),t.form.report_data.length?(m(!0),$(C,{key:1},T(t.form.report_data,(r,f)=>(m(),V(A,{class:"bg-white",modelValue:t.open_objectives[f],"onUpdate:modelValue":S=>t.open_objectives[f]=S},{trigger:o(()=>[n("div",Z,[s(p,{class:"whitespace-pre-line"},{default:o(()=>[i(u(r.lesson_name)+" : "+u(r.topic_name),1)]),_:2},1024),s(p,{class:"text-red-600 cursor-pointer",onClick:S=>t.deleteItem(f)},{default:o(()=>e[31]||(e[31]=[i("Delete")])),_:2},1032,["onClick"])])]),content:o(()=>[n("div",x,[s(p,null,{default:o(()=>[i(u(r.objective_name),1)]),_:2},1024)])]),_:2},1032,["modelValue","onUpdate:modelValue"]))),256)):(m(),$("div",X,[s(p,null,{default:o(()=>e[30]||(e[30]=[i("No objectives found.")])),_:1})])),!t.form.report_data.length&&t.form.attendance_status==1?(m(),V(p,{key:2,class:"text-xs text-red-500 font-semibold"},{default:o(()=>e[32]||(e[32]=[i("At least one (1) objective is required.")])),_:1})):w("",!0)]),n("div",ee,[s(p,null,{default:o(()=>e[33]||(e[33]=[i("Comments")])),_:1}),s(b,{rows:"10",modelValue:t.form.comments,"onUpdate:modelValue":e[9]||(e[9]=r=>t.form.comments=r),modelModifiers:{lazy:!0}},null,8,["modelValue"])]),n("div",te,[s(p,null,{default:o(()=>e[34]||(e[34]=[i("Status")])),_:1}),s(d,{items:t.$page.props.attendance_status,"label-property":"name","value-property":"id",error:t.form.attendance_status==3,modelValue:t.form.attendance_status,"onUpdate:modelValue":e[10]||(e[10]=r=>t.form.attendance_status=r),"select-placeholder":"Select Status","search-placeholder":"Search status..."},null,8,["items","error","modelValue"])])])]),footer:o(()=>[s(h,{variant:"outline",onClick:e[11]||(e[11]=r=>t.show_progress_report=!1)},{default:o(()=>e[35]||(e[35]=[i("Cancel")])),_:1}),s(h,{onClick:t.updateProgressReport},{default:o(()=>e[36]||(e[36]=[i("Save")])),_:1},8,["onClick"])]),_:1},8,["open"])]),_:1})],64)}}});export{st as default};
