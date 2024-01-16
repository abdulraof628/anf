import{o as n,c as l,d as t,E as g,G as w,f as c,l as u,b as _,w as b,F as d,h,n as k,t as v,j as p,k as m}from"./app-41239a54.js";import{B as y}from"./Button-10d4b0cf.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import{C as E}from"./compressor.esm-dec42b9c.js";import{C as U}from"./ConfirmationModal-920860ad.js";const T=e=>(g("data-v-e1956572"),e=e(),w(),e),C={class:"relative"},S={key:0,class:"flex justify-center items-center relative w-24 h-24 border border-gray-400 cursor-pointer"},j=["src"],I={key:1,class:"w-24 h-24 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer"},O=T(()=>t("p",{class:"text-gray-400"},"+",-1)),R=[O],L={methods:{resetInput(e){e.target.value=null}}},$=Object.assign(L,{__name:"UploadPreview",props:{previewUrl:{required:!0}},emits:["update:value"],setup(e,{emit:o}){const a=o;return(i,r)=>(n(),l("div",null,[t("div",C,[e.previewUrl?(n(),l("div",S,[t("img",{src:e.previewUrl,alt:"Preview",class:"object-fill w-full h-full",style:{margin:"0px"}},null,8,j)])):(n(),l("div",I,R)),t("input",{type:"file",class:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",onInput:r[0]||(r[0]=s=>a("update:value",s.target.files[0])),onClick:r[1]||(r[1]=(...s)=>i.resetInput&&i.resetInput(...s))},null,32)])]))}}),B=V($,[["__scopeId","data-v-e1956572"]]),D={class:"w-full"},A={class:"flex flex-col mb-10"},F=t("div",{class:"mb-3"},[t("label",{class:"block text-sm text-gray-700 font-bold"}," Main Variation ")],-1),M={class:"w-full bg-white shadow-md shadow-gray-400 border border-gray-400 rounded-md overflow-hidden"},N={class:"border-b border-gray-200 px-8 py-6"},P={class:"mb-4"},z=t("label",{for:"variation_name",class:"block text-sm text-gray-700 font-bold"},[m(" Name "),t("span",{class:"text-red-500"},"*")],-1),q={class:"mt-1 flex rounded-md shadow-sm"},W={class:"mb-4"},G={class:"flex items-center justify-between py-2"},H=t("label",{class:"block text-sm text-gray-700 font-bold"},[m(" Options "),t("span",{class:"text-red-500"},"*")],-1),J=["onUpdate:modelValue"],K=t("div",{class:"mb-3"},[t("label",{class:"block text-sm text-gray-700 font-bold"}," Sub Variation ")],-1),Q={class:"w-full bg-white shadow-md shadow-gray-500 border border-gray-400 rounded-md overflow-hidden"},X={class:"border-b border-gray-200 px-8 py-6"},Y={class:"mb-4"},Z=t("label",{for:"sub_variation_name",class:"block text-sm text-gray-700 font-bold"},[m(" Name "),t("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"mb-4"},oe={class:"flex items-center justify-between py-2"},ie=t("label",{class:"block text-sm text-gray-700 font-bold"},[m(" Options "),t("span",{class:"text-red-500"},"*")],-1),se=["onUpdate:modelValue"],ae={key:0,class:"flex flex-col mb-3"},ne={class:"overflow-auto"},le={class:"min-w-full divide-y divide-gray-200"},re={class:"bg-gray-300"},de={scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},ce={key:0,scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},ue=t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Price",-1),me=t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Stock",-1),fe={class:"bg-white divide-y divide-gray-200"},pe={key:0,class:""},_e={class:"px-6 py-4 whitespace-nowrap"},he={class:"flex flex-col items-center p-2 m-2"},be=["for"],ve={key:0,class:"px-6 py-4 whitespace-nowrap"},ye={class:"flex flex-col items-center space-y-2"},xe=["for"],ge={class:"px-6 py-4 whitespace-nowrap"},we={class:"flex flex-col justify-center items-center space-y-2"},ke=["onUpdate:modelValue"],Ve={class:"px-6 py-4 whitespace-nowrap"},Ee={class:"flex flex-col justify-center items-center space-y-2"},Ue=["onUpdate:modelValue"],Te={class:"px-6 py-4 whitespace-nowrap"},Ce={class:"flex flex-col justify-center items-center space-y-2"},Se=["onUpdate:modelValue"],je={class:"px-6 py-4 whitespace-nowrap"},Ie={class:"flex flex-col justify-center items-center space-y-2"},Oe=["onUpdate:modelValue"];function Re(e,o){return new File([e],o,{type:e.type})}const Le={props:{detailed_info:Object,sub_variation_prop:Object},data(){return{sub_variations:this.sub_variation_prop?this.sub_variation_prop:{options:[{name:""}]},confirmation_modal:{is_open:!1,alert:"",title:"",text:"",button:"",method:"",route:"",data:"",preserveScroll:!0}}},watch:{sub_variations:{handler(){this.detailed_info.has_sub_variation==1&&this.constructTable()},deep:!0},"detailed_info.variations.options":{handler(){this.detailed_info.variations.options.forEach(e=>{e.price||(e.price=0),e.stock||(e.stock=0),e.sub_variations.options.forEach(o=>{o.price||(o.price=0),o.stock||(o.stock=0)})})},deep:!0}},methods:{constructTable(){this.detailed_info.variations.options.forEach((e,o)=>{e.sub_variations.options.forEach((a,i)=>{a.name=this.sub_variations.options[i]?this.sub_variations.options[i].name:""})})},addVariation(){if(!this.sub_variations.options.some(o=>o.name!==""))this.detailed_info.variations.options.push({id:"",name:"",images:{file:null,value:null},price:0,stock:0,sub_variations:{options:[{id:"",name:"",price:0,stock:0}]}});else{const o={id:"",name:"",images:{file:null,value:null},price:0,stock:0,sub_variations:{options:[]}};this.detailed_info.variations.options.push(o);const a=this.detailed_info.variations.options.indexOf(o);this.sub_variations.options.forEach(i=>{this.detailed_info.variations.options[a].sub_variations.options.push({id:"",name:i.name,price:0,stock:0})})}},addSubVariation(){this.sub_variations.options.push({name:""}),this.detailed_info.variations.options.forEach((e,o)=>{e.sub_variations.options.push({id:"",name:"",price:0,stock:0})})},removeVariation(e,o){o?(this.confirmation_modal.is_open=!0,this.confirmation_modal.alert="danger",this.confirmation_modal.title="Are you sure?",this.confirmation_modal.text='This will delete the variation along with the sub variations. This action will be executed once you click the DELETE button. This action is <span class="text-red-600">IRREVERSIBLE</span>. Are you confirm?',this.confirmation_modal.button="DELETE",this.confirmation_modal.method="delete",this.confirmation_modal.route="products.delete_variation",this.confirmation_modal.data=o):this.detailed_info.variations.options.splice(e,1)},removeSubVariation(e){const o=[];this.detailed_info.variations.options.forEach(a=>{a.sub_variations.options[e].id&&o.push(a.sub_variations.options[e].id)}),o.length?(this.confirmation_modal.is_open=!0,this.confirmation_modal.alert="danger",this.confirmation_modal.title="Are you sure?",this.confirmation_modal.text="This will delete this sub variation for all variation in this product. This action will be executed once you click the DELETE button. This action is IRREVERSIBLE. Are you confirm?",this.confirmation_modal.button="DELETE",this.confirmation_modal.method="delete",this.confirmation_modal.route="products.delete_sub_variation",this.confirmation_modal.data={to_delete:o}):(this.detailed_info.variations.options.forEach(a=>{a.sub_variations.options.splice(e,1)}),this.sub_variations.options.splice(e,1))},handleFileChange(e,o){e&&this.compress(e,o)},compress(e,o){const a=this.detailed_info;new E(e,{quality:.2,maxWidth:400,maxHeight:400,success(i){const r=URL.createObjectURL(i),s=Re(i,Date.now()+".jpg");a.variations.options[o].images.file=s,a.variations.options[o].images.value=r}})},deleteImage(e){this.detailed_info.variations.options[e].images.file=null,this.detailed_info.variations.options[e].images.value=null},blobToFile(e,o){return new File([e],o,{type:e.type})},numbersOnly(e,o){e=e||window.event;var a=e.which?e.which:e.keyCode;if(a>31&&(a<48||a>57)&&a!==46)e.preventDefault();else{let i=e.target.value.trim();return i===""?i="0":i!=="0"&&i.startsWith("0")&&(i=i.replace(/^0+/,"")),e.target.value=i!==""?i:"0",!0}}}},$e=Object.assign(Le,{__name:"Variation",setup(e){return(o,a)=>(n(),l(d,null,[t("div",D,[t("div",A,[F,t("div",M,[t("div",N,[t("div",P,[z,t("div",q,[c(t("input",{type:"text",placeholder:"E.g. Level, ",id:"variation_name","onUpdate:modelValue":a[0]||(a[0]=i=>e.detailed_info.main_variation_name=i),class:"focus:ring-0 border-gray-300 focus:border-gray-400 flex-1 block w-full rounded-md sm:text-sm"},null,512),[[u,e.detailed_info.main_variation_name]])])]),t("div",W,[t("div",null,[t("div",G,[H,_(y,{onClick:o.addVariation,buttonType:"info",class:"text-sm py-2 px-3"},{default:b(()=>[m("Add more option")]),_:1},8,["onClick"])]),(n(!0),l(d,null,h(e.detailed_info.variations.options,(i,r)=>(n(),l("div",{key:r,class:"mt-1 flex rounded-md shadow-sm"},[c(t("input",{type:"text",placeholder:"E.g. Level 1",class:"focus:ring-0 border-gray-300 focus:border-gray-400 flex-1 block rounded-tl-md rounded-bl-md sm:text-sm","onUpdate:modelValue":s=>i.name=s,autocomplete:"off"},null,8,J),[[u,i.name]]),_(y,{buttonType:"danger",class:"h-full px-4 rounded-r rounded-l-none",onClick:s=>o.removeVariation(r,i.id)},{default:b(()=>[m("Remove")]),_:2},1032,["onClick"])]))),128))])])])])]),t("div",{class:k(["flex flex-col mb-10",{hidden:e.detailed_info.has_sub_variation==0}])},[K,t("div",Q,[t("div",X,[t("div",Y,[Z,t("div",ee,[c(t("input",{type:"text",id:"sub_variation_name","onUpdate:modelValue":a[1]||(a[1]=i=>e.detailed_info.sub_variation_name=i),class:"focus:ring-0 border-gray-300 focus:border-gray-400 flex-1 block w-full rounded-md sm:text-sm"},null,512),[[u,e.detailed_info.sub_variation_name]])])]),t("div",te,[t("div",null,[t("div",oe,[ie,_(y,{onClick:o.addSubVariation,buttonType:"info",class:"text-sm py-2 px-3"},{default:b(()=>[m("Add more option")]),_:1},8,["onClick"])]),(n(!0),l(d,null,h(o.sub_variations.options,(i,r)=>(n(),l("div",{key:r,class:"mt-1 flex rounded-md shadow-sm"},[c(t("input",{type:"text",placeholder:"option",class:"focus:ring-0 border-gray-300 focus:border-gray-400 flex-1 block rounded-tl-md rounded-bl-md sm:text-sm","onUpdate:modelValue":s=>i.name=s,autocomplete:"off"},null,8,se),[[u,i.name]]),_(y,{buttonType:"danger",class:"h-full px-4 rounded-r rounded-l-none",onClick:s=>o.removeSubVariation(r)},{default:b(()=>[m("Remove")]),_:2},1032,["onClick"])]))),128))])])])])],2),e.detailed_info.main_variation_name?(n(),l("div",ae,[t("div",ne,[t("table",le,[t("thead",re,[t("tr",null,[t("th",de,v(e.detailed_info.main_variation_name),1),e.detailed_info.has_sub_variation==1&&e.detailed_info.sub_variation_name&&o.sub_variations.options.some(i=>i.name!=="")?(n(),l("th",ce,v(e.detailed_info.sub_variation_name),1)):p("",!0),ue,me])]),t("tbody",fe,[(n(!0),l(d,null,h(e.detailed_info.variations.options,(i,r)=>(n(),l(d,null,[i.name.trim()!==""?(n(),l("tr",pe,[t("td",_e,[t("div",he,[_(B,{previewUrl:i.images.value,"onUpdate:value":s=>o.handleFileChange(s,r)},null,8,["previewUrl","onUpdate:value"]),t("label",{for:i.name,class:"text-sm text-gray-500 text-center"},v(i.name),9,be)])]),e.detailed_info.has_sub_variation==1&&e.detailed_info.sub_variation_name&&o.sub_variations.options.some(s=>s.name!=="")?(n(),l("td",ve,[(n(!0),l(d,null,h(i.sub_variations.options,(s,x)=>(n(),l("div",ye,[s.name?(n(),l("label",{key:0,for:s.name,class:"py-3 text-sm text-gray-500 text-center"},v(s.name),9,xe)):p("",!0)]))),256))])):p("",!0),e.detailed_info.has_sub_variation==1&&e.detailed_info.sub_variation_name&&o.sub_variations.options.some(s=>s.name!=="")?(n(),l(d,{key:1},[t("td",ge,[t("div",we,[(n(!0),l(d,null,h(i.sub_variations.options,(s,x)=>(n(),l(d,null,[s.name?c((n(),l("input",{key:0,type:"number",min:"0",onInput:a[2]||(a[2]=f=>o.numbersOnly(f)),class:"focus:ring-0 border-gray-300 focus:border-gray-400 rounded-md flex-1 block sm:text-sm","onUpdate:modelValue":f=>s.price=f,autocomplete:"off"},null,40,ke)),[[u,s.price]]):p("",!0)],64))),256))])]),t("td",Ve,[t("div",Ee,[(n(!0),l(d,null,h(i.sub_variations.options,(s,x)=>(n(),l(d,null,[s.name?c((n(),l("input",{key:0,type:"number",min:"0",onInput:a[3]||(a[3]=f=>o.numbersOnly(f)),class:"focus:ring-0 border-gray-300 focus:border-gray-400 rounded-md flex-1 block sm:text-sm","onUpdate:modelValue":f=>s.stock=f,autocomplete:"off"},null,40,Ue)),[[u,s.stock]]):p("",!0)],64))),256))])])],64)):(n(),l(d,{key:2},[t("td",Te,[t("div",Ce,[c(t("input",{type:"number",min:"0",onInput:a[4]||(a[4]=s=>o.numbersOnly(s)),class:"focus:ring-0 border-gray-300 focus:border-gray-400 rounded-md flex-1 block sm:text-sm","onUpdate:modelValue":s=>i.price=s,autocomplete:"off"},null,40,Se),[[u,i.price]])])]),t("td",je,[t("div",Ie,[c(t("input",{type:"number",min:"0",onInput:a[5]||(a[5]=s=>o.numbersOnly(s)),class:"focus:ring-0 border-gray-300 focus:border-gray-400 rounded-md flex-1 block sm:text-sm","onUpdate:modelValue":s=>i.stock=s,autocomplete:"off"},null,40,Oe),[[u,i.stock]])])])],64))])):p("",!0)],64))),256))])])])])):p("",!0)]),_(U,{show:o.confirmation_modal.is_open,onClose:a[6]||(a[6]=i=>o.confirmation_modal.is_open=!1),confirmationAlert:o.confirmation_modal.alert,confirmationTitle:o.confirmation_modal.title,confirmationText:o.confirmation_modal.text,confirmationButton:o.confirmation_modal.button,confirmationMethod:o.confirmation_modal.method,confirmationRoute:o.confirmation_modal.route,confirmationData:o.confirmation_modal.data,preserveScroll:o.confirmation_modal.preserveScroll,preserveState:o.confirmation_modal.preserveState},null,8,["show","confirmationAlert","confirmationTitle","confirmationText","confirmationButton","confirmationMethod","confirmationRoute","confirmationData","preserveScroll","preserveState"])],64))}}),Ne=Object.freeze(Object.defineProperty({__proto__:null,default:$e},Symbol.toStringTag,{value:"Module"}));export{B as U,Ne as V,$e as _};
