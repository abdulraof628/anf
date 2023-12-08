import{o as d,c as n,b as o,u as w,w as i,F as p,H as y,L as x,d as t,k as a,j as m,h as k,t as _,f,l as h,n as u}from"./app-b4630a76.js";import{B as C}from"./Authenticated-49d4273e.js";import{B as l}from"./Button-ecc2bb75.js";import{r as $}from"./PencilIcon-06c479d3.js";import{r as A}from"./SearchIcon-51232c7b.js";import{r as B}from"./TrashIcon-ed8ab59e.js";import{C as v}from"./ConfirmationModal-4747f43f.js";import{P as D}from"./Pagination-66c37dd6.js";import{M as N}from"./Modal-02c5f636.js";import"./ApplicationLogo-8e3b2741.js";import"./XIcon-7db8ae4c.js";import"./toggle-eaf21670.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./transition-ff10ed5d.js";import"./VueFinalModal.esm-ecae28f9.js";/* empty css                                                              */const T={class:"py-4 px-4"},j={class:"overflow-x-auto"},R={class:"mx-auto"},S={class:"grid grid-cols-2 gap-4"},V={class:"align-middle inline-block min-w-full"},M={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},O={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},L={class:"min-w-full divide-y divide-gray-200"},z=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Name"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),E={class:"bg-white divide-y divide-gray-200"},F={key:0},I=t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found! ")],-1),P=[I],H={class:"px-6 py-4 whitespace-nowrap"},U={class:"text-sm font-medium text-gray-700"},G={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm font-medium text-gray-900"},J={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},K={class:"flex justify-center space-x-2"},Q={key:0,class:"space-y-2"},W={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},X=t("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[t("h2",{class:"font-display font-bold text-indigo-600"},"Add Activity")],-1),Y={class:"grid grid-cols-1 gap-0 sm:gap-4"},Z={class:"mb-4"},tt=t("label",{for:"activity_name",class:"block text-sm text-gray-700 font-bold"},[a(" Name "),t("span",{class:"text-red-500"},"*")],-1),et={class:"mt-1 flex rounded-md shadow-sm"},st={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},ot={class:"flex justify-end"},it={key:1,class:"space-y-2"},at={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},rt=t("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[t("h2",{class:"font-display font-bold text-indigo-600"},"Edit Activity")],-1),dt={class:"grid grid-cols-1 gap-0 sm:gap-4"},nt={class:"mb-4"},lt=t("label",{for:"activity_name",class:"block text-sm text-gray-700 font-bold"},[a(" Name "),t("span",{class:"text-red-500"},"*")],-1),ct={class:"mt-1 flex rounded-md shadow-sm"},mt={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},pt={class:"flex justify-end"},_t={components:{SearchIcon:A,TrashIcon:B,PencilIcon:$,ConfirmationModal:v,Head:y,Link:x,Modal:N,Pagination:D},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",lesson_id:this.$page.props.lesson_id,activity_name:""},errors:{activity_name:!1}}},methods:{create(){this.form.activity_name="",this.show_create=!0,this.show_edit=!1},store(){if(!this.form.activity_name){this.errors.activity_name=!0;return}this.$inertia.post(route("art_gallery.setting.activities.store"),this.form,{preserveState:!1})},edit(c,e){this.form.id=c,this.form.activity_name=e,this.show_edit=!0,this.show_create=!1},update(){if(!this.form.activity_name){this.errors.activity_name=!0;return}this.$inertia.post(route("art_gallery.setting.activities.update"),this.form,{preserveState:!1})},destroy(c){this.confirmationRoute="art_gallery.setting.activities.delete",this.confirmationData=c,this.isOpen=!0}}},jt=Object.assign(_t,{__name:"Activities",setup(c){return(e,r)=>(d(),n(p,null,[o(w(y),{title:"Art Gallery"}),o(C,null,{header:i(()=>[]),default:i(()=>[t("div",T,[t("div",j,[t("div",R,[t("div",S,[t("div",V,[t("div",M,[o(l,{buttonType:"gray",class:"py-2 px-4",route:e.route("art_gallery.setting.lessons",{level_id:e.$page.props.level_id,theme_id:e.$page.props.theme_id,lesson_id:e.lesson_id})},{default:i(()=>[a("Back")]),_:1},8,["route"]),o(l,{class:"py-2 px-4",onClick:e.create},{default:i(()=>[a("New Activity")]),_:1},8,["onClick"])]),t("div",O,[t("table",L,[z,t("tbody",E,[e.$page.props.activities?m("",!0):(d(),n("tr",F,P)),(d(!0),n(p,null,k(e.$page.props.activities,(s,g)=>(d(),n("tr",{class:"hover:bg-gray-200",key:s.id},[t("td",H,[t("div",U,_(++g),1)]),t("td",G,[t("div",q,_(s.name),1)]),t("td",J,[t("div",K,[o(l,{buttonType:"warning",class:"py-1 px-2",onClick:b=>e.edit(s.id,s.name)},{default:i(()=>[a("Edit")]),_:2},1032,["onClick"]),o(l,{buttonType:"danger",onClick:b=>e.destroy(s.id)},{default:i(()=>[a("Delete")]),_:2},1032,["onClick"])])])]))),128))])])])]),e.show_create?(d(),n("div",Q,[t("div",W,[X,t("div",Y,[t("div",Z,[tt,t("div",et,[f(t("input",{type:"text",name:"activity_name",id:"activity_name",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.errors.activity_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[0]||(r[0]=s=>e.form.activity_name=s),autocomplete:"off"},null,2),[[h,e.form.activity_name]])])])])]),t("div",st,[t("div",ot,[o(l,{onClick:e.store},{default:i(()=>[a("Save")]),_:1},8,["onClick"])])])])):m("",!0),e.show_edit?(d(),n("div",it,[t("div",at,[rt,t("div",dt,[t("div",nt,[lt,t("div",ct,[f(t("input",{type:"text",name:"activity_name",id:"activity_name",class:u(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",e.errors.activity_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":r[1]||(r[1]=s=>e.form.activity_name=s),autocomplete:"off"},null,2),[[h,e.form.activity_name]])])])])]),t("div",mt,[t("div",pt,[o(l,{onClick:e.update},{default:i(()=>[a("Save")]),_:1},8,["onClick"])])])])):m("",!0)])])]),o(v,{show:e.isOpen,onClose:r[2]||(r[2]=s=>e.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Activity",confirmationText:"Are you sure want to delete this activity?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:e.confirmationRoute,confirmationData:e.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64))}});export{jt as default};
