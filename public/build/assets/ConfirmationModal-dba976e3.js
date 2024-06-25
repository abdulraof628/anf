import{o as s,s as d,a as t,j as o,w as a,d as e,c,q as m,g as p,t as g,n as C}from"./app-36364665.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{Y as T,_ as B,V as D,h as I,S as M}from"./transition-97f663d9.js";function j(l,n){return s(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])}function A(l,n){return s(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])}function z(l,n){return s(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])}const E={components:{Dialog:T,DialogOverlay:B,DialogTitle:D,TransitionChild:I,TransitionRoot:M,ExclamationIcon:A,InformationCircleIcon:z,ExclamationCircleIcon:j},props:{open:Boolean,confirmationTitle:String,confirmationText:String,confirmationAlert:String,confirmationButton:String,confirmationMethod:String,confirmationRoute:String,confirmationData:[String,Number],preserveScroll:{type:Boolean,default:!0},preserveState:{type:Boolean,default:!1}},data(){return{confirmationClass:"",processing:!1}},updated(){this.confirmationAlert=="info"&&(this.confirmationClass="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"),this.confirmationAlert=="warning"&&(this.confirmationClass="bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-200"),this.confirmationAlert=="danger"&&(this.confirmationClass="bg-red-600 hover:bg-red-700 focus:ring-red-500")},methods:{submit(){this.confirmationMethod=="delete"&&this.$inertia.delete(this.route(this.confirmationRoute,this.confirmationData),{preserveScroll:this.preserveScroll,preserveState:this.preserveState,onStart:()=>this.processing=!0,onSuccess:()=>{this.$emit("close"),this.processing=!1}}),this.confirmationMethod=="post"&&this.$inertia.post(this.route(this.confirmationRoute),{data:this.confirmationData},{preserveScroll:this.preserveScroll,preserveState:this.preserveState,onStart:()=>this.processing=!0,onSuccess:()=>{this.$emit("close"),this.processing=!1}})}}},V={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},R=e("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),N={class:"relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},L={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},H={class:"sm:flex sm:items-start"},O={key:0,class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"},Y={key:1,class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},q={key:2,class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10"},P={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},F={class:"mt-2"},G=["innerHTML"],J={class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},K=["disabled"],Q=["disabled"],U={key:0,class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},W=e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),X=e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),Z=[W,X];function $(l,n,i,ee,r,f){const x=o("DialogOverlay"),u=o("TransitionChild"),_=o("InformationCircleIcon"),w=o("ExclamationIcon"),y=o("ExclamationCircleIcon"),v=o("DialogTitle"),b=o("Dialog"),k=o("TransitionRoot");return s(),d(k,{show:i.open},{default:a(()=>[t(b,{as:"div",class:"fixed z-40 inset-0 overflow-y-auto"},{default:a(()=>[e("div",V,[t(u,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[t(x,{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})]),_:1}),R,t(u,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:a(()=>[e("div",N,[e("div",L,[e("div",H,[i.confirmationAlert=="info"?(s(),c("div",O,[t(_,{class:"h-6 w-6 text-blue-600","aria-hidden":"true"})])):m("",!0),i.confirmationAlert=="danger"?(s(),c("div",Y,[t(w,{class:"h-6 w-6 text-red-600","aria-hidden":"true"})])):m("",!0),i.confirmationAlert=="warning"?(s(),c("div",q,[t(y,{class:"h-6 w-6 text-yellow-600","aria-hidden":"true"})])):m("",!0),e("div",P,[t(v,{as:"h3",class:"text-lg leading-6 font-medium text-gray-900"},{default:a(()=>[p(g(i.confirmationTitle),1)]),_:1}),e("div",F,[e("p",{class:"text-sm text-gray-500",innerHTML:i.confirmationText},null,8,G)])])])]),e("div",J,[e("button",{type:"button",class:C(["w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed",r.confirmationClass]),disabled:r.processing,onClick:n[0]||(n[0]=h=>l.$emit("close"))}," Cancel ",10,K),e("button",{type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed",disabled:r.processing,onClick:n[1]||(n[1]=(...h)=>f.submit&&f.submit(...h))},[r.processing==!0?(s(),c("svg",U,Z)):m("",!0),p(" "+g(r.processing==!1?i.confirmationButton:"Processing"),1)],8,Q)])])]),_:1})])]),_:1})]),_:1},8,["show"])}const ne=S(E,[["render",$]]);export{ne as C};
