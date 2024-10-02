import{B as A}from"./Authenticated-63a330e4.js";import{H as v,L as $}from"./@inertiajs-4f2e6820.js";import{a as h}from"./axios-1779699b.js";import{e as x}from"./vue-debounce-ed417ae1.js";import{_ as S,a as V,b as D,c as L,d as U}from"./CarouselNext-5edb0595.js";import{_ as O}from"./Card-6bd18383.js";import{_ as k}from"./DialogModal-9102a744.js";import{y as g,x as s,u as d,Q as n,F as _,be as u,t as l,J as b,v as C,W as a,K as M,z as o,P,V as E}from"./@vue-66b8c761.js";import"./ApplicationLogo-f9b7ff8a.js";import"./radix-vue-aa72069b.js";import"./@floating-ui-b481b296.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-073cd217.js";import"./pusher-js-cb9cdec3.js";import"./@vueform-4cba997d.js";import"./@vuepic-d831316d.js";import"./@babel-1b80a44a.js";import"./cropperjs-c64556db.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./v-calendar-2d2eee44.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-b3927753.js";import"./@radix-icons-de95313b.js";import"./lodash.isequal-802c39ac.js";import"./vue-978cb4c7.js";import"./lodash.clonedeep-6494eade.js";import"./qs-740c36f9.js";import"./side-channel-eec8ae42.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-d4161e53.js";import"./deepmerge-89e33937.js";import"./nprogress-5b8a22ad.js";import"./lucide-vue-next-bc441494.js";import"./embla-carousel-vue-a1533ab5.js";import"./embla-carousel-reactive-utils-a554f5ae.js";import"./embla-carousel-9dc3d75b.js";async function I(){let i=!1;const t="https://pagead2.googlesyndication.com/pagead/show_ads.js";try{await fetch(new Request(t),{method:"HEAD",mode:"no-cors"}).catch(e=>i=!0)}catch{i=!0}return i}const N={methods:{detectAdBlock(){return I()}}},j=typeof window<"u"?N:{},F={class:"grid grid-cols-1 px-12 py-2"},z={class:"p-1 border rounded-lg"},H=["src"],R={class:"p-1 grid grid-cols-1 gap-4"},T={class:"pb-10"},Z={class:"w-full bg-gray-200 rounded-full dark:bg-gray-700"},G={components:{Head:v,Link:$},mixins:[j],data(){return{open_ad_detected:!1,open_generate_modal:!1,form:{student_id:"",student_nickname:"",theme_id:""},loading:{students:!1},list:{students:[]},current_progress:0,interval_id:null,generating:!1,error_student_nickname:!1,error_student_id:!1}},methods:{openDownloadModal(i){this.open_generate_modal=!0,this.form.student_id="",this.form.student_nickname="",this.form.theme_id=i},findStudents:x(function(i){i&&(this.loading.students=!0,h.get(route("students.find_digital_art_students"),{params:{keyword:i}}).then(t=>{this.list.students=t.data,this.loading.students=!1}))},1e3),generateArtBook(){if(this.error_student_nickname=this.form.student_nickname===""||this.form.student_nickname.length>10,this.error_student_id=this.form.student_id==="",this.form.student_nickname===""||this.form.student_nickname.length>10||this.form.student_id===""||this.generating)return;this.generating=!0,this.interval_id=null,this.current_progress=0;const i=100/120;this.interval_id=setInterval(()=>{this.current_progress+=i},1e3);const t={params:{student_id:this.form.student_id,theme_id:this.form.theme_id,student_nickname:this.form.student_nickname},responseType:"blob"};h.get(route("art_book.generate"),t).then(e=>{const m=new Blob([e.data],{type:"application/pdf"}),p=URL.createObjectURL(m);window.open(p,"_blank"),this.generating=!1,this.open_generate_modal=!1,clearInterval(this.interval_id)}).catch(e=>{console.error("Error fetching PDF:",e),this.generating=!1})},clearStudents(){this.list.students=[]}},created(){this.detectAdBlock().then(i=>{i&&(this.open_ad_detected=!0)})}},Re=Object.assign(G,{__name:"Index",setup(i){return(t,e)=>{const m=u("Label"),p=u("ComboBox"),y=u("Input"),f=u("Button");return l(),g(_,null,[s(d(v),{title:"Art Book"}),s(A,null,{header:n(()=>e[6]||(e[6]=[])),default:n(()=>[(l(!0),g(_,null,b(t.$page.props.artbooks,(r,w)=>(l(),C(O,null,{title:n(()=>[a(M(w),1)]),content:n(()=>[o("div",F,[s(d(S),{class:"relative w-full mx-1",opts:{align:"start"}},{default:n(()=>[s(d(V),null,{default:n(()=>[(l(!0),g(_,null,b(r,(c,B)=>(l(),C(d(D),{key:B,class:"py-2 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/6 cursor-pointer",onClick:J=>t.openDownloadModal(c.id)},{default:n(()=>[o("div",z,[o("img",{src:"/images/"+c.art_book_assets+"thumbnail.jpg",class:"w-full rounded-lg hover:scale-105 duration-200"},null,8,H)])]),_:2},1032,["onClick"]))),128))]),_:2},1024),s(d(L)),s(d(U))]),_:2},1024)])]),_:2},1024))),256)),s(k,{open:t.open_generate_modal,"onUpdate:open":e[3]||(e[3]=r=>t.open_generate_modal=r),classProp:"max-w-md",interactOutside:r=>{r.preventDefault()},hideClose:!0},P({_:2},[t.generating?{name:"title",fn:n(()=>[e[8]||(e[8]=a("Do not close the browser"))]),key:"1"}:{name:"title",fn:n(()=>[e[7]||(e[7]=a("Generate Art Book"))]),key:"0"},t.generating?{name:"content",fn:n(()=>[o("div",T,[e[11]||(e[11]=o("div",{class:"flex items-center mb-4 text-sm"},[o("div",{role:"status"},[o("svg",{"aria-hidden":"true",class:"w-6 h-6 me-2 text-indigo-200 animate-spin fill-indigo-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),o("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),o("span",{class:"sr-only"},"Loading...")]),a(" Please stay in this page and kindly wait as the system is in the process of creating your art book, this might take a while... ")],-1)),o("div",Z,[o("div",{class:"bg-indigo-600 text-xs font-medium text-indigo-100 text-center p-0.5 leading-none rounded-full h-2",style:E("width: "+t.current_progress+"%")},null,4)])])]),key:"3"}:{name:"content",fn:n(()=>[o("div",R,[o("div",null,[s(m,null,{default:n(()=>e[9]||(e[9]=[a("Student Name"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),s(p,{onSearch:t.findStudents,items:t.list.students,"label-property":"name","value-property":"id",error:t.error_student_id,modelValue:t.form.student_id,"onUpdate:modelValue":e[0]||(e[0]=r=>t.form.student_id=r),"select-placeholder":"Enter some characters to search","search-placeholder":"Search student...",loading:t.loading.students},null,8,["onSearch","items","error","modelValue","loading"])]),o("div",null,[s(m,null,{default:n(()=>e[10]||(e[10]=[a("Nickname"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),s(y,{error:t.error_student_nickname,modelValue:t.form.student_nickname,"onUpdate:modelValue":e[1]||(e[1]=r=>t.form.student_nickname=r),maxlength:"10",placeholder:"Max : 10 Characters"},null,8,["error","modelValue"])])])]),key:"2"},t.generating?void 0:{name:"footer",fn:n(()=>[s(f,{variant:"outline",onClick:e[2]||(e[2]=r=>t.open_generate_modal=!1)},{default:n(()=>e[12]||(e[12]=[a("Cancel")])),_:1}),s(f,{onClick:t.generateArtBook},{default:n(()=>e[13]||(e[13]=[a("Generate")])),_:1},8,["onClick"])]),key:"4"}]),1032,["open","interactOutside"]),s(k,{open:t.open_ad_detected,"onUpdate:open":e[5]||(e[5]=r=>t.open_ad_detected=r),classProp:"max-w-md",interactOutside:r=>{r.preventDefault()},hideClose:!0},{title:n(()=>e[14]||(e[14]=[a("Adblocker Detected")])),content:n(()=>e[15]||(e[15]=[o("span",{class:"font-medium text-sm text-slate-600"},"Please disable adblocker to prevent error during artbook generation. Thank you.",-1)])),footer:n(()=>[s(f,{onClick:e[4]||(e[4]=r=>t.open_ad_detected=!1)},{default:n(()=>e[16]||(e[16]=[a("Okay")])),_:1})]),_:1},8,["open","interactOutside"])]),_:1})],64)}}});export{Re as default};
