import{B as M}from"./Authenticated-bbe12484.js";import{H as B,L}from"./@inertiajs-7f289881.js";import{_ as I}from"./Collapsible-107d1ef1.js";import{_ as E}from"./Card-20f395ce.js";import{_ as z,a as H}from"./index-4ab9af7a.js";import{_ as O}from"./AlertTitle-d66c12c2.js";import{_ as J,a as K,b as T,c as w,d as Q,e as y}from"./TableRow-0b515674.js";import{_ as R}from"./DialogModal-3ff68236.js";import{h as N}from"./moment-a9aaa855.js";import{e as j}from"./vue-debounce-ed417ae1.js";import{a as S}from"./axios-1779699b.js";import{e as W}from"./@radix-icons-4975f794.js";import{y as _,x as o,u as d,Q as a,F as $,be as k,t as r,z as l,W as n,K as m,C as g,v as P,J as U}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-c5b8b27a.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-4a86e6ba.js";import"./DialogDescription-be595773.js";import"./lucide-vue-next-53796c49.js";const Z={class:"grid grid-cols-1 gap-2"},G={class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4 p-3"},X={key:0},Y={class:"self-end"},q={class:"grid grid-cols-1 xl:grid-cols-2 gap-2"},ee={ref:"available_classes"},se={key:0,class:"max-h-[26rem] overflow-y-auto"},te={class:"pl-2 whitespace-nowrap"},le={key:1,class:"flex justify-center py-2 text-sm"},oe={ref:"class_fee"},ae={key:0,class:"grid px-3 divide-y select-none"},ie={class:"py-4"},re={class:"flex justify-between mb-3 font-semibold"},ne={class:"text-sm"},de={class:"text-sm"},me={class:"grid gap-2 mb-4 text-xs font-semibold"},_e={class:"flex items-center justify-between"},fe={class:"text-slate-600"},pe={class:"flex items-center justify-between"},ce={class:"text-slate-600"},ue={class:"flex items-center justify-between"},he={class:"text-slate-600"},ge={class:"grid gap-2 mb-3 text-xs font-semibold"},be={class:"flex flex-wrap items-center gap-4"},ve={class:"grid gap-2 mb-3 text-xs font-semibold"},ye={class:"flex items-center space-x-2"},ke=["onClick"],Ce={class:"font-medium"},Ve={key:0,class:"flex flex-wrap gap-2"},xe={class:"flex space-x-2 items-center justify-center rounded-sm bg-indigo-200 px-2.5 py-1 text-indigo-800"},we={class:"whitespace-nowrap text-xs"},Se=["onClick"],$e={key:1,class:""},Pe={key:0,class:"grid gap-2 mb-3 text-xs font-semibold"},Ne={class:"flex flex-col"},Ue={class:"flex items-center space-x-2"},Ae=["for"],Ie={key:0,class:"flex items-center space-x-2 pl-6"},Te=["for"],Fe={key:1,class:"grid gap-2 mb-3 text-xs font-semibold"},je={class:"flex flex-col"},Be={class:"flex items-center space-x-2"},De=["for"],Me={key:0,class:"flex items-center space-x-2 pl-6"},Le=["for"],Ee={class:"grid gap-2 text-xs font-semibold"},ze={class:"flex flex-col"},He={class:"col-span-2 mt-3"},Oe={class:"flex items-center justify-end space-x-2"},Je=["for"],Ke={class:"flex items-center justify-end text-lg space-x-1"},Qe={class:"font-brown"},Re={key:1,class:"flex justify-center py-2 text-sm"},We={key:0},Ze={key:1},Ge={class:"flex justify-end space-x-2"},Xe={components:{Head:B,Link:L},data(){return{processing:{add_student:!1},open_promo_modal:!1,disable_check_box:!1,fetching_fee:!1,no_fee_found:!1,total_amount:0,open:{student_info:!0,student_classes:!1,admission_confirmation:!1},errors:{child:!1,centre:!1,admission_date:!1,programme:!1,class_type:!1,programme:!1,level:!1,class_method:!1},disable:{class_type:!0,class_levels:!0},list:{students:[],class_types:[],class_levels:[],available_classes:[]},searching:{student:!1,class:!1,fee:!1},enable_container:{available_classes:!1,show_fee:!1},search_form:{programme_id:"",class_type:"",class_level:"",class_method:""},form:{date_admission:"",children_id:"",centre_id:"",fee:[]},selected_promo:{promo_id:"",fee_index:""},selected_plus_class:{}}},watch:{"search_form.programme_id":{handler(){this.search_form.programme_id&&(this.disable.class_type=!0,this.disable.class_levels=!0,this.search_form.class_type="",this.search_form.class_level="",S.get(route("classes.get_class_types"),{params:{programme_id:this.search_form.programme_id}}).then(i=>{this.list.class_types=i.data,this.disable.class_type=!1}))},deep:!0},"search_form.class_type":{handler(){this.search_form.programme_id&&this.search_form.class_type&&(this.disable.class_levels=!0,this.search_form.class_level="",S.get(route("classes.get_class_levels"),{params:{programme_id:this.search_form.programme_id,class_type:this.search_form.class_type}}).then(i=>{this.list.class_levels=i.data,this.disable.class_levels=!1}))},deep:!0},"form.fee":{handler(){this.total_amount=0,this.form.fee.forEach(i=>{const{include_registration_fee:s,registration_fee:e,registration_fee_discount:h,include_material_fee:u,material_fee:c,material_fee_discount:b,programme_fee:v,promos:C}=i.fee_info,t=s?Number(e):0,f=h!=""&&h>0?Number(h):0,p=u?Number(c):0,A=b!=""&&b>0?Number(b):0,F=C.reduce((V,x)=>x.type_id===1?V+x.value:V,0),D=C.reduce((V,x)=>x.type_id===2?V+x.value:V,0);this.total_amount+=Number(v)-D-this.total_amount*F/100+(Number(t)-Number(f))+(Number(p)-Number(A))})},deep:!0}},methods:{submit(){this.processing.add_student||(this.processing.add_student=!0,this.$inertia.post(route("classes.store"),this.form,{preserveState:!0}))},findChildren:j(function(i){j(s=>"400ms")(10),i&&(this.searching.student=!0,S.get(route("children.find"),{params:{keyword:i}}).then(s=>{this.list.students=s.data,this.searching.student=!1}))},1e3),findClasses(){if(this.errors.child=!this.form.children_id,this.errors.centre=!this.form.centre_id,this.errors.admission_date=!this.form.date_admission,this.errors.programme=!this.search_form.programme_id,this.errors.class_type=!this.search_form.class_type,this.errors.level=!this.search_form.class_level,this.errors.class_method=!this.search_form.class_method,this.form.children_id&&this.form.centre_id&&this.search_form.programme_id&&this.search_form.class_level&&this.search_form.class_type&&this.search_form.class_method){this.searching.class=!0,this.enable_container.show_fee=!1,this.list.available_classes=[],this.selected_plus_class[this.search_form.programme_id]=[];const i=this.form.fee.findIndex(s=>s.fee_info.programme_id===this.search_form.programme_id);i!=-1&&this.form.fee.splice(i,1),S.get(route("classes.find"),{params:{centre_id:this.form.centre_id,programme_id:this.search_form.programme_id,class_method:this.search_form.class_method,class_level:this.search_form.class_level,class_type:this.search_form.class_type}}).then(s=>{this.list.available_classes=s.data,this.enable_container.available_classes=!0,this.searching.class=!1,this.open.student_info=!1,this.open.student_classes=!0,setTimeout(()=>{this.scrollToElement("available_classes")},300)})}},getPlusFee(i,s,e,h){if(this.fetching_fee||this.disable_check_box)return;this.disable_check_box=!0,this.checkIfClassSelected(i,e)?(this.selected_plus_class[e].length==1&&(this.selected_plus_class[e]=[],this.no_fee_found=!1),this.selected_plus_class[e]=this.selected_plus_class[e].filter(c=>c!==i)):(this.selected_plus_class[e]||(this.selected_plus_class[e]=[]),this.selected_plus_class[e].push(i)),this.form.fee=this.form.fee.filter(c=>c.fee_info.programme_id!=e),this.selected_plus_class[e].length?(this.fetching_fee=!0,S.get(route("programmes.get_fee"),{params:{class_type:this.search_form.class_type,class_count:this.selected_plus_class[e].length,classes:this.selected_plus_class[e],programme_level_id:h}}).then(c=>{c.data.fee_info&&this.form.fee.push(c.data),setTimeout(()=>{this.scrollToElement("class_fee")},300),this.searching.fee=!1,this.disable_check_box=!1,this.fetching_fee=!1,this.open.admission_confirmation=!0}).catch(c=>{this.searching.fee=!1,this.disable_check_box=!1,this.fetching_fee=!1,this.no_fee_found=!0})):this.disable_check_box=!1},clearStudents(){this.list.students=[]},scrollToElement(i){const s=this.$refs[i];s&&s.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},deleteFee(i,s){this.form.fee=this.form.fee.filter(e=>e.fee_info.programme_id!==i),s==2&&this.selected_plus_class.hasOwnProperty(i)&&delete this.selected_plus_class[i]},admitStudent(){this.$inertia.post(route("students.store"),this.form)},checkIfClassSelected(i,s){return this.selected_plus_class[s]?this.selected_plus_class[s].includes(i):!1},sumMaterialFee(i,s,e){return i?Number(s)+Number(e):Number(e)},showPromoModal(i){this.selected_promo.promo_id="",this.selected_promo.fee_index=i,this.open_promo_modal=!0},addPromo(){const i=this.$page.props.promos.find(e=>e.promo_id===this.selected_promo.promo_id);!this.form.fee[this.selected_promo.fee_index].fee_info.promos.find(e=>e.promo_id===this.selected_promo.promo_id)&&i&&this.form.fee[this.selected_promo.fee_index].fee_info.promos.push({promo_id:parseInt(i.promo_id),promo_name:i.promo_name,type_id:parseInt(i.type_id),type_name:i.type_name,value:parseInt(i.value),duration_id:parseInt(i.type_id),duration_name:i.duration_name,duration_count:parseInt(i.duration_count),duration_remaining:parseInt(i.duration_count)}),this.open_promo_modal=!1},deletePromo(i,s){this.form.fee[i].fee_info.promos.splice(s,1)},calculateTotal(i,s){const e=this.form.fee[i].fee_info.promos.reduce((u,c)=>c.type_id===1?u+c.value:u,0),h=this.form.fee[i].fee_info.promos.reduce((u,c)=>c.type_id===2?u+c.value:u,0);return s-h-s*e/100}},mounted(){const s=new Date().toISOString().substring(0,10);this.form.date_admission=`${s}T05:59:00.000Z`}},Xs=Object.assign(Xe,{__name:"Create",setup(i){return(s,e)=>{const h=k("Label"),u=k("ComboBox"),c=k("Datepicker"),b=k("Button"),v=k("Checkbox"),C=k("Input");return r(),_($,null,[o(d(B),{title:"Students"}),o(M,null,{header:a(()=>e[14]||(e[14]=[])),default:a(()=>[l("div",Z,[o(d(z),{class:"bg-sky-200 text-slate-900 mb-3"},{default:a(()=>[o(d(W),{class:"h-4 w-4"}),o(d(O),{class:"font-semibold"},{default:a(()=>e[15]||(e[15]=[n("Heads up!")])),_:1}),o(d(H),null,{default:a(()=>e[16]||(e[16]=[n(" Select a different programme and choose classes after adding a new programme if you want to include multiple programmes. ")])),_:1})]),_:1}),o(I,{class:"bg-white",modelValue:s.open.student_info,"onUpdate:modelValue":e[7]||(e[7]=t=>s.open.student_info=t)},{trigger:a(()=>e[17]||(e[17]=[n("Admission Information")])),content:a(()=>[l("div",G,[l("div",null,[o(h,null,{default:a(()=>e[18]||(e[18]=[n("Child Name"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(u,{items:s.list.students,"label-property":"name","value-property":"id",onSearch:s.findChildren,modelValue:s.form.children_id,"onUpdate:modelValue":e[0]||(e[0]=t=>s.form.children_id=t),"select-placeholder":"Select Child","search-placeholder":"Enter some characters to search name...",loading:s.searching.student,error:s.errors.child},null,8,["items","onSearch","modelValue","loading","error"])]),l("div",null,[o(h,null,{default:a(()=>e[19]||(e[19]=[n("Centre"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(u,{items:s.$page.props.allowed_centres,"label-property":"label","value-property":"ID",modelValue:s.form.centre_id,"onUpdate:modelValue":e[1]||(e[1]=t=>s.form.centre_id=t),"select-placeholder":"Select Centre","search-placeholder":"Search centre...",error:s.errors.centre},null,8,["items","modelValue","error"])]),l("div",null,[o(h,null,{default:a(()=>e[20]||(e[20]=[n("Start Date"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(c,{mode:"date",format:"dd/MM/yyyy",modelValue:s.form.date_admission,"onUpdate:modelValue":e[2]||(e[2]=t=>s.form.date_admission=t),disabled:""},null,8,["modelValue"])]),l("div",null,[o(h,null,{default:a(()=>e[21]||(e[21]=[n("Programme"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(u,{items:s.$page.props.programme_list,"label-property":"name","value-property":"id",modelValue:s.search_form.programme_id,"onUpdate:modelValue":e[3]||(e[3]=t=>s.search_form.programme_id=t),"select-placeholder":"Select Programme","search-placeholder":"Search programme...",error:s.errors.programme},{label:a(({item:t})=>[n(m(t.name)+" ("+m(t.country_name)+") ",1)]),"label-content":a(({selectedItem:t,selectedItems:f,multiple:p})=>[t?(r(),_("span",X,m(t.name)+" ("+m(t.country_name)+")",1)):g("",!0)]),_:1},8,["items","modelValue","error"])]),l("div",null,[o(h,null,{default:a(()=>e[22]||(e[22]=[n("Class Type"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(u,{items:s.list.class_types,"label-property":"name","value-property":"id",modelValue:s.search_form.class_type,"onUpdate:modelValue":e[4]||(e[4]=t=>s.search_form.class_type=t),"select-placeholder":"Select Class Type","search-placeholder":"Search class type...",disabled:s.disable.class_type,error:s.errors.class_type},null,8,["items","modelValue","disabled","error"])]),l("div",null,[o(h,null,{default:a(()=>e[23]||(e[23]=[n("Class Level"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(u,{items:s.list.class_levels,"label-property":"level","value-property":"level",modelValue:s.search_form.class_level,"onUpdate:modelValue":e[5]||(e[5]=t=>s.search_form.class_level=t),"select-placeholder":"Select Class Level","search-placeholder":"Search class leel...",disabled:s.disable.class_levels,error:s.errors.level},null,8,["items","modelValue","disabled","error"])]),l("div",null,[o(h,null,{default:a(()=>e[24]||(e[24]=[n("Class Method"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(u,{items:s.$page.props.method_list,"label-property":"name","value-property":"id",modelValue:s.search_form.class_method,"onUpdate:modelValue":e[6]||(e[6]=t=>s.search_form.class_method=t),"select-placeholder":"Select Class Method","search-placeholder":"Search class method...",error:s.errors.class_method},null,8,["items","modelValue","error"])]),l("div",Y,[o(b,{onClick:s.findClasses},{default:a(()=>e[25]||(e[25]=[n("Search Classes")])),_:1},8,["onClick"])])])]),_:1},8,["modelValue"]),l("div",q,[l("div",ee,[o(I,{class:"bg-white",modelValue:s.open.student_classes,"onUpdate:modelValue":e[8]||(e[8]=t=>s.open.student_classes=t)},{trigger:a(()=>e[26]||(e[26]=[n("Class Availability")])),content:a(()=>[s.enable_container.available_classes?(r(),_("div",se,[o(d(J),null,{default:a(()=>[o(d(K),{class:"bg-gray-100"},{default:a(()=>[o(d(T),null,{default:a(()=>[o(d(w),{class:"px-4"},{default:a(()=>e[27]||(e[27]=[n("#")])),_:1}),o(d(w),null,{default:a(()=>e[28]||(e[28]=[n("Day")])),_:1}),o(d(w),{class:"text-center"},{default:a(()=>e[29]||(e[29]=[n("Time")])),_:1}),o(d(w),{class:"text-center"},{default:a(()=>e[30]||(e[30]=[n("Capacity")])),_:1}),o(d(w),{class:"text-center"},{default:a(()=>e[31]||(e[31]=[n("Action")])),_:1})]),_:1})]),_:1}),o(d(Q),null,{default:a(()=>[!s.searching.class&&!s.list.available_classes.length?(r(),P(d(T),{key:0},{default:a(()=>[o(d(y),{class:"text-center",colspan:"10"},{default:a(()=>e[32]||(e[32]=[l("div",{class:"p-3"}," No classes available ",-1)])),_:1})]),_:1})):g("",!0),(r(!0),_($,null,U(s.list.available_classes,(t,f)=>(r(),P(d(T),null,{default:a(()=>[o(d(y),{class:"px-4"},{default:a(()=>[n(m(f+1),1)]),_:2},1024),o(d(y),null,{default:a(()=>[n(m(t.class_day),1)]),_:2},1024),o(d(y),{class:"text-center"},{default:a(()=>[l("span",te,m(d(N)(t.start_time).format("h:mm A"))+" - "+m(d(N)(t.end_time).format("h:mm A")),1)]),_:2},1024),o(d(y),{class:"text-center"},{default:a(()=>[n(m(t.capacity),1)]),_:2},1024),o(d(y),{class:"text-center"},{default:a(()=>[o(v,{id:t.id,value:t.id,checked:s.checkIfClassSelected(t.class_id,t.programme_id),onClick:p=>s.getPlusFee(t.class_id,t.class_type,t.programme_id,t.programme_level_id)},null,8,["id","value","checked","onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})])):g("",!0),!s.enable_container.available_classes&&!s.searching.class&&!s.list.available_classes.length?(r(),_("div",le,e[33]||(e[33]=[l("span",null,"Please search for classes.",-1)]))):g("",!0)]),_:1},8,["modelValue"])],512),l("div",oe,[o(I,{class:"bg-white",modelValue:s.open.admission_confirmation,"onUpdate:modelValue":e[9]||(e[9]=t=>s.open.admission_confirmation=t)},{trigger:a(()=>e[34]||(e[34]=[n("Admission Confirmation")])),content:a(()=>[s.form.fee.length?(r(),_("div",ae,[(r(!0),_($,null,U(s.form.fee,(t,f)=>(r(),_("div",ie,[l("div",re,[l("span",ne,m(t.fee_info.programme_name),1),l("span",de,"Level "+m(t.fee_info.programme_level),1)]),l("ul",me,[l("li",_e,[e[35]||(e[35]=l("span",null,"Centre",-1)),l("span",fe,m(t.fee_info.centre_name),1)]),l("li",pe,[e[36]||(e[36]=l("span",null,"Fee",-1)),l("span",ce,m(t.fee_info.programme_type),1)]),l("li",ue,[e[37]||(e[37]=l("span",null,"Class Method",-1)),l("span",he,m(t.fee_info.class_method),1)])]),l("ul",ge,[e[38]||(e[38]=l("li",{class:"flex items-center"},[l("span",{class:"underline"},"Timetable")],-1)),l("li",be,[(r(!0),_($,null,U(t.classes,p=>(r(),_("span",{class:"text-slate-600 text-xs",key:p.id},m(p.class_day)+" ("+m(d(N)(p.start_time).format("h:mm A"))+" - "+m(d(N)(p.end_time).format("h:mm A"))+")",1))),128))])]),l("ul",ve,[l("li",ye,[e[39]||(e[39]=l("span",{class:"underline"},"Applied Promos",-1)),l("div",{onClick:p=>s.showPromoModal(f),class:"font-medium text-indigo-500 cursor-pointer px-1.5 py-0.5 rounded border border-dashed border-indigo-500 bg-white hover:bg-indigo-50 whitespace-nowrap"}," Add Promo ",8,ke)]),l("li",Ce,[t.fee_info.promos.length?(r(),_("div",Ve,[(r(!0),_($,null,U(t.fee_info.promos,(p,A)=>(r(),_("span",xe,[l("p",we,m(p.promo_name),1),(r(),_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",onClick:F=>s.deletePromo(f,A),class:"h-3.5 w-3.5 text-red-600 cursor-pointer"},e[40]||(e[40]=[l("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1)]),8,Se))]))),256))])):(r(),_("div",$e,e[41]||(e[41]=[l("span",{class:"text-xs font-semibold text-indigo-500"},"None",-1)])))])]),t.fee_info.registration_fee!=0?(r(),_("ul",Pe,[l("li",Ne,[l("div",Ue,[o(v,{id:"registration_fee_"+f,value:t.fee_info.include_registration_fee,checked:t.fee_info.include_registration_fee,onClick:p=>t.fee_info.include_registration_fee=!t.fee_info.include_registration_fee},null,8,["id","value","checked","onClick"]),l("label",{for:"registration_fee_"+f,class:"cursor-pointer"},"Registration Fee: "+m(t.fee_info.currency_symbol)+m(t.fee_info.registration_fee),9,Ae)]),t.fee_info.include_registration_fee?(r(),_("div",Ie,[l("span",{for:"registration_fee_discount"+f},"Discount: ",8,Te),t.fee_info.include_registration_fee&&t.fee_info.registration_fee&&t.fee_info.registration_fee!=0?(r(),P(C,{key:0,min:"0",id:"registration_fee_discount"+f,type:"number",class:"text-xs h-6",placeholder:"Discount",modelValue:t.fee_info.registration_fee_discount,"onUpdate:modelValue":p=>t.fee_info.registration_fee_discount=p},null,8,["id","modelValue","onUpdate:modelValue"])):g("",!0)])):g("",!0)])])):g("",!0),t.fee_info.material_fee!=0?(r(),_("ul",Fe,[l("li",je,[l("div",Be,[o(v,{id:"material_fee_"+f,value:t.fee_info.include_material_fee,checked:t.fee_info.include_material_fee,onClick:p=>t.fee_info.include_material_fee=!t.fee_info.include_material_fee},null,8,["id","value","checked","onClick"]),l("label",{for:"material_fee_"+f,class:"cursor-pointer"},"Material Fee: "+m(t.fee_info.currency_symbol)+m(t.fee_info.material_fee),9,De)]),t.fee_info.include_material_fee?(r(),_("div",Me,[l("span",{for:"material_fee_discount_"+f},"Discount: ",8,Le),t.fee_info.include_material_fee&&t.fee_info.material_fee&&t.fee_info.material_fee!=0?(r(),P(C,{key:0,min:"0",id:"material_fee_discount_"+f,type:"number",class:"text-xs h-6",placeholder:"Discount",modelValue:t.fee_info.material_fee_discount,"onUpdate:modelValue":p=>t.fee_info.material_fee_discount=p},null,8,["id","modelValue","onUpdate:modelValue"])):g("",!0)])):g("",!0)])])):g("",!0),l("ul",Ee,[l("li",ze,[l("div",He,[l("div",Oe,[o(v,{id:"old_fee_"+f,value:t.fee_info.use_old_fee,checked:t.fee_info.use_old_fee,onClick:p=>t.fee_info.use_old_fee=!t.fee_info.use_old_fee},null,8,["id","value","checked","onClick"]),l("label",{for:"old_fee_"+f,class:"cursor-pointer"},"Use old fee",8,Je)]),l("div",Ke,[l("span",Qe,m(t.fee_info.currency_symbol)+m(s.calculateTotal(f,t.fee_info.use_old_fee?t.fee_info.old_programme_fee:t.fee_info.programme_fee)),1),e[42]||(e[42]=l("span",{class:"font-medium text-sm text-gray-700"},"/month",-1))])])])])]))),256))])):g("",!0),s.searching.class?g("",!0):(r(),_("div",Re,[!s.enable_container.available_classes||s.enable_container.available_classes&&!s.form.fee.length&&!s.no_fee_found?(r(),_("span",We,"No classes have been selected.")):g("",!0),s.enable_container.available_classes&&!s.form.fee.length&&s.no_fee_found?(r(),_("span",Ze,"Fees are not available for the selected classes.")):g("",!0)]))]),_:1},8,["modelValue"])],512)]),s.form.fee.length?(r(),P(E,{key:0},{content:a(()=>[l("div",Ge,[o(b,{variant:"outline",onClick:e[10]||(e[10]=t=>s.$inertia.get(s.route("students")))},{default:a(()=>e[43]||(e[43]=[n("Cancel")])),_:1}),o(b,{onClick:s.admitStudent},{default:a(()=>e[44]||(e[44]=[n("Save")])),_:1},8,["onClick"])])]),_:1})):g("",!0)]),o(R,{open:s.open_promo_modal,"onUpdate:open":e[13]||(e[13]=t=>s.open_promo_modal=t)},{title:a(()=>e[45]||(e[45]=[n("Add Status")])),content:a(()=>[o(u,{items:s.$page.props.promos,"label-property":"promo_name","value-property":"promo_id",modelValue:s.selected_promo.promo_id,"onUpdate:modelValue":e[11]||(e[11]=t=>s.selected_promo.promo_id=t),"select-placeholder":"Select Promo","search-placeholder":"Search promo..."},null,8,["items","modelValue"])]),footer:a(()=>[o(b,{variant:"outline",onClick:e[12]||(e[12]=t=>s.open_promo_modal=!1)},{default:a(()=>e[46]||(e[46]=[n("Cancel")])),_:1}),o(b,{onClick:s.addPromo},{default:a(()=>e[47]||(e[47]=[n("Add")])),_:1},8,["onClick"])]),_:1},8,["open"])]),_:1})],64)}}});export{Xs as default};
