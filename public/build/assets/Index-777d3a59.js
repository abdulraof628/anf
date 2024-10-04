import{B as S}from"./Authenticated-214cc5de.js";import{H as L,L as B}from"./@inertiajs-2b766590.js";import{h as k}from"./moment-a9aaa855.js";import{_ as D}from"./Card-e481dfab.js";import{_ as U,a as j,b as $,c as v,d as F,e as g}from"./TableRow-7ae90bc5.js";import{_ as N}from"./DialogModal-5bb61319.js";import{P as T}from"./Pagination-4f35e34d.js";import{_ as M}from"./DeleteConfirmation-49a1d6a2.js";import{a as P}from"./@radix-icons-9ff33614.js";import{F as I,C as A}from"./lucide-vue-next-7b48dc26.js";import{x as _,v as t,u as l,O as s,F as C,b7 as y,b8 as H,q as n,y as a,z as E,t as f,B as u,U as r,I as O,J as c}from"./@vue-39dc9ff3.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ef5f5861.js";import"./axios-1779699b.js";import"./pusher-js-68b5c933.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";const z={class:"flex items-center justify-between space-x-2"},Y={class:"flex justify-between space-x-2"},q={class:"relative"},J=a("span",{class:"ml-1 hidden sm:block"},"Filters",-1),G=a("span",{class:"ml-1 hidden sm:block"},"New Resource",-1),K={key:0,class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-2"},Q={class:""},W=a("div",{class:"p-3"}," No Record Found ",-1),X={class:"flex justify-center space-x-2"},Z={class:"p-1 grid grid-cols-1 gap-4"},x={key:0,class:"flex items-center justify-center p-5 h-72"},ee=a("div",{class:"flex space-x-2 animate-pulse"},[a("div",{class:"w-3 h-3 bg-gray-500 rounded-full"}),a("div",{class:"w-3 h-3 bg-gray-500 rounded-full"}),a("div",{class:"w-3 h-3 bg-gray-500 rounded-full"})],-1),se=[ee],te={key:1,class:""},re=["innerHTML"],ae={key:1,class:"flex justify-center"},oe=["src"],le={key:2,class:"flex justify-center"},ie=["src"],ne={class:"flex justify-center"},de={class:"w-full px-2 mb-3"},pe={class:"mt-6"},ue={class:"divide-y divide-gray-100"},ce={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},me={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},_e={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},fe={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},he={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},ge={class:"px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},ve={components:{Head:L,Link:B},data(){return{show_filters:!1,loading_resource:!1,show_resource:!1,confirmation:{is_open:!1,route_name:"",id:""},params:{search:this.$page.props.filter?this.$page.props.filter.search:"",programme_id:this.$page.props.filter?this.$page.props.filter.programme_id:"",level:this.$page.props.filter.level?this.$page.props.filter.level:"",language:this.$page.props.filter.language?this.$page.props.filter.language:""},resource_data:[]}},methods:{viewResource(p){this.resource_data=[],this.show_resource=!0,this.loading_resource=!0,axios.get(route("teacher_resources.get_resource"),{params:{resource_id:p}}).then(e=>{this.resource_data=e.data,this.loading_resource=!1})},editResource(p){this.$inertia.get(route("teacher_resources.edit"),{resource_id:p})},deleteResource(p){this.confirmation.route_name="teacher_resources.destroy",this.confirmation.id=p,this.confirmation.is_open=!0},baseUrl(){const{protocol:p,host:e}=window.location;return`${p}//${e}`},downloadFile(p){axios.get(route("download.teacher_resources",p),{responseType:"blob"}).then(e=>{const o=window.URL.createObjectURL(new Blob([e.data])),h=document.createElement("a");h.href=o,h.setAttribute("download",p),document.body.appendChild(h),h.click()}).catch(e=>{console.error(e)})},search(){this.$inertia.get(route("teacher_resources"),this.params,{preserveState:!0})},showFilters(){this.show_filters=!this.show_filters}}},_s=Object.assign(ve,{__name:"Index",setup(p){return(e,o)=>{const h=y("Input"),m=y("Button"),w=y("ComboBox"),d=y("Label"),V=H("debounce");return n(),_(C,null,[t(l(L),{title:"Teacher Resources"}),t(S,null,{header:s(()=>[]),default:s(()=>[a("div",z,[a("div",Y,[a("div",q,[t(l(P),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),E(t(h,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:e.params.search,"onUpdate:modelValue":o[0]||(o[0]=i=>e.params.search=i)},null,8,["modelValue"]),[[V,e.search,"800ms"]])]),t(m,{class:"border border-slate-700 border-dashed bg-white text-slate-800 hover:bg-slate-50",onClick:o[1]||(o[1]=i=>e.showFilters())},{default:s(()=>[t(l(I),{class:"h-4 w-4"}),J]),_:1})]),e.$page.props.can.create_teacher_resources?(n(),f(m,{key:0,onClick:o[2]||(o[2]=i=>e.$inertia.get(e.route("teacher_resources.create")))},{default:s(()=>[t(l(A),{class:"h-4 w-4"}),G]),_:1})):u("",!0)]),e.show_filters?(n(),_("div",K,[t(w,{canClear:!0,items:e.$page.props.programmes,"label-property":"name","value-property":"id",onSelect:e.search,modelValue:e.params.programme_id,"onUpdate:modelValue":o[3]||(o[3]=i=>e.params.programme_id=i),"select-placeholder":"Programmes","search-placeholder":"Search programme..."},null,8,["items","onSelect","modelValue"]),t(w,{canClear:!0,items:e.$page.props.levels,"label-property":"name","value-property":"id",onSelect:e.search,modelValue:e.params.level,"onUpdate:modelValue":o[4]||(o[4]=i=>e.params.level=i),"select-placeholder":"Levels","search-placeholder":"Search level..."},null,8,["items","onSelect","modelValue"]),t(w,{canClear:!0,items:e.$page.props.languages,"label-property":"name","value-property":"id",onSelect:e.search,modelValue:e.params.language,"onUpdate:modelValue":o[5]||(o[5]=i=>e.params.language=i),"select-placeholder":"Languages","search-placeholder":"Search language..."},null,8,["items","onSelect","modelValue"]),a("div",Q,[t(m,{onClick:o[6]||(o[6]=i=>e.$inertia.get(e.route("teacher_resources")))},{default:s(()=>[r("Clear Search")]),_:1})])])):u("",!0),t(D,null,{content:s(()=>[t(l(U),null,{default:s(()=>[t(l(j),{class:"bg-gray-100"},{default:s(()=>[t(l($),null,{default:s(()=>[t(l(v),null,{default:s(()=>[r("#")]),_:1}),t(l(v),null,{default:s(()=>[r("Title")]),_:1}),t(l(v),null,{default:s(()=>[r("Programme")]),_:1}),t(l(v),null,{default:s(()=>[r("Level")]),_:1}),t(l(v),{class:"text-center"},{default:s(()=>[r("Action")]),_:1})]),_:1})]),_:1}),t(l(F),null,{default:s(()=>[e.$page.props.teacher_resources.data.length?u("",!0):(n(),f(l($),{key:0},{default:s(()=>[t(l(g),{class:"text-center",colspan:"10"},{default:s(()=>[W]),_:1})]),_:1})),(n(!0),_(C,null,O(e.$page.props.teacher_resources.data,(i,R)=>(n(),f(l($),null,{default:s(()=>[t(l(g),null,{default:s(()=>[r(c(e.$page.props.teacher_resources.from+R),1)]),_:2},1024),t(l(g),null,{default:s(()=>[r(c(i.title),1)]),_:2},1024),t(l(g),null,{default:s(()=>[r(c(i.programme),1)]),_:2},1024),t(l(g),null,{default:s(()=>[r(c(i.name),1)]),_:2},1024),t(l(g),{class:"text-center space-x-2"},{default:s(()=>[a("div",X,[e.$page.props.can.view_teacher_resources?(n(),f(m,{key:0,variant:"outline",onClick:b=>e.viewResource(i.id)},{default:s(()=>[r("View / Download")]),_:2},1032,["onClick"])):u("",!0),e.$page.props.can.edit_teacher_resources?(n(),f(m,{key:1,onClick:b=>e.editResource(i.id)},{default:s(()=>[r("Edit")]),_:2},1032,["onClick"])):u("",!0),e.$page.props.can.delete_teacher_resources?(n(),f(m,{key:2,variant:"destructive",onClick:b=>e.deleteResource(i.id)},{default:s(()=>[r("Delete")]),_:2},1032,["onClick"])):u("",!0)])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(T,{page_data:e.$page.props.teacher_resources,params:e.params},null,8,["page_data","params"]),t(M,{open:e.confirmation.is_open,onClose:o[7]||(o[7]=i=>e.confirmation.is_open=!1),routeName:e.confirmation.route_name,id:e.confirmation.id},{title:s(()=>[r("Delete Resource")]),description:s(()=>[r("Are you sure want to delete this resource?")]),_:1},8,["open","routeName","id"]),t(N,{open:e.show_resource,"onUpdate:open":o[10]||(o[10]=i=>e.show_resource=i)},{title:s(()=>[r("Resource Information")]),content:s(()=>[a("div",Z,[e.loading_resource?(n(),_("div",x,se)):(n(),_("div",te,[e.resource_data.media_type_id==1?(n(),_("div",{key:0,class:"flex justify-center",innerHTML:e.resource_data.content},null,8,re)):u("",!0),e.resource_data.media_type_id==2?(n(),_("div",ae,[a("iframe",{src:e.baseUrl()+"/storage/teacher_resources/"+e.resource_data.content,width:"100%",height:"600px"},null,8,oe)])):u("",!0),e.resource_data.media_type_id==3?(n(),_("div",le,[a("iframe",{class:"flex-1",src:"https://view.officeapps.live.com/op/view.aspx?src="+e.baseUrl()+"/storage/teacher_resources/"+e.resource_data.content+"&embedded=true",style:{width:"600px",height:"500px"},frameborder:"0"},null,8,ie)])):u("",!0),a("div",ne,[a("div",de,[a("div",pe,[a("dl",ue,[a("div",ce,[t(d,null,{default:s(()=>[r("Title")]),_:1}),t(d,{class:"font-normal text-slate-700 whitespace-nowrap"},{default:s(()=>[r(c(e.resource_data.title),1)]),_:1})]),a("div",me,[t(d,null,{default:s(()=>[r("Programme / Level")]),_:1}),t(d,{class:"font-normal text-slate-700"},{default:s(()=>[r(c(e.resource_data.programme+` ( Level ${e.resource_data.level} )`),1)]),_:1})]),a("div",_e,[t(d,null,{default:s(()=>[r("Language")]),_:1}),t(d,{class:"font-normal text-slate-700"},{default:s(()=>[r(c(e.resource_data.language),1)]),_:1})]),a("div",fe,[t(d,null,{default:s(()=>[r("Media Type")]),_:1}),t(d,{class:"font-normal text-slate-700"},{default:s(()=>[r(c(e.resource_data.media_type_name),1)]),_:1})]),a("div",he,[t(d,null,{default:s(()=>[r("Created Date")]),_:1}),t(d,{class:"font-normal text-slate-700"},{default:s(()=>[r(c(l(k)(e.resource_data.created_at).format("DD/MM/Y")),1)]),_:1})]),a("div",ge,[t(d,null,{default:s(()=>[r("Last Updated")]),_:1}),t(d,{class:"font-normal text-slate-700"},{default:s(()=>[r(c(l(k)(e.resource_data.updated_at).format("DD/MM/Y")),1)]),_:1})])])])])])]))])]),footer:s(()=>[e.resource_data.media_type_id==2||e.resource_data.media_type_id==3?(n(),f(m,{key:0,onClick:o[8]||(o[8]=i=>e.downloadFile(e.resource_data.content))},{default:s(()=>[r("Download")]),_:1})):u("",!0),t(m,{variant:"outline",onClick:o[9]||(o[9]=i=>e.show_resource=!1)},{default:s(()=>[r("Close")]),_:1})]),_:1},8,["open"])]),_:1})],64)}}});export{_s as default};