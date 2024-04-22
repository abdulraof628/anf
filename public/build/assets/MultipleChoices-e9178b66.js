import{o as n,c as l,d as t,a as h,w as d,F as p,e as w,g as c,h as _,B as f,v as u,q as y,p as g,t as v}from"./app-462a769a.js";import{B as m}from"./Button-b3e73baf.js";import"./_plugin-vue_export-helper-c27b6911.js";const b={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},k={class:"flex justify-between mb-2"},C=t("h1",{class:"text-indigo-800 font-bold"},"Answers",-1),D=t("div",{class:"border-b border-dashed border-indigo-900 mt-1"},null,-1),A={class:"py-5 space-y-6 divide-y divide-gray-500"},T={class:"flex items-start space-x-6 pt-6"},B={class:"flex space-x-2 items-center mt-5"},I=["id","value"],x=["for"],F={class:"flex flex-col space-y-1"},M=["onUpdate:modelValue"],V={class:"flex"},P=["onChange"],$={key:0,class:"flex"},j={class:"flex items-center px-3 py-1 rounded-md border border-gray-200 bg-indigo-100 drop-shadow-md"},S={class:"flex flex-1 items-center"},q=t("svg",{class:"h-5 w-5 flex-shrink-0 text-gray-700",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z","clip-rule":"evenodd"})],-1),N={class:"ml-2 flex-1 text-gray-700 text-md"},O={class:"flex ml-4 flex-shrink-0 items-center"},U=["onClick"],z={props:{action:String,prop_answers:Object},mounted(){this.init()},data(){return{images_to_delete:[],answers:[],correct_answer:Array.isArray(this.prop_answers.correct_answer)?this.prop_answers.correct_answer:[]}},watch:{correct_answer(e){this.sendDataToParent()},immediate:!0},methods:{init(){this.action==="edit"&&this.prop_answers.answers?this.reconstructAnswers(this.prop_answers.answers):this.answers.push({answer:"",image_name:"",image_file:""})},addAnswer(){this.answers.push({answer:"",image_name:"",image_file:""})},deleteAnswer(e){this.pushImageToDelete(e),this.answers.splice(e,1),this.correct_answer=[],this.sendDataToParent()},sendDataToParent(){this.$emit("receivedData",{question_type:2,answers:this.answers,correct_answer:this.correct_answer,images_to_delete:this.images_to_delete})},openFileModal(e){this.$refs[e][0].click()},handleFile(e,s){if(e.target.files[0]&&e.target.files[0].type.match(/^image\/(jpeg|png)$/)){const o=e.target.files[0].name.split(".").pop(),a=Math.floor(Date.now()/1e3).toString()+"."+o;this.answers[s].image_file=new File([e.target.files[0]],a,{type:e.target.files[0].type}),this.answers[s].image_name=this.answers[s].image_file.name,this.answers[s].answer='<img src="/storage/diagnostic_test_photo/'+this.answers[s].image_file.name+'">'}else alert("Only images are allowed!")},removeImage(e){this.correct_answer=[],this.pushImageToDelete(e),this.clearAnswerData(e),this.sendDataToParent(e)},clearAnswerData(e){this.answers[e].image_file="",this.answers[e].image_name="",this.answers[e].answer=""},pushImageToDelete(e){this.answers[e]&&this.answers[e].image_name&&this.answers[e].image_name!=""&&!this.answers[e].image_file&&this.images_to_delete.push(this.answers[e].image_name)},reconstructAnswers(e){e.length>0&&Object.keys(e).forEach(s=>{this.answers.push(e[s])})}}},G=Object.assign(z,{__name:"MultipleChoices",setup(e){return(s,o)=>(n(),l("div",b,[t("div",k,[C,h(m,{onClick:s.addAnswer},{default:d(()=>[c(" Add Answer ")]),_:1},8,["onClick"])]),D,t("div",A,[(n(!0),l(p,null,w(s.answers,(i,r)=>(n(),l("div",T,[t("div",B,[_(t("input",{id:r,value:r,type:"checkbox",class:"focus:ring-0 focus:border-gray-300 h-4 w-4 text-indigo-600 border-gray-300 rounded","onUpdate:modelValue":o[0]||(o[0]=a=>s.correct_answer=a)},null,8,I),[[f,s.correct_answer]]),t("label",{for:r,class:"select-none block text-sm font-medium text-gray-700 cursor-pointer"}," Correct ",8,x)]),t("div",F,[_(t("textarea",{cols:"1000",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":a=>s.answers[r].answer=a,onInput:o[1]||(o[1]=(...a)=>s.sendDataToParent&&s.sendDataToParent(...a))},null,40,M),[[u,s.answers[r].answer]]),t("div",V,[t("input",{type:"file",ref_for:!0,ref:"file_"+r,class:"hidden",onChange:a=>s.handleFile(a,r)},null,40,P),!i.image_file&&!i.image_name?(n(),y(m,{key:0,buttonType:"info",onClick:a=>s.openFileModal("file_"+r),class:"py-1.5 px-2"},{default:d(()=>[c("Upload Image")]),_:2},1032,["onClick"])):g("",!0)]),i.image_file||i.image_name?(n(),l("div",$,[t("div",j,[t("div",S,[q,t("span",N,v(i.image_name),1)]),t("div",O,[t("button",{class:"text-sm font-medium text-red-500 hover:text-red-600",onClick:a=>s.removeImage(r)}," Remove ",8,U)])])])):g("",!0)]),h(m,{buttonType:"danger",onClick:a=>s.deleteAnswer(r),class:"mt-4 py-1 px-2"},{default:d(()=>[c("Delete")]),_:2},1032,["onClick"])]))),256))])]))}});export{G as default};
