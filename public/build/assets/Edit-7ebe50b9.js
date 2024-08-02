import{B as I}from"./Authenticated-0bdf10fa.js";import{H as B,L as M}from"./@inertiajs-751b4e3a.js";import{_ as q}from"./Card-859e52b5.js";import{_ as U,a as P}from"./Collapsible-d1be0283.js";import{_ as E,a as j,b as f,c as h,d as A,e as S}from"./TableRow-393f40ef.js";import{_ as D}from"./TableCaption-5c1f2c62.js";import{_ as N}from"./DeleteConfirmation-c0bdb2c2.js";import{C as R}from"./lucide-vue-next-4cc1c774.js";import{b5 as C,q as n,x as u,v as t,u as d,P as r,F as y,V as a,y as i,C as V,t as T,G as m,z as L}from"./@vue-7927adca.js";import"./ApplicationLogo-04b49080.js";import"./radix-vue-8d4617bd.js";import"./@floating-ui-1e8ef191.js";import"./class-variance-authority-f96983da.js";import"./app-a931a781.js";import"./axios-9cbf0d09.js";import"./pusher-js-36ce843e.js";import"./@vueform-aef92a1c.js";import"./@vuepic-ba9c4d94.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-8efab0ec.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-e8993a83.js";import"./@radix-icons-9a1732cf.js";import"./lodash.isequal-979ca240.js";import"./vue-446e1be1.js";import"./lodash.clonedeep-a2a90952.js";import"./qs-c5780410.js";import"./side-channel-c3de7aff.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-30e6e08c.js";import"./deepmerge-89e33937.js";import"./nprogress-2c66c043.js";const H={class:"grid grid-cols-1 2xl:grid-cols-3 gap-2"},z={class:"mb-4"},G=i("span",{class:"text-red-500"},"*",-1),Y={class:"mb-4"},J=i("span",{class:"text-red-500"},"*",-1),K={class:"mb-4"},Q=i("span",{class:"text-red-500"},"*",-1),W={class:"flex justify-between items-center"},X=i("div",{class:"p-3"}," No Record Found ",-1),Z={class:"text-sm text-gray-700"},x={class:"font-bold"},ee={class:"flex space-x-4 items-center"},te={class:"flex flex-col items-start"},re={class:"text-sm text-gray-700"},oe={class:"font-bold"},ae={class:"flex flex-col"},se={class:"text-sm text-gray-700 font-normal underline"},ie={class:"font-semibold"},le={class:"text-sm text-gray-700 italic"},de={class:"font-semibold"},ne={class:"text-sm text-gray-700 italic"},_e={class:"font-semibold"},pe={class:"flex items-center justify-between"},ue={class:"flex space-x-2 items-center"},me={class:"flex space-x-2"},ce={class:"p-1 grid grid-cols-1"},fe={class:"mb-4"},he=i("span",{class:"text-red-500"},"*",-1),ve={class:"mb-4"},ge=i("span",{class:"text-red-500"},"*",-1),be={class:"mb-4"},ye=i("span",{class:"text-red-500"},"*",-1),Ve={class:"mb-4"},$e=i("span",{class:"text-red-500"},"*",-1),we={class:"mb-4"},Ce=i("span",{class:"text-red-500"},"*",-1),Se={class:"p-1 grid grid-cols-1"},ke={class:"mb-4"},Fe={key:0,class:"mb-4"},qe=i("span",{class:"text-red-500"},"*",-1),Ue={key:1,class:"mb-4"},Te=i("span",{class:"text-red-500"},"*",-1),Le={class:"grid grid-cols-1 gap-2"},Pe={class:"mb-4"},Be=i("span",{class:"text-red-500"},"*",-1),Ee={components:{Head:B,Link:M,Table:E,TableBody:j,TableCaption:D,TableCell:f,TableHead:h,TableHeader:A,TableRow:S,DeleteConfirmation:N},mounted(){this.$page.props.programme_info.forEach(o=>{this.form.programme_info.push(o)})},data(){return{levels:Array.from({length:10},(o,e)=>({id:e+1,name:`Level ${e+1}`})),collapsible:{fee:!0,material:!1},confirmation:{is_open:!1,route_name:"",id:""},form:{programme_id:this.$page.props.programme_data?this.$page.props.programme_data.id:"",programme_country:this.$page.props.programme_data?this.$page.props.programme_data.country_id:"",programme_name:this.$page.props.programme_data?this.$page.props.programme_data.name:"",progress_report_required:this.$page.props.programme_data?this.$page.props.programme_data.progress_report_required:"",programme_info:[],programme_active:this.$page.props.programme_data?!!this.$page.props.programme_data.status:!1},fee_form:{level:"",registration_fee:0,material_fee:0,class_type:"",fees:[]},fee_edit_form:{new_item:!1,programme_info_index:"",data:[]},show:{add_fee:!1,edit_fee:!1,product_variations:!1,product_sub_variations:!1,add_tracking_status:!1},list:{products:[],product_variations:[],product_sub_variations:[],class_types_detail:[]},loading:{products:!1,product_variations:!1,product_sub_variations:!1},selected:{product:[],product_variation:[],product_sub_variation:[]},search_product_form:{product_id:"",product_variation_id:"",product_sub_variation_id:""},validation:{level:{required:!0,error:!1},registration_fee:{required:!0,error:!1},material_fee:{required:!0,error:!1},class_type:{required:!0,error:!1},product:{required:!1,error:!1},product_variation:{required:!1,error:!1},product_sub_variation:{required:!1,error:!1}}}},watch:{"fee_form.class_type":{handler(){this.list.class_types_detail=[],this.fee_form.fees=[],this.$page.props.class_types_detail.forEach(o=>{o.class_type_id==this.fee_form.class_type&&(this.list.class_types_detail.push(o),this.fee_form.fees.push({class_type_detail_id:o.id,value:1,new_fee_amount:1}))})},deep:!0},"search_product_form.product_id":{handler(){this.search_product_form.product_id&&(this.selected.product=this.list.products.find(o=>o.id===this.search_product_form.product_id),this.show.product_variations=this.selected.product.has_variation==1,this.show.product_sub_variations=this.selected.product.has_sub_variation==1,this.search_product_form.product_variation_id="",this.search_product_form.product_sub_variation_id="",this.selected.product_variation=[],this.selected.product_sub_variation=[])}},"search_product_form.product_variation_id":{handler(){this.search_product_form.product_variation_id&&(this.selected.product_variation=this.list.product_variations.find(o=>o.id===this.search_product_form.product_variation_id),this.search_product_form.product_sub_variation_id="",this.selected.product_sub_variation=[])}},"search_product_form.product_sub_variation_id":{handler(){this.search_product_form.product_sub_variation_id&&(this.selected.product_sub_variation=this.list.product_sub_variations.find(o=>o.id===this.search_product_form.product_sub_variation_id))}}},computed:{groupedItems(){return this.form.programme_info.reduce((o,e)=>(o[e.level]||(o[e.level]=[]),o[e.level].push(e),o),{})}},methods:{submit(){this.$inertia.post(route("programmes.update"),this.form)},showAddFee(){this.search_product_form.product_id="",this.search_product_form.product_variation_id="",this.search_product_form.product_sub_variation_id="",this.list.products=[],this.list.product_variations=[],this.list.product_sub_variations=[],this.selected.product=[],this.selected.product_variation=[],this.selected.product_sub_variation=[],this.show.product_variations=!1,this.show.product_sub_variations=!1,this.validation.product.error=!1,this.validation.product_variation.required=!1,this.validation.product_variation.error=!1,this.validation.product_sub_variation.required=!1,this.validation.product_sub_variation.error=!1,this.show.add_fee=!0},addFee(){if(this.validation.level.error=this.fee_form.level=="",this.validation.registration_fee.error=this.fee_form.registration_fee==="",this.validation.material_fee.error=this.fee_form.material_fee==="",this.validation.class_type.error=this.fee_form.class_type=="",this.validation.product.error=!!(this.validation.product.required&&!Object.keys(this.selected.product).length),this.validation.product_variation.required=this.selected.product.has_variation==1,this.validation.product_variation.error=this.selected.product.has_variation==1&&!Object.keys(this.selected.product_variation).length,this.validation.product_sub_variation.required=this.selected.product.has_sub_variation==1,this.validation.product_sub_variation.error=this.selected.product.has_sub_variation==1&&!Object.keys(this.selected.product_sub_variation).length,this.validation.product.required&&!Object.keys(this.selected.product).length||this.validation.product_variation.required&&!Object.keys(this.selected.product_variation).length||this.validation.product_sub_variation.required&&!Object.keys(this.selected.product_sub_variation).length||this.fee_form.level==""||this.fee_form.registration_fee===""||this.fee_form.material_fee===""||this.fee_form.class_type==""||this.fee_form.fees.length<1)return;const o=this.fee_form.fees;this.form.programme_info.push({level:this.fee_form.level,registration_fee:this.fee_form.registration_fee,material_fee:this.fee_form.material_fee,class_type:this.fee_form.class_type,fees:o,product:this.selected.product,product_variation:this.selected.product_variation,product_sub_variation:this.selected.product_sub_variation}),this.form.programme_info.sort((e,l)=>e.level-l.level),this.clearForm(),this.show.add_fee=!1},deleteLevel(o,e){if(!o){this.form.programme_info.splice(e,1);return}this.confirmation.route_name="programmes.fee.destroy",this.confirmation.id=o,this.confirmation.is_open=!0},numbersOnly(o){o=o||window.event;var e=o.which?o.which:o.keyCode;if(e>31&&(e<48||e>57)&&e!==46)o.preventDefault();else return!0},clearForm(){this.fee_form.level="",this.fee_form.registration_fee=0,this.fee_form.material_fee=0,this.fee_form.class_type="",this.fee_form.fees=[]},findProducts(o){o&&(this.loading.products=!0,axios.get(route("products.find_products"),{params:{keyword:o}}).then(e=>{this.list.products=e.data,this.loading.products=!1}).finally(()=>{this.scrollToEnd()}))},findProductVariations(){this.loading.product_variations=!0,axios.get(route("products.find_product_variations"),{params:{product_id:this.search_product_form.product_id}}).then(o=>{this.list.product_variations=o.data,this.loading.product_variations=!1}).finally(()=>{this.scrollToEnd()})},findProductSubVariations(){this.loading.product_sub_variations=!0,axios.get(route("products.find_product_sub_variations"),{params:{product_variation_id:this.search_product_form.product_variation_id}}).then(o=>{this.list.product_sub_variations=o.data,this.loading.product_sub_variations=!1}).finally(()=>{this.scrollToEnd()})},scrollToEnd(){setTimeout(()=>{const o=this.$refs.scrollableDiv;o.scrollTop=o.scrollHeight},10)},editFee(o,e,l){this.fee_edit_form.new_item=l,this.fee_edit_form.programme_info_index=e,this.fee_edit_form.data=[],this.fee_edit_form.data=this.groupedItems[o][e].fees,this.show.edit_fee=!0},updateFee(){this.fee_edit_form.new_item?(this.form.programme_info[this.fee_edit_form.programme_info_index].fees=[],this.form.programme_info[this.fee_edit_form.programme_info_index].fees=this.fee_edit_form.data,this.show.edit_fee=!1):this.$inertia.patch(route("programmes.fee.update"),{fee_edit_form:this.fee_edit_form},{preserveState:!1})}}},qt=Object.assign(Ee,{__name:"Edit",setup(o){return(e,l)=>{const p=C("Label"),$=C("Input"),v=C("ComboBox"),g=C("Button"),O=C("Switch");return n(),u(y,null,[t(d(B),{title:"Programmes"}),t(I,null,{header:r(()=>[]),default:r(()=>[t(q,null,{title:r(()=>[a("Programme Information")]),content:r(()=>[i("div",H,[i("div",z,[t(p,null,{default:r(()=>[a("Name"),G]),_:1}),t($,{type:"text",error:e.$page.props.errors.programme_name,modelValue:e.form.programme_name,"onUpdate:modelValue":l[0]||(l[0]=s=>e.form.programme_name=s)},null,8,["error","modelValue"])]),i("div",Y,[t(p,null,{default:r(()=>[a("Country"),J]),_:1}),t(v,{items:e.$page.props.countries,"label-property":"name","value-property":"id",error:e.$page.props.errors.programme_country,modelValue:e.form.programme_country,"onUpdate:modelValue":l[1]||(l[1]=s=>e.form.programme_country=s),"select-placeholder":"Select Country","search-placeholder":"Search country..."},null,8,["items","error","modelValue"])]),i("div",K,[t(p,null,{default:r(()=>[a("Progress Report Required"),Q]),_:1}),t(v,{items:[{id:0,name:"No"},{id:1,name:"Yes"}],"label-property":"name","value-property":"id",error:e.$page.props.errors.progress_report_required,modelValue:e.form.progress_report_required,"onUpdate:modelValue":l[2]||(l[2]=s=>e.form.progress_report_required=s),"select-placeholder":"Please Select","search-placeholder":"Search..."},null,8,["error","modelValue"])])])]),_:1}),t(q,null,{title:r(()=>[i("div",W,[a(" Programme Levels and Fees "),t(g,{buttonType:"info",onClick:e.showAddFee},{default:r(()=>[t(d(R),{class:"mr-1 h-4 w-4"}),a("Add Fee ")]),_:1},8,["onClick"])])]),content:r(()=>[(n(!0),u(y,null,V(e.groupedItems,(s,c)=>(n(),T(U,null,{trigger:r(()=>[a("Level "+m(c),1)]),content:r(()=>[t(d(E),{class:"px-4"},{default:r(()=>[t(d(A),{class:"bg-gray-100"},{default:r(()=>[t(d(S),null,{default:r(()=>[t(d(h),{class:"px-4"},{default:r(()=>[a("Class Type")]),_:1}),t(d(h),null,{default:r(()=>[a("Registration Fee")]),_:1}),t(d(h),null,{default:r(()=>[a("Material Fee")]),_:1}),t(d(h),null,{default:r(()=>[a("Monthly Fee (Old)")]),_:1}),t(d(h),null,{default:r(()=>[a("Monthly Fee (New)")]),_:1}),t(d(h),null,{default:r(()=>[a("Material")]),_:1}),t(d(h),{class:"text-center"},{default:r(()=>[a("Action")]),_:1})]),_:1})]),_:1}),t(d(j),null,{default:r(()=>[s.length?L("",!0):(n(),T(d(S),{key:0},{default:r(()=>[t(d(f),{class:"text-center",colspan:"10"},{default:r(()=>[X]),_:1})]),_:1})),(n(!0),u(y,null,V(s,(_,k)=>(n(),T(d(S),null,{default:r(()=>[t(d(f),{class:"px-4"},{default:r(()=>[a(m(e.$page.props.class_types[s[k].class_type].name),1)]),_:2},1024),t(d(f),null,{default:r(()=>[a(m(_.registration_fee),1)]),_:2},1024),t(d(f),null,{default:r(()=>[a(m(_.material_fee),1)]),_:2},1024),t(d(f),null,{default:r(()=>[(n(!0),u(y,null,V(_.fees,b=>{var w;return n(),u("p",Z,[a(m((w=e.$page.props.class_types_detail.find(F=>F.id===b.class_type_detail_id))==null?void 0:w.label)+" : ",1),i("span",x,m(b.value),1)])}),256))]),_:2},1024),t(d(f),null,{default:r(()=>[i("div",ee,[i("div",te,[(n(!0),u(y,null,V(_.fees,b=>{var w;return n(),u("p",re,[a(m((w=e.$page.props.class_types_detail.find(F=>F.id===b.class_type_detail_id))==null?void 0:w.label)+" : ",1),i("span",oe,m(b.new_fee_amount),1)])}),256))]),t(g,{variant:"link",class:"text-blue-500",onClick:b=>e.editFee(c,k,!_.programme_level_id)},{default:r(()=>[a("Edit")]),_:2},1032,["onClick"])])]),_:2},1024),t(d(f),null,{default:r(()=>[i("div",ae,[i("p",se,[i("span",ie,m(_.product.name),1)]),i("p",le,[a("Variation : "),i("span",de,m(_.product_variation.option_name?_.product_variation.option_name:"-"),1)]),i("p",ne,[a("Sub Variation : "),i("span",_e,m(_.product_sub_variation.option_name?_.product_sub_variation.option_name:"-"),1)])])]),_:2},1024),t(d(f),{class:"text-center"},{default:r(()=>[t(g,{variant:"destructive",onClick:b=>e.deleteLevel(_.programme_level_id,k)},{default:r(()=>[a("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1}),t(q,null,{content:r(()=>[i("div",pe,[i("div",ue,[t(p,null,{default:r(()=>[a("Active")]),_:1}),t(O,{modelValue:e.form.programme_active,"onUpdate:modelValue":l[3]||(l[3]=s=>e.form.programme_active=s)},null,8,["modelValue"])]),i("div",me,[t(g,{variant:"outline",onClick:l[4]||(l[4]=s=>e.$inertia.get(e.route("programmes")))},{default:r(()=>[a("Cancel")]),_:1}),t(g,{onClick:e.submit},{default:r(()=>[a("Save")]),_:1},8,["onClick"])])])]),_:1}),t(P,{open:e.show.add_fee,"onUpdate:open":l[14]||(l[14]=s=>e.show.add_fee=s)},{title:r(()=>[a("Add Fee")]),content:r(()=>[t(U,{modelValue:e.collapsible.fee,"onUpdate:modelValue":l[9]||(l[9]=s=>e.collapsible.fee=s)},{trigger:r(()=>[a("Fee Information")]),content:r(()=>[i("div",ce,[i("div",fe,[t(p,null,{default:r(()=>[a("Level"),he]),_:1}),t(v,{items:e.levels,"label-property":"name","value-property":"id",error:e.validation.level.error,modelValue:e.fee_form.level,"onUpdate:modelValue":l[5]||(l[5]=s=>e.fee_form.level=s),"select-placeholder":"Select Level","search-placeholder":"Search level..."},null,8,["items","error","modelValue"])]),i("div",ve,[t(p,null,{default:r(()=>[a("Registration Fee"),ge]),_:1}),t($,{type:"number",error:e.validation.registration_fee.error,modelValue:e.fee_form.registration_fee,"onUpdate:modelValue":l[6]||(l[6]=s=>e.fee_form.registration_fee=s)},null,8,["error","modelValue"])]),i("div",be,[t(p,null,{default:r(()=>[a("Material Fee"),ye]),_:1}),t($,{type:"number",error:e.validation.material_fee.error,modelValue:e.fee_form.material_fee,"onUpdate:modelValue":l[7]||(l[7]=s=>e.fee_form.material_fee=s)},null,8,["error","modelValue"])]),i("div",Ve,[t(p,null,{default:r(()=>[a("Class Type"),$e]),_:1}),t(v,{items:Object.values(e.$page.props.class_types),"label-property":"name","value-property":"id",error:e.validation.class_type.error,modelValue:e.fee_form.class_type,"onUpdate:modelValue":l[8]||(l[8]=s=>e.fee_form.class_type=s),"select-placeholder":"Select Class Type","search-placeholder":"Search class type..."},null,8,["items","error","modelValue"])]),(n(!0),u(y,null,V(e.list.class_types_detail,(s,c)=>(n(),u("div",we,[t(p,null,{default:r(()=>[a(m(s.label),1),Ce]),_:2},1024),t($,{type:"number",min:"1",error:e.$page.props.errors.class_type_detail,modelValue:e.fee_form.fees[c].value,"onUpdate:modelValue":_=>e.fee_form.fees[c].value=_},null,8,["error","modelValue","onUpdate:modelValue"])]))),256))])]),_:1},8,["modelValue"]),t(U,{modelValue:e.collapsible.material,"onUpdate:modelValue":l[13]||(l[13]=s=>e.collapsible.material=s)},{trigger:r(()=>[a("Material Information")]),content:r(()=>[i("div",Se,[i("div",ke,[t(p,null,{default:r(()=>[a("Material")]),_:1}),t(v,{items:e.list.products,"label-property":"name","value-property":"id",error:e.validation.product.error,loading:e.loading.products,onSearch:e.findProducts,onSelect:e.findProductVariations,modelValue:e.search_product_form.product_id,"onUpdate:modelValue":l[10]||(l[10]=s=>e.search_product_form.product_id=s),"select-placeholder":"Select Material","search-placeholder":"Search material..."},null,8,["items","error","loading","onSearch","onSelect","modelValue"])]),e.show.product_variations?(n(),u("div",Fe,[t(p,null,{default:r(()=>[a("Variation"),qe]),_:1}),t(v,{items:e.list.product_variations,"label-property":"option_name","value-property":"id",loading:e.loading.product_variations,error:e.validation.product_variation.error,onSelect:e.findProductSubVariations,modelValue:e.search_product_form.product_variation_id,"onUpdate:modelValue":l[11]||(l[11]=s=>e.search_product_form.product_variation_id=s),"select-placeholder":"Select Variation","search-placeholder":"Search variation..."},null,8,["items","loading","error","onSelect","modelValue"])])):L("",!0),e.show.product_sub_variations?(n(),u("div",Ue,[t(p,null,{default:r(()=>[a("Sub Variation"),Te]),_:1}),t(v,{items:e.list.product_sub_variations,"label-property":"option_name","value-property":"id",loading:e.loading.product_sub_variations,error:e.validation.product_sub_variation.error,modelValue:e.search_product_form.product_sub_variation_id,"onUpdate:modelValue":l[12]||(l[12]=s=>e.search_product_form.product_sub_variation_id=s),"select-placeholder":"Select Sub Variation","search-placeholder":"Search sub variation..."},null,8,["items","loading","error","modelValue"])])):L("",!0)])]),_:1},8,["modelValue"])]),footer:r(()=>[t(g,{onClick:e.addFee},{default:r(()=>[a("Add")]),_:1},8,["onClick"])]),_:1},8,["open"]),t(P,{open:e.show.edit_fee,"onUpdate:open":l[15]||(l[15]=s=>e.show.edit_fee=s)},{title:r(()=>[a("Edit Fee")]),content:r(()=>[i("div",Le,[(n(!0),u(y,null,V(e.fee_edit_form.data,s=>(n(),u("div",Pe,[t(p,null,{default:r(()=>{var c;return[a(m((c=e.$page.props.class_types_detail.find(_=>_.id===s.class_type_detail_id))==null?void 0:c.label),1),Be]}),_:2},1024),t($,{type:"number",min:"0",error:e.validation.material_fee.error,modelValue:s.new_fee_amount,"onUpdate:modelValue":c=>s.new_fee_amount=c},null,8,["error","modelValue","onUpdate:modelValue"])]))),256))])]),footer:r(()=>[t(g,{onClick:e.updateFee},{default:r(()=>[a("Save")]),_:1},8,["onClick"])]),_:1},8,["open"]),t(N,{open:e.confirmation.is_open,onClose:l[16]||(l[16]=s=>e.confirmation.is_open=!1),routeName:e.confirmation.route_name,id:e.confirmation.id},{title:r(()=>[a("Delete Data")]),description:r(()=>[a("Are you sure want to delete this data?")]),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{qt as default};
