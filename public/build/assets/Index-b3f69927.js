import{r as d,y as l,x as a,u as p,Q as g,F as m,t as r,z as e,C as i,J as h,v as f,A as b,bH as x,q as w,W as y}from"./@vue-2682a433.js";import{_ as v,a as _}from"./Authenticated-0f1261d0.js";import{H as k}from"./@inertiajs-6e15fcc1.js";import{a as u}from"./axios-1779699b.js";import{s as c}from"./@vueform-93d31398.js";import"./@heroicons-6acff2c6.js";import"./app-268d443b.js";import"./pusher-js-747fa3ad.js";import"./@vuepic-72648ebd.js";import"./@babel-1b80a44a.js";import"./cropperjs-1d139b1c.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-ae9c59f1.js";import"./radix-vue-1c0958bf.js";import"./@floating-ui-46419ac1.js";import"./@internationalized-2f03b566.js";import"./clsx-1229b3e0.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-bada8fb2.js";import"./class-variance-authority-52f2569e.js";import"./@radix-icons-96330712.js";import"./lodash.isequal-aa94bca8.js";import"./vue-210fd32b.js";import"./lodash.clonedeep-15f95254.js";import"./qs-d67e8c34.js";import"./side-channel-51e4be2c.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-110a5121.js";import"./deepmerge-89e33937.js";import"./nprogress-47dccea4.js";import"./@headlessui-b7da89b9.js";import"./simplebar-vue-4fcec6b7.js";import"./simplebar-core-3f5973b9.js";import"./lodash-es-9b1d07da.js";import"./Button-42d44458.js";const C={class:"flex justify-center"},j={class:"flex-1 max-w-4xl"},B={class:"bg-white overflow-hidden shadow rounded-lg border p-6 min-h-[600px]"},M={class:"mb-3 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 justify-between items-end"},L={class:"flex items-center space-x-4"},S={key:0,class:"inline w-5 h-5 text-gray-200 animate-spin fill-indigo-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},D={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"h-5 w-5",viewBox:"0 0 16 16"},A={key:2,class:"md:hidden"},z={key:3,class:"md:hidden"},T={key:0,class:"p-4 text-sm text-gray-800 rounded-lg bg-gray-200 text-center",role:"alert"},Z={key:1,class:"p-4 text-sm text-gray-800 rounded-lg bg-gray-50 text-center",role:"alert"},O={key:2,class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2"},V={class:"w-full space-y-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm shadow-gray-400"},$=["src"],P=["onClick"],U={key:0,class:"flex flex-col justify-center items-center space-y-4"},H={key:1,class:"p-4 text-indigo-800 border border-indigo-300 rounded-lg bg-indigo-50"},I={components:{Multiselect:c},data(){return{init:!0,progress:0,show_download_modal:!1,student_nickname:"",theme_id:"",error_student_nickname:!1,controller:"",list:{levels:this.$page.props.levels,art_book_themes:[]},filter:{level_id:""},searching:{art_book_themes:!1},generating:!1}},watch:{},methods:{getArtBookThemes(){if(this.filter.level_id){if(this.searching.art_book_themes)return;this.searching.art_book_themes=!0,u.get(route("parent.art_gallery.get_themes",this.filter.level_id)).then(s=>{this.init=!1,this.list.art_book_themes=s.data,this.searching.art_book_themes=!1})}},openDownloadModal(s){this.student_nickname="",this.theme_id=s,this.show_download_modal=!0},generateArtBook(){if(this.student_nickname===""||this.student_nickname.length>10){this.error_student_nickname=!0;return}else this.error_student_nickname=!1;this.generating||(this.generating=!0,this.controller=new AbortController,u.get(route("parent.art_book.generate"),{responseType:"blob",params:{theme_id:this.theme_id,student_nickname:this.student_nickname},signal:this.controller.signal}).then(s=>{const o=new Blob([s.data],{type:"application/pdf"}),t=URL.createObjectURL(o);window.open(t,"_blank"),this.generating=!1,this.show_download_modal=!1}).catch(s=>{console.error("Error fetching PDF:",s),this.generating=!1}))},stopGenerate(){this.controller.abort()}}},Ve=Object.assign(I,{__name:"Index",setup(s){return d(!1),d([{url:"https://placehold.co/200x200"},{url:"https://placehold.co/200x200"},{url:"https://placehold.co/200x200"},{url:"https://placehold.co/200x200"},{url:"https://placehold.co/200x200"},{url:"https://placehold.co/200x200"},{url:"https://placehold.co/200x200"},{url:"https://placehold.co/200x200"}]),(o,t)=>(r(),l(m,null,[a(p(k),{title:"Art Book"}),a(v,null,{default:g(()=>[e("div",C,[e("div",j,[e("div",B,[t[10]||(t[10]=e("div",{class:"flex flex-col md:flex-row lg:flex-row justify-start md:justify-between lg:justify-between items-start md:items-center"},[e("div",{class:"p-3 mt-auto"},[e("h1",{class:"text-2xl"},"Art Book")])],-1)),t[11]||(t[11]=e("hr",{class:"my-3 border-gray-400"},null,-1)),e("div",M,[a(p(c),{modelValue:o.filter.level_id,"onUpdate:modelValue":t[0]||(t[0]=n=>o.filter.level_id=n),options:o.$page.props.levels,valueProp:"id",placeholder:"Select Level",label:"name",closeOnSelect:!0,canDeselect:!1,classes:{container:"relative mx-auto w-full flex items-center justify-end box-border rounded-lg border-gray-200 shadow-sm shadow-gray-500 cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"ring-0 ring-opacity-30",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5 rtl:pl-0 rtl:pr-3.5",tags:"flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2 rtl:pl-0 rtl:pr-2",tag:"bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap rtl:pl-0 rtl:pr-2 rtl:mr-0 rtl:ml-1",tagDisabled:"pr-2 opacity-50 rtl:pl-2",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400 rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3.5",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none rtl:mr-0 rtl:ml-3.5",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 rtl:pr-0 rtl:pl-3.5",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0 rtl:mr-0 rtl:ml-3.5",inifite:"flex items-center justify-center w-full",inifiteSpinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 animate-spin flex-shrink-0 flex-grow-0 m-3.5",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none",optionsTop:"",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-gray-700",groupLabelSelected:"bg-indigo-600 text-white",groupLabelDisabled:"bg-gray-100 text-gray-300 cursor-not-allowed",groupLabelSelectedPointed:"bg-indigo-600 text-white opacity-90",groupLabelSelectedDisabled:"text-indigo-100 bg-indigo-600 bg-opacity-50 cursor-not-allowed",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-indigo-100 bg-indigo-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options"]),e("div",{onClick:t[1]||(t[1]=(...n)=>o.getArtBookThemes&&o.getArtBookThemes(...n)),class:"w-full md:w-12 md:flex md:justify-center rounded-lg bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-slate-400 hover:shadow-slate-600 text-white p-2.5 cursor-pointer"},[e("div",L,[o.searching.art_book_themes?(r(),l("svg",S,t[6]||(t[6]=[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1)]))):(r(),l("svg",D,t[7]||(t[7]=[e("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"},null,-1)]))),o.searching.art_book_themes?(r(),l("span",z,"Searching...")):(r(),l("span",A,"Search"))])])]),o.init?(r(),l("div",T,t[8]||(t[8]=[e("span",{class:"font-medium"},"Use filters above to get list of art books.",-1)]))):i("",!0),!o.init&&o.list.art_book_themes.length<1?(r(),l("div",Z,t[9]||(t[9]=[e("span",{class:"font-medium"},"Uh oh! Nothing found.",-1)]))):i("",!0),!o.searching.art_book_themes&&o.list.art_book_themes.length?(r(),l("div",O,[(r(!0),l(m,null,h(o.list.art_book_themes,n=>(r(),l("div",V,[e("img",{src:"/images/"+n.art_book_assets+"thumbnail.jpg",alt:""},null,8,$),e("button",{type:"button",class:"text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center",onClick:F=>o.openDownloadModal(n.id)},"Select",8,P)]))),256))])):i("",!0)])])]),o.show_download_modal?(r(),f(_,{key:0,open:o.show_download_modal,"onClose:modal":t[5]||(t[5]=n=>o.show_download_modal=!1),disable_overlay:!0,class:"flex flex-col space-y-4 w-5/6 md:w-3/6 xl:w-2/6 2xl:w-3/12 px-6 py-8"},{default:g(()=>[o.generating?(r(),l("div",H,t[13]||(t[13]=[e("div",{class:"flex items-center text-xl"},[e("svg",{class:"flex-shrink-0 w-6 h-6 me-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})]),e("span",{class:"sr-only"},"Info"),e("h3",{class:"text-xl font-medium"},"Do not close the browser")],-1),e("div",{class:"flex items-center my-4 text-sm"},[e("div",{role:"status"},[e("svg",{"aria-hidden":"true",class:"w-6 h-6 me-2 text-indigo-200 animate-spin fill-indigo-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),e("span",{class:"sr-only"},"Loading...")]),y(" Kindly wait as the system is in the process of creating your art book, this might take a minute... ")],-1)]))):(r(),l("div",U,[t[12]||(t[12]=e("h2",{class:"block mb-2 font-semibold text-gray-900 dark:text-white"},"What's the fun name you want to be called?",-1)),b(e("input",{type:"text",class:w([o.error_student_nickname?"border-red-300":"border-gray-300","bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 capitalize"]),maxlength:"10",placeholder:"Max : 10 Characters","onUpdate:modelValue":t[2]||(t[2]=n=>o.student_nickname=n),required:""},null,2),[[x,o.student_nickname]]),e("button",{type:"button",class:"text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center",onClick:t[3]||(t[3]=n=>o.generateArtBook())},"Generate"),e("a",{href:"#",class:"text-sm underline",onClick:t[4]||(t[4]=n=>o.show_download_modal=!1)},"Cancel")]))]),_:1},8,["open"])):i("",!0)]),_:1})],64))}});export{Ve as default};
