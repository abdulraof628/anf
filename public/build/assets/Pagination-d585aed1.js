import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import{o,c as l,d as r,q as m,g as c,t as u,F as f,e as h,n as g}from"./app-495c50e4.js";const y={data(){return{url:""}},props:{page_data:Object,params:Object,class:String},methods:{objectToQueryString(s,a=""){const e=[];for(const n in s)if(s.hasOwnProperty(n)){const i=s[n],d=a?`${a}[${n}]`:n;typeof i=="object"&&!Array.isArray(i)?e.push(this.objectToQueryString(i,d)):e.push(`${encodeURIComponent(d)}=${encodeURIComponent(i)}`)}return e.join("&")},generateQueryString(){this.url=this.objectToQueryString(this.params)}},mounted(){this.generateQueryString()},updated(){this.generateQueryString()},computed:{computedClass(){return{[this.class]:this.class,"bg-gray-200":!this.class}}}},x={class:"flex-1 flex justify-between sm:hidden"},b=["href"],v=["href"],w={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},C={class:"text-sm text-gray-700"},S={class:"font-medium"},j={class:"font-medium"},Q={class:"font-medium"},T={id:"pagination",class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px"},k=["href","innerHTML"];function N(s,a,e,n,i,d){return o(),l("div",{class:g(["px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6",d.computedClass])},[r("div",x,[e.page_data.prev_page_url?(o(),l("a",{key:0,href:e.page_data.prev_page_url,onClick:a[0]||(a[0]=t=>s.handleClick(t,e.page_data.prev_page_url)),class:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"}," Previous ",8,b)):m("",!0),e.page_data.next_page_url?(o(),l("a",{key:1,href:e.page_data.next_page_url,onClick:a[1]||(a[1]=t=>s.handleClick(t,e.page_data.prev_page_url)),class:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"}," Next ",8,v)):m("",!0)]),r("div",w,[r("div",null,[r("p",C,[c(" Showing "),r("span",S,u(e.page_data.from),1),c(" to "),r("span",j,u(e.page_data.to),1),c(" of "),r("span",Q,u(e.page_data.total),1),c(" results ")])]),r("div",null,[r("nav",T,[(o(!0),l(f,null,h(e.page_data.links,(t,_)=>(o(),l("a",{key:_,href:t.url!==null&&t.url!==""?t.url+(this.url?"&"+this.url:""):null,class:g(t.active==!1&&t.url==null?"select-none bg-white border-gray-200 text-gray-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-not-allowed":t.active?"select-none z-10 bg-indgo-i50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium":"select-none bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"),innerHTML:t.label},null,10,k))),128))])])])],2)}const B=p(y,[["render",N]]);export{B as P};
