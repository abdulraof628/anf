import{B as $,r as y}from"./Authenticated-ea2248ed.js";import{B as p}from"./Button-71468147.js";import{r as C}from"./PencilIcon-b598c6d8.js";import{r as w}from"./SearchIcon-872e9e3a.js";import{r as A}from"./TrashIcon-e0c1e8c7.js";import{o as t,c as s,a as c,u as _,w as r,F as u,H as b,d as o,s as f,g as h,q as m,e as g,n as v,t as x}from"./app-101444dd.js";import{C as k}from"./ConfirmationModal-7f883f6a.js";import"./ApplicationLogo-8115ae4b.js";import"./XIcon-4c26867b.js";import"./perfect-scrollbar.esm-cd9c85a5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-beae56c4.js";import"./moment-55cb88ed.js";import"./transition-c8c23bf2.js";import"./keyboard-e15964ef.js";const B={class:"py-4 px-4"},P={class:"overflow-x-auto"},D={class:"m-3"},T={class:"align-middle inline-block w-full lg:w-1/2 px-2"},N={class:"flex pb-4 relative text-gray-400 focus-within:text-gray-600"},I={class:"text-sm font-medium text-gray-700"},M={key:0,class:"flex items-center border border-red-500 py-3 px-4"},O=o("span",{class:"mr-2"},"No permission added.",-1),V=[O],z=["onClick"],R={class:"flex items-center"},j={class:"select-none"},E={class:"flex flex-none items-center px-4 py-1 transition cursor-pointer border border-indigo-200 border-l-0 text-gray-800",role:"button"},F={class:"flex items-center space-x-2"},H={key:0,class:"flex flex-col py-2 px-4 border-x border-indigo-200"},L={key:0},S=o("span",null,"No sub permissions.",-1),q=[S],G={key:1,class:"flex flex-col"},J={class:"list-disc items-center translate-x-4"},K={class:"mb-1"},Q=o("div",{class:"flex space-x-6"},null,-1),U={components:{SearchIcon:w,TrashIcon:A,PencilIcon:C,ChevronRightIcon:y,ConfirmationModal:k,Head:b},data(){return{expandAccordion:!1,isOpen:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationRoute:"",confirmationData:"",selected:""}},methods:{toggleMenu(i){i==this.selected?this.expandAccordion=!this.expandAccordion:this.expandAccordion=!0,this.selected=i},addPermission(){this.$inertia.get(route("permissions.create"))},deletePermission(i){this.isOpen=!0,this.confirmationData=i},editPermission(i){this.$inertia.get(route("permissions.edit"),{permission_id:i})}}},pe=Object.assign(U,{__name:"Index",setup(i){return(e,a)=>(t(),s(u,null,[c(_(b),{title:"Permissions"}),c($,null,{header:r(()=>[]),default:r(()=>[o("div",B,[o("div",P,[o("div",D,[o("div",T,[o("div",N,[e.$page.props.can.create_permissions?(t(),f(p,{key:0,onClick:a[0]||(a[0]=n=>e.addPermission())},{default:r(()=>[h(" Add Permission ")]),_:1})):m("",!0)]),o("nav",I,[e.$page.props.permissions?(t(!0),s(u,{key:1},g(e.$page.props.permissions,(n,d)=>(t(),s("div",null,[o("div",{class:v(["flex",e.expandAccordion&&d===e.selected?"bg-indigo-400 text-gray-200":"bg-indigo-300 hover:bg-indigo-400 text-gray-800 hover:text-gray-200"])},[o("div",{class:"flex flex-1 justify-between items-center px-4 py-1 transition cursor-pointer group border border-indigo-200 border-r-0 relative",role:"button",onClick:l=>e.toggleMenu(d)},[o("div",R,[o("span",j,x(n.name),1)]),c(_(y),{class:v([{"rotate-90":e.expandAccordion&&d===e.selected},"shrink-0 w-4 h-4 ml-2 transition transform"])},null,8,["class"])],8,z),o("div",E,[o("div",F,[e.$page.props.can.edit_permissions?(t(),f(p,{key:0,buttonType:"warning",onClick:l=>e.editPermission(n.id)},{default:r(()=>[h("Edit")]),_:2},1032,["onClick"])):m("",!0),e.$page.props.can.delete_permissions?(t(),f(p,{key:1,buttonType:"danger",onClick:l=>e.deletePermission(n.id)},{default:r(()=>[h("Delete")]),_:2},1032,["onClick"])):m("",!0)])])],2),e.expandAccordion&&d===e.selected?(t(),s("div",H,[n.permission_sub.length<1?(t(),s("div",L,q)):(t(),s("div",G,[o("ul",J,[(t(!0),s(u,null,g(n.permission_sub,(l,W)=>(t(),s("li",K,[o("span",null,x(l.name),1)]))),256))]),Q]))])):m("",!0)]))),256)):(t(),s("div",M,V))])])])]),c(k,{show:e.isOpen,onClose:a[1]||(a[1]=n=>e.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Permission",confirmationText:"Are you sure want to delete this permission?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:"permissions.destroy",confirmationData:e.confirmationData},null,8,["show","confirmationData"])])]),_:1})],64))}});export{pe as default};
