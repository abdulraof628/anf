import{r as _,o as p,c,a,u as b,w as l,F as x,H as w,L as k,b as L,d as e,h as P,v as S,t as i,g as u,q as h,e as y}from"./app-de3224c3.js";import{B as C}from"./Authenticated-3ff31369.js";import{B as f}from"./Button-6beb9af7.js";import{r as D}from"./PencilIcon-00e49228.js";import{r as O}from"./SearchIcon-058f91bc.js";import{r as A}from"./TrashIcon-652df266.js";import{P as v}from"./Pagination-05d00e7a.js";import"./moment-55cb88ed.js";import{s as m}from"./multiselect-58b7766e.js";import{V as M,M as $}from"./VueFinalModal.esm-236aa7ce.js";import{M as V}from"./Modal-1419cf0d.js";import"./ApplicationLogo-5ec5b21e.js";import"./XIcon-53186728.js";import"./perfect-scrollbar.esm-7a922f4b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TimeAgo-0298f640.js";const T={class:"py-4 px-4"},j={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mb-3"},B={class:"relative w-full"},I=e("svg",{class:"absolute top-2.5 left-3 h-5 w-5 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),z={class:"relative w-full"},N={class:"w-full"},H={class:"multiselect-single-label"},U={class:"w-full"},R={class:"multiselect-single-label"},F={class:"w-full self-center"},q={class:"overflow-x-auto"},E={class:"shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg"},J={class:"min-w-full divide-y divide-gray-200"},Z=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Centre"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),G={class:"bg-white divide-y divide-gray-200"},K={key:0},Q=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),W=[Q],X={class:"px-6 py-4 whitespace-nowrap"},Y={class:"text-sm text-gray-700"},ee={class:"px-6 py-4 whitespace-nowrap"},te={class:"text-sm font-medium text-gray-900 mb-1"},oe={class:"flex items-center text-sm space-x-2"},se={class:"text-xs px-2 py-1 border text-indigo-700 font-semibold border-indigo-500 rounded bg-indigo-200"},re={class:"text-xs px-2 py-1 border text-blue-700 font-semibold border-blue-500 rounded bg-blue-200"},ne={class:"px-6 py-4 whitespace-nowrap"},le={class:"text-sm font-medium text-gray-900"},ae={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},ie={class:"flex justify-center"},de={key:0,class:"flex pr-1"},pe={class:"flex items-center justify-between py-3 px-4 border-b rounded-t font-semibold"},ce=e("h3",{class:"text-gray-900 text font-semibold"}," Assessments ",-1),ue=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ge=[ue],be={class:"w-full p-3 text-xs md:text-sm"},fe={class:"flex flex-col md:items-center"},me={class:"flex-1 overflow-auto"},xe={class:"w-full"},he=e("thead",null,[e("tr",{class:"bg-indigo-100"},[e("th",{class:"px-3 py-1 border w-6/12 text-left"},"Unit"),e("th",{class:"px-3 py-1 border w-3/12 text-center"},"Pre"),e("th",{class:"px-3 py-1 border w-3/12 text-center"},"Post")])],-1),ye={class:"px-3 py-0.5 whitespace-nowrap"},we={class:"px-3 py-0.5 text-center"},ve=["value","onChange"],_e={class:"px-3 py-0.5 text-center"},ke=["value","onChange"],Le=e("hr",{class:"mt-3 mb-1"},null,-1),Pe={class:"flex justify-end mt-3 space-x-2"},Se={components:{SearchIcon:O,TrashIcon:A,PencilIcon:D,Head:w,Link:k,Multiselect:m,VueFinalModal:M,ModalsContainer:$,Pagination:v},props:{filter:Object},data(){return{showModal:!1,isOpen:!1,userID:"",confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:"",centre_id:this.filter.centre_id?this.filter.centre_id:"",programme_id:this.filter.programme_id?this.filter.programme_id:"",level:this.filter.level?this.filter.level:""},units:[],form:{student_id:"",programme_level_fee_id:"",assessments:[]}}},methods:{addClass(n){this.$inertia.get(this.route("assessments.create"),{centre_id:n})},editAssessment(n,t){this.form.assessments=[],L.get(route("assessments.create",n)).then(s=>{this.units=s.data,this.form.student_id=this.$page.props.assessments.data[t].student_id,this.form.programme_level_fee_id=this.$page.props.assessments.data[t].programme_level_fee_id;const d=JSON.parse(this.$page.props.assessments.data[t].assessments);this.units.map(o=>{this.form.assessments.push({unit_id:o.id,unit_name:o.name,pre:d&&d.find(r=>r.unit_id==o.id).pre?d.find(r=>r.unit_id==o.id).pre:"",post:d&&d.find(r=>r.unit_id==o.id).post?d.find(r=>r.unit_id==o.id).post:""})}),this.showModal=!0})},submit(){this.$inertia.post(this.route("assessments.store"),this.form,{preserveState:!1})},search(){this.$inertia.get(this.route("assessments"),this.params,{replace:!0,preserveState:!0})},getAssessmentPre(n){var t;return((t=this.form.assessments[n])==null?void 0:t.pre)||""},setAssessmentPre(n,t){this.form.assessments[n]&&(this.form.assessments[n].pre=t)},getAssessmentPost(n){var t;return((t=this.form.assessments[n])==null?void 0:t.post)||""},setAssessmentPost(n,t){this.form.assessments[n]&&(this.form.assessments[n].post=t)}}},Fe=Object.assign(Se,{__name:"Index",setup(n){return(t,s)=>{const d=_("debounce");return p(),c(x,null,[a(b(w),{title:"Assessments"}),a(C,null,{header:l(()=>[]),default:l(()=>[e("div",T,[e("div",j,[e("div",B,[I,P(e("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white rounded-md","onUpdate:modelValue":s[0]||(s[0]=o=>t.params.search=o)},null,512),[[d,t.search,"800ms"],[S,t.params.search]])]),e("div",z,[a(b(m),{onSelect:t.search,modelValue:t.params.centre_id,"onUpdate:modelValue":s[1]||(s[1]=o=>t.params.centre_id=o),valueProp:"ID",appendNewOption:!1,searchable:!0,options:t.$page.props.allowed_centres,clearOnSelect:!0,canClear:!1,canDeselect:!1,trackBy:"label",label:"label",placeholder:"Centre",classes:{container:"relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},null,8,["onSelect","modelValue","options"])]),e("div",N,[a(b(m),{onSelect:t.search,onDeselect:t.search,modelValue:t.params.programme_id,"onUpdate:modelValue":s[2]||(s[2]=o=>t.params.programme_id=o),valueProp:"id",appendNewOption:!1,searchable:!0,options:t.$page.props.options.programmes,clearOnSelect:!0,closeOnDeselect:!0,canClear:!1,canDeselect:!0,trackBy:"name",label:"name",placeholder:"All Programmes",classes:{container:"relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},{singlelabel:l(({value:o})=>[e("div",H,i(o.name),1)]),option:l(({option:o})=>[u(i(o.name)+" ("+i(o.country_name)+") ",1)]),_:1},8,["onSelect","onDeselect","modelValue","options"])]),e("div",U,[a(b(m),{onSelect:t.search,onDeselect:t.search,modelValue:t.params.level,"onUpdate:modelValue":s[3]||(s[3]=o=>t.params.level=o),valueProp:"level",appendNewOption:!1,searchable:!0,options:t.$page.props.options.levels,clearOnSelect:!1,closeOnDeselect:!0,canClear:!1,canDeselect:!0,trackBy:"level",label:"level",placeholder:"All Levels",classes:{container:"relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-gray-300 rounded-md bg-white text-base leading-snug outline-none h-10",containerDisabled:"cursor-default bg-gray-100",containerOpen:"rounded-b-none",containerActive:"border-2 border-gray-300",singleLabel:"flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border",singleLabelText:"overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",search:"w-full mt-1 h-8 absolute inset-0 focus:border-none outline-none focus:ring-0 appearance-none border-2 border-transparent focus:border-gray-300 text-base font-sans bg-white rounded-lg",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-500",clear:"pr-10 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 text-gray-800",clearIcon:"fa fa-heart bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",dropdownTop:"-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none w-full",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-2 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-black-700",groupLabelSelected:"bg-gray-100 text-black",groupLabelSelectedPointed:"bg-gray-100 text-black opacity-90",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-indigo-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-indigo-500 opacity-90",optionSelectedDisabled:"text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white text-left",noResults:"py-2 px-3 text-gray-600 bg-white text-left",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent"}},{singlelabel:l(({value:o})=>[e("div",R," Level "+i(o.level),1)]),option:l(({option:o})=>[u(" Level "+i(o.level),1)]),_:1},8,["onSelect","onDeselect","modelValue","options"])]),e("div",F,[a(f,{buttonType:"gray",class:"py-2 px-3",route:t.route("assessments")},{default:l(()=>[u("Clear Search")]),_:1},8,["route"])])]),e("div",q,[e("div",E,[e("table",J,[Z,e("tbody",G,[t.$page.props.assessments.data.length?h("",!0):(p(),c("tr",K,W)),(p(!0),c(x,null,y(t.$page.props.assessments.data,(o,r)=>(p(),c("tr",{class:"hover:bg-gray-200",key:o.ID},[e("td",X,[e("div",Y,i(r+1),1)]),e("td",ee,[e("div",te,i(o.student_name),1),e("div",oe,[e("div",se,i(o.programme_name),1),e("div",re," Level "+i(o.programme_level),1)])]),e("td",ne,[e("div",le,i(o.centre_name),1)]),e("td",ae,[e("div",ie,[t.$page.props.can.create_assessments?(p(),c("div",de,[a(f,{buttonType:"info",class:"py-1 px-4",onClick:g=>t.editAssessment(o.programme_level,r)},{default:l(()=>[u("View / Update")]),_:2},1032,["onClick"])])):h("",!0)])])]))),128))])]),a(v,{page_data:t.$page.props.assessments,params:t.params},null,8,["page_data","params"])])])]),a(V,{showModal:t.showModal,modalType:"sm",onHideModal:s[6]||(s[6]=o=>t.showModal=!1)},{header:l(()=>[e("div",pe,[ce,e("button",{type:"button",onClick:s[4]||(s[4]=o=>t.showModal=!1),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"default-modal"},ge)])]),content:l(()=>[e("div",be,[e("div",fe,[e("div",me,[e("table",xe,[he,e("tbody",null,[(p(!0),c(x,null,y(t.units,(o,r)=>(p(),c("tr",{key:o.id},[e("td",ye,i(o.name),1),e("td",we,[e("input",{class:"px-4 h-7 w-full text-center text-xs rounded placeholder:text-gray-400",type:"text",placeholder:"score",value:t.getAssessmentPre(r),onChange:g=>t.setAssessmentPre(r,g.target.value)},null,40,ve)]),e("td",_e,[e("input",{class:"px-4 h-7 w-full text-center text-xs rounded placeholder:text-gray-400",type:"text",placeholder:"score",value:t.getAssessmentPost(r),onChange:g=>t.setAssessmentPost(r,g.target.value)},null,40,ke)])]))),128))])])])]),Le,e("div",Pe,[a(f,{buttonType:"gray",class:"px-3 py-1.5",onClick:s[5]||(s[5]=o=>t.showModal=!1)},{default:l(()=>[u("Cancel")]),_:1}),a(f,{buttonType:"info",class:"px-3 py-1.5",onClick:t.submit},{default:l(()=>[u("Save")]),_:1},8,["onClick"])])])]),_:1},8,["showModal"])]),_:1})],64)}}});export{Fe as default};