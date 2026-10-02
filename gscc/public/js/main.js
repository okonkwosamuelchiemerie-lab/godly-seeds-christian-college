const PAGES=[["index.html","Home"],["about.html","About"],["academics.html","Academics"],["admissions.html","Admissions"],["staff.html","Staff"],["news.html","News & Events"],["gallery.html","Gallery"],["contact.html","Contact"]];
const cur=location.pathname.split("/").pop()||"index.html";
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
$("#site-header").innerHTML=`<div class="container bar"><a class="brand" href="index.html"><img src="assets/logo.png" alt="GSCC logo"><span>GSCC<small>Godly Seeds Christian College</small></span></a>
<button class="burger" aria-label="Menu">&#9776;</button><nav><ul>${PAGES.map(p=>`<li><a href="${p[0]}" class="${p[0]==cur?"active":""}">${p[1]}</a></li>`).join("")}</ul></nav></div>`;
$("#site-footer").innerHTML=`<div class="container"><div class="grid"><div><h3>Godly Seeds Christian College</h3><p>Godliness, Excellence &amp; Positive Influence.</p></div>
<div><h3>Quick links</h3>${PAGES.slice(1).map(p=>`<a href="${p[0]}">${p[1]}</a>`).join("")}</div>
<div><h3>Contact</h3><p>12 School Road, Your City<br>+234 800 000 0000<br>info@gscc.edu.ng</p></div></div>
<div class="copy">&copy; ${new Date().getFullYear()} Godly Seeds Christian College. All rights reserved.</div></div>`;
$(".burger").onclick=()=>$("nav").classList.toggle("open");
addEventListener("scroll",()=>$("header").classList.toggle("scrolled",scrollY>10));
const fmt=d=>new Date(d).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});
const newsCard=n=>`<article class="card news-card reveal" data-c="${n.c}"><img class="news-image" src="${n.img}" alt="" loading="lazy"><div class="news-content"><span class="tag">${n.c}</span><h3>${n.t}</h3><p class="meta">${fmt(n.d)}</p><p>${n.x}</p></div></article>`;
const eventRow=e=>`<div class="event reveal"><img class="event-image" src="${e.img}" alt="" loading="lazy"><div class="date"><b>${e.d}</b><span>${e.m}</span></div><div><strong>${e.t}</strong><br><span class="meta">${e.p}</span></div></div>`;
function fill(id,items,fn){const el=$(id);if(el)el.innerHTML=items.map(fn).join("")}
fill("#home-news",NEWS.slice(0,3),newsCard);fill("#events",EVENTS,eventRow);fill("#news-grid",NEWS,newsCard);
fill("#staff-grid",STAFF,s=>`<div class="card person reveal"><img src="${s.img}" alt="${s.name}"><h3>${s.name}</h3><p><strong>${s.role}</strong></p><p class="meta">${s.subject}</p></div>`);
fill("#gal-grid",GAL,(g,i)=>`<img class="reveal" src="${g.img}" alt="${g.t}" data-i="${i}" data-c="${g.c}" loading="lazy">`);
/* filters (news + gallery) */
$$(".filters").forEach(f=>{const cats=["All",...new Set([...$$("[data-c]",f.nextElementSibling)].map(e=>e.dataset.c))];
f.innerHTML=cats.map((c,i)=>`<button class="${i?"":"on"}">${c}</button>`).join("");
f.onclick=e=>{if(e.target.tagName!="BUTTON")return;$$("button",f).forEach(b=>b.classList.toggle("on",b==e.target));
$$("[data-c]",f.nextElementSibling).forEach(x=>x.classList.toggle("hide",e.target.textContent!="All"&&x.dataset.c!=e.target.textContent))}});
/* lightbox */
const lb=$("#lb");let idx=0;
function show(){const g=GAL[idx];$("img",lb).src=g.img;$("p",lb).textContent=g.t+" ("+g.c+")"}
if(lb){$("#gal-grid").onclick=e=>{if(e.target.tagName=="IMG"){idx=+e.target.dataset.i;show();lb.classList.add("open")}};
const step=n=>{idx=(idx+n+GAL.length)%GAL.length;show()};
$(".x",lb).onclick=()=>lb.classList.remove("open");$(".pv",lb).onclick=()=>step(-1);$(".nx",lb).onclick=()=>step(1);
lb.onclick=e=>{if(e.target==lb)lb.classList.remove("open")};
addEventListener("keydown",e=>{if(!lb.classList.contains("open"))return;if(e.key=="Escape")lb.classList.remove("open");if(e.key=="ArrowLeft")step(-1);if(e.key=="ArrowRight")step(1)})}
/* subject tabs */
$$(".tabs button").forEach(b=>b.onclick=()=>{$$(".tabs button").forEach(x=>x.classList.toggle("on",x==b));$$(".lvl").forEach(l=>l.classList.toggle("hide",l.id!=b.dataset.t))});
/* forms -> python backend */
$$("form[data-api]").forEach(f=>f.onsubmit=async e=>{e.preventDefault();const m=$(".msg",f);m.className="msg";
try{const r=await fetch("/api/"+f.dataset.api,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(f)))});
const j=await r.json();if(!r.ok)throw new Error(j.error);m.textContent=j.message;m.classList.add("ok");f.reset()}
catch(err){m.textContent=err.message&&err.message!="Failed to fetch"?err.message:"Could not reach the server. Start it with: python app.py";m.classList.add("err")}});
/* counters */
function count(el){const t=+el.dataset.n;let n=0;const s=t/40;const id=setInterval(()=>{n+=s;if(n>=t){n=t;clearInterval(id)}el.textContent=Math.round(n)+(el.dataset.s||"")},30)}
/* scroll reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");if(e.target.dataset.n)count(e.target);io.unobserve(e.target)}}),{threshold:.15});
const watch=()=>$$(".reveal,[data-n]").forEach(e=>io.observe(e));watch();
