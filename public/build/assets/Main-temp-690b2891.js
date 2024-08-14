import{x as r,v as n,u as a,P as d,F as p,q as i,y as t,B as h,C as g,G as l,V as _,z as m,K as y,bu as b,m as x}from"./@vue-64c42e7d.js";import{B as v}from"./Authenticated-6651b23d.js";import{B as w}from"./Button-df73f7a0.js";import{H as f,L as k}from"./@inertiajs-41d03628.js";import{h as c}from"./moment-3968d9f3.js";import"./ApplicationLogo-64527dd0.js";import"./radix-vue-2488f6ae.js";import"./@floating-ui-7a9770d8.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-f96983da.js";import"./app-98c3eb01.js";import"./axios-9cbf0d09.js";import"./pusher-js-2bcba7e2.js";import"./@vueform-ba82ac10.js";import"./@vuepic-339c593a.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-2c7c67ce.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1cb1b359.js";import"./@popperjs-f3391c26.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-deae3e94.js";import"./@radix-icons-03b844c4.js";import"./moment-timezone-65f24d9a.js";import"./lodash.isequal-60a7aae7.js";import"./vue-68dd36d7.js";import"./lodash.clonedeep-8b83a099.js";import"./qs-589f641c.js";import"./side-channel-1ba8a7fc.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-a3a9a537.js";import"./deepmerge-89e33937.js";import"./nprogress-34a09d83.js";import"./lucide-vue-next-48142e2c.js";const S={class:"md:grid md:grid-cols-2"},M={class:"md:mt-0 md:col-span-2"},T={class:"px-4 py-5 bg-indigo-50 space-y-2 sm:p-6"},B={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},C={class:"sm:row-span-3"},L={class:"items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md h-fit"},D=t("div",{class:"flex justify-center"},[t("div",{class:"mb-5"},[t("img",{class:"h-24 w-24",src:"/images/anf-logo-main-2x.png",alt:"Workflow logo"})])],-1),Y=t("div",{class:"mb-8 flex justify-center"},[t("h1",{class:"font-semibold font-mono text-lg sm:text-2xl"},"ALFA and Friends Diagnostic Test")],-1),$={key:0,class:"flex-col px-6 py-14 rounded-[4px] min-w-[80%] lg:min-w-[25%] space-y-4"},j={class:"w-full border-collapse bg-white text-left text-sm text-gray-500"},N=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Name"),t("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Age"),t("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Date of Birth"),t("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900 text-center"},"Action")])],-1),V={class:"divide-y divide-gray-100"},A={class:"hover:bg-gray-50"},z={class:"border px-6 py-4 text-slate-700"},F={class:"border px-6 py-4 text-slate-700"},H={class:"border px-6 py-4 text-slate-700"},O={class:"border px-6 py-4"},P={class:"flex justify-center gap-4"},q={key:1,class:"flex px-6 py-14 justify-center"},E={class:"flex flex-col w-1/2 p-6"},G={class:"flex flex-col text-sm rounded-md space-y-2"},K=t("label",{class:"block text-sm text-gray-700 font-bold",for:""},"Language",-1),U=t("option",{value:""},"Please select",-1),W=["value"],I={class:"flex flex-col space-y-2"},J={components:{Head:f,Link:k},data(){return{showMain:!0,showSelectLanguage:!1,canStartTest:!1,dt_list:[],form:{child_id:"",child_age:"",language:""},error:{name:!1,age:!1,language:!1}}},watch:{"form.language":{handler(){this.form.language!=""?this.canStartTest=!0:this.canStartTest=!1}}},methods:{startTest(){this.$inertia.post(route("diagnostic_test.run"),{form_data:this.form})},selectChild(u,e){this.form.child_id=u,this.form.child_age=e,this.showMain=!1,this.showSelectLanguage=!0},back(){this.showMain=!0,this.showSelectLanguage=!1}}},Ut=Object.assign(J,{__name:"Main-temp",setup(u){return(e,s)=>(i(),r(p,null,[n(a(f),{title:"Diagnostic Test"}),n(v,null,{header:d(()=>[]),default:d(()=>[t("div",S,[t("div",M,[t("form",{onSubmit:s[3]||(s[3]=h((...o)=>e.submit&&e.submit(...o),["prevent"]))},[t("div",T,[t("div",B,[t("div",C,[t("div",L,[D,Y,e.showMain?(i(),r("div",$,[t("table",j,[N,t("tbody",V,[e.$page.props.children.length?(i(!0),r(p,{key:0},g(e.$page.props.children,(o,Q)=>(i(),r("tr",A,[t("td",z,l(o.name),1),t("td",F,l(a(c)().diff(o.date_of_birth,"years"))+" Years Old",1),t("td",H,l(a(c)(o.date_of_birth,"YYYY.MM.DD").format("DD-MM-YYYY")),1),t("td",O,[t("div",P,[n(w,{buttonType:"blue",onClick:R=>e.selectChild(o.id,a(c)().diff(o.date_of_birth,"years"))},{default:d(()=>[_("Select Student")]),_:2},1032,["onClick"])])])]))),256)):m("",!0)])])])):m("",!0),e.showSelectLanguage?(i(),r("div",q,[t("div",E,[t("div",G,[K,y(t("select",{class:"mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500","onUpdate:modelValue":s[0]||(s[0]=o=>e.form.language=o)},[U,(i(!0),r(p,null,g(e.$page.props.languages,o=>(i(),r("option",{value:o.id},l(o.name),9,W))),256))],512),[[b,e.form.language]])]),t("div",I,[t("button",{type:"button",class:x(["mt-5 w-full border p-2 text-white rounded-[4px] bg-gray-700 hover:bg-gray-600",e.canStartTest?"opacity-100":"cursor-not-allowed opacity-50"]),onClick:s[1]||(s[1]=o=>e.canStartTest?e.startTest():"")},"Start Now",2),t("button",{type:"button",class:"rounded py-2 px-4 bg-gray-300 hover:bg-gray-200",onClick:s[2]||(s[2]=o=>e.back())},"Back")])])])):m("",!0)])])])])],32)])])]),_:1})],64))}});export{Ut as default};