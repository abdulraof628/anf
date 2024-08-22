import{o as a,c as r,a as n,u as i,w as d,F as c,H as f,L as h,d as e,l as _,e as m,t as l,g as y,q as p,h as b,m as x,n as v}from"./app-de3224c3.js";import{B as w}from"./Authenticated-3ff31369.js";import{B as k}from"./Button-6beb9af7.js";import{h as g}from"./moment-55cb88ed.js";import"./ApplicationLogo-5ec5b21e.js";import"./XIcon-53186728.js";import"./perfect-scrollbar.esm-7a922f4b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-0298f640.js";const S={class:"md:grid md:grid-cols-2"},M={class:"md:mt-0 md:col-span-2"},T={class:"px-4 py-5 bg-indigo-50 space-y-2 sm:p-6"},B={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},L={class:"sm:row-span-3"},C={class:"items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md h-fit"},D=e("div",{class:"flex justify-center"},[e("div",{class:"mb-5"},[e("img",{class:"h-24 w-24",src:"/images/anf-logo-main-2x.png",alt:"Workflow logo"})])],-1),Y=e("div",{class:"mb-8 flex justify-center"},[e("h1",{class:"font-semibold font-mono text-lg sm:text-2xl"},"ALFA and Friends Diagnostic Test")],-1),$={key:0,class:"flex-col px-6 py-14 rounded-[4px] min-w-[80%] lg:min-w-[25%] space-y-4"},j={class:"w-full border-collapse bg-white text-left text-sm text-gray-500"},N=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Name"),e("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Age"),e("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Date of Birth"),e("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900 text-center"},"Action")])],-1),A={class:"divide-y divide-gray-100"},V={class:"hover:bg-gray-50"},F={class:"border px-6 py-4 text-slate-700"},z={class:"border px-6 py-4 text-slate-700"},H={class:"border px-6 py-4 text-slate-700"},O={class:"border px-6 py-4"},q={class:"flex justify-center gap-4"},E={key:1,class:"flex px-6 py-14 justify-center"},P={class:"flex flex-col w-1/2 p-6"},U={class:"flex flex-col text-sm rounded-md space-y-2"},W=e("label",{class:"block text-sm text-gray-700 font-bold",for:""},"Language",-1),G=e("option",{value:""},"Please select",-1),I=["value"],J={class:"flex flex-col space-y-2"},K={components:{Head:f,Link:h},data(){return{showMain:!0,showSelectLanguage:!1,canStartTest:!1,dt_list:[],form:{child_id:"",child_age:"",language:""},error:{name:!1,age:!1,language:!1}}},watch:{"form.language":{handler(){this.form.language!=""?this.canStartTest=!0:this.canStartTest=!1}}},methods:{startTest(){this.$inertia.post(route("diagnostic_test.run"),{form_data:this.form})},selectChild(u,t){this.form.child_id=u,this.form.child_age=t,this.showMain=!1,this.showSelectLanguage=!0},back(){this.showMain=!0,this.showSelectLanguage=!1}}},le=Object.assign(K,{__name:"Main-temp",setup(u){return(t,o)=>(a(),r(c,null,[n(i(f),{title:"Diagnostic Test"}),n(w,null,{header:d(()=>[]),default:d(()=>[e("div",S,[e("div",M,[e("form",{onSubmit:o[3]||(o[3]=_((...s)=>t.submit&&t.submit(...s),["prevent"]))},[e("div",T,[e("div",B,[e("div",L,[e("div",C,[D,Y,t.showMain?(a(),r("div",$,[e("table",j,[N,e("tbody",A,[t.$page.props.children.length?(a(!0),r(c,{key:0},m(t.$page.props.children,(s,Q)=>(a(),r("tr",V,[e("td",F,l(s.name),1),e("td",z,l(i(g)().diff(s.date_of_birth,"years"))+" Years Old",1),e("td",H,l(i(g)(s.date_of_birth,"YYYY.MM.DD").format("DD-MM-YYYY")),1),e("td",O,[e("div",q,[n(k,{buttonType:"blue",onClick:R=>t.selectChild(s.id,i(g)().diff(s.date_of_birth,"years"))},{default:d(()=>[y("Select Student")]),_:2},1032,["onClick"])])])]))),256)):p("",!0)])])])):p("",!0),t.showSelectLanguage?(a(),r("div",E,[e("div",P,[e("div",U,[W,b(e("select",{class:"mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500","onUpdate:modelValue":o[0]||(o[0]=s=>t.form.language=s)},[G,(a(!0),r(c,null,m(t.$page.props.languages,s=>(a(),r("option",{value:s.id},l(s.name),9,I))),256))],512),[[x,t.form.language]])]),e("div",J,[e("button",{type:"button",class:v(["mt-5 w-full border p-2 text-white rounded-[4px] bg-gray-700 hover:bg-gray-600",t.canStartTest?"opacity-100":"cursor-not-allowed opacity-50"]),onClick:o[1]||(o[1]=s=>t.canStartTest?t.startTest():"")},"Start Now",2),e("button",{type:"button",class:"rounded py-2 px-4 bg-gray-300 hover:bg-gray-200",onClick:o[2]||(o[2]=s=>t.back())},"Back")])])])):p("",!0)])])])])],32)])])]),_:1})],64))}});export{le as default};