import{c as d,b as f,u as k,w as p,F as n,H as y,L as w,o as l,d as e,e as x,f as a,l as g,n as i,g as u,h as _,t as c,j as h,k as r}from"./app-d43ace84.js";import{B as $}from"./Authenticated-86ad341a.js";import{B as v}from"./Button-59a3957d.js";import{b as F}from"./toggle-a4e938ae.js";import{s as L}from"./multiselect-e3235bdf.js";/* empty css            */import"./ApplicationLogo-85a4f4bf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-dbfe2aa6.js";const S={class:"md:grid md:grid-cols-2"},V={class:"md:mt-0 md:col-span-2"},B={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},C={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},P={class:"sm:row-span-3"},T={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},U=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Add New Resource"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),M={class:"mb-4"},N=e("label",{for:"title",class:"block text-sm font-bold text-gray-700"},[r(" Title "),e("span",{class:"text-red-500"},"*")],-1),j={class:"mt-1 flex rounded-md shadow-sm"},z={class:"mb-4"},D=e("label",{for:"programme_id",class:"block text-sm font-bold text-gray-700"},[r(" Programme "),e("span",{class:"text-red-500"},"*")],-1),O={class:"mt-1 flex rounded-md shadow-sm"},W=["disabled"],A=e("option",{value:""},"Please Select",-1),E=["value"],H={class:"mb-4"},R=e("label",{for:"level_id",class:"block text-sm font-bold text-gray-700"},[r(" Level "),e("span",{class:"text-red-500"},"*")],-1),q={class:"mt-1 flex rounded-md shadow-sm"},G=e("option",{value:""},"Please Select",-1),I=["value"],J={class:"mb-4"},K=e("label",{for:"language_id",class:"block text-sm font-bold text-gray-700"},[r(" Language "),e("span",{class:"text-red-500"},"*")],-1),Q={class:"mt-1 flex rounded-md shadow-sm"},X=e("option",{value:""},"Please Select",-1),Y=["value"],Z={class:"mb-4"},ee=e("label",{for:"media_type_id",class:"block text-sm font-bold text-gray-700"},[r(" Media Type "),e("span",{class:"text-red-500"},"*")],-1),oe={class:"mt-1 flex rounded-md shadow-sm"},se=e("option",{value:""},"Please Select",-1),te=["value"],de={key:0,class:"mb-4"},le=e("label",{for:"embed_link",class:"block text-sm font-bold text-gray-700"},[r(" Embed Link "),e("span",{class:"text-red-500"},"*")],-1),re={class:"mt-1 flex rounded-md shadow-sm"},ie={key:1,class:"mb-4"},ae=e("label",{for:"",class:"block text-sm font-bold text-gray-700"},[r(" File "),e("span",{class:"text-red-500"},"*")],-1),ne={class:"block focus:ring-0 focus:border-gray-300"},me=e("span",{class:"sr-only"},"Browse File",-1),fe=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),pe={class:"flex items-center justify-end"},ue={class:"flex space-x-2"},_e={components:{Head:y,Link:w,Toggle:F,Multiselect:L},data(){return{list:{levels:[]},form:{title:"",programme_id:"",level_id:"",language_id:"",media_type_id:"",embed_link:"",embed_file:""}}},watch:{"form.programme_id":{handler(){this.form.programme_id!=""&&axios.get(route("get_programme_levels",this.form.programme_id)).then(m=>{this.form.level_id="",this.list.levels=m.data})},deep:!0},"form.media_type_id":{handler(){this.form.embed_link="",this.form.embed_file=""}}},methods:{submit(){this.$inertia.post(route("teacher_resources.store"),this.form,{preserveState:!0})},uploadFile(m){const o=m.target.files[0];this.form.media_type_id==2&&(o.type=="application/pdf"||o.name.toLowerCase().endsWith(".pdf")?this.form.embed_file=o:(alert("Only PDF File allowed!"),this.$refs.file_input.value="",this.form.embed_file="")),this.form.media_type_id==3&&(o.type==="application/vnd.ms-powerpoint"||o.type==="application/vnd.openxmlformats-officedocument.presentationml.presentation"||o.name.toLowerCase().endsWith(".ppt")||o.name.toLowerCase().endsWith(".pptx")?this.form.embed_file=o:(alert("Only PowerPoint Sildeshow File allowed!"),this.$refs.file_input.value="",this.form.embed_file=""))}}},$e=Object.assign(_e,{__name:"Create",setup(m){return(o,t)=>(l(),d(n,null,[f(k(y),{title:"Teacher Resources"}),f($,null,{header:p(()=>[]),default:p(()=>[e("div",S,[e("div",V,[e("form",{onSubmit:t[7]||(t[7]=x((...s)=>o.submit&&o.submit(...s),["prevent"]))},[e("div",B,[e("div",C,[e("div",P,[e("div",T,[U,e("div",M,[N,e("div",j,[a(e("input",{type:"text",name:"title",id:"title",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.title?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=s=>o.form.title=s),autocomplete:"off"},null,2),[[g,o.form.title]])])]),e("div",z,[D,e("div",O,[a(e("select",{name:"programme_id",id:"programme_id",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.programme_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.programme_id=s),autocomplete:"off",disabled:o.disable_class_levels},[A,(l(!0),d(n,null,_(o.$page.props.programmes,(s,b)=>(l(),d("option",{value:s.id,key:s.id},c(s.name),9,E))),128))],10,W),[[u,o.form.programme_id]])])]),e("div",H,[R,e("div",q,[a(e("select",{name:"level_id",id:"level_id",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.level_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[2]||(t[2]=s=>o.form.level_id=s),autocomplete:"off"},[G,(l(!0),d(n,null,_(o.list.levels,(s,b)=>(l(),d("option",{value:s.level,key:s},c(s.level),9,I))),128))],2),[[u,o.form.level_id]])])]),e("div",J,[K,e("div",Q,[a(e("select",{name:"language_id",id:"language_id",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.language_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[3]||(t[3]=s=>o.form.language_id=s),autocomplete:"off"},[X,(l(!0),d(n,null,_(o.$page.props.languages,(s,b)=>(l(),d("option",{value:s.id,key:s.id},c(s.name),9,Y))),128))],2),[[u,o.form.language_id]])])]),e("div",Z,[ee,e("div",oe,[a(e("select",{name:"media_type_id",id:"media_type_id",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.media_type_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[4]||(t[4]=s=>o.form.media_type_id=s),autocomplete:"off"},[se,(l(!0),d(n,null,_(o.$page.props.media_types,(s,b)=>(l(),d("option",{value:s.id,key:s.id},c(s.name),9,te))),128))],2),[[u,o.form.media_type_id]])])]),o.form.media_type_id==1?(l(),d("div",de,[le,e("div",re,[a(e("textarea",{type:"text",name:"embed_link",id:"embed_link",class:i(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.embed_link?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[5]||(t[5]=s=>o.form.embed_link=s),autocomplete:"off"},null,2),[[g,o.form.embed_link]])])])):h("",!0),o.form.media_type_id==2||o.form.media_type_id==3?(l(),d("div",ie,[ae,e("label",ne,[me,e("input",{type:"file",ref:"file_input",class:i(["focus:ring-0 border rounded-md block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 focus:outline-none",o.$page.props.errors.embed_file?"border-red-300":"border-gray-300"]),onChange:t[6]||(t[6]=(...s)=>o.uploadFile&&o.uploadFile(...s))},null,34)])])):h("",!0),fe,e("div",pe,[e("div",ue,[f(v,{buttonType:"gray",route:o.route("teacher_resources")},{default:p(()=>[r("Cancel")]),_:1},8,["route"]),f(v,{type:"submit"},{default:p(()=>[r("Save")]),_:1})])])])])])])],32)])])]),_:1})],64))}});export{$e as default};
