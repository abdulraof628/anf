import p from"./Layout-c3979f00.js";import{j as l,o as a,c as i,a as m,w as c,F as _,d as e,g as n,t as h,q as g}from"./app-2cb814f6.js";import"./Authenticated-2b94df58.js";import"./ApplicationLogo-4d8d9123.js";import"./Button-375c20b5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-d4937228.js";import"./vue3-perfect-scrollbar-26fe73dc.js";import"./TimeAgo-79159604.js";import"./moment-a9aaa855.js";import"./PencilIcon-00d58016.js";import"./SearchIcon-fa1b5bbd.js";import"./menu-9ca6990d.js";import"./keyboard-5b23c67a.js";import"./use-resolve-button-type-20003b5a.js";import"./transition-f7e95242.js";const u={class:"flex-col w-full pt-4 px-4"},f={class:"pb-3 px-2 space-y-2"},v={key:0,class:"bg-white rounded-lg shadow-xl p-4"},x={class:"flex"},b=e("div",null,[e("svg",{class:"w-6 h-6 fill-current text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})])],-1),w={class:"ml-3"},y={class:"font-semibold text-gray-800"},j={class:"text-bold text-indigo-600 uppercase"},q=e("p",{class:"mt-2 text-sm text-gray-600 leading-relaxed"},"Please be informed that this action is irreversible.",-1),k={class:"flex items-center mt-3"},C={props:{request_data:Object,created_by:String,notification_data:Object},data(){return{show:!1,centre_info:[],form:{notification_id:this.notification_data.id,programme_id:this.request_data?this.request_data.programme_id:"",programme_name:"",created_by:this.created_by?this.created_by:""}}},mounted(){axios.get(route("get_programme_name",this.form.programme_id)).then(s=>{this.form.programme_name=s.data}).finally(()=>{this.show=!0})},methods:{approve(){this.$inertia.post(route("approve_programme_delete"),this.form,{preserveState:!0})},reject(){this.$inertia.post(route("reject_programme_delete"),this.form,{preserveState:!0})}}},T=Object.assign(C,{__name:"Request",setup(s){return(t,o)=>{const d=l("Head");return a(),i(_,null,[m(d,{title:"Notifications"}),m(p,null,{default:c(()=>[e("div",u,[e("div",f,[t.show?(a(),i("div",v,[e("div",x,[b,e("div",w,[e("h2",y,[n("Request to remove "),e("span",j,h(t.form.programme_name),1),n(" programme.")]),q])]),e("div",k,[e("button",{class:"flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md",onClick:o[0]||(o[0]=(...r)=>t.reject&&t.reject(...r))}," Reject "),e("button",{class:"flex-1 px-4 py-2 ml-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md",onClick:o[1]||(o[1]=(...r)=>t.approve&&t.approve(...r))}," Approve ")])])):g("",!0)])])]),_:1})],64)}}});export{T as default};
