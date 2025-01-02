import{y as k,x as r,u as n,Q as o,F as V,be as y,bf as B,t as m,z as l,A as _,W as a,C as h,v as b,J as j,K as g,I as S}from"./@vue-d42dd214.js";import{B as N}from"./Authenticated-98036166.js";import{H as c,L as D}from"./@inertiajs-7f289881.js";import{_ as E}from"./DeleteConfirmation-dd64c485.js";import{F as C}from"./fslightbox-vue-393e2618.js";import{_ as I}from"./Card-a7869428.js";import{_ as P,a as T,b as $,c as f,d as R,e as p}from"./TableRow-75c58101.js";import{P as H}from"./Pagination-4d474b9e.js";import{_ as M}from"./DialogModal-c830f180.js";import{e as x}from"./vue-debounce-ed417ae1.js";import{a as G,d as O}from"./@radix-icons-4975f794.js";import{F as W}from"./lucide-vue-next-53796c49.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ece3933f.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-c5f0f1fd.js";import"./DialogDescription-a3c26cdc.js";const z={class:"flex items-center justify-between space-x-2"},J={class:"flex justify-between space-x-2"},Y={class:"relative"},K={key:0,class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-2"},Q={class:""},X={class:"flex justify-center space-x-2"},q={class:"p-1 grid grid-cols-1 gap-4"},Z={class:"space-y-2"},ee={key:0,class:"rounded-md bg-red-100 p-4"},te={class:"flex"},re={class:"flex-shrink-0"},le={class:"space-y-1 text-center"},oe={class:"flex text-sm text-gray-600"},se={class:"browse text-indigo-400 hover:text-indigo-800 cursor-pointer font-bold"},ie={ref:"artwork_file",id:"file",class:"sr-only",type:"file",accept:"image/*"},ae={class:"flex flex-row justify-start space-x-2"},ne={class:"flex-column text-center"},de=["src"],me={class:"flex-column"},pe={class:"flex flex-col space-y-1"},A=window.URL||window.webkitURL,ue=/^image\/\w+$/,fe={components:{Head:c,Link:D,FsLightbox:C},props:{filter:Object},watch:{"form.level_id":{handler(){this.form.level_id!=""&&axios.get(route("art_gallery.get_themes",this.form.level_id)).then(i=>{this.list.themes=i.data,this.form.theme_id="",this.form.lesson_id="",this.form.activity_id=""})},deep:!0},"form.theme_id":{handler(){this.form.level_id!=""&&this.form.theme_id!=""&&axios.get(route("art_gallery.get_lessons",this.form.theme_id)).then(i=>{this.list.lessons=i.data,this.form.lesson_id="",this.form.activity_id=""})},deep:!0},"form.lesson_id":{handler(){this.form.level_id!=""&&this.form.theme_id!=""&&this.form.lesson_id!=""&&axios.get(route("art_gallery.get_activities",this.form.lesson_id)).then(i=>{this.list.activities=i.data,this.form.activity_id=""})},deep:!0}},computed:{baseUrl(){return window.location.origin}},data(){return{show_filters:!1,show_add_artwork:!1,confirmation:{is_open:!1,route_name:"",id:""},lightbox:{open:!1,src:[]},list:{students:[],levels:this.$page.props.levels,themes:[],lessons:[],activities:[]},form:{student_id:"",level_id:"",theme_id:"",lesson_id:"",activity_id:"",artwork:{image_url:"",file:""}},student_status:[{id:"1",name:"Active"},{id:"0",name:"Inactive"}],params:{search:this.filter.search||"",level:this.filter.level||"",theme:this.filter.theme||"",status:this.filter.status||""}}},methods:{submit(){this.$inertia.post(route("art_gallery.store"),this.form,{preserveState:!1})},viewArtwork(i){fetch(window.location.origin+"/storage/art_gallery/"+i).then(t=>{t.ok?this.lightbox.src=[window.location.origin+"/storage/art_gallery/"+i]:this.lightbox.src=[window.location.origin+"/images/no_image.jpg"],this.lightbox.open=!this.lightbox.open})},deleteArtwork(i){this.confirmation.route_name="art_gallery.destroy",this.confirmation.id=i,this.confirmation.is_open=!0},findStudents:x(function(i){i&&(this.isLoading=!0,axios.get(route("students.find_digital_art_students"),{params:{keyword:i}}).then(t=>{this.list.students=t.data,this.isLoading=!1}))},1e3),search(){this.$inertia.get(this.route("art_gallery"),this.params,{replace:!0,preserveState:!0})},showFilters(){this.show_filters=!this.show_filters},read(i,t){return new Promise((e,w)=>{if(!i){e();return}ue.test(i.type)?A?e({loaded:!0,name:i.name,type:i.type,url:A.createObjectURL(i)}):w(new Error("Your browser is not supported.")):w(new Error("Please select a valid image file."))})},changeArtwork({target:i}){const{files:t}=i;t&&t.length>0&&this.read(t[0],i).then(e=>{this.form.artwork.image_url=e.url,this.form.artwork.file=t[0]}).catch(this.alert)},dragoverArtWork(i){i.preventDefault()},dropArtwork(i){const{files:t}=i.dataTransfer;i.preventDefault(),t&&t.length>0&&this.read(t[0],i).then(e=>{this.form.artwork.image_url=e.url,this.form.artwork.file=t[0]}).catch(this.alert)},reselect_image(){this.$refs.artwork_file.value="",this.form.artwork.image_url="",this.form.artwork.file=""}}},ut=Object.assign(fe,{__name:"Index",setup(i){return(t,e)=>{const w=y("Input"),u=y("Button"),d=y("ComboBox"),v=y("Label"),L=B("debounce");return m(),k(V,null,[r(n(c),{title:"Art Gallery"}),r(N,null,{header:o(()=>e[18]||(e[18]=[])),default:o(()=>[l("div",z,[l("div",J,[l("div",Y,[r(n(G),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),_(r(w,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:t.params.search,"onUpdate:modelValue":e[0]||(e[0]=s=>t.params.search=s)},null,8,["modelValue"]),[[L,t.search,"800ms"]])]),r(u,{class:"border border-slate-700 border-dashed bg-white text-slate-800 hover:bg-slate-50",onClick:e[1]||(e[1]=s=>t.showFilters())},{default:o(()=>[r(n(W),{class:"h-4 w-4"}),e[19]||(e[19]=l("span",{class:"ml-1 hidden sm:block"},"Filters",-1))]),_:1})])]),t.show_filters?(m(),k("div",K,[r(d,{canClear:"",items:t.$page.props.levels,"label-property":"name","value-property":"id",onSelect:t.search,modelValue:t.params.level,"onUpdate:modelValue":e[2]||(e[2]=s=>t.params.level=s),"select-placeholder":"Levels","search-placeholder":"Search level..."},null,8,["items","onSelect","modelValue"]),r(d,{canClear:"",items:t.$page.props.themes,"label-property":"name","value-property":"id",onSelect:t.search,modelValue:t.params.theme,"onUpdate:modelValue":e[3]||(e[3]=s=>t.params.theme=s),"select-placeholder":"Themes","search-placeholder":"Search theme..."},null,8,["items","onSelect","modelValue"]),r(d,{canClear:"",items:t.student_status,"label-property":"name","value-property":"id",onSelect:t.search,modelValue:t.params.status,"onUpdate:modelValue":e[4]||(e[4]=s=>t.params.status=s),"select-placeholder":"Status","search-placeholder":"Search status..."},null,8,["items","onSelect","modelValue"]),l("div",Q,[r(u,{onClick:e[5]||(e[5]=s=>t.$inertia.get(t.route("art_gallery")))},{default:o(()=>e[20]||(e[20]=[a("Clear Search")])),_:1})])])):h("",!0),r(I,null,{content:o(()=>[r(n(P),null,{default:o(()=>[r(n(T),{class:"bg-gray-100"},{default:o(()=>[r(n($),null,{default:o(()=>[r(n(f),null,{default:o(()=>e[21]||(e[21]=[a("#")])),_:1}),r(n(f),null,{default:o(()=>e[22]||(e[22]=[a("Name")])),_:1}),r(n(f),null,{default:o(()=>e[23]||(e[23]=[a("Level")])),_:1}),r(n(f),null,{default:o(()=>e[24]||(e[24]=[a("Theme")])),_:1}),r(n(f),null,{default:o(()=>e[25]||(e[25]=[a("Lesson - Title")])),_:1}),r(n(f),null,{default:o(()=>e[26]||(e[26]=[a("Activity")])),_:1}),r(n(f),{class:"text-center"},{default:o(()=>e[27]||(e[27]=[a("Action")])),_:1})]),_:1})]),_:1}),r(n(R),null,{default:o(()=>[t.$page.props.arts.data.length?h("",!0):(m(),b(n($),{key:0},{default:o(()=>[r(n(p),{class:"text-center",colspan:"10"},{default:o(()=>e[28]||(e[28]=[l("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(m(!0),k(V,null,j(t.$page.props.arts.data,(s,F)=>(m(),b(n($),null,{default:o(()=>[r(n(p),null,{default:o(()=>[a(g(t.$page.props.arts.from+F),1)]),_:2},1024),r(n(p),null,{default:o(()=>[a(g(s.student_name),1)]),_:2},1024),r(n(p),null,{default:o(()=>[a(g(s.level),1)]),_:2},1024),r(n(p),null,{default:o(()=>[a(g(s.theme),1)]),_:2},1024),r(n(p),null,{default:o(()=>[a(g(s.lesson),1)]),_:2},1024),r(n(p),null,{default:o(()=>[a(g(s.activity),1)]),_:2},1024),r(n(p),{class:"text-center"},{default:o(()=>[l("div",X,[t.$page.props.can.edit_art_gallery?(m(),b(u,{key:0,variant:"outline",onClick:U=>t.viewArtwork(s.art_file_location)},{default:o(()=>e[29]||(e[29]=[a("View")])),_:2},1032,["onClick"])):h("",!0),t.$page.props.can.delete_art_gallery?(m(),b(u,{key:1,variant:"destructive",onClick:U=>t.deleteArtwork(s.artwork_id)},{default:o(()=>e[30]||(e[30]=[a("Delete")])),_:2},1032,["onClick"])):h("",!0)])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),r(H,{page_data:t.$page.props.arts,params:t.params},null,8,["page_data","params"]),r(E,{open:t.confirmation.is_open,onClose:e[6]||(e[6]=s=>t.confirmation.is_open=!1),routeName:t.confirmation.route_name,id:t.confirmation.id},{title:o(()=>e[31]||(e[31]=[a("Delete Artwork")])),description:o(()=>e[32]||(e[32]=[a("Are you sure want to delete this artwork?")])),_:1},8,["open","routeName","id"]),r(n(C),{toggler:t.lightbox.open,sources:t.lightbox.src,exitFullscreenOnClose:!0},null,8,["toggler","sources"]),r(M,{open:t.show_add_artwork,"onUpdate:open":e[17]||(e[17]=s=>t.show_add_artwork=s)},{title:o(()=>e[33]||(e[33]=[a("Add Artwork")])),content:o(()=>[l("div",q,[l("div",null,[r(v,null,{default:o(()=>e[34]||(e[34]=[a("Student Name"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),r(d,{onSearch:t.findStudents,items:t.list.students,"label-property":"name","value-property":"id",error:t.$page.props.errors.student_id,modelValue:t.form.student_id,"onUpdate:modelValue":e[7]||(e[7]=s=>t.form.student_id=s),"select-placeholder":"Enter some characters to search","search-placeholder":"Search student..."},null,8,["onSearch","items","error","modelValue"])]),l("div",null,[r(v,null,{default:o(()=>e[35]||(e[35]=[a("Level"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),r(d,{items:t.list.levels,"label-property":"name","value-property":"id",error:t.$page.props.errors.level_id,modelValue:t.form.level_id,"onUpdate:modelValue":e[8]||(e[8]=s=>t.form.level_id=s),"select-placeholder":"Select Level","search-placeholder":"Search level..."},null,8,["items","error","modelValue"])]),l("div",null,[r(v,null,{default:o(()=>e[36]||(e[36]=[a("Theme"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),r(d,{items:t.list.themes,"label-property":"name","value-property":"id",error:t.$page.props.errors.theme_id,modelValue:t.form.theme_id,"onUpdate:modelValue":e[9]||(e[9]=s=>t.form.theme_id=s),"select-placeholder":"Select Theme","search-placeholder":"Search theme..."},null,8,["items","error","modelValue"])]),l("div",null,[r(v,null,{default:o(()=>e[37]||(e[37]=[a("Lesson"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),r(d,{items:t.list.lessons,"label-property":"name","value-property":"id",error:t.$page.props.errors.lesson_id,modelValue:t.form.lesson_id,"onUpdate:modelValue":e[10]||(e[10]=s=>t.form.lesson_id=s),"select-placeholder":"Select Lesson","search-placeholder":"Search lesson..."},null,8,["items","error","modelValue"])]),l("div",null,[r(v,null,{default:o(()=>e[38]||(e[38]=[a("Activity"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),r(d,{items:t.list.activities,"label-property":"name","value-property":"id",error:t.$page.props.errors.activity_id,modelValue:t.form.activity_id,"onUpdate:modelValue":e[11]||(e[11]=s=>t.form.activity_id=s),"select-placeholder":"Select Activity","search-placeholder":"Search activity..."},null,8,["items","error","modelValue"])]),_(l("div",Z,[e[44]||(e[44]=l("label",{class:"block text-sm text-gray-700 font-bold"}," Artwork File ",-1)),t.$page.props.errors["artwork.file"]?(m(),k("div",ee,[l("div",te,[l("div",re,[r(n(O),{class:"h-5 w-5 text-red-500","aria-hidden":"true"})]),e[39]||(e[39]=l("div",{class:"ml-3"},[l("h3",{class:"text-sm font-medium text-red-500"},"File is required!")],-1))])])):h("",!0),l("div",{class:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",onChange:e[12]||(e[12]=(...s)=>t.changeArtwork&&t.changeArtwork(...s)),onDragover:e[13]||(e[13]=(...s)=>t.dragoverArtWork&&t.dragoverArtWork(...s)),onDrop:e[14]||(e[14]=(...s)=>t.dropArtwork&&t.dropArtwork(...s))},[l("div",le,[e[42]||(e[42]=l("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[l("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),l("div",oe,[l("label",se,[e[40]||(e[40]=a("Click here ")),l("input",ie,null,512)]),e[41]||(e[41]=l("p",{class:"pl-1"},"or drag and drop an image",-1))]),e[43]||(e[43]=l("p",{class:"text-xs text-gray-500"},"Image Format : PNG, JPG",-1))])],32)],512),[[S,t.form.artwork.image_url==""]]),_(l("div",null,[e[46]||(e[46]=l("label",{class:"block text-sm text-gray-700 font-bold mb-2"}," Artwork File ",-1)),l("div",ae,[l("div",ne,[l("img",{class:"object-scale-down w-full",src:t.form.artwork.image_url,alt:""},null,8,de)]),l("div",me,[l("div",pe,[r(u,{onClick:e[15]||(e[15]=s=>t.reselect_image()),title:"Reselect an image"},{default:o(()=>e[45]||(e[45]=[l("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)])),_:1})])])])],512),[[S,t.form.artwork.image_url!=""]])])]),footer:o(()=>[r(u,{variant:"outline",onClick:e[16]||(e[16]=s=>t.show_add_artwork=!1)},{default:o(()=>e[47]||(e[47]=[a("Cancel")])),_:1}),r(u,{onClick:t.submit},{default:o(()=>e[48]||(e[48]=[a("Add")])),_:1},8,["onClick"])]),_:1},8,["open"])]),_:1})],64)}}});export{ut as default};
