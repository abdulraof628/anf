import{c as n,b as a,u as h,w as c,F as p,H as y,L as w,o as l,d as s,e as A,h as m,n as u,f as _,y as f,t as g,j as C,k as b}from"./app-abb14225.js";import{B as $,r as k}from"./Authenticated-cf6f3e2c.js";import{B as v}from"./Button-8060ba77.js";import{r as B}from"./PencilIcon-2a2ee577.js";import{r as j}from"./SearchIcon-c48ffda5.js";import{r as E}from"./TrashIcon-72817535.js";import"./ApplicationLogo-86d866bd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-9a0666f4.js";import"./TimeAgo-fee1d65d.js";import"./moment-fbc5633a.js";const N={class:"py-4 px-4"},V={class:"overflow-x-auto"},I={class:"mx-auto"},S={class:"align-middle inline-block min-w-full"},L={class:"text-sm font-medium text-gray-700"},M={key:0,class:"flex items-center border border-red-500 py-3 px-4"},O=s("span",{class:"mr-2"},"No permission added.",-1),z=[O],T={class:"flex flex-1 space-x-2 items-center px-4 py-1 transition cursor-pointer group border border-indigo-200 border-r-0 relative",role:"button"},D=["id","value","onClick"],F=["onClick"],H={class:"select-none"},P={key:0,class:"flex flex-col py-3 px-3 border-x border-indigo-200"},R={key:0},U=s("span",null,"No sub permissions.",-1),q=[U],G={key:1,class:"flex flex-col"},J={class:"list-none items-center translate-x-4"},K={class:"mb-1"},Q={class:"flex"},W=["id","value"],X=["for"],Y=s("div",{class:"flex space-x-6"},null,-1),Z={class:"flex space-x-2 p-3"},ee={components:{SearchIcon:j,TrashIcon:E,PencilIcon:B,ChevronRightIcon:k,Head:y,Link:w},props:{role_id:String,permissions:Object,role_permissions:Object},created(){var i=this.selected_permissions;Object.keys(this.role_permissions).forEach(function(e){i.push(parseInt(e))})},data(){return{expandAccordion:!1,selected_permissions:[],selected:""}},methods:{toggleMenu(i){i==this.selected?this.expandAccordion=!this.expandAccordion:this.expandAccordion=!0,this.selected=i},submit(){this.$inertia.post(this.route("roles.assign_permissions.store"),{role_id:this.role_id,selected_permissions:this.selected_permissions})},selectAll(i,e,d){this.expandAccordion=!0,this.selected=i,d.target.checked?(this.selected_permissions.push(this.$page.props.permissions[i].id),this.$page.props.permissions[i].permission_sub.forEach(o=>{this.selected_permissions.push(o.id)})):(this.selected_permissions.forEach((o,r)=>{o==e&&this.selected_permissions.splice(r,1)}),this.$page.props.permissions[i].permission_sub.forEach(o=>{this.selected_permissions.forEach((r,t)=>{r==o.id&&this.selected_permissions.splice(t,1)})}))}}},me=Object.assign(ee,{__name:"AssignPermissions",setup(i){return(e,d)=>(l(),n(p,null,[a(h(y),{title:"Roles"}),a($,null,{header:c(()=>[]),default:c(()=>[s("div",N,[s("div",V,[s("div",I,[s("div",S,[s("form",{onSubmit:d[2]||(d[2]=A((...o)=>e.submit&&e.submit(...o),["prevent"]))},[s("nav",L,[e.$page.props.permissions?(l(!0),n(p,{key:1},m(e.$page.props.permissions,(o,r)=>(l(),n("div",null,[s("div",{class:u(["flex",e.expandAccordion&&r===e.selected?"bg-indigo-400 text-gray-200":"bg-indigo-300 hover:bg-indigo-400 text-gray-800 hover:text-gray-200"])},[s("div",T,[_(s("input",{id:o.id,class:"h-4 w-4 border border-gray-300 rounded-sm bg-white focus:ring-offset-0 focus:ring-0 checked:bg-gray focus:bg-white transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"checkbox",value:o.id,onClick:t=>e.selectAll(r,o.id,t),"onUpdate:modelValue":d[0]||(d[0]=t=>e.selected_permissions=t)},null,8,D),[[f,e.selected_permissions]]),s("div",{class:"flex items-center justify-start grow",onClick:t=>e.toggleMenu(r)},[s("span",H,g(o.name),1),a(h(k),{class:u([{"rotate-90":e.expandAccordion&&r===e.selected},"shrink-0 w-4 h-4 ml-2 transition transform"])},null,8,["class"])],8,F)])],2),e.expandAccordion&&r===e.selected?(l(),n("div",P,[o.permission_sub.length<1?(l(),n("div",R,q)):(l(),n("div",G,[s("ul",J,[(l(!0),n(p,null,m(o.permission_sub,(t,se)=>(l(),n("li",K,[s("div",Q,[_(s("input",{id:t.id,class:"h-4 w-4 border border-gray-300 rounded-sm bg-white focus:ring-offset-0 focus:ring-0 checked:bg-gray focus:bg-white transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"checkbox",value:t.id,"onUpdate:modelValue":d[1]||(d[1]=x=>e.selected_permissions=x)},null,8,W),[[f,e.selected_permissions]]),s("label",{for:t.id},g(t.name),9,X)])]))),256))]),Y]))])):C("",!0)]))),256)):(l(),n("div",M,z))]),s("div",Z,[a(v,{buttonType:"gray",route:e.route("roles")},{default:c(()=>[b("Cancel")]),_:1},8,["route"]),a(v,{type:"submit"},{default:c(()=>[b("Save")]),_:1})])],32)])])])])]),_:1})],64))}});export{me as default};
