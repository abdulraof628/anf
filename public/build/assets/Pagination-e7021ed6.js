import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{o as r,c as s,d as a,j as l,k as i,t as o,F as _,h as c,n as u}from"./app-54681965.js";const f={props:{page_data:Object,params:String}},x={class:"px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 bg-gray-300"},p={class:"flex-1 flex justify-between sm:hidden"},h=["href"],y=["href"],b={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},v={class:"text-sm text-gray-700"},w={class:"font-medium"},C={class:"font-medium"},j={class:"font-medium"},k={id:"pagination",class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px"},N=["href","innerHTML"];function z(d,n,e,B,L,P){return r(),s("div",x,[a("div",p,[e.page_data.prev_page_url?(r(),s("a",{key:0,href:e.page_data.prev_page_url,onClick:n[0]||(n[0]=t=>d.handleClick(t,e.page_data.prev_page_url)),class:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"}," Previous ",8,h)):l("",!0),e.page_data.next_page_url?(r(),s("a",{key:1,href:e.page_data.next_page_url,onClick:n[1]||(n[1]=t=>d.handleClick(t,e.page_data.prev_page_url)),class:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"}," Next ",8,y)):l("",!0)]),a("div",b,[a("div",null,[a("p",v,[i(" Showing "),a("span",w,o(e.page_data.from),1),i(" to "),a("span",C,o(e.page_data.to),1),i(" of "),a("span",j,o(e.page_data.total),1),i(" results ")])]),a("div",null,[a("nav",k,[(r(!0),s(_,null,c(e.page_data.links,(t,m)=>(r(),s("a",{key:m,href:t.url!==null&&t.url!==""?t.url+(e.params?e.params:""):null,class:u(t.active==!1&&t.url==null?"select-none bg-white border-gray-200 text-gray-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-not-allowed":t.active?"select-none z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium":"select-none bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"),innerHTML:t.label},null,10,N))),128))])])])])}const V=g(f,[["render",z]]);export{V as P};
