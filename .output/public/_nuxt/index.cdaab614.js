import{j as x,k as w,a as k,r as d,o as c,c as b,w as p,b as l,F as y,h as $,f as t,e as _,t as a,i as A,p as E,l as O,m as L,q as R}from"./entry.8c0d969d.js";const j={props:{campuses:Object},data(){return{display:x(w())}},computed:{autoAspectRatio(){return this.display.smAndDown?40/10:1},autoHeight(){return this.display.smAndDown?500:400}}},V={class:"card md:card-side bg-base-100 shadow-xl"},I={class:"card-body thai-p"},J={name:"program",class:""},M={class:"card-title"},C={class:"text-caption"},U={class:"flex flex-col justify-end h-full"},D={name:"faculty",class:""},G={class:"text-base font-semibold"},P={class:"text-caption"},S={name:"campus",class:""},B={class:"font-semibold"},z={class:"text-caption"},H={name:"group",class:""},T={class:"font-semibold"},F=t("span",{class:"text-caption"},"Group",-1),Q={class:"card-actions justify-end"},W={class:"flex flex-col gap-1 items-center"},Z=t("p",{class:"text-sm"},"รับสมัคร",-1);function q(e,i,s,r,n,h){const m=d("v-img"),f=d("v-btn"),g=d("v-carousel-item"),v=d("v-carousel");return c(),b(v,{cycle:!0,height:h.autoHeight,"hide-delimiters":"","show-arrows":"hover","hide-delimiter-background":""},{default:p(()=>[(c(!0),l(y,null,$(s.campuses,(o,u)=>(c(),b(g,null,{default:p(()=>[t("div",V,[t("figure",null,[_(m,{sizes:"64",width:"360","aspect-ratio":h.autoAspectRatio,src:"https://play-lh.googleusercontent.com/4_RoR8akdk3RZ5yDdQWfJcZh4VmevGRRopcJfDBV2lRz4TQwU825MvhCVJ0i84Hjgw"},null,8,["aspect-ratio"])]),t("div",I,[t("div",J,[t("h2",M,a(o.program_name_th),1),t("span",C,a(o.program_name_en),1)]),t("div",U,[t("div",D,[t("h2",G,a(o.faculty_name_th),1),t("span",P,a(o.faculty_name_en),1)]),t("div",S,[t("p",B,a(o.campus_name_th),1),t("span",z,a(o.campus_name_en),1)]),t("div",H,[t("p",T,a(o.group_field_th),1),F]),t("div",Q,[t("div",W,[_(f,{color:"green-darken-3","append-icon":"mdi-account-plus"},{default:p(()=>[A(a(o.number_acceptance_mko2),1)]),_:2},1024),Z])])])])])]),_:2},1024))),256))]),_:1},8,["height"])}const Y=k(j,[["render",q]]),K={data(){return{cards:{first:{title:"ยินดีต้อนรัอนรับสู่มหาวิทยาลัยแม่โจ้",subtitle:`หลักสูตรของมหาวิทยาลัยแม่โจ้ออกแบบมาเพื่อพัฒนาและยกระดับทักษะของนักศึกษาให้มีความคิดสร้างสรรค์และพัฒนาความสามารถ หลักสูตรนี้เหมาะสำหรับนักศึกษาที่มีความสนใจ
          ในการพัฒนาตนเองและมีความต้องการที่จะมีความสามารถสูงและมีประสิทธิภาพในการทำงานในขณะ
          เดียวกันก็มีส่วนช่วยในการพัฒนาอุตสาหกรรม`}},loadingProps:!0,display:x(w()),campusAPI:"/campusApi",campus:{0:{onLoaded:!0,facultyName:"",body:{}},1:{onLoaded:!0,facultyName:"",body:{}},2:{onLoaded:!0,facultyName:"",body:{}}}}},mounted(){for(let e=0;e<3;e++)this.fetchApi(`faculty_id=${Math.floor(Math.random()*10)+3}`).then(s=>{let r=e;s&&(this.campus[r].body=s,this.campus[r].facultyName={...s[0][0]}.faculty_name_th,console.log(this.campus)),this.campus[r].onLoaded=!1}).catch(s=>console.log(s));this.loadingProps=!1},methods:{async fetchApi(e){const i=await $fetch(`${this.campusAPI}?${e}`,{mode:"no-cors",method:"get"});if(i)try{return[{...i}]}catch(s){console.log(s)}else console.log("Value not found");console.log(i)}}};const N=e=>(E("data-v-da059b21"),e=e(),O(),e),X=N(()=>t("div",{class:"bg-emerald-600 h-[40vh] absolute w-full -z-10"},null,-1)),tt={key:0,class:"w-full"},et={class:"grid h-[25vh]"},st={key:1},ot={class:"flex flex-col gap-16"},at=N(()=>t("div",{class:"hero-text text-4xl flex justify-center items-center gap-6 text-white"},[t("img",{width:"64",src:"https://upload.wikimedia.org/wikipedia/th/thumb/b/b7/MJU_LOGO.svg/1200px-MJU_LOGO.svg.png"}),t("div",{class:""},[t("p",{class:"underline underline-offset-4"},"MAEJO UNIVERSITY"),t("p",null,"COURSE PLAN NEW")])],-1)),ct={class:"w-full grid grid-cols-1 z-10"},nt={key:0,class:""},it={class:"flex justify-center my-2"},lt={class:"btn glass text-black text-2xl y-10 thai-p"};function dt(e,i,s,r,n,h){const m=d("v-img"),f=L,g=Y,v=d("v-container");return c(),l(y,null,[X,_(v,null,{default:p(()=>[n.loadingProps?(c(),l("div",tt,[t("div",et,[_(m,{class:"place-self-center animate-ping",width:"82",src:"https://upload.wikimedia.org/wikipedia/th/thumb/b/b7/MJU_LOGO.svg/1200px-MJU_LOGO.svg.png"})])])):(c(),l("div",st,[t("div",ot,[at,t("div",ct,[_(f,{"img-src":"https://stu2.mju.ac.th/picture/information/374e7d3c9ff146f6a91c398b91229eb7.jpg",height:"10rem",title:n.cards.first.title,"sub-title":n.cards.first.subtitle},null,8,["title","sub-title"])]),(c(),l(y,null,$(3,(o,u)=>t("section",null,[n.campus[u].body[0][0]!=null?(c(),l("div",nt,[t("div",it,[t("button",lt,a(n.campus[u].facultyName),1)]),_(g,{campuses:n.campus[u].body[0]},null,8,["campuses"])])):R("",!0)])),64))])]))]),_:1})],64)}const rt=k(K,[["render",dt],["__scopeId","data-v-da059b21"]]);export{rt as default};
