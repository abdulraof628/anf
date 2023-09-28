import{c as n,b as i,u as f,w as r,F as c,L as g,o as a,H as h,d as s,e as v,f as p,l as u,n as b,k as d,h as x,t as y}from"./app-abb14225.js";import{B as w}from"./Authenticated-cf6f3e2c.js";import{B as l}from"./Button-8060ba77.js";import{b as k}from"./toggle-5ed297c9.js";import"./ApplicationLogo-86d866bd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-9a0666f4.js";import"./TimeAgo-fee1d65d.js";import"./moment-fbc5633a.js";const S={class:"md:grid md:grid-cols-2"},B={class:"md:mt-0 md:col-span-2"},C={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},P={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},T={class:"sm:row-span-3"},V=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Permission Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),$={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},L={class:"mb-4"},N=s("label",{for:"permission",class:"block text-sm text-gray-700 font-bold"},[d("Permission"),s("span",{class:"text-red-500"},"*")],-1),j={class:"mt-1 flex rounded-md shadow-sm"},z={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},A={class:"sm:row-span-3"},D=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Sub Permission Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),F={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},H={class:"flex items-end justify-between space-x-2"},I={class:"flex-1 mb-4"},M={class:"mt-1 flex rounded-md shadow-sm"},U={class:"flex flex-none mb-4"},E={class:"overflow-x-auto relative"},O={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},q=s("thead",{class:"text-xs text-gray-700 uppercase bg-indigo-200"},[s("tr",null,[s("th",{scope:"col",class:"py-2 px-6"}," Sub Permission "),s("th",{scope:"col",class:"py-2 px-6 text-center"}," Action ")])],-1),G={class:"bg-white border-b"},J={scope:"row",class:"py-2 px-6 font-medium text-gray-900 whitespace-nowrap"},K={class:"py-2 px-6 text-center"},Q={key:1,class:"bg-white border-b text-center"},R=s("td",{colspan:"3",class:"py-3"},"No Sub Permissions.",-1),W=[R],X=s("div",{class:"my-5 border-b border-dashed border-indigo-900"},null,-1),Y={class:"flex items-center justify-end space-x-2"},Z={class:"flex space-x-2"},ss={components:{Link:g,Toggle:k},data(){return{sub_permission:"",form:{permission:"",sub_permission:[]}}},methods:{submit(){this.$inertia.post(route("permissions.store"),this.form)},addSub(){this.sub_permission&&(this.form.sub_permission.push(this.sub_permission),this.sub_permission="")},deleteSub(m){this.form.sub_permission.splice(m,1)}}},cs=Object.assign(ss,{__name:"Create",setup(m){return(e,o)=>(a(),n(c,null,[i(f(h),{title:"Permissions"}),i(w,null,{header:r(()=>[]),default:r(()=>[s("div",S,[s("div",B,[s("form",{onSubmit:o[3]||(o[3]=v((...t)=>e.submit&&e.submit(...t),["prevent"]))},[s("div",C,[s("div",P,[s("div",T,[V,s("div",$,[s("div",L,[N,s("div",j,[p(s("input",{type:"text",name:"permission",id:"permission",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.permission=t),autocomplete:"off"},null,2),[[u,e.form.permission]])])])])])]),s("div",z,[s("div",A,[D,s("div",F,[s("div",H,[s("div",I,[s("div",M,[p(s("input",{type:"text",name:"sub_permission",id:"sub_permission",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.sub_permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":o[1]||(o[1]=t=>e.sub_permission=t),autocomplete:"off",placeholder:"e.g. view_details_access"},null,2),[[u,e.sub_permission]])])]),s("div",U,[i(l,{buttonType:"info",class:"py-2.5 px-4",onClick:o[2]||(o[2]=t=>e.addSub())},{default:r(()=>[d("Add")]),_:1})])]),s("div",E,[s("table",O,[q,s("tbody",null,[!e.form.sub_permission.length<1?(a(!0),n(c,{key:0},x(e.form.sub_permission,(t,_)=>(a(),n("tr",G,[s("th",J,y(t),1),s("td",K,[i(l,{buttonType:"danger",onClick:es=>e.deleteSub(_)},{default:r(()=>[d("Delete")]),_:2},1032,["onClick"])])]))),256)):(a(),n("tr",Q,W))])])])]),X,s("div",Y,[s("div",Z,[i(l,{buttonType:"gray",route:e.route("permissions")},{default:r(()=>[d("Cancel")]),_:1},8,["route"]),i(l,{type:"submit"},{default:r(()=>[d("Save")]),_:1})])])])])])],32)])])]),_:1})],64))}});export{cs as default};
