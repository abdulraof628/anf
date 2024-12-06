import"./Authenticated-bbe12484.js";import{H as _,L as w}from"./@inertiajs-7f289881.js";import{_ as u}from"./Card-20f395ce.js";import{y as g,x as s,u as V,z as t,v as f,Q as a,C as c,F as y,be as p,t as n,W as i,q as x,K as N,J as $}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-c5b8b27a.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-4a86e6ba.js";import"./DialogDescription-be595773.js";import"./lucide-vue-next-53796c49.js";const T={class:"flex flex-col h-screen"},k={class:"flex-grow flex flex-col items-center justify-center py-6 bg-indigo-50"},C={class:"grid grid-cols-1 gap-4"},L={class:""},B={class:""},G={class:""},j={class:""},S={class:"px-4 py-6 border-2 border-dashed border-indigo-400 rounded-l"},H={class:"flex items-start"},U={class:"flex-grow truncate"},D={class:"sm:flex justify-center items-center mb-3"},M={class:"text-2xl text-center leading-snug font-bold text-gray-800 truncate mb-1 sm:mb-0 uppercase"},z={class:"flex items-end justify-between whitespace-normal"},F={class:"text-gray-900"},I={class:"list-disc mb-2 whitespace-pre-wrap list-inside list-circle"},q=["innerHTML"],A={components:{Head:_,Link:w},data(){return{current_page:1,canGoNext:!1,dt_list:[],form:{name:"",age:this.$page.props.ages?this.$page.props.ages[0].id:"",school:"",language:""},error:{name:!1,age:!1,language:!1}}},watch:{"form.language":{handler(){this.form.language==""?this.canGoNext=!1:this.canGoNext=!0},deep:!0}},methods:{login(){this.$inertia.get(route("diagnostic_test"))},startTest(){this.$inertia.post(route("diagnostic_test.run"),{form_data:this.form})},goToLanguage(){if(!this.form.name){this.error.name=this.form.name==="";return}this.current_page+=1},goToGuidelines(){this.current_page+=1}}},ze=Object.assign(A,{__name:"Main",setup(E){return(o,e)=>{const m=p("Label"),b=p("Input"),v=p("ComboBox"),d=p("Button");return n(),g(y,null,[s(V(_),{title:"Diagnostic Test"}),t("div",T,[t("div",k,[e[14]||(e[14]=t("div",{class:"mb-5"},[t("img",{class:"h-20 w-24",src:"/images/anf-logo-main-2x.png"})],-1)),e[15]||(e[15]=t("div",{class:"mb-8 mx-4 text-center flex justify-center"},[t("h1",{class:"font-semibold text-2xl font-noto"},"Diagnostic Test")],-1)),o.current_page==1?(n(),f(u,{key:0,class:"w-full max-w-md"},{content:a(()=>[t("div",C,[t("div",L,[s(m,null,{default:a(()=>e[7]||(e[7]=[i("Name")])),_:1}),s(b,{error:o.error.name,modelValue:o.form.name,"onUpdate:modelValue":e[0]||(e[0]=r=>o.form.name=r),autocomplete:"off"},null,8,["error","modelValue"])]),t("div",B,[s(m,null,{default:a(()=>e[8]||(e[8]=[i("Age")])),_:1}),s(v,{items:o.$page.props.ages,"label-property":"name","value-property":"id",modelValue:o.form.age,"onUpdate:modelValue":e[1]||(e[1]=r=>o.form.age=r),error:!!o.error.age,"search-placeholder":"Search age..."},null,8,["items","modelValue","error"])]),t("div",G,[s(m,null,{default:a(()=>e[9]||(e[9]=[i("School")])),_:1}),s(b,{error:o.error.school,modelValue:o.form.school,"onUpdate:modelValue":e[2]||(e[2]=r=>o.form.school=r),autocomplete:"off"},null,8,["error","modelValue"])]),s(d,{type:"submit",onClick:e[3]||(e[3]=r=>o.goToLanguage())},{default:a(()=>e[10]||(e[10]=[i("Next")])),_:1})])]),_:1})):c("",!0),o.current_page==2?(n(),f(u,{key:1,class:"w-full max-w-md"},{content:a(()=>[t("div",j,[s(m,null,{default:a(()=>e[11]||(e[11]=[i("Language")])),_:1}),s(v,{items:o.$page.props.languages,"label-property":"name","value-property":"id",modelValue:o.form.language,"onUpdate:modelValue":e[4]||(e[4]=r=>o.form.language=r),error:!!o.error.age,"search-placeholder":"Search age..."},null,8,["items","modelValue","error"])]),s(d,{onClick:e[5]||(e[5]=r=>o.canGoNext?o.goToGuidelines():""),class:x(o.canGoNext?"":"bg-gray-300 hover:bg-gray-300 cursor-not-allowed")},{default:a(()=>e[12]||(e[12]=[i("Next")])),_:1},8,["class"])]),_:1})):c("",!0),o.current_page==3?(n(),f(u,{key:2,class:"w-full max-w-2xl"},{content:a(()=>{var r,h;return[t("div",S,[t("div",H,[t("div",U,[t("div",D,[t("h2",M,N((r=o.$page.props.languages.find(l=>l.id==o.form.language))==null?void 0:r.guideline_header),1)]),t("div",z,[t("div",F,[t("ul",I,[(n(!0),g(y,null,$((h=o.$page.props.languages.find(l=>l.id==o.form.language))==null?void 0:h.guideline_body.split(`
`),(l,J)=>(n(),g("li",{class:"my-5",innerHTML:l},null,8,q))),256))])])])])])]),s(d,{onClick:e[6]||(e[6]=l=>o.startTest())},{default:a(()=>e[13]||(e[13]=[i("Start Now")])),_:1})]}),_:1})):c("",!0)])])],64)}}});export{ze as default};
