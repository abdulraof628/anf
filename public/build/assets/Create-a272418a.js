import{B as C}from"./Authenticated-e54ea1c2.js";import{H as f,L as g}from"./@inertiajs-dde9cc4c.js";import{_ as p}from"./Card-1dc3a135.js";import{a as y}from"./axios-1779699b.js";import{y as b,x as o,u as V,Q as t,F as v,be as s,t as _,W as m,z as l}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./radix-vue-d95f58a2.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-9e9c0f86.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./index-a78bcd26.js";import"./DialogDescription-befd605e.js";import"./lucide-vue-next-f56ff345.js";const $={class:"grid grid-cols-1 2xl:grid-cols-3 gap-4"},B={class:"flex justify-end"},L={class:"flex space-x-2"},S={components:{Head:f,Link:g},data(){return{selection:{countries:[]},form:{country_name:"",country_code:"",currency_name:"",currency_code:"",currency_symbol:"",calling_code:""}}},watch:{"form.country_name":{handler(){this.form.country_name&&this.setCountryData(this.form.country_name)},immediate:!0}},methods:{submit(){this.$inertia.post(route("countries.store"),this.form,{preserveState:!0})},getCountryList(i){i&&y.get("https://restcountries.com/v2/name/"+i).then(e=>{this.selection.countries=e.data.map(r=>({value:r.name,label:r.name}))})},setCountryData(i){y.get("https://restcountries.com/v2/name/"+i).then(e=>{this.form.country_name=e.data[0].name,this.form.country_code=e.data[0].alpha2Code,this.form.currency_name=e.data[0].currencies[0].name,this.form.currency_code=e.data[0].currencies[0].code,this.form.currency_symbol=e.data[0].currencies[0].symbol,this.form.calling_code="+"+e.data[0].callingCodes[0]}).catch(e=>{this.errored=!0})}}},br=Object.assign(S,{__name:"Create",setup(i){return(e,r)=>{const a=s("Label"),c=s("ComboBox"),u=s("Input"),d=s("Button");return _(),b(v,null,[o(V(f),{title:"Countries"}),o(C,null,{header:t(()=>r[7]||(r[7]=[])),default:t(()=>[o(p,null,{title:t(()=>r[8]||(r[8]=[m("Country Information")])),content:t(()=>[l("div",$,[l("div",null,[o(a,null,{default:t(()=>r[9]||(r[9]=[m("Name"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(c,{items:e.selection.countries,onSearch:e.getCountryList,"label-property":"label","value-property":"value",error:e.$page.props.errors.country_name,modelValue:e.form.country_name,"onUpdate:modelValue":r[0]||(r[0]=n=>e.form.country_name=n),"select-placeholder":"Select Country","search-placeholder":"Search country..."},null,8,["items","onSearch","error","modelValue"])]),l("div",null,[o(a,null,{default:t(()=>r[10]||(r[10]=[m("Country Code")])),_:1}),o(u,{type:"text",error:e.$page.props.errors.code,modelValue:e.form.country_code,"onUpdate:modelValue":r[1]||(r[1]=n=>e.form.country_code=n),disabled:""},null,8,["error","modelValue"])]),l("div",null,[o(a,null,{default:t(()=>r[11]||(r[11]=[m("Currency Name")])),_:1}),o(u,{type:"text",error:e.$page.props.errors.currency_name,modelValue:e.form.currency_name,"onUpdate:modelValue":r[2]||(r[2]=n=>e.form.currency_name=n),disabled:""},null,8,["error","modelValue"])]),l("div",null,[o(a,null,{default:t(()=>r[12]||(r[12]=[m("Currency Code")])),_:1}),o(u,{type:"text",error:e.$page.props.errors.currency_code,modelValue:e.form.currency_code,"onUpdate:modelValue":r[3]||(r[3]=n=>e.form.currency_code=n),disabled:""},null,8,["error","modelValue"])]),l("div",null,[o(a,null,{default:t(()=>r[13]||(r[13]=[m("Currency Symbol")])),_:1}),o(u,{type:"text",error:e.$page.props.errors.currency_symbol,modelValue:e.form.currency_symbol,"onUpdate:modelValue":r[4]||(r[4]=n=>e.form.currency_symbol=n),disabled:""},null,8,["error","modelValue"])]),l("div",null,[o(a,null,{default:t(()=>r[14]||(r[14]=[m("Calling Code")])),_:1}),o(u,{type:"text",error:e.$page.props.errors.calling_code,modelValue:e.form.calling_code,"onUpdate:modelValue":r[5]||(r[5]=n=>e.form.calling_code=n),disabled:""},null,8,["error","modelValue"])])])]),_:1}),o(p,null,{content:t(()=>[l("div",B,[l("div",L,[o(d,{variant:"outline",onClick:r[6]||(r[6]=n=>e.$inertia.get(e.route("countries")))},{default:t(()=>r[15]||(r[15]=[m("Cancel")])),_:1}),o(d,{onClick:e.submit},{default:t(()=>r[16]||(r[16]=[m("Save")])),_:1},8,["onClick"])])])]),_:1})]),_:1})],64)}}});export{br as default};
