import{B as F}from"./Authenticated-d5536341.js";import{H as V,L}from"./@inertiajs-6e15fcc1.js";import{h as P}from"./moment-a9aaa855.js";import{a as D}from"./axios-1779699b.js";import{_ as k}from"./index-e8d9219e.js";import{_ as M}from"./Card-d08a29fb.js";import{_ as R,a as U,b as y,c as u,d as N,e as m}from"./TableRow-010fc527.js";import{P as j}from"./Pagination-6cfffd38.js";import{a as A}from"./@radix-icons-96330712.js";import{F as T,d as Y}from"./lucide-vue-next-62ff5c75.js";import{y as f,x as o,u as a,Q as s,F as C,be as v,bf as E,t as i,z as n,A as I,W as l,K as p,C as g,v as h,J as z}from"./@vue-2682a433.js";import"./ApplicationLogo-754713c8.js";import"./radix-vue-1c0958bf.js";import"./@floating-ui-46419ac1.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-268d443b.js";import"./pusher-js-747fa3ad.js";import"./@vueform-93d31398.js";import"./@vuepic-72648ebd.js";import"./@babel-1b80a44a.js";import"./cropperjs-1d139b1c.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-ae9c59f1.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-bada8fb2.js";import"./lodash.isequal-aa94bca8.js";import"./vue-210fd32b.js";import"./lodash.clonedeep-15f95254.js";import"./qs-d67e8c34.js";import"./side-channel-51e4be2c.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-110a5121.js";import"./deepmerge-89e33937.js";import"./nprogress-47dccea4.js";const G={class:"flex items-center justify-between"},H={class:"flex justify-between space-x-2"},O={class:"relative"},J={key:0,class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-2"},K={key:0},Q={key:0},W={class:""},q={class:"flex space-x-1"},X={class:"flex justify-center space-x-2"},Z={components:{Head:V,Link:L},data(){return{show_filters:!1,generate:{id:"",running:!1},params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?this.$page.props.filter.centre_id:"",programme_id:this.$page.props.filter.programme_id?this.$page.props.filter.programme_id:"",date:this.$page.props.filter.date?this.$page.props.filter.date:{month:new Date().getMonth(),year:new Date().getFullYear()},programme_level:this.$page.props.filter.programme_level?this.$page.props.filter.programme_level:""}}},methods:{viewProgressReport(_){this.$inertia.get(this.route("progress_report.details"),{progress_report_id:_},{})},showProgressReport(_,t){this.generate.running||(this.generate.running=!0,D.get(route("progress_report.full_reports"),{responseType:"blob",params:{progress_report_id:_,student_fee:t}}).then(e=>{const c=new Blob([e.data],{type:"application/pdf"}),d=URL.createObjectURL(c);window.open(d,"_blank"),this.generate.running=!1}).catch(e=>{console.error("Error fetching PDF:",e),this.generate.running=!1}))},search(){this.$inertia.get(this.route("progress_report"),this.params,{replace:!0,preserveState:!0})},showFilters(){this.show_filters=!this.show_filters}}},Ke=Object.assign(Z,{__name:"Index",setup(_){return(t,e)=>{const c=v("Input"),d=v("Button"),b=v("ComboBox"),S=v("Datepicker"),B=E("debounce");return i(),f(C,null,[o(a(V),{title:"Progress Report"}),o(F,null,{header:s(()=>e[8]||(e[8]=[])),default:s(()=>[n("div",G,[n("div",H,[n("div",O,[o(a(A),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),I(o(c,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:t.params.search,"onUpdate:modelValue":e[0]||(e[0]=r=>t.params.search=r)},null,8,["modelValue"]),[[B,t.search,"800ms"]])]),o(d,{class:"border border-slate-700 border-dashed bg-white text-slate-800 hover:bg-slate-50",onClick:e[1]||(e[1]=r=>t.showFilters())},{default:s(()=>[o(a(T),{class:"h-4 w-4"}),e[9]||(e[9]=n("span",{class:"ml-1 hidden sm:block"},"Filters",-1))]),_:1}),o(d,{onClick:e[2]||(e[2]=r=>t.$inertia.get(t.route("progress_report.settings")))},{default:s(()=>[o(a(Y),{class:"h-4 w-4"}),e[10]||(e[10]=n("span",{class:"ml-1 hidden sm:block"},"Setting",-1))]),_:1})])]),t.show_filters?(i(),f("div",J,[o(b,{items:t.$page.props.allowed_centres,"label-property":"label","value-property":"ID",onSelect:t.search,modelValue:t.params.centre_id,"onUpdate:modelValue":e[3]||(e[3]=r=>t.params.centre_id=r),"select-placeholder":"Centres","search-placeholder":"Search centre..."},null,8,["items","onSelect","modelValue"]),o(b,{canClear:"",items:t.$page.props.programmes,"label-property":"name","value-property":"id",onSelect:t.search,modelValue:t.params.programme_id,"onUpdate:modelValue":e[4]||(e[4]=r=>t.params.programme_id=r),"select-placeholder":"Programmes","search-placeholder":"Search programme..."},{label:s(({item:r})=>[l(p(r.name)+" ("+p(r.country_name)+") ",1)]),"label-content":s(({selectedItem:r,selectedItems:$,multiple:w})=>[r?(i(),f("span",K,p(r.name)+" ("+p(r.country_name)+")",1)):g("",!0)]),_:1},8,["items","onSelect","modelValue"]),o(b,{canClear:"",items:t.$page.props.levels,"label-property":"level","value-property":"level",onSelect:t.search,modelValue:t.params.programme_level,"onUpdate:modelValue":e[5]||(e[5]=r=>t.params.programme_level=r),"select-placeholder":"Level","search-placeholder":"Search level..."},{label:s(({item:r})=>[l(" Level "+p(r.level),1)]),"label-content":s(({selectedItem:r,selectedItems:$,multiple:w})=>[r?(i(),f("span",Q,"Level "+p(r.level),1)):g("",!0)]),_:1},8,["items","onSelect","modelValue"]),n("div",null,[o(S,{modelValue:t.params.date,"onUpdate:modelValue":e[6]||(e[6]=r=>t.params.date=r),mode:"month",format:"MMM Y",onSelect:t.search},null,8,["modelValue","onSelect"])]),n("div",W,[o(d,{onClick:e[7]||(e[7]=r=>t.$inertia.get(t.route("progress_report")))},{default:s(()=>e[11]||(e[11]=[l("Clear Search")])),_:1})])])):g("",!0),o(M,null,{content:s(()=>[o(a(R),null,{default:s(()=>[o(a(U),{class:"bg-gray-100"},{default:s(()=>[o(a(y),null,{default:s(()=>[o(a(u),null,{default:s(()=>e[12]||(e[12]=[l("#")])),_:1}),o(a(u),null,{default:s(()=>e[13]||(e[13]=[l("Name")])),_:1}),o(a(u),null,{default:s(()=>e[14]||(e[14]=[l("Centre")])),_:1}),o(a(u),null,{default:s(()=>e[15]||(e[15]=[l("Month / Year")])),_:1}),o(a(u),null,{default:s(()=>e[16]||(e[16]=[l("Total Present")])),_:1}),o(a(u),null,{default:s(()=>e[17]||(e[17]=[l("Total Absent")])),_:1}),o(a(u),{class:"text-center"},{default:s(()=>e[18]||(e[18]=[l("Action")])),_:1})]),_:1})]),_:1}),o(a(N),null,{default:s(()=>[t.$page.props.progress_reports.data.length?g("",!0):(i(),h(a(y),{key:0},{default:s(()=>[o(a(m),{class:"text-center",colspan:"10"},{default:s(()=>e[19]||(e[19]=[n("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(i(!0),f(C,null,z(t.$page.props.progress_reports.data,(r,$)=>(i(),h(a(y),null,{default:s(()=>[o(a(m),null,{default:s(()=>[l(p(t.$page.props.progress_reports.from+$),1)]),_:2},1024),o(a(m),null,{default:s(()=>[l(p(r.student_name)+" ",1),n("div",q,[o(a(k),null,{default:s(()=>[n("span",null,p(r.programme_name),1)]),_:2},1024),o(a(k),{variant:"outline"},{default:s(()=>[n("span",null,"Level "+p(r.programme_level),1)]),_:2},1024)])]),_:2},1024),o(a(m),null,{default:s(()=>[l(p(r.centre_name),1)]),_:2},1024),o(a(m),null,{default:s(()=>[l(p(a(P)(r.month).format("MMMM Y")),1)]),_:2},1024),o(a(m),null,{default:s(()=>[l(p(r.total_present+"/"+r.total_class),1)]),_:2},1024),o(a(m),null,{default:s(()=>[l(p(r.total_absent+"/"+r.total_class),1)]),_:2},1024),o(a(m),{class:"text-center"},{default:s(()=>[n("div",X,[t.$page.props.can.view_progress_report?(i(),h(d,{key:0,variant:"outline",onClick:w=>t.viewProgressReport(r.progress_report_id)},{default:s(()=>e[20]||(e[20]=[l("Edit")])),_:2},1032,["onClick"])):g("",!0),t.$page.props.can.view_progress_report?(i(),h(d,{key:1,variant:"",onClick:w=>t.showProgressReport(r.progress_report_id,r.student_fee)},{default:s(()=>[l(p(t.generate.id==r.progress_report_id&&t.generate.running?"Generating...":"Generate"),1)]),_:2},1032,["onClick"])):g("",!0)])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),o(j,{page_data:t.$page.props.progress_reports,params:t.params},null,8,["page_data","params"])]),_:1})],64)}}});export{Ke as default};
