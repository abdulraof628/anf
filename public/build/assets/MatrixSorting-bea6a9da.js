import{c as o,d as t,b as f,w as c,F as _,h as w,o as r,k as m,f as v,l as y,t as h,m as C,j as d}from"./app-5bf0e217.js";import{B as g}from"./Button-3f84f48f.js";import"./_plugin-vue_export-helper-c27b6911.js";const k={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},D={class:"flex justify-between mb-2"},T=t("h1",{class:"text-indigo-800 font-bold"},"Answers",-1),I=t("div",{class:"border-b border-dashed border-indigo-900 mt-1"},null,-1),A={class:"py-5 space-y-6 divide-y divide-gray-500"},E={class:"flex items-start space-x-6 pt-6"},F={class:"block text-sm font-medium text-gray-700"},M={class:"flex flex-col space-y-2"},P=["onUpdate:modelValue"],S={key:0,class:"flex"},$=["onChange"],B={key:1,class:"flex"},j={class:"flex items-center px-3 py-1 rounded-md border border-gray-200 bg-indigo-100 drop-shadow-md"},V={class:"flex flex-1 items-center"},U=t("svg",{class:"h-5 w-5 flex-shrink-0 text-gray-700",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z","clip-rule":"evenodd"})],-1),q={class:"ml-2 flex-1 text-gray-700 text-md"},N={class:"flex ml-4 flex-shrink-0 items-center"},O=["onClick"],z={class:"block text-sm font-medium text-gray-700"},R={class:"flex flex-col space-y-2"},L=["onUpdate:modelValue"],G={key:0,class:"flex flex-wrap gap-2"},H={class:"flex items-center px-3 py-1 rounded-md border border-gray-200 bg-indigo-100 drop-shadow-md"},J={class:"flex flex-1 items-center"},K=t("svg",{class:"h-5 w-5 flex-shrink-0 text-gray-700",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z","clip-rule":"evenodd"})],-1),Q={class:"ml-2 flex-1 text-gray-700 text-md"},W={class:"flex ml-4 flex-shrink-0 items-center"},X=["onClick"],Y={class:"flex"},Z=["onChange"],x={class:"mt-8"},ee={props:{action:String,prop_answers:Object},mounted(){this.init()},data(){return{images_to_delete:[],answers:[],default_answers:[{criterion:{value:"",image_name:"",image_file:""},element:{value:"",images:[]}}]}},methods:{init(){if(this.prop_answers.answers)if(Array.isArray(this.prop_answers.answers))this.answers=this.prop_answers.answers;else{this.prop_answers.answers;{const e=[];for(let s in this.prop_answers.answers)e.push(this.prop_answers.answers[s]);this.answers=e}}else this.answers=this.default_answers},addAnswer(){this.answers.push({criterion:{value:"",image_name:"",image_file:""},element:{value:"",images:[]}})},deleteAnswer(e){this.pushCriterionImageToDelete(e),this.pushElementImagesToDelete(e),this.answers.splice(e,1),this.sendDataToParent()},sendDataToParent(){this.$emit("receivedData",{question_type:3,answers:this.answers,images_to_delete:this.images_to_delete})},openCriterionFileModal(e){this.$refs[e][0].click()},openElementFileModal(e){this.$refs[e][0].click()},handleCriterionFile(e,s){if(e.target.files[0]&&e.target.files[0].type.match(/^image\/(jpeg|png)$/)){const l=e.target.files[0].name.split(".").pop(),i=Math.floor(Date.now()/1e3).toString()+"."+l;this.answers[s].criterion.image_file=new File([e.target.files[0]],i,{type:e.target.files[0].type}),this.answers[s].criterion.image_name=this.answers[s].criterion.image_file.name,this.answers[s].criterion.value='<img class="h-24" src="/storage/diagnostic_test_photo/'+this.answers[s].criterion.image_file.name+'">'}else alert("Only images are allowed!");e.target.value=null,this.sendDataToParent()},handleElementFile(e,s){if(e.target.files[0]&&e.target.files[0].type.match(/^image\/(jpeg|png)$/)){const l=e.target.files[0].name.split(".").pop(),i=Math.floor(Date.now()/1e3).toString()+"."+l;this.answers[s].element.images.push({file:new File([e.target.files[0]],i,{type:e.target.files[0].type}),name:i});const u=this.answers[s].element.images.map(b=>'<img class="h-24" src="/storage/diagnostic_test_photo/'+b.name+'">').join(", ");this.answers[s].element.value=u}else alert("Only images are allowed!");e.target.value=null,this.sendDataToParent()},removeCriterionImage(e){this.correct_answer=[],this.pushCriterionImageToDelete(e),this.clearCriterionAnswerData(e),this.sendDataToParent(e)},removeElementImage(e,s){this.correct_answer=[],this.pushElementImageToDelete(e,s),this.answers[e].element.images.splice(s,1),this.clearElementAnswerData(e),this.sendDataToParent(e)},clearCriterionAnswerData(e){this.answers[e].criterion.image_file="",this.answers[e].criterion.image_name="",this.answers[e].criterion.value=""},clearElementAnswerData(e){if(this.answers[e].element.images.length>0){const l=this.answers[e].element.images.map(n=>'<img class="h-24 w-24" src="/storage/diagnostic_test_photo/'+n.name+'">').join(", ");this.answers[e].element.value=l}else this.answers[e].element.value=""},pushCriterionImageToDelete(e){this.answers[e].criterion&&this.answers[e].criterion.image_name&&this.answers[e].criterion.image_name!=""&&!this.answers[e].criterion.image_file&&this.images_to_delete.push(this.answers[e].criterion.image_name)},pushElementImageToDelete(e,s){this.answers[e].element.images&&this.answers[e].element.images.length>0&&this.answers[e].element.images[s]&&this.answers[e].element.images[s].name!=""&&!this.answers[e].element.images[s].file&&this.images_to_delete.push(this.answers[e].element.images[s].name)},pushElementImagesToDelete(e){this.answers[e].element.images&&this.answers[e].element.images.length>0&&this.answers[e].element.images.map(s=>{this.images_to_delete.push(s.name)})}}},ie=Object.assign(ee,{__name:"MatrixSorting",setup(e){return(s,l)=>(r(),o("div",k,[t("div",D,[T,f(g,{onClick:s.addAnswer},{default:c(()=>[m(" Add Answer ")]),_:1},8,["onClick"])]),I,t("div",A,[(r(!0),o(_,null,w(s.answers,(n,a)=>(r(),o("div",E,[t("label",F,[m(" Criterion "),t("div",M,[v(t("textarea",{cols:"1000",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":i=>s.answers[a].criterion.value=i,onInput:l[0]||(l[0]=(...i)=>s.sendDataToParent&&s.sendDataToParent(...i))},h(n),41,P),[[y,s.answers[a].criterion.value]]),!s.answers[a].criterion.image_file&&!s.answers[a].criterion.image_name?(r(),o("div",S,[t("input",{type:"file",ref_for:!0,ref:"criterion_file_"+a,class:"hidden",onChange:i=>s.handleCriterionFile(i,a)},null,40,$),!s.answers[a].criterion.image_file&&!s.answers[a].criterion.image_name?(r(),C(g,{key:0,buttonType:"info",onClick:i=>s.openCriterionFileModal("criterion_file_"+a),class:"py-1.5 px-2"},{default:c(()=>[m("Upload Image")]),_:2},1032,["onClick"])):d("",!0)])):d("",!0),s.answers[a].criterion.image_file||s.answers[a].criterion.image_name?(r(),o("div",B,[t("div",j,[t("div",V,[U,t("span",q,h(s.answers[a].criterion.image_name),1)]),t("div",N,[t("button",{class:"text-sm font-medium text-red-500 hover:text-red-600",onClick:i=>s.removeCriterionImage(a)}," Remove ",8,O)])])])):d("",!0)])]),t("label",z,[m(" Sort Element "),t("div",R,[v(t("textarea",{cols:"1000",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":i=>s.answers[a].element.value=i,onInput:l[1]||(l[1]=(...i)=>s.sendDataToParent&&s.sendDataToParent(...i))},h(n),41,L),[[y,s.answers[a].element.value]]),s.answers[a].element.images.length>0?(r(),o("div",G,[(r(!0),o(_,null,w(s.answers[a].element.images,(i,p)=>(r(),o("div",H,[t("div",J,[K,t("span",Q,h(i.name),1)]),t("div",W,[t("button",{class:"text-sm font-medium text-red-500 hover:text-red-600",onClick:u=>s.removeElementImage(a,p)}," Remove ",8,X)])]))),256))])):d("",!0),t("div",Y,[t("input",{type:"file",ref_for:!0,ref:"element_file_"+a,class:"hidden",onChange:i=>s.handleElementFile(i,a)},null,40,Z),f(g,{buttonType:"info",onClick:i=>s.openElementFileModal("element_file_"+a),class:"py-1.5 px-2"},{default:c(()=>[m("Upload Image")]),_:2},1032,["onClick"])])])]),t("div",x,[f(g,{buttonType:"danger",onClick:i=>s.deleteAnswer(a)},{default:c(()=>[m("Delete")]),_:2},1032,["onClick"])])]))),256))])]))}});export{ie as default};
