import{b5 as S,b6 as A,q as i,x as l,v as a,u as v,P as m,F as p,y as e,B as P,K as n,bu as f,m as h,C as g,G as b,L as x,z as C,V as d}from"./@vue-b5d553e1.js";import{B as j}from"./Authenticated-f12ae66a.js";import{B as _}from"./Button-a75e4165.js";import{H as y,L as B}from"./@inertiajs-df65e401.js";import{s as k}from"./@vueform-f7c8a6df.js";import{e as V}from"./vue-debounce-ed417ae1.js";import"./ApplicationLogo-e2b93f7b.js";import"./app-6e1c5045.js";import"./axios-9cbf0d09.js";import"./pusher-js-1c63de54.js";import"./@vuepic-b5e5f2dc.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-28b7d936.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./radix-vue-09f0b006.js";import"./@floating-ui-6a5ebbeb.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-282a3f07.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-62a42a61.js";import"./lodash.isequal-f375c7a4.js";import"./vue-c49564f2.js";import"./lodash.clonedeep-375466af.js";import"./qs-120ae55f.js";import"./side-channel-a42ec8a2.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-f7269186.js";import"./deepmerge-89e33937.js";import"./nprogress-b3880cbb.js";import"./lucide-vue-next-967cc12e.js";const D={class:"md:grid md:grid-cols-2"},T={class:"md:mt-0 md:col-span-2"},$={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},E={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},U={class:"sm:row-span-3"},M={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},N=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Upload Artwork"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),O={class:"mb-4"},H=e("label",{for:"centre",class:"block text-sm font-bold text-gray-700"},[d(" Student Name "),e("span",{class:"text-red-500"},"*")],-1),I={class:"mt-1 flex rounded-md.shadow-sm"},R={class:"mb-4"},z=e("label",{for:"level",class:"block text-sm font-bold text-gray-700"},[d(" Level "),e("span",{class:"text-red-500"},"*")],-1),F={class:"mt-1 flex rounded-md shadow-sm"},G=e("option",{value:""},"Please Select",-1),W=["value"],Y={class:"mb-4"},q=e("label",{for:"theme_id",class:"block text-sm font-bold text-gray-700"},[d(" Theme "),e("span",{class:"text-red-500"},"*")],-1),J={class:"mt-1 flex rounded-md shadow-sm"},K=["disabled"],X=e("option",{value:""},"Please Select",-1),Q=["value"],Z={class:"mb-4"},ee=e("label",{for:"lesson_id",class:"block text-sm font-bold text-gray-700"},[d(" Lesson "),e("span",{class:"text-red-500"},"*")],-1),te={class:"mt-1 flex rounded-md shadow-sm"},oe=e("option",{value:""},"Please Select",-1),se=["value"],re={class:"mb-4"},ie=e("label",{for:"activity_id",class:"block text-sm font-bold text-gray-700"},[d(" Activity "),e("span",{class:"text-red-500"},"*")],-1),le={class:"mt-1 flex rounded-md shadow-sm"},de=e("option",{value:""},"Please Select",-1),ae=["value"],ne={class:"mb-4 space-y-2"},me=e("label",{class:"block text-sm text-gray-700 font-bold"}," Artwork File ",-1),pe={key:0,class:"rounded-md bg-red-100 p-4"},ce={class:"flex"},ue={class:"flex-shrink-0"},fe=e("div",{class:"ml-3"},[e("h3",{class:"text-sm font-medium text-red-500"},"File is required!")],-1),he={class:"space-y-1 text-center"},ge=e("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[e("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),be={class:"flex text-sm text-gray-600"},_e={class:"browse text-indigo-400 hover:text-indigo-800 cursor-pointer font-bold"},ve={ref:"artwork_file",id:"file",class:"sr-only",type:"file",accept:"image/*"},xe=e("p",{class:"pl-1"},"or drag and drop an image",-1),we=e("p",{class:"text-xs text-gray-500"},"Image Format : PNG, JPG",-1),ye={class:"mb-4"},ke=e("label",{class:"block text-sm text-gray-700 font-bold mb-2"}," Artwork File ",-1),Le={class:"flex flex-row justify-start space-x-2"},Se={class:"flex-column text-center"},Ae=["src"],Pe={class:"flex-column"},Ce={class:"flex flex-col space-y-1"},je=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1),Be=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),Ve={class:"flex items-center justify-end"},De={class:"flex space-x-2"},w=window.URL||window.webkitURL,Te=/^image\/\w+$/,$e={components:{Head:y,Link:B,Multiselect:k},data(){return{data:{type:Object,default:()=>({})},show_upload:!0,show_image:!1,isLoading:!1,list:{students:[],levels:this.$page.props.levels,themes:[],lessons:[],activities:[]},form:{student_id:"",level_id:"",theme_id:"",lesson_id:"",activity_id:"",artwork:{image_url:"",file:""}}}},watch:{"form.level_id":{handler(){this.form.level_id!=""&&axios.get(route("art_gallery.get_themes",this.form.level_id)).then(r=>{this.list.themes=r.data,this.form.theme_id="",this.form.lesson_id="",this.form.activity_id=""})},deep:!0},"form.theme_id":{handler(){this.form.level_id!=""&&this.form.theme_id!=""&&axios.get(route("art_gallery.get_lessons",this.form.theme_id)).then(r=>{this.list.lessons=r.data,this.form.lesson_id="",this.form.activity_id=""})},deep:!0},"form.lesson_id":{handler(){this.form.level_id!=""&&this.form.theme_id!=""&&this.form.lesson_id!=""&&axios.get(route("art_gallery.get_activities",this.form.lesson_id)).then(r=>{this.list.activities=r.data,this.form.activity_id=""})},deep:!0}},methods:{submit(){this.$inertia.post(route("art_gallery.store"),this.form,{preserveState:!0})},clearStudents(){this.list.students=[]},findStudents(r){V(t=>"400ms")(10),r&&(this.isLoading=!0,axios.get(route("students.find_digital_art_students"),{params:{keyword:r}}).then(t=>{this.list.students=t.data,this.isLoading=!1}))},read(r,t){return new Promise((s,c)=>{if(!r){s();return}Te.test(r.type)?w?s({loaded:!0,name:r.name,type:r.type,url:w.createObjectURL(r)}):c(new Error("Your browser is not supported.")):c(new Error("Please select a valid image file."))})},changeArtwork({target:r}){const{files:t}=r;t&&t.length>0&&this.read(t[0],r).then(s=>{this.form.artwork.image_url=s.url,this.form.artwork.file=t[0]}).catch(this.alert)},dragoverArtWork(r){r.preventDefault()},dropArtwork(r){const{files:t}=r.dataTransfer;r.preventDefault(),t&&t.length>0&&this.read(t[0],r).then(s=>{this.form.artwork.image_url=s.url,this.form.artwork.file=t[0]}).catch(this.alert)},reselect_image(){this.$refs.artwork_file.value="",this.form.artwork.image_url="",this.form.artwork.file=""}}},Lt=Object.assign($e,{__name:"Create",setup(r){return(t,s)=>{const c=S("ExclamationIcon"),L=A("debounce");return i(),l(p,null,[a(v(y),{title:"Art Gallery"}),a(j,null,{header:m(()=>[]),default:m(()=>[e("div",D,[e("div",T,[e("form",{onSubmit:s[9]||(s[9]=P((...o)=>t.submit&&t.submit(...o),["prevent"]))},[e("div",$,[e("div",E,[e("div",U,[e("div",M,[N,e("div",O,[H,e("div",I,[n(a(v(k),{modelValue:t.form.student_id,"onUpdate:modelValue":s[0]||(s[0]=o=>t.form.student_id=o),onClose:t.clearStudents,valueProp:"id",loading:t.isLoading,placeholder:"Please enter some keywords",options:t.list.students,searchable:!0,noOptionsText:"Nothing found",noResultsText:"Nothing found",clearOnSelect:!0,canClear:!1,canDeselect:!1,"internal-search":!1,trackBy:"name",label:"name",classes:{container:t.$page.props.errors.student_id?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 sm:text-sm font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","onClose","loading","options","classes"]),[[L,t.findStudents]])])]),e("div",R,[z,e("div",F,[n(e("select",{name:"level",id:"level",class:h(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.level_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[1]||(s[1]=o=>t.form.level_id=o),autocomplete:"off"},[G,(i(!0),l(p,null,g(t.list.levels,(o,u)=>(i(),l("option",{value:o.id,key:u},b(o.name),9,W))),128))],2),[[f,t.form.level_id]])])]),e("div",Y,[q,e("div",J,[n(e("select",{name:"theme_id",id:"theme_id",class:h(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.theme_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[2]||(s[2]=o=>t.form.theme_id=o),autocomplete:"off",disabled:t.disable_class_levels},[X,(i(!0),l(p,null,g(t.list.themes,(o,u)=>(i(),l("option",{value:o.id,key:o.id},b(o.name),9,Q))),128))],10,K),[[f,t.form.theme_id]])])]),e("div",Z,[ee,e("div",te,[n(e("select",{name:"lesson_id",id:"lesson_id",class:h(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.lesson_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[3]||(s[3]=o=>t.form.lesson_id=o),autocomplete:"off"},[oe,(i(!0),l(p,null,g(t.list.lessons,(o,u)=>(i(),l("option",{value:o.id,key:o.id},b(o.name),9,se))),128))],2),[[f,t.form.lesson_id]])])]),e("div",re,[ie,e("div",le,[n(e("select",{name:"activity_id",id:"activity_id",class:h(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.activity_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[4]||(s[4]=o=>t.form.activity_id=o),autocomplete:"off"},[de,(i(!0),l(p,null,g(t.list.activities,(o,u)=>(i(),l("option",{value:o.id,key:o.id},b(o.name),9,ae))),128))],2),[[f,t.form.activity_id]])])]),n(e("div",ne,[me,t.$page.props.errors["artwork.file"]?(i(),l("div",pe,[e("div",ce,[e("div",ue,[a(c,{class:"h-5 w-5 text-red-500","aria-hidden":"true"})]),fe])])):C("",!0),e("div",{class:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",onChange:s[5]||(s[5]=(...o)=>t.changeArtwork&&t.changeArtwork(...o)),onDragover:s[6]||(s[6]=(...o)=>t.dragoverArtWork&&t.dragoverArtWork(...o)),onDrop:s[7]||(s[7]=(...o)=>t.dropArtwork&&t.dropArtwork(...o))},[e("div",he,[ge,e("div",be,[e("label",_e,[d("Click here "),e("input",ve,null,512)]),xe]),we])],32)],512),[[x,t.form.artwork.image_url==""]]),n(e("div",ye,[ke,e("div",Le,[e("div",Se,[e("img",{class:"object-scale-down w-full",src:t.form.artwork.image_url,alt:""},null,8,Ae)]),e("div",Pe,[e("div",Ce,[a(_,{class:"py-1 px-2 bg-blue-500 hover:bg-blue-600 rounded text-white shadow",onClick:s[8]||(s[8]=o=>t.reselect_image()),title:"Reselect an image"},{default:m(()=>[je]),_:1})])])])],512),[[x,t.form.artwork.image_url!=""]]),Be,e("div",Ve,[e("div",De,[a(_,{buttonType:"gray",url:t.route("art_gallery")},{default:m(()=>[d("Cancel")]),_:1},8,["url"]),a(_,{type:"submit"},{default:m(()=>[d("Save")]),_:1})])])])])])])],32)])])]),_:1})],64)}}});export{Lt as default};
