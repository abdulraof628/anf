import{B as $}from"./Authenticated-214cc5de.js";import{H as h,L as k}from"./@inertiajs-2b766590.js";import{_ as w}from"./Card-e481dfab.js";import{_ as B,a as b,b as d,c as p,d as y,e as s}from"./TableRow-7ae90bc5.js";import{h as D}from"./moment-a9aaa855.js";import{x as l,v as e,u as o,O as t,F as f,b7 as C,q as i,U as r,t as g,B as L,I as N,J as m,y as _}from"./@vue-39dc9ff3.js";import"./ApplicationLogo-5cf6e77e.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-ef5f5861.js";import"./axios-1779699b.js";import"./pusher-js-68b5c933.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./@radix-icons-9ff33614.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";import"./lucide-vue-next-7b48dc26.js";const R=_("div",{class:"p-3"}," No Record Found ",-1),V={key:0,class:"flex items-center space-x-2"},Y=_("svg",{class:"inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",viewBox:"0 0 24 24"},null,-1),F=_("span",null,"Generating...",-1),T=[Y,F],x={key:1},A={id:"canvas",ref:"canvas",style:{display:"none"}},H={components:{Head:h,Link:k},data(){return{processing:!1,processing_item:[]}},methods:{viewReport(u){this.$inertia.get(route("diagnostic_test.report",u))}},created(){this.$page.props.answer_record.data.map(()=>{this.processing_item.push({process:!1})})}},Yt=Object.assign(H,{__name:"Details",setup(u){return(a,M)=>{const v=C("Button");return i(),l(f,null,[e(o(h),{title:"Diagnostic Test"}),e($,null,{header:t(()=>[]),default:t(()=>[e(w,null,{content:t(()=>[e(o(B),null,{default:t(()=>[e(o(b),{class:"bg-gray-100"},{default:t(()=>[e(o(d),null,{default:t(()=>[e(o(p),null,{default:t(()=>[r("#")]),_:1}),e(o(p),null,{default:t(()=>[r("Level")]),_:1}),e(o(p),null,{default:t(()=>[r("Result")]),_:1}),e(o(p),null,{default:t(()=>[r("Date Taken")]),_:1}),e(o(p),{class:"text-center"},{default:t(()=>[r("Action")]),_:1})]),_:1})]),_:1}),e(o(y),null,{default:t(()=>[a.$page.props.answer_record.data.length?L("",!0):(i(),g(o(d),{key:0},{default:t(()=>[e(o(s),{class:"text-center",colspan:"10"},{default:t(()=>[R]),_:1})]),_:1})),(i(!0),l(f,null,N(a.$page.props.answer_record.data,(n,c)=>(i(),g(o(d),null,{default:t(()=>[e(o(s),null,{default:t(()=>[r(m(a.$page.props.answer_record.from+c),1)]),_:2},1024),e(o(s),null,{default:t(()=>[r(m(n.dt_name),1)]),_:2},1024),e(o(s),null,{default:t(()=>[r(m(n.total_correct_answers+"/"+n.total_answers),1)]),_:2},1024),e(o(s),null,{default:t(()=>[r(m(o(D)(n.created_at).format("DD/MM/YYYY")),1)]),_:2},1024),e(o(s),{class:"text-center space-x-2"},{default:t(()=>[e(v,{onClick:O=>!a.processing_item[c].process&&!a.processing?a.viewReport(n.dt_details_id):""},{default:t(()=>[a.processing_item[c].process&&a.processing?(i(),l("div",V,T)):(i(),l("span",x,"View Report"))]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),_("canvas",A,null,512)]),_:1})],64)}}});export{Yt as default};