import{B as h}from"./Authenticated-bbe12484.js";import"./moment-a9aaa855.js";import{H as k,L as A}from"./@inertiajs-7f289881.js";import{P as y}from"./Pagination-1244741a.js";import{_ as C,d as w,e as l,c as d,a as P,b as c}from"./TableRow-0b515674.js";import{_ as H}from"./TableCaption-7c420fef.js";import{_ as L}from"./Card-20f395ce.js";import{_ as B}from"./DeleteConfirmation-fed87211.js";import{a as S}from"./@radix-icons-4975f794.js";import{C as j}from"./lucide-vue-next-53796c49.js";import{y as $,x as r,u as a,Q as e,F as v,be as b,bf as F,t as n,z as p,A as I,v as m,C as f,W as i,J as z,K as g}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-c5b8b27a.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-4a86e6ba.js";import"./DialogDescription-be595773.js";const E={class:"flex items-center justify-between"},R={class:"flex space-x-2"},J={class:"relative"},K={class:"flex items center justify-center space-x-2"},O={components:{Pagination:y,DeleteConfirmation:B,Head:k,Link:A,Table:C,TableBody:w,TableCaption:H,TableCell:l,TableHead:d,TableHeader:P,TableRow:c},data(){return{confirmation:{is_open:!1,route_name:"",id:""},params:{search:this.$page.props.filter.search?this.$page.props.filter.search:""}}},methods:{editProduct(u){this.$inertia.get(this.route("products.edit"),{product_id:u},{replace:!0,preserveState:!0})},deleteProduct(u){this.confirmation.route_name="products.destroy",this.confirmation.id=u,this.confirmation.is_open=!0},search(){this.$inertia.get(this.route("products"),this.params,{replace:!0,preserveState:!0})}}},Kt=Object.assign(O,{__name:"Index",setup(u){return(o,t)=>{const N=b("Input"),_=b("Button"),T=F("debounce");return n(),$(v,null,[r(a(k),{title:"Products"}),r(h,null,{header:e(()=>t[4]||(t[4]=[])),default:e(()=>[p("div",E,[p("div",R,[p("div",J,[r(a(S),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),I(r(N,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:o.params.search,"onUpdate:modelValue":t[0]||(t[0]=s=>o.params.search=s)},null,8,["modelValue"]),[[T,o.search,"800ms"]])])]),o.$page.props.can.create_products?(n(),m(_,{key:0,onClick:t[1]||(t[1]=s=>o.$inertia.get(o.route("products.create")))},{default:e(()=>[r(a(j),{class:"h-4 w-4"}),t[5]||(t[5]=p("span",{class:"ml-1 hidden sm:block"},"New Product",-1))]),_:1})):f("",!0)]),r(L,null,{content:e(()=>[r(a(C),null,{default:e(()=>[r(a(P),{class:"bg-gray-100"},{default:e(()=>[r(a(c),null,{default:e(()=>[r(a(d),null,{default:e(()=>t[6]||(t[6]=[i("#")])),_:1}),r(a(d),null,{default:e(()=>t[7]||(t[7]=[i("Name")])),_:1}),r(a(d),null,{default:e(()=>t[8]||(t[8]=[i("Description")])),_:1}),r(a(d),{class:"text-center"},{default:e(()=>t[9]||(t[9]=[i("Action")])),_:1})]),_:1})]),_:1}),r(a(w),null,{default:e(()=>[o.$page.props.products.data.length?f("",!0):(n(),m(a(c),{key:0},{default:e(()=>[r(a(l),{class:"text-center",colspan:"10"},{default:e(()=>t[10]||(t[10]=[p("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(n(!0),$(v,null,z(o.$page.props.products.data,(s,D)=>(n(),m(a(c),null,{default:e(()=>[r(a(l),null,{default:e(()=>[i(g(o.$page.props.products.from+D),1)]),_:2},1024),r(a(l),null,{default:e(()=>[i(g(s.name),1)]),_:2},1024),r(a(l),null,{default:e(()=>[i(g(s.description),1)]),_:2},1024),r(a(l),{class:"text-center"},{default:e(()=>[p("div",K,[o.$page.props.can.edit_products?(n(),m(_,{key:0,variant:"outline",onClick:V=>o.editProduct(s.id)},{default:e(()=>t[11]||(t[11]=[i("Edit")])),_:2},1032,["onClick"])):f("",!0),o.$page.props.can.delete_products?(n(),m(_,{key:1,variant:"destructive",onClick:t[2]||(t[2]=V=>o.deleteProduct(o.orproductder.id))},{default:e(()=>t[12]||(t[12]=[i("Delete")])),_:1})):f("",!0)])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),r(y,{page_data:o.$page.props.products,params:o.params},null,8,["page_data","params"]),r(B,{open:o.confirmation.is_open,onClose:t[3]||(t[3]=s=>o.confirmation.is_open=!1),routeName:o.confirmation.route_name,id:o.confirmation.id},{title:e(()=>t[13]||(t[13]=[i("Delete Product")])),description:e(()=>t[14]||(t[14]=[i("Are you sure want to delete this product?")])),_:1},8,["open","routeName","id"])]),_:1})],64)}}});export{Kt as default};
