import{r as v,o as s,c as r,a,u as b,w as i,F as u,H as g,L as k,d as e,g as p,q as c,h as C,v as B,e as D,t as l,n as P,s as h}from"./app-b18481c7.js";import{B as $}from"./Authenticated-f888241f.js";import{B as m}from"./Button-99d4fd31.js";import{r as T}from"./SearchIcon-cb868035.js";import{C as f}from"./ConfirmationModal-b68a2969.js";import{P as _}from"./Pagination-5654ccdc.js";import"./ApplicationLogo-cc6f311f.js";import"./XIcon-95e4a431.js";import"./perfect-scrollbar.esm-299e06ac.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-4b513232.js";import"./moment-55cb88ed.js";import"./transition-aeee3124.js";import"./keyboard-a9c96269.js";const A={class:"py-4 px-4"},N={key:0,class:"flex justify-end mb-3"},M=e("hr",{class:"my-3 border border-dashed border-gray-400"},null,-1),O={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mb-3"},R={class:"relative w-full"},j=e("svg",{class:"absolute top-2.5 left-3 h-5 w-5 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),L={class:"overflow-x-auto"},V={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},S={class:"min-w-full divide-y divide-gray-200"},z=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",width:"2"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Programme Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Country"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Action")])],-1),F={class:"bg-white divide-y divide-gray-200"},E={key:0},H=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),I=[H],q={class:"px-6 py-4 whitespace-nowrap"},U={class:"text-sm text-gray-700"},Z={class:"px-6 py-4 whitespace-nowrap"},G={class:"text-sm font-medium text-gray-900"},J={class:"px-6 py-4 whitespace-nowrap"},K={class:"text-sm font-medium text-gray-900"},Q={class:"px-6 py-4 whitespace-nowrap"},W={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},X={class:"flex justify-center space-x-2"},Y={components:{Head:g,Link:k,ConfirmationModal:f,SearchIcon:T,Pagination:_},props:{filter:Object},data(){return{isOpen:!1,current_tab:1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:""}}},methods:{editProgramme(n){this.$inertia.get(this.route("programmes.edit"),{programme_id:n})},deleteProgramme(n){this.confirmationTitle="Delete Programme",this.confirmationText="Are you sure want to delete this programme?",this.confirmationButton="Delete",this.confirmationMethod="delete",this.confirmationRoute="programmes.destroy",this.confirmationData=n,this.isOpen=!0},search(){this.$inertia.get(this.route("programmes"),this.params,{replace:!0,preserveState:!0})}}},he=Object.assign(Y,{__name:"Index",setup(n){return(t,d)=>{const y=v("debounce");return s(),r(u,null,[a(b(g),{title:"Programmes"}),a($,null,{header:i(()=>[]),default:i(()=>[e("div",A,[t.$page.props.can.create_programmes?(s(),r("div",N,[a(m,{route:t.route("programmes.create")},{default:i(()=>[p("New Programme")]),_:1},8,["route"])])):c("",!0),M,e("div",O,[e("div",R,[j,C(e("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md","onUpdate:modelValue":d[0]||(d[0]=o=>t.params.search=o)},null,512),[[y,t.search,"800ms"],[B,t.params.search]])])]),e("div",L,[e("div",V,[e("table",S,[z,e("tbody",F,[t.$page.props.programme_list.data.length?c("",!0):(s(),r("tr",E,I)),(s(!0),r(u,null,D(t.$page.props.programme_list.data,(o,x)=>(s(),r("tr",{class:"hover:bg-gray-200",key:o.id},[e("td",q,[e("div",U,l(++x),1)]),e("td",Z,[e("div",G,l(o.programme_name),1)]),e("td",J,[e("div",K,l(o.country),1)]),e("td",Q,[e("span",{class:P(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",o.status==1?" bg-green-100 text-green-800":" bg-red-100 text-red-800"])},l(o.status==1?"Active":"Not Active"),3)]),e("td",W,[e("div",X,[t.$page.props.can.edit_programmes?(s(),h(m,{key:0,buttonType:"info",class:"py-1 px-4",onClick:w=>t.editProgramme(o.id)},{default:i(()=>[p(" Edit ")]),_:2},1032,["onClick"])):c("",!0),t.$page.props.can.delete_programmes?(s(),h(m,{key:1,buttonType:"danger",onClick:w=>t.deleteProgramme(o.id)},{default:i(()=>[p(" Delete ")]),_:2},1032,["onClick"])):c("",!0)])])]))),128))])]),a(_,{page_data:t.$page.props.programme_list,params:t.params},null,8,["page_data","params"])])])]),a(f,{show:t.isOpen,onClose:d[1]||(d[1]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Programme",confirmationText:"Are you sure want to delete this programme?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64)}}});export{he as default};
