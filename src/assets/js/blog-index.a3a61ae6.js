import{B as O}from"./BigTitle.852a632a.js";import{d as H,x as E,y as R,h as y,v as k,o,e as c,b as r,t as I,l as S,F as P,r as T,cf as j,g as A,cc as J,H as K,A as Q,i as U,cd as W,c as C,a as g,m as M,p as b,U as q,u as X,cg as Y,ch as ee,C as te}from"./index.e24f4ad1.js";import{B as oe}from"./BasicInput.588b6201.js";import{_ as ae}from"./ClientsComment.75c68213.js";import{u as ne,_ as le}from"./blog.965b4fb4.js";import{u as se}from"./useOnLanguageChange.029edf3e.js";import{u as re}from"./global.170671ce.js";import"./swiper.min.4bcce7ec.js";import"./navigation.a0dd03d0.js";import"./pagination.e7adf9b1.js";const ie={viewBox:"0 0 8 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ue=r("path",{d:"M2.24 1c0 .556-.445 1-1 1-.556 0-1-.444-1-1s.444-1 1-1c.555 0 1 .444 1 1zm5.333 0c0 .556-.444 1-1 1-.555 0-1-.444-1-1s.445-1 1-1c.556 0 1 .444 1 1z",fill:"#BBB"},null,-1);function ce(e,n){return o(),c("svg",ie,[ue])}var D=H({name:"VPage",components:{IconPaginationDots:ce},props:{page:{type:Number,default:null},current:{type:Number,default:0},activeColor:{type:String,default:"#DCEDFF"}},emits:["update"],setup(e,{emit:n}){const h=y(()=>e.page===e.current);function i(){n("update",e.page)}return{isActive:h,clickHandler:i}}});const de=j();E("data-v-060ca318");const pe={key:0,class:"DotsHolder"};R();const ge=de((e,n,h,i,t,l)=>{const d=k("icon-pagination-dots");return o(),c("li",null,[e.page===null?(o(),c("span",pe,[r(d,{class:"Dots"})])):(o(),c("button",{key:1,class:["Page",{"Page-active":e.isActive}],type:"button","aria-label":`Go to page ${e.page}`,style:`background-color: ${e.isActive?e.activeColor:"transparent"};`,onClick:n[1]||(n[1]=(...s)=>e.clickHandler&&e.clickHandler(...s))},I(e.page),15,["aria-label"]))])});D.render=ge;D.__scopeId="data-v-060ca318";D.__file="src/components/atoms/VPage.vue";const ve={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},he=r("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41M6 6h2v12H6V6z"},null,-1);function fe(e,n){return o(),c("svg",ve,[he])}const me={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},_e=r("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41M16 6h2v12h-2V6z"},null,-1);function Ce(e,n){return o(),c("svg",me,[_e])}const xe={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},we=r("path",{d:"M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z"},null,-1);function be(e,n){return o(),c("svg",xe,[we])}const ye={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},$e=r("path",{d:"M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"},null,-1);function ke(e,n){return o(),c("svg",ye,[$e])}var N=H({name:"VPagination",components:{IconPageFirst:fe,IconChevronLeft:be,IconChevronRight:ke,IconPageLast:Ce,VPage:D},props:{pages:{type:Number,default:0},rangeSize:{type:Number,default:1},modelValue:{type:Number,default:0},activeColor:{type:String,default:"#DCEDFF"},hideFirstButton:{type:Boolean,default:!1},hideLastButton:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:n}){const h=y(()=>{const u=[],f=5+e.rangeSize*2;let m=e.pages<=f?1:e.modelValue-e.rangeSize,x=e.pages<=f?e.pages:e.modelValue+e.rangeSize;if(x=x>e.pages?e.pages:x,m=m<1?1:m,e.pages>f){const _=m-1<3,z=e.pages-x<3;if(_){x=f-2;for(let p=1;p<m;p++)u.push(p)}else u.push(1),u.push(null);if(z){m=e.pages-(f-3);for(let p=m;p<=e.pages;p++)u.push(p)}else{for(let p=m;p<=x;p++)u.push(p);u.push(null),u.push(e.pages)}}else for(let _=m;_<=x;_++)u.push(_);return u});function i(u){n("update:modelValue",u)}const t=y(()=>e.modelValue>1),l=y(()=>e.modelValue<e.pages);function d(){t.value&&n("update:modelValue",1)}function s(){t.value&&n("update:modelValue",e.modelValue-1)}function B(){l.value&&n("update:modelValue",e.pages)}function $(){l.value&&n("update:modelValue",e.modelValue+1)}return{pagination:h,updatePageHandler:i,isPrevControlsActive:t,isNextControlsActive:l,goToFirst:d,goToLast:B,goToPrev:s,goToNext:$}}});const Be=j();E("data-v-2a30deb0");const Ve={class:"Pagination"},Ae={key:0,class:"PaginationControl"},Pe={class:"PaginationControl"},Le={class:"PaginationControl"},Ie={key:1,class:"PaginationControl"};R();const Te=Be((e,n,h,i,t,l)=>{const d=k("icon-page-first"),s=k("icon-chevron-left"),B=k("v-page"),$=k("icon-chevron-right"),u=k("icon-page-last");return o(),c("ul",Ve,[e.hideFirstButton?S("v-if",!0):(o(),c("li",Ae,[r(d,{class:["Control",{"Control-active":e.isPrevControlsActive}],onClick:e.goToFirst},null,8,["class","onClick"])])),r("li",Pe,[r(s,{class:["Control",{"Control-active":e.isPrevControlsActive}],onClick:e.goToPrev},null,8,["class","onClick"])]),(o(!0),c(P,null,T(e.pagination,f=>(o(),c(B,{key:`pagination-page-${f}`,page:f,current:e.modelValue,"active-color":e.activeColor,onUpdate:e.updatePageHandler},null,8,["page","current","active-color","onUpdate"]))),128)),r("li",Le,[r($,{class:["Control",{"Control-active":e.isNextControlsActive}],onClick:e.goToNext},null,8,["class","onClick"])]),e.hideLastButton?S("v-if",!0):(o(),c("li",Ie,[r(u,{class:["Control",{"Control-active":e.isNextControlsActive}],onClick:e.goToLast},null,8,["class","onClick"])]))])});N.render=Te;N.__scopeId="data-v-2a30deb0";N.__file="src/components/VPagination.vue";const L={},Se=(e="key")=>{L[e]&&(clearTimeout(L[e]),L[e]=void 0)},De=(e="key",n=()=>{},h=500)=>((t,l,d)=>{Se(t),L[t]=setTimeout(()=>{try{l()}catch(s){console.log(s)}L[t]=void 0},d)})(e,n,h);const Ne=g("h2",{class:"invisible"}," The latest news and events from the life of a large family UIC Group\u{1F90D} ",-1),ze={class:"container"},Fe={class:"hidden md:flex items-start gap-[32px] card-tabs relative","data-aos":"fade-right","data-aos-duration":"1500"},Me=["onClick"],He=g("span",{class:"category-gradient absolute right-[-50px] top-0 w-[100px] h-[50px] pointer-events-none"},null,-1),Ue=["onClick"],qe={key:0,class:"grid mt-24 mb-12 md:grid-cols-2 md:gap-x-11 gap-y-24 md:gap-y-10 sm:mt-12"},Ee={key:1,class:"my-[48px] font-bold text-[35px] leading-[40px] text-white text-center"},Re={key:2,class:"flex items-center justify-end pagination-wrapp"},je=g("svg",{width:"7",height:"10",viewBox:"0 0 7 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{class:"group-hover:fill-[#00A795] transition duration-300","fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.70826 9.69329L6.70826 0.306624C6.70826 0.145541 6.60566 0.0149575 6.47909 0.0149575C6.43248 0.0149575 6.38697 0.0330486 6.34865 0.0668178L1.02208 4.76015C0.918023 4.85184 0.892067 5.03354 0.964109 5.16598C0.979792 5.19481 0.999431 5.2198 1.02208 5.23976L6.34865 9.9331C6.45271 10.0248 6.59547 9.99175 6.66751 9.85931C6.69404 9.81054 6.70826 9.75262 6.70826 9.69329Z",fill:"#515151"})],-1),Ge=[je],Ze=g("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{class:"group-hover:fill-[#00A795] transition duration-300","fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.5 0.821664L0.5 10.2083C0.5 10.3694 0.602601 10.5 0.729167 10.5C0.77578 10.5 0.821285 10.4819 0.859611 10.4481L6.18617 5.75481C6.29023 5.66312 6.31619 5.48142 6.24415 5.34898C6.22846 5.32015 6.20883 5.29515 6.18617 5.27519L0.859611 0.581858C0.75555 0.490168 0.61279 0.523203 0.540748 0.655645C0.514215 0.704422 0.5 0.762338 0.5 0.821664Z",fill:"#515151"})],-1),Oe=[Ze],Je={class:"mt-16 blog-index-clients-comment"},lt=H({__name:"blog-index",setup(e){const n=re(),h=A(!0),i=A(""),t=A(1),l=A(void 0),d=A(!1),s=ne(),{t:B}=J(),$=y(()=>s.blog),u=y(()=>s.blog?.total_pages),f=y(()=>s.categoryData),m=Y(),x=K(),_=ee();Q(i,()=>{De("search",()=>{t.value=1,s.fetchBlog(l.value,i.value,t.value)})}),U(()=>{_.query.page||(_.query.page="1"),t.value=Number(_.query.page),s.fetchBlog(l.value,i.value,t.value?t.value:1).finally(()=>{setTimeout(()=>h.value=!1,300)}),s.fetchCategory().then(()=>{n.openLoad(h)})}),se(()=>{s.fetchBlog(l.value,i.value,t.value),s.fetchCategory()});const z=()=>{l.value=void 0,s.fetchBlog(l.value,i.value,t.value)},p=w=>{l.value=w,t.value=1,s.fetchBlog(l.value,i.value,1)},F=w=>{_.query.page>1?t.value=_.query.page:t.value=w,window.scrollTo({top:300,behavior:"smooth"}),s.fetchBlog(l.value,i.value,t.value),m.push(`/blog?page=${w}`)};U(()=>{x.setMetaInfo({title:"UIC Blog",tagName:"title"})});const G=y(()=>B("header.blog"));return W(G),(w,v)=>(o(),C(P,null,[h.value?(o(),c(te,{key:0})):S("",!0),g("div",null,[r(O,M({"data-aos-duration":500,class:"pt-[120px] mb-16","data-aos":"fade-left"},{title:w.$t("header.blog")}),null,16),Ne,g("div",ze,[g("div",Fe,[g("span",{class:b([l.value===void 0?"_active-all":"","flex border-solid border-[1px] border-[#4A4B4D] p-[11px] rounded-[12px] cursor-pointer group hover:border-[#00A795] duration-300"]),onClick:z},[r(q,{class:"text-[#979798] group-hover:text-[#00A795] duration-300",name:"blog_burger"})],2),d.value?(o(),C("div",{key:0,class:b([d.value?"flex-wrap":"overflow-hidden","tabs-wrapper flex gap-[24px] items-center transition duration-300"])},[(o(!0),C(P,null,T(f.value?.results?.categories,(a,V)=>(o(),C("span",{key:V,class:b([a.id===l.value?"border-[#00A795] text-white":"text-[#979798] border-[#4A4B4D]","border-[1px] whitespace-nowrap cursor-pointer py-[11px] px-[32px] rounded-[12px] font-bold text-[16px] duration-300 hover:text-[#00A795] hover:border-[#00A795]"]),onClick:Z=>p(a.id)},I(a.category),11,Me))),128))],2)):(o(),C("div",{key:1,class:b([d.value?"flex-wrap":"overflow-hidden","relative tabs-wrapper flex gap-[24px] items-center transition duration-300"])},[He,(o(!0),C(P,null,T(f.value?.results?.categories.slice(0,6),(a,V)=>(o(),C("span",{key:V,class:b([a.id===l.value?"border-[#00A795] text-white":"text-[#979798] border-[#4A4B4D]","border-[1px] whitespace-nowrap cursor-pointer py-[11px] px-[32px] rounded-[12px] font-bold text-[16px] duration-300 hover:text-[#00A795] hover:border-[#00A795]"]),onClick:Z=>p(a.id)},I(a.category),11,Ue))),128))],2)),r(q,{class:b([d.value?"rotate-180":"","text-[#00A795] z-10 cursor-pointer hover:text-[#00A79590] duration-300 ml-auto relative top-[10px] right-0"]),name:"tab_more",onClick:v[0]||(v[0]=a=>d.value=!d.value)},null,8,["class"])]),r(oe,M({modelValue:i.value,"onUpdate:modelValue":v[1]||(v[1]=a=>i.value=a),"data-aos-duration":1500,maxlength:100,class:"mt-[28px]","data-aos":"fade-right"},{maxlength:100,backgroundColor:"#14141575",type:"text",placeholder:w.$t("search"),searchIcon:!0}),null,16,["modelValue"]),$.value?.results?.blog.length?(o(),C("div",qe,[(o(!0),C(P,null,T($.value?.results?.blog,(a,V)=>(o(),c(le,M({key:V,"data-aos-duration":"1500","search-query":i.value,"data-aos":"fade-right",ref_for:!0},{title:a.title,text:a.description,img:a?.image_url,alt:a.alt,date:a.date,views:a.views,type:a.category.category,slug:`blog/${a.id}`}),null,16,["search-query"]))),128))])):(o(),C("h2",Ee,I(w.$t("result_notfound")),1)),$.value?.total>10?(o(),C("div",Re,[g("span",{class:b([{"pointer-events-none":t.value===1},"inline-block cursor-pointer group w-5 h-5 flex items-center justify-center"]),onClick:v[2]||(v[2]=a=>F(t.value-1))},Ge,2),r(X(N),{modelValue:t.value,"onUpdate:modelValue":[v[3]||(v[3]=a=>t.value=a),v[4]||(v[4]=a=>F(t.value))],pages:u.value,"range-size":1,"active-color":"red"},null,8,["modelValue","pages"]),g("span",{class:b([{"pointer-events-none":t.value===u.value},"inline-block cursor-pointer group w-5 h-5 flex items-center justify-center"]),onClick:v[5]||(v[5]=a=>F(t.value+1))},Oe,2)])):S("",!0)]),g("div",Je,[r(ae,{class:"blog-clients-review"})])])],64))}});export{lt as default};
//# sourceMappingURL=blog-index.a3a61ae6.js.map