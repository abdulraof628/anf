import"./Authenticated-83e8e551.js";import"./@inertiajs-41d03628.js";import{h as r}from"./moment-3968d9f3.js";import{x as i,y as t,G as s,z as c,u as n,F as d,C as l,ax as m,q as a}from"./@vue-64c42e7d.js";import"./ApplicationLogo-64527dd0.js";import"./radix-vue-efedc4b4.js";import"./@floating-ui-7a9770d8.js";import"./class-variance-authority-f96983da.js";import"./app-a861bda2.js";import"./axios-9cbf0d09.js";import"./pusher-js-2bcba7e2.js";import"./@vueform-ba82ac10.js";import"./@vuepic-339c593a.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-2c7c67ce.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1cb1b359.js";import"./@popperjs-f3391c26.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-deae3e94.js";import"./@radix-icons-03b844c4.js";import"./moment-timezone-65f24d9a.js";import"./lodash.isequal-60a7aae7.js";import"./vue-68dd36d7.js";import"./lodash.clonedeep-8b83a099.js";import"./qs-589f641c.js";import"./side-channel-1ba8a7fc.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-a3a9a537.js";import"./deepmerge-89e33937.js";import"./nprogress-34a09d83.js";import"./lucide-vue-next-dd1f77f0.js";const p={class:"overflow-y-auto scrollbar modal-main",id:"invoice",ref:"invoice"},_={class:"flex flex-col justify-between divide-y p-8 min-h-screen"},x={class:"flex flex-col flex-grow"},g=m('<div class="flex flex-row justify-between"><div class="flex self-center"><img src="/images/invoice_logo_alt.jpg" class="w-48 h-28 block select-none" alt=""></div><div class="text-right"><span class="mt-4 not-italic text-gray-800 text-md"><span class="font-bold text-lg">ALFA and Friends Sdn Bhd</span><br> 36, Jalan BP 7/8, Bandar Bukit Puchong,<br> 47120 Puchong, Selangor Darul Ehsan,<br> Malaysia<br></span></div></div><div class="flex flex-row justify-between items-start"><h3 class="mt-8 text-md font-semibold text-gray-800">To:</h3></div>',2),h={class:"flex flex-row justify-between items-start space-y-0"},u={class:"not-italic text-gray-700 text-md space-y-2"},f={class:"font-bold"},y=t("br",null,null,-1),v={class:"w-64"},b={class:""},w={class:"space-y-2"},j={class:"grid grid-cols-1 gap-2"},k={key:0,class:"grid grid-cols-5"},D=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Invoice Number:",-1),B={class:"col-span-2 text-gray-500"},M={key:1,class:"grid grid-cols-5 gap-x-3"},S=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Invoice Date:",-1),T={class:"col-span-2 text-gray-500"},N={class:"grid grid-cols-5"},O=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Order Number:",-1),F={class:"col-span-2 text-gray-500"},I={class:"grid grid-cols-5 gap-x-3"},P=t("dt",{class:"col-span-3 font-semibold text-gray-800"},"Order Date:",-1),A={class:"col-span-2 text-gray-500"},C={class:"mt-8 grid sm:grid-cols-2 gap-3"},V={class:"text-md font-semibold text-gray-800 underline"},q={class:"mt-6"},E={class:"w-full"},J=t("thead",{class:"bg-gray-800"},[t("tr",null,[t("th",{class:"text-left py-2 px-4 text-xs font-medium text-gray-100 uppercase w-4/6"},"Item"),t("th",{class:"py-2 px-4 text-xs font-medium text-gray-100 uppercase w-1/6"},"Quantity"),t("th",{class:"py-2 px-4 text-xs font-medium text-gray-100 uppercase w-1/6"},"Price")])],-1),L={class:"border"},Y={class:"py-2 px-4"},z={class:"font-semibold text-md text-gray-800 mb-1"},G={class:"text-center align-bottom py-2 px-4"},Q={class:"font-normal text-md text-gray-800"},$=t("td",{class:"text-center align-bottom py-2 px-4"},[t("p",{class:"font-normal text-md text-gray-800"},"0.00")],-1),H=t("tfoot",null,[t("tr",null,[t("td",{class:"pt-5 px-4"}),t("td",{class:"pt-5 px-4 text-right",colspan:"2"},[t("div",{class:"flex space-x-8 items-center justify-end pr-9"},[t("p",{class:"font-bold text-md text-gray-800"},"Subtotal"),t("p",{class:"font-semibold text-md text-gray-800"},"0.00")]),t("div",{class:"mt-3 border border-gray-700"})])]),t("tr",null,[t("td",{class:"py-2 px-4"}),t("td",{class:"py-2 px-4 text-right",colspan:"2"},[t("div",{class:"flex space-x-8 items-center justify-end pr-9"},[t("p",{class:"font-bold text-lg text-gray-800"},"Total"),t("p",{class:"font-bold text-md text-gray-800"},"0.00")])])])],-1),K=t("div",{class:"pt-8 space-y-4"},[t("h4",{class:"text-xs text-center font-semibold text-gray-800"},"1. All of our goods are exempt from being returned after you have purchased the item"),t("h4",{class:"text-xs text-center font-semibold text-gray-800"},"2. Defective products may only be exchanged within 10 working days of receiving the products"),t("h4",{class:"text-xs text-center font-semibold text-gray-800"},"3. Order(s) will be received in 10 working days after every transaction is completed")],-1),R={props:{invoice_data:Object},created(){this.scrollToTop()},methods:{scrollToTop(){const e=this.$refs.invoice;e&&(e.scrollTop=0)}}},Gt=Object.assign(R,{__name:"Invoice",setup(e){return(U,W)=>(a(),i("div",p,[t("div",_,[t("div",x,[g,t("div",h,[t("span",u,[t("span",f,s(e.invoice_data.parent_full_name),1),y,t("div",v,[t("span",b,s(e.invoice_data.parent_address),1)])]),t("div",w,[t("div",j,[e.invoice_data.invoice_number?(a(),i("dl",k,[D,t("dd",B,s(e.invoice_data.invoice_number),1)])):c("",!0),e.invoice_data.invoice_number?(a(),i("dl",M,[S,t("dd",T,s(n(r)(e.invoice_data.date_issued).format("DD MMM Y")),1)])):c("",!0),t("dl",N,[O,t("dd",F,s(e.invoice_data.order_number),1)]),t("dl",I,[P,t("dd",A,s(n(r)(e.invoice_data.created_at).format("DD MMM Y")),1)])])])]),t("div",C,[t("h4",V,"Student: "+s(e.invoice_data.student_name),1)]),t("div",q,[t("table",E,[J,t("tbody",null,[(a(!0),i(d,null,l(JSON.parse(e.invoice_data.products),o=>(a(),i("tr",L,[t("td",Y,[t("p",z,s(o.product.name)+" "+s(o.product_variation.option_name?"- "+o.product_variation.option_name:"")+" "+s(o.product_sub_variation.option_name?"("+o.product_sub_variation.option_name+")":""),1)]),t("td",G,[t("p",Q,s(o.quantity),1)]),$]))),256))]),H])])]),K])],512))}});export{Gt as default};
