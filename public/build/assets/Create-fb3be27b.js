import{y as d,x as r,u as l,Q as e,F as n,t as u,z as t,G as c,W as m,A as f,bH as g,q as b}from"./@vue-d42dd214.js";import{B as y}from"./Authenticated-ca001e1a.js";import{B as p}from"./Button-fd3be934.js";import{H as a,L as _}from"./@inertiajs-dde9cc4c.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-47014c23.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f046bc35.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./DialogDescription-cbc1304f.js";import"./lucide-vue-next-97f66d5e.js";const v={class:"md:grid md:grid-cols-2"},x={class:"md:mt-0 md:col-span-2"},w={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},h={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},B={class:"sm:row-span-3"},C={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},k={class:"mb-4"},z={class:"mt-1 flex rounded-md shadow-sm"},T={class:"flex items-end justify-start space-x-2"},S={components:{Head:a,Link:_},data(){return{form:{class_type:""}}},methods:{submit(){this.$inertia.post(route("settings.class_types.store"),this.form,{preserveState:!0})}}},wt=Object.assign(S,{__name:"Create",setup(V){return(o,s)=>(u(),d(n,null,[r(l(a),{title:"General Setting"}),r(y,null,{header:e(()=>s[2]||(s[2]=[])),default:e(()=>[t("div",v,[t("div",x,[t("form",{onSubmit:s[1]||(s[1]=c((...i)=>o.submit&&o.submit(...i),["prevent"]))},[t("div",w,[t("div",h,[t("div",B,[s[4]||(s[4]=t("div",{class:"mb-5"},[t("h1",{class:"text-indigo-800 font-bold"},"Class Type Information"),t("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1)),t("div",C,[t("div",k,[s[3]||(s[3]=t("label",{for:"class_type",class:"block text-sm text-gray-700 font-bold"},[m("Class Type"),t("span",{class:"text-red-500"},"*")],-1)),t("div",z,[f(t("input",{type:"text",name:"class_type",id:"class_type",class:b(["capitalize focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.class_type?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[0]||(s[0]=i=>o.form.class_type=i),autocomplete:"off"},null,2),[[g,o.form.class_type]])])])])])]),t("div",T,[r(p,{buttonType:"gray",url:o.route("settings.class_types")},{default:e(()=>s[5]||(s[5]=[m("Cancel")])),_:1},8,["url"]),r(p,{type:"submit"},{default:e(()=>s[6]||(s[6]=[m("Save ")])),_:1})])])],32)])])]),_:1})],64))}});export{wt as default};
