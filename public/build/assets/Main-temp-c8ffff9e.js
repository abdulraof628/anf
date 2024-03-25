import{o as a,c as r,a as n,u as i,w as d,F as c,H as h,L as f,d as e,k as _,e as m,t as l,g as y,p,h as b,l as x,n as v}from"./app-1e0c6682.js";import{B as w}from"./Authenticated-c3a74fd5.js";import{B as k}from"./Button-50ac9964.js";import{h as g}from"./moment-a9aaa855.js";import"./ApplicationLogo-6909dc22.js";import"./XIcon-80766edc.js";import"./vue3-perfect-scrollbar-40f5923a.js";import"./_plugin-vue_export-helper-c27b6911.js";const S={class:"md:grid md:grid-cols-2"},M={class:"md:mt-0 md:col-span-2"},T={class:"px-4 py-5 bg-indigo-50 space-y-2 sm:p-6"},B={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},L={class:"sm:row-span-3"},C={class:"items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md h-fit"},D={class:"flex justify-center"},Y={class:"mb-5"},$=["src"],j=e("div",{class:"mb-8 flex justify-center"},[e("h1",{class:"font-semibold font-mono text-lg sm:text-2xl"},"ALFA and Friends Diagnostic Test")],-1),N={key:0,class:"flex-col px-6 py-14 rounded-[4px] min-w-[80%] lg:min-w-[25%] space-y-4"},A={class:"w-full border-collapse bg-white text-left text-sm text-gray-500"},V=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Name"),e("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Age"),e("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900"},"Date of Birth"),e("th",{scope:"col",class:"border px-6 py-4 font-medium text-gray-900 text-center"},"Action")])],-1),F={class:"divide-y divide-gray-100"},z={class:"hover:bg-gray-50"},H={class:"border px-6 py-4 text-slate-700"},O={class:"border px-6 py-4 text-slate-700"},E={class:"border px-6 py-4 text-slate-700"},P={class:"border px-6 py-4"},U={class:"flex justify-center gap-4"},W={key:1,class:"flex px-6 py-14 justify-center"},q={class:"flex flex-col w-1/2 p-6"},G={class:"flex flex-col text-sm rounded-md space-y-2"},I=e("label",{class:"block text-sm text-gray-700 font-bold",for:""},"Language",-1),J=e("option",{value:""},"Please select",-1),K=["value"],Q={class:"flex flex-col space-y-2"},R={components:{Head:h,Link:f},data(){return{showMain:!0,showSelectLanguage:!1,canStartTest:!1,dt_list:[],form:{child_id:"",child_age:"",language:""},error:{name:!1,age:!1,language:!1}}},watch:{"form.language":{handler(){this.form.language!=""?this.canStartTest=!0:this.canStartTest=!1}}},methods:{startTest(){this.$inertia.post(route("diagnostic_test.run"),{form_data:this.form})},selectChild(u,t){this.form.child_id=u,this.form.child_age=t,this.showMain=!1,this.showSelectLanguage=!0},back(){this.showMain=!0,this.showSelectLanguage=!1}}},ne=Object.assign(R,{__name:"Main-temp",setup(u){return(t,o)=>(a(),r(c,null,[n(i(h),{title:"Diagnostic Test"}),n(w,null,{header:d(()=>[]),default:d(()=>[e("div",S,[e("div",M,[e("form",{onSubmit:o[3]||(o[3]=_((...s)=>t.submit&&t.submit(...s),["prevent"]))},[e("div",T,[e("div",B,[e("div",L,[e("div",C,[e("div",D,[e("div",Y,[e("img",{class:"h-24 w-24",src:"/images/anf-logo-main-2x.png",alt:"Workflow logo"},null,8,$)])]),j,t.showMain?(a(),r("div",N,[e("table",A,[V,e("tbody",F,[t.$page.props.children.length?(a(!0),r(c,{key:0},m(t.$page.props.children,(s,X)=>(a(),r("tr",z,[e("td",H,l(s.name),1),e("td",O,l(i(g)().diff(s.date_of_birth,"years"))+" Years Old",1),e("td",E,l(i(g)(s.date_of_birth,"YYYY.MM.DD").format("DD-MM-YYYY")),1),e("td",P,[e("div",U,[n(k,{buttonType:"blue",onClick:Z=>t.selectChild(s.id,i(g)().diff(s.date_of_birth,"years"))},{default:d(()=>[y("Select Student")]),_:2},1032,["onClick"])])])]))),256)):p("",!0)])])])):p("",!0),t.showSelectLanguage?(a(),r("div",W,[e("div",q,[e("div",G,[I,b(e("select",{class:"mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500","onUpdate:modelValue":o[0]||(o[0]=s=>t.form.language=s)},[J,(a(!0),r(c,null,m(t.$page.props.languages,s=>(a(),r("option",{value:s.id},l(s.name),9,K))),256))],512),[[x,t.form.language]])]),e("div",Q,[e("button",{type:"button",class:v(["mt-5 w-full border p-2 text-white rounded-[4px] bg-gray-700 hover:bg-gray-600",t.canStartTest?"opacity-100":"cursor-not-allowed opacity-50"]),onClick:o[1]||(o[1]=s=>t.canStartTest?t.startTest():"")},"Start Now",2),e("button",{type:"button",class:"rounded py-2 px-4 bg-gray-300 hover:bg-gray-200",onClick:o[2]||(o[2]=s=>t.back())},"Back")])])])):p("",!0)])])])])],32)])])]),_:1})],64))}});export{ne as default};
