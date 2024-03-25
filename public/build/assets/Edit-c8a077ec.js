import{o as n,c as a,a as t,u as f,w as r,F as p,L as h,H as g,d as s,k as v,h as c,v as u,n as _,g as d,e as x,t as y}from"./app-1e0c6682.js";import{B as w}from"./Authenticated-c3a74fd5.js";import{B as l}from"./Button-50ac9964.js";import{b as k}from"./vue3-perfect-scrollbar-40f5923a.js";import"./ApplicationLogo-6909dc22.js";import"./XIcon-80766edc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./moment-a9aaa855.js";const S={class:"md:grid md:grid-cols-2"},B={class:"md:mt-0 md:col-span-2"},$={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},C={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},P={class:"sm:row-span-3"},T=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Permission Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),V={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},L={class:"mb-4"},N=s("label",{for:"permission",class:"block text-sm text-gray-700 font-bold"},[d("Permission"),s("span",{class:"text-red-500"},"*")],-1),j={class:"mt-1 flex rounded-md shadow-sm"},z={class:"grid grid-rows-2 grid-cols-1 sm:grid-cols-2 grid-flow-col gap-4"},A={class:"sm:row-span-3"},D=s("div",{class:"mb-5"},[s("h1",{class:"text-indigo-800 font-bold"},"Sub Permission Information"),s("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),E={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},F={class:"flex items-end justify-between space-x-2"},H={class:"flex-1 mb-4"},I={class:"mt-1 flex rounded-md shadow-sm"},M={class:"flex flex-none mb-4"},U={class:"overflow-x-auto relative"},O={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},q=s("thead",{class:"text-xs text-gray-700 uppercase bg-indigo-200"},[s("tr",null,[s("th",{scope:"col",class:"py-2 px-6"}," Sub Permission "),s("th",{scope:"col",class:"py-2 px-6 text-center"}," Action ")])],-1),G={class:"bg-white border-b"},J={scope:"row",class:"py-2 px-6 font-medium text-gray-900 whitespace-nowrap"},K={class:"py-2 px-6 text-center"},Q={key:1,class:"bg-white border-b text-center"},R=s("td",{colspan:"3",class:"py-3"},"No Sub Permissions.",-1),W=[R],X=s("div",{class:"my-5 border-b border-dashed border-indigo-900"},null,-1),Y={class:"flex items-center justify-end space-x-2"},Z={class:"flex space-x-2"},ss={components:{Link:h,Toggle:k},data(){return{sub_permission:"",form:{permission_id:this.$page.props.permission_id,permission:this.$page.props.permission_info.name,sub_permission:this.$page.props.sub_permissions,add_sub_permission:[],delete_sub_permission:[]}}},methods:{submit(){this.$inertia.post(route("permissions.update"),this.form)},addSub(){this.sub_permission&&(this.form.sub_permission.push({id:"",name:this.sub_permission}),this.form.add_sub_permission.push({id:this.form.permission_id,name:this.sub_permission}),this.sub_permission="")},deleteSub(m,e){e&&this.form.delete_sub_permission.push(e),this.form.add_sub_permission.forEach((i,o)=>{i.name==this.form.sub_permission[m].name&&this.form.add_sub_permission.splice(o,1)}),this.form.sub_permission.splice(m,1)}}},ms=Object.assign(ss,{__name:"Edit",setup(m){return(e,i)=>(n(),a(p,null,[t(f(g),{title:"Permissions"}),t(w,null,{header:r(()=>[]),default:r(()=>[s("div",S,[s("div",B,[s("form",{onSubmit:i[3]||(i[3]=v((...o)=>e.submit&&e.submit(...o),["prevent"]))},[s("div",$,[s("div",C,[s("div",P,[T,s("div",V,[s("div",L,[N,s("div",j,[c(s("input",{type:"text",name:"permission",id:"permission",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":i[0]||(i[0]=o=>e.form.permission=o),autocomplete:"off"},null,2),[[u,e.form.permission]])])])])])]),s("div",z,[s("div",A,[D,s("div",E,[s("div",F,[s("div",H,[s("div",I,[c(s("input",{type:"text",name:"sub_permission",id:"sub_permission",class:_(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.$page.props.errors.sub_permission?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":i[1]||(i[1]=o=>e.sub_permission=o),autocomplete:"off",placeholder:"e.g. view_details_access"},null,2),[[u,e.sub_permission]])])]),s("div",M,[t(l,{buttonType:"info",class:"py-2.5 px-4",onClick:i[2]||(i[2]=o=>e.addSub())},{default:r(()=>[d("Add")]),_:1})])]),s("div",U,[s("table",O,[q,s("tbody",null,[!e.form.sub_permission.length<1?(n(!0),a(p,{key:0},x(e.form.sub_permission,(o,b)=>(n(),a("tr",G,[s("th",J,y(o.name),1),s("td",K,[t(l,{buttonType:"danger",onClick:es=>e.deleteSub(b,o.id)},{default:r(()=>[d("Delete")]),_:2},1032,["onClick"])])]))),256)):(n(),a("tr",Q,W))])])])]),X,s("div",Y,[s("div",Z,[t(l,{buttonType:"gray",route:e.route("permissions")},{default:r(()=>[d("Cancel")]),_:1},8,["route"]),t(l,{type:"submit"},{default:r(()=>[d("Save")]),_:1})])])])])])],32)])])]),_:1})],64))}});export{ms as default};
