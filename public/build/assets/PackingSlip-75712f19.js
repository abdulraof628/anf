import{c as a,d as t,t as e,j as n,u as c,F as l,h as d,ah as r,o as i}from"./app-df97e7fb.js";import"./default.css_vue_type_style_index_0_src_true_lang-59f42a6c.js";import{h as _}from"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";const p={class:"overflow-y-auto no-scrollbar modal-main",id:"invoice",ref:"invoice"},m={class:"flex flex-col justify-between divide-y p-8 min-h-screen"},g={class:"flex flex-col flex-grow"},h=r('<div class="flex flex-row justify-between"><div class="flex self-center"><img src="/images/invoice_logo_alt.jpg" class="w-48 h-28 block select-none" alt=""></div><div class="text-right"><span class="mt-4 not-italic text-gray-800 text-md"><span class="font-bold text-lg">ALFA and Friends Sdn Bhd</span><br> 36, Jalan BP 7/8, Bandar Bukit Puchong,<br> 47120 Puchong, Selangor Darul Ehsan,<br> Malaysia<br></span></div></div><div class="flex flex-row justify-between items-start"><h3 class="mt-8 text-md font-semibold text-gray-800">To:</h3></div>',2),x={class:"flex flex-row justify-between items-start space-y-0"},u={class:"not-italic text-gray-700 text-md space-y-2"},f={class:"font-bold"},y=t("br",null,null,-1),b={class:"w-64"},v={class:""},k={class:"space-y-2"},w={class:"grid grid-cols-1 gap-2"},j={key:0,class:"grid grid-cols-5"},B=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Invoice Number:",-1),S={class:"col-span-2 text-gray-500"},D={class:"grid grid-cols-5"},N=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Order Number:",-1),O={class:"col-span-2 text-gray-500"},T={class:"grid grid-cols-5 gap-x-3"},F=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Order Date:",-1),M={class:"col-span-2 text-gray-500"},P={class:"mt-8 grid sm:grid-cols-2 gap-3"},A={class:"text-md font-semibold text-gray-800 underline"},V={class:"mt-6"},C={class:"w-full"},E=t("thead",{class:"bg-gray-800"},[t("tr",null,[t("th",{class:"text-left py-2 px-4 text-xs font-medium text-gray-100 uppercase w-4/6"},"Item"),t("th",{class:"py-2 px-4 text-xs font-medium text-gray-100 uppercase w-1/6"},"Quantity")])],-1),I={class:"border"},J={class:"py-2 px-4"},L={class:"font-semibold text-md text-gray-800 mb-1"},q={class:"text-center align-bottom py-2 px-4"},Q={class:"font-normal text-md text-gray-800"},Y=t("div",{class:"pt-8 space-y-4"},[t("h4",{class:"text-center font-semibold text-gray-800 text-xs"},"1. All of our goods are exempt from being returned after you have purchased the item"),t("h4",{class:"text-center font-semibold text-gray-800 text-xs"},"2. Defective products may only be exchanged within 10 working days of receiving the products"),t("h4",{class:"text-center font-semibold text-gray-800 text-xs"},"3. Order(s) will be received in 10 working days after every transaction is completed")],-1),$={props:{packing_slip_data:Object},updated(){this.scrollToTop()},methods:{scrollToTop(){const s=this.$refs.invoice;s&&(s.scrollTop=0)}}},W=Object.assign($,{__name:"PackingSlip",setup(s){return(z,G)=>(i(),a("div",p,[t("div",m,[t("div",g,[h,t("div",x,[t("span",u,[t("span",f,e(s.packing_slip_data.parent_full_name),1),y,t("div",b,[t("span",v,e(s.packing_slip_data.parent_address),1)])]),t("div",k,[t("div",w,[s.packing_slip_data.invoice_number?(i(),a("dl",j,[B,t("dd",S,e(s.packing_slip_data.invoice_number),1)])):n("",!0),t("dl",D,[N,t("dd",O,e(s.packing_slip_data.order_number),1)]),t("dl",T,[F,t("dd",M,e(c(_)(s.packing_slip_data.created_at).format("DD MMM Y")),1)])])])]),t("div",P,[t("h4",A,"Student: "+e(s.packing_slip_data.student_name),1)]),t("div",V,[t("table",C,[E,t("tbody",null,[(i(!0),a(l,null,d(JSON.parse(s.packing_slip_data.products),o=>(i(),a("tr",I,[t("td",J,[t("p",L,e(o.product.name)+" "+e(o.product_variation.option_name?"- "+o.product_variation.option_name:"")+" "+e(o.product_sub_variation.option_name?"("+o.product_sub_variation.option_name+")":""),1)]),t("td",q,[t("p",Q,e(o.quantity),1)])]))),256))])])])]),Y])],512))}});export{W as default};
