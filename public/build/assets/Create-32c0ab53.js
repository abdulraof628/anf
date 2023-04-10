import{h as l,a as n,b as y,w as p,F as c,H as v,L as x,o as a,d as e,f as k,k as g,x as f,n as _,G as C,q as u,t as m,e as i,i as V}from"./app-825cb09d.js";import{B as L}from"./Authenticated-36680990.js";import{B as b}from"./Button-5cb0f01e.js";import{b as w}from"./toggle-e4d1351e.js";import"./ApplicationLogo-47fe7a8e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-ba7b10a7.js";const $={class:"md:grid md:grid-cols-2"},O={class:"md:mt-0 md:col-span-2"},T={class:"px-4 py-5 space-y-6 sm:p-6"},B={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},F={class:"sm:row-span-3"},U={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},N=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Programme Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),S={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},M={class:"mb-4"},j=e("label",{for:"programme_name",class:"block text-sm text-gray-700 font-bold"},[i(" Programme Name "),e("span",{class:"text-red-500"},"*")],-1),A={class:"mt-1 flex rounded-md shadow-sm"},D={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},P={class:"sm:row-span-3"},z={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},K=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Programme Levels and Fees"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),E={class:"grid grid-cols-8 sm:grid-cols-0 gap-0 sm:gap-4 items-end mb-3"},H={class:"grow"},q=e("label",{for:"programme_level",class:"block text-sm text-gray-700 font-bold"},[i(" Level "),e("span",{class:"text-red-500"},"*")],-1),G={class:"mt-1 flex rounded-md shadow-sm"},I={class:"grow"},J=e("label",{for:"programme_material_fee",class:"block text-sm text-gray-700 font-bold"},[i(" Material Fee "),e("span",{class:"text-red-500"},"*")],-1),Q={class:"mt-1 flex rounded-md shadow-sm"},R={class:"grow"},W=e("label",{for:"class_type",class:"block text-sm text-gray-700 font-bold"},[i(" Class Type "),e("span",{class:"text-red-500"},"*")],-1),X={class:"mt-1 flex rounded-md shadow-sm"},Y=e("option",{value:""},"-- Select Type --",-1),Z=["value"],ee={class:"grow"},se={for:"class_type_detail",class:"block text-sm text-gray-700 font-bold"},oe=e("span",{class:"text-red-500"},"*",-1),te={class:"mt-1 flex rounded-md shadow-sm"},re=["onUpdate:modelValue"],le={class:"grow"},ae=e("hr",null,null,-1),de={class:"shadow overflow-hidden border-b border-gray-200 rounded-t-sm rounded-b-none mt-3"},ie={class:"min-w-full divide-y divide-gray-200"},ne={class:"bg-blue-200"},me=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Level",-1),pe=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Class Type",-1),ce=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Material Fee",-1),_e={class:"px-4 py-1 text-center border border-gray-400"},ge=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Action",-1),ue={key:0},fe=e("td",{colspan:"8",class:"py-4 text-center"},"No levels added.",-1),be=[fe],he={else:"",class:"hover:bg-gray-200"},ye={class:"px-4 py-2 text-center border border-gray-400"},ve={class:"px-4 py-2 text-center border border-gray-400"},we={class:"px-4 py-2 text-center border border-gray-400"},xe={class:"px-4 py-2 text-center border border-gray-400"},ke={class:"px-4 py-2 text-center border border-gray-400"},Ce={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},Ve={class:"flex justify-between items-center"},Le={class:"flex space-x-2"},$e=e("label",{for:"",class:"block font-bold text-gray-700"},"Active",-1),Oe={class:"flex space-x-2"},Te={components:{Head:v,Link:x,Toggle:w},data(){return{class_types_detail:[],level:"",material_fee:"",class_type:"",fee:[],form:{programme_name:"",programme_info:[],programme_active:!0}}},watch:{class_type:{handler(){this.class_types_detail=[],this.$page.props.class_types_detail.forEach(r=>{r.class_type_id==this.class_type&&this.class_types_detail.push(r)})}}},methods:{submit(){this.$inertia.post(route("programmes.store"),this.form,{preserveState:!0})},addLevel(){this.level&&this.level!=0&&this.material_fee&&this.material_fee!=0&&this.class_type&&this.fee.length>0&&(this.form.programme_info.push({level:this.level,material_fee:this.material_fee,class_type:this.class_type,fees:this.fee}),this.form.programme_info.sort((r,s)=>r.level-s.level),this.clearForm())},deleteLevel(r){this.form.programme_info.splice(r,1)},numbersOnly(r){r=r||window.event;var s=r.which?r.which:r.keyCode;if(s>31&&(s<48||s>57)&&s!==46)r.preventDefault();else return!0},clearForm(){this.level="",this.material_fee="",this.class_type="",this.fee=[]}}},De=Object.assign(Te,{__name:"Create",setup(r){return(s,t)=>(a(),l(c,null,[n(y(v),{title:"Programmes"}),n(L,null,{header:p(()=>[]),default:p(()=>[e("div",$,[e("div",O,[e("form",{onSubmit:t[8]||(t[8]=k((...o)=>s.submit&&s.submit(...o),["prevent"]))},[e("div",T,[e("div",B,[e("div",F,[e("div",U,[N,e("div",S,[e("div",M,[j,e("div",A,[g(e("input",{type:"text",name:"programme_name",id:"programme_name",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.programme_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.programme_name=o),autocomplete:"off"},null,2),[[f,s.form.programme_name]])])])])])])]),e("div",D,[e("div",P,[e("div",z,[K,e("div",E,[e("div",H,[q,e("div",G,[g(e("input",{type:"text",name:"programme_level",id:"programme_level",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.programme_level?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[1]||(t[1]=o=>s.level=o),autocomplete:"off",onKeypress:t[2]||(t[2]=(...o)=>s.numbersOnly&&s.numbersOnly(...o))},null,34),[[f,s.level]])])]),e("div",I,[J,e("div",Q,[g(e("input",{type:"text",name:"programme_material_fee",id:"programme_material_fee",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.programme_material_fee?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[3]||(t[3]=o=>s.material_fee=o),autocomplete:"off",onKeypress:t[4]||(t[4]=(...o)=>s.numbersOnly&&s.numbersOnly(...o))},null,34),[[f,s.material_fee]])])]),e("div",R,[W,e("div",X,[g(e("select",{name:"class_type",id:"class_type",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.class_type?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":t[5]||(t[5]=o=>s.class_type=o),autocomplete:"off"},[Y,(a(!0),l(c,null,u(s.$page.props.class_types,(o,d)=>(a(),l("option",{value:o.id,key:d},m(o.name),9,Z))),128))],2),[[C,s.class_type]])])]),(a(!0),l(c,null,u(s.class_types_detail,o=>(a(),l("div",ee,[e("label",se,[i(m(o.label)+" ",1),oe]),e("div",te,[g(e("input",{type:"text",name:"class_type_detail",id:"class_type_detail",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.class_type_detail?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d=>s.fee[o.id]=d,autocomplete:"off",onKeypress:t[6]||(t[6]=(...d)=>s.numbersOnly&&s.numbersOnly(...d))},null,42,re),[[f,s.fee[o.id]]])])]))),256)),e("div",le,[n(b,{buttonType:"blue",class:_("px-6 py-3"),onClick:s.addLevel},{default:p(()=>[i("Add Level & Fee")]),_:1},8,["onClick"])])]),ae,e("div",de,[e("table",ie,[e("thead",ne,[e("tr",null,[me,pe,ce,(a(!0),l(c,null,u(this.$page.props.class_types_detail,o=>(a(),l("th",_e,m(o.label),1))),256)),ge])]),e("tbody",null,[s.form.programme_info.length?V("",!0):(a(),l("tr",ue,be)),(a(!0),l(c,null,u(s.form.programme_info,(o,d)=>(a(),l("tr",he,[e("td",ye,m(o.level),1),e("td",ve,m(s.$page.props.class_types[s.form.programme_info[d].class_type].name),1),e("td",we,m(o.material_fee),1),(a(!0),l(c,null,u(this.$page.props.class_types_detail,(h,Be)=>(a(),l("td",xe,m(s.form.programme_info[d].fees[h.id]),1))),256)),e("td",ke,[n(b,{buttonType:"danger",onClick:h=>s.deleteLevel(d)},{default:p(()=>[i("Delete")]),_:2},1032,["onClick"])])]))),256))])])])])])]),e("div",Ce,[e("div",Ve,[e("div",Le,[$e,n(y(w),{modelValue:s.form.programme_active,"onUpdate:modelValue":t[7]||(t[7]=o=>s.form.programme_active=o),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),e("div",Oe,[n(b,{buttonType:"gray",route:s.route("programmes")},{default:p(()=>[i("Cancel")]),_:1},8,["route"]),n(b,{type:"submit"},{default:p(()=>[i("Save")]),_:1})])])])])],32)])])]),_:1})],64))}});export{De as default};
