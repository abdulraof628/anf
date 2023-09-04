import{c as l,b as m,u as v,w as p,F as _,L as x,o as a,H as k,d as e,e as $,f as g,l as f,n as c,g as V,h as u,t as n,k as i,j as y}from"./app-2b133d7b.js";import{B as C}from"./Authenticated-90cb91c3.js";import{B as h}from"./Button-17cde4f9.js";import{b as w}from"./toggle-086b2a88.js";import"./ApplicationLogo-43dea6bb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-73e31157.js";import"./default.css_vue_type_style_index_0_src_true_lang-b3de7b5e.js";import"./moment-fbc5633a.js";const L={class:"md:grid md:grid-cols-2"},O={class:"md:mt-0 md:col-span-2"},T={class:"px-4 py-5 space-y-6 sm:p-6"},B={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},F={class:"sm:row-span-3"},M={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},U=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Programme Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),j={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},N={class:"mb-4"},S=e("label",{for:"programme_name",class:"block text-sm text-gray-700 font-bold"},[i(" Programme Name "),e("span",{class:"text-red-500"},"*")],-1),E={class:"mt-1 flex rounded-md shadow-sm"},A={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},D={class:"sm:row-span-3"},P={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},z=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Programme Levels & Fees"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),K={class:"grid grid-cols-8 sm:grid-cols-0 gap-0 sm:gap-4 items-end mb-3"},H={class:"grow"},R=e("label",{for:"programme_level",class:"block text-sm text-gray-700 font-bold"},[i(" Level "),e("span",{class:"text-red-500"},"*")],-1),I={class:"mt-1 flex rounded-md shadow-sm"},q={class:"grow"},G=e("label",{for:"programme_material_fee",class:"block text-sm text-gray-700 font-bold"},[i(" Material Fee "),e("span",{class:"text-red-500"},"*")],-1),J={class:"mt-1 flex rounded-md shadow-sm"},Q={class:"grow"},W=e("label",{for:"class_type",class:"block text-sm text-gray-700 font-bold"},[i(" Class Type "),e("span",{class:"text-red-500"},"*")],-1),X={class:"mt-1 flex rounded-md shadow-sm"},Y=e("option",{value:""},"-- Select Type --",-1),Z=["value"],ee={class:"grow"},se={for:"class_type_detail",class:"block text-sm text-gray-700 font-bold"},oe=e("span",{class:"text-red-500"},"*",-1),re={class:"mt-1 flex rounded-md shadow-sm"},te=["onUpdate:modelValue"],le={class:"grow"},ae=e("hr",null,null,-1),de={class:"shadow overflow-hidden border-b border-gray-200 rounded-t-sm rounded-b-none mt-3"},ie={class:"min-w-full divide-y divide-gray-200 rounded rounded-t"},me={class:"bg-blue-200"},ne=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Level",-1),pe=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Class Type",-1),_e=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Material Fee",-1),ce={class:"px-4 py-1 text-center border border-gray-400"},ge=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Action",-1),ue={key:0},fe=e("td",{colspan:"8",class:"py-4 text-center"},"No levels added.",-1),he=[fe],be={else:"",class:"hover:bg-gray-200"},ye={class:"px-4 py-2 text-center border border-gray-400"},ve={class:"px-4 py-2 text-center border border-gray-400"},we={class:"px-4 py-2 text-center border border-gray-400"},xe={key:0},ke={class:"px-4 py-2 text-center border border-gray-400"},$e={key:0},Ve={class:"px-4 py-2 text-center border border-gray-400"},Ce={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},Le={class:"flex justify-between items-center"},Oe={class:"flex space-x-2"},Te=e("label",{for:"",class:"block font-bold text-gray-700"},"Active",-1),Be={class:"flex space-x-2"},Fe={components:{Link:x,Toggle:w},data(){return{class_type:"",class_types_detail:[],level:"",material_fee:"",fee:[],form:{programme_id:this.$page.props.programme_id?this.$page.props.programme_id:"",programme_name:this.$page.props.programme_name?this.$page.props.programme_name:"",programme_info:this.$page.props.programme_levels?this.$page.props.programme_levels:[],programme_level_to_add:[],programme_level_to_delete:[],programme_active:!0}}},watch:{class_type:{handler(){this.class_types_detail=[],this.$page.props.class_types_detail.forEach(t=>{t.class_type_id==this.class_type&&this.class_types_detail.push(t)})}}},methods:{submit(){this.$inertia.post(route("programmes.update"),this.form,{preserveState:!0})},addLevel(){if(this.level&&this.level!=0&&this.material_fee&&this.material_fee!=0&&this.class_type&&this.fee.length>0){var t={};this.fee.forEach((r,o)=>{Object.assign(t,{[o]:r})});const s=this.form.programme_info.length+1;this.form.programme_info.push({temp_id:s,level:this.level,material_fee:this.material_fee,class_type_id:this.class_type,fees:t}),this.form.programme_level_to_add.push({temp_id:s,level:this.level,material_fee:this.material_fee,class_type:this.class_type,fees:t}),this.form.programme_info.sort((r,o)=>r.level-o.level),this.form.programme_level_to_add.sort((r,o)=>r.level-o.level),this.clearForm()}},deleteLevel(t,s){this.form.programme_info.filter(r=>{r.programme_level_id==s?(this.form.programme_level_to_delete.push(s),this.form.programme_info.splice(t,1)):this.form.programme_level_to_add.filter((o,d)=>{o.temp_id==s&&(this.form.programme_level_to_add.splice(d,1),this.form.programme_info.splice(t,1))})})},numbersOnly(t){t=t||window.event;var s=t.which?t.which:t.keyCode;if(s>31&&(s<48||s>57)&&s!==46)t.preventDefault();else return!0},clearForm(){this.level="",this.material_fee="",this.class_type="",this.fee=[]}}},Ke=Object.assign(Fe,{__name:"Edit",setup(t){return(s,r)=>(a(),l(_,null,[m(v(k),{title:"Programmes"}),m(C,null,{header:p(()=>[]),default:p(()=>[e("div",L,[e("div",O,[e("form",{onSubmit:r[8]||(r[8]=$((...o)=>s.submit&&s.submit(...o),["prevent"]))},[e("div",T,[e("div",B,[e("div",F,[e("div",M,[U,e("div",j,[e("div",N,[S,e("div",E,[g(e("input",{type:"text",name:"programme_name",id:"programme_name",class:c(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.programme_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[0]||(r[0]=o=>s.form.programme_name=o),autocomplete:"off"},null,2),[[f,s.form.programme_name]])])])])])])]),e("div",A,[e("div",D,[e("div",P,[z,e("div",K,[e("div",H,[R,e("div",I,[g(e("input",{type:"text",name:"programme_level",id:"programme_level",class:c(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.programme_level?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[1]||(r[1]=o=>s.level=o),autocomplete:"off",onKeypress:r[2]||(r[2]=(...o)=>s.numbersOnly&&s.numbersOnly(...o))},null,34),[[f,s.level]])])]),e("div",q,[G,e("div",J,[g(e("input",{type:"text",name:"programme_material_fee",id:"programme_material_fee",class:c(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.programme_material_fee?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[3]||(r[3]=o=>s.material_fee=o),autocomplete:"off",onKeypress:r[4]||(r[4]=(...o)=>s.numbersOnly&&s.numbersOnly(...o))},null,34),[[f,s.material_fee]])])]),e("div",Q,[W,e("div",X,[g(e("select",{name:"class_type",id:"class_type",class:c(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.class_type?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[5]||(r[5]=o=>s.class_type=o),autocomplete:"off"},[Y,(a(!0),l(_,null,u(s.$page.props.class_types,(o,d)=>(a(),l("option",{value:o.id,key:d},n(o.name),9,Z))),128))],2),[[V,s.class_type]])])]),(a(!0),l(_,null,u(s.class_types_detail,o=>(a(),l("div",ee,[e("label",se,[i(n(o.label)+" ",1),oe]),e("div",re,[g(e("input",{type:"text",name:"class_type_detail",id:"class_type_detail",class:c(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",s.$page.props.errors.class_type_detail?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":d=>s.fee[o.id]=d,autocomplete:"off",onKeypress:r[6]||(r[6]=(...d)=>s.numbersOnly&&s.numbersOnly(...d))},null,42,te),[[f,s.fee[o.id]]])])]))),256)),e("div",le,[m(h,{buttonType:"blue",class:c("px-6 py-3"),onClick:s.addLevel},{default:p(()=>[i("Add Level & Fee")]),_:1},8,["onClick"])])]),ae,e("div",de,[e("table",ie,[e("thead",me,[e("tr",null,[ne,pe,_e,(a(!0),l(_,null,u(this.$page.props.class_types_detail,o=>(a(),l("th",ce,n(o.label),1))),256)),ge])]),e("tbody",null,[s.form.programme_info.length?y("",!0):(a(),l("tr",ue,he)),(a(!0),l(_,null,u(s.form.programme_info,(o,d)=>(a(),l("tr",be,[e("td",ye,n(o.level),1),e("td",ve,n(s.$page.props.class_types[o.class_type_id].name),1),e("td",we,[o.material_fee!=null?(a(),l("span",xe,"RM ")):y("",!0),i(n(o.material_fee),1)]),(a(!0),l(_,null,u(this.$page.props.class_types_detail,(b,Me)=>(a(),l("td",ke,[s.form.programme_info[d].fees[b.id]!=null?(a(),l("span",$e,"RM ")):y("",!0),i(n(s.form.programme_info[d].fees[b.id]),1)]))),256)),e("td",Ve,[m(h,{buttonType:"danger",onClick:b=>s.deleteLevel(d,o.programme_level_id?o.programme_level_id:o.temp_id)},{default:p(()=>[i("Delete")]),_:2},1032,["onClick"])])]))),256))])])])])])]),e("div",Ce,[e("div",Le,[e("div",Oe,[Te,m(v(w),{modelValue:s.form.programme_active,"onUpdate:modelValue":r[7]||(r[7]=o=>s.form.programme_active=o),classes:{container:"inline-block",toggle:"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-green-500 border-green-500 justify-start text-white",toggleOff:"bg-gray-400 border-gray-400 justify-end text-gray-700"}},null,8,["modelValue"])]),e("div",Be,[m(h,{buttonType:"gray",route:s.route("programmes")},{default:p(()=>[i("Cancel")]),_:1},8,["route"]),m(h,{type:"submit"},{default:p(()=>[i("Save")]),_:1})])])])])],32)])])]),_:1})],64))}});export{Ke as default};
