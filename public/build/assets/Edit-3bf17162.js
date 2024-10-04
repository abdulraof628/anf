import{y as f,x as e,u,Q as r,F as c,j as b,t as g,z as o,G as _,W as a,A as n,bH as d,q as m}from"./@vue-2682a433.js";import{B as h}from"./Authenticated-d5536341.js";import{B as p}from"./Button-42d44458.js";import{H as l,L as x}from"./@inertiajs-6e15fcc1.js";import{c as v}from"./@heroicons-6acff2c6.js";import{V as y}from"./vue-draggable-next-79e6a5d2.js";import{C as w}from"./ConfirmationModal-0c4277c7.js";import{m as T,p as B,x as k,I as C,y as V}from"./@headlessui-b7da89b9.js";import"./ApplicationLogo-754713c8.js";import"./radix-vue-1c0958bf.js";import"./@floating-ui-46419ac1.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-268d443b.js";import"./axios-1779699b.js";import"./pusher-js-747fa3ad.js";import"./@vueform-93d31398.js";import"./@vuepic-72648ebd.js";import"./@babel-1b80a44a.js";import"./cropperjs-1d139b1c.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-ae9c59f1.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-bada8fb2.js";import"./@radix-icons-96330712.js";import"./lodash.isequal-aa94bca8.js";import"./vue-210fd32b.js";import"./lodash.clonedeep-15f95254.js";import"./qs-d67e8c34.js";import"./side-channel-51e4be2c.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-110a5121.js";import"./deepmerge-89e33937.js";import"./nprogress-47dccea4.js";import"./lucide-vue-next-62ff5c75.js";const j={class:"py-4 px-4"},L={class:"overflow-x-auto"},M={class:"mx-auto"},$={class:"align-middle inline-block min-w-full"},z={class:"mt-4 bg-white"},D={class:"flex space-x-2"},I={class:"overflow-hidden w-1/2"},N={class:"bg-white px-3 py-2"},O={class:"mb-3"},S={class:"mt-1 flex rounded-md shadow-sm"},A={class:"mb-3"},H={class:"mt-1 flex rounded-md shadow-sm"},U={class:"flex items-end justify-end space-x-2"},E=b({components:{Head:l,Link:x,TabGroup:T,TabList:B,Tab:k,TabPanels:C,TabPanel:V,ConfirmationModal:w,TrashIcon:v,draggable:y},props:{condition_info:Object},data(){return{data:{type:Object,default:()=>({})},enabled:!0,isOpen:!1,showUpload:!0,showImage:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",dragging:!0,dtList:this.$page.props.diagnostic_test_list?this.$page.props.diagnostic_test_list:[],form:{condition_id:this.condition_info?this.condition_info.id:"",dt_id:this.condition_info?this.condition_info.dt_id:"",score:this.condition_info?this.condition_info.score_capped:"",message:this.condition_info?this.condition_info.message:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.conditions.update"),this.form,{preserveState:!0})}}}),Ao=Object.assign(E,{__name:"Edit",setup(F){return(s,t)=>(g(),f(c,null,[e(u(l),{title:"Diagnostic Test"}),e(h,null,{header:r(()=>t[3]||(t[3]=[])),default:r(()=>[o("div",j,[o("div",L,[o("div",M,[o("div",$,[o("div",z,[o("div",D,[o("div",I,[o("form",{onSubmit:t[2]||(t[2]=_((...i)=>s.submit&&s.submit(...i),["prevent"]))},[o("div",N,[t[8]||(t[8]=o("div",{class:"mb-5"},[o("h1",{class:"text-indigo-800 font-bold"},"Conditions"),o("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1)),o("div",O,[t[4]||(t[4]=o("label",{for:"score",class:"block text-sm text-gray-700 font-bold"},[a("Score less than"),o("span",{class:"text-red-500"},"*")],-1)),o("div",S,[n(o("input",{type:"text",name:"score",id:"score",class:m(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.score?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=i=>s.form.score=i),autocomplete:"off"},null,2),[[d,s.form.score]])])]),o("div",A,[t[5]||(t[5]=o("label",{for:"message",class:"block text-sm text-gray-700 font-bold"},[a("Message"),o("span",{class:"text-red-500"},"*")],-1)),o("div",H,[n(o("textarea",{type:"text",name:"message",id:"message",class:m(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.message?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=i=>s.form.message=i),autocomplete:"off"},null,2),[[d,s.form.message]])])]),o("div",U,[e(p,{buttonType:"gray",url:s.route("dt.settings.details",{dt_id:s.condition_info.dt_id})},{default:r(()=>t[6]||(t[6]=[a("Cancel")])),_:1},8,["url"]),e(p,{type:"submit"},{default:r(()=>t[7]||(t[7]=[a("Save")])),_:1})])])],32)])])])])])])])]),_:1})],64))}});export{Ao as default};
