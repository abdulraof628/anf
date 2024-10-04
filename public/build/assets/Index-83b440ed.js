import{B as F}from"./Authenticated-214cc5de.js";import{H as C,L}from"./@inertiajs-2b766590.js";import{h as P}from"./moment-a9aaa855.js";import{a as D}from"./axios-1779699b.js";import{_ as k}from"./index-a02644ab.js";import{_ as M}from"./Card-e481dfab.js";import{_ as U,a as R,b as y,c as u,d as N,e as m}from"./TableRow-7ae90bc5.js";import{P as j}from"./Pagination-4f35e34d.js";import{a as I}from"./@radix-icons-9ff33614.js";import{F as T,d as Y}from"./lucide-vue-next-7b48dc26.js";import{x as g,v as t,u as a,O as o,F as V,b7 as f,b8 as A,q as i,y as n,z as E,U as l,J as p,B as _,t as h,I as O}from"./@vue-39dc9ff3.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ef5f5861.js";import"./pusher-js-68b5c933.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";const z={class:"flex items-center justify-between"},G={class:"flex justify-between space-x-2"},H={class:"relative"},q=n("span",{class:"ml-1 hidden sm:block"},"Filters",-1),J=n("span",{class:"ml-1 hidden sm:block"},"Setting",-1),K={key:0,class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-2"},Q={key:0},W={key:0},X={class:""},Z=n("div",{class:"p-3"}," No Record Found ",-1),x={class:"flex space-x-1"},ee={class:"flex justify-center space-x-2"},re={components:{Head:C,Link:L},data(){return{show_filters:!1,generate:{id:"",running:!1},params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?this.$page.props.filter.centre_id:"",programme_id:this.$page.props.filter.programme_id?this.$page.props.filter.programme_id:"",date:this.$page.props.filter.date?this.$page.props.filter.date:{month:new Date().getMonth(),year:new Date().getFullYear()},programme_level:this.$page.props.filter.programme_level?this.$page.props.filter.programme_level:""}}},methods:{viewProgressReport(c){this.$inertia.get(this.route("progress_report.details"),{progress_report_id:c},{})},showProgressReport(c,r){this.generate.running||(this.generate.running=!0,D.get(route("progress_report.full_reports"),{responseType:"blob",params:{progress_report_id:c,student_fee:r}}).then(s=>{const v=new Blob([s.data],{type:"application/pdf"}),d=URL.createObjectURL(v);window.open(d,"_blank"),this.generate.running=!1}).catch(s=>{console.error("Error fetching PDF:",s),this.generate.running=!1}))},search(){this.$inertia.get(this.route("progress_report"),this.params,{replace:!0,preserveState:!0})},showFilters(){this.show_filters=!this.show_filters}}},We=Object.assign(re,{__name:"Index",setup(c){return(r,s)=>{const v=f("Input"),d=f("Button"),b=f("ComboBox"),S=f("Datepicker"),B=A("debounce");return i(),g(V,null,[t(a(C),{title:"Progress Report"}),t(F,null,{header:o(()=>[]),default:o(()=>[n("div",z,[n("div",G,[n("div",H,[t(a(I),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),E(t(v,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:r.params.search,"onUpdate:modelValue":s[0]||(s[0]=e=>r.params.search=e)},null,8,["modelValue"]),[[B,r.search,"800ms"]])]),t(d,{class:"border border-slate-700 border-dashed bg-white text-slate-800 hover:bg-slate-50",onClick:s[1]||(s[1]=e=>r.showFilters())},{default:o(()=>[t(a(T),{class:"h-4 w-4"}),q]),_:1}),t(d,{onClick:s[2]||(s[2]=e=>r.$inertia.get(r.route("progress_report.settings")))},{default:o(()=>[t(a(Y),{class:"h-4 w-4"}),J]),_:1})])]),r.show_filters?(i(),g("div",K,[t(b,{items:r.$page.props.allowed_centres,"label-property":"label","value-property":"ID",onSelect:r.search,modelValue:r.params.centre_id,"onUpdate:modelValue":s[3]||(s[3]=e=>r.params.centre_id=e),"select-placeholder":"Centres","search-placeholder":"Search centre..."},null,8,["items","onSelect","modelValue"]),t(b,{canClear:"",items:r.$page.props.programmes,"label-property":"name","value-property":"id",onSelect:r.search,modelValue:r.params.programme_id,"onUpdate:modelValue":s[4]||(s[4]=e=>r.params.programme_id=e),"select-placeholder":"Programmes","search-placeholder":"Search programme..."},{label:o(({item:e})=>[l(p(e.name)+" ("+p(e.country_name)+") ",1)]),"label-content":o(({selectedItem:e,selectedItems:$,multiple:w})=>[e?(i(),g("span",Q,p(e.name)+" ("+p(e.country_name)+")",1)):_("",!0)]),_:1},8,["items","onSelect","modelValue"]),t(b,{canClear:"",items:r.$page.props.levels,"label-property":"level","value-property":"level",onSelect:r.search,modelValue:r.params.programme_level,"onUpdate:modelValue":s[5]||(s[5]=e=>r.params.programme_level=e),"select-placeholder":"Level","search-placeholder":"Search level..."},{label:o(({item:e})=>[l(" Level "+p(e.level),1)]),"label-content":o(({selectedItem:e,selectedItems:$,multiple:w})=>[e?(i(),g("span",W,"Level "+p(e.level),1)):_("",!0)]),_:1},8,["items","onSelect","modelValue"]),n("div",null,[t(S,{modelValue:r.params.date,"onUpdate:modelValue":s[6]||(s[6]=e=>r.params.date=e),mode:"month",format:"MMM Y",onSelect:r.search},null,8,["modelValue","onSelect"])]),n("div",X,[t(d,{onClick:s[7]||(s[7]=e=>r.$inertia.get(r.route("progress_report")))},{default:o(()=>[l("Clear Search")]),_:1})])])):_("",!0),t(M,null,{content:o(()=>[t(a(U),null,{default:o(()=>[t(a(R),{class:"bg-gray-100"},{default:o(()=>[t(a(y),null,{default:o(()=>[t(a(u),null,{default:o(()=>[l("#")]),_:1}),t(a(u),null,{default:o(()=>[l("Name")]),_:1}),t(a(u),null,{default:o(()=>[l("Centre")]),_:1}),t(a(u),null,{default:o(()=>[l("Month / Year")]),_:1}),t(a(u),null,{default:o(()=>[l("Total Present")]),_:1}),t(a(u),null,{default:o(()=>[l("Total Absent")]),_:1}),t(a(u),{class:"text-center"},{default:o(()=>[l("Action")]),_:1})]),_:1})]),_:1}),t(a(N),null,{default:o(()=>[r.$page.props.progress_reports.data.length?_("",!0):(i(),h(a(y),{key:0},{default:o(()=>[t(a(m),{class:"text-center",colspan:"10"},{default:o(()=>[Z]),_:1})]),_:1})),(i(!0),g(V,null,O(r.$page.props.progress_reports.data,(e,$)=>(i(),h(a(y),null,{default:o(()=>[t(a(m),null,{default:o(()=>[l(p(r.$page.props.progress_reports.from+$),1)]),_:2},1024),t(a(m),null,{default:o(()=>[l(p(e.student_name)+" ",1),n("div",x,[t(a(k),null,{default:o(()=>[n("span",null,p(e.programme_name),1)]),_:2},1024),t(a(k),{variant:"outline"},{default:o(()=>[n("span",null,"Level "+p(e.programme_level),1)]),_:2},1024)])]),_:2},1024),t(a(m),null,{default:o(()=>[l(p(e.centre_name),1)]),_:2},1024),t(a(m),null,{default:o(()=>[l(p(a(P)(e.month).format("MMMM Y")),1)]),_:2},1024),t(a(m),null,{default:o(()=>[l(p(e.total_present+"/"+e.total_class),1)]),_:2},1024),t(a(m),null,{default:o(()=>[l(p(e.total_absent+"/"+e.total_class),1)]),_:2},1024),t(a(m),{class:"text-center"},{default:o(()=>[n("div",ee,[r.$page.props.can.view_progress_report?(i(),h(d,{key:0,variant:"outline",onClick:w=>r.viewProgressReport(e.progress_report_id)},{default:o(()=>[l("Edit")]),_:2},1032,["onClick"])):_("",!0),r.$page.props.can.view_progress_report?(i(),h(d,{key:1,variant:"",onClick:w=>r.showProgressReport(e.progress_report_id,e.student_fee)},{default:o(()=>[l(p(r.generate.id==e.progress_report_id&&r.generate.running?"Generating...":"Generate"),1)]),_:2},1032,["onClick"])):_("",!0)])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(j,{page_data:r.$page.props.progress_reports,params:r.params},null,8,["page_data","params"])]),_:1})],64)}}});export{We as default};