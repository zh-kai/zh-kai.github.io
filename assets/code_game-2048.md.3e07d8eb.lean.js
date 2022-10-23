import{f as w,g as j,h as C,o as u,c as m,b as r,t as _,F as M,i as S,e as B}from"./app.78dd9ca2.js";const D={class:"game-2048 flex flex-col items-center"},N=r("h1",null,"Game 2048",-1),O={class:"my-6"},E={class:"w-2/3 my-12 mx-auto grid grid-rows-4 grid-cols-4 gap-4"},F={class:"flex justify-center items-center w-full h-full bg-black bg-opacity-25 font-mono text-3xl font-semibold rounded-xl"},G={__name:"2048",setup(g){const l=w(0),s=j([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]),n=t=>Math.floor((t-1)/4),c=t=>(t-1)%4,p=()=>!s.some(t=>t.includes(0)),f=(t,o)=>Math.round(Math.random()*(o-t)+t),a=()=>{const t=f(1,16);s[n(t)][c(t)]===0?s[n(t)][c(t)]=f(1,2)*2:a()},h=()=>{a(),a(),document.addEventListener("keydown",t=>{switch([37,38,39,40].includes(t.keyCode)&&t.preventDefault(),t.keyCode){case 38:v();break;case 40:x();break;case 37:b();break;case 39:y();break}p()||a()})},k=()=>{l.value=0;for(let t=1;t<=16;t++)s[n(t)][c(t)]=0;a(),a()},i=(t,o)=>{const e=s[n(t)][c(t)],d=s[n(o)][c(o)];e===0&&d!==0&&(s[n(t)][c(t)]=d,s[n(o)][c(o)]=0),e===d&&(l.value+=e,s[n(t)][c(t)]=e*2,s[n(o)][c(o)]=0)},v=()=>{for(let t=1;t<=4;t++)for(let o=t;o<=t+12;o+=4)for(let e=o;e>4;e-=4)i(e-4,e)},x=()=>{for(let t=1;t<=4;t++)for(let o=t+12;o>=t;o-=4)for(let e=o;e<13;e+=4)i(e+4,e)},b=()=>{for(let t=1;t<=13;t+=4)for(let o=t;o<t+4;o++)for(let e=o;e>t;e--)i(e-1,e)},y=()=>{for(let t=1;t<=13;t+=4)for(let o=t+3;o>=t;o--)for(let e=o;e<t+3;e++)i(e+1,e)};return C(h),(t,o)=>(u(),m("div",D,[N,r("div",O,"Score: "+_(l.value),1),r("button",{onClick:k,class:"py-2 px-5 outline-none bg-black text-white font-mono font-semibold rounded-lg"}," Restart "),r("div",E,[(u(),m(M,null,S(16,e=>r("div",{key:e,class:"aspect-square"},[r("div",F,_(s[n(e)][c(e)]||""),1)])),64))])]))}},V=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"code/game-2048.md","lastUpdated":1666536595000}'),L={name:"code/game-2048.md"},q=Object.assign(L,{setup(g){return(l,s)=>(u(),m("div",null,[B(G)]))}});export{V as __pageData,q as default};
