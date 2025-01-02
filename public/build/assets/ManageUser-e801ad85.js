import{B as _}from"./Authenticated-98036166.js";import{H as u,L as g}from"./@inertiajs-7f289881.js";import{_ as f}from"./Card-a7869428.js";import{y as b,x as o,u as v,Q as r,F as V,be as l,t as $,W as p,z as s}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ece3933f.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-c5f0f1fd.js";import"./DialogDescription-a3c26cdc.js";import"./lucide-vue-next-53796c49.js";const C={class:"grid grid-cols-1 2xl:grid-cols-3 gap-4"},B={components:{Head:u,Link:g},props:{user_id:String,centres:Object,user_centres:Object},data(){return{selected_centres:this.$page.props.user_centres?this.$page.props.user_centres:[]}},methods:{submit(){this.$inertia.post(this.route("division_manager.store"),{user_id:this.user_id,selected_centres:this.selected_centres})}}},be=Object.assign(B,{__name:"ManageUser",setup(y){return(t,e)=>{const n=l("Label"),m=l("Input"),d=l("ComboBox"),a=l("Button");return $(),b(V,null,[o(v(u),{title:"Division Manager"}),o(_,null,{header:r(()=>e[4]||(e[4]=[])),default:r(()=>[o(f,null,{title:r(()=>e[5]||(e[5]=[p("Assign Centre")])),content:r(()=>[s("div",C,[s("div",null,[o(n,null,{default:r(()=>e[6]||(e[6]=[p("Name")])),_:1}),o(m,{type:"text",modelValue:t.$page.props.user_info.display_name,"onUpdate:modelValue":e[0]||(e[0]=i=>t.$page.props.user_info.display_name=i),disabled:""},null,8,["modelValue"])]),s("div",null,[o(n,null,{default:r(()=>e[7]||(e[7]=[p("Email")])),_:1}),o(m,{type:"text",modelValue:t.$page.props.user_info.user_email,"onUpdate:modelValue":e[1]||(e[1]=i=>t.$page.props.user_info.user_email=i),disabled:""},null,8,["modelValue"])]),s("div",null,[o(n,null,{default:r(()=>e[8]||(e[8]=[p("Centre"),s("span",{class:"text-red-500"},"*",-1)])),_:1}),o(d,{multiple:!0,items:t.$page.props.allowed_centres,"label-property":"label","value-property":"ID",error:t.$page.props.errors.centre_id,modelValue:t.selected_centres,"onUpdate:modelValue":e[2]||(e[2]=i=>t.selected_centres=i),"select-placeholder":"Select Centre","search-placeholder":"Search centre..."},null,8,["items","error","modelValue"])])])]),footer:r(()=>[o(a,{variant:"outline",onClick:e[3]||(e[3]=i=>t.$inertia.get(t.route("division_manager")))},{default:r(()=>e[9]||(e[9]=[p("Cancel")])),_:1}),o(a,{onClick:t.submit},{default:r(()=>e[10]||(e[10]=[p("Save")])),_:1},8,["onClick"])]),_:1})]),_:1})],64)}}});export{be as default};
