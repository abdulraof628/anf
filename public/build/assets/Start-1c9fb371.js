import{i as D,o,c as n,a as y,u as z,d as t,h as m,m as q,F as h,e as g,v,n as x,B as $,p as _,t as c,w as k,g as p,H,L as P,b as C,G as S}from"./app-832976dc.js";import{B as A}from"./Button-625852c6.js";import"./toggle-bf70d7bf.js";import{V as F}from"./vue-draggable-next.esm-bundler-e6db7e3b.js";import"./auto-65a5f8f0.js";import{C as T}from"./chart-30d8fb54.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./moment-fbc5633a.js";const E={class:"flex flex-col h-screen"},I={class:"flex-grow flex flex-col items-center justify-center py-6 bg-indigo-500 overflow-x-auto sm:overflow-x-clip"},N={class:"flex flex-col items-center justify-center w-full h-full max-w-4xl",style:{display:"hidden"}},O={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md overflow-x-auto w-[350px] sm:w-full h-[200px] sm:h-auto"},U=t("canvas",{id:"scatter-chart",class:"hidden m-0"},null,-1),Z={class:"flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600",role:"alert"},R=t("svg",{class:"flex-shrink-0 inline w-4 h-4 me-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[t("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1),W={class:"flex flex-col space-y-2"},G={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md overflow-x-auto w-[350px] sm:w-full h-[200px] sm:h-auto"},K=t("canvas",{id:"bar-chart",class:"hidden m-0"},null,-1),Y={class:"flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600",role:"alert"},Q=t("svg",{class:"flex-shrink-0 inline w-4 h-4 me-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[t("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1),J={class:"flex flex-col space-y-2"},X={class:"p-6 text-center"},ee={key:0,class:"w-full max-w-2xl mt-32 sm:mt-0"},te={class:"flex-1 flex-grow flex flex-col w-full border bg-white px-6 py-8 shadow-md rounded-[4px] min-w-[25%] space-y-4"},se=t("div",{class:"flex flex-col"},[t("div",{class:"font-semibold leading-5 text-xl"},"Final step"),t("div",{class:"mt-1 leading-5 text-slate-500 text-sm"},"Kindly fill out the parent's details to receive the generated result.")],-1),re=t("hr",null,null,-1),ie={class:"flex flex-col text-sm rounded-md space-y-1"},oe=t("label",{class:"block text-sm text-gray-700 font-bold",for:""},[p("Parent's Name "),t("span",{class:"text-red-500"},"*")],-1),ne={class:"flex flex-col text-sm rounded-md space-y-1"},ae=t("label",{class:"block text-sm text-gray-700 font-bold",for:""},[p("Parent's Contact Number "),t("span",{class:"text-red-500"},"*")],-1),le={class:"flex flex-col text-sm rounded-md space-y-1"},de=t("label",{class:"block text-sm text-gray-700 font-bold",for:""},[p("Parent's Area/Location "),t("span",{class:"text-red-500"},"*")],-1),ce={class:"flex flex-col text-sm rounded-md space-y-1"},he=t("label",{class:"block text-sm text-gray-700 font-bold",for:""},[p("Parent's Email "),t("span",{class:"text-red-500"},"*")],-1),_e=t("hr",null,null,-1),ue={class:"flex items-center"},me=t("label",{for:"link-checkbox",class:"ms-2 text-sm font-medium text-gray-900 cursor-pointer"},"Keep a copy for myself",-1),pe={key:0,class:"flex flex-col text-sm rounded-md space-y-1"},fe={class:"text-center"},ge={key:0,class:"italic text-center text-sm text-gray-700 font-semibold"},we={key:1,class:"w-full max-w-2xl"},xe={class:"flex-col border bg-white px-6 py-8 shadow-md rounded-[4px] min-w-[25%] space-y-8"},be={class:"flex flex-col items-center space-y-2"},ye=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"text-green-600 w-28 h-28",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),ve=t("h1",{class:"font-mono text-xl sm:text-3xl font-bold"},"Thank You!",-1),ke={class:"font-sans text-sm sm:text-xl"},qe={key:2,class:"w-full max-w-2xl mt-16 sm:mt-0"},Ce={class:"flex flex-col bg-white rounded-lg shadow min-w-[70%]"},Ae={class:"flex flex-col min-w-full rounded text-center p-8 sm:p-16 space-y-6 sm:space-y-10"},Me={class:"text-xl sm:text-3xl font-bold uppercase"},Le={class:"flex flex-col items-center space-y-4 m-0"},Se={class:"text-sm sm:text-lg font-medium"},Te={role:"list",class:"flex items-center space-x-2 sm:space-x-4"},He={key:0,class:"block w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full"},je={class:"sr-only"},Ve={key:1,class:"relative flex items-center justify-center"},Be=t("span",{class:"absolute w-4 h-4 sm:w-5 sm:h-5 p-px flex"},[t("span",{class:"w-full h-full rounded-full bg-indigo-500"})],-1),De=t("span",{class:"relative block w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-white rounded-full"},null,-1),ze={class:"sr-only"},$e={key:2,class:"block w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full"},Pe={class:"sr-only"},Fe={key:3,class:"block w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 rounded-full"},Ee={class:"sr-only"},Ie={key:0},Ne={class:"border-4 border-gray-400 p-3 w-full rounded-lg shadow-xl flex items-center justify-center md:p-5"},Oe={class:"text-center font-mono font-bold text-sm sm:text-xl whitespace-pre-wrap"},Ue={key:1,class:"px-6"},Ze={class:"font-bold uppercase italic text-red-500"},Re={key:2,class:"flex items-center justify-center"},We=["src"],Ge={key:3,class:"flex flex-col sm:flex-row justify-center sm:space-x-10 space-y-2 sm:space-y-0"},Ke=["onClick"],Ye=["innerHTML"],Qe={key:1,class:"py-5 px-6"},Je=["innerHTML"],Xe={key:4,class:"flex flex-col space-y-10"},et={class:"grid grid-cols-4 gap-4 mx-auto"},tt=["onClick"],st=["innerHTML"],rt={key:1,class:"py-5 px-6"},it=["innerHTML"],ot={class:"flex flex-row justify-center"},nt={key:5,class:"flex flex-col space-y-2"},at={class:"text-left space-y-2"},lt=t("h3",{class:"font-semibold text-xl"},"Elements",-1),dt=["innerHTML"],ct={class:"flex justify-start"},ht={class:"flex flex-col space-y-6 justify-center"},_t={class:"flex items-center justify-center border-2 border-indigo-400 w-[5rem] h-[5rem] rounded-lg"},ut=["innerHTML"],mt={key:1,class:"py-5 px-6"},pt=["innerHTML"],ft=t("div",{class:"flex flex-col space-y-28 justify-center"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"currentColor",class:"bi bi-caret-right-fill",viewBox:"0 0 16 16"},[t("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})])],-1),gt={class:"flex flex-col space-y-6 justify-center"},wt=["innerHTML"],xt={class:"flex flex-row justify-center"},bt={key:6,class:"flex flex-col space-y-10"},yt={class:"border-4 border-gray-400 p-3 w-full rounded-lg shadow-xl flex flex-wrap items-center justify-center md:p-5"},vt={class:"text-left font-mono font-bold text-sm sm:text-lg space-y-2 leading-loose whitespace-pre-line"},kt=["onUpdate:modelValue"],qt={class:"flex flex-row justify-center"},Ct={components:{Head:H,Link:P,draggable:F},props:{form_data:Object,dt_details:Object,dt_list:Object,diagnostic_test_categories_label:Object,diagnostic_test_categories:Object},data(){return{submitting:!1,can_go_higher:!0,can_go_lower:!0,chart_info:[],bar_chart:"",scatter_chart:"",show_chart:!1,show_bar_chart:!1,show_scatter_chart:!1,show_quiz:!0,show_parent_details:!1,show_thank_you:!1,count:1,dt_index:0,answer:"",correct:!1,current:{question:"",question_type:"",question_image:"",remarks:"",criterions:[],answers:[],score:0,answer_records:[],matrix_items:[],matrix_sequence:[]},question_types:{1:{name:"Single Choice"},2:{name:"Multiple Choices"},3:{name:"Matrix Sorting"},4:{name:"Fill in the Blank"}},selected_answer:{single_choice:"",multiple_choices:[],matrix_sorting:[],fill_in_blank:[]},sentence_parts:[],form:{dt_title:"",student_name:this.form_data.name,student_age:this.form_data.age,student_school:this.form_data.school,parent_name:"",parent_contact:"",parent_area_location:"",parent_email:"",answer_record:[],eligible_level:"",language_id:this.$page.props.language_id,has_edu_teacher_email:!1,edu_teacher_email:""},error:{parent_name:!1,parent_contact:!1,parent_area_location:!1,parent_email:!1},chart_data:[1,2,3]}},methods:{restrictToNumbers(){this.form.parent_contact=this.form.parent_contact.replace(/\D/g,"")},clearAllAnswers(){this.selected_answer.single_choice="",this.selected_answer.multiple_choices=[],this.resetFillInBlank(),this.answer="",this.correct=!1},pushAnswer(){this.dt_list[this.dt_index]&&(this.form.answer_record.push({dt_id:this.dt_list[this.dt_index].dt_id,question_id:this.dt_list[this.dt_index].id,question_category_id:this.dt_list[this.dt_index].category_id,question:this.dt_list[this.dt_index].question,correct:this.correct,answer:this.answer}),this.current.answer_records.push({dt_id:this.dt_list[this.dt_index].dt_id,question_id:this.dt_list[this.dt_index].id,question_category_id:this.dt_list[this.dt_index].category_id,question:this.dt_list[this.dt_index].question,correct:this.correct,answer:this.answer}),this.dt_index+=1)},saveSingleChoice(s){this.selected_answer.single_choice=s,this.answer=s,this.selected_answer.single_choice==this.dt_list[this.dt_index].correct_answer&&(this.current.score+=1,this.correct=!0),this.pushAnswer()},selectMultipleChoices(s){const e=this.selected_answer.multiple_choices.indexOf(s);e!==-1?this.selected_answer.multiple_choices.splice(e,1):this.selected_answer.multiple_choices.push(s)},saveMultipleChoices(){this.selected_answer.multiple_choices.length<1?alert("Please select at least ONE answer."):(this.checkIfArrayMatch(this.selected_answer.multiple_choices,this.dt_list[this.dt_index].correct_answer.map(Number))&&(this.current.score+=1,this.correct=!0),this.answer=this.selected_answer.multiple_choices,this.pushAnswer())},saveMatrixSorting(){var s=this.checkMatrixSortingAnswer();s&&(this.current.score+=1,this.correct=!0),this.pushAnswer()},checkSingleValueExistsInArray(s){return this.selected_answer.multiple_choices.indexOf(s)!==-1},checkMatrixSortingAnswer(){var s=[],e=0;return this.current.matrix_sequence.map(i=>{i.map(()=>{e++})}),this.selected_answer.matrix_sorting.map((i,a)=>{i.map(r=>{this.current.matrix_sequence[a].includes(r)?s.push(!0):s.push(!1)})}),s.length==e&&!s.includes(!1)},checkIfArrayMatch(s,e){s.sort(),e.sort();for(let i=0;i<s.length;i++)if(s[i]!==e[i])return!1;return!0},shuffleArray(s){for(let e=s.length-1;e>0;e--){const i=Math.floor(Math.random()*(e+1));[s[e],s[i]]=[s[i],s[e]]}return s},saveFillInBlankAnswers(){const s=[];this.sentence_parts.forEach(e=>{e.input&&s.push(e.answer)}),this.answer=s,this.sentence_parts.every(this.partIsCorrect)&&this.inputAnswersUnique(this.sentence_parts)&&(this.current.score+=1,this.correct=!0),this.pushAnswer()},partIsCorrect(s){const e=s.answer.replace(/\s+/g," ").trim(),i=s.text.includes(e);return!s.input||(Array.isArray(s.text)&&s.text.length!==0)===i},inputAnswersUnique(s){const e=s.filter(a=>a.input);return new Set(e.map(a=>a.answer)).size===e.length},resetFillInBlank(){const s=/(\[[^\]]*\])/,e=this.current.question.split(s).filter(i=>i);this.sentence_parts=e.map(i=>{const a=s.test(i);return{answer:"",input:a,text:a?i.slice(1,-1).split("|"):i}})},parentDetails(){this.show_chart=!1,this.show_quiz=!1,this.show_parent_details=!0},handleBeforeUnload(s){s.preventDefault(),s.returnValue="";const e="Are you sure you want to leave the page?";return s.returnValue=e,e},getHigherLevelDt(){C.get(route("diagnostic_test.new_level"),{params:{dt_id:this.dt_details.higher_score_direction}}).then(s=>{this.dt_index=0,this.current.score=0,this.$page.props.diagnostic_test_categories_label=s.data.category_label,this.$page.props.dt_details=s.data.dt_details,this.$page.props.dt_list=s.data.dt_list,this.current.answer_records=[]}).catch(s=>{console.error(s)})},getLowerLevelDt(){C.get(route("diagnostic_test.new_level"),{params:{dt_id:this.dt_details.lower_score_direction}}).then(s=>{this.dt_index=0,this.current.score=0,this.$page.props.diagnostic_test_categories_label=s.data.category_label,this.$page.props.dt_details=s.data.dt_details,this.$page.props.dt_list=s.data.dt_list}).catch(s=>{console.error(s)})},saveResult(){const s=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;this.error.parent_name=this.form.parent_name==="",this.error.parent_contact=this.form.parent_contact==="",this.error.parent_area_location=this.form.parent_area_location==="",this.error.parent_email=this.form.parent_email===""||!s.test(this.form.parent_email);for(const e in this.error)if(this.error[e]===!0)return;this.submitting=!0,this.form.dt_title=this.$page.props.dt_details.name,C.post(route("diagnostic_test.save_result"),this.form).then(e=>{e&&(this.show_parent_details=!1,this.show_thank_you=!0)}).catch(e=>{console.error(e)})},returnHome(){this.$inertia.get(route("public.diagnostic_test"))},processGraph(){this.current.answer_records=this.form.answer_record.filter(a=>a.dt_id===this.form.eligible_level);const e=this.current.answer_records.map(a=>{const r=this.dt_list.find(l=>l.id===a.question_id);return{...a,category_id:r?r.category_id:null}}).reduce((a,r)=>(r.correct?a[r.question_category_id]=(a[r.question_category_id]||0)+1:a.hasOwnProperty(r.question_category_id)||(a[r.question_category_id]=null),a),{}),i=[];Object.keys(e).forEach((a,r)=>{i[r]=e[a]}),Object.values(i),this.chart_data=i,this.initChart(),this.dt_details.chart_id==1?(this.chart_info=this.$page.props.diagnostic_test_chart_info.filter(a=>a.chart_id===this.dt_details.chart_id),this.show_bar_chart=!0,this.show_scatter_chart=!1):(this.chart_info=this.$page.props.diagnostic_test_chart_info.filter(a=>a.chart_id===this.dt_details.chart_id),this.show_scatter_chart=!0,this.show_bar_chart=!1)},initChart(){this.bar_chart&&this.bar_chart.destroy(),this.scatter_chart&&this.scatter_chart.destroy();const s=this.dt_list.length,e={id:"scatterArbitraryLine",beforeDatasetDraw(f,d,u){const{ctx:w,chartArea:{top:At,bottom:Mt,left:Lt,right:St,width:Tt,height:Ht},scales:{x:M,y:L}}=f;B();function B(jt,Vt,Bt,Dt){w.save(),w.beginPath(),w.strokeStyle="rgba(170, 170, 170, 1)",w.lineWidth=3,w.moveTo(M.getPixelForValue(0),L.getPixelForValue(0)),w.lineTo(M.getPixelForValue(s),L.getPixelForValue(s)),w.stroke(),w.restore()}}},i={id:"scatterAnnotationLine",beforeDraw:f=>{if(f.tooltip._active&&f.tooltip._active.length){const d=f.ctx;d.save();const u=f.tooltip._active[0];d.beginPath(),d.moveTo(u.element.x,f.chartArea.top),d.lineTo(u.element.x,u.element.y),d.lineWidth=2,d.strokeStyle="white",d.stroke(),d.restore(),d.beginPath(),d.moveTo(u.element.x,u.element.y),d.lineTo(u.element.x,f.chartArea.bottom),d.lineWidth=2,d.strokeStyle="red",d.stroke(),d.restore(),d.beginPath(),d.moveTo(f.chartArea.left,u.element.y),d.lineTo(u.element.x,u.element.y),d.lineWidth=2,d.strokeStyle="red",d.stroke(),d.restore()}}};let r=document.getElementById("scatter-chart").getContext("2d");const l=new T(r,{type:"scatter",data:{datasets:[{data:[{x:this.chart_data[0]?this.chart_data[0]:0,y:this.chart_data[1]?this.chart_data[1]:0}],label:"Test",borderColor:"rgba(255, 8, 0, 1)",pointStyle:"crossRot",radius:10,hoverRadius:10,fill:!1}]},options:{animation:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1},datalabels:{display:!1}},scales:{y:{min:0,max:5,stepSize:1,ticks:{beginAtZero:!0},title:{display:!0,text:"Operations"}},x:{min:0,max:5,stepSize:1,ticks:{beginAtZero:!0},title:{display:!0,text:"Numbers"}}},ticks:{precision:0},layout:{padding:{top:5}},clip:!1},plugins:[e,i]});this.scatter_chart=l;let j=document.getElementById("bar-chart").getContext("2d");const V=new T(j,{type:"bar",data:{labels:this.diagnostic_test_categories_label,datasets:[{data:this.chart_data,backgroundColor:["#7B66FF","#39A7FF","#508D69","#ED5AB3"],borderWidth:1}]},options:{animation:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{y:{min:0,max:3,stepSize:1,ticks:{beginAtZero:!0}},x:{display:!1,min:0,max:this.dt_list.length,stepSize:1,ticks:{beginAtZero:!0}}},ticks:{precision:0}}});this.bar_chart=V}},watch:{dt_index:{handler(){if(this.dt_list.length)if(this.dt_list.length==this.dt_index){this.chart_data=[];const s=this.current.score,e=this.dt_details.higher_score,i=this.dt_details.higher_score_direction,a=this.dt_details.lower_score,r=this.dt_details.lower_score_direction;this.form.eligible_level?s==0||s<a?this.can_go_lower?r?this.getLowerLevelDt():(this.show_chart=!0,this.show_quiz=!1):(this.getLowerLevelDt(),this.show_chart=!0,this.show_quiz=!1):s>a&&s>e?this.can_go_higher?i?(this.form.eligible_level=this.dt_details.id,this.getHigherLevelDt()):(this.form.eligible_level=this.dt_details.id,this.show_chart=!0,this.show_quiz=!1):(this.form.eligible_level=this.dt_details.id,this.show_chart=!0,this.show_quiz=!1):(this.form.eligible_level=this.dt_details.id,this.show_chart=!0,this.show_quiz=!1):i&&s>a&&s>e?(this.form.eligible_level=this.dt_details.id,this.getHigherLevelDt(),this.can_go_lower=!1):r&&s<a?(this.getLowerLevelDt(),this.can_go_higher=!1):(this.form.eligible_level=this.dt_details.id,this.show_chart=!0,this.show_quiz=!1),this.processGraph()}else this.current.question=this.dt_list[this.dt_index].question?this.dt_list[this.dt_index].question:"",this.current.question_type=this.dt_list[this.dt_index].question_type?this.dt_list[this.dt_index].question_type:"",this.current.question_image=this.dt_list[this.dt_index].question_image?this.dt_list[this.dt_index].question_image:"",this.current.remarks=this.dt_list[this.dt_index].remarks?this.dt_list[this.dt_index].remarks:"",this.current.answers=this.dt_list[this.dt_index].answers?this.dt_list[this.dt_index].answers:"",this.clearAllAnswers(),this.current.question_type==3&&(this.current.criterions=this.dt_list[this.dt_index].answers.criterion?this.dt_list[this.dt_index].answers.criterion:"",this.current.matrix_items=[],this.current.matrix_sequence=[],this.dt_list[this.dt_index].answers.map((s,e)=>{var i=s.element.value.split(", ");i.map(a=>{this.current.matrix_items.push(a),this.shuffleArray(this.current.matrix_items)}),this.current.matrix_sequence[e]=i,this.selected_answer.matrix_sorting[e]=[]}))},immediate:!0}}},Ut=Object.assign(Ct,{__name:"Start",setup(s){return(e,i)=>{const a=D("draggable");return o(),n(h,null,[y(z(H),{title:"Diagnostic Test"}),t("div",E,[t("div",I,[m(t("div",N,[m(t("div",O,[U,t("div",Z,[R,t("div",W,[(o(!0),n(h,null,g(e.chart_info,r=>(o(),n("span",null,[t("span",{class:x(["font-semibold","text-["+r.category_color+"]"])},c(r.category_name)+":",3),p(" "+c(r.category_description),1)]))),256))])])],512),[[q,e.show_scatter_chart]]),m(t("div",G,[K,t("div",Y,[Q,t("div",J,[(o(!0),n(h,null,g(e.chart_info,r=>(o(),n("span",null,[t("span",{class:"font-semibold",style:S("color: "+r.category_color)},c(r.category_name)+":",5),p(" "+c(r.category_description),1)]))),256))])])],512),[[q,e.show_bar_chart]]),t("div",X,[t("button",{class:"py-2 px-4 rounded shadow-md bg-gray-800 text-white hover:bg-gray-700",onClick:i[0]||(i[0]=(...r)=>e.parentDetails&&e.parentDetails(...r))},"Next Step")])],512),[[q,e.show_chart]]),e.show_parent_details?(o(),n("div",ee,[t("div",te,[se,re,t("div",ie,[oe,m(t("input",{type:"text",class:x(["mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500",e.error.parent_name?"border-red-500":"border-gray-500"]),"onUpdate:modelValue":i[1]||(i[1]=r=>e.form.parent_name=r),autocomplete:"off",required:""},null,2),[[v,e.form.parent_name]])]),t("div",ne,[ae,m(t("input",{type:"text",class:x(["w-full mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500",e.error.parent_contact?"border-red-500":"border-gray-500"]),"onUpdate:modelValue":i[2]||(i[2]=r=>e.form.parent_contact=r),autocomplete:"off",onInput:i[3]||(i[3]=(...r)=>e.restrictToNumbers&&e.restrictToNumbers(...r)),required:""},null,34),[[v,e.form.parent_contact]])]),t("div",le,[de,m(t("input",{type:"text",class:x(["border rounded-[4px] p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500",e.error.parent_area_location?"border-red-500":"border-gray-500"]),"onUpdate:modelValue":i[4]||(i[4]=r=>e.form.parent_area_location=r),autocomplete:"off",placeholder:"e.g. Puchong, Selangor",required:""},null,2),[[v,e.form.parent_area_location]])]),t("div",ce,[he,m(t("input",{type:"email",class:x(["border rounded-[4px] p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500",e.error.parent_email?"border-red-500":"border-gray-500"]),"onUpdate:modelValue":i[5]||(i[5]=r=>e.form.parent_email=r),autocomplete:"off",required:""},null,2),[[v,e.form.parent_email]])]),_e,t("div",ue,[m(t("input",{id:"link-checkbox",type:"checkbox",value:"",class:"w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-0 cursor-pointer","onUpdate:modelValue":i[6]||(i[6]=r=>e.form.has_edu_teacher_email=r)},null,512),[[$,e.form.has_edu_teacher_email]]),me]),e.form.has_edu_teacher_email?(o(),n("div",pe,[m(t("input",{type:"email",class:"border rounded-[4px] p-3 hover:outline-none focus:outline-none focus:ring-0 focus:border-gray-500 border-gray-500","onUpdate:modelValue":i[7]||(i[7]=r=>e.form.edu_teacher_email=r),autocomplete:"off",placeholder:"Your Email"},null,512),[[v,e.form.edu_teacher_email]])])):_("",!0),t("button",{type:"submit",class:x(["mt-5 w-full border p-2 text-white rounded-[4px] hover:bg-gray-700",e.submitting?"bg-gray-800":"bg-gray-800 hover:bg-gray-700"]),onClick:i[8]||(i[8]=r=>e.submitting?"":e.saveResult())},c(e.submitting?"Submitting...":"Submit"),3),t("div",fe,[e.submitting?(o(),n("span",ge,"Please do not close your browser or current tab")):_("",!0)])])])):_("",!0),e.show_thank_you?(o(),n("div",we,[t("div",xe,[t("div",be,[ye,ve,t("h3",ke,c(e.$page.props.final_message),1)]),t("button",{type:"submit",class:"mt-5 w-full border p-2 bg-gray-800 text-white rounded-[4px] hover:bg-gray-700",onClick:i[9]||(i[9]=(...r)=>e.returnHome&&e.returnHome(...r))},"Return Home")])])):_("",!0),e.show_quiz?(o(),n("div",qe,[t("div",Ce,[t("div",Ae,[t("span",Me,c(s.dt_details.name),1),t("nav",Le,[t("p",Se,"Question "+c(e.dt_index+1)+" of "+c(s.dt_list.length),1),t("ol",Te,[(o(!0),n(h,null,g(s.dt_list,(r,l)=>(o(),n("li",{key:l},[e.current.answer_records[l]&&e.current.answer_records[l].correct?(o(),n("div",He,[t("span",je,c(l),1)])):e.dt_index==l?(o(),n("div",Ve,[Be,De,t("span",ze,c(l),1)])):e.current.answer_records[l]&&!e.current.answer_records[l].correct?(o(),n("div",$e,[t("span",Pe,c(l),1)])):(o(),n("div",Fe,[t("span",Ee,c(l),1)]))]))),128))])]),e.current.question!=""&&e.current.question_type!=4?(o(),n("div",Ie,[t("div",Ne,[t("h1",Oe,c(e.current.question),1)])])):_("",!0),e.current.remarks?(o(),n("div",Ue,[t("span",Ze,"* "+c(e.current.remarks)+" *",1)])):_("",!0),e.current.question_image?(o(),n("div",Re,[t("img",{src:"/storage/"+e.current.question_image,class:"select-none rounded-lg",alt:""},null,8,We)])):_("",!0),e.current.question_type==1?(o(),n("div",Ge,[(o(!0),n(h,null,g(e.current.answers,(r,l)=>(o(),n("div",{class:"select-none text-white flex justify-center items-center rounded bg-indigo-600 hover:bg-indigo-500 hover:text-white cursor-pointer drop-shadow",onClick:b=>e.saveSingleChoice(l)},[r.image_name?(o(),n("div",{key:0,class:"p-1 w-32",innerHTML:r.answer},null,8,Ye)):(o(),n("div",Qe,[t("span",{innerHTML:r.answer},null,8,Je)]))],8,Ke))),256))])):_("",!0),e.current.question_type==2?(o(),n("div",Xe,[t("div",et,[(o(!0),n(h,null,g(e.current.answers,(r,l)=>(o(),n("div",{class:x(["flex justify-center items-center rounded cursor-pointer drop-shadow",e.checkSingleValueExistsInArray(l)?"text-white bg-indigo-600":"text-white bg-indigo-400"]),onClick:b=>e.selectMultipleChoices(l)},[r.image_name?(o(),n("div",{key:0,class:"p-1 w-32",innerHTML:r.answer},null,8,st)):(o(),n("div",rt,[t("span",{innerHTML:r.answer},null,8,it)]))],10,tt))),256))]),t("div",ot,[y(A,{onClick:i[10]||(i[10]=r=>e.saveMultipleChoices())},{default:k(()=>[p("Confirm Answers")]),_:1})])])):_("",!0),e.current.question_type==3?(o(),n("div",nt,[t("div",at,[lt,y(a,{class:"flex flex-wrap gap-4 border-2 p-3 rounded border-gray-300 min-h-[30px]",list:e.current.matrix_items,group:"matrix_sorting",onChange:e.log},{default:k(()=>[(o(!0),n(h,null,g(e.current.matrix_items,r=>(o(),n("div",{class:"flex items-center border px-2 py-1 rounded border-indigo-400 bg-indigo-300 cursor-grab focus:cursor-grab criterion_image",innerHTML:r},null,8,dt))),256))]),_:1},8,["list","onChange"])]),(o(!0),n(h,null,g(e.current.answers,(r,l)=>(o(),n("div",ct,[t("div",ht,[t("div",_t,[r.criterion.image_name!=null?(o(),n("div",{key:0,class:"p-1 w-[5rem]",innerHTML:r.criterion.value},null,8,ut)):(o(),n("div",mt,[t("span",{innerHTML:r.criterion.value},null,8,pt)]))])]),ft,t("div",gt,[y(a,{class:"flex flex-wrap items-center border-2 border-indigo-400 min-h-[5rem] min-w-[12rem] rounded-lg space-x-2 p-3",list:e.selected_answer.matrix_sorting[l],group:"matrix_sorting",onChange:e.log},{default:k(()=>[(o(!0),n(h,null,g(e.selected_answer.matrix_sorting[l],b=>(o(),n("div",{class:"flex items-center border px-2 py-1 rounded border-indigo-400 bg-indigo-300 cursor-grab focus:cursor-grab criterion_image",innerHTML:b},null,8,wt))),256))]),_:2},1032,["list","onChange"])])]))),256)),t("div",xt,[y(A,{onClick:i[11]||(i[11]=r=>e.saveMatrixSorting())},{default:k(()=>[p("Confirm Answers")]),_:1})])])):_("",!0),e.current.question_type==4?(o(),n("div",bt,[t("div",yt,[t("h1",vt,[(o(!0),n(h,null,g(e.sentence_parts,(r,l)=>(o(),n(h,{key:l},[r.input?m((o(),n("input",{key:0,type:"text","onUpdate:modelValue":b=>r.answer=b,style:S([r.answer.length<2?"width: 2.6rem":"width: "+(r.answer.length*1+2)+"rem"]),class:"text-center h-8 sm:h-10 focus:ring-0 focus:border-indigo-300 font-mono font-bold rounded-md text-sm sm:text-lg border-gray-300 tracking-widest"},null,12,kt)),[[v,r.answer]]):(o(),n(h,{key:1},[p(c(r.text),1)],64))],64))),128))])]),t("div",qt,[y(A,{onClick:i[12]||(i[12]=r=>e.saveFillInBlankAnswers())},{default:k(()=>[p("Confirm Answers")]),_:1})])])):_("",!0)])])])):_("",!0)])])],64)}}});export{Ut as default};
