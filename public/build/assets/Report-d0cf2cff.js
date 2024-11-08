import{y as d,x as j,u as B,A as w,I as x,z as t,K as i,F as g,J as b,v as S,Q as P,C as T,be as D,t as l,V as $,W as f}from"./@vue-d42dd214.js";import"./Authenticated-e544629c.js";import{d as L,r as R,e as z}from"./@heroicons-e6194902.js";import{H as C,L as E}from"./@inertiajs-dde9cc4c.js";import{C as F}from"./ConfirmationModal-46492276.js";import{P as I}from"./Pagination-209dd8c6.js";import{h as v}from"./moment-a9aaa855.js";import{a as M}from"./axios-1779699b.js";import{C as k}from"./chart.js-eecb2e2f.js";import{p as O}from"./chartjs-plugin-datalabels-415cb462.js";import{d as V}from"./dom-to-image-6999cf5f.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-47014c23.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-dc86d4f5.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./DialogDescription-dbd48133.js";import"./vue3-markdown-13648449.js";import"./groq-sdk-5d132fed.js";import"./lucide-vue-next-81b3e39b.js";import"./@headlessui-a01ed24c.js";import"./@kurkle-b1b89bbc.js";const W={class:"flex flex-col justify-center items-center p-3 space-y-4"},Z={class:"flex justify-center w-[215mm] mx-2 my-2 md:mx-auto"},N={class:"flex flex-col items-center space-y-4"},H={class:"w-[210mm]"},Y={class:"flex flex-col justify-between space-y-2 bg-white p-3",id:"report",ref:"report"},q={class:"grid grid-rows-1"},Q={class:"flex justify-center"},J={class:"font-bold text-slate-800 text-xl py-5 uppercase"},K={class:"grid grid-rows-1"},G={class:"grid grid-cols-2 px-4 space-x-4"},U={class:"flex items-center justify-center rounded-lg"},X={id:"scatter-chart",ref:"scatterChart",class:"hidden m-0"},tt={id:"bar-chart",ref:"barChart",class:"hidden m-0"},et={class:"p-6 rounded-lg"},st={class:"mt-2 space-y-3"},rt={class:"flex justify-between text-sm font-medium"},at={class:"text-gray-900 break-word"},ot={class:"flex justify-between text-sm font-medium"},it={class:"text-gray-900"},nt={class:"flex justify-between text-sm font-medium"},lt={class:"text-gray-900"},dt={class:"flex justify-between text-sm font-medium"},ct={class:"text-gray-900"},pt={class:"grid grid-cols-1 px-4 space-x-4"},ht={class:"flex items-center p-2 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600",role:"alert"},mt={class:"flex flex-col text-xs"},_t={class:"grid grid-rows-1"},gt={class:"grid grid-cols-1"},ft={class:"flex justify-center px-4"},yt={class:"w-full"},ut={class:"text-sm divide-y divide-gray-100"},wt={class:"p-1 whitespace-nowrap border-2 text-center align-middle text-sm"},xt={class:"p-1 whitespace-nowrap border-2 align-middle text-sm"},bt={class:"flex flex-col flex-wrap"},vt={class:"whitespace-normal font-semibold"},kt={key:0,class:"flex items-center"},Ct={class:"whitespace-normal font-semibold"},At={key:0},jt={key:1},Bt={key:1,class:"whitespace-normal font-semibold"},St={class:"p-1 whitespace-nowrap border-2 text-center align-middle text-sm"},Pt={class:"flex justify-center"},Tt={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-check-circle-fill text-green-500",viewBox:"0 0 16 16"},Dt={key:1,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-x-circle-fill text-red-500",viewBox:"0 0 16 16"},$t={components:{SearchIcon:L,TrashIcon:R,PencilIcon:z,ConfirmationModal:F,Head:C,Link:E,Pagination:I},props:{filter:Object},data(){return{finish_loading_report:!1,current_chart_type:"",chart_info:[],bar_chart:"",scatter_chart:"",chart_image:"",show_report:!1,report:{title:"",name:"",age:"",result:"",datetime:""},chart_data:{categories:{label:[],data:[],info:[]},total_answers:4},answer_data:[]}},methods:{viewReport(){const o=this.$page.props.answer_record.dt_id,s=this.$page.props.answer_record.total_answers,e=this.$page.props.answer_record.chart_type;this.current_chart_type=e,this.chart_data.total_answers=s,this.bar_chart&&this.bar_chart.destroy(),this.scatter_chart&&this.scatter_chart.destroy(),this.displayChart(o,e)},displayChart(o,s){M.get(route("diagnostic_test.get_dt_categories"),{params:{dt_id:o,chart_type:s}}).then(e=>{this.chart_data.categories.label=e.data.label,this.chart_data.categories.data=e.data.data,this.chart_data.categories.data=this.splitResultByCategory(),this.chart_data.categories.info=e.data.info,this.initChart(s),this.initAnswers(),this.initInfos()}).catch(e=>{console.error(e)})},initChart(o){if(o==1){let e=document.getElementById("bar-chart").getContext("2d");const a=new k(e,{type:"bar",data:{labels:this.chart_data.categories.label,datasets:[{data:this.chart_data.categories.data,backgroundColor:["#7B66FF","#39A7FF","#508D69","#ED5AB3"],borderWidth:1}]},options:{animation:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1},datalabels:{display:!1}},scales:{y:{min:0,max:3,stepSize:1,ticks:{beginAtZero:!0}},x:{display:!1,min:0,max:this.chart_data.total_answers,stepSize:1,ticks:{beginAtZero:!0}}},ticks:{precision:0}},plugins:[O]});this.bar_chart=a}if(o==2){const s=this.chart_data.total_answers,e={id:"scatterArbitraryLine",beforeDatasetDraw(p,r,c){const{ctx:h,chartArea:{top:Lt,bottom:Rt,left:zt,right:Et,width:Ft,height:It},scales:{x:y,y:u}}=p;A();function A(Mt,Ot,Vt,Wt){h.save(),h.beginPath(),h.strokeStyle="rgba(170, 170, 170, 1)",h.lineWidth=3,h.moveTo(y.getPixelForValue(0),u.getPixelForValue(0)),h.lineTo(y.getPixelForValue(s),u.getPixelForValue(s)),h.stroke(),h.restore()}}},a={id:"scatterAnnotationLine",beforeDraw:p=>{if(p.tooltip._active&&p.tooltip._active.length){const r=p.ctx;r.save();const c=p.tooltip._active[0];r.beginPath(),r.moveTo(c.element.x,p.chartArea.top),r.lineTo(c.element.x,c.element.y),r.lineWidth=2,r.strokeStyle="white",r.stroke(),r.restore(),r.beginPath(),r.moveTo(c.element.x,c.element.y),r.lineTo(c.element.x,p.chartArea.bottom),r.lineWidth=2,r.strokeStyle="red",r.stroke(),r.restore(),r.beginPath(),r.moveTo(p.chartArea.left,c.element.y),r.lineTo(c.element.x,c.element.y),r.lineWidth=2,r.strokeStyle="red",r.stroke(),r.restore()}}};let _=document.getElementById("scatter-chart").getContext("2d");const m=new k(_,{type:"scatter",data:{labels:this.chart_data.total_answers,datasets:[{data:[{x:this.chart_data.categories.data[0],y:this.chart_data.categories.data[1]}],borderColor:"rgba(255, 8, 0, 1)",pointStyle:"crossRot",radius:6,hoverRadius:10,fill:!1}]},options:{animation:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{y:{min:0,max:5,stepSize:1,ticks:{beginAtZero:!0},title:{display:!0,text:"Operations"}},x:{min:0,max:5,stepSize:1,ticks:{beginAtZero:!0},title:{display:!0,text:"Numbers"}}},ticks:{precision:0}},plugins:[e,a]});this.scatter_chart=m}},splitResultByCategory(){const o=this.$page.props.answer_record.answer_record.reduce((e,a)=>(a.correct?e[a.question_category_id]=(e[a.question_category_id]||0)+1:e.hasOwnProperty(a.question_category_id)||(e[a.question_category_id]=null),e),{}),s={};return Object.keys(o).forEach((e,a)=>{s[a]=o[e]}),Object.values(s)},initAnswers(){this.answer_data=this.$page.props.answer_record.answer_record},initInfos(){this.report.title=this.$page.props.answer_record.dt_name,this.report.name=this.$page.props.answer_record.child_name,this.report.age=this.$page.props.answer_record.child_age,this.report.result=this.$page.props.answer_record.total_correct_answers+"/"+this.$page.props.answer_record.total_answers,this.report.date=v(this.$page.props.answer_record.created_at).format("DD/MM/YYYY"),this.report.time=v(this.$page.props.answer_record.created_at).format("hh:mm A"),this.finish_loading_report=!0},download(){document.getElementById("report").style.display="block";var o=document.getElementById("report");setTimeout(()=>{var s=2;V.toPng(o,{width:o.clientWidth*s,height:o.clientHeight*s,style:{transform:"scale("+s+")",transformOrigin:"top left"}}).then(function(e){var a=document.createElement("a");a.href=e,a.download="Diagnostic Test Report.png",a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)}).catch(function(e){console.error("oops, something went wrong!",e)})})}},created(){this.viewReport()}},Ne=Object.assign($t,{__name:"Report",setup(o){return(s,e)=>{const a=D("Button");return l(),d(g,null,[j(B(C),{title:"Diagnostic Test Report"}),w(t("div",W,e[0]||(e[0]=[t("div",{class:"mt-16"}," Please wait while report is loading... ",-1)]),512),[[x,!s.finish_loading_report]]),w(t("div",Z,[t("div",N,[t("div",H,[t("div",Y,[t("div",q,[t("div",Q,[t("h1",J,"Diagnostic Test "+i(s.report.title),1)])]),t("div",K,[t("div",G,[t("div",U,[t("canvas",X,null,512),t("canvas",tt,null,512)]),t("div",et,[t("dl",st,[t("div",rt,[e[1]||(e[1]=t("dt",{class:"text-gray-500 min-w-[70px]"},"Name : ",-1)),t("dd",at,i(s.report.name),1)]),t("div",ot,[e[2]||(e[2]=t("dt",{class:"text-gray-500"},"Age :",-1)),t("dd",it,i(s.report.age),1)]),t("div",nt,[e[3]||(e[3]=t("dt",{class:"text-gray-500"},"Result :",-1)),t("dd",lt,i(s.report.result),1)]),t("div",dt,[e[4]||(e[4]=t("dt",{class:"text-gray-500"},"Date / Time",-1)),t("dd",ct,i(s.report.date)+" - "+i(s.report.time),1)])])])]),t("div",pt,[t("div",ht,[e[5]||(e[5]=t("svg",{class:"flex-shrink-0 inline w-4 h-4 me-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[t("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1)),t("div",mt,[(l(!0),d(g,null,b(s.chart_data.categories.info,n=>(l(),d("span",null,[t("span",{class:"font-semibold",style:$("color: "+n.category_color)},i(n.category_name)+":",5),f(" "+i(n.category_description),1)]))),256))])])])]),t("div",_t,[t("div",gt,[t("div",ft,[t("table",yt,[e[9]||(e[9]=t("thead",{class:"text-xs font-semibold uppercase text-gray-400 bg-indigo-100"},[t("tr",null,[t("th",{class:"p-2 whitespace-nowrap border-2 rounded-tr",width:"3"},[t("div",{class:"flex justify-center font-semibold text-left text-gray-700"},"#")]),t("th",{class:"p-2 whitespace-nowrap border-2"},[t("div",{class:"flex font-semibold justify-center text-gray-700"},"Question")]),t("th",{class:"p-2 whitespace-nowrap border-2 w-8"},[t("div",{class:"flex justify-center font-semibold text-left text-gray-700"},"Result")])])],-1)),t("tbody",ut,[(l(!0),d(g,null,b(s.answer_data,(n,_)=>(l(),d("tr",null,[t("td",wt,i(++_),1),t("td",xt,[t("div",bt,[t("p",vt,i(n.question),1),n.answer?(l(),d("div",kt,[t("p",Ct,[e[6]||(e[6]=f("Answer: ")),n.answer.length?(l(),d("span",At,i(n.answer.map(m=>m===null?"Blank":m)),1)):(l(),d("span",jt,i(n.answer),1))])])):(l(),d("p",Bt,"Answer: "+i(n.answer+1),1))])]),t("td",St,[t("div",Pt,[n.correct?(l(),d("svg",Tt,e[7]||(e[7]=[t("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"},null,-1)]))):(l(),d("svg",Dt,e[8]||(e[8]=[t("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"},null,-1)])))])])]))),256))])])])])])],512)]),s.finish_loading_report?(l(),S(a,{key:0,onClick:s.download},{default:P(()=>e[10]||(e[10]=[f("Download")])),_:1},8,["onClick"])):T("",!0)])],512),[[x,s.finish_loading_report]])],64)}}});export{Ne as default};
