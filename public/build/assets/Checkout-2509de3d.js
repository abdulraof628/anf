import{h as d,a as h,b as S,w as b,F as E,H as y,L as B,ad as C,o as u,d as t,n as f,e as c,k as m,y as g,i as p}from"./app-825cb09d.js";import{B as j}from"./Authenticated-36680990.js";import"./ApplicationLogo-47fe7a8e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Button-5cb0f01e.js";import"./default.css_vue_type_style_index_0_src_true_lang-ba7b10a7.js";/*!
 * paypal-js v5.1.4 (2022-11-29T23:08:21.847Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(a,e){var r=document.querySelector('script[src="'.concat(a,'"]'));if(r===null)return null;var n=w(a,e),s=r.cloneNode();if(delete s.dataset.uidAuto,Object.keys(s.dataset).length!==Object.keys(n.dataset).length)return null;var o=!0;return Object.keys(s.dataset).forEach(function(i){s.dataset[i]!==n.dataset[i]&&(o=!1)}),o?r:null}function P(a){var e=a.url,r=a.attributes,n=a.onSuccess,s=a.onError,o=w(e,r);o.onerror=s,o.onload=n,document.head.insertBefore(o,document.head.firstElementChild)}function L(a){var e="https://www.paypal.com/sdk/js";a.sdkBaseURL&&(e=a.sdkBaseURL,delete a.sdkBaseURL),I(a);var r=Object.keys(a).filter(function(o){return typeof a[o]<"u"&&a[o]!==null&&a[o]!==""}).reduce(function(o,i){var l=a[i].toString();return i.substring(0,5)==="data-"?o.dataAttributes[i]=l:o.queryParams[i]=l,o},{queryParams:{},dataAttributes:{}}),n=r.queryParams,s=r.dataAttributes;return{url:"".concat(e,"?").concat(M(n)),dataAttributes:s}}function M(a){var e="";return Object.keys(a).forEach(function(r){e.length!==0&&(e+="&"),e+=r+"="+a[r]}),e}function O(a){var e=a.split("/* Original Error:")[1];return e?e.replace(/\n/g,"").replace("*/","").trim():a}function w(a,e){e===void 0&&(e={});var r=document.createElement("script");return r.src=a,Object.keys(e).forEach(function(n){r.setAttribute(n,e[n]),n==="data-csp-nonce"&&r.setAttribute("nonce",e["data-csp-nonce"])}),r}function I(a){var e=a["merchant-id"],r=a["data-merchant-id"],n="",s="";return Array.isArray(e)?e.length>1?(n="*",s=e.toString()):n=e.toString():typeof e=="string"&&e.length>0?n=e:typeof r=="string"&&r.length>0&&(n="*",s=r),a["merchant-id"]=n,a["data-merchant-id"]=s,a}function T(a,e){if(e===void 0&&(e=x()),_(a,e),typeof window>"u")return e.resolve(null);var r=L(a),n=r.url,s=r.dataAttributes,o=s["data-namespace"]||"paypal",i=v(o);return A(n,s)&&i?e.resolve(i):D({url:n,attributes:s},e).then(function(){var l=v(o);if(l)return l;throw new Error("The window.".concat(o," global variable is not available."))})}function D(a,e){e===void 0&&(e=x()),_(a,e);var r=a.url,n=a.attributes;if(typeof r!="string"||r.length===0)throw new Error("Invalid url.");if(typeof n<"u"&&typeof n!="object")throw new Error("Expected attributes to be an object.");return new e(function(s,o){if(typeof window>"u")return s();P({url:r,attributes:n,onSuccess:function(){return s()},onError:function(){var i=new Error('The script "'.concat(r,'" failed to load.'));return window.fetch?fetch(r).then(function(l){return l.status===200&&o(i),l.text()}).then(function(l){var k=O(l);o(new Error(k))}).catch(function(l){o(l)}):o(i)}})})}function x(){if(typeof Promise>"u")throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function v(a){return window[a]}function _(a,e){if(typeof a!="object"||a===null)throw new Error("Expected an options object.");if(typeof e<"u"&&typeof e!="function")throw new Error("Expected PromisePonyfill to be a function.")}const N={class:"py-4 px-4"},R={class:"overflow-x-auto"},q={class:"mx-auto"},z={class:"align-left flex space-x-3"},U=t("div",{class:"bg-white rounded shadow p-8 w-1/2"},[t("div",null,[t("h3",{class:"text-xl mt-4 font-bold"},"Shopping Cart"),t("div",{class:"border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap"},[t("img",{src:"https://images-na.ssl-images-amazon.com/images/I/41KufN65f8L.jpg",class:"w-12"}),t("div",{class:"w-2/3"},[t("h3",{class:"text-lg font-medium"},"Black Jacket XL"),t("p",{class:"text-gray-600 text-xs"},[c("Sold by "),t("b",null,"Joey Khan")]),t("h4",{class:"text-red-700 text-xs font-bold mt-1"},"Only 2 left in stock")]),t("div",null,[t("h4",{class:"text-3xl font-medium"},[t("sup",{class:"text-lg text-purple-800"},"RM"),c(" 89")])]),t("div",{class:"w-full flex justify-between mt-4"},[t("button",{class:"text-red-700 px-2"},"DELETE"),t("label",{class:"block tracking-wide text-gray-700",for:"grid-first-name"},[c(" Quantity "),t("button",{class:"py-1 px-3 bg-indigo-600 hover:bg-indigo-700 rounded-sm text-white"},"-"),t("label",{class:"px-3 font-bold"},"3"),t("button",{class:"py-1 px-3 bg-indigo-600 hover:bg-indigo-700 rounded-sm text-white"},"+")])])]),t("div",{class:"border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap"},[t("img",{src:"https://m.media-amazon.com/images/I/71I3TJMpqCL._AC_SR180,120_QL70_.jpg",class:"w-12"}),t("div",{class:"w-2/3"},[t("h3",{class:"text-lg font-medium"},"Black Hat"),t("p",{class:"text-gray-600 text-xs"},[c("Sold by "),t("b",null,"Tammy Austin")]),t("h4",{class:"text-red-700 text-xs font-bold mt-1"},"Only 1 left in stock")]),t("div",null,[t("h4",{class:"text-3xl font-medium"},[t("sup",{class:"text-lg text-purple-800"},"RM"),c(" 20")])]),t("div",{class:"w-full flex justify-between mt-4"},[t("button",{class:"text-red-700 px-2"},"DELETE"),t("label",{class:"block tracking-wide text-gray-700",for:"grid-first-name"},[c(" Quantity "),t("button",{class:"py-1 px-3 bg-indigo-600 hover:bg-indigo-700 rounded-sm text-white"},"-"),t("label",{class:"px-3 font-bold"},"3"),t("button",{class:"py-1 px-3 bg-indigo-600 hover:bg-indigo-700 rounded-sm text-white"},"+")])])])])],-1),H={class:"bg-white rounded shadow p-8 w-1/2 space-y-2"},$=t("h3",{class:"font-bold"},"Payment Method",-1),J={class:"flex space-x-1"},K={class:"absolute right-[-5px] top-0 h-10 w-10"},Q=t("div",{class:"absolute transform rotate-45 bg-indigo-500 text-center text-white font-semibold py-1 left-[15px] top-[-10px] w-[40px] h-[25px]"},null,-1),V=[Q],X={class:"absolute right-[-5px] top-0 h-10 w-10"},F=t("div",{class:"absolute transform rotate-45 bg-indigo-500 text-center text-white font-semibold py-1 left-[15px] top-[-10px] w-[40px] h-[25px]"},null,-1),W=[F],Y=t("div",{class:"relative overflow-hidden text-gray-400 border px-4 py-2 cursor-not-allowed"},"Installments",-1),Z={key:0,class:"flex flex-col space-y-4 border border-gray-300 p-3"},G=t("img",{class:"w-10 h-10",src:"/storage/bank_logos/img_bankmy_maybank.png",alt:""},null,-1),ee=t("label",{for:"",class:"cursor-pointer"},"Maybank2u",-1),te=t("img",{class:"w-10 h-10",src:"/storage/bank_logos/img_bankmy_cimb.png",alt:""},null,-1),ae=t("label",{for:"",class:"cursor-pointer"},"CIMB Clicks",-1),re={key:1,class:"flex flex-col space-y-4 border border-gray-300 p-3"},ne=["innerHTML"],oe=t("label",{for:""},"Pay Now",-1),se=[oe],ie={components:{Head:y,Link:B},data(){return{paymentSelected:!1,bankSelected:{maybank:!1,cimb:!1},activePayment:{fpx:!1,cc:!1},form:{collection_id:"yu5exgud",description:"Test payment",email:"abdulraof628@gmail.com",name:"Abdul Raof",amount:100,reference_1_label:"Bank Code",reference_1:"MB2U0227",callback_url:"http://localhost:8000/shop/payment",redirect_url:"http://localhost:8000/shop/payment/status"}}},watch:{},methods:{checkout(){this.$inertia.get(route("shop.checkout"))},activatePayment(a){this.paymentSelected=!1,this.form.reference_1="";var e=this.activePayment,r=this.bankSelected;Object.keys(e).forEach(n=>{e[n]=!1}),Object.keys(r).forEach(n=>{r[n]=!1}),e[a]=!0,this.activePayment.cc&&T({"client-id":"test"}).then(n=>{console.log(n),n.Buttons({style:{layout:"vertical",color:"blue",shape:"rect",label:"pay"}}).render("#paypal-button-container").catch(s=>{console.error("failed to render the PayPal Buttons",s)})}).catch(n=>{console.error("failed to load the PayPal JS SDK script",n)})},selectBank(a,e){var r=this.bankSelected;Object.keys(r).forEach(n=>{r[n]=!1}),r[a]=!0,this.paymentSelected=!0,this.form.reference_1=e},pay(){this.activePayment.fpx&&C.post("https://www.billplz-sandbox.com/api/v3/bills",this.form,{headers:{Authorization:"Basic "+btoa({}.MIX_BILLPLZ_SANDBOX_API_KEY)}}).then(function(a){console.log(a.data.url),window.location.href=a.data.url+"?auto_submit=true"}).catch(function(a){console.log(a)}).then(function(){})}}},he=Object.assign(ie,{__name:"Checkout",setup(a){return(e,r)=>(u(),d(E,null,[h(S(y),{title:"Title"}),h(j,null,{header:b(()=>[]),default:b(()=>[t("div",N,[t("div",R,[t("div",q,[t("div",z,[U,t("div",H,[$,t("div",J,[t("div",{class:f(["relative overflow-hidden border hover:border-indigo-500 hover:text-indigo-700 px-4 py-2 cursor-pointer",e.activePayment.fpx?"border-indigo-500 text-indigo-700":" border-gray-300"]),onClick:r[0]||(r[0]=n=>e.activatePayment("fpx"))},[c(" Online Banking (FPX) "),m(t("div",K,V,512),[[g,e.activePayment.fpx]])],2),t("div",{class:f(["relative overflow-hidden border hover:border-indigo-500 hover:text-indigo-700 px-4 py-2 cursor-pointer",e.activePayment.cc?"border-indigo-500 text-indigo-700":" border-gray-300"]),onClick:r[1]||(r[1]=n=>e.activatePayment("cc"))},[c(" Credit Card "),m(t("div",X,W,512),[[g,e.activePayment.cc]])],2),Y]),e.activePayment.fpx?(u(),d("div",Z,[t("div",{class:"flex items-center space-x-4 cursor-pointer",onClick:r[2]||(r[2]=n=>e.selectBank("maybank","MB2U0227"))},[t("div",{class:f(["border border-gray-200 w-4 h-4 rounded-full",e.bankSelected.maybank?"bg-indigo-600":"bg-white"])},null,2),G,ee]),t("div",{class:"flex items-center space-x-4 cursor-pointer",onClick:r[3]||(r[3]=n=>e.selectBank("cimb","BCBB0235"))},[t("div",{class:f(["border border-gray-200 w-4 h-4 bg-white rounded-full",e.bankSelected.cimb?"bg-indigo-600":"bg-white"])},null,2),te,ae])])):p("",!0),e.activePayment.cc?(u(),d("div",re,[t("div",{id:"paypal-button-container",innerHTML:(e.activatePayment.cc,"")},null,8,ne)])):p("",!0),e.paymentSelected?(u(),d("div",{key:2,class:"flex justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer",onClick:r[4]||(r[4]=(...n)=>e.pay&&e.pay(...n))},se)):p("",!0)])])])])])]),_:1})],64))}});export{he as default};
