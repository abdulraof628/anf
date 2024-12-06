import{y as n,z as s,x as _,Q as g,F as w,J as v,be as k,t as l,W as p,A as y,bH as b,K as f,v as D,C as u}from"./@vue-d42dd214.js";import{a as T}from"./app-c5b8b27a.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./@inertiajs-7f289881.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./clsx-1229b3e0.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./class-variance-authority-52f2569e.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";const I={props:{action:String,prop_answers:Object},mounted(){this.init()},data(){return{images_to_delete:[],answers:[],default_answers:[{criterion:{value:"",image_name:"",image_file:""},element:{value:"",images:[]}}]}},methods:{init(){if(this.prop_answers.answers)if(Array.isArray(this.prop_answers.answers))this.answers=this.prop_answers.answers;else{this.prop_answers.answers;{const e=[];for(let t in this.prop_answers.answers)e.push(this.prop_answers.answers[t]);this.answers=e}}else this.answers=this.default_answers},addAnswer(){this.answers.push({criterion:{value:"",image_name:"",image_file:""},element:{value:"",images:[]}})},deleteAnswer(e){this.pushCriterionImageToDelete(e),this.pushElementImagesToDelete(e),this.answers.splice(e,1),this.sendDataToParent()},sendDataToParent(){this.$emit("receivedData",{question_type:3,answers:this.answers,images_to_delete:this.images_to_delete})},openCriterionFileModal(e){this.$refs[e][0].click()},openElementFileModal(e){this.$refs[e][0].click()},handleCriterionFile(e,t){if(e.target.files[0]&&e.target.files[0].type.match(/^image\/(jpeg|png)$/)){const m=e.target.files[0].name.split(".").pop(),r=Math.floor(Date.now()/1e3).toString()+"."+m;this.answers[t].criterion.image_file=new File([e.target.files[0]],r,{type:e.target.files[0].type}),this.answers[t].criterion.image_name=this.answers[t].criterion.image_file.name,this.answers[t].criterion.value='<img class="h-24" src="/storage/diagnostic_test_photo/'+this.answers[t].criterion.image_file.name+'">'}else alert("Only images are allowed!");e.target.value=null,this.sendDataToParent()},handleElementFile(e,t){if(e.target.files[0]&&e.target.files[0].type.match(/^image\/(jpeg|png)$/)){const m=e.target.files[0].name.split(".").pop(),r=Math.floor(Date.now()/1e3).toString()+"."+m;this.answers[t].element.images.push({file:new File([e.target.files[0]],r,{type:e.target.files[0].type}),name:r});const d=this.answers[t].element.images.map(i=>'<img class="h-24" src="/storage/diagnostic_test_photo/'+i.name+'">').join(", ");this.answers[t].element.value=d}else alert("Only images are allowed!");e.target.value=null,this.sendDataToParent()},removeCriterionImage(e){this.correct_answer=[],this.pushCriterionImageToDelete(e),this.clearCriterionAnswerData(e),this.sendDataToParent(e)},removeElementImage(e,t){this.correct_answer=[],this.pushElementImageToDelete(e,t),this.answers[e].element.images.splice(t,1),this.clearElementAnswerData(e),this.sendDataToParent(e)},clearCriterionAnswerData(e){this.answers[e].criterion.image_file="",this.answers[e].criterion.image_name="",this.answers[e].criterion.value=""},clearElementAnswerData(e){if(this.answers[e].element.images.length>0){const m=this.answers[e].element.images.map(h=>'<img class="h-24 w-24" src="/storage/diagnostic_test_photo/'+h.name+'">').join(", ");this.answers[e].element.value=m}else this.answers[e].element.value=""},pushCriterionImageToDelete(e){this.answers[e].criterion&&this.answers[e].criterion.image_name&&this.answers[e].criterion.image_name!=""&&!this.answers[e].criterion.image_file&&this.images_to_delete.push(this.answers[e].criterion.image_name)},pushElementImageToDelete(e,t){this.answers[e].element.images&&this.answers[e].element.images.length>0&&this.answers[e].element.images[t]&&this.answers[e].element.images[t].name!=""&&!this.answers[e].element.images[t].file&&this.images_to_delete.push(this.answers[e].element.images[t].name)},pushElementImagesToDelete(e){this.answers[e].element.images&&this.answers[e].element.images.length>0&&this.answers[e].element.images.map(t=>{this.images_to_delete.push(t.name)})}}},A={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},E={class:"flex justify-between mb-2"},x={class:"py-5 space-y-6 divide-y divide-gray-500"},F={class:"flex items-start space-x-6 pt-6"},B={class:"block text-sm font-medium text-gray-700"},M={class:"flex flex-col space-y-2"},P=["onUpdate:modelValue"],S={key:0,class:"flex"},V=["onChange"],j={key:1,class:"flex"},U={class:"flex items-center px-3 py-1 rounded-md border border-gray-200 bg-indigo-100 drop-shadow-md"},q={class:"flex flex-1 items-center"},z={class:"ml-2 flex-1 text-gray-700 text-md"},N={class:"flex ml-4 flex-shrink-0 items-center"},O=["onClick"],R={class:"block text-sm font-medium text-gray-700"},H={class:"flex flex-col space-y-2"},J=["onUpdate:modelValue"],K={key:0,class:"flex flex-wrap gap-2"},L={class:"flex items-center px-3 py-1 rounded-md border border-gray-200 bg-indigo-100 drop-shadow-md"},Q={class:"flex flex-1 items-center"},W={class:"ml-2 flex-1 text-gray-700 text-md"},G={class:"flex ml-4 flex-shrink-0 items-center"},X=["onClick"],Y={class:"flex"},Z=["onChange"],$={class:"mt-8"};function ee(e,t,m,h,a,r){const c=k("BreezeButton");return l(),n("div",A,[s("div",E,[t[3]||(t[3]=s("h1",{class:"text-indigo-800 font-bold"},"Answers",-1)),_(c,{onClick:r.addAnswer},{default:g(()=>t[2]||(t[2]=[p(" Add Answer ")])),_:1},8,["onClick"])]),t[11]||(t[11]=s("div",{class:"border-b border-dashed border-indigo-900 mt-1"},null,-1)),s("div",x,[(l(!0),n(w,null,v(a.answers,(d,i)=>(l(),n("div",F,[s("label",B,[t[6]||(t[6]=p(" Criterion ")),s("div",M,[y(s("textarea",{cols:"1000",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":o=>a.answers[i].criterion.value=o,onInput:t[0]||(t[0]=(...o)=>r.sendDataToParent&&r.sendDataToParent(...o))},f(d),41,P),[[b,a.answers[i].criterion.value]]),!a.answers[i].criterion.image_file&&!a.answers[i].criterion.image_name?(l(),n("div",S,[s("input",{type:"file",ref_for:!0,ref:"criterion_file_"+i,class:"hidden",onChange:o=>r.handleCriterionFile(o,i)},null,40,V),!a.answers[i].criterion.image_file&&!a.answers[i].criterion.image_name?(l(),D(c,{key:0,buttonType:"info",onClick:o=>r.openCriterionFileModal("criterion_file_"+i),class:"py-1.5 px-2"},{default:g(()=>t[4]||(t[4]=[p("Upload Image")])),_:2},1032,["onClick"])):u("",!0)])):u("",!0),a.answers[i].criterion.image_file||a.answers[i].criterion.image_name?(l(),n("div",j,[s("div",U,[s("div",q,[t[5]||(t[5]=s("svg",{class:"h-5 w-5 flex-shrink-0 text-gray-700",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s("path",{"fill-rule":"evenodd",d:"M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z","clip-rule":"evenodd"})],-1)),s("span",z,f(a.answers[i].criterion.image_name),1)]),s("div",N,[s("button",{class:"text-sm font-medium text-red-500 hover:text-red-600",onClick:o=>r.removeCriterionImage(i)}," Remove ",8,O)])])])):u("",!0)])]),s("label",R,[t[9]||(t[9]=p(" Sort Element ")),s("div",H,[y(s("textarea",{cols:"1000",class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300","onUpdate:modelValue":o=>a.answers[i].element.value=o,onInput:t[1]||(t[1]=(...o)=>r.sendDataToParent&&r.sendDataToParent(...o))},f(d),41,J),[[b,a.answers[i].element.value]]),a.answers[i].element.images.length>0?(l(),n("div",K,[(l(!0),n(w,null,v(a.answers[i].element.images,(o,C)=>(l(),n("div",L,[s("div",Q,[t[7]||(t[7]=s("svg",{class:"h-5 w-5 flex-shrink-0 text-gray-700",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s("path",{"fill-rule":"evenodd",d:"M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z","clip-rule":"evenodd"})],-1)),s("span",W,f(o.name),1)]),s("div",G,[s("button",{class:"text-sm font-medium text-red-500 hover:text-red-600",onClick:te=>r.removeElementImage(i,C)}," Remove ",8,X)])]))),256))])):u("",!0),s("div",Y,[s("input",{type:"file",ref_for:!0,ref:"element_file_"+i,class:"hidden",onChange:o=>r.handleElementFile(o,i)},null,40,Z),_(c,{buttonType:"info",onClick:o=>r.openElementFileModal("element_file_"+i),class:"py-1.5 px-2"},{default:g(()=>t[8]||(t[8]=[p("Upload Image")])),_:2},1032,["onClick"])])])]),s("div",$,[_(c,{buttonType:"danger",onClick:o=>r.deleteAnswer(i)},{default:g(()=>t[10]||(t[10]=[p("Delete")])),_:2},1032,["onClick"])])]))),256))])])}const He=T(I,[["render",ee]]);export{He as default};
