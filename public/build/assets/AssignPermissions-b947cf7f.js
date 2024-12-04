import{y as l,x as p,u as c,Q as a,F as m,t as d,z as o,G as w,J as u,q as h,A as f,bD as g,K as b,C as A,W as _}from"./@vue-d42dd214.js";import{B as C}from"./Authenticated-627fff65.js";import{B as v}from"./Button-50fa5a9d.js";import{d as $,r as B,e as E,f as y}from"./@heroicons-e6194902.js";import{H as k,L as N}from"./@inertiajs-7f289881.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-79eedadb.js";import"./axios-1779699b.js";import"./pusher-js-d90fcbf8.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-23e774d5.js";import"./DialogDescription-92161d9e.js";import"./lucide-vue-next-53796c49.js";const V={class:"py-4 px-4"},j={class:"overflow-x-auto"},I={class:"mx-auto"},S={class:"align-middle inline-block min-w-full"},z={class:"text-sm font-medium text-gray-700"},L={key:0,class:"flex items-center border border-red-500 py-3 px-4"},M={class:"flex flex-1 space-x-2 items-center px-4 py-1 transition cursor-pointer group border border-indigo-200 border-r-0 relative",role:"button"},O=["id","value","onClick"],D=["onClick"],T={class:"select-none"},F={key:0,class:"flex flex-col py-3 px-3 border-x border-indigo-200"},H={key:0},P={key:1,class:"flex flex-col"},R={class:"list-none items-center translate-x-4"},U={class:"mb-1"},q={class:"flex"},G=["id","value"],J=["for"],K={class:"flex space-x-2 p-3"},Q={components:{SearchIcon:$,TrashIcon:B,PencilIcon:E,ChevronRightIcon:y,Head:k,Link:N},props:{role_id:String,permissions:Object,role_permissions:Object},created(){var r=this.selected_permissions;Object.keys(this.role_permissions).forEach(function(e){r.push(parseInt(e))})},data(){return{expandAccordion:!1,selected_permissions:[],selected:""}},methods:{toggleMenu(r){r==this.selected?this.expandAccordion=!this.expandAccordion:this.expandAccordion=!0,this.selected=r},submit(){this.$inertia.post(this.route("roles.assign_permissions.store"),{role_id:this.role_id,selected_permissions:this.selected_permissions})},selectAll(r,e,s){this.expandAccordion=!0,this.selected=r,s.target.checked?(this.selected_permissions.push(this.$page.props.permissions[r].id),this.$page.props.permissions[r].permission_sub.forEach(t=>{this.selected_permissions.push(t.id)})):(this.selected_permissions.forEach((t,n)=>{t==e&&this.selected_permissions.splice(n,1)}),this.$page.props.permissions[r].permission_sub.forEach(t=>{this.selected_permissions.forEach((n,i)=>{n==t.id&&this.selected_permissions.splice(i,1)})}))}}},Ue=Object.assign(Q,{__name:"AssignPermissions",setup(r){return(e,s)=>(d(),l(m,null,[p(c(k),{title:"Roles"}),p(C,null,{header:a(()=>s[3]||(s[3]=[])),default:a(()=>[o("div",V,[o("div",j,[o("div",I,[o("div",S,[o("form",{onSubmit:s[2]||(s[2]=w((...t)=>e.submit&&e.submit(...t),["prevent"]))},[o("nav",z,[e.$page.props.permissions?(d(!0),l(m,{key:1},u(e.$page.props.permissions,(t,n)=>(d(),l("div",null,[o("div",{class:h(["flex",e.expandAccordion&&n===e.selected?"bg-indigo-400 text-gray-200":"bg-indigo-300 hover:bg-indigo-400 text-gray-800 hover:text-gray-200"])},[o("div",M,[f(o("input",{id:t.id,class:"h-4 w-4 border border-gray-300 rounded-sm bg-white focus:ring-offset-0 focus:ring-0 checked:bg-gray focus:bg-white transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"checkbox",value:t.id,onClick:i=>e.selectAll(n,t.id,i),"onUpdate:modelValue":s[0]||(s[0]=i=>e.selected_permissions=i)},null,8,O),[[g,e.selected_permissions]]),o("div",{class:"flex items-center justify-start grow",onClick:i=>e.toggleMenu(n)},[o("span",T,b(t.name),1),p(c(y),{class:h([{"rotate-90":e.expandAccordion&&n===e.selected},"shrink-0 w-4 h-4 ml-2 transition transform"])},null,8,["class"])],8,D)])],2),e.expandAccordion&&n===e.selected?(d(),l("div",F,[t.permission_sub.length<1?(d(),l("div",H,s[5]||(s[5]=[o("span",null,"No sub permissions.",-1)]))):(d(),l("div",P,[o("ul",R,[(d(!0),l(m,null,u(t.permission_sub,(i,W)=>(d(),l("li",U,[o("div",q,[f(o("input",{id:i.id,class:"h-4 w-4 border border-gray-300 rounded-sm bg-white focus:ring-offset-0 focus:ring-0 checked:bg-gray focus:bg-white transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"checkbox",value:i.id,"onUpdate:modelValue":s[1]||(s[1]=x=>e.selected_permissions=x)},null,8,G),[[g,e.selected_permissions]]),o("label",{for:i.id},b(i.name),9,J)])]))),256))]),s[6]||(s[6]=o("div",{class:"flex space-x-6"},null,-1))]))])):A("",!0)]))),256)):(d(),l("div",L,s[4]||(s[4]=[o("span",{class:"mr-2"},"No permission added.",-1)])))]),o("div",K,[p(v,{buttonType:"gray",url:e.route("roles")},{default:a(()=>s[7]||(s[7]=[_("Cancel")])),_:1},8,["url"]),p(v,{type:"submit"},{default:a(()=>s[8]||(s[8]=[_("Save")])),_:1})])],32)])])])])]),_:1})],64))}});export{Ue as default};