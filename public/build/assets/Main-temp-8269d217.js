import{y as r,x as n,u as a,Q as d,F as p,t as i,z as t,C as h,D as c,H as l,W as y,A as m,L as b,bG as x,q as _}from"./@vue-fa39c8c3.js";import{B as v}from"./Authenticated-2464c72b.js";import{B as w}from"./Button-912507f9.js";import{H as f,L as k}from"./@inertiajs-c7856c69.js";import{h as g}from"./moment-a9aaa855.js";import"./ApplicationLogo-bc2e3fb2.js";import"./radix-vue-b52878ef.js";import"./@floating-ui-d22e3cce.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f5e40355.js";import"./axios-1779699b.js";import"./pusher-js-ddef06ed.js";import"./@vueform-b962800d.js";import"./@vuepic-62f3604d.js";import"./@babel-1b80a44a.js";import"./cropperjs-aef143af.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1a2c766e.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-0175b845.js";import"./@radix-icons-a5b56816.js";import"./lodash.isequal-32ec3540.js";import"./vue-e0f979ce.js";import"./lodash.clonedeep-2dfa23d9.js";import"./qs-fddd7d85.js";import"./side-channel-a64b5f12.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-6df2283d.js";import"./deepmerge-89e33937.js";import"./nprogress-4f526f01.js";import"./lucide-vue-next-f94b1320.js";const S={class:"md:grid md:grid-cols-2"},M={class:"md:mt-0 md:col-span-2"},T={class:"px-4 py-5 bg-indigo-50 space-y-2 sm:p-6"},L={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},B={class:"sm:row-span-3"},C={class:"items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md h-fit"},D={key:0,class:"flex-col px-6 py-14 rounded-[4px] min-w-[80%] lg:min-w-[25%] space-y-4"},Y={class:"w-full border-collapse bg-white text-left text-sm text-gray-500"},$={class:"divide-y divide-gray-100"},j={class:"hover:bg-gray-50"},A={class:"border px-6 py-4 text-slate-700"},N={class:"border px-6 py-4 text-slate-700"},V={class:"border px-6 py-4 text-slate-700"},z={class:"border px-6 py-4"},F={class:"flex justify-center gap-4"},H={key:1,class:"flex px-6 py-14 justify-center"},O={class:"flex flex-col w-1/2 p-6"},W={class:"flex flex-col text-sm rounded-md space-y-2"},q=["value"],E={class:"flex flex-col space-y-2"},G={components:{Head:f,Link:k},data(){return{showMain:!0,showSelectLanguage:!1,canStartTest:!1,dt_list:[],form:{child_id:"",child_age:"",language:""},error:{name:!1,age:!1,language:!1}}},watch:{"form.language":{handler(){this.form.language!=""?this.canStartTest=!0:this.canStartTest=!1}}},methods:{startTest(){this.$inertia.post(route("diagnostic_test.run"),{form_data:this.form})},selectChild(u,s){this.form.child_id=u,this.form.child_age=s,this.showMain=!1,this.showSelectLanguage=!0},back(){this.showMain=!0,this.showSelectLanguage=!1}}},Ft=Object.assign(G,{__name:"Main-temp",setup(u){return(s,e)=>(i(),r(p,null,[n(a(f),{title:"Diagnostic Test"}),n(v,null,{header:d(()=>e[4]||(e[4]=[])),default:d(()=>[t("div",S,[t("div",M,[t("form",{onSubmit:e[3]||(e[3]=h((...o)=>s.submit&&s.submit(...o),["prevent"]))},[t("div",T,[t("div",L,[t("div",B,[t("div",C,[e[9]||(e[9]=t("div",{class:"flex justify-center"},[t("div",{class:"mb-5"},[t("img",{class:"h-24 w-24",src:"/images/anf-logo-main-2x.png",alt:"Workflow logo"})])],-1)),e[10]||(e[10]=t("div",{class:"mb-8 flex justify-center"},[t("h1",{class:"font-semibold font-mono text-lg sm:text-2xl"},"ALFA and Friends Diagnostic Test")],-1)),s.showMain?(i(),r("div",D,[t("table",Y,[e[6]||(e[6]=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Name"),t("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Age"),t("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Date of Birth"),t("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900 text-center"},"Action")])],-1)),t("tbody",$,[s.$page.props.children.length?(i(!0),r(p,{key:0},c(s.$page.props.children,(o,P)=>(i(),r("tr",j,[t("td",A,l(o.name),1),t("td",N,l(a(g)().diff(o.date_of_birth,"years"))+" Years Old",1),t("td",V,l(a(g)(o.date_of_birth,"YYYY.MM.DD").format("DD-MM-YYYY")),1),t("td",z,[t("div",F,[n(w,{buttonType:"blue",onClick:Q=>s.selectChild(o.id,a(g)().diff(o.date_of_birth,"years"))},{default:d(()=>e[5]||(e[5]=[y("Select Student")])),_:2},1032,["onClick"])])])]))),256)):m("",!0)])])])):m("",!0),s.showSelectLanguage?(i(),r("div",H,[t("div",O,[t("div",W,[e[8]||(e[8]=t("label",{class:"block text-sm text-gray-700 font-bold",for:""},"Language",-1)),b(t("select",{class:"mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500","onUpdate:modelValue":e[0]||(e[0]=o=>s.form.language=o)},[e[7]||(e[7]=t("option",{value:""},"Please select",-1)),(i(!0),r(p,null,c(s.$page.props.languages,o=>(i(),r("option",{value:o.id},l(o.name),9,q))),256))],512),[[x,s.form.language]])]),t("div",E,[t("button",{type:"button",class:_(["mt-5 w-full border p-2 text-white rounded-[4px] bg-gray-700 hover:bg-gray-600",s.canStartTest?"opacity-100":"cursor-not-allowed opacity-50"]),onClick:e[1]||(e[1]=o=>s.canStartTest?s.startTest():"")},"Start Now",2),t("button",{type:"button",class:"rounded py-2 px-4 bg-gray-300 hover:bg-gray-200",onClick:e[2]||(e[2]=o=>s.back())},"Back")])])])):m("",!0)])])])])],32)])])]),_:1})],64))}});export{Ft as default};
