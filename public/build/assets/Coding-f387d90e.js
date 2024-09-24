import"./Authenticated-2464c72b.js";import"./@inertiajs-c7856c69.js";import{h as n}from"./moment-a9aaa855.js";import c from"./Header-845e65d4.js";import{y as r,z as t,x as _,F as l,D as m,t as e,H as o,u as x,A as g}from"./@vue-fa39c8c3.js";import"./ApplicationLogo-bc2e3fb2.js";import"./radix-vue-b52878ef.js";import"./@floating-ui-d22e3cce.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-f5e40355.js";import"./axios-1779699b.js";import"./pusher-js-ddef06ed.js";import"./@vueform-b962800d.js";import"./@vuepic-62f3604d.js";import"./@babel-1b80a44a.js";import"./cropperjs-aef143af.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-1a2c766e.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-0175b845.js";import"./@radix-icons-a5b56816.js";import"./lodash.isequal-32ec3540.js";import"./vue-e0f979ce.js";import"./lodash.clonedeep-2dfa23d9.js";import"./qs-fddd7d85.js";import"./side-channel-a64b5f12.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-6df2283d.js";import"./deepmerge-89e33937.js";import"./nprogress-4f526f01.js";import"./lucide-vue-next-f94b1320.js";const u={id:"progress_report",class:"p-5 h-[297mm] w-[210mm]"},h={class:"flex justify-center mb-5"},y={class:"w-full"},f={key:0},b={class:"border-2 text-center border-gray-600 py-2 px-4 text-sm",colspan:"3"},w={class:"border-2 border-gray-600 py-2 px-4 align-middle"},v={class:"flex flex-col"},k={class:"border-2 border-gray-600 py-2 px-4 align-top divide-y"},z={class:"flex flex-col py-3 items-start"},M={class:"underline text-left font-semibold"},N={class:"text-left italic"},B={class:"mt-3 space-y-0.5 text-gray-800"},D={class:"flex"},j={class:"flex"},A={key:0,xmlns:"http://www.w3.org/2000/svg",class:"mt-0.5 w-4 h-4 mr-2 flex-shrink-0",viewBox:"0 0 512 512"},O={key:1,xmlns:"http://www.w3.org/2000/svg",class:"mt-0.5 w-4 h-4 mr-2 flex-shrink-0",viewBox:"0 0 512 512"},L={class:"text-left"},S={class:"border-2 border-gray-600 py-2 px-4 text-sm align-top text-left"},V={props:{data:Object}},jt=Object.assign(V,{__name:"Coding",setup(p){return(C,s)=>(e(),r("div",u,[s[4]||(s[4]=t("div",{class:"flex justify-center mb-5"},[t("img",{src:"/images/progress_report/coding_robotic.png",class:"w-full h-[200px]",alt:""})],-1)),_(c,{report_data:p.data},null,8,["report_data"]),t("div",h,[t("table",y,[s[3]||(s[3]=t("thead",null,[t("tr",{class:"border"},[t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-1/12"},"Date"),t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-7/12"},"Lesson / Module"),t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-4/12"},"Assessments")])],-1)),t("tbody",null,[p.data.report_data.length?(e(!0),r(l,{key:1},m(p.data.report_data,(a,F)=>(e(),r("tr",b,[t("td",w,[t("div",v,o(x(n)(a.date).format("DD/MM/Y"))+" "+o(a.attendance_status_name),1)]),t("td",k,[JSON.parse(a.report_data).length?(e(!0),r(l,{key:0},m(JSON.parse(a.report_data),(i,H)=>(e(),r("div",z,[t("span",M,o(i.lesson_name)+" : "+o(i.topic_name),1),t("span",N,o(i.objective_name),1),t("ul",B,[(e(!0),r(l,null,m(i.activities_procedures,d=>(e(),r("li",D,[t("div",j,[d.achieved?(e(),r("svg",A,s[1]||(s[1]=[t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"},null,-1)]))):(e(),r("svg",O,s[2]||(s[2]=[t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1)]))),t("span",L,o(d.name),1)])]))),256))])]))),256)):g("",!0)]),t("td",S,o(a.comments),1)]))),256)):(e(),r("tr",f,s[0]||(s[0]=[t("td",{colspan:"10",class:"text-center"},"No record",-1)])))])])])]))}});export{jt as default};
