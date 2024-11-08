import{B as S}from"./Authenticated-e544629c.js";import{H as L,L as D}from"./@inertiajs-dde9cc4c.js";import{h as k}from"./moment-a9aaa855.js";import{_ as B}from"./Card-9d1429a6.js";import{_ as U,a as j,b as $,c as h,d as F,e as v}from"./TableRow-27ad490d.js";import{_ as N}from"./DialogModal-d673a68c.js";import{P as T}from"./Pagination-209dd8c6.js";import{_ as M}from"./DeleteConfirmation-3807abe1.js";import{a as P}from"./@radix-icons-4975f794.js";import{F as A,C as H}from"./lucide-vue-next-81b3e39b.js";import{y as g,x as t,u as l,Q as r,F as C,be as y,bf as I,t as n,z as a,A as E,v as c,C as u,W as o,J as z,K as m}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-47014c23.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-dc86d4f5.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./DialogDescription-dbd48133.js";import"./vue3-markdown-13648449.js";import"./groq-sdk-5d132fed.js";const O={class:"flex items-center justify-between space-x-2"},Y={class:"flex justify-between space-x-2"},J={class:"relative"},K={key:0,class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-2"},Q={class:""},W={class:"flex justify-center space-x-2"},q={class:"p-1 grid grid-cols-1 gap-4"},G={key:0,class:"flex items-center justify-center p-5 h-72"},X={key:1,class:""},Z=["innerHTML"],x={key:1,class:"flex justify-center"},ee=["src"],se={key:2,class:"flex justify-center"},re=["src"],te={class:"flex justify-center"},oe={class:"w-full px-2 mb-3"},ae={class:"mt-6"},le={class:"divide-y divide-gray-100"},ie={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},ne={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},de={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},pe={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},ue={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},me={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},fe={components:{Head:L,Link:D},data(){return{show_filters:!1,loading_resource:!1,show_resource:!1,confirmation:{is_open:!1,route_name:"",id:""},params:{search:this.$page.props.filter?this.$page.props.filter.search:"",programme_id:this.$page.props.filter?this.$page.props.filter.programme_id:"",level:this.$page.props.filter.level?this.$page.props.filter.level:"",language:this.$page.props.filter.language?this.$page.props.filter.language:""},resource_data:[]}},methods:{viewResource(p){this.resource_data=[],this.show_resource=!0,this.loading_resource=!0,axios.get(route("teacher_resources.get_resource"),{params:{resource_id:p}}).then(s=>{this.resource_data=s.data,this.loading_resource=!1})},editResource(p){this.$inertia.get(route("teacher_resources.edit"),{resource_id:p})},deleteResource(p){this.confirmation.route_name="teacher_resources.destroy",this.confirmation.id=p,this.confirmation.is_open=!0},baseUrl(){const{protocol:p,host:s}=window.location;return`${p}//${s}`},downloadFile(p){axios.get(route("download.teacher_resources",p),{responseType:"blob"}).then(s=>{const e=window.URL.createObjectURL(new Blob([s.data])),_=document.createElement("a");_.href=e,_.setAttribute("download",p),document.body.appendChild(_),_.click()}).catch(s=>{console.error(s)})},search(){this.$inertia.get(route("teacher_resources"),this.params,{preserveState:!0})},showFilters(){this.show_filters=!this.show_filters}}},ms=Object.assign(fe,{__name:"Index",setup(p){return(s,e)=>{const _=y("Input"),f=y("Button"),w=y("ComboBox"),d=y("Label"),V=I("debounce");return n(),g(C,null,[t(l(L),{title:"Teacher Resources"}),t(S,null,{header:r(()=>e[11]||(e[11]=[])),default:r(()=>[a("div",O,[a("div",Y,[a("div",J,[t(l(P),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),E(t(_,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:s.params.search,"onUpdate:modelValue":e[0]||(e[0]=i=>s.params.search=i)},null,8,["modelValue"]),[[V,s.search,"800ms"]])]),t(f,{class:"border border-slate-700 border-dashed bg-white text-slate-800 hover:bg-slate-50",onClick:e[1]||(e[1]=i=>s.showFilters())},{default:r(()=>[t(l(A),{class:"h-4 w-4"}),e[12]||(e[12]=a("span",{class:"ml-1 hidden sm:block"},"Filters",-1))]),_:1})]),s.$page.props.can.create_teacher_resources?(n(),c(f,{key:0,onClick:e[2]||(e[2]=i=>s.$inertia.get(s.route("teacher_resources.create")))},{default:r(()=>[t(l(H),{class:"h-4 w-4"}),e[13]||(e[13]=a("span",{class:"ml-1 hidden sm:block"},"New Resource",-1))]),_:1})):u("",!0)]),s.show_filters?(n(),g("div",K,[t(w,{canClear:!0,items:s.$page.props.programmes,"label-property":"name","value-property":"id",onSelect:s.search,modelValue:s.params.programme_id,"onUpdate:modelValue":e[3]||(e[3]=i=>s.params.programme_id=i),"select-placeholder":"Programmes","search-placeholder":"Search programme..."},null,8,["items","onSelect","modelValue"]),t(w,{canClear:!0,items:s.$page.props.levels,"label-property":"name","value-property":"id",onSelect:s.search,modelValue:s.params.level,"onUpdate:modelValue":e[4]||(e[4]=i=>s.params.level=i),"select-placeholder":"Levels","search-placeholder":"Search level..."},null,8,["items","onSelect","modelValue"]),t(w,{canClear:!0,items:s.$page.props.languages,"label-property":"name","value-property":"id",onSelect:s.search,modelValue:s.params.language,"onUpdate:modelValue":e[5]||(e[5]=i=>s.params.language=i),"select-placeholder":"Languages","search-placeholder":"Search language..."},null,8,["items","onSelect","modelValue"]),a("div",Q,[t(f,{onClick:e[6]||(e[6]=i=>s.$inertia.get(s.route("teacher_resources")))},{default:r(()=>e[14]||(e[14]=[o("Clear Search")])),_:1})])])):u("",!0),t(B,null,{content:r(()=>[t(l(U),null,{default:r(()=>[t(l(j),{class:"bg-gray-100"},{default:r(()=>[t(l($),null,{default:r(()=>[t(l(h),null,{default:r(()=>e[15]||(e[15]=[o("#")])),_:1}),t(l(h),null,{default:r(()=>e[16]||(e[16]=[o("Title")])),_:1}),t(l(h),null,{default:r(()=>e[17]||(e[17]=[o("Programme")])),_:1}),t(l(h),null,{default:r(()=>e[18]||(e[18]=[o("Level")])),_:1}),t(l(h),{class:"text-center"},{default:r(()=>e[19]||(e[19]=[o("Action")])),_:1})]),_:1})]),_:1}),t(l(F),null,{default:r(()=>[s.$page.props.teacher_resources.data.length?u("",!0):(n(),c(l($),{key:0},{default:r(()=>[t(l(v),{class:"text-center",colspan:"10"},{default:r(()=>e[20]||(e[20]=[a("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(n(!0),g(C,null,z(s.$page.props.teacher_resources.data,(i,R)=>(n(),c(l($),null,{default:r(()=>[t(l(v),null,{default:r(()=>[o(m(s.$page.props.teacher_resources.from+R),1)]),_:2},1024),t(l(v),null,{default:r(()=>[o(m(i.title),1)]),_:2},1024),t(l(v),null,{default:r(()=>[o(m(i.programme),1)]),_:2},1024),t(l(v),null,{default:r(()=>[o(m(i.name),1)]),_:2},1024),t(l(v),{class:"text-center space-x-2"},{default:r(()=>[a("div",W,[s.$page.props.can.view_teacher_resources?(n(),c(f,{key:0,variant:"outline",onClick:b=>s.viewResource(i.id)},{default:r(()=>e[21]||(e[21]=[o("View / Download")])),_:2},1032,["onClick"])):u("",!0),s.$page.props.can.edit_teacher_resources?(n(),c(f,{key:1,onClick:b=>s.editResource(i.id)},{default:r(()=>e[22]||(e[22]=[o("Edit")])),_:2},1032,["onClick"])):u("",!0),s.$page.props.can.delete_teacher_resources?(n(),c(f,{key:2,variant:"destructive",onClick:b=>s.deleteResource(i.id)},{default:r(()=>e[23]||(e[23]=[o("Delete")])),_:2},1032,["onClick"])):u("",!0)])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(T,{page_data:s.$page.props.teacher_resources,params:s.params},null,8,["page_data","params"]),t(M,{open:s.confirmation.is_open,onClose:e[7]||(e[7]=i=>s.confirmation.is_open=!1),routeName:s.confirmation.route_name,id:s.confirmation.id},{title:r(()=>e[24]||(e[24]=[o("Delete Resource")])),description:r(()=>e[25]||(e[25]=[o("Are you sure want to delete this resource?")])),_:1},8,["open","routeName","id"]),t(N,{open:s.show_resource,"onUpdate:open":e[10]||(e[10]=i=>s.show_resource=i)},{title:r(()=>e[26]||(e[26]=[o("Resource Information")])),content:r(()=>[a("div",q,[s.loading_resource?(n(),g("div",G,e[27]||(e[27]=[a("div",{class:"flex space-x-2 animate-pulse"},[a("div",{class:"w-3 h-3 bg-gray-500 rounded-full"}),a("div",{class:"w-3 h-3 bg-gray-500 rounded-full"}),a("div",{class:"w-3 h-3 bg-gray-500 rounded-full"})],-1)]))):(n(),g("div",X,[s.resource_data.media_type_id==1?(n(),g("div",{key:0,class:"flex justify-center",innerHTML:s.resource_data.content},null,8,Z)):u("",!0),s.resource_data.media_type_id==2?(n(),g("div",x,[a("iframe",{src:s.baseUrl()+"/storage/teacher_resources/"+s.resource_data.content,width:"100%",height:"600px"},null,8,ee)])):u("",!0),s.resource_data.media_type_id==3?(n(),g("div",se,[a("iframe",{class:"flex-1",src:"https://view.officeapps.live.com/op/view.aspx?src="+s.baseUrl()+"/storage/teacher_resources/"+s.resource_data.content+"&embedded=true",style:{width:"600px",height:"500px"},frameborder:"0"},null,8,re)])):u("",!0),a("div",te,[a("div",oe,[a("div",ae,[a("dl",le,[a("div",ie,[t(d,null,{default:r(()=>e[28]||(e[28]=[o("Title")])),_:1}),t(d,{class:"font-normal text-slate-700 whitespace-nowrap"},{default:r(()=>[o(m(s.resource_data.title),1)]),_:1})]),a("div",ne,[t(d,null,{default:r(()=>e[29]||(e[29]=[o("Programme / Level")])),_:1}),t(d,{class:"font-normal text-slate-700"},{default:r(()=>[o(m(s.resource_data.programme+` ( Level ${s.resource_data.level} )`),1)]),_:1})]),a("div",de,[t(d,null,{default:r(()=>e[30]||(e[30]=[o("Language")])),_:1}),t(d,{class:"font-normal text-slate-700"},{default:r(()=>[o(m(s.resource_data.language),1)]),_:1})]),a("div",pe,[t(d,null,{default:r(()=>e[31]||(e[31]=[o("Media Type")])),_:1}),t(d,{class:"font-normal text-slate-700"},{default:r(()=>[o(m(s.resource_data.media_type_name),1)]),_:1})]),a("div",ue,[t(d,null,{default:r(()=>e[32]||(e[32]=[o("Created Date")])),_:1}),t(d,{class:"font-normal text-slate-700"},{default:r(()=>[o(m(l(k)(s.resource_data.created_at).format("DD/MM/Y")),1)]),_:1})]),a("div",me,[t(d,null,{default:r(()=>e[33]||(e[33]=[o("Last Updated")])),_:1}),t(d,{class:"font-normal text-slate-700"},{default:r(()=>[o(m(l(k)(s.resource_data.updated_at).format("DD/MM/Y")),1)]),_:1})])])])])])]))])]),footer:r(()=>[s.resource_data.media_type_id==2||s.resource_data.media_type_id==3?(n(),c(f,{key:0,onClick:e[8]||(e[8]=i=>s.downloadFile(s.resource_data.content))},{default:r(()=>e[34]||(e[34]=[o("Download")])),_:1})):u("",!0),t(f,{variant:"outline",onClick:e[9]||(e[9]=i=>s.show_resource=!1)},{default:r(()=>e[35]||(e[35]=[o("Close")])),_:1})]),_:1},8,["open"])]),_:1})],64)}}});export{ms as default};
