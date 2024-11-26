import{y as d,x as e,u as m,Q as i,F as a,t as l,z as s,G as f,A as n,bH as y,q as p,bG as v,J as c,K as _,W as u}from"./@vue-d42dd214.js";import{B as x}from"./Authenticated-e54ea1c2.js";import{B as g}from"./Button-73a05440.js";import{L as h,H as w}from"./@inertiajs-dde9cc4c.js";import{b}from"./@vueform-cd27a95b.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-d95f58a2.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-9e9c0f86.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./index-a78bcd26.js";import"./DialogDescription-befd605e.js";import"./lucide-vue-next-f56ff345.js";const k={class:"md:grid md:grid-cols-2"},B={class:"md:mt-0 md:col-span-2"},V={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},j={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},S={class:"sm:row-span-3"},z={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},L={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},N={class:"mb-4"},O={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},T={class:"mb-4"},$=["value"],C={class:"flex justify-between mt-4 items-center"},G={class:""},H={class:"flex flex-row-reverse items-center"},M={class:"flex space-x-2"},U={components:{Link:h,Toggle:b},props:{roles:Object},data(){return{form:{role_id:this.roles?this.roles.id:"",display_name:this.roles?this.roles.display_name:"",role_group:this.roles?this.roles.role_group_id:1,status:this.roles?this.roles.status:""}}},methods:{submit(){this.$inertia.post(route("roles.update"),this.form)}}},Co=Object.assign(U,{__name:"Edit",setup(A){return(r,o)=>(l(),d(a,null,[e(m(w),{title:"Roles"}),e(x,null,{header:i(()=>o[4]||(o[4]=[])),default:i(()=>[s("div",k,[s("div",B,[s("form",{onSubmit:o[3]||(o[3]=f((...t)=>r.submit&&r.submit(...t),["prevent"]))},[s("div",V,[s("div",j,[s("div",S,[s("div",z,[o[10]||(o[10]=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Role Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1)),s("div",L,[s("div",N,[o[5]||(o[5]=s("label",{for:"display_name",class:"block text-sm font-bold text-gray-700"},"Name",-1)),n(s("input",{type:"text",class:p(["mt-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",r.$page.props.errors.display_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[0]||(o[0]=t=>r.form.display_name=t)},null,2),[[y,r.form.display_name]])])]),s("div",O,[s("div",T,[o[6]||(o[6]=s("label",{for:"display_name",class:"block text-sm font-bold text-gray-700"},"Group",-1)),n(s("select",{name:"",id:"",class:p(["mt-1 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",r.$page.props.errors.role_group?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[1]||(o[1]=t=>r.form.role_group=t)},[(l(!0),d(a,null,c(r.$page.props.role_groups,(t,D)=>(l(),d("option",{value:t.id,key:t.id},_(t.name),9,$))),128))],2),[[v,r.form.role_group]])])]),o[11]||(o[11]=s("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1)),s("div",C,[s("div",G,[o[7]||(o[7]=s("label",{for:"",class:"font-sm pr-3"},"Status",-1)),e(m(b),{modelValue:r.form.status,"onUpdate:modelValue":o[2]||(o[2]=t=>r.form.status=t),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),s("div",H,[s("div",M,[e(g,{buttonType:"gray",url:r.route("roles")},{default:i(()=>o[8]||(o[8]=[u(" Cancel ")])),_:1},8,["url"]),e(g,{type:"submit",disabled:r.form.processing},{default:i(()=>o[9]||(o[9]=[u(" Save ")])),_:1},8,["disabled"])])])])])])])])],32)])])]),_:1})],64))}});export{Co as default};
