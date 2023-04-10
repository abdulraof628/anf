import{h as r,a as o,b as d,w as i,F as p,H as m,L as y,o as n,d as e,k as _,x as w,i as v,q as b,t as l,e as k}from"./app-825cb09d.js";import{B as M}from"./Authenticated-36680990.js";import{B as D}from"./Button-5cb0f01e.js";import{C as u}from"./ConfirmationModal-6c5a7432.js";import{P as h}from"./Pagination-069292a2.js";import"./default.css_vue_type_style_index_0_src_true_lang-ba7b10a7.js";import{s as B}from"./multiselect-2ed4d71d.js";import{V as f,M as C}from"./VueFinalModal.esm-9c5f184d.js";import{r as g}from"./SearchIcon-59b03115.js";import{r as T}from"./TrashIcon-51718509.js";import{r as V}from"./PencilIcon-76447f7f.js";import"./ApplicationLogo-47fe7a8e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-198f9b98.js";const $={class:"py-4 px-4"},I={class:"mx-auto"},L={class:"align-middle inline-block min-w-full px-2"},R={class:"flex justify-between mb-4"},U={class:"flex space-x-2"},z={class:"flex relative text-gray-400 focus-within:text-gray-600"},j={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},E={class:"min-w-full divide-y divide-gray-200"},N=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Email"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Role"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),A={class:"bg-white divide-y divide-gray-200"},O={key:0},P=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),S=[P],F={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm text-gray-700"},G={class:"px-6 py-4 whitespace-nowrap"},H={class:"text-sm font-medium text-gray-900"},W={class:"px-6 py-4 whitespace-nowrap"},J={class:"text-sm font-medium text-gray-900"},K={class:"px-6 py-4 whitespace-nowrap"},Q={class:"text-sm font-medium text-gray-900"},X={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},Y={class:"flex justify-center"},Z={class:"flex pr-1"},ee=e("div",{id:"default-modal","data-modal-show":"true","aria-hidden":"true",class:"overflow-x-hidden overflow-y-auto h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center"},[e("div",{class:"absolute top-1/3 px-20"},[e("div",{class:"bg-white rounded-lg shadow relative"},[e("div",{class:"flex items-start justify-between p-5 border-b rounded-t"},[e("h3",{class:"text-gray-900 text-xl lg:text-2xl font-semibold"}," Terms of Service "),e("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},[e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})])])]),e("div",{class:"p-6 space-y-6"},[e("p",{class:"text-gray-500 text-base leading-relaxed"}," With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply. "),e("p",{class:"text-gray-500 text-base leading-relaxed"}," The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them. ")]),e("div",{class:"flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b"},[e("button",{"data-modal-toggle":"default-modal",type:"button",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"I accept"),e("button",{"data-modal-toggle":"default-modal",type:"button",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"},"Decline")])])])],-1),te={components:{SearchIcon:g,TrashIcon:T,PencilIcon:V,ConfirmationModal:u,Head:m,Link:y,Multiselect:B,VueFinalModal:f,ModalsContainer:C,Pagination:h},props:{filter:Object},data(){return{showModal:!1,isOpen:!1,userID:"",confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:"",centre_id:this.filter.centre_id?this.filter.centre_id:""}}},watch:{params:{handler(){this.params&&this.$inertia.get(this.route("divisions.users"),this.params,{replace:!0,preserveState:!0})},deep:!0}},methods:{manageUser(c){this.$inertia.get(this.route("division_manager.manage"),{user_id:c})}}},xe=Object.assign(te,{__name:"Index",setup(c){return(t,s)=>(n(),r(p,null,[o(d(m),{title:"Edupreneurs"}),o(M,null,{header:i(()=>[]),default:i(()=>[e("div",$,[e("div",I,[e("div",L,[e("div",R,[e("div",U,[e("div",z,[o(d(g),{class:"text-gray-600 h-4 w-4 fill-current pointer-events-none absolute top-1/4 left-3",style:"top:30%"}),_(e("input",{class:"border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:ring-0 focus:border-gray-300 appearance-none block pl-10",type:"text","onUpdate:modelValue":s[0]||(s[0]=a=>t.params.search=a),placeholder:"Search"},null,512),[[w,t.params.search]])])])]),e("div",j,[e("table",E,[N,e("tbody",A,[t.$page.props.division_managers.data.length?v("",!0):(n(),r("tr",O,S)),(n(!0),r(p,null,b(t.$page.props.division_managers.data,(a,x)=>(n(),r("tr",{class:"hover:bg-gray-200",key:a.ID},[e("td",F,[e("div",q,l(++x),1)]),e("td",G,[e("div",H,l(a.name),1)]),e("td",W,[e("div",J,l(a.email),1)]),e("td",K,[e("div",Q,l(a.role),1)]),e("td",X,[e("div",Y,[e("div",Z,[o(D,{buttonType:"blue",title:"Manage User",onClick:ae=>t.manageUser(a.id)},{default:i(()=>[k("Manage")]),_:2},1032,["onClick"])])])])]))),128))])]),o(h,{page_data:t.$page.props.division_managers},null,8,["page_data"])])])]),o(u,{show:t.isOpen,onClose:s[1]||(s[1]=a=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Class",confirmationText:"Are you sure want to delete this class?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"]),o(d(f),{modelValue:t.showModal,"onUpdate:modelValue":s[2]||(s[2]=a=>t.showModal=a)},{default:i(()=>[ee]),_:1},8,["modelValue"])])]),_:1})],64))}});export{xe as default};
