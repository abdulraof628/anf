import{o as d,c as r,a as m,u as k,w as p,F as n,H as y,L as w,d as e,l as x,h as a,v as g,n as i,m as f,e as u,t as _,q as h,g as l}from"./app-4d4cbe7d.js";import{B as $}from"./Authenticated-cde3a9ac.js";import{B as v}from"./Button-7893ea7c.js";import{s as F}from"./multiselect-47e3a9d7.js";import"./ApplicationLogo-7e99a00b.js";import"./NavLink-9d0a350c.js";import"./XIcon-33e2d1a0.js";import"./vue3-perfect-scrollbar-edf4bd5b.js";import"./moment-a9aaa855.js";import"./_plugin-vue_export-helper-c27b6911.js";const L={class:"md:grid md:grid-cols-2"},S={class:"md:mt-0 md:col-span-2"},V={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},B={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},C={class:"sm:row-span-3"},P={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},T=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Resource Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),U={class:"mb-4"},M=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"},[l(" Title "),e("span",{class:"text-red-500"},"*")],-1),N={class:"mt-1 flex rounded-md shadow-sm"},z={class:"mb-4"},D=e("label",{for:"programme_id",class:"block text-sm font-bold text-gray-700"},[l(" Programme "),e("span",{class:"text-red-500"},"*")],-1),O={class:"mt-1 flex rounded-md shadow-sm"},W=["disabled"],j=e("option",{value:""},"Please Select",-1),E=["value"],H={class:"mb-4"},R=e("label",{for:"level_id",class:"block text-sm font-bold text-gray-700"},[l(" Level "),e("span",{class:"text-red-500"},"*")],-1),q={class:"mt-1 flex rounded-md shadow-sm"},A=e("option",{value:""},"Please Select",-1),I=["value"],G={class:"mb-4"},J=e("label",{for:"language_id",class:"block text-sm font-bold text-gray-700"},[l(" Language "),e("span",{class:"text-red-500"},"*")],-1),K={class:"mt-1 flex rounded-md shadow-sm"},Q=e("option",{value:""},"Please Select",-1),X=["value"],Y={class:"mb-4"},Z=e("label",{for:"media_type_id",class:"block text-sm font-bold text-gray-700"},[l(" Media Type "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},oe=e("option",{value:""},"Please Select",-1),se=["value"],te={key:0,class:"mb-4"},de=e("label",{for:"embed_link",class:"block text-sm font-bold text-gray-700"},[l(" Embed Link "),e("span",{class:"text-red-500"},"*")],-1),re={class:"mt-1 flex rounded-md shadow-sm"},le={key:1,class:"mb-4"},ie=e("label",{for:"",class:"block text-sm font-bold text-gray-700"},[l(" File "),e("span",{class:"text-red-500"},"*")],-1),ae={class:"block focus:ring-0 focus:border-gray-300"},ne=e("span",{class:"sr-only"},"Browse File",-1),me=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),pe={class:"flex items-center justify-end"},fe={class:"flex space-x-2"},ue={components:{Head:y,Link:w,Multiselect:F},data(){return{list:{levels:[]},form:{title:"",programme_id:"",level_id:"",language_id:"",media_type_id:"",embed_link:"",embed_file:""}}},watch:{"form.media_type_id":{handler(){this.form.embed_link="",this.form.embed_file=""}}},methods:{submit(){this.$inertia.post(route("teacher_resources.store"),this.form,{preserveState:!0})},uploadFile(b){const o=b.target.files[0];this.form.media_type_id==2&&(o.type=="application/pdf"||o.name.toLowerCase().endsWith(".pdf")?this.form.embed_file=o:(alert("Only PDF File allowed!"),this.$refs.file_input.value="",this.form.embed_file="")),this.form.media_type_id==3&&(o.type==="application/vnd.ms-powerpoint"||o.type==="application/vnd.openxmlformats-officedocument.presentationml.presentation"||o.name.toLowerCase().endsWith(".ppt")||o.name.toLowerCase().endsWith(".pptx")?this.form.embed_file=o:(alert("Only PowerPoint Sildeshow File allowed!"),this.$refs.file_input.value="",this.form.embed_file=""))}}},$e=Object.assign(ue,{__name:"Create",setup(b){return(o,t)=>(d(),r(n,null,[m(k(y),{title:"Teacher Resources"}),m($,null,{header:p(()=>[]),default:p(()=>[e("div",L,[e("div",S,[e("form",{onSubmit:t[7]||(t[7]=x((...s)=>o.submit&&o.submit(...s),["prevent"]))},[e("div",V,[e("div",B,[e("div",C,[e("div",P,[T,e("div",U,[M,e("div",N,[a(e("input",{type:"text",name:"title",id:"title",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.title?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=s=>o.form.title=s),autocomplete:"off"},null,2),[[g,o.form.title]])])]),e("div",z,[D,e("div",O,[a(e("select",{name:"programme_id",id:"programme_id",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.programme_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.programme_id=s),autocomplete:"off",disabled:o.disable_class_levels},[j,(d(!0),r(n,null,u(o.$page.props.programmes,(s,c)=>(d(),r("option",{value:s.id,key:s.id},_(s.name),9,E))),128))],10,W),[[f,o.form.programme_id]])])]),e("div",H,[R,e("div",q,[a(e("select",{name:"level_id",id:"level_id",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.level_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[2]||(t[2]=s=>o.form.level_id=s),autocomplete:"off"},[A,(d(!0),r(n,null,u(o.$page.props.levels,(s,c)=>(d(),r("option",{value:s.id,key:s},_(s.name),9,I))),128))],2),[[f,o.form.level_id]])])]),e("div",G,[J,e("div",K,[a(e("select",{name:"language_id",id:"language_id",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.language_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[3]||(t[3]=s=>o.form.language_id=s),autocomplete:"off"},[Q,(d(!0),r(n,null,u(o.$page.props.languages,(s,c)=>(d(),r("option",{value:s.id,key:s.id},_(s.name),9,X))),128))],2),[[f,o.form.language_id]])])]),e("div",Y,[Z,e("div",ee,[a(e("select",{name:"media_type_id",id:"media_type_id",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.media_type_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[4]||(t[4]=s=>o.form.media_type_id=s),autocomplete:"off"},[oe,(d(!0),r(n,null,u(o.$page.props.media_types,(s,c)=>(d(),r("option",{value:s.id,key:s.id},_(s.name),9,se))),128))],2),[[f,o.form.media_type_id]])])]),o.form.media_type_id==1?(d(),r("div",te,[de,e("div",re,[a(e("textarea",{type:"text",name:"embed_link",id:"embed_link",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.embed_link?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[5]||(t[5]=s=>o.form.embed_link=s),autocomplete:"off"},null,2),[[g,o.form.embed_link]])])])):h("",!0),o.form.media_type_id==2||o.form.media_type_id==3?(d(),r("div",le,[ie,e("label",ae,[ne,e("input",{type:"file",ref:"file_input",class:i(["focus:ring-0 border rounded-md block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 focus:outline-none",o.$page.props.errors.embed_file?"border-red-300":"border-gray-300"]),onChange:t[6]||(t[6]=(...s)=>o.uploadFile&&o.uploadFile(...s))},null,34)])])):h("",!0),me,e("div",pe,[e("div",fe,[m(v,{buttonType:"gray",route:o.route("teacher_resources")},{default:p(()=>[l("Cancel")]),_:1},8,["route"]),m(v,{type:"submit"},{default:p(()=>[l("Save")]),_:1})])])])])])])],32)])])]),_:1})],64))}});export{$e as default};
