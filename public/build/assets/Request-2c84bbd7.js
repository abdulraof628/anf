import{y as r,x as u,Q as y,F as i,be as h,t as o,z as e,W as l,A as f,bH as v,q as x,J as m,K as a,C as n}from"./@vue-d42dd214.js";import w from"./Layout-fca3b2d9.js";import"./@inertiajs-dde9cc4c.js";import"./Authenticated-e54ea1c2.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-d95f58a2.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-9e9c0f86.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./index-a78bcd26.js";import"./DialogDescription-befd605e.js";import"./lucide-vue-next-f56ff345.js";import"./moment-a9aaa855.js";import"./TimeAgo-f6234177.js";import"./javascript-time-ago-55ed0321.js";import"./relative-time-format-ec7ee7be.js";import"./@heroicons-e6194902.js";import"./@headlessui-a01ed24c.js";const q={class:"flex-col w-full pt-4 px-4 space-y-3"},k={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},C={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},j={class:"mb-4"},M={class:"mt-1 flex rounded-md shadow-sm"},N={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},R={class:"shadow overflow-hidden border-b border-gray-200 rounded-t-sm rounded-b-none mt-3"},F={class:"min-w-full divide-y divide-gray-200"},L={class:"bg-blue-200"},T={class:"px-4 py-1 text-center border border-gray-400"},P={key:0},V={else:"",class:"hover:bg-gray-200"},S={class:"px-4 py-2 text-center border border-gray-400"},A={class:"px-4 py-2 text-center border border-gray-400"},B={class:"px-4 py-2 text-center border border-gray-400"},H={key:0},O={class:"px-4 py-2 text-center border border-gray-400"},$={key:0},z={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},D={class:"shadow overflow-hidden border-b border-gray-200 rounded-t-sm rounded-b-none mt-3"},E={class:"min-w-full divide-y divide-gray-200"},I={class:"bg-blue-200"},J={class:"px-4 py-1 text-center border border-gray-400"},K={key:0},Q={else:"",class:"hover:bg-gray-200"},U={class:"px-4 py-2 text-center border border-gray-400"},W={class:"px-4 py-2 text-center border border-gray-400"},G={class:"px-4 py-2 text-center border border-gray-400"},X={key:0},Y={class:"px-4 py-2 text-center border border-gray-400"},Z={key:0},ee={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},te={class:"shadow overflow-hidden border-b border-gray-200 rounded-t-sm rounded-b-none mt-3"},re={class:"min-w-full divide-y divide-gray-200"},oe={class:"bg-blue-200"},se={class:"px-4 py-1 text-center border border-gray-400"},de={key:0},ae={else:"",class:"hover:bg-gray-200"},le={class:"px-4 py-2 text-center border border-gray-400"},ie={class:"px-4 py-2 text-center border border-gray-400"},me={class:"px-4 py-2 text-center border border-gray-400"},ne={key:0},pe={class:"px-4 py-2 text-center border border-gray-400"},_e={key:0},be={class:"bg-white rounded-lg shadow-xl p-4"},ge={class:"flex space-x-5"},ue={props:{request_data:Object,created_by:String,notification_data:Object},data(){return{current_programme_info:[],class_types_detail:[],level:"",material_fee:"",class_type:"",fee:[],form:{notification_id:this.notification_data.id,programme_id:this.request_data.programme_id?this.request_data.programme_id:"",programme_name:this.request_data.programme_name?this.request_data.programme_name:"",programme_info:this.request_data.current_programme_levels?this.request_data.current_programme_levels:[],programme_level_to_add:this.request_data.programme_level_to_add?this.request_data.programme_level_to_add:[],programme_level_to_delete:this.request_data.programme_level_to_delete?this.request_data.programme_level_to_delete:[],created_by:this.created_by?this.created_by:""},record_matched:{programme_id:this.request_data.programme_id?this.request_data.programme_id:"",programme_name:this.request_data.programme_name?this.request_data.programme_name:""}}},mounted(){axios.get(route("get_programme_name",this.form.programme_id)).then(b=>{this.current_programme_info=b.data,this.record_matched.programme_name=this.request_data.programme_name==this.current_programme_info.programme_name})},methods:{approve(){this.$inertia.post(route("approve_programme_update"),this.form,{preserveScroll:!0})},reject(){this.$inertia.post(route("reject_programme_update"),this.form,{preserveScroll:!0})}}},gt=Object.assign(ue,{__name:"Request",setup(b){return(d,t)=>{const c=h("Head");return o(),r(i,null,[u(c,{title:"Notifications"}),u(w,null,{default:y(()=>[e("div",q,[e("div",k,[t[4]||(t[4]=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Programme Information"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1)),e("div",C,[e("div",j,[t[3]||(t[3]=e("label",{for:"programme_name",class:"block text-sm text-gray-700 font-bold"},[l(" Programme Name "),e("span",{class:"text-red-500"},"*")],-1)),e("div",M,[f(e("input",{type:"text",name:"programme_name",id:"programme_name",class:x(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",d.record_matched.programme_name?"border-gray-300":"border-green-500"]),"onUpdate:modelValue":t[0]||(t[0]=s=>d.form.programme_name=s),autocomplete:"off"},null,2),[[v,d.form.programme_name]])])])])]),e("div",N,[t[9]||(t[9]=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},"Current Programme Levels & Fees"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1)),e("div",R,[e("table",F,[e("thead",L,[e("tr",null,[t[5]||(t[5]=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Level",-1)),t[6]||(t[6]=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Class Type",-1)),t[7]||(t[7]=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Material Fee",-1)),(o(!0),r(i,null,m(this.request_data.class_type_details,s=>(o(),r("th",T,a(s.label),1))),256))])]),e("tbody",null,[d.form.programme_info.length?n("",!0):(o(),r("tr",P,t[8]||(t[8]=[e("td",{colspan:"8",class:"py-4 text-center"},"No levels added.",-1)]))),(o(!0),r(i,null,m(d.form.programme_info,(s,p)=>(o(),r("tr",V,[e("td",S,a(s.level),1),e("td",A,a(b.request_data.class_types[s.class_type_id].name),1),e("td",B,[s.material_fee!=null?(o(),r("span",H,"RM ")):n("",!0),l(a(s.material_fee),1)]),(o(!0),r(i,null,m(this.request_data.class_type_details,(_,g)=>(o(),r("td",O,[d.form.programme_info[p].fees[_.id]!=null?(o(),r("span",$,"RM ")):n("",!0),l(a(d.form.programme_info[p].fees[_.id]),1)]))),256))]))),256))])])])]),e("div",z,[t[14]||(t[14]=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},[l("Programme Levels & Fees ("),e("span",{class:"text-[12px] text-red-500"}," To Remove "),l(")")]),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1)),e("div",D,[e("table",E,[e("thead",I,[e("tr",null,[t[10]||(t[10]=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Level",-1)),t[11]||(t[11]=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Class Type",-1)),t[12]||(t[12]=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Material Fee",-1)),(o(!0),r(i,null,m(this.request_data.class_type_details,s=>(o(),r("th",J,a(s.label),1))),256))])]),e("tbody",null,[d.form.programme_level_to_delete.length?n("",!0):(o(),r("tr",K,t[13]||(t[13]=[e("td",{colspan:"8",class:"py-4 text-center"},"No item to be removed.",-1)]))),(o(!0),r(i,null,m(d.form.programme_level_to_delete,(s,p)=>(o(),r("tr",Q,[e("td",U,a(s.level),1),e("td",W,a(b.request_data.class_types[s.class_type_id].name),1),e("td",G,[s.material_fee!=null?(o(),r("span",X,"RM ")):n("",!0),l(a(s.material_fee),1)]),(o(!0),r(i,null,m(this.request_data.class_type_details,(_,g)=>(o(),r("td",Y,[d.form.programme_level_to_delete[p].fees[_.id]!=null?(o(),r("span",Z,"RM ")):n("",!0),l(a(d.form.programme_level_to_delete[p].fees[_.id]),1)]))),256))]))),256))])])])]),e("div",ee,[t[19]||(t[19]=e("div",{class:"mb-5"},[e("h1",{class:"text-indigo-800 font-bold"},[l("Programme Levels & Fees ("),e("span",{class:"text-[12px] text-green-500"}," To Add "),l(")")]),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1)),e("div",te,[e("table",re,[e("thead",oe,[e("tr",null,[t[15]||(t[15]=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Level",-1)),t[16]||(t[16]=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Class Type",-1)),t[17]||(t[17]=e("th",{class:"px-4 py-1 text-center border border-gray-400"},"Material Fee",-1)),(o(!0),r(i,null,m(this.request_data.class_type_details,s=>(o(),r("th",se,a(s.label),1))),256))])]),e("tbody",null,[d.form.programme_level_to_add.length?n("",!0):(o(),r("tr",de,t[18]||(t[18]=[e("td",{colspan:"8",class:"py-4 text-center"},"No levels added.",-1)]))),(o(!0),r(i,null,m(d.form.programme_level_to_add,(s,p)=>(o(),r("tr",ae,[e("td",le,a(s.level),1),e("td",ie,a(b.request_data.class_types[s.class_type].name),1),e("td",me,[s.material_fee!=null?(o(),r("span",ne,"RM ")):n("",!0),l(a(s.material_fee),1)]),(o(!0),r(i,null,m(this.request_data.class_type_details,(_,g)=>(o(),r("td",pe,[d.form.programme_level_to_add[p].fees[_.id]!=null?(o(),r("span",_e,"RM ")):n("",!0),l(a(d.form.programme_level_to_add[p].fees[_.id]),1)]))),256))]))),256))])])])]),e("div",be,[e("div",ge,[e("button",{type:"submit",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:col-start-2 sm:text-sm",onClick:t[1]||(t[1]=(...s)=>d.approve&&d.approve(...s))},"Approve"),e("button",{type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:col-start-1 sm:text-sm",onClick:t[2]||(t[2]=(...s)=>d.reject&&d.reject(...s))},"Reject")])])])]),_:1})],64)}}});export{gt as default};
