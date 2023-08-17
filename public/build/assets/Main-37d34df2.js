import{c as a,b as d,u as h,d as e,f as n,l as u,n as l,g as m,F as i,h as f,j as g,w as b,T as y,H as p,L as x,o as r,t as c}from"./app-5b70941e.js";import"./default.css_vue_type_style_index_0_src_true_lang-5057ee22.js";/* empty css            */import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";const v={class:"flex flex-col items-center justify-center h-screen bg-blue-100"},_={class:"mb-5"},w=["src"],k=e("div",{class:"mb-8 flex justify-center"},[e("h1",{class:"font-semibold font-mono text-lg sm:text-2xl"},"ALFA and Friends Diagnostic Test")],-1),S={key:0,class:"flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] min-w-[80%] lg:min-w-[25%] space-y-4"},T={class:"flex flex-col text-sm rounded-md space-y-1"},L=e("label",{class:"block text-sm text-gray-700 font-bold",for:""},"Name",-1),$={class:"flex flex-col text-sm rounded-md space-y-1"},M=e("label",{class:"block text-sm text-gray-700 font-bold",for:""},"Age",-1),V=["value"],N={class:"flex flex-col text-sm rounded-md space-y-1"},C=e("label",{class:"block text-sm text-gray-700 font-bold",for:""},"School",-1),j={key:0,class:"flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] min-w-[25%] space-y-4"},D={class:"flex flex-col text-sm rounded-md space-y-2"},F=e("label",{class:"block text-sm text-gray-700 font-bold",for:""},"Language",-1),U=e("option",{value:""},"Please select",-1),A=["value"],B={components:{Head:p,Link:x},data(){return{showMain:!0,showSelectLanguage:!1,canStartTest:!1,dt_list:[],form:{name:"",age:this.$page.props.ages?this.$page.props.ages[0].id:"",school:"",language:""},error:{name:!1,age:!1,language:!1}}},watch:{"form.language":{handler(){this.form.language!=""?this.canStartTest=!0:this.canStartTest=!1}}},methods:{login(){this.$inertia.get(route("diagnostic_test"))},startTest(){this.$inertia.post(route("diagnostic_test.run"),{form_data:this.form})},nextPage(){this.form.name?(this.showMain=!1,this.showSelectLanguage=!0):this.error.name=this.form.name===""}}},q=Object.assign(B,{__name:"Main",setup(P){return(o,s)=>(r(),a(i,null,[d(h(p),{title:"Diagnostic Test"}),e("div",v,[e("div",_,[e("img",{class:"h-24 w-24",src:"/images/anf-logo-main-2x.png",alt:"Workflow logo"},null,8,w)]),k,o.showMain?(r(),a("div",S,[e("div",T,[L,n(e("input",{class:l(["mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500",o.error.name?"border-red-500":"border-gray-500"]),"onUpdate:modelValue":s[0]||(s[0]=t=>o.form.name=t),autocomplete:"off"},null,2),[[u,o.form.name]])]),e("div",$,[M,n(e("select",{class:l(["mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500",o.error.age?"border-red-500":"border-gray-500"]),"onUpdate:modelValue":s[1]||(s[1]=t=>o.form.age=t),autocomplete:"off"},[(r(!0),a(i,null,f(o.$page.props.ages,t=>(r(),a("option",{value:t.id},c(t.name),9,V))),256))],2),[[m,o.form.age]])]),e("div",N,[C,n(e("input",{class:l(["border rounded-[4px] p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500",o.error.school?"border-red-500":"border-gray-500"]),"onUpdate:modelValue":s[2]||(s[2]=t=>o.form.school=t),autocomplete:"off"},null,2),[[u,o.form.school]])]),e("button",{type:"submit",class:"mt-5 w-full border p-2 bg-gray-800 text-white rounded-[4px] hover:bg-gray-700",onClick:s[3]||(s[3]=t=>o.nextPage())},"Next")])):g("",!0),d(y,{name:"fade"},{default:b(()=>[o.showSelectLanguage?(r(),a("div",j,[e("div",D,[F,n(e("select",{class:"mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500","onUpdate:modelValue":s[4]||(s[4]=t=>o.form.language=t)},[U,(r(!0),a(i,null,f(o.$page.props.languages,t=>(r(),a("option",{value:t.id},c(t.name),9,A))),256))],512),[[m,o.form.language]])]),e("button",{type:"button",class:l(["mt-5 w-full border p-2 text-white rounded-[4px] bg-gray-700 hover:bg-gray-600",o.canStartTest?"opacity-100":"cursor-not-allowed opacity-50"]),onClick:s[5]||(s[5]=t=>o.canStartTest?o.startTest():"")},"Start Now",2)])):g("",!0)]),_:1})])],64))}});export{q as default};
