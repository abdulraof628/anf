import{o as n,c as l,a as d,u as m,w as c,F as p,H as y,L as w,d as s,l as A,e as h,n as u,h as _,C as f,t as g,q as C,g as b}from"./app-b0ada57f.js";import{B as $,r as k}from"./Authenticated-00519a95.js";import{B as v}from"./Button-7e5ebb17.js";import{r as B}from"./PencilIcon-ece1a67b.js";import{r as E}from"./SearchIcon-bfeb6aa6.js";import{r as N}from"./TrashIcon-a14bc0af.js";import"./ApplicationLogo-5609d7e8.js";import"./XIcon-72ef4a27.js";import"./vue3-perfect-scrollbar-f1bcd31f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-fd223f9f.js";import"./moment-a9aaa855.js";const V={class:"py-4 px-4"},j={class:"overflow-x-auto"},I={class:"mx-auto"},S={class:"align-middle inline-block min-w-full"},L={class:"text-sm font-medium text-gray-700"},M={key:0,class:"flex items-center border border-red-500 py-3 px-4"},O=s("span",{class:"mr-2"},"No permission added.",-1),z=[O],T={class:"flex flex-1 space-x-2 items-center px-4 py-1 transition cursor-pointer group border border-indigo-200 border-r-0 relative",role:"button"},D=["id","value","onClick"],F=["onClick"],H={class:"select-none"},P={key:0,class:"flex flex-col py-3 px-3 border-x border-indigo-200"},R={key:0},U=s("span",null,"No sub permissions.",-1),q=[U],G={key:1,class:"flex flex-col"},J={class:"list-none items-center translate-x-4"},K={class:"mb-1"},Q={class:"flex"},W=["id","value"],X=["for"],Y=s("div",{class:"flex space-x-6"},null,-1),Z={class:"flex space-x-2 p-3"},ee={components:{SearchIcon:E,TrashIcon:N,PencilIcon:B,ChevronRightIcon:k,Head:y,Link:w},props:{role_id:String,permissions:Object,role_permissions:Object},created(){var i=this.selected_permissions;Object.keys(this.role_permissions).forEach(function(e){i.push(parseInt(e))})},data(){return{expandAccordion:!1,selected_permissions:[],selected:""}},methods:{toggleMenu(i){i==this.selected?this.expandAccordion=!this.expandAccordion:this.expandAccordion=!0,this.selected=i},submit(){this.$inertia.post(this.route("roles.assign_permissions.store"),{role_id:this.role_id,selected_permissions:this.selected_permissions})},selectAll(i,e,a){this.expandAccordion=!0,this.selected=i,a.target.checked?(this.selected_permissions.push(this.$page.props.permissions[i].id),this.$page.props.permissions[i].permission_sub.forEach(o=>{this.selected_permissions.push(o.id)})):(this.selected_permissions.forEach((o,r)=>{o==e&&this.selected_permissions.splice(r,1)}),this.$page.props.permissions[i].permission_sub.forEach(o=>{this.selected_permissions.forEach((r,t)=>{r==o.id&&this.selected_permissions.splice(t,1)})}))}}},ue=Object.assign(ee,{__name:"AssignPermissions",setup(i){return(e,a)=>(n(),l(p,null,[d(m(y),{title:"Roles"}),d($,null,{header:c(()=>[]),default:c(()=>[s("div",V,[s("div",j,[s("div",I,[s("div",S,[s("form",{onSubmit:a[2]||(a[2]=A((...o)=>e.submit&&e.submit(...o),["prevent"]))},[s("nav",L,[e.$page.props.permissions?(n(!0),l(p,{key:1},h(e.$page.props.permissions,(o,r)=>(n(),l("div",null,[s("div",{class:u(["flex",e.expandAccordion&&r===e.selected?"bg-indigo-400 text-gray-200":"bg-indigo-300 hover:bg-indigo-400 text-gray-800 hover:text-gray-200"])},[s("div",T,[_(s("input",{id:o.id,class:"h-4 w-4 border border-gray-300 rounded-sm bg-white focus:ring-offset-0 focus:ring-0 checked:bg-gray focus:bg-white transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"checkbox",value:o.id,onClick:t=>e.selectAll(r,o.id,t),"onUpdate:modelValue":a[0]||(a[0]=t=>e.selected_permissions=t)},null,8,D),[[f,e.selected_permissions]]),s("div",{class:"flex items-center justify-start grow",onClick:t=>e.toggleMenu(r)},[s("span",H,g(o.name),1),d(m(k),{class:u([{"rotate-90":e.expandAccordion&&r===e.selected},"shrink-0 w-4 h-4 ml-2 transition transform"])},null,8,["class"])],8,F)])],2),e.expandAccordion&&r===e.selected?(n(),l("div",P,[o.permission_sub.length<1?(n(),l("div",R,q)):(n(),l("div",G,[s("ul",J,[(n(!0),l(p,null,h(o.permission_sub,(t,se)=>(n(),l("li",K,[s("div",Q,[_(s("input",{id:t.id,class:"h-4 w-4 border border-gray-300 rounded-sm bg-white focus:ring-offset-0 focus:ring-0 checked:bg-gray focus:bg-white transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"checkbox",value:t.id,"onUpdate:modelValue":a[1]||(a[1]=x=>e.selected_permissions=x)},null,8,W),[[f,e.selected_permissions]]),s("label",{for:t.id},g(t.name),9,X)])]))),256))]),Y]))])):C("",!0)]))),256)):(n(),l("div",M,z))]),s("div",Z,[d(v,{buttonType:"gray",route:e.route("roles")},{default:c(()=>[b("Cancel")]),_:1},8,["route"]),d(v,{type:"submit"},{default:c(()=>[b("Save")]),_:1})])],32)])])])])]),_:1})],64))}});export{ue as default};
