import{a as h}from"./app-c5b8b27a.js";import{y as l,z as u,x as r,Q as s,C as _,be as c,t as m,W as i,K as o}from"./@vue-d42dd214.js";import"./axios-1779699b.js";import"./laravel-echo-96cacb8d.js";import"./pusher-js-6d7d8249.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./@inertiajs-7f289881.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./clsx-1229b3e0.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./class-variance-authority-52f2569e.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";const b={data(){return{response:{success:!1,error:!1},form:{from:[],to:""}}},methods:{submit(){this.$inertia.post(route("progress_report.exchange.store"),this.form,{preserveState:!1,onSuccess:()=>{this.$page.props.flash.type=="success"?(this.response.success=!0,this.response.error=!1):(this.response.success=!1,this.response.error=!0)}})}}},x={class:"min-h-screen bg-slate-50 px-3 flex flex-col"},V={class:"flex-grow w-full max-w-5xl mx-auto py-3 space-y-2"},k={key:0,class:"border rounded-lg bg-green-200 px-3 py-2"},C={key:1,class:"border rounded-lg bg-red-100 px-3 py-2"},B={class:""},w={key:0},N={class:""},P={key:0},E={class:"flex justify-center"};function S(n,t,$,A,p,f){const a=c("Label"),d=c("ComboBox"),y=c("Button");return m(),l("div",x,[u("div",V,[p.response.success?(m(),l("div",k,[r(a,null,{default:s(()=>[i(o(n.$page.props.flash.message),1)]),_:1})])):_("",!0),p.response.error?(m(),l("div",C,[r(a,null,{default:s(()=>[i(o(n.$page.props.flash.message),1)]),_:1})])):_("",!0),u("div",B,[r(a,null,{default:s(()=>t[2]||(t[2]=[i("Old Activity")])),_:1}),r(d,{multiple:!0,items:n.$page.props.student_art_gallery,valueProperty:"activity_id",labelProperty:"activity_name",modelValue:p.form.from,"onUpdate:modelValue":t[0]||(t[0]=e=>p.form.from=e)},{label:s(({item:e})=>[i(o(e.level_name)+" - "+o(e.theme_name)+" - "+o(e.lesson_name)+" - "+o(e.activity_name),1)]),"label-content":s(({selectedItem:e,selectedItems:v,multiple:g})=>[e?(m(),l("span",w,o(e.length)+" item(s) selected",1)):_("",!0)]),_:1},8,["items","modelValue"])]),u("div",N,[r(a,null,{default:s(()=>t[3]||(t[3]=[i("New Activity")])),_:1}),r(d,{items:n.$page.props.pr_art_activities,valueProperty:"activity_id",labelProperty:"activity_name",modelValue:p.form.to,"onUpdate:modelValue":t[1]||(t[1]=e=>p.form.to=e)},{label:s(({item:e})=>[i(o(e.level_name)+" - "+o(e.theme_name)+" - "+o(e.lesson_name)+" - "+o(e.activity_name),1)]),"label-content":s(({selectedItem:e,selectedItems:v,multiple:g})=>[e?(m(),l("span",P,o(e.level_name)+" - "+o(e.theme_name)+" - "+o(e.lesson_name)+" - "+o(e.activity_name),1)):_("",!0)]),_:1},8,["items","modelValue"])]),u("div",E,[r(y,{onClick:f.submit},{default:s(()=>t[4]||(t[4]=[i("Exchange")])),_:1},8,["onClick"])])])])}const be=h(b,[["render",S]]);export{be as default};
