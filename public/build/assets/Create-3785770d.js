import{B as g}from"./Authenticated-627fff65.js";import{H as l,L as _}from"./@inertiajs-7f289881.js";import{_ as a}from"./Card-7fc11d89.js";import{y as f,x as o,u as y,Q as r,F as C,be as p,t as $,W as i,z as m}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-79eedadb.js";import"./axios-1779699b.js";import"./pusher-js-d90fcbf8.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-23e774d5.js";import"./DialogDescription-92161d9e.js";import"./lucide-vue-next-53796c49.js";const b={class:"grid grid-cols-1 gap-4"},v={components:{Head:l,Link:_},data(){return{form:{dt_id:this.$page.props.diagnostic_test_id?this.$page.props.diagnostic_test_id:"",category_name:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.categories.store"),this.form,{preserveState:!0})}}},_t=Object.assign(v,{__name:"Create",setup(B){return(e,t)=>{const d=p("Label"),u=p("Input"),s=p("Button");return $(),f(C,null,[o(y(l),{title:"Diagnostic Test"}),o(g,null,{header:r(()=>t[2]||(t[2]=[])),default:r(()=>[o(a,null,{title:r(()=>t[3]||(t[3]=[i("Category")])),content:r(()=>[m("div",b,[m("div",null,[o(d,null,{default:r(()=>t[4]||(t[4]=[i("Label"),m("span",{class:"text-red-500"},"*",-1)])),_:1}),o(u,{type:"text",error:e.$page.props.errors.category_name,modelValue:e.form.category_name,"onUpdate:modelValue":t[0]||(t[0]=n=>e.form.category_name=n)},null,8,["error","modelValue"])])])]),_:1}),o(a,null,{footer:r(()=>[o(s,{variant:"outline",onClick:t[1]||(t[1]=n=>e.$inertia.get(e.route("dt.settings.details",{dt_id:e.$page.props.diagnostic_test_id})))},{default:r(()=>t[5]||(t[5]=[i("Cancel")])),_:1}),o(s,{onClick:e.submit},{default:r(()=>t[6]||(t[6]=[i("Save")])),_:1},8,["onClick"])]),_:1})]),_:1})],64)}}});export{_t as default};