import{B as C}from"./Authenticated-bbe12484.js";import{U as I,_ as U}from"./Variation-29270c20.js";import{H as q}from"./@inertiajs-7f289881.js";import{C as B}from"./compressorjs-dec42b9c.js";import{_ as x,a as F,b as k}from"./TabsList-1f955d98.js";import{_ as V}from"./TabsContent-4cf8892c.js";import{_}from"./Card-20f395ce.js";import{r as P,y as m,x as t,u as n,Q as r,F as y,be as f,t as d,W as p,z as s,J as S,K as j,C as c,v as w,q as L}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-c5b8b27a.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-4a86e6ba.js";import"./DialogDescription-be595773.js";import"./lucide-vue-next-53796c49.js";import"./ConfirmationModal-b3ef0b6f.js";import"./@heroicons-e6194902.js";import"./@headlessui-a01ed24c.js";import"./TableRow-0b515674.js";import"./TableCaption-7c420fef.js";const D={class:"grid grid-cols-1 gap-4"},E={class:""},N={class:"w-full mt-2"},T={class:"flex xl:justify-center overflow-x-auto whitespace-nowrap space-x-4"},z={class:"flex flex-col items-center py-2"},H={key:0,class:"text-red-600"},A={class:""},O={class:""},R={class:"flex flex-col gap-4"},W={class:"grid grid-cols-1 gap-4"},J={class:"flex space-x-6 my-3"},K={class:"flex space-x-2 items-center"},Q={key:0,class:"flex space-x-2 items-center"},G={class:"flex items-center justify-end space-x-2"};function M(i,o){return new File([i],o,{type:i.type})}const X={mounted(){if(this.$page.props.product_variations.length?this.$page.props.product_variations.forEach(i=>{this.form.detailed_info.variations.options.push({id:i.id,name:i.option_name,images:{file:null,value:i.image?"/storage"+i.image:null},price:i.price?i.price:0,stock:i.stock?i.stock:0,sub_variations:{options:[]}})}):this.form.detailed_info.variations.options.push({id:"",name:"",images:{file:null,value:null},price:0,stock:0,sub_variations:{options:[{id:"",name:"",price:0,stock:0}]}}),this.$page.props.product_sub_variations.length){const i=new Set;for(const o of this.$page.props.product_sub_variations)i.has(o.option_name)||(this.sub_variation_prop.options.push({name:o.option_name}),i.add(o.option_name));this.form.detailed_info.variations.options.forEach(o=>{this.$page.props.product_sub_variations.forEach(e=>{o.id==e.product_variation_id&&o.sub_variations.options.push({id:e.id,name:e.option_name,price:e.price,stock:e.stock})})})}else this.sub_variation_prop.options.push({name:"",price:0,stock:0})},data(){return{sub_variation_prop:{options:[]},form:{basic_info:{product_id:this.$page.props.product.id,product_name:this.$page.props.product.name??"",product_description:this.$page.props.product.description??"",product_price:this.$page.props.product.price??"",product_stock:this.$page.props.product.stock??"",product_images:{cover:{label:"Cover Image",required:!0,file:null,value:this.$page.props.product.cover_image?"/storage"+this.$page.props.product.cover_image:""},image_1:{label:"Image 1",required:!1,file:null,value:this.$page.props.product.image_1?"/storage"+this.$page.props.product.image_1:""},image_2:{label:"Image 2",required:!1,file:null,value:this.$page.props.product.image_2?"/storage"+this.$page.props.product.image_2:""},image_3:{label:"Image 3",required:!1,file:null,value:this.$page.props.product.image_3?"/storage"+this.$page.props.product.image_3:""},image_4:{label:"Image 4",required:!1,file:null,value:this.$page.props.product.image_4?"/storage"+this.$page.props.product.image_4:""},image_5:{label:"Image 5",required:!1,file:null,value:this.$page.props.product.image_5?"/storage"+this.$page.props.product.image_5:""},image_6:{label:"Image 6",required:!1,file:null,value:this.$page.props.product.image_6?"/storage"+this.$page.props.product.image_6:""}}},detailed_info:{has_variation:this.$page.props.product.has_variation,has_sub_variation:this.$page.props.product.has_sub_variation,main_variation_name:this.$page.props.product.variation_name??"",sub_variation_name:this.$page.props.product.sub_variation_name??"",variations:{options:[]}}}}},methods:{submit(){this.$inertia.post(route("products.update"),this.form)},handleFileChange(i,o){if(i){const e=this.form.basic_info.product_images;this.compress(i,o,e)}},compress(i,o,e){new B(i,{quality:.2,maxWidth:400,maxHeight:400,success(l){const u=URL.createObjectURL(l),g=M(l,Date.now()+".jpg");e[o].file=g,e[o].value=u}})},deleteImage(i){this.form.basic_info.product_images[i].file=null,this.form.basic_info.product_images[i].value=null},blobToFile(i,o){return new File([i],o,{type:i.type})}}},eo=Object.assign(X,{__name:"Edit",setup(i){return P(1),(o,e)=>{const l=f("Label"),u=f("Input"),g=f("Textarea"),v=f("Switch"),b=f("Button");return d(),m(y,null,[t(n(q),{title:"Products"}),t(C,null,{header:r(()=>e[8]||(e[8]=[])),default:r(()=>[t(n(x),{"default-value":"basic"},{default:r(()=>[t(n(F),null,{default:r(()=>[t(n(k),{value:"basic"},{default:r(()=>e[9]||(e[9]=[p(" Basic Information ")])),_:1}),t(n(k),{value:"detailed"},{default:r(()=>e[10]||(e[10]=[p(" Detailed Information ")])),_:1})]),_:1}),t(n(V),{value:"basic",class:"p-0.5"},{default:r(()=>[t(_,null,{content:r(()=>[s("div",D,[s("div",E,[t(l,null,{default:r(()=>e[11]||(e[11]=[p("Product Images"),s("span",{class:"text-red-500"},"*",-1)])),_:1}),s("div",N,[s("div",T,[(d(!0),m(y,null,S(o.form.basic_info.product_images,(a,h)=>(d(),m("div",z,[t(l,{class:"text-center mb-1 text-xs",for:a.label},{default:r(()=>[p(j(a.label),1),a.required?(d(),m("span",H,"*")):c("",!0)]),_:2},1032,["for"]),t(I,{previewUrl:a.value,"onUpdate:value":$=>o.handleFileChange($,h)},null,8,["previewUrl","onUpdate:value"]),a.value?(d(),w(l,{key:0,class:"mt-1 text-xs text-red-500 hover:underline cursor-pointer",onClick:$=>o.deleteImage(h)},{default:r(()=>e[12]||(e[12]=[p("Delete")])),_:2},1032,["onClick"])):c("",!0)]))),256))])])]),s("div",A,[t(l,null,{default:r(()=>e[13]||(e[13]=[p("Product Name"),s("span",{class:"text-red-500"},"*",-1)])),_:1}),t(u,{type:"text",error:o.$page.props.errors["basic_info.product_name"],modelValue:o.form.basic_info.product_name,"onUpdate:modelValue":e[0]||(e[0]=a=>o.form.basic_info.product_name=a)},null,8,["error","modelValue"])]),s("div",O,[t(l,null,{default:r(()=>e[14]||(e[14]=[p("Product Description"),s("span",{class:"text-red-500"},"*",-1)])),_:1}),t(g,{error:o.$page.props.errors["basic_info.product_description"],modelValue:o.form.basic_info.product_description,"onUpdate:modelValue":e[1]||(e[1]=a=>o.form.basic_info.product_description=a),rows:"3"},null,8,["error","modelValue"])])])]),_:1})]),_:1}),t(n(V),{value:"detailed"},{default:r(()=>[s("div",R,[t(_,null,{content:r(()=>[s("div",W,[s("div",J,[s("div",K,[t(l,null,{default:r(()=>e[15]||(e[15]=[p("Variation")])),_:1}),t(v,{modelValue:o.form.detailed_info.has_variation,"onUpdate:modelValue":e[2]||(e[2]=a=>o.form.detailed_info.has_variation=a),onClick:e[3]||(e[3]=a=>o.form.detailed_info.has_variation?o.form.detailed_info.has_sub_variation=!1:"")},null,8,["modelValue"])]),o.form.detailed_info.has_variation?(d(),m("div",Q,[t(l,null,{default:r(()=>e[16]||(e[16]=[p("Sub Variation")])),_:1}),t(v,{modelValue:o.form.detailed_info.has_sub_variation,"onUpdate:modelValue":e[4]||(e[4]=a=>o.form.detailed_info.has_sub_variation=a)},null,8,["modelValue"])])):c("",!0)])])]),_:1}),o.form.detailed_info.has_variation?c("",!0):(d(),w(_,{key:0},{content:r(()=>[s("div",null,[t(l,null,{default:r(()=>e[17]||(e[17]=[p("Product Price"),s("span",{class:"text-red-500"},"*",-1)])),_:1}),t(u,{type:"text",error:o.$page.props.errors["basic_info.product_price"],modelValue:o.form.basic_info.product_price,"onUpdate:modelValue":e[5]||(e[5]=a=>o.form.basic_info.product_price=a)},null,8,["error","modelValue"])]),s("div",null,[t(l,null,{default:r(()=>e[18]||(e[18]=[p("Product Stock"),s("span",{class:"text-red-500"},"*",-1)])),_:1}),t(u,{type:"text",error:o.$page.props.errors["basic_info.product_stock"],modelValue:o.form.basic_info.product_stock,"onUpdate:modelValue":e[6]||(e[6]=a=>o.form.basic_info.product_stock=a)},null,8,["error","modelValue"])])]),_:1})),s("div",{class:L({hidden:!o.form.detailed_info.has_variation})},[t(U,{detailed_info:o.form.detailed_info,sub_variation_prop:o.sub_variation_prop},null,8,["detailed_info","sub_variation_prop"])],2),t(_,{class:"p-0.5"},{content:r(()=>[s("div",G,[t(b,{onClick:e[7]||(e[7]=a=>o.$inertia.get(o.route("products"))),variant:"outline"},{default:r(()=>e[19]||(e[19]=[p("Cancel")])),_:1}),t(b,{onClick:o.submit},{default:r(()=>e[20]||(e[20]=[p("Save")])),_:1},8,["onClick"])])]),_:1})])]),_:1})]),_:1})]),_:1})],64)}}});export{eo as default};
