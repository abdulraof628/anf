import"./Authenticated-e54ea1c2.js";import{h as d}from"./moment-a9aaa855.js";import{_ as s}from"./Card-1dc3a135.js";import{v as u,Q as r,be as a,t as f,W as i,z as p,x as e}from"./@vue-d42dd214.js";import"./ApplicationLogo-aa67088e.js";import"./@inertiajs-dde9cc4c.js";import"./lodash.isequal-375e1553.js";import"./vue-227b0305.js";import"./lodash.clonedeep-ab16d4d4.js";import"./qs-19c2a829.js";import"./side-channel-0fc46420.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-c7e60009.js";import"./deepmerge-89e33937.js";import"./nprogress-cbfeb08c.js";import"./radix-vue-d95f58a2.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-9e9c0f86.js";import"./axios-1779699b.js";import"./pusher-js-fe63a254.js";import"./@vueform-cd27a95b.js";import"./cropperjs-ee227adc.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./index-a78bcd26.js";import"./DialogDescription-befd605e.js";import"./lucide-vue-next-f56ff345.js";const _={class:"grid grid-cols-1 2xl:grid-cols-3 gap-4"},g={data(){return{name:this.$page.props.student_info.name,date_joined:d(this.$page.props.student_info.joined_date).format("DD MMM Y"),programme_level:this.$page.props.student_info.programme+" / Level "+this.$page.props.student_info.level}}},so=Object.assign(g,{__name:"StudentInformation",setup(v){return(t,o)=>{const l=a("Label"),n=a("Input");return f(),u(s,null,{title:r(()=>o[3]||(o[3]=[i("Student Information")])),content:r(()=>[p("div",_,[p("div",null,[e(l,null,{default:r(()=>o[4]||(o[4]=[i("Name")])),_:1}),e(n,{disabled:"",modelValue:t.name,"onUpdate:modelValue":o[0]||(o[0]=m=>t.name=m)},null,8,["modelValue"])]),p("div",null,[e(l,null,{default:r(()=>o[5]||(o[5]=[i("Date Joined")])),_:1}),e(n,{disabled:"",modelValue:t.date_joined,"onUpdate:modelValue":o[1]||(o[1]=m=>t.date_joined=m)},null,8,["modelValue"])]),p("div",null,[e(l,null,{default:r(()=>o[6]||(o[6]=[i("Programme / Level")])),_:1}),e(n,{disabled:"",modelValue:t.programme_level,"onUpdate:modelValue":o[2]||(o[2]=m=>t.programme_level=m)},null,8,["modelValue"])])])]),_:1})}}});export{so as default};