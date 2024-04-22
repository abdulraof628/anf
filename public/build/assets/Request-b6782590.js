import{i as f,o as c,c as l,a as m,w as b,F as _,d as e,h as d,v as i,n,e as p,t as u,p as h,g as r}from"./app-462a769a.js";import x from"./Layout-45547f1b.js";import"./Authenticated-4c85926c.js";import"./ApplicationLogo-4b85744d.js";import"./Button-b3e73baf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-23a15b91.js";import"./vue3-perfect-scrollbar-d7092836.js";import"./moment-a9aaa855.js";import"./PencilIcon-fdca7c88.js";import"./SearchIcon-468465ae.js";import"./menu-e28ab7a2.js";import"./keyboard-d111b3e2.js";import"./use-resolve-button-type-aa122809.js";import"./transition-22c55c34.js";const v={class:"flex-col w-full pt-4 px-4"},w={class:"pb-3 px-2 space-y-2"},y={class:"bg-white rounded-lg shadow-xl p-4"},q={class:"text-center"},k={class:"pt-2"},V=["href"],C={class:"bg-white rounded-lg shadow-xl p-4"},j={class:"md:grid md:grid-cols-2"},N={class:"md:mt-0 md:col-span-2"},U={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},D={class:"sm:row-span-3"},S=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Centre Details")],-1),T={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},z={class:"mb-4"},A=e("label",{for:"centre_name",class:"block text-sm text-gray-700 font-bold"},[r(" Name "),e("span",{class:"text-red-500"},"*")],-1),B={class:"mt-1 flex rounded-md shadow-sm"},E={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},F={class:"mb-4"},O=e("label",{for:"centre_contact_number",class:"block text-sm text-gray-700 font-bold"},[r(" Contact Number "),e("span",{class:"text-red-500"},"*")],-1),$={class:"mt-1 flex rounded-md shadow-sm"},H={class:"mb-4"},I=e("label",{for:"centre_email",class:"block text-sm text-gray-700 font-bold"},[r(" Email "),e("span",{class:"text-red-500"},"*")],-1),L={class:"mt-1 flex rounded-md shadow-sm"},R={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},M={class:"mb-4"},P=e("label",{for:"centre_address",class:"block text-sm text-gray-700 font-bold"},[r(" Address "),e("span",{class:"text-red-500"},"*")],-1),G={class:"mt-1 flex rounded-md shadow-sm"},J={class:"bg-white rounded-lg shadow-xl p-4"},K={class:"md:grid md:grid-cols-2"},Q={class:"md:mt-0 md:col-span-2"},W={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},X={class:"sm:row-span-3"},Y=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Principal Details")],-1),Z={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},ee={class:"mb-4"},te=e("label",{for:"principal_email",class:"block text-sm text-gray-700 font-bold"},[r(" Email "),e("span",{class:"text-red-500"},"*")],-1),se={class:"mt-1 flex rounded-md shadow-sm"},ae={class:"mb-4"},re=e("label",{for:"principal_contact",class:"block text-sm text-gray-700 font-bold"},[r(" Contact Number "),e("span",{class:"text-red-500"},"*")],-1),oe={class:"mt-1 flex rounded-md shadow-sm"},de={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},ie={class:"mb-4"},ne=e("label",{for:"principal_first_name",class:"block text-sm text-gray-700 font-bold"},[r(" First Name "),e("span",{class:"text-red-500"},"*")],-1),ce={class:"mt-1 flex rounded-md shadow-sm"},le={class:"mb-4"},_e=e("label",{for:"principal_last_name",class:"block text-sm text-gray-700 font-bold"},[r(" Last Name "),e("span",{class:"text-red-500"},"*")],-1),me={class:"mt-1 flex rounded-md shadow-sm"},pe={key:0,class:"bg-white rounded-lg shadow-xl p-4"},ue={class:"md:grid md:grid-cols-2"},he={class:"md:mt-0 md:col-span-2"},ge={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},fe={class:"sm:row-span-3"},be=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},[r("Centre Images "),e("span",{class:"text-[12px] text-green-500"},"(To Add)")])],-1),xe={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},ve={class:"flex flex-wrap space-x-2"},we={class:"w-2/12 h-2/12 text-center"},ye=["src"],qe={class:"text-sm capitalize font-semibold"},ke={key:1,class:"bg-white rounded-lg shadow-xl p-4"},Ve={class:"md:grid md:grid-cols-2"},Ce={class:"md:mt-0 md:col-span-2"},je={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},Ne={class:"sm:row-span-3"},Ue=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},[r("Centre Images "),e("span",{class:"text-[11px] text-red-500"},"(To Delete)")])],-1),De={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},Se={class:"flex flex-wrap space-x-2"},Te={class:"w-2/12 h-2/12 text-center"},ze=["src"],Ae={class:"text-sm capitalize font-semibold"},Be={class:"bg-white rounded-lg shadow-xl p-4"},Ee={class:"flex space-x-5"},Fe={props:{request_data:Object,created_by:String,notification_data:Object},data(){return{centre_info:[],record_matched:{centre_id:"",centre_name:"",centre_contact_number:"",centre_email:"",centre_address:"",centre_active:"",principal_first_name:"",principal_last_name:"",principal_email:"",principal_contact:""},form:{notification_id:this.notification_data.id,centre_id:this.request_data?this.request_data.centre_id:"",centre_name:this.request_data?this.request_data.centre_name:"",centre_contact_number:this.request_data?this.request_data.centre_contact_number:"",centre_email:this.request_data?this.request_data.centre_email:"",centre_address:this.request_data?this.request_data.centre_address:"",centre_active:this.request_data?this.request_data.centre_active:"",principal_first_name:this.request_data?this.request_data.principal_first_name:"",principal_last_name:this.request_data?this.request_data.principal_last_name:"",principal_email:this.request_data?this.request_data.principal_email:"",principal_contact:this.request_data?this.request_data.principal_contact:"",created_by:this.created_by?this.created_by:"",images_to_add:this.request_data?this.request_data.images_to_add:"",images_to_delete:this.request_data?this.request_data.images_to_delete:""}}},created(){axios.get(route("get_approval_centre_info",this.form.centre_id)).then(o=>{this.centre_info=o.data,this.record_matched.centre_id=this.request_data.centre_id==this.centre_info.centre_id,this.record_matched.centre_name=this.request_data.centre_name==this.centre_info.centre_name,this.record_matched.centre_contact_number=this.request_data.centre_contact_number==this.centre_info.centre_contact_number,this.record_matched.centre_email=this.request_data.centre_email==this.centre_info.centre_email,this.record_matched.centre_address=this.request_data.centre_address==this.centre_info.centre_address,this.record_matched.centre_active=this.request_data.centre_active==this.centre_info.centre_active,this.record_matched.principal_first_name=this.request_data.principal_first_name==this.centre_info.principal_firstname,this.record_matched.principal_last_name=this.request_data.principal_last_name==this.centre_info.principal_lastname,this.record_matched.principal_email=this.request_data.principal_email==this.centre_info.principal_email,this.record_matched.principal_contact=this.request_data.principal_contact==this.centre_info.principal_contact})},methods:{approve(){this.$inertia.post(route("approve_centre_update"),this.form,{preserveScroll:!0})},reject(){this.$inertia.post(route("reject_centre_update"),this.form,{preserveScroll:!0})}}},Ze=Object.assign(Fe,{__name:"Request",setup(o){return(t,a)=>{const g=f("Head");return c(),l(_,null,[m(g,{title:"Notifications"}),m(x,null,{default:b(()=>[e("div",v,[e("div",w,[e("div",y,[e("div",q,[e("div",k,[e("a",{target:"_blank",href:t.route("centres.edit",{centre_id:o.request_data.centre_id}),class:"rounded shadow-md px-2 py-1 bg-indigo-500 text-white"},"View this centre",8,V)])])]),e("div",C,[e("div",j,[e("div",N,[e("div",U,[e("div",D,[S,e("div",T,[e("div",z,[A,e("div",B,[d(e("input",{type:"text",name:"centre_name",id:"centre_name",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.record_matched.centre_name?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":a[0]||(a[0]=s=>t.form.centre_name=s),autocomplete:"off"},null,2),[[i,t.form.centre_name]])])])]),e("div",E,[e("div",F,[O,e("div",$,[d(e("input",{type:"text",name:"centre_contact_number",id:"centre_contact_number",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.record_matched.centre_contact_number?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":a[1]||(a[1]=s=>t.form.centre_contact_number=s),autocomplete:"off"},null,2),[[i,t.form.centre_contact_number]])])]),e("div",H,[I,e("div",L,[d(e("input",{type:"text",name:"centre_email",id:"centre_email",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.record_matched.centre_email?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":a[2]||(a[2]=s=>t.form.centre_email=s),autocomplete:"off"},null,2),[[i,t.form.centre_email]])])])]),e("div",R,[e("div",M,[P,e("div",G,[d(e("textarea",{name:"centre_address",id:"centre_address",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.record_matched.centre_address?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":a[3]||(a[3]=s=>t.form.centre_address=s),autocomplete:"off"},null,2),[[i,t.form.centre_address]])])])])])])])])]),e("div",J,[e("div",K,[e("div",Q,[e("div",W,[e("div",X,[Y,e("div",Z,[e("div",ee,[te,e("div",se,[d(e("input",{type:"text",name:"principal_email",id:"principal_email",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm bg-gray-200",t.record_matched.principal_email?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":a[4]||(a[4]=s=>t.form.principal_email=s),readonly:"",autocomplete:"off"},null,2),[[i,t.form.principal_email]])])]),e("div",ae,[re,e("div",oe,[d(e("input",{type:"text",name:"principal_contact",id:"principal_contact",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.record_matched.principal_contact?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":a[5]||(a[5]=s=>t.form.principal_contact=s),autocomplete:"off"},null,2),[[i,t.form.principal_contact]])])])]),e("div",de,[e("div",ie,[ne,e("div",ce,[d(e("input",{type:"text",name:"principal_first_name",id:"principal_first_name",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm bg-gray-200",t.record_matched.principal_first_name?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":a[6]||(a[6]=s=>t.form.principal_first_name=s),readonly:"",autocomplete:"off"},null,2),[[i,t.form.principal_first_name]])])]),e("div",le,[_e,e("div",me,[d(e("input",{type:"text",name:"principal_last_name",id:"principal_last_name",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm bg-gray-200",t.record_matched.principal_last_name?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":a[7]||(a[7]=s=>t.form.principal_last_name=s),readonly:"",autocomplete:"off"},null,2),[[i,t.form.principal_last_name]])])])])])])])])]),o.request_data.images_to_add&&o.request_data.images_to_add.length?(c(),l("div",pe,[e("div",ue,[e("div",he,[e("div",ge,[e("div",fe,[be,e("div",xe,[e("div",ve,[(c(!0),l(_,null,p(o.request_data.images_to_add,s=>(c(),l("div",we,[e("img",{src:s.image_path,alt:"...",class:"shadow-lg rounded max-w-full h-auto align-middle border-none"},null,8,ye),e("span",qe,u(s.image_type)+" View",1)]))),256))])])])])])])])):h("",!0),o.request_data.images_to_delete&&o.request_data.images_to_delete.length?(c(),l("div",ke,[e("div",Ve,[e("div",Ce,[e("div",je,[e("div",Ne,[Ue,e("div",De,[e("div",Se,[(c(!0),l(_,null,p(o.request_data.images_to_delete,s=>(c(),l("div",Te,[e("img",{src:s.image_path,alt:"...",class:"shadow-lg rounded max-w-full h-auto align-middle border-none"},null,8,ze),e("span",Ae,u(s.image_type)+" View",1)]))),256))])])])])])])])):h("",!0),e("div",Be,[e("div",Ee,[e("button",{type:"submit",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:col-start-2 sm:text-sm",onClick:a[8]||(a[8]=(...s)=>t.approve&&t.approve(...s))},"Approve"),e("button",{type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:col-start-1 sm:text-sm",onClick:a[9]||(a[9]=(...s)=>t.reject&&t.reject(...s))},"Reject")])])])])]),_:1})],64)}}});export{Ze as default};
