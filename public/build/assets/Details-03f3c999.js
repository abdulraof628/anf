import{B as _}from"./Authenticated-f12ae66a.js";import{B as h}from"./Button-a75e4165.js";import{r as u,a as g,b as x}from"./@heroicons-6bb93f0b.js";import{H as l,L as y}from"./@inertiajs-df65e401.js";import{h as f}from"./moment-a9aaa855.js";import{q as o,x as r,v as n,u as d,P as p,F as m,y as t,z as w,C as v,G as i}from"./@vue-b5d553e1.js";import"./ApplicationLogo-e2b93f7b.js";import"./app-6e1c5045.js";import"./axios-9cbf0d09.js";import"./pusher-js-1c63de54.js";import"./@vueform-f7c8a6df.js";import"./@vuepic-b5e5f2dc.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-28b7d936.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./radix-vue-09f0b006.js";import"./@floating-ui-6a5ebbeb.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-282a3f07.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-62a42a61.js";import"./lodash.isequal-f375c7a4.js";import"./vue-c49564f2.js";import"./lodash.clonedeep-375466af.js";import"./qs-120ae55f.js";import"./side-channel-a42ec8a2.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-f7269186.js";import"./deepmerge-89e33937.js";import"./nprogress-b3880cbb.js";import"./lucide-vue-next-967cc12e.js";const b={class:"py-4 px-4"},k={class:"mx-auto"},B={class:"align-middle inline-block min-w-full"},$={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},D={class:"min-w-full divide-y divide-gray-200"},C=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Level"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Result"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Date Taken"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),L={class:"bg-white divide-y divide-gray-200"},R={key:0},N=t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found! ")],-1),T=[N],V={class:"px-6 py-4 whitespace-nowrap"},Y={class:"text-sm font-medium text-gray-700"},z={class:"px-6 py-4 whitespace-nowrap"},F={class:"text-sm font-medium text-gray-900"},I={class:"px-6 py-4 whitespace-nowrap"},j={class:"text-sm font-medium text-gray-900"},A={class:"px-6 py-4 whitespace-nowrap"},G={class:"text-sm font-medium text-gray-900"},H={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},M={class:"flex justify-center space-x-2"},P={key:0,class:"flex items-center space-x-2"},S=t("svg",{class:"inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",viewBox:"0 0 24 24"},null,-1),q=t("span",null,"Generating...",-1),E=[S,q],O={key:1},J={id:"canvas",ref:"canvas",style:{display:"none"}},K={components:{SearchIcon:u,TrashIcon:g,PencilIcon:x,Head:l,Link:y},data(){return{processing:!1,processing_item:[]}},methods:{viewReport(c){this.$inertia.get(route("diagnostic_test.report",c))}},created(){this.$page.props.answer_record.data.map(()=>{this.processing_item.push({process:!1})})}},Pt=Object.assign(K,{__name:"Details",setup(c){return(e,Q)=>(o(),r(m,null,[n(d(l),{title:"Diagnostic Test"}),n(_,null,{header:p(()=>[]),default:p(()=>[t("div",b,[t("div",k,[t("div",B,[t("div",$,[t("table",D,[C,t("tbody",L,[e.$page.props.answer_record.data.length?w("",!0):(o(),r("tr",R,T)),(o(!0),r(m,null,v(e.$page.props.answer_record.data,(s,a)=>(o(),r("tr",{class:"hover:bg-gray-200",key:s.id},[t("td",V,[t("div",Y,i(a+1),1)]),t("td",z,[t("div",F,i(s.dt_name),1)]),t("td",I,[t("div",j,i(s.total_correct_answers+"/"+s.total_answers),1)]),t("td",A,[t("div",G,i(d(f)(s.created_at).format("DD/MM/YYYY")),1)]),t("td",H,[t("div",M,[n(h,{buttonType:"blue",class:"py-1 px-2",onClick:U=>!e.processing_item[a].process&&!e.processing?e.viewReport(s.dt_details_id):""},{default:p(()=>[e.processing_item[a].process&&e.processing?(o(),r("div",P,E)):(o(),r("span",O,"View Report"))]),_:2},1032,["onClick"])])])]))),128))])])])])])]),t("canvas",J,null,512)]),_:1})],64))}});export{Pt as default};