import{r as S,a as A,c as l,b as a,u as v,w as m,F as c,H as y,L as P,v as C,o as i,d as e,e as j,f as n,g as f,n as h,h as g,t as b,i as x,j as D,k as d}from"./app-54681965.js";import{B as T}from"./Authenticated-0cc20168.js";import{B as _}from"./Button-44b676af.js";import{b as B}from"./toggle-ec1d1b43.js";import{s as k}from"./multiselect-39d26b39.js";/* empty css                                                         *//* empty css            */import"./ApplicationLogo-1906571b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-efbb4aba.js";const E={class:"md:grid md:grid-cols-2"},V={class:"md:mt-0 md:col-span-2"},$={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},U={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},M={class:"sm:row-span-3"},N={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},O=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Upload Artwork"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),H={class:"mb-4"},I=e("label",{for:"centre",class:"block text-sm font-bold text-gray-700"},[d(" Student Name "),e("span",{class:"text-red-500"},"*")],-1),R={class:"mt-1 flex rounded-md.shadow-sm"},F={class:"mb-4"},z=e("label",{for:"level",class:"block text-sm font-bold text-gray-700"},[d(" Level "),e("span",{class:"text-red-500"},"*")],-1),G={class:"mt-1 flex rounded-md shadow-sm"},W=e("option",{value:""},"Please Select",-1),Y=["value"],J={class:"mb-4"},X=e("label",{for:"theme_id",class:"block text-sm font-bold text-gray-700"},[d(" Theme "),e("span",{class:"text-red-500"},"*")],-1),q={class:"mt-1 flex rounded-md shadow-sm"},K=["disabled"],Q=e("option",{value:""},"Please Select",-1),Z=["value"],ee={class:"mb-4"},te=e("label",{for:"lesson_id",class:"block text-sm font-bold text-gray-700"},[d(" Lesson "),e("span",{class:"text-red-500"},"*")],-1),oe={class:"mt-1 flex rounded-md shadow-sm"},se=e("option",{value:""},"Please Select",-1),re=["value"],le={class:"mb-4"},ie=e("label",{for:"activity_id",class:"block text-sm font-bold text-gray-700"},[d(" Activity "),e("span",{class:"text-red-500"},"*")],-1),de={class:"mt-1 flex rounded-md shadow-sm"},ae=e("option",{value:""},"Please Select",-1),ne=["value"],me={class:"mb-4 space-y-2"},ce=e("label",{class:"block text-sm text-gray-700 font-bold"}," Artwork File ",-1),ue={key:0,class:"rounded-md bg-red-100 p-4"},pe={class:"flex"},fe={class:"flex-shrink-0"},he=e("div",{class:"ml-3"},[e("h3",{class:"text-sm font-medium text-red-500"},"File is required!")],-1),ge={class:"space-y-1 text-center"},be=e("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[e("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),_e={class:"flex text-sm text-gray-600"},ve={class:"browse text-indigo-400 hover:text-indigo-800 cursor-pointer font-bold"},xe={ref:"artwork_file",id:"file",class:"sr-only",type:"file",accept:"image/*"},we=e("p",{class:"pl-1"},"or drag and drop an image",-1),ye=e("p",{class:"text-xs text-gray-500"},"Image Format : PNG, JPG",-1),ke={class:"mb-4"},Le=e("label",{class:"block text-sm text-gray-700 font-bold mb-2"}," Artwork File ",-1),Se={class:"flex flex-row justify-start space-x-2"},Ae={class:"flex-column text-center"},Pe=["src"],Ce={class:"flex-column"},je={class:"flex flex-col space-y-1"},De=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1),Te=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),Be={class:"flex items-center justify-end"},Ee={class:"flex space-x-2"},w=window.URL||window.webkitURL,Ve=/^image\/\w+$/,$e={components:{Head:y,Link:P,Toggle:B,Multiselect:k},data(){return{data:{type:Object,default:()=>({})},show_upload:!0,show_image:!1,isLoading:!1,list:{students:[],levels:this.$page.props.levels,themes:[],lessons:[],activities:[]},form:{student_id:"",level_id:"",theme_id:"",lesson_id:"",activity_id:"",artwork:{image_url:"",file:""}}}},watch:{"form.level_id":{handler(){this.form.level_id!=""&&axios.get(route("art_gallery.get_themes",this.form.level_id)).then(r=>{this.list.themes=r.data,this.form.theme_id="",this.form.lesson_id="",this.form.activity_id=""})},deep:!0},"form.theme_id":{handler(){this.form.level_id!=""&&this.form.theme_id!=""&&axios.get(route("art_gallery.get_lessons",this.form.theme_id)).then(r=>{this.list.lessons=r.data,this.form.lesson_id="",this.form.activity_id=""})},deep:!0},"form.lesson_id":{handler(){this.form.level_id!=""&&this.form.theme_id!=""&&this.form.lesson_id!=""&&axios.get(route("art_gallery.get_activities",this.form.lesson_id)).then(r=>{this.list.activities=r.data,this.form.activity_id=""})},deep:!0}},methods:{submit(){this.$inertia.post(route("art_gallery.store"),this.form,{preserveState:!0})},clearStudents(){this.list.students=[]},findStudents(r){C.debounce(t=>"400ms")(10),r&&(this.isLoading=!0,axios.get(route("students.find"),{params:{keyword:r}}).then(t=>{this.list.students=t.data,this.isLoading=!1}))},read(r,t){return new Promise((s,u)=>{if(!r){s();return}Ve.test(r.type)?w?s({loaded:!0,name:r.name,type:r.type,url:w.createObjectURL(r)}):u(new Error("Your browser is not supported.")):u(new Error("Please select a valid image file."))})},changeArtwork({target:r}){const{files:t}=r;t&&t.length>0&&this.read(t[0],r).then(s=>{this.form.artwork.image_url=s.url,this.form.artwork.file=t[0]}).catch(this.alert)},dragoverArtWork(r){r.preventDefault()},dropArtwork(r){const{files:t}=r.dataTransfer;r.preventDefault(),t&&t.length>0&&this.read(t[0],r).then(s=>{this.form.artwork.image_url=s.url,this.form.artwork.file=t[0]}).catch(this.alert)},reselect_image(){this.$refs.artwork_file.value="",this.form.artwork.image_url="",this.form.artwork.file=""}}},We=Object.assign($e,{__name:"Create",setup(r){return(t,s)=>{const u=S("ExclamationIcon"),L=A("debounce");return i(),l(c,null,[a(v(y),{title:"Art Gallery"}),a(T,null,{header:m(()=>[]),default:m(()=>[e("div",E,[e("div",V,[e("form",{onSubmit:s[9]||(s[9]=j((...o)=>t.submit&&t.submit(...o),["prevent"]))},[e("div",$,[e("div",U,[e("div",M,[e("div",N,[O,e("div",H,[I,e("div",R,[n(a(v(k),{modelValue:t.form.student_id,"onUpdate:modelValue":s[0]||(s[0]=o=>t.form.student_id=o),onClose:t.clearStudents,valueProp:"id",loading:t.isLoading,placeholder:"Please enter some keywords",options:t.list.students,searchable:!0,noOptionsText:"Nothing found",noResultsText:"Nothing found",clearOnSelect:!0,canClear:!1,canDeselect:!1,"internal-search":!1,trackBy:"name",label:"name",classes:{container:t.$page.props.errors.student_id?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white sm:text-sm leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 sm:text-sm font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","onClose","loading","options","classes"]),[[L,t.findStudents]])])]),e("div",F,[z,e("div",G,[n(e("select",{name:"level",id:"level",class:h(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.level_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[1]||(s[1]=o=>t.form.level_id=o),autocomplete:"off"},[W,(i(!0),l(c,null,g(t.list.levels,(o,p)=>(i(),l("option",{value:o.id,key:p},b(o.name),9,Y))),128))],2),[[f,t.form.level_id]])])]),e("div",J,[X,e("div",q,[n(e("select",{name:"theme_id",id:"theme_id",class:h(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.theme_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[2]||(s[2]=o=>t.form.theme_id=o),autocomplete:"off",disabled:t.disable_class_levels},[Q,(i(!0),l(c,null,g(t.list.themes,(o,p)=>(i(),l("option",{value:o.id,key:o.id},b(o.name),9,Z))),128))],10,K),[[f,t.form.theme_id]])])]),e("div",ee,[te,e("div",oe,[n(e("select",{name:"lesson_id",id:"lesson_id",class:h(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.lesson_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[3]||(s[3]=o=>t.form.lesson_id=o),autocomplete:"off"},[se,(i(!0),l(c,null,g(t.list.lessons,(o,p)=>(i(),l("option",{value:o.id,key:o.id},b(o.name),9,re))),128))],2),[[f,t.form.lesson_id]])])]),e("div",le,[ie,e("div",de,[n(e("select",{name:"activity_id",id:"activity_id",class:h(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.activity_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[4]||(s[4]=o=>t.form.activity_id=o),autocomplete:"off"},[ae,(i(!0),l(c,null,g(t.list.activities,(o,p)=>(i(),l("option",{value:o.id,key:o.id},b(o.name),9,ne))),128))],2),[[f,t.form.activity_id]])])]),n(e("div",me,[ce,t.$page.props.errors["artwork.file"]?(i(),l("div",ue,[e("div",pe,[e("div",fe,[a(u,{class:"h-5 w-5 text-red-500","aria-hidden":"true"})]),he])])):D("",!0),e("div",{class:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",onChange:s[5]||(s[5]=(...o)=>t.changeArtwork&&t.changeArtwork(...o)),onDragover:s[6]||(s[6]=(...o)=>t.dragoverArtWork&&t.dragoverArtWork(...o)),onDrop:s[7]||(s[7]=(...o)=>t.dropArtwork&&t.dropArtwork(...o))},[e("div",ge,[be,e("div",_e,[e("label",ve,[d("Click here "),e("input",xe,null,512)]),we]),ye])],32)],512),[[x,t.form.artwork.image_url==""]]),n(e("div",ke,[Le,e("div",Se,[e("div",Ae,[e("img",{class:"object-scale-down w-full",src:t.form.artwork.image_url,alt:""},null,8,Pe)]),e("div",Ce,[e("div",je,[a(_,{class:"py-1 px-2 bg-blue-500 hover:bg-blue-600 rounded text-white shadow",onClick:s[8]||(s[8]=o=>t.reselect_image()),title:"Reselect an image"},{default:m(()=>[De]),_:1})])])])],512),[[x,t.form.artwork.image_url!=""]]),Te,e("div",Be,[e("div",Ee,[a(_,{buttonType:"gray",route:t.route("classes")},{default:m(()=>[d("Cancel")]),_:1},8,["route"]),a(_,{type:"submit"},{default:m(()=>[d("Save")]),_:1})])])])])])])],32)])])]),_:1})],64)}}});export{We as default};
