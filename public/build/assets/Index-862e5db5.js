import{y as h,x as o,u as l,Q as r,F as y,be as w,bf as B,t as f,z as a,A as $,W as p,K as m,C as v,v as C,J as k,bH as V}from"./@vue-d42dd214.js";import{B as F}from"./Authenticated-69dc7077.js";import{H as S,L}from"./@inertiajs-7f289881.js";import{_ as A}from"./index-08d028c6.js";import{_ as U}from"./DialogModal-29f4e54c.js";import{a as N}from"./axios-1779699b.js";import{_ as j}from"./Card-c810b5f4.js";import{_ as D,a as E,b as x,c as b,d as H,e as c}from"./TableRow-db7e0a98.js";import{P as I}from"./Pagination-1883d9b0.js";import{a as z}from"./@radix-icons-4975f794.js";import{F as J}from"./lucide-vue-next-53796c49.js";import"./ApplicationLogo-abeca850.js";import"./radix-vue-00e18109.js";import"./@floating-ui-61ac2ed2.js";import"./@internationalized-2f03b566.js";import"./class-variance-authority-52f2569e.js";import"./clsx-1229b3e0.js";import"./app-85118abc.js";import"./laravel-echo-96cacb8d.js";import"./@vueform-cd27a95b.js";import"./cropperjs-bffc402e.js";import"./laravel-vite-plugin-d10ca5e8.js";import"./vue-debounce-ed417ae1.js";import"./v-calendar-4b397a2a.js";import"./tailwind-merge-3f7ff3b1.js";import"./@vueuse-7b89e231.js";import"./@vuepic-1824abb1.js";import"./@babel-1b80a44a.js";import"./lodash.isequal-23888b5c.js";import"./vue-671a4423.js";import"./lodash.clonedeep-15cd822c.js";import"./qs-78438f3a.js";import"./side-channel-52add6bf.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-1fdcb41b.js";import"./deepmerge-89e33937.js";import"./nprogress-b9cffc46.js";import"./index-b6fa7a4c.js";import"./DialogDescription-d422265e.js";const O={class:"flex items-center justify-between"},T={class:"flex justify-between space-x-2"},K={class:"relative"},M={key:0,class:"grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-2"},Q={key:0},R={key:0},W={class:""},q={class:"flex space-x-1"},G={class:"flex justify-center space-x-2"},X={class:"w-full"},Y={class:"px-3 py-0.5 whitespace-nowrap text-sm"},Z={class:"px-3 py-0.5 text-center"},ee=["value","onChange"],se={class:"px-3 py-0.5 text-center"},te=["value","onChange"],re={class:"px-3 py-0.5 text-center"},oe={class:"px-3 py-0.5 text-center"},ae={components:{Head:S,Link:L},data(){return{show_filters:!1,show_assessment_modal:!1,params:{search:this.$page.props.filter.search?this.$page.props.filter.search:"",centre_id:this.$page.props.filter.centre_id?this.$page.props.filter.centre_id:"",programme_id:this.$page.props.filter.programme_id?this.$page.props.filter.programme_id:"",level:this.$page.props.filter.level?this.$page.props.filter.level:""},units:[],form:{student_id:"",programme_level_fee_id:"",assessments:[],final_pre_score:"",final_post_score:""}}},methods:{addClass(n){this.$inertia.get(this.route("assessments.create"),{centre_id:n})},editAssessment(n,e){this.form.assessments=[],N.get(route("assessments.create",n)).then(s=>{this.units=s.data,this.form.student_id=this.$page.props.assessments.data[e].student_id,this.form.programme_level_fee_id=this.$page.props.assessments.data[e].programme_level_fee_id,this.form.final_pre_score=this.$page.props.assessments.data[e].final_pre_score,this.form.final_post_score=this.$page.props.assessments.data[e].final_post_score;const _=JSON.parse(this.$page.props.assessments.data[e].assessments);this.units.map(i=>{this.form.assessments.push({unit_id:i.id,unit_name:i.name,pre:_&&_.find(d=>d.unit_id==i.id).pre?_.find(d=>d.unit_id==i.id).pre:"",post:_&&_.find(d=>d.unit_id==i.id).post?_.find(d=>d.unit_id==i.id).post:""})}),this.show_assessment_modal=!0})},submit(){this.$inertia.post(this.route("assessments.store"),this.form,{preserveState:!1})},search(){this.$inertia.get(this.route("assessments"),this.params,{replace:!0,preserveState:!0})},getAssessmentPre(n){var e;return((e=this.form.assessments[n])==null?void 0:e.pre)||""},setAssessmentPre(n,e){this.form.assessments[n]&&(this.form.assessments[n].pre=e)},getAssessmentPost(n){var e;return((e=this.form.assessments[n])==null?void 0:e.post)||""},setAssessmentPost(n,e){this.form.assessments[n]&&(this.form.assessments[n].post=e)},showFilters(){this.show_filters=!this.show_filters}}},ts=Object.assign(ae,{__name:"Index",setup(n){return(e,s)=>{const _=w("Input"),i=w("Button"),d=w("ComboBox"),P=B("debounce");return f(),h(y,null,[o(l(S),{title:"Assessments"}),o(F,null,{header:r(()=>s[10]||(s[10]=[])),default:r(()=>[a("div",O,[a("div",T,[a("div",K,[o(l(z),{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),$(o(_,{type:"text",placeholder:"Search",class:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]",modelValue:e.params.search,"onUpdate:modelValue":s[0]||(s[0]=t=>e.params.search=t)},null,8,["modelValue"]),[[P,e.search,"800ms"]])]),o(i,{class:"border border-slate-700 border-dashed bg-white text-slate-800 hover:bg-slate-50",onClick:s[1]||(s[1]=t=>e.showFilters())},{default:r(()=>[o(l(J),{class:"h-4 w-4"}),s[11]||(s[11]=a("span",{class:"ml-1 hidden sm:block"},"Filters",-1))]),_:1})])]),e.show_filters?(f(),h("div",M,[o(d,{items:e.$page.props.allowed_centres,"label-property":"label","value-property":"ID",onSelect:e.search,modelValue:e.params.centre_id,"onUpdate:modelValue":s[2]||(s[2]=t=>e.params.centre_id=t),"select-placeholder":"Centres","search-placeholder":"Search centre..."},null,8,["items","onSelect","modelValue"]),o(d,{canClear:"",items:e.$page.props.options.programmes,"label-property":"name","value-property":"id",onSelect:e.search,modelValue:e.params.programme_id,"onUpdate:modelValue":s[3]||(s[3]=t=>e.params.programme_id=t),"select-placeholder":"Programmes","search-placeholder":"Search programme..."},{label:r(({item:t})=>[p(m(t.name)+" ("+m(t.country_name)+") ",1)]),"label-content":r(({selectedItem:t,selectedItems:u,multiple:g})=>[t?(f(),h("span",Q,m(t.name)+" ("+m(t.country_name)+")",1)):v("",!0)]),_:1},8,["items","onSelect","modelValue"]),o(d,{canClear:"",items:e.$page.props.options.levels,"label-property":"level","value-property":"level",onSelect:e.search,modelValue:e.params.level,"onUpdate:modelValue":s[4]||(s[4]=t=>e.params.level=t),"select-placeholder":"Level","search-placeholder":"Search level..."},{label:r(({item:t})=>[p(" Level "+m(t.level),1)]),"label-content":r(({selectedItem:t,selectedItems:u,multiple:g})=>[t?(f(),h("span",R,"Level "+m(t.level),1)):v("",!0)]),_:1},8,["items","onSelect","modelValue"]),a("div",W,[o(i,{onClick:s[5]||(s[5]=t=>e.$inertia.get(e.route("assessments")))},{default:r(()=>s[12]||(s[12]=[p("Clear Search")])),_:1})])])):v("",!0),o(j,null,{content:r(()=>[o(l(D),null,{default:r(()=>[o(l(E),{class:"bg-gray-100"},{default:r(()=>[o(l(x),null,{default:r(()=>[o(l(b),null,{default:r(()=>s[13]||(s[13]=[p("#")])),_:1}),o(l(b),null,{default:r(()=>s[14]||(s[14]=[p("Name")])),_:1}),o(l(b),null,{default:r(()=>s[15]||(s[15]=[p("Centre")])),_:1}),o(l(b),{class:"text-center"},{default:r(()=>s[16]||(s[16]=[p("Action")])),_:1})]),_:1})]),_:1}),o(l(H),null,{default:r(()=>[e.$page.props.assessments.data.length?v("",!0):(f(),C(l(x),{key:0},{default:r(()=>[o(l(c),{class:"text-center",colspan:"10"},{default:r(()=>s[17]||(s[17]=[a("div",{class:"p-3"}," No Record Found ",-1)])),_:1})]),_:1})),(f(!0),h(y,null,k(e.$page.props.assessments.data,(t,u)=>(f(),C(l(x),null,{default:r(()=>[o(l(c),null,{default:r(()=>[p(m(e.$page.props.assessments.from+u),1)]),_:2},1024),o(l(c),null,{default:r(()=>[p(m(t.student_name)+" ",1),a("div",q,[o(l(A),null,{default:r(()=>[a("span",null,m(t.programme_name),1)]),_:2},1024),o(l(A),{variant:"outline"},{default:r(()=>[a("span",null,"Level "+m(t.programme_level),1)]),_:2},1024)])]),_:2},1024),o(l(c),null,{default:r(()=>[p(m(t.centre_name),1)]),_:2},1024),o(l(c),{class:"text-center"},{default:r(()=>[a("div",G,[o(i,{variant:"outline",onClick:g=>e.editAssessment(t.programme_level,u)},{default:r(()=>s[18]||(s[18]=[p("Edit")])),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}),o(I,{page_data:e.$page.props.assessments,params:e.params},null,8,["page_data","params"]),o(U,{open:e.show_assessment_modal,"onUpdate:open":s[9]||(s[9]=t=>e.show_assessment_modal=t)},{title:r(()=>s[19]||(s[19]=[p("Edit Assessment")])),content:r(()=>[a("table",X,[s[21]||(s[21]=a("thead",null,[a("tr",{class:"bg-slate-200"},[a("th",{class:"px-3 py-1 border w-6/12 text-sm text-left"},"Unit"),a("th",{class:"px-3 py-1 border w-3/12 text-sm text-center"},"Pre"),a("th",{class:"px-3 py-1 border w-3/12 text-sm text-center"},"Post")])],-1)),a("tbody",null,[(f(!0),h(y,null,k(e.units,(t,u)=>(f(),h("tr",{key:t.id},[a("td",Y,m(t.name),1),a("td",Z,[a("input",{class:"min-w-20 px-2 h-7 w-full border text-center text-xs rounded placeholder:text-gray-400 outline-black",type:"text",placeholder:"score",value:e.getAssessmentPre(u),onChange:g=>e.setAssessmentPre(u,g.target.value)},null,40,ee)]),a("td",se,[a("input",{class:"min-w-20 px-2 h-7 w-full border text-center text-xs rounded placeholder:text-gray-400 outline-black",type:"text",placeholder:"score",value:e.getAssessmentPost(u),onChange:g=>e.setAssessmentPost(u,g.target.value)},null,40,te)])]))),128)),a("tr",null,[s[20]||(s[20]=a("td",{class:"px-3 py-0.5 whitespace-nowrap text-sm"},"Final Assessment",-1)),a("td",re,[$(a("input",{class:"min-w-20 px-2 h-7 w-full border text-center text-xs rounded placeholder:text-gray-400 outline-black",type:"text",placeholder:"score","onUpdate:modelValue":s[6]||(s[6]=t=>e.form.final_pre_score=t)},null,512),[[V,e.form.final_pre_score]])]),a("td",oe,[$(a("input",{class:"min-w-20 px-2 h-7 w-full border text-center text-xs rounded placeholder:text-gray-400 outline-black",type:"text",placeholder:"score","onUpdate:modelValue":s[7]||(s[7]=t=>e.form.final_post_score=t)},null,512),[[V,e.form.final_post_score]])])])])])]),footer:r(()=>[o(i,{variant:"outline",onClick:s[8]||(s[8]=t=>e.show_assessment_modal=!1)},{default:r(()=>s[22]||(s[22]=[p("Cancel")])),_:1}),o(i,{onClick:e.submit},{default:r(()=>s[23]||(s[23]=[p("Save")])),_:1},8,["onClick"])]),_:1},8,["open"])]),_:1})],64)}}});export{ts as default};
