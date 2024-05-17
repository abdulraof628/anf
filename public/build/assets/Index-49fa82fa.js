import{E as x,C as u,o as i,c as w,a as p,u as a,w as m,F as y,H as A,L as O,d as e,s as c,g as C,q as r,e as M,t as f,n as _,h as j,p as I}from"./app-4d4cbe7d.js";import{B as U,r as B}from"./Authenticated-cde3a9ac.js";import{B as g}from"./Button-7893ea7c.js";import{r as b}from"./PencilIcon-c96ef037.js";import{r as F}from"./SearchIcon-dd859cd1.js";import{r as k}from"./TrashIcon-707944e9.js";import{C as R}from"./ConfirmationModal-79b2437a.js";import"./ApplicationLogo-7e99a00b.js";import"./NavLink-9d0a350c.js";import"./XIcon-33e2d1a0.js";import"./vue3-perfect-scrollbar-edf4bd5b.js";import"./moment-a9aaa855.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-e953a9a0.js";import"./keyboard-887c58cb.js";var V={prefix:"far",iconName:"square-caret-down",icon:[448,512,["caret-square-down"],"f150","M384 432c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0zm64-16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"]},$=V,E={prefix:"far",iconName:"square-caret-up",icon:[448,512,["caret-square-up"],"f151","M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 64c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z"]},S=E;const H={transform:"rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))"},z={fill:"currentColor"},N={mdi:{size:24,viewbox:"0 0 24 24"},"simple-icons":{size:24,viewbox:"0 0 24 24"},default:{size:0,viewbox:"0 0 0 0"}},v={name:"icon",props:{type:{type:String,default:"mdi"},faIcon:{type:Object,default:null},path:{type:[String,Object,Array]},size:{type:[Number,String],default:24},viewbox:String,flip:{type:String,validator:t=>["horizontal","vertical","both"].includes(t)},rotate:{type:[Number,String],default:0}},setup(t){if(!t.path&&!t.faIcon)return console.warn("vue3-icon requires either a 'path' or an 'fa-icon' property"),()=>x("div");const s=u(()=>{var d;return((d=t.faIcon)==null?void 0:d.prefix)||t.type}),h=u(()=>parseInt(t.rotate,10)),o=u(()=>N[s.value]||N.default),n=u(()=>parseInt(t.size,10)||o.value.size),l=u(()=>t.faIcon?`0 0 ${t.faIcon.icon[0]} ${t.faIcon.icon[1]}`:!1),T=u(()=>l.value||t.viewbox||o.value.viewbox),q=u(()=>({...H,"--sx":["both","horizontal"].includes(t.flip)?"-1":"1","--sy":["both","vertical"].includes(t.flip)?"-1":"1","--r":isNaN(h.value)?h.value:h.value+"deg"})),D=u(()=>{var d;return t.faIcon?(d=t.faIcon)==null?void 0:d.icon[4]:t.type==="simple-icons"&&typeof t.path=="object"?t.path.path:t.path}),L=u(()=>s.value==="fad"?(console.warn("vue3-icon does not currently support Duotone FontAwesome icons"),x("path")):Array.isArray(t.path)?x("g",{style:{...z}},t.path.map(d=>typeof d=="string"?x("path",{d}):x("path",{...d}))):x("path",{d:D.value,style:{...z}}));return()=>x("svg",{style:q.value,class:["vue3-icon"],width:n.value,height:n.value,viewBox:T.value},[L.value])}},P={class:"py-4 px-4"},G={class:"overflow-x-auto"},J={class:"m-3"},K={class:"align-top inline-block w-full lg:w-1/2 px-2 mb-3"},Q={class:"flex pb-4 relative text-gray-400 focus-within:text-gray-600"},W={class:"shadow overflow-hidden overflow-x-auto hover:no-scrollbar border-b border-gray-200 sm:rounded-lg"},X={class:"min-w-full divide-y divide-gray-200 w-full"},Y=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"Order"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"},"Menu Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"},"Route Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"},"Action")])],-1),Z={class:"bg-white divide-y divide-gray-200 overflow-y-scroll"},ee={key:0},te=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),se=[te],oe={class:"px-6 py-2 whitespace-nowrap text-sm"},ie={class:"px-2 py-2 whitespace-nowrap"},ne={class:"flex justify-center"},ae={class:"px-2 py-2 whitespace-nowrap"},re={class:"flex items-center"},le={class:"ml-4"},ce={class:"text-sm font-medium text-gray-900"},de={class:"px-2 py-2 whitespace-nowrap"},ue={class:"flex items-center"},pe={class:"ml-4"},me={class:"px-6 py-2 whitespace-nowrap"},he={class:"px-6 py-2 whitespace-nowrap text-center text-sm font-medium"},fe={class:"flex space-x-2"},_e={class:"align-top inline-block w-full lg:w-1/2 px-2"},xe={class:"flex pb-4 relative text-gray-400 focus-within:text-gray-600 lg:justify-end"},we={class:"shadow overflow-hidden overflow-x-auto hover:no-scrollbar border-b border-gray-200 sm:rounded-lg"},ge={class:"min-w-full divide-y divide-gray-200 w-full"},ve=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/8"},"Order"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/6"},"Sub Menu Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"},"Route Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/6"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"},"Action")])],-1),ye={class:"bg-white divide-y divide-gray-200 overflow-y-scroll"},be={key:0},ke=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),$e=[ke],Se={class:"px-6 py-2 whitespace-nowrap text-sm"},Ce={class:"px-2 py-2 whitespace-nowrap"},Me={class:"flex justify-center"},ze={class:"px-2 py-2 whitespace-nowrap"},Ne={class:"flex items-center"},Ae={class:"ml-4"},Be={class:"text-sm font-medium text-gray-900"},Re={class:"px-2 py-2 whitespace-nowrap"},Te={class:"flex items-center"},qe={class:"ml-4"},De={class:"px-6 py-2 whitespace-nowrap"},Le={class:"px-6 py-2 whitespace-nowrap text-center text-sm font-medium"},Oe={class:"flex"},je={class:"pr-1"},Ie={class:"pr-1"},Ue={components:{SearchIcon:F,TrashIcon:k,PencilIcon:b,ChevronRightIcon:B,ConfirmationModal:R,Head:A,Link:O,SvgIcon:v,faCaretSquareUp:S,faCaretSquareDown:$},props:{show_sub_menu:Boolean,menu_id:String},data(){return{isOpen:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationRoute:"",confirmationData:""}},methods:{showSubMenu(t){this.$inertia.get(route("menus"),{menu_id:t})},addSubMenu(t){this.$inertia.get(route("menus.add_sub_menu"),{menu_id:t})},editMenu(t){this.$inertia.get(route("menus.edit_menu"),{menu_id:t})},editSubMenu(t){this.$inertia.get(route("menus.edit_sub_menu"),{menu_id:t})},deleteMenu(t){this.confirmationRoute="menus.destroy_menu",this.confirmationData=t,this.isOpen=!0},deleteSubMenu(t){this.confirmationRoute="menus.destroy_sub_menu",this.confirmationData=t,this.isOpen=!0},swapMenuUp(t){this.$inertia.post(route("menus.swap_menu_up"),{menu_id:t})},swapMenuDown(t){this.$inertia.post(route("menus.swap_menu_down"),{menu_id:t})},swapSubMenuUp(t,s){this.$inertia.post(route("menus.swap_sub_menu_up"),{menu_id:t,sub_menu_id:s})},swapSubMenuDown(t,s){this.$inertia.post(route("menus.swap_sub_menu_down"),{menu_id:t,sub_menu_id:s})}}},st=Object.assign(Ue,{__name:"Index",setup(t){return(s,h)=>(i(),w(y,null,[p(a(A),{title:"Menus"}),p(U,null,{header:m(()=>[]),default:m(()=>[e("div",P,[e("div",G,[e("div",J,[e("div",K,[e("div",Q,[s.$page.props.can.create_menu_editor?(i(),c(g,{key:0,route:s.route("menus.add_menu")},{default:m(()=>[C(" Add Menu ")]),_:1},8,["route"])):r("",!0)]),e("div",W,[e("table",X,[Y,e("tbody",Z,[s.$page.props.menus.length==0?(i(),w("tr",ee,se)):r("",!0),(i(!0),w(y,null,M(s.$page.props.menus,(o,n)=>(i(),w("tr",{class:"hover:bg-gray-200",key:n},[e("td",oe,f(++n),1),e("td",ie,[e("div",ne,[e("div",{class:_(["px-0.5",n>1?"text-blue-600 hover:text-blue-800 cursor-pointer":"text-blue-200 cursor-not-allowed"]),title:"Sort"},[s.$page.props.can.edit_menu_editor?(i(),c(a(v),{key:0,"fa-icon":a(S),size:25,flip:"horizontal",onClick:l=>n>1?s.swapMenuUp(o.id):""},null,8,["fa-icon","onClick"])):r("",!0)],2),e("div",{class:_(["px-0.5≈",n<s.$page.props.menus.length?"text-blue-600 hover:text-blue-800 cursor-pointer":"text-blue-200 cursor-not-allowed"]),title:"Sort"},[s.$page.props.can.edit_menu_editor?(i(),c(a(v),{key:0,"fa-icon":a($),size:25,flip:"horizontal",onClick:l=>n<s.$page.props.menus.length?s.swapMenuDown(o.id):""},null,8,["fa-icon","onClick"])):r("",!0)],2)])]),e("td",ae,[e("div",re,[e("div",le,[e("div",ce,f(o.menu_label),1)])])]),e("td",de,[e("div",ue,[e("div",pe,[e("div",{class:_(["text-sm font-medium text-gray-900",o.menu_route?"":"font-black"])},f(o.menu_route?o.menu_route:""),3)])])]),e("td",me,[e("span",{class:_(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.menu_status==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},f(o.menu_status==1?"Active":"Not Active"),3)]),e("td",he,[e("div",fe,[s.$page.props.can.edit_menu_editor?(i(),c(g,{key:0,buttonType:"warning",class:"py-1.5 px-1.5",onClick:l=>s.editMenu(o.id),title:"Edit"},{default:m(()=>[p(a(b),{class:"text-white-600 h-4 w-4 fill-current"})]),_:2},1032,["onClick"])):r("",!0),s.$page.props.can.delete_menu_editor?(i(),c(g,{key:1,buttonType:"danger",class:"py-1.5 px-1.5",onClick:l=>s.deleteMenu(o.id),title:"Delete"},{default:m(()=>[p(a(k),{class:"text-white-600 h-4 w-4 fill-current"})]),_:2},1032,["onClick"])):r("",!0),s.$page.props.can.edit_menu_editor?(i(),c(g,{key:2,buttonType:"blue",class:"py-1.5 px-1.5",onClick:l=>s.showSubMenu(o.id),title:"View Sub Menu"},{default:m(()=>[p(a(B),{class:"text-white-600 h-4 w-4 fill-current"})]),_:2},1032,["onClick"])):r("",!0)])])]))),128))])])])]),j(e("div",_e,[e("div",xe,[p(g,{onClick:h[0]||(h[0]=o=>s.addSubMenu(t.menu_id))},{default:m(()=>[C(" Add Sub Menu ")]),_:1})]),e("div",we,[e("table",ge,[ve,e("tbody",ye,[s.$page.props.sub_menus.length==0?(i(),w("tr",be,$e)):r("",!0),(i(!0),w(y,null,M(s.$page.props.sub_menus,(o,n)=>(i(),w("tr",{class:"hover:bg-gray-200",key:n},[e("td",Se,f(++n),1),e("td",Ce,[e("div",Me,[e("div",{class:_(["px-0.5",n>1?"text-blue-600 hover:text-blue-800 cursor-pointer":"text-blue-200 cursor-not-allowed"]),title:"Sort"},[s.$page.props.can.edit_menu_editor?(i(),c(a(v),{key:0,"fa-icon":a(S),size:25,flip:"horizontal",onClick:l=>n>1?s.swapSubMenuUp(t.menu_id,o.id):""},null,8,["fa-icon","onClick"])):r("",!0)],2),e("div",{class:_(["px-0.5≈",n<s.$page.props.sub_menus.length?"text-blue-600 hover:text-blue-800 cursor-pointer":"text-blue-200 cursor-not-allowed"]),title:"Sort"},[s.$page.props.can.edit_menu_editor?(i(),c(a(v),{key:0,"fa-icon":a($),size:25,flip:"horizontal",onClick:l=>n<s.$page.props.sub_menus.length?s.swapSubMenuDown(t.menu_id,o.id):""},null,8,["fa-icon","onClick"])):r("",!0)],2)])]),e("td",ze,[e("div",Ne,[e("div",Ae,[e("div",Be,f(o.menu_sub_label),1)])])]),e("td",Re,[e("div",Te,[e("div",qe,[e("div",{class:_(["text-sm font-medium text-gray-900",o.menu_sub_route?"":"font-extrabold"])},f(o.menu_sub_route?o.menu_sub_route:"None"),3)])])]),e("td",De,[e("span",{class:_(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.menu_sub_status==1?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},f(o.menu_sub_status==1?"Active":"Not Active"),3)]),e("td",Le,[e("div",Oe,[e("div",je,[s.$page.props.can.edit_menu_editor?(i(),c(g,{key:0,buttonType:"warning",class:"py-1.5 px-1.5",onClick:l=>s.editSubMenu(o.id),title:"Delete"},{default:m(()=>[p(a(b),{class:"text-white-600 h-4 w-4 fill-current"})]),_:2},1032,["onClick"])):r("",!0)]),e("div",Ie,[s.$page.props.can.delete_menu_editor?(i(),c(g,{key:0,buttonType:"danger",class:"py-1.5 px-1.5",onClick:l=>s.deleteSubMenu(o.id),title:"Delete"},{default:m(()=>[p(a(k),{class:"text-white-600 h-4 w-4 fill-current"})]),_:2},1032,["onClick"])):r("",!0)])])])]))),128))])])])],512),[[I,t.show_sub_menu]])])]),p(R,{show:s.isOpen,onClose:h[1]||(h[1]=o=>s.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Menu",confirmationText:"Are you sure want to delete this menu?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:s.confirmationRoute,confirmationData:s.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64))}});export{st as default};
