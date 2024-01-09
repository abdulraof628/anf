import{a as P,o as a,c as l,b as d,u as h,w as n,F as m,L as $,H as C,d as e,e as O,f,l as v,n as _,g as y,h as b,t as c,k as i,j as x,m as j}from"./app-01945339.js";import{B as D}from"./Authenticated-d0b2b0c3.js";import{B as g}from"./Button-3f8bd8cb.js";import{b as S}from"./toggle-054b6181.js";import{M as T}from"./Modal-127373cf.js";import{s as w}from"./multiselect-44431070.js";import{C as F}from"./ConfirmationModal-6132b5e5.js";import"./ApplicationLogo-f76971ac.js";import"./XIcon-7fc73615.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./moment-fbc5633a.js";import"./VueFinalModal.esm-a544f9d3.js";/* empty css                                                              */import"./transition-66fd05d7.js";const M={class:"md:grid md:grid-cols-2"},N={class:"md:mt-0 md:col-span-2"},A={class:"px-4 py-5 space-y-6 sm:p-6"},B={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},E={class:"sm:row-span-3"},q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},U=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Programme Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),z={class:"grid grid-cols-2 sm:grid-cols-0 gap-0 sm:gap-4"},I={class:"mb-4"},H=e("label",{for:"programme_name",class:"block text-sm text-gray-700 font-bold"},[i(" Programme Name "),e("span",{class:"text-red-500"},"*")],-1),R={class:"mt-1 flex rounded-md shadow-sm"},G={class:"mb-4"},J=e("label",{for:"programme_country",class:"block text-sm text-gray-700 font-bold"},[i(" Centre Country "),e("span",{class:"text-red-500"},"*")],-1),K={class:"mt-1 flex rounded-md shadow-sm"},Q=e("option",{value:""},"Select a country",-1),W=["value"],X={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},Y={class:"sm:row-span-3"},Z={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},ee={class:"mb-5"},te={class:"flex justify-between items-end"},oe=e("h1",{class:"text-indigo-800 font-bold"},"Programme Levels and Fees",-1),re=e("div",{class:"border-b border-dashed border-indigo-900 mt-3"},null,-1),se={class:"overflow-hidden border border-gray-800 rounded-t-sm rounded-b-none mt-3"},ae={class:"shadow shadow-gray-500 min-w-full divide-y divide-gray-800"},ie=e("thead",{class:"bg-slate-700 text-white"},[e("tr",null,[e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Level"),e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Class Type"),e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Material Fee"),e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Fee"),e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Material"),e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Action")])],-1),le={key:0},de=e("td",{colspan:"8",class:"py-4 text-center font-semibold text-sm italic"},"No Fees added.",-1),ne=[de],ce={else:"",class:"hover:bg-gray-200"},pe={class:"px-4 py-2 text-center border border-gray-400 text-sm text-gray-700"},ue={class:"px-4 py-2 text-center border border-gray-400 text-sm text-gray-700"},me={class:"px-4 py-2 text-center border border-gray-400 text-sm text-gray-700"},fe={class:"px-4 py-2 text-center border border-gray-400 text-sm text-gray-700 w-3/12"},_e={class:"flex space-x-4"},be={class:"flex flex-col"},ge={class:"text-sm text-gray-700"},he={class:"font-bold"},ve={class:"flex flex-1 flex-col justify-center items-end"},xe=["onClick"],ye={class:"px-4 py-2 text-left border border-gray-400"},we={class:"flex flex-col"},ke={class:"text-sm text-gray-700 font-normal underline"},Te={class:"font-bold"},Se={class:"text-sm text-gray-700 italic"},Le={class:"font-semibold"},Ve={class:"text-sm text-gray-700 italic"},Pe={class:"font-semibold"},$e={class:"px-4 py-2 text-center border border-gray-400"},Ce={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},Oe={class:"flex justify-between items-center"},je={class:"flex space-x-2"},De=e("label",{for:"",class:"block font-bold text-gray-700"},"Active",-1),Fe={class:"flex space-x-2"},Me=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Add New Fee ",-1),Ne={class:"overflow-y-auto p-6",ref:"scrollableDiv"},Ae={class:"flex flex-col space-y-4"},Be={class:""},Ee=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Fee Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),qe={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4 items-end mb-3"},Ue={class:"grow"},ze=e("label",{for:"programme_level",class:"block text-sm text-gray-700 font-bold"},[i(" Level "),e("span",{class:"text-red-500"},"*")],-1),Ie={class:"mt-1 flex rounded-md shadow-sm"},He=e("option",{value:""},"Please select a level",-1),Re=["value"],Ge={class:"grow"},Je=e("label",{for:"programme_material_fee",class:"block text-sm text-gray-700 font-bold"},[i(" Material Fee "),e("span",{class:"text-red-500"},"*")],-1),Ke={class:"mt-1 flex rounded-md shadow-sm"},Qe={class:"grow"},We=e("label",{for:"class_type",class:"block text-sm text-gray-700 font-bold"},[i(" Class Type "),e("span",{class:"text-red-500"},"*")],-1),Xe={class:"mt-1 flex rounded-md shadow-sm"},Ye=e("option",{value:""},"-- Select Type --",-1),Ze=["value"],et={class:"grow"},tt={for:"class_type_detail",class:"block text-sm text-gray-700 font-bold"},ot=e("span",{class:"text-red-500"},"*",-1),rt={class:"mt-1 flex rounded-md shadow-sm"},st=["onUpdate:modelValue"],at={class:""},it=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Material Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),lt={class:"grid grid-cols-1"},dt={class:"mb-4"},nt=e("label",{for:"product_category",class:"block text-sm text-gray-700 font-bold mb-2"}," Product Name ",-1),ct={class:"mt-1 flex rounded-md shadow-sm"},pt={key:0,class:"mb-4"},ut=e("label",{for:"product_category",class:"block text-sm text-gray-700 font-bold mb-2"},[i(" Variation "),e("span",{class:"text-red-500"},"*")],-1),mt={class:"mt-1 flex rounded-md shadow-sm"},ft={key:1,class:"mb-4"},_t=e("label",{for:"product_category",class:"block text-sm text-gray-700 font-bold mb-2"},[i(" Sub Variation "),e("span",{class:"text-red-500"},"*")],-1),bt={class:"mt-1 flex rounded-md shadow-sm z-50"},gt={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},ht=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Edit Fee ",-1),vt={class:"overflow-y-auto p-6",ref:"scrollableDiv"},xt={class:"flex flex-col space-y-4"},yt={class:""},wt={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4 items-end mb-3"},kt={class:"grow"},Tt={for:"programme_material_fee",class:"block text-sm text-gray-700 font-bold"},St=e("span",{class:"text-red-500"},"*",-1),Lt={class:"mt-1 flex rounded-md shadow-sm"},Vt=["onUpdate:modelValue"],Pt={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},$t={components:{Link:$,Toggle:S},mounted(){this.$page.props.programme_info.forEach(r=>{this.form.programme_info.push(r)})},data(){return{confirmation_modal:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",form:{programme_id:this.$page.props.programme_data?this.$page.props.programme_data.id:"",programme_country:this.$page.props.programme_data?this.$page.props.programme_data.country_id:"",programme_name:this.$page.props.programme_data?this.$page.props.programme_data.name:"",programme_info:[],programme_active:this.$page.props.programme_data?this.$page.props.programme_data.status:!1},fee_form:{level:"",material_fee:0,class_type:"",fees:[]},fee_edit_form:{new_item:!1,programme_info_index:"",data:[]},show:{add_fee:!1,edit_fee:!1,product_variations:!1,product_sub_variations:!1,add_tracking_status:!1},list:{products:[],product_variations:[],product_sub_variations:[],class_types_detail:[]},loading:{products:!1,product_variations:!1,product_sub_variations:!1},selected:{product:[],product_variation:[],product_sub_variation:[]},search_product_form:{product_id:"",product_variation_id:"",product_sub_variation_id:""},validation:{level:{required:!0,error:!1},material_fee:{required:!0,error:!1},class_type:{required:!0,error:!1},product:{required:!1,error:!1},product_variation:{required:!1,error:!1},product_sub_variation:{required:!1,error:!1}}}},watch:{"fee_form.class_type":{handler(){this.list.class_types_detail=[],this.fee_form.fees=[],this.$page.props.class_types_detail.forEach(r=>{r.class_type_id==this.fee_form.class_type&&(this.list.class_types_detail.push(r),this.fee_form.fees.push({class_type_detail_id:r.id,value:1}))})},deep:!0},"search_product_form.product_id":{handler(){this.search_product_form.product_id&&(this.selected.product=this.list.products.find(r=>r.id===this.search_product_form.product_id),this.show.product_variations=this.selected.product.has_variation==1,this.show.product_sub_variations=this.selected.product.has_sub_variation==1,this.search_product_form.product_variation_id="",this.search_product_form.product_sub_variation_id="",this.selected.product_variation=[],this.selected.product_sub_variation=[])}},"search_product_form.product_variation_id":{handler(){this.search_product_form.product_variation_id&&(this.selected.product_variation=this.list.product_variations.find(r=>r.id===this.search_product_form.product_variation_id),this.search_product_form.product_sub_variation_id="",this.selected.product_sub_variation=[])}},"search_product_form.product_sub_variation_id":{handler(){this.search_product_form.product_sub_variation_id&&(this.selected.product_sub_variation=this.list.product_sub_variations.find(r=>r.id===this.search_product_form.product_sub_variation_id))}}},methods:{submit(){this.$inertia.post(route("programmes.update"),this.form)},showAddFee(){this.search_product_form.product_id="",this.search_product_form.product_variation_id="",this.search_product_form.product_sub_variation_id="",this.list.products=[],this.list.product_variations=[],this.list.product_sub_variations=[],this.selected.product=[],this.selected.product_variation=[],this.selected.product_sub_variation=[],this.show.product_variations=!1,this.show.product_sub_variations=!1,this.validation.product.error=!1,this.validation.product_variation.required=!1,this.validation.product_variation.error=!1,this.validation.product_sub_variation.required=!1,this.validation.product_sub_variation.error=!1,this.show.add_fee=!0},addFee(){if(this.validation.level.error=this.fee_form.level=="",this.validation.material_fee.error=this.fee_form.material_fee==="",this.validation.class_type.error=this.fee_form.class_type=="",this.validation.product.error=!!(this.validation.product.required&&!Object.keys(this.selected.product).length),this.validation.product_variation.required=this.selected.product.has_variation==1,this.validation.product_variation.error=this.selected.product.has_variation==1&&!Object.keys(this.selected.product_variation).length,this.validation.product_sub_variation.required=this.selected.product.has_sub_variation==1,this.validation.product_sub_variation.error=this.selected.product.has_sub_variation==1&&!Object.keys(this.selected.product_sub_variation).length,this.validation.product.required&&!Object.keys(this.selected.product).length||this.validation.product_variation.required&&!Object.keys(this.selected.product_variation).length||this.validation.product_sub_variation.required&&!Object.keys(this.selected.product_sub_variation).length||this.fee_form.level==""||this.fee_form.material_fee===""||this.fee_form.class_type==""||this.fee_form.fees.length<1)return;const r=this.fee_form.fees;this.form.programme_info.push({level:this.fee_form.level,material_fee:this.fee_form.material_fee,class_type:this.fee_form.class_type,fees:r,product:this.selected.product,product_variation:this.selected.product_variation,product_sub_variation:this.selected.product_sub_variation}),this.form.programme_info.sort((t,s)=>t.level-s.level),this.clearForm(),this.show.add_fee=!1},deleteLevel(r,t){if(!r){this.form.programme_info.splice(t,1);return}this.confirmationData=r,this.confirmation_modal=!0},numbersOnly(r){r=r||window.event;var t=r.which?r.which:r.keyCode;if(t>31&&(t<48||t>57)&&t!==46)r.preventDefault();else return!0},clearForm(){this.fee_form.level="",this.fee_form.material_fee=0,this.fee_form.class_type="",this.fee_form.fees=[]},findProducts(r){r&&(this.loading.products=!0,axios.get(route("products.find_products"),{params:{keyword:r}}).then(t=>{this.list.products=t.data,this.loading.products=!1}).finally(()=>{this.scrollToEnd()}))},findProductVariations(){this.loading.product_variations=!0,axios.get(route("products.find_product_variations"),{params:{product_id:this.search_product_form.product_id}}).then(r=>{this.list.product_variations=r.data,this.loading.product_variations=!1}).finally(()=>{this.scrollToEnd()})},findProductSubVariations(){this.loading.product_sub_variations=!0,axios.get(route("products.find_product_sub_variations"),{params:{product_variation_id:this.search_product_form.product_variation_id}}).then(r=>{this.list.product_sub_variations=r.data,this.loading.product_sub_variations=!1}).finally(()=>{this.scrollToEnd()})},scrollToEnd(){setTimeout(()=>{const r=this.$refs.scrollableDiv;r.scrollTop=r.scrollHeight},10)},editFee(r,t){this.fee_edit_form.new_item=t,this.fee_edit_form.programme_info_index=r,this.fee_edit_form.data=[],this.fee_edit_form.data=this.form.programme_info[r].fees,this.show.edit_fee=!0},updateFee(){this.fee_edit_form.new_item?(this.form.programme_info[this.fee_edit_form.programme_info_index].fees=[],this.form.programme_info[this.fee_edit_form.programme_info_index].fees=this.fee_edit_form.data,this.show.edit_fee=!1):this.$inertia.patch(route("programmes.fee.update"),{fee_edit_form:this.fee_edit_form},{preserveState:!1})}}},Ht=Object.assign($t,{__name:"Edit",setup(r){return(t,s)=>{const L=P("debounce");return a(),l(m,null,[d(h(C),{title:"Programmes"}),d(D,null,{header:n(()=>[]),default:n(()=>[e("div",M,[e("div",N,[e("form",{onSubmit:s[4]||(s[4]=O((...o)=>t.submit&&t.submit(...o),["prevent"]))},[e("div",A,[e("div",B,[e("div",E,[e("div",q,[U,e("div",z,[e("div",I,[H,e("div",R,[f(e("input",{type:"text",name:"programme_name",id:"programme_name",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.programme_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[0]||(s[0]=o=>t.form.programme_name=o),autocomplete:"off"},null,2),[[v,t.form.programme_name]])])]),e("div",G,[J,e("div",K,[f(e("select",{type:"text",name:"programme_country",id:"programme_country",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.programme_country?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[1]||(s[1]=o=>t.form.programme_country=o),autocomplete:"none"},[Q,(a(!0),l(m,null,b(t.$page.props.countries,o=>(a(),l("option",{value:o.id},c(o.name),9,W))),256))],2),[[y,t.form.programme_country]])])])])])])]),e("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[e("div",te,[oe,d(g,{buttonType:"info",onClick:t.showAddFee},{default:n(()=>[i("Add Fee")]),_:1},8,["onClick"])]),re]),e("div",se,[e("table",ae,[ie,e("tbody",null,[t.form.programme_info.length?x("",!0):(a(),l("tr",le,ne)),(a(!0),l(m,null,b(t.form.programme_info,(o,p)=>(a(),l("tr",ce,[e("td",pe,c(o.level),1),e("td",ue,c(t.$page.props.class_types[t.form.programme_info[p].class_type].name),1),e("td",me,c(o.material_fee),1),e("td",fe,[e("div",_e,[e("div",be,[(a(!0),l(m,null,b(o.fees,u=>{var k;return a(),l("p",ge,[i(c((k=t.$page.props.class_types_detail.find(V=>V.id===u.class_type_detail_id))==null?void 0:k.label)+" : ",1),e("span",he,c(u.value),1)])}),256))]),e("div",ve,[e("span",{class:"font-semibold text-yellow-600 hover:underline cursor-pointer",onClick:u=>t.editFee(p,!o.programme_level_id)},"Edit",8,xe)])])]),e("td",ye,[e("div",we,[e("p",ke,[e("span",Te,c(o.product.name),1)]),e("p",Se,[i("Variation : "),e("span",Le,c(o.product_variation.option_name?o.product_variation.option_name:"-"),1)]),e("p",Ve,[i("Sub Variation : "),e("span",Pe,c(o.product_sub_variation.option_name?o.product_sub_variation.option_name:"-"),1)])])]),e("td",$e,[t.$page.props.can.delete_programmes?(a(),j(g,{key:0,buttonType:"danger",onClick:u=>t.deleteLevel(o.programme_level_id,p)},{default:n(()=>[i("Delete")]),_:2},1032,["onClick"])):x("",!0)])]))),256))])])])])])]),e("div",Ce,[e("div",Oe,[e("div",je,[De,d(h(S),{modelValue:t.form.programme_active,"onUpdate:modelValue":s[2]||(s[2]=o=>t.form.programme_active=o),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),e("div",Fe,[d(g,{buttonType:"gray",route:t.route("programmes")},{default:n(()=>[i("Cancel")]),_:1},8,["route"]),d(g,{onClick:s[3]||(s[3]=o=>t.submit())},{default:n(()=>[i("Save")]),_:1})])])])])],32)])]),d(T,{showModal:t.show.add_fee,modalType:"sm",onHideModal:s[14]||(s[14]=o=>t.show.add_fee=!1)},{header:n(()=>[Me]),content:n(()=>[e("div",Ne,[e("div",Ae,[e("div",Be,[Ee,e("div",qe,[e("div",Ue,[ze,e("div",Ie,[f(e("select",{name:"programme_level",id:"programme_level",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.validation.level.error?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[5]||(s[5]=o=>t.fee_form.level=o),autocomplete:"off"},[He,(a(),l(m,null,b(10,o=>e("option",{value:o},"Level "+c(o),9,Re)),64))],2),[[y,t.fee_form.level]])])]),e("div",Ge,[Je,e("div",Ke,[f(e("input",{type:"number",min:"0",name:"programme_material_fee",id:"programme_material_fee",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.validation.material_fee.error?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[6]||(s[6]=o=>t.fee_form.material_fee=o),autocomplete:"off"},null,2),[[v,t.fee_form.material_fee]])])]),e("div",Qe,[We,e("div",Xe,[f(e("select",{name:"class_type",id:"class_type",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.validation.class_type.error?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[7]||(s[7]=o=>t.fee_form.class_type=o),autocomplete:"off"},[Ye,(a(!0),l(m,null,b(t.$page.props.class_types,(o,p)=>(a(),l("option",{value:o.id,key:p},c(o.name),9,Ze))),128))],2),[[y,t.fee_form.class_type]])])]),(a(!0),l(m,null,b(t.list.class_types_detail,(o,p)=>(a(),l("div",et,[e("label",tt,[i(c(o.label)+" ",1),ot]),e("div",rt,[f(e("input",{type:"number",min:"1",name:"class_type_detail",id:"class_type_detail",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.class_type_detail?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":u=>t.fee_form.fees[p].value=u,autocomplete:"off"},null,10,st),[[v,t.fee_form.fees[p].value]])])]))),256))])]),e("div",at,[it,e("div",lt,[e("div",dt,[nt,e("div",ct,[f(d(h(w),{ref:"multiselect",modelValue:t.search_product_form.product_id,"onUpdate:modelValue":s[8]||(s[8]=o=>t.search_product_form.product_id=o),onSelect:t.findProductVariations,onOpen:s[9]||(s[9]=o=>this.scrollToEnd()),valueProp:"id",loading:t.loading.products,placeholder:"Please enter some keywords",options:t.list.products,searchable:!0,noOptionsText:"Nothing found",noResultsText:"Nothing found",clearOnSelect:!0,canClear:!1,canDeselect:!1,"internal-search":!1,trackBy:"name",label:"name",classes:{container:t.validation.product.error?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 sm:text-sm font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","onSelect","loading","options","classes"]),[[L,t.findProducts,"1s"]])])]),t.show.product_variations?(a(),l("div",pt,[ut,e("div",mt,[d(h(w),{modelValue:t.search_product_form.product_variation_id,"onUpdate:modelValue":s[10]||(s[10]=o=>t.search_product_form.product_variation_id=o),onSelect:t.findProductSubVariations,onOpen:s[11]||(s[11]=o=>this.scrollToEnd()),valueProp:"id",loading:t.loading.product_variations,placeholder:"Select a variation",options:t.list.product_variations,searchable:!0,noOptionsText:"Nothing found",noResultsText:"Nothing found",clearOnSelect:!0,canClear:!1,canDeselect:!1,"internal-search":!1,trackBy:"option_name",label:"option_name",classes:{container:t.validation.product_variation.error?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 sm:text-sm font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","onSelect","loading","options","classes"])])])):x("",!0),t.show.product_sub_variations?(a(),l("div",ft,[_t,e("div",bt,[d(h(w),{modelValue:t.search_product_form.product_sub_variation_id,"onUpdate:modelValue":s[12]||(s[12]=o=>t.search_product_form.product_sub_variation_id=o),onOpen:s[13]||(s[13]=o=>this.scrollToEnd()),valueProp:"id",loading:t.loading.product_sub_variations,placeholder:"Select a sub variation",options:t.list.product_sub_variations,searchable:!0,noOptionsText:"Nothing found",noResultsText:"Nothing found",clearOnSelect:!0,canClear:!1,canDeselect:!1,"internal-search":!1,trackBy:"option_name",label:"option_name",classes:{container:t.validation.product_sub_variation.error?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 sm:text-sm font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","loading","options","classes"])])])):x("",!0)])])])],512)]),footer:n(()=>[e("div",gt,[d(g,{buttonType:"info",onClick:t.addFee},{default:n(()=>[i("Add Fee")]),_:1},8,["onClick"])])]),_:1},8,["showModal"]),d(T,{showModal:t.show.edit_fee,modalType:"sm",onHideModal:s[16]||(s[16]=o=>t.show.edit_fee=!1)},{header:n(()=>[ht]),content:n(()=>[e("div",vt,[e("div",xt,[e("div",yt,[e("div",wt,[(a(!0),l(m,null,b(t.fee_edit_form.data,o=>{var p;return a(),l("div",kt,[e("label",Tt,[i(c((p=t.$page.props.class_types_detail.find(u=>u.id===o.class_type_detail_id))==null?void 0:p.label),1),St]),e("div",Lt,[f(e("input",{type:"number",min:"0",name:"programme_material_fee",id:"programme_material_fee",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.validation.material_fee.error?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":u=>o.value=u,autocomplete:"off"},null,10,Vt),[[v,o.value]])])])}),256))])])])],512)]),footer:n(()=>[e("div",Pt,[d(g,{buttonType:"info",onClick:s[15]||(s[15]=o=>t.updateFee())},{default:n(()=>[i("Save")]),_:1})])]),_:1},8,["showModal"]),d(F,{show:t.confirmation_modal,onClose:s[17]||(s[17]=o=>t.confirmation_modal=!1),confirmationAlert:"danger",confirmationTitle:"Delete Fee",confirmationText:"Are you sure want to delete this fee? Changes will be made once you clicked <span class='font-bold text-red-500'>CONFIRM</span>. Please be certain and this action is irreversible!",confirmationButton:"Confirm",confirmationMethod:"delete",confirmationRoute:"programmes.fee.destroy",confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64)}}});export{Ht as default};
