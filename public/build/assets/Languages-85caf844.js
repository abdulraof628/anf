import{o as n,c as d,d as e,a as r,w as l,p as w,F as p,e as y,q as k,b as C,g as i,t as _,h as u,v as f,n as g}from"./app-61ed3a80.js";import{B as m}from"./Button-c2bd8ac3.js";import"./toggle-fb60d639.js";import{P as b}from"./Pagination-27299050.js";import{M as v}from"./Modal-49d2cab1.js";import{C as x}from"./ConfirmationModal-f5769a75.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./moment-fbc5633a.js";import"./VueFinalModal.esm-2fcfdfe3.js";import"./transition-d47f8060.js";const $={class:"pt-6"},L={class:"flex mb-3"},V={class:"overflow-hidden"},B={class:"min-w-full divide-y divide-gray-200"},F=e("thead",{class:"bg-gray-200"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",width:"3"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",width:"5"},"Action")])],-1),M={class:"bg-white divide-y divide-gray-200"},T={key:0},E=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),N=[E],D={class:"px-6 py-4 whitespace-nowrap"},I={class:"text-sm text-gray-700"},j={class:"px-6 py-4 whitespace-nowrap"},R={class:"text-sm font-medium text-gray-900"},S={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},U={class:"flex justify-center"},A={class:"flex pr-1"},P={class:"flex"},z={class:"flex items-center justify-between py-3 px-4 border-b rounded-t font-semibold"},G=e("h3",{class:"text-gray-800 tracking-wide font-semibold text-lg"}," Language Setting ",-1),O=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),q=[O],H={class:"w-full p-4 overflow-y-auto"},J={class:"grid grid-cols-1 gap-4"},K={class:""},Q=e("label",{for:"language_name",class:"block text-sm text-gray-700 font-bold"},[i(" Name "),e("span",{class:"text-red-500"},"*")],-1),W={class:"mt-1 flex rounded-md shadow-sm"},X={class:""},Y=e("label",{for:"guideline_header",class:"block text-sm text-gray-700 font-bold"},[i(" Guideline Title "),e("span",{class:"text-red-500"},"*")],-1),Z={class:"mt-1 flex rounded-md shadow-sm"},ee={class:""},te=e("label",{for:"guideline_body",class:"block text-sm text-gray-700 font-bold"},[i(" Guideline Body "),e("span",{class:"text-red-500"},"*"),i(" (Press enter to break a new line) ")],-1),se={class:"mt-1 flex rounded-md shadow-sm"},oe={class:""},ae=e("label",{for:"final_message",class:"block text-sm text-gray-700 font-bold"},[i(" Final Message "),e("span",{class:"text-red-500"},"*")],-1),ie={class:"mt-1 flex rounded-md shadow-sm"},le={class:"space-y-2"},ne=e("label",{for:"email_input",class:"block text-sm text-gray-700 font-bold"}," PIC Emails",-1),re={class:"mt-1 flex rounded-md shadow-sm space-x-2"},de={class:""},me={class:"w-full text-sm font-medium divide-dashed divide-y text-gray-900 bg-white border border-gray-200 rounded-lg"},ue={class:"w-full px-4 py-2 space-x-4"},fe=["onClick"],ge={key:1,class:"w-full px-4 py-2 space-x-4 bg-gray-100"},ce=e("span",{class:"font-semibold text-gray-600 italic text-sm"},"No email has been added.",-1),pe=[ce],_e={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},he={components:{Pagination:b,Modal:v,ConfirmationModal:x},data(){return{form_modal:!1,open_delete_modal:!1,confirmation_data:"",confirmation_route:"",processing:!1,errors:{name:!1,guideline_header:!1,guideline_body:!1,final_message:!1,email_input:!1},form:{id:"",name:"",guideline_header:"",guideline_body:"",final_message:"",email_input:"",pic_emails:[]}}},methods:{addLanguage(){this.clearForm(),this.form_modal=!0},editLanguage(s){this.processing||(this.processing=!0,this.clearForm(),C.get(route("dt.settings.languages.edit"),{params:{language_id:s}}).then(t=>{this.form.id=t.data.language_info.id,this.form.name=t.data.language_info.name,this.form.guideline_header=t.data.language_info.guideline_header,this.form.guideline_body=t.data.language_info.guideline_body,this.form.final_message=t.data.language_info.final_message,this.form.pic_emails=t.data.pic_emails,this.form_modal=!0,this.processing=!1}).catch(t=>{this.processing=!1}))},deleteLanguage(s){this.confirmation_data="dt.settings.languages.destroy",this.confirmation_route=s,this.open_delete_modal=!0},store(){if(this.processing)return;this.validateForm()&&(this.processing=!0,this.$inertia.post(route("dt.settings.languages.store"),this.form,{onSuccess:t=>{this.form_modal=!1,this.processing=!1}}))},update(){if(this.processing)return;this.validateForm()&&(this.processing=!0,this.$inertia.post(route("dt.settings.languages.update"),this.form,{onSuccess:t=>{this.form_modal=!1,this.processing=!1}}))},addEmail(){this.validateEmailInput()&&(this.form.pic_emails.push({email:this.form.email_input}),this.form.email_input="")},deleteEmail(s){this.form.pic_emails.splice(s,1)},clearForm(){this.form.id="",this.form.name="",this.form.guideline_header="",this.form.guideline_body="",this.form.final_message="",this.form.email_input="",this.form.pic_emails=[];for(let s in this.errors)this.errors[s]=!1},validateForm(){for(let s in this.errors)this.errors[s]=!1;for(let s in this.form)s==="id"||s==="email_input"||s==="pic_emails"||this.form[s].trim()===""&&(this.errors[s]=!0);return Object.values(this.errors).every(s=>!s)},validateEmailInput(){const t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email_input);return this.errors.email_input=!t,t}}},Be=Object.assign(he,{__name:"Languages",setup(s){return(t,o)=>(n(),d(p,null,[e("div",$,[e("div",L,[r(m,{type:"button",onClick:t.addLanguage},{default:l(()=>[i("New language")]),_:1},8,["onClick"])]),e("div",V,[e("table",B,[F,e("tbody",M,[t.$page.props.languages.data.length?w("",!0):(n(),d("tr",T,N)),(n(!0),d(p,null,y(t.$page.props.languages.data,(a,c)=>(n(),d("tr",{class:"hover:bg-gray-100",key:a.id},[e("td",D,[e("div",I,_(++c),1)]),e("td",j,[e("div",R,_(a.name),1)]),e("td",S,[e("div",U,[e("div",A,[r(m,{buttonType:"warning",onClick:h=>t.editLanguage(a.id)},{default:l(()=>[i(" Edit ")]),_:2},1032,["onClick"])]),e("div",P,[r(m,{buttonType:"danger",onClick:h=>t.deleteLanguage(a.id)},{default:l(()=>[i(" Delete ")]),_:2},1032,["onClick"])])])])]))),128))])])]),r(b,{page_data:t.$page.props.languages,params:t.params},null,8,["page_data","params"])]),(n(),k(v,{showModal:t.form_modal,modalType:"sm",onHideModal:o[9]||(o[9]=a=>t.form_modal=!1),key:t.form.id},{header:l(()=>[e("div",z,[G,e("button",{type:"button",onClick:o[0]||(o[0]=a=>t.form_modal=!1),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},q)])]),content:l(()=>[e("div",H,[e("div",J,[e("div",K,[Q,e("div",W,[u(e("input",{type:"text",name:"language_name",id:"language_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[1]||(o[1]=a=>t.form.name=a),autocomplete:"none"},null,2),[[f,t.form.name]])])]),e("div",X,[Y,e("div",Z,[u(e("input",{type:"text",name:"guideline_header",id:"guideline_header",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.guideline_header?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[2]||(o[2]=a=>t.form.guideline_header=a),autocomplete:"none"},null,2),[[f,t.form.guideline_header]])])]),e("div",ee,[te,e("div",se,[u(e("textarea",{rows:"6",name:"guideline_body",id:"guideline_body",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.guideline_body?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[3]||(o[3]=a=>t.form.guideline_body=a),autocomplete:"none"},null,2),[[f,t.form.guideline_body]])])]),e("div",oe,[ae,e("div",ie,[u(e("textarea",{rows:"3",name:"final_message",id:"final_message",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.final_message?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[4]||(o[4]=a=>t.form.final_message=a),autocomplete:"none"},null,2),[[f,t.form.final_message]])])]),e("div",le,[ne,e("div",re,[u(e("input",{type:"email",name:"email_input",id:"email_input",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.email_input?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[5]||(o[5]=a=>t.form.email_input=a),autocomplete:"none"},null,2),[[f,t.form.email_input]]),r(m,{class:"py-2.5 px-4",onClick:o[6]||(o[6]=a=>t.addEmail())},{default:l(()=>[i("Add")]),_:1})]),e("div",de,[e("ul",me,[t.form.pic_emails.length?(n(!0),d(p,{key:0},y(t.form.pic_emails,(a,c)=>(n(),d("li",ue,[e("span",null,_(a.email),1),e("span",{class:"text-xs cursor-pointer uppercase text-red-500 hover:underline",onClick:h=>t.deleteEmail(c)},"Delete",8,fe)]))),256)):(n(),d("li",ge,pe))])])])])])]),footer:l(()=>[e("div",_e,[r(m,{type:"button",buttonType:"info",onClick:o[7]||(o[7]=a=>t.form.id!=""?t.update():t.store())},{default:l(()=>[i("Save")]),_:1}),r(m,{buttonType:"gray",onClick:o[8]||(o[8]=a=>t.form_modal=!1)},{default:l(()=>[i("Cancel")]),_:1})])]),_:1},8,["showModal"])),r(x,{show:t.open_delete_modal,onClose:o[10]||(o[10]=a=>t.open_delete_modal=!1),confirmationAlert:"danger",confirmationTitle:"Delete Language",confirmationText:"Are you sure want to delete this language?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmation_data,confirmationData:t.confirmation_route},null,8,["show","confirmationRoute","confirmationData"])],64))}});export{Be as default};
