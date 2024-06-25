import{o as r,c as n,a as d,u as h,w as l,F as p,H as v,d as o,e as y,q as u,t as a,g as c,n as _,h as w,v as x,i as k,m as M,s as D}from"./app-36364665.js";import{_ as $,a as B}from"./Authenticated-68529a5f.js";import{B as g}from"./Button-6d5538f3.js";import{h as m}from"./moment-a9aaa855.js";import{C}from"./ConfirmationModal-dba976e3.js";import{Z as b}from"./vue-datepicker-1657699b.js";import"./XIcon-435dee85.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-97f663d9.js";import"./keyboard-6cd9e820.js";import"./use-resolve-button-type-3c34a596.js";import"./menu-b4cda8d6.js";import"./simplebar.min-083fb612.js";const T={class:"flex justify-center"},A={class:"flex-1 max-w-xl space-y-4"},V=["onClick"],H={key:0,class:"bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},O={key:1,class:"bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},N={class:"flex items-center text-md font-extrabold mb-1 text-center space-x-2"},S={class:"text-sm"},j={class:"text-sm"},z={class:"text-sm mb-3"},Y={class:"text-sm text-gray-500"},F={class:"text-sm text-gray-500 mb-3"},R=["onClick"],Z=o("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"},null,-1),L=[Z],U={key:1,class:"flex justify-center py-10 text-slate-500 text-lg"},G={class:"flex justify-center mb-3"},I=o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"currentColor",viewBox:"0 0 448 512"},[o("path",{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"})],-1),q={class:""},E=o("label",{class:"font-medium text-gray-900 text-sm md:text-md"},"Name",-1),P=o("label",{class:"font-medium text-gray-900 text-sm md:text-md"},"Date of Birth",-1),W={class:"mt-1 flex rounded-md shadow-sm"},J=o("label",{class:"font-medium text-gray-900 text-sm md:text-md"},"Gender",-1),K={class:"mt-1 flex rounded-md shadow-sm"},Q=o("option",{value:""},"-- Select Gender --",-1),X=["value"],ee=o("hr",{class:"my-5"},null,-1),te={class:"flex justify-end items-center space-x-2"},oe={key:0,class:"flex space-x-2"},se=o("svg",{"aria-hidden":"true",class:"inline w-4 h-4 text-gray-200 animate-spin fill-indigo-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),o("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),ie=o("span",null,"Adding...",-1),re=[se,ie],ne={key:1},de={components:{ConfirmationModal:C,Datepicker:b},data(){return{isOpen:!1,switching:!1,confirmationAlert:"",confirmationTitle:"",confirmationText:"",confirmationButton:"",confirmationMethod:"",confirmationRoute:"",confirmationData:"",show_add_child:!1,adding:!1,disable_overlay:!1,child_form:{name:"",gender:"",dob:""},errors:[]}},methods:{deleteChild(i){console.log(i),this.confirmationAlert="danger",this.confirmationTitle="Warning",this.confirmationText="This child will be deleted permanently, are you sure want to proceed?",this.confirmationButton="Delete",this.confirmationMethod="delete",this.confirmationRoute="children.destroy",this.confirmationData=i,this.isOpen=!0},showAddChild(){for(let i in this.child_form)this.child_form.hasOwnProperty(i)&&(this.child_form[i]="");this.errors=[],this.show_add_child=!0},addChild(){if(this.adding)return;for(let e in this.child_form)this.child_form[e]==""||!this.child_form[e]?this.errors[e]=!0:this.errors[e]=!1;Object.values(this.child_form).every(e=>e!==null&&e!=="")&&(this.child_form.parent_id=this.$page.props.auth.user.ID,this.$inertia.post(route("children.store"),this.child_form,{preserveState:!1,preserveScroll:!0,onBefore:e=>{this.adding=!0,this.disable_overlay=!0},onFinish:e=>{this.disable_overlay=!1,this.show_add_child=!1,this.adding=!1}}))},getAge(i){const e=m(i,"YYYY-MM-DD");return m().diff(e,"years")},switchChild(i,e,s){this.switching||i==this.$page.props.current_active_child.child_id||(this.switching=!0,axios.post(route("parent.switch_child",{child_id:i,child_name:e,student_id:s})).then(t=>{t.data&&location.reload()}))}}},be=Object.assign(de,{__name:"Index",setup(i){return(e,s)=>(r(),n(p,null,[d(h(v),{title:"Home"}),d($,null,{default:l(()=>[o("div",T,[o("div",A,[e.$page.props.user_has_children.length?(r(!0),n(p,{key:0},y(e.$page.props.user_has_children,t=>(r(),n("div",{class:"relative flex flex-col items-center px-4 py-4 rounded-2xl border-2 border-gray-400 bg-white shadow-md hover:bg-indigo-50 cursor-pointer",onClick:f=>e.switchChild(t.child_id,t.child_name,t.student_id)},[!e.switching&&t.child_id==e.$page.props.current_active_child.child_id?(r(),n("span",H,"Currently Viewing")):u("",!0),e.switching&&t.child_id==e.$page.props.current_active_child.child_id?(r(),n("span",O,"Switching...")):u("",!0),o("span",N,a(t.child_name),1),o("span",S,[c(a(h(m)(t.child_dob).format("Do MMMM Y"))+" (",1),o("span",j,a(e.getAge(h(m)(t.child_dob).format("DD/MM/Y")))+" years old",1),c(")")]),o("span",z,a(t.child_gender),1),o("h3",Y,a(e.$page.props.children_class_info[t.student_id]?e.$page.props.children_class_info[t.student_id].length+" active class":"No class"),1),o("h3",F,a(e.$page.props.children_class_info[t.student_id]?e.$page.props.children_class_info[t.student_id][0].label:"No centre"),1),(r(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",class:_(["h-6 w-6",t.student_id?"text-red-300 cursor-not-allowed":"text-red-600 hover:text-red-700 cursor-pointer"]),fill:"currentColor",onClick:f=>t.student_id?"":e.deleteChild(t.child_id)},L,10,R))],8,V))),256)):(r(),n("div",U," No child has been added. ")),o("div",G,[d(g,{type:"button",buttonType:"info",onClick:e.showAddChild},{default:l(()=>[I,c(" Add Child ")]),_:1},8,["onClick"])])])]),d(C,{show:e.isOpen,onClose:s[0]||(s[0]=t=>e.isOpen=!1),confirmationAlert:e.confirmationAlert,confirmationTitle:e.confirmationTitle,confirmationText:e.confirmationText,confirmationButton:e.confirmationButton,confirmationMethod:e.confirmationMethod,confirmationRoute:e.confirmationRoute,confirmationData:e.confirmationData},null,8,["show","confirmationAlert","confirmationTitle","confirmationText","confirmationButton","confirmationMethod","confirmationRoute","confirmationData"]),d(B,{isOpen:e.show_add_child,onClose:s[5]||(s[5]=t=>e.show_add_child=!1)},{header:l(()=>[c(" Add Child ")]),default:l(()=>[o("div",q,[E,w(o("input",{type:"text",class:_(["mt-1 focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md mb-4 text-sm md:text-md",e.errors.name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[1]||(s[1]=t=>e.child_form.name=t)},null,2),[[x,e.child_form.name]]),P,o("div",W,[d(h(b),{class:"w-full rounded-lg shadow-sm mb-4",style:k(e.errors.dob?"--dp-border-color: #FCA5A5":"--dp-border-color: #D1D5DB"),"input-class-name":"date-picker",modelValue:e.child_form.dob,"onUpdate:modelValue":s[2]||(s[2]=t=>e.child_form.dob=t),"enable-time-picker":!1,"auto-apply":!0,format:"dd/MM/yyyy"},null,8,["style","modelValue"])]),J,o("div",K,[w(o("select",{name:"gender",id:"gender",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm cursor-pointer",e.errors.gender?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[3]||(s[3]=t=>e.child_form.gender=t),autocomplete:"none"},[Q,(r(!0),n(p,null,y(e.$page.props.gender_list,(t,f)=>(r(),n("option",{value:t.id,key:f},a(t.name),9,X))),128))],2),[[M,e.child_form.gender]])]),ee,o("div",te,[d(g,{onClick:e.addChild,buttonType:"info",class:"px-4 py-2"},{default:l(()=>[e.adding?(r(),n("div",oe,re)):(r(),n("span",ne,"Add"))]),_:1},8,["onClick"]),e.adding?u("",!0):(r(),D(g,{key:0,type:"button",buttonType:"gray",onClick:s[4]||(s[4]=t=>e.show_add_child=!1)},{default:l(()=>[c("Cancel")]),_:1}))])])]),_:1},8,["isOpen"])]),_:1})],64))}});export{be as default};
