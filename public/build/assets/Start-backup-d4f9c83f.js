import{B as q}from"./Authenticated-5ff94400.js";import{B as E}from"./Button-e10a5d69.js";import{x as S,$ as j,E as B,ad as M,N as H,Q as K,R as Q,O as U,ae as P,P as Z,af as $,o as x,c as y,a as v,u as T,w as O,F as G,H as A,L as J,d as o,t as C,g as W,q as X}from"./app-495c50e4.js";import{C as L,B as Y,p as tt,a as et,b as st,c as it,d as at,L as nt}from"./chart-b51d74a1.js";import"./ApplicationLogo-e61264c8.js";import"./NavLink-f436de1b.js";import"./XIcon-556a86ac.js";import"./Toast-ab5100fa.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./vue3-perfect-scrollbar-26ccdd8c.js";import"./moment-a9aaa855.js";const I={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},ot={ariaLabel:{type:String},ariaDescribedby:{type:String}},rt={type:{type:String,required:!0},...I,...ot},lt=M[0]==="2"?(e,t)=>Object.assign(e,{attrs:t}):(e,t)=>Object.assign(e,t);function d(e){return $(e)?P(e):e}function ct(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e;return $(t)?new Proxy(e,{}):e}function dt(e,t){const s=e.options;s&&t&&Object.assign(s,t)}function N(e,t){e.labels=t}function R(e,t,s){const n=[];e.datasets=t.map(i=>{const a=e.datasets.find(u=>u[s]===i[s]);return!a||!i.data||n.includes(a)?{...i}:(n.push(a),Object.assign(a,i),a)})}function ut(e,t){const s={labels:[],datasets:[]};return N(s,e.labels),R(s,e.datasets,t),s}const ht=S({props:rt,setup(e,t){let{expose:s,slots:n}=t;const i=H(null),a=j(null);s({chart:a});const u=()=>{if(!i.value)return;const{type:r,data:g,options:f,plugins:p,datasetIdKey:w}=e,b=ut(g,w),l=ct(b,g);a.value=new L(i.value,{type:r,data:l,options:{...f},plugins:p})},h=()=>{const r=P(a.value);r&&(r.destroy(),a.value=null)},F=r=>{r.update(e.updateMode)};return K(u),Q(h),U([()=>e.options,()=>e.data],(r,g)=>{let[f,p]=r,[w,b]=g;const l=P(a.value);if(!l)return;let m=!1;if(f){const c=d(f),k=d(w);c&&c!==k&&(dt(l,c),m=!0)}if(p){const c=d(p.labels),k=d(b.labels),D=d(p.datasets),V=d(b.datasets);c!==k&&(N(l.config.data,c),m=!0),D&&D!==V&&(R(l.config.data,D,e.datasetIdKey),m=!0)}m&&Z(()=>{F(l)})},{deep:!0}),()=>B("canvas",{role:"img",ariaLabel:e.ariaLabel,ariaDescribedby:e.ariaDescribedby,ref:i},[B("p",{},[n.default?n.default():""])])}});function pt(e,t){return L.register(t),S({props:I,setup(s,n){let{expose:i}=n;const a=j(null),u=h=>{a.value=h==null?void 0:h.chart};return i({chart:a}),()=>B(ht,lt({ref:u},{type:e,...s}))}})}const z=pt("bar",Y),_t={class:"py-6 px-6"},gt={class:"overflow-x-auto"},ft={key:0,class:"inline-block min-w-full py-12 px-36 shadow-md bg-white rounded text-center"},bt={class:"text-2xl font-bold capitalize leading-loose"},mt={class:"py-4"},xt={class:"pt-6"},yt={key:1,class:"inline-block min-w-full p-12 shadow-md bg-white rounded text-center"},vt={class:"px-6 pb-8"},wt={class:"text-3xl font-bold uppercase"},kt={key:0,class:"px-6 pb-8"},Dt={class:"font-bold uppercase italic text-red-500"},Ot={class:"flex flex-col place-items-center"},Ct=["src"],Bt={class:"flex flex-row justify-between pt-4 w-1/2 space-x-2"};L.register(tt,et,st,it,at,nt);var _=[];const Pt=S({components:{Head:A,Link:J,Bar:z},props:{diagnostic_test_list:Object,diagnostic_test_categories_label:Object,diagnostic_test_categories:Object,result:Object,result_score:String},data(){return{count:1,index:0,score:0,final_score:"",chartData:{labels:this.diagnostic_test_categories_label?this.diagnostic_test_categories_label:[],datasets:[{label:"Score",backgroundColor:"#f87979",data:this.final_data?this.final_data:[],barThickness:100,yAxisID:"y"}]},chartOptions:{responsive:!0,maintainAspectRatio:!1,scales:{y:{min:0,max:10,stepSize:1,ticks:{beginAtZero:!0}}}}}},watch:{final_score:{handler(){this.$inertia.get(route("diagnostic_test.run"),{final_score:this.final_score,dt_id:this.$page.props.dt_id})}}},methods:{nextTrue(){var e=this.diagnostic_test_list[this.index].category_id;if(this.diagnostic_test_categories[e]){var t=this.diagnostic_test_categories[e];this.diagnostic_test_categories_label.filter(function(n,i){n==t?_[i]+=1:_[i]||(_[i]=0)})}if(this.diagnostic_test_list[this.index].redirect_yes_id!=null){var s=0;const n=this.diagnostic_test_list[this.index].redirect_yes_id;this.diagnostic_test_list.filter(function(i,a){i.id==n&&(s=a)}),this.index=s,this.score+=1,this.count+=1}else this.diagnostic_test_list[this.index+1]?(this.index++,this.score+=1,this.count+=1):this.diagnostic_test_list[this.index]&&(this.count+1,this.final_score=this.final_score==null?0:this.score+1)},nextFalse(){if(this.diagnostic_test_list[this.index].redirect_no_id!=null){var e=0;const t=this.diagnostic_test_list[this.index].redirect_no_id;this.diagnostic_test_list.filter(function(s,n){s.id==t&&(e=n)}),this.index=e,this.count+=1}else this.diagnostic_test_list[this.index+1]?(this.index++,this.count+=1):this.diagnostic_test_list[this.index]&&(this.count+1,this.final_score=this.final_score==null?0:this.score+0)},restartDT(){_=[],this.$inertia.get(route("diagnostic_test"))},chartInit(){this.diagnostic_test_categories_label.filter(function(e,t){_[t]=0})}},mounted(){this.result_score==""&&this.chartInit()}}),qt=Object.assign(Pt,{__name:"Start-backup",setup(e){return(t,s)=>(x(),y(G,null,[v(T(A),{title:"Diagnostic Test"}),v(q,null,{header:O(()=>[]),default:O(()=>[o("div",_t,[o("div",gt,[t.result_score!=""?(x(),y("div",ft,[o("span",bt,C(t.result.message),1),o("div",mt,[v(T(z),{"chart-options":t.chartOptions,"chart-data":t.chartData,width:100,height:500},null,8,["chart-options","chart-data"])]),o("div",xt,[v(E,{class:"px-6 py-2 bg-indigo-500 hover:bg-indigo-600 rounded text-white shadow-md",onClick:t.restartDT},{default:O(()=>[W("Re-run Diagnostic Test")]),_:1},8,["onClick"])])])):(x(),y("div",yt,[o("div",vt,[o("span",wt,"Question "+C(t.count),1)]),t.diagnostic_test_list[t.index].remarks?(x(),y("div",kt,[o("span",Dt,"* "+C(t.diagnostic_test_list[t.index].remarks)+" *",1)])):X("",!0),o("div",Ot,[o("img",{src:"/storage/"+t.diagnostic_test_list[t.index].image_location,class:"select-none w-1/2 h-1/3 bg-green-200 rounded-lg",alt:""},null,8,Ct),o("div",Bt,[o("button",{class:"grow uppercase px-32 py-6 bg-blue-500 hover:bg-blue-600 rounded text-white text-lg font-extrabold shadow-md",onClick:s[0]||(s[0]=n=>t.nextTrue(t.diagnostic_test_list[t.index].id))},"1"),o("button",{class:"grow uppercase px-32 py-6 bg-red-500 hover:bg-red-600 rounded text-white text-lg font-extrabold shadow-md",onClick:s[1]||(s[1]=n=>t.nextFalse(t.diagnostic_test_list[t.index].id))},"0")])])]))])])]),_:1})],64))}});export{qt as default};
