import{q as o,x as l,y as s,v as g,P as c,F as _,C as w,V as m,K as v,bv as y,G as h,t as C,z as p}from"./@vue-b5d553e1.js";import{B as d}from"./Button-a75e4165.js";import"./@inertiajs-df65e401.js";import"./lodash.isequal-f375c7a4.js";import"./vue-c49564f2.js";import"./lodash.clonedeep-375466af.js";import"./qs-120ae55f.js";import"./side-channel-a42ec8a2.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-f7269186.js";import"./deepmerge-89e33937.js";import"./nprogress-b3880cbb.js";import"./app-6e1c5045.js";import"./axios-9cbf0d09.js";import"./pusher-js-1c63de54.js";import"./@vueform-f7c8a6df.js";import"./@vuepic-b5e5f2dc.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-28b7d936.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./radix-vue-09f0b006.js";import"./@floating-ui-6a5ebbeb.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-282a3f07.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-62a42a61.js";const k={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},D={class:"flex justify-between mb-2"},T=s("h1",{class:"text-indigo-800 font-bold"},"Answers",-1),I=s("div",{class:"border-b border-dashed border-indigo-900 mt-1"},null,-1),A={class:"py-5 space-y-6 divide-y divide-gray-500"},E={class:"flex items-start space-x-6 pt-6"},F={class:"block text-sm font-medium text-gray-700"},P={class:"flex flex-col space-y-2"},M=["onUpdate:modelValue"],S={key:0,class:"flex"},$=["onChange"],B={key:1,class:"flex"},V={class:"flex items-center px-3 py-1 rounded-md border border-gray-200 bg-indigo-100 drop-shadow-md"},j={class:"flex flex-1 items-center"},q=s("svg",{class:"h-5 w-5 flex-shrink-0 text-gray-700",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s("path",{"fill-rule":"evenodd",d:"M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z","clip-rule":"evenodd"})],-1),U={class:"ml-2 flex-1 text-gray-700 text-md"},z={class:"flex ml-4 flex-shrink-0 items-center"},N=["onClick"],O={class:"block text-sm font-medium text-gray-700"},R={class:"flex flex-col space-y-2"},G=["onUpdate:modelValue"],K={key:0,class:"flex flex-wrap gap-2"},L={class:"flex items-center px-3 py-1 rounded-md border border-gray-200 bg-indigo-100 drop-shadow-md"},H={class:"flex flex-1 items-center"},J=s("svg",{class:"h-5 w-5 flex-shrink-0 text-gray-700",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s("path",{"fill-rule":"evenodd",d:"M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z","clip-rule":"evenodd"})],-1),Q={class:"ml-2 flex-1 text-gray-700 text-md"},W={class:"flex ml-4 flex-shrink-0 items-center"},X=["onClick"],Y={class:"flex"},Z=["onChange"],x={class:"mt-8"},ee={props:{action:String,prop_answers:Object},mounted(){this.init()},data(){return{images_to_delete:[],answers:[],default_answers:[{criterion:{value:"",image_name:"",image_file:""},element:{value:"",images:[]}}]}},methods:{init(){if(this.prop_answers.answers)if(Array.isArray(this.prop_answers.answers))this.answers=this.prop_answers.answers;else{this.prop_answers.answers;{const e=[];for(let t in this.prop_answers.answers)e.push(this.prop_answers.answers[t]);this.answers=e}}else this.answers=this.default_answers},addAnswer(){this.answers.push({criterion:{value:"",image_name:"",image_file:""},element:{value:"",images:[]}})},deleteAnswer(e){this.pushCriterionImageToDelete(e),this.pushElementImagesToDelete(e),this.answers.splice(e,1),this.sendDataToParent()},sendDataToParent(){this.$emit("receivedData",{question_type:3,answers:this.answers,images_to_delete:this.images_to_delete})},openCriterionFileModal(e){this.$refs[e][0].click()},openElementFileModal(e){this.$refs[e][0].click()},handleCriterionFile(e,t){if(e.target.files[0]&&e.target.files[0].type.match(/^image\/(jpeg|png)$/)){const r=e.target.files[0].name.split(".").pop(),a=Math.floor(Date.now()/1e3).toString()+"."+r;this.answers[t].criterion.image_file=new File([e.target.files[0]],a,{type:e.target.files[0].type}),this.answers[t].criterion.image_name=this.answers[t].criterion.image_file.name,this.answers[t].criterion.value='<img class="h-24" src="/storage/diagnostic_test_photo/'+this.answers[t].criterion.image_file.name+'">'}else alert("Only images are allowed!");e.target.value=null,this.sendDataToParent()},handleElementFile(e,t){if(e.target.files[0]&&e.target.files[0].type.match(/^image\/(jpeg|png)$/)){const r=e.target.files[0].name.split(".").pop(),a=Math.floor(Date.now()/1e3).toString()+"."+r;this.answers[t].element.images.push({file:new File([e.target.files[0]],a,{type:e.target.files[0].type}),name:a});const u=this.answers[t].element.images.map(b=>'<img class="h-24" src="/storage/diagnostic_test_photo/'+b.name+'">').join(", ");this.answers[t].element.value=u}else alert("Only images are allowed!");e.target.value=null,this.sendDataToParent()},removeCriterionImage(e){this.correct_answer=[],this.pushCriterionImageToDelete(e),this.clearCriterionAnswerData(e),this.sendDataToParent(e)},removeElementImage(e,t){this.correct_answer=[],this.pushElementImageToDelete(e,t),this.answers[e].element.images.splice(t,1),this.clearElementAnswerData(e),this.sendDataToParent(e)},clearCriterionAnswerData(e){this.answers[e].criterion.image_file="",this.answers[e].criterion.image_name="",this.answers[e].criterion.value=""},clearElementAnswerData(e){if(this.answers[e].element.images.length>0){const r=this.answers[e].element.images.map(n=>'<img class="h-24 w-24" src="/storage/diagnostic_test_photo/'+n.name+'">').join(", ");this.answers[e].element.value=r}else this.answers[e].element.value=""},pushCriterionImageToDelete(e){this.answers[e].criterion&&this.answers[e].criterion.image_name&&this.answers[e].criterion.image_name!=""&&!this.answers[e].criterion.image_file&&this.images_to_delete.push(this.answers[e].criterion.image_name)},pushElementImageToDelete(e,t){this.answers[e].element.images&&this.answers[e].element.images.length>0&&this.answers[e].element.images[t]&&this.answers[e].element.images[t].name!=""&&!this.answers[e].element.images[t].file&&this.images_to_delete.push(this.answers[e].element.images[t].name)},pushElementImagesToDelete(e){this.answers[e].element.images&&this.answers[e].element.images.length>0&&this.answers[e].element.images.map(t=>{this.images_to_delete.push(t.name)})}}},Oe=Object.assign(ee,{__name:"MatrixSorting",setup(e){return(t,r)=>(o(),l("div",k,[s("div",D,[T,g(d,{onClick:t.addAnswer},{default:c(()=>[m(" Add Answer ")]),_:1},8,["onClick"])]),I,s("div",A,[(o(!0),l(_,null,w(t.answers,(n,i)=>(o(),l("div",E,[s("label",F,[m(" Criterion "),s("div",P,[v(s("textarea",{cols:"1000",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":a=>t.answers[i].criterion.value=a,onInput:r[0]||(r[0]=(...a)=>t.sendDataToParent&&t.sendDataToParent(...a))},h(n),41,M),[[y,t.answers[i].criterion.value]]),!t.answers[i].criterion.image_file&&!t.answers[i].criterion.image_name?(o(),l("div",S,[s("input",{type:"file",ref_for:!0,ref:"criterion_file_"+i,class:"hidden",onChange:a=>t.handleCriterionFile(a,i)},null,40,$),!t.answers[i].criterion.image_file&&!t.answers[i].criterion.image_name?(o(),C(d,{key:0,buttonType:"info",onClick:a=>t.openCriterionFileModal("criterion_file_"+i),class:"py-1.5 px-2"},{default:c(()=>[m("Upload Image")]),_:2},1032,["onClick"])):p("",!0)])):p("",!0),t.answers[i].criterion.image_file||t.answers[i].criterion.image_name?(o(),l("div",B,[s("div",V,[s("div",j,[q,s("span",U,h(t.answers[i].criterion.image_name),1)]),s("div",z,[s("button",{class:"text-sm font-medium text-red-500 hover:text-red-600",onClick:a=>t.removeCriterionImage(i)}," Remove ",8,N)])])])):p("",!0)])]),s("label",O,[m(" Sort Element "),s("div",R,[v(s("textarea",{cols:"1000",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":a=>t.answers[i].element.value=a,onInput:r[1]||(r[1]=(...a)=>t.sendDataToParent&&t.sendDataToParent(...a))},h(n),41,G),[[y,t.answers[i].element.value]]),t.answers[i].element.images.length>0?(o(),l("div",K,[(o(!0),l(_,null,w(t.answers[i].element.images,(a,f)=>(o(),l("div",L,[s("div",H,[J,s("span",Q,h(a.name),1)]),s("div",W,[s("button",{class:"text-sm font-medium text-red-500 hover:text-red-600",onClick:u=>t.removeElementImage(i,f)}," Remove ",8,X)])]))),256))])):p("",!0),s("div",Y,[s("input",{type:"file",ref_for:!0,ref:"element_file_"+i,class:"hidden",onChange:a=>t.handleElementFile(a,i)},null,40,Z),g(d,{buttonType:"info",onClick:a=>t.openElementFileModal("element_file_"+i),class:"py-1.5 px-2"},{default:c(()=>[m("Upload Image")]),_:2},1032,["onClick"])])])]),s("div",x,[g(d,{buttonType:"danger",onClick:a=>t.deleteAnswer(i)},{default:c(()=>[m("Delete")]),_:2},1032,["onClick"])])]))),256))])]))}});export{Oe as default};
