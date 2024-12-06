import{_ as V}from"./Card-20f395ce.js";import{_ as I}from"./index-df8b6856.js";import{a as b}from"./app-c5b8b27a.js";import{C as B,g as P}from"./lucide-vue-next-53796c49.js";import{v as f,Q as l,be as i,t as p,z as o,W as _,x as n,y as u,J as M,C as w,K as F,F as S}from"./@vue-d42dd214.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./@inertiajs-7f289881.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";const j={components:{Card:V,PlusCircle:B,Badge:I,MinusCircle:P},props:{action:String,prop_answers:Object},mounted(){this.init()},data(){return{images_to_delete:[],answers:[],correct_answer:Array.isArray(this.prop_answers.correct_answer)?this.prop_answers.correct_answer:[]}},watch:{correct_answer:{handler(){this.sendDataToParent()},immediate:!0}},methods:{init(){this.action==="edit"&&this.prop_answers.answers?this.reconstructAnswers(this.prop_answers.answers):this.answers.push({answer:"",image_name:"",image_file:""})},addAnswer(){this.answers.push({answer:"",image_name:"",image_file:""})},deleteAnswer(e){this.pushImageToDelete(e),this.answers.splice(e,1),this.correct_answer=[],this.sendDataToParent()},sendDataToParent(){this.$emit("receivedData",{question_type:2,answers:this.answers,correct_answer:this.correct_answer,images_to_delete:this.images_to_delete})},openFileModal(e){this.$refs[e][0].click()},handleFile(e,t){if(e.target.files[0]&&e.target.files[0].type.match(/^image\/(jpeg|png)$/)){const h=e.target.files[0].name.split(".").pop(),r=Math.floor(Date.now()/1e3).toString()+"."+h;this.answers[t].image_file=new File([e.target.files[0]],r,{type:e.target.files[0].type}),this.answers[t].image_name=this.answers[t].image_file.name,this.answers[t].answer='<img src="/storage/diagnostic_test_photo/'+this.answers[t].image_file.name+'">'}else alert("Only images are allowed!")},removeImage(e){this.correct_answer=[],this.$refs["file_"+e][0].value=null,this.pushImageToDelete(e),this.clearAnswerData(e),this.sendDataToParent(e)},clearAnswerData(e){this.answers[e].image_file="",this.answers[e].image_name="",this.answers[e].answer=""},pushImageToDelete(e){this.answers[e]&&this.answers[e].image_name&&this.answers[e].image_name!=""&&!this.answers[e].image_file&&this.images_to_delete.push(this.answers[e].image_name)},reconstructAnswers(e){e.length>0&&Object.keys(e).forEach(t=>{this.answers.push(e[t])})},verifyChecked(e){return this.correct_answer.includes(e)}}},N={class:"flex justify-between items-center"},U={class:"grid grid-cols-1 gap-4 divide-y"},q={class:"flex items-start space-x-6 pt-6"},L={class:"flex space-x-2 items-center mt-3"},O={class:"flex flex-col space-y-1"},E={class:"flex"},$=["onChange"],z={key:0,class:"flex"};function J(e,t,h,g,m,r){const C=i("PlusCircle"),d=i("Button"),k=i("Checkbox"),v=i("Label"),y=i("Textarea"),D=i("MinusCircle"),A=i("Badge"),T=i("Card");return p(),f(T,null,{title:l(()=>[o("div",N,[t[3]||(t[3]=_(" Answers ")),n(d,{onClick:t[0]||(t[0]=c=>r.addAnswer())},{default:l(()=>[n(C,{class:"h-4 w-4"}),t[2]||(t[2]=o("span",{class:"ml-1 hidden sm:block"},"Add",-1))]),_:1})])]),content:l(()=>[o("div",U,[(p(!0),u(S,null,M(m.answers,(c,s)=>(p(),u("div",q,[o("div",L,[n(v,{for:s,class:"flex items-center space-x-1 cursor-pointer"},{default:l(()=>[n(k,{class:"mr-1",id:s,value:s,checked:r.verifyChecked(s),modelValue:m.correct_answer,"onUpdate:modelValue":t[1]||(t[1]=a=>m.correct_answer=a)},null,8,["id","value","checked","modelValue"]),t[4]||(t[4]=_(" Correct "))]),_:2},1032,["for"])]),o("div",O,[n(y,{cols:"1000",modelValue:m.answers[s].answer,"onUpdate:modelValue":a=>m.answers[s].answer=a,onInput:r.sendDataToParent},null,8,["modelValue","onUpdate:modelValue","onInput"]),o("div",E,[o("input",{type:"file",ref_for:!0,ref:"file_"+s,class:"hidden",onChange:a=>r.handleFile(a,s)},null,40,$),!c.image_file&&!c.image_name?(p(),f(d,{key:0,variant:"secondary",onClick:a=>r.openFileModal("file_"+s)},{default:l(()=>t[5]||(t[5]=[_("Upload Image")])),_:2},1032,["onClick"])):w("",!0)]),c.image_file||c.image_name?(p(),u("div",z,[n(A,{class:"space-x-1"},{default:l(()=>[o("span",null,F(c.image_name),1),n(D,{class:"h-4 w-4 text-red-500 cursor-pointer",onClick:a=>r.removeImage(s)},null,8,["onClick"])]),_:2},1024)])):w("",!0)]),n(d,{variant:"destructive",onClick:a=>r.deleteAnswer(s)},{default:l(()=>t[6]||(t[6]=[_("Delete")])),_:2},1032,["onClick"])]))),256))])]),_:1})}const je=b(j,[["render",J]]);export{je as default};
