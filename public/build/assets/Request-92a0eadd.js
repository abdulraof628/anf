import c from"./Layout-87c936c2.js";import{j as m,o as i,c as a,a as n,w as l,F as p,d as e,g as _,t as h,q as f}from"./app-ca7c252e.js";import"./Authenticated-7dd4e5bf.js";import"./ApplicationLogo-44fdbb8b.js";import"./Button-c62d076b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-18ffab44.js";import"./perfect-scrollbar.esm-3c05f46e.js";import"./TimeAgo-9e31d12d.js";import"./moment-55cb88ed.js";import"./PencilIcon-174e88d6.js";import"./SearchIcon-a3cdbf80.js";import"./menu-a9855bf6.js";import"./keyboard-ca2dafe6.js";import"./use-resolve-button-type-40fbedfe.js";import"./transition-6f599973.js";const u={class:"flex-col w-full pt-4 px-4"},v={class:"pb-3 px-2 space-y-2"},g={key:0,class:"bg-white rounded-lg shadow-xl p-4"},x={class:"flex"},b=e("div",null,[e("svg",{class:"w-6 h-6 fill-current text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})])],-1),w={class:"ml-3"},y={class:"font-semibold text-gray-800"},j={class:"text-bold text-indigo-600"},q=e("p",{class:"mt-2 text-sm text-gray-600 leading-relaxed"},"Please be informed that this action is irreversible.",-1),C={class:"flex items-center mt-3"},N={props:{request_data:Object,created_by:String,notification_data:Object},data(){return{show:!1,centre_info:[],form:{notification_id:this.notification_data.id,centre_id:this.request_data?this.request_data.centre_id:"",centre_name:"",created_by:this.created_by?this.created_by:""}}},mounted(){axios.get(route("get_approval_centre_info",this.form.centre_id)).then(r=>{this.form.centre_name=r.data.centre_name}).finally(()=>{this.show=!0})},methods:{approve(){this.$inertia.post(route("approve_centre_delete"),this.form,{preserveState:!0})},reject(){this.$inertia.post(route("reject_centre_delete"),this.form,{preserveState:!0})}}},T=Object.assign(N,{__name:"Request",setup(r){return(t,o)=>{const d=m("Head");return i(),a(p,null,[n(d,{title:"Notifications"}),n(c,null,{default:l(()=>[e("div",u,[e("div",v,[t.show?(i(),a("div",g,[e("div",x,[b,e("div",w,[e("h2",y,[_("Request to remove "),e("span",j,"ANFC "+h(t.form.centre_name),1)]),q])]),e("div",C,[e("button",{class:"flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md",onClick:o[0]||(o[0]=(...s)=>t.reject&&t.reject(...s))}," Reject "),e("button",{class:"flex-1 px-4 py-2 ml-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md",onClick:o[1]||(o[1]=(...s)=>t.approve&&t.approve(...s))}," Approve ")])])):f("",!0)])])]),_:1})],64)}}});export{T as default};
