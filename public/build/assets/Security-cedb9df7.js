import{y as t,x as a,u as w,Q as c,F as m,t as n,z as o,A as d,bE as l,q as p}from"./@vue-2682a433.js";import{_ as u}from"./Authenticated-0f1261d0.js";import{H as f}from"./@inertiajs-6e15fcc1.js";import g from"./Navigation-201fcca5.js";import"./@heroicons-6acff2c6.js";import"./app-268d443b.js";import"./axios-1779699b.js";import"./pusher-js-747fa3ad.js";import"./@vueform-93d31398.js";import"./@vuepic-72648ebd.js";import"./@babel-1b80a44a.js";import"./cropperjs-1d139b1c.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-ae9c59f1.js";import"./radix-vue-1c0958bf.js";import"./@floating-ui-46419ac1.js";import"./@internationalized-2f03b566.js";import"./clsx-1229b3e0.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-bada8fb2.js";import"./class-variance-authority-52f2569e.js";import"./@radix-icons-96330712.js";import"./lodash.isequal-aa94bca8.js";import"./vue-210fd32b.js";import"./lodash.clonedeep-15f95254.js";import"./qs-d67e8c34.js";import"./side-channel-51e4be2c.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-110a5121.js";import"./deepmerge-89e33937.js";import"./nprogress-47dccea4.js";import"./@headlessui-b7da89b9.js";import"./simplebar-vue-4fcec6b7.js";import"./simplebar-core-3f5973b9.js";import"./lodash-es-9b1d07da.js";import"./Button-42d44458.js";const v={class:"flex justify-center"},C={class:"flex-1 max-w-4xl"},y={class:""},b={class:"grid divide-y divide-neutral-200 max-w-xl md:hidden"},h=["href"],x={class:"group",open:""},k={class:"bg-white text-neutral-600 p-4"},z={class:"grid divide-y divide-neutral-200 max-w-xl"},M={class:"flex flex-col"},L={class:"mb-5"},P={class:"flex items-center space-x-2"},$=["type"],B={class:"mb-5"},_={class:"flex items-center space-x-2"},N=["type"],S={class:"mb-5"},R={class:"flex items-center space-x-2"},V=["type"],j={class:"hidden md:grid grid-cols-6 gap-2"},U={class:"col-span-2"},H={class:"col-span-4"},D={class:"bg-white p-6 border border-gray-300 shadow rounded-lg"},E={class:"grid divide-y divide-neutral-200 max-w-xl"},F={class:"flex flex-col"},q={class:"mb-5"},A={class:"flex items-center space-x-2"},O=["type"],Q={class:"mb-5"},G={class:"flex items-center space-x-2"},I=["type"],J={class:"mb-5"},K={class:"flex items-center space-x-2"},T=["type"],W={data(){return{show:{current_password:!1,new_password:!1,retype_new_password:!1},form:{current_password:"",new_password:"",confirm_new_password:""}}},methods:{changePassword(){this.$inertia.post(route("profile.security.store"),this.form,{preserveState:!1})},showCurrentPassword(i){this.show.current_password=!!i},showNewPassword(i){this.show.new_password=!!i},showRetypeNewPassword(i){this.show.retype_new_password=!!i}}},G1=Object.assign(W,{__name:"Security",setup(i){return(e,s)=>(n(),t(m,null,[a(w(f),{title:"Home"}),a(u,null,{default:c(()=>[o("div",v,[o("div",C,[o("div",y,[o("div",b,[o("a",{href:e.route("parent.profile"),class:"flex justify-between items-center font-semibold cursor-pointer list-none bg-indigo-100 px-5 py-3"},s[20]||(s[20]=[o("span",{class:"text-sm md:text-base"}," Profile",-1),o("span",{class:"transition rotate-0 group-open:rotate-180"},[o("svg",{fill:"none",height:"24","shape-rendering":"geometricPrecision",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",width:"24"},[o("path",{d:"M6 9l6 6 6-6"})])],-1)]),8,h),o("details",x,[s[30]||(s[30]=o("summary",{class:"flex justify-between items-center font-semibold cursor-pointer list-none bg-indigo-100 px-5 py-3"},[o("span",{class:"text-sm md:text-base"}," Security"),o("span",{class:"transition rotate-0 group-open:rotate-180"},[o("svg",{fill:"none",height:"24","shape-rendering":"geometricPrecision",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",width:"24"},[o("path",{d:"M6 9l6 6 6-6"})])])],-1)),o("div",k,[o("div",z,[o("div",M,[o("div",L,[s[23]||(s[23]=o("label",{for:"user_name",class:"font-semibold text-sm text-gray-700 select-none"},"Current password",-1)),o("div",P,[d(o("input",{type:e.show.current_password?"text":"password",id:"user_name",class:p(["mt-1 h-10 text-sm focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md",e.$page.props.errors.current_password?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[0]||(s[0]=r=>e.form.current_password=r),autocomplete:"none"},null,10,$),[[l,e.form.current_password]]),e.show.current_password?(n(),t("span",{key:1,class:"cursor-pointer",onClick:s[2]||(s[2]=r=>e.showCurrentPassword(!1))},s[22]||(s[22]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 640 512"},[o("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"})],-1)]))):(n(),t("span",{key:0,class:"cursor-pointer",onClick:s[1]||(s[1]=r=>e.showCurrentPassword(!0))},s[21]||(s[21]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 576 512"},[o("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"})],-1)])))])]),o("div",B,[s[26]||(s[26]=o("label",{for:"user_name",class:"font-semibold text-sm text-gray-700 select-none"},"New password",-1)),o("div",_,[d(o("input",{type:e.show.new_password?"text":"password",id:"user_name",class:p(["mt-1 h-10 text-sm focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md",e.$page.props.errors.new_password?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[3]||(s[3]=r=>e.form.new_password=r),autocomplete:"none"},null,10,N),[[l,e.form.new_password]]),e.show.new_password?(n(),t("span",{key:1,class:"cursor-pointer",onClick:s[5]||(s[5]=r=>e.showNewPassword(!1))},s[25]||(s[25]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 640 512"},[o("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"})],-1)]))):(n(),t("span",{key:0,class:"cursor-pointer",onClick:s[4]||(s[4]=r=>e.showNewPassword(!0))},s[24]||(s[24]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 576 512"},[o("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"})],-1)])))])]),o("div",S,[s[29]||(s[29]=o("label",{for:"user_name",class:"font-semibold text-sm text-gray-700 select-none"},"Retype new password",-1)),o("div",R,[d(o("input",{type:e.show.retype_new_password?"text":"password",id:"user_name",class:p(["mt-1 h-10 text-sm focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md",e.$page.props.errors.confirm_new_password?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[6]||(s[6]=r=>e.form.confirm_new_password=r),autocomplete:"none"},null,10,V),[[l,e.form.confirm_new_password]]),e.show.retype_new_password?(n(),t("span",{key:1,class:"cursor-pointer",onClick:s[8]||(s[8]=r=>e.showRetypeNewPassword(!1))},s[28]||(s[28]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 640 512"},[o("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"})],-1)]))):(n(),t("span",{key:0,class:"cursor-pointer",onClick:s[7]||(s[7]=r=>e.showRetypeNewPassword(!0))},s[27]||(s[27]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 576 512"},[o("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"})],-1)])))])]),o("button",{onClick:s[9]||(s[9]=(...r)=>e.changePassword&&e.changePassword(...r)),class:"block w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white"}," Change Password ")])])])])])]),o("div",j,[o("div",U,[a(g)]),o("div",H,[o("div",D,[s[40]||(s[40]=o("p",{class:"tracking-normal antialiased mb-4 block text-xs font-semibold uppercase text-gray-500 font-[Roboto]"},"Password",-1)),o("div",E,[o("div",F,[o("div",q,[s[33]||(s[33]=o("label",{for:"user_name",class:"font-semibold text-sm text-gray-700 select-none"},"Current password",-1)),o("div",A,[d(o("input",{type:e.show.current_password?"text":"password",id:"user_name",class:p(["mt-1 h-10 text-sm focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md",e.$page.props.errors.current_password?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[10]||(s[10]=r=>e.form.current_password=r),autocomplete:"none"},null,10,O),[[l,e.form.current_password]]),e.show.current_password?(n(),t("span",{key:1,class:"cursor-pointer",onClick:s[12]||(s[12]=r=>e.showCurrentPassword(!1))},s[32]||(s[32]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 640 512"},[o("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"})],-1)]))):(n(),t("span",{key:0,class:"cursor-pointer",onClick:s[11]||(s[11]=r=>e.showCurrentPassword(!0))},s[31]||(s[31]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 576 512"},[o("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"})],-1)])))])]),o("div",Q,[s[36]||(s[36]=o("label",{for:"user_name",class:"font-semibold text-sm text-gray-700 select-none"},"New password",-1)),o("div",G,[d(o("input",{type:e.show.new_password?"text":"password",id:"user_name",class:p(["mt-1 h-10 text-sm focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md",e.$page.props.errors.new_password?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[13]||(s[13]=r=>e.form.new_password=r),autocomplete:"none"},null,10,I),[[l,e.form.new_password]]),e.show.new_password?(n(),t("span",{key:1,class:"cursor-pointer",onClick:s[15]||(s[15]=r=>e.showNewPassword(!1))},s[35]||(s[35]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 640 512"},[o("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"})],-1)]))):(n(),t("span",{key:0,class:"cursor-pointer",onClick:s[14]||(s[14]=r=>e.showNewPassword(!0))},s[34]||(s[34]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 576 512"},[o("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"})],-1)])))])]),o("div",J,[s[39]||(s[39]=o("label",{for:"user_name",class:"font-semibold text-sm text-gray-700 select-none"},"Retype new password",-1)),o("div",K,[d(o("input",{type:e.show.retype_new_password?"text":"password",id:"user_name",class:p(["mt-1 h-10 text-sm focus:ring-0 focus:border-gray-300 flex-1 block w-full rounded-md",e.$page.props.errors.confirm_new_password?"border-red-300":"border-gray-300"]),"onUpdate:modelValue":s[16]||(s[16]=r=>e.form.confirm_new_password=r),autocomplete:"none"},null,10,T),[[l,e.form.confirm_new_password]]),e.show.retype_new_password?(n(),t("span",{key:1,class:"cursor-pointer",onClick:s[18]||(s[18]=r=>e.showRetypeNewPassword(!1))},s[38]||(s[38]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 640 512"},[o("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"})],-1)]))):(n(),t("span",{key:0,class:"cursor-pointer",onClick:s[17]||(s[17]=r=>e.showRetypeNewPassword(!0))},s[37]||(s[37]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 576 512"},[o("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"})],-1)])))])]),o("button",{onClick:s[19]||(s[19]=(...r)=>e.changePassword&&e.changePassword(...r)),class:"block w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white"}," Change Password ")])])])])])])])]),_:1})],64))}});export{G1 as default};
