var Ye=Object.defineProperty;var Ze=(t,e,n)=>e in t?Ye(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var K=(t,e,n)=>(Ze(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function A(){}const ce=t=>t;function We(t){return t()}function Ce(){return Object.create(null)}function Y(t){t.forEach(We)}function $e(t){return typeof t=="function"}function R(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let oe;function je(t,e){return t===e?!0:(oe||(oe=document.createElement("a")),oe.href=e,t===oe.href)}function Xe(t){return Object.keys(t).length===0}function _e(t){return t??""}function Se(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const Ke=typeof window<"u";let et=Ke?()=>window.performance.now():()=>Date.now(),we=Ke?t=>requestAnimationFrame(t):A;const te=new Set;function ze(t){te.forEach(e=>{e.c(t)||(te.delete(e),e.f())}),te.size!==0&&we(ze)}function tt(t){let e;return te.size===0&&we(ze),{promise:new Promise(n=>{te.add(e={c:t,f:n})}),abort(){te.delete(e)}}}function f(t,e){t.appendChild(e)}function Ge(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function nt(t){const e=v("style");return e.textContent="/* empty */",st(Ge(t),e),e.sheet}function st(t,e){return f(t.head||t,e),e.sheet}function M(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode&&t.parentNode.removeChild(t)}function ue(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function lt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function j(){return T(" ")}function it(){return T("")}function B(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function rt(t){return Array.from(t.childNodes)}function J(t,e){e=""+e,t.data!==e&&(t.data=e)}function ye(t,e){t.value=e??""}function ee(t,e,n){t.classList.toggle(e,!!n)}function ot(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}class at{constructor(e=!1){K(this,"is_svg",!1);K(this,"e");K(this,"n");K(this,"t");K(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,s=null){this.e||(this.is_svg?this.e=lt(n.nodeName):this.e=v(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)M(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(O)}}const fe=new Map;let de=0;function ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ut(t,e){const n={stylesheet:nt(e),rules:{}};return fe.set(t,n),n}function Le(t,e,n,s,l,r,i,c=0){const o=16.666/s;let a=`{
`;for(let p=0;p<=1;p+=o){const $=e+(n-e)*r(p);a+=p*100+`%{${i($,1-$)}}
`}const h=a+`100% {${i(n,1-n)}}
}`,g=`__svelte_${ct(h)}_${c}`,y=Ge(t),{stylesheet:_,rules:u}=fe.get(y)||ut(y,t);u[g]||(u[g]=!0,_.insertRule(`@keyframes ${g} ${h}`,_.cssRules.length));const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${g} ${s}ms linear ${l}ms 1 both`,de+=1,g}function ft(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),l=n.length-s.length;l&&(t.style.animation=s.join(", "),de-=l,de||dt())}function dt(){we(()=>{de||(fe.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&O(e)}),fe.clear())})}let ke;function le(t){ke=t}const X=[],xe=[];let ne=[];const Oe=[],ht=Promise.resolve();let be=!1;function mt(){be||(be=!0,ht.then(Qe))}function G(t){ne.push(t)}const ve=new Set;let Z=0;function Qe(){if(Z!==0)return;const t=ke;do{try{for(;Z<X.length;){const e=X[Z];Z++,le(e),pt(e.$$)}}catch(e){throw X.length=0,Z=0,e}for(le(null),X.length=0,Z=0;xe.length;)xe.pop()();for(let e=0;e<ne.length;e+=1){const n=ne[e];ve.has(n)||(ve.add(n),n())}ne.length=0}while(X.length);for(;Oe.length;)Oe.pop()();be=!1,ve.clear(),le(t)}function pt(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}function vt(t){const e=[],n=[];ne.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),ne=e}let se;function gt(){return se||(se=Promise.resolve(),se.then(()=>{se=null})),se}function ge(t,e,n){t.dispatchEvent(ot(`${e?"intro":"outro"}${n}`))}const ae=new Set;let U;function ie(){U={r:0,c:[],p:U}}function re(){U.r||Y(U.c),U=U.p}function E(t,e){t&&t.i&&(ae.delete(t),t.i(e))}function I(t,e,n,s){if(t&&t.o){if(ae.has(t))return;ae.add(t),U.c.push(()=>{ae.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const _t={duration:0};function Q(t,e,n,s){let r=e(t,n,{direction:"both"}),i=s?0:1,c=null,o=null,a=null,h;function g(){a&&ft(t,a)}function y(u,d){const p=u.b-i;return d*=Math.abs(p),{a:i,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function _(u){const{delay:d=0,duration:p=300,easing:$=ce,tick:L=A,css:b}=r||_t,C={start:et()+d,b:u};u||(C.group=U,U.r+=1),"inert"in t&&(u?h!==void 0&&(t.inert=h):(h=t.inert,t.inert=!0)),c||o?o=C:(b&&(g(),a=Le(t,i,u,p,d,$,b)),u&&L(0,1),c=y(C,p),G(()=>ge(t,u,"start")),tt(S=>{if(o&&S>o.start&&(c=y(o,p),o=null,ge(t,c.b,"start"),b&&(g(),a=Le(t,i,c.b,c.duration,0,$,r.css))),c){if(S>=c.end)L(i=c.b,1-i),ge(t,c.b,"end"),o||(c.b?g():--c.group.r||Y(c.group.c)),c=null;else if(S>=c.start){const k=S-c.start;i=c.a+c.d*$(k/c.duration),L(i,1-i)}}return!!(c||o)}))}return{run(u){$e(r)?gt().then(()=>{r=r({direction:u?"in":"out"}),_(u)}):_(u)},end(){g(),c=o=null}}}function z(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function P(t){t&&t.c()}function D(t,e,n){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),G(()=>{const r=t.$$.on_mount.map(We).filter($e);t.$$.on_destroy?t.$$.on_destroy.push(...r):Y(r),t.$$.on_mount=[]}),l.forEach(G)}function H(t,e){const n=t.$$;n.fragment!==null&&(vt(n.after_update),Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(X.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(t,e,n,s,l,r,i=null,c=[-1]){const o=ke;le(t);const a=t.$$={fragment:null,ctx:[],props:r,update:A,not_equal:l,bound:Ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Ce(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};i&&i(a.root);let h=!1;if(a.ctx=n?n(t,e.props||{},(g,y,..._)=>{const u=_.length?_[0]:y;return a.ctx&&l(a.ctx[g],a.ctx[g]=u)&&(!a.skip_bound&&a.bound[g]&&a.bound[g](u),h&&yt(t,g)),y}):[],a.update(),h=!0,Y(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){const g=rt(e.target);a.fragment&&a.fragment.l(g),g.forEach(O)}else a.fragment&&a.fragment.c();e.intro&&E(t.$$.fragment),D(t,e.target,e.anchor),Qe()}le(o)}class W{constructor(){K(this,"$$");K(this,"$$set")}$destroy(){H(this,1),this.$destroy=A}$on(e,n){if(!$e(n))return A;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(e){this.$$set&&!Xe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const bt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(bt);function Ae(t,e,n){const s=t.slice();return s[7]=e[n],s}function qe(t){let e,n=t[7].label+"",s,l,r;return{c(){e=v("a"),s=T(n),m(e,"href",t[7].href),m(e,"class",_e(t[7].class)+" svelte-14h50bp")},m(i,c){M(i,e,c),f(e,s),l||(r=B(e,"click",t[6]),l=!0)},p:A,d(i){i&&O(e),l=!1,r()}}}function $t(t){let e,n,s,l,r,i,c,o,a,h,g,y=z(t[4]),_=[];for(let u=0;u<y.length;u+=1)_[u]=qe(Ae(t,y,u));return{c(){e=v("nav"),n=v("div"),s=v("a"),l=v("img"),i=j(),c=v("div");for(let u=0;u<_.length;u+=1)_[u].c();o=j(),a=v("button"),a.innerHTML='<span class="bar svelte-14h50bp"></span> <span class="bar svelte-14h50bp"></span> <span class="bar svelte-14h50bp"></span>',je(l.src,r=t[0])||m(l,"src",r),m(l,"class","logo svelte-14h50bp"),m(l,"alt","company logo"),m(s,"href",t[1]),m(s,"class","logo-container svelte-14h50bp"),m(n,"class","nav-branding svelte-14h50bp"),m(c,"class","nav-menu svelte-14h50bp"),ee(c,"active",t[3]),m(a,"class","hamburger svelte-14h50bp"),m(a,"aria-hidden","true"),ee(a,"active",t[2]),m(e,"class","nav-bar svelte-14h50bp")},m(u,d){M(u,e,d),f(e,n),f(n,s),f(s,l),f(e,i),f(e,c);for(let p=0;p<_.length;p+=1)_[p]&&_[p].m(c,null);f(e,o),f(e,a),h||(g=B(a,"click",t[5]),h=!0)},p(u,[d]){if(d&1&&!je(l.src,r=u[0])&&m(l,"src",r),d&2&&m(s,"href",u[1]),d&80){y=z(u[4]);let p;for(p=0;p<y.length;p+=1){const $=Ae(u,y,p);_[p]?_[p].p($,d):(_[p]=qe($),_[p].c(),_[p].m(c,null))}for(;p<_.length;p+=1)_[p].d(1);_.length=y.length}d&8&&ee(c,"active",u[3]),d&4&&ee(a,"active",u[2])},i:A,o:A,d(u){u&&O(e),ue(_,u),h=!1,g()}}}function wt(t,e,n){let{logo_src:s}=e,{logo_url:l}=e;const r=[{label:"Home",href:"#",class:"nav-link"},{label:"About",href:"#",class:"nav-link"},{label:"Contact",href:"#",class:"nav-link"},{label:"Donate",href:"#",class:"nav-link donate-button"}];let i=!1,c=!1;function o(){n(2,i=!i),n(3,c=!c)}function a(){n(2,i=!1),n(3,c=!1)}return t.$$set=h=>{"logo_src"in h&&n(0,s=h.logo_src),"logo_url"in h&&n(1,l=h.logo_url)},[s,l,i,c,r,o,a]}class kt extends W{constructor(e){super(),V(this,e,wt,$t,R,{logo_src:0,logo_url:1})}}function Je(t){const e=t-1;return e*e*e+1}function he(t){return--t*t*t*t*t+1}function Ee(t,{delay:e=0,duration:n=400,easing:s=ce}={}){const l=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*l}`}}function Me(t,{delay:e=0,duration:n=400,easing:s=Je,x:l=0,y:r=0,opacity:i=0}={}){const c=getComputedStyle(t),o=+c.opacity,a=c.transform==="none"?"":c.transform,h=o*(1-i),[g,y]=Se(l),[_,u]=Se(r);return{delay:e,duration:n,easing:s,css:(d,p)=>`
			transform: ${a} translate(${(1-d)*g}${y}, ${(1-d)*_}${u});
			opacity: ${o-h*p}`}}function me(t,{delay:e=0,duration:n=400,easing:s=Je,axis:l="y"}={}){const r=getComputedStyle(t),i=+r.opacity,c=l==="y"?"height":"width",o=parseFloat(r[c]),a=l==="y"?["top","bottom"]:["left","right"],h=a.map($=>`${$[0].toUpperCase()}${$.slice(1)}`),g=parseFloat(r[`padding${h[0]}`]),y=parseFloat(r[`padding${h[1]}`]),_=parseFloat(r[`margin${h[0]}`]),u=parseFloat(r[`margin${h[1]}`]),d=parseFloat(r[`border${h[0]}Width`]),p=parseFloat(r[`border${h[1]}Width`]);return{delay:e,duration:n,easing:s,css:$=>`overflow: hidden;opacity: ${Math.min($*20,1)*i};${c}: ${$*o}px;padding-${a[0]}: ${$*g}px;padding-${a[1]}: ${$*y}px;margin-${a[0]}: ${$*_}px;margin-${a[1]}: ${$*u}px;border-${a[0]}-width: ${$*d}px;border-${a[1]}-width: ${$*p}px;`}}function Ne(t,e,n){const s=t.slice();return s[12]=e[n],s}function Ie(t,e,n){const s=t.slice();return s[15]=e[n],s[17]=n,s}function Te(t){let e,n,s,l,r,i,c=t[15].name+"",o,a,h,g,y,_=t[15].minimum.toString()+"",u,d,p,$;function L(){return t[7](t[17])}return{c(){e=v("button"),n=v("i"),l=j(),r=v("div"),i=v("span"),o=T(c),a=j(),h=v("p"),g=T("The minimum for this tier is "),y=new at(!1),u=T(_),d=j(),m(n,"class",s=_e(t[15].icon)+" svelte-ehj4jx"),m(i,"class","svelte-ehj4jx"),y.a=u,m(h,"class","svelte-ehj4jx"),m(r,"class","reward-desc svelte-ehj4jx"),m(e,"class","reward svelte-ehj4jx"),ee(e,"active",t[15].isSelected)},m(b,C){M(b,e,C),f(e,n),f(e,l),f(e,r),f(r,i),f(i,o),f(r,a),f(r,h),f(h,g),y.m(t[2],h),f(h,u),f(e,d),p||($=B(e,"click",L),p=!0)},p(b,C){t=b,C&1&&s!==(s=_e(t[15].icon)+" svelte-ehj4jx")&&m(n,"class",s),C&1&&c!==(c=t[15].name+"")&&J(o,c),C&4&&y.p(t[2]),C&1&&_!==(_=t[15].minimum.toString()+"")&&J(u,_),C&1&&ee(e,"active",t[15].isSelected)},d(b){b&&O(e),p=!1,$()}}}function Fe(t){let e,n=t[12].name+"",s;return{c(){e=v("option"),s=T(n),e.__value=t[12].name,ye(e,e.__value)},m(l,r){M(l,e,r),f(e,s)},p:A,d(l){l&&O(e)}}}function Ct(t){let e,n,s,l,r,i,c,o,a,h,g,y,_,u,d,p,$,L=z(t[0]),b=[];for(let k=0;k<L.length;k+=1)b[k]=Te(Ie(t,L,k));let C=z(t[3]),S=[];for(let k=0;k<C.length;k+=1)S[k]=Fe(Ne(t,C,k));return{c(){e=v("div"),n=v("h4"),n.textContent="Rewards",s=j(),l=v("div");for(let k=0;k<b.length;k+=1)b[k].c();r=j(),i=v("h4"),i.textContent="Donation amount",c=j(),o=v("div"),a=v("div"),h=v("label"),g=j(),y=v("select");for(let k=0;k<S.length;k+=1)S[k].c();_=j(),u=v("div"),d=v("input"),m(n,"class","svelte-ehj4jx"),m(l,"class","rewards-container svelte-ehj4jx"),m(i,"class","svelte-ehj4jx"),m(h,"for","currency-dropdown"),m(h,"class","currency-label svelte-ehj4jx"),m(y,"class","currency-dropdown svelte-ehj4jx"),m(y,"name","currency"),m(a,"class","currency-container svelte-ehj4jx"),m(d,"type","text"),m(d,"class","input-amount svelte-ehj4jx"),m(d,"placeholder","0"),m(u,"class","input-container svelte-ehj4jx"),m(o,"class","donation-container svelte-ehj4jx"),m(e,"class","panel-container")},m(k,q){M(k,e,q),f(e,n),f(e,s),f(e,l);for(let w=0;w<b.length;w+=1)b[w]&&b[w].m(l,null);f(e,r),f(e,i),f(e,c),f(e,o),f(o,a),f(a,h),h.innerHTML=t[2],f(a,g),f(a,y);for(let w=0;w<S.length;w+=1)S[w]&&S[w].m(y,null);f(o,_),f(o,u),f(u,d),ye(d,t[1]),p||($=[B(y,"change",t[5]),B(d,"input",t[8]),B(d,"input",t[6])],p=!0)},p(k,[q]){if(q&21){L=z(k[0]);let w;for(w=0;w<L.length;w+=1){const x=Ie(k,L,w);b[w]?b[w].p(x,q):(b[w]=Te(x),b[w].c(),b[w].m(l,null))}for(;w<b.length;w+=1)b[w].d(1);b.length=L.length}if(q&4&&(h.innerHTML=k[2]),q&8){C=z(k[3]);let w;for(w=0;w<C.length;w+=1){const x=Ne(k,C,w);S[w]?S[w].p(x,q):(S[w]=Fe(x),S[w].c(),S[w].m(y,null))}for(;w<S.length;w+=1)S[w].d(1);S.length=C.length}q&2&&d.value!==k[1]&&ye(d,k[1])},i:A,o:A,d(k){k&&O(e),ue(b,k),ue(S,k),p=!1,Y($)}}}function jt(t,e,n){let s=[{name:"Diamond",minimum:100,icon:"fa-solid fa-gem",isSelected:!1},{name:"Gold",minimum:50,icon:"fa-solid fa-sack-dollar",isSelected:!1},{name:"Iron",minimum:5,icon:"fa-solid fa-coins",isSelected:!1}],l=[{name:"USD",icon:"&#36;"},{name:"EUR",icon:"&#8364;"},{name:"CAD",icon:"&#36;"},{name:"GBP",icon:"&#163;"},{name:"AUD",icon:"&#36;"}],r;function i(u){n(0,s[u].isSelected=!0,s),n(1,r=s[u].minimum),s[u].minimum;for(let d=0;d<s.length;d++)d!==u&&n(0,s[d].isSelected=!1,s)}let c=l[0].name,o=l[0].icon;function a(u){c=u.target.value,n(2,o=h())}function h(){if(c){const u=l.find(d=>d.name===c);return u?u.icon:l[0].icon}else return l[0].icon}function g(u){let d=u.target.value;d=d.replace(/[^\d.]/g,""),d.split(".").length-1>1&&(d=d.slice(0,d.lastIndexOf("."))),n(1,r=d)}const y=u=>i(u);function _(){r=this.value,n(1,r)}return[s,r,o,l,i,a,g,y,_]}class St extends W{constructor(e){super(),V(this,e,jt,Ct,R,{})}}function Lt(t){let e,n,s,l,r;return{c(){e=v("button"),e.textContent="Donate",m(e,"class","donate-button")},m(i,c){M(i,e,c),s=!0,l||(r=B(e,"click",t[5]),l=!0)},p:A,i(i){s||(i&&G(()=>{s&&(n||(n=Q(e,Ee,{delay:0,duration:20},!0)),n.run(1))}),s=!0)},o(i){i&&(n||(n=Q(e,Ee,{delay:0,duration:20},!1)),n.run(0)),s=!1},d(i){i&&O(e),i&&n&&n.end(),l=!1,r()}}}function xt(t){let e,n,s,l,r,i,c;return n=new St({}),{c(){e=v("div"),P(n.$$.fragment),s=j(),l=v("a"),r=T("Continue"),m(l,"class","donate-button"),m(l,"href",At),m(e,"class","donation-panel svelte-1smivvf")},m(o,a){M(o,e,a),D(n,e,null),f(e,s),f(e,l),f(l,r),c=!0},p:A,i(o){c||(E(n.$$.fragment,o),o&&G(()=>{c&&(i||(i=Q(e,me,{delay:0,duration:700,easing:he,axis:"y"},!0)),i.run(1))}),c=!0)},o(o){I(n.$$.fragment,o),o&&(i||(i=Q(e,me,{delay:0,duration:700,easing:he,axis:"y"},!1)),i.run(0)),c=!1},d(o){o&&O(e),H(n),o&&i&&i.end()}}}function Ot(t){let e,n,s,l,r,i,c,o,a,h,g,y,_,u,d,p,$,L,b,C,S;const k=[xt,Lt],q=[];function w(x,F){return x[0]?0:1}return b=w(t),C=q[b]=k[b](t),{c(){e=v("div"),n=v("div"),s=v("div"),l=v("h2"),r=T(t[1]),i=j(),c=v("span"),c.textContent=`raised of ${t[2]} goal!`,o=j(),a=v("div"),a.innerHTML='<div class="progress-bar svelte-1smivvf"></div>',h=j(),g=v("div"),y=v("h3"),y.textContent=`${t[4].toString()}% Complete`,_=j(),u=v("h3"),u.textContent=`${t[3]} donations`,d=j(),p=v("div"),$=v("div"),$.textContent="Share",L=j(),C.c(),m(c,"class","subtext svelte-1smivvf"),m(l,"class","small-title"),m(s,"class","goal-numbers svelte-1smivvf"),m(a,"class","progress-bar-container svelte-1smivvf"),m(y,"class","progress-percent svelte-1smivvf"),m(u,"class","subtext svelte-1smivvf"),m(g,"class","donation-numbers svelte-1smivvf"),m($,"class","share-button"),m(p,"class","button-container"),m(n,"class","goal-content svelte-1smivvf"),m(e,"class","goal-progress-container svelte-1smivvf")},m(x,F){M(x,e,F),f(e,n),f(n,s),f(s,l),f(l,r),f(l,i),f(l,c),f(n,o),f(n,a),f(n,h),f(n,g),f(g,y),f(g,_),f(g,u),f(n,d),f(n,p),f(p,$),f(p,L),q[b].m(p,null),S=!0},p(x,[F]){let N=b;b=w(x),b===N?q[b].p(x,F):(ie(),I(q[N],1,1,()=>{q[N]=null}),re(),C=q[b],C?C.p(x,F):(C=q[b]=k[b](x),C.c()),E(C,1),C.m(p,null))},i(x){S||(E(C),S=!0)},o(x){I(C),S=!1},d(x){x&&O(e),q[b].d()}}}let At="https://stripe.com/";const De=34e3,He=55e3,qt=1420;function Et(t,e,n){let s=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}),l=s.format(De),r=s.format(He),i=qt;const c=Math.floor(De/He*100);function o(){document.querySelectorAll(".progress-bar").forEach(function(y){y.style.width=`${c}%`})}let a=!1;function h(){n(0,a=!0)}return document.addEventListener("DOMContentLoaded",()=>{o()}),[a,l,r,i,c,h]}class Ue extends W{constructor(e){super(),V(this,e,Et,Ot,R,{})}}function Pe(t){let e,n,s,l,r=t[1].name+"",i,c,o=t[1].currency+"",a,h=t[1].spent+"",g,y,_,u,d,p,$;return{c(){e=v("div"),n=v("span"),n.innerHTML='<i class="fa-solid fa-hand-holding-heart svelte-16gly0w"></i>',s=j(),l=v("span"),i=T(r),c=T(" just donated "),a=T(o),g=T(h),y=j(),_=v("button"),_.innerHTML='<span class="fas fa-times svelte-16gly0w"></span>',m(n,"class","noti-icon svelte-16gly0w"),m(l,"class","message svelte-16gly0w"),m(_,"class","close-button svelte-16gly0w"),m(e,"class","noti-ribbon svelte-16gly0w")},m(L,b){M(L,e,b),f(e,n),f(e,s),f(e,l),f(l,i),f(l,c),f(l,a),f(l,g),f(e,y),f(e,_),d=!0,p||($=B(_,"click",t[2]),p=!0)},p(L,b){(!d||b&2)&&r!==(r=L[1].name+"")&&J(i,r),(!d||b&2)&&o!==(o=L[1].currency+"")&&J(a,o),(!d||b&2)&&h!==(h=L[1].spent+"")&&J(g,h)},i(L){d||(L&&G(()=>{d&&(u||(u=Q(e,Me,{delay:0,duration:200,x:300,y:0,opacity:.5,easing:ce},!0)),u.run(1))}),d=!0)},o(L){L&&(u||(u=Q(e,Me,{delay:0,duration:200,x:300,y:0,opacity:.5,easing:ce},!1)),u.run(0)),d=!1},d(L){L&&O(e),L&&u&&u.end(),p=!1,$()}}}function Mt(t){let e,n=t[1]&&t[0]&&Pe(t);return{c(){n&&n.c(),e=it()},m(s,l){n&&n.m(s,l),M(s,e,l)},p(s,[l]){s[1]&&s[0]?n?(n.p(s,l),l&3&&E(n,1)):(n=Pe(s),n.c(),E(n,1),n.m(e.parentNode,e)):n&&(ie(),I(n,1,1,()=>{n=null}),re())},i(s){E(n)},o(s){I(n)},d(s){s&&O(e),n&&n.d(s)}}}function Nt(t,e,n){let s,l=[{name:"Anon",currency:"$",spent:20},{name:"Beta",currency:"$",spent:15},{name:"Chad",currency:"$",spent:100}],r=0,i=!0;function c(){n(3,r=(r+1)%l.length),n(0,i=r!==0)}return t.$$.update=()=>{t.$$.dirty&8&&n(1,s=l[r])},[i,s,c,r]}class It extends W{constructor(e){super(),V(this,e,Nt,Mt,R,{})}}function Tt(t){let e;return{c(){e=v("form"),e.innerHTML='<div class="input-container svelte-149axsi"><label for="name">Name</label> <input type="text" id="name" name="name" placeholder="John Smith" required="" class="svelte-149axsi"/></div> <div class="input-container svelte-149axsi"><label for="mail">Email Address<sup>*</sup></label> <input type="email" id="mail" name="mail" placeholder="johnsmith@email.com" required="" class="svelte-149axsi"/> <span class="svelte-149axsi"><sup>*</sup>Your email address is required to prevent spam and allow follow up queries</span></div> <div class="input-container svelte-149axsi"><label for="new-faq-question">Question</label> <textarea id="new-faq-question" name="new-faq-question" placeholder="Write your question..." class="svelte-149axsi"></textarea></div> <input type="submit" class="submit-button svelte-149axsi" value="Submit"/>',m(e,"class","svelte-149axsi")},m(n,s){M(n,e,s)},p:A,i:A,o:A,d(n){n&&O(e)}}}class Ft extends W{constructor(e){super(),V(this,e,null,Tt,R,{})}}function Be(t,e,n){const s=t.slice();return s[3]=e[n],s[5]=n,s}function Dt(t){let e;return{c(){e=v("i"),m(e,"class","fa-solid fa-chevron-down svelte-1mu2nh4")},m(n,s){M(n,e,s)},d(n){n&&O(e)}}}function Ht(t){let e;return{c(){e=v("i"),m(e,"class","fa-solid fa-chevron-up svelte-1mu2nh4")},m(n,s){M(n,e,s)},d(n){n&&O(e)}}}function Re(t){let e,n,s,l,r;const i=[Pt,Ut],c=[];function o(a,h){return a[3].answer=="FORM"?0:1}return n=o(t),s=c[n]=i[n](t),{c(){e=v("div"),s.c(),m(e,"class","answer svelte-1mu2nh4")},m(a,h){M(a,e,h),c[n].m(e,null),r=!0},p(a,h){let g=n;n=o(a),n===g?c[n].p(a,h):(ie(),I(c[g],1,1,()=>{c[g]=null}),re(),s=c[n],s?s.p(a,h):(s=c[n]=i[n](a),s.c()),E(s,1),s.m(e,null))},i(a){r||(E(s),a&&G(()=>{r&&(l||(l=Q(e,me,{delay:0,duration:500,easing:he,axis:"y"},!0)),l.run(1))}),r=!0)},o(a){I(s),a&&(l||(l=Q(e,me,{delay:0,duration:500,easing:he,axis:"y"},!1)),l.run(0)),r=!1},d(a){a&&O(e),c[n].d(),a&&l&&l.end()}}}function Ut(t){let e=t[3].answer+"",n;return{c(){n=T(e)},m(s,l){M(s,n,l)},p(s,l){l&1&&e!==(e=s[3].answer+"")&&J(n,e)},i:A,o:A,d(s){s&&O(n)}}}function Pt(t){let e,n;return e=new Ft({}),{c(){P(e.$$.fragment)},m(s,l){D(e,s,l),n=!0},p:A,i(s){n||(E(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){H(e,s)}}}function Ve(t){let e,n,s=t[3].question+"",l,r,i,c,o,a,h;function g(p,$){return p[3].isOpen?Ht:Dt}let y=g(t),_=y(t);function u(){return t[2](t[5])}let d=t[3].isOpen&&Re(t);return{c(){e=v("div"),n=v("button"),l=T(s),r=j(),_.c(),i=j(),d&&d.c(),c=j(),m(n,"class","question svelte-1mu2nh4"),m(e,"class","faq-item svelte-1mu2nh4")},m(p,$){M(p,e,$),f(e,n),f(n,l),f(n,r),_.m(n,null),f(e,i),d&&d.m(e,null),f(e,c),o=!0,a||(h=B(n,"click",u),a=!0)},p(p,$){t=p,(!o||$&1)&&s!==(s=t[3].question+"")&&J(l,s),y!==(y=g(t))&&(_.d(1),_=y(t),_&&(_.c(),_.m(n,null))),t[3].isOpen?d?(d.p(t,$),$&1&&E(d,1)):(d=Re(t),d.c(),E(d,1),d.m(e,c)):d&&(ie(),I(d,1,1,()=>{d=null}),re())},i(p){o||(E(d),o=!0)},o(p){I(d),o=!1},d(p){p&&O(e),_.d(),d&&d.d(),a=!1,h()}}}function Bt(t){let e,n,s,l,r=z(t[0]),i=[];for(let o=0;o<r.length;o+=1)i[o]=Ve(Be(t,r,o));const c=o=>I(i[o],1,1,()=>{i[o]=null});return{c(){e=v("div"),n=v("h3"),n.textContent="Frequently Asked Questions:",s=j();for(let o=0;o<i.length;o+=1)i[o].c();m(n,"class","small-title"),m(e,"class","faq-container svelte-1mu2nh4")},m(o,a){M(o,e,a),f(e,n),f(e,s);for(let h=0;h<i.length;h+=1)i[h]&&i[h].m(e,null);l=!0},p(o,[a]){if(a&3){r=z(o[0]);let h;for(h=0;h<r.length;h+=1){const g=Be(o,r,h);i[h]?(i[h].p(g,a),E(i[h],1)):(i[h]=Ve(g),i[h].c(),E(i[h],1),i[h].m(e,null))}for(ie(),h=r.length;h<i.length;h+=1)c(h);re()}},i(o){if(!l){for(let a=0;a<r.length;a+=1)E(i[a]);l=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)I(i[a]);l=!1},d(o){o&&O(e),ue(i,o)}}}function Rt(t,e,n){let s=[{isOpen:!1,question:"How are ebooks delivered?",answer:"I've partnered with Sendowl for ebook delivery; after the campaign closes, you'll get a survey asking you for an email address to send your download code to. Note: If you use Apple's Private Relay service for email, you must provide an alternative email address for delivery when you fill in your survey. By design, these email addresses only work with one service. The address you provide to Kickstarter won't work with Sendowl or Libro.fm!"},{isOpen:!1,question:"How are audiobooks delivered?",answer:"I've partnered with the great Libro.fm to make it easier for people who don't want to wrangle sideloading their own media. If you choose Libro.fm for audiobook delivery, you'll get a download code by email. Just install the Libro app (for iOS or Android), enter the code, and the book will show up in your account (Libro also lets you download all the books in your library as MP3s)."},{isOpen:!1,question:"Where do signed books ship from?",answer:"Signed books get fulfilled by LA's Book Soup/Vroman's, a superb, independent bookseller. I drop by to sign books there once per week, and they ship all over the world for me. Non-US buyers may have the pay customs charges when these books arrive."},{isOpen:!1,question:"Will I get the US or UK covers on my print books?",answer:"Backers in Canada and the USA will get the US cover. from Tor Books. All other backers will get the UK cover, from Head of Zeus."},{isOpen:!1,question:"Have another question?",answer:"FORM"}];function l(i){n(0,s[i].isOpen=!s[i].isOpen,s)}return[s,l,i=>l(i)]}class Vt extends W{constructor(e){super(),V(this,e,Rt,Bt,R,{})}}const Wt=""+new URL("fundraiser-photo-cgbyRSa3.jpg",import.meta.url).href;function Kt(t){let e,n,s,l,r,i,c,o,a,h,g,y,_,u,d,p,$,L,b,C,S,k,q,w,x,F;return r=new It({}),y=new Ue({}),S=new Vt({}),x=new Ue({}),{c(){e=v("div"),n=v("h1"),n.textContent=`${zt}`,s=j(),l=v("div"),P(r.$$.fragment),i=j(),c=v("div"),o=v("div"),a=v("div"),a.innerHTML=`<img src="${Wt}" alt="fundraiser" class="svelte-1iyd310"/>`,h=j(),g=v("div"),P(y.$$.fragment),_=j(),u=v("div"),d=v("h3"),d.textContent="Purpose:",p=j(),$=v("p"),L=j(),b=v("div"),b.innerHTML='<input class="expand-button svelte-1iyd310" type="checkbox"/>',C=j(),P(S.$$.fragment),k=j(),q=v("div"),w=v("div"),P(x.$$.fragment),m(n,"class","title svelte-1iyd310"),m(l,"class","noti-container svelte-1iyd310"),m(e,"class","title-container svelte-1iyd310"),m(a,"class","img-container svelte-1iyd310"),m(g,"id","goal-container-mobile"),m(g,"class","svelte-1iyd310"),m(d,"class","small-title"),m($,"class","description-text svelte-1iyd310"),m(b,"class","expand-container svelte-1iyd310"),m(u,"id","description"),m(u,"class","svelte-1iyd310"),m(o,"id","left-content"),m(o,"class","svelte-1iyd310"),m(w,"id","goal-container"),m(w,"class","svelte-1iyd310"),m(q,"id","right-content"),m(q,"class","svelte-1iyd310"),m(c,"class","main-body-container svelte-1iyd310")},m(N,pe){M(N,e,pe),f(e,n),f(e,s),f(e,l),D(r,l,null),M(N,i,pe),M(N,c,pe),f(c,o),f(o,a),f(o,h),f(o,g),D(y,g,null),f(o,_),f(o,u),f(u,d),f(u,p),f(u,$),$.innerHTML=t[0],f(u,L),f(u,b),f(o,C),D(S,o,null),f(c,k),f(c,q),f(q,w),D(x,w,null),F=!0},p:A,i(N){F||(E(r.$$.fragment,N),E(y.$$.fragment,N),E(S.$$.fragment,N),E(x.$$.fragment,N),F=!0)},o(N){I(r.$$.fragment,N),I(y.$$.fragment,N),I(S.$$.fragment,N),I(x.$$.fragment,N),F=!1},d(N){N&&(O(e),O(i),O(c)),H(r),H(y),H(S),H(x)}}}let zt="Community Service Campaign";function Gt(t){return[`
For the past 20 years I have been a licensed
barber/cosmetologist in my hometown of
Cincinnati, Ohio. As of 2019 I took a step
toward entrepreneurship in the personal care
industry and became owner of Noble Barber &
Beauty. During my role of both owner and
barber, I have been given the opportunity to
build strong relationships with those who enter
the barbershop. As my shop provides a
supportive environment; clients feel
comfortable in sharing stories of struggle and
triumph, good days and bad. On any given day,
barbershop talk might range from a recap of
the latest sports game to updates on births of
children and grandchildren. Clients may tell of
challenges experienced at work, while youth
are always excited to tell me about school and
the activities they are involved in. I am grateful
for these relationships and the space I have
available to listen, encourage and support as
best I can. 
<br/>
<br/>
One relationship that has really been humbling
for me, is a young man whose mother drives
over an hour to receive a haircut for her son.
Due to the additional time required and
accommodations needed, this mother could
not find a barber in her hometown who was
willing to provide a haircut for her son who has
special needs.`]}class Qt extends W{constructor(e){super(),V(this,e,Gt,Kt,R,{})}}function Jt(t){let e;return{c(){e=v("footer"),e.innerHTML="<div><p>Copyright © 2023 Medito Foundation. All rights reserved.</p></div>",m(e,"class","svelte-ku4wcj")},m(n,s){M(n,e,s)},p:A,i:A,o:A,d(n){n&&O(e)}}}class Yt extends W{constructor(e){super(),V(this,e,null,Jt,R,{})}}const Zt=""+new URL("../medito-logo.svg",import.meta.url).href;function Xt(t){let e,n,s,l,r,i,c;return n=new kt({props:{logo_src:Zt,logo_url:en}}),l=new Qt({}),i=new Yt({}),{c(){e=v("main"),P(n.$$.fragment),s=j(),P(l.$$.fragment),r=j(),P(i.$$.fragment)},m(o,a){M(o,e,a),D(n,e,null),f(e,s),D(l,e,null),f(e,r),D(i,e,null),c=!0},p:A,i(o){c||(E(n.$$.fragment,o),E(l.$$.fragment,o),E(i.$$.fragment,o),c=!0)},o(o){I(n.$$.fragment,o),I(l.$$.fragment,o),I(i.$$.fragment,o),c=!1},d(o){o&&O(e),H(n),H(l),H(i)}}}const en="https://www.meditofoundation.org";class tn extends W{constructor(e){super(),V(this,e,null,Xt,R,{})}}new tn({target:document.getElementById("app")});