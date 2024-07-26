import"./Authenticated-f12ae66a.js";import"./@inertiajs-df65e401.js";import{h as p}from"./moment-a9aaa855.js";import n from"./Header-3db90b39.js";import{q as s,x as e,v as m,y as t,F as c,C as d,G as o,u as _,z as h}from"./@vue-b5d553e1.js";import"./ApplicationLogo-e2b93f7b.js";import"./app-6e1c5045.js";import"./axios-9cbf0d09.js";import"./pusher-js-1c63de54.js";import"./@vueform-f7c8a6df.js";import"./@vuepic-b5e5f2dc.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-28b7d936.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./radix-vue-09f0b006.js";import"./@floating-ui-6a5ebbeb.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-282a3f07.js";import"./class-variance-authority-f96983da.js";import"./@radix-icons-62a42a61.js";import"./lodash.isequal-f375c7a4.js";import"./vue-c49564f2.js";import"./lodash.clonedeep-375466af.js";import"./qs-120ae55f.js";import"./side-channel-a42ec8a2.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-f7269186.js";import"./deepmerge-89e33937.js";import"./nprogress-b3880cbb.js";import"./lucide-vue-next-967cc12e.js";const x={id:"progress_report",class:"p-5 h-[297mm] w-[210mm]"},g=t("div",{class:"flex justify-center mb-5"},[t("img",{src:"/images/progress_report/coding_robotic.png",class:"w-full h-[200px]",alt:""})],-1),u={class:"flex justify-center mb-5"},y={class:"w-full"},f=t("thead",null,[t("tr",{class:"border"},[t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-1/12"},"Date"),t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-7/12"},"Lesson / Module"),t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-4/12"},"Assessments")])],-1),b={key:0},w=t("td",{colspan:"10",class:"text-center"},"No record",-1),v=[w],k={class:"border-2 text-center border-gray-600 py-2 px-4 text-sm",colspan:"3"},z={class:"border-2 border-gray-600 py-2 px-4 align-middle"},M={class:"flex flex-col"},N={class:"border-2 border-gray-600 py-2 px-4 align-top divide-y"},B={class:"flex flex-col py-3 items-start"},j={class:"underline text-left font-semibold"},D={class:"text-left italic"},O={class:"mt-3 space-y-0.5 text-gray-800"},A={class:"flex"},C={class:"flex"},L={key:0,xmlns:"http://www.w3.org/2000/svg",class:"mt-0.5 w-4 h-4 mr-2 flex-shrink-0",viewBox:"0 0 512 512"},S=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"},null,-1),V=[S],F={key:1,xmlns:"http://www.w3.org/2000/svg",class:"mt-0.5 w-4 h-4 mr-2 flex-shrink-0",viewBox:"0 0 512 512"},J=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1),q=[J],E={class:"text-left"},G={class:"border-2 border-gray-600 py-2 px-4 text-sm align-top text-left"},H={props:{data:Object}},Ft=Object.assign(H,{__name:"Coding",setup(i){return(Y,I)=>(s(),e("div",x,[g,m(n,{report_data:i.data},null,8,["report_data"]),t("div",u,[t("table",y,[f,t("tbody",null,[i.data.report_data.length?(s(!0),e(c,{key:1},d(i.data.report_data,(r,K)=>(s(),e("tr",k,[t("td",z,[t("div",M,o(_(p)(r.date).format("DD/MM/Y"))+" "+o(r.attendance_status_name),1)]),t("td",N,[JSON.parse(r.report_data).length?(s(!0),e(c,{key:0},d(JSON.parse(r.report_data),(a,P)=>(s(),e("div",B,[t("span",j,o(a.lesson_name)+" : "+o(a.topic_name),1),t("span",D,o(a.objective_name),1),t("ul",O,[(s(!0),e(c,null,d(a.activities_procedures,l=>(s(),e("li",A,[t("div",C,[l.achieved?(s(),e("svg",L,V)):(s(),e("svg",F,q)),t("span",E,o(l.name),1)])]))),256))])]))),256)):h("",!0)]),t("td",G,o(r.comments),1)]))),256)):(s(),e("tr",b,v))])])])]))}});export{Ft as default};
