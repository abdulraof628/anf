import{B as f}from"./Authenticated-f3f73889.js";import{H as u,L as _}from"./@inertiajs-7f289881.js";import{_ as g}from"./Card-c7bd5922.js";import{y as b,x as r,u as V,Q as o,F as $,be as l,t as C,W as i,z as s}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-c289c940.js";import"./axios-1779699b.js";import"./pusher-js-d90fcbf8.js";import"./laravel-echo-96cacb8d.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-2b1a9f82.js";import"./DialogDescription-c70040de.js";import"./lucide-vue-next-53796c49.js";const v={class:"grid grid-cols-1 2xl:grid-cols-3 gap-4"},B={components:{Head:u,Link:_},props:{user_id:String,user_centres:Object},data(){return{selected_centres:this.$page.props.user_centres?this.$page.props.user_centres:[]}},methods:{submit(){this.$inertia.post(this.route("edupreneurs.store"),{user_id:this.user_id,selected_centres:this.selected_centres})}}},be=Object.assign(B,{__name:"ManageUser",setup(y){return(t,e)=>{const n=l("Label"),m=l("Input"),d=l("ComboBox"),a=l("Button");return C(),b($,null,[r(V(u),{title:"Edupreneurs"}),r(f,null,{header:o(()=>e[4]||(e[4]=[])),default:o(()=>[r(g,null,{title:o(()=>e[5]||(e[5]=[i("Assign Centre")])),content:o(()=>[s("div",v,[s("div",null,[r(n,null,{default:o(()=>e[6]||(e[6]=[i("Name")])),_:1}),r(m,{type:"text",modelValue:t.$page.props.user_info.display_name,"onUpdate:modelValue":e[0]||(e[0]=p=>t.$page.props.user_info.display_name=p),disabled:""},null,8,["modelValue"])]),s("div",null,[r(n,null,{default:o(()=>e[7]||(e[7]=[i("Email")])),_:1}),r(m,{type:"text",modelValue:t.$page.props.user_info.user_email,"onUpdate:modelValue":e[1]||(e[1]=p=>t.$page.props.user_info.user_email=p),disabled:""},null,8,["modelValue"])]),s("div",null,[r(n,null,{default:o(()=>e[8]||(e[8]=[i("Centre"),s("span",{class:"text-red-500"},"*",-1)])),_:1}),r(d,{multiple:!0,items:t.$page.props.allowed_centres,"label-property":"label","value-property":"ID",error:t.$page.props.errors.centre_id,modelValue:t.selected_centres,"onUpdate:modelValue":e[2]||(e[2]=p=>t.selected_centres=p),"select-placeholder":"Select Centre","search-placeholder":"Search centre..."},null,8,["items","error","modelValue"])])])]),footer:o(()=>[r(a,{variant:"outline",onClick:e[3]||(e[3]=p=>t.$inertia.get(t.route("edupreneurs")))},{default:o(()=>e[9]||(e[9]=[i("Cancel")])),_:1}),r(a,{onClick:t.submit},{default:o(()=>e[10]||(e[10]=[i("Save")])),_:1},8,["onClick"])]),_:1})]),_:1})],64)}}});export{be as default};
