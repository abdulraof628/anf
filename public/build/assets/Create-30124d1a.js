import{o as u,c as m,a as n,u as a,w as s,F as f,H as g,L as x,d as e,l as h,h as p,v as d,n as b,g as l}from"./app-2fae9d13.js";import{B as w}from"./Authenticated-703ec500.js";import{B as c}from"./Button-c3c99dac.js";import{s as i}from"./multiselect-a474da34.js";import"./ApplicationLogo-2ee0ef85.js";import"./XIcon-01cb4fec.js";import"./vue3-perfect-scrollbar-8be0ffe8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-de446ee5.js";import"./moment-55cb88ed.js";const y={class:"md:grid md:grid-cols-2"},v={class:"md:mt-0 md:col-span-2"},_={class:"px-4 py-5 space-y-6 sm:p-6"},k={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},L={class:"sm:row-span-3"},S={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},P=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Promotion Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),D={class:"grid grid-cols-1 sm:grid-cols-2 gap-4"},T={class:"mb-4 col-span-2"},O=e("label",{for:"promo_name",class:"block text-sm text-gray-700 font-bold"},[l("Name"),e("span",{class:"text-red-500"},"*")],-1),z={class:"mt-1 flex rounded-md shadow-sm"},V={class:"mb-4"},C=e("label",{for:"promo_duration",class:"block text-sm text-gray-700 font-bold"},[l("Country"),e("span",{class:"text-red-500"},"*")],-1),R={class:"mt-1 flex"},j={class:"mb-4"},B=e("label",{for:"promo_duration",class:"block text-sm text-gray-700 font-bold"},[l("Duration"),e("span",{class:"text-red-500"},"*")],-1),I={class:"mt-1 flex"},$={class:"mb-4"},N=e("label",{for:"promo_duration",class:"block text-sm text-gray-700 font-bold"},[l("Type of Promotion"),e("span",{class:"text-red-500"},"*")],-1),A={class:"mt-1 flex"},H={class:"mb-4"},U=e("label",{for:"promo_value",class:"block text-sm text-gray-700 font-bold"},[l("Amount"),e("span",{class:"text-red-500"},"*")],-1),M={class:"mt-1 flex rounded-md shadow-sm"},W={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},F={class:"sm:row-span-3"},E={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},q={class:"flex items-end justify-end space-x-2"},G={components:{Head:g,Link:x,Multiselect:i},data(){return{form:{promo_name:"",country_id:"",duration_id:"",type_id:"",promo_value:""}}},methods:{submit(){this.$inertia.post(route("fee.promos.store"),this.form,{preserveState:!0})}}},le=Object.assign(G,{__name:"Create",setup(J){return(t,o)=>(u(),m(f,null,[n(a(g),{title:"Promotions"}),n(w,null,{header:s(()=>[]),default:s(()=>[e("div",y,[e("div",v,[e("form",{onSubmit:o[5]||(o[5]=h((...r)=>t.submit&&t.submit(...r),["prevent"]))},[e("div",_,[e("div",k,[e("div",L,[e("div",S,[P,e("div",D,[e("div",T,[O,e("div",z,[p(e("input",{type:"text",name:"promo_name",id:"promo_name",class:b(["bg-white focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.promo_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[0]||(o[0]=r=>t.form.promo_name=r),autocomplete:"off"},null,2),[[d,t.form.promo_name]])])]),e("div",V,[C,e("div",R,[n(a(i),{autocomplete:"off",placeholder:t.form.country_id,canDeselect:!1,modelValue:t.form.country_id,"onUpdate:modelValue":o[1]||(o[1]=r=>t.form.country_id=r),searchable:!0,canClear:!1,noResultsText:"No result found",options:t.$page.props.countries,valueProp:"id",trackBy:"name",label:"name",classes:{container:t.$page.props.errors.country_id?"relative mx-auto w-full flex flex-col items-center cursor-pointer border border-red-300 rounded-lg bg-white h-[2.35rem] rounded-md text-sm":"relative mx-auto w-full flex flex-col items-center cursor-pointer border border-gray-300 rounded-lg bg-white h-[2.35rem] rounded-md text-sm",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full mb-1",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base text-sm font-sans bg-white rounded-md pl-3.5 h-8",tags:"flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2",tag:"bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap",tagDisabled:"pr-2 opacity-50",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-black",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-gray-700",groupLabelSelected:"bg-green-600 text-white",groupLabelDisabled:"bg-gray-100 text-gray-300 cursor-not-allowed",groupLabelSelectedPointed:"bg-green-600 text-white opacity-90",groupLabelSelectedDisabled:"text-green-100 bg-green-600 bg-opacity-50 cursor-not-allowed",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["placeholder","modelValue","options","classes"])])]),e("div",j,[B,e("div",I,[n(a(i),{autocomplete:"off",placeholder:t.form.duration_id,canDeselect:!1,modelValue:t.form.duration_id,"onUpdate:modelValue":o[2]||(o[2]=r=>t.form.duration_id=r),searchable:!0,canClear:!1,noResultsText:"No result found",options:t.$page.props.durations,valueProp:"id",trackBy:"name",label:"name",classes:{container:t.$page.props.errors.duration_id?"relative mx-auto w-full flex flex-col items-center cursor-pointer border border-red-300 rounded-lg bg-white h-[2.35rem] rounded-md text-sm":"relative mx-auto w-full flex flex-col items-center cursor-pointer border border-gray-300 rounded-lg bg-white h-[2.35rem] rounded-md text-sm",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full mb-1",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base text-sm font-sans bg-white rounded-md pl-3.5 h-8",tags:"flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2",tag:"bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap",tagDisabled:"pr-2 opacity-50",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-black",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-gray-700",groupLabelSelected:"bg-green-600 text-white",groupLabelDisabled:"bg-gray-100 text-gray-300 cursor-not-allowed",groupLabelSelectedPointed:"bg-green-600 text-white opacity-90",groupLabelSelectedDisabled:"text-green-100 bg-green-600 bg-opacity-50 cursor-not-allowed",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["placeholder","modelValue","options","classes"])])]),e("div",$,[N,e("div",A,[n(a(i),{autocomplete:"off",placeholder:t.form.type_id,canDeselect:!1,modelValue:t.form.type_id,"onUpdate:modelValue":o[3]||(o[3]=r=>t.form.type_id=r),searchable:!0,canClear:!1,noResultsText:"No result found",options:t.$page.props.types,valueProp:"id",trackBy:"name",label:"name",classes:{container:t.$page.props.errors.type_id?"relative mx-auto w-full flex flex-col items-center cursor-pointer border border-red-300 rounded-lg bg-white h-[2.35rem] rounded-md text-sm":"relative mx-auto w-full flex flex-col items-center cursor-pointer border border-gray-300 rounded-lg bg-white h-[2.35rem] rounded-md text-sm",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full mb-1",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base text-sm font-sans bg-white rounded-md pl-3.5 h-8",tags:"flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2",tag:"bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap",tagDisabled:"pr-2 opacity-50",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-black",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-gray-700",groupLabelSelected:"bg-green-600 text-white",groupLabelDisabled:"bg-gray-100 text-gray-300 cursor-not-allowed",groupLabelSelectedPointed:"bg-green-600 text-white opacity-90",groupLabelSelectedDisabled:"text-green-100 bg-green-600 bg-opacity-50 cursor-not-allowed",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3 text-sm",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["placeholder","modelValue","options","classes"])])]),e("div",H,[U,e("div",M,[p(e("input",{type:"text",name:"promo_value",id:"promo_value",class:b(["bg-white focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.$page.props.errors.promo_value?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[4]||(o[4]=r=>t.form.promo_value=r),autocomplete:"off",placeholder:"Promo Amount or Promo Percentage"},null,2),[[d,t.form.promo_value]])])])])])])]),e("div",W,[e("div",F,[e("div",E,[e("div",q,[n(c,{buttonType:"gray",route:t.route("fee.promos")},{default:s(()=>[l("Cancel")]),_:1},8,["route"]),n(c,{type:"submit"},{default:s(()=>[l("Save ")]),_:1})])])])])])],32)])])]),_:1})],64))}});export{le as default};