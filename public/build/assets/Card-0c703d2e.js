import{_ as m}from"./ApplicationLogo-e2b93f7b.js";import{L as $}from"./@inertiajs-df65e401.js";import{q as l,x as c,y as i,v as d,P as o,u as r,D as a,m as n,t as _,z as f}from"./@vue-b5d553e1.js";import{c as u}from"./app-6e1c5045.js";const h={class:"min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-gray-50"},y={class:"w-full items-center sm:max-w-md mt-6 px-6 py-4 overflow-hidden sm:rounded-lg"},x={class:"flex flex-col justify-center items-center space-y-4"},j={__name:"Guest",setup(e){return(s,t)=>(l(),c("div",h,[i("div",y,[i("div",x,[d(r($),{href:"/"},{default:o(()=>[d(m,{class:"w-32 fill-current text-gray-500"})]),_:1}),a(s.$slots,"default")])])]))}},g={__name:"Card",props:{class:{type:null,required:!1}},setup(e){const s=e;return(t,p)=>(l(),c("div",{class:n(r(u)("rounded-xl border bg-card text-card-foreground shadow",s.class))},[a(t.$slots,"default")],2))}},C={__name:"CardHeader",props:{class:{type:null,required:!1}},setup(e){const s=e;return(t,p)=>(l(),c("div",{class:n(r(u)("flex flex-col gap-y-1.5 p-6",s.class))},[a(t.$slots,"default")],2))}},v={__name:"CardTitle",props:{class:{type:null,required:!1}},setup(e){const s=e;return(t,p)=>(l(),c("h3",{class:n(r(u)("font-semibold leading-none tracking-tight",s.class))},[a(t.$slots,"default")],2))}},w={__name:"CardDescription",props:{class:{type:null,required:!1}},setup(e){const s=e;return(t,p)=>(l(),c("p",{class:n(r(u)("text-sm text-muted-foreground",s.class))},[a(t.$slots,"default")],2))}},k={__name:"CardContent",props:{class:{type:null,required:!1}},setup(e){const s=e;return(t,p)=>(l(),c("div",{class:n(r(u)("p-6 pt-0",s.class))},[a(t.$slots,"default")],2))}},q={__name:"CardFooter",props:{class:{type:null,required:!1}},setup(e){const s=e;return(t,p)=>(l(),c("div",{class:n(r(u)("flex items-center p-6 pt-0",s.class))},[a(t.$slots,"default")],2))}},z={__name:"Card",setup(e){return(s,t)=>(l(),_(r(g),{class:"w-full max-w-sm"},{default:o(()=>[d(r(C),null,{default:o(()=>[d(r(v),{class:"text-2xl"},{default:o(()=>[a(s.$slots,"title")]),_:3}),s.$slots.description?(l(),_(r(w),{key:0},{default:o(()=>[a(s.$slots,"description")]),_:3})):f("",!0)]),_:3}),d(r(k),{class:"grid gap-4"},{default:o(()=>[a(s.$slots,"content")]),_:3}),s.$slots.footer?(l(),_(r(q),{key:0},{default:o(()=>[a(s.$slots,"footer")]),_:3})):f("",!0)]),_:3}))}};export{j as _,z as a};