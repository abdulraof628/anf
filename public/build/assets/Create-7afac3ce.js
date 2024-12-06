import{B as $}from"./Authenticated-f3f73889.js";import{U as I,_ as q}from"./Variation-2c6e6cd5.js";import{H as x}from"./@inertiajs-7f289881.js";import{C as B}from"./compressorjs-dec42b9c.js";import{_ as F,a as P,b as y}from"./TabsList-3daf3f6a.js";import{_ as C}from"./TabsContent-d5e8b3a9.js";import{_}from"./Card-c7bd5922.js";import{r as L,y as p,x as t,u as d,Q as i,F as w,be as f,t as u,W as s,z as r,J as S,K as h,C as c,v as U,q as j}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-c289c940.js";import"./axios-1779699b.js";import"./pusher-js-d90fcbf8.js";import"./laravel-echo-96cacb8d.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-2b1a9f82.js";import"./DialogDescription-c70040de.js";import"./lucide-vue-next-53796c49.js";import"./ConfirmationModal-88b12913.js";import"./@heroicons-e6194902.js";import"./@headlessui-a01ed24c.js";import"./TableRow-cf728391.js";import"./TableCaption-8d2147fd.js";const D={class:"grid grid-cols-1 gap-4"},N={class:""},T={class:"w-full mt-2"},z={class:"flex xl:justify-center overflow-x-auto whitespace-nowrap space-x-4"},H={class:"flex flex-col items-center py-2"},O={key:0,class:"text-red-600"},R={class:""},W={class:""},A={class:"flex flex-col gap-4"},E={class:"grid grid-cols-1 gap-4"},J={class:"flex space-x-6 my-3"},K={class:"flex space-x-2 items-center"},Q={key:0,class:"flex space-x-2 items-center"},G={class:"flex items-center justify-end space-x-2"};function M(a,o){return new File([a],o,{type:a.type})}const X={components:{Card:_},data(){return{form:{basic_info:{product_name:"",product_description:"",product_price:"",product_stock:"",product_images:{cover:{label:"Cover Image",required:!0,file:null,value:null},image_1:{label:"Image 1",required:!1,file:null,value:null},image_2:{label:"Image 2",required:!1,file:null,value:null},image_3:{label:"Image 3",required:!1,file:null,value:null},image_4:{label:"Image 4",required:!1,file:null,value:null},image_5:{label:"Image 5",required:!1,file:null,value:null},image_6:{label:"Image 6",required:!1,file:null,value:null}}},detailed_info:{has_variation:!1,has_sub_variation:!1,main_variation_name:"",sub_variation_name:"",variations:{options:[{name:"",images:{file:null,value:null},price:0,stock:0,sub_variations:{options:[{name:"",price:0,stock:0}]}}]}}}}},methods:{submit(){this.$inertia.post(route("products.store"),this.form)},handleFileChange(a,o){if(a){const e=this.form.basic_info.product_images;this.compress(a,o,e)}},compress(a,o,e){new B(a,{quality:.2,maxWidth:400,maxHeight:400,success(n){const m=URL.createObjectURL(n),v=M(n,Date.now()+".jpg");e[o].file=v,e[o].value=m}})},deleteImage(a){this.form.basic_info.product_images[a].file=null,this.form.basic_info.product_images[a].value=null},blobToFile(a,o){return new File([a],o,{type:a.type})}}},eo=Object.assign(X,{__name:"Create",setup(a){return L(1),(o,e)=>{const n=f("Label"),m=f("Input"),v=f("Textarea"),b=f("Switch"),g=f("Button");return u(),p(w,null,[t(d(x),{title:"Products"}),t($,null,{header:i(()=>e[8]||(e[8]=[])),default:i(()=>[t(d(F),{"default-value":"basic"},{default:i(()=>[t(d(P),null,{default:i(()=>[t(d(y),{value:"basic"},{default:i(()=>e[9]||(e[9]=[s(" Basic Information ")])),_:1}),t(d(y),{value:"detailed"},{default:i(()=>e[10]||(e[10]=[s(" Detailed Information ")])),_:1})]),_:1}),t(d(C),{value:"basic",class:"p-0.5"},{default:i(()=>[t(_,null,{content:i(()=>[r("div",D,[r("div",N,[t(n,null,{default:i(()=>e[11]||(e[11]=[s("Product Images"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),r("div",T,[r("div",z,[(u(!0),p(w,null,S(o.form.basic_info.product_images,(l,V)=>(u(),p("div",H,[t(n,{class:"text-center mb-1 text-xs",for:l.label},{default:i(()=>[s(h(l.label),1),l.required?(u(),p("span",O,"*")):c("",!0)]),_:2},1032,["for"]),t(I,{previewUrl:l.value,"onUpdate:value":k=>o.handleFileChange(k,V)},null,8,["previewUrl","onUpdate:value"]),l.value?(u(),U(n,{key:0,class:"mt-1 text-xs text-red-500 hover:underline cursor-pointer",onClick:k=>o.deleteImage(V)},{default:i(()=>e[12]||(e[12]=[s("Delete")])),_:2},1032,["onClick"])):c("",!0)]))),256))])])]),r("div",R,[t(n,null,{default:i(()=>e[13]||(e[13]=[s("Product Name"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),t(m,{type:"text",error:o.$page.props.errors["basic_info.product_name"],modelValue:o.form.basic_info.product_name,"onUpdate:modelValue":e[0]||(e[0]=l=>o.form.basic_info.product_name=l)},null,8,["error","modelValue"])]),r("div",W,[t(n,null,{default:i(()=>e[14]||(e[14]=[s("Product Description"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),t(v,{error:o.$page.props.errors["basic_info.product_description"],modelValue:o.form.basic_info.product_description,"onUpdate:modelValue":e[1]||(e[1]=l=>o.form.basic_info.product_description=l),rows:"3"},null,8,["error","modelValue"])])])]),_:1})]),_:1}),t(d(C),{value:"detailed"},{default:i(()=>[r("div",A,[t(_,null,{content:i(()=>[r("div",E,[r("div",J,[r("div",K,[t(n,null,{default:i(()=>e[15]||(e[15]=[s("Variation")])),_:1}),t(b,{modelValue:o.form.detailed_info.has_variation,"onUpdate:modelValue":e[2]||(e[2]=l=>o.form.detailed_info.has_variation=l),onClick:e[3]||(e[3]=l=>o.form.detailed_info.has_variation?o.form.detailed_info.has_sub_variation=!1:"")},null,8,["modelValue"])]),o.form.detailed_info.has_variation?(u(),p("div",Q,[t(n,null,{default:i(()=>e[16]||(e[16]=[s("Sub Variation")])),_:1}),t(b,{modelValue:o.form.detailed_info.has_sub_variation,"onUpdate:modelValue":e[4]||(e[4]=l=>o.form.detailed_info.has_sub_variation=l)},null,8,["modelValue"])])):c("",!0)])])]),_:1}),o.form.detailed_info.has_variation?c("",!0):(u(),U(_,{key:0},{content:i(()=>[r("div",null,[t(n,null,{default:i(()=>e[17]||(e[17]=[s("Product Price"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),t(m,{type:"text",error:o.$page.props.errors["basic_info.product_price"],modelValue:o.form.basic_info.product_price,"onUpdate:modelValue":e[5]||(e[5]=l=>o.form.basic_info.product_price=l)},null,8,["error","modelValue"])]),r("div",null,[t(n,null,{default:i(()=>e[18]||(e[18]=[s("Product Stock"),r("span",{class:"text-red-500"},"*",-1)])),_:1}),t(m,{type:"text",error:o.$page.props.errors["basic_info.product_stock"],modelValue:o.form.basic_info.product_stock,"onUpdate:modelValue":e[6]||(e[6]=l=>o.form.basic_info.product_stock=l)},null,8,["error","modelValue"])])]),_:1})),r("div",{class:j({hidden:!o.form.detailed_info.has_variation})},[t(q,{detailed_info:o.form.detailed_info},null,8,["detailed_info"])],2),t(_,{class:"p-0.5"},{content:i(()=>[r("div",G,[t(g,{onClick:e[7]||(e[7]=l=>o.$inertia.get(o.route("products"))),variant:"outline"},{default:i(()=>e[19]||(e[19]=[s("Cancel")])),_:1}),t(g,{onClick:o.submit},{default:i(()=>e[20]||(e[20]=[s("Save")])),_:1},8,["onClick"])])]),_:1})])]),_:1})]),_:1})]),_:1})],64)}}});export{eo as default};
