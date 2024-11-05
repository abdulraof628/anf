import{_ as y}from"./Authenticated-e243b55d.js";import{H as k}from"./@inertiajs-dde9cc4c.js";import{s as v}from"./simplebar-vue-9ef772f5.js";import{a as h}from"./axios-1779699b.js";import{h as x}from"./moment-a9aaa855.js";import $ from"./Header-71fe0df9.js";import{y as i,x as d,u as c,Q as g,F as _,t as n,W as f,K as l,z as s,q as m,C as p,J as C}from"./@vue-d42dd214.js";import"./@heroicons-e6194902.js";import"./app-f046bc35.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./radix-vue-47014c23.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./clsx-1229b3e0.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./class-variance-authority-52f2569e.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./@headlessui-a01ed24c.js";import"./simplebar-core-3f5973b9.js";import"./lodash-es-9b1d07da.js";const F={class:"max-w-xl mx-auto border shadow bg-white rounded-lg px-4 mt-14"},S={class:"flex justify-evenly sm:justify-center space-x-8 md:space-x-10 pt-3 pb-4 font-medium"},I={class:"max-w-xl mx-auto mt-10"},N={key:0,class:"flex items-center space-y-3"},H={key:1,class:"flex justify-center mx-1 mt-10"},j={key:2,class:"mt-3"},B={class:"bg-white shadow rounded-lg border"},D={class:"divide-y divide-slate-200 dark:divide-zink-500 px-6 py-4"},E={class:"flex items-center gap-3 py-2 first:pt-0 last:pb-0"},V={class:"grow"},z={class:"font-bold text-sm"},A={class:"font-semibold text-blue-700"},M={class:"text-slate-500 text-sm font-medium"},T={class:"text-sm font-medium"},J={class:"shrink-0"},L=["href"],O=["onClick"],P={key:0,class:"flex items-center justify-between pt-5 animate-pulse"},R={components:{simplebar:v},data(){return{open_modal:!1,generating:[],invoice_data:{parent_name:"",parent_address:"No 27, Jalan Kap Empat, 17/17D, Seksyen 17, Shah Alam",invoice_number:"",invoice_items:[],date_issued:"",due_date:"",total_amount:""},loading:{invoices:!1}}},methods:{viewInvoice(o,e){this.generating[e]||(this.generating[e]=!0,h.get(route("fee.invoices.generate"),{responseType:"blob",params:{invoice_id:o}}).then(t=>{const r=new Blob([t.data],{type:"application/pdf"}),a=URL.createObjectURL(r);window.open(a,"_blank"),this.generating[e]=!1}).catch(t=>{console.error("Error fetching PDF:",t),this.generating[e]=!1}))},totalFee(o){let e=0;const t=JSON.parse(o);for(const r of t){const a=parseFloat(r.programme_fee),u=parseFloat(r.programme_fee_discount),b=parseFloat(r.material_fee),w=parseFloat(r.material_fee_discount);e+=a-u,r.include_material_fee&&(e+=b-w)}return e},pay(o){window.location.href="https://www.billplz-sandbox.com/bills/"+o},handleInvoiceScroll(){const o=this.$refs.invoice_container.$el.querySelector(".simplebar-content-wrapper"),e=o.scrollTop,t=o.scrollHeight,r=o.clientHeight;e+r>=t-100&&this.$page.props.invoices.next_page_url&&(this.loading.invoices||(this.loading.invoices=!0,h.get(route("parent.student_invoices"),{params:{page:this.$page.props.invoices.current_page+1}}).then(a=>{a.data.data.forEach(u=>{this.$page.props.invoices.data.push(u)}),this.$page.props.invoices.current_page=a.data.current_page,this.$page.props.invoices.next_page_url=a.data.next_page_url,this.loading.invoices=!1})))}},mounted(){this.$page.props.invoices.data.forEach(o=>{this.generating.push(!1)})}},Te=Object.assign(R,{__name:"Invoices",setup(o){return(e,t)=>(n(),i(_,null,[d(c(k),{title:"Invoices"}),d($,null,{default:g(()=>[f(l(e.$page.props.session_data.current_active_programme.name),1)]),_:1}),d(y,null,{default:g(()=>[s("div",F,[d(c(v),{"data-simplebar-auto-hide":"true"},{default:g(()=>[s("div",S,[s("div",{class:m(["flex flex-col items-center cursor-pointer hover:scale-105 duration-150 whitespace-nowrap",e.route().current("parent.stories")?"font-extrabold":""]),onClick:t[0]||(t[0]=r=>e.$inertia.get(e.route("parent.stories",e.$page.props.session_data.current_active_programme.encrypted_id)))},t[5]||(t[5]=[s("img",{src:"/images/parents/stories.png",class:"w-10 h-10",alt:""},null,-1),s("span",{class:"text-sm"},"Stories",-1)]),2),s("div",{class:m(["flex flex-col items-center cursor-pointer hover:scale-105 duration-150 whitespace-nowrap",e.route().current("parent.progress_reports")?"font-extrabold":""]),onClick:t[1]||(t[1]=r=>e.$inertia.get(e.route("parent.progress_reports")))},t[6]||(t[6]=[s("img",{src:"/images/parents/progress_report.png",class:"w-10 h-10",alt:""},null,-1),s("span",{class:"text-sm"},"Progress Reports",-1)]),2),s("div",{class:m(["flex flex-col items-center cursor-pointer hover:scale-105 duration-150 whitespace-nowrap",e.route().current("parent.invoices")?"font-extrabold":""]),onClick:t[2]||(t[2]=r=>e.$inertia.get(e.route("parent.invoices")))},t[7]||(t[7]=[s("img",{src:"/images/parents/fee_invoice.png",class:"w-10 h-10",alt:""},null,-1),s("span",{class:"text-sm"},"Invoices",-1)]),2),e.$page.props.session_data.current_active_programme.id==3||e.$page.props.session_data.current_active_programme.id==5?(n(),i("div",{key:0,class:m(["flex flex-col items-center cursor-pointer hover:scale-105 duration-150 whitespace-nowrap",e.route().current("parent.art_gallery")?"font-extrabold":""]),onClick:t[3]||(t[3]=r=>e.$inertia.get(e.route("parent.art_gallery")))},t[8]||(t[8]=[s("img",{src:"/images/parents/art_gallery.png",class:"w-10 h-10",alt:""},null,-1),s("span",{class:"text-sm"},"Art Gallery",-1)]),2)):p("",!0),e.$page.props.session_data.current_active_programme.id==3||e.$page.props.session_data.current_active_programme.id==5?(n(),i("div",{key:1,class:m(["flex flex-col items-center cursor-pointer hover:scale-105 duration-150 whitespace-nowrap",e.route().current("parent.art_book")?"font-extrabold":""]),onClick:t[4]||(t[4]=r=>e.$inertia.get(e.route("parent.art_book")))},t[9]||(t[9]=[s("img",{src:"/images/parents/art_book.png",class:"w-10 h-10",alt:""},null,-1),s("span",{class:"text-sm"},"Art Book",-1)]),2)):p("",!0)])]),_:1})]),s("div",I,[e.$page.props.invoices.data.length?(n(),i("div",N,t[10]||(t[10]=[s("h2",{class:"text-lg md:text-xl mx-1 font-extrabold"},"Invoices",-1)]))):p("",!0),e.$page.props.invoices.data.length?p("",!0):(n(),i("div",H,t[11]||(t[11]=[s("span",{class:"text-slate-500"},"No Invoices Found",-1)]))),e.$page.props.invoices.data.length?(n(),i("div",j,[s("div",B,[d(c(v),{"data-simplebar-auto-hide":"true",class:"max-h-96",onScroll:e.handleInvoiceScroll,ref:"invoice_container"},{default:g(()=>[s("ul",D,[(n(!0),i(_,null,C(e.$page.props.invoices.data,(r,a)=>(n(),i("li",E,[s("div",V,[s("h6",z,[f(l(c(x)(r.date_issued).format("MMMM Y"))+" (",1),s("span",A,l(r.invoice_number),1),t[12]||(t[12]=f(")"))]),s("p",M,"Amount: "+l(r.amount),1),s("p",T,[t[13]||(t[13]=f("Status: ")),s("span",{class:m([r.status_text_color])},l(r.status),3)])]),s("div",J,[r.status_id==1?(n(),i("a",{key:0,href:r.payment_url,class:"text-sm cursor-pointer font-medium px-3 py-1 text-indigo-600 rounded bg-indigo-100 hover:bg-indigo-200 hover:rounded whitespace-nowrap"},"Pay Now",8,L)):p("",!0),r.status_id==2?(n(),i("a",{key:1,class:"text-sm cursor-pointer font-medium px-3 py-1 text-blue-600 bg-blue-100 hover:bg-blue-200 rounded whitespace-nowrap",onClick:u=>e.generating[a]?"":e.viewInvoice(r.id,a)},l(e.generating[a]?"Generating...":"View"),9,O)):p("",!0)])]))),256)),e.loading.invoices?(n(),i("div",P,t[14]||(t[14]=[s("div",null,[s("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-52 mb-2.5"}),s("div",{class:"w-28 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}),s("div",{class:"w-20 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})],-1),s("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-14"},null,-1)]))):p("",!0)])]),_:1},8,["onScroll"])])])):p("",!0)])]),_:1})],64))}});export{Te as default};
