import{o as c,c as g,a as n,u as l,w as i,F as u,H as m,L as x,d as e,l as h,h as a,v as b,n as d,m as w,e as y,t as _,g as s}from"./app-46d180ee.js";import{B as v}from"./Authenticated-48726f26.js";import{B as f}from"./Button-678e6240.js";import{s as p}from"./multiselect-1fc1e33e.js";import"./ApplicationLogo-cc1a4557.js";import"./NavLink-f2f3f397.js";import"./XIcon-f9404096.js";import"./Toast-1b30fc2f.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./vue3-perfect-scrollbar-8b5f6b91.js";import"./moment-a9aaa855.js";const k={class:"md:grid md:grid-cols-2"},S={class:"md:mt-0 md:col-span-2"},L={class:"px-4 py-5 bg-indigo-50 space-y-2 sm:p-6"},D={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},P={class:"sm:row-span-3"},T={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},V=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Diagnostic Test Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),O={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},j={class:"mb-4"},I=e("label",{for:"name",class:"block text-sm text-gray-700 font-bold"},[s("Title"),e("span",{class:"text-red-500"},"*")],-1),$={class:"mt-1 flex rounded-md shadow-sm"},C={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},R={class:"mb-4"},B=e("label",{for:"age",class:"block text-sm text-gray-700 font-bold mb-1"},[s("Age"),e("span",{class:"text-red-500"},"*")],-1),z={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},U={class:"mb-4"},A=e("label",{for:"language",class:"block text-sm text-gray-700 font-bold mb-1"},[s("Language"),e("span",{class:"text-red-500"},"*")],-1),H={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},N={class:"sm:row-span-3"},W={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},M=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Conditions"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),E={class:"grid grid-cols-2 sm:grid-cols-0 gap-0 sm:gap-4"},F={class:"mb-4"},G=e("label",{for:"lower_score",class:"block text-sm text-gray-700 font-bold"},"If score less than",-1),q={class:"mt-1 flex rounded-md shadow-sm"},J={class:"mb-4"},K=e("label",{for:"lower_score_direction",class:"block text-sm text-gray-700 font-bold mb-1"},"Go to",-1),Q={class:"grid grid-cols-2 sm:grid-cols-0 gap-0 sm:gap-4"},X={class:"mb-4"},Y=e("label",{for:"higher_score",class:"block text-sm text-gray-700 font-bold"},"If score more than",-1),Z={class:"mt-1 flex rounded-md shadow-sm"},ee={class:"mb-4"},oe=e("label",{for:"higher_score_direction",class:"block text-sm text-gray-700 font-bold mb-1"},"Go to",-1),te={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},re={class:"sm:row-span-3"},ne={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},le=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Chart Settings"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),se={class:"grid grid-cols-2 sm:grid-cols-0 gap-0 sm:gap-4"},ie={class:"mb-4"},ae=e("label",{for:"chart_type",class:"block text-sm text-gray-700 font-bold"},"Chart Type",-1),de={class:"mt-1 flex rounded-md shadow-sm"},pe=["value"],ce={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},ge={class:"sm:row-span-3"},be={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},ue={class:"flex items-end justify-end space-x-2"},fe={components:{Head:m,Link:x},props:{diagnostic_test_info:Object},data(){return{form:{dt_id:this.diagnostic_test_info?this.diagnostic_test_info.id:"",name:this.diagnostic_test_info?this.diagnostic_test_info.name:"",age:this.diagnostic_test_info?this.diagnostic_test_info.age_id:"",language:this.diagnostic_test_info?this.diagnostic_test_info.language_id:"",chart_type:this.diagnostic_test_info.chart_id?this.diagnostic_test_info.chart_id:this.$page.props.chart_types[0].id,lower_score:this.diagnostic_test_info?this.diagnostic_test_info.lower_score:"",lower_score_direction:this.diagnostic_test_info&&this.diagnostic_test_info.lower_score_direction?this.diagnostic_test_info.lower_score_direction:"",higher_score:this.diagnostic_test_info?this.diagnostic_test_info.higher_score:"",higher_score_direction:this.diagnostic_test_info&&this.diagnostic_test_info.higher_score_direction?this.diagnostic_test_info.higher_score_direction:""}}},methods:{submit(){this.$inertia.post(route("dt.settings.update"),this.form,{preserveState:!0})}}},Ve=Object.assign(fe,{__name:"Edit",setup(me){return(o,r)=>(c(),g(u,null,[n(l(m),{title:"Diagnostic Test"}),n(v,null,{header:i(()=>[]),default:i(()=>[e("div",k,[e("div",S,[e("form",{onSubmit:r[8]||(r[8]=h((...t)=>o.submit&&o.submit(...t),["prevent"]))},[e("div",L,[e("div",D,[e("div",P,[e("div",T,[V,e("div",O,[e("div",j,[I,e("div",$,[a(e("input",{type:"text",name:"name",id:"name",class:d(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[0]||(r[0]=t=>o.form.name=t),autocomplete:"off"},null,2),[[b,o.form.name]])])])]),e("div",C,[e("div",R,[B,n(l(p),{id:"centres",modelValue:o.form.age,"onUpdate:modelValue":r[1]||(r[1]=t=>o.form.age=t),valueProp:"id",searchable:!0,options:o.$page.props.ages,closeOnSelect:!0,canClear:!1,canDeselect:!1,placeholder:"Please select an age",trackBy:"name",label:"name",classes:{container:o.$page.props.errors.age?"relative px-0 w-full flex items-center box-border cursor-pointer border border-red-300 rounded-md bg-white text-sm leading-snug outline-none h-[2.35rem]":"relative px-0 w-full flex items-center box-border cursor-pointer border border-gray-300 rounded-md bg-white text-sm leading-snug outline-none h-[2.35rem]",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded-lg h-8",tags:"flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2",tag:"bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap",tagDisabled:"pr-2 opacity-50",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-black",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",noResults:"py-2 px-3 text-gray-600 bg-white text-left",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])]),e("div",z,[e("div",U,[A,n(l(p),{id:"centres",modelValue:o.form.language,"onUpdate:modelValue":r[2]||(r[2]=t=>o.form.language=t),valueProp:"id",searchable:!0,options:o.$page.props.languages,closeOnSelect:!0,canClear:!1,canDeselect:!1,placeholder:"Please select a language",trackBy:"name",label:"name",classes:{container:o.$page.props.errors.language?"relative px-0 w-full flex items-center box-border cursor-pointer border border-red-300 rounded-md bg-white text-sm leading-snug outline-none h-[2.35rem]":"relative px-0 w-full flex items-center box-border cursor-pointer border border-gray-300 rounded-md bg-white text-sm leading-snug outline-none h-[2.35rem]",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded-lg h-8",tags:"flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2",tag:"bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap",tagDisabled:"pr-2 opacity-50",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-black",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",noResults:"py-2 px-3 text-gray-600 bg-white text-left",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])])])])]),e("div",H,[e("div",N,[e("div",W,[M,e("div",E,[e("div",F,[G,e("div",q,[a(e("input",{type:"number",name:"lower_score",id:"lower_score",class:d(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.lower_score?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[3]||(r[3]=t=>o.form.lower_score=t),autocomplete:"off"},null,2),[[b,o.form.lower_score]])])]),e("div",J,[K,n(l(p),{id:"centres",modelValue:o.form.lower_score_direction,"onUpdate:modelValue":r[4]||(r[4]=t=>o.form.lower_score_direction=t),valueProp:"id",searchable:!0,options:o.$page.props.dt_list,closeOnSelect:!0,canClear:!1,canDeselect:!1,placeholder:"Default (No Redirect)",trackBy:"name",label:"name",classes:{container:o.$page.props.errors.lower_score_direction?"relative px-0 w-full flex items-center box-border cursor-pointer border border-red-300 rounded-md bg-white text-sm leading-snug outline-none h-[2.35rem]":"relative px-0 w-full flex items-center box-border cursor-pointer border border-gray-300 rounded-md bg-white text-sm leading-snug outline-none h-[2.35rem]",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded-lg h-8",tags:"flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2",tag:"bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap",tagDisabled:"pr-2 opacity-50",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-black",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",noResults:"py-2 px-3 text-gray-600 bg-white text-left",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])]),e("div",Q,[e("div",X,[Y,e("div",Z,[a(e("input",{type:"number",name:"higher_score",id:"higher_score",class:d(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.higher_score?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[5]||(r[5]=t=>o.form.higher_score=t),autocomplete:"off"},null,2),[[b,o.form.higher_score]])])]),e("div",ee,[oe,n(l(p),{id:"centres",modelValue:o.form.higher_score_direction,"onUpdate:modelValue":r[6]||(r[6]=t=>o.form.higher_score_direction=t),valueProp:"id",searchable:!0,options:o.$page.props.dt_list,closeOnSelect:!0,canClear:!1,canDeselect:!1,placeholder:"Default (No Redirect)",trackBy:"name",label:"name",classes:{container:o.$page.props.errors.higher_score_direction?"relative px-0 w-full flex items-center box-border cursor-pointer border border-red-300 rounded-md bg-white text-sm leading-snug outline-none h-[2.35rem]":"relative px-0 w-full flex items-center box-border cursor-pointer border border-gray-300 rounded-md bg-white text-sm leading-snug outline-none h-[2.35rem]",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded-lg h-8",tags:"flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2",tag:"bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap",tagDisabled:"pr-2 opacity-50",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-black",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",noResults:"py-2 px-3 text-gray-600 bg-white text-left",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])])])])]),e("div",te,[e("div",re,[e("div",ne,[le,e("div",se,[e("div",ie,[ae,e("div",de,[a(e("select",{name:"chart_type",id:"chart_type",class:d(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",o.$page.props.errors.chart_type?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[7]||(r[7]=t=>o.form.chart_type=t),autocomplete:"off"},[(c(!0),g(u,null,y(o.$page.props.chart_types,t=>(c(),g("option",{value:t.id},_(t.name),9,pe))),256))],2),[[w,o.form.chart_type]])])])])])])]),e("div",ce,[e("div",ge,[e("div",be,[e("div",ue,[n(f,{buttonType:"gray",route:o.route("dt.settings")},{default:i(()=>[s("Cancel")]),_:1},8,["route"]),n(f,{type:"submit"},{default:i(()=>[s("Save ")]),_:1})])])])])])],32)])])]),_:1})],64))}});export{Ve as default};
