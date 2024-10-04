import{_ as A}from"./Card-e481dfab.js";import{_ as B}from"./index-a02644ab.js";import{_ as P}from"./app-ef5f5861.js";import{C as b,c as F}from"./lucide-vue-next-7b48dc26.js";import{t as f,O as l,b7 as a,q as p,y as i,U as _,v as r,x as d,I as M,B as w,J as S,F as N}from"./@vue-39dc9ff3.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./axios-1779699b.js";import"./pusher-js-68b5c933.js";import"./@inertiajs-2b766590.js";import"./lodash.isequal-0acc53e7.js";import"./vue-46d666fa.js";import"./lodash.clonedeep-12c784b4.js";import"./qs-45a3326f.js";import"./side-channel-401220dd.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-ac0241aa.js";import"./deepmerge-89e33937.js";import"./nprogress-87ee1729.js";import"./@vueform-8fb84cf1.js";import"./@vuepic-a83e4355.js";import"./@babel-1b80a44a.js";import"./cropperjs-042b647f.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-e9930861.js";import"./radix-vue-a603168c.js";import"./@floating-ui-c05b1c1f.js";import"./@internationalized-2f03b566.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-c14271ca.js";import"./@radix-icons-9ff33614.js";const U={components:{Card:A,PlusCircle:b,Badge:B,MinusCircle:F},props:{action:String,prop_answers:Object},mounted(){this.init()},data(){return{images_to_delete:[],answers:[],correct_answer:this.prop_answers?Number(this.prop_answers.correct_answer):""}},watch:{correct_answer:{handler(){this.sendDataToParent()},immediate:!0}},methods:{init(){this.action==="edit"?this.reconstructAnswers(this.prop_answers.answers):this.answers.push({answer:"",image_name:"",image_file:""})},addAnswer(){this.answers.push({answer:"",image_name:"",image_file:""})},deleteAnswer(e){this.pushImageToDelete(e),this.answers.splice(e,1),this.correct_answer="",this.sendDataToParent(e)},sendDataToParent(e){this.$emit("receivedData",{question_type:1,answers:this.answers,correct_answer:this.correct_answer,images_to_delete:this.images_to_delete})},openFileModal(e){this.$refs[e][0].click()},handleFile(e,t){if(e.target.files[0]&&e.target.files[0].type.match(/^image\/(jpeg|png)$/)){const h=e.target.files[0].name.split(".").pop(),o=Math.floor(Date.now()/1e3).toString()+"."+h;this.answers[t].image_file=new File([e.target.files[0]],o,{type:e.target.files[0].type}),this.answers[t].image_name=this.answers[t].image_file.name,this.answers[t].answer='<img src="/storage/diagnostic_test_photo/'+this.answers[t].image_file.name+'">'}else alert("Only images are allowed!");this.sendDataToParent(t)},removeImage(e){this.correct_answer="",this.$refs["file_"+e][0].value=null,this.pushImageToDelete(e),this.clearAnswerData(e),this.sendDataToParent(e)},clearAnswerData(e){this.answers[e].image_file="",this.answers[e].image_name="",this.answers[e].answer=""},pushImageToDelete(e){this.answers[e]&&this.answers[e].image_name&&this.answers[e].image_name!=""&&!this.answers[e].image_file&&this.images_to_delete.push(this.answers[e].image_name)},reconstructAnswers(e){e?Object.keys(e).forEach(t=>{this.answers.push(e[t])}):this.answers.push({answer:"",image_name:"",image_file:""})}}},j={class:"flex justify-between items-center"},q=i("span",{class:"ml-1 hidden sm:block"},"Add",-1),G={class:"grid grid-cols-1 gap-4 divide-y"},O={class:"flex items-start space-x-6 pt-6"},R={class:"flex space-x-2 items-center mt-3"},$={class:"flex items-center space-x-2"},L={class:"flex flex-col space-y-1"},E={class:"flex"},J=["onChange"],z={key:0,class:"flex"};function H(e,t,h,g,c,o){const C=a("PlusCircle"),u=a("Button"),v=a("RadioGroupItem"),k=a("Label"),y=a("Textarea"),D=a("MinusCircle"),I=a("Badge"),T=a("RadioGroup"),V=a("Card");return p(),f(V,null,{title:l(()=>[i("div",j,[_(" Answers "),r(u,{onClick:t[0]||(t[0]=n=>o.addAnswer())},{default:l(()=>[r(C,{class:"h-4 w-4"}),q]),_:1})])]),content:l(()=>[i("div",G,[r(T,{"default-value":"",modelValue:c.correct_answer,"onUpdate:modelValue":t[1]||(t[1]=n=>c.correct_answer=n)},{default:l(()=>[(p(!0),d(N,null,M(c.answers,(n,s)=>(p(),d("div",O,[i("div",R,[i("div",$,[r(v,{id:s,value:s},null,8,["id","value"]),r(k,{for:s,class:"cursor-pointer"},{default:l(()=>[_("Correct")]),_:2},1032,["for"])])]),i("div",L,[r(y,{cols:"1000",modelValue:c.answers[s].answer,"onUpdate:modelValue":m=>c.answers[s].answer=m,onInput:m=>o.sendDataToParent(s)},null,8,["modelValue","onUpdate:modelValue","onInput"]),i("div",E,[i("input",{type:"file",ref_for:!0,ref:"file_"+s,class:"hidden",onChange:m=>o.handleFile(m,s)},null,40,J),!n.image_file&&!n.image_name?(p(),f(u,{key:0,variant:"secondary",onClick:m=>o.openFileModal("file_"+s)},{default:l(()=>[_("Upload Image")]),_:2},1032,["onClick"])):w("",!0)]),n.image_file||n.image_name?(p(),d("div",z,[r(I,{class:"space-x-1"},{default:l(()=>[i("span",null,S(n.image_name),1),r(D,{class:"h-4 w-4 text-red-500 cursor-pointer",onClick:m=>o.removeImage(s)},null,8,["onClick"])]),_:2},1024)])):w("",!0)]),r(u,{variant:"destructive",onClick:m=>o.deleteAnswer(s)},{default:l(()=>[_("Delete")]),_:2},1032,["onClick"])]))),256))]),_:1},8,["modelValue"])])]),_:1})}const je=P(U,[["render",H]]);export{je as default};