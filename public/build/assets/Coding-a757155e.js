import{o as s,c as e,a as _,d as t,F as d,e as l,t as o,u as i,q as p}from"./app-101444dd.js";import"./perfect-scrollbar.esm-cd9c85a5.js";import"./TimeAgo-beae56c4.js";import{h as m}from"./moment-55cb88ed.js";import h from"./Header-f61d7e9e.js";import"./_plugin-vue_export-helper-c27b6911.js";const x={id:"progress_report",class:"p-5 h-[297mm] w-[210mm]"},g=t("div",{class:"flex justify-center mb-5"},[t("img",{src:"/images/progress_report/coding_robotic.png",class:"w-full h-[200px]",alt:""})],-1),u={class:"flex justify-center mb-5"},f={class:"w-full"},y=t("thead",null,[t("tr",{class:"border"},[t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-1/12"},"Date"),t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-7/12"},"Lesson / Module"),t("th",{class:"border-2 border-gray-600 py-2 px-4 text-sm w-4/12"},"Assessments")])],-1),b={key:0},w=t("td",{colspan:"10",class:"text-center"},"No record",-1),v=[w],k={class:"border-2 text-center border-gray-600 py-2 px-4 text-sm",colspan:"3"},M={class:"border-2 border-gray-600 py-2 px-4 align-middle"},z={class:"flex flex-col"},N={class:"border-2 border-gray-600 py-2 px-4 align-top divide-y"},B={class:"flex flex-col py-3 items-start"},j={class:"underline text-left font-semibold"},D={class:"text-left italic"},O={class:"mt-3 space-y-0.5 text-gray-800"},A={class:"flex"},L={class:"flex"},S={key:0,xmlns:"http://www.w3.org/2000/svg",class:"mt-0.5 w-4 h-4 mr-2 flex-shrink-0",viewBox:"0 0 512 512"},V=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"},null,-1),C=[V],F={key:1,xmlns:"http://www.w3.org/2000/svg",class:"mt-0.5 w-4 h-4 mr-2 flex-shrink-0",viewBox:"0 0 512 512"},J=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1),q=[J],E={class:"text-left"},H={class:"border-2 border-gray-600 py-2 px-4 text-sm align-top text-left"},Y={props:{data:Object}},Z=Object.assign(Y,{__name:"Coding",setup(c){return(G,I)=>(s(),e("div",x,[g,_(h,{report_data:c.data},null,8,["report_data"]),t("div",u,[t("table",f,[y,t("tbody",null,[c.data.report_data.length?(s(!0),e(d,{key:1},l(c.data.report_data,(a,K)=>(s(),e("tr",k,[t("td",M,[t("div",z,o(i(m)(a.date).format("DD/MM/Y"))+" "+o(a.attendance_status_name),1)]),t("td",N,[JSON.parse(a.report_data).length?(s(!0),e(d,{key:0},l(JSON.parse(a.report_data),(r,P)=>(s(),e("div",B,[t("span",j,o(r.lesson_name)+" : "+o(r.topic_name),1),t("span",D,o(r.objective_name),1),t("ul",O,[(s(!0),e(d,null,l(r.activities_procedures,n=>(s(),e("li",A,[t("div",L,[n.achieved?(s(),e("svg",S,C)):(s(),e("svg",F,q)),t("span",E,o(n.name),1)])]))),256))])]))),256)):p("",!0)]),t("td",H,o(a.comments),1)]))),256)):(s(),e("tr",b,v))])])])]))}});export{Z as default};
