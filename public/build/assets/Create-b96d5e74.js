import{y as f,x as i,u,Q as r,F as g,j as c,t as b,z as t,G as _,W as a,A as m,bH as d,q as n}from"./@vue-d42dd214.js";import{B as x}from"./Authenticated-bbe12484.js";import{B as p}from"./Button-2c9531b4.js";import{H as l,L as v}from"./@inertiajs-7f289881.js";import{r as h}from"./@heroicons-e6194902.js";import{V as y}from"./vue-draggable-next-67773303.js";import{C as w}from"./ConfirmationModal-b3ef0b6f.js";import{m as T,p as B,x as k,I as C,y as V}from"./@headlessui-a01ed24c.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-c5b8b27a.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-4a86e6ba.js";import"./DialogDescription-be595773.js";import"./lucide-vue-next-53796c49.js";const L={class:"py-4 px-4"},M={class:"overflow-x-auto"},S={class:"mx-auto"},$={class:"align-middle inline-block min-w-full"},j={class:"mt-4 bg-white"},z={class:"flex space-x-2"},D={class:"overflow-hidden w-1/2"},I={class:"bg-white px-3 py-2"},N={class:"mb-3"},A={class:"mt-1 flex rounded-md shadow-sm"},H={class:"mb-3"},O={class:"mt-1 flex rounded-md shadow-sm"},U={class:"flex items-end justify-end space-x-2"},F=c({components:{Head:l,Link:v,TabGroup:T,TabList:B,Tab:k,TabPanels:C,TabPanel:V,ConfirmationModal:w,TrashIcon:h,draggable:y},props:{diagnostic_test_id:String},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],form:{dt_id:this.diagnostic_test_id?this.diagnostic_test_id:"",score:"",message:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.conditions.store"),this.form,{preserveState:!0})}}}),Ut=Object.assign(F,{__name:"Create",setup(G){return(s,o)=>(b(),f(g,null,[i(u(l),{title:"Diagnostic Test"}),i(x,null,{header:r(()=>o[3]||(o[3]=[])),default:r(()=>[t("div",L,[t("div",M,[t("div",S,[t("div",$,[t("div",j,[t("div",z,[t("div",D,[t("form",{onSubmit:o[2]||(o[2]=_((...e)=>s.submit&&s.submit(...e),["prevent"]))},[t("div",I,[o[8]||(o[8]=t("div",{class:"mb-5"},[t("h1",{class:"text-indigo-800 font-bold"},"Conditions"),t("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1)),t("div",N,[o[4]||(o[4]=t("label",{for:"score",class:"block text-sm text-gray-700 font-bold"},[a("Score less than"),t("span",{class:"text-red-500"},"*")],-1)),t("div",A,[m(t("input",{type:"text",name:"score",id:"score",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.score?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[0]||(o[0]=e=>s.form.score=e),autocomplete:"off"},null,2),[[d,s.form.score]])])]),t("div",H,[o[5]||(o[5]=t("label",{for:"message",class:"block text-sm text-gray-700 font-bold"},[a("Message"),t("span",{class:"text-red-500"},"*")],-1)),t("div",O,[m(t("textarea",{type:"text",name:"message",id:"message",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.message?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[1]||(o[1]=e=>s.form.message=e),autocomplete:"off"},null,2),[[d,s.form.message]])])]),t("div",U,[i(p,{buttonType:"gray",url:s.route("dt.settings.details",{dt_id:this.diagnostic_test_id})},{default:r(()=>o[6]||(o[6]=[a("Cancel")])),_:1},8,["url"]),i(p,{type:"submit"},{default:r(()=>o[7]||(o[7]=[a("Save")])),_:1})])])],32)])])])])])])])]),_:1})],64))}});export{Ut as default};
