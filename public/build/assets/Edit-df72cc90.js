import{c as d,a as r,u as p,w as a,F as m,H as u,L as _,o as l,b as t,d as g,r as b,e as w,y as v,i as n,t as y,n as x}from"./app-5e7199e3.js";import{B as C}from"./Authenticated-54e21821.js";import{B as c}from"./Button-2142c334.js";import{s as k}from"./multiselect-cceda1f9.js";import{C as f}from"./ConfirmationModal-1e62ec24.js";import{r as B}from"./SearchIcon-ec79690f.js";import{r as O}from"./TrashIcon-016c97b9.js";import{r as T}from"./PencilIcon-607d942c.js";/* empty css            */import"./ApplicationLogo-66f57c9a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./default.css_vue_type_style_index_0_src_true_lang-280a1abf.js";import"./transition-eb56e017.js";const R={class:"md:grid md:grid-cols-2"},S={class:"md:mt-0 md:col-span-2"},j={class:"px-4 py-5 bg-indigo-50 space-y-6 sm:p-6"},D={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},L={class:"sm:row-span-3"},M={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},P=t("div",{class:"mb-5"},[t("h1",{class:"font-bold text-indigo-800"},"Role Assigments"),t("div",{class:"border-b border-dashed border-indigo-900 mt-1"})],-1),$={class:"grid grid-cols-1 sm:grid-cols-0 gap-0 sm:gap-4"},A={class:"grid grid-cols-1 sm:grid-cols-5 gap-2"},E=["for"],I=["id","checked","value"],V={class:"grid grid-rows-1 grid-cols-1 sm:grid-cols-1 grid-flow-col gap-4"},z={class:"sm:row-span-3"},N={class:"p-6 bg-white border border-gray-200 rounded-lg shadow-md"},F={class:"flex flex-row-reverse items-center justify-between"},H={class:"flex space-x-2"},U={class:"flex"},W={components:{SearchIcon:B,TrashIcon:O,PencilIcon:T,Head:u,Link:_,Multiselect:k,ConfirmationModal:f},props:{info:Object,user_id:String,roles:Object,user_roles:Object},created(){var e=this.selected_roles;Object.keys(this.user_roles).forEach(function(s){e.push(parseInt(s))})},data(){return{isOpen:!1,confirmationTitle:"",confirmationText:"",confirmationAlert:"",confirmationButton:"",confirmationMethod:"",confirmationData:{},confirmationRoute:"",selected_roles:[],state_list:[],form:{first_name:this.info?this.info.user_first_name:"",last_name:this.info?this.info.user_last_name:"",calling_code:this.info?this.info.user_calling_code:"",contact_number:this.info?this.info.user_contact:"",address:this.info?this.info.user_address:"",country:this.info?this.info.user_country:"",country_state:this.info?this.info.user_state:"",country_code:this.info?this.info.user_country_code:""}}},watch:{"form.country_code":{handler(e){e&&(this.setCallingCode(e),this.setStateList(e))},immediate:!0}},methods:{submit(){this.$inertia.post(this.route("users.manage_roles.store"),{user_id:this.user_id,selected_roles:this.selected_roles,form:this.form})},resetPassword(e){this.confirmationRoute="users.reset_user_password",this.confirmationData.user_id=e,this.isOpen=!0},setCallingCode(e){axios.get("https://restcountries.com/v3.1/alpha/"+e).then(s=>{this.form.country=s.data[0].name.official,this.form.calling_code=s.data[0].idd.root+s.data[0].idd.suffixes[0]}).catch(s=>{this.errored=!0})},setStateList(e){var s=this.state_list;s.splice(0),axios({method:"post",url:"https://countriesnow.space/api/v0.1/countries/states",headers:{"Content-Type":"application/json"},data:{iso2:e}}).then(i=>{i.data.data.states.forEach(function(o){s.push(o.name)})})},clearState(){this.form.country_state=""}}},rs=Object.assign(W,{__name:"Edit",setup(e){return(s,i)=>(l(),d(m,null,[r(p(u),{title:"Users"}),r(C,null,{header:a(()=>[]),default:a(()=>[t("div",R,[t("div",S,[t("form",{onSubmit:i[2]||(i[2]=g((...o)=>s.submit&&s.submit(...o),["prevent"]))},[t("div",j,[t("div",D,[t("div",L,[t("div",M,[P,t("div",$,[t("div",A,[(l(!0),d(m,null,b(e.roles,o=>(l(),d("label",{for:o.id,class:"rounded bg-indigo-100 hover:bg-indigo-200 drop-shadow-sm hover:drop-shadow-md px-2 py-1 w-full inline-block text-gray-800 select-none text-lg",key:o.id},[w(t("input",{id:o.id,class:"form-check-input h-5 w-5 border border-gray-300 rounded-sm bg-white hover:bg-white focus:ring-transparent text-indigo-500 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"checkbox",checked:e.user_roles[o.id],value:o.id,"onUpdate:modelValue":i[0]||(i[0]=h=>s.selected_roles=h)},null,8,I),[[v,s.selected_roles]]),n(" "+y(o.display_name),1)],8,E))),128))])])])])]),t("div",V,[t("div",z,[t("div",N,[t("div",F,[t("div",H,[r(c,{buttonType:"gray",route:s.route("users")},{default:a(()=>[n("Cancel")]),_:1},8,["route"]),r(c,{type:"submit"},{default:a(()=>[n("Save")]),_:1})]),t("div",U,[r(c,{class:x("px-4 py-2 bg-red-600 hover:bg-red-700 drop-shadow-sm"),onClick:i[1]||(i[1]=o=>s.resetPassword(e.info.user_id))},{default:a(()=>[n("Reset Password")]),_:1})])])])])])])],32)])]),r(f,{show:s.isOpen,onClose:i[3]||(i[3]=o=>s.isOpen=!1),confirmationAlert:"danger",confirmationTitle:"Warning",confirmationText:"This user's password will be reset and new password will be sent to their email, are you sure want to proceed?",confirmationButton:"Reset Password",confirmationMethod:"post",confirmationRoute:s.confirmationRoute,confirmationData:s.confirmationData},null,8,["show","confirmationRoute","confirmationData"])]),_:1})],64))}});export{rs as default};
