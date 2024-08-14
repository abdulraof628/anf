import"./Authenticated-6651b23d.js";import"./@inertiajs-41d03628.js";import{h as c}from"./moment-3968d9f3.js";import l from"./Header-48a15538.js";import{x as s,v as d,y as t,F as m,C as p,q as e,G as o,u as _,z as h}from"./@vue-64c42e7d.js";import"./ApplicationLogo-64527dd0.js";import"./radix-vue-2488f6ae.js";import"./@floating-ui-7a9770d8.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-f96983da.js";import"./app-98c3eb01.js";import"./axios-9cbf0d09.js";import"./pusher-js-2bcba7e2.js";import"./@vueform-ba82ac10.js";import"./@vuepic-339c593a.js";import"./date-fns-60a02367.js";import"./@babel-1b80a44a.js";import"./cropperjs-2c7c67ce.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1cb1b359.js";import"./@popperjs-f3391c26.js";import"./clsx-0839fdbe.js";import"./tailwind-merge-642c57ff.js";import"./@vueuse-deae3e94.js";import"./@radix-icons-03b844c4.js";import"./moment-timezone-65f24d9a.js";import"./lodash.isequal-60a7aae7.js";import"./vue-68dd36d7.js";import"./lodash.clonedeep-8b83a099.js";import"./qs-589f641c.js";import"./side-channel-1ba8a7fc.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-a3a9a537.js";import"./deepmerge-89e33937.js";import"./nprogress-34a09d83.js";import"./lucide-vue-next-48142e2c.js";const x={id:"progress_report",class:"p-5 h-[297mm] w-[210mm]"},u=t("div",{class:"flex justify-center mb-5 h-[200px]"},[t("img",{src:"/images/progress_report/math.png",class:"w-full h-[200px]",alt:""})],-1),g={class:"flex justify-center mb-5"},y={class:"w-full"},f=t("thead",null,[t("tr",{class:"border"},[t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-1/12"},"Date"),t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-7/12"},"Term / Book / Unit / Lesson"),t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-4/12"},"Assessments through Observations")])],-1),b={key:0},w=t("td",{colspan:"10",class:"text-center"},"No record",-1),v=[w],k={class:"border-2 text-center border-gray-600 py-2 px-4 text-sm",colspan:"3"},z={class:"border-2 border-gray-600 py-2 px-4 align-middle"},M={class:"flex flex-col"},B={class:"border-2 border-gray-600 py-2 px-4 align-top divide-y"},N={class:"flex flex-col py-3 items-start"},O={class:"underline text-left font-semibold"},j={class:"text-left italic"},D={class:"mt-3 space-y-0.5 text-gray-800"},L={class:"flex"},A={class:"flex"},S={key:0,xmlns:"http://www.w3.org/2000/svg",class:"mt-0.5 w-4 h-4 mr-2 flex-shrink-0",viewBox:"0 0 512 512"},V=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"},null,-1),C=[V],F={key:1,xmlns:"http://www.w3.org/2000/svg",class:"mt-0.5 w-4 h-4 mr-2 flex-shrink-0",viewBox:"0 0 512 512"},J=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1),U=[J],q={class:"text-left"},E={class:"border-2 border-gray-600 py-2 px-4 text-sm align-top text-left"},G={props:{data:Object}},Et=Object.assign(G,{__name:"Math",setup(i){return(H,T)=>(e(),s("div",x,[u,d(l,{report_data:i.data},null,8,["report_data"]),t("div",g,[t("table",y,[f,t("tbody",null,[i.data.report_data.length?(e(!0),s(m,{key:1},p(i.data.report_data,(r,Y)=>(e(),s("tr",k,[t("td",z,[t("div",M,o(_(c)(r.date).format("DD/MM/Y"))+" "+o(r.attendance_status_name),1)]),t("td",B,[JSON.parse(r.report_data).length?(e(!0),s(m,{key:0},p(JSON.parse(r.report_data),(a,I)=>(e(),s("div",N,[t("span",O,o(a.term_book_name)+"   (Unit "+o(a.unit_name)+")",1),t("span",j,"Lesson "+o(a.lesson_name),1),t("ul",D,[(e(!0),s(m,null,p(a.objectives,n=>(e(),s("li",L,[t("div",A,[n.achieved?(e(),s("svg",S,C)):(e(),s("svg",F,U)),t("span",q,o(n.name),1)])]))),256))])]))),256)):h("",!0)]),t("td",E,o(r.comments),1)]))),256)):(e(),s("tr",b,v))])])])]))}});export{Et as default};
