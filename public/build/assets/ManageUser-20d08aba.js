import{c as b,b as s,u as a,w as l,F as m,H as u,L as f,o as x,d as e,e as h,f as i,l as d,k as p}from"./app-698f1bce.js";import{B as _}from"./Authenticated-e085fb96.js";import{B as c}from"./Button-9c885bf2.js";import{r as y}from"./PencilIcon-fcfbf704.js";import{r as v}from"./SearchIcon-0a674774.js";import{r as w}from"./TrashIcon-ee92f72a.js";import{s as g}from"./multiselect-6e6a95ce.js";import"./ApplicationLogo-1ffedc06.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-718b998e.js";import"./default.css_vue_type_style_index_0_src_true_lang-57be4c75.js";const k={class:"md:grid md:grid-cols-2"},S={class:"md:mt-0 md:col-span-2"},L={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},O={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},B={class:"sm:row-span-3"},$={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},T=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Centre Assigments"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),V={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},j={class:"mb-4"},C=e("label",{for:"name",class:"block text-sm font-bold text-gray-700"},"Name",-1),I={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},P={class:"mb-4"},z=e("label",{for:"email",class:"block text-sm font-bold text-gray-700"},"Email",-1),D=e("div",{class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},[e("div",{class:"relative inline-flex"},[e("select",{class:"appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"},[e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3"),e("option",null,"Option 4")]),e("div",{class:"absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"},[e("svg",{class:"fill-current h-4 w-4",viewBox:"0 0 20 20"},[e("path",{d:"M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z"})])])])],-1),M={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},A={class:"mb-4"},E=e("label",{for:"centres",class:"block text-sm font-bold text-gray-700"},"Centres",-1),N=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),U={class:"flex flex-row-reverse items-center"},H={class:"flex space-x-2"},F={components:{SearchIcon:v,TrashIcon:w,PencilIcon:y,Head:u,Link:f,Multiselect:g},props:{user_id:String,user_centres:Object},created(){var n=this.selected_centres;Object.keys(this.user_centres).forEach(function(t){n.push(parseInt(t))})},data(){return{options:[{select_all:"Select All Centres",libs:this.$page.props.allowed_centres}],selected_centres:[]}},methods:{submit(){this.$inertia.post(this.route("division_manager.store"),{user_id:this.user_id,selected_centres:this.selected_centres})}}},te=Object.assign(F,{__name:"ManageUser",setup(n){return(t,o)=>(x(),b(m,null,[s(a(u),{title:"Edupreneurs"}),s(_,null,{header:l(()=>[]),default:l(()=>[e("div",k,[e("div",S,[e("form",{onSubmit:o[3]||(o[3]=h((...r)=>t.submit&&t.submit(...r),["prevent"]))},[e("div",L,[e("div",O,[e("div",B,[e("div",$,[T,e("div",V,[e("div",j,[C,i(e("input",{id:"name",type:"text",class:"mt-1 focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 bg-gray-200",readonly:"","onUpdate:modelValue":o[0]||(o[0]=r=>t.$page.props.user_info.display_name=r)},null,512),[[d,t.$page.props.user_info.display_name]])])]),e("div",I,[e("div",P,[z,i(e("input",{id:"email",type:"text",class:"mt-1 focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 bg-gray-200",readonly:"","onUpdate:modelValue":o[1]||(o[1]=r=>t.$page.props.user_info.user_email=r)},null,512),[[d,t.$page.props.user_info.user_email]])])]),D,e("div",M,[e("div",A,[E,s(a(g),{id:"centres",mode:"multiple",modelValue:t.selected_centres,"onUpdate:modelValue":o[2]||(o[2]=r=>t.selected_centres=r),valueProp:"ID",multiple:!0,searchable:!0,options:t.options,closeOnSelect:!1,clearOnSelect:!1,canClear:!1,hideSelected:!1,groups:!0,groupOptions:"libs",groupLabel:"select_all",groupSelect:!0,placeholder:"Select Centres",trackBy:"label",label:"label",classes:{container:t.$page.props.errors.centre_id?"relative mt-1 mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white text-base leading-snug outline-none":"relative mt-1 mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-[38px]",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])]),N,e("div",U,[e("div",H,[s(c,{buttonType:"gray",route:t.route("division_manager")},{default:l(()=>[p("Cancel")]),_:1},8,["route"]),s(c,{type:"submit"},{default:l(()=>[p("Save")]),_:1})])])])])])])],32)])])]),_:1})],64))}});export{te as default};
