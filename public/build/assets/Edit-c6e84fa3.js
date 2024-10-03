import{B as I}from"./Authenticated-11e054d5.js";import{H as A,L as M}from"./@inertiajs-4f2e6820.js";import{_ as F}from"./Card-a2265374.js";import{_ as P}from"./DialogModal-6c1852d9.js";import{_ as q}from"./Collapsible-eaae5bd3.js";import{_ as B,d as E,e as h,c,a as N,b as k}from"./TableRow-151d209b.js";import{_ as D}from"./TableCaption-f039fb4e.js";import{_ as j}from"./DeleteConfirmation-5b92c13b.js";import{C as R}from"./lucide-vue-next-bc441494.js";import{y as m,x as t,u as d,Q as o,F as y,be as C,t as p,W as i,z as l,J as V,v as U,K as _,C as T}from"./@vue-66b8c761.js";import"./ApplicationLogo-f9b7ff8a.js";import"./radix-vue-aa72069b.js";import"./@floating-ui-b481b296.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-98eea8e8.js";import"./axios-1779699b.js";import"./pusher-js-cb9cdec3.js";import"./@vueform-4cba997d.js";import"./@vuepic-d831316d.js";import"./@babel-1b80a44a.js";import"./cropperjs-c64556db.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-2d2eee44.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-b3927753.js";import"./@radix-icons-de95313b.js";import"./lodash.isequal-802c39ac.js";import"./vue-978cb4c7.js";import"./lodash.clonedeep-6494eade.js";import"./qs-740c36f9.js";import"./side-channel-eec8ae42.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-d4161e53.js";import"./deepmerge-89e33937.js";import"./nprogress-5b8a22ad.js";const H={class:"grid grid-cols-1 2xl:grid-cols-3 gap-4"},z={class:"flex justify-between items-center"},J={class:"text-sm text-gray-700"},K={class:"font-bold"},Q={class:"flex space-x-4 items-center"},W={class:"flex flex-col items-start"},Y={class:"text-sm text-gray-700"},G={class:"font-bold"},X={class:"flex flex-col"},Z={class:"text-sm text-gray-700 font-normal underline"},x={class:"font-semibold"},ee={class:"text-sm text-gray-700 italic"},re={class:"font-semibold"},te={class:"text-sm text-gray-700 italic"},oe={class:"font-semibold"},ie={class:"flex items-center justify-between"},ae={class:"flex space-x-2 items-center"},se={class:"flex space-x-2"},le={class:"p-1 grid grid-cols-1 gap-4"},de={class:"p-1 grid grid-cols-1 gap-4"},ne={key:0},pe={key:1},ue={class:"grid grid-cols-1 gap-4"},me={components:{Head:A,Link:M,Table:B,TableBody:E,TableCaption:D,TableCell:h,TableHead:c,TableHeader:N,TableRow:k,DeleteConfirmation:j},mounted(){this.$page.props.programme_info.forEach(a=>{this.form.programme_info.push(a)})},data(){return{levels:Array.from({length:10},(a,r)=>({id:r+1,name:`Level ${r+1}`})),collapsible:{fee:!0,material:!1},confirmation:{is_open:!1,route_name:"",id:""},form:{programme_id:this.$page.props.programme_data?this.$page.props.programme_data.id:"",programme_country:this.$page.props.programme_data?this.$page.props.programme_data.country_id:"",programme_name:this.$page.props.programme_data?this.$page.props.programme_data.name:"",progress_report_required:this.$page.props.programme_data?Number(this.$page.props.programme_data.progress_report_required):"",programme_info:[],programme_active:this.$page.props.programme_data?!!this.$page.props.programme_data.status:!1},fee_form:{level:"",registration_fee:0,material_fee:0,class_type:"",fees:[]},fee_edit_form:{new_item:!1,programme_info_index:"",data:[]},show:{add_fee:!1,edit_fee:!1,product_variations:!1,product_sub_variations:!1,add_tracking_status:!1},list:{products:[],product_variations:[],product_sub_variations:[],class_types_detail:[]},loading:{products:!1,product_variations:!1,product_sub_variations:!1},selected:{product:[],product_variation:[],product_sub_variation:[]},search_product_form:{product_id:"",product_variation_id:"",product_sub_variation_id:""},validation:{level:{required:!0,error:!1},registration_fee:{required:!0,error:!1},material_fee:{required:!0,error:!1},class_type:{required:!0,error:!1},product:{required:!1,error:!1},product_variation:{required:!1,error:!1},product_sub_variation:{required:!1,error:!1}}}},watch:{"form.programme_info":{handler(){this.groupedItems},deep:!0},"fee_form.class_type":{handler(){this.list.class_types_detail=[],this.fee_form.fees=[],this.$page.props.class_types_detail.forEach(a=>{a.class_type_id==this.fee_form.class_type&&(this.list.class_types_detail.push(a),this.fee_form.fees.push({class_type_detail_id:a.id,value:1,new_fee_amount:1}))})},deep:!0},"search_product_form.product_id":{handler(){this.search_product_form.product_id&&(this.selected.product=this.list.products.find(a=>a.id===this.search_product_form.product_id),this.show.product_variations=this.selected.product.has_variation==1,this.show.product_sub_variations=this.selected.product.has_sub_variation==1,this.search_product_form.product_variation_id="",this.search_product_form.product_sub_variation_id="",this.selected.product_variation=[],this.selected.product_sub_variation=[])}},"search_product_form.product_variation_id":{handler(){this.search_product_form.product_variation_id&&(this.selected.product_variation=this.list.product_variations.find(a=>a.id===this.search_product_form.product_variation_id),this.search_product_form.product_sub_variation_id="",this.selected.product_sub_variation=[])}},"search_product_form.product_sub_variation_id":{handler(){this.search_product_form.product_sub_variation_id&&(this.selected.product_sub_variation=this.list.product_sub_variations.find(a=>a.id===this.search_product_form.product_sub_variation_id))}}},computed:{groupedItems(){return this.form.programme_info.reduce((a,r,e)=>(a[r.level]||(a[r.level]=[]),a[r.level].push({...r,index:e}),a),{})}},methods:{submit(){this.$inertia.post(route("programmes.update"),this.form)},showAddFee(){this.search_product_form.product_id="",this.search_product_form.product_variation_id="",this.search_product_form.product_sub_variation_id="",this.list.products=[],this.list.product_variations=[],this.list.product_sub_variations=[],this.selected.product=[],this.selected.product_variation=[],this.selected.product_sub_variation=[],this.show.product_variations=!1,this.show.product_sub_variations=!1,this.validation.product.error=!1,this.validation.product_variation.required=!1,this.validation.product_variation.error=!1,this.validation.product_sub_variation.required=!1,this.validation.product_sub_variation.error=!1,this.show.add_fee=!0},addFee(){if(this.validation.level.error=this.fee_form.level=="",this.validation.registration_fee.error=this.fee_form.registration_fee==="",this.validation.material_fee.error=this.fee_form.material_fee==="",this.validation.class_type.error=this.fee_form.class_type=="",this.validation.product.error=!!(this.validation.product.required&&!Object.keys(this.selected.product).length),this.validation.product_variation.required=this.selected.product.has_variation==1,this.validation.product_variation.error=this.selected.product.has_variation==1&&!Object.keys(this.selected.product_variation).length,this.validation.product_sub_variation.required=this.selected.product.has_sub_variation==1,this.validation.product_sub_variation.error=this.selected.product.has_sub_variation==1&&!Object.keys(this.selected.product_sub_variation).length,this.validation.product.required&&!Object.keys(this.selected.product).length||this.validation.product_variation.required&&!Object.keys(this.selected.product_variation).length||this.validation.product_sub_variation.required&&!Object.keys(this.selected.product_sub_variation).length||this.fee_form.level==""||this.fee_form.registration_fee===""||this.fee_form.material_fee===""||this.fee_form.class_type==""||this.fee_form.fees.length<1)return;const a=this.fee_form.fees;this.form.programme_info.push({level:this.fee_form.level,registration_fee:this.fee_form.registration_fee,material_fee:this.fee_form.material_fee,class_type:this.fee_form.class_type,fees:a,product:this.selected.product,product_variation:this.selected.product_variation,product_sub_variation:this.selected.product_sub_variation}),this.form.programme_info.sort((r,e)=>r.level-e.level),this.clearForm(),this.show.add_fee=!1},deleteLevel(a,r){if(!a){this.form.programme_info.splice(r,1);return}this.confirmation.route_name="programmes.fee.destroy",this.confirmation.id=a,this.confirmation.is_open=!0},numbersOnly(a){a=a||window.event;var r=a.which?a.which:a.keyCode;if(r>31&&(r<48||r>57)&&r!==46)a.preventDefault();else return!0},clearForm(){this.fee_form.level="",this.fee_form.registration_fee=0,this.fee_form.material_fee=0,this.fee_form.class_type="",this.fee_form.fees=[]},findProducts(a){a&&(this.loading.products=!0,axios.get(route("products.find_products"),{params:{keyword:a}}).then(r=>{this.list.products=r.data,this.loading.products=!1}).finally(()=>{this.scrollToEnd()}))},findProductVariations(){this.loading.product_variations=!0,axios.get(route("products.find_product_variations"),{params:{product_id:this.search_product_form.product_id}}).then(a=>{this.list.product_variations=a.data,this.loading.product_variations=!1}).finally(()=>{this.scrollToEnd()})},findProductSubVariations(){this.loading.product_sub_variations=!0,axios.get(route("products.find_product_sub_variations"),{params:{product_variation_id:this.search_product_form.product_variation_id}}).then(a=>{this.list.product_sub_variations=a.data,this.loading.product_sub_variations=!1}).finally(()=>{this.scrollToEnd()})},scrollToEnd(){setTimeout(()=>{const a=this.$refs.scrollableDiv;a.scrollTop=a.scrollHeight},10)},editFee(a,r,e){this.fee_edit_form.new_item=e,this.fee_edit_form.programme_info_index=r,this.fee_edit_form.data=[],this.fee_edit_form.data=this.groupedItems[a][r].fees,this.show.edit_fee=!0},updateFee(){this.fee_edit_form.new_item?(this.form.programme_info[this.fee_edit_form.programme_info_index].fees=[],this.form.programme_info[this.fee_edit_form.programme_info_index].fees=this.fee_edit_form.data,this.show.edit_fee=!1):this.$inertia.patch(route("programmes.fee.update"),{fee_edit_form:this.fee_edit_form},{preserveState:!1})}}},dr=Object.assign(me,{__name:"Edit",setup(a){return(r,e)=>{const u=C("Label"),$=C("Input"),g=C("ComboBox"),v=C("Button"),O=C("Switch");return p(),m(y,null,[t(d(A),{title:"Programmes"}),t(I,null,{header:o(()=>e[19]||(e[19]=[])),default:o(()=>[t(F,null,{title:o(()=>e[20]||(e[20]=[i("Programme Information")])),content:o(()=>[l("div",H,[l("div",null,[t(u,null,{default:o(()=>e[21]||(e[21]=[i("Name"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),t($,{type:"text",error:r.$page.props.errors.programme_name,modelValue:r.form.programme_name,"onUpdate:modelValue":e[0]||(e[0]=s=>r.form.programme_name=s)},null,8,["error","modelValue"])]),l("div",null,[t(u,null,{default:o(()=>e[22]||(e[22]=[i("Country"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),t(g,{items:r.$page.props.countries,"label-property":"name","value-property":"id",error:r.$page.props.errors.programme_country,modelValue:r.form.programme_country,"onUpdate:modelValue":e[1]||(e[1]=s=>r.form.programme_country=s),"select-placeholder":"Select Country","search-placeholder":"Search country..."},null,8,["items","error","modelValue"])]),l("div",null,[t(u,null,{default:o(()=>e[23]||(e[23]=[i("Progress Report Required"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),t(g,{items:[{id:0,name:"No"},{id:1,name:"Yes"}],"label-property":"name","value-property":"id",error:r.$page.props.errors.progress_report_required,modelValue:r.form.progress_report_required,"onUpdate:modelValue":e[2]||(e[2]=s=>r.form.progress_report_required=s),"select-placeholder":"Please Select","search-placeholder":"Search..."},null,8,["error","modelValue"])])])]),_:1}),t(F,null,{title:o(()=>[l("div",z,[e[25]||(e[25]=i(" Programmes Levels & Fees ")),t(v,{buttonType:"info",onClick:r.showAddFee},{default:o(()=>[t(d(R),{class:"h-4 w-4"}),e[24]||(e[24]=l("span",{class:"ml-1 hidden sm:block"},"Add",-1))]),_:1},8,["onClick"])])]),content:o(()=>[(p(!0),m(y,null,V(r.groupedItems,(s,f)=>(p(),U(q,null,{trigger:o(()=>[i("Level "+_(f),1)]),content:o(()=>[t(d(B),{class:"px-4"},{default:o(()=>[t(d(N),{class:"bg-gray-100"},{default:o(()=>[t(d(k),null,{default:o(()=>[t(d(c),{class:"px-4"},{default:o(()=>e[26]||(e[26]=[i("Class Type")])),_:1}),t(d(c),null,{default:o(()=>e[27]||(e[27]=[i("Registration Fee")])),_:1}),t(d(c),null,{default:o(()=>e[28]||(e[28]=[i("Material Fee")])),_:1}),t(d(c),null,{default:o(()=>e[29]||(e[29]=[i("Monthly Fee (Old)")])),_:1}),t(d(c),null,{default:o(()=>e[30]||(e[30]=[i("Monthly Fee (New)")])),_:1}),t(d(c),null,{default:o(()=>e[31]||(e[31]=[i("Material")])),_:1}),t(d(c),{class:"text-center"},{default:o(()=>e[32]||(e[32]=[i("Action")])),_:1})]),_:1})]),_:1}),t(d(E),null,{default:o(()=>[s.length?T("",!0):(p(),U(d(k),{key:0},{default:o(()=>[t(d(h),{class:"text-center",colspan:"10"},{default:o(()=>e[33]||(e[33]=[l("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(p(!0),m(y,null,V(s,(n,L)=>(p(),U(d(k),null,{default:o(()=>[t(d(h),{class:"px-4"},{default:o(()=>[i(_(r.$page.props.class_types[s[L].class_type].name),1)]),_:2},1024),t(d(h),null,{default:o(()=>[i(_(n.registration_fee),1)]),_:2},1024),t(d(h),null,{default:o(()=>[i(_(n.material_fee),1)]),_:2},1024),t(d(h),null,{default:o(()=>[(p(!0),m(y,null,V(n.fees,b=>{var w;return p(),m("p",J,[i(_((w=r.$page.props.class_types_detail.find(S=>S.id===b.class_type_detail_id))==null?void 0:w.label)+" : ",1),l("span",K,_(b.value),1)])}),256))]),_:2},1024),t(d(h),null,{default:o(()=>[l("div",Q,[l("div",W,[(p(!0),m(y,null,V(n.fees,b=>{var w;return p(),m("p",Y,[i(_((w=r.$page.props.class_types_detail.find(S=>S.id===b.class_type_detail_id))==null?void 0:w.label)+" : ",1),l("span",G,_(b.new_fee_amount),1)])}),256))]),t(v,{variant:"link",class:"text-blue-500",onClick:b=>r.editFee(f,L,!n.programme_level_id)},{default:o(()=>e[34]||(e[34]=[i("Edit")])),_:2},1032,["onClick"])])]),_:2},1024),t(d(h),null,{default:o(()=>[l("div",X,[l("p",Z,[l("span",x,_(n.product.name),1)]),l("p",ee,[e[35]||(e[35]=i("Variation : ")),l("span",re,_(n.product_variation.option_name?n.product_variation.option_name:"-"),1)]),l("p",te,[e[36]||(e[36]=i("Sub Variation : ")),l("span",oe,_(n.product_sub_variation.option_name?n.product_sub_variation.option_name:"-"),1)])])]),_:2},1024),t(d(h),{class:"text-center"},{default:o(()=>[t(v,{variant:"destructive",onClick:b=>r.deleteLevel(n.programme_level_id,n.index)},{default:o(()=>e[37]||(e[37]=[i("Delete")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1}),t(F,null,{content:o(()=>[l("div",ie,[l("div",ae,[t(u,null,{default:o(()=>e[38]||(e[38]=[i("Active")])),_:1}),t(O,{modelValue:r.form.programme_active,"onUpdate:modelValue":e[3]||(e[3]=s=>r.form.programme_active=s)},null,8,["modelValue"])]),l("div",se,[t(v,{variant:"outline",onClick:e[4]||(e[4]=s=>r.$inertia.get(r.route("programmes")))},{default:o(()=>e[39]||(e[39]=[i("Cancel")])),_:1}),t(v,{onClick:r.submit},{default:o(()=>e[40]||(e[40]=[i("Save")])),_:1},8,["onClick"])])])]),_:1}),t(P,{open:r.show.add_fee,"onUpdate:open":e[15]||(e[15]=s=>r.show.add_fee=s)},{title:o(()=>e[41]||(e[41]=[i("Add Fee")])),content:o(()=>[t(q,{modelValue:r.collapsible.fee,"onUpdate:modelValue":e[9]||(e[9]=s=>r.collapsible.fee=s)},{trigger:o(()=>e[42]||(e[42]=[i("Fee Information")])),content:o(()=>[l("div",le,[l("div",null,[t(u,null,{default:o(()=>e[43]||(e[43]=[i("Level"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),t(g,{items:r.levels,"label-property":"name","value-property":"id",error:r.validation.level.error,modelValue:r.fee_form.level,"onUpdate:modelValue":e[5]||(e[5]=s=>r.fee_form.level=s),"select-placeholder":"Select Level","search-placeholder":"Search level..."},null,8,["items","error","modelValue"])]),l("div",null,[t(u,null,{default:o(()=>e[44]||(e[44]=[i("Registration Fee"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),t($,{type:"number",error:r.validation.registration_fee.error,modelValue:r.fee_form.registration_fee,"onUpdate:modelValue":e[6]||(e[6]=s=>r.fee_form.registration_fee=s)},null,8,["error","modelValue"])]),l("div",null,[t(u,null,{default:o(()=>e[45]||(e[45]=[i("Material Fee"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),t($,{type:"number",error:r.validation.material_fee.error,modelValue:r.fee_form.material_fee,"onUpdate:modelValue":e[7]||(e[7]=s=>r.fee_form.material_fee=s)},null,8,["error","modelValue"])]),l("div",null,[t(u,null,{default:o(()=>e[46]||(e[46]=[i("Class Type"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),t(g,{items:Object.values(r.$page.props.class_types),"label-property":"name","value-property":"id",error:r.validation.class_type.error,modelValue:r.fee_form.class_type,"onUpdate:modelValue":e[8]||(e[8]=s=>r.fee_form.class_type=s),"select-placeholder":"Select Class Type","search-placeholder":"Search class type..."},null,8,["items","error","modelValue"])]),(p(!0),m(y,null,V(r.list.class_types_detail,(s,f)=>(p(),m("div",null,[t(u,null,{default:o(()=>[i(_(s.label),1),e[47]||(e[47]=l("span",{class:"text-red-500"},"*",-1))]),_:2},1024),t($,{type:"number",min:"1",error:r.$page.props.errors.class_type_detail,modelValue:r.fee_form.fees[f].value,"onUpdate:modelValue":n=>r.fee_form.fees[f].value=n},null,8,["error","modelValue","onUpdate:modelValue"])]))),256))])]),_:1},8,["modelValue"]),t(q,{modelValue:r.collapsible.material,"onUpdate:modelValue":e[13]||(e[13]=s=>r.collapsible.material=s)},{trigger:o(()=>e[48]||(e[48]=[i("Material Information")])),content:o(()=>[l("div",de,[l("div",null,[t(u,null,{default:o(()=>e[49]||(e[49]=[i("Material")])),_:1}),t(g,{items:r.list.products,"label-property":"name","value-property":"id",error:r.validation.product.error,loading:r.loading.products,onSearch:r.findProducts,onSelect:r.findProductVariations,modelValue:r.search_product_form.product_id,"onUpdate:modelValue":e[10]||(e[10]=s=>r.search_product_form.product_id=s),"select-placeholder":"Select Material","search-placeholder":"Search material..."},null,8,["items","error","loading","onSearch","onSelect","modelValue"])]),r.show.product_variations?(p(),m("div",ne,[t(u,null,{default:o(()=>e[50]||(e[50]=[i("Variation"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),t(g,{items:r.list.product_variations,"label-property":"option_name","value-property":"id",loading:r.loading.product_variations,error:r.validation.product_variation.error,onSelect:r.findProductSubVariations,modelValue:r.search_product_form.product_variation_id,"onUpdate:modelValue":e[11]||(e[11]=s=>r.search_product_form.product_variation_id=s),"select-placeholder":"Select Variation","search-placeholder":"Search variation..."},null,8,["items","loading","error","onSelect","modelValue"])])):T("",!0),r.show.product_sub_variations?(p(),m("div",pe,[t(u,null,{default:o(()=>e[51]||(e[51]=[i("Sub Variation"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),t(g,{items:r.list.product_sub_variations,"label-property":"option_name","value-property":"id",loading:r.loading.product_sub_variations,error:r.validation.product_sub_variation.error,modelValue:r.search_product_form.product_sub_variation_id,"onUpdate:modelValue":e[12]||(e[12]=s=>r.search_product_form.product_sub_variation_id=s),"select-placeholder":"Select Sub Variation","search-placeholder":"Search sub variation..."},null,8,["items","loading","error","modelValue"])])):T("",!0)])]),_:1},8,["modelValue"])]),footer:o(()=>[t(v,{variant:"outline",onClick:e[14]||(e[14]=s=>r.show.add_fee=!1)},{default:o(()=>e[52]||(e[52]=[i("Cancel")])),_:1}),t(v,{onClick:r.addFee},{default:o(()=>e[53]||(e[53]=[i("Add")])),_:1},8,["onClick"])]),_:1},8,["open"]),t(P,{open:r.show.edit_fee,"onUpdate:open":e[17]||(e[17]=s=>r.show.edit_fee=s)},{title:o(()=>e[54]||(e[54]=[i("Edit Fee")])),content:o(()=>[l("div",ue,[(p(!0),m(y,null,V(r.fee_edit_form.data,s=>(p(),m("div",null,[t(u,null,{default:o(()=>{var f;return[i(_((f=r.$page.props.class_types_detail.find(n=>n.id===s.class_type_detail_id))==null?void 0:f.label),1),e[55]||(e[55]=l("span",{class:"text-red-500"},"*",-1))]}),_:2},1024),t($,{type:"number",min:"0",error:r.validation.material_fee.error,modelValue:s.new_fee_amount,"onUpdate:modelValue":f=>s.new_fee_amount=f},null,8,["error","modelValue","onUpdate:modelValue"])]))),256))])]),footer:o(()=>[t(v,{variant:"outline",onClick:e[16]||(e[16]=s=>r.show.edit_fee=!1)},{default:o(()=>e[56]||(e[56]=[i("Cancel")])),_:1}),t(v,{onClick:r.addFee},{default:o(()=>e[57]||(e[57]=[i("Add")])),_:1},8,["onClick"])]),_:1},8,["open"]),t(j,{open:r.confirmation.is_open,onClose:e[18]||(e[18]=s=>r.confirmation.is_open=!1),routeName:r.confirmation.route_name,id:r.confirmation.id},{title:o(()=>e[58]||(e[58]=[i("Delete Data")])),description:o(()=>e[59]||(e[59]=[i("Are you sure want to delete this data?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{dr as default};
