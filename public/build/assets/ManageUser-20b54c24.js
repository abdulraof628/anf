import{c as u,b as s,u as l,w as n,F as g,H as c,L as m,o as f,d as e,e as x,f as a,l as i,k as d}from"./app-698f1bce.js";import{B as h}from"./Authenticated-e085fb96.js";import{B as p}from"./Button-9c885bf2.js";import{r as _}from"./PencilIcon-fcfbf704.js";import{r as y}from"./SearchIcon-0a674774.js";import{r as w}from"./TrashIcon-ee92f72a.js";import{s as b}from"./multiselect-6e6a95ce.js";import"./ApplicationLogo-1ffedc06.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-718b998e.js";import"./default.css_vue_type_style_index_0_src_true_lang-57be4c75.js";const v={class:"md:grid md:grid-cols-2"},k={class:"md:mt-0 md:col-span-2"},L={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},S={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},B={class:"sm:row-span-3"},$={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},T=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Centre Assigments"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),V={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},O={class:"mb-4"},P=e("label",{for:"name",class:"block text-sm font-bold text-gray-700"},"Name",-1),j={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},C={class:"mb-4"},D=e("label",{for:"email",class:"block text-sm font-bold text-gray-700"},"Email",-1),I={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},M={class:"mb-4"},z=e("label",{for:"centres",class:"block text-sm font-bold text-gray-700"},"Centres",-1),N=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),U={class:"flex flex-row-reverse items-center"},A={class:"flex space-x-2"},H={components:{SearchIcon:y,TrashIcon:w,PencilIcon:_,Head:c,Link:m,Multiselect:b},props:{user_id:String,user_centre:Object},data(){return{centre_id:this.user_centre?this.user_centre.centre_id:""}},methods:{submit(){this.$inertia.post(this.route("centre_manager.store"),{user_id:this.user_id,centre_id:this.centre_id})}}},ee=Object.assign(H,{__name:"ManageUser",setup(E){return(t,o)=>(f(),u(g,null,[s(l(c),{title:"Centre Managers"}),s(h,null,{header:n(()=>[]),default:n(()=>[e("div",v,[e("div",k,[e("form",{onSubmit:o[3]||(o[3]=x((...r)=>t.submit&&t.submit(...r),["prevent"]))},[e("div",L,[e("div",S,[e("div",B,[e("div",$,[T,e("div",V,[e("div",O,[P,a(e("input",{id:"name",type:"text",class:"mt-1 focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 bg-gray-200",readonly:"","onUpdate:modelValue":o[0]||(o[0]=r=>t.$page.props.user_info.display_name=r)},null,512),[[i,t.$page.props.user_info.display_name]])])]),e("div",j,[e("div",C,[D,a(e("input",{id:"email",type:"text",class:"mt-1 focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 bg-gray-200",readonly:"","onUpdate:modelValue":o[1]||(o[1]=r=>t.$page.props.user_info.user_email=r)},null,512),[[i,t.$page.props.user_info.user_email]])])]),e("div",I,[e("div",M,[z,s(l(b),{id:"centres",modelValue:t.centre_id,"onUpdate:modelValue":o[2]||(o[2]=r=>t.centre_id=r),valueProp:"ID",multiple:!1,searchable:!0,options:t.$page.props.allowed_centres,closeOnSelect:!0,canDeselect:!1,placeholder:"Select Centres",trackBy:"label",label:"label",classes:{container:t.$page.props.errors.centre_id?"relative mt-1 mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white text-base leading-snug outline-none":"relative mt-1 mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-[38px]",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded-md pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left"}},null,8,["modelValue","options","classes"])])]),N,e("div",U,[e("div",A,[s(p,{buttonType:"gray",route:t.route("division_manager")},{default:n(()=>[d("Cancel")]),_:1},8,["route"]),s(p,{type:"submit"},{default:n(()=>[d("Save")]),_:1})])])])])])])],32)])])]),_:1})],64))}});export{ee as default};
