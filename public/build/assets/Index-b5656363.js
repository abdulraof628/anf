import{a as w,c as n,b as d,u as x,w as r,F as f,o,H as v,d as e,f as b,l as k,m as l,k as p,j as c,h as C,t as u}from"./app-abb14225.js";import{B as $}from"./Authenticated-cf6f3e2c.js";import{B as h}from"./Button-8060ba77.js";import{C as _}from"./ConfirmationModal-1504c52c.js";import{P as B}from"./Pagination-072387dc.js";import"./ApplicationLogo-86d866bd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-9a0666f4.js";import"./TimeAgo-fee1d65d.js";import"./moment-fbc5633a.js";import"./transition-a8c9d21d.js";const D={class:"py-4 px-4"},P={class:"overflow-x-auto"},E={class:"mx-auto"},T={class:"align-middle inline-block min-w-full"},A={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},N={class:"flex space-x-2"},L={class:"relative"},M=e("span",{class:"absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"w-4 h-4 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),V={class:"flex"},j={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},S={class:"min-w-full divide-y divide-gray-200"},F=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Name"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Description"),e("th",{class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),z={class:"bg-white divide-y divide-gray-200"},H={key:0},R=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),I=[R],O={class:"px-6 py-4 whitespace-nowrap"},U={class:"text-sm text-gray-700"},Z={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm font-medium text-gray-900"},G={class:"px-6 py-4 whitespace-nowrap"},J={class:"text-sm font-medium text-gray-900"},K={class:"flex px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-2"},Q={components:{ConfirmationModal:_},data(){return{show_filter:!1,show_confirmation:!1,product_id:"",params:{search:this.$page.props.filter.search?this.$page.props.filter.search:""}}},methods:{editProduct(a){this.$inertia.get(this.route("products.edit"),{product_id:a},{replace:!0,preserveState:!0})},deleteProduct(a){this.product_id=a,this.show_confirmation=!0},search(){this.$inertia.get(this.route("products"),this.params,{replace:!0,preserveState:!0})}}},de=Object.assign(Q,{__name:"Index",setup(a){return(t,i)=>{const g=w("debounce");return o(),n(f,null,[d(x(v),{title:"Product"}),d($,null,{header:r(()=>[]),default:r(()=>[e("div",D,[e("div",P,[e("div",E,[e("div",T,[e("div",A,[e("div",N,[e("div",L,[M,b(e("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md",placeholder:"Search","onUpdate:modelValue":i[0]||(i[0]=s=>t.params.search=s)},null,512),[[g,t.search,"800ms"],[k,t.params.search]])])]),e("div",V,[t.$page.props.can.create_products?(o(),l(h,{key:0,route:t.route("products.create")},{default:r(()=>[p("Add New Product")]),_:1},8,["route"])):c("",!0)])]),e("div",j,[e("table",S,[F,e("tbody",z,[t.$page.props.products.data.length?c("",!0):(o(),n("tr",H,I)),(o(!0),n(f,null,C(t.$page.props.products.data,(s,m)=>(o(),n("tr",{class:"hover:bg-gray-200",key:m},[e("td",O,[e("div",U,u(m+1),1)]),e("td",Z,[e("div",q,u(s.name),1)]),e("td",G,[e("div",J,u(s.description),1)]),e("td",K,[t.$page.props.can.edit_products?(o(),l(h,{key:0,onClick:y=>t.editProduct(s.id),buttonType:"warning",title:"Edit Category"},{default:r(()=>[p(" Edit ")]),_:2},1032,["onClick"])):c("",!0),t.$page.props.can.delete_products?(o(),l(h,{key:1,onClick:y=>t.deleteProduct(s.id),buttonType:"danger",title:"Delete Product"},{default:r(()=>[p(" Delete ")]),_:2},1032,["onClick"])):c("",!0)])]))),128))])]),d(B,{page_data:t.$page.props.products},null,8,["page_data"])])])])]),d(_,{show:t.show_confirmation,onClose:i[1]||(i[1]=s=>t.show_confirmation=!1),confirmationAlert:"danger",confirmationTitle:"Delete Product",confirmationText:"Are you sure want to delete this product? All the variations and sub variations will deleted once you click the DELETE button. Are you sure?",confirmationButton:"DELETE",confirmationMethod:"delete",confirmationRoute:"products.destroy",confirmationData:t.product_id},null,8,["show","confirmationData"])])]),_:1})],64)}}});export{de as default};
