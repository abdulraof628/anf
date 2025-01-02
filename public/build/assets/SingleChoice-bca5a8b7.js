import{_ as A}from"./Card-a7869428.js";import{_ as P}from"./index-8bbdabe5.js";import{a as B}from"./app-ece3933f.js";import{C as b,g as F}from"./lucide-vue-next-53796c49.js";import{v as h,Q as l,be as a,t as p,z as r,W as _,x as i,y as d,J as M,C as g,K as S,F as N}from"./@vue-d42dd214.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./@inertiajs-7f289881.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";const j={components:{Card:A,PlusCircle:b,Badge:P,MinusCircle:F},props:{action:String,prop_answers:Object},mounted(){this.init()},data(){return{images_to_delete:[],answers:[],correct_answer:this.prop_answers?Number(this.prop_answers.correct_answer):""}},watch:{correct_answer:{handler(){this.sendDataToParent()},immediate:!0}},methods:{init(){this.action==="edit"?this.reconstructAnswers(this.prop_answers.answers):this.answers.push({answer:"",image_name:"",image_file:""})},addAnswer(){this.answers.push({answer:"",image_name:"",image_file:""})},deleteAnswer(e){this.pushImageToDelete(e),this.answers.splice(e,1),this.correct_answer="",this.sendDataToParent(e)},sendDataToParent(e){this.$emit("receivedData",{question_type:1,answers:this.answers,correct_answer:this.correct_answer,images_to_delete:this.images_to_delete})},openFileModal(e){this.$refs[e][0].click()},handleFile(e,t){if(e.target.files[0]&&e.target.files[0].type.match(/^image\/(jpeg|png)$/)){const f=e.target.files[0].name.split(".").pop(),o=Math.floor(Date.now()/1e3).toString()+"."+f;this.answers[t].image_file=new File([e.target.files[0]],o,{type:e.target.files[0].type}),this.answers[t].image_name=this.answers[t].image_file.name,this.answers[t].answer='<img src="/storage/diagnostic_test_photo/'+this.answers[t].image_file.name+'">'}else alert("Only images are allowed!");this.sendDataToParent(t)},removeImage(e){this.correct_answer="",this.$refs["file_"+e][0].value=null,this.pushImageToDelete(e),this.clearAnswerData(e),this.sendDataToParent(e)},clearAnswerData(e){this.answers[e].image_file="",this.answers[e].image_name="",this.answers[e].answer=""},pushImageToDelete(e){this.answers[e]&&this.answers[e].image_name&&this.answers[e].image_name!=""&&!this.answers[e].image_file&&this.images_to_delete.push(this.answers[e].image_name)},reconstructAnswers(e){e?Object.keys(e).forEach(t=>{this.answers.push(e[t])}):this.answers.push({answer:"",image_name:"",image_file:""})}}},G={class:"flex justify-between items-center"},R={class:"grid grid-cols-1 gap-4 divide-y"},U={class:"flex items-start space-x-6 pt-6"},$={class:"flex space-x-2 items-center mt-3"},q={class:"flex items-center space-x-2"},L={class:"flex flex-col space-y-1"},O={class:"flex"},E=["onChange"],z={key:0,class:"flex"};function J(e,t,f,w,c,o){const C=a("PlusCircle"),u=a("Button"),v=a("RadioGroupItem"),k=a("Label"),y=a("Textarea"),D=a("MinusCircle"),I=a("Badge"),T=a("RadioGroup"),V=a("Card");return p(),h(V,null,{title:l(()=>[r("div",G,[t[3]||(t[3]=_(" Answers ")),i(u,{onClick:t[0]||(t[0]=n=>o.addAnswer())},{default:l(()=>[i(C,{class:"h-4 w-4"}),t[2]||(t[2]=r("span",{class:"ml-1 hidden sm:block"},"Add",-1))]),_:1})])]),content:l(()=>[r("div",R,[i(T,{"default-value":"",modelValue:c.correct_answer,"onUpdate:modelValue":t[1]||(t[1]=n=>c.correct_answer=n)},{default:l(()=>[(p(!0),d(N,null,M(c.answers,(n,s)=>(p(),d("div",U,[r("div",$,[r("div",q,[i(v,{id:s,value:s},null,8,["id","value"]),i(k,{for:s,class:"cursor-pointer"},{default:l(()=>t[4]||(t[4]=[_("Correct")])),_:2},1032,["for"])])]),r("div",L,[i(y,{cols:"1000",modelValue:c.answers[s].answer,"onUpdate:modelValue":m=>c.answers[s].answer=m,onInput:m=>o.sendDataToParent(s)},null,8,["modelValue","onUpdate:modelValue","onInput"]),r("div",O,[r("input",{type:"file",ref_for:!0,ref:"file_"+s,class:"hidden",onChange:m=>o.handleFile(m,s)},null,40,E),!n.image_file&&!n.image_name?(p(),h(u,{key:0,variant:"secondary",onClick:m=>o.openFileModal("file_"+s)},{default:l(()=>t[5]||(t[5]=[_("Upload Image")])),_:2},1032,["onClick"])):g("",!0)]),n.image_file||n.image_name?(p(),d("div",z,[i(I,{class:"space-x-1"},{default:l(()=>[r("span",null,S(n.image_name),1),i(D,{class:"h-4 w-4 text-red-500 cursor-pointer",onClick:m=>o.removeImage(s)},null,8,["onClick"])]),_:2},1024)])):g("",!0)]),i(u,{variant:"destructive",onClick:m=>o.deleteAnswer(s)},{default:l(()=>t[6]||(t[6]=[_("Delete")])),_:2},1032,["onClick"])]))),256))]),_:1},8,["modelValue"])])]),_:1})}const Ge=B(j,[["render",J]]);export{Ge as default};
