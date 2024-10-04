import{B as N}from"./Authenticated-214cc5de.js";import{h as I}from"./moment-a9aaa855.js";import{H as T,L}from"./@inertiajs-2b766590.js";import{e as S}from"./vue-debounce-ed417ae1.js";import{_ as g}from"./Card-e481dfab.js";import{_ as P}from"./DialogModal-5bb61319.js";import{_ as $,d as q,e as u,c as p,a as A,b as m}from"./TableRow-7ae90bc5.js";import{_ as D}from"./TableCaption-b5d13df9.js";import{_ as F}from"./NumberField-bef987dc.js";import{C as U}from"./lucide-vue-next-7b48dc26.js";import{x as b,v as t,u as a,O as e,F as C,b7 as k,q as _,U as o,y as l,t as V,B as y,I as B,J as f}from"./@vue-39dc9ff3.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ef5f5861.js";import"./axios-1779699b.js";import"./pusher-js-68b5c933.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./@radix-icons-9ff33614.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";const H={class:"grid grid-cols-1 2xl:grid-cols-3 gap-4"},E=l("span",{class:"text-red-500"},"*",-1),R=l("span",{class:"text-red-500"},"*",-1),M=l("span",{class:"text-red-500"},"*",-1),z={class:"flex justify-between items-center"},J=l("span",{class:"ml-1 hidden sm:block"},"Add Product",-1),Q=l("div",{class:"p-3"}," No Record Found ",-1),G={class:"flex justify-center"},K={class:"grid grid-cols-1 2xl:grid-cols-2 gap-4"},W={class:"flex justify-between items-center"},X=l("span",{class:"ml-1 hidden sm:block"},"Add Status",-1),Y=l("div",{class:"p-3"}," No Record Found ",-1),Z={class:"flex justify-end space-x-2"},x={class:"p-1 grid grid-cols-1 gap-4"},tt={key:0},et=l("span",{class:"text-red-500"},"*",-1),rt={key:1},ot=l("span",{class:"text-red-500"},"*",-1),at={class:"py-0.5"},it={components:{Head:T,Link:L,Table:$,TableBody:q,TableCaption:D,TableCell:u,TableHead:p,TableHeader:A,TableRow:m},mounted(){this.form.status=this.$page.props.status[0].id},data(){return{tracking_status_input:"",show:{add_order:!1,product_variations:!1,product_sub_variations:!1,add_tracking_status:!1},list:{students:[],products:[],product_variations:[],product_sub_variations:[]},loading:{students:!1,products:!1,product_variations:!1,product_sub_variations:!1},form:{student_id:"",address:"",shipping_provider:"",tracking_number:"",status:"",products:[],tracking_status:[]},selected:{product:[],product_variation:[],product_sub_variation:[]},search_product_form:{product_id:"",product_variation_id:"",product_sub_variation_id:""},validation:{product:{required:!0,error:!1},product_variation:{required:!1,error:!1},product_sub_variation:{required:!1,error:!1}}}},watch:{"search_product_form.product_id":{handler(){this.search_product_form.product_id&&(this.selected.product=this.list.products.find(d=>d.id===this.search_product_form.product_id),this.show.product_variations=this.selected.product.has_variation==1,this.show.product_sub_variations=this.selected.product.has_sub_variation==1,this.search_product_form.product_variation_id="",this.search_product_form.product_sub_variation_id="",this.selected.product_variation=[],this.selected.product_sub_variation=[])}},"search_product_form.product_variation_id":{handler(){this.search_product_form.product_variation_id&&(this.selected.product_variation=this.list.product_variations.find(d=>d.id===this.search_product_form.product_variation_id),this.search_product_form.product_sub_variation_id="",this.selected.product_sub_variation=[])}},"search_product_form.product_sub_variation_id":{handler(){this.search_product_form.product_sub_variation_id&&(this.selected.product_sub_variation=this.list.product_sub_variations.find(d=>d.id===this.search_product_form.product_sub_variation_id))}},"form.products":{handler(){this.form.products.forEach(d=>{d.quantity<1&&(d.quantity=1)})},deep:!0}},methods:{showAddOrder(){this.search_product_form.product_id="",this.search_product_form.product_variation_id="",this.search_product_form.product_sub_variation_id="",this.list.products=[],this.list.product_variations=[],this.list.product_sub_variations=[],this.selected.product=[],this.selected.product_variation=[],this.selected.product_sub_variation=[],this.show.product_variations=!1,this.show.product_sub_variations=!1,this.validation.product.error=!1,this.validation.product_variation.required=!1,this.validation.product_variation.error=!1,this.validation.product_sub_variation.required=!1,this.validation.product_sub_variation.error=!1,this.show.add_order=!0},showTrackingStatus(){this.tracking_status_input="",this.show.add_tracking_status=!0},findStudents:S(function(d){d&&(this.form.student_id="",this.loading.students=!0,axios.get(route("students.find"),{params:{keyword:d}}).then(r=>{this.list.students=r.data,this.loading.students=!1}))},1e3),setAddress(d){this.form.address=d.user_address},clearUsers(){this.list.students=[]},findProducts:S(function(d){d&&(this.search_product_form.product_id="",this.search_product_form.product_variation_id="",this.search_product_form.product_sub_variation_id="",this.form.student_id="",this.loading.products=!0,axios.get(route("products.find_products"),{params:{keyword:d}}).then(r=>{this.list.products=r.data,this.loading.products=!1}))},1e3),findProductVariations:S(function(d){this.search_product_form.product_variation_id="",this.search_product_form.product_sub_variation_id="",this.loading.product_variations=!0,axios.get(route("products.find_product_variations"),{params:{product_id:this.search_product_form.product_id}}).then(r=>{this.list.product_variations=r.data,this.loading.product_variations=!1})},1e3),findProductSubVariations:S(function(d){this.search_product_form.product_sub_variation_id="",this.loading.product_sub_variations=!0,axios.get(route("products.find_product_sub_variations"),{params:{product_variation_id:this.search_product_form.product_variation_id}}).then(r=>{this.list.product_sub_variations=r.data,this.loading.product_sub_variations=!1})},1e3),addProduct(){this.validation.product.error=!Object.keys(this.selected.product).length,this.validation.product_variation.required=this.selected.product.has_variation==1,this.validation.product_variation.error=this.selected.product.has_variation==1&&!Object.keys(this.selected.product_variation).length,this.validation.product_sub_variation.required=this.selected.product.has_sub_variation==1,this.validation.product_sub_variation.error=this.selected.product.has_sub_variation==1&&!Object.keys(this.selected.product_sub_variation).length,!(this.validation.product.required&&!Object.keys(this.selected.product).length||this.validation.product_variation.required&&!Object.keys(this.selected.product_variation).length||this.validation.product_sub_variation.required&&!Object.keys(this.selected.product_sub_variation).length)&&(this.form.products.push({product:this.selected.product,product_variation:this.selected.product_variation,product_sub_variation:this.selected.product_sub_variation,quantity:1}),this.show.add_order=!1)},addStatus(){this.form.tracking_status.push({name:this.tracking_status_input,datetime:I()}),this.show.add_tracking_status=!1},deleteItem(d){this.form.products.splice(d,1)},deleteStatus(d){this.form.tracking_status.splice(d,1)},storeOrder(){this.$inertia.post(route("orders.store"),this.form)}}},ee=Object.assign(it,{__name:"Create",setup(d){return(r,s)=>{const c=k("Label"),h=k("ComboBox"),O=k("Textarea"),n=k("Button"),j=k("Input");return _(),b(C,null,[t(a(T),{title:"Orders"}),t(N,null,{header:e(()=>[]),default:e(()=>[t(g,null,{title:e(()=>[o("Order Information")]),content:e(()=>[l("div",H,[l("div",null,[t(c,null,{default:e(()=>[o("Student's Name"),E]),_:1}),t(h,{items:r.list.students,"label-property":"name","value-property":"id",error:!!r.$page.props.errors.student_id,modelValue:r.form.student_id,"onUpdate:modelValue":s[0]||(s[0]=i=>r.form.student_id=i),onSearch:r.findStudents,loading:r.loading.students,onSelect:r.setAddress,"select-placeholder":"Search Student","search-placeholder":"Search student..."},null,8,["items","error","modelValue","onSearch","loading","onSelect"])]),l("div",null,[t(c,null,{default:e(()=>[o("Address"),R]),_:1}),t(O,{modelValue:r.form.address,"onUpdate:modelValue":s[1]||(s[1]=i=>r.form.address=i)},null,8,["modelValue"])]),l("div",null,[t(c,null,{default:e(()=>[o("Status"),M]),_:1}),t(h,{items:r.$page.props.status,"label-property":"name","value-property":"id",modelValue:r.form.status,"onUpdate:modelValue":s[2]||(s[2]=i=>r.form.status=i),"search-placeholder":"Search status..."},null,8,["items","modelValue"])])])]),_:1}),t(g,null,{title:e(()=>[l("div",z,[o(" Product Information "),t(n,{onClick:r.showAddOrder},{default:e(()=>[t(a(U),{class:"h-4 w-4"}),J]),_:1},8,["onClick"])])]),content:e(()=>[t(a($),{class:"px-4"},{default:e(()=>[t(a(A),{class:"bg-gray-100"},{default:e(()=>[t(a(m),null,{default:e(()=>[t(a(p),{class:"px-4"},{default:e(()=>[o("#")]),_:1}),t(a(p),null,{default:e(()=>[o("Name")]),_:1}),t(a(p),null,{default:e(()=>[o("Variation")]),_:1}),t(a(p),null,{default:e(()=>[o("Sub Variation")]),_:1}),t(a(p),{class:"text-center"},{default:e(()=>[o("Quantity")]),_:1}),t(a(p),{class:"text-center"},{default:e(()=>[o("Action")]),_:1})]),_:1})]),_:1}),t(a(q),null,{default:e(()=>[r.form.products.length?y("",!0):(_(),V(a(m),{key:0},{default:e(()=>[t(a(u),{class:"text-center",colspan:"10"},{default:e(()=>[Q]),_:1})]),_:1})),(_(!0),b(C,null,B(r.form.products,(i,v)=>(_(),V(a(m),null,{default:e(()=>[t(a(u),{class:"px-4"},{default:e(()=>[o(f(v+1),1)]),_:2},1024),t(a(u),null,{default:e(()=>[o(f(i.product.name),1)]),_:2},1024),t(a(u),null,{default:e(()=>[o(f(i.product_variation.option_name?i.product_variation.option_name:"-"),1)]),_:2},1024),t(a(u),null,{default:e(()=>[o(f(i.product_sub_variation.option_name?i.product_sub_variation.option_name:"-"),1)]),_:2},1024),t(a(u),null,{default:e(()=>[l("div",G,[t(F,{modelValue:i.quantity,"onUpdate:modelValue":w=>i.quantity=w},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024),t(a(u),{class:"text-center"},{default:e(()=>[t(n,{variant:"destructive",onClick:w=>r.deleteItem(v)},{default:e(()=>[o("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(g,null,{title:e(()=>[o("Tracking Information")]),content:e(()=>[l("div",K,[l("div",null,[t(c,null,{default:e(()=>[o("Shipping Provider")]),_:1}),t(h,{items:r.$page.props.shipping_providers,"label-property":"name","value-property":"id",modelValue:r.form.shipping_provider,"onUpdate:modelValue":s[3]||(s[3]=i=>r.form.shipping_provider=i),"select-placeholder":"Select Shipping Provider","search-placeholder":"Search shipping provider..."},null,8,["items","modelValue"])]),l("div",null,[t(c,null,{default:e(()=>[o("Tracking Number")]),_:1}),t(j,{type:"text",modelValue:r.form.tracking_number,"onUpdate:modelValue":s[4]||(s[4]=i=>r.form.tracking_number=i),placeholder:"e.g. AA987654321BB"},null,8,["modelValue"])])])]),_:1}),t(g,null,{title:e(()=>[l("div",W,[o(" Delivery Status "),t(n,{onClick:r.showTrackingStatus},{default:e(()=>[t(a(U),{class:"h-4 w-4"}),X]),_:1},8,["onClick"])])]),content:e(()=>[t(a($),{class:"px-4"},{default:e(()=>[t(a(A),{class:"bg-gray-100"},{default:e(()=>[t(a(m),null,{default:e(()=>[t(a(p),{class:"px-4"},{default:e(()=>[o("#")]),_:1}),t(a(p),null,{default:e(()=>[o("Status")]),_:1}),t(a(p),{class:"text-center"},{default:e(()=>[o("Action")]),_:1})]),_:1})]),_:1}),t(a(q),null,{default:e(()=>[r.form.tracking_status.length?y("",!0):(_(),V(a(m),{key:0},{default:e(()=>[t(a(u),{class:"text-center",colspan:"10"},{default:e(()=>[Y]),_:1})]),_:1})),(_(!0),b(C,null,B(r.form.tracking_status,(i,v)=>(_(),V(a(m),null,{default:e(()=>[t(a(u),{class:"px-4"},{default:e(()=>[o(f(v+1),1)]),_:2},1024),t(a(u),null,{default:e(()=>[o(f(i.name),1)]),_:2},1024),t(a(u),{class:"text-center"},{default:e(()=>[t(n,{variant:"destructive",onClick:w=>r.deleteStatus(v)},{default:e(()=>[o("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),t(g,null,{content:e(()=>[l("div",Z,[t(n,{variant:"outline",onClick:s[5]||(s[5]=i=>r.$inertia.get(r.route("orders")))},{default:e(()=>[o("Cancel")]),_:1}),t(n,{onClick:r.storeOrder},{default:e(()=>[o("Save")]),_:1},8,["onClick"])])]),_:1}),t(P,{open:r.show.add_order,"onUpdate:open":s[10]||(s[10]=i=>r.show.add_order=i)},{title:e(()=>[o("Add Product")]),content:e(()=>[l("div",x,[l("div",null,[t(c,null,{default:e(()=>[o("Material")]),_:1}),t(h,{items:r.list.products,"label-property":"name","value-property":"id",error:r.validation.product.error,loading:r.loading.products,onSearch:r.findProducts,onSelect:r.findProductVariations,modelValue:r.search_product_form.product_id,"onUpdate:modelValue":s[6]||(s[6]=i=>r.search_product_form.product_id=i),"select-placeholder":"Select Material","search-placeholder":"Search material..."},null,8,["items","error","loading","onSearch","onSelect","modelValue"])]),r.show.product_variations?(_(),b("div",tt,[t(c,null,{default:e(()=>[o("Variation"),et]),_:1}),t(h,{items:r.list.product_variations,"label-property":"option_name","value-property":"id",loading:r.loading.product_variations,error:r.validation.product_variation.error,onSelect:r.findProductSubVariations,modelValue:r.search_product_form.product_variation_id,"onUpdate:modelValue":s[7]||(s[7]=i=>r.search_product_form.product_variation_id=i),"select-placeholder":"Select Variation","search-placeholder":"Search variation..."},null,8,["items","loading","error","onSelect","modelValue"])])):y("",!0),r.show.product_sub_variations?(_(),b("div",rt,[t(c,null,{default:e(()=>[o("Sub Variation"),ot]),_:1}),t(h,{items:r.list.product_sub_variations,"label-property":"option_name","value-property":"id",loading:r.loading.product_sub_variations,error:r.validation.product_sub_variation.error,modelValue:r.search_product_form.product_sub_variation_id,"onUpdate:modelValue":s[8]||(s[8]=i=>r.search_product_form.product_sub_variation_id=i),"select-placeholder":"Select Sub Variation","search-placeholder":"Search sub variation..."},null,8,["items","loading","error","modelValue"])])):y("",!0)])]),footer:e(()=>[t(n,{variant:"outline",onClick:s[9]||(s[9]=i=>r.show.add_order=!1)},{default:e(()=>[o("Cancel")]),_:1}),t(n,{onClick:r.addProduct},{default:e(()=>[o("Add")]),_:1},8,["onClick"])]),_:1},8,["open"]),t(P,{open:r.show.add_tracking_status,"onUpdate:open":s[13]||(s[13]=i=>r.show.add_tracking_status=i)},{title:e(()=>[o("Add Status")]),content:e(()=>[l("div",at,[t(O,{modelValue:r.tracking_status_input,"onUpdate:modelValue":s[11]||(s[11]=i=>r.tracking_status_input=i),rows:"3",placeholder:"E.g. Order status changed from Processing to Shipped."},null,8,["modelValue"])])]),footer:e(()=>[t(n,{variant:"outline",onClick:s[12]||(s[12]=i=>r.show.add_tracking_status=!1)},{default:e(()=>[o("Cancel")]),_:1}),t(n,{onClick:r.addStatus},{default:e(()=>[o("Add")]),_:1},8,["onClick"])]),_:1},8,["open"])]),_:1})],64)}}});export{ee as default};