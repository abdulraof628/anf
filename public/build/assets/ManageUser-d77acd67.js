import{B as _}from"./Authenticated-69dc7077.js";import{H as u,L as f}from"./@inertiajs-7f289881.js";import{_ as g}from"./Card-c810b5f4.js";import{y as b,x as r,u as C,Q as o,F as V,be as l,t as $,W as p,z as n}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-85118abc.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-b6fa7a4c.js";import"./DialogDescription-d422265e.js";import"./lucide-vue-next-53796c49.js";const v={class:"grid grid-cols-1 2xl:grid-cols-3 gap-4"},B={components:{Head:u,Link:f},props:{user_id:String,user_centre:Object},data(){return{centre_id:this.user_centre?this.user_centre.centre_id:""}},methods:{submit(){this.$inertia.post(this.route("centre_manager.store"),{user_id:this.user_id,centre_id:this.centre_id})}}},ge=Object.assign(B,{__name:"ManageUser",setup(y){return(t,e)=>{const m=l("Label"),s=l("Input"),d=l("ComboBox"),a=l("Button");return $(),b(V,null,[r(C(u),{title:"Centre Manager"}),r(_,null,{header:o(()=>e[4]||(e[4]=[])),default:o(()=>[r(g,null,{title:o(()=>e[5]||(e[5]=[p("Assign Centre")])),content:o(()=>[n("div",v,[n("div",null,[r(m,null,{default:o(()=>e[6]||(e[6]=[p("Name")])),_:1}),r(s,{type:"text",modelValue:t.$page.props.user_info.display_name,"onUpdate:modelValue":e[0]||(e[0]=i=>t.$page.props.user_info.display_name=i),disabled:""},null,8,["modelValue"])]),n("div",null,[r(m,null,{default:o(()=>e[7]||(e[7]=[p("Email")])),_:1}),r(s,{type:"text",modelValue:t.$page.props.user_info.user_email,"onUpdate:modelValue":e[1]||(e[1]=i=>t.$page.props.user_info.user_email=i),disabled:""},null,8,["modelValue"])]),n("div",null,[r(m,null,{default:o(()=>e[8]||(e[8]=[p("Centre"),n("span",{class:"text-red-500"},"*",-1)])),_:1}),r(d,{items:t.$page.props.allowed_centres,"label-property":"label","value-property":"ID",error:t.$page.props.errors.centre_id,modelValue:t.centre_id,"onUpdate:modelValue":e[2]||(e[2]=i=>t.centre_id=i),"select-placeholder":"Select Centre","search-placeholder":"Search centre..."},null,8,["items","error","modelValue"])])])]),footer:o(()=>[r(a,{variant:"outline",onClick:e[3]||(e[3]=i=>t.$inertia.get(t.route("centre_manager")))},{default:o(()=>e[9]||(e[9]=[p("Cancel")])),_:1}),r(a,{onClick:t.submit},{default:o(()=>e[10]||(e[10]=[p("Save")])),_:1},8,["onClick"])]),_:1})]),_:1})],64)}}});export{ge as default};
