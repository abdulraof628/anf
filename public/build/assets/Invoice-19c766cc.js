import{o as a,c,d as t,t as s,p as i,u as n,F as l,e as r,ai as _}from"./app-1e0c6682.js";import"./vue3-perfect-scrollbar-40f5923a.js";import{h as d}from"./moment-a9aaa855.js";import"./_plugin-vue_export-helper-c27b6911.js";const x={class:"overflow-y-auto no-scrollbar modal-main",id:"invoice",ref:"invoice"},m={class:"flex flex-col justify-between divide-y p-8 min-h-screen"},p={class:"flex flex-col flex-grow"},g=_('<div class="flex flex-row justify-between"><div class="flex self-center"><img src="/images/invoice_logo_alt.jpg" class="w-48 h-28 block select-none" alt=""></div><div class="text-right"><span class="mt-4 not-italic text-gray-800 text-md"><span class="font-bold text-lg">ALFA and Friends Sdn Bhd</span><br> 36, Jalan BP 7/8, Bandar Bukit Puchong,<br> 47120 Puchong, Selangor Darul Ehsan,<br> Malaysia<br></span></div></div><div class="flex flex-row justify-between items-start"><h3 class="mt-8 text-md font-semibold text-gray-800">To:</h3></div>',2),h={class:"flex flex-row justify-between items-start space-y-0"},u={class:"not-italic text-gray-700 text-md space-y-2"},f={class:"font-bold"},y=t("br",null,null,-1),v={class:"w-64"},b={class:""},w={class:"space-y-2"},j={class:"grid grid-cols-1 gap-2"},k={key:0,class:"grid grid-cols-5"},D=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Invoice Number:",-1),B={class:"col-span-2 text-gray-500"},M={key:1,class:"grid grid-cols-5 gap-x-3"},S=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Invoice Date:",-1),T={class:"col-span-2 text-gray-500"},N={class:"grid grid-cols-5"},O=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Order Number:",-1),F={class:"col-span-2 text-gray-500"},I={class:"grid grid-cols-5 gap-x-3"},P=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Order Date:",-1),A={class:"col-span-2 text-gray-500"},V={class:"mt-8 grid sm:grid-cols-2 gap-3"},C={class:"text-md font-semibold text-gray-800 underline"},E={class:"mt-6"},J={class:"w-full"},L=t("thead",{class:"bg-gray-800"},[t("tr",null,[t("th",{class:"text-left py-2 px-4 text-xs font-medium text-gray-100 uppercase w-4/6"},"Item"),t("th",{class:"py-2 px-4 text-xs font-medium text-gray-100 uppercase w-1/6"},"Quantity"),t("th",{class:"py-2 px-4 text-xs font-medium text-gray-100 uppercase w-1/6"},"Price")])],-1),Y={class:"border"},q={class:"py-2 px-4"},Q={class:"font-semibold text-md text-gray-800 mb-1"},$={class:"text-center align-bottom py-2 px-4"},z={class:"font-normal text-md text-gray-800"},G=t("td",{class:"text-center align-bottom py-2 px-4"},[t("p",{class:"font-normal text-md text-gray-800"},"0.00")],-1),H=t("tfoot",null,[t("tr",null,[t("td",{class:"pt-5 px-4"}),t("td",{class:"pt-5 px-4 text-right",colspan:"2"},[t("div",{class:"flex space-x-8 items-center justify-end pr-9"},[t("p",{class:"font-bold text-md text-gray-800"},"Subtotal"),t("p",{class:"font-semibold text-md text-gray-800"},"0.00")]),t("div",{class:"mt-3 border border-gray-700"})])]),t("tr",null,[t("td",{class:"py-2 px-4"}),t("td",{class:"py-2 px-4 text-right",colspan:"2"},[t("div",{class:"flex space-x-8 items-center justify-end pr-9"},[t("p",{class:"font-bold text-lg text-gray-800"},"Total"),t("p",{class:"font-bold text-md text-gray-800"},"0.00")])])])],-1),K=t("div",{class:"pt-8 space-y-4"},[t("h4",{class:"text-xs text-center font-semibold text-gray-800"},"1. All of our goods are exempt from being returned after you have purchased the item"),t("h4",{class:"text-xs text-center font-semibold text-gray-800"},"2. Defective products may only be exchanged within 10 working days of receiving the products"),t("h4",{class:"text-xs text-center font-semibold text-gray-800"},"3. Order(s) will be received in 10 working days after every transaction is completed")],-1),R={props:{invoice_data:Object},created(){this.scrollToTop()},methods:{scrollToTop(){const e=this.$refs.invoice;e&&(e.scrollTop=0)}}},st=Object.assign(R,{__name:"Invoice",setup(e){return(U,W)=>(a(),c("div",x,[t("div",m,[t("div",p,[g,t("div",h,[t("span",u,[t("span",f,s(e.invoice_data.parent_full_name),1),y,t("div",v,[t("span",b,s(e.invoice_data.parent_address),1)])]),t("div",w,[t("div",j,[e.invoice_data.invoice_number?(a(),c("dl",k,[D,t("dd",B,s(e.invoice_data.invoice_number),1)])):i("",!0),e.invoice_data.invoice_number?(a(),c("dl",M,[S,t("dd",T,s(n(d)(e.invoice_data.date_issued).format("DD MMM Y")),1)])):i("",!0),t("dl",N,[O,t("dd",F,s(e.invoice_data.order_number),1)]),t("dl",I,[P,t("dd",A,s(n(d)(e.invoice_data.created_at).format("DD MMM Y")),1)])])])]),t("div",V,[t("h4",C,"Student: "+s(e.invoice_data.student_name),1)]),t("div",E,[t("table",J,[L,t("tbody",null,[(a(!0),c(l,null,r(JSON.parse(e.invoice_data.products),o=>(a(),c("tr",Y,[t("td",q,[t("p",Q,s(o.product.name)+" "+s(o.product_variation.option_name?"- "+o.product_variation.option_name:"")+" "+s(o.product_sub_variation.option_name?"("+o.product_sub_variation.option_name+")":""),1)]),t("td",$,[t("p",z,s(o.quantity),1)]),G]))),256))]),H])])]),K])],512))}});export{st as default};
