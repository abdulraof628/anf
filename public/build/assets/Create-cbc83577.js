import{r as z,o as a,c as n,a as m,u as f,w as _,F as h,H as M,L as D,k as B,d as e,l as I,h as y,n as b,m as w,e as u,t as i,g as p,q as v,s as N}from"./app-46d180ee.js";import{B as O}from"./Authenticated-48726f26.js";import{B as k}from"./Button-678e6240.js";import{Z as T}from"./vue-datepicker-e9fb5ae7.js";import{s as S}from"./multiselect-1fc1e33e.js";import{h as C}from"./moment-a9aaa855.js";import{M as V}from"./Modal-ce842e53.js";import{s as H}from"./simplebar.min-45a08813.js";import"./ApplicationLogo-cc1a4557.js";import"./NavLink-f2f3f397.js";import"./XIcon-f9404096.js";import"./Toast-1b30fc2f.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./vue3-perfect-scrollbar-8b5f6b91.js";import"./VueFinalModal.esm-00cbd654.js";const $={class:"md:grid md:grid-cols-2"},F={class:"md:mt-0 md:col-span-2"},Z={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},U={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},E={class:"sm:row-span-3"},R={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},q=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Search Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),G={class:"grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-4"},J={class:"mb-1"},K=e("label",{for:"class_name",class:"block text-sm font-bold text-gray-700"},[p(" Children Name "),e("span",{class:"text-red-500"},"*")],-1),Q={class:"mt-1 flex rounded-md.shadow-sm"},W={class:"mb-1"},X=e("label",{for:"centre",class:"block text-sm font-bold text-gray-700"},[p(" Centre "),e("span",{class:"text-red-500"},"*")],-1),Y={class:"mt-1 flex rounded-md.shadow-sm"},ee={class:"mb-1"},se=e("label",{for:"programme",class:"block text-sm font-bold text-gray-700"},[p(" Start Date "),e("span",{class:"text-red-500"},"*")],-1),te={class:"mt-1 flex rounded-md shadow-sm"},oe={class:"mb-1"},le=e("label",{for:"programme",class:"block text-sm font-bold text-gray-700"},[p(" Programme "),e("span",{class:"text-red-500"},"*")],-1),re={class:"mt-1 flex rounded-md shadow-sm"},ae=e("option",{value:""},"-- Select Programme --",-1),ne=["value"],ie={class:"mb-1"},de=e("label",{for:"class_type",class:"block text-sm font-bold text-gray-700"},[p(" Class Type "),e("span",{class:"text-red-500"},"*")],-1),ce={class:"mt-1 flex rounded-md shadow-sm"},pe=["disabled"],me=e("option",{value:""},"-- Select Type --",-1),fe=["value"],_e={class:"mb-1"},he=e("label",{for:"class_level",class:"block text-sm font-bold text-gray-700"},[p(" Class Level "),e("span",{class:"text-red-500"},"*")],-1),ue={class:"mt-1 flex rounded-md shadow-sm"},be=["disabled"],ge=e("option",{value:""},"-- Select Level --",-1),xe=["value"],ye={class:"mb-1"},ve=e("label",{for:"class_method",class:"block text-sm font-bold text-gray-700"},[p(" Class Method "),e("span",{class:"text-red-500"},"*")],-1),we={class:"mt-1 flex rounded-md shadow-sm"},ke=e("option",{value:""},"-- Select Method --",-1),Ce=["value"],Se={class:"flex items-center justify-end"},Pe={class:"flex space-x-2"},Le={key:0,class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4",ref:"available_classes"},Me={class:"sm:row-span-3"},Te={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},Ve=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Classes Available"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),He={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},je={class:"mb-4"},Ae={class:"overflow-x-auto rounded-t-sm rounded-b-none"},ze={class:"min-w-full"},De=e("thead",{class:"bg-indigo-200"},[e("tr",{class:"px-2"},[e("th",{class:"px-3 py-1 text-left"},"#"),e("th",{class:"px-3 py-1 text-left"},"Day"),e("th",{class:"px-3 py-1 text-left"},"Time"),e("th",{class:"px-3 py-1 text-left"},"Capacity"),e("th",{class:"px-3 py-1 text-center"},"Action")])],-1),Be={key:0},Ie={colspan:"10",class:"py-2 text-center"},Ne={key:0,class:"flex justify-center py-4 items-center space-x-2"},Oe=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-arrow-repeat animate-spin",viewBox:"0 0 16 16"},[e("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),e("path",{"fill-rule":"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"})],-1),$e=e("span",null,"Searching classes...",-1),Fe=[Oe,$e],Ze={key:1},Ue={class:"hover:bg-indigo-50"},Ee={class:"px-3 py-2 text-left"},Re={class:"px-3 py-2 text-left"},qe={class:"px-3 py-2 text-left"},Ge={class:"text-sm font-medium text-gray-900 flex items-center"},Je=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-indigo-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1),Ke={class:"pl-2 whitespace-nowrap"},Qe={class:"px-3 py-2 text-left"},We={class:"px-3 py-2 text-center"},Xe={class:"flex justify-center"},Ye=["checked","disabled","onClick"],es={key:1,class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4",ref:"class_fee"},ss={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},ts=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Fee Confirmation"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),os={class:"space-y-2"},ls={class:"grid grid-cols-1 lg:grid-cols-8 rounded-lg overflow-hidden border-2 bg-white border-indigo-500 border-dashed"},rs={class:"col-span-3 p-6"},as={class:"flex space-x-4 items-center text-lg text-left uppercase leading-8 font-extrabold text-gray-900 sm:leading-9"},ns=e("img",{src:"/images/school.png",class:"w-16 h-16",alt:""},null,-1),is={class:"flex flex-col"},ds={class:"font-semibold text-sm"},cs={class:"mt-3"},ps={class:"grid grid-cols-1 lg:grid-cols-2"},ms={class:"grid grid-cols-1"},fs={class:"flex items-start col-span-1 lg:col-span-1 mb-1"},_s={class:"flex flex-col text-left"},hs={class:"text-sm font-bold"},us={class:"text-sm font-normal"},bs={class:"flex items-start col-span-1 llg:col-span-1 mb-1"},gs={class:"flex flex-col text-left"},xs={class:"text-sm font-bold"},ys={class:"text-sm font-normal"},vs={class:"flex items-start col-span-1 llg:col-span-1 mb-2"},ws={class:"flex flex-col text-left"},ks={class:"text-sm font-bold"},Cs={class:"text-sm font-normal"},Ss={class:"grid grid-cols-1"},Ps={class:"flex items-start lg:col-span-1 mb-1"},Ls={class:"flex flex-col text-left"},Ms=e("span",{class:"text-sm font-bold underline"},"Timetable",-1),Ts={class:"col-span-5 p-3 bg-indigo-50 space-y-4"},Vs={class:"flex flex-col p-6 lg:py-8 lg:px-12 bg-indigo-50"},Hs={class:"flex flex-col bg-white px-4 py-1 rounded-lg border border-gray-500 mb-3"},js={class:"flex flex-wrap items-center space-x-4 mt-3 pb-3 pl-2"},As=e("h3",{class:"flex items-center font-semibold text-sm space-x-2 whitespace-nowrap"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",class:"h-5 w-5"},[e("path",{d:"M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"})]),e("span",null,"Applied Promos")],-1),zs=["onClick"],Ds=e("hr",null,null,-1),Bs={class:"flex space-x-2 items-center justify-center rounded-md bg-indigo-200 px-2.5 py-1 font-semibold text-indigo-800 transform hover:scale-105 duration-200"},Is={class:"whitespace-nowrap text-xs"},Ns=["onClick"],Os=e("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1),$s=[Os],Fs={key:1,class:"py-2"},Zs=e("span",{class:"text-xs font-semibold text-blue-500"},"No Promo applied.",-1),Us=[Zs],Es={class:"flex flex-col gap-4 justify-center text-xl leading-none font-extrabold text-gray-900"},Rs={class:"flex"},qs=["id","onClick","checked"],Gs=["for"],Js={class:"flex"},Ks=["id","onClick","checked"],Qs=["for"],Ws={class:"flex justify-center items-center"},Xs={class:"font-brown"},Ys=e("span",{class:"leading-7 font-medium text-gray-700"},"/month",-1),et={key:2,class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4",ref:"class_fee"},st=e("div",{class:"p-2 bg-white border border-gray-200 rounded-lg shadow-md"},[e("div",{id:"alert-border-1",class:"flex items-center p-4 text-blue-800 border-t-4 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800",role:"alert"},[e("svg",{class:"flex-shrink-0 w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})]),e("div",{class:"ms-3 text-sm font-medium"}," No classes selected. ")])],-1),tt=[st],ot={key:3,class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4",ref:"class_fee"},lt=e("div",{class:"p-2 bg-white border border-gray-200 rounded-lg shadow-md"},[e("div",{id:"alert-border-1",class:"flex items-center p-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800",role:"alert"},[e("svg",{class:"flex-shrink-0 w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})]),e("div",{class:"ms-3 text-sm font-medium"}," Fee is not available for the selected classes. ")])],-1),rt=[lt],at={key:4,class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},nt={class:"sm:row-span-3"},it={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},dt={class:"flex justify-end space-x-2"},ct={class:"flex items-center justify-between py-3 px-4 border-b rounded-t font-semibold"},pt=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Add Promos ",-1),mt=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ft=[mt],_t={class:"p-6"},ht={class:"mb-4"},ut={class:"mt-1 flex rounded-md.shadow-sm"},bt={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},gt={components:{Head:M,Link:D,Datepicker:T,Multiselect:S,Modal:V,simplebar:H},props:{centre_id:String},data(){return{open_promo_modal:!1,disable_check_box:!1,fetching_fee:!1,no_fee_found:!1,total_amount:0,errors:{child:!1,centre:!1,admission_date:!1,programme:!1,class_type:!1,programme:!1,level:!1,class_method:!1},disable:{class_type:!0,class_levels:!0},list:{students:[],class_types:[],class_levels:[],available_classes:[]},searching:{student:!1,class:!1,fee:!1},enable_container:{available_classes:!1,show_fee:!1},search_form:{programme_id:"",class_type:"",class_level:"",class_method:""},form:{date_admission:"",children_id:"",centre_id:"",fee:[]},selected_promo:{promo_id:"",fee_index:""},selected_plus_class:{}}},watch:{"search_form.programme_id":{handler(){this.search_form.programme_id&&(this.disable.class_type=!0,this.disable.class_levels=!0,this.search_form.class_type="",this.search_form.class_level="",axios.get(route("classes.get_class_types"),{params:{programme_id:this.search_form.programme_id}}).then(o=>{this.list.class_types=o.data,this.disable.class_type=!1}))},deep:!0},"search_form.class_type":{handler(){this.search_form.programme_id&&this.search_form.class_type&&(this.disable.class_levels=!0,this.search_form.class_level="",axios.get(route("classes.get_class_levels"),{params:{programme_id:this.search_form.programme_id,class_type:this.search_form.class_type}}).then(o=>{this.list.class_levels=o.data,this.disable.class_levels=!1}))},deep:!0},"form.fee":{handler(){this.total_amount=0;for(const o of this.form.fee){const{include_registration_fee:s,registration_fee:l,include_material_fee:d,material_fee:t,programme_fee:r,promos:c}=o.fee_info,P=s?Number(l):0,L=d?Number(t):0;console.log(c);const j=c.reduce((g,x)=>x.type_id===1?g+x.value:g,0),A=c.reduce((g,x)=>x.type_id===2?g+x.value:g,0);this.total_amount=Number(r)-A-this.total_amount*j/100+Number(P)+Number(L)}},deep:!0}},methods:{submit(){this.$inertia.post(route("classes.store"),this.form,{preserveState:!0})},findChildren(o){B(s=>"400ms")(10),o&&(this.searching.student=!0,axios.get(route("children.find"),{params:{keyword:o}}).then(s=>{this.list.students=s.data,this.searching.student=!1}))},findClasses(){this.errors.child=!this.form.children_id,this.errors.centre=!this.form.centre_id,this.errors.admission_date=!this.form.date_admission,this.errors.programme=!this.search_form.programme_id,this.errors.class_type=!this.search_form.class_type,this.errors.level=!this.search_form.class_level,this.errors.class_method=!this.search_form.class_method,this.form.children_id&&this.form.centre_id&&this.search_form.programme_id&&this.search_form.class_level&&this.search_form.class_type&&this.search_form.class_method&&(this.searching.class=!0,this.enable_container.show_fee=!1,this.list.available_classes=[],axios.get(route("classes.find"),{params:{centre_id:this.form.centre_id,programme_id:this.search_form.programme_id,class_method:this.search_form.class_method,class_level:this.search_form.class_level,class_type:this.search_form.class_type}}).then(o=>{this.list.available_classes=o.data,this.enable_container.available_classes=!0,this.searching.class=!1,this.scrollToElement("available_classes")}))},getPlusFee(o,s,l,d,t){this.fetching_fee||this.disable_check_box||(this.disable_check_box=!0,o.target.checked?(this.selected_plus_class[d]||(this.selected_plus_class[d]=[]),this.selected_plus_class[d].push(s)):(this.selected_plus_class[d].length==1&&(this.selected_plus_class[d]=[],this.no_fee_found=!1),this.selected_plus_class[d]=this.selected_plus_class[d].filter(r=>r!==s)),this.form.fee=this.form.fee.filter(r=>r.fee_info.programme_id!==d),this.selected_plus_class[d].length?(this.fetching_fee=!0,axios.get(route("programmes.get_fee"),{params:{class_type:this.search_form.class_type,class_count:this.selected_plus_class[d].length,classes:this.selected_plus_class[d],programme_level_id:t}}).then(r=>{r.data.fee_info&&this.form.fee.push(r.data),this.scrollToElement("class_fee"),this.searching.fee=!1,this.disable_check_box=!1,this.fetching_fee=!1}).catch(r=>{this.searching.fee=!1,this.disable_check_box=!1,this.fetching_fee=!1,this.no_fee_found=!0})):this.disable_check_box=!1)},clearStudents(){this.list.students=[]},scrollToElement(o){const s=this.$refs[o];s&&s.scrollIntoView({behavior:"smooth"})},deleteFee(o,s){this.form.fee=this.form.fee.filter(l=>l.fee_info.programme_id!==o),s==2&&this.selected_plus_class.hasOwnProperty(o)&&delete this.selected_plus_class[o]},admitStudent(){this.$inertia.post(route("students.store"),this.form)},checkIfClassSelected(o,s){return this.selected_plus_class[s]?this.selected_plus_class[s].includes(o):!1},sumMaterialFee(o,s,l){return o?Number(s)+Number(l):Number(l)},showPromoModal(o){this.selected_promo.promo_id="",this.selected_promo.fee_index=o,this.open_promo_modal=!0},addPromo(){const o=this.$page.props.promos.find(l=>l.promo_id===this.selected_promo.promo_id);!this.form.fee[this.selected_promo.fee_index].fee_info.promos.find(l=>l.promo_id===this.selected_promo.promo_id)&&o&&this.form.fee[this.selected_promo.fee_index].fee_info.promos.push({promo_id:parseInt(o.promo_id),promo_name:o.promo_name,type_id:parseInt(o.type_id),type_name:o.type_name,value:parseInt(o.value),duration_id:parseInt(o.type_id),duration_name:o.duration_name,duration_count:parseInt(o.duration_count),duration_remaining:parseInt(o.duration_count)}),this.open_promo_modal=!1},deletePromo(o,s){this.form.fee[o].fee_info.promos.splice(s,1)},calculateTotal(o,s){const l=this.form.fee[o].fee_info.promos.reduce((t,r)=>r.type_id===1?t+r.value:t,0),d=this.form.fee[o].fee_info.promos.reduce((t,r)=>r.type_id===2?t+r.value:t,0);return s-d-s*l/100}},mounted(){const s=new Date().toISOString().substring(0,10);this.form.date_admission=`${s}T05:59:00.000Z`}},Dt=Object.assign(gt,{__name:"Create",setup(o){return(s,l)=>{const d=z("debounce");return a(),n(h,null,[m(f(M),{title:"Students"}),m(O,null,{header:_(()=>[]),default:_(()=>[e("div",$,[e("div",F,[e("form",{onSubmit:l[7]||(l[7]=I((...t)=>s.submit&&s.submit(...t),["prevent"]))},[e("div",Z,[e("div",U,[e("div",E,[e("div",R,[q,e("div",G,[e("div",J,[K,e("div",Q,[y(m(f(S),{modelValue:s.form.children_id,"onUpdate:modelValue":l[0]||(l[0]=t=>s.form.children_id=t),onClose:s.clearStudents,valueProp:"id",loading:s.searching.student,placeholder:"Please enter some keywords",options:s.list.students,searchable:!0,noOptionsText:"Nothing found",noResultsText:"Nothing found",clearOnSelect:!0,canClear:!1,canDeselect:!1,"internal-search":!1,trackBy:"name",label:"name",classes:{container:s.errors.child?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white text-base leading-snug outline-none":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white text-base leading-snug outline-none",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","onClose","loading","options","classes"]),[[d,s.findChildren]])])]),e("div",W,[X,e("div",Y,[m(f(S),{modelValue:s.form.centre_id,"onUpdate:modelValue":l[1]||(l[1]=t=>s.form.centre_id=t),valueProp:"ID",searchable:!0,options:s.$page.props.allowed_centres,clearOnSelect:!0,canClear:!1,canDeselect:!1,trackBy:"label",label:"label",classes:{container:s.errors.centre?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white text-base leading-snug outline-none":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white text-base leading-snug outline-none",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])]),e("div",ee,[se,e("div",te,[m(f(T),{class:b(["w-full rounded-lg shadow-sm",(s.errors.admission_date,"--dp-border-color: #ff6f60")]),disabled:"disabled","input-class-name":"student-date-picker focus:ring-0",modelValue:s.form.date_admission,"onUpdate:modelValue":l[2]||(l[2]=t=>s.form.date_admission=t),"enable-time-picker":!1,"auto-apply":!0,format:"dd/MM/yyyy"},null,8,["class","modelValue"])])]),e("div",oe,[le,e("div",re,[y(e("select",{name:"programme",id:"programme",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.errors.programme?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":l[3]||(l[3]=t=>s.search_form.programme_id=t),autocomplete:"off"},[ae,(a(!0),n(h,null,u(s.$page.props.programme_list,(t,r)=>(a(),n("option",{value:t.id,key:r},i(t.name)+" ("+i(t.country_name)+")",9,ne))),128))],2),[[w,s.search_form.programme_id]])])]),e("div",ie,[de,e("div",ce,[y(e("select",{name:"class_type",id:"class_type",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",[s.errors.class_type?"border-red-300":"border-gray-300",s.disable.class_type?"bg-gray-50":""]]),"onUpdate:modelValue":l[4]||(l[4]=t=>s.search_form.class_type=t),autocomplete:"off",disabled:s.disable.class_type},[me,(a(!0),n(h,null,u(s.list.class_types,(t,r)=>(a(),n("option",{value:t.id,key:r},i(t.name),9,fe))),128))],10,pe),[[w,s.search_form.class_type]])])]),e("div",_e,[he,e("div",ue,[y(e("select",{name:"class_level",id:"class_level",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",[s.errors.level?"border-red-300":"border-gray-300",s.disable.class_levels?"bg-gray-50":""]]),"onUpdate:modelValue":l[5]||(l[5]=t=>s.search_form.class_level=t),autocomplete:"off",disabled:s.disable.class_levels},[ge,(a(!0),n(h,null,u(s.list.class_levels,(t,r)=>(a(),n("option",{value:t.level,key:t},i(t.level),9,xe))),128))],10,be),[[w,s.search_form.class_level]])])]),e("div",ye,[ve,e("div",we,[y(e("select",{name:"class_method",id:"class_method",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.errors.class_method?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":l[6]||(l[6]=t=>s.search_form.class_method=t),autocomplete:"off"},[ke,(a(!0),n(h,null,u(s.$page.props.method_list,(t,r)=>(a(),n("option",{value:t.id,key:r},i(t.name),9,Ce))),128))],2),[[w,s.search_form.class_method]])])])]),e("div",Se,[e("div",Pe,[m(k,{onClick:s.findClasses},{default:_(()=>[p("Search Classes")]),_:1},8,["onClick"])])])])])]),s.enable_container.available_classes?(a(),n("div",Le,[e("div",Me,[e("div",Te,[Ve,e("div",He,[e("div",je,[e("div",Ae,[e("table",ze,[De,e("tbody",null,[s.list.available_classes.length?(a(!0),n(h,{key:1},u(s.list.available_classes,(t,r)=>(a(),n("tr",Ue,[e("td",Ee,i(r+1),1),e("td",Re,i(t.class_day),1),e("td",qe,[e("div",Ge,[Je,e("span",Ke,i(f(C)(t.start_time,"HH:mm:ss").format("h:mm A"))+" - "+i(f(C)(t.end_time,"HH:mm:ss").format("h:mm A")),1)])]),e("td",Qe,i(t.capacity),1),e("td",We,[e("div",Xe,[e("input",{class:b(["h-5 w-5 border border-indigo-300 rounded-sm focus:ring-offset-0 focus:ring-0 checked:bg-gray focus:bg-white transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer",s.disable_check_box?"bg-gray-100":"bg-white"]),type:"checkbox",checked:s.checkIfClassSelected(t.class_id,t.programme_id),disabled:s.disable_check_box,onClick:c=>s.getPlusFee(c,t.class_id,t.class_type,t.programme_id,t.programme_level_id)},null,10,Ye)])])]))),256)):(a(),n("tr",Be,[e("td",Ie,[s.searching.class?(a(),n("div",Ne,Fe)):v("",!0),!s.searching.class&&!s.list.available_classes.length?(a(),n("span",Ze,"No classes available")):v("",!0)])]))])])])])])])])],512)):v("",!0),s.form.fee.length?(a(),n("div",es,[e("div",ss,[ts,e("div",os,[(a(!0),n(h,null,u(s.form.fee,(t,r)=>(a(),n("div",ls,[e("div",rs,[e("h3",as,[ns,e("span",is,[e("span",null,i(t.fee_info.programme_name),1),e("span",ds,"Level "+i(t.fee_info.programme_level),1)])]),e("div",cs,[e("div",ps,[e("ul",ms,[e("li",fs,[e("p",_s,[e("span",hs,[p("Centre : "),e("span",us,i(t.fee_info.centre_name),1)])])]),e("li",bs,[e("p",gs,[e("span",xs,[p("Fee : "),e("span",ys,i(t.fee_info.programme_type),1)])])]),e("li",vs,[e("p",ws,[e("span",ks,[p("Class Method : "),e("span",Cs,i(t.fee_info.class_method),1)])])])]),e("ul",Ss,[e("li",Ps,[e("p",Ls,[Ms,(a(!0),n(h,null,u(t.classes,c=>(a(),n("span",{class:"text-sm font-normal",key:c.id},i(c.class_day)+" ("+i(f(C)(c.start_time,"HH:mm:ss").format("h:mm A"))+" - "+i(f(C)(c.end_time,"HH:mm:ss").format("h:mm A"))+")",1))),128))])])])])])]),e("div",Ts,[e("div",Vs,[e("div",Hs,[e("div",js,[As,e("div",{onClick:c=>s.showPromoModal(r),class:"font-semibold text-xs text-indigo-500 cursor-pointer px-2 py-1 rounded border border-dashed border-indigo-500 bg-white hover:bg-indigo-50 whitespace-nowrap"}," Add Promo ",8,zs)]),Ds,t.fee_info.promos.length?(a(),N(f(H),{key:0,"data-simplebar-auto-hide":"true",class:"mt-3 pb-3"},{default:_(()=>[(a(!0),n(h,null,u(t.fee_info.promos,(c,P)=>(a(),n("span",Bs,[e("p",Is,i(c.promo_name),1),(a(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",onClick:L=>s.deletePromo(r,P),class:"h-4 w-4 text-red-600 cursor-pointer"},$s,8,Ns))]))),256))]),_:2},1024)):(a(),n("div",Fs,Us))]),e("div",Es,[e("div",Rs,[e("input",{id:"registration_fee"+r,type:"checkbox",class:"bg-white border-indigo-700 focus:ring-0 focus:ring-gray-400 h-5 w-5 rounded",onClick:c=>t.fee_info.include_registration_fee=!t.fee_info.include_registration_fee,checked:t.fee_info.include_registration_fee},null,8,qs),e("label",{for:"registration_fee"+r,class:"text-sm ml-3 font-medium leading-5 text-gray-800 select-none cursor-pointer"},"Registration Fee: "+i(t.fee_info.currency_symbol)+i(t.fee_info.registration_fee),9,Gs)]),e("div",Js,[e("input",{id:"material_fee"+r,type:"checkbox",class:"bg-white border-indigo-700 focus:ring-0 focus:ring-gray-400 h-5 w-5 rounded",onClick:c=>t.fee_info.include_material_fee=!t.fee_info.include_material_fee,checked:t.fee_info.include_material_fee},null,8,Ks),e("label",{for:"material_fee"+r,class:"text-sm ml-3 font-medium leading-5 text-gray-800 select-none cursor-pointer"},"Material Fee: "+i(t.fee_info.currency_symbol)+i(t.fee_info.material_fee),9,Qs)]),e("div",Ws,[e("span",Xs,i(t.fee_info.currency_symbol)+i(s.calculateTotal(r,t.fee_info.programme_fee)),1),Ys])])])])]))),256))])])],512)):s.enable_container.available_classes&&!s.form.fee.length&&!s.no_fee_found?(a(),n("div",et,tt,512)):s.enable_container.available_classes&&s.no_fee_found?(a(),n("div",ot,rt,512)):v("",!0),s.form.fee.length?(a(),n("div",at,[e("div",nt,[e("div",it,[e("div",dt,[m(k,{buttonType:"gray"},{default:_(()=>[p("Cancel")]),_:1}),m(k,{buttonType:"info",onClick:s.admitStudent},{default:_(()=>[p("Admit")]),_:1},8,["onClick"])])])])])):v("",!0)])],32)])]),m(V,{showModal:s.open_promo_modal,onHideModal:l[11]||(l[11]=t=>s.open_promo_modal=!1),modalType:"xs"},{header:_(()=>[e("div",ct,[pt,e("button",{type:"button",onClick:l[8]||(l[8]=t=>s.open_promo_modal=!1),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},ft)])]),content:_(()=>[e("div",_t,[e("div",ht,[e("div",ut,[m(f(S),{modelValue:s.selected_promo.promo_id,"onUpdate:modelValue":l[9]||(l[9]=t=>s.selected_promo.promo_id=t),valueProp:"promo_id",searchable:!0,options:s.$page.props.promos,clearOnSelect:!0,canClear:!1,canDeselect:!1,placeholder:"Select a promo",trackBy:"promo_name",label:"promo_name",classes:{container:s.errors.centre?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white text-base leading-snug outline-none":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white text-base leading-snug outline-none",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])])])]),footer:_(()=>[e("div",bt,[m(k,{buttonType:"info",onClick:l[10]||(l[10]=t=>s.addPromo())},{default:_(()=>[p("Apply")]),_:1})])]),_:1},8,["showModal"])]),_:1})],64)}}});export{Dt as default};
