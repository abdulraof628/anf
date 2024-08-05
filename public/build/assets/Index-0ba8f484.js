import{B as u}from"./Authenticated-6aa59b71.js";import{B as _}from"./Button-6ae4faf4.js";import{r as f}from"./PencilIcon-45828520.js";import{r as g}from"./SearchIcon-d70fe6db.js";import{r as h}from"./TrashIcon-13f96969.js";import{o,c as s,a as r,u as x,w as i,F as c,H as d,L as y,d as t,q as w,e as v,t as l,g as b}from"./app-c5f8c84a.js";import{C as m}from"./ConfirmationModal-5bf1103d.js";import"./ApplicationLogo-726b3e56.js";import"./XIcon-0862d5a7.js";import"./perfect-scrollbar.esm-c962b4e2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-80679ebf.js";import"./moment-55cb88ed.js";import"./transition-476dfdc8.js";import"./keyboard-932a6122.js";const B={class:"py-4 px-4"},k={class:"grid grid-cols-2"},D={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},C={class:"min-w-full divide-y divide-gray-200"},R=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Programme Name"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),A={class:"bg-white divide-y divide-gray-200"},N={key:0},L=t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found! ")],-1),T=[L],I={class:"hover:bg-gray-200"},O={class:"px-6 py-4 whitespace-nowrap"},V={class:"text-sm font-medium text-gray-700"},$={class:"px-6 py-4 whitespace-nowrap"},F={class:"flex flex-col space-y-1 text-sm text-gray-900"},M={class:"font-semibold"},P={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},j={class:"flex justify-center space-x-2"},z={components:{SearchIcon:g,TrashIcon:h,PencilIcon:f,Head:d,Link:y,ConfirmationModal:m},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",open_modal:!1,programme_list:[{name:"Math",url:"progress_report.settings.math.levels"},{name:"Coding & Robotics",url:"progress_report.settings.coding_robotics.levels"},{name:"Digital Art",url:"progress_report.settings.digital_art.levels"},{name:"Little Bot",url:"progress_report.settings.little_bot.levels"}]}},methods:{configure(){this.$inertia.post(route("progress_report.settings"),this.form)}}},st=Object.assign(z,{__name:"Index",setup(H){return(e,n)=>(o(),s(c,null,[r(x(d),{title:"Progress Report"}),r(u,null,{header:i(()=>[]),default:i(()=>[t("div",B,[t("div",k,[t("div",D,[t("table",C,[R,t("tbody",A,[e.programme_list.length?w("",!0):(o(),s("tr",N,T)),(o(!0),s(c,null,v(e.programme_list,(a,p)=>(o(),s("tr",I,[t("td",O,[t("div",V,l(++p),1)]),t("td",$,[t("div",F,[t("span",M,l(a.name),1)])]),t("td",P,[t("div",j,[r(_,{buttonType:"warning",route:e.route(a.url)},{default:i(()=>[b("Configure")]),_:2},1032,["route"])])])]))),256))])])])])]),r(m,{show:e.isOpen,onClose:n[0]||(n[0]=a=>e.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Artwork",confirmationText:"Are you sure want to delete this artwork?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:e.confirmationRoute,confirmationData:e.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{st as default};
