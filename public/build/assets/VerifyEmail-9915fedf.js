import{ah as u,C as f,o,s as p,w as s,a,u as e,H as g,c as h,q as _,d as i,g as r,n as y,L as v,l as k}from"./app-495c50e4.js";import{B as x}from"./Button-e10a5d69.js";import{_ as b}from"./Guest-dfb377e8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-e61264c8.js";const w=i("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},V={class:"mt-4 flex items-center justify-between"},z={__name:"VerifyEmail",props:{status:String},setup(n){const c=n,t=u(),l=()=>{t.post(route("verification.send"))},d=f(()=>c.status==="verification-link-sent");return(m,C)=>(o(),p(b,null,{default:s(()=>[a(e(g),{title:"Email Verification"}),w,d.value?(o(),h("div",B," A new verification link has been sent to the email address you provided during registration. ")):_("",!0),i("form",{onSubmit:k(l,["prevent"])},[i("div",V,[a(x,{class:y({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[r(" Resend Verification Email ")]),_:1},8,["class","disabled"]),a(e(v),{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:s(()=>[r("Log Out")]),_:1},8,["href"])])],32)]),_:1}))}};export{z as default};
