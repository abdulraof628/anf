import{o as a,c as i,d as e,h as r,v as d,a as l,w as m,g as c}from"./app-0c09215a.js";import{B as n}from"./Button-6186b6ca.js";import"./_plugin-vue_export-helper-c27b6911.js";const p={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},b={class:"sm:row-span-3"},_={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},f=e("div",{class:"mb-5"},[e("h1",{class:"font-bold text-indigo-800 self-end"},"Summary"),e("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),g={class:"grid grid-cols-1 md:grid-cols-2 gap-2"},u={class:"mb-4"},v=e("label",{class:"block text-sm font-bold text-gray-700 mb-1"},"What's Next",-1),h={class:"mb-4"},k=e("label",{class:"block text-sm font-bold text-gray-700 mb-1"},"Need Improvement On",-1),x={class:"flex justify-end"},w={data(){return{form:{id:this.$page.props.report_details.id,upcoming_feedback:this.$page.props.report_details.upcoming_feedback?this.$page.props.report_details.upcoming_feedback:"",improvement_feedback:this.$page.props.report_details.improvement_feedback?this.$page.props.report_details.improvement_feedback:""}}},methods:{saveFeedback(){this.$inertia.post(route("progress_report.store_summary"),this.form)}}},V=Object.assign(w,{__name:"FeedbackSummary",setup(y){return(s,o)=>(a(),i("div",p,[e("div",b,[e("div",_,[f,e("div",g,[e("div",u,[v,r(e("textarea",{class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300",rows:"3",cols:"","onUpdate:modelValue":o[0]||(o[0]=t=>s.form.upcoming_feedback=t)},null,512),[[d,s.form.upcoming_feedback]])]),e("div",h,[k,r(e("textarea",{class:"focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm border-gray-300",rows:"3",cols:"","onUpdate:modelValue":o[1]||(o[1]=t=>s.form.improvement_feedback=t)},null,512),[[d,s.form.improvement_feedback]])])]),e("div",x,[l(n,{onClick:o[2]||(o[2]=t=>s.saveFeedback())},{default:m(()=>[c("Save")]),_:1})])])])]))}});export{V as default};
