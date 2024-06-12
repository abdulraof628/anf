import{o as n,c as r,a as b,u as _,d as e,h as a,v as f,n as l,m as p,F as i,e as d,q as u,t as c,H as h,L as x}from"./app-7998ab3f.js";import"./vue3-perfect-scrollbar-1a319691.js";import"./TimeAgo-dbb2af03.js";import"./moment-a9aaa855.js";import"./_plugin-vue_export-helper-c27b6911.js";const y={class:"flex flex-col h-screen"},v={class:"flex-grow flex flex-col items-center justify-center py-6 bg-indigo-500"},w={class:"mb-5"},k=["src"],N=e("div",{class:"mb-8 mx-4 text-center flex justify-center"},[e("h1",{class:"font-semibold font-mono tracking-wider text-lg text-white"},"ALFA and Friends Diagnostic Test")],-1),T={key:0,class:"min-w-[90%] md:min-w-[50%] lg:min-w-[35%] xl:min-w-[30%] rounded bg-indigo-100 px-6 py-10 shadow-md shadow-gray-600"},$={class:"flex flex-col space-y-4"},L={class:"flex flex-col text-sm rounded-md space-y-2"},G=e("label",{class:"block text-sm text-gray-700 font-bold",for:""},"Name",-1),V={class:"flex flex-col text-sm rounded-md space-y-2"},M=e("label",{class:"block text-sm text-gray-700 font-bold",for:""},"Age",-1),j=["value"],C={class:"flex flex-col text-sm rounded-md space-y-2"},D=e("label",{class:"block text-sm text-gray-700 font-bold",for:""},"School",-1),F={key:1,class:"min-w-[90%] md:min-w-[50%] lg:min-w-[35%] xl:min-w-[30%] rounded bg-indigo-100 px-6 py-10 shadow-md shadow-gray-600"},H={class:"flex flex-col space-y-4"},S={class:"flex flex-col text-sm rounded-md space-y-2"},U=e("label",{class:"block text-sm text-gray-700 font-bold",for:""},"Language",-1),A=e("option",{value:""},"Please select",-1),B=["value"],q={key:2,class:"min-w-[90%] md:min-w-[50%] lg:min-w-[35%] xl:min-w-[30%] rounded bg-indigo-100 p-3 shadow-md shadow-gray-600 mx-4 max-w-2xl"},z={class:"flex flex-col space-y-4"},E={class:"px-4 py-6 border-2 border-dashed border-indigo-400 rounded-l"},O={class:"flex items-start"},P={class:"flex-grow truncate"},I={class:"sm:flex justify-center items-center mb-3"},J={class:"text-2xl text-center leading-snug font-bold text-gray-800 truncate mb-1 sm:mb-0 uppercase"},K={class:"flex items-end justify-between whitespace-normal"},Q={class:"text-gray-900"},R={class:"list-disc mb-2 whitespace-pre-wrap list-inside list-circle"},W=["innerHTML"],X={components:{Head:h,Link:x},data(){return{current_page:1,canGoNext:!1,dt_list:[],form:{name:"",age:this.$page.props.ages?this.$page.props.ages[0].id:"",school:"",language:""},error:{name:!1,age:!1,language:!1}}},watch:{"form.language":{handler(){this.form.language==""?this.canGoNext=!1:this.canGoNext=!0},deep:!0}},methods:{login(){this.$inertia.get(route("diagnostic_test"))},startTest(){this.$inertia.post(route("diagnostic_test.run"),{form_data:this.form})},goToLanguage(){if(!this.form.name){this.error.name=this.form.name==="";return}this.current_page+=1},goToGuidelines(){this.current_page+=1}}},re=Object.assign(X,{__name:"Main",setup(Y){return(o,t)=>{var g,m;return n(),r(i,null,[b(_(h),{title:"Diagnostic Test"}),e("div",y,[e("div",v,[e("div",w,[e("img",{class:"h-20 w-24",src:"/images/anf-logo-main-2x.png"},null,8,k)]),N,o.current_page==1?(n(),r("div",T,[e("div",$,[e("div",L,[G,a(e("input",{class:l(["w-full mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500",o.error.name?"border-red-500":"border-gray-500"]),"onUpdate:modelValue":t[0]||(t[0]=s=>o.form.name=s),autocomplete:"off"},null,2),[[f,o.form.name]])]),e("div",V,[M,a(e("select",{class:l(["w-full mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500",o.error.age?"border-red-500":"border-gray-500"]),"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.age=s),autocomplete:"off"},[(n(!0),r(i,null,d(o.$page.props.ages,s=>(n(),r("option",{value:s.id},c(s.name),9,j))),256))],2),[[p,o.form.age]])]),e("div",C,[D,a(e("input",{class:l(["w-full border rounded-[4px] p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500",o.error.school?"border-red-500":"border-gray-500"]),"onUpdate:modelValue":t[2]||(t[2]=s=>o.form.school=s),autocomplete:"off"},null,2),[[f,o.form.school]])]),e("button",{type:"submit",class:"mt-5 w-full border p-2 bg-gray-800 text-white rounded-[4px] hover:bg-gray-700",onClick:t[3]||(t[3]=s=>o.goToLanguage())},"Next")])])):u("",!0),o.current_page==2?(n(),r("div",F,[e("div",H,[e("div",S,[U,a(e("select",{class:"mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500","onUpdate:modelValue":t[4]||(t[4]=s=>o.form.language=s)},[A,(n(!0),r(i,null,d(o.$page.props.languages,s=>(n(),r("option",{value:s.id},c(s.name),9,B))),256))],512),[[p,o.form.language]])]),e("button",{type:"button",class:l(["mt-5 w-full border p-2 text-white rounded-[4px] bg-gray-700 hover:bg-gray-600",o.canGoNext?"opacity-100":"cursor-not-allowed opacity-50"]),onClick:t[5]||(t[5]=s=>o.canGoNext?o.goToGuidelines():"")},"Next",2)])])):u("",!0),o.current_page==3?(n(),r("div",q,[e("div",z,[e("div",E,[e("div",O,[e("div",P,[e("div",I,[e("h2",J,c((g=o.$page.props.languages.find(s=>s.id==o.form.language))==null?void 0:g.guideline_header),1)]),e("div",K,[e("div",Q,[e("ul",R,[(n(!0),r(i,null,d((m=o.$page.props.languages.find(s=>s.id==o.form.language))==null?void 0:m.guideline_body.split(`
`),(s,Z)=>(n(),r("li",{class:"my-5",innerHTML:s},null,8,W))),256))])])])])])]),e("button",{type:"submit",class:"mt-5 border p-2 bg-gray-800 text-white rounded-[4px] hover:bg-gray-700",onClick:t[6]||(t[6]=s=>o.canGoNext?o.startTest():"")},"Start Now")])])):u("",!0)])])],64)}}});export{re as default};
