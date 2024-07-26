import{r as k,q as d,x as u,v as _,u as w,P as c,F as y,y as e,B as x,m as l,C as $,V as n,G as C,z as p,K as g,bv as b,t as m}from"./@vue-b5d553e1.js";import{B as V}from"./Authenticated-f12ae66a.js";import{B as f}from"./Button-a75e4165.js";import{H as z}from"./@inertiajs-df65e401.js";import{U as B,_ as H}from"./Variation-6dff1490.js";import{C as I}from"./compressorjs-dec42b9c.js";import"./ApplicationLogo-e2b93f7b.js";import"./app-6e1c5045.js";import"./axios-9cbf0d09.js";import"./pusher-js-1c63de54.js";import"./@vueform-f7c8a6df.js";import"./@vuepic-b5e5f2dc.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-28b7d936.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./radix-vue-09f0b006.js";import"./@floating-ui-6a5ebbeb.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-282a3f07.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-62a42a61.js";import"./lodash.isequal-f375c7a4.js";import"./vue-c49564f2.js";import"./lodash.clonedeep-375466af.js";import"./qs-120ae55f.js";import"./side-channel-a42ec8a2.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-f7269186.js";import"./deepmerge-89e33937.js";import"./nprogress-b3880cbb.js";import"./lucide-vue-next-967cc12e.js";import"./ConfirmationModal-d78f2deb.js";import"./@heroicons-6bb93f0b.js";import"./@headlessui-1eabfa74.js";const U={class:"md:grid md:grid-cols-2"},S={class:"md:mt-0 md:col-span-2"},q={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},T={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},D={class:"sm:row-span-3"},j={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},F=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Add New Product"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),P=e("path",{d:"M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"},null,-1),E=[P],N={class:"leading-none"},M=e("path",{d:"M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"},null,-1),L=[M],A={class:"leading-none"},O={class:"p-10"},R={class:"mb-4"},G=e("label",{for:"category_name",class:"block text-sm text-gray-700 font-bold mb-2"},[n(" Product Images "),e("span",{class:"text-red-500"},"*")],-1),K={class:"flex flex-wrap justify-center"},W={class:"flex flex-col items-center p-2 m-2"},J=["for"],Q={key:0,class:"text-red-600"},X=["onClick"],Y={class:"mb-4"},Z=e("label",{for:"product_name",class:"block text-sm text-gray-700 font-bold mb-2"},[n(" Product Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},oe={class:"mb-4"},te=e("label",{for:"product_description",class:"block text-sm text-gray-700 font-bold mb-2"},[n(" Product Description "),e("span",{class:"text-red-500"},"*")],-1),se={class:"mt-1 flex rounded-md shadow-sm"},ie={class:"mb-10"},re=e("div",{class:"mb-3"},[e("label",{class:"block text-sm text-gray-700 font-bold"}," Variation Setting ")],-1),ae={class:"flex space-x-4"},de={class:"mt-1 flex rounded-md"},le={class:"mt-1 flex rounded-md"},ne={key:0,class:""},pe={class:"mb-4"},ce=e("label",{for:"product_price",class:"block text-sm text-gray-700 font-bold"},[n(" Price "),e("span",{class:"text-red-500"},"*")],-1),ue={class:"mt-1 flex rounded-md shadow-sm"},me={class:"mb-4"},fe=e("label",{for:"product_stock",class:"block text-sm text-gray-700 font-bold"},[n(" Stock "),e("span",{class:"text-red-500"},"*")],-1),_e={class:"mt-1 flex rounded-md shadow-sm"},ge=e("hr",{class:"mt-10"},null,-1),be={class:"flex items-center justify-between space-x-2 px-10"};function ve(r,t){return new File([r],t,{type:r.type})}const he={mounted(){if(this.$page.props.product_variations.length?this.$page.props.product_variations.forEach(r=>{this.form.detailed_info.variations.options.push({id:r.id,name:r.option_name,images:{file:null,value:"/storage"+r.image},price:r.price,stock:r.stock,sub_variations:{options:[]}})}):this.form.detailed_info.variations.options.push({id:"",name:"",images:{file:null,value:null},price:0,stock:0,sub_variations:{options:[{id:"",name:"",price:0,stock:0}]}}),this.$page.props.product_sub_variations.length){const r=new Set;for(const t of this.$page.props.product_sub_variations)r.has(t.option_name)||(this.sub_variation_prop.options.push({name:t.option_name}),r.add(t.option_name));this.form.detailed_info.variations.options.forEach(t=>{this.$page.props.product_sub_variations.forEach(a=>{t.id==a.product_variation_id&&t.sub_variations.options.push({id:a.id,name:a.option_name,price:a.price,stock:a.stock})})})}else this.sub_variation_prop.options.push({name:""})},data(){return{sub_variation_prop:{options:[]},form:{basic_info:{product_id:this.$page.props.product.id,product_name:this.$page.props.product.name??"",product_description:this.$page.props.product.description??"",product_price:this.$page.props.product.price??"",product_stock:this.$page.props.product.stock??"",product_images:{cover:{label:"Cover Image",required:!0,file:null,value:this.$page.props.product.cover_image?"/storage"+this.$page.props.product.cover_image:""},image_1:{label:"Image 1",required:!1,file:null,value:this.$page.props.product.image_1?"/storage"+this.$page.props.product.image_1:""},image_2:{label:"Image 2",required:!1,file:null,value:this.$page.props.product.image_2?"/storage"+this.$page.props.product.image_2:""},image_3:{label:"Image 3",required:!1,file:null,value:this.$page.props.product.image_3?"/storage"+this.$page.props.product.image_3:""},image_4:{label:"Image 4",required:!1,file:null,value:this.$page.props.product.image_4?"/storage"+this.$page.props.product.image_4:""},image_5:{label:"Image 5",required:!1,file:null,value:this.$page.props.product.image_5?"/storage"+this.$page.props.product.image_5:""},image_6:{label:"Image 6",required:!1,file:null,value:this.$page.props.product.image_6?"/storage"+this.$page.props.product.image_6:""}}},detailed_info:{has_variation:this.$page.props.product.has_variation,has_sub_variation:this.$page.props.product.has_sub_variation,main_variation_name:this.$page.props.product.variation_name??"",sub_variation_name:this.$page.props.product.sub_variation_name??"",variations:{options:[]}}}}},methods:{submit(){this.$inertia.post(route("products.update"),this.form)},handleFileChange(r,t){if(r){const a=this.form.basic_info.product_images;this.compress(r,t,a)}},compress(r,t,a){new I(r,{quality:.2,maxWidth:400,maxHeight:400,success(o){const s=URL.createObjectURL(o),i=ve(o,Date.now()+".jpg");a[t].file=i,a[t].value=s}})},deleteImage(r){this.form.basic_info.product_images[r].file=null,this.form.basic_info.product_images[r].value=null},blobToFile(r,t){return new File([r],t,{type:r.type})}}},_o=Object.assign(he,{__name:"Edit",setup(r){const t=k(1),a=o=>{t.value=o};return(o,s)=>(d(),u(y,null,[_(w(z),{title:"Product"}),_(V,null,{header:c(()=>[]),default:c(()=>[e("div",U,[e("div",S,[e("form",{onSubmit:s[12]||(s[12]=x((...i)=>o.submit&&o.submit(...i),["prevent"]))},[e("div",q,[e("div",T,[e("div",D,[e("div",j,[F,e("div",null,[e("ol",{class:l(["grid grid-cols-1 divide-x divide-gray-300 overflow-hidden rounded-lg border border-gray-300 text-sm text-gray-500 sm:grid-cols-2",{"text-white":t.value===1}])},[e("li",{class:l(["flex items-center justify-center gap-2 p-4 cursor-pointer",{"bg-indigo-500":t.value===1}]),onClick:s[0]||(s[0]=i=>a(1))},[(d(),u("svg",{xmlns:"http://www.w3.org/2000/svg",class:l(["h-7 w-7 text-gray-600",{"text-white":t.value===1}]),fill:"currentColor",viewBox:"0 0 448 512"},E,2)),e("p",N,[e("strong",{class:l(["block font-medium text-gray-600",{"text-white":t.value===1}])}," Basic Information ",2),e("small",{class:l(["mt-1 text-gray-500",{"text-white":t.value===1}])}," Some basic info about this product. ",2)])],2),e("li",{class:l(["flex items-center justify-center gap-2 p-4 cursor-pointer",{"bg-indigo-500":t.value===2}]),onClick:s[1]||(s[1]=i=>a(2))},[(d(),u("svg",{xmlns:"http://www.w3.org/2000/svg",class:l(["h-7 w-7 text-gray-600",{"text-white":t.value===2}]),fill:"currentColor",viewBox:"0 0 576 512"},L,2)),e("p",A,[e("strong",{class:l(["block font-medium text-gray-600",{"text-white":t.value===2}])}," Detailed Information ",2),e("small",{class:l(["mt-1 text-gray-500",{"text-white":t.value===2}])}," Detailed info like variations, prices and more... ",2)])],2)],2)]),e("div",O,[e("div",{class:l({hidden:t.value===2})},[e("div",R,[G,e("div",K,[(d(!0),u(y,null,$(o.form.basic_info.product_images,(i,v)=>(d(),u("div",W,[e("label",{for:i.label,class:"mb-3 text-sm text-gray-500 text-center"},[n(C(i.label)+" ",1),i.required?(d(),u("span",Q,"*")):p("",!0)],8,J),_(B,{previewUrl:i.value,"onUpdate:value":h=>o.handleFileChange(h,v)},null,8,["previewUrl","onUpdate:value"]),i.value?(d(),u("span",{key:0,class:"mt-3 text-sm text-red-500 hover:underline cursor-pointer font-semibold",onClick:h=>o.deleteImage(v)},"Delete",8,X)):p("",!0)]))),256))])]),e("div",Y,[Z,e("div",ee,[g(e("input",{type:"text",name:"product_name",id:"product_name",class:l(["focus:ring-0 focus:border-gray-400 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors["basic_info.product_name"]?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[2]||(s[2]=i=>o.form.basic_info.product_name=i),autocomplete:"off"},null,2),[[b,o.form.basic_info.product_name]])])]),e("div",oe,[te,e("div",se,[g(e("textarea",{name:"product_description",id:"product_description",class:l(["focus:ring-0 focus:border-gray-400 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors["basic_info.product_description"]?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[3]||(s[3]=i=>o.form.basic_info.product_description=i),cols:"30",rows:"10"},null,2),[[b,o.form.basic_info.product_description]])])])],2),e("div",{class:l({hidden:t.value===1})},[e("div",ie,[re,e("div",ae,[e("div",de,[o.form.detailed_info.has_variation==0?(d(),m(f,{key:0,onClick:s[4]||(s[4]=i=>o.form.detailed_info.has_variation=!0),buttonType:"info"},{default:c(()=>[n("Enable Variation")]),_:1})):p("",!0),o.form.detailed_info.has_variation==1?(d(),m(f,{key:1,onClick:s[5]||(s[5]=i=>(o.form.detailed_info.has_variation=!1,o.form.detailed_info.has_sub_variation=!1)),buttonType:"gray"},{default:c(()=>[n("Disable Variation")]),_:1})):p("",!0)]),e("div",le,[o.form.detailed_info.has_variation==1&&o.form.detailed_info.has_sub_variation==0?(d(),m(f,{key:0,onClick:s[6]||(s[6]=i=>o.form.detailed_info.has_sub_variation=!0),buttonType:"info"},{default:c(()=>[n("Enable Sub Variation")]),_:1})):p("",!0),o.form.detailed_info.has_variation==1&&o.form.detailed_info.has_sub_variation==1?(d(),m(f,{key:1,onClick:s[7]||(s[7]=i=>o.form.detailed_info.has_sub_variation=!1),buttonType:"gray"},{default:c(()=>[n("Disable Sub Variation")]),_:1})):p("",!0)])])]),o.form.detailed_info.has_variation?p("",!0):(d(),u("div",ne,[e("div",pe,[ce,e("div",ue,[g(e("input",{type:"number",name:"product_price",id:"product_price",class:l(["focus:ring-0 focus:border-gray-400 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors["basic_info.product_price"]?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[8]||(s[8]=i=>o.form.basic_info.product_price=i),autocomplete:"off"},null,2),[[b,o.form.basic_info.product_price]])])]),e("div",me,[fe,e("div",_e,[g(e("input",{type:"number",name:"product_stock",id:"product_stock",class:l(["focus:ring-0 focus:border-gray-400 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors["basic_info.product_stock"]?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[9]||(s[9]=i=>o.form.basic_info.product_stock=i),autocomplete:"off"},null,2),[[b,o.form.basic_info.product_stock]])])])])),e("div",{class:l({hidden:!o.form.detailed_info.has_variation})},[_(H,{detailed_info:o.form.detailed_info,sub_variation_prop:o.sub_variation_prop},null,8,["detailed_info","sub_variation_prop"])],2)],2),ge]),e("div",be,[t.value===1?(d(),m(f,{key:0,url:o.route("products"),buttonType:"gray"},{default:c(()=>[n("Cancel")]),_:1},8,["url"])):p("",!0),t.value===1?(d(),m(f,{key:1,onClick:s[10]||(s[10]=i=>a(2))},{default:c(()=>[n("Next")]),_:1})):p("",!0),t.value===2?(d(),m(f,{key:2,onClick:s[11]||(s[11]=i=>a(1)),buttonType:"gray"},{default:c(()=>[n("Back")]),_:1})):p("",!0),t.value===2?(d(),m(f,{key:3,type:"submit"},{default:c(()=>[n("Save")]),_:1})):p("",!0)])])])])])],32)])])]),_:1})],64))}});export{_o as default};
