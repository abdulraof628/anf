<<<<<<< HEAD:public/build/assets/Onboard-a967cd5c.js
import{H as w,b as h,j as y,o as a,c as i,a as c,d as e,t as p,q as m,g as l,h as d,v as u,n as b,F as v}from"./app-864f64ce.js";import{s as k}from"./multiselect-e1fa0468.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const C={components:{Multiselect:k,Head:w},data(){return{search_query:!1,state_list:[],current_step:3,loading:{country:!1,state:!1},form:{full_name:this.$page.props.auth.user.display_name,calling_code:"",contact_number:this.$page.props.auth.user.user_contact?this.$page.props.auth.user.user_contact:"",address:this.$page.props.auth.user.user_address?this.$page.props.auth.user.user_address:"",country_id:this.$page.props.auth.user.user_country_id?this.$page.props.auth.user.user_country_id:"",country_state:this.$page.props.auth.user.user_state?this.$page.props.auth.user.user_state:"",country_code:""},errors:{full_name:!1,country_code:!1,country_state:!1,contact_number:!1,address:!1}}},watch:{"form.country_id":{handler(){this.form.country_id&&this.setCountryData(this.form.country_id)},immediate:!0}},methods:{next(){this.current_step+=1},previous(){this.current_step-=1},setCountryData(n){this.loading.state=!0,h.get(route("countries.find",n)).then(t=>{this.setStateList(t.data.country_code),this.form.calling_code=t.data.calling_code,this.form.country_code=t.data.country_code}).catch(t=>{this.errored=!0})},setStateList(n){var t=this.state_list;t.splice(0),h({method:"post",url:"https://countriesnow.space/api/v0.1/countries/states",headers:{"Content-Type":"application/json"},data:{iso2:n}}).then(f=>{f.data.data.states.forEach(function(g){t.push(g.name)}),this.loading.state=!1})},clearState(){this.form.country_state=""},saveProfile(){this.errors.full_name=!this.form.full_name,this.errors.country_code=!this.form.country_code,this.errors.country_state=!this.form.country_state,this.errors.contact_number=!this.form.contact_number,this.errors.address=!this.form.address,this.form.full_name&&this.form.country_code&&this.form.country_state&&this.form.contact_number&&this.form.address&&this.$inertia.post(route("profile.store"),this.form)}}},j={class:"min-h-screen flex flex-col items-center justify-center bg-indigo-100"},P={class:"flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-6 py-8 rounded-md w-full max-w-xl"},S={key:0,class:"flex flex-col items-center"},V={class:"text-sm md:text-base font-medium text-gray-600"},I=e("h1",{class:"text-md md:text-2xl font-medium text-indigo-600"},"Welcome to ALFA and Friends Centre",-1),T=e("div",{class:"mt-10 space-y-2 px-10 text-sm md:text-base"},[e("h1",null," What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")],-1),D=e("span",{class:"pb-0.5"},"Continue",-1),H=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 transition-transform group-hover:translate-x-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"})],-1),A=[D,H],F={key:1,class:"flex flex-col items-center"},M={class:"text-sm md:text-base font-medium text-gray-600"},O=e("h1",{class:"text-md md:text-2xl font-medium text-indigo-600"},"Welcome to ALFA and Friends Centre",-1),z=e("div",{class:"mt-10 space-y-2 px-10 text-sm md:text-base"},[e("h1",null," Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ")],-1),B={class:"flex justify-between space-x-4"},U=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 transition-transform group-hover:-translate-x-1 rotate-180",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"})],-1),N=e("span",{class:"pb-0.5"},"Previous",-1),W=[U,N],E=e("span",{class:"pb-0.5"},"Continue",-1),q=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 transition-transform group-hover:translate-x-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"})],-1),G=[E,q],J={key:2,class:""},K={class:"flex flex-col items-center"},Q={class:"text-sm md:text-base font-medium text-gray-600"},R=e("h1",{class:"text-md md:text-2xl font-medium text-indigo-600"},"Welcome to ALFA and Friends Centre",-1),X=e("div",{class:"md:mt-16 my-5"},[e("p",{class:"text-center text-lg font-medium capitalize"},"Update your profile")],-1),Y={class:"flex flex-col px-2 sm:px-10"},Z={class:"mb-5"},$={for:"user_name",class:"font-semibold text-sm md:text-base"},ee={class:"mb-5"},te={for:"country",class:"font-semibold text-sm"},oe={class:"mb-5"},re={for:"country",class:"font-semibold text-sm"},se={class:"mb-5"},ne={for:"use_phone",class:"font-semibold text-sm"},le={class:"mt-1 flex rounded-md shadow-sm"},ae={class:"mb-5"},ie={for:"user_address",class:"font-semibold text-sm"};function de(n,t,f,g,o,s){const _=y("Head"),x=y("Multiselect");return a(),i(v,null,[c(_,{title:"Onboarding"}),e("div",j,[e("div",P,[o.current_step==1?(a(),i("div",S,[e("p",V,"Hello, "+p(n.$page.props.auth.user.display_name)+"!",1),I,T,e("button",{onClick:t[0]||(t[0]=(...r)=>s.next&&s.next(...r)),class:"group mt-10 flex px-6 items-center space-x-2 justify-center rounded-lg bg-indigo-600 hover:bg-indigo-700 py-2 text-center font-bold text-white transition"},A)])):m("",!0),o.current_step==2?(a(),i("div",F,[e("p",M,"Hello, "+p(n.$page.props.auth.user.display_name)+"!",1),O,z,e("div",B,[e("button",{onClick:t[1]||(t[1]=(...r)=>s.previous&&s.previous(...r)),class:"group mt-10 flex px-6 items-center space-x-2 justify-center rounded-lg bg-gray-500 py-2 text-center font-bold text-white transition"},W),e("button",{onClick:t[2]||(t[2]=(...r)=>s.next&&s.next(...r)),class:"group mt-10 flex px-6 items-center space-x-2 justify-center rounded-lg bg-indigo-600 hover:bg-indigo-700 py-2 text-center font-bold text-white transition"},G)])])):m("",!0),o.current_step==3?(a(),i("div",J,[e("div",K,[e("p",Q,"Hello, "+p(n.$page.props.auth.user.display_name)+"!",1),R]),X,e("div",Y,[e("div",Z,[e("label",$,[l("Full Name "),d(e("input",{type:"text",id:"user_name",class:b(["mt-1 h-10 md:h-12 text-sm md:text-base focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md",o.errors.full_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[3]||(t[3]=r=>o.form.full_name=r),autocomplete:"none"},null,2),[[u,o.form.full_name]])])]),e("div",ee,[e("label",te,[l("Country "),c(x,{id:"country",autocomplete:"none",onChange:s.clearState,canDeselect:!1,loading:o.loading.country,modelValue:o.form.country_id,"onUpdate:modelValue":t[4]||(t[4]=r=>o.form.country_id=r),trackBy:"name",label:"name",valueProp:"id",options:n.$page.props.countries,classes:{container:o.errors.country_code?"mt-1 relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white leading-snug outline-none h-10 md:h-12 text-sm md:text-base":"mt-1 relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white leading-snug outline-none h-10 md:h-12 text-sm md:text-base",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:" h-9 md:h-11 text-sm md:text-base w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["onChange","loading","modelValue","options","classes"])])]),e("div",oe,[e("label",re,[l("State "),c(x,{id:"country",autocomplete:"none",onChange:s.clearState,"min-chars":1,delay:1,loading:o.loading.state,searchable:!0,modelValue:o.form.country_state,"onUpdate:modelValue":t[5]||(t[5]=r=>o.form.country_state=r),placeholder:o.form.country_state,noOptionsText:"Please select a state",options:o.state_list,canDeselect:!1,classes:{container:o.errors.country_state?"mt-1 relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white leading-snug outline-none h-10 md:h-12 text-sm md:text-base":"mt-1 relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white leading-snug outline-none h-10 md:h-12 text-sm md:text-base",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"h-9 md:h-11 text-sm md:text-base w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-black",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["onChange","loading","modelValue","placeholder","options","classes"])])]),e("div",se,[e("label",ne,[l("Phone Number "),e("div",le,[d(e("input",{class:"h-10 md:h-12 text-sm md:text-base text-center inline-flex items-center px-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-700","onUpdate:modelValue":t[6]||(t[6]=r=>o.form.calling_code=r),size:"5",disabled:""},null,512),[[u,o.form.calling_code]]),d(e("input",{type:"number",name:"use_phone",id:"use_phone",class:b(["h-10 md:h-12 text-sm md:text-base focus:ring-0 border-gray-300 focus:border-gray-300 flex-1 block w-full rounded-none rounded-r-md",o.errors.contact_number?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[7]||(t[7]=r=>o.form.contact_number=r),autocomplete:"none"},null,2),[[u,o.form.contact_number]])])])]),e("div",ae,[e("label",ie,[l("Address "),d(e("textarea",{id:"user_address",rows:"3",class:b(["focus:ring-0 border-gray-300 focus:border-gray-300 flex-1 block w-full rounded-md mt-1",o.errors.address?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[8]||(t[8]=r=>o.form.address=r)},null,2),[[u,o.form.address]])])]),e("button",{onClick:t[9]||(t[9]=(...r)=>s.saveProfile&&s.saveProfile(...r)),class:"block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"}," Get Started ")])])):m("",!0)])])],64)}const me=L(C,[["render",de]]);export{me as default};
=======
import{H as w,b as h,j as y,o as a,c as i,a as c,d as e,t as p,q as m,g as l,h as d,v as u,n as b,F as v}from"./app-6f86c80f.js";import{s as k}from"./multiselect-3bd6966c.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const C={components:{Multiselect:k,Head:w},data(){return{search_query:!1,state_list:[],current_step:3,loading:{country:!1,state:!1},form:{full_name:this.$page.props.auth.user.display_name,calling_code:"",contact_number:this.$page.props.auth.user.user_contact?this.$page.props.auth.user.user_contact:"",address:this.$page.props.auth.user.user_address?this.$page.props.auth.user.user_address:"",country_id:this.$page.props.auth.user.user_country_id?this.$page.props.auth.user.user_country_id:"",country_state:this.$page.props.auth.user.user_state?this.$page.props.auth.user.user_state:"",country_code:""},errors:{full_name:!1,country_code:!1,country_state:!1,contact_number:!1,address:!1}}},watch:{"form.country_id":{handler(){this.form.country_id&&this.setCountryData(this.form.country_id)},immediate:!0}},methods:{next(){this.current_step+=1},previous(){this.current_step-=1},setCountryData(n){this.loading.state=!0,h.get(route("countries.find",n)).then(t=>{this.setStateList(t.data.country_code),this.form.calling_code=t.data.calling_code,this.form.country_code=t.data.country_code}).catch(t=>{this.errored=!0})},setStateList(n){var t=this.state_list;t.splice(0),h({method:"post",url:"https://countriesnow.space/api/v0.1/countries/states",headers:{"Content-Type":"application/json"},data:{iso2:n}}).then(f=>{f.data.data.states.forEach(function(g){t.push(g.name)}),this.loading.state=!1})},clearState(){this.form.country_state=""},saveProfile(){this.errors.full_name=!this.form.full_name,this.errors.country_code=!this.form.country_code,this.errors.country_state=!this.form.country_state,this.errors.contact_number=!this.form.contact_number,this.errors.address=!this.form.address,this.form.full_name&&this.form.country_code&&this.form.country_state&&this.form.contact_number&&this.form.address&&this.$inertia.post(route("profile.store"),this.form)}}},j={class:"min-h-screen flex flex-col items-center justify-center bg-indigo-100"},P={class:"flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-6 py-8 rounded-md w-full max-w-xl"},S={key:0,class:"flex flex-col items-center"},V={class:"text-sm md:text-base font-medium text-gray-600"},I=e("h1",{class:"text-md md:text-2xl font-medium text-indigo-600"},"Welcome to ALFA and Friends Centre",-1),T=e("div",{class:"mt-10 space-y-2 px-10 text-sm md:text-base"},[e("h1",null," What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")],-1),D=e("span",{class:"pb-0.5"},"Continue",-1),H=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 transition-transform group-hover:translate-x-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"})],-1),A=[D,H],F={key:1,class:"flex flex-col items-center"},M={class:"text-sm md:text-base font-medium text-gray-600"},O=e("h1",{class:"text-md md:text-2xl font-medium text-indigo-600"},"Welcome to ALFA and Friends Centre",-1),z=e("div",{class:"mt-10 space-y-2 px-10 text-sm md:text-base"},[e("h1",null," Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ")],-1),B={class:"flex justify-between space-x-4"},U=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 transition-transform group-hover:-translate-x-1 rotate-180",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"})],-1),N=e("span",{class:"pb-0.5"},"Previous",-1),W=[U,N],E=e("span",{class:"pb-0.5"},"Continue",-1),q=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 transition-transform group-hover:translate-x-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"})],-1),G=[E,q],J={key:2,class:""},K={class:"flex flex-col items-center"},Q={class:"text-sm md:text-base font-medium text-gray-600"},R=e("h1",{class:"text-md md:text-2xl font-medium text-indigo-600"},"Welcome to ALFA and Friends Centre",-1),X=e("div",{class:"md:mt-16 my-5"},[e("p",{class:"text-center text-lg font-medium capitalize"},"Update your profile")],-1),Y={class:"flex flex-col px-2 sm:px-10"},Z={class:"mb-5"},$={for:"user_name",class:"font-semibold text-sm md:text-base"},ee={class:"mb-5"},te={for:"country",class:"font-semibold text-sm"},oe={class:"mb-5"},re={for:"country",class:"font-semibold text-sm"},se={class:"mb-5"},ne={for:"use_phone",class:"font-semibold text-sm"},le={class:"mt-1 flex rounded-md shadow-sm"},ae={class:"mb-5"},ie={for:"user_address",class:"font-semibold text-sm"};function de(n,t,f,g,o,s){const _=y("Head"),x=y("Multiselect");return a(),i(v,null,[c(_,{title:"Onboarding"}),e("div",j,[e("div",P,[o.current_step==1?(a(),i("div",S,[e("p",V,"Hello, "+p(n.$page.props.auth.user.display_name)+"!",1),I,T,e("button",{onClick:t[0]||(t[0]=(...r)=>s.next&&s.next(...r)),class:"group mt-10 flex px-6 items-center space-x-2 justify-center rounded-lg bg-indigo-600 hover:bg-indigo-700 py-2 text-center font-bold text-white transition"},A)])):m("",!0),o.current_step==2?(a(),i("div",F,[e("p",M,"Hello, "+p(n.$page.props.auth.user.display_name)+"!",1),O,z,e("div",B,[e("button",{onClick:t[1]||(t[1]=(...r)=>s.previous&&s.previous(...r)),class:"group mt-10 flex px-6 items-center space-x-2 justify-center rounded-lg bg-gray-500 py-2 text-center font-bold text-white transition"},W),e("button",{onClick:t[2]||(t[2]=(...r)=>s.next&&s.next(...r)),class:"group mt-10 flex px-6 items-center space-x-2 justify-center rounded-lg bg-indigo-600 hover:bg-indigo-700 py-2 text-center font-bold text-white transition"},G)])])):m("",!0),o.current_step==3?(a(),i("div",J,[e("div",K,[e("p",Q,"Hello, "+p(n.$page.props.auth.user.display_name)+"!",1),R]),X,e("div",Y,[e("div",Z,[e("label",$,[l("Full Name "),d(e("input",{type:"text",id:"user_name",class:b(["mt-1 h-10 md:h-12 text-sm md:text-base focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md",o.errors.full_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[3]||(t[3]=r=>o.form.full_name=r),autocomplete:"none"},null,2),[[u,o.form.full_name]])])]),e("div",ee,[e("label",te,[l("Country "),c(x,{id:"country",autocomplete:"none",onChange:s.clearState,canDeselect:!1,loading:o.loading.country,modelValue:o.form.country_id,"onUpdate:modelValue":t[4]||(t[4]=r=>o.form.country_id=r),trackBy:"name",label:"name",valueProp:"id",options:n.$page.props.countries,classes:{container:o.errors.country_code?"mt-1 relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white leading-snug outline-none h-10 md:h-12 text-sm md:text-base":"mt-1 relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white leading-snug outline-none h-10 md:h-12 text-sm md:text-base",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:" h-9 md:h-11 text-sm md:text-base w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["onChange","loading","modelValue","options","classes"])])]),e("div",oe,[e("label",re,[l("State "),c(x,{id:"country",autocomplete:"none",onChange:s.clearState,"min-chars":1,delay:1,loading:o.loading.state,searchable:!0,modelValue:o.form.country_state,"onUpdate:modelValue":t[5]||(t[5]=r=>o.form.country_state=r),placeholder:o.form.country_state,noOptionsText:"Please select a state",options:o.state_list,canDeselect:!1,classes:{container:o.errors.country_state?"mt-1 relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white leading-snug outline-none h-10 md:h-12 text-sm md:text-base":"mt-1 relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white leading-snug outline-none h-10 md:h-12 text-sm md:text-base",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"h-9 md:h-11 text-sm md:text-base w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-black",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["onChange","loading","modelValue","placeholder","options","classes"])])]),e("div",se,[e("label",ne,[l("Phone Number "),e("div",le,[d(e("input",{class:"h-10 md:h-12 text-sm md:text-base text-center inline-flex items-center px-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-700","onUpdate:modelValue":t[6]||(t[6]=r=>o.form.calling_code=r),size:"5",disabled:""},null,512),[[u,o.form.calling_code]]),d(e("input",{type:"number",name:"use_phone",id:"use_phone",class:b(["h-10 md:h-12 text-sm md:text-base focus:ring-0 border-gray-300 focus:border-gray-300 flex-1 block w-full rounded-none rounded-r-md",o.errors.contact_number?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[7]||(t[7]=r=>o.form.contact_number=r),autocomplete:"none"},null,2),[[u,o.form.contact_number]])])])]),e("div",ae,[e("label",ie,[l("Address "),d(e("textarea",{id:"user_address",rows:"3",class:b(["focus:ring-0 border-gray-300 focus:border-gray-300 flex-1 block w-full rounded-md mt-1",o.errors.address?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[8]||(t[8]=r=>o.form.address=r)},null,2),[[u,o.form.address]])])]),e("button",{onClick:t[9]||(t[9]=(...r)=>s.saveProfile&&s.saveProfile(...r)),class:"block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"}," Get Started ")])])):m("",!0)])])],64)}const me=L(C,[["render",de]]);export{me as default};
>>>>>>> c2529f1455e20904eed99f089d92c14252739910:public/build/assets/Onboard-6a4b3bc6.js
