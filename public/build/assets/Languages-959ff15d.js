import{o as l,c as d,d as e,b as n,w as r,j as w,F as p,h as y,m as k,ab as C,k as i,t as _,f as u,l as f,n as g}from"./app-f1d7210f.js";import{B as m}from"./Button-64d43155.js";import"./toggle-171c3558.js";import{P as b}from"./Pagination-59017f36.js";import{M as v}from"./Modal-5a19c023.js";import{C as x}from"./ConfirmationModal-3601687a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./moment-fbc5633a.js";import"./VueFinalModal.esm-1818246b.js";/* empty css                                                              */import"./transition-627c7512.js";const V={class:"pt-6"},$={class:"flex mb-3"},F={class:"overflow-hidden"},L={class:"min-w-full divide-y divide-gray-200"},T=e("thead",{class:"bg-gray-200"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",width:"3"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",width:"5"},"Action")])],-1),B={class:"bg-white divide-y divide-gray-200"},E={key:0},M=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),N=[M],D={class:"px-6 py-4 whitespace-nowrap"},I={class:"text-sm text-gray-700"},j={class:"px-6 py-4 whitespace-nowrap"},R={class:"text-sm font-medium text-gray-900"},S={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},U={class:"flex justify-center"},A={class:"flex pr-1"},P={class:"flex"},z=e("h3",{class:"text-gray-800 tracking-wide font-semibold text-lg"}," Language Setting ",-1),G={class:"w-full md:w-[48rem] p-4 overflow-y-auto"},O={class:"grid grid-cols-1 gap-4"},H={class:""},q=e("label",{for:"language_name",class:"block text-sm text-gray-700 font-bold"},[i(" Name "),e("span",{class:"text-red-500"},"*")],-1),J={class:"mt-1 flex rounded-md shadow-sm"},K={class:""},Q=e("label",{for:"guideline_header",class:"block text-sm text-gray-700 font-bold"},[i(" Guideline Title "),e("span",{class:"text-red-500"},"*")],-1),W={class:"mt-1 flex rounded-md shadow-sm"},X={class:""},Y=e("label",{for:"guideline_body",class:"block text-sm text-gray-700 font-bold"},[i(" Guideline Body "),e("span",{class:"text-red-500"},"*"),i(" (Press enter to break a new line) ")],-1),Z={class:"mt-1 flex rounded-md shadow-sm"},ee={class:""},te=e("label",{for:"final_message",class:"block text-sm text-gray-700 font-bold"},[i(" Final Message "),e("span",{class:"text-red-500"},"*")],-1),se={class:"mt-1 flex rounded-md shadow-sm"},oe={class:"space-y-2"},ae=e("label",{for:"email_input",class:"block text-sm text-gray-700 font-bold"}," PIC Emails",-1),ie={class:"mt-1 flex rounded-md shadow-sm space-x-2"},re={class:""},le={class:"w-full text-sm font-medium divide-dashed divide-y text-gray-900 bg-white border border-gray-200 rounded-lg"},ne={class:"w-full px-4 py-2 space-x-4"},de=["onClick"],me={key:1,class:"w-full px-4 py-2 space-x-4 bg-gray-100"},ue=e("span",{class:"font-semibold text-gray-600 italic text-sm"},"No email has been added.",-1),fe=[ue],ge={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},ce={components:{Pagination:b,Modal:v,ConfirmationModal:x},data(){return{form_modal:!1,open_delete_modal:!1,confirmation_data:"",confirmation_route:"",processing:!1,errors:{name:!1,guideline_header:!1,guideline_body:!1,final_message:!1,email_input:!1},form:{id:"",name:"",guideline_header:"",guideline_body:"",final_message:"",email_input:"",pic_emails:[]}}},methods:{addLanguage(){this.clearForm(),this.form_modal=!0},editLanguage(s){this.processing||(this.processing=!0,this.clearForm(),C.get(route("dt.settings.languages.edit"),{params:{language_id:s}}).then(t=>{this.form.id=t.data.language_info.id,this.form.name=t.data.language_info.name,this.form.guideline_header=t.data.language_info.guideline_header,this.form.guideline_body=t.data.language_info.guideline_body,this.form.final_message=t.data.language_info.final_message,this.form.pic_emails=t.data.pic_emails,this.form_modal=!0,this.processing=!1}).catch(t=>{this.processing=!1}))},deleteLanguage(s){this.confirmation_data="dt.settings.languages.destroy",this.confirmation_route=s,this.open_delete_modal=!0},store(){if(this.processing)return;this.validateForm()&&(this.processing=!0,this.$inertia.post(route("dt.settings.languages.store"),this.form,{onSuccess:t=>{this.form_modal=!1,this.processing=!1}}))},update(){if(this.processing)return;this.validateForm()&&(this.processing=!0,this.$inertia.post(route("dt.settings.languages.update"),this.form,{onSuccess:t=>{this.form_modal=!1,this.processing=!1}}))},addEmail(){this.validateEmailInput()&&(this.form.pic_emails.push({email:this.form.email_input}),this.form.email_input="")},deleteEmail(s){this.form.pic_emails.splice(s,1)},clearForm(){this.form.id="",this.form.name="",this.form.guideline_header="",this.form.guideline_body="",this.form.final_message="",this.form.email_input="",this.form.pic_emails=[];for(let s in this.errors)this.errors[s]=!1},validateForm(){for(let s in this.errors)this.errors[s]=!1;for(let s in this.form)s==="id"||s==="email_input"||s==="pic_emails"||this.form[s].trim()===""&&(this.errors[s]=!0);return Object.values(this.errors).every(s=>!s)},validateEmailInput(){const t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email_input);return this.errors.email_input=!t,t}}},$e=Object.assign(ce,{__name:"Languages",setup(s){return(t,a)=>(l(),d(p,null,[e("div",V,[e("div",$,[n(m,{type:"button",onClick:t.addLanguage},{default:r(()=>[i("New language")]),_:1},8,["onClick"])]),e("div",F,[e("table",L,[T,e("tbody",B,[t.$page.props.languages.data.length?w("",!0):(l(),d("tr",E,N)),(l(!0),d(p,null,y(t.$page.props.languages.data,(o,c)=>(l(),d("tr",{class:"hover:bg-gray-100",key:o.id},[e("td",D,[e("div",I,_(++c),1)]),e("td",j,[e("div",R,_(o.name),1)]),e("td",S,[e("div",U,[e("div",A,[n(m,{buttonType:"warning",onClick:h=>t.editLanguage(o.id)},{default:r(()=>[i(" Edit ")]),_:2},1032,["onClick"])]),e("div",P,[n(m,{buttonType:"danger",onClick:h=>t.deleteLanguage(o.id)},{default:r(()=>[i(" Delete ")]),_:2},1032,["onClick"])])])])]))),128))])])]),n(b,{page_data:t.$page.props.languages,params:t.params},null,8,["page_data","params"])]),(l(),k(v,{showModal:t.form_modal,modalType:"sm",onHideModal:a[8]||(a[8]=o=>t.form_modal=!1),key:t.form.id},{header:r(()=>[z]),content:r(()=>[e("div",G,[e("div",O,[e("div",H,[q,e("div",J,[u(e("input",{type:"text",name:"language_name",id:"language_name",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":a[0]||(a[0]=o=>t.form.name=o),autocomplete:"none"},null,2),[[f,t.form.name]])])]),e("div",K,[Q,e("div",W,[u(e("input",{type:"text",name:"guideline_header",id:"guideline_header",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.guideline_header?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":a[1]||(a[1]=o=>t.form.guideline_header=o),autocomplete:"none"},null,2),[[f,t.form.guideline_header]])])]),e("div",X,[Y,e("div",Z,[u(e("textarea",{rows:"6",name:"guideline_body",id:"guideline_body",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.guideline_body?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":a[2]||(a[2]=o=>t.form.guideline_body=o),autocomplete:"none"},null,2),[[f,t.form.guideline_body]])])]),e("div",ee,[te,e("div",se,[u(e("textarea",{rows:"3",name:"final_message",id:"final_message",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.final_message?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":a[3]||(a[3]=o=>t.form.final_message=o),autocomplete:"none"},null,2),[[f,t.form.final_message]])])]),e("div",oe,[ae,e("div",ie,[u(e("input",{type:"email",name:"email_input",id:"email_input",class:g(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.email_input?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":a[4]||(a[4]=o=>t.form.email_input=o),autocomplete:"none"},null,2),[[f,t.form.email_input]]),n(m,{class:"py-2.5 px-4",onClick:a[5]||(a[5]=o=>t.addEmail())},{default:r(()=>[i("Add")]),_:1})]),e("div",re,[e("ul",le,[t.form.pic_emails.length?(l(!0),d(p,{key:0},y(t.form.pic_emails,(o,c)=>(l(),d("li",ne,[e("span",null,_(o.email),1),e("span",{class:"text-xs cursor-pointer uppercase text-red-500 hover:underline",onClick:h=>t.deleteEmail(c)},"Delete",8,de)]))),256)):(l(),d("li",me,fe))])])])])])]),footer:r(()=>[e("div",ge,[n(m,{type:"button",buttonType:"info",onClick:a[6]||(a[6]=o=>t.form.id!=""?t.update():t.store())},{default:r(()=>[i("Save")]),_:1}),n(m,{buttonType:"gray",onClick:a[7]||(a[7]=o=>t.form_modal=!1)},{default:r(()=>[i("Cancel")]),_:1})])]),_:1},8,["showModal"])),n(x,{show:t.open_delete_modal,onClose:a[9]||(a[9]=o=>t.open_delete_modal=!1),confirmationAlert:"danger",confirmationTitle:"Delete Language",confirmationText:"Are you sure want to delete this language?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmation_data,confirmationData:t.confirmation_route},null,8,["show","confirmationRoute","confirmationData"])],64))}});export{$e as default};
