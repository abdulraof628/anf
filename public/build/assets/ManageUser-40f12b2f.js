import{q as u,x as g,v as s,u as a,P as l,F as f,y as e,B as x,K as d,bv as p,V as n}from"./@vue-b5d553e1.js";import{B as h}from"./Authenticated-f12ae66a.js";import{B as c}from"./Button-a75e4165.js";import{r as y,a as _,b as v}from"./@heroicons-6bb93f0b.js";import{H as m,L as w}from"./@inertiajs-df65e401.js";import{s as b}from"./@vueform-f7c8a6df.js";import"./ApplicationLogo-e2b93f7b.js";import"./app-6e1c5045.js";import"./axios-9cbf0d09.js";import"./pusher-js-1c63de54.js";import"./@vuepic-b5e5f2dc.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-28b7d936.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./radix-vue-09f0b006.js";import"./@floating-ui-6a5ebbeb.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-282a3f07.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-62a42a61.js";import"./lodash.isequal-f375c7a4.js";import"./vue-c49564f2.js";import"./lodash.clonedeep-375466af.js";import"./qs-120ae55f.js";import"./side-channel-a42ec8a2.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-f7269186.js";import"./deepmerge-89e33937.js";import"./nprogress-b3880cbb.js";import"./lucide-vue-next-967cc12e.js";const k={class:"md:grid md:grid-cols-2"},S={class:"md:mt-0 md:col-span-2"},L={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},B={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},O={class:"sm:row-span-3"},V={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},$=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Centre Assigments"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),I={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},P={class:""},T=e("label",{for:"name",class:"block text-sm font-bold text-gray-700"},"Name",-1),j={class:""},C=e("label",{for:"email",class:"block text-sm font-bold text-gray-700"},"Email",-1),D={class:""},M=e("label",{for:"country",class:"block text-sm text-gray-700 font-bold"},[n(" Country "),e("span",{class:"text-red-500"},"*")],-1),z={class:"mt-1 flex rounded-md shadow-sm"},A=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),N={class:"flex flex-row-reverse items-center"},U={class:"flex space-x-2"},E={components:{SearchIcon:y,TrashIcon:_,PencilIcon:v,Head:m,Link:w,Multiselect:b},props:{user_id:String,centres:Object,user_centres:Object},created(){var i=this.selected_centres;Object.keys(this.user_centres).forEach(function(t){i.push(parseInt(t))})},data(){return{options:[{select_all:"Select All Centres",libs:this.$page.props.allowed_centres}],selected_centres:[]}},methods:{submit(){this.$inertia.post(this.route("division_manager.store"),{user_id:this.user_id,selected_centres:this.selected_centres})}}},Te=Object.assign(E,{__name:"ManageUser",setup(i){return(t,o)=>(u(),g(f,null,[s(a(m),{title:"Division Managers"}),s(h,null,{header:l(()=>[]),default:l(()=>[e("div",k,[e("div",S,[e("form",{onSubmit:o[3]||(o[3]=x((...r)=>t.submit&&t.submit(...r),["prevent"]))},[e("div",L,[e("div",B,[e("div",O,[e("div",V,[$,e("div",I,[e("div",P,[T,d(e("input",{id:"name",type:"text",class:"mt-1 focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 bg-gray-200",readonly:"","onUpdate:modelValue":o[0]||(o[0]=r=>t.$page.props.user_info.display_name=r)},null,512),[[p,t.$page.props.user_info.display_name]])]),e("div",j,[C,d(e("input",{id:"email",type:"text",class:"mt-1 focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 bg-gray-200",readonly:"","onUpdate:modelValue":o[1]||(o[1]=r=>t.$page.props.user_info.user_email=r)},null,512),[[p,t.$page.props.user_info.user_email]])]),e("div",D,[M,e("div",z,[s(a(b),{id:"centres",mode:"multiple",modelValue:t.selected_centres,"onUpdate:modelValue":o[2]||(o[2]=r=>t.selected_centres=r),valueProp:"ID",multiple:!0,searchable:!0,options:t.options,closeOnSelect:!1,clearOnSelect:!1,canClear:!1,hideSelected:!1,groups:!0,groupOptions:"libs",groupLabel:"select_all",groupSelect:!0,placeholder:"Select centres",trackBy:"label",label:"label",classes:{container:t.$page.props.errors.centre_id?"relative px-0 w-full flex items-center box-border cursor-pointer border border-red-300 rounded-md bg-white text-sm leading-snug outline-none h-[2.35rem]":"relative px-0 w-full flex items-center box-border cursor-pointer border border-gray-300 rounded-md bg-white text-sm leading-snug outline-none h-[2.35rem]",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded-lg h-9",tags:"flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2",tag:"bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap",tagDisabled:"pr-2 opacity-50",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-black",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",noResults:"py-2 px-3 text-gray-600 bg-white text-left",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])])]),A,e("div",N,[e("div",U,[s(c,{buttonType:"gray",url:t.route("division_manager")},{default:l(()=>[n("Cancel")]),_:1},8,["url"]),s(c,{type:"submit"},{default:l(()=>[n("Save")]),_:1})])])])])])])],32)])])]),_:1})],64))}});export{Te as default};
