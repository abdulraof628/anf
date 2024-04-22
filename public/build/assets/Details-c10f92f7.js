import{B as m}from"./Authenticated-4c85926c.js";import{B as h}from"./Button-b3e73baf.js";import{r as u}from"./PencilIcon-fdca7c88.js";import{r as g}from"./SearchIcon-468465ae.js";import{r as x}from"./TrashIcon-02e51929.js";import{o,c as a,a as n,u as p,w as c,F as l,H as _,L as f,d as e,p as y,e as w,t as r}from"./app-462a769a.js";import{h as v}from"./moment-a9aaa855.js";import"./ApplicationLogo-4b85744d.js";import"./XIcon-23a15b91.js";import"./vue3-perfect-scrollbar-d7092836.js";import"./_plugin-vue_export-helper-c27b6911.js";const k={class:"py-4 px-4"},b={class:"mx-auto"},B={class:"align-middle inline-block min-w-full"},$={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},D={class:"min-w-full divide-y divide-gray-200"},L=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Level"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Result"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Date Taken"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),R={class:"bg-white divide-y divide-gray-200"},C={key:0},N=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),T=[N],V={class:"px-6 py-4 whitespace-nowrap"},Y={class:"text-sm font-medium text-gray-700"},F={class:"px-6 py-4 whitespace-nowrap"},I={class:"text-sm font-medium text-gray-900"},j={class:"px-6 py-4 whitespace-nowrap"},z={class:"text-sm font-medium text-gray-900"},A={class:"px-6 py-4 whitespace-nowrap"},H={class:"text-sm font-medium text-gray-900"},M={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},S={class:"flex justify-center space-x-2"},E={key:0,class:"flex items-center space-x-2"},G=e("svg",{class:"inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",viewBox:"0 0 24 24"},null,-1),O=e("span",null,"Generating...",-1),P=[G,O],q={key:1},J={id:"canvas",ref:"canvas",style:{display:"none"}},K={components:{SearchIcon:g,TrashIcon:x,PencilIcon:u,Head:_,Link:f},data(){return{processing:!1,processing_item:[]}},methods:{viewReport(d){this.$inertia.get(route("diagnostic_test.report",d))}},created(){this.$page.props.answer_record.data.map(()=>{this.processing_item.push({process:!1})})}},ce=Object.assign(K,{__name:"Details",setup(d){return(t,Q)=>(o(),a(l,null,[n(p(_),{title:"Diagnostic Test"}),n(m,null,{header:c(()=>[]),default:c(()=>[e("div",k,[e("div",b,[e("div",B,[e("div",$,[e("table",D,[L,e("tbody",R,[t.$page.props.answer_record.data.length?y("",!0):(o(),a("tr",C,T)),(o(!0),a(l,null,w(t.$page.props.answer_record.data,(s,i)=>(o(),a("tr",{class:"hover:bg-gray-200",key:s.id},[e("td",V,[e("div",Y,r(i+1),1)]),e("td",F,[e("div",I,r(s.dt_name),1)]),e("td",j,[e("div",z,r(s.total_correct_answers+"/"+s.total_answers),1)]),e("td",A,[e("div",H,r(p(v)(s.created_at).format("DD/MM/YYYY")),1)]),e("td",M,[e("div",S,[n(h,{buttonType:"blue",class:"py-1 px-2",onClick:U=>!t.processing_item[i].process&&!t.processing?t.viewReport(s.dt_details_id):""},{default:c(()=>[t.processing_item[i].process&&t.processing?(o(),a("div",E,P)):(o(),a("span",q,"View Report"))]),_:2},1032,["onClick"])])])]))),128))])])])])])]),e("canvas",J,null,512)]),_:1})],64))}});export{ce as default};
