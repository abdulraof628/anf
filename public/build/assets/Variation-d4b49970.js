import{_ as j}from"./app-268d443b.js";import{t as d,y as u,z as l,x as o,Q as n,q as L,v as h,C as y,F as p,be as w,W as f,u as c,J as x,K as k}from"./@vue-2682a433.js";import{C as O}from"./compressorjs-dec42b9c.js";import{C as R}from"./ConfirmationModal-0c4277c7.js";import{_ as E}from"./Card-d08a29fb.js";import{_ as S,d as I,e as g,c as V,a as $,b as U}from"./TableRow-010fc527.js";import{_ as B}from"./TableCaption-dfca1725.js";import{C as T}from"./lucide-vue-next-62ff5c75.js";const D={class:"relative"},A={key:0,class:"flex justify-center items-center relative w-24 h-24 border border-gray-400 cursor-pointer"},F=["src"],P={key:1,class:"w-24 h-24 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer"},N={methods:{resetInput(e){e.target.value=null}}},M=Object.assign(N,{__name:"UploadPreview",props:{previewUrl:{required:!0}},emits:["update:value"],setup(e,{emit:i}){const t=i;return(s,m)=>(d(),u("div",null,[l("div",D,[e.previewUrl?(d(),u("div",A,[l("img",{src:e.previewUrl,alt:"Preview",class:"object-fill w-full h-full",style:{margin:"0px"}},null,8,F)])):(d(),u("div",P,m[2]||(m[2]=[l("p",{class:"text-gray-400"},"+",-1)]))),l("input",{type:"file",class:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",onInput:m[0]||(m[0]=_=>t("update:value",_.target.files[0])),onClick:m[1]||(m[1]=(..._)=>s.resetInput&&s.resetInput(..._))},null,32)])]))}}),q=j(M,[["__scopeId","data-v-e1956572"]]),z={class:"grid grid-cols-1 2xl:grid-cols-2 gap-4"},W={class:"mb-3"},H={class:"grid grid-cols-1 gap-4"},J={class:""},K={class:"grid grid-cols-1 gap-2"},Q={class:"flex items-center space-x-4"},G={class:"mb-3"},X={class:"grid grid-cols-1 gap-4"},Y={class:""},Z={class:"grid grid-cols-1 gap-2"},ee={class:"flex items-center space-x-4"},te={class:"flex flex-col items-center p-2 m-2"},ie={class:"flex flex-col items-center space-y-2"},oe={class:"flex flex-col justify-center items-center space-y-2"},ae={class:"flex flex-col justify-center items-center space-y-2"},ne={class:"flex flex-col justify-center items-center space-y-2"},se={class:"flex flex-col justify-center items-center space-y-2"};function le(e,i){return new File([e],i,{type:e.type})}const re={components:[S,I,B,g,V,$,U],props:{detailed_info:Object,sub_variation_prop:Object},data(){return{sub_variations:this.sub_variation_prop?this.sub_variation_prop:{options:[{name:""}]},confirmation_modal:{is_open:!1,alert:"",title:"",text:"",button:"",method:"",route:"",data:"",preserveScroll:!0}}},watch:{"detailed_info.has_sub_variation":{handler(){const e=this.detailed_info;e.has_sub_variation||(this.sub_variations.options=[{name:""}],e.sub_variation_name="",e.variations.options.map(i=>{i.sub_variations.options=[{id:"",name:"",price:0,stock:0}]}))}},sub_variations:{handler(){this.detailed_info.has_sub_variation==1&&this.constructTable()},deep:!0},"detailed_info.variations.options":{handler(){this.detailed_info.variations.options.forEach(e=>{e.price||(e.price=0),e.stock||(e.stock=0),e.sub_variations.options.forEach(i=>{i.price||(i.price=0),i.stock||(i.stock=0)})})},deep:!0}},methods:{constructTable(){this.detailed_info.variations.options.forEach((e,i)=>{e.sub_variations.options.length&&e.sub_variations.options.forEach((t,s)=>{t.name=this.sub_variations.options[s]?this.sub_variations.options[s].name:""})})},addVariation(){if(!this.sub_variations.options.some(i=>i.name!==""))this.detailed_info.variations.options.push({id:"",name:"",images:{file:null,value:null},price:0,stock:0,sub_variations:{options:[{id:"",name:"",price:0,stock:0}]}});else{const i={id:"",name:"",images:{file:null,value:null},price:0,stock:0,sub_variations:{options:[]}};this.detailed_info.variations.options.push(i);const t=this.detailed_info.variations.options.indexOf(i);this.sub_variations.options.forEach(s=>{this.detailed_info.variations.options[t].sub_variations.options.push({id:"",name:s.name,price:0,stock:0})})}},addSubVariation(){this.sub_variations.options.push({name:""}),this.detailed_info.variations.options.forEach((e,i)=>{e.sub_variations.options.push({id:"",name:"",price:0,stock:0})})},removeVariation(e,i){i?(this.confirmation_modal.is_open=!0,this.confirmation_modal.alert="danger",this.confirmation_modal.title="Are you sure?",this.confirmation_modal.text='This will delete the variation along with the sub variations. This action will be executed once you click the DELETE button. This action is <span class="text-red-600">IRREVERSIBLE</span>. Are you confirm?',this.confirmation_modal.button="DELETE",this.confirmation_modal.method="delete",this.confirmation_modal.route="products.delete_variation",this.confirmation_modal.data=i):this.detailed_info.variations.options.splice(e,1)},removeSubVariation(e){const i=[];this.detailed_info.variations.options.forEach(t=>{t.sub_variations.options[e].id&&i.push(t.sub_variations.options[e].id)}),i.length?(this.confirmation_modal.is_open=!0,this.confirmation_modal.alert="danger",this.confirmation_modal.title="Are you sure?",this.confirmation_modal.text="This will delete this sub variation for all variation in this product. This action will be executed once you click the DELETE button. This action is IRREVERSIBLE. Are you confirm?",this.confirmation_modal.button="DELETE",this.confirmation_modal.method="delete",this.confirmation_modal.route="products.delete_sub_variation",this.confirmation_modal.data={to_delete:i}):(this.detailed_info.variations.options.forEach(t=>{t.sub_variations.options.splice(e,1)}),this.sub_variations.options.splice(e,1))},handleFileChange(e,i){e&&this.compress(e,i)},compress(e,i){const t=this.detailed_info;new O(e,{quality:.2,maxWidth:400,maxHeight:400,success(s){const m=URL.createObjectURL(s),_=le(s,Date.now()+".jpg");t.variations.options[i].images.file=_,t.variations.options[i].images.value=m}})},deleteImage(e){this.detailed_info.variations.options[e].images.file=null,this.detailed_info.variations.options[e].images.value=null},blobToFile(e,i){return new File([e],i,{type:e.type})},numbersOnly(e,i){e=e||window.event;var t=e.which?e.which:e.keyCode;if(t>31&&(t<48||t>57)&&t!==46)e.preventDefault();else{let s=e.target.value.trim();return s===""?s="0":s!=="0"&&s.startsWith("0")&&(s=s.replace(/^0+/,"")),e.target.value=s!==""?s:"0",!0}}}},de=Object.assign(re,{__name:"Variation",setup(e){return(i,t)=>{const s=w("Label"),m=w("Input"),_=w("Button");return d(),u(p,null,[l("div",z,[o(E,null,{content:n(()=>[l("div",W,[o(s,{class:"text-base"},{default:n(()=>t[7]||(t[7]=[f(" Variation ")])),_:1})]),l("div",H,[l("div",J,[o(s,null,{default:n(()=>t[8]||(t[8]=[f("Name"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(m,{type:"text",placeholder:"Example: Level",modelValue:e.detailed_info.main_variation_name,"onUpdate:modelValue":t[0]||(t[0]=r=>e.detailed_info.main_variation_name=r)},null,8,["modelValue"])]),l("div",K,[l("div",Q,[o(s,null,{default:n(()=>t[9]||(t[9]=[f("Options"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(_,{onClick:i.addVariation,class:"text-xs px-2 h-0 py-4"},{default:n(()=>[o(c(T),{class:"h-4 w-4"}),t[10]||(t[10]=l("span",{class:"ml-1 hidden sm:block"},"Add",-1))]),_:1},8,["onClick"])]),(d(!0),u(p,null,x(e.detailed_info.variations.options,(r,v)=>(d(),u("div",{key:v,class:"flex space-x-2"},[o(m,{type:"text",class:"2xl:w-screen 2xl:max-w-96",placeholder:"Example: Level 1",modelValue:r.name,"onUpdate:modelValue":a=>r.name=a},null,8,["modelValue","onUpdate:modelValue"]),o(_,{variant:"destructive",class:"text-xs px-2 h-0 py-4",onClick:a=>e.detailed_info.variations.options.length>1?i.removeVariation(v,r.id):""},{default:n(()=>t[11]||(t[11]=[f("Remove")])),_:2},1032,["onClick"])]))),128))])])]),_:1}),o(E,{class:L({hidden:e.detailed_info.has_sub_variation==0})},{content:n(()=>[l("div",G,[o(s,{class:"text-base"},{default:n(()=>t[12]||(t[12]=[f(" Sub Variation ")])),_:1})]),l("div",X,[l("div",Y,[o(s,null,{default:n(()=>t[13]||(t[13]=[f("Name"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(m,{type:"text",placeholder:"Example: Level",modelValue:e.detailed_info.sub_variation_name,"onUpdate:modelValue":t[1]||(t[1]=r=>e.detailed_info.sub_variation_name=r)},null,8,["modelValue"])]),l("div",Z,[l("div",ee,[o(s,null,{default:n(()=>t[14]||(t[14]=[f("Options"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(_,{onClick:i.addSubVariation,class:"text-xs px-2 h-0 py-4"},{default:n(()=>[o(c(T),{class:"h-4 w-4"}),t[15]||(t[15]=l("span",{class:"ml-1 hidden sm:block"},"Add",-1))]),_:1},8,["onClick"])]),(d(!0),u(p,null,x(i.sub_variations.options,(r,v)=>(d(),u("div",{key:v,class:"flex space-x-2"},[o(m,{type:"text",class:"2xl:w-screen 2xl:max-w-96",placeholder:"Example: Level 1",modelValue:r.name,"onUpdate:modelValue":a=>r.name=a},null,8,["modelValue","onUpdate:modelValue"]),o(_,{variant:"destructive",class:"text-xs px-2 h-0 py-4",onClick:a=>i.sub_variations.options.length>1?i.removeSubVariation(v):""},{default:n(()=>t[16]||(t[16]=[f("Remove")])),_:2},1032,["onClick"])]))),128))])])]),_:1},8,["class"])]),e.detailed_info.main_variation_name?(d(),h(E,{key:0,class:"mt-4"},{content:n(()=>[o(c(S),null,{default:n(()=>[o(c($),{class:"bg-gray-100"},{default:n(()=>[o(c(U),null,{default:n(()=>[o(c(V),{class:"text-center"},{default:n(()=>[f(k(e.detailed_info.main_variation_name),1)]),_:1}),e.detailed_info.has_sub_variation==1&&e.detailed_info.sub_variation_name&&i.sub_variations.options.some(r=>r.name!=="")?(d(),h(c(V),{key:0,class:"text-center"},{default:n(()=>[f(k(e.detailed_info.sub_variation_name),1)]),_:1})):y("",!0),o(c(V),{class:"text-center"},{default:n(()=>t[17]||(t[17]=[f("Price")])),_:1}),o(c(V),{class:"text-center"},{default:n(()=>t[18]||(t[18]=[f("Stock")])),_:1})]),_:1})]),_:1}),o(c(I),null,{default:n(()=>[(d(!0),u(p,null,x(e.detailed_info.variations.options,(r,v)=>(d(),u(p,null,[r.name.trim()!==""?(d(),h(c(U),{key:0},{default:n(()=>[o(c(g),null,{default:n(()=>[l("div",te,[o(q,{previewUrl:r.images.value,"onUpdate:value":a=>i.handleFileChange(a,v)},null,8,["previewUrl","onUpdate:value"]),o(s,{class:"mt-1",for:r.name},{default:n(()=>[f(k(r.name),1)]),_:2},1032,["for"])])]),_:2},1024),e.detailed_info.has_sub_variation==1&&e.detailed_info.sub_variation_name&&i.sub_variations.options.some(a=>a.name!=="")?(d(),h(c(g),{key:0},{default:n(()=>[(d(!0),u(p,null,x(r.sub_variations.options,(a,C)=>(d(),u("div",ie,[a.name?(d(),h(s,{key:0,class:"my-3",for:a.name},{default:n(()=>[f(k(a.name),1)]),_:2},1032,["for"])):y("",!0)]))),256))]),_:2},1024)):y("",!0),e.detailed_info.has_sub_variation==1&&e.detailed_info.sub_variation_name&&i.sub_variations.options.some(a=>a.name!=="")?(d(),u(p,{key:1},[o(c(g),null,{default:n(()=>[l("div",oe,[(d(!0),u(p,null,x(r.sub_variations.options,(a,C)=>(d(),u(p,null,[a.name?(d(),h(m,{key:0,type:"number",min:"0",onInput:t[2]||(t[2]=b=>i.numbersOnly(b)),class:"focus:ring-0 border-gray-300 focus:border-gray-400 rounded-md flex-1 block min-w-14",modelValue:a.price,"onUpdate:modelValue":b=>a.price=b},null,8,["modelValue","onUpdate:modelValue"])):y("",!0)],64))),256))])]),_:2},1024),o(c(g),null,{default:n(()=>[l("div",ae,[(d(!0),u(p,null,x(r.sub_variations.options,(a,C)=>(d(),u(p,null,[a.name?(d(),h(m,{key:0,type:"number",min:"0",onInput:t[3]||(t[3]=b=>i.numbersOnly(b)),class:"focus:ring-0 border-gray-300 focus:border-gray-400 rounded-md flex-1 block min-w-14",modelValue:a.stock,"onUpdate:modelValue":b=>a.stock=b},null,8,["modelValue","onUpdate:modelValue"])):y("",!0)],64))),256))])]),_:2},1024)],64)):(d(),u(p,{key:2},[o(c(g),null,{default:n(()=>[l("div",ne,[o(m,{type:"number",min:"0",onInput:t[4]||(t[4]=a=>i.numbersOnly(a)),class:"focus:ring-0 border-gray-300 focus:border-gray-400 rounded-md flex-1 block min-w-14",modelValue:r.price,"onUpdate:modelValue":a=>r.price=a},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024),o(c(g),null,{default:n(()=>[l("div",se,[o(m,{type:"number",min:"0",onInput:t[5]||(t[5]=a=>i.numbersOnly(a)),class:"focus:ring-0 border-gray-300 focus:border-gray-400 rounded-md flex-1 block min-w-14",modelValue:r.stock,"onUpdate:modelValue":a=>r.stock=a},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024)],64))]),_:2},1024)):y("",!0)],64))),256))]),_:1})]),_:1})]),_:1})):y("",!0),o(R,{show:i.confirmation_modal.is_open,onClose:t[6]||(t[6]=r=>i.confirmation_modal.is_open=!1),confirmationAlert:i.confirmation_modal.alert,confirmationTitle:i.confirmation_modal.title,confirmationText:i.confirmation_modal.text,confirmationButton:i.confirmation_modal.button,confirmationMethod:i.confirmation_modal.method,confirmationRoute:i.confirmation_modal.route,confirmationData:i.confirmation_modal.data,preserveScroll:i.confirmation_modal.preserveScroll,preserveState:i.confirmation_modal.preserveState},null,8,["show","confirmationAlert","confirmationTitle","confirmationText","confirmationButton","confirmationMethod","confirmationRoute","confirmationData","preserveScroll","preserveState"])],64)}}}),he=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));export{q as U,he as V,de as _};
