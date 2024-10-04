import{B as _}from"./Authenticated-862af612.js";import{H as u,L as c}from"./@inertiajs-2b766590.js";import{_ as f}from"./Card-e1e522a8.js";import{x as g,v as t,u as b,O as o,F as h,b7 as l,q as V,U as p,y as i}from"./@vue-39dc9ff3.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-31ea0dbe.js";import"./axios-1779699b.js";import"./pusher-js-68b5c933.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./@radix-icons-9ff33614.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";import"./lucide-vue-next-7b48dc26.js";const $={class:"grid grid-cols-1 2xl:grid-cols-3 gap-4"},C=i("span",{class:"text-red-500"},"*",-1),v={components:{Head:u,Link:c},props:{user_id:String,user_centres:Object},data(){return{selected_centres:this.$page.props.user_centres?this.$page.props.user_centres:[]}},methods:{submit(){this.$inertia.post(this.route("teachers.store"),{user_id:this.user_id,selected_centres:this.selected_centres})}}},ce=Object.assign(v,{__name:"ManageUser",setup(B){return(e,r)=>{const n=l("Label"),a=l("Input"),d=l("ComboBox"),m=l("Button");return V(),g(h,null,[t(b(u),{title:"Teachers"}),t(_,null,{header:o(()=>[]),default:o(()=>[t(f,null,{title:o(()=>[p("Assign Centre")]),content:o(()=>[i("div",$,[i("div",null,[t(n,null,{default:o(()=>[p("Name")]),_:1}),t(a,{type:"text",modelValue:e.$page.props.user_info.display_name,"onUpdate:modelValue":r[0]||(r[0]=s=>e.$page.props.user_info.display_name=s),disabled:""},null,8,["modelValue"])]),i("div",null,[t(n,null,{default:o(()=>[p("Email")]),_:1}),t(a,{type:"text",modelValue:e.$page.props.user_info.user_email,"onUpdate:modelValue":r[1]||(r[1]=s=>e.$page.props.user_info.user_email=s),disabled:""},null,8,["modelValue"])]),i("div",null,[t(n,null,{default:o(()=>[p("Centre"),C]),_:1}),t(d,{multiple:!0,items:e.$page.props.allowed_centres,"label-property":"label","value-property":"ID",error:e.$page.props.errors.centre_id,modelValue:e.selected_centres,"onUpdate:modelValue":r[2]||(r[2]=s=>e.selected_centres=s),"select-placeholder":"Select Centre","search-placeholder":"Search centre..."},null,8,["items","error","modelValue"])])])]),footer:o(()=>[t(m,{variant:"outline",onClick:r[3]||(r[3]=s=>e.$inertia.get(e.route("teachers")))},{default:o(()=>[p("Cancel")]),_:1}),t(m,{onClick:e.submit},{default:o(()=>[p("Save")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}}});export{ce as default};
