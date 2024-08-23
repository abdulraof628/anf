import{o as r,c as a,a as d,u as f,w as h,F as c,H as w,L as S,d as e,l as O,h as m,m as g,n,e as _,t as p,i as x,v as D,g as i}from"./app-b18481c7.js";import{B as H}from"./Authenticated-f888241f.js";import{B as v}from"./Button-99d4fd31.js";import{Z as y}from"./vue-datepicker-0da409d9.js";import{b as k}from"./perfect-scrollbar.esm-299e06ac.js";import{s as V}from"./multiselect-e7ea31ef.js";import{h as u}from"./moment-55cb88ed.js";import"./ApplicationLogo-cc6f311f.js";import"./XIcon-95e4a431.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-4b513232.js";const j={class:"md:grid md:grid-cols-2"},C={class:"md:mt-0 md:col-span-2"},$={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},L={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},T={class:"sm:row-span-3"},P={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},U=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800"},"Class Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),z={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},B={class:"mb-4"},M=e("label",{for:"centre",class:"block text-sm font-bold text-gray-700"},[i(" Centre "),e("span",{class:"text-red-500"},"*")],-1),I={class:"mt-1 flex rounded-md.shadow-sm"},A={class:"mb-4"},E=e("label",{for:"programme",class:"block text-sm font-bold text-gray-700"},[i(" Programme "),e("span",{class:"text-red-500"},"*")],-1),N={class:"mt-1 flex rounded-md shadow-sm"},F=e("option",{value:""},"-- Select Programme --",-1),Z=["value"],K={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},R={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},q={class:"mb-4"},G=e("label",{for:"class_type",class:"block text-sm font-bold text-gray-700"},[i(" Class Type "),e("span",{class:"text-red-500"},"*")],-1),J={class:"mt-1 flex rounded-md shadow-sm"},Q=["disabled"],W=e("option",{value:""},"-- Select Type --",-1),X=["value"],Y={class:"mb-4"},ee=e("label",{for:"programme_level_id",class:"block text-sm font-bold text-gray-700"},[i(" Class Level "),e("span",{class:"text-red-500"},"*")],-1),se={class:"mt-1 flex rounded-md shadow-sm"},te=["disabled"],oe=e("option",{value:""},"-- Select Level --",-1),le=["value"],re={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},ae={class:"mb-4"},ie=e("label",{for:"class_day",class:"block text-sm font-bold text-gray-700"},[i(" Class Day "),e("span",{class:"text-red-500"},"*")],-1),de={class:"mt-1 flex rounded-md shadow-sm"},ne=e("option",{value:""},"-- Select Day --",-1),ce=["value"],me={class:"mb-4"},pe=e("label",{for:"class_method",class:"block text-sm font-bold text-gray-700"},[i(" Class Methods "),e("span",{class:"text-red-500"},"*")],-1),ue={class:"mt-1 flex rounded-md shadow-sm"},fe=e("option",{value:""},"-- Select Method --",-1),ge=["value"],_e={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},be={class:"mb-4"},he=e("label",{for:"start_time",class:"block text-sm font-bold text-gray-700"},[i(" Start Time "),e("span",{class:"text-red-500"},"*")],-1),ye={class:"mb-4"},xe=e("label",{for:"end_time",class:"block text-sm font-bold text-gray-700"},[i(" End Time "),e("span",{class:"text-red-500"},"*")],-1),ve={class:"grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4"},we={class:"mb-4"},ke=e("label",{for:"class_capacity",class:"block text-sm font-bold text-gray-700"},[i(" Class Capacity "),e("span",{class:"text-red-500"},"*")],-1),Ve={class:"mt-1 flex rounded-md shadow-sm"},Se=e("div",{class:"border-b border-dashed border-indigo-900 mt-4 mb-5"},null,-1),Oe={class:"flex items-center justify-between"},De={class:"flex space-x-2"},He=e("label",{for:"",class:"block font-bold text-gray-700"},"Active",-1),je={class:"flex space-x-2"},Ce={components:{Head:w,Link:S,Datepicker:y,Toggle:k,Multiselect:V},props:{class_info:Object,class_types:Object,class_levels:Object,programme_list:Object,day_list:Object,type_list:Object,method_list:Object},data(){return{disable_class_types:!1,disable_class_levels:!1,class_types:this.$page.props.class_types?this.$page.props.class_types:[],class_levels:this.$page.props.class_levels?this.$page.props.class_levels:[],form:{class_id:this.class_info?this.class_info.class_id:"",centre_id:this.class_info?this.class_info.centre_id:"",programme_id:this.class_info?this.class_info.programme_id:"",programme_level_id:this.class_info?this.class_info.programme_level_id:"",class_day:this.class_info?this.class_info.class_day_id:"",start_time:{hours:new Date(new u(this.class_info.start_time,"HH:mm:ss")).getHours(),minutes:new Date(new u(this.class_info.start_time,"HH:mm:ss")).getMinutes(),seconds:new Date(new u(this.class_info.start_time,"HH:mm:ss")).getSeconds()},end_time:{hours:new Date(new u(this.class_info.end_time,"HH:mm:ss")).getHours(),minutes:new Date(new u(this.class_info.end_time,"HH:mm:ss")).getMinutes(),seconds:new Date(new u(this.class_info.end_time,"HH:mm:ss")).getSeconds()},class_capacity:this.class_info?this.class_info.capacity:"",class_type:this.class_info?this.class_info.class_type_id:"",class_method:this.class_info?this.class_info.class_method_id:"",class_status:this.class_info?this.class_info.status:!1}}},watch:{"form.programme_id":{handler(){this.form.programme_id&&(this.disable_class_types=!0,this.disable_class_levels=!0,this.form.class_type="",this.form.programme_level_id="",axios.get(route("classes.get_class_types"),{params:{programme_id:this.form.programme_id}}).then(l=>{this.class_types=l.data,this.disable_class_types=!1}))},deep:!0},"form.class_type":{handler(){this.form.programme_id&&this.form.class_type&&(this.disable_class_levels=!0,this.form.programme_level_id="",axios.get(route("classes.get_class_levels"),{params:{programme_id:this.form.programme_id,class_type:this.form.class_type}}).then(l=>{this.class_levels=l.data,this.disable_class_levels=!1}))},deep:!0}},methods:{submit(){this.$inertia.post(route("classes.update"),this.form,{preserveState:!0})},numberOnly(l){l=l||window.event;var s=l.which?l.which:l.keyCode;if(s>31&&(s<48||s>57)&&s!==46)l.preventDefault();else return!0}}},Ne=Object.assign(Ce,{__name:"Edit",setup(l){return(s,o)=>(r(),a(c,null,[d(f(w),{title:"Classes"}),d(H,null,{header:h(()=>[]),default:h(()=>[e("div",j,[e("div",C,[e("form",{onSubmit:o[11]||(o[11]=O((...t)=>s.submit&&s.submit(...t),["prevent"]))},[e("div",$,[e("div",L,[e("div",T,[e("div",P,[U,e("div",z,[e("div",B,[M,e("div",I,[d(f(V),{modelValue:s.form.centre_id,"onUpdate:modelValue":o[0]||(o[0]=t=>s.form.centre_id=t),valueProp:"ID",searchable:!0,options:s.$page.props.allowed_centres,clearOnSelect:!0,canClear:!1,canDeselect:!1,trackBy:"label",label:"label",classes:{container:s.$page.props.errors.centre_id?"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-red-300 rounded-md bg-white text-base leading-snug outline-none":"relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-[38px]",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerOpenTop:"rounded-t-none",containerActive:"border border-indigo-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5 h-9",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",caret:"bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"}},null,8,["modelValue","options","classes"])])]),e("div",A,[E,e("div",N,[m(e("select",{name:"programme",id:"programme",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.programme_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[1]||(o[1]=t=>s.form.programme_id=t),autocomplete:"off"},[F,(r(!0),a(c,null,_(l.programme_list,(t,b)=>(r(),a("option",{value:t.id,key:b},p(t.name)+" ("+p(t.country_name)+")",9,Z))),128))],2),[[g,s.form.programme_id]])])])]),e("div",K,[e("div",R,[e("div",q,[G,e("div",J,[m(e("select",{name:"class_type",id:"class_type",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.class_type?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[2]||(o[2]=t=>s.form.class_type=t),autocomplete:"off",disabled:s.disable_class_types},[W,(r(!0),a(c,null,_(s.class_types,(t,b)=>(r(),a("option",{value:t.id,key:b},p(t.name),9,X))),128))],10,Q),[[g,s.form.class_type]])])]),e("div",Y,[ee,e("div",se,[m(e("select",{name:"programme_level_id",id:"programme_level_id",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.programme_level_id?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[3]||(o[3]=t=>s.form.programme_level_id=t),autocomplete:"off",disabled:s.disable_class_levels},[oe,(r(!0),a(c,null,_(s.class_levels,(t,b)=>(r(),a("option",{value:t.id,key:t},p(t.level),9,le))),128))],10,te),[[g,s.form.programme_level_id]])])])]),e("div",re,[e("div",ae,[ie,e("div",de,[m(e("select",{name:"class_day",id:"class_day",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.class_day?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[4]||(o[4]=t=>s.form.class_day=t),autocomplete:"off"},[ne,(r(!0),a(c,null,_(l.day_list,t=>(r(),a("option",{value:t.id,key:t},p(t.name),9,ce))),128))],2),[[g,s.form.class_day]])])]),e("div",me,[pe,e("div",ue,[m(e("select",{name:"class_method",id:"class_method",class:n(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.class_method?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[5]||(o[5]=t=>s.form.class_method=t),autocomplete:"off"},[fe,(r(!0),a(c,null,_(l.method_list,t=>(r(),a("option",{value:t.id,key:t},p(t.name),9,ge))),128))],2),[[g,s.form.class_method]])])])])]),e("div",_e,[e("div",be,[he,d(f(y),{class:n("mt-1 rounded-md shadow-sm"),style:x(s.$page.props.errors.start_time?"--dp-border-color: #fa9e9e":""),modelValue:s.form.start_time,"onUpdate:modelValue":o[6]||(o[6]=t=>s.form.start_time=t),timePicker:!0,is24:!1},null,8,["style","modelValue"])]),e("div",ye,[xe,d(f(y),{class:n("mt-1 rounded-md shadow-sm"),style:x(s.$page.props.errors.end_time?"--dp-border-color: #fa9e9e":""),modelValue:s.form.end_time,"onUpdate:modelValue":o[7]||(o[7]=t=>s.form.end_time=t),timePicker:!0,is24:!1},null,8,["style","modelValue"])])]),e("div",ve,[e("div",we,[ke,e("div",Ve,[m(e("input",{type:"number",name:"class_capacity",id:"class_capacity",class:n(["capitalize focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.class_capacity?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[8]||(o[8]=t=>s.form.class_capacity=t),autocomplete:"off",onKeypress:o[9]||(o[9]=(...t)=>s.numberOnly&&s.numberOnly(...t))},null,34),[[D,s.form.class_capacity]])])])]),Se,e("div",Oe,[e("div",De,[He,d(f(k),{modelValue:s.form.class_status,"onUpdate:modelValue":o[10]||(o[10]=t=>s.form.class_status=t),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),e("div",je,[d(v,{buttonType:"gray",route:s.route("classes")},{default:h(()=>[i("Cancel")]),_:1},8,["route"]),d(v,{type:"submit"},{default:h(()=>[i("Save")]),_:1})])])])])])])],32)])])]),_:1})],64))}});export{Ne as default};
