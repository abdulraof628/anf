import{o as d,c as r,b as f,u as k,w as p,F as n,H as y,L as w,d as e,e as x,f as a,l as g,n as i,g as u,h as _,t as c,j as h,k as l}from"./app-01945339.js";import{B as $}from"./Authenticated-d0b2b0c3.js";import{B as v}from"./Button-3f8bd8cb.js";import{s as F}from"./multiselect-44431070.js";import"./ApplicationLogo-f76971ac.js";import"./XIcon-7fc73615.js";import"./toggle-054b6181.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";const L={class:"md:grid md:grid-cols-2"},S={class:"md:mt-0 md:col-span-2"},V={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},B={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},C={class:"sm:row-span-3"},P={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},T=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Resource Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),U={class:"mb-4"},M=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"},[l(" Title "),e("span",{class:"text-red-500"},"*")],-1),N={class:"mt-1 flex rounded-md shadow-sm"},j={class:"mb-4"},z=e("label",{for:"programme_id",class:"block text-sm font-bold text-gray-700"},[l(" Programme "),e("span",{class:"text-red-500"},"*")],-1),D={class:"mt-1 flex rounded-md shadow-sm"},O=["disabled"],W=e("option",{value:""},"Please Select",-1),E=["value"],H={class:"mb-4"},R=e("label",{for:"level_id",class:"block text-sm font-bold text-gray-700"},[l(" Level "),e("span",{class:"text-red-500"},"*")],-1),A={class:"mt-1 flex rounded-md shadow-sm"},I=e("option",{value:""},"Please Select",-1),q=["value"],G={class:"mb-4"},J=e("label",{for:"language_id",class:"block text-sm font-bold text-gray-700"},[l(" Language "),e("span",{class:"text-red-500"},"*")],-1),K={class:"mt-1 flex rounded-md shadow-sm"},Q=e("option",{value:""},"Please Select",-1),X=["value"],Y={class:"mb-4"},Z=e("label",{for:"media_type_id",class:"block text-sm font-bold text-gray-700"},[l(" Media Type "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},oe=e("option",{value:""},"Please Select",-1),se=["value"],te={key:0,class:"mb-4"},de=e("label",{for:"embed_link",class:"block text-sm font-bold text-gray-700"},[l(" Embed Link "),e("span",{class:"text-red-500"},"*")],-1),re={class:"mt-1 flex rounded-md shadow-sm"},le={key:1,class:"mb-4"},ie=e("label",{for:"",class:"block text-sm font-bold text-gray-700"},[l(" File "),e("span",{class:"text-red-500"},"*")],-1),ae={class:"block focus:ring-0 focus:border-gray-300"},ne=e("span",{class:"sr-only"},"Browse File",-1),me=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),fe={class:"flex items-center justify-end"},pe={class:"flex space-x-2"},ue={components:{Head:y,Link:w,Multiselect:F},data(){return{list:{levels:[]},form:{title:"",programme_id:"",level_id:"",language_id:"",media_type_id:"",embed_link:"",embed_file:""}}},watch:{"form.programme_id":{handler(){this.form.programme_id!=""&&axios.get(route("get_programme_levels",this.form.programme_id)).then(m=>{this.form.level_id="",this.list.levels=m.data})},deep:!0},"form.media_type_id":{handler(){this.form.embed_link="",this.form.embed_file=""}}},methods:{submit(){this.$inertia.post(route("teacher_resources.store"),this.form,{preserveState:!0})},uploadFile(m){const o=m.target.files[0];this.form.media_type_id==2&&(o.type=="application/pdf"||o.name.toLowerCase().endsWith(".pdf")?this.form.embed_file=o:(alert("Only PDF File allowed!"),this.$refs.file_input.value="",this.form.embed_file="")),this.form.media_type_id==3&&(o.type==="application/vnd.ms-powerpoint"||o.type==="application/vnd.openxmlformats-officedocument.presentationml.presentation"||o.name.toLowerCase().endsWith(".ppt")||o.name.toLowerCase().endsWith(".pptx")?this.form.embed_file=o:(alert("Only PowerPoint Sildeshow File allowed!"),this.$refs.file_input.value="",this.form.embed_file=""))}}},xe=Object.assign(ue,{__name:"Create",setup(m){return(o,t)=>(d(),r(n,null,[f(k(y),{title:"Teacher Resources"}),f($,null,{header:p(()=>[]),default:p(()=>[e("div",L,[e("div",S,[e("form",{onSubmit:t[7]||(t[7]=x((...s)=>o.submit&&o.submit(...s),["prevent"]))},[e("div",V,[e("div",B,[e("div",C,[e("div",P,[T,e("div",U,[M,e("div",N,[a(e("input",{type:"text",name:"title",id:"title",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.title?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=s=>o.form.title=s),autocomplete:"off"},null,2),[[g,o.form.title]])])]),e("div",j,[z,e("div",D,[a(e("select",{name:"programme_id",id:"programme_id",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.programme_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.programme_id=s),autocomplete:"off",disabled:o.disable_class_levels},[W,(d(!0),r(n,null,_(o.$page.props.programmes,(s,b)=>(d(),r("option",{value:s.id,key:s.id},c(s.name),9,E))),128))],10,O),[[u,o.form.programme_id]])])]),e("div",H,[R,e("div",A,[a(e("select",{name:"level_id",id:"level_id",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.level_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[2]||(t[2]=s=>o.form.level_id=s),autocomplete:"off"},[I,(d(!0),r(n,null,_(o.list.levels,(s,b)=>(d(),r("option",{value:s.level,key:s},c(s.level),9,q))),128))],2),[[u,o.form.level_id]])])]),e("div",G,[J,e("div",K,[a(e("select",{name:"language_id",id:"language_id",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.language_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[3]||(t[3]=s=>o.form.language_id=s),autocomplete:"off"},[Q,(d(!0),r(n,null,_(o.$page.props.languages,(s,b)=>(d(),r("option",{value:s.id,key:s.id},c(s.name),9,X))),128))],2),[[u,o.form.language_id]])])]),e("div",Y,[Z,e("div",ee,[a(e("select",{name:"media_type_id",id:"media_type_id",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.media_type_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[4]||(t[4]=s=>o.form.media_type_id=s),autocomplete:"off"},[oe,(d(!0),r(n,null,_(o.$page.props.media_types,(s,b)=>(d(),r("option",{value:s.id,key:s.id},c(s.name),9,se))),128))],2),[[u,o.form.media_type_id]])])]),o.form.media_type_id==1?(d(),r("div",te,[de,e("div",re,[a(e("textarea",{type:"text",name:"embed_link",id:"embed_link",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.embed_link?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[5]||(t[5]=s=>o.form.embed_link=s),autocomplete:"off"},null,2),[[g,o.form.embed_link]])])])):h("",!0),o.form.media_type_id==2||o.form.media_type_id==3?(d(),r("div",le,[ie,e("label",ae,[ne,e("input",{type:"file",ref:"file_input",class:i(["focus:ring-0 border rounded-md block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 focus:outline-none",o.$page.props.errors.embed_file?"border-red-300":"border-gray-300"]),onChange:t[6]||(t[6]=(...s)=>o.uploadFile&&o.uploadFile(...s))},null,34)])])):h("",!0),me,e("div",fe,[e("div",pe,[f(v,{buttonType:"gray",route:o.route("teacher_resources")},{default:p(()=>[l("Cancel")]),_:1},8,["route"]),f(v,{type:"submit"},{default:p(()=>[l("Save")]),_:1})])])])])])])],32)])])]),_:1})],64))}});export{xe as default};
