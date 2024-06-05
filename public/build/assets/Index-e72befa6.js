import{_ as y}from"./Authenticated-6c579d96.js";import{o as n,c,a as d,u as p,w as x,F as _,H as h,L as w,b,d as e,e as v,t as i,n as D,q as m}from"./app-2cb814f6.js";import{h as u}from"./moment-a9aaa855.js";import"./XIcon-d4937228.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-f7e95242.js";import"./keyboard-5b23c67a.js";import"./use-resolve-button-type-20003b5a.js";import"./menu-9ca6990d.js";import"./simplebar.min-27efebb1.js";const k={class:"flex justify-center"},F={class:"flex-1 max-w-4xl overflow-auto"},N={class:"bg-white shadow rounded-lg border"},I={class:"overflow-x-auto"},M={class:"w-full text-sm text-left text-gray-500"},C=e("thead",{class:"text-gray-700 capitalize bg-gray-200"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," Invoice Number "),e("th",{scope:"col",class:"px-6 py-3"}," Date Issued "),e("th",{scope:"col",class:"px-6 py-3"}," Due Date "),e("th",{scope:"col",class:"px-6 py-3 text-center"}," Amount "),e("th",{scope:"col",class:"px-6 py-3 text-center"}," Status "),e("th",{scope:"col",class:"px-6 py-3 text-center"}," Action ")])],-1),L={key:0,class:"bg-white border-b"},S=e("td",{class:"text-center py-4",colspan:"10"}," No record found. ",-1),$=[S],B={class:"bg-white border-b hover:bg-gray-50"},E={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},V={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},j={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},z={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"},A={class:"px-6 py-4 text-center"},O={class:"px-6 py-4 text-center"},U=["href"],H=["onClick"],J={components:{Head:h,Link:w},data(){return{open_modal:!1,generating:[],invoice_data:{parent_name:"",parent_address:"No 27, Jalan Kap Empat, 17/17D, Seksyen 17, Shah Alam",invoice_number:"",invoice_items:[],date_issued:"",due_date:"",total_amount:""}}},methods:{viewInvoice(o,s){this.generating[s]||(this.generating[s]=!0,b.get(route("fee.invoices.generate"),{responseType:"blob",params:{invoice_id:o}}).then(r=>{const t=new Blob([r.data],{type:"application/pdf"}),a=URL.createObjectURL(t);window.open(a,"_blank"),this.generating[s]=!1}).catch(r=>{console.error("Error fetching PDF:",r),this.generating[s]=!1}))},totalFee(o){let s=0;const r=JSON.parse(o);for(const t of r){const a=parseFloat(t.programme_fee),l=parseFloat(t.programme_fee_discount),g=parseFloat(t.material_fee),f=parseFloat(t.material_fee_discount);s+=a-l,t.include_material_fee&&(s+=g-f)}return s},pay(o){window.location.href="https://www.billplz-sandbox.com/bills/"+o}},mounted(){this.$page.props.invoices.forEach(o=>{this.generating.push(!1)})}},Z=Object.assign(J,{__name:"Index",setup(o){return(s,r)=>(n(),c(_,null,[d(p(h),{title:"Fee Invoices"}),d(y,null,{default:x(()=>[e("div",k,[e("div",F,[e("div",N,[e("div",I,[e("table",M,[C,e("tbody",null,[s.$page.props.invoices.length?(n(!0),c(_,{key:1},v(s.$page.props.invoices,(t,a)=>(n(),c("tr",B,[e("td",E,i(t.invoice_number),1),e("td",V,i(p(u)(t.date_issued).format("DD MMM Y")),1),e("td",j,i(p(u)(t.due_date).format("DD MMM Y")),1),e("td",z,i(t.amount),1),e("td",A,[e("span",{class:D(["text-xs font-medium px-2 py-1 rounded",[t.status_bg_color,t.status_text_color]])},i(t.status),3)]),e("td",O,[t.status_id==1?(n(),c("a",{key:0,href:t.payment_url,class:"cursor-pointer font-medium px-3 py-1 text-indigo-600 hover:bg-indigo-200 hover:rounded whitespace-nowrap"},"Pay Now",8,U)):m("",!0),t.status_id==2?(n(),c("a",{key:1,class:"cursor-pointer font-medium px-3 py-1 text-blue-600 bg-blue-100 hover:bg-blue-200 rounded whitespace-nowrap",onClick:l=>s.generating[a]?"":s.viewInvoice(t.id,a)},i(s.generating[a]?"Generating...":"View / Download"),9,H)):m("",!0)])]))),256)):(n(),c("tr",L,$))])])])])])])]),_:1})],64))}});export{Z as default};
