import{B as C}from"./Authenticated-e54ea1c2.js";import{H as k,L as V}from"./@inertiajs-dde9cc4c.js";import{_ as v}from"./Card-1dc3a135.js";import{a as $,_ as q}from"./index-2c91e426.js";import{_ as R}from"./AlertTitle-a4df8a5b.js";import U from"./SingleChoice-5e3c9ad4.js";import B from"./MultipleChoices-0a5b77c9.js";import D from"./MatrixSorting-af4e2e1c.js";import{e as I}from"./@radix-icons-4975f794.js";import{y,x as o,u as m,Q as l,F as L,be as f,t as p,W as a,z as t,v as g,C as d}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-d95f58a2.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-9e9c0f86.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./index-a78bcd26.js";import"./DialogDescription-befd605e.js";import"./lucide-vue-next-f56ff345.js";import"./index-0312670b.js";const _={class:"grid grid-cols-1 xl:grid-cols-3 gap-4"},S={class:"flex flex-col space-y-2"},T={class:"grid grid-cols-1 gap-4"},F={class:"space-y-1 text-center"},M={class:"flex text-sm text-gray-600"},c={class:"browse text-indigo-400 hover:text-indigo-800 cursor-pointer font-bold"},N={ref:"inside_image",id:"file",class:"sr-only",type:"file",accept:"image/*"},A={key:1,class:"w-1/4 relative group mt-2"},E={class:"absolute w-full h-full hover:bg-black hover:opacity-75 hidden group-hover:block"},P=["src"],b=window.URL||window.webkitURL,j=/^image\/\w+$/,H={components:{Head:k,Link:V},data(){return{data:{type:Object,default:()=>({})},showUpload:!0,showImage:!1,question_types:[{id:1,name:"Single Choice"},{id:2,name:"Multiple Choices"},{id:4,name:"Fill in the Blank"}],form:{dt_id:this.$page.props.diagnostic_test_id||"",redirect_url:this.$page.props.redirect_url||"",category_id:"",redirect_yes:"",redirect_no:"",question_type:"",question:"",remarks:"",image_url:"",image_file:"",question_answer_data:[]}}},methods:{submit(){this.$inertia.post(route("dt.settings.details.store"),this.form,{preserveState:!0})},read(s,r){return new Promise((e,n)=>{if(!s){e();return}j.test(s.type)?b?e({loaded:!0,name:s.name,type:s.type,url:b.createObjectURL(s)}):n(new Error("Your browser is not supported.")):n(new Error("Please select a valid image file."))})},change({target:s}){const{files:r}=s;r&&r.length>0&&this.read(r[0],s).then(e=>{this.form.image_url=e.url,this.form.image_file=r,this.showUpload=!1,this.showImage=!0,this.update(e)}).catch(this.alert)},dragover(s){s.preventDefault()},drop(s){const{files:r}=s.dataTransfer;s.preventDefault(),r&&r.length>0&&this.read(r[0],s).then(e=>{this.form.image_url=e.url,this.form.image_file=r,this.showUpload=!1,this.showImage=!0,this.update(e)}).catch(this.alert)},alert(s){window.alert(s&&s.message?s.message:s)},update(s){Object.assign(this.data,s)},removeImage(){this.form.image_url="",this.showImage=!1,this.showUpload=!0},appendToForm(s){this.form.question_answer_data=s}}},je=Object.assign(H,{__name:"Create",setup(s){return(r,e)=>{const n=f("Label"),u=f("ComboBox"),w=f("Textarea"),h=f("Button");return p(),y(L,null,[o(m(k),{title:"Diagnostic Test"}),o(C,null,{header:l(()=>e[11]||(e[11]=[])),default:l(()=>[o(v,null,{title:l(()=>e[12]||(e[12]=[a("Basic Information")])),content:l(()=>[t("div",_,[t("div",null,[o(n,null,{default:l(()=>e[13]||(e[13]=[a("Category"),t("span",{class:"text-red-500"},"*",-1)])),_:1}),o(u,{items:r.$page.props.diagnostic_test_categories,"label-property":"name","value-property":"id",error:r.$page.props.errors.category_id,modelValue:r.form.category_id,"onUpdate:modelValue":e[0]||(e[0]=i=>r.form.category_id=i),"select-placeholder":"Select Category","search-placeholder":"Search category..."},null,8,["items","error","modelValue"])]),t("div",null,[o(n,null,{default:l(()=>e[14]||(e[14]=[a("Redirection (Correct)"),t("span",{class:"text-red-500"},"*",-1)])),_:1}),o(u,{items:r.$page.props.diagnostic_test_list,"label-property":"question","value-property":"id",error:r.$page.props.errors.redirect_yes,modelValue:r.form.redirect_yes,"onUpdate:modelValue":e[1]||(e[1]=i=>r.form.redirect_yes=i),"select-placeholder":"Default (No Redirection)","search-placeholder":"Search redirection..."},null,8,["items","error","modelValue"])]),t("div",null,[o(n,null,{default:l(()=>e[15]||(e[15]=[a("Redirection (Wrong)"),t("span",{class:"text-red-500"},"*",-1)])),_:1}),o(u,{items:r.$page.props.diagnostic_test_list,"label-property":"question","value-property":"id",error:r.$page.props.errors.redirect_no,modelValue:r.form.redirect_no,"onUpdate:modelValue":e[2]||(e[2]=i=>r.form.redirect_no=i),"select-placeholder":"Default (No Redirection)","search-placeholder":"Search redirection..."},null,8,["items","error","modelValue"])])])]),_:1}),o(v,null,{title:l(()=>e[16]||(e[16]=[a("Question Details")])),content:l(()=>[r.form.question_type==4?(p(),g(m(q),{key:0,class:"bg-sky-200 text-slate-900 mb-3"},{default:l(()=>[o(m(I),{class:"h-4 w-4"}),o(m(R),{class:"font-bold mb-3 underline"},{default:l(()=>e[17]||(e[17]=[a("Notes")])),_:1}),o(m($),null,{default:l(()=>[t("div",S,[o(n,null,{default:l(()=>e[18]||(e[18]=[a("Please wrap the answer with [ ] for the system to automatically replace it with blank spaces, but only in the question field.")])),_:1}),o(n,{class:"font-semibold text-sky-900"},{default:l(()=>e[19]||(e[19]=[a("ALFA like to [play] football.")])),_:1}),e[22]||(e[22]=t("br",null,null,-1)),o(n,null,{default:l(()=>e[20]||(e[20]=[a("Use | to set multiple correct answers.")])),_:1}),o(n,{class:"font-semibold text-sky-900"},{default:l(()=>e[21]||(e[21]=[a("ALFA like to [eat|drink|sleep].")])),_:1})])]),_:1})]),_:1})):d("",!0),t("div",T,[t("div",null,[o(n,null,{default:l(()=>e[23]||(e[23]=[a("Type"),t("span",{class:"text-red-500"},"*",-1)])),_:1}),o(u,{items:r.question_types,"label-property":"name","value-property":"id",error:r.$page.props.errors.question_type,modelValue:r.form.question_type,"onUpdate:modelValue":e[3]||(e[3]=i=>r.form.question_type=i),"select-placeholder":"Select Type","search-placeholder":"Search type..."},null,8,["items","error","modelValue"])]),t("div",null,[o(n,null,{default:l(()=>e[24]||(e[24]=[a("Question"),t("span",{class:"text-red-500"},"*",-1)])),_:1}),o(w,{rows:"3",error:r.$page.props.errors.question,modelValue:r.form.question,"onUpdate:modelValue":e[4]||(e[4]=i=>r.form.question=i)},null,8,["error","modelValue"])]),t("div",null,[o(n,null,{default:l(()=>e[25]||(e[25]=[a("Remarks / Additional Notes"),t("span",{class:"text-red-500"},"*",-1)])),_:1}),o(w,{rows:"3",error:r.$page.props.errors.remarks,modelValue:r.form.remarks,"onUpdate:modelValue":e[5]||(e[5]=i=>r.form.remarks=i)},null,8,["error","modelValue"])]),t("div",null,[o(n,null,{default:l(()=>e[26]||(e[26]=[a("Question Image"),t("span",{class:"text-red-500"},"*",-1)])),_:1}),r.showUpload?(p(),y("div",{key:0,class:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",onChange:e[6]||(e[6]=(...i)=>r.change&&r.change(...i)),onDragover:e[7]||(e[7]=(...i)=>r.dragover&&r.dragover(...i)),onDrop:e[8]||(e[8]=(...i)=>r.drop&&r.drop(...i))},[t("div",F,[e[29]||(e[29]=t("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[t("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),t("div",M,[t("label",c,[e[27]||(e[27]=a("Click here ")),t("input",N,null,512)]),e[28]||(e[28]=t("p",{class:"pl-1"},"or drag and drop an image",-1))]),e[30]||(e[30]=t("p",{class:"text-xs text-gray-500"},"Image Format : PNG, JPG",-1))])],32)):d("",!0),r.showImage?(p(),y("div",A,[t("div",E,[t("div",{class:"absolute cursor-pointer top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 h-16 w-16 hover:text-red-500 text-red-600 transition ease-in-out hover:-translate-1 hover:scale-110 duration-100",alt:"Remove Image",onClick:e[9]||(e[9]=(...i)=>r.removeImage&&r.removeImage(...i))},e[31]||(e[31]=[t("div",{class:"pl-[0.65rem]"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})])],-1),t("span",{class:"text-white"},"Remove",-1)]))]),t("img",{class:"rounded w-full",src:r.form.image_url,alt:""},null,8,P)])):d("",!0)])])]),_:1}),r.form.question_type==1?(p(),g(U,{key:0,onReceivedData:r.appendToForm,prop_answers:[],action:"create"},null,8,["onReceivedData"])):d("",!0),r.form.question_type==2?(p(),g(B,{key:1,onReceivedData:r.appendToForm,prop_answers:[],action:"create"},null,8,["onReceivedData"])):d("",!0),r.form.question_type==3?(p(),g(D,{key:2,onReceivedData:r.appendToForm,prop_answers:[],action:"create"},null,8,["onReceivedData"])):d("",!0),o(v,null,{footer:l(()=>[o(h,{variant:"outline",onClick:e[10]||(e[10]=i=>r.$inertia.get(r.$page.props.redirect_url))},{default:l(()=>e[32]||(e[32]=[a("Cancel")])),_:1}),o(h,{onClick:r.submit},{default:l(()=>e[33]||(e[33]=[a("Save")])),_:1},8,["onClick"])]),_:1})]),_:1})],64)}}});export{je as default};
