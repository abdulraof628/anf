import{y as n,x as i,u as y,Q as a,F as v,be as C,t as l,z as s,C as g,J as b,K as _,v as w,Y as U,W as u}from"./@vue-d42dd214.js";import{_ as j}from"./Authenticated-e243b55d.js";import{H as D}from"./@inertiajs-dde9cc4c.js";import{_ as E}from"./DeleteConfirmation-8563499e.js";import{s as B}from"./simplebar-vue-9ef772f5.js";import{s as H}from"./@vueform-cd27a95b.js";import{_ as S}from"./DialogModal-fdb65f91.js";import{T as x}from"./TimeAgo-49c7669e.js";import{C as L,S as P,P as T,N as M}from"./vue3-carousel-7f0cea82.js";import{a as c}from"./axios-1779699b.js";import{D as A}from"./luxon-8ddd27a0.js";import{F as z}from"./fslightbox-vue-9806ac54.js";import{C as V}from"./compressorjs-dec42b9c.js";import{a as $}from"./lucide-vue-next-97f66d5e.js";import{S as N,M as F,g as I}from"./@headlessui-a01ed24c.js";import"./@heroicons-e6194902.js";import"./app-f046bc35.js";import"./pusher-js-fe63a254.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./radix-vue-47014c23.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./clsx-1229b3e0.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./class-variance-authority-52f2569e.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./simplebar-core-3f5973b9.js";import"./lodash-es-9b1d07da.js";import"./DialogDescription-cbc1304f.js";import"./javascript-time-ago-55ed0321.js";import"./relative-time-format-ec7ee7be.js";import"./moment-a9aaa855.js";const R={class:"flex justify-center"},O={class:"flex-1 max-w-xl"},Z={key:0,class:"flex mb-3"},J={key:1,class:"flex items-center space-y-3"},W={key:2,class:"flex justify-center mx-1 mt-20"},Y={class:"mt-3 flex flex-col space-y-3 bg-white py-3 px-4 shadow-md rounded-xl text-sm"},q={class:"flex flex-row text-sm items-center"},G={class:"flex justify-between items-center flex-1 font-bold leading-tight select-none"},K={class:"flex flex-col"},X={class:"text-slate-900 md:text-md font-bold"},Q={class:"text-xs font-medium text-slate-500"},ee={class:"flex items-center"},te={class:"py-1 text-sm"},se=["onClick"],oe=["onClick"],re={class:"text-sm text-slate-800"},ie={class:"carousel__item h-full"},le=["src","onDblclick"],ae={class:"flex items-center space-x-4"},de={class:""},ne=["onClick"],me=["onClick"],pe=["onClick"],ue={key:1,class:"space-y-2"},he={key:0,class:"flex-col w-full mx-auto bg-white shadow border border-gray-300 px-4 py-3 rounded-lg"},ce={class:"divide-y space-y-2"},ge={class:"flex flex-row pt-1 md-10"},ye={class:"flex-col mt-1"},fe={class:"flex items-center flex-1 font-bold leading-tight"},_e={class:"text-xs font-normal text-gray-500 ml-2"},ve={class:"flex-1 text-sm font-medium leading-loose text-gray-600"},we=["onClick"],be={key:4,class:"mt-3 max-w-xl py-3 px-4 border border-gray-200 rounded-xl shadow animate-pulse bg-white"},ke={class:"grid grid-cols-1 gap-4 mb-5"},Ce={class:"grid grid-cols-1 xl:grid-cols-2 gap-4"},xe={key:0},Se={key:0,class:"w-full"},Ve={class:"overflow-x-auto scrollbar pb-3"},$e={class:"flex space-x-4 mt-1"},Le={class:"relative w-28 h-28"},Pe=["src","onClick"],Me={class:"flex items-center justify-center w-full"},Ue={class:"grid grid-cols-1 gap-4 mb-5"},je={class:"grid grid-cols-1 xl:grid-cols-2 gap-4"},De={key:0},Ee={key:0,class:"w-full"},Be={class:"overflow-x-auto scrollbar pb-3"},He={class:"flex space-x-4 mt-1"},Te={class:"relative w-28 h-28"},Ae=["src","onClick"],ze={class:"flex items-center justify-center w-full"},Ne={class:"flex flex-col gap-1"},k=window.URL||window.webkitURL,Fe=/^image\/\w+$/,Ie={components:{Multiselect:H,TimeAgo:x,Carousel:L,Slide:P,Pagination:T,Navigation:M},data(){return{show_add_story_modal:!1,show_edit_story_modal:!1,show_comment:[],show_delete:!1,confirmation:{is_open:!1,route_name:"",id:""},loading:{students:!1,stories:!1},student_list:[],form:{caption:"",photos:[],tagged_students:[]},comments:[],add_story:{find:{class_types:"",levels:""},list:{class_types:[],levels:[]},students:[{select_all:"Select all",options:[]}],form:{programme_id:"",centre_id:"",caption:"",photos:[],students:[]}},edit_story:{find:{class_types:"",levels:""},list:{class_types:[],levels:[]},students:[{select_all:"Select all",options:[]}],form:{story_id:"",programme_id:"",centre_id:"",caption:"",photos:[],students:[],photos_to_delete:[]}},lightbox:{open:!1,src:[]}}},watch:{"add_story.form.programme_id":{handler(){this.add_story.form.programme_id&&this.add_story.form.centre_id&&(this.add_story.find.class_types="",this.add_story.find.levels="",this.add_story.students[0].options=[],this.add_story.form.students=[],c.get(route("programmes.get_students",[this.add_story.form.programme_id,this.add_story.form.centre_id])).then(r=>{this.add_story.students[0].options=r.data}))}},"add_story.form.centre_id":{handler(){this.add_story.form.programme_id&&this.add_story.form.centre_id&&(this.add_story.find.class_types="",this.add_story.find.levels="",this.add_story.students[0].options=[],this.add_story.form.students=[],c.get(route("programmes.get_students",[this.add_story.form.programme_id,this.add_story.form.centre_id])).then(r=>{this.add_story.students[0].options=r.data}))}},"add_story.find.class_types":{handler(){this.add_story.find.levels="",this.add_story.list.levels=[],this.add_story.form.programme_id&&this.add_story.form.centre_id&&this.add_story.find.class_types?c.get(route("stories.get_class_levels",[this.add_story.form.programme_id,this.add_story.find.class_types])).then(r=>{this.add_story.list.levels=r.data}):c.get(route("programmes.get_students",[this.add_story.form.programme_id,this.add_story.form.centre_id])).then(r=>{this.add_story.students[0].options=r.data})}},"add_story.find.levels":{handler(){this.add_story.students[0].options=[],this.add_story.form.students=[],this.add_story.form.programme_id&&this.add_story.form.centre_id&&this.add_story.find.levels?c.get(route("programmes.get_students",[this.add_story.form.programme_id,this.add_story.form.centre_id,this.add_story.find.levels])).then(r=>{this.add_story.students[0].options=r.data}):c.get(route("programmes.get_students",[this.add_story.form.programme_id,this.add_story.form.centre_id])).then(r=>{this.add_story.students[0].options=r.data})}},"edit_story.form.programme_id":{handler(){this.edit_story.form.programme_id&&this.edit_story.form.centre_id&&(this.edit_story.find.class_types="",this.edit_story.find.levels="",this.edit_story.students[0].options=[],this.edit_story.form.students=[],c.get(route("programmes.get_students",[this.edit_story.form.programme_id,this.edit_story.form.centre_id])).then(r=>{this.edit_story.students[0].options=r.data}))}},"edit_story.form.centre_id":{handler(){this.edit_story.form.programme_id&&this.edit_story.form.centre_id&&(this.edit_story.find.class_types="",this.edit_story.find.levels="",this.edit_story.students[0].options=[],this.edit_story.form.students=[],c.get(route("programmes.get_students",[this.edit_story.form.programme_id,this.edit_story.form.centre_id])).then(r=>{this.edit_story.students[0].options=r.data}))}},"edit_story.find.class_types":{handler(){this.edit_story.find.levels="",this.edit_story.list.levels=[],this.edit_story.form.programme_id&&this.edit_story.form.centre_id&&this.edit_story.find.class_types?(this.edit_story.students[0].options=[],this.edit_story.form.students=[],c.get(route("stories.get_class_levels",[this.edit_story.form.programme_id,this.edit_story.find.class_types])).then(r=>{this.edit_story.list.levels=r.data})):c.get(route("programmes.get_students",[this.edit_story.form.programme_id,this.edit_story.form.centre_id])).then(r=>{this.edit_story.students[0].options=r.data})}},"edit_story.find.levels":{handler(){this.edit_story.students[0].options=[],this.edit_story.form.students=[],this.edit_story.form.programme_id&&this.edit_story.form.centre_id&&this.edit_story.find.levels?c.get(route("programmes.get_students",[this.edit_story.form.programme_id,this.edit_story.form.centre_id,this.edit_story.find.levels])).then(r=>{this.edit_story.students[0].options=r.data}):c.get(route("programmes.get_students",[this.edit_story.form.programme_id,this.edit_story.form.centre_id])).then(r=>{this.edit_story.students[0].options=r.data})}}},methods:{isLikedByParent(r){return this.$page.props.stories.data[r].likes.length?this.$page.props.stories.data[r].likes.some(e=>e.like_author_id===this.$page.props.auth.user.ID):!1},toggleLike(r,e){if(this.isLikedByParent(r)){const t=this.$page.props.stories.data[r].likes.findIndex(p=>p.like_author_id===this.$page.props.auth.user.ID);this.$page.props.stories.data[r].likes.splice(t,1)}else this.$page.props.stories.data[r].likes.push({like_author_id:this.$page.props.auth.user.ID});c.post(route("parent.like_story"),{story_id:e,to_delete:!this.isLikedByParent(r)}).then(t=>{})},toggleComment(r){this.show_comment[r]=!this.show_comment[r]},postComment(r,e){c.post(route("parent.stories.comments.store"),{story_id:e,comment:this.comments[r]}).then(t=>{t.data&&(this.$page.props.stories.data[r].comments.unshift({comment:this.comments[r],comment_user_name:this.$page.props.auth.user.display_name,created_at:A.now().setZone("Asia/Kuala_Lumpur").toFormat("yyyy-MM-dd HH:mm:ss")}),this.comments[r]="")})},showCreatePost(){this.show_add_story_modal=!0},openEditStoryModal(r){const e=JSON.parse(JSON.stringify(this.$page.props.stories.data[r]));this.edit_story.form.story_id=e.story_id,this.edit_story.form.programme_id=e.story_programme_id,this.edit_story.form.centre_id=e.story_centre_id,this.edit_story.form.caption=e.story_title,this.edit_story.form.photos=e.images,c.get(route("programmes.get_students",[this.edit_story.form.programme_id,this.edit_story.form.centre_id])).then(t=>{this.edit_story.students[0].options=[],this.edit_story.students[0].options=t.data,this.edit_story.form.students=e.students.map(p=>p.student_id)}),this.show_edit_story_modal=!0},read(r,e){return new Promise((t,p)=>{if(!r){t();return}Fe.test(r.type)?k?t({loaded:!0,name:r.name,type:r.type,url:k.createObjectURL(r)}):alert("Your browser is not supported."):alert("Please select a valid image file.")})},changePhoto({target:r}){const{files:e}=r;e&&e.length>0&&Array.from(e).forEach(p=>{this.read(p,r).then(f=>{new V(p,{quality:.8,height:1e3,width:1e3,success:h=>{const o=k.createObjectURL(h),d=this.blobToFile(h,Date.now()+".jpg");this.add_story.form.photos.push({name:Date.now()+Math.floor(Math.random()*1e3),url:o,file:d})}})}).catch(this.alert)})},changePhotoEditStory({target:r}){const{files:e}=r;e&&e.length>0&&Array.from(e).forEach(p=>{this.read(p,r).then(f=>{new V(p,{quality:.8,height:1e3,width:1e3,success:h=>{const o=k.createObjectURL(h),d=this.blobToFile(h,Date.now()+".jpg");this.edit_story.form.photos.push({name:Date.now()+Math.floor(Math.random()*1e3),url:o,file:d})}})}).catch(this.alert)})},removePhoto(r){this.add_story.form.photos.splice(r,1)},removePhotoEditStory(r){this.edit_story.form.photos[r].id&&this.edit_story.form.photos_to_delete.push(this.edit_story.form.photos[r].id),this.edit_story.form.photos.splice(r,1)},post(){(this.add_story.form.caption||this.add_story.form.photos.length)&&this.add_story.form.students.length>0&&this.$inertia.post(route("stories.store"),this.add_story.form,{preserveState:!1})},savePost(){(this.edit_story.form.caption||this.edit_story.form.photos.length)&&this.edit_story.form.students.length>0&&this.$inertia.post(route("stories.update"),this.edit_story.form,{preserveState:!1})},handleScroll(){const r=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.scrollHeight||document.body.scrollHeight,t=document.documentElement.clientHeight||window.innerHeight;r+t>=e-100&&this.$page.props.stories.next_page_url&&(this.loading.stories||(this.loading.stories=!0,c.get(route("parent.student_stories"),{params:{page:this.$page.props.stories.current_page+1}}).then(p=>{p.data.data.forEach(f=>{this.$page.props.stories.data.push(f)}),this.$page.props.stories.current_page=p.data.current_page,this.$page.props.stories.next_page_url=p.data.next_page_url,this.loading.stories=!1})))},viewImage(r){window.open(r.url?[r.url]:[window.location.origin+"/storage/stories/"+r.image_filename],"_blank")},deleteStory(r){this.confirmation.route_name="stories.destroy",this.confirmation.id=r,this.confirmation.is_open=!0},blobToFile(r,e){return new File([r],e,{type:r.type})}}},qt=Object.assign(Ie,{__name:"Home",setup(r){return(e,t)=>{const p=C("Textarea"),f=C("Button"),h=C("ComboBox");return l(),n(v,null,[i(y(D),{title:"Home"}),i(j,{onScroll:e.handleScroll},{default:a(()=>[s("div",R,[s("div",O,[e.$page.props.can.create_stories?(l(),n("div",Z,[s("div",{class:"flex items-center space-x-2 bg-indigo-100 rounded px-3 py-2 font-semibold w-full cursor-pointer transform scale-100 hover:scale-105 duration-200 select-none",onClick:t[0]||(t[0]=(...o)=>e.showCreatePost&&e.showCreatePost(...o))},t[20]||(t[20]=[s("img",{width:"44",height:"44",src:"https://img.icons8.com/dusk/64/create-new.png",alt:"create-new"},null,-1),s("div",{class:"flex flex-col"},[s("span",null,"Create New Story"),s("span",{class:"text-xs text-gray-700"},"Share student activities, notices, announcements or reminder with parents.")],-1)]))])):g("",!0),e.$page.props.stories.data.length?(l(),n("div",J,t[21]||(t[21]=[s("h2",{class:"text-lg md:text-xl mx-1 font-extrabold"},"Stories",-1)]))):g("",!0),e.$page.props.stories.data.length?g("",!0):(l(),n("div",W,t[22]||(t[22]=[s("span",{class:"text-slate-500"},"No Stories Found",-1)]))),e.$page.props.stories.data.length?(l(!0),n(v,{key:3},b(e.$page.props.stories.data,(o,d)=>(l(),n("div",Y,[s("div",q,[s("div",G,[s("div",K,[s("span",X,_(o.story_author_name),1),s("span",Q,_(o.story_programme_name),1)]),s("div",ee,[i(x,{class:"text-gray-500 font-medium text-xs",datetime:o.story_date},null,8,["datetime"]),e.$page.props.can.view_student_stories?(l(),w(y(I),{key:0,as:"div",class:"relative inline-block text-left"},{default:a(()=>[i(y(N),{class:"pl-3 py-3"},{default:a(()=>t[23]||(t[23]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"currentColor",viewBox:"0 0 128 512"},[s("path",{d:"M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"})],-1)])),_:1}),i(U,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[i(y(F),{class:"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:a(()=>[s("div",te,[s("a",{class:"cursor-pointer block px-4 py-2 text-sm hover:bg-indigo-100 text-gray-900",onClick:m=>e.openEditStoryModal(d)},"Edit",8,se),s("a",{class:"cursor-pointer block px-4 py-2 text-sm hover:bg-indigo-100 text-gray-900",onClick:m=>e.deleteStory(o.story_id)},"Delete",8,oe)])]),_:2},1024)]),_:2},1024)]),_:2},1024)):g("",!0)])])]),t[28]||(t[28]=s("hr",null,null,-1)),s("span",re,_(o.story_title),1),o.images.length?(l(),w(y(L),{key:0,mouseDrag:o.images.length>1,touchDrag:o.images.length>1},{addons:a(()=>[o.images.length>1?(l(),w(y(M),{key:0})):g("",!0)]),default:a(()=>[(l(!0),n(v,null,b(o.images,(m,Re)=>(l(),w(y(P),{key:m},{default:a(()=>[s("div",ie,[s("img",{src:"/storage/stories/"+m.image_filename,class:"select-none h-full",onDblclick:Oe=>e.toggleLike(d,o.story_id)},null,40,le)])]),_:2},1024))),128))]),_:2},1032,["mouseDrag","touchDrag"])):g("",!0),s("div",ae,[s("div",de,[e.isLikedByParent(d)?(l(),n("svg",{key:0,onClick:m=>e.toggleLike(d,o.story_id),xmlns:"http://www.w3.org/2000/svg",class:"inline-block h-6 w-6 text-red-500 cursor-pointer",fill:"currentColor",viewBox:"0 0 512 512"},t[24]||(t[24]=[s("path",{d:"M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"},null,-1)]),8,ne)):(l(),n("svg",{key:1,onClick:m=>e.toggleLike(d,o.story_id),xmlns:"http://www.w3.org/2000/svg",class:"inline-block h-6 w-6 text-gray-500 hover:text-red-500 cursor-pointer",fill:"currentColor",viewBox:"0 0 512 512"},t[25]||(t[25]=[s("path",{d:"M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"},null,-1)]),8,me))]),s("div",{class:"",onClick:m=>e.toggleComment(d)},t[26]||(t[26]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline-block h-6 w-6 text-gray-500 hover:text-red-500 cursor-pointer",fill:"currentColor",viewBox:"0 0 512 512"},[s("path",{d:"M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"})],-1)]),8,pe)]),e.show_comment[d]?(l(),n("div",ue,[o.comments.length?(l(),n("div",he,[i(y(B),{"data-simplebar-auto-hide":"true",class:"max-h-96"},{default:a(()=>[s("div",ce,[(l(!0),n(v,null,b(o.comments,m=>(l(),n("div",ge,[s("div",ye,[s("div",fe,[u(_(m.comment_user_name)+" ",1),s("span",_e,[(l(),w(x,{class:"text-gray-500 font-medium text-xs",datetime:m.created_at,key:m.created_at},null,8,["datetime"]))])]),s("div",ve,_(m.comment),1)])]))),256))])]),_:2},1024)])):g("",!0),(l(),w(p,{rows:"2",placeholder:"Drop a comment...",key:d,modelValue:e.comments[d],"onUpdate:modelValue":m=>e.comments[d]=m},null,8,["modelValue","onUpdate:modelValue"])),s("div",{class:"flex justify-end",onClick:m=>e.postComment(d,o.story_id)},[i(f,null,{default:a(()=>t[27]||(t[27]=[u("Comment")])),_:1})],8,we)])):g("",!0)]))),256)):g("",!0),e.loading.stories?(l(),n("div",be,t[29]||(t[29]=[s("div",{class:"flex items-center"},[s("div",null,[s("div",{class:"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"}),s("div",{class:"w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"})])],-1),s("hr",null,null,-1),s("div",{class:"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-3"},null,-1),s("div",{class:"flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"},[s("svg",{class:"w-10 h-10 text-gray-200 dark:text-gray-600","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20"},[s("path",{d:"M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"}),s("path",{d:"M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"})])],-1),s("span",{class:"sr-only"},"Loading...",-1)]))):g("",!0)])])]),_:1},8,["onScroll"]),i(y(z),{class:"z-50",toggler:e.lightbox.open,sources:e.lightbox.src,exitFullscreenOnClose:!0},null,8,["toggler","sources"]),i(S,{open:e.show_add_story_modal,"onUpdate:open":t[9]||(t[9]=o=>e.show_add_story_modal=o),classProp:"max-w-xl"},{title:a(()=>t[30]||(t[30]=[u("Add Story")])),content:a(()=>[s("div",ke,[i(h,{items:e.$page.props.programmes,"label-property":"name","value-property":"id",modelValue:e.add_story.form.programme_id,"onUpdate:modelValue":t[1]||(t[1]=o=>e.add_story.form.programme_id=o),"select-placeholder":"Select Programme","search-placeholder":"Search programme..."},null,8,["items","modelValue"]),i(h,{items:e.$page.props.centres,"label-property":"label","value-property":"ID",modelValue:e.add_story.form.centre_id,"onUpdate:modelValue":t[2]||(t[2]=o=>e.add_story.form.centre_id=o),"select-placeholder":"Select Centre","search-placeholder":"Search centre..."},null,8,["items","modelValue"]),s("div",Ce,[i(h,{items:e.$page.props.class_types,"label-property":"name","value-property":"id",modelValue:e.add_story.find.class_types,"onUpdate:modelValue":t[3]||(t[3]=o=>e.add_story.find.class_types=o),"select-placeholder":"Select Class Type (optional)","search-placeholder":"Search class type..."},null,8,["items","modelValue"]),i(h,{items:e.add_story.list.levels,"label-property":"level","value-property":"id",modelValue:e.add_story.find.levels,"onUpdate:modelValue":t[4]||(t[4]=o=>e.add_story.find.levels=o),"select-placeholder":"Select Level (optional)","search-placeholder":"Search level..."},{label:a(({item:o})=>[u(" Level "+_(o.level),1)]),"label-content":a(({selectedItem:o,selectedItems:d,multiple:m})=>[o?(l(),n("span",xe,"Level "+_(o.level),1)):g("",!0)]),_:1},8,["items","modelValue"])]),i(h,{items:e.add_story.students[0].options,"label-property":"name","value-property":"id",modelValue:e.add_story.form.students,"onUpdate:modelValue":t[5]||(t[5]=o=>e.add_story.form.students=o),"select-placeholder":"Select Students","search-placeholder":"Search student...",multiple:!0},null,8,["items","modelValue"]),i(p,{rows:"3",placeholder:"What's happening today?",modelValue:e.add_story.form.caption,"onUpdate:modelValue":t[6]||(t[6]=o=>e.add_story.form.caption=o)},null,8,["modelValue"]),e.add_story.form.photos.length?(l(),n("div",Se,[s("div",Ve,[s("div",$e,[(l(!0),n(v,null,b(e.add_story.form.photos,(o,d)=>(l(),n("div",{class:"relative",key:d},[s("div",Le,[s("img",{src:o.url,class:"w-full h-full rounded-lg border-2 border-slate-200",onClick:m=>e.viewImage(o)},null,8,Pe),i(y($),{class:"rounded-full absolute -top-1 -right-1 text-red-600 bg-white h-5 w-5 cursor-pointer",onClick:m=>e.removePhoto(d)},null,8,["onClick"])])]))),128))])])])):g("",!0),s("div",Me,[s("label",{for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",onChange:t[7]||(t[7]=(...o)=>e.changePhoto&&e.changePhoto(...o))},t[31]||(t[31]=[s("div",{class:"flex flex-col items-center justify-center py-6"},[s("svg",{class:"w-8 h-8 mb-1 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 16"},[s("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})]),s("p",{class:"text-sm text-gray-500 dark:text-gray-400"},[s("span",{class:"font-semibold"},"Click to upload")]),s("span",{class:"text-xs text-center text-slate-500"},[u("Hold "),s("strong",null,"Shift"),u(" or "),s("strong",null,"CTRL"),u(" and click on images to select multiple")])],-1),s("input",{id:"dropzone-file",type:"file",class:"hidden",multiple:""},null,-1)]),32)]),i(f,{disabled:(e.add_story.form.photos.length||e.add_story.form.caption)&&!e.add_story.form.students.length,onClick:e.post},{default:a(()=>t[32]||(t[32]=[u("Post")])),_:1},8,["disabled","onClick"]),i(f,{type:"button",class:"text-white bg-gray-400 hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center",onClick:t[8]||(t[8]=o=>e.show_add_story_modal=!1)},{default:a(()=>t[33]||(t[33]=[u("Cancel")])),_:1})])]),_:1},8,["open"]),i(S,{open:e.show_edit_story_modal,"onUpdate:open":t[18]||(t[18]=o=>e.show_edit_story_modal=o),classProp:"max-w-xl"},{title:a(()=>t[34]||(t[34]=[u("Edit Story")])),content:a(()=>[s("div",Ue,[i(h,{items:e.$page.props.programmes,"label-property":"name","value-property":"id",modelValue:e.edit_story.form.programme_id,"onUpdate:modelValue":t[10]||(t[10]=o=>e.edit_story.form.programme_id=o),"select-placeholder":"Select Programme","search-placeholder":"Search programme..."},null,8,["items","modelValue"]),i(h,{items:e.$page.props.centres,"label-property":"label","value-property":"ID",modelValue:e.edit_story.form.centre_id,"onUpdate:modelValue":t[11]||(t[11]=o=>e.edit_story.form.centre_id=o),"select-placeholder":"Select Centre","search-placeholder":"Search centre..."},null,8,["items","modelValue"]),s("div",je,[i(h,{items:e.$page.props.class_types,"label-property":"name","value-property":"id",modelValue:e.edit_story.find.class_types,"onUpdate:modelValue":t[12]||(t[12]=o=>e.edit_story.find.class_types=o),"select-placeholder":"Select Class Type (optional)","search-placeholder":"Search class type..."},null,8,["items","modelValue"]),i(h,{items:e.edit_story.list.levels,"label-property":"level","value-property":"id",modelValue:e.edit_story.find.levels,"onUpdate:modelValue":t[13]||(t[13]=o=>e.edit_story.find.levels=o),"select-placeholder":"Select Level (optional)","search-placeholder":"Search level..."},{label:a(({item:o})=>[u(" Level "+_(o.level),1)]),"label-content":a(({selectedItem:o,selectedItems:d,multiple:m})=>[o?(l(),n("span",De,"Level "+_(o.level),1)):g("",!0)]),_:1},8,["items","modelValue"])]),i(h,{items:e.edit_story.students[0].options,"label-property":"name","value-property":"id",modelValue:e.edit_story.form.students,"onUpdate:modelValue":t[14]||(t[14]=o=>e.edit_story.form.students=o),"select-placeholder":"Select Students","search-placeholder":"Search student...",multiple:!0},null,8,["items","modelValue"]),i(p,{rows:"3",placeholder:"What's happening today?",modelValue:e.edit_story.form.caption,"onUpdate:modelValue":t[15]||(t[15]=o=>e.edit_story.form.caption=o)},null,8,["modelValue"]),e.edit_story.form.photos.length?(l(),n("div",Ee,[s("div",Be,[s("div",He,[(l(!0),n(v,null,b(e.edit_story.form.photos,(o,d)=>(l(),n("div",{class:"relative",key:d},[s("div",Te,[s("img",{src:o.url&&!o.story_id?o.url:"/storage/stories/"+o.image_filename,class:"w-full h-full rounded-lg border-2 border-slate-200",onClick:m=>e.viewImage(o)},null,8,Ae),i(y($),{class:"rounded-full absolute -top-1 -right-1 text-red-600 bg-white h-5 w-5 cursor-pointer",onClick:m=>e.removePhotoEditStory(d)},null,8,["onClick"])])]))),128))])])])):g("",!0),s("div",ze,[s("label",{for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",onChange:t[16]||(t[16]=(...o)=>e.changePhotoEditStory&&e.changePhotoEditStory(...o))},t[35]||(t[35]=[s("div",{class:"flex flex-col items-center justify-center py-6"},[s("svg",{class:"w-8 h-8 mb-1 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 16"},[s("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})]),s("p",{class:"text-sm text-gray-500 dark:text-gray-400"},[s("span",{class:"font-semibold"},"Click to upload")]),s("span",{class:"text-xs text-center text-slate-500"},[u("Hold "),s("strong",null,"Shift"),u(" or "),s("strong",null,"CTRL"),u(" and click on images to select multiple")])],-1),s("input",{id:"dropzone-file",type:"file",class:"hidden",multiple:""},null,-1)]),32)]),s("div",Ne,[i(f,{onClick:e.savePost},{default:a(()=>t[36]||(t[36]=[u("Save")])),_:1},8,["onClick"]),i(f,{variant:"outline",onClick:t[17]||(t[17]=o=>e.show_edit_story_modal=!1)},{default:a(()=>t[37]||(t[37]=[u("Cancel")])),_:1})])])]),_:1},8,["open"]),i(E,{open:e.confirmation.is_open,onClose:t[19]||(t[19]=o=>e.confirmation.is_open=!1),routeName:e.confirmation.route_name,id:e.confirmation.id},{title:a(()=>t[38]||(t[38]=[u("Delete Story")])),description:a(()=>t[39]||(t[39]=[u("Are you sure want to delete this story?")])),_:1},8,["open","routeName","id"])],64)}}});export{qt as default};
