import{_ as d}from"./Card-c7bd5922.js";import{y as u,x as o,Q as r,F as f,be as s,t as _,W as i,z as p}from"./@vue-d42dd214.js";import"./app-c289c940.js";import"./axios-1779699b.js";import"./pusher-js-d90fcbf8.js";import"./@inertiajs-7f289881.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./laravel-echo-96cacb8d.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./clsx-1229b3e0.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./class-variance-authority-52f2569e.js";import"./@radix-icons-4975f794.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";const g={class:"grid grid-cols-1 2xl:grid-cols-2 gap-4"},b={class:"flex justify-end"},k={class:"flex space-x-2"},v={props:{report_details:Object},data(){return{form:{id:this.$page.props.report_details.id,upcoming_feedback:this.$page.props.report_details.upcoming_feedback?this.$page.props.report_details.upcoming_feedback:"",improvement_feedback:this.$page.props.report_details.improvement_feedback?this.$page.props.report_details.improvement_feedback:""}}},methods:{saveFeedback(){this.$inertia.post(route("progress_report.store_summary"),this.form)}}},ae=Object.assign(v,{__name:"FeedbackSummary",setup(c){return(t,e)=>{const a=s("Label"),l=s("Textarea"),n=s("Button");return _(),u(f,null,[o(d,null,{title:r(()=>e[3]||(e[3]=[i("Report Summary")])),content:r(()=>[p("div",g,[p("div",null,[o(a,null,{default:r(()=>e[4]||(e[4]=[i("What's Next")])),_:1}),o(l,{rows:"3",modelValue:t.form.upcoming_feedback,"onUpdate:modelValue":e[0]||(e[0]=m=>t.form.upcoming_feedback=m),modelModifiers:{lazy:!0}},null,8,["modelValue"])]),p("div",null,[o(a,null,{default:r(()=>e[5]||(e[5]=[i("Need Improvement On")])),_:1}),o(l,{rows:"3",modelValue:t.form.improvement_feedback,"onUpdate:modelValue":e[1]||(e[1]=m=>t.form.improvement_feedback=m),modelModifiers:{lazy:!0}},null,8,["modelValue"])])])]),_:1}),o(d,null,{content:r(()=>[p("div",b,[p("div",k,[o(n,{variant:"outline",onClick:e[2]||(e[2]=m=>t.$inertia.get(t.route("progress_report")))},{default:r(()=>e[6]||(e[6]=[i("Cancel")])),_:1}),o(n,{onClick:t.saveFeedback},{default:r(()=>e[7]||(e[7]=[i("Save")])),_:1},8,["onClick"])])])]),_:1})],64)}}});export{ae as default};
