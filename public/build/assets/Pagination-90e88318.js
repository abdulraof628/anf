import{Z as j,a0 as F,a1 as b,a2 as E,a3 as I,a4 as N,a5 as U,a6 as R}from"./radix-vue-efedc4b4.js";import{c as g,b as _,a as T}from"./app-a861bda2.js";import{k as V,l as z,m as A,e as O,d as D}from"./@radix-icons-03b844c4.js";import{c as f,q as i,t as c,P as l,D as m,v as o,u as r,A as G,m as y,Q as P,R as h,a5 as d,x as $,C as Z,F as q,V as H,G as J,z as K}from"./@vue-64c42e7d.js";const M={__name:"PaginationEllipsis",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const e=t,a=f(()=>{const{class:s,...n}=e;return n});return(s,n)=>(i(),c(r(j),G(a.value,{class:r(g)("w-9 h-9 flex items-center justify-center",e.class)}),{default:l(()=>[m(s.$slots,"default",{},()=>[o(r(V))])]),_:3},16,["class"]))}},W={__name:"PaginationFirst",props:{asChild:{type:Boolean,required:!1,default:!0},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const e=t,a=f(()=>{const{class:s,...n}=e;return n});return(s,n)=>(i(),c(r(F),P(h(a.value)),{default:l(()=>[o(r(_),{class:y(r(g)("w-9 h-9 p-0",e.class)),variant:"outline"},{default:l(()=>[m(s.$slots,"default",{},()=>[o(r(z))])]),_:3},8,["class"])]),_:3},16))}},X={__name:"PaginationLast",props:{asChild:{type:Boolean,required:!1,default:!0},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const e=t,a=f(()=>{const{class:s,...n}=e;return n});return(s,n)=>(i(),c(r(b),P(h(a.value)),{default:l(()=>[o(r(_),{class:y(r(g)("w-9 h-9 p-0",e.class)),variant:"outline"},{default:l(()=>[m(s.$slots,"default",{},()=>[o(r(A))])]),_:3},8,["class"])]),_:3},16))}},Y={__name:"PaginationNext",props:{asChild:{type:Boolean,required:!1,default:!0},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const e=t,a=f(()=>{const{class:s,...n}=e;return n});return(s,n)=>(i(),c(r(E),P(h(a.value)),{default:l(()=>[o(r(_),{class:y(r(g)("w-9 h-9 p-0",e.class)),variant:"outline"},{default:l(()=>[m(s.$slots,"default",{},()=>[o(r(O))])]),_:3},8,["class"])]),_:3},16))}},ee={__name:"PaginationPrev",props:{asChild:{type:Boolean,required:!1,default:!0},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const e=t,a=f(()=>{const{class:s,...n}=e;return n});return(s,n)=>(i(),c(r(I),P(h(a.value)),{default:l(()=>[o(r(_),{class:y(r(g)("w-9 h-9 p-0",e.class)),variant:"outline"},{default:l(()=>[m(s.$slots,"default",{},()=>[o(r(D))])]),_:3},8,["class"])]),_:3},16))}},ae={components:{Pagination:N,PaginationEllipsis:M,PaginationFirst:W,PaginationLast:X,PaginationList:U,PaginationListItem:R,PaginationNext:Y,PaginationPrev:ee,Button:_},data(){return{url:""}},props:{page_data:Object,params:Object},methods:{objectToQueryString(t,e=""){const a=[];for(const s in t)if(t.hasOwnProperty(s)){const n=t[s],p=e?`${e}[${s}]`:s;typeof n=="object"&&!Array.isArray(n)?a.push(this.objectToQueryString(n,p)):a.push(`${encodeURIComponent(p)}=${encodeURIComponent(n)}`)}return a.join("&")},generateQueryString(){return this.objectToQueryString(this.params)},generatePageUrl(t){const e=this.generateQueryString();return e?`${t}&${e}`:t}},mounted(){this.generateQueryString()},updated(){this.generateQueryString()}};function te(t,e,a,s,n,p){const C=d("PaginationFirst"),k=d("Button"),B=d("PaginationListItem"),L=d("PaginationEllipsis"),S=d("PaginationLast"),w=d("PaginationList"),x=d("Pagination",!0);return a.page_data.data.length?(i(),c(x,{key:0,total:a.page_data.total,itemsPerPage:10,siblingCount:2,"default-page":a.page_data.current_page},{default:l(({page:se})=>[o(w,{class:"flex justify-center items-center gap-1"},{default:l(({items:Q})=>[o(C,{onClick:e[0]||(e[0]=u=>t.$inertia.get(p.generatePageUrl(a.page_data.first_page_url)))}),(i(!0),$(q,null,Z(Q,(u,v)=>(i(),$(q,{key:v},[u.type==="page"?(i(),c(B,{key:0,value:u.value,"as-child":"",onClick:ne=>t.$inertia.get(p.generatePageUrl(a.page_data.path+"?page="+u.value))},{default:l(()=>[o(k,{class:"w-10 h-10 p-0",variant:u.value===a.page_data.current_page?"default":"outline"},{default:l(()=>[H(J(u.value),1)]),_:2},1032,["variant"])]),_:2},1032,["value","onClick"])):(i(),c(L,{key:u.type,index:v},null,8,["index"]))],64))),128)),o(S,{onClick:e[1]||(e[1]=u=>t.$inertia.get(p.generatePageUrl(a.page_data.last_page_url)))})]),_:1})]),_:1},8,["total","default-page"])):K("",!0)}const ue=T(ae,[["render",te]]);export{ue as P};
