import{o as u}from"./keyboard-a9c96269.js";import{z as r,A as l,a0 as f}from"./app-b18481c7.js";function a(t,n){if(t)return t;let e=n??"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function v(t,n){let e=r(a(t.value.type,t.value.as));return l(()=>{e.value=a(t.value.type,t.value.as)}),f(()=>{var o;e.value||u(n)&&u(n)instanceof HTMLButtonElement&&!((o=u(n))!=null&&o.hasAttribute("type"))&&(e.value="button")}),e}export{v as s};
