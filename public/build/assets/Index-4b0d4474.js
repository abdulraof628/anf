<<<<<<<< HEAD:public/build/assets/Index-4b0d4474.js
import{c as l,a as s,u as m,w as a,F as h,H as f,L as v,o as c,b as t,e as k,l as b,i as d,h as A,r as C,t as r}from"./app-82abc10b.js";import{B as T}from"./Authenticated-351e2cf2.js";import{B as p}from"./Button-7434c6fd.js";import{C as u}from"./ConfirmationModal-cd64efca.js";import{P as _}from"./Pagination-61536266.js";import{M as x}from"./Modal-dbd350fd.js";import{r as w}from"./SearchIcon-8ffec8b1.js";import{r as $}from"./TrashIcon-bee68764.js";import{r as D}from"./PencilIcon-4f163117.js";/* empty css            */import"./ApplicationLogo-6259135a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-6579dfed.js";import"./transition-20b3e9c3.js";import"./VueFinalModal.esm-ecbc911c.js";const B={class:"py-4 px-4"},M={class:"overflow-x-auto"},j={class:"mx-auto"},L={class:"align-middle inline-block min-w-full px-2"},N={class:"flex justify-between mb-4"},O={class:"flex space-x-2"},R={class:"flex relative text-gray-400 focus-within:text-gray-600"},V={class:"flex"},S={class:"table-auto min-w-full divide-y divide-gray-200"},I=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Name"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Level"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Theme"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Lesson - Title"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Activity"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),F={class:"bg-white divide-y divide-gray-200"},H={key:0},P=t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found! ")],-1),U=[P],z={class:"px-6 py-4 whitespace-nowrap"},E={class:"text-sm font-medium text-gray-700"},G={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm font-medium text-gray-900"},J={class:"px-6 py-4 whitespace-nowrap"},K={class:"text-sm font-medium text-gray-900"},Q={class:"px-6 py-4 whitespace-nowrap"},W={class:"text-sm font-medium text-gray-900"},X={class:"px-6 py-4 whitespace-nowrap"},Y={class:"text-sm font-medium text-gray-900"},Z={class:"px-6 py-4 whitespace-nowrap"},tt={class:"text-sm font-medium text-gray-900"},et={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},ot={class:"flex justify-center space-x-2"},st=t("h3",{class:"text-gray-900 text-xl font-semibold"}," Student's Artwork ",-1),at={class:"self-center aspect-w-1 aspect-h-1"},it=["src"],rt={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},nt={components:{SearchIcon:w,TrashIcon:$,PencilIcon:D,ConfirmationModal:u,Head:f,Link:v,Modal:x,Pagination:_},props:{filter:Object},computed:{baseUrl(){return window.location.origin}},data(){return{isOpen:!1,open_modal:!1,confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:"",centre_id:this.filter.centre_id?this.filter.centre_id:""},imageExists:!1,artwork:{lesson:"",activity:"",file_location:""}}},watch:{params:{handler(){this.params&&this.$inertia.get(this.route("art_gallery"),this.params,{replace:!0,preserveState:!0})},deep:!0}},methods:{viewArtwork(n){fetch(window.location.origin+"/storage/art_gallery/"+n).then(e=>{e.ok?this.artwork.file_location=window.location.origin+"/storage/art_gallery/"+n:this.artwork.file_location=window.location.origin+"/images/no_image.jpg",this.open_modal=!0})},deleteArtwork(n){this.confirmationRoute="art_gallery.destroy",this.confirmationData=n,this.isOpen=!0}}},bt=Object.assign(nt,{__name:"Index",setup(n){return(e,i)=>(c(),l(h,null,[s(m(f),{title:"Art Gallery"}),s(T,null,{header:a(()=>[]),default:a(()=>[t("div",B,[t("div",M,[t("div",j,[t("div",L,[t("div",N,[t("div",O,[t("div",R,[s(m(w),{class:"text-gray-600 h-4 w-4 fill-current pointer-events-none absolute top-1/4 left-3",style:"top:30%"}),k(t("input",{class:"border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg focus:ring-0 focus:border-gray-300 appearance-none block pl-10",type:"text","onUpdate:modelValue":i[0]||(i[0]=o=>e.params.search=o),placeholder:"Search"},null,512),[[b,e.params.search]])])]),t("div",V,[s(p,{route:e.route("art_gallery.create")},{default:a(()=>[d("Upload Artwork")]),_:1},8,["route"])])]),t("table",S,[I,t("tbody",F,[e.$page.props.arts.data.length?A("",!0):(c(),l("tr",H,U)),(c(!0),l(h,null,C(e.$page.props.arts.data,(o,g)=>(c(),l("tr",{class:"hover:bg-gray-200",key:o.id},[t("td",z,[t("div",E,r(++g),1)]),t("td",G,[t("div",q,r(o.student_name),1)]),t("td",J,[t("div",K,r(o.level),1)]),t("td",Q,[t("div",W,r(o.theme),1)]),t("td",X,[t("div",Y,r(o.lesson),1)]),t("td",Z,[t("div",tt,r(o.activity),1)]),t("td",et,[t("div",ot,[s(p,{buttonType:"blue",class:"py-1 px-2",onClick:y=>e.viewArtwork(o.art_file_location)},{default:a(()=>[d("View")]),_:2},1032,["onClick"]),s(p,{buttonType:"danger",onClick:y=>e.deleteArtwork(o.artwork_id)},{default:a(()=>[d("Delete")]),_:2},1032,["onClick"])])])]))),128))])]),s(_,{page_data:e.$page.props.arts},null,8,["page_data"]),s(x,{showModal:e.open_modal,modalType:"sm",onHideModal:i[2]||(i[2]=o=>e.open_modal=!1)},{header:a(()=>[st]),content:a(()=>[t("div",at,[t("img",{src:e.artwork.file_location,style:{"max-width":"100%","max-height":"100%"},alt:""},null,8,it)])]),footer:a(()=>[t("div",rt,[s(p,{buttonType:"gray",onClick:i[1]||(i[1]=o=>e.open_modal=!1)},{default:a(()=>[d("Close")]),_:1})])]),_:1},8,["showModal"])])])]),s(u,{show:e.isOpen,onClose:i[3]||(i[3]=o=>e.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Artwork",confirmationText:"Are you sure want to delete this artwork?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:e.confirmationRoute,confirmationData:e.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64))}});export{bt as default};
========
import{c as l,b as s,u as m,w as a,F as h,H as f,L as v,o as d,d as t,f as k,l as b,k as c,j as A,h as C,t as r}from"./app-d43ace84.js";import{B as T}from"./Authenticated-86ad341a.js";import{B as p}from"./Button-59a3957d.js";import{r as $}from"./PencilIcon-743a2f65.js";import{r as u}from"./SearchIcon-109ed8ce.js";import{r as D}from"./TrashIcon-23355d26.js";import{C as _}from"./ConfirmationModal-7b6f1177.js";import{P as x}from"./Pagination-a51fa90b.js";import{M as w}from"./Modal-02bc15c8.js";/* empty css            */import"./ApplicationLogo-85a4f4bf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-dbfe2aa6.js";import"./transition-bd56ad90.js";import"./VueFinalModal.esm-6955c083.js";const B={class:"py-4 px-4"},M={class:"overflow-x-auto"},j={class:"mx-auto"},L={class:"align-middle inline-block min-w-full px-2"},N={class:"flex justify-between mb-4"},O={class:"flex space-x-2"},R={class:"flex relative text-gray-400 focus-within:text-gray-600"},V={class:"flex"},S={class:"table-auto min-w-full divide-y divide-gray-200"},I=t("thead",{class:"bg-gray-300"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/14"},"Name"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Level"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Theme"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Lesson - Title"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Activity"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14"},"Action")])],-1),F={class:"bg-white divide-y divide-gray-200"},H={key:0},P=t("td",{class:"text-center",colspan:"10"},[t("div",{class:"p-3"}," No Record Found! ")],-1),U=[P],z={class:"px-6 py-4 whitespace-nowrap"},E={class:"text-sm font-medium text-gray-700"},G={class:"px-6 py-4 whitespace-nowrap"},q={class:"text-sm font-medium text-gray-900"},J={class:"px-6 py-4 whitespace-nowrap"},K={class:"text-sm font-medium text-gray-900"},Q={class:"px-6 py-4 whitespace-nowrap"},W={class:"text-sm font-medium text-gray-900"},X={class:"px-6 py-4 whitespace-nowrap"},Y={class:"text-sm font-medium text-gray-900"},Z={class:"px-6 py-4 whitespace-nowrap"},tt={class:"text-sm font-medium text-gray-900"},et={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},ot={class:"flex justify-center space-x-2"},st=t("h3",{class:"text-gray-900 text-xl font-semibold"}," Student's Artwork ",-1),at={class:"self-center aspect-w-1 aspect-h-1"},it=["src"],rt={class:"flex justify-end space-x-2 items-center p-4 border-t border-gray-200 rounded-b"},nt={components:{SearchIcon:u,TrashIcon:D,PencilIcon:$,ConfirmationModal:_,Head:f,Link:v,Modal:w,Pagination:x},props:{filter:Object},computed:{baseUrl(){return window.location.origin}},data(){return{isOpen:!1,open_modal:!1,confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:"",centre_id:this.filter.centre_id?this.filter.centre_id:""},imageExists:!1,artwork:{lesson:"",activity:"",file_location:""}}},watch:{params:{handler(){this.params&&this.$inertia.get(this.route("art_gallery"),this.params,{replace:!0,preserveState:!0})},deep:!0}},methods:{viewArtwork(n){fetch(window.location.origin+"/storage/art_gallery/"+n).then(e=>{e.ok?this.artwork.file_location=window.location.origin+"/storage/art_gallery/"+n:this.artwork.file_location=window.location.origin+"/images/no_image.jpg",this.open_modal=!0})},deleteArtwork(n){this.confirmationRoute="art_gallery.destroy",this.confirmationData=n,this.isOpen=!0}}},bt=Object.assign(nt,{__name:"Index",setup(n){return(e,i)=>(d(),l(h,null,[s(m(f),{title:"Art Gallery"}),s(T,null,{header:a(()=>[]),default:a(()=>[t("div",B,[t("div",M,[t("div",j,[t("div",L,[t("div",N,[t("div",O,[t("div",R,[s(m(u),{class:"text-gray-600 h-4 w-4 fill-current pointer-events-none absolute top-1/4 left-3",style:"top:30%"}),k(t("input",{class:"border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg focus:ring-0 focus:border-gray-300 appearance-none block pl-10",type:"text","onUpdate:modelValue":i[0]||(i[0]=o=>e.params.search=o),placeholder:"Search"},null,512),[[b,e.params.search]])])]),t("div",V,[s(p,{route:e.route("art_gallery.create")},{default:a(()=>[c("Upload Artwork")]),_:1},8,["route"])])]),t("table",S,[I,t("tbody",F,[e.$page.props.arts.data.length?A("",!0):(d(),l("tr",H,U)),(d(!0),l(h,null,C(e.$page.props.arts.data,(o,g)=>(d(),l("tr",{class:"hover:bg-gray-200",key:o.id},[t("td",z,[t("div",E,r(++g),1)]),t("td",G,[t("div",q,r(o.student_name),1)]),t("td",J,[t("div",K,r(o.level),1)]),t("td",Q,[t("div",W,r(o.theme),1)]),t("td",X,[t("div",Y,r(o.lesson),1)]),t("td",Z,[t("div",tt,r(o.activity),1)]),t("td",et,[t("div",ot,[s(p,{buttonType:"blue",class:"py-1 px-2",onClick:y=>e.viewArtwork(o.art_file_location)},{default:a(()=>[c("View")]),_:2},1032,["onClick"]),s(p,{buttonType:"danger",onClick:y=>e.deleteArtwork(o.artwork_id)},{default:a(()=>[c("Delete")]),_:2},1032,["onClick"])])])]))),128))])]),s(x,{page_data:e.$page.props.arts},null,8,["page_data"]),s(w,{showModal:e.open_modal,modalType:"sm",onHideModal:i[2]||(i[2]=o=>e.open_modal=!1)},{header:a(()=>[st]),content:a(()=>[t("div",at,[t("img",{src:e.artwork.file_location,style:{"max-width":"100%","max-height":"100%"},alt:""},null,8,it)])]),footer:a(()=>[t("div",rt,[s(p,{buttonType:"gray",onClick:i[1]||(i[1]=o=>e.open_modal=!1)},{default:a(()=>[c("Close")]),_:1})])]),_:1},8,["showModal"])])])]),s(_,{show:e.isOpen,onClose:i[3]||(i[3]=o=>e.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Artwork",confirmationText:"Are you sure want to delete this artwork?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:e.confirmationRoute,confirmationData:e.confirmationData},null,8,["show","confirmationRoute","confirmationData"])])]),_:1})],64))}});export{bt as default};
>>>>>>>> dev:public/build/assets/Index-197eeb56.js
