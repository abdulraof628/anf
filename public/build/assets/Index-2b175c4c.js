import{_ as w}from"./Authenticated-24b72cf5.js";import{r as x,o as r,c as i,b as l,u as m,w as p,F as _,H as f,L as v,ab as k,d as e,h as M,t as c,n as D,k as F}from"./app-b4630a76.js";import{B as u}from"./Button-ecc2bb75.js";import{M as y}from"./Modal-02c5f636.js";import{h as g}from"./moment-fbc5633a.js";import"./XIcon-7db8ae4c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-ff10ed5d.js";import"./use-resolve-button-type-bac8c2cd.js";import"./menu-dcc2a8ef.js";import"./VueFinalModal.esm-ecae28f9.js";/* empty css                                                              */const C={class:"overflow-x-auto no-scrollbar"},z={class:"bg-white shadow rounded-lg border"},H={class:"w-full text-sm text-left text-gray-500"},B=e("thead",{class:"text-gray-700 capitalize bg-gray-200"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," Invoice Number "),e("th",{scope:"col",class:"px-6 py-3"}," Date Issued "),e("th",{scope:"col",class:"px-6 py-3"}," Due Date "),e("th",{scope:"col",class:"px-6 py-3 text-center"}," Amount "),e("th",{scope:"col",class:"px-6 py-3 text-center"}," Status "),e("th",{scope:"col",class:"px-6 py-3 text-center"}," Action ")])],-1),N={key:0,class:"bg-white border-b"},V=e("td",{class:"text-center py-4",colspan:"10"}," No record found. ",-1),I=[V],$={class:"bg-white border-b hover:bg-gray-50"},L={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},S={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},T={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},E={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"},j={class:"px-6 py-4 text-center"},A={class:"px-6 py-4 text-center"},O=["href"],P=["onClick"],U=e("h3",{class:"text-gray-900 text-xl font-semibold"}," Invoice ",-1),J={class:"flex justify-between space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},R=e("svg",{class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},[e("path",{d:"M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"}),e("path",{d:"M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})],-1),Y=e("span",null,"Print",-1),G={components:{Head:f,Link:v,Modal:y},data(){return{open_modal:!1,generating:[],invoice_data:{parent_name:"",parent_address:"No 27, Jalan Kap Empat, 17/17D, Seksyen 17, Shah Alam",invoice_number:"",invoice_items:[],date_issued:"",due_date:"",total_amount:""}}},methods:{viewInvoice(n,t){this.generating[t]||(this.generating[t]=!0,k.get(route("fee.invoices.generate"),{responseType:"blob",params:{invoice_id:n}}).then(a=>{const s=new Blob([a.data],{type:"application/pdf"}),o=URL.createObjectURL(s);window.open(o,"_blank"),this.generating[t]=!1}).catch(a=>{console.error("Error fetching PDF:",a),this.generating[t]=!1}))},totalFee(n){let t=0;const a=JSON.parse(n);for(const s of a){const o=parseFloat(s.programme_fee),d=parseFloat(s.programme_fee_discount),h=parseFloat(s.material_fee),b=parseFloat(s.material_fee_discount);t+=o-d,s.include_material_fee&&(t+=h-b)}return t},pay(n){window.location.href="https://www.billplz-sandbox.com/bills/"+n}},mounted(){this.$page.props.invoices.forEach(n=>{this.generating.push(!1)})}},re=Object.assign(G,{__name:"Index",setup(n){return(t,a)=>{const s=x("MonthlyFee");return r(),i(_,null,[l(m(f),{title:"Invoices"}),l(w,null,{default:p(()=>[e("div",C,[e("div",z,[e("table",H,[B,e("tbody",null,[t.$page.props.invoices.length?(r(!0),i(_,{key:1},M(t.$page.props.invoices,(o,d)=>(r(),i("tr",$,[e("td",L,c(o.invoice_number),1),e("td",S,c(m(g)(o.date_issued).format("DD MMM Y")),1),e("td",T,c(m(g)(o.due_date).format("DD MMM Y")),1),e("td",E,c(o.amount),1),e("td",j,[e("span",{class:D(["text-xs font-medium px-2 py-1 rounded",[o.status_bg_color,o.status_text_color]])},c(o.status),3)]),e("td",A,[o.status_id==1?(r(),i("a",{key:0,href:o.payment_url,class:"cursor-pointer font-medium px-3 py-1 text-indigo-600 hover:bg-indigo-200 hover:rounded whitespace-nowrap"},"Pay Now",8,O)):(r(),i("a",{key:1,class:"cursor-pointer font-medium px-3 py-1 text-blue-600 bg-blue-100 hover:bg-blue-200 rounded whitespace-nowrap",onClick:h=>t.generating[d]?"":t.viewInvoice(o.id,d)},c(t.generating[d]?"Generating...":"View / Download"),9,P))])]))),256)):(r(),i("tr",N,I))])])])]),l(y,{showModal:t.open_modal,modalType:"md",onHideModal:a[1]||(a[1]=o=>t.open_modal=!1)},{header:p(()=>[U]),content:p(()=>[l(s,{invoice_data:t.invoice_data},null,8,["invoice_data"])]),footer:p(()=>[e("div",J,[l(u,{buttonType:"blue",class:"px-4 py-2 space-x-2",onClick:t.print},{default:p(()=>[R,Y]),_:1},8,["onClick"]),l(u,{buttonType:"gray",onClick:a[0]||(a[0]=o=>t.open_modal=!1)},{default:p(()=>[F("Close")]),_:1})])]),_:1},8,["showModal"])]),_:1})],64)}}});export{re as default};
