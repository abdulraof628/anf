import{B as k}from"./Authenticated-f3f73889.js";import{H as b,L as c}from"./@inertiajs-7f289881.js";import{_}from"./Card-c7bd5922.js";import{a as q,_ as V}from"./index-765b9be2.js";import{_ as C}from"./AlertTitle-ee9a73ae.js";import $ from"./SingleChoice-eb3e5569.js";import R from"./MultipleChoices-b3b14f56.js";import L from"./MatrixSorting-67598850.js";import{e as U}from"./@radix-icons-4975f794.js";import{y as h,x as i,u as m,Q as s,F as S,be as g,t as d,W as l,z as o,v as f,C as p}from"./@vue-d42dd214.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-c289c940.js";import"./axios-1779699b.js";import"./pusher-js-d90fcbf8.js";import"./laravel-echo-96cacb8d.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-2b1a9f82.js";import"./DialogDescription-c70040de.js";import"./lucide-vue-next-53796c49.js";import"./index-127b469d.js";const E={class:"grid grid-cols-1 xl:grid-cols-3 gap-4"},I={class:"flex flex-col space-y-2"},B={class:"grid grid-cols-1 gap-4"},D={class:"space-y-1 text-center"},T={class:"flex text-sm text-gray-600"},F={class:"browse text-indigo-400 hover:text-indigo-800 cursor-pointer font-bold"},M={ref:"inside_image",id:"file",class:"sr-only",type:"file",accept:"image/*"},N={key:1,class:"w-1/4 relative group mt-2"},j={class:"absolute w-full h-full hover:bg-black hover:opacity-75 hidden group-hover:block"},A=["src"],w=window.URL||window.webkitURL,P=/^image\/\w+$/,O={components:{Head:b,Link:c},props:{dt_id:String,test_id:String,diagnostic_test_info:Object,diagnostic_test_answers:Object,redirect_url:String},data(){return{data:{type:Object,default:()=>({})},showUpload:this.$page.props.diagnostic_test_info.question_image===null||this.$page.props.diagnostic_test_info.question_image==="",showImage:this.$page.props.diagnostic_test_info.question_image!==null||this.$page.props.diagnostic_test_info.question_image!=="",question_types:[{id:1,name:"Single Choice"},{id:2,name:"Multiple Choices"},{id:4,name:"Fill in the Blank"}],form:{dt_id:this.dt_id?this.dt_id:"",id:this.diagnostic_test_info?this.diagnostic_test_info.id:"",category_id:this.diagnostic_test_info?this.diagnostic_test_info.category_id:"",redirect_yes:this.diagnostic_test_info.redirect_yes_id!=null?this.diagnostic_test_info.redirect_yes_id:"",redirect_no:this.diagnostic_test_info.redirect_no_id!=null?this.diagnostic_test_info.redirect_no_id:"",question_type:this.diagnostic_test_info?this.diagnostic_test_info.question_type:"",question:this.diagnostic_test_info?this.diagnostic_test_info.question:"",remarks:this.diagnostic_test_info?this.diagnostic_test_info.remarks:"",delete_image:!1,image_url:"",image_file:"",question_answer_data:this.diagnostic_test_answers?this.diagnostic_test_answers:[]}}},methods:{submit(){this.$inertia.post(route("dt.settings.details.update"),this.form,{preserveState:!0})},read(r,t){return new Promise((e,n)=>{if(!r){e();return}P.test(r.type)?w?e({loaded:!0,name:r.name,type:r.type,url:w.createObjectURL(r)}):n(new Error("Your browser is not supported.")):n(new Error("Please select a valid image file."))})},change({target:r}){const{files:t}=r;t&&t.length>0&&this.read(t[0],r).then(e=>{this.form.image_url=e.url,this.form.image_file=t,this.showUpload=!1,this.showImage=!0,this.update(e)}).catch(this.alert)},dragover(r){r.preventDefault()},drop(r){const{files:t}=r.dataTransfer;r.preventDefault(),t&&t.length>0&&this.read(t[0],r).then(e=>{this.form.image_url=e.url,this.form.image_file=t,this.showUpload=!1,this.showImage=!0,this.update(e)}).catch(this.alert)},alert(r){window.alert(r&&r.message?r.message:r)},update(r){Object.assign(this.data,r)},removeImage(){this.form.image_url="",this.$page.props.diagnostic_test_info.question_image!=null&&(this.form.delete_image=!0),this.showImage=!1,this.showUpload=!0},dtEdit(){this.$inertia.get(route("dt.settings.details"),{dt_id:this.dt_id},{preserveScroll:!0})},appendToForm(r){this.form.question_answer_data=r},imageLoadError(){this.showImage=!1,this.showUpload=!0}}},Oe=Object.assign(O,{__name:"Edit",setup(r){return(t,e)=>{const n=g("Label"),u=g("ComboBox"),v=g("Textarea"),y=g("Button");return d(),h(S,null,[i(m(b),{title:"Diagnostic Test"}),i(k,null,{header:s(()=>e[12]||(e[12]=[])),default:s(()=>[i(_,null,{title:s(()=>e[13]||(e[13]=[l("Basic Information")])),content:s(()=>[o("div",E,[o("div",null,[i(n,null,{default:s(()=>e[14]||(e[14]=[l("Category"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),i(u,{items:t.$page.props.diagnostic_test_categories,"label-property":"name","value-property":"id",error:t.$page.props.errors.category_id,modelValue:t.form.category_id,"onUpdate:modelValue":e[0]||(e[0]=a=>t.form.category_id=a),"select-placeholder":"Select Category","search-placeholder":"Search category..."},null,8,["items","error","modelValue"])]),o("div",null,[i(n,null,{default:s(()=>e[15]||(e[15]=[l("Redirection (Correct)"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),i(u,{items:t.$page.props.diagnostic_test_list,"label-property":"question","value-property":"id",error:t.$page.props.errors.redirect_yes,modelValue:t.form.redirect_yes,"onUpdate:modelValue":e[1]||(e[1]=a=>t.form.redirect_yes=a),"select-placeholder":"Default (No Redirection)","search-placeholder":"Search redirection..."},null,8,["items","error","modelValue"])]),o("div",null,[i(n,null,{default:s(()=>e[16]||(e[16]=[l("Redirection (Wrong)"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),i(u,{items:t.$page.props.diagnostic_test_list,"label-property":"question","value-property":"id",error:t.$page.props.errors.redirect_no,modelValue:t.form.redirect_no,"onUpdate:modelValue":e[2]||(e[2]=a=>t.form.redirect_no=a),"select-placeholder":"Default (No Redirection)","search-placeholder":"Search redirection..."},null,8,["items","error","modelValue"])])])]),_:1}),i(_,null,{title:s(()=>e[17]||(e[17]=[l("Question Details")])),content:s(()=>[t.form.question_type==4?(d(),f(m(V),{key:0,class:"bg-sky-200 text-slate-900 mb-3"},{default:s(()=>[i(m(U),{class:"h-4 w-4"}),i(m(C),{class:"font-bold mb-3 underline"},{default:s(()=>e[18]||(e[18]=[l("Notes")])),_:1}),i(m(q),null,{default:s(()=>[o("div",I,[i(n,null,{default:s(()=>e[19]||(e[19]=[l("Please wrap the answer with [ ] for the system to automatically replace it with blank spaces, but only in the question field.")])),_:1}),i(n,{class:"font-semibold text-sky-900"},{default:s(()=>e[20]||(e[20]=[l("ALFA like to [play] football.")])),_:1}),e[23]||(e[23]=o("br",null,null,-1)),i(n,null,{default:s(()=>e[21]||(e[21]=[l("Use | to set multiple correct answers.")])),_:1}),i(n,{class:"font-semibold text-sky-900"},{default:s(()=>e[22]||(e[22]=[l("ALFA like to [eat|drink|sleep].")])),_:1})])]),_:1})]),_:1})):p("",!0),o("div",B,[o("div",null,[i(n,null,{default:s(()=>e[24]||(e[24]=[l("Type"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),i(u,{items:t.question_types,"label-property":"name","value-property":"id",error:t.$page.props.errors.question_type,modelValue:t.form.question_type,"onUpdate:modelValue":e[3]||(e[3]=a=>t.form.question_type=a),"select-placeholder":"Select Type","search-placeholder":"Search type..."},null,8,["items","error","modelValue"])]),o("div",null,[i(n,null,{default:s(()=>e[25]||(e[25]=[l("Question"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),i(v,{rows:"3",error:t.$page.props.errors.question,modelValue:t.form.question,"onUpdate:modelValue":e[4]||(e[4]=a=>t.form.question=a)},null,8,["error","modelValue"])]),o("div",null,[i(n,null,{default:s(()=>e[26]||(e[26]=[l("Remarks / Additional Notes"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),i(v,{rows:"3",error:t.$page.props.errors.remarks,modelValue:t.form.remarks,"onUpdate:modelValue":e[5]||(e[5]=a=>t.form.remarks=a)},null,8,["error","modelValue"])]),o("div",null,[i(n,null,{default:s(()=>e[27]||(e[27]=[l("Question Image"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),t.showUpload?(d(),h("div",{key:0,class:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",onChange:e[6]||(e[6]=(...a)=>t.change&&t.change(...a)),onDragover:e[7]||(e[7]=(...a)=>t.dragover&&t.dragover(...a)),onDrop:e[8]||(e[8]=(...a)=>t.drop&&t.drop(...a))},[o("div",D,[e[30]||(e[30]=o("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[o("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),o("div",T,[o("label",F,[e[28]||(e[28]=l("Click here ")),o("input",M,null,512)]),e[29]||(e[29]=o("p",{class:"pl-1"},"or drag and drop an image",-1))]),e[31]||(e[31]=o("p",{class:"text-xs text-gray-500"},"Image Format : PNG, JPG",-1))])],32)):p("",!0),t.showImage?(d(),h("div",N,[o("div",j,[o("div",{class:"absolute cursor-pointer top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 h-16 w-16 hover:text-red-500 text-red-600 transition ease-in-out hover:-translate-1 hover:scale-110 duration-100",alt:"Remove Image",onClick:e[9]||(e[9]=(...a)=>t.removeImage&&t.removeImage(...a))},e[32]||(e[32]=[o("div",{class:"pl-[0.65rem]"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})])],-1),o("span",{class:"text-white"},"Remove",-1)]))]),o("img",{class:"rounded w-full",src:t.form.image_url!=""?t.form.image_url:r.diagnostic_test_info.question_image?"/storage/"+r.diagnostic_test_info.question_image:"",alt:"",onError:e[10]||(e[10]=(...a)=>t.imageLoadError&&t.imageLoadError(...a))},null,40,A)])):p("",!0)])])]),_:1}),t.form.question_type==1?(d(),f($,{key:0,onReceivedData:t.appendToForm,prop_answers:r.diagnostic_test_answers,action:"edit"},null,8,["onReceivedData","prop_answers"])):p("",!0),t.form.question_type==2?(d(),f(R,{key:1,onReceivedData:t.appendToForm,prop_answers:r.diagnostic_test_answers,action:"edit"},null,8,["onReceivedData","prop_answers"])):p("",!0),t.form.question_type==3?(d(),f(L,{key:2,onReceivedData:t.appendToForm,prop_answers:r.diagnostic_test_answers,action:"edit"},null,8,["onReceivedData","prop_answers"])):p("",!0),i(_,null,{footer:s(()=>[i(y,{variant:"outline",onClick:e[11]||(e[11]=a=>t.dtEdit())},{default:s(()=>e[33]||(e[33]=[l("Cancel")])),_:1}),i(y,{onClick:t.submit},{default:s(()=>e[34]||(e[34]=[l("Save")])),_:1},8,["onClick"])]),_:1})]),_:1})],64)}}});export{Oe as default};
