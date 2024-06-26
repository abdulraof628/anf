import{z as k,o as a,c as m,a as _,u as w,w as c,F as y,H as x,d as e,l as C,n as r,e as V,g as d,t as $,q as u,h as b,v,s as f}from"./app-b0ada57f.js";import{B as z}from"./Authenticated-00519a95.js";import{B as p}from"./Button-7e5ebb17.js";import{U as H,_ as B}from"./Variation-32081f92.js";import{C as I}from"./compressor.esm-dec42b9c.js";import"./ApplicationLogo-5609d7e8.js";import"./XIcon-72ef4a27.js";import"./vue3-perfect-scrollbar-f1bcd31f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-fd223f9f.js";import"./moment-a9aaa855.js";import"./ConfirmationModal-2329c22a.js";import"./transition-180dc3ab.js";import"./keyboard-462b33c7.js";const U={class:"md:grid md:grid-cols-2"},q={class:"md:mt-0 md:col-span-2"},T={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},D={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},S={class:"sm:row-span-3"},F={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},j=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Product Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),P=e("path",{d:"M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"},null,-1),M=[P],N={class:"leading-none"},L=e("path",{d:"M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"},null,-1),E=[L],O={class:"leading-none"},R={class:"p-10"},A={class:"mb-4"},W=e("label",{for:"category_name",class:"block text-sm text-gray-700 font-bold mb-2"},[d(" Product Images "),e("span",{class:"text-red-500"},"*")],-1),G={class:"flex flex-wrap justify-center"},J={class:"flex flex-col items-center p-2 m-2"},K=["for"],Q={key:0,class:"text-red-600"},X=["onClick"],Y={class:"mb-4"},Z=e("label",{for:"product_name",class:"block text-sm text-gray-700 font-bold mb-2"},[d(" Product Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"mb-4"},oe=e("label",{for:"product_description",class:"block text-sm text-gray-700 font-bold mb-2"},[d(" Product Description "),e("span",{class:"text-red-500"},"*")],-1),se={class:"mt-1 flex rounded-md shadow-sm"},ie={class:"mb-10"},ae=e("div",{class:"mb-3"},[e("label",{class:"block text-sm text-gray-700 font-bold"}," Variation Setting ")],-1),re={class:"flex space-x-4"},le={class:"mt-1 flex rounded-md"},de={class:"mt-1 flex rounded-md"},ne={key:0,class:""},ue={class:"mb-4"},ce=e("label",{for:"product_price",class:"block text-sm text-gray-700 font-bold"},[d(" Price "),e("span",{class:"text-red-500"},"*")],-1),me={class:"mt-1 flex rounded-md shadow-sm"},fe={class:"mb-4"},pe=e("label",{for:"product_stock",class:"block text-sm text-gray-700 font-bold"},[d(" Stock "),e("span",{class:"text-red-500"},"*")],-1),_e={class:"mt-1 flex rounded-md shadow-sm"},be=e("hr",{class:"mt-10"},null,-1),ve={class:"flex items-center justify-between space-x-2 px-10"};function ge(l,s){return new File([l],s,{type:l.type})}const he={data(){return{form:{basic_info:{product_name:"",product_description:"",product_price:"",product_stock:"",product_images:{cover:{label:"Cover Image",required:!0,file:null,value:null},image_1:{label:"Image 1",required:!1,file:null,value:null},image_2:{label:"Image 2",required:!1,file:null,value:null},image_3:{label:"Image 3",required:!1,file:null,value:null},image_4:{label:"Image 4",required:!1,file:null,value:null},image_5:{label:"Image 5",required:!1,file:null,value:null},image_6:{label:"Image 6",required:!1,file:null,value:null}}},detailed_info:{has_variation:!1,has_sub_variation:!1,main_variation_name:"",sub_variation_name:"",variations:{options:[{name:"",images:{file:null,value:null},price:0,stock:0,sub_variations:{options:[{name:"",price:0,stock:0}]}}]}}}}},methods:{submit(){this.$inertia.post(route("products.store"),this.form)},handleFileChange(l,s){if(l){const n=this.form.basic_info.product_images;this.compress(l,s,n)}},compress(l,s,n){new I(l,{quality:.2,maxWidth:400,maxHeight:400,success(t){const o=URL.createObjectURL(t),i=ge(t,Date.now()+".jpg");n[s].file=i,n[s].value=o}})},deleteImage(l){this.form.basic_info.product_images[l].file=null,this.form.basic_info.product_images[l].value=null},blobToFile(l,s){return new File([l],s,{type:l.type})}}},De=Object.assign(he,{__name:"Create",setup(l){const s=k(1),n=t=>{s.value=t};return(t,o)=>(a(),m(y,null,[_(w(x),{title:"Product"}),_(z,null,{header:c(()=>[]),default:c(()=>[e("div",U,[e("div",q,[e("form",{onSubmit:o[12]||(o[12]=C((...i)=>t.submit&&t.submit(...i),["prevent"]))},[e("div",T,[e("div",D,[e("div",S,[e("div",F,[j,e("div",null,[e("ol",{class:r(["grid grid-cols-1 divide-x divide-gray-300 overflow-hidden rounded-lg border border-gray-300 text-sm text-gray-500 sm:grid-cols-2",{"text-white":s.value===1}])},[e("li",{class:r(["flex items-center justify-center gap-2 p-4 cursor-pointer",{"bg-indigo-500":s.value===1}]),onClick:o[0]||(o[0]=i=>n(1))},[(a(),m("svg",{xmlns:"http://www.w3.org/2000/svg",class:r(["h-7 w-7 text-gray-600",{"text-white":s.value===1}]),fill:"currentColor",viewBox:"0 0 448 512"},M,2)),e("p",N,[e("strong",{class:r(["block font-medium text-gray-600",{"text-white":s.value===1}])}," Basic Information ",2),e("small",{class:r(["mt-1 text-gray-500",{"text-white":s.value===1}])}," Some basic info about this product. ",2)])],2),e("li",{class:r(["flex items-center justify-center gap-2 p-4 cursor-pointer",{"bg-indigo-500":s.value===2}]),onClick:o[1]||(o[1]=i=>n(2))},[(a(),m("svg",{xmlns:"http://www.w3.org/2000/svg",class:r(["h-7 w-7 text-gray-600",{"text-white":s.value===2}]),fill:"currentColor",viewBox:"0 0 576 512"},E,2)),e("p",O,[e("strong",{class:r(["block font-medium text-gray-600",{"text-white":s.value===2}])}," Detailed Information ",2),e("small",{class:r(["mt-1 text-gray-500",{"text-white":s.value===2}])}," Detailed info like variations, prices and more... ",2)])],2)],2)]),e("div",R,[e("div",{class:r({hidden:s.value===2})},[e("div",A,[W,e("div",G,[(a(!0),m(y,null,V(t.form.basic_info.product_images,(i,g)=>(a(),m("div",J,[e("label",{for:i.label,class:"mb-3 text-sm text-gray-500 text-center"},[d($(i.label)+" ",1),i.required?(a(),m("span",Q,"*")):u("",!0)],8,K),_(H,{previewUrl:i.value,"onUpdate:value":h=>t.handleFileChange(h,g)},null,8,["previewUrl","onUpdate:value"]),i.value?(a(),m("span",{key:0,class:"mt-3 text-sm text-red-500 hover:underline cursor-pointer font-semibold",onClick:h=>t.deleteImage(g)},"Delete",8,X)):u("",!0)]))),256))])]),e("div",Y,[Z,e("div",ee,[b(e("input",{type:"text",name:"product_name",id:"product_name",class:r(["focus:ring-0 focus:border-gray-400 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors["basic_info.product_name"]?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[2]||(o[2]=i=>t.form.basic_info.product_name=i),autocomplete:"off"},null,2),[[v,t.form.basic_info.product_name]])])]),e("div",te,[oe,e("div",se,[b(e("textarea",{name:"product_description",id:"product_description",class:r(["focus:ring-0 focus:border-gray-400 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors["basic_info.product_description"]?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[3]||(o[3]=i=>t.form.basic_info.product_description=i),cols:"30",rows:"10"},null,2),[[v,t.form.basic_info.product_description]])])])],2),e("div",{class:r({hidden:s.value===1})},[e("div",ie,[ae,e("div",re,[e("div",le,[t.form.detailed_info.has_variation?u("",!0):(a(),f(p,{key:0,onClick:o[4]||(o[4]=i=>t.form.detailed_info.has_variation=!0),buttonType:"info"},{default:c(()=>[d("Enable Variation")]),_:1})),t.form.detailed_info.has_variation?(a(),f(p,{key:1,onClick:o[5]||(o[5]=i=>(t.form.detailed_info.has_variation=!1,t.form.detailed_info.has_sub_variation=!1)),buttonType:"gray"},{default:c(()=>[d("Disable Variation")]),_:1})):u("",!0)]),e("div",de,[t.form.detailed_info.has_variation&&!t.form.detailed_info.has_sub_variation?(a(),f(p,{key:0,onClick:o[6]||(o[6]=i=>t.form.detailed_info.has_sub_variation=!0),buttonType:"info"},{default:c(()=>[d("Enable Sub Variation")]),_:1})):u("",!0),t.form.detailed_info.has_variation&&t.form.detailed_info.has_sub_variation?(a(),f(p,{key:1,onClick:o[7]||(o[7]=i=>t.form.detailed_info.has_sub_variation=!1),buttonType:"gray"},{default:c(()=>[d("Disable Sub Variation")]),_:1})):u("",!0)])])]),t.form.detailed_info.has_variation?u("",!0):(a(),m("div",ne,[e("div",ue,[ce,e("div",me,[b(e("input",{type:"number",name:"product_price",id:"product_price",class:r(["focus:ring-0 focus:border-gray-400 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors["basic_info.product_price"]?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[8]||(o[8]=i=>t.form.basic_info.product_price=i),autocomplete:"off"},null,2),[[v,t.form.basic_info.product_price]])])]),e("div",fe,[pe,e("div",_e,[b(e("input",{type:"number",name:"product_stock",id:"product_stock",class:r(["focus:ring-0 focus:border-gray-400 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors["basic_info.product_stock"]?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[9]||(o[9]=i=>t.form.basic_info.product_stock=i),autocomplete:"off"},null,2),[[v,t.form.basic_info.product_stock]])])])])),e("div",{class:r({hidden:!t.form.detailed_info.has_variation})},[_(B,{detailed_info:t.form.detailed_info},null,8,["detailed_info"])],2)],2),be]),e("div",ve,[s.value===1?(a(),f(p,{key:0,route:t.route("products"),buttonType:"gray"},{default:c(()=>[d("Cancel")]),_:1},8,["route"])):u("",!0),s.value===1?(a(),f(p,{key:1,onClick:o[10]||(o[10]=i=>n(2))},{default:c(()=>[d("Next")]),_:1})):u("",!0),s.value===2?(a(),f(p,{key:2,onClick:o[11]||(o[11]=i=>n(1)),buttonType:"gray"},{default:c(()=>[d("Back")]),_:1})):u("",!0),s.value===2?(a(),f(p,{key:3,type:"submit"},{default:c(()=>[d("Create")]),_:1})):u("",!0)])])])])])],32)])])]),_:1})],64))}});export{De as default};
