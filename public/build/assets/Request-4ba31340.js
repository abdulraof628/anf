import{i as x,o,c as r,a as p,w as v,F as n,d as e,u as b,h as c,l as m,n as i,e as u,t as _,G as h,v as w,g as l}from"./app-462a769a.js";import q from"./Layout-45547f1b.js";import{s as k}from"./multiselect-f7d8c714.js";import{Z as f}from"./vue-datepicker-a7ae18d9.js";import"./moment-a9aaa855.js";import"./Authenticated-4c85926c.js";import"./ApplicationLogo-4b85744d.js";import"./Button-b3e73baf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-23a15b91.js";import"./vue3-perfect-scrollbar-d7092836.js";import"./PencilIcon-fdca7c88.js";import"./SearchIcon-468465ae.js";import"./menu-e28ab7a2.js";import"./keyboard-d111b3e2.js";import"./use-resolve-button-type-aa122809.js";import"./transition-22c55c34.js";const $={class:"flex-col w-full pt-4 px-4 space-y-3"},S={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},V=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Class Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),j={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},M={class:"mb-4"},C=e("label",{for:"centre",class:"block text-sm font-bold text-gray-700"},[l(" Centre "),e("span",{class:"text-red-500"},"*")],-1),P={class:"mt-1 flex rounded-md.shadow-sm"},T={class:"mb-4"},z=e("label",{for:"programme",class:"block text-sm font-bold text-gray-700"},[l(" Programme "),e("span",{class:"text-red-500"},"*")],-1),L={class:"mt-1 flex rounded-md shadow-sm"},O=e("option",{value:""},"-- Select Programme --",-1),D=["value"],U={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},B={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},I={class:"mb-4"},N=e("label",{for:"class_type",class:"block text-sm font-bold text-gray-700"},[l(" Class Type "),e("span",{class:"text-red-500"},"*")],-1),A={class:"mt-1 flex rounded-md shadow-sm"},H=e("option",{value:""},"-- Select Type --",-1),R=["value"],E={class:"mb-4"},F=e("label",{for:"programme_level_id",class:"block text-sm font-bold text-gray-700"},[l(" Class Level "),e("span",{class:"text-red-500"},"*")],-1),Z={class:"mt-1 flex rounded-md shadow-sm"},G=e("option",{value:""},"-- Select Level --",-1),K=["value"],J={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},Q={class:"mb-4"},W=e("label",{for:"class_day",class:"block text-sm font-bold text-gray-700"},[l(" Class Day "),e("span",{class:"text-red-500"},"*")],-1),X={class:"mt-1 flex rounded-md shadow-sm"},Y=e("option",{value:""},"-- Select Day --",-1),ee=["value"],te={class:"mb-4"},se=e("label",{for:"class_method",class:"block text-sm font-bold text-gray-700"},[l(" Class Methods "),e("span",{class:"text-red-500"},"*")],-1),ae={class:"mt-1 flex rounded-md shadow-sm"},oe=e("option",{value:""},"-- Select Method --",-1),re=["value"],le={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},de={class:"mb-4"},ie=e("label",{for:"start_time",class:"block text-sm font-bold text-gray-700"},[l(" Start Time "),e("span",{class:"text-red-500"},"*")],-1),ne={class:"mb-4"},ce=e("label",{for:"end_time",class:"block text-sm font-bold text-gray-700"},[l(" End Time "),e("span",{class:"text-red-500"},"*")],-1),pe={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},me={class:"mb-4"},ue=e("label",{for:"class_capacity",class:"block text-sm font-bold text-gray-700"},[l(" Class Capacity "),e("span",{class:"text-red-500"},"*")],-1),_e={class:"mt-1 flex rounded-md shadow-sm"},ge={class:"bg-white rounded-lg shadow-xl p-4"},be={class:"flex space-x-5"},he={props:{request_data:Object,created_by:String,notification_data:Object},data(){return{form:{notification_id:this.notification_data.id,class_id:this.request_data.class_id?this.request_data.class_id:"",centre_id:this.request_data.centre_id?this.request_data.centre_id:"",programme_id:this.request_data.programme_id?this.request_data.programme_id:"",programme_level_id:this.request_data.programme_level_id?this.request_data.programme_level_id:"",class_day:this.request_data.class_day?this.request_data.class_day:"",start_time:this.request_data.start_time,end_time:this.request_data.end_time,class_capacity:this.request_data.class_capacity?this.request_data.class_capacity:"",class_type:this.request_data.class_type?this.request_data.class_type:"",class_method:this.request_data.class_method?this.request_data.class_method:"",created_by:this.created_by?this.created_by:""},record_matched:{class_id:this.checkMatch(this.request_data.class_id,this.request_data.class_info.class_id),centre_id:this.checkMatch(this.request_data.centre_id,this.request_data.class_info.centre_id),programme_id:this.checkMatch(this.request_data.programme_id,this.request_data.class_info.programme_id),programme_level_id:this.checkMatch(this.request_data.programme_level_id,this.request_data.class_info.programme_level_id),class_day:this.checkMatch(this.request_data.class_day,this.request_data.class_info.class_day_id),start_time:this.checkMatch(this.joinArrayTime(this.request_data.start_time),this.request_data.class_info.start_time),end_time:this.checkMatch(this.joinArrayTime(this.request_data.end_time),this.request_data.class_info.end_time),class_capacity:this.checkMatch(this.request_data.class_capacity,this.request_data.class_info.capacity),class_type:this.checkMatch(this.request_data.class_type,this.request_data.class_info.class_type_id),class_method:this.checkMatch(this.request_data.class_method,this.request_data.class_info.class_method_id)}}},methods:{approve(){this.$inertia.post(route("approve_class_update"),this.form,{preserveScroll:!0})},reject(){this.$inertia.post(route("reject_programme_update"),this.form,{preserveScroll:!0})},zeroPad(d){return String(d).padStart(2,"0")},joinArrayTime(d){return this.zeroPad(d.hours)+":"+this.zeroPad(d.minutes)+":"+this.zeroPad(d.seconds)},checkMatch(d,t){return d===t}}},Oe=Object.assign(he,{__name:"Request",setup(d){return(t,a)=>{const y=x("Head");return o(),r(n,null,[p(y,{title:"Notifications"}),p(q,null,{default:v(()=>[e("div",$,[e("div",S,[V,e("div",j,[e("div",M,[C,e("div",P,[p(b(k),{modelValue:t.$page.props.request_data.centre_id,"onUpdate:modelValue":a[0]||(a[0]=s=>t.$page.props.request_data.centre_id=s),valueProp:"ID",searchable:!0,options:t.$page.props.allowed_centres,clearOnSelect:!0,canClear:!1,canDeselect:!1,disabled:!0,trackBy:"label",label:"label",classes:{container:t.record_matched.centre_id?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none h-[38px]":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-green-500 rounded bg-white text-base leading-snug outline-none",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])]),e("div",T,[z,e("div",L,[c(e("select",{name:"programme",id:"programme",class:i(["bg-gray-100 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.record_matched.programme_id?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":a[1]||(a[1]=s=>t.form.programme_id=s),autocomplete:"off",disabled:!0},[O,(o(!0),r(n,null,u(t.$page.props.request_data.programme_list,(s,g)=>(o(),r("option",{value:s.id,key:g},_(s.name),9,D))),128))],2),[[m,t.form.programme_id]])])])]),e("div",U,[e("div",B,[e("div",I,[N,e("div",A,[c(e("select",{name:"class_type",id:"class_type",class:i(["bg-gray-100 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.record_matched.class_type?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":a[2]||(a[2]=s=>t.$page.props.request_data.class_type=s),autocomplete:"off",disabled:!0},[H,(o(!0),r(n,null,u(t.$page.props.request_data.class_types,(s,g)=>(o(),r("option",{value:s.id,key:g},_(s.name),9,R))),128))],2),[[m,t.$page.props.request_data.class_type]])])]),e("div",E,[F,e("div",Z,[c(e("select",{name:"programme_level_id",id:"programme_level_id",class:i(["bg-gray-100 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.record_matched.programme_level_id?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":a[3]||(a[3]=s=>t.$page.props.request_data.programme_level_id=s),autocomplete:"off",disabled:!0},[G,(o(!0),r(n,null,u(t.$page.props.request_data.class_levels,(s,g)=>(o(),r("option",{value:s.id,key:s},_(s.level),9,K))),128))],2),[[m,t.$page.props.request_data.programme_level_id]])])])]),e("div",J,[e("div",Q,[W,e("div",X,[c(e("select",{disabled:!0,name:"class_day",id:"class_day",class:i(["bg-gray-100 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.record_matched.class_day?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":a[4]||(a[4]=s=>t.$page.props.request_data.class_day=s),autocomplete:"off"},[Y,(o(!0),r(n,null,u(t.$page.props.request_data.day_list,s=>(o(),r("option",{value:s.id,key:s},_(s.name),9,ee))),128))],2),[[m,t.$page.props.request_data.class_day]])])]),e("div",te,[se,e("div",ae,[c(e("select",{disabled:!0,name:"class_method",id:"class_method",class:i(["bg-gray-100 focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.record_matched.class_method?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":a[5]||(a[5]=s=>t.$page.props.request_data.class_method=s),autocomplete:"off"},[oe,(o(!0),r(n,null,u(t.$page.props.request_data.method_list,s=>(o(),r("option",{value:s.id,key:s},_(s.name),9,re))),128))],2),[[m,t.$page.props.request_data.class_method]])])])])]),e("div",le,[e("div",de,[ie,p(b(f),{disabled:!0,class:i("mt-1 rounded-md shadow-sm"),style:h(t.record_matched.start_time?"":"--dp-border-color: #28c762"),modelValue:t.form.start_time,"onUpdate:modelValue":a[6]||(a[6]=s=>t.form.start_time=s),timePicker:!0,is24:!1},null,8,["style","modelValue"])]),e("div",ne,[ce,p(b(f),{disabled:!0,class:i("mt-1 rounded-md shadow-sm"),style:h(t.record_matched.end_time?"":"--dp-border-color: #28c762"),modelValue:t.form.end_time,"onUpdate:modelValue":a[7]||(a[7]=s=>t.form.end_time=s),timePicker:!0,is24:!1},null,8,["style","modelValue"])])]),e("div",pe,[e("div",me,[ue,e("div",_e,[c(e("input",{disabled:!0,type:"number",name:"class_capacity",id:"class_capacity",class:i(["bg-gray-100 capitalize focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.record_matched.class_capacity?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":a[8]||(a[8]=s=>t.$page.props.request_data.class_capacity=s),autocomplete:"off",onKeypress:a[9]||(a[9]=(...s)=>t.numberOnly&&t.numberOnly(...s))},null,34),[[w,t.$page.props.request_data.class_capacity]])])])])]),e("div",ge,[e("div",be,[e("button",{type:"submit",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:col-start-2 sm:text-sm",onClick:a[10]||(a[10]=(...s)=>t.approve&&t.approve(...s))},"Approve"),e("button",{type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:col-start-1 sm:text-sm",onClick:a[11]||(a[11]=(...s)=>t.reject&&t.reject(...s))},"Reject")])])])]),_:1})],64)}}});export{Oe as default};
