import{B as C}from"./Authenticated-11e054d5.js";import{H as f,L as g}from"./@inertiajs-4f2e6820.js";import{s as b}from"./@vueform-4cba997d.js";import{_ as p}from"./Card-a2265374.js";import{a as y}from"./axios-1779699b.js";import{y as V,x as o,u as v,Q as t,F as _,be as s,t as $,W as m,z as l}from"./@vue-66b8c761.js";import"./ApplicationLogo-f9b7ff8a.js";import"./radix-vue-aa72069b.js";import"./@floating-ui-b481b296.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-98eea8e8.js";import"./pusher-js-cb9cdec3.js";import"./@vuepic-d831316d.js";import"./@babel-1b80a44a.js";import"./cropperjs-c64556db.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-2d2eee44.js";import"./tailwind-merge-26e9d2f1.js";import"./@vueuse-b3927753.js";import"./@radix-icons-de95313b.js";import"./lodash.isequal-802c39ac.js";import"./vue-978cb4c7.js";import"./lodash.clonedeep-6494eade.js";import"./qs-740c36f9.js";import"./side-channel-eec8ae42.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-d4161e53.js";import"./deepmerge-89e33937.js";import"./nprogress-5b8a22ad.js";import"./lucide-vue-next-bc441494.js";const B={class:"grid grid-cols-1 2xl:grid-cols-3 gap-4"},L={class:"flex justify-end"},S={class:"flex space-x-2"},k={components:{Head:f,Link:g,Multiselect:b},data(){return{selection:{countries:[]},form:{country_name:"",country_code:"",currency_name:"",currency_code:"",currency_symbol:"",calling_code:""}}},watch:{"form.country_name":{handler(){this.form.country_name&&this.setCountryData(this.form.country_name)},immediate:!0}},methods:{submit(){this.$inertia.post(route("countries.store"),this.form,{preserveState:!0})},getCountryList(i){i&&y.get("https://restcountries.com/v2/name/"+i).then(e=>{this.selection.countries=e.data.map(r=>({value:r.name,label:r.name}))})},setCountryData(i){y.get("https://restcountries.com/v2/name/"+i).then(e=>{this.form.country_name=e.data[0].name,this.form.country_code=e.data[0].alpha2Code,this.form.currency_name=e.data[0].currencies[0].name,this.form.currency_code=e.data[0].currencies[0].code,this.form.currency_symbol=e.data[0].currencies[0].symbol,this.form.calling_code="+"+e.data[0].callingCodes[0]}).catch(e=>{this.errored=!0})}}},gr=Object.assign(k,{__name:"Create",setup(i){return(e,r)=>{const a=s("Label"),c=s("ComboBox"),u=s("Input"),d=s("Button");return $(),V(_,null,[o(v(f),{title:"Countries"}),o(C,null,{header:t(()=>r[7]||(r[7]=[])),default:t(()=>[o(p,null,{title:t(()=>r[8]||(r[8]=[m("Country Information")])),content:t(()=>[l("div",B,[l("div",null,[o(a,null,{default:t(()=>r[9]||(r[9]=[m("Name"),l("span",{class:"text-red-500"},"*",-1)])),_:1}),o(c,{items:e.selection.countries,onSearch:e.getCountryList,"label-property":"label","value-property":"value",error:e.$page.props.errors.country_name,modelValue:e.form.country_name,"onUpdate:modelValue":r[0]||(r[0]=n=>e.form.country_name=n),"select-placeholder":"Select Country","search-placeholder":"Search country..."},null,8,["items","onSearch","error","modelValue"])]),l("div",null,[o(a,null,{default:t(()=>r[10]||(r[10]=[m("Country Code")])),_:1}),o(u,{type:"text",error:e.$page.props.errors.code,modelValue:e.form.country_code,"onUpdate:modelValue":r[1]||(r[1]=n=>e.form.country_code=n),disabled:""},null,8,["error","modelValue"])]),l("div",null,[o(a,null,{default:t(()=>r[11]||(r[11]=[m("Currency Name")])),_:1}),o(u,{type:"text",error:e.$page.props.errors.currency_name,modelValue:e.form.currency_name,"onUpdate:modelValue":r[2]||(r[2]=n=>e.form.currency_name=n),disabled:""},null,8,["error","modelValue"])]),l("div",null,[o(a,null,{default:t(()=>r[12]||(r[12]=[m("Currency Code")])),_:1}),o(u,{type:"text",error:e.$page.props.errors.currency_code,modelValue:e.form.currency_code,"onUpdate:modelValue":r[3]||(r[3]=n=>e.form.currency_code=n),disabled:""},null,8,["error","modelValue"])]),l("div",null,[o(a,null,{default:t(()=>r[13]||(r[13]=[m("Currency Symbol")])),_:1}),o(u,{type:"text",error:e.$page.props.errors.currency_symbol,modelValue:e.form.currency_symbol,"onUpdate:modelValue":r[4]||(r[4]=n=>e.form.currency_symbol=n),disabled:""},null,8,["error","modelValue"])]),l("div",null,[o(a,null,{default:t(()=>r[14]||(r[14]=[m("Calling Code")])),_:1}),o(u,{type:"text",error:e.$page.props.errors.calling_code,modelValue:e.form.calling_code,"onUpdate:modelValue":r[5]||(r[5]=n=>e.form.calling_code=n),disabled:""},null,8,["error","modelValue"])])])]),_:1}),o(p,null,{content:t(()=>[l("div",L,[l("div",S,[o(d,{variant:"outline",onClick:r[6]||(r[6]=n=>e.$inertia.get(e.route("countries")))},{default:t(()=>r[15]||(r[15]=[m("Cancel")])),_:1}),o(d,{onClick:e.submit},{default:t(()=>r[16]||(r[16]=[m("Save")])),_:1},8,["onClick"])])])]),_:1})]),_:1})],64)}}});export{gr as default};
