import{q as j,s as N,c as r,d as o,F as d,h as u,j as x,t as v,o as l,k as y,f as h,l as _,b as g,w as A,e as D}from"./app-5b70941e.js";import{B as F}from"./Button-7003fb3f.js";import I from"./VariationOption-5691647c.js";import{U as M}from"./UploadPreview-a4846690.js";/* empty css            */import"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                                      */const P={class:"w-full"},R={class:"flex"},S={class:"w-full bg-white shadow-md rounded-md overflow-hidden"},T={class:"mb-4"},$=["for"],L=o("span",{class:"text-red-500"},"*",-1),q={class:"mt-1 flex rounded-md shadow-sm"},z=["name","id","onUpdate:modelValue"],K={class:"mb-4"},G=o("hr",{class:"bg-gray-500 mx-auto my-4"},null,-1),H={class:"flex items-center justify-end py-2"},J={class:"flex items-center justify-center my-10"},Q=o("span",{class:"text-center"},"Add variation",-1),W=[Q],X={class:"min-w-full divide-y divide-gray-200"},Y={class:"bg-gray-300"},Z={scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-3/12"},ee={key:0,scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-3/12"},te=o("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Price",-1),oe=o("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Stock",-1),ae=o("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"SKU",-1),se={class:"bg-white divide-y divide-gray-200"},ne={class:"px-6 py-4 whitespace-nowrap"},ie={class:"flex flex-col items-center p-2 m-2"},re=["for"],le={key:0,class:"px-6 py-4 whitespace-nowrap"},ce=["for"],pe={class:"px-6 py-4 whitespace-nowrap"},de=["name","id","onUpdate:modelValue"],ue={class:"px-6 py-4 whitespace-nowrap"},me=["name","id","onUpdate:modelValue"],ve={class:"px-6 py-4 whitespace-nowrap"},he=["name","id","onUpdate:modelValue"],be={__name:"VariationOld",props:{productVariations:{type:Object}},emits:["update:variation","delete:variation"],setup(w,{emit:p}){const f=w,t=j([{name:"variation 1",options:[{name:"",image:"",url:"",row:[{name:"",price:"",stock:"",sku:""}]}]}]),b=()=>{t.value.push({name:"variation 2",options:[{name:""}]}),p("update:variation",t.value)},V=n=>{t.value.splice(n,1),p("update:variation",t.value),t.value.length==0&&p("delete:variation")},U=n=>{t.value.length==1?t.value[0].options.push({name:"",image:"",url:"",row:[{name:"",price:"",stock:"",sku:""}]}):(t.value[0].options.forEach(e=>{e.row.push({name:"",price:"",stock:"",sku:""})}),t.value[n].options.push({name:""})),p("update:variation",t.value)},O=n=>{t.value.length!=1&&t.value[0].options.forEach(e=>{e.row[n.index].name=n.variationOptions[n.index].name}),p("update:variation",t.value)},B=(n,e)=>{t.value[n].options.splice(e,1),p("update:variation",t.value)},C=(n,e)=>{t.value[n].options.splice(e,1,{name:"",options:[{name:"",price:"",stock:"",sku:""}]}),p("update:variation",t.value)},E=(n,e,a)=>{if(n){const i=new FileReader;i.onload=()=>{k(e,i.result,a,n)},i.readAsDataURL(n)}else k(e,null,a,"")},k=(n,e,a,i)=>{t.value[a].options.forEach(s=>{s.name===n&&(s.url=e,s.image=i)})};return N(()=>{if(f.productVariations){t.value=[];let n=0;Object(f.productVariations).forEach((e,a)=>{t.value.length==0&&a==0?(t.value.push({name:e.variation1,options:[{name:e.option1,image:"",url:"/storage/"+e.image,row:[{name:e.option2,price:e.price,stock:e.stock,sku:e.sku}]}]}),t.value.push({name:e.variation2,options:[{name:e.option2}]})):t.value[0].options[a-1]&&f.productVariations[a-1].option1==e.option1&&t.value[0].options[a-1].name==e.option1?t.value[0].options.forEach(i=>{i.row.push({name:e.option2,price:e.price,stock:e.stock,sku:e.sku})}):(n++,t.value[0].options[a-n]?(t.value[0].options[a-n].row.push({name:e.option2,price:e.price,stock:e.stock,sku:e.sku}),t.value[1].options.push({name:e.option2})):t.value[0].options.push({name:e.option1,image:"",url:e.image?"/storage/"+e.image:"",row:[{name:e.option2,price:e.price,stock:e.stock,sku:e.sku}]}))})}p("update:variation",t.value),console.log(t.value)}),(n,e)=>(l(),r("div",P,[o("div",R,[o("div",S,[(l(!0),r(d,null,u(t.value,(a,i)=>(l(),r("div",{key:i,class:"border-b border-gray-200 px-4 py-6"},[o("div",T,[o("label",{for:"variation_"+i,class:"block text-sm text-gray-700 font-bold"},[y(" Name "),L],8,$),o("div",q,[h(o("input",{onInput:e[0]||(e[0]=s=>p("update:variation",t.value)),type:"text",name:"variation_"+i,id:"variation_"+i,class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm","onUpdate:modelValue":s=>a.name=s,autocomplete:"off"},null,40,z),[[_,a.name]])])]),o("div",K,[g(I,{options:a.options,variationIndex:i,"onAdd:option":U,"onRemove:option":B,"onAdd:variation":C,"onUpdate:variation":e[1]||(e[1]=s=>O(s))},null,8,["options","variationIndex"])]),G,o("div",H,[g(F,{onClick:D(s=>V(i),["stop"]),buttonType:"danger"},{default:A(()=>[y("Delete")]),_:2},1032,["onClick"])])]))),128))])]),o("div",J,[t.value.length<2?(l(),r("div",{key:0,onClick:b,class:"w-full text-center border border-solid border-black hover:bg-gray-100 cursor-pointer px-6 py-4"},W)):x("",!0)]),o("table",X,[o("thead",Y,[o("tr",null,[o("th",Z,v(t.value[0].name),1),t.value[1]?(l(),r("th",ee,v(t.value[1].name),1)):x("",!0),te,oe,ae])]),o("tbody",se,[(l(!0),r(d,null,u(t.value[0].options,(a,i)=>(l(),r("tr",{class:"hover:bg-gray-200",key:i},[o("td",ne,[o("div",ie,[g(M,{previewUrl:a.url,"onUpdate:value":s=>E(s,a.name,i)},null,8,["previewUrl","onUpdate:value"]),o("label",{for:a.name,class:"text-sm text-gray-500 text-center"},v(a.name),9,re)])]),t.value[1]?(l(),r("td",le,[(l(!0),r(d,null,u(t.value[1].options,(s,c)=>(l(),r("div",{class:"flex flex-col items-center p-2 m-2",key:c},[o("label",{for:s.name,class:"text-sm text-gray-500 text-center"},v(s.name),9,ce)]))),128))])):x("",!0),o("td",pe,[(l(!0),r(d,null,u(a.row,(s,c)=>(l(),r("div",{key:c,class:"text-sm font-medium text-gray-900 mb-2"},[h(o("input",{type:"text",placeholder:"input",name:"variation_option_price"+c,id:"variation_option_price"+c,class:"focus:ring-0 focus:border-indigo-300 flex-1 block sm:text-sm","onUpdate:modelValue":m=>s.price=m,autocomplete:"off"},null,8,de),[[_,s.price]])]))),128))]),o("td",ue,[(l(!0),r(d,null,u(a.row,(s,c)=>(l(),r("div",{key:c,class:"text-sm font-medium text-gray-900 mb-2"},[h(o("input",{type:"text",placeholder:"0",name:"variation_option_stock"+c,id:"variation_option_stock"+c,class:"focus:ring-0 focus:border-indigo-300 flex-1 block sm:text-sm","onUpdate:modelValue":m=>s.stock=m,autocomplete:"off"},null,8,me),[[_,s.stock]])]))),128))]),o("td",ve,[(l(!0),r(d,null,u(a.row,(s,c)=>(l(),r("div",{key:c,class:"text-sm font-medium text-gray-900 mb-2"},[h(o("input",{type:"text",placeholder:"input",name:"variation_option_sku"+c,id:"variation_option_sku"+c,class:"focus:ring-0 focus:border-indigo-300 flex-1 block sm:text-sm","onUpdate:modelValue":m=>s.sku=m,autocomplete:"off"},null,8,he),[[_,s.sku]])]))),128))])]))),128))])])]))}};export{be as default};
