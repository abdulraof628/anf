import{o as l,c as m,a as s,u as w,w as r,F as p,H as g,L as v,d as e,g as i,q as c,e as x,t as h,h as f,v as u,n as b}from"./app-495c50e4.js";import{B as C}from"./Authenticated-5ff94400.js";import{B as a}from"./Button-e10a5d69.js";import{r as B}from"./PencilIcon-5fb19580.js";import{r as T}from"./SearchIcon-7913b667.js";import{r as $}from"./TrashIcon-5695113f.js";import{C as k}from"./ConfirmationModal-44823cfb.js";import"./ApplicationLogo-e61264c8.js";import"./NavLink-f436de1b.js";import"./XIcon-556a86ac.js";import"./Toast-ab5100fa.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./vue3-perfect-scrollbar-26ccdd8c.js";import"./moment-a9aaa855.js";import"./transition-bf9dfc23.js";import"./keyboard-b92bc090.js";const D={class:"py-4 px-4"},N={class:"grid grid-cols-2 gap-4"},R={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},V={class:"grid grid-cols-2 gap-4"},S={class:"space-y-2"},j={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},O={class:"min-w-full divide-y divide-gray-200"},U=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4/12"},"Term / Book"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"},"Action")])],-1),A={class:"bg-white divide-y divide-gray-200"},L={key:0},z=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),E=[z],F={class:"hover:bg-gray-200"},I={class:"px-6 py-4 whitespace-nowrap"},M={class:"text-sm font-medium text-gray-700"},P={class:"px-6 py-4 whitespace-nowrap"},H={class:"flex flex-col space-y-1 text-sm text-gray-900"},q={class:"font-semibold"},G={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},J={class:"flex justify-center space-x-2"},K={key:0,class:"space-y-2"},Q={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},W=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"New Term / Book")],-1),X={class:"grid grid-cols-1 gap-0 sm:gap-4"},Y={class:"mb-4"},Z=e("label",{for:"term_book_name",class:"block text-sm text-gray-700 font-bold"},[i(" Name "),e("span",{class:"text-red-500"},"*")],-1),ee={class:"mt-1 flex rounded-md shadow-sm"},te={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},oe={class:"flex justify-end"},se={key:1,class:"space-y-2"},re={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},ie=e("div",{class:"mb-5 border-b-indigo-500 border-b border-dashed"},[e("h2",{class:"font-display font-bold text-indigo-600"},"Edit Term / Book")],-1),ae={class:"grid grid-cols-1 gap-0 sm:gap-4"},de={class:"mb-4"},ne=e("label",{for:"term_book_name",class:"block text-sm text-gray-700 font-bold"},[i(" Name "),e("span",{class:"text-red-500"},"*")],-1),le={class:"mt-1 flex rounded-md shadow-sm"},me={class:"px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md"},ce={class:"flex justify-end"},_e={components:{SearchIcon:T,TrashIcon:$,PencilIcon:B,Head:g,Link:v,ConfirmationModal:k},data(){return{isOpen:!1,confirmationData:"",confirmationRoute:"",show_create:!1,show_edit:!1,form:{id:"",level_id:this.$page.props.level_id,term_book_name:""},errors:{term_book_name:!1}}},methods:{create(){this.form.term_book_name="",this.show_create=!0,this.show_edit=!1},edit(d,t){this.form.id=d,this.form.term_book_name=t,this.show_edit=!0,this.show_create=!1},store(){if(!this.form.term_book_name){this.errors.term_book_name=!0;return}this.$inertia.post(route("progress_report.settings.math.terms_books.store"),this.form,{preserveState:!1})},update(){if(!this.form.term_book_name){this.errors.term_book_name=!0;return}this.$inertia.post(route("progress_report.settings.math.terms_books.update"),this.form,{preserveState:!1})},destroy(d){this.confirmationRoute="progress_report.settings.math.terms_books.destroy",this.confirmationData=d,this.isOpen=!0},viewUnits(d){this.$inertia.get(route("progress_report.settings.math.units"),{level_id:this.$page.props.level_id,term_book_id:d})}}},Re=Object.assign(_e,{__name:"TermsBooks",setup(d){return(t,n)=>(l(),m(p,null,[s(w(g),{title:"Progress Report"}),s(C,null,{header:r(()=>[]),default:r(()=>[e("div",D,[e("div",N,[e("div",R,[s(a,{buttonType:"gray",route:t.route("progress_report.settings.math.levels")},{default:r(()=>[i("Back")]),_:1},8,["route"]),s(a,{onClick:t.create},{default:r(()=>[i("New Term / Book")]),_:1},8,["onClick"])])]),e("div",V,[e("div",S,[e("div",j,[e("table",O,[U,e("tbody",A,[t.$page.props.terms_books.length?c("",!0):(l(),m("tr",L,E)),(l(!0),m(p,null,x(t.$page.props.terms_books,(o,y)=>(l(),m("tr",F,[e("td",I,[e("div",M,h(++y),1)]),e("td",P,[e("div",H,[e("span",q,h(o.name),1)])]),e("td",G,[e("div",J,[s(a,{buttonType:"warning",onClick:_=>t.edit(o.id,o.name)},{default:r(()=>[i("Edit")]),_:2},1032,["onClick"]),s(a,{buttonType:"danger",onClick:_=>t.destroy(o.id)},{default:r(()=>[i("Delete")]),_:2},1032,["onClick"]),s(a,{buttonType:"blue",onClick:_=>t.viewUnits(o.id)},{default:r(()=>[i("View Units")]),_:2},1032,["onClick"])])])]))),256))])])])]),t.show_create?(l(),m("div",K,[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[f(e("input",{type:"text",name:"term_book_name",id:"term_book_name",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.term_book_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[0]||(n[0]=o=>t.form.term_book_name=o),autocomplete:"off"},null,2),[[u,t.form.term_book_name]])])])])]),e("div",te,[e("div",oe,[s(a,{onClick:t.store},{default:r(()=>[i("Save")]),_:1},8,["onClick"])])])])):c("",!0),t.show_edit?(l(),m("div",se,[e("div",re,[ie,e("div",ae,[e("div",de,[ne,e("div",le,[f(e("input",{type:"text",name:"term_book_name",id:"term_book_name",class:b(["focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm",t.errors.term_book_name?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":n[1]||(n[1]=o=>t.form.term_book_name=o),autocomplete:"off"},null,2),[[u,t.form.term_book_name]])])])])]),e("div",me,[e("div",ce,[s(a,{onClick:t.update},{default:r(()=>[i("Save")]),_:1},8,["onClick"])])])])):c("",!0)])]),s(k,{show:t.isOpen,onClose:n[2]||(n[2]=o=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Term / Book",confirmationText:"Are you sure want to delete this term / book? Please be aware that deleting this will also result in the deletion of all associated data. This action cannot be undone.",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{Re as default};
