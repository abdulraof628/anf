import{h as o,c as a}from"./@vue-b5d553e1.js";const h={transform:"rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))"},p={fill:"currentColor"},s={mdi:{size:24,viewbox:"0 0 24 24"},"simple-icons":{size:24,viewbox:"0 0 24 24"},default:{size:0,viewbox:"0 0 0 0"}},b={name:"icon",props:{type:{type:String,default:"mdi"},faIcon:{type:Object,default:null},path:{type:[String,Object,Array]},size:{type:[Number,String],default:24},viewbox:String,flip:{type:String,validator:t=>["horizontal","vertical","both"].includes(t)},rotate:{type:[Number,String],default:0}},setup(t){if(!t.path&&!t.faIcon)return console.warn("vue3-icon requires either a 'path' or an 'fa-icon' property"),()=>o("div");const i=a(()=>{var e;return((e=t.faIcon)==null?void 0:e.prefix)||t.type}),r=a(()=>parseInt(t.rotate,10)),n=a(()=>s[i.value]||s.default),l=a(()=>parseInt(t.size,10)||n.value.size),u=a(()=>t.faIcon?`0 0 ${t.faIcon.icon[0]} ${t.faIcon.icon[1]}`:!1),c=a(()=>u.value||t.viewbox||n.value.viewbox),v=a(()=>({...h,"--sx":["both","horizontal"].includes(t.flip)?"-1":"1","--sy":["both","vertical"].includes(t.flip)?"-1":"1","--r":isNaN(r.value)?r.value:r.value+"deg"})),f=a(()=>{var e;return t.faIcon?(e=t.faIcon)==null?void 0:e.icon[4]:t.type==="simple-icons"&&typeof t.path=="object"?t.path.path:t.path}),d=a(()=>i.value==="fad"?(console.warn("vue3-icon does not currently support Duotone FontAwesome icons"),o("path")):Array.isArray(t.path)?o("g",{style:{...p}},t.path.map(e=>typeof e=="string"?o("path",{d:e}):o("path",{...e}))):o("path",{d:f.value,style:{...p}}));return()=>o("svg",{style:v.value,class:["vue3-icon"],width:l.value,height:l.value,viewBox:c.value},[d.value])}};export{b as g};