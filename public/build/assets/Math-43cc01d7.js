import{B as N}from"./Authenticated-627fff65.js";import{H as L,L as D}from"./@inertiajs-7f289881.js";import R from"./StudentInformation-1d8694da.js";import{h as T}from"./moment-a9aaa855.js";import{a as y}from"./axios-1779699b.js";import E from"./FeedbackSummary-ab0aec46.js";import{e as P}from"./vue-debounce-ed417ae1.js";import{_ as M}from"./Card-7fc11d89.js";import{_ as z,a as O,b as U,c as k,d as A,e as g}from"./TableRow-ebd02efa.js";import{_ as F}from"./DialogModal-2ff1b8c3.js";import{_ as J}from"./Collapsible-107d1ef1.js";import{_ as I}from"./index-b42b41a8.js";import{y as _,x as s,u as i,Q as o,F as V,be as c,t as p,W as a,v as S,z as l,C as w,J as B,K as f,q as H}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-79eedadb.js";import"./pusher-js-d90fcbf8.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-23e774d5.js";import"./DialogDescription-92161d9e.js";import"./lucide-vue-next-53796c49.js";const Y={class:"p-1 grid grid-cols-1 gap-4"},q={class:""},K={class:""},Q={class:"mb-3"},W={class:""},G={class:""},X={class:""},Z={class:"mb-3"},x={key:0,class:"px-4 py-2 bg-slate-100 rounded-lg"},ee={class:"flex items-center space-x-2"},te={class:"p-1"},se={class:"flex flex-col space-y-1"},oe={key:0,class:"pt-3 divide-y"},re={class:""},ae={class:"cursor-pointer"},ie={class:""},le={class:""},ne={components:{Head:L,Link:D},data(){return{open_prompt:!1,additional_inputs:"",generating:{comments:!1},value:[],show_progress_report:!1,open_objectives:[],searching:!1,progress_report_list:{},list:{teachers:[]},options:{terms_books:[],units:[],lessons:[],objectives:[]},loading:{terms_books:!1,units:!1,lessons:!1,objectives:!1,teachers:!1},search:{term_book_id:"",unit_id:[],lesson_id:[]},form:{teacher_user_id:"",revision:!0,date:"",report_data:[],comments:"",attendance_status:""}}},methods:{viewProgressReport(n){this.clearSearch(),this.form.report_id=this.$page.props.progress_reports[n].id,this.form.teacher_user_id=this.$page.props.progress_reports[n].teacher_user_id,this.form.teacher_name=this.$page.props.progress_reports[n].display_name,this.form.date=this.$page.props.progress_reports[n].date,this.form.report_data=JSON.parse(this.$page.props.progress_reports[n].report_data)?JSON.parse(this.$page.props.progress_reports[n].report_data):[],this.form.attendance_status=this.$page.props.progress_reports[n].attendance_status,this.form.comments=this.$page.props.progress_reports[n].comments,this.form.revision=!!this.$page.props.progress_reports[n].revision,this.show_progress_report=!0},updateProgressReport(){!this.form.date||this.form.attendance_status==3||this.form.attendance_status==1&&this.form.report_data.length<1||this.form.attendance_status==1&&!this.form.teacher_user_id||this.$inertia.post(route("progress_report.store"),this.form,{preserveScroll:!0,preserveState:!1})},findTeachers:P(function(n){n&&(this.loading.teachers=!0,y.get(route("teachers.find"),{params:{keyword:n}}).then(t=>{this.list.teachers=t.data,this.loading.teachers=!1}))},1e3),getUnits(n){this.loading.units=!0,this.options.units=[],this.options.lessons=[],this.search.unit_id=[],this.search.lesson_id="",y.get(route("progress_report.get_math_units",n)).then(t=>{this.options.units=t.data,this.loading.units=!1})},getLessons(n){this.loading.lessons=!0,this.options.lessons=[],this.search.lesson_id="",y.get(route("progress_report.get_math_lessons",n)).then(t=>{this.options.lessons=t.data,this.loading.lessons=!1})},addItem(){this.searching||this.search.term_book_id&&this.search.unit_id&&this.search.lesson_id&&(this.form.report_data.some(t=>t.lesson_id===this.search.lesson_id)?alert("Item Exists!"):(this.searching=!0,y.get(route("progress_report.get_math_objectives",this.search.lesson_id)).then(t=>{var u,b,$;const e={term_book_id:this.search.term_book_id,term_book_name:(u=this.$page.props.math_terms_books.find(r=>r.id===this.search.term_book_id))==null?void 0:u.name,unit_id:this.search.unit_id,unit_name:(b=this.options.units.find(r=>r.id===this.search.unit_id))==null?void 0:b.name,lesson_id:this.search.lesson_id,lesson_name:($=this.options.lessons.find(r=>r.id===this.search.lesson_id))==null?void 0:$.name,objectives:[]},v=this.form.report_data.length;this.form.report_data.push(e);const d=v,C=this.form.report_data[d];t.data.forEach(r=>{C.objectives.push({id:r.id,name:r.name,achieved:!1})}),this.searching=!1})))},deleteItem(n){this.form.report_data.splice(n,1)},clearSearch(){this.form.teacher_user_id="",this.search.term_book_id="",this.search.unit_id=[],this.search.lesson_id=""}}},dt=Object.assign(ne,{__name:"Math",setup(n){return(t,e)=>{const v=c("Button"),d=c("Label"),C=c("Datepicker"),u=c("ComboBox"),b=c("Checkbox"),$=c("Textarea");return p(),_(V,null,[s(i(L),{title:"Progress Report"}),s(N,null,{header:o(()=>e[13]||(e[13]=[])),default:o(()=>[s(R),s(M,null,{title:o(()=>e[14]||(e[14]=[a("Progress Reports")])),content:o(()=>[s(i(z),null,{default:o(()=>[s(i(O),{class:"bg-gray-100"},{default:o(()=>[s(i(U),null,{default:o(()=>[s(i(k),null,{default:o(()=>e[15]||(e[15]=[a("#")])),_:1}),s(i(k),null,{default:o(()=>e[16]||(e[16]=[a("Date")])),_:1}),s(i(k),null,{default:o(()=>e[17]||(e[17]=[a("Teacher's Name")])),_:1}),s(i(k),{class:"text-center"},{default:o(()=>e[18]||(e[18]=[a("Status")])),_:1}),s(i(k),{class:"text-center"},{default:o(()=>e[19]||(e[19]=[a("Action")])),_:1})]),_:1})]),_:1}),s(i(A),null,{default:o(()=>[t.$page.props.progress_reports.length?w("",!0):(p(),S(i(U),{key:0},{default:o(()=>[s(i(g),{class:"text-center",colspan:"10"},{default:o(()=>e[20]||(e[20]=[l("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(p(!0),_(V,null,B(t.$page.props.progress_reports,(r,m)=>(p(),S(i(U),null,{default:o(()=>[s(i(g),null,{default:o(()=>[a(f(m+1),1)]),_:2},1024),s(i(g),null,{default:o(()=>[a(f(i(T)(r.date).format("DD/MM/Y")),1)]),_:2},1024),s(i(g),null,{default:o(()=>[a(f(r.display_name),1)]),_:2},1024),s(i(g),{class:"text-center"},{default:o(()=>[l("span",{class:H(["inline-flex items-center justify-center px-2 py-1 text-xs rounded",[{"bg-green-200 text-green-600":r.attendance_status==1},{"bg-red-200 text-red-600":r.attendance_status==2},{"bg-gray-200 text-gray-600":r.attendance_status==3}]])},f(r.attendance_status_name),3)]),_:2},1024),s(i(g),{class:"text-center"},{default:o(()=>[s(v,{variant:"outline",onClick:h=>t.viewProgressReport(m)},{default:o(()=>e[21]||(e[21]=[a("Edit")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),s(E,{report_details:t.$page.props.report_details},null,8,["report_details"]),s(F,{open:t.show_progress_report,"onUpdate:open":e[12]||(e[12]=r=>t.show_progress_report=r)},{title:o(()=>e[22]||(e[22]=[a("Edit Progress Report")])),content:o(()=>[l("div",Y,[l("div",q,[s(d,{id:"date"},{default:o(()=>e[23]||(e[23]=[a("Date"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),s(C,{modelValue:t.form.date,"onUpdate:modelValue":e[0]||(e[0]=r=>t.form.date=r),mode:"date",format:"dd/MM/Y",error:!t.form.date,teleport:"#date",teleportCenter:!0},null,8,["modelValue","error"])]),l("div",K,[s(d,null,{default:o(()=>e[24]||(e[24]=[a("Teacher's Name"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),s(u,{items:t.list.teachers,"label-property":"display_name","value-property":"ID",error:t.form.attendance_status==1&&!t.form.teacher_user_id,modelValue:t.form.teacher_user_id,"onUpdate:modelValue":e[1]||(e[1]=r=>t.form.teacher_user_id=r),"select-placeholder":t.form.teacher_name,"search-placeholder":"Search teacher...",onSearch:t.findTeachers,loading:t.loading.teachers},null,8,["items","error","modelValue","select-placeholder","onSearch","loading"])]),l("div",Q,[s(d,{class:"flex items-center space-x-2"},{default:o(()=>[s(b,{value:t.form.revision,checked:t.form.revision,onClick:e[2]||(e[2]=r=>t.form.revision=!t.form.revision)},null,8,["value","checked"]),e[25]||(e[25]=l("span",{class:"cursor-pointer"},"Revision",-1))]),_:1})]),l("div",W,[s(d,null,{default:o(()=>e[26]||(e[26]=[a("Term / Book")])),_:1}),s(u,{items:t.$page.props.math_terms_books,"label-property":"name","value-property":"id",modelValue:t.search.term_book_id,"onUpdate:modelValue":e[3]||(e[3]=r=>t.search.term_book_id=r),"select-placeholder":"Select Term/Book","search-placeholder":"Search term/book...",onSelect:e[4]||(e[4]=r=>t.getUnits(t.search.term_book_id))},null,8,["items","modelValue"])]),l("div",G,[s(d,null,{default:o(()=>e[27]||(e[27]=[a("Unit")])),_:1}),s(u,{items:t.options.units,"label-property":"name","value-property":"id",modelValue:t.search.unit_id,"onUpdate:modelValue":e[5]||(e[5]=r=>t.search.unit_id=r),"select-placeholder":"Select Unit","search-placeholder":"Search unit...",onSelect:e[6]||(e[6]=r=>t.getLessons(t.search.unit_id)),loading:t.loading.units},null,8,["items","modelValue","loading"])]),l("div",X,[s(d,null,{default:o(()=>e[28]||(e[28]=[a("Lesson")])),_:1}),s(u,{items:t.options.lessons,"label-property":"name","value-property":"id",modelValue:t.search.lesson_id,"onUpdate:modelValue":e[7]||(e[7]=r=>t.search.lesson_id=r),"select-placeholder":"Select Lesson","search-placeholder":"Search lesson...",onSelect:e[8]||(e[8]=r=>t.addItem()),loading:t.loading.lessons},null,8,["items","modelValue","loading"])]),l("div",Z,[s(d,null,{default:o(()=>e[29]||(e[29]=[a("Objectives")])),_:1}),t.form.report_data.length?(p(!0),_(V,{key:1},B(t.form.report_data,(r,m)=>(p(),S(J,{class:"bg-white",modelValue:t.open_objectives[m],"onUpdate:modelValue":h=>t.open_objectives[m]=h},{trigger:o(()=>[l("div",ee,[s(d,null,{default:o(()=>[a(f(r.term_book_name),1)]),_:2},1024),s(d,{class:"text-red-600 cursor-pointer",onClick:h=>t.deleteItem(m)},{default:o(()=>e[31]||(e[31]=[a("Delete")])),_:2},1032,["onClick"])])]),content:o(()=>[l("div",te,[l("div",se,[s(i(I),null,{default:o(()=>[l("span",null,f(r.unit_name),1)]),_:2},1024),s(i(I),{variant:"outline"},{default:o(()=>[l("span",null,f(r.lesson_name),1)]),_:2},1024)]),t.form.revision==!1?(p(),_("ul",oe,[(p(!0),_(V,null,B(r.objectives,(h,j)=>(p(),_("li",re,[s(d,{class:"flex items-center space-x-2 py-2"},{default:o(()=>[s(b,{value:h.id,checked:t.form.report_data[m].objectives[j].achieved,onClick:de=>t.form.report_data[m].objectives[j].achieved=!t.form.report_data[m].objectives[j].achieved},null,8,["value","checked","onClick"]),l("span",ae,f(h.name),1)]),_:2},1024)]))),256))])):w("",!0)])]),_:2},1032,["modelValue","onUpdate:modelValue"]))),256)):(p(),_("div",x,[s(d,null,{default:o(()=>e[30]||(e[30]=[a("No objectives found.")])),_:1})])),!t.form.report_data.length&&t.form.attendance_status==1?(p(),S(d,{key:2,class:"text-xs text-red-500 font-semibold"},{default:o(()=>e[32]||(e[32]=[a("At least one (1) objective is required.")])),_:1})):w("",!0)]),l("div",ie,[s(d,null,{default:o(()=>e[33]||(e[33]=[a("Comments")])),_:1}),s($,{rows:"10",modelValue:t.form.comments,"onUpdate:modelValue":e[9]||(e[9]=r=>t.form.comments=r),modelModifiers:{lazy:!0}},null,8,["modelValue"])]),l("div",le,[s(d,null,{default:o(()=>e[34]||(e[34]=[a("Status")])),_:1}),s(u,{items:t.$page.props.attendance_status,"label-property":"name","value-property":"id",error:t.form.attendance_status==3,modelValue:t.form.attendance_status,"onUpdate:modelValue":e[10]||(e[10]=r=>t.form.attendance_status=r),"select-placeholder":"Select Status","search-placeholder":"Search status..."},null,8,["items","error","modelValue"])])])]),footer:o(()=>[s(v,{variant:"outline",onClick:e[11]||(e[11]=r=>t.show_progress_report=!1)},{default:o(()=>e[35]||(e[35]=[a("Cancel")])),_:1}),s(v,{onClick:t.updateProgressReport},{default:o(()=>e[36]||(e[36]=[a("Save")])),_:1},8,["onClick"])]),_:1},8,["open"])]),_:1})],64)}}});export{dt as default};
