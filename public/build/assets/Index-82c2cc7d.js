import{o as i,m as x,b as d,B as A,C as w,c as r,d as e,n as I,t as p,F as _,h as C,D as T,j as g,E as z,G as D,a as N,u as y,w as m,H as $,L as P,f as X,l as E,k as b}from"./app-7052c322.js";import{B as O}from"./Authenticated-c7518677.js";import{B as v}from"./Button-5191ca95.js";import{r as V}from"./PencilIcon-888548fc.js";import{r as R}from"./SearchIcon-ec845dc8.js";import{r as j}from"./TrashIcon-fb970df2.js";import{C as k}from"./ConfirmationModal-335d2d83.js";import{P as L}from"./Pagination-d0ea599f.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-9e030e92.js";import"./XIcon-a8fe17f0.js";import"./default.css_vue_type_style_index_0_src_true_lang-ce744a16.js";import"./moment-fbc5633a.js";import"./transition-791eb036.js";function F(s,t){return i(),x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z","clip-rule":"evenodd"})])}const J=A({name:"my-image-box",props:{imagesListClass:{type:String,default:""},images:{type:Array,default:()=>[]},openLightbox:Boolean},created(){this.state.selectedIndex=0,this.state.selectedImgPath=this.images[0].src,this.state.selectedCaption=this.images[0].caption},watch:{images:{handler(){this.state.selectedIndex=0,this.state.selectedImgPath=this.images[0].src,this.state.selectedCaption=this.images[0].caption}}},setup(s){const t=w({show:!1,isChanging:!1,selectedIndex:0,selectedImgPath:"",selectedCaption:""}),c=(n,B,M)=>{t.selectedIndex=n,t.selectedImgPath=B,t.selectedCaption=M,t.show=!0},f=()=>{if(t.selectedIndex==0)return!1;let n=t.selectedIndex-1;t.selectedIndex=n,t.selectedImgPath=s.images[n].src,t.selectedCaption=s.images[n].caption},a=()=>{if(t.selectedIndex==s.images.length-1)return!1;let n=t.selectedIndex+1;t.selectedIndex=n,t.selectedImgPath=s.images[n].src,t.selectedCaption=s.images[n].caption},u=w({startX:0});return{state:t,selected:c,prev:f,next:a,touchStart:n=>{u.startX=n.changedTouches[0].clientX},touchEnd:n=>{n.changedTouches[0].clientX>u.startX?f():a(),u.startX=0}}},methods:{closeImagebox(){this.$emit("closeImagebox",!0)}}}),h=s=>(z("data-v-d35edbb7"),s=s(),D(),s),Q={key:0,class:"vue-lb-container",style:{"touch-action":"pan-y","user-select":"none","-webkit-user-drag":"none","-webkit-tap-highlight-color":"rgba(0, 0, 0, 0)"}},Y={class:"vue-lb-content"},G={class:"vue-lb-header"},U=h(()=>e("span",null,null,-1)),Z=h(()=>e("span",null,[e("svg",{fill:"white",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 512 512"},[e("path",{d:"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"})])],-1)),q=[Z],K={class:"vue-lb-figure"},W=["src"],ee=["innerHTML"],te={class:"vue-lb-footer"},se=h(()=>e("div",{class:"vue-lb-footer-info"},null,-1)),oe={class:"vue-lb-footer-count"},ae={class:"vue-lb-thumbnail-wrapper"},ne={class:"vue-lb-thumbnail"},ie=h(()=>e("span",null,[e("svg",{fill:"white",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 512 512"},[e("path",{d:"M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"})])],-1)),le=[ie],re=["aaa","bbb","onClick"],ce=h(()=>e("span",null,[e("svg",{fill:"white",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 512 512"},[e("path",{d:"M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"})])],-1)),de=[ce],pe=h(()=>e("span",null,[e("svg",{fill:"white",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 512 512"},[e("path",{d:"M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"})])],-1)),he=[pe],ue=h(()=>e("span",null,[e("svg",{fill:"white",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 512 512","xml:space":"preserve"},[e("path",{d:"M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"})])],-1)),me=[ue];function ge(s,t,c,f,a,u){return(s.state.show=s.openLightbox)?(i(),r("div",Q,[e("div",Y,[e("div",G,[U,e("button",{type:"button",title:"Close (Esc)",class:I("relative p-1 w-10"),onClick:t[0]||(t[0]=o=>s.closeImagebox())},q)]),e("div",K,[e("img",{class:"vue-lb-modal-image",src:s.state.selectedImgPath,onTouchstart:t[1]||(t[1]=(...o)=>s.touchStart&&s.touchStart(...o)),onTouchend:t[2]||(t[2]=(...o)=>s.touchEnd&&s.touchEnd(...o))},null,40,W),e("div",{class:"vue-lb-info",innerHTML:s.state.selectedCaption},null,8,ee),e("div",te,[se,e("div",oe,p(s.state.selectedIndex+1)+" / "+p(s.images.length),1)])])]),e("div",ae,[e("div",ne,[e("button",{type:"button",title:"Previous",class:"vue-lb-thumbnail-arrow vue-lb-thumbnail-left",onClick:t[3]||(t[3]=(...o)=>s.prev&&s.prev(...o))},le),(i(!0),r(_,null,C(s.images,(o,l)=>(i(),r("div",{key:l,class:"vue-lb-modal-thumbnail",lazy:"loaded",aaa:l,bbb:s.state.selectedIndex,style:T({"background-image":"url('"+o.thumb+"')",display:l<5&&s.state.selectedIndex<3||s.state.selectedIndex>s.images.length-5&&s.images.length-l<=5&&l<=s.state.selectedIndex+2||l>=s.state.selectedIndex-2&&l<=s.state.selectedIndex+2?"":"none"}),onClick:n=>s.selected(l,o.src,o.caption)},null,12,re))),128)),e("button",{type:"button",title:"Next",class:"vue-lb-thumbnail-arrow vue-lb-thumbnail-right",onClick:t[4]||(t[4]=(...o)=>s.next&&s.next(...o))},de)])]),e("button",{type:"button",title:"Previous",class:"vue-lb-arrow vue-lb-left",onClick:t[5]||(t[5]=(...o)=>s.prev&&s.prev(...o))},he),e("button",{type:"button",title:"Next",class:"vue-lb-arrow vue-lb-right",onClick:t[6]||(t[6]=(...o)=>s.next&&s.next(...o))},me)])):g("",!0)}const S=H(J,[["render",ge],["__scopeId","data-v-d35edbb7"]]),fe={class:"py-4 px-4"},be={class:"overflow-x-auto"},ve={class:"mx-auto"},xe={class:"align-middle inline-block min-w-full"},_e={class:"flex justify-between pb-4 relative text-gray-400 focus-within:text-gray-600 items-center"},we={class:"relative"},ye=e("span",{class:"absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"h-10 w-4 h-4 text-gray-400",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),Ie={key:0,class:"flex"},Ce={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},$e={class:"min-w-full divide-y divide-gray-200"},ke=e("thead",{class:"bg-gray-300"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-w-xs",width:"1%"},"#"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-w-xs",width:"5%"},"Name"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-w-xs",width:"7%"},"Address"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider max-w-xs",width:"5%"},"Country"),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",width:"2%"},"Status"),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",width:"2%"},"Action")])],-1),Le={class:"bg-white divide-y divide-gray-200"},Se={key:0},Be=e("td",{class:"text-center",colspan:"10"},[e("div",{class:"p-3"}," No Record Found! ")],-1),Me=[Be],Ae={class:"hover:bg-gray-200"},Te={class:"px-6 py-3"},ze={class:"text-black text-sm font-semibold"},De={class:"px-6 py-3"},Ne={class:"text-md font-bold text-indigo-900 uppercase mb-1"},Pe={class:"px-6 py-3 whitespace-nowrap"},Xe={class:"capitalize text-sm whitespace-pre-line font-semibold"},Ee={class:"px-6 py-3 whitespace-nowrap text-center"},Oe={class:"capitalize text-sm whitespace-pre-line font-semibold"},Ve={class:"px-6 py-4 whitespace-nowrap"},Re={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},je={class:"flex justify-center"},He={class:"flex mr-1"},Fe={class:"flex mr-1"},Je={class:"flex"},Qe={components:{SearchIcon:R,TrashIcon:j,PencilIcon:V,PhotographIcon:F,ImageBox:S,Pagination:L,ConfirmationModal:k,Head:$,Link:P},props:{filter:Object,centre_images:Object},created(){this.images.push({thumb:"https://media.istockphoto.com/vectors/no-image-available-sign-vector-id1138179183?k=20&m=1138179183&s=612x612&w=0&h=iJ9y-snV_RmXArY4bA-S4QSab0gxfAMXmXwn5Edko1M=",src:"https://media.istockphoto.com/vectors/no-image-available-sign-vector-id1138179183?k=20&m=1138179183&s=612x612&w=0&h=iJ9y-snV_RmXArY4bA-S4QSab0gxfAMXmXwn5Edko1M=",caption:"Not Available"})},data(){return{isOpen:!1,isOpenImagebox:!1,userID:"",confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:"",confirmationRoute:"",params:{search:this.filter.search?this.filter.search:""},images:[]}},methods:{deleteCentre(s){this.confirmationRoute="centres.destroy",this.confirmationData=s,this.isOpen=!0},editCentre(s){this.$inertia.get(route("centres.edit"),{centre_id:s},{preserveState:!0})},viewImages(s){axios.get(this.route("centres.get_images"),{params:{centre_id:s}}).then(t=>{this.images="",this.images=[],this.images=t.data,this.isOpenImagebox=!0,document.body.classList.add("overflow-hidden")})},closeImage(){this.isOpenImagebox=!1,document.body.classList.remove("overflow-hidden")},search(){this.$inertia.get(this.route("centres"),this.params,{replace:!0,preserveState:!0})}}},lt=Object.assign(Qe,{__name:"Index",setup(s){return(t,c)=>{const f=N("debounce");return i(),r(_,null,[d(y($),{title:"Centres"}),d(O,null,{header:m(()=>[]),default:m(()=>[e("div",fe,[e("div",be,[e("div",ve,[e("div",xe,[e("div",_e,[e("div",we,[ye,X(e("input",{type:"text",class:"h-10 border-2 border-gray-300 w-full appearance-none focus:ring-0 focus:border-gray-300 py-1 pl-10 pr-4 text-gray-700 bg-white border rounded-md",placeholder:"Search","onUpdate:modelValue":c[0]||(c[0]=a=>t.params.search=a)},null,512),[[f,t.search,"800ms"],[E,t.params.search]])]),t.$page.props.can.create_centres?(i(),r("div",Ie,[d(v,{route:t.route("centres.create")},{default:m(()=>[b("New Centre")]),_:1},8,["route"])])):g("",!0)]),e("div",Ce,[e("table",$e,[ke,e("tbody",Le,[t.$page.props.centres.data.length?g("",!0):(i(),r("tr",Se,Me)),(i(!0),r(_,null,C(t.$page.props.centres.data,(a,u)=>(i(),r("tr",Ae,[e("td",Te,[e("span",ze,p(u+1),1)]),e("td",De,[e("span",Ne,p(a.centre_name),1)]),e("td",Pe,[e("span",Xe,p(a.centre_address?a.centre_address:"Not Available"),1)]),e("td",Ee,[e("span",Oe,p(a.country_name?a.country_name:"Not Set"),1)]),e("td",Ve,[e("span",{class:I(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",a.centre_status?"bg-green-100 text-green-800":"bg-red-100 text-red-800"])},p(a.centre_status?"Active":"Not Active"),3)]),e("td",Re,[e("div",je,[e("div",He,[t.$page.props.can.view_centres?(i(),x(v,{key:0,buttonType:"blue",title:"View Images",onClick:o=>t.viewImages(a.centre_id)},{default:m(()=>[b(" View Images ")]),_:2},1032,["onClick"])):g("",!0)]),e("div",Fe,[t.$page.props.can.edit_centres?(i(),x(v,{key:0,buttonType:"warning",title:"Edit School",onClick:o=>t.editCentre(a.centre_id)},{default:m(()=>[b(" Edit ")]),_:2},1032,["onClick"])):g("",!0)]),e("div",Je,[t.$page.props.can.delete_centres?(i(),x(v,{key:0,buttonType:"danger",title:"Delete School",onClick:o=>t.deleteCentre(a.centre_id)},{default:m(()=>[b(" Delete ")]),_:2},1032,["onClick"])):g("",!0)])])])]))),256))])]),d(L,{page_data:t.$page.props.centres},null,8,["page_data"])])])])]),d(k,{show:t.isOpen,onClose:c[1]||(c[1]=a=>t.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Delete Centre",confirmationText:"Are you sure want to delete this centre?",confirmationButton:"Delete",confirmationMethod:"delete",confirmationRoute:t.confirmationRoute,confirmationData:t.confirmationData},null,8,["show","confirmationRoute","confirmationData"]),d(y(S),{onCloseImagebox:t.closeImage,images:t.images,openLightbox:t.isOpenImagebox},null,8,["onCloseImagebox","images","openLightbox"])])]),_:1})],64)}}});export{lt as default};
