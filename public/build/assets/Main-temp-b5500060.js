import{y as r,x as n,u as a,Q as d,F as p,t as i,z as t,G as h,J as c,K as l,W as y,C as m,A as b,bG as x,q as _}from"./@vue-d42dd214.js";import{B as v}from"./Authenticated-8568d8e0.js";import{B as w}from"./Button-e54df2f5.js";import{H as f,L as k}from"./@inertiajs-dde9cc4c.js";import{h as g}from"./moment-a9aaa855.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-47014c23.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f7a369e6.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./DialogDescription-f2587495.js";import"./groq-sdk-5d132fed.js";import"./lucide-vue-next-81b3e39b.js";const S={class:"md:grid md:grid-cols-2"},M={class:"md:mt-0 md:col-span-2"},T={class:"px-4 py-5 bg-indigo-50 space-y-2 sm:p-6"},B={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},C={class:"sm:row-span-3"},L={class:"items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md h-fit"},D={key:0,class:"flex-col px-6 py-14 rounded-[4px] min-w-[80%] lg:min-w-[25%] space-y-4"},Y={class:"w-full border-collapse bg-white text-left text-sm text-gray-500"},$={class:"divide-y divide-gray-100"},j={class:"hover:bg-gray-50"},A={class:"border px-6 py-4 text-slate-700"},N={class:"border px-6 py-4 text-slate-700"},V={class:"border px-6 py-4 text-slate-700"},z={class:"border px-6 py-4"},F={class:"flex justify-center gap-4"},G={key:1,class:"flex px-6 py-14 justify-center"},H={class:"flex flex-col w-1/2 p-6"},O={class:"flex flex-col text-sm rounded-md space-y-2"},W=["value"],q={class:"flex flex-col space-y-2"},E={components:{Head:f,Link:k},data(){return{showMain:!0,showSelectLanguage:!1,canStartTest:!1,dt_list:[],form:{child_id:"",child_age:"",language:""},error:{name:!1,age:!1,language:!1}}},watch:{"form.language":{handler(){this.form.language!=""?this.canStartTest=!0:this.canStartTest=!1}}},methods:{startTest(){this.$inertia.post(route("diagnostic_test.run"),{form_data:this.form})},selectChild(u,o){this.form.child_id=u,this.form.child_age=o,this.showMain=!1,this.showSelectLanguage=!0},back(){this.showMain=!0,this.showSelectLanguage=!1}}},Ht=Object.assign(E,{__name:"Main-temp",setup(u){return(o,e)=>(i(),r(p,null,[n(a(f),{title:"Diagnostic Test"}),n(v,null,{header:d(()=>e[4]||(e[4]=[])),default:d(()=>[t("div",S,[t("div",M,[t("form",{onSubmit:e[3]||(e[3]=h((...s)=>o.submit&&o.submit(...s),["prevent"]))},[t("div",T,[t("div",B,[t("div",C,[t("div",L,[e[9]||(e[9]=t("div",{class:"flex justify-center"},[t("div",{class:"mb-5"},[t("img",{class:"h-24 w-24",src:"/images/anf-logo-main-2x.png",alt:"Workflow logo"})])],-1)),e[10]||(e[10]=t("div",{class:"mb-8 flex justify-center"},[t("h1",{class:"font-semibold font-mono text-lg sm:text-2xl"},"ALFA and Friends Diagnostic Test")],-1)),o.showMain?(i(),r("div",D,[t("table",Y,[e[6]||(e[6]=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Name"),t("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Age"),t("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Date of Birth"),t("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900 text-center"},"Action")])],-1)),t("tbody",$,[o.$page.props.children.length?(i(!0),r(p,{key:0},c(o.$page.props.children,(s,J)=>(i(),r("tr",j,[t("td",A,l(s.name),1),t("td",N,l(a(g)().diff(s.date_of_birth,"years"))+" Years Old",1),t("td",V,l(a(g)(s.date_of_birth,"YYYY.MM.DD").format("DD-MM-YYYY")),1),t("td",z,[t("div",F,[n(w,{buttonType:"blue",onClick:K=>o.selectChild(s.id,a(g)().diff(s.date_of_birth,"years"))},{default:d(()=>e[5]||(e[5]=[y("Select Student")])),_:2},1032,["onClick"])])])]))),256)):m("",!0)])])])):m("",!0),o.showSelectLanguage?(i(),r("div",G,[t("div",H,[t("div",O,[e[8]||(e[8]=t("label",{class:"block text-sm text-gray-700 font-bold",for:""},"Language",-1)),b(t("select",{class:"mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500","onUpdate:modelValue":e[0]||(e[0]=s=>o.form.language=s)},[e[7]||(e[7]=t("option",{value:""},"Please select",-1)),(i(!0),r(p,null,c(o.$page.props.languages,s=>(i(),r("option",{value:s.id},l(s.name),9,W))),256))],512),[[x,o.form.language]])]),t("div",q,[t("button",{type:"button",class:_(["mt-5 w-full border p-2 text-white rounded-[4px] bg-gray-700 hover:bg-gray-600",o.canStartTest?"opacity-100":"cursor-not-allowed opacity-50"]),onClick:e[1]||(e[1]=s=>o.canStartTest?o.startTest():"")},"Start Now",2),t("button",{type:"button",class:"rounded py-2 px-4 bg-gray-300 hover:bg-gray-200",onClick:e[2]||(e[2]=s=>o.back())},"Back")])])])):m("",!0)])])])])],32)])])]),_:1})],64))}});export{Ht as default};
