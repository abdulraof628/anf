import m from"./Layout-cb254582.js";import{j as c,o as i,c as a,a as n,w as p,F as l,d as t,g as _,t as h,q as f}from"./app-495c50e4.js";import"./Authenticated-5ff94400.js";import"./ApplicationLogo-e61264c8.js";import"./Button-e10a5d69.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./NavLink-f436de1b.js";import"./XIcon-556a86ac.js";import"./Toast-ab5100fa.js";/* empty css                                              */import"./vue3-perfect-scrollbar-26ccdd8c.js";import"./moment-a9aaa855.js";import"./PencilIcon-5fb19580.js";import"./SearchIcon-7913b667.js";import"./menu-55fc2f1c.js";import"./keyboard-b92bc090.js";import"./use-resolve-button-type-04c0a07c.js";import"./transition-bf9dfc23.js";const u={class:"flex-col w-full pt-4 px-4"},v={class:"pb-3 px-2 space-y-2"},g={key:0,class:"bg-white rounded-lg shadow-xl p-4"},x={class:"flex"},b=t("div",null,[t("svg",{class:"w-6 h-6 fill-current text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})])],-1),w={class:"ml-3"},y={class:"font-semibold text-gray-800"},j={class:"text-bold text-indigo-600"},q=t("p",{class:"mt-2 text-sm text-gray-600 leading-relaxed"},"Please be informed that this action is irreversible.",-1),C={class:"flex items-center mt-3"},N={props:{request_data:Object,created_by:String,notification_data:Object},data(){return{show:!1,centre_info:[],form:{notification_id:this.notification_data.id,centre_id:this.request_data?this.request_data.centre_id:"",centre_name:"",created_by:this.created_by?this.created_by:""}}},mounted(){axios.get(route("get_approval_centre_info",this.form.centre_id)).then(r=>{this.form.centre_name=r.data.centre_name}).finally(()=>{this.show=!0})},methods:{approve(){this.$inertia.post(route("approve_centre_delete"),this.form,{preserveState:!0})},reject(){this.$inertia.post(route("reject_centre_delete"),this.form,{preserveState:!0})}}},I=Object.assign(N,{__name:"Request",setup(r){return(e,o)=>{const d=c("Head");return i(),a(l,null,[n(d,{title:"Notifications"}),n(m,null,{default:p(()=>[t("div",u,[t("div",v,[e.show?(i(),a("div",g,[t("div",x,[b,t("div",w,[t("h2",y,[_("Request to remove "),t("span",j,"ANFC "+h(e.form.centre_name),1)]),q])]),t("div",C,[t("button",{class:"flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md",onClick:o[0]||(o[0]=(...s)=>e.reject&&e.reject(...s))}," Reject "),t("button",{class:"flex-1 px-4 py-2 ml-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md",onClick:o[1]||(o[1]=(...s)=>e.approve&&e.approve(...s))}," Approve ")])])):f("",!0)])])]),_:1})],64)}}});export{I as default};
