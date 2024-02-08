import{o as i,c as n,a as r,u as h,w as l,F as c,H as v,d as t,g as u,e as _,t as a,n as m,q as g,h as y,v as x,G as k,l as A,p as b}from"./app-d3bda284.js";import{_ as B,a as D}from"./Authenticated-ee709055.js";import{B as f}from"./Button-b22af484.js";import{h as M}from"./moment-fbc5633a.js";import{C as w}from"./ConfirmationModal-6662a148.js";import{Z as C}from"./vue-datepicker-16a775c0.js";import"./XIcon-653b4913.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-59178efa.js";import"./use-outside-click-50f012b5.js";import"./use-resolve-button-type-f21a4cbd.js";import"./menu-bcc52003.js";const T={class:"hidden md:flex lg:flex justify-end mb-3"},$={class:"overflow-x-auto no-scrollbar"},V={class:"bg-white shadow rounded-lg border"},N={class:"w-full text-sm text-left text-gray-500"},O=t("thead",{class:"text-gray-700 capitalize bg-gray-200"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"}," Name "),t("th",{scope:"col",class:"px-6 py-3"}," Age "),t("th",{scope:"col",class:"px-6 py-3"}," Gender "),t("th",{scope:"col",class:"px-6 py-3 text-center"}," Status "),t("th",{scope:"col",class:"px-6 py-3 text-center"}," Action ")])],-1),S={key:0,class:"bg-white border-b"},Z=t("td",{class:"text-center py-4",colspan:"10"}," No record found. ",-1),j=[Z],F={class:"bg-white border-b hover:bg-gray-50"},R={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},z={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},G={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},E={class:"px-6 py-4 text-center"},H={class:"px-6 py-4 text-center"},U=["onClick"],I={class:"flex items-end justify-end fixed bottom-24 right-4 md:hidden lg:hidden"},q=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"currentColor",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})],-1),L=[q],P={class:"p-4"},W=t("h1",{class:"md:font-semibold md:text-xl"},"Add Child",-1),Y=t("hr",{class:"my-4 border-gray-600"},null,-1),J=t("label",{class:"font-medium text-gray-900 text-sm md:text-md"},"Name",-1),K=t("label",{class:"font-medium text-gray-900 text-sm md:text-md"},"Date of Birth",-1),Q={class:"mt-1 flex rounded-md shadow-sm"},X=t("label",{class:"font-medium text-gray-900 text-sm md:text-md"},"Gender",-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te=t("option",{value:""},"-- Select Gender --",-1),oe=["value"],se=t("hr",{class:"my-5"},null,-1),ie={class:"flex justify-end items-center space-x-2"},ne={key:0,class:"flex space-x-2"},de=t("svg",{"aria-hidden":"true",class:"inline w-4 h-4 text-gray-200 animate-spin fill-indigo-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),re=t("span",null,"Adding...",-1),le=[de,re],ae={key:1},me={components:{ConfirmationModal:w,Datepicker:C},data(){return{isOpen:!1,confirmationAlert:"",confirmationTitle:"",confirmationText:"",confirmationButton:"",confirmationMethod:"",confirmationRoute:"",confirmationData:"",show_add_child:!1,adding:!1,disable_overlay:!1,child_form:{name:"",gender:"",dob:""},errors:[]}},methods:{deleteChild(d){this.confirmationAlert="danger",this.confirmationTitle="Warning",this.confirmationText="This child will be deleted permanently, are you sure want to proceed?",this.confirmationButton="Delete",this.confirmationMethod="delete",this.confirmationRoute="children.destroy",this.confirmationData=d,this.isOpen=!0},showAddChild(){for(let d in this.child_form)this.child_form.hasOwnProperty(d)&&(this.child_form[d]="");this.errors=[],this.show_add_child=!0},addChild(){if(this.adding)return;for(let e in this.child_form)this.child_form[e]==""||!this.child_form[e]?this.errors[e]=!0:this.errors[e]=!1;Object.values(this.child_form).every(e=>e!==null&&e!=="")&&(this.child_form.parent_id=this.$page.props.auth.user.ID,this.$inertia.post(route("children.store"),this.child_form,{preserveState:!1,preserveScroll:!0,onBefore:e=>{this.adding=!0,this.disable_overlay=!0},onFinish:e=>{this.disable_overlay=!1,this.show_add_child=!1,this.adding=!1}}))}}},ke=Object.assign(me,{__name:"Index",setup(d){return(e,s)=>(i(),n(c,null,[r(h(v),{title:"Home"}),r(B,null,{default:l(()=>[t("div",T,[r(f,{type:"button",buttonType:"info",onClick:e.showAddChild},{default:l(()=>[u("Add Child")]),_:1},8,["onClick"])]),t("div",$,[t("div",V,[t("table",N,[O,t("tbody",null,[!e.$page.props.children_list||!e.$page.props.children_list.length?(i(),n("tr",S,j)):(i(!0),n(c,{key:1},_(e.$page.props.children_list,(o,p)=>(i(),n("tr",F,[t("td",R,a(o.name),1),t("td",z,a(h(M)(o.dob).format("DD/MM/Y")),1),t("td",G,a(o.gender),1),t("td",E,[t("span",{class:m(["text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap",o.student_id?"text-green-500 bg-green-100":"text-red-500 bg-red-100"])},a(o.student_id?"Enrolled":"Not Enrolled"),3)]),t("td",H,[t("button",{type:"button",onClick:he=>o.student_id?"":e.deleteChild(o.id),class:m(["font-medium px-3 py-1 rounded whitespace-nowrap",o.student_id?"text-white bg-red-300 cursor-not-allowed":"text-white bg-red-600 hover:bg-red-700 cursor-pointer"])},"Delete",10,U)])]))),256))])])]),t("div",I,[t("button",{class:"bg-indigo-600 hover:bg-indigo-600 text-white font-semibold p-3 rounded-full shadow-lg",onClick:s[0]||(s[0]=(...o)=>e.showAddChild&&e.showAddChild(...o))},L)])]),r(w,{show:e.isOpen,onClose:s[1]||(s[1]=o=>e.isOpen=!1),confirmationAlert:e.confirmationAlert,confirmationTitle:e.confirmationTitle,confirmationText:e.confirmationText,confirmationButton:e.confirmationButton,confirmationMethod:e.confirmationMethod,confirmationRoute:e.confirmationRoute,confirmationData:e.confirmationData},null,8,["show","confirmationAlert","confirmationTitle","confirmationText","confirmationButton","confirmationMethod","confirmationRoute","confirmationData"]),e.show_add_child?(i(),g(D,{key:0,open:e.show_add_child,"onClose:modal":s[6]||(s[6]=o=>e.show_add_child=!1),class:"w-full sm:h-auto sm:w-4/6 md:h-auto md:w-2/6 p-4 overflow-y-auto",disable_overlay:e.disable_overlay},{default:l(()=>[t("form",P,[W,Y,J,y(t("input",{type:"text",class:m(["mt-1 focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md mb-4 text-sm md:text-md",e.errors.name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[2]||(s[2]=o=>e.child_form.name=o)},null,2),[[x,e.child_form.name]]),K,t("div",Q,[r(h(C),{class:"w-full rounded-lg shadow-sm mb-4",style:k(e.errors.dob?"--dp-border-color: #FCA5A5":"--dp-border-color: #D1D5DB"),"input-class-name":"date-picker",modelValue:e.child_form.dob,"onUpdate:modelValue":s[3]||(s[3]=o=>e.child_form.dob=o),"enable-time-picker":!1,"auto-apply":!0,format:"dd/MM/yyyy"},null,8,["style","modelValue"])]),X,t("div",ee,[y(t("select",{name:"gender",id:"gender",class:m(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm cursor-pointer",e.errors.gender?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[4]||(s[4]=o=>e.child_form.gender=o),autocomplete:"none"},[te,(i(!0),n(c,null,_(e.$page.props.gender_list,(o,p)=>(i(),n("option",{value:o.id,key:p},a(o.name),9,oe))),128))],2),[[A,e.child_form.gender]])]),se,t("div",ie,[r(f,{onClick:e.addChild,buttonType:"info",class:"px-4 py-2"},{default:l(()=>[e.adding?(i(),n("div",ne,le)):(i(),n("span",ae,"Add"))]),_:1},8,["onClick"]),e.adding?b("",!0):(i(),g(f,{key:0,type:"button",buttonType:"gray",onClick:s[5]||(s[5]=o=>e.show_add_child=!1)},{default:l(()=>[u("Cancel")]),_:1}))])])]),_:1},8,["open","disable_overlay"])):b("",!0)]),_:1})],64))}});export{ke as default};
