import{r as k,y as i,x as n,u as c,Q as p,v as C,C as g,F as a,t as l,z as o,J as u,K as m,A as x,bG as w,q as f,W as O}from"./@vue-d42dd214.js";import{_ as D,a as y}from"./Authenticated-a2738823.js";import{B as _}from"./Button-73a05440.js";import{a as b}from"./axios-1779699b.js";import{s as v}from"./@vueform-cd27a95b.js";import{H as z}from"./@inertiajs-dde9cc4c.js";import{F as S}from"./fslightbox-vue-9806ac54.js";import"./@heroicons-e6194902.js";import"./app-9e9c0f86.js";import"./pusher-js-fe63a254.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./radix-vue-d95f58a2.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./clsx-1229b3e0.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./class-variance-authority-52f2569e.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./@headlessui-a01ed24c.js";const A={class:"flex justify-center"},P={class:"flex-1 max-w-4xl"},U={class:"bg-white overflow-hidden shadow rounded-lg border p-6 min-h-[600px]"},V={class:"flex flex-col md:flex-row lg:flex-row justify-start md:justify-between lg:justify-between items-start md:items-center"},$={key:0,class:"hidden md:block lg:block"},B={class:"mb-3 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 justify-between items-end"},M={class:"flex items-center space-x-4"},T={key:0,class:"inline w-5 h-5 text-gray-200 animate-spin fill-indigo-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"h-5 w-5",viewBox:"0 0 16 16"},F={key:2,class:"md:hidden"},Z={key:3,class:"md:hidden"},H={key:0,class:"p-4 text-sm text-gray-800 rounded-lg bg-gray-200 text-center",role:"alert"},N={key:1,class:"p-4 text-sm text-gray-800 rounded-lg bg-gray-50 text-center",role:"alert"},R={class:"mt-10"},G={class:"flex overflow-x-scroll py-4 scrollbar w-full"},W={class:"flex space-x-4"},q=["src","onClick"],E=["onClick"],J={key:3,class:"flex items-end justify-end fixed bottom-24 right-4 md:hidden lg:hidden"},K={class:"p-4"},Q=["value"],X=["value"],Y=["value"],ee=["value"],te={class:"mb-3"},oe={class:"flex items-center space-x-2"},re={key:0,class:"flex space-x-2"},le={key:1},ie={class:"flex flex-col justify-center items-center w-full space-y-4"},se={class:"md:text-xl"},ne=["src"],ae={class:"relative text-center p-6"},de={class:"flex justify-center items-center space-x-4"},pe={components:{Multiselect:v,FsLightbox:S},data(){return{show_upload:!1,lightbox:{open:!1,src:[]},image:{show:!1,file:"",activity:""},init:!0,artworks:[],list:{students:[],levels:this.$page.props.levels,themes:[],lessons:[],activities:[]},form:{level_id:"",theme_id:"",lesson_id:"",activity_id:"",artwork_file:""},filter:{level_id:"",theme_id:""},option:{themes:[]},searching:{themes:!1,artworks:!1},errors:{},uploading:!1,disable_overlay:!1,show_confirmation:!1,deleting_image:!1,artwork_to_delete:""}},watch:{"filter.level_id":{handler(){this.searching.themes=!0,b.get(route("parent.art_gallery.get_themes",this.filter.level_id)).then(s=>{this.filter.theme_id="",this.option.themes=s.data,this.searching.themes=!1})},deep:!0},"form.level_id":{handler(){this.form.level_id!=""&&b.get(route("art_gallery.get_themes",this.form.level_id)).then(s=>{this.list.themes=s.data,this.form.theme_id="",this.form.lesson_id="",this.form.activity_id=""})},immediate:!0},"form.theme_id":{handler(){this.form.level_id!=""&&this.form.theme_id!=""&&b.get(route("art_gallery.get_lessons",this.form.theme_id)).then(s=>{this.list.lessons=s.data,this.form.lesson_id="",this.form.activity_id=""})},immediate:!0},"form.lesson_id":{handler(){this.form.level_id!=""&&this.form.theme_id!=""&&this.form.lesson_id!=""&&b.get(route("art_gallery.get_activities",this.form.lesson_id)).then(s=>{this.list.activities=s.data,this.form.activity_id=""})},immediate:!0}},methods:{showUpload(){for(let s in this.form)this.form.hasOwnProperty(s)&&(this.form[s]="");this.errors={},this.show_upload=!0},getArtwork(){if(this.filter.level_id&&this.filter.theme_id){if(this.searching.artworks)return;this.searching.artworks=!0,b.get(route("parent.art_gallery.get_artworks",this.filter)).then(s=>{this.init=!1,this.artworks=s.data,this.searching.artworks=!1})}},showImage(s,t){this.lightbox.src=[window.location.origin+"/storage/art_gallery/"+s],this.lightbox.open=!this.lightbox.open},handleArtwork(){this.form.artwork_file=this.$refs.artwork_file.files[0]},upload(){if(this.uploading)return;for(let t in this.form)this.form[t]==""?this.errors[t]=!0:this.errors[t]=!1;Object.values(this.errors).every(t=>t===!1)&&this.$inertia.post(route("parent.art_gallery.store"),this.form,{preserveState:!1,preserveScroll:!0,onBefore:t=>{this.uploading=!0,this.disable_overlay=!0},onFinish:t=>{this.uploading=!1,this.disable_overlay=!1,this.show_upload=!1}})},promptDelete(s){this.artwork_to_delete=s,this.show_confirmation=!0},deleteImage(){this.deleting_image||this.$inertia.delete(route("parent.art_gallery.destroy",this.artwork_to_delete),{preserveState:!1,preserveScroll:!0,onBefore:s=>{this.deleting_image=!0},onFinish:s=>{this.uploading=!1,this.show_confirmation=!1}})}}},ot=Object.assign(pe,{__name:"Index",setup(s){return k(!1),k([{url:"https://placehold.co/200x200"},{url:"https://placehold.co/200x200"},{url:"https://placehold.co/200x200"},{url:"https://placehold.co/200x200"},{url:"https://placehold.co/200x200"},{url:"https://placehold.co/200x200"},{url:"https://placehold.co/200x200"},{url:"https://placehold.co/200x200"}]),(t,e)=>(l(),i(a,null,[n(c(z),{title:"Art Gallery"}),n(D,null,{default:p(()=>[o("div",A,[o("div",P,[o("div",U,[o("div",V,[e[17]||(e[17]=o("div",{class:"p-3 mt-auto"},[o("h1",{class:"text-2xl"},"Art Gallery")],-1)),t.$page.props.current_active_child.student_id?(l(),i("div",$,[o("button",{type:"button",class:"flex bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-slate-400 hover:shadow-slate-600 rounded-lg border-indigo-600 py-2 px-4 items-center justify-center w-full font-semibold text-white",onClick:e[0]||(e[0]=(...r)=>t.showUpload&&t.showUpload(...r))}," Upload Artwork ")])):g("",!0)]),e[25]||(e[25]=o("hr",{class:"my-3 border-gray-400"},null,-1)),o("div",B,[n(c(v),{modelValue:t.filter.level_id,"onUpdate:modelValue":e[1]||(e[1]=r=>t.filter.level_id=r),options:t.$page.props.levels,valueProp:"id",placeholder:"Select Level",label:"name",closeOnSelect:!0,canDeselect:!1,classes:{container:"relative mx-auto w-full flex items-center justify-end box-border rounded-lg border-gray-200 shadow-sm shadow-gray-500 cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"ring-0 ring-opacity-30",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5 rtl:pl-0 rtl:pr-3.5",tags:"flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2 rtl:pl-0 rtl:pr-2",tag:"bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap rtl:pl-0 rtl:pr-2 rtl:mr-0 rtl:ml-1",tagDisabled:"pr-2 opacity-50 rtl:pl-2",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400 rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none rtl:mr-0 rtl:ml-3.5",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 rtl:pr-0 rtl:pl-3.5",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0 rtl:mr-0 rtl:ml-3.5",inifite:"flex items-center justify-center w-full",inifiteSpinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 animate-spin flex-shrink-0 flex-grow-0 m-3.5",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none",optionsTop:"",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-gray-700",groupLabelSelected:"bg-indigo-600 text-white",groupLabelDisabled:"bg-gray-100 text-gray-300 cursor-not-allowed",groupLabelSelectedPointed:"bg-indigo-600 text-white opacity-90",groupLabelSelectedDisabled:"text-indigo-100 bg-indigo-600 bg-opacity-50 cursor-not-allowed",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-indigo-100 bg-indigo-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options"]),n(c(v),{modelValue:t.filter.theme_id,"onUpdate:modelValue":e[2]||(e[2]=r=>t.filter.theme_id=r),options:t.option.themes,valueProp:"id",placeholder:"Select Theme",label:"name",closeOnSelect:!0,canDeselect:!1,loading:t.searching.themes,noOptionsText:"No options available",classes:{container:"relative mx-auto w-full flex items-center justify-end box-border rounded-lg border-gray-200 shadow-sm shadow-gray-500 cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"ring-0 ring-opacity-30",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5 rtl:pl-0 rtl:pr-3.5",tags:"flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2 rtl:pl-0 rtl:pr-2",tag:"bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap rtl:pl-0 rtl:pr-2 rtl:mr-0 rtl:ml-1",tagDisabled:"pr-2 opacity-50 rtl:pl-2",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400 rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none rtl:mr-0 rtl:ml-3.5",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 rtl:pr-0 rtl:pl-3.5",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"animate-spin rounded-full border-t-2 border-indigo-600 h-5 w-5",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none",optionsTop:"",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-gray-700",groupLabelSelected:"bg-indigo-600 text-white",groupLabelDisabled:"bg-gray-100 text-gray-300 cursor-not-allowed",groupLabelSelectedPointed:"bg-indigo-600 text-white opacity-90",groupLabelSelectedDisabled:"text-indigo-100 bg-indigo-600 bg-opacity-50 cursor-not-allowed",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-indigo-100 bg-indigo-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","loading"]),o("div",{onClick:e[3]||(e[3]=(...r)=>t.getArtwork&&t.getArtwork(...r)),class:"w-full md:w-14 md:flex md:items-center rounded-lg bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-slate-400 hover:shadow-slate-600 text-white p-2.5 cursor-pointer"},[o("div",M,[t.searching.artworks?(l(),i("svg",T,e[18]||(e[18]=[o("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),o("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1)]))):(l(),i("svg",I,e[19]||(e[19]=[o("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"},null,-1)]))),t.searching.artworks?(l(),i("span",Z,"Searching...")):(l(),i("span",F,"Search"))])])]),t.init?(l(),i("div",H,e[20]||(e[20]=[o("span",{class:"font-medium"},"Use filters above to find student artwork.",-1)]))):g("",!0),!t.init&&t.artworks.length<1?(l(),i("div",N,e[21]||(e[21]=[o("span",{class:"font-medium"},"Uh oh! Nothing found.",-1)]))):(l(!0),i(a,{key:2},u(t.artworks,(r,d)=>(l(),i(a,null,[o("p",R,m(d),1),e[22]||(e[22]=o("hr",{class:"my-4 border-gray-600"},null,-1)),o("div",G,[o("div",W,[(l(!0),i(a,null,u(r,(h,L)=>(l(),i("div",{key:L,class:"relative w-52 h-52 flex flex-col justify-center"},[o("img",{src:"/storage/art_gallery/"+h.filename,class:"object-fill w-52 h-52 rounded-lg cursor-pointer",alt:"Click to view larger image",onClick:j=>t.showImage(h.filename,h.activity)},null,8,q),o("button",{onClick:j=>t.promptDelete(h.id),class:"absolute bottom-0 w-full bg-red-600 py-2 text-white"}," Delete ",8,E)]))),128))])]),e[23]||(e[23]=o("div",{class:"overflow-x-auto"},[o("div",{class:"flex space-x-2 py-3"})],-1))],64))),256)),t.$page.props.current_active_child.student_id?(l(),i("div",J,[o("button",{class:"bg-indigo-600 hover:bg-indigo-600 text-white font-semibold p-3 rounded-full shadow-lg",onClick:e[4]||(e[4]=(...r)=>t.showUpload&&t.showUpload(...r))},e[24]||(e[24]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"currentColor",viewBox:"0 0 16 16"},[o("path",{"fill-rule":"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})],-1)]))])):g("",!0)])])])]),_:1}),n(y,{isOpen:t.show_upload,onClose:e[11]||(e[11]=r=>this.show_upload=!1)},{default:p(()=>[o("form",K,[e[32]||(e[32]=o("h1",{class:"md:font-semibold md:text-xl"},"Upload Artwork",-1)),e[33]||(e[33]=o("hr",{class:"my-4 border-gray-600"},null,-1)),e[34]||(e[34]=o("label",{class:"font-medium text-gray-900 text-sm md:text-md"},"Level",-1)),x(o("select",{class:f(["mt-1 focus:ring-0 focus:border-gray-500 flex-1 block w-full rounded-md mb-4 cursor-pointer text-sm md:text-md",t.errors.level_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":e[5]||(e[5]=r=>t.form.level_id=r)},[e[26]||(e[26]=o("option",{value:""},"Please Select",-1)),(l(!0),i(a,null,u(t.list.levels,(r,d)=>(l(),i("option",{value:r.id,key:d},m(r.name),9,Q))),128))],2),[[w,t.form.level_id]]),e[35]||(e[35]=o("label",{class:"font-medium text-gray-900 text-sm md:text-md"},"Theme",-1)),x(o("select",{class:f(["mt-1 focus:ring-0 focus:border-gray-500 flex-1 block w-full rounded-md mb-4 cursor-pointer text-sm md:text-md",t.errors.theme_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":e[6]||(e[6]=r=>t.form.theme_id=r)},[e[27]||(e[27]=o("option",{value:""},"Please Select",-1)),(l(!0),i(a,null,u(t.list.themes,(r,d)=>(l(),i("option",{value:r.id,key:r.id},m(r.name),9,X))),128))],2),[[w,t.form.theme_id]]),e[36]||(e[36]=o("label",{class:"font-medium text-gray-900 text-sm md:text-md"},"Lesson",-1)),x(o("select",{class:f(["mt-1 focus:ring-0 focus:border-gray-500 flex-1 block w-full rounded-md mb-4 cursor-pointer text-sm md:text-md",t.errors.lesson_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":e[7]||(e[7]=r=>t.form.lesson_id=r)},[e[28]||(e[28]=o("option",{value:""},"Please Select",-1)),(l(!0),i(a,null,u(t.list.lessons,(r,d)=>(l(),i("option",{value:r.id,key:r.id},m(r.name),9,Y))),128))],2),[[w,t.form.lesson_id]]),e[37]||(e[37]=o("label",{class:"font-medium text-gray-900 text-sm md:text-md"},"Activity",-1)),x(o("select",{class:f(["mt-1 focus:ring-0 focus:border-gray-500 flex-1 block w-full rounded-md mb-4 cursor-pointer text-sm md:text-md",t.errors.activity_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":e[8]||(e[8]=r=>t.form.activity_id=r)},[e[29]||(e[29]=o("option",{value:""},"Please Select",-1)),(l(!0),i(a,null,u(t.list.activities,(r,d)=>(l(),i("option",{value:r.id,key:r.id},m(r.name),9,ee))),128))],2),[[w,t.form.activity_id]]),e[38]||(e[38]=o("label",{class:"font-medium text-gray-900 text-sm md:text-md"},"File",-1)),o("div",te,[o("input",{class:f(["w-full flex-auto rounded border px-3 py-[0.32rem] text-base font-normal text-neutral-700 cursor-pointer transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none",t.errors.artwork_file?"border-red-300":"border-gray-300"]),type:"file",accept:"image/png, image/jpeg",ref:"artwork_file",onChange:e[9]||(e[9]=(...r)=>t.handleArtwork&&t.handleArtwork(...r))},null,34)]),e[39]||(e[39]=o("hr",{class:"my-5"},null,-1)),o("div",oe,[n(_,{onClick:t.upload,buttonType:"info",class:"px-4 py-2"},{default:p(()=>[t.uploading?(l(),i("div",re,e[30]||(e[30]=[o("svg",{"aria-hidden":"true",class:"inline w-4 h-4 text-gray-200 animate-spin fill-indigo-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),o("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),o("span",null,"Uploading",-1)]))):(l(),i("span",le,"Upload"))]),_:1},8,["onClick"]),t.uploading?g("",!0):(l(),C(_,{key:0,type:"button",buttonType:"gray",onClick:e[10]||(e[10]=r=>t.show_upload=!1)},{default:p(()=>e[31]||(e[31]=[O("Cancel")])),_:1}))])])]),_:1},8,["isOpen"]),t.image.show?(l(),C(y,{key:0,open:t.image.show,"onClose:modal":e[12]||(e[12]=r=>t.image.show=!1),class:"md:w-2/6 p-4"},{default:p(()=>[o("div",ie,[o("span",se,m(t.image.activity),1),o("img",{src:t.image.file,class:"object-scale-down rounded-lg",alt:""},null,8,ne)])]),_:1},8,["open"])):g("",!0),n(y,{isOpen:t.show_confirmation,onClose:e[16]||(e[16]=r=>this.show_confirmation=!1)},{default:p(()=>[o("div",ae,[o("button",{onClick:e[13]||(e[13]=r=>t.show_confirmation=!1),type:"button",class:"text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"},e[40]||(e[40]=[o("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[o("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),o("span",{class:"sr-only"},"Close modal",-1)])),e[41]||(e[41]=o("svg",{class:"text-gray-400 w-11 h-11 mb-3.5 mx-auto","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[o("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1)),e[42]||(e[42]=o("p",{class:"mb-4 text-gray-500"},"Are you sure you want to delete this artwork?",-1)),o("div",de,[o("button",{onClick:e[14]||(e[14]=(...r)=>t.deleteImage&&t.deleteImage(...r)),type:"button",class:"py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10"}," Confirm "),o("button",{onClick:e[15]||(e[15]=r=>t.show_confirmation=!1),class:"py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"}," Cancel ")])])]),_:1},8,["isOpen"]),n(c(S),{toggler:t.lightbox.open,sources:t.lightbox.src,exitFullscreenOnClose:!0},null,8,["toggler","sources"])],64))}});export{ot as default};