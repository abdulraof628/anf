import{B as m}from"./Authenticated-cf6f3e2c.js";import{B as p}from"./Button-8060ba77.js";import{c as o,b as r,u,w as i,F as d,H as c,L as _,o as s,d as e,m as h,k as g,j as v,h as f,t as x}from"./app-abb14225.js";import"./ApplicationLogo-86d866bd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XIcon-9a0666f4.js";import"./TimeAgo-fee1d65d.js";import"./moment-fbc5633a.js";const w={class:"py-4 px-4"},y={class:"overflow-x-auto"},b={class:"mx-auto"},k={class:"align-middle inline-block min-w-full p-2 space-y-6"},B={class:"flex lg:grow sm:justify-end"},C={key:0,class:"bg-gray-50 rounded shadow p-6"},N={class:"p-4"},$={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-10"},T=["onClick"],j={class:"flex items-center h-60 w-60"},L=["src"],V={class:"w-full p-4 text-center bg-indigo-200"},z={class:"font-medium text-gray-900"},F={key:1,class:"bg-white shadow-md rounded border"},H=e("div",{class:"max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-24"},[e("div",{class:"max-w-3xl mx-auto text-center"},[e("h2",{class:"text-3xl font-extrabold text-gray-900 sm:text-3xl"},"It seems no math manipulatives have been added."),e("p",{class:"mt-3 text-xl font-sans text-gray-500 sm:mt-4"},"To start adding one, click on the configuration button.")])],-1),I=[H],M={components:{Head:c,Link:_},methods:{openNewTab(n){window.open(route("math_manipulatives.play",{name:n}),"_blank")}}},P=Object.assign(M,{__name:"Index",setup(n){return(t,l)=>(s(),o(d,null,[r(u(c),{title:"Math Manipulatives"}),r(m,null,{header:i(()=>[]),default:i(()=>[e("div",w,[e("div",y,[e("div",b,[e("div",k,[e("div",B,[t.$page.props.can.create_math_manipulatives?(s(),h(p,{key:0,buttonType:"info",onClick:l[0]||(l[0]=a=>t.$inertia.get(t.route("math_manipulatives.configuration")))},{default:i(()=>[g("Configuration")]),_:1})):v("",!0)]),t.$page.props.math_manipulatives.length?(s(),o("div",C,[e("div",N,[e("div",$,[(s(!0),o(d,null,f(t.$page.props.math_manipulatives,a=>(s(),o("div",{class:"flex flex-col divide-y items-center justify-center bg-white rounded-lg overflow-hidden shadow-lg transform transition hover:scale-[0.99] hover:cursor-pointer",onClick:A=>t.openNewTab(a.folder_name)},[e("div",j,[e("img",{src:"storage/math_manipulatives/thumbnails/"+a.thumbnail},null,8,L)]),e("div",V,[e("h3",z,x(a.name),1)])],8,T))),256))])])])):(s(),o("div",F,I))])])])])]),_:1})],64))}});export{P as default};
