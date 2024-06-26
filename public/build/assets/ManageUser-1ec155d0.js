import{o as u,c as g,a as s,u as l,w as n,F as m,H as c,L as f,d as e,l as x,h as a,v as i,g as d}from"./app-b0ada57f.js";import{B as h}from"./Authenticated-00519a95.js";import{B as p}from"./Button-7e5ebb17.js";import{r as y}from"./PencilIcon-ece1a67b.js";import{r as _}from"./SearchIcon-bfeb6aa6.js";import{r as w}from"./TrashIcon-a14bc0af.js";import{s as b}from"./multiselect-231096e5.js";import"./ApplicationLogo-5609d7e8.js";import"./XIcon-72ef4a27.js";import"./vue3-perfect-scrollbar-f1bcd31f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-fd223f9f.js";import"./moment-a9aaa855.js";const v={class:"md:grid md:grid-cols-2"},k={class:"md:mt-0 md:col-span-2"},S={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},L={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},B={class:"sm:row-span-3"},$={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},T=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Centre Assigments"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),V={class:"grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4"},C={class:""},D=e("label",{for:"name",class:"block text-sm font-bold text-gray-700"},"Name",-1),I={class:""},P=e("label",{for:"email",class:"block text-sm font-bold text-gray-700"},"Email",-1),O={class:""},j=e("label",{for:"centres",class:"block text-sm font-bold text-gray-700"},"Centres",-1),M={class:"mt-1 flex rounded-md shadow-sm"},z=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),N={class:"flex flex-row-reverse items-center"},U={class:"flex space-x-2"},A={components:{SearchIcon:_,TrashIcon:w,PencilIcon:y,Head:c,Link:f,Multiselect:b},props:{user_id:String,user_centre:Object},data(){return{centre_id:this.user_centre?this.user_centre.centre_id:""}},methods:{submit(){this.$inertia.post(this.route("centre_manager.store"),{user_id:this.user_id,centre_id:this.centre_id})}}},te=Object.assign(A,{__name:"ManageUser",setup(H){return(t,o)=>(u(),g(m,null,[s(l(c),{title:"Centre Managers"}),s(h,null,{header:n(()=>[]),default:n(()=>[e("div",v,[e("div",k,[e("form",{onSubmit:o[3]||(o[3]=x((...r)=>t.submit&&t.submit(...r),["prevent"]))},[e("div",S,[e("div",L,[e("div",B,[e("div",$,[T,e("div",V,[e("div",C,[D,a(e("input",{id:"name",type:"text",class:"mt-1 focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 bg-gray-200",readonly:"","onUpdate:modelValue":o[0]||(o[0]=r=>t.$page.props.user_info.display_name=r)},null,512),[[i,t.$page.props.user_info.display_name]])]),e("div",I,[P,a(e("input",{id:"email",type:"text",class:"mt-1 focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300 bg-gray-200",readonly:"","onUpdate:modelValue":o[1]||(o[1]=r=>t.$page.props.user_info.user_email=r)},null,512),[[i,t.$page.props.user_info.user_email]])]),e("div",O,[j,e("div",M,[s(l(b),{id:"centres",modelValue:t.centre_id,"onUpdate:modelValue":o[2]||(o[2]=r=>t.centre_id=r),valueProp:"ID",multiple:!1,searchable:!0,options:t.$page.props.allowed_centres,closeOnSelect:!0,canDeselect:!1,placeholder:"Select Centres",trackBy:"label",label:"label",classes:{container:t.$page.props.errors.centre_id?"relative px-0 w-full flex items-center box-border cursor-pointer border border-red-300 rounded-md bg-white text-sm leading-snug outline-none h-[2.35rem]":"relative px-0 w-full flex items-center box-border cursor-pointer border border-gray-300 rounded-md bg-white text-sm leading-snug outline-none h-[2.35rem]",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded-lg h-9",tags:"flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2",tag:"bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap",tagDisabled:"pr-2 opacity-50",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-black",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",noResults:"py-2 px-3 text-gray-600 bg-white text-left",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])])]),z,e("div",N,[e("div",U,[s(p,{buttonType:"gray",route:t.route("division_manager")},{default:n(()=>[d("Cancel")]),_:1},8,["route"]),s(p,{type:"submit"},{default:n(()=>[d("Save")]),_:1})])])])])])])],32)])])]),_:1})],64))}});export{te as default};
