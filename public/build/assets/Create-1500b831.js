import{B as $}from"./Authenticated-2464c72b.js";import{U as I,_ as q}from"./Variation-939befed.js";import{H as x}from"./@inertiajs-c7856c69.js";import{C as B}from"./compressorjs-dec42b9c.js";import{b as F,_ as P,a as y}from"./TabsList-1b3330a1.js";import{_ as C}from"./TabsContent-21f849c8.js";import{_}from"./Card-603ca702.js";import{r as D,y as p,x as t,u as d,Q as i,F as w,be as f,t as u,W as s,z as r,D as L,H as S,A as c,v as U,q as h}from"./@vue-fa39c8c3.js";import"./ApplicationLogo-bc2e3fb2.js";import"./radix-vue-b52878ef.js";import"./@floating-ui-d22e3cce.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f5e40355.js";import"./axios-1779699b.js";import"./pusher-js-ddef06ed.js";import"./@vueform-b962800d.js";import"./@vuepic-62f3604d.js";import"./@babel-1b80a44a.js";import"./cropperjs-aef143af.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1a2c766e.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-0175b845.js";import"./@radix-icons-a5b56816.js";import"./lodash.isequal-32ec3540.js";import"./vue-e0f979ce.js";import"./lodash.clonedeep-2dfa23d9.js";import"./qs-fddd7d85.js";import"./side-channel-a64b5f12.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-6df2283d.js";import"./deepmerge-89e33937.js";import"./nprogress-4f526f01.js";import"./lucide-vue-next-f94b1320.js";import"./ConfirmationModal-8b143ad0.js";import"./@heroicons-4f5c57a0.js";import"./@headlessui-4b33c316.js";import"./TableRow-457357e9.js";import"./TableCaption-3ad3e3a3.js";const j={class:"grid grid-cols-1 gap-4"},N={class:""},T={class:"w-full mt-2"},H={class:"flex xl:justify-center overflow-x-auto whitespace-nowrap space-x-4"},z={class:"flex flex-col items-center py-2"},A={key:0,class:"text-red-600"},O={class:""},R={class:""},W={class:"flex flex-col gap-4"},E={class:"grid grid-cols-1 gap-4"},Q={class:"flex space-x-6 my-3"},G={class:"flex space-x-2 items-center"},J={key:0,class:"flex space-x-2 items-center"},K={class:"flex items-center justify-end space-x-2"};function M(a,o){return new File([a],o,{type:a.type})}const X={components:{Card:_},data(){return{form:{basic_info:{product_name:"",product_description:"",product_price:"",product_stock:"",product_images:{cover:{label:"Cover Image",required:!0,file:null,value:null},image_1:{label:"Image 1",required:!1,file:null,value:null},image_2:{label:"Image 2",required:!1,file:null,value:null},image_3:{label:"Image 3",required:!1,file:null,value:null},image_4:{label:"Image 4",required:!1,file:null,value:null},image_5:{label:"Image 5",required:!1,file:null,value:null},image_6:{label:"Image 6",required:!1,file:null,value:null}}},detailed_info:{has_variation:!1,has_sub_variation:!1,main_variation_name:"",sub_variation_name:"",variations:{options:[{name:"",images:{file:null,value:null},price:0,stock:0,sub_variations:{options:[{name:"",price:0,stock:0}]}}]}}}}},methods:{submit(){this.$inertia.post(route("products.store"),this.form)},handleFileChange(a,o){if(a){const e=this.form.basic_info.product_images;this.compress(a,o,e)}},compress(a,o,e){new B(a,{quality:.2,maxWidth:400,maxHeight:400,success(n){const m=URL.createObjectURL(n),v=M(n,Date.now()+".jpg");e[o].file=v,e[o].value=m}})},deleteImage(a){this.form.basic_info.product_images[a].file=null,this.form.basic_info.product_images[a].value=null},blobToFile(a,o){return new File([a],o,{type:a.type})}}},Xe=Object.assign(X,{__name:"Create",setup(a){return D(1),(o,e)=>{const n=f("Label"),m=f("Input"),v=f("Textarea"),b=f("Switch"),g=f("Button");return u(),p(w,null,[t(d(x),{title:"Products"}),t($,null,{header:i(()=>e[8]||(e[8]=[])),default:i(()=>[t(d(F),{"default-value":"basic"},{default:i(()=>[t(d(P),null,{default:i(()=>[t(d(y),{value:"basic"},{default:i(()=>e[9]||(e[9]=[s(" Basic Information ")])),_:1}),t(d(y),{value:"detailed"},{default:i(()=>e[10]||(e[10]=[s(" Detailed Information ")])),_:1})]),_:1}),t(d(C),{value:"basic",class:"p-0.5"},{default:i(()=>[t(_,null,{content:i(()=>[r("div",j,[r("div",N,[t(n,null,{default:i(()=>e[11]||(e[11]=[s("Product Images"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),r("div",T,[r("div",H,[(u(!0),p(w,null,L(o.form.basic_info.product_images,(l,V)=>(u(),p("div",z,[t(n,{class:"text-center mb-1 text-xs",for:l.label},{default:i(()=>[s(S(l.label),1),l.required?(u(),p("span",A,"*")):c("",!0)]),_:2},1032,["for"]),t(I,{previewUrl:l.value,"onUpdate:value":k=>o.handleFileChange(k,V)},null,8,["previewUrl","onUpdate:value"]),l.value?(u(),U(n,{key:0,class:"mt-1 text-xs text-red-500 hover:underline cursor-pointer",onClick:k=>o.deleteImage(V)},{default:i(()=>e[12]||(e[12]=[s("Delete")])),_:2},1032,["onClick"])):c("",!0)]))),256))])])]),r("div",O,[t(n,null,{default:i(()=>e[13]||(e[13]=[s("Product Name"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),t(m,{type:"text",error:o.$page.props.errors["basic_info.product_name"],modelValue:o.form.basic_info.product_name,"onUpdate:modelValue":e[0]||(e[0]=l=>o.form.basic_info.product_name=l)},null,8,["error","modelValue"])]),r("div",R,[t(n,null,{default:i(()=>e[14]||(e[14]=[s("Product Description"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),t(v,{error:o.$page.props.errors["basic_info.product_description"],modelValue:o.form.basic_info.product_description,"onUpdate:modelValue":e[1]||(e[1]=l=>o.form.basic_info.product_description=l),rows:"3"},null,8,["error","modelValue"])])])]),_:1})]),_:1}),t(d(C),{value:"detailed"},{default:i(()=>[r("div",W,[t(_,null,{content:i(()=>[r("div",E,[r("div",Q,[r("div",G,[t(n,null,{default:i(()=>e[15]||(e[15]=[s("Variation")])),_:1}),t(b,{modelValue:o.form.detailed_info.has_variation,"onUpdate:modelValue":e[2]||(e[2]=l=>o.form.detailed_info.has_variation=l),onClick:e[3]||(e[3]=l=>o.form.detailed_info.has_variation?o.form.detailed_info.has_sub_variation=!1:"")},null,8,["modelValue"])]),o.form.detailed_info.has_variation?(u(),p("div",J,[t(n,null,{default:i(()=>e[16]||(e[16]=[s("Sub Variation")])),_:1}),t(b,{modelValue:o.form.detailed_info.has_sub_variation,"onUpdate:modelValue":e[4]||(e[4]=l=>o.form.detailed_info.has_sub_variation=l)},null,8,["modelValue"])])):c("",!0)])])]),_:1}),o.form.detailed_info.has_variation?c("",!0):(u(),U(_,{key:0},{content:i(()=>[r("div",null,[t(n,null,{default:i(()=>e[17]||(e[17]=[s("Product Price"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),t(m,{type:"text",error:o.$page.props.errors["basic_info.product_price"],modelValue:o.form.basic_info.product_price,"onUpdate:modelValue":e[5]||(e[5]=l=>o.form.basic_info.product_price=l)},null,8,["error","modelValue"])]),r("div",null,[t(n,null,{default:i(()=>e[18]||(e[18]=[s("Product Stock"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),t(m,{type:"text",error:o.$page.props.errors["basic_info.product_stock"],modelValue:o.form.basic_info.product_stock,"onUpdate:modelValue":e[6]||(e[6]=l=>o.form.basic_info.product_stock=l)},null,8,["error","modelValue"])])]),_:1})),r("div",{class:h({hidden:!o.form.detailed_info.has_variation})},[t(q,{detailed_info:o.form.detailed_info},null,8,["detailed_info"])],2),t(_,{class:"p-0.5"},{content:i(()=>[r("div",K,[t(g,{onClick:e[7]||(e[7]=l=>o.$inertia.get(o.route("products"))),variant:"outline"},{default:i(()=>e[19]||(e[19]=[s("Cancel")])),_:1}),t(g,{onClick:o.submit},{default:i(()=>e[20]||(e[20]=[s("Save")])),_:1},8,["onClick"])])]),_:1})])]),_:1})]),_:1})]),_:1})],64)}}});export{Xe as default};
