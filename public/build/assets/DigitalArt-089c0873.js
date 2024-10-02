import{B as U}from"./Authenticated-63a330e4.js";import{H as B,L as D}from"./@inertiajs-4f2e6820.js";import I from"./StudentInformation-91783b00.js";import{Z as N}from"./@vuepic-d831316d.js";import{M as A}from"./Modal-6756bf97.js";import{h as M}from"./moment-a9aaa855.js";import{a as v}from"./axios-1779699b.js";import{s as O}from"./@vueform-4cba997d.js";import R from"./FeedbackSummary-b6ea8e73.js";import{e as P}from"./vue-debounce-ed417ae1.js";import{_ as E}from"./Card-6bd18383.js";import{_ as z,a as F,b as T,c as y,d as J,e as _}from"./TableRow-19fee62a.js";import{_ as H}from"./DialogModal-9102a744.js";import{_ as Y}from"./Collapsible-eaae5bd3.js";import{_ as w}from"./index-8e495ec1.js";import{y as c,x as s,u as l,Q as o,F as S,be as b,t as u,W as a,v as k,z as n,C as L,J as j,K as h,q as Z}from"./@vue-66b8c761.js";import"./ApplicationLogo-f9b7ff8a.js";import"./radix-vue-aa72069b.js";import"./@floating-ui-b481b296.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-073cd217.js";import"./pusher-js-cb9cdec3.js";import"./cropperjs-c64556db.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./v-calendar-2d2eee44.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-b3927753.js";import"./@radix-icons-de95313b.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-802c39ac.js";import"./vue-978cb4c7.js";import"./lodash.clonedeep-6494eade.js";import"./qs-740c36f9.js";import"./side-channel-eec8ae42.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-d4161e53.js";import"./deepmerge-89e33937.js";import"./nprogress-5b8a22ad.js";import"./lucide-vue-next-bc441494.js";import"./vue-final-modal-40857204.js";const q={class:"p-1 grid grid-cols-1 gap-4"},K={class:""},Q={class:"mb-3"},W={class:""},G={class:""},X={class:""},x={class:""},ee={class:"mb-3"},te={key:0,class:"px-4 py-2 bg-slate-100 rounded-lg"},se={class:"flex items-center space-x-2"},oe={class:"p-1"},re={class:"flex flex-col space-y-1"},ae={class:"pt-3 divide-y"},ie={class:""},le={class:"cursor-pointer"},ne={class:""},de={class:""},me={components:{Head:B,Link:D,Datepicker:N,Modal:A,Multiselect:O},data(){return{show_progress_report:!1,open_objectives:!1,searching:!1,progress_report_list:{},disabled:{themes:!0,lessons:!0,activities:!0,outcomes:!0},list:{teachers:[]},options:{themes:[],lessons:[],activities:[],outcomes:[],objectives:[]},loading:{themes:!1,lessons:!1,activities:!1,outcomes:!1,teachers:!1},search:{theme_id:"",lesson_id:"",activity_id:"",outcome_id:""},form:{teacher_user_id:"",date:"",report_data:[],comments:"",attendance_status:""}}},methods:{viewProgressReport(i){this.clearSearch(),this.form.report_id=this.$page.props.progress_reports[i].id,this.form.teacher_user_id=this.$page.props.progress_reports[i].teacher_user_id,this.form.teacher_name=this.$page.props.progress_reports[i].display_name,this.form.date=this.$page.props.progress_reports[i].date,this.form.report_data=JSON.parse(this.$page.props.progress_reports[i].report_data)?JSON.parse(this.$page.props.progress_reports[i].report_data):[],this.form.attendance_status=this.$page.props.progress_reports[i].attendance_status,this.form.comments=this.$page.props.progress_reports[i].comments,this.show_progress_report=!0},updateProgressReport(){!this.form.date||this.form.attendance_status==3||this.form.attendance_status==1&&this.form.report_data.length<1||this.form.attendance_status==1&&!this.form.teacher_user_id||this.$inertia.post(route("progress_report.store"),this.form,{preserveScroll:!0,preserveState:!1})},findTeachers:P(function(i){i&&(this.loading.teachers=!0,v.get(route("teachers.find"),{params:{keyword:i}}).then(t=>{this.list.teachers=t.data,this.loading.teachers=!1}))},1e3),getLessons(i){this.loading.lessons=!0,this.options.lessons=[],this.options.activities=[],this.options.outcomes=[],this.search.lesson_id="",this.search.activity_id="",this.search.outcome_id="",v.get(route("progress_report.get_art_lessons",i)).then(t=>{this.options.lessons=t.data,this.loading.lessons=!1})},getActivity(i){this.loading.activities=!0,this.options.activities=[],this.options.outcomes=[],this.search.activity_id="",this.search.outcome_id="",v.get(route("progress_report.get_art_activities",i)).then(t=>{this.options.activities=t.data,this.loading.activities=!1})},getOutcomes(i){this.loading.outcomes=!0,this.options.outcomes=[],this.search.outcome_id="",v.get(route("progress_report.get_art_learning_outcomes",i)).then(t=>{this.options.outcomes=t.data,this.loading.outcomes=!1})},addItem(){this.searching||this.search.theme_id&&this.search.lesson_id&&this.search.activity_id&&this.search.outcome_id&&(this.form.report_data.some(t=>t.outcome_id===this.search.outcome_id)?alert("Item exists!"):(this.searching=!0,v.get(route("progress_report.get_art_objectives",this.search.outcome_id)).then(t=>{var $,V,r,p;const e={theme_id:this.search.theme_id,theme_name:($=this.$page.props.art_themes.find(d=>d.id===this.search.theme_id))==null?void 0:$.name,lesson_id:this.search.lesson_id,lesson_name:(V=this.options.lessons.find(d=>d.id===this.search.lesson_id))==null?void 0:V.name,activity_id:this.search.activity_id,activity_name:(r=this.options.activities.find(d=>d.id===this.search.activity_id))==null?void 0:r.name,outcome_id:this.search.outcome_id,outcome_name:(p=this.options.outcomes.find(d=>d.id===this.search.outcome_id))==null?void 0:p.name,objectives:[]},g=this.form.report_data.length;this.form.report_data.push(e);const m=g,f=this.form.report_data[m];t.data.forEach(d=>{f.objectives.push({id:d.id,name:d.name,achieved:!1})}),this.searching=!1})))},deleteItem(i){this.form.report_data.splice(i,1)},clearSearch(){this.form.teacher_user_id="",this.search.theme_id="",this.search.term_book_id="",this.search.lesson_id="",this.search.outcome_id="",this.search.activity_id=""},scrollToTop(){const i=this.$refs.progress_report;i&&(i.scrollTop=0)}},updated(){this.scrollToTop()}},pt=Object.assign(me,{__name:"DigitalArt",setup(i){return(t,e)=>{const g=b("Button"),m=b("Label"),f=b("ComboBox"),$=b("Checkbox"),V=b("Textarea");return u(),c(S,null,[s(l(B),{title:"Progress Report"}),s(U,null,{header:o(()=>e[15]||(e[15]=[])),default:o(()=>[s(I),s(E,null,{title:o(()=>e[16]||(e[16]=[a("Progress Reports")])),content:o(()=>[s(l(z),null,{default:o(()=>[s(l(F),{class:"bg-gray-100"},{default:o(()=>[s(l(T),null,{default:o(()=>[s(l(y),null,{default:o(()=>e[17]||(e[17]=[a("#")])),_:1}),s(l(y),null,{default:o(()=>e[18]||(e[18]=[a("Date")])),_:1}),s(l(y),null,{default:o(()=>e[19]||(e[19]=[a("Teacher's Name")])),_:1}),s(l(y),{class:"text-center"},{default:o(()=>e[20]||(e[20]=[a("Status")])),_:1}),s(l(y),{class:"text-center"},{default:o(()=>e[21]||(e[21]=[a("Action")])),_:1})]),_:1})]),_:1}),s(l(J),null,{default:o(()=>[t.$page.props.progress_reports.length?L("",!0):(u(),k(l(T),{key:0},{default:o(()=>[s(l(_),{class:"text-center",colspan:"10"},{default:o(()=>e[22]||(e[22]=[n("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(u(!0),c(S,null,j(t.$page.props.progress_reports,(r,p)=>(u(),k(l(T),null,{default:o(()=>[s(l(_),null,{default:o(()=>[a(h(p+1),1)]),_:2},1024),s(l(_),null,{default:o(()=>[a(h(l(M)(r.date).format("DD/MM/Y")),1)]),_:2},1024),s(l(_),null,{default:o(()=>[a(h(r.display_name),1)]),_:2},1024),s(l(_),{class:"text-center"},{default:o(()=>[n("span",{class:Z(["inline-flex items-center justify-center px-2 py-1 text-xs rounded",[{"bg-green-200 text-green-600":r.attendance_status==1},{"bg-red-200 text-red-600":r.attendance_status==2},{"bg-gray-200 text-gray-600":r.attendance_status==3}]])},h(r.attendance_status_name),3)]),_:2},1024),s(l(_),{class:"text-center"},{default:o(()=>[s(g,{variant:"outline",onClick:d=>t.viewProgressReport(p)},{default:o(()=>e[23]||(e[23]=[a("Edit")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),s(R,{report_details:t.$page.props.report_details},null,8,["report_details"]),s(H,{open:t.show_progress_report,"onUpdate:open":e[14]||(e[14]=r=>t.show_progress_report=r)},{title:o(()=>e[24]||(e[24]=[a("Edit Progress Report")])),content:o(()=>[n("div",q,[n("div",K,[s(m,null,{default:o(()=>e[25]||(e[25]=[a("Date"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),s(l(N),{modelValue:t.form.date,"onUpdate:modelValue":e[0]||(e[0]=r=>t.form.date=r),mode:"date",format:"dd/MM/Y",error:!t.form.date},null,8,["modelValue","error"])]),n("div",Q,[s(m,null,{default:o(()=>e[26]||(e[26]=[a("Teacher's Name"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),s(f,{items:t.list.teachers,"label-property":"display_name","value-property":"ID",error:t.form.attendance_status==1&&!t.form.teacher_user_id,modelValue:t.form.teacher_user_id,"onUpdate:modelValue":e[1]||(e[1]=r=>t.form.teacher_user_id=r),"select-placeholder":t.form.teacher_name,"search-placeholder":"Search teacher...",onSearch:t.findTeachers,loading:t.loading.teachers},null,8,["items","error","modelValue","select-placeholder","onSearch","loading"])]),n("div",W,[s(m,null,{default:o(()=>e[27]||(e[27]=[a("Theme")])),_:1}),s(f,{items:t.$page.props.art_themes,"label-property":"name","value-property":"id",modelValue:t.search.theme_id,"onUpdate:modelValue":e[2]||(e[2]=r=>t.search.theme_id=r),"select-placeholder":"Select Theme","search-placeholder":"Search theme...",onSelect:e[3]||(e[3]=r=>t.getLessons(t.search.theme_id))},null,8,["items","modelValue"])]),n("div",G,[s(m,null,{default:o(()=>e[28]||(e[28]=[a("Lesson")])),_:1}),s(f,{items:t.options.lessons,"label-property":"name","value-property":"id",modelValue:t.search.lesson_id,"onUpdate:modelValue":e[4]||(e[4]=r=>t.search.lesson_id=r),"select-placeholder":"Select Lesson","search-placeholder":"Search lesson...",onSelect:e[5]||(e[5]=r=>t.getActivity(t.search.lesson_id)),loading:t.loading.lessons},null,8,["items","modelValue","loading"])]),n("div",X,[s(m,null,{default:o(()=>e[29]||(e[29]=[a("Activity")])),_:1}),s(f,{items:t.options.activities,"label-property":"name","value-property":"id",modelValue:t.search.activity_id,"onUpdate:modelValue":e[6]||(e[6]=r=>t.search.activity_id=r),"select-placeholder":"Select Activitiy","search-placeholder":"Search activity...",onSelect:e[7]||(e[7]=r=>t.getOutcomes(t.search.activity_id)),loading:t.loading.activities},null,8,["items","modelValue","loading"])]),n("div",x,[s(m,null,{default:o(()=>e[30]||(e[30]=[a("Learning Outcome")])),_:1}),s(f,{items:t.options.outcomes,"label-property":"name","value-property":"id",modelValue:t.search.outcome_id,"onUpdate:modelValue":e[8]||(e[8]=r=>t.search.outcome_id=r),"select-placeholder":"Select Outcome","search-placeholder":"Search outcome...",onSelect:e[9]||(e[9]=r=>t.addItem()),loading:t.loading.outcomes},null,8,["items","modelValue","loading"])]),n("div",ee,[s(m,null,{default:o(()=>e[31]||(e[31]=[a("Objectives")])),_:1}),t.form.report_data.length?(u(!0),c(S,{key:1},j(t.form.report_data,(r,p)=>(u(),k(Y,{class:"bg-white",modelValue:t.open_objectives,"onUpdate:modelValue":e[10]||(e[10]=d=>t.open_objectives=d)},{trigger:o(()=>[n("div",se,[s(m,null,{default:o(()=>[a(h(r.theme_name)+" : "+h(r.lesson_name),1)]),_:2},1024),s(m,{class:"text-red-600 cursor-pointer",onClick:d=>t.deleteItem(p)},{default:o(()=>e[33]||(e[33]=[a("Delete")])),_:2},1032,["onClick"])])]),content:o(()=>[n("div",oe,[n("div",re,[s(l(w),null,{default:o(()=>[n("span",null,h(r.activity_name),1)]),_:2},1024),s(l(w),{variant:"outline"},{default:o(()=>[n("span",null,h(r.outcome_name),1)]),_:2},1024)]),n("ul",ae,[(u(!0),c(S,null,j(r.objectives,(d,C)=>(u(),c("li",ie,[s(m,{class:"flex items-center space-x-2 py-2"},{default:o(()=>[s($,{value:d.id,checked:t.form.report_data[p].objectives[C].achieved,onClick:pe=>t.form.report_data[p].objectives[C].achieved=!t.form.report_data[p].objectives[C].achieved},null,8,["value","checked","onClick"]),n("span",le,h(d.name),1)]),_:2},1024)]))),256))])])]),_:2},1032,["modelValue"]))),256)):(u(),c("div",te,[s(m,null,{default:o(()=>e[32]||(e[32]=[a("No objectives found.")])),_:1})])),!t.form.report_data.length&&t.form.attendance_status==1?(u(),k(m,{key:2,class:"text-xs text-red-500 font-semibold"},{default:o(()=>e[34]||(e[34]=[a("At least one (1) objective is required.")])),_:1})):L("",!0)]),n("div",ne,[s(m,null,{default:o(()=>e[35]||(e[35]=[a("Comments")])),_:1}),s(V,{rows:"3",modelValue:t.form.comments,"onUpdate:modelValue":e[11]||(e[11]=r=>t.form.comments=r),modelModifiers:{lazy:!0}},null,8,["modelValue"])]),n("div",de,[s(m,null,{default:o(()=>e[36]||(e[36]=[a("Status")])),_:1}),s(f,{items:t.$page.props.attendance_status,"label-property":"name","value-property":"id",error:t.form.attendance_status==3,modelValue:t.form.attendance_status,"onUpdate:modelValue":e[12]||(e[12]=r=>t.form.attendance_status=r),"select-placeholder":"Select Status","search-placeholder":"Search status..."},null,8,["items","error","modelValue"])])])]),footer:o(()=>[s(g,{variant:"outline",onClick:e[13]||(e[13]=r=>t.show_progress_report=!1)},{default:o(()=>e[37]||(e[37]=[a("Cancel")])),_:1}),s(g,{onClick:t.updateProgressReport},{default:o(()=>e[38]||(e[38]=[a("Save")])),_:1},8,["onClick"])]),_:1},8,["open"])]),_:1})],64)}}});export{pt as default};
