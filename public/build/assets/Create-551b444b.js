import{y as h,x as l,u as v,Q as s,F as y,be as f,t as g,W as m,z as o,A as b,I as w,C as _}from"./@vue-d42dd214.js";import{B as T}from"./Authenticated-f3f73889.js";import{H as k,L as C}from"./@inertiajs-7f289881.js";import{_ as x}from"./Card-c7bd5922.js";import{d as L}from"./@radix-icons-4975f794.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-c289c940.js";import"./axios-1779699b.js";import"./pusher-js-d90fcbf8.js";import"./laravel-echo-96cacb8d.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-2b1a9f82.js";import"./DialogDescription-c70040de.js";import"./lucide-vue-next-53796c49.js";const $={class:"grid grid-cols-1 gap-4"},M={class:"space-y-2"},V={key:0,class:"rounded-md bg-red-100 p-4"},j={class:"flex"},B={class:"flex-shrink-0"},E={class:"space-y-1 text-center"},F={class:"flex text-sm text-gray-600"},P={class:"browse text-indigo-400 hover:text-indigo-800 cursor-pointer font-bold"},R={ref:"thumbnail",id:"file",class:"sr-only",type:"file",accept:"image/*"},U={class:"flex flex-row justify-start space-x-2"},H={class:"flex-column text-center"},I=["src"],N={class:"flex-column"},A={class:"flex flex-col space-y-1"},D={class:"flex justify-end"},G={class:"flex space-x-2"},c=window.URL||window.webkitURL,S=/^image\/\w+$/,O={components:{Head:k,Link:C},data(){return{data:{type:Object,default:()=>({})},list:{students:[],levels:this.$page.props.levels,themes:[],lessons:[],activities:[]},form:{title:"",folder_name:"",thumbnail:{image_url:"",file:""}}}},methods:{submit(){this.$inertia.post(route("math_manipulatives.configuration.store"),this.form,{preserveState:!0})},read(i,e){return new Promise((t,n)=>{if(!i){t();return}S.test(i.type)?c?t({loaded:!0,name:i.name,type:i.type,url:c.createObjectURL(i)}):n(new Error("Your browser is not supported.")):n(new Error("Please select a valid image file."))})},changeThumbnail({target:i}){const{files:e}=i;e&&e.length>0&&this.read(e[0],i).then(t=>{this.form.thumbnail.image_url=t.url,this.form.thumbnail.file=e[0]}).catch(this.alert)},dragoverThumbnail(i){i.preventDefault()},dropThumbnail(i){const{files:e}=i.dataTransfer;i.preventDefault(),e&&e.length>0&&this.read(e[0],i).then(t=>{this.form.thumbnail.image_url=t.url,this.form.thumbnail.file=e[0]}).catch(this.alert)},reselect_thumbnail(){this.$refs.thumbnail.value="",this.form.thumbnail.image_url="",this.form.thumbnail.file=""},change(i){const e=i.target.files,t={};for(let n=0;n<e.length;n++){const d=e[n],a=d.webkitRelativePath.split("/");let r=t;for(let p=0;p<a.length;p++){const u=a[p];r[u]?p===a.length-1&&r[u].push(d):p===a.length-1?r[u]=[d]:r[u]={},r=r[u]}}this.form.folder=t},removeFolder(){this.form.folder=[]}}},It=Object.assign(O,{__name:"Create",setup(i){return(e,t)=>{const n=f("Label"),d=f("Input"),a=f("Button");return g(),h(y,null,[l(v(k),{title:"Math Manipulatives"}),l(T,null,{header:s(()=>t[7]||(t[7]=[])),default:s(()=>[l(x,null,{title:s(()=>t[8]||(t[8]=[m("Upload Math Manipulative")])),content:s(()=>[o("div",$,[o("div",null,[l(n,null,{default:s(()=>t[9]||(t[9]=[m("Title"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),l(d,{type:"text",error:e.$page.props.errors.title,modelValue:e.form.title,"onUpdate:modelValue":t[0]||(t[0]=r=>e.form.title=r)},null,8,["error","modelValue"])]),b(o("div",M,[t[15]||(t[15]=o("label",{class:"block text-sm text-gray-700 font-bold"},[m(" Thumbnail "),o("span",{class:"text-red-500"},"*")],-1)),e.$page.props.errors["artwork.file"]?(g(),h("div",V,[o("div",j,[o("div",B,[l(v(L),{class:"h-5 w-5 text-red-500","aria-hidden":"true"})]),t[10]||(t[10]=o("div",{class:"ml-3"},[o("h3",{class:"text-sm font-medium text-red-500"},"File is required!")],-1))])])):_("",!0),o("div",{class:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",onChange:t[1]||(t[1]=(...r)=>e.changeThumbnail&&e.changeThumbnail(...r)),onDragover:t[2]||(t[2]=(...r)=>e.dragoverThumbnail&&e.dragoverThumbnail(...r)),onDrop:t[3]||(t[3]=(...r)=>e.dropThumbnail&&e.dropThumbnail(...r))},[o("div",E,[t[13]||(t[13]=o("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[o("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),o("div",F,[o("label",P,[t[11]||(t[11]=m("Click here ")),o("input",R,null,512)]),t[12]||(t[12]=o("p",{class:"pl-1"},"or drag and drop an image",-1))]),t[14]||(t[14]=o("p",{class:"text-xs text-gray-500"},"Image Format : PNG, JPG",-1))])],32)],512),[[w,e.form.thumbnail.image_url==""]]),b(o("div",null,[t[17]||(t[17]=o("label",{class:"block text-sm text-gray-700 font-bold mb-2"}," Artwork File ",-1)),o("div",U,[o("div",H,[o("img",{class:"object-scale-down h-40 w-40",src:e.form.thumbnail.image_url,alt:""},null,8,I)]),o("div",N,[o("div",A,[l(a,{onClick:t[4]||(t[4]=r=>e.reselect_thumbnail()),title:"Reselect an image"},{default:s(()=>t[16]||(t[16]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)])),_:1})])])])],512),[[w,e.form.thumbnail.image_url!=""]]),o("div",null,[l(n,null,{default:s(()=>t[18]||(t[18]=[m("Folder Name"),o("span",{class:"text-red-500"},"*",-1)])),_:1}),l(d,{type:"text",error:e.$page.props.errors.folder_name,modelValue:e.form.folder_name,"onUpdate:modelValue":t[5]||(t[5]=r=>e.form.folder_name=r)},null,8,["error","modelValue"])])])]),_:1}),l(x,null,{content:s(()=>[o("div",D,[o("div",G,[l(a,{variant:"outline",onClick:t[6]||(t[6]=r=>e.$inertia.get(e.route("math_manipulatives.configuration")))},{default:s(()=>t[19]||(t[19]=[m("Cancel")])),_:1}),l(a,{onClick:e.submit},{default:s(()=>t[20]||(t[20]=[m("Save")])),_:1},8,["onClick"])])])]),_:1})]),_:1})],64)}}});export{It as default};
