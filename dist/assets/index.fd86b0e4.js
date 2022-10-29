(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function fc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const cm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lm=fc(cm);function tf(t){return!!t||t===""}function dc(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=xe(s)?fm(s):dc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(xe(t))return t;if(ye(t))return t}}const um=/;(?![^(]*\))/g,hm=/:(.+)/;function fm(t){const e={};return t.split(um).forEach(n=>{if(n){const s=n.split(hm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function pc(t){let e="";if(xe(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const s=pc(t[n]);s&&(e+=s+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function dm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=so(t[s],e[s]);return n}function so(t,e){if(t===e)return!0;let n=ql(t),s=ql(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=nr(t),s=nr(e),n||s)return t===e;if(n=j(t),s=j(e),n||s)return n&&s?dm(t,e):!1;if(n=ye(t),s=ye(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!so(t[o],e[o]))return!1}}return String(t)===String(e)}function nf(t,e){return t.findIndex(n=>so(n,e))}const EC=t=>xe(t)?t:t==null?"":j(t)||ye(t)&&(t.toString===of||!Y(t.toString))?JSON.stringify(t,sf,2):String(t),sf=(t,e)=>e&&e.__v_isRef?sf(t,e.value):os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:io(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!j(e)&&!af(e)?String(e):e,de={},is=[],_t=()=>{},pm=()=>!1,gm=/^on[^a-z]/,ro=t=>gm.test(t),gc=t=>t.startsWith("onUpdate:"),Ge=Object.assign,mc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mm=Object.prototype.hasOwnProperty,ne=(t,e)=>mm.call(t,e),j=Array.isArray,os=t=>Cr(t)==="[object Map]",io=t=>Cr(t)==="[object Set]",ql=t=>Cr(t)==="[object Date]",Y=t=>typeof t=="function",xe=t=>typeof t=="string",nr=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",rf=t=>ye(t)&&Y(t.then)&&Y(t.catch),of=Object.prototype.toString,Cr=t=>of.call(t),ym=t=>Cr(t).slice(8,-1),af=t=>Cr(t)==="[object Object]",yc=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pi=fc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vm=/-(\w)/g,xt=oo(t=>t.replace(vm,(e,n)=>n?n.toUpperCase():"")),wm=/\B([A-Z])/g,ks=oo(t=>t.replace(wm,"-$1").toLowerCase()),ao=oo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qo=oo(t=>t?`on${ao(t)}`:""),sr=(t,e)=>!Object.is(t,e),gi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ri=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_a=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Kl;const _m=()=>Kl||(Kl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let At;class cf{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}run(e){if(this.active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Em(t){return new cf(t)}function Im(t,e=At){e&&e.active&&e.effects.push(t)}const vc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},lf=t=>(t.w&dn)>0,uf=t=>(t.n&dn)>0,Tm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=dn},bm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];lf(r)&&!uf(r)?r.delete(t):e[n++]=r,r.w&=~dn,r.n&=~dn}e.length=n}},Ea=new WeakMap;let $s=0,dn=1;const Ia=30;let vt;const xn=Symbol(""),Ta=Symbol("");class wc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Im(this,s)}run(){if(!this.active)return this.fn();let e=vt,n=cn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=vt,vt=this,cn=!0,dn=1<<++$s,$s<=Ia?Tm(this):zl(this),this.fn()}finally{$s<=Ia&&bm(this),dn=1<<--$s,vt=this.parent,cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){vt===this?this.deferStop=!0:this.active&&(zl(this),this.onStop&&this.onStop(),this.active=!1)}}function zl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let cn=!0;const hf=[];function Rs(){hf.push(cn),cn=!1}function Ds(){const t=hf.pop();cn=t===void 0?!0:t}function at(t,e,n){if(cn&&vt){let s=Ea.get(t);s||Ea.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=vc()),ff(r)}}function ff(t,e){let n=!1;$s<=Ia?uf(t)||(t.n|=dn,n=!lf(t)):n=!t.has(vt),n&&(t.add(vt),vt.deps.push(t))}function qt(t,e,n,s,r,i){const o=Ea.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?yc(n)&&a.push(o.get("length")):(a.push(o.get(xn)),os(t)&&a.push(o.get(Ta)));break;case"delete":j(t)||(a.push(o.get(xn)),os(t)&&a.push(o.get(Ta)));break;case"set":os(t)&&a.push(o.get(xn));break}if(a.length===1)a[0]&&ba(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ba(vc(c))}}function ba(t,e){const n=j(t)?t:[...t];for(const s of n)s.computed&&Wl(s);for(const s of n)s.computed||Wl(s)}function Wl(t,e){(t!==vt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Sm=fc("__proto__,__v_isRef,__isVue"),df=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(nr)),Cm=_c(),Am=_c(!1,!0),km=_c(!0),Gl=Rm();function Rm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=oe(this);for(let i=0,o=this.length;i<o;i++)at(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(oe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Rs();const s=oe(this)[e].apply(this,n);return Ds(),s}}),t}function _c(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Km:vf:e?yf:mf).get(s))return s;const o=j(s);if(!t&&o&&ne(Gl,r))return Reflect.get(Gl,r,i);const a=Reflect.get(s,r,i);return(nr(r)?df.has(r):Sm(r))||(t||at(s,"get",r),e)?a:Ke(a)?o&&yc(r)?a:a.value:ye(a)?t?wf(a):Ar(a):a}}const Dm=pf(),Nm=pf(!0);function pf(t=!1){return function(n,s,r,i){let o=n[s];if(gs(o)&&Ke(o)&&!Ke(r))return!1;if(!t&&(!Di(r)&&!gs(r)&&(o=oe(o),r=oe(r)),!j(n)&&Ke(o)&&!Ke(r)))return o.value=r,!0;const a=j(n)&&yc(s)?Number(s)<n.length:ne(n,s),c=Reflect.set(n,s,r,i);return n===oe(i)&&(a?sr(r,o)&&qt(n,"set",s,r):qt(n,"add",s,r)),c}}function Om(t,e){const n=ne(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&qt(t,"delete",e,void 0),s}function Pm(t,e){const n=Reflect.has(t,e);return(!nr(e)||!df.has(e))&&at(t,"has",e),n}function xm(t){return at(t,"iterate",j(t)?"length":xn),Reflect.ownKeys(t)}const gf={get:Cm,set:Dm,deleteProperty:Om,has:Pm,ownKeys:xm},Mm={get:km,set(t,e){return!0},deleteProperty(t,e){return!0}},Lm=Ge({},gf,{get:Am,set:Nm}),Ec=t=>t,co=t=>Reflect.getPrototypeOf(t);function ti(t,e,n=!1,s=!1){t=t.__v_raw;const r=oe(t),i=oe(e);n||(e!==i&&at(r,"get",e),at(r,"get",i));const{has:o}=co(r),a=s?Ec:n?Sc:rr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ni(t,e=!1){const n=this.__v_raw,s=oe(n),r=oe(t);return e||(t!==r&&at(s,"has",t),at(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function si(t,e=!1){return t=t.__v_raw,!e&&at(oe(t),"iterate",xn),Reflect.get(t,"size",t)}function Ql(t){t=oe(t);const e=oe(this);return co(e).has.call(e,t)||(e.add(t),qt(e,"add",t,t)),this}function Yl(t,e){e=oe(e);const n=oe(this),{has:s,get:r}=co(n);let i=s.call(n,t);i||(t=oe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?sr(e,o)&&qt(n,"set",t,e):qt(n,"add",t,e),this}function Xl(t){const e=oe(this),{has:n,get:s}=co(e);let r=n.call(e,t);r||(t=oe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&qt(e,"delete",t,void 0),i}function Jl(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&qt(t,"clear",void 0,void 0),n}function ri(t,e){return function(s,r){const i=this,o=i.__v_raw,a=oe(o),c=e?Ec:t?Sc:rr;return!t&&at(a,"iterate",xn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function ii(t,e,n){return function(...s){const r=this.__v_raw,i=oe(r),o=os(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Ec:e?Sc:rr;return!e&&at(i,"iterate",c?Ta:xn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Jt(t){return function(...e){return t==="delete"?!1:this}}function Um(){const t={get(i){return ti(this,i)},get size(){return si(this)},has:ni,add:Ql,set:Yl,delete:Xl,clear:Jl,forEach:ri(!1,!1)},e={get(i){return ti(this,i,!1,!0)},get size(){return si(this)},has:ni,add:Ql,set:Yl,delete:Xl,clear:Jl,forEach:ri(!1,!0)},n={get(i){return ti(this,i,!0)},get size(){return si(this,!0)},has(i){return ni.call(this,i,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:ri(!0,!1)},s={get(i){return ti(this,i,!0,!0)},get size(){return si(this,!0)},has(i){return ni.call(this,i,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:ri(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ii(i,!1,!1),n[i]=ii(i,!0,!1),e[i]=ii(i,!1,!0),s[i]=ii(i,!0,!0)}),[t,n,e,s]}const[Fm,Vm,Bm,$m]=Um();function Ic(t,e){const n=e?t?$m:Bm:t?Vm:Fm;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ne(n,r)&&r in s?n:s,r,i)}const jm={get:Ic(!1,!1)},Hm={get:Ic(!1,!0)},qm={get:Ic(!0,!1)},mf=new WeakMap,yf=new WeakMap,vf=new WeakMap,Km=new WeakMap;function zm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wm(t){return t.__v_skip||!Object.isExtensible(t)?0:zm(ym(t))}function Ar(t){return gs(t)?t:Tc(t,!1,gf,jm,mf)}function Gm(t){return Tc(t,!1,Lm,Hm,yf)}function wf(t){return Tc(t,!0,Mm,qm,vf)}function Tc(t,e,n,s,r){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Wm(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function as(t){return gs(t)?as(t.__v_raw):!!(t&&t.__v_isReactive)}function gs(t){return!!(t&&t.__v_isReadonly)}function Di(t){return!!(t&&t.__v_isShallow)}function _f(t){return as(t)||gs(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function bc(t){return Ri(t,"__v_skip",!0),t}const rr=t=>ye(t)?Ar(t):t,Sc=t=>ye(t)?wf(t):t;function Ef(t){cn&&vt&&(t=oe(t),ff(t.dep||(t.dep=vc())))}function If(t,e){t=oe(t),t.dep&&ba(t.dep)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function Tf(t){return bf(t,!1)}function Qm(t){return bf(t,!0)}function bf(t,e){return Ke(t)?t:new Ym(t,e)}class Ym{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:rr(e)}get value(){return Ef(this),this._value}set value(e){const n=this.__v_isShallow||Di(e)||gs(e);e=n?e:oe(e),sr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:rr(e),If(this))}}function cs(t){return Ke(t)?t.value:t}const Xm={get:(t,e,n)=>cs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ke(r)&&!Ke(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Sf(t){return as(t)?t:new Proxy(t,Xm)}var Cf;class Jm{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Cf]=!1,this._dirty=!0,this.effect=new wc(e,()=>{this._dirty||(this._dirty=!0,If(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=oe(this);return Ef(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Cf="__v_isReadonly";function Zm(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=_t):(s=t.get,r=t.set),new Jm(s,r,i||!r,n)}function ln(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){lo(i,e,n)}return r}function ft(t,e,n,s){if(Y(t)){const i=ln(t,e,n,s);return i&&rf(i)&&i.catch(o=>{lo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(ft(t[i],e,n,s));return r}function lo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ln(c,null,10,[t,o,a]);return}}ey(t,n,r,s)}function ey(t,e,n,s=!0){console.error(t)}let ir=!1,Sa=!1;const He=[];let Dt=0;const ls=[];let Ft=null,Cn=0;const Af=Promise.resolve();let Cc=null;function kf(t){const e=Cc||Af;return t?e.then(this?t.bind(this):t):e}function ty(t){let e=Dt+1,n=He.length;for(;e<n;){const s=e+n>>>1;or(He[s])<t?e=s+1:n=s}return e}function Ac(t){(!He.length||!He.includes(t,ir&&t.allowRecurse?Dt+1:Dt))&&(t.id==null?He.push(t):He.splice(ty(t.id),0,t),Rf())}function Rf(){!ir&&!Sa&&(Sa=!0,Cc=Af.then(Nf))}function ny(t){const e=He.indexOf(t);e>Dt&&He.splice(e,1)}function sy(t){j(t)?ls.push(...t):(!Ft||!Ft.includes(t,t.allowRecurse?Cn+1:Cn))&&ls.push(t),Rf()}function Zl(t,e=ir?Dt+1:0){for(;e<He.length;e++){const n=He[e];n&&n.pre&&(He.splice(e,1),e--,n())}}function Df(t){if(ls.length){const e=[...new Set(ls)];if(ls.length=0,Ft){Ft.push(...e);return}for(Ft=e,Ft.sort((n,s)=>or(n)-or(s)),Cn=0;Cn<Ft.length;Cn++)Ft[Cn]();Ft=null,Cn=0}}const or=t=>t.id==null?1/0:t.id,ry=(t,e)=>{const n=or(t)-or(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Nf(t){Sa=!1,ir=!0,He.sort(ry);const e=_t;try{for(Dt=0;Dt<He.length;Dt++){const n=He[Dt];n&&n.active!==!1&&ln(n,null,14)}}finally{Dt=0,He.length=0,Df(),ir=!1,Cc=null,(He.length||ls.length)&&Nf()}}function iy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||de;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||de;d&&(r=n.map(g=>g.trim())),h&&(r=n.map(_a))}let a,c=s[a=Qo(e)]||s[a=Qo(xt(e))];!c&&i&&(c=s[a=Qo(ks(e))]),c&&ft(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ft(l,t,6,r)}}function Of(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=l=>{const u=Of(l,e,!0);u&&(a=!0,Ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ye(t)&&s.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):Ge(o,i),ye(t)&&s.set(t,o),o)}function uo(t,e){return!t||!ro(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,ks(e))||ne(t,e))}let ht=null,ho=null;function Ni(t){const e=ht;return ht=t,ho=t&&t.type.__scopeId||null,e}function IC(t){ho=t}function TC(){ho=null}function oy(t,e=ht,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&uu(-1);const i=Ni(e);let o;try{o=t(...r)}finally{Ni(i),s._d&&uu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Yo(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:y,inheritAttrs:E}=t;let S,C;const P=Ni(t);try{if(n.shapeFlag&4){const Q=r||s;S=Rt(u.call(Q,Q,h,i,g,d,y)),C=c}else{const Q=e;S=Rt(Q.length>1?Q(i,{attrs:c,slots:a,emit:l}):Q(i,null)),C=e.props?c:ay(c)}}catch(Q){Gs.length=0,lo(Q,t,1),S=Je(Et)}let K=S;if(C&&E!==!1){const Q=Object.keys(C),{shapeFlag:le}=K;Q.length&&le&7&&(o&&Q.some(gc)&&(C=cy(C,o)),K=pn(K,C))}return n.dirs&&(K=pn(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),S=K,Ni(P),S}const ay=t=>{let e;for(const n in t)(n==="class"||n==="style"||ro(n))&&((e||(e={}))[n]=t[n]);return e},cy=(t,e)=>{const n={};for(const s in t)(!gc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ly(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?eu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!uo(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?eu(s,o,l):!0:!!o;return!1}function eu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!uo(n,i))return!0}return!1}function uy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const hy=t=>t.__isSuspense;function fy(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):sy(t)}function mi(t,e){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[t]=e}}function jt(t,e,n=!1){const s=Pe||ht;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const tu={};function yi(t,e,n){return Pf(t,e,n)}function Pf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=de){const a=Pe;let c,l=!1,u=!1;if(Ke(t)?(c=()=>t.value,l=Di(t)):as(t)?(c=()=>t,s=!0):j(t)?(u=!0,l=t.some(C=>as(C)||Di(C)),c=()=>t.map(C=>{if(Ke(C))return C.value;if(as(C))return Dn(C);if(Y(C))return ln(C,a,2)})):Y(t)?e?c=()=>ln(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),ft(t,a,3,[d])}:c=_t,e&&s){const C=c;c=()=>Dn(C())}let h,d=C=>{h=S.onStop=()=>{ln(C,a,4)}};if(cr)return d=_t,e?n&&ft(e,a,3,[c(),u?[]:void 0,d]):c(),_t;let g=u?[]:tu;const y=()=>{if(!!S.active)if(e){const C=S.run();(s||l||(u?C.some((P,K)=>sr(P,g[K])):sr(C,g)))&&(h&&h(),ft(e,a,3,[C,g===tu?void 0:g,d]),g=C)}else S.run()};y.allowRecurse=!!e;let E;r==="sync"?E=y:r==="post"?E=()=>tt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),E=()=>Ac(y));const S=new wc(c,E);return e?n?y():g=S.run():r==="post"?tt(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&mc(a.scope.effects,S)}}function dy(t,e,n){const s=this.proxy,r=xe(t)?t.includes(".")?xf(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Pe;ms(this);const a=Pf(r,i.bind(s),n);return o?ms(o):Mn(),a}function xf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Dn(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ke(t))Dn(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)Dn(t[n],e);else if(io(t)||os(t))t.forEach(n=>{Dn(n,e)});else if(af(t))for(const n in t)Dn(t[n],e);return t}function py(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vf(()=>{t.isMounted=!0}),Bf(()=>{t.isUnmounting=!0}),t}const lt=[Function,Array],gy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:lt,onEnter:lt,onAfterEnter:lt,onEnterCancelled:lt,onBeforeLeave:lt,onLeave:lt,onAfterLeave:lt,onLeaveCancelled:lt,onBeforeAppear:lt,onAppear:lt,onAfterAppear:lt,onAppearCancelled:lt},setup(t,{slots:e}){const n=sv(),s=py();let r;return()=>{const i=e.default&&Lf(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const E of i)if(E.type!==Et){o=E;break}}const a=oe(t),{mode:c}=a;if(s.isLeaving)return Xo(o);const l=nu(o);if(!l)return Xo(o);const u=Ca(l,a,s,n);Aa(l,u);const h=n.subTree,d=h&&nu(h);let g=!1;const{getTransitionKey:y}=l.type;if(y){const E=y();r===void 0?r=E:E!==r&&(r=E,g=!0)}if(d&&d.type!==Et&&(!An(l,d)||g)){const E=Ca(d,a,s,n);if(Aa(d,E),c==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,n.update()},Xo(o);c==="in-out"&&l.type!==Et&&(E.delayLeave=(S,C,P)=>{const K=Mf(s,d);K[String(d.key)]=d,S._leaveCb=()=>{C(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},my=gy;function Mf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ca(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:E,onAppear:S,onAfterAppear:C,onAppearCancelled:P}=e,K=String(t.key),Q=Mf(n,t),le=(X,ve)=>{X&&ft(X,s,9,ve)},Ie=(X,ve)=>{const fe=ve[1];le(X,ve),j(X)?X.every($e=>$e.length<=1)&&fe():X.length<=1&&fe()},Te={mode:i,persisted:o,beforeEnter(X){let ve=a;if(!n.isMounted)if(r)ve=E||a;else return;X._leaveCb&&X._leaveCb(!0);const fe=Q[K];fe&&An(t,fe)&&fe.el._leaveCb&&fe.el._leaveCb(),le(ve,[X])},enter(X){let ve=c,fe=l,$e=u;if(!n.isMounted)if(r)ve=S||c,fe=C||l,$e=P||u;else return;let je=!1;const pt=X._enterCb=Lt=>{je||(je=!0,Lt?le($e,[X]):le(fe,[X]),Te.delayedLeave&&Te.delayedLeave(),X._enterCb=void 0)};ve?Ie(ve,[X,pt]):pt()},leave(X,ve){const fe=String(t.key);if(X._enterCb&&X._enterCb(!0),n.isUnmounting)return ve();le(h,[X]);let $e=!1;const je=X._leaveCb=pt=>{$e||($e=!0,ve(),pt?le(y,[X]):le(g,[X]),X._leaveCb=void 0,Q[fe]===t&&delete Q[fe])};Q[fe]=t,d?Ie(d,[X,je]):je()},clone(X){return Ca(X,e,n,s)}};return Te}function Xo(t){if(fo(t))return t=pn(t),t.children=null,t}function nu(t){return fo(t)?t.children?t.children[0]:void 0:t}function Aa(t,e){t.shapeFlag&6&&t.component?Aa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Lf(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===kt?(o.patchFlag&128&&r++,s=s.concat(Lf(o.children,e,a))):(e||o.type!==Et)&&s.push(a!=null?pn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Uf(t){return Y(t)?{setup:t,name:t.name}:t}const vi=t=>!!t.type.__asyncLoader,fo=t=>t.type.__isKeepAlive;function yy(t,e){Ff(t,"a",e)}function vy(t,e){Ff(t,"da",e)}function Ff(t,e,n=Pe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(po(e,s,n),n){let r=n.parent;for(;r&&r.parent;)fo(r.parent.vnode)&&wy(s,e,n,r),r=r.parent}}function wy(t,e,n,s){const r=po(e,t,s,!0);$f(()=>{mc(s[e],r)},n)}function po(t,e,n=Pe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Rs(),ms(n);const a=ft(e,n,t,o);return Mn(),Ds(),a});return s?r.unshift(i):r.push(i),i}}const Yt=t=>(e,n=Pe)=>(!cr||t==="sp")&&po(t,(...s)=>e(...s),n),_y=Yt("bm"),Vf=Yt("m"),Ey=Yt("bu"),Iy=Yt("u"),Bf=Yt("bum"),$f=Yt("um"),Ty=Yt("sp"),by=Yt("rtg"),Sy=Yt("rtc");function Cy(t,e=Pe){po("ec",t,e)}function bC(t,e){const n=ht;if(n===null)return t;const s=mo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=de]=e[i];Y(o)&&(o={mounted:o,updated:o}),o.deep&&Dn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function In(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Rs(),ft(c,n,8,[t.el,a,t,e]),Ds())}}const jf="components";function Ay(t,e){return Ry(jf,t,!0,e)||t}const ky=Symbol();function Ry(t,e,n=!0,s=!1){const r=ht||Pe;if(r){const i=r.type;if(t===jf){const a=cv(i,!1);if(a&&(a===e||a===xt(e)||a===ao(xt(e))))return i}const o=su(r[t]||i[t],e)||su(r.appContext[t],e);return!o&&s?i:o}}function su(t,e){return t&&(t[e]||t[xt(e)]||t[ao(xt(e))])}function SC(t,e,n,s){let r;const i=n&&n[s];if(j(t)||xe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ye(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const ka=t=>t?td(t)?mo(t)||t.proxy:ka(t.parent):null,Oi=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ka(t.parent),$root:t=>ka(t.root),$emit:t=>t.emit,$options:t=>kc(t),$forceUpdate:t=>t.f||(t.f=()=>Ac(t.update)),$nextTick:t=>t.n||(t.n=kf.bind(t.proxy)),$watch:t=>dy.bind(t)}),Dy={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==de&&ne(s,e))return o[e]=1,s[e];if(r!==de&&ne(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ne(l,e))return o[e]=3,i[e];if(n!==de&&ne(n,e))return o[e]=4,n[e];Ra&&(o[e]=0)}}const u=Oi[e];let h,d;if(u)return e==="$attrs"&&at(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==de&&ne(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ne(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==de&&ne(r,e)?(r[e]=n,!0):s!==de&&ne(s,e)?(s[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==de&&ne(t,o)||e!==de&&ne(e,o)||(a=i[0])&&ne(a,o)||ne(s,o)||ne(Oi,o)||ne(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ra=!0;function Ny(t){const e=kc(t),n=t.proxy,s=t.ctx;Ra=!1,e.beforeCreate&&ru(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:y,activated:E,deactivated:S,beforeDestroy:C,beforeUnmount:P,destroyed:K,unmounted:Q,render:le,renderTracked:Ie,renderTriggered:Te,errorCaptured:X,serverPrefetch:ve,expose:fe,inheritAttrs:$e,components:je,directives:pt,filters:Lt}=e;if(l&&Oy(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const ue=o[pe];Y(ue)&&(s[pe]=ue.bind(n))}if(r){const pe=r.call(n,n);ye(pe)&&(t.data=Ar(pe))}if(Ra=!0,i)for(const pe in i){const ue=i[pe],gt=Y(ue)?ue.bind(n,n):Y(ue.get)?ue.get.bind(n,n):_t,En=!Y(ue)&&Y(ue.set)?ue.set.bind(n):_t,mt=ut({get:gt,set:En});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>mt.value,set:et=>mt.value=et})}if(a)for(const pe in a)Hf(a[pe],s,n,pe);if(c){const pe=Y(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(ue=>{mi(ue,pe[ue])})}u&&ru(u,t,"c");function be(pe,ue){j(ue)?ue.forEach(gt=>pe(gt.bind(n))):ue&&pe(ue.bind(n))}if(be(_y,h),be(Vf,d),be(Ey,g),be(Iy,y),be(yy,E),be(vy,S),be(Cy,X),be(Sy,Ie),be(by,Te),be(Bf,P),be($f,Q),be(Ty,ve),j(fe))if(fe.length){const pe=t.exposed||(t.exposed={});fe.forEach(ue=>{Object.defineProperty(pe,ue,{get:()=>n[ue],set:gt=>n[ue]=gt})})}else t.exposed||(t.exposed={});le&&t.render===_t&&(t.render=le),$e!=null&&(t.inheritAttrs=$e),je&&(t.components=je),pt&&(t.directives=pt)}function Oy(t,e,n=_t,s=!1){j(t)&&(t=Da(t));for(const r in t){const i=t[r];let o;ye(i)?"default"in i?o=jt(i.from||r,i.default,!0):o=jt(i.from||r):o=jt(i),Ke(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function ru(t,e,n){ft(j(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hf(t,e,n,s){const r=s.includes(".")?xf(n,s):()=>n[s];if(xe(t)){const i=e[t];Y(i)&&yi(r,i)}else if(Y(t))yi(r,t.bind(n));else if(ye(t))if(j(t))t.forEach(i=>Hf(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&yi(r,i,t)}}function kc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Pi(c,l,o,!0)),Pi(c,e,o)),ye(e)&&i.set(e,c),c}function Pi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Pi(t,i,n,!0),r&&r.forEach(o=>Pi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Py[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Py={data:iu,props:bn,emits:bn,methods:bn,computed:bn,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:bn,directives:bn,watch:My,provide:iu,inject:xy};function iu(t,e){return e?t?function(){return Ge(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function xy(t,e){return bn(Da(t),Da(e))}function Da(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xe(t,e){return t?[...new Set([].concat(t,e))]:e}function bn(t,e){return t?Ge(Ge(Object.create(null),t),e):e}function My(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const s in e)n[s]=Xe(t[s],e[s]);return n}function Ly(t,e,n,s=!1){const r={},i={};Ri(i,go,1),t.propsDefaults=Object.create(null),qf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Gm(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Uy(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=oe(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(uo(t.emitsOptions,d))continue;const g=e[d];if(c)if(ne(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const y=xt(d);r[y]=Na(c,a,y,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{qf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ne(e,h)&&((u=ks(h))===h||!ne(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Na(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ne(e,h)&&!0)&&(delete i[h],l=!0)}l&&qt(t,"set","$attrs")}function qf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(pi(c))continue;const l=e[c];let u;r&&ne(r,u=xt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:uo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=oe(n),l=a||de;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Na(r,c,h,l[h],t,!ne(l,h))}}return o}function Na(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(ms(r),s=l[n]=c.call(null,e),Mn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ks(n))&&(s=!0))}return s}function Kf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const u=h=>{c=!0;const[d,g]=Kf(h,e,!0);Ge(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ye(t)&&s.set(t,is),is;if(j(i))for(let u=0;u<i.length;u++){const h=xt(i[u]);ou(h)&&(o[h]=de)}else if(i)for(const u in i){const h=xt(u);if(ou(h)){const d=i[u],g=o[h]=j(d)||Y(d)?{type:d}:d;if(g){const y=lu(Boolean,g.type),E=lu(String,g.type);g[0]=y>-1,g[1]=E<0||y<E,(y>-1||ne(g,"default"))&&a.push(h)}}}const l=[o,a];return ye(t)&&s.set(t,l),l}function ou(t){return t[0]!=="$"}function au(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function cu(t,e){return au(t)===au(e)}function lu(t,e){return j(e)?e.findIndex(n=>cu(n,t)):Y(e)&&cu(e,t)?0:-1}const zf=t=>t[0]==="_"||t==="$stable",Rc=t=>j(t)?t.map(Rt):[Rt(t)],Fy=(t,e,n)=>{if(e._n)return e;const s=oy((...r)=>Rc(e(...r)),n);return s._c=!1,s},Wf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(zf(r))continue;const i=t[r];if(Y(i))e[r]=Fy(r,i,s);else if(i!=null){const o=Rc(i);e[r]=()=>o}}},Gf=(t,e)=>{const n=Rc(e);t.slots.default=()=>n},Vy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),Ri(e,"_",n)):Wf(e,t.slots={})}else t.slots={},e&&Gf(t,e);Ri(t.slots,go,1)},By=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=de;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ge(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Wf(e,r)),o=e}else e&&(Gf(t,e),o={default:1});if(i)for(const a in r)!zf(a)&&!(a in o)&&delete r[a]};function Qf(){return{app:null,config:{isNativeTag:pm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $y=0;function jy(t,e){return function(s,r=null){Y(s)||(s=Object.assign({},s)),r!=null&&!ye(r)&&(r=null);const i=Qf(),o=new Set;let a=!1;const c=i.app={_uid:$y++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:uv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Je(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,mo(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Oa(t,e,n,s,r=!1){if(j(t)){t.forEach((d,g)=>Oa(d,e&&(j(e)?e[g]:e),n,s,r));return}if(vi(s)&&!r)return;const i=s.shapeFlag&4?mo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===de?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(xe(l)?(u[l]=null,ne(h,l)&&(h[l]=null)):Ke(l)&&(l.value=null)),Y(c))ln(c,a,12,[o,u]);else{const d=xe(c),g=Ke(c);if(d||g){const y=()=>{if(t.f){const E=d?ne(h,c)?h[c]:u[c]:c.value;r?j(E)&&mc(E,i):j(E)?E.includes(i)||E.push(i):d?(u[c]=[i],ne(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ne(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,tt(y,n)):y()}}}const tt=fy;function Hy(t){return qy(t)}function qy(t,e){const n=_m();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=_t,insertStaticContent:y}=t,E=(f,p,m,v=null,_=null,k=null,N=!1,A=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!An(f,p)&&(v=D(f),et(f,_,k,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:I,ref:F,shapeFlag:x}=p;switch(I){case Dc:S(f,p,m,v);break;case Et:C(f,p,m,v);break;case wi:f==null&&P(p,m,v,N);break;case kt:je(f,p,m,v,_,k,N,A,R);break;default:x&1?le(f,p,m,v,_,k,N,A,R):x&6?pt(f,p,m,v,_,k,N,A,R):(x&64||x&128)&&I.process(f,p,m,v,_,k,N,A,R,re)}F!=null&&_&&Oa(F,f&&f.ref,k,p||f,!p)},S=(f,p,m,v)=>{if(f==null)s(p.el=a(p.children),m,v);else{const _=p.el=f.el;p.children!==f.children&&l(_,p.children)}},C=(f,p,m,v)=>{f==null?s(p.el=c(p.children||""),m,v):p.el=f.el},P=(f,p,m,v)=>{[f.el,f.anchor]=y(f.children,p,m,v,f.el,f.anchor)},K=({el:f,anchor:p},m,v)=>{let _;for(;f&&f!==p;)_=d(f),s(f,m,v),f=_;s(p,m,v)},Q=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},le=(f,p,m,v,_,k,N,A,R)=>{N=N||p.type==="svg",f==null?Ie(p,m,v,_,k,N,A,R):ve(f,p,_,k,N,A,R)},Ie=(f,p,m,v,_,k,N,A)=>{let R,I;const{type:F,props:x,shapeFlag:V,transition:z,dirs:ee}=f;if(R=f.el=o(f.type,k,x&&x.is,x),V&8?u(R,f.children):V&16&&X(f.children,R,null,v,_,k&&F!=="foreignObject",N,A),ee&&In(f,null,v,"created"),x){for(const he in x)he!=="value"&&!pi(he)&&i(R,he,null,x[he],k,f.children,v,_,O);"value"in x&&i(R,"value",null,x.value),(I=x.onVnodeBeforeMount)&&Ct(I,v,f)}Te(R,f,f.scopeId,N,v),ee&&In(f,null,v,"beforeMount");const ge=(!_||_&&!_.pendingBranch)&&z&&!z.persisted;ge&&z.beforeEnter(R),s(R,p,m),((I=x&&x.onVnodeMounted)||ge||ee)&&tt(()=>{I&&Ct(I,v,f),ge&&z.enter(R),ee&&In(f,null,v,"mounted")},_)},Te=(f,p,m,v,_)=>{if(m&&g(f,m),v)for(let k=0;k<v.length;k++)g(f,v[k]);if(_){let k=_.subTree;if(p===k){const N=_.vnode;Te(f,N,N.scopeId,N.slotScopeIds,_.parent)}}},X=(f,p,m,v,_,k,N,A,R=0)=>{for(let I=R;I<f.length;I++){const F=f[I]=A?tn(f[I]):Rt(f[I]);E(null,F,p,m,v,_,k,N,A)}},ve=(f,p,m,v,_,k,N)=>{const A=p.el=f.el;let{patchFlag:R,dynamicChildren:I,dirs:F}=p;R|=f.patchFlag&16;const x=f.props||de,V=p.props||de;let z;m&&Tn(m,!1),(z=V.onVnodeBeforeUpdate)&&Ct(z,m,p,f),F&&In(p,f,m,"beforeUpdate"),m&&Tn(m,!0);const ee=_&&p.type!=="foreignObject";if(I?fe(f.dynamicChildren,I,A,m,v,ee,k):N||ue(f,p,A,null,m,v,ee,k,!1),R>0){if(R&16)$e(A,p,x,V,m,v,_);else if(R&2&&x.class!==V.class&&i(A,"class",null,V.class,_),R&4&&i(A,"style",x.style,V.style,_),R&8){const ge=p.dynamicProps;for(let he=0;he<ge.length;he++){const Se=ge[he],yt=x[Se],Jn=V[Se];(Jn!==yt||Se==="value")&&i(A,Se,yt,Jn,_,f.children,m,v,O)}}R&1&&f.children!==p.children&&u(A,p.children)}else!N&&I==null&&$e(A,p,x,V,m,v,_);((z=V.onVnodeUpdated)||F)&&tt(()=>{z&&Ct(z,m,p,f),F&&In(p,f,m,"updated")},v)},fe=(f,p,m,v,_,k,N)=>{for(let A=0;A<p.length;A++){const R=f[A],I=p[A],F=R.el&&(R.type===kt||!An(R,I)||R.shapeFlag&70)?h(R.el):m;E(R,I,F,null,v,_,k,N,!0)}},$e=(f,p,m,v,_,k,N)=>{if(m!==v){if(m!==de)for(const A in m)!pi(A)&&!(A in v)&&i(f,A,m[A],null,N,p.children,_,k,O);for(const A in v){if(pi(A))continue;const R=v[A],I=m[A];R!==I&&A!=="value"&&i(f,A,I,R,N,p.children,_,k,O)}"value"in v&&i(f,"value",m.value,v.value)}},je=(f,p,m,v,_,k,N,A,R)=>{const I=p.el=f?f.el:a(""),F=p.anchor=f?f.anchor:a("");let{patchFlag:x,dynamicChildren:V,slotScopeIds:z}=p;z&&(A=A?A.concat(z):z),f==null?(s(I,m,v),s(F,m,v),X(p.children,m,F,_,k,N,A,R)):x>0&&x&64&&V&&f.dynamicChildren?(fe(f.dynamicChildren,V,m,_,k,N,A),(p.key!=null||_&&p===_.subTree)&&Yf(f,p,!0)):ue(f,p,m,F,_,k,N,A,R)},pt=(f,p,m,v,_,k,N,A,R)=>{p.slotScopeIds=A,f==null?p.shapeFlag&512?_.ctx.activate(p,m,v,N,R):Lt(p,m,v,_,k,N,R):Us(f,p,R)},Lt=(f,p,m,v,_,k,N)=>{const A=f.component=nv(f,v,_);if(fo(f)&&(A.ctx.renderer=re),rv(A),A.asyncDep){if(_&&_.registerDep(A,be),!f.el){const R=A.subTree=Je(Et);C(null,R,p,m)}return}be(A,f,p,m,_,k,N)},Us=(f,p,m)=>{const v=p.component=f.component;if(ly(f,p,m))if(v.asyncDep&&!v.asyncResolved){pe(v,p,m);return}else v.next=p,ny(v.update),v.update();else p.el=f.el,v.vnode=p},be=(f,p,m,v,_,k,N)=>{const A=()=>{if(f.isMounted){let{next:F,bu:x,u:V,parent:z,vnode:ee}=f,ge=F,he;Tn(f,!1),F?(F.el=ee.el,pe(f,F,N)):F=ee,x&&gi(x),(he=F.props&&F.props.onVnodeBeforeUpdate)&&Ct(he,z,F,ee),Tn(f,!0);const Se=Yo(f),yt=f.subTree;f.subTree=Se,E(yt,Se,h(yt.el),D(yt),f,_,k),F.el=Se.el,ge===null&&uy(f,Se.el),V&&tt(V,_),(he=F.props&&F.props.onVnodeUpdated)&&tt(()=>Ct(he,z,F,ee),_)}else{let F;const{el:x,props:V}=p,{bm:z,m:ee,parent:ge}=f,he=vi(p);if(Tn(f,!1),z&&gi(z),!he&&(F=V&&V.onVnodeBeforeMount)&&Ct(F,ge,p),Tn(f,!0),x&&J){const Se=()=>{f.subTree=Yo(f),J(x,f.subTree,f,_,null)};he?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Se()):Se()}else{const Se=f.subTree=Yo(f);E(null,Se,m,v,f,_,k),p.el=Se.el}if(ee&&tt(ee,_),!he&&(F=V&&V.onVnodeMounted)){const Se=p;tt(()=>Ct(F,ge,Se),_)}(p.shapeFlag&256||ge&&vi(ge.vnode)&&ge.vnode.shapeFlag&256)&&f.a&&tt(f.a,_),f.isMounted=!0,p=m=v=null}},R=f.effect=new wc(A,()=>Ac(I),f.scope),I=f.update=()=>R.run();I.id=f.uid,Tn(f,!0),I()},pe=(f,p,m)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Uy(f,p.props,v,m),By(f,p.children,m),Rs(),Zl(),Ds()},ue=(f,p,m,v,_,k,N,A,R=!1)=>{const I=f&&f.children,F=f?f.shapeFlag:0,x=p.children,{patchFlag:V,shapeFlag:z}=p;if(V>0){if(V&128){En(I,x,m,v,_,k,N,A,R);return}else if(V&256){gt(I,x,m,v,_,k,N,A,R);return}}z&8?(F&16&&O(I,_,k),x!==I&&u(m,x)):F&16?z&16?En(I,x,m,v,_,k,N,A,R):O(I,_,k,!0):(F&8&&u(m,""),z&16&&X(x,m,v,_,k,N,A,R))},gt=(f,p,m,v,_,k,N,A,R)=>{f=f||is,p=p||is;const I=f.length,F=p.length,x=Math.min(I,F);let V;for(V=0;V<x;V++){const z=p[V]=R?tn(p[V]):Rt(p[V]);E(f[V],z,m,null,_,k,N,A,R)}I>F?O(f,_,k,!0,!1,x):X(p,m,v,_,k,N,A,R,x)},En=(f,p,m,v,_,k,N,A,R)=>{let I=0;const F=p.length;let x=f.length-1,V=F-1;for(;I<=x&&I<=V;){const z=f[I],ee=p[I]=R?tn(p[I]):Rt(p[I]);if(An(z,ee))E(z,ee,m,null,_,k,N,A,R);else break;I++}for(;I<=x&&I<=V;){const z=f[x],ee=p[V]=R?tn(p[V]):Rt(p[V]);if(An(z,ee))E(z,ee,m,null,_,k,N,A,R);else break;x--,V--}if(I>x){if(I<=V){const z=V+1,ee=z<F?p[z].el:v;for(;I<=V;)E(null,p[I]=R?tn(p[I]):Rt(p[I]),m,ee,_,k,N,A,R),I++}}else if(I>V)for(;I<=x;)et(f[I],_,k,!0),I++;else{const z=I,ee=I,ge=new Map;for(I=ee;I<=V;I++){const it=p[I]=R?tn(p[I]):Rt(p[I]);it.key!=null&&ge.set(it.key,I)}let he,Se=0;const yt=V-ee+1;let Jn=!1,$l=0;const Fs=new Array(yt);for(I=0;I<yt;I++)Fs[I]=0;for(I=z;I<=x;I++){const it=f[I];if(Se>=yt){et(it,_,k,!0);continue}let St;if(it.key!=null)St=ge.get(it.key);else for(he=ee;he<=V;he++)if(Fs[he-ee]===0&&An(it,p[he])){St=he;break}St===void 0?et(it,_,k,!0):(Fs[St-ee]=I+1,St>=$l?$l=St:Jn=!0,E(it,p[St],m,null,_,k,N,A,R),Se++)}const jl=Jn?Ky(Fs):is;for(he=jl.length-1,I=yt-1;I>=0;I--){const it=ee+I,St=p[it],Hl=it+1<F?p[it+1].el:v;Fs[I]===0?E(null,St,m,Hl,_,k,N,A,R):Jn&&(he<0||I!==jl[he]?mt(St,m,Hl,2):he--)}}},mt=(f,p,m,v,_=null)=>{const{el:k,type:N,transition:A,children:R,shapeFlag:I}=f;if(I&6){mt(f.component.subTree,p,m,v);return}if(I&128){f.suspense.move(p,m,v);return}if(I&64){N.move(f,p,m,re);return}if(N===kt){s(k,p,m);for(let x=0;x<R.length;x++)mt(R[x],p,m,v);s(f.anchor,p,m);return}if(N===wi){K(f,p,m);return}if(v!==2&&I&1&&A)if(v===0)A.beforeEnter(k),s(k,p,m),tt(()=>A.enter(k),_);else{const{leave:x,delayLeave:V,afterLeave:z}=A,ee=()=>s(k,p,m),ge=()=>{x(k,()=>{ee(),z&&z()})};V?V(k,ee,ge):ge()}else s(k,p,m)},et=(f,p,m,v=!1,_=!1)=>{const{type:k,props:N,ref:A,children:R,dynamicChildren:I,shapeFlag:F,patchFlag:x,dirs:V}=f;if(A!=null&&Oa(A,null,m,f,!0),F&256){p.ctx.deactivate(f);return}const z=F&1&&V,ee=!vi(f);let ge;if(ee&&(ge=N&&N.onVnodeBeforeUnmount)&&Ct(ge,p,f),F&6)w(f.component,m,v);else{if(F&128){f.suspense.unmount(m,v);return}z&&In(f,null,p,"beforeUnmount"),F&64?f.type.remove(f,p,m,_,re,v):I&&(k!==kt||x>0&&x&64)?O(I,p,m,!1,!0):(k===kt&&x&384||!_&&F&16)&&O(R,p,m),v&&Xn(f)}(ee&&(ge=N&&N.onVnodeUnmounted)||z)&&tt(()=>{ge&&Ct(ge,p,f),z&&In(f,null,p,"unmounted")},m)},Xn=f=>{const{type:p,el:m,anchor:v,transition:_}=f;if(p===kt){ei(m,v);return}if(p===wi){Q(f);return}const k=()=>{r(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:N,delayLeave:A}=_,R=()=>N(m,k);A?A(f.el,k,R):R()}else k()},ei=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},w=(f,p,m)=>{const{bum:v,scope:_,update:k,subTree:N,um:A}=f;v&&gi(v),_.stop(),k&&(k.active=!1,et(N,f,p,m)),A&&tt(A,p),tt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},O=(f,p,m,v=!1,_=!1,k=0)=>{for(let N=k;N<f.length;N++)et(f[N],p,m,v,_)},D=f=>f.shapeFlag&6?D(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),U=(f,p,m)=>{f==null?p._vnode&&et(p._vnode,null,null,!0):E(p._vnode||null,f,p,null,null,null,m),Zl(),Df(),p._vnode=f},re={p:E,um:et,m:mt,r:Xn,mt:Lt,mc:X,pc:ue,pbc:fe,n:D,o:t};let Ee,J;return e&&([Ee,J]=e(re)),{render:U,hydrate:Ee,createApp:jy(U,Ee)}}function Tn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Yf(t,e,n=!1){const s=t.children,r=e.children;if(j(s)&&j(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=tn(r[i]),a.el=o.el),n||Yf(o,a))}}function Ky(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const zy=t=>t.__isTeleport,kt=Symbol(void 0),Dc=Symbol(void 0),Et=Symbol(void 0),wi=Symbol(void 0),Gs=[];let wt=null;function Xf(t=!1){Gs.push(wt=t?null:[])}function Wy(){Gs.pop(),wt=Gs[Gs.length-1]||null}let ar=1;function uu(t){ar+=t}function Jf(t){return t.dynamicChildren=ar>0?wt||is:null,Wy(),ar>0&&wt&&wt.push(t),t}function Gy(t,e,n,s,r,i){return Jf(ed(t,e,n,s,r,i,!0))}function Qy(t,e,n,s,r){return Jf(Je(t,e,n,s,r,!0))}function Pa(t){return t?t.__v_isVNode===!0:!1}function An(t,e){return t.type===e.type&&t.key===e.key}const go="__vInternal",Zf=({key:t})=>t!=null?t:null,_i=({ref:t,ref_key:e,ref_for:n})=>t!=null?xe(t)||Ke(t)||Y(t)?{i:ht,r:t,k:e,f:!!n}:t:null;function ed(t,e=null,n=null,s=0,r=null,i=t===kt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zf(e),ref:e&&_i(e),scopeId:ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Nc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),ar>0&&!o&&wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&wt.push(c),c}const Je=Yy;function Yy(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===ky)&&(t=Et),Pa(t)){const a=pn(t,e,!0);return n&&Nc(a,n),ar>0&&!i&&wt&&(a.shapeFlag&6?wt[wt.indexOf(t)]=a:wt.push(a)),a.patchFlag|=-2,a}if(lv(t)&&(t=t.__vccOpts),e){e=Xy(e);let{class:a,style:c}=e;a&&!xe(a)&&(e.class=pc(a)),ye(c)&&(_f(c)&&!j(c)&&(c=Ge({},c)),e.style=dc(c))}const o=xe(t)?1:hy(t)?128:zy(t)?64:ye(t)?4:Y(t)?2:0;return ed(t,e,n,s,r,o,i,!0)}function Xy(t){return t?_f(t)||go in t?Ge({},t):t:null}function pn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Zy(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Zf(a),ref:e&&e.ref?n&&r?j(r)?r.concat(_i(e)):[r,_i(e)]:_i(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pn(t.ssContent),ssFallback:t.ssFallback&&pn(t.ssFallback),el:t.el,anchor:t.anchor}}function Jy(t=" ",e=0){return Je(Dc,null,t,e)}function CC(t,e){const n=Je(wi,null,t);return n.staticCount=e,n}function AC(t="",e=!1){return e?(Xf(),Qy(Et,null,t)):Je(Et,null,t)}function Rt(t){return t==null||typeof t=="boolean"?Je(Et):j(t)?Je(kt,null,t.slice()):typeof t=="object"?tn(t):Je(Dc,null,String(t))}function tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pn(t)}function Nc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Nc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(go in e)?e._ctx=ht:r===3&&ht&&(ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:ht},n=32):(e=String(e),s&64?(n=16,e=[Jy(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=pc([e.class,s.class]));else if(r==="style")e.style=dc([e.style,s.style]);else if(ro(r)){const i=e[r],o=s[r];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ct(t,e,n,s=null){ft(t,e,7,[n,s])}const ev=Qf();let tv=0;function nv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||ev,i={uid:tv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new cf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kf(s,r),emitsOptions:Of(s,r),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=iy.bind(null,i),t.ce&&t.ce(i),i}let Pe=null;const sv=()=>Pe||ht,ms=t=>{Pe=t,t.scope.on()},Mn=()=>{Pe&&Pe.scope.off(),Pe=null};function td(t){return t.vnode.shapeFlag&4}let cr=!1;function rv(t,e=!1){cr=e;const{props:n,children:s}=t.vnode,r=td(t);Ly(t,n,r,e),Vy(t,s);const i=r?iv(t,e):void 0;return cr=!1,i}function iv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=bc(new Proxy(t.ctx,Dy));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?av(t):null;ms(t),Rs();const i=ln(s,t,0,[t.props,r]);if(Ds(),Mn(),rf(i)){if(i.then(Mn,Mn),e)return i.then(o=>{hu(t,o,e)}).catch(o=>{lo(o,t,0)});t.asyncDep=i}else hu(t,i,e)}else nd(t,e)}function hu(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=Sf(e)),nd(t,n)}let fu;function nd(t,e,n){const s=t.type;if(!t.render){if(!e&&fu&&!s.render){const r=s.template||kc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Ge(Ge({isCustomElement:i,delimiters:a},o),c);s.render=fu(r,l)}}t.render=s.render||_t}ms(t),Rs(),Ny(t),Ds(),Mn()}function ov(t){return new Proxy(t.attrs,{get(e,n){return at(t,"get","$attrs"),e[n]}})}function av(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=ov(t))},slots:t.slots,emit:t.emit,expose:e}}function mo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Sf(bc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Oi)return Oi[n](t)}}))}function cv(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function lv(t){return Y(t)&&"__vccOpts"in t}const ut=(t,e)=>Zm(t,e,cr);function sd(t,e,n){const s=arguments.length;return s===2?ye(e)&&!j(e)?Pa(e)?Je(t,null,[e]):Je(t,e):Je(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Pa(n)&&(n=[n]),Je(t,e,n))}const uv="3.2.41",hv="http://www.w3.org/2000/svg",kn=typeof document<"u"?document:null,du=kn&&kn.createElement("template"),fv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?kn.createElementNS(hv,t):kn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>kn.createTextNode(t),createComment:t=>kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{du.innerHTML=s?`<svg>${t}</svg>`:t;const a=du.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function dv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function pv(t,e,n){const s=t.style,r=xe(n);if(n&&!r){for(const i in n)xa(s,i,n[i]);if(e&&!xe(e))for(const i in e)n[i]==null&&xa(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const pu=/\s*!important$/;function xa(t,e,n){if(j(n))n.forEach(s=>xa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=gv(t,e);pu.test(n)?t.setProperty(ks(s),n.replace(pu,""),"important"):t[s]=n}}const gu=["Webkit","Moz","ms"],Jo={};function gv(t,e){const n=Jo[e];if(n)return n;let s=xt(e);if(s!=="filter"&&s in t)return Jo[e]=s;s=ao(s);for(let r=0;r<gu.length;r++){const i=gu[r]+s;if(i in t)return Jo[e]=i}return e}const mu="http://www.w3.org/1999/xlink";function mv(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(mu,e.slice(6,e.length)):t.setAttributeNS(mu,e,n);else{const i=lm(e);n==null||i&&!tf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function yv(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=tf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Rn(t,e,n,s){t.addEventListener(e,n,s)}function vv(t,e,n,s){t.removeEventListener(e,n,s)}function wv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=_v(e);if(s){const l=i[e]=Tv(s,r);Rn(t,a,l,c)}else o&&(vv(t,a,o,c),i[e]=void 0)}}const yu=/(?:Once|Passive|Capture)$/;function _v(t){let e;if(yu.test(t)){e={};let s;for(;s=t.match(yu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ks(t.slice(2)),e]}let Zo=0;const Ev=Promise.resolve(),Iv=()=>Zo||(Ev.then(()=>Zo=0),Zo=Date.now());function Tv(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ft(bv(s,n.value),e,5,[s])};return n.value=t,n.attached=Iv(),n}function bv(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const vu=/^on[a-z]/,Sv=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?dv(t,s,r):e==="style"?pv(t,n,s):ro(e)?gc(e)||wv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cv(t,e,s,r))?yv(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),mv(t,e,s,r))};function Cv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&vu.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vu.test(e)&&xe(n)?!1:e in t}const Av={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};my.props;const xi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>gi(e,n):e};function kv(t){t.target.composing=!0}function wu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kC={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=xi(r);const i=s||r.props&&r.props.type==="number";Rn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=_a(a)),t._assign(a)}),n&&Rn(t,"change",()=>{t.value=t.value.trim()}),e||(Rn(t,"compositionstart",kv),Rn(t,"compositionend",wu),Rn(t,"change",wu))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=xi(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&_a(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},RC={deep:!0,created(t,e,n){t._assign=xi(n),Rn(t,"change",()=>{const s=t._modelValue,r=Rv(t),i=t.checked,o=t._assign;if(j(s)){const a=nf(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(io(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(rd(t,i))})},mounted:_u,beforeUpdate(t,e,n){t._assign=xi(n),_u(t,e,n)}};function _u(t,{value:e,oldValue:n},s){t._modelValue=e,j(e)?t.checked=nf(e,s.props.value)>-1:io(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=so(e,rd(t,!0)))}function Rv(t){return"_value"in t?t._value:t.value}function rd(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Dv=["ctrl","shift","alt","meta"],Nv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Dv.some(n=>t[`${n}Key`]&&!e.includes(n))},DC=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Nv[e[r]];if(i&&i(n,e))return}return t(n,...s)},Ov=Ge({patchProp:Sv},fv);let Eu;function Pv(){return Eu||(Eu=Hy(Ov))}const xv=(...t)=>{const e=Pv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Mv(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Mv(t){return xe(t)?document.querySelector(t):t}const Lv=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Uv={},Fv={class:"app"};function Vv(t,e){const n=Ay("router-view");return Xf(),Gy("div",Fv,[Je(n)])}const Bv=Lv(Uv,[["render",Vv]]),$v="modulepreload",jv=function(t){return"/"+t},Iu={},oi=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=jv(r),r in Iu)return;Iu[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":$v,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ts=typeof window<"u";function Hv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function ea(t,e){const n={};for(const s in e){const r=e[s];n[s]=Tt(r)?r.map(t):t(r)}return n}const Qs=()=>{},Tt=Array.isArray,qv=/\/$/,Kv=t=>t.replace(qv,"");function ta(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Qv(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function zv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Tu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Wv(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&ys(e.matched[s],n.matched[r])&&id(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function id(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Gv(t[n],e[n]))return!1;return!0}function Gv(t,e){return Tt(t)?bu(t,e):Tt(e)?bu(e,t):t===e}function bu(t,e){return Tt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Qv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var lr;(function(t){t.pop="pop",t.push="push"})(lr||(lr={}));var Ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ys||(Ys={}));function Yv(t){if(!t)if(ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Kv(t)}const Xv=/^[^#]+#/;function Jv(t,e){return t.replace(Xv,"#")+e}function Zv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const yo=()=>({left:window.pageXOffset,top:window.pageYOffset});function ew(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Zv(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Su(t,e){return(history.state?history.state.position-e:-1)+t}const Ma=new Map;function tw(t,e){Ma.set(t,e)}function nw(t){const e=Ma.get(t);return Ma.delete(t),e}let sw=()=>location.protocol+"//"+location.host;function od(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Tu(c,"")}return Tu(n,t)+s+r}function rw(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=od(t,location),y=n.value,E=e.value;let S=0;if(d){if(n.value=g,e.value=d,o&&o===y){o=null;return}S=E?d.position-E.position:0}else s(g);r.forEach(C=>{C(n.value,y,{delta:S,type:lr.pop,direction:S?S>0?Ys.forward:Ys.back:Ys.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return i.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(ce({},d.state,{scroll:yo()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Cu(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?yo():null}}function iw(t){const{history:e,location:n}=window,s={value:od(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:sw()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=ce({},e.state,Cu(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ce({},r.value,e.state,{forward:c,scroll:yo()});i(u.current,u,!0);const h=ce({},Cu(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function ow(t){t=Yv(t);const e=iw(t),n=rw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ce({location:"",base:t,go:s,createHref:Jv.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function aw(t){return typeof t=="string"||t&&typeof t=="object"}function ad(t){return typeof t=="string"||typeof t=="symbol"}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},cd=Symbol("");var Au;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Au||(Au={}));function vs(t,e){return ce(new Error,{type:t,[cd]:!0},e)}function Ut(t,e){return t instanceof Error&&cd in t&&(e==null||!!(t.type&e))}const ku="[^/]+?",cw={sensitive:!1,strict:!1,start:!0,end:!0},lw=/[.+*?^${}()[\]/\\]/g;function uw(t,e){const n=ce({},cw,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(lw,"\\$&"),g+=40;else if(d.type===1){const{value:y,repeatable:E,optional:S,regexp:C}=d;i.push({name:y,repeatable:E,optional:S});const P=C||ku;if(P!==ku){g+=10;try{new RegExp(`(${P})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+Q.message)}}let K=E?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(K=S&&l.length<2?`(?:/${K})`:"/"+K),S&&(K+="?"),r+=K,g+=20,S&&(g+=-8),E&&(g+=-20),P===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",y=i[d-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:E,optional:S}=g,C=y in l?l[y]:"";if(Tt(C)&&!E)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=Tt(C)?C.join("/"):C;if(!P)if(S)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function hw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function fw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=hw(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Ru(s))return 1;if(Ru(r))return-1}return r.length-s.length}function Ru(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dw={type:0,value:""},pw=/[a-zA-Z0-9_]/;function gw(t){if(!t)return[[]];if(t==="/")return[[dw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:pw.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function mw(t,e,n){const s=uw(gw(t.path),n),r=ce(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function yw(t,e){const n=[],s=new Map;e=Ou({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,y=vw(u);y.aliasOf=d&&d.record;const E=Ou(e,u),S=[y];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const Q of K)S.push(ce({},y,{components:d?d.record.components:y.components,path:Q,aliasOf:d?d.record:y}))}let C,P;for(const K of S){const{path:Q}=K;if(h&&Q[0]!=="/"){const le=h.record.path,Ie=le[le.length-1]==="/"?"":"/";K.path=h.record.path+(Q&&Ie+Q)}if(C=mw(K,h,E),d?d.alias.push(C):(P=P||C,P!==C&&P.alias.push(C),g&&u.name&&!Nu(C)&&o(u.name)),y.children){const le=y.children;for(let Ie=0;Ie<le.length;Ie++)i(le[Ie],C,d&&d.children[Ie])}d=d||C,c(C)}return P?()=>{o(P)}:Qs}function o(u){if(ad(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&fw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!ld(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Nu(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},y,E;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw vs(1,{location:u});E=d.record.name,g=ce(Du(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Du(u.params,d.keys.map(P=>P.name))),y=d.stringify(g)}else if("path"in u)y=u.path,d=n.find(P=>P.re.test(y)),d&&(g=d.parse(y),E=d.record.name);else{if(d=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw vs(1,{location:u,currentLocation:h});E=d.record.name,g=ce({},h.params,u.params),y=d.stringify(g)}const S=[];let C=d;for(;C;)S.unshift(C.record),C=C.parent;return{name:E,path:y,params:g,matched:S,meta:_w(S)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Du(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function vw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ww(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ww(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Nu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _w(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function Ou(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ld(t,e){return e.children.some(n=>n===t||ld(t,n))}const ud=/#/g,Ew=/&/g,Iw=/\//g,Tw=/=/g,bw=/\?/g,hd=/\+/g,Sw=/%5B/g,Cw=/%5D/g,fd=/%5E/g,Aw=/%60/g,dd=/%7B/g,kw=/%7C/g,pd=/%7D/g,Rw=/%20/g;function Oc(t){return encodeURI(""+t).replace(kw,"|").replace(Sw,"[").replace(Cw,"]")}function Dw(t){return Oc(t).replace(dd,"{").replace(pd,"}").replace(fd,"^")}function La(t){return Oc(t).replace(hd,"%2B").replace(Rw,"+").replace(ud,"%23").replace(Ew,"%26").replace(Aw,"`").replace(dd,"{").replace(pd,"}").replace(fd,"^")}function Nw(t){return La(t).replace(Tw,"%3D")}function Ow(t){return Oc(t).replace(ud,"%23").replace(bw,"%3F")}function Pw(t){return t==null?"":Ow(t).replace(Iw,"%2F")}function Mi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function xw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(hd," "),o=i.indexOf("="),a=Mi(o<0?i:i.slice(0,o)),c=o<0?null:Mi(i.slice(o+1));if(a in e){let l=e[a];Tt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Pu(t){let e="";for(let n in t){const s=t[n];if(n=Nw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tt(s)?s.map(i=>i&&La(i)):[s&&La(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Mw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Tt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Lw=Symbol(""),xu=Symbol(""),vo=Symbol(""),gd=Symbol(""),Ua=Symbol("");function Vs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function nn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(vs(4,{from:n,to:e})):h instanceof Error?a(h):aw(h)?a(vs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function na(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Uw(a)){const l=(a.__vccOpts||a)[e];l&&r.push(nn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Hv(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&nn(d,n,s,i,o)()}))}}return r}function Uw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Mu(t){const e=jt(vo),n=jt(gd),s=ut(()=>e.resolve(cs(t.to))),r=ut(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ys.bind(null,u));if(d>-1)return d;const g=Lu(c[l-2]);return l>1&&Lu(u)===g&&h[h.length-1].path!==g?h.findIndex(ys.bind(null,c[l-2])):d}),i=ut(()=>r.value>-1&&$w(n.params,s.value.params)),o=ut(()=>r.value>-1&&r.value===n.matched.length-1&&id(n.params,s.value.params));function a(c={}){return Bw(c)?e[cs(t.replace)?"replace":"push"](cs(t.to)).catch(Qs):Promise.resolve()}return{route:s,href:ut(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Fw=Uf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Mu,setup(t,{slots:e}){const n=Ar(Mu(t)),{options:s}=jt(vo),r=ut(()=>({[Uu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Uu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:sd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Vw=Fw;function Bw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $w(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Tt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Lu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Uu=(t,e,n)=>t!=null?t:e!=null?e:n,jw=Uf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=jt(Ua),r=ut(()=>t.route||s.value),i=jt(xu,0),o=ut(()=>{let l=cs(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ut(()=>r.value.matched[o.value]);mi(xu,ut(()=>o.value+1)),mi(Lw,a),mi(Ua,r);const c=Tf();return yi(()=>[c.value,a.value,t.name],([l,u,h],[d,g,y])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!ys(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Fu(n.default,{Component:d,route:l});const g=h.props[u],y=g?g===!0?l.params:typeof g=="function"?g(l):g:null,S=sd(d,ce({},y,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Fu(n.default,{Component:S,route:l})||S}}});function Fu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Hw=jw;function qw(t){const e=yw(t.routes,t),n=t.parseQuery||xw,s=t.stringifyQuery||Pu,r=t.history,i=Vs(),o=Vs(),a=Vs(),c=Qm(Zt);let l=Zt;ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ea.bind(null,w=>""+w),h=ea.bind(null,Pw),d=ea.bind(null,Mi);function g(w,O){let D,U;return ad(w)?(D=e.getRecordMatcher(w),U=O):U=w,e.addRoute(U,D)}function y(w){const O=e.getRecordMatcher(w);O&&e.removeRoute(O)}function E(){return e.getRoutes().map(w=>w.record)}function S(w){return!!e.getRecordMatcher(w)}function C(w,O){if(O=ce({},O||c.value),typeof w=="string"){const f=ta(n,w,O.path),p=e.resolve({path:f.path},O),m=r.createHref(f.fullPath);return ce(f,p,{params:d(p.params),hash:Mi(f.hash),redirectedFrom:void 0,href:m})}let D;if("path"in w)D=ce({},w,{path:ta(n,w.path,O.path).path});else{const f=ce({},w.params);for(const p in f)f[p]==null&&delete f[p];D=ce({},w,{params:h(w.params)}),O.params=h(O.params)}const U=e.resolve(D,O),re=w.hash||"";U.params=u(d(U.params));const Ee=zv(s,ce({},w,{hash:Dw(re),path:U.path})),J=r.createHref(Ee);return ce({fullPath:Ee,hash:re,query:s===Pu?Mw(w.query):w.query||{}},U,{redirectedFrom:void 0,href:J})}function P(w){return typeof w=="string"?ta(n,w,c.value.path):ce({},w)}function K(w,O){if(l!==w)return vs(8,{from:O,to:w})}function Q(w){return Te(w)}function le(w){return Q(ce(P(w),{replace:!0}))}function Ie(w){const O=w.matched[w.matched.length-1];if(O&&O.redirect){const{redirect:D}=O;let U=typeof D=="function"?D(w):D;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=P(U):{path:U},U.params={}),ce({query:w.query,hash:w.hash,params:"path"in U?{}:w.params},U)}}function Te(w,O){const D=l=C(w),U=c.value,re=w.state,Ee=w.force,J=w.replace===!0,f=Ie(D);if(f)return Te(ce(P(f),{state:typeof f=="object"?ce({},re,f.state):re,force:Ee,replace:J}),O||D);const p=D;p.redirectedFrom=O;let m;return!Ee&&Wv(s,U,D)&&(m=vs(16,{to:p,from:U}),En(U,U,!0,!1)),(m?Promise.resolve(m):ve(p,U)).catch(v=>Ut(v)?Ut(v,2)?v:gt(v):pe(v,p,U)).then(v=>{if(v){if(Ut(v,2))return Te(ce({replace:J},P(v.to),{state:typeof v.to=="object"?ce({},re,v.to.state):re,force:Ee}),O||p)}else v=$e(p,U,!0,J,re);return fe(p,U,v),v})}function X(w,O){const D=K(w,O);return D?Promise.reject(D):Promise.resolve()}function ve(w,O){let D;const[U,re,Ee]=Kw(w,O);D=na(U.reverse(),"beforeRouteLeave",w,O);for(const f of U)f.leaveGuards.forEach(p=>{D.push(nn(p,w,O))});const J=X.bind(null,w,O);return D.push(J),Zn(D).then(()=>{D=[];for(const f of i.list())D.push(nn(f,w,O));return D.push(J),Zn(D)}).then(()=>{D=na(re,"beforeRouteUpdate",w,O);for(const f of re)f.updateGuards.forEach(p=>{D.push(nn(p,w,O))});return D.push(J),Zn(D)}).then(()=>{D=[];for(const f of w.matched)if(f.beforeEnter&&!O.matched.includes(f))if(Tt(f.beforeEnter))for(const p of f.beforeEnter)D.push(nn(p,w,O));else D.push(nn(f.beforeEnter,w,O));return D.push(J),Zn(D)}).then(()=>(w.matched.forEach(f=>f.enterCallbacks={}),D=na(Ee,"beforeRouteEnter",w,O),D.push(J),Zn(D))).then(()=>{D=[];for(const f of o.list())D.push(nn(f,w,O));return D.push(J),Zn(D)}).catch(f=>Ut(f,8)?f:Promise.reject(f))}function fe(w,O,D){for(const U of a.list())U(w,O,D)}function $e(w,O,D,U,re){const Ee=K(w,O);if(Ee)return Ee;const J=O===Zt,f=ts?history.state:{};D&&(U||J?r.replace(w.fullPath,ce({scroll:J&&f&&f.scroll},re)):r.push(w.fullPath,re)),c.value=w,En(w,O,D,J),gt()}let je;function pt(){je||(je=r.listen((w,O,D)=>{if(!ei.listening)return;const U=C(w),re=Ie(U);if(re){Te(ce(re,{replace:!0}),U).catch(Qs);return}l=U;const Ee=c.value;ts&&tw(Su(Ee.fullPath,D.delta),yo()),ve(U,Ee).catch(J=>Ut(J,12)?J:Ut(J,2)?(Te(J.to,U).then(f=>{Ut(f,20)&&!D.delta&&D.type===lr.pop&&r.go(-1,!1)}).catch(Qs),Promise.reject()):(D.delta&&r.go(-D.delta,!1),pe(J,U,Ee))).then(J=>{J=J||$e(U,Ee,!1),J&&(D.delta&&!Ut(J,8)?r.go(-D.delta,!1):D.type===lr.pop&&Ut(J,20)&&r.go(-1,!1)),fe(U,Ee,J)}).catch(Qs)}))}let Lt=Vs(),Us=Vs(),be;function pe(w,O,D){gt(w);const U=Us.list();return U.length?U.forEach(re=>re(w,O,D)):console.error(w),Promise.reject(w)}function ue(){return be&&c.value!==Zt?Promise.resolve():new Promise((w,O)=>{Lt.add([w,O])})}function gt(w){return be||(be=!w,pt(),Lt.list().forEach(([O,D])=>w?D(w):O()),Lt.reset()),w}function En(w,O,D,U){const{scrollBehavior:re}=t;if(!ts||!re)return Promise.resolve();const Ee=!D&&nw(Su(w.fullPath,0))||(U||!D)&&history.state&&history.state.scroll||null;return kf().then(()=>re(w,O,Ee)).then(J=>J&&ew(J)).catch(J=>pe(J,w,O))}const mt=w=>r.go(w);let et;const Xn=new Set,ei={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:S,getRoutes:E,resolve:C,options:t,push:Q,replace:le,go:mt,back:()=>mt(-1),forward:()=>mt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Us.add,isReady:ue,install(w){const O=this;w.component("RouterLink",Vw),w.component("RouterView",Hw),w.config.globalProperties.$router=O,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>cs(c)}),ts&&!et&&c.value===Zt&&(et=!0,Q(r.location).catch(re=>{}));const D={};for(const re in Zt)D[re]=ut(()=>c.value[re]);w.provide(vo,O),w.provide(gd,Ar(D)),w.provide(Ua,c);const U=w.unmount;Xn.add(w),w.unmount=function(){Xn.delete(w),Xn.size<1&&(l=Zt,je&&je(),je=null,c.value=Zt,et=!1,be=!1),U()}}};return ei}function Zn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Kw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ys(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ys(l,c))||r.push(c))}return[n,s,r]}function NC(){return jt(vo)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},zw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(md(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ww=function(t){const e=md(t);return yd.encodeByteArray(e,!0)},vd=function(t){return Ww(t).replace(/\./g,"")},Gw=function(t){try{return yd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function Xw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zw(){const t=Qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function e_(){return typeof indexedDB=="object"}function t_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="FirebaseError";class Xt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=n_,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kr.prototype.create)}}class kr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?s_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Xt(r,a,s)}}function s_(t,e){return t.replace(r_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const r_=/\{\$([^}]+)}/g;function i_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Li(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Vu(i)&&Vu(o)){if(!Li(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Vu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Hs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function o_(t,e){const n=new a_(t,e);return n.subscribe.bind(n)}class a_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");c_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=sa),r.error===void 0&&(r.error=sa),r.complete===void 0&&(r.complete=sa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function c_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Qw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(h_(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:u_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u_(t){return t===Sn?void 0:t}function h_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new l_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const d_={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},p_=ie.INFO,g_={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},m_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=g_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pc{constructor(e){this.name=e,this._logLevel=p_,this._logHandler=m_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?d_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const y_=(t,e)=>e.some(n=>t instanceof n);let Bu,$u;function v_(){return Bu||(Bu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function w_(){return $u||($u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wd=new WeakMap,Fa=new WeakMap,_d=new WeakMap,ra=new WeakMap,xc=new WeakMap;function __(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(un(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wd.set(n,t)}).catch(()=>{}),xc.set(e,t),e}function E_(t){if(Fa.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Fa.set(t,e)}let Va={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_d.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function I_(t){Va=t(Va)}function T_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ia(this),e,...n);return _d.set(s,e.sort?e.sort():[e]),un(s)}:w_().includes(t)?function(...e){return t.apply(ia(this),e),un(wd.get(this))}:function(...e){return un(t.apply(ia(this),e))}}function b_(t){return typeof t=="function"?T_(t):(t instanceof IDBTransaction&&E_(t),y_(t,v_())?new Proxy(t,Va):t)}function un(t){if(t instanceof IDBRequest)return __(t);if(ra.has(t))return ra.get(t);const e=b_(t);return e!==t&&(ra.set(t,e),xc.set(e,t)),e}const ia=t=>xc.get(t);function S_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=un(o);return s&&o.addEventListener("upgradeneeded",c=>{s(un(o.result),c.oldVersion,c.newVersion,un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const C_=["get","getKey","getAll","getAllKeys","count"],A_=["put","add","delete","clear"],oa=new Map;function ju(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oa.get(e))return oa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=A_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||C_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return oa.set(e,i),i}I_(t=>({...t,get:(e,n,s)=>ju(e,n)||t.get(e,n,s),has:(e,n)=>!!ju(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(R_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function R_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ba="@firebase/app",Hu="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Pc("@firebase/app"),D_="@firebase/app-compat",N_="@firebase/analytics-compat",O_="@firebase/analytics",P_="@firebase/app-check-compat",x_="@firebase/app-check",M_="@firebase/auth",L_="@firebase/auth-compat",U_="@firebase/database",F_="@firebase/database-compat",V_="@firebase/functions",B_="@firebase/functions-compat",$_="@firebase/installations",j_="@firebase/installations-compat",H_="@firebase/messaging",q_="@firebase/messaging-compat",K_="@firebase/performance",z_="@firebase/performance-compat",W_="@firebase/remote-config",G_="@firebase/remote-config-compat",Q_="@firebase/storage",Y_="@firebase/storage-compat",X_="@firebase/firestore",J_="@firebase/firestore-compat",Z_="firebase",eE="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="[DEFAULT]",tE={[Ba]:"fire-core",[D_]:"fire-core-compat",[O_]:"fire-analytics",[N_]:"fire-analytics-compat",[x_]:"fire-app-check",[P_]:"fire-app-check-compat",[M_]:"fire-auth",[L_]:"fire-auth-compat",[U_]:"fire-rtdb",[F_]:"fire-rtdb-compat",[V_]:"fire-fn",[B_]:"fire-fn-compat",[$_]:"fire-iid",[j_]:"fire-iid-compat",[H_]:"fire-fcm",[q_]:"fire-fcm-compat",[K_]:"fire-perf",[z_]:"fire-perf-compat",[W_]:"fire-rc",[G_]:"fire-rc-compat",[Q_]:"fire-gcs",[Y_]:"fire-gcs-compat",[X_]:"fire-fst",[J_]:"fire-fst-compat","fire-js":"fire-js",[Z_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new Map,$a=new Map;function nE(t,e){try{t.container.addComponent(e)}catch(n){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ws(t){const e=t.name;if($a.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;$a.set(e,t);for(const n of Ui.values())nE(n,t);return!0}function Mc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Hn=new kr("app","Firebase",sE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=eE;function iE(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ed,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Hn.create("bad-app-name",{appName:String(s)});const r=Ui.get(s);if(r){if(Li(t,r.options)&&Li(n,r.config))return r;throw Hn.create("duplicate-app",{appName:s})}const i=new f_(s);for(const a of $a.values())i.addComponent(a);const o=new rE(t,n,i);return Ui.set(s,o),o}function Id(t=Ed){const e=Ui.get(t);if(!e)throw Hn.create("no-app",{appName:t});return e}function hn(t,e,n){var s;let r=(s=tE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(a.join(" "));return}ws(new $n(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="firebase-heartbeat-database",aE=1,ur="firebase-heartbeat-store";let aa=null;function Td(){return aa||(aa=S_(oE,aE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ur)}}}).catch(t=>{throw Hn.create("idb-open",{originalErrorMessage:t.message})})),aa}async function cE(t){var e;try{return(await Td()).transaction(ur).objectStore(ur).get(bd(t))}catch(n){if(n instanceof Xt)jn.warn(n.message);else{const s=Hn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});jn.warn(s.message)}}}async function qu(t,e){var n;try{const r=(await Td()).transaction(ur,"readwrite");return await r.objectStore(ur).put(e,bd(t)),r.done}catch(s){if(s instanceof Xt)jn.warn(s.message);else{const r=Hn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});jn.warn(r.message)}}}function bd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=1024,uE=30*24*60*60*1e3;class hE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ku();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=uE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ku(),{heartbeatsToSend:n,unsentEntries:s}=fE(this._heartbeatsCache.heartbeats),r=vd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ku(){return new Date().toISOString().substring(0,10)}function fE(t,e=lE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),zu(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),zu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class dE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return e_()?t_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return qu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return qu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function zu(t){return vd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(t){ws(new $n("platform-logger",e=>new k_(e),"PRIVATE")),ws(new $n("heartbeat",e=>new hE(e),"PRIVATE")),hn(Ba,Hu,t),hn(Ba,Hu,"esm2017"),hn("fire-js","")}pE("");function Lc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Sd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gE=Sd,Cd=new kr("auth","Firebase",Sd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Pc("@firebase/auth");function Ei(t,...e){Wu.logLevel<=ie.ERROR&&Wu.error(`Auth (${Dr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw Uc(t,...e)}function Ot(t,...e){return Uc(t,...e)}function mE(t,e,n){const s=Object.assign(Object.assign({},gE()),{[e]:n});return new kr("auth","Firebase",s).create(e,{appName:t.name})}function Uc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Cd.create(t,...e)}function H(t,e,...n){if(!t)throw Uc(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ei(e),new Error(e)}function Kt(t,e){t||Vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new Map;function Bt(t){Kt(t instanceof Function,"Expected a class definition");let e=Gu.get(t);return e?(Kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gu.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t,e){const n=Mc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Li(i,e!=null?e:{}))return r;bt(r,"already-initialized")}return n.initialize({options:e})}function vE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wE(){return Qu()==="http:"||Qu()==="https:"}function Qu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wE()||Xw()||"connection"in navigator)?navigator.onLine:!0}function EE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kt(n>e,"Short delay should be less than long delay!"),this.isMobile=Yw()||Jw()}get(){return _E()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t,e){Kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=new Nr(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pr(t,e,n,s,r={}){return kd(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Rr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ad.fetch()(Rd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function kd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},IE),e);try{const r=new bE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ai(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ai(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ai(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ai(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw mE(t,u,l);bt(t,u)}}catch(r){if(r instanceof Xt)throw r;bt(t,"network-request-failed")}}async function xr(t,e,n,s,r={}){const i=await Pr(t,e,n,s,r);return"mfaPendingCredential"in i&&bt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Fc(t.config,r):`${t.config.apiScheme}://${r}`}class bE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ot(this.auth,"network-request-failed")),TE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ai(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ot(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE(t,e){return Pr(t,"POST","/v1/accounts:delete",e)}async function CE(t,e){return Pr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AE(t,e=!1){const n=Ye(t),s=await n.getIdToken(e),r=Vc(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Xs(ca(r.auth_time)),issuedAtTime:Xs(ca(r.iat)),expirationTime:Xs(ca(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ca(t){return Number(t)*1e3}function Vc(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return Ei("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gw(s);return i?JSON.parse(i):(Ei("Failed to decode base64 JWT payload"),null)}catch(i){return Ei("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function kE(t){const e=Vc(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Xt&&RE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function RE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await hr(t,CE(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?PE(i.providerUserInfo):[],a=OE(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Dd(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function NE(t){const e=Ye(t);await Fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function PE(t){return t.map(e=>{var{providerId:n}=e,s=Lc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xE(t,e){const n=await kd(t,{},async()=>{const s=Rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Rd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ad.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await xE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new fr;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fr,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Lc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await hr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AE(this,e)}reload(){return NE(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Fi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hr(this,SE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:Q,isAnonymous:le,providerData:Ie,stsTokenManager:Te}=n;H(K&&Te,e,"internal-error");const X=fr.fromJSON(this.name,Te);H(typeof K=="string",e,"internal-error"),en(h,e.name),en(d,e.name),H(typeof Q=="boolean",e,"internal-error"),H(typeof le=="boolean",e,"internal-error"),en(g,e.name),en(y,e.name),en(E,e.name),en(S,e.name),en(C,e.name),en(P,e.name);const ve=new Ln({uid:K,auth:e,email:d,emailVerified:Q,displayName:h,isAnonymous:le,photoURL:y,phoneNumber:g,tenantId:E,stsTokenManager:X,createdAt:C,lastLoginAt:P});return Ie&&Array.isArray(Ie)&&(ve.providerData=Ie.map(fe=>Object.assign({},fe))),S&&(ve._redirectEventId=S),ve}static async _fromIdTokenResponse(e,n,s=!1){const r=new fr;r.updateFromServerResponse(n);const i=new Ln({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Fi(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nd.type="NONE";const Yu=Nd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ii(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ii("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new us(Bt(Yu),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Bt(Yu);const o=Ii(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ln._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new us(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new us(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Od(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ld(e))return"Blackberry";if(Ud(e))return"Webos";if(Bc(e))return"Safari";if((e.includes("chrome/")||Pd(e))&&!e.includes("edge/"))return"Chrome";if(Md(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Od(t=Qe()){return/firefox\//i.test(t)}function Bc(t=Qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pd(t=Qe()){return/crios\//i.test(t)}function xd(t=Qe()){return/iemobile/i.test(t)}function Md(t=Qe()){return/android/i.test(t)}function Ld(t=Qe()){return/blackberry/i.test(t)}function Ud(t=Qe()){return/webos/i.test(t)}function wo(t=Qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ME(t=Qe()){var e;return wo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LE(){return Zw()&&document.documentMode===10}function Fd(t=Qe()){return wo(t)||Md(t)||Ud(t)||Ld(t)||/windows phone/i.test(t)||xd(t)}function UE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t,e=[]){let n;switch(t){case"Browser":n=Xu(Qe());break;case"Worker":n=`${Xu(Qe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ju(this),this.idTokenSubscription=new Ju(this),this.beforeStateQueue=new FE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Fi(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function _o(t){return Ye(t)}class Ju{constructor(e){this.auth=e,this.observer=null,this.addObserver=o_(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function BE(t,e){return Pr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $E(t,e){return xr(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(t,e){return xr(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function HE(t,e){return xr(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends $c{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new dr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new dr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return $E(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jE(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return BE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return HE(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t,e){return xr(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="http://localhost";class qn extends $c{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Lc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new qn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,hs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hs(e,n)}buildRequest(){const e={requestUri:qE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zE(t){const e=js(Hs(t)).link,n=e?js(Hs(e)).deep_link_id:null,s=js(Hs(t)).deep_link_id;return(s?js(Hs(s)).link:null)||s||n||e||t}class jc{constructor(e){var n,s,r,i,o,a;const c=js(Hs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=KE((r=c.mode)!==null&&r!==void 0?r:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=zE(e);try{return new jc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.providerId=Ns.PROVIDER_ID}static credential(e,n){return dr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=jc.parseLink(n);return H(s,"argument-error"),dr._fromEmailAndCode(e,s.code,s.tenantId)}}Ns.PROVIDER_ID="password";Ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Bd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Mr{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return rn.credential(n,s)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Mr{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Mr{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return an.credential(n,s)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(t,e){return xr(t,"POST","/v1/accounts:signUp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Ln._fromIdTokenResponse(e,s,r),o=Zu(s);return new Kn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Zu(s);return new Kn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Zu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends Xt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Vi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Vi(e,n,s,r)}}function $d(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vi._fromErrorAndOperation(t,i,e,s):i})}async function GE(t,e,n=!1){const s=await hr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await hr(t,$d(r,i,e,t),n);H(o.idToken,r,"internal-error");const a=Vc(o.idToken);H(a,r,"internal-error");const{sub:c}=a;return H(t.uid===c,r,"user-mismatch"),Kn._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jd(t,e,n=!1){const s="signIn",r=await $d(t,s,e),i=await Kn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function YE(t,e){return jd(_o(t),e)}async function OC(t,e,n){const s=_o(t),r=await WE(s,{returnSecureToken:!0,email:e,password:n}),i=await Kn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function PC(t,e,n){return YE(Ye(t),Ns.credential(e,n))}function XE(t,e,n,s){return Ye(t).onAuthStateChanged(e,n,s)}function xC(t){return Ye(t).signOut()}const Bi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bi,"1"),this.storage.removeItem(Bi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(){const t=Qe();return Bc(t)||wo(t)}const ZE=1e3,eI=10;class qd extends Hd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=JE()&&UE(),this.fallbackToPolling=Fd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);LE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,eI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ZE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qd.type="LOCAL";const tI=qd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd extends Hd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kd.type="SESSION";const zd=Kd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Eo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await nI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Eo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Hc("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function rI(t){Pt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function iI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aI(){return Wd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="firebaseLocalStorageDb",cI=1,$i="firebaseLocalStorage",Qd="fbase_key";class Lr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Io(t,e){return t.transaction([$i],e?"readwrite":"readonly").objectStore($i)}function lI(){const t=indexedDB.deleteDatabase(Gd);return new Lr(t).toPromise()}function Ha(){const t=indexedDB.open(Gd,cI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore($i,{keyPath:Qd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains($i)?e(s):(s.close(),await lI(),e(await Ha()))})})}async function eh(t,e,n){const s=Io(t,!0).put({[Qd]:e,value:n});return new Lr(s).toPromise()}async function uI(t,e){const n=Io(t,!1).get(e),s=await new Lr(n).toPromise();return s===void 0?null:s.value}function th(t,e){const n=Io(t,!0).delete(e);return new Lr(n).toPromise()}const hI=800,fI=3;class Yd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ha(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>fI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eo._getInstance(aI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iI(),!this.activeServiceWorker)return;this.sender=new sI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ha();return await eh(e,Bi,"1"),await th(e,Bi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>eh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>uI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>th(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Io(r,!1).getAll();return new Lr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yd.type="LOCAL";const dI=Yd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ot("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",pI().appendChild(s)})}function mI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Nr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t,e){return e?Bt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends $c{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vI(t){return jd(t.auth,new qc(t),t.bypassAuthState)}function wI(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),QE(n,new qc(t),t.bypassAuthState)}async function _I(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),GE(n,new qc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vI;case"linkViaPopup":case"linkViaRedirect":return _I;case"reauthViaPopup":case"reauthViaRedirect":return wI;default:bt(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=new Nr(2e3,1e4);class ns extends Xd{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=Hc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,EI.get())};e()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="pendingRedirect",Ti=new Map;class TI extends Xd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ti.get(this.auth._key());if(!e){try{const s=await bI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ti.set(this.auth._key(),e)}return this.bypassAuthState||Ti.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bI(t,e){const n=AI(e),s=CI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function SI(t,e){Ti.set(t._key(),e)}function CI(t){return Bt(t._redirectPersistence)}function AI(t){return Ii(II,t.config.apiKey,t.name)}async function kI(t,e,n=!1){const s=_o(t),r=yI(s,e),o=await new TI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=10*60*1e3;class DI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Jd(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RI&&this.cachedEventUids.clear(),this.cachedEventUids.has(nh(e))}saveEventToCache(e){this.cachedEventUids.add(nh(e)),this.lastProcessedEventTime=Date.now()}}function nh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(t,e={}){return Pr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xI=/^https?/;async function MI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OI(t);for(const n of e)try{if(LI(n))return}catch{}bt(t,"unauthorized-domain")}function LI(t){const e=ja(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!xI.test(n))return!1;if(PI.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=new Nr(3e4,6e4);function sh(){const t=Pt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FI(t){return new Promise((e,n)=>{var s,r,i;function o(){sh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sh(),n(Ot(t,"network-request-failed"))},timeout:UI.get()})}if(!((r=(s=Pt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Pt().gapi)===null||i===void 0)&&i.load)o();else{const a=mI("iframefcb");return Pt()[a]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},gI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw bi=null,e})}let bi=null;function VI(t){return bi=bi||FI(t),bi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=new Nr(5e3,15e3),$I="__/auth/iframe",jI="emulator/auth/iframe",HI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KI(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fc(e,jI):`https://${t.config.authDomain}/${$I}`,s={apiKey:e.apiKey,appName:t.name,v:Dr},r=qI.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Rr(s).slice(1)}`}async function zI(t){const e=await VI(t),n=Pt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:KI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=Pt().setTimeout(()=>{i(o)},BI.get());function c(){Pt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GI=500,QI=600,YI="_blank",XI="http://localhost";class rh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JI(t,e,n,s=GI,r=QI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},WI),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Qe().toLowerCase();n&&(a=Pd(l)?YI:n),Od(l)&&(e=e||XI,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(ME(l)&&a!=="_self")return ZI(e||"",a),new rh(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new rh(h)}function ZI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="__/auth/handler",t0="emulator/auth/handler";function ih(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Dr,eventId:r};if(e instanceof Bd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",i_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Mr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${n0(t)}?${Rr(a).slice(1)}`}function n0({config:t}){return t.emulator?Fc(t,t0):`https://${t.authDomain}/${e0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="webStorageSupport";class s0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zd,this._completeRedirectFn=kI,this._overrideRedirectResult=SI}async _openPopup(e,n,s,r){var i;Kt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ih(e,n,s,ja(),r);return JI(e,o,Hc())}async _openRedirect(e,n,s,r){return await this._originValidation(e),rI(ih(e,n,s,ja(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Kt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await zI(e),s=new DI(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(la,{type:la},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[la];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fd()||Bc()||wo()}}const r0=s0;var oh="@firebase/auth",ah="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function a0(t){ws(new $n("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vd(t)},u=new VE(a,c,l);return vE(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ws(new $n("auth-internal",e=>{const n=_o(e.getProvider("auth").getImmediate());return(s=>new i0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(oh,ah,o0(t)),hn(oh,ah,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t=Id()){const e=Mc(t,"auth");return e.isInitialized()?e.getImmediate():yE(t,{popupRedirectResolver:r0,persistence:[dI,tI,zd]})}a0("Browser");const l0=[{path:"/",name:"home",component:()=>oi(()=>import("./Home.ffc7736c.js"),["assets/Home.ffc7736c.js","assets/Home.33bda962.css"])},{path:"/wellcome",name:"wellcome",component:()=>oi(()=>import("./WellcomeView.df28061f.js"),["assets/WellcomeView.df28061f.js","assets/InnerTexts.ca6ad9b5.js"])},{path:"/register",name:"register",component:()=>oi(()=>import("./WellcomeViewRegister.de136be5.js"),["assets/WellcomeViewRegister.de136be5.js","assets/InnerTexts.ca6ad9b5.js"])},{path:"/todo",name:"todo",component:()=>oi(()=>import("./TodoApp.c2a68c48.js"),["assets/TodoApp.c2a68c48.js","assets/TodoApp.7bb71021.css"]),meta:{requiresAuth:!0}}],Zd=qw({history:ow("/"),routes:l0}),u0=()=>new Promise((t,e)=>{const n=XE(c0(),s=>{n(),t(s)},e)});Zd.beforeEach(async(t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?await u0()?n():n("/"):n()});var h0="firebase",f0="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(h0,f0,"app");var d0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Kc=Kc||{},q=d0||self;function ji(){}function To(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ur(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function p0(t){return Object.prototype.hasOwnProperty.call(t,ua)&&t[ua]||(t[ua]=++g0)}var ua="closure_uid_"+(1e9*Math.random()>>>0),g0=0;function m0(t,e,n){return t.call.apply(t.bind,arguments)}function y0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ze=m0:ze=y0,ze.apply(null,arguments)}function ci(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function vn(){this.s=this.s,this.o=this.o}var v0=0;vn.prototype.s=!1;vn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),v0!=0)&&p0(this)};vn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ep=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function zc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ch(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(To(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function We(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var w0=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",ji,e),q.removeEventListener("test",ji,e)}catch{}return t}();function Hi(t){return/^[\s\xa0]*$/.test(t)}var lh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ha(t,e){return t<e?-1:t>e?1:0}function bo(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function Nt(t){return bo().indexOf(t)!=-1}function Wc(t){return Wc[" "](t),t}Wc[" "]=ji;function _0(t){var e=T0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var E0=Nt("Opera"),_s=Nt("Trident")||Nt("MSIE"),tp=Nt("Edge"),qa=tp||_s,np=Nt("Gecko")&&!(bo().toLowerCase().indexOf("webkit")!=-1&&!Nt("Edge"))&&!(Nt("Trident")||Nt("MSIE"))&&!Nt("Edge"),I0=bo().toLowerCase().indexOf("webkit")!=-1&&!Nt("Edge");function sp(){var t=q.document;return t?t.documentMode:void 0}var qi;e:{var fa="",da=function(){var t=bo();if(np)return/rv:([^\);]+)(\)|;)/.exec(t);if(tp)return/Edge\/([\d\.]+)/.exec(t);if(_s)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(I0)return/WebKit\/(\S+)/.exec(t);if(E0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(da&&(fa=da?da[1]:""),_s){var pa=sp();if(pa!=null&&pa>parseFloat(fa)){qi=String(pa);break e}}qi=fa}var T0={};function b0(){return _0(function(){let t=0;const e=lh(String(qi)).split("."),n=lh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=ha(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ha(r[2].length==0,i[2].length==0)||ha(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Ka;if(q.document&&_s){var uh=sp();Ka=uh||parseInt(qi,10)||void 0}else Ka=void 0;var S0=Ka;function pr(t,e){if(We.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(np){e:{try{Wc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:C0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&pr.X.h.call(this)}}Be(pr,We);var C0={2:"touch",3:"pen",4:"mouse"};pr.prototype.h=function(){pr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fr="closure_listenable_"+(1e6*Math.random()|0),A0=0;function k0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++A0,this.ba=this.ea=!1}function So(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Gc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function rp(t){const e={};for(const n in t)e[n]=t[n];return e}const hh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ip(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<hh.length;i++)n=hh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Co(t){this.src=t,this.g={},this.h=0}Co.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Wa(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new k0(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function za(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=ep(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(So(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Wa(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Qc="closure_lm_"+(1e6*Math.random()|0),ga={};function op(t,e,n,s,r){if(s&&s.once)return cp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)op(t,e[i],n,s,r);return null}return n=Jc(n),t&&t[Fr]?t.N(e,n,Ur(s)?!!s.capture:!!s,r):ap(t,e,n,!1,s,r)}function ap(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ur(r)?!!r.capture:!!r,a=Xc(t);if(a||(t[Qc]=a=new Co(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=R0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)w0||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(up(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function R0(){function t(n){return e.call(t.src,t.listener,n)}const e=D0;return t}function cp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)cp(t,e[i],n,s,r);return null}return n=Jc(n),t&&t[Fr]?t.O(e,n,Ur(s)?!!s.capture:!!s,r):ap(t,e,n,!0,s,r)}function lp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)lp(t,e[i],n,s,r);else s=Ur(s)?!!s.capture:!!s,n=Jc(n),t&&t[Fr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Wa(i,n,s,r),-1<n&&(So(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Wa(e,n,s,r)),(n=-1<t?e[t]:null)&&Yc(n))}function Yc(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Fr])za(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(up(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Xc(e))?(za(n,t),n.h==0&&(n.src=null,e[Qc]=null)):So(t)}}}function up(t){return t in ga?ga[t]:ga[t]="on"+t}function D0(t,e){if(t.ba)t=!0;else{e=new pr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Yc(t),t=n.call(s,e)}return t}function Xc(t){return t=t[Qc],t instanceof Co?t:null}var ma="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jc(t){return typeof t=="function"?t:(t[ma]||(t[ma]=function(e){return t.handleEvent(e)}),t[ma])}function Me(){vn.call(this),this.i=new Co(this),this.P=this,this.I=null}Be(Me,vn);Me.prototype[Fr]=!0;Me.prototype.removeEventListener=function(t,e,n,s){lp(this,t,e,n,s)};function Fe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new We(e,t);else if(e instanceof We)e.target=e.target||t;else{var r=e;e=new We(s,t),ip(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=li(o,s,!0,e)&&r}if(o=e.g=t,r=li(o,s,!0,e)&&r,r=li(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=li(o,s,!1,e)&&r}Me.prototype.M=function(){if(Me.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)So(n[s]);delete t.g[e],t.h--}}this.I=null};Me.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Me.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function li(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&za(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Zc=q.JSON.stringify;function N0(){var t=dp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class O0{constructor(){this.h=this.g=null}add(e,n){const s=hp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var hp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new P0,t=>t.reset());class P0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function x0(t){q.setTimeout(()=>{throw t},0)}function fp(t,e){Ga||M0(),Qa||(Ga(),Qa=!0),dp.add(t,e)}var Ga;function M0(){var t=q.Promise.resolve(void 0);Ga=function(){t.then(L0)}}var Qa=!1,dp=new O0;function L0(){for(var t;t=N0();){try{t.h.call(t.g)}catch(n){x0(n)}var e=hp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Qa=!1}function Ao(t,e){Me.call(this),this.h=t||1,this.g=e||q,this.j=ze(this.kb,this),this.l=Date.now()}Be(Ao,Me);M=Ao.prototype;M.ca=!1;M.R=null;M.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Fe(this,"tick"),this.ca&&(el(this),this.start()))}};M.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function el(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}M.M=function(){Ao.X.M.call(this),el(this),delete this.g};function tl(t,e,n){if(typeof t=="function")n&&(t=ze(t,n));else if(t&&typeof t.handleEvent=="function")t=ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function pp(t){t.g=tl(()=>{t.g=null,t.i&&(t.i=!1,pp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class U0 extends vn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pp(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gr(t){vn.call(this),this.h=t,this.g={}}Be(gr,vn);var fh=[];function gp(t,e,n,s){Array.isArray(n)||(n&&(fh[0]=n.toString()),n=fh);for(var r=0;r<n.length;r++){var i=op(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function mp(t){Gc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Yc(e)},t),t.g={}}gr.prototype.M=function(){gr.X.M.call(this),mp(this)};gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ko(){this.g=!0}ko.prototype.Aa=function(){this.g=!1};function F0(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function V0(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ss(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+$0(t,n)+(s?" "+s:"")})}function B0(t,e){t.info(function(){return"TIMEOUT: "+e})}ko.prototype.info=function(){};function $0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Zc(n)}catch{return e}}var Gn={},dh=null;function Ro(){return dh=dh||new Me}Gn.Oa="serverreachability";function yp(t){We.call(this,Gn.Oa,t)}Be(yp,We);function mr(t){const e=Ro();Fe(e,new yp(e))}Gn.STAT_EVENT="statevent";function vp(t,e){We.call(this,Gn.STAT_EVENT,t),this.stat=e}Be(vp,We);function Ze(t){const e=Ro();Fe(e,new vp(e,t))}Gn.Pa="timingevent";function wp(t,e){We.call(this,Gn.Pa,t),this.size=e}Be(wp,We);function Vr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var Do={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},_p={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function nl(){}nl.prototype.h=null;function ph(t){return t.h||(t.h=t.i())}function Ep(){}var Br={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function sl(){We.call(this,"d")}Be(sl,We);function rl(){We.call(this,"c")}Be(rl,We);var Ya;function No(){}Be(No,nl);No.prototype.g=function(){return new XMLHttpRequest};No.prototype.i=function(){return{}};Ya=new No;function $r(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new gr(this),this.O=j0,t=qa?125:void 0,this.T=new Ao(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ip}function Ip(){this.i=null,this.g="",this.h=!1}var j0=45e3,Xa={},Ki={};M=$r.prototype;M.setTimeout=function(t){this.O=t};function Ja(t,e,n){t.K=1,t.v=Po(zt(e)),t.s=n,t.P=!0,Tp(t,null)}function Tp(t,e){t.F=Date.now(),jr(t),t.A=zt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Np(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Ip,t.g=Jp(t.l,n?e:null,!t.s),0<t.N&&(t.L=new U0(ze(t.Ka,t,t.g),t.N)),gp(t.S,t.g,"readystatechange",t.hb),e=t.H?rp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),mr(),F0(t.j,t.u,t.A,t.m,t.U,t.s)}M.hb=function(t){t=t.target;const e=this.L;e&&$t(t)==3?e.l():this.Ka(t)};M.Ka=function(t){try{if(t==this.g)e:{const u=$t(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||qa||this.g&&(this.h.h||this.g.fa()||vh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?mr(3):mr(2)),Oo(this);var n=this.g.aa();this.Y=n;t:if(bp(this)){var s=vh(this.g);t="";var r=s.length,i=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nn(this),Js(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,V0(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hi(a)){var l=a;break t}}l=null}if(n=l)ss(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Za(this,n);else{this.i=!1,this.o=3,Ze(12),Nn(this),Js(this);break e}}this.P?(Sp(this,u,o),qa&&this.i&&u==3&&(gp(this.S,this.T,"tick",this.gb),this.T.start())):(ss(this.j,this.m,o,null),Za(this,o)),u==4&&Nn(this),this.i&&!this.I&&(u==4?Gp(this.l,this):(this.i=!1,jr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),Nn(this),Js(this)}}}catch{}finally{}};function bp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Sp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=H0(t,n),r==Ki){e==4&&(t.o=4,Ze(14),s=!1),ss(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Xa){t.o=4,Ze(15),ss(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ss(t.j,t.m,r,null),Za(t,r);bp(t)&&r!=Ki&&r!=Xa&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ze(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),hl(e),e.K=!0,Ze(11))):(ss(t.j,t.m,n,"[Invalid Chunked Response]"),Nn(t),Js(t))}M.gb=function(){if(this.g){var t=$t(this.g),e=this.g.fa();this.C<e.length&&(Oo(this),Sp(this,t,e),this.i&&t!=4&&jr(this))}};function H0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ki:(n=Number(e.substring(n,s)),isNaN(n)?Xa:(s+=1,s+n>e.length?Ki:(e=e.substr(s,n),t.C=s+n,e)))}M.cancel=function(){this.I=!0,Nn(this)};function jr(t){t.V=Date.now()+t.O,Cp(t,t.O)}function Cp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vr(ze(t.fb,t),e)}function Oo(t){t.B&&(q.clearTimeout(t.B),t.B=null)}M.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(B0(this.j,this.A),this.K!=2&&(mr(),Ze(17)),Nn(this),this.o=2,Js(this)):Cp(this,this.V-t)};function Js(t){t.l.G==0||t.I||Gp(t.l,t)}function Nn(t){Oo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,el(t.T),mp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Za(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ec(n.h,t))){if(!t.J&&ec(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Gi(n),Lo(n);else break e;ul(n),Ze(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Vr(ze(n.bb,n),6e3));if(1>=xp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else On(n,11)}else if((t.J||n.g==t)&&Gi(n),!Hi(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(il(i,i.h),i.h=null))}if(s.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.za=E,we(s.F,s.D,E))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Xp(s,s.H?s.ka:null,s.V),o.J){Mp(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Oo(a),jr(a)),s.g=o}else zp(s);0<n.i.length&&Uo(n)}else l[0]!="stop"&&l[0]!="close"||On(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?On(n,7):ll(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}mr(4)}catch{}}function q0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(To(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function K0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(To(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ap(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(To(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=K0(t),s=q0(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var kp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function z0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Un(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Un){this.h=e!==void 0?e:t.h,zi(this,t.j),this.s=t.s,this.g=t.g,Wi(this,t.m),this.l=t.l,e=t.i;var n=new yr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),gh(this,n),this.o=t.o}else t&&(n=String(t).match(kp))?(this.h=!!e,zi(this,n[1]||"",!0),this.s=qs(n[2]||""),this.g=qs(n[3]||"",!0),Wi(this,n[4]),this.l=qs(n[5]||"",!0),gh(this,n[6]||"",!0),this.o=qs(n[7]||"")):(this.h=!!e,this.i=new yr(null,this.h))}Un.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ks(e,mh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ks(e,mh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ks(n,n.charAt(0)=="/"?Q0:G0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ks(n,X0)),t.join("")};function zt(t){return new Un(t)}function zi(t,e,n){t.j=n?qs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Wi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function gh(t,e,n){e instanceof yr?(t.i=e,J0(t.i,t.h)):(n||(e=Ks(e,Y0)),t.i=new yr(e,t.h))}function we(t,e,n){t.i.set(e,n)}function Po(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ks(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,W0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function W0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var mh=/[#\/\?@]/g,G0=/[#\?:]/g,Q0=/[#\?]/g,Y0=/[#\?@]/g,X0=/#/g;function yr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function wn(t){t.g||(t.g=new Map,t.h=0,t.i&&z0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=yr.prototype;M.add=function(t,e){wn(this),this.i=null,t=Os(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rp(t,e){wn(t),e=Os(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Dp(t,e){return wn(t),e=Os(t,e),t.g.has(e)}M.forEach=function(t,e){wn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};M.oa=function(){wn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};M.W=function(t){wn(this);let e=[];if(typeof t=="string")Dp(this,t)&&(e=e.concat(this.g.get(Os(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return wn(this),this.i=null,t=Os(this,t),Dp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Np(t,e,n){Rp(t,e),0<n.length&&(t.i=null,t.g.set(Os(t,e),zc(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Os(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function J0(t,e){e&&!t.j&&(wn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Rp(this,s),Np(this,r,n))},t)),t.j=e}var Z0=class{constructor(t,e){this.h=t,this.g=e}};function Op(t){this.l=t||eT,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ga&&q.g.Ga()&&q.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eT=10;function Pp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xp(t){return t.h?1:t.g?t.g.size:0}function ec(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function il(t,e){t.g?t.g.add(e):t.h=e}function Mp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Op.prototype.cancel=function(){if(this.i=Lp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Lp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return zc(t.i)}function ol(){}ol.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};ol.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function tT(){this.g=new ol}function nT(t,e,n){const s=n||"";try{Ap(t,function(r,i){let o=r;Ur(r)&&(o=Zc(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function sT(t,e){const n=new ko;if(q.Image){const s=new Image;s.onload=ci(ui,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ci(ui,n,s,"TestLoadImage: error",!1,e),s.onabort=ci(ui,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ci(ui,n,s,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ui(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Hr(t){this.l=t.$b||null,this.j=t.ib||!1}Be(Hr,nl);Hr.prototype.g=function(){return new xo(this.l,this.j)};Hr.prototype.i=function(t){return function(){return t}}({});function xo(t,e){Me.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=al,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(xo,Me);var al=0;M=xo.prototype;M.open=function(t,e){if(this.readyState!=al)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vr(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qr(this)),this.readyState=al};M.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Up(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function Up(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}M.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qr(this):vr(this),this.readyState==3&&Up(this)}};M.Ua=function(t){this.g&&(this.response=this.responseText=t,qr(this))};M.Ta=function(t){this.g&&(this.response=t,qr(this))};M.ga=function(){this.g&&qr(this)};function qr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vr(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var rT=q.JSON.parse;function ke(t){Me.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fp,this.K=this.L=!1}Be(ke,Me);var Fp="",iT=/^https?$/i,oT=["POST","PUT"];M=ke.prototype;M.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ya.g(),this.C=this.u?ph(this.u):ph(Ya),this.g.onreadystatechange=ze(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){yh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=q.FormData&&t instanceof q.FormData,!(0<=ep(oT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$p(this),0<this.B&&((this.K=aT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ze(this.qa,this)):this.A=tl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){yh(this,i)}};function aT(t){return _s&&b0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.qa=function(){typeof Kc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Fe(this,"timeout"),this.abort(8))};function yh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Vp(t),Mo(t)}function Vp(t){t.D||(t.D=!0,Fe(t,"complete"),Fe(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Fe(this,"complete"),Fe(this,"abort"),Mo(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mo(this,!0)),ke.X.M.call(this)};M.Ha=function(){this.s||(this.F||this.v||this.l?Bp(this):this.eb())};M.eb=function(){Bp(this)};function Bp(t){if(t.h&&typeof Kc<"u"&&(!t.C[1]||$t(t)!=4||t.aa()!=2)){if(t.v&&$t(t)==4)tl(t.Ha,0,t);else if(Fe(t,"readystatechange"),$t(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(kp)[1]||null;if(!r&&q.self&&q.self.location){var i=q.self.location.protocol;r=i.substr(0,i.length-1)}s=!iT.test(r?r.toLowerCase():"")}n=s}if(n)Fe(t,"complete"),Fe(t,"success");else{t.m=6;try{var o=2<$t(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Vp(t)}}finally{Mo(t)}}}}function Mo(t,e){if(t.g){$p(t);const n=t.g,s=t.C[0]?ji:null;t.g=null,t.C=null,e||Fe(t,"ready");try{n.onreadystatechange=s}catch{}}}function $p(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function $t(t){return t.g?t.g.readyState:0}M.aa=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};M.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),rT(e)}};function vh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ea=function(){return this.m};M.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function jp(t){let e="";return Gc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function cl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=jp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function Bs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Hp(t){this.Ca=0,this.i=[],this.j=new ko,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Bs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Bs("baseRetryDelayMs",5e3,t),this.ab=Bs("retryDelaySeedMs",1e4,t),this.Za=Bs("forwardChannelMaxRetries",2,t),this.ta=Bs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Op(t&&t.concurrentRequestLimit),this.Fa=new tT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}M=Hp.prototype;M.ma=8;M.G=1;function ll(t){if(qp(t),t.G==3){var e=t.U++,n=zt(t.F);we(n,"SID",t.I),we(n,"RID",e),we(n,"TYPE","terminate"),Kr(t,n),e=new $r(t,t.j,e,void 0),e.K=2,e.v=Po(zt(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=Jp(e.l,null),e.g.da(e.v)),e.F=Date.now(),jr(e)}Yp(t)}function Lo(t){t.g&&(hl(t),t.g.cancel(),t.g=null)}function qp(t){Lo(t),t.u&&(q.clearTimeout(t.u),t.u=null),Gi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function Uo(t){Pp(t.h)||t.m||(t.m=!0,fp(t.Ja,t),t.C=0)}function cT(t,e){return xp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=Vr(ze(t.Ja,t,e),Qp(t,t.C)),t.C++,!0)}M.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new $r(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=rp(i),ip(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Kp(this,r,e),n=zt(this.F),we(n,"RID",t),we(n,"CVER",22),this.D&&we(n,"X-HTTP-Session-Id",this.D),Kr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(jp(i)))+"&"+e:this.o&&cl(n,this.o,i)),il(this.h,r),this.Xa&&we(n,"TYPE","init"),this.O?(we(n,"$req",e),we(n,"SID","null"),r.Z=!0,Ja(r,n,null)):Ja(r,n,e),this.G=2}}else this.G==3&&(t?wh(this,t):this.i.length==0||Pp(this.h)||wh(this))};function wh(t,e){var n;e?n=e.m:n=t.U++;const s=zt(t.F);we(s,"SID",t.I),we(s,"RID",n),we(s,"AID",t.T),Kr(t,s),t.o&&t.s&&cl(s,t.o,t.s),n=new $r(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Kp(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),il(t.h,n),Ja(n,s,e)}function Kr(t,e){t.ia&&Gc(t.ia,function(n,s){we(e,s,n)}),t.l&&Ap({},function(n,s){we(e,s,n)})}function Kp(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ze(t.l.Qa,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{nT(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function zp(t){t.g||t.u||(t.Z=1,fp(t.Ia,t),t.A=0)}function ul(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Vr(ze(t.Ia,t),Qp(t,t.A)),t.A++,!0)}M.Ia=function(){if(this.u=null,Wp(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Vr(ze(this.cb,this),t)}};M.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ze(10),Lo(this),Wp(this))};function hl(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function Wp(t){t.g=new $r(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=zt(t.sa);we(e,"RID","rpc"),we(e,"SID",t.I),we(e,"CI",t.L?"0":"1"),we(e,"AID",t.T),we(e,"TYPE","xmlhttp"),Kr(t,e),t.o&&t.s&&cl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Po(zt(e)),n.s=null,n.P=!0,Tp(n,t)}M.bb=function(){this.v!=null&&(this.v=null,Lo(this),ul(this),Ze(19))};function Gi(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function Gp(t,e){var n=null;if(t.g==e){Gi(t),hl(t),t.g=null;var s=2}else if(ec(t.h,e))n=e.D,Mp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Ro(),Fe(s,new wp(s,n)),Uo(t)}else zp(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&cT(t,e)||s==2&&ul(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:On(t,5);break;case 4:On(t,10);break;case 3:On(t,6);break;default:On(t,2)}}}function Qp(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function On(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ze(t.jb,t);n||(n=new Un("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||zi(n,"https"),Po(n)),sT(n.toString(),s)}else Ze(2);t.G=0,t.l&&t.l.va(e),Yp(t),qp(t)}M.jb=function(t){t?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function Yp(t){if(t.G=0,t.la=[],t.l){const e=Lp(t.h);(e.length!=0||t.i.length!=0)&&(ch(t.la,e),ch(t.la,t.i),t.h.i.length=0,zc(t.i),t.i.length=0),t.l.ua()}}function Xp(t,e,n){var s=n instanceof Un?zt(n):new Un(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Wi(s,s.m);else{var r=q.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Un(null,void 0);s&&zi(i,s),e&&(i.g=e),r&&Wi(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&we(s,n,e),we(s,"VER",t.ma),Kr(t,s),s}function Jp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ke(new Hr({ib:!0})):new ke(t.ra),e.L=t.H,e}function Zp(){}M=Zp.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Qa=function(){};function Qi(){if(_s&&!(10<=Number(S0)))throw Error("Environmental error: no available transport.")}Qi.prototype.g=function(t,e){return new ct(t,e)};function ct(t,e){Me.call(this),this.g=new Hp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!Hi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Hi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ps(this)}Be(ct,Me);ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ze(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Xp(t,null,t.V),Uo(t)};ct.prototype.close=function(){ll(this.g)};ct.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zc(t),t=n);e.i.push(new Z0(e.$a++,t)),e.G==3&&Uo(e)};ct.prototype.M=function(){this.g.l=null,delete this.j,ll(this.g),delete this.g,ct.X.M.call(this)};function eg(t){sl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(eg,sl);function tg(){rl.call(this),this.status=1}Be(tg,rl);function Ps(t){this.g=t}Be(Ps,Zp);Ps.prototype.xa=function(){Fe(this.g,"a")};Ps.prototype.wa=function(t){Fe(this.g,new eg(t))};Ps.prototype.va=function(t){Fe(this.g,new tg)};Ps.prototype.ua=function(){Fe(this.g,"b")};Qi.prototype.createWebChannel=Qi.prototype.g;ct.prototype.send=ct.prototype.u;ct.prototype.open=ct.prototype.m;ct.prototype.close=ct.prototype.close;Do.NO_ERROR=0;Do.TIMEOUT=8;Do.HTTP_ERROR=6;_p.COMPLETE="complete";Ep.EventType=Br;Br.OPEN="a";Br.CLOSE="b";Br.ERROR="c";Br.MESSAGE="d";Me.prototype.listen=Me.prototype.N;ke.prototype.listenOnce=ke.prototype.O;ke.prototype.getLastError=ke.prototype.Na;ke.prototype.getLastErrorCode=ke.prototype.Ea;ke.prototype.getStatus=ke.prototype.aa;ke.prototype.getResponseJson=ke.prototype.Ra;ke.prototype.getResponseText=ke.prototype.fa;ke.prototype.send=ke.prototype.da;var lT=function(){return new Qi},uT=function(){return Ro()},ya=Do,hT=_p,fT=Gn,_h={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},dT=Hr,hi=Ep,pT=ke;const Eh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs="9.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new Pc("@firebase/firestore");function Ih(){return zn.logLevel}function L(t,...e){if(zn.logLevel<=ie.DEBUG){const n=e.map(fl);zn.debug(`Firestore (${xs}): ${t}`,...n)}}function Wt(t,...e){if(zn.logLevel<=ie.ERROR){const n=e.map(fl);zn.error(`Firestore (${xs}): ${t}`,...n)}}function Th(t,...e){if(zn.logLevel<=ie.WARN){const n=e.map(fl);zn.warn(`Firestore (${xs}): ${t}`,...n)}}function fl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t="Unexpected state"){const e=`FIRESTORE (${xs}) INTERNAL ASSERTION FAILED: `+t;throw Wt(e),new Error(e)}function me(t,e){t||W()}function G(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class yT{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(me(typeof s.accessToken=="string"),new gT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new nt(e)}}class vT{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(me(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class wT{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new vT(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _T{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ET{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.A=n.token,new _T(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=IT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ae(t,e){return t<e?-1:t>e?1:0}function Es(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Re(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Re(0,0))}static max(){return new Z(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,s){n===void 0?n=0:n>e.length&&W(),s===void 0?s=e.length-n:s>e.length-n&&W(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return wr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends wr{construct(e,n,s){return new _e(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const TT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends wr{construct(e,n,s){return new qe(e,n,s)}static isValidIdentifier(e){return TT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new B(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new B(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new B(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(_e.fromString(e))}static fromName(e){return new $(_e.fromString(e).popFirst(5))}static empty(){return new $(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new _e(e.slice()))}}function bT(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Z.fromTimestamp(s===1e9?new Re(n+1,0):new Re(n,s));return new gn(r,$.empty(),e)}function ST(t){return new gn(t.readTime,t.key,-1)}class gn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new gn(Z.min(),$.empty(),-1)}static max(){return new gn(Z.max(),$.empty(),-1)}}function CT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==AT)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Wr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dl.at=-1;class Ne{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fi(this.root,e,this.comparator,!1)}getReverseIterator(){return new fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fi(this.root,e,this.comparator,!0)}}class fi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Le.RED,this.left=r!=null?r:Le.EMPTY,this.right=i!=null?i:Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Le(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sh(this.data.getIterator())}getIteratorFrom(e){return new Sh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class Sh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new dt([])}unionWith(e){let n=new De(qe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Es(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ve(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ve(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const RT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(t){if(me(!!t),typeof t=="string"){let e=0;const n=RT.exec(t);if(me(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Is(t){return typeof t=="string"?Ve.fromBase64String(t):Ve.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ig(t){const e=t.mapValue.fields.__previous_value__;return rg(e)?ig(e):e}function _r(t){const e=mn(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Er{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Er("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Er&&e.projectId===this.projectId&&e.database===this.database}}function Fo(t){return t==null}function Yi(t){return t===0&&1/t==-1/0}function NT(t){return typeof t=="number"&&Number.isInteger(t)&&!Yi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rg(t)?4:OT(t)?9007199254740991:10:W()}function Mt(t,e){if(t===e)return!0;const n=Wn(t);if(n!==Wn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _r(t).isEqual(_r(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=mn(s.timestampValue),o=mn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Is(s.bytesValue).isEqual(Is(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ae(s.geoPointValue.latitude)===Ae(r.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ae(s.integerValue)===Ae(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ae(s.doubleValue),o=Ae(r.doubleValue);return i===o?Yi(i)===Yi(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Es(t.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(bh(i)!==bh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Mt(i[a],o[a])))return!1;return!0}(t,e);default:return W()}}function Ir(t,e){return(t.values||[]).find(n=>Mt(n,e))!==void 0}function Ts(t,e){if(t===e)return 0;const n=Wn(t),s=Wn(e);if(n!==s)return ae(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ae(r.integerValue||r.doubleValue),a=Ae(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ch(t.timestampValue,e.timestampValue);case 4:return Ch(_r(t),_r(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Is(r),a=Is(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ae(o[c],a[c]);if(l!==0)return l}return ae(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ae(Ae(r.latitude),Ae(i.latitude));return o!==0?o:ae(Ae(r.longitude),Ae(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ts(o[c],a[c]);if(l)return l}return ae(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===di.mapValue&&i===di.mapValue)return 0;if(r===di.mapValue)return 1;if(i===di.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ae(a[u],l[u]);if(h!==0)return h;const d=Ts(o[a[u]],c[l[u]]);if(d!==0)return d}return ae(a.length,l.length)}(t.mapValue,e.mapValue);default:throw W()}}function Ch(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=mn(t),s=mn(e),r=ae(n.seconds,s.seconds);return r!==0?r:ae(n.nanos,s.nanos)}function fs(t){return tc(t)}function tc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=mn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Is(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=tc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${tc(s.fields[a])}`;return i+"}"}(t.mapValue):W();var e,n}function nc(t){return!!t&&"integerValue"in t}function pl(t){return!!t&&"arrayValue"in t}function Ah(t){return!!t&&"nullValue"in t}function kh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Si(t){return!!t&&"mapValue"in t}function Zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Zs(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function OT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Si(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zs(n)}setAll(e){let n=qe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Zs(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Si(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Si(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Qn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new st(Zs(this.value))}}function og(t){const e=[];return Qn(t.fields,(n,s)=>{const r=new qe([n]);if(Si(s)){const i=og(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ue(e,0,Z.min(),Z.min(),st.empty(),0)}static newFoundDocument(e,n,s){return new Ue(e,1,n,Z.min(),s,0)}static newNoDocument(e,n){return new Ue(e,2,n,Z.min(),st.empty(),0)}static newUnknownDocument(e,n){return new Ue(e,3,n,Z.min(),st.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Rh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new PT(t,e,n,s,r,i,o)}function gl(t){const e=G(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+fs(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Fo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>fs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>fs(s)).join(",")),e.ht=n}return e.ht}function xT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${fs(s.value)}`;var s}).join(", ")}]`),Fo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>fs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>fs(n)).join(",")),`Target(${e})`}function ml(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!jT(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Mt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nh(t.startAt,e.startAt)&&Nh(t.endAt,e.endAt)}function sc(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class rt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new MT(e,n,s):n==="array-contains"?new FT(e,s):n==="in"?new VT(e,s):n==="not-in"?new BT(e,s):n==="array-contains-any"?new $T(e,s):new rt(e,n,s)}static lt(e,n,s){return n==="in"?new LT(e,s):new UT(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Ts(n,this.value)):n!==null&&Wn(this.value)===Wn(n)&&this.ft(Ts(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class MT extends rt{constructor(e,n,s){super(e,n,s),this.key=$.fromName(s.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.ft(n)}}class LT extends rt{constructor(e,n){super(e,"in",n),this.keys=ag("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UT extends rt{constructor(e,n){super(e,"not-in",n),this.keys=ag("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ag(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>$.fromName(s.referenceValue))}class FT extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pl(n)&&Ir(n.arrayValue,this.value)}}class VT extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ir(this.value.arrayValue,n)}}class BT extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ir(this.value.arrayValue,n)}}class $T extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ir(this.value.arrayValue,s))}}class Xi{constructor(e,n){this.position=e,this.inclusive=n}}class ds{constructor(e,n="asc"){this.field=e,this.dir=n}}function jT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Dh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(o.referenceValue),n.key):s=Ts(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Nh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function HT(t,e,n,s,r,i,o,a){return new Gr(t,e,n,s,r,i,o,a)}function yl(t){return new Gr(t)}function Oh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function cg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function lg(t){for(const e of t.filters)if(e.dt())return e.field;return null}function qT(t){return t.collectionGroup!==null}function Tr(t){const e=G(t);if(e._t===null){e._t=[];const n=lg(e),s=cg(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new ds(n)),e._t.push(new ds(qe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ds(qe.keyField(),i))}}}return e._t}function Gt(t){const e=G(t);if(!e.wt)if(e.limitType==="F")e.wt=Rh(e.path,e.collectionGroup,Tr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Tr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ds(i.field,o))}const s=e.endAt?new Xi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Xi(e.startAt.position,e.startAt.inclusive):null;e.wt=Rh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function rc(t,e,n){return new Gr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vo(t,e){return ml(Gt(t),Gt(e))&&t.limitType===e.limitType}function ug(t){return`${gl(Gt(t))}|lt:${t.limitType}`}function ic(t){return`Query(target=${xT(Gt(t))}; limitType=${t.limitType})`}function vl(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):$.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Dh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Tr(n),s)||n.endAt&&!function(r,i,o){const a=Dh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Tr(n),s))}(t,e)}function KT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hg(t){return(e,n)=>{let s=!1;for(const r of Tr(t)){const i=zT(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function zT(t,e,n){const s=t.field.isKeyField()?$.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ts(a,c):W()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yi(e)?"-0":e}}function dg(t){return{integerValue:""+t}}function WT(t,e){return NT(e)?dg(e):fg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this._=void 0}}function GT(t,e,n){return t instanceof Ji?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof br?gg(t,e):t instanceof Sr?mg(t,e):function(s,r){const i=pg(s,r),o=Ph(i)+Ph(s.yt);return nc(i)&&nc(s.yt)?dg(o):fg(s.It,o)}(t,e)}function QT(t,e,n){return t instanceof br?gg(t,e):t instanceof Sr?mg(t,e):n}function pg(t,e){return t instanceof Zi?nc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ji extends Bo{}class br extends Bo{constructor(e){super(),this.elements=e}}function gg(t,e){const n=yg(e);for(const s of t.elements)n.some(r=>Mt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Sr extends Bo{constructor(e){super(),this.elements=e}}function mg(t,e){let n=yg(e);for(const s of t.elements)n=n.filter(r=>!Mt(r,s));return{arrayValue:{values:n}}}class Zi extends Bo{constructor(e,n){super(),this.It=e,this.yt=n}}function Ph(t){return Ae(t.integerValue||t.doubleValue)}function yg(t){return pl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function YT(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof br&&s instanceof br||n instanceof Sr&&s instanceof Sr?Es(n.elements,s.elements,Mt):n instanceof Zi&&s instanceof Zi?Mt(n.yt,s.yt):n instanceof Ji&&s instanceof Ji}(t.transform,e.transform)}class XT{constructor(e,n){this.version=e,this.transformResults=n}}class It{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new It}static exists(e){return new It(void 0,e)}static updateTime(e){return new It(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ci(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $o{}function vg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wl(t.key,It.none()):new Qr(t.key,t.data,It.none());{const n=t.data,s=st.empty();let r=new De(qe.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new _n(t.key,s,new dt(r.toArray()),It.none())}}function JT(t,e,n){t instanceof Qr?function(s,r,i){const o=s.value.clone(),a=Mh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof _n?function(s,r,i){if(!Ci(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Mh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(wg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function er(t,e,n,s){return t instanceof Qr?function(r,i,o,a){if(!Ci(r.precondition,i))return o;const c=r.value.clone(),l=Lh(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof _n?function(r,i,o,a){if(!Ci(r.precondition,i))return o;const c=Lh(r.fieldTransforms,a,i),l=i.data;return l.setAll(wg(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Ci(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function ZT(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=pg(s.transform,r||null);i!=null&&(n===null&&(n=st.empty()),n.set(s.field,i))}return n||null}function xh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Es(n,s,(r,i)=>YT(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qr extends $o{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class _n extends $o{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Mh(t,e,n){const s=new Map;me(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,QT(o,a,n[r]))}return s}function Lh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,GT(i,o,e))}return s}class wl extends $o{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eb extends $o{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,se;function nb(t){switch(t){default:return W();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function _g(t){if(t===void 0)return Wt("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ce.OK:return T.OK;case Ce.CANCELLED:return T.CANCELLED;case Ce.UNKNOWN:return T.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return T.INTERNAL;case Ce.UNAVAILABLE:return T.UNAVAILABLE;case Ce.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ce.NOT_FOUND:return T.NOT_FOUND;case Ce.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ce.ABORTED:return T.ABORTED;case Ce.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ce.DATA_LOSS:return T.DATA_LOSS;default:return W()}}(se=Ce||(Ce={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Qn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return sg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=new Ne($.comparator);function Qt(){return sb}const Eg=new Ne($.comparator);function zs(...t){let e=Eg;for(const n of t)e=e.insert(n.key,n);return e}function Ig(t){let e=Eg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Pn(){return tr()}function Tg(){return tr()}function tr(){return new Ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const rb=new Ne($.comparator),ib=new De($.comparator);function te(...t){let e=ib;for(const n of t)e=e.add(n);return e}const ob=new De(ae);function bg(){return ob}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Yr.createSynthesizedTargetChangeForCurrentChange(e,n)),new jo(Z.min(),s,bg(),Qt(),te())}}class Yr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Yr(Ve.EMPTY_BYTE_STRING,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class Sg{constructor(e,n){this.targetId=e,this.At=n}}class Cg{constructor(e,n,s=Ve.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Uh{constructor(){this.Rt=0,this.bt=Vh(),this.Pt=Ve.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=te(),n=te(),s=te();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:W()}}),new Yr(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Vh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class ab{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Qt(),this.qt=Fh(),this.Kt=new De(ae)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(sc(i))if(s===0){const o=new $(i.path);this.jt(n,o,Ue.newNoDocument(o,Z.min()))}else me(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&sc(a.target)){const c=new $(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Ue.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=te();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new jo(e,n,this.Kt,this.Ut,s);return this.Ut=Qt(),this.qt=Fh(),this.Kt=new De(ae),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new Uh,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new De(ae),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Uh),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Fh(){return new Ne($.comparator)}function Vh(){return new Ne($.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class ub{constructor(e,n){this.databaseId=e,this.gt=n}}function eo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ag(t,e){return t.gt?e.toBase64():e.toUint8Array()}function hb(t,e){return eo(t,e.toTimestamp())}function Ht(t){return me(!!t),Z.fromTimestamp(function(e){const n=mn(e);return new Re(n.seconds,n.nanos)}(t))}function _l(t,e){return function(n){return new _e(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function kg(t){const e=_e.fromString(t);return me(Ng(e)),e}function oc(t,e){return _l(t.databaseId,e.path)}function va(t,e){const n=kg(e);if(n.get(1)!==t.databaseId.projectId)throw new B(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(Rg(n))}function ac(t,e){return _l(t.databaseId,e)}function fb(t){const e=kg(t);return e.length===4?_e.emptyPath():Rg(e)}function cc(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rg(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bh(t,e,n){return{name:oc(t,e),fields:n.value.mapValue.fields}}function db(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(me(l===void 0||typeof l=="string"),Ve.fromBase64String(l||"")):(me(l===void 0||l instanceof Uint8Array),Ve.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?T.UNKNOWN:_g(c.code);return new B(l,c.message||"")}(o);n=new Cg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=va(t,s.document.name),i=Ht(s.document.updateTime),o=new st({mapValue:{fields:s.document.fields}}),a=Ue.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Ai(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=va(t,s.document),i=s.readTime?Ht(s.readTime):Z.min(),o=Ue.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ai([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=va(t,s.document),i=s.removedTargetIds||[];n=new Ai([],i,r,null)}else{if(!("filter"in e))return W();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new tb(r),o=s.targetId;n=new Sg(o,i)}}return n}function pb(t,e){let n;if(e instanceof Qr)n={update:Bh(t,e.key,e.value)};else if(e instanceof wl)n={delete:oc(t,e.key)};else if(e instanceof _n)n={update:Bh(t,e.key,e.data),updateMask:bb(e.fieldMask)};else{if(!(e instanceof eb))return W();n={verify:oc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ji)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof br)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Sr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Zi)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw W()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:hb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W()}(t,e.precondition)),n}function gb(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ht(s.updateTime):Ht(r);return i.isEqual(Z.min())&&(i=Ht(r)),new XT(i,s.transformResults||[])}(n,e))):[]}function mb(t,e){return{documents:[ac(t,e.path)]}}function yb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ac(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ac(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(kh(h.value))return{unaryFilter:{field:es(h.field),op:"IS_NAN"}};if(Ah(h.value))return{unaryFilter:{field:es(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(kh(h.value))return{unaryFilter:{field:es(h.field),op:"IS_NOT_NAN"}};if(Ah(h.value))return{unaryFilter:{field:es(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(h.field),op:Eb(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:es(u.field),direction:_b(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||Fo(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function vb(t){let e=fb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){me(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Dg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ds(rs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Fo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Xi(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Xi(d,h)}(n.endAt)),HT(e,r,o,i,a,"F",c,l)}function wb(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return W()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Dg(t){return t?t.unaryFilter!==void 0?[Tb(t)]:t.fieldFilter!==void 0?[Ib(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Dg(e)).reduce((e,n)=>e.concat(n)):W():[]}function _b(t){return cb[t]}function Eb(t){return lb[t]}function es(t){return{fieldPath:t.canonicalString()}}function rs(t){return qe.fromServerFormat(t.fieldPath)}function Ib(t){return rt.create(rs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}function Tb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=rs(t.unaryFilter.field);return rt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=rs(t.unaryFilter.field);return rt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=rs(t.unaryFilter.field);return rt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=rs(t.unaryFilter.field);return rt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return W()}}function bb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ng(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&JT(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=er(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=er(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Tg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=vg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Es(this.mutations,e.mutations,(n,s)=>xh(n,s))&&Es(this.baseMutations,e.baseMutations,(n,s)=>xh(n,s))}}class El{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){me(e.mutations.length===s.length);let r=rb;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new El(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n,s,r,i=Z.min(),o=Z.min(),a=Ve.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.re=e}}function kb(t){const e=vb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(){this.Ye=new Db}addToCollectionParentIndex(e,n){return this.Ye.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(gn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(gn.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Db{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new De(_e.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new De(_e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new bs(0)}static vn(){return new bs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.changes=new Ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&er(s.mutation,r,dt.empty(),Re.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=te()){const r=Pn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=zs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Pn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,te()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Qt();const o=tr(),a=tr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof _n)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),er(u.mutation,l,u.mutation.getFieldMask(),Re.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Ob(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=tr();let r=new Ne((o,a)=>o-a),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||dt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||te()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Tg();u.forEach(d=>{if(!i.has(d)){const g=vg(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(Pn());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,te())).next(u=>({batchId:a,changes:Ig(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(s=>{let r=zs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=zs();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(l,u){return new Gr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Ue.newInvalidDocument(l)))});let o=zs();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&er(l.mutation,c,dt.empty(),Re.now()),vl(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):b.resolve(Ue.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return b.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ht(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:kb(s.bundledQuery),readTime:Ht(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(){this.overlays=new Ne($.comparator),this.es=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Pn();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=Pn(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ne((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Pn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Pn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return b.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Cb(n,s));let i=this.es.get(n);i===void 0&&(i=te(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(){this.ns=new De(Oe.ss),this.rs=new De(Oe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Oe(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Oe(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new $(new _e([])),s=new Oe(n,e),r=new Oe(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new $(new _e([])),s=new Oe(n,e),r=new Oe(n,e+1);let i=te();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Oe(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Oe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return $.comparator(e.key,n.key)||ae(e._s,n._s)}static os(e,n){return ae(e._s,n._s)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new De(Oe.ss)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Sb(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Oe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Oe(n,0),r=new Oe(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new De(ae);return n.forEach(r=>{const i=new Oe(r,0),o=new Oe(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),b.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const o=new Oe(new $(i),0);let a=new De(ae);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),b.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){me(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return b.forEach(n.mutations,r=>{const i=new Oe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Oe(n,0),r=this.gs.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.Es=e,this.docs=new Ne($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Ue.newInvalidDocument(n))}getEntries(e,n){let s=Qt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ue.newInvalidDocument(r))}),b.resolve(s)}getAllFromCollection(e,n,s){let r=Qt();const i=new $(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||CT(ST(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,r){W()}As(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Fb(this)}getSize(e){return b.resolve(this.size)}}class Fb extends Nb{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.persistence=e,this.Rs=new Ms(n=>gl(n),ml),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Il,this.targetCount=0,this.vs=bs.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),b.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new bs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Dn(n),b.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new dl(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Vb(this),this.indexManager=new Rb,this.remoteDocumentCache=function(s){return new Ub(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Ab(n),this.Ns=new xb(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Mb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Lb(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){L("MemoryPersistence","Starting transaction:",e);const r=new $b(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Ms(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return b.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class $b extends kT{constructor(e){super(),this.currentSequenceNumber=e}}class Tl{constructor(e){this.persistence=e,this.Fs=new Il,this.$s=null}static Bs(e){return new Tl(e)}get Ls(){if(this.$s)return this.$s;throw W()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),b.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ls,s=>{const r=$.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,Z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return b.or([()=>b.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=te(),r=te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new bl(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Mi(e,n,r,s)).next(i=>i||this.Oi(e,n))}ki(e,n){if(Oh(n))return b.resolve(null);let s=Gt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=rc(n,null,"F"),s=Gt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=te(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,rc(n,null,"F")):this.Bi(e,l,n,c)}))})))}Mi(e,n,s,r){return Oh(n)||r.isEqual(Z.min())?this.Oi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Oi(e,n):(Ih()<=ie.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ic(n)),this.Bi(e,o,n,bT(r,-1)))})}Fi(e,n){let s=new De(hg(e));return n.forEach((r,i)=>{vl(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Ih()<=ie.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",ic(n)),this.Ni.getDocumentsMatchingQuery(e,n,gn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new Ne(ae),this.qi=new Ms(i=>gl(i),ml),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function qb(t,e,n,s){return new Hb(t,e,n,s)}async function Og(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=te();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Kb(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(y=>{const E=c.docVersions.get(g);me(E!==null),y.version.compareTo(E)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=te();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Pg(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function zb(t,e){const n=G(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ve.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(y,E,S){return y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,g,u)&&a.push(n.Cs.updateTargetData(i,g))});let c=Qt(),l=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Wb(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(Z.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function Wb(t,e,n){let s=te(),r=te();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Qt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Gb(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Qb(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Vn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function lc(t,e,n){const s=G(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Wr(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function $h(t,e,n){const s=G(t);let r=Z.min(),i=te();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=G(a),h=u.qi.get(l);return h!==void 0?b.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,Gt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:Z.min(),n?i:te())).next(a=>(Yb(s,KT(e),a),{documents:a,Hi:i})))}function Yb(t,e,n){let s=Z.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class jh{constructor(){this.activeTargetIds=bg()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xb{constructor(){this.Lr=new jh,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new jh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ao(e,n);L("RestConnection","Sending: ",o,s);const a={};return this.ho(a,r,i),this.lo(e,o,a,s).then(c=>(L("RestConnection","Received: ",c),c),c=>{throw Th("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+xs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=Zb[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){return new Promise((i,o)=>{const a=new pT;a.listenOnce(hT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ya.NO_ERROR:const l=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(l)),i(l);break;case ya.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new B(T.DEADLINE_EXCEEDED,"Request time out"));break;case ya.HTTP_ERROR:const u=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(y)>=0?y:T.UNKNOWN}(h.status);o(new B(d,h.message))}else o(new B(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(T.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}_o(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=lT(),o=uT(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new dT({})),this.ho(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");L("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new eS({Hr:y=>{h?L("Connection","Not sending because WebChannel is closed:",y):(u||(L("Connection","Opening WebChannel transport."),l.open(),u=!0),L("Connection","WebChannel sending:",y),l.send(y))},Jr:()=>l.close()}),g=(y,E,S)=>{y.listen(E,C=>{try{S(C)}catch(P){setTimeout(()=>{throw P},0)}})};return g(l,hi.EventType.OPEN,()=>{h||L("Connection","WebChannel transport opened.")}),g(l,hi.EventType.CLOSE,()=>{h||(h=!0,L("Connection","WebChannel transport closed"),d.io())}),g(l,hi.EventType.ERROR,y=>{h||(h=!0,Th("Connection","WebChannel transport errored:",y),d.io(new B(T.UNAVAILABLE,"The operation could not be completed")))}),g(l,hi.EventType.MESSAGE,y=>{var E;if(!h){const S=y.data[0];me(!!S);const C=S,P=C.error||((E=C[0])===null||E===void 0?void 0:E.error);if(P){L("Connection","WebChannel received error:",P);const K=P.status;let Q=function(Ie){const Te=Ce[Ie];if(Te!==void 0)return _g(Te)}(K),le=P.message;Q===void 0&&(Q=T.INTERNAL,le="Unknown error status: "+K+" with message "+P.message),h=!0,d.io(new B(Q,le)),l.close()}else L("Connection","WebChannel received:",S),d.ro(S)}}),g(o,fT.STAT_EVENT,y=>{y.stat===_h.PROXY?L("Connection","Detected buffering proxy"):y.stat===_h.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function wa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){return new ub(t,!0)}class xg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.wo=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&L("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.Po=s,this.vo=r,this.Vo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new xg(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Wt(n.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new B(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nS extends Mg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=db(this.It,e),s=function(r){if(!("targetChange"in r))return Z.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?Ht(i.readTime):Z.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=cc(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=sc(a)?{documents:mb(r,a)}:{query:yb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ag(r,i.resumeToken):i.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=eo(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=wb(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=cc(this.It),n.removeTarget=e,this.Bo(n)}}class sS extends Mg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=gb(e.writeResults,e.commitTime),s=Ht(e.commitTime);return this.listener.Zo(s,n)}return me(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=cc(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>pb(this.It,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new B(T.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Vo.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(T.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Vo.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(T.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class iS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Wt(n),this.ou=!1):L("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{Yn(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=G(a);c._u.add(4),await Xr(c),c.gu.set("Unknown"),c._u.delete(4),await qo(c)}(this))})}),this.gu=new iS(s,r)}}async function qo(t){if(Yn(t))for(const e of t.wu)await e(!0)}async function Xr(t){for(const e of t.wu)await e(!1)}function Lg(t,e){const n=G(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Al(n)?Cl(n):Ls(n).ko()&&Sl(n,e))}function Ug(t,e){const n=G(t),s=Ls(n);n.du.delete(e),s.ko()&&Fg(n,e),n.du.size===0&&(s.ko()?s.Fo():Yn(n)&&n.gu.set("Unknown"))}function Sl(t,e){t.yu.Ot(e.targetId),Ls(t).zo(e)}function Fg(t,e){t.yu.Ot(e),Ls(t).Ho(e)}function Cl(t){t.yu=new ab({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Ls(t).start(),t.gu.uu()}function Al(t){return Yn(t)&&!Ls(t).No()&&t.du.size>0}function Yn(t){return G(t)._u.size===0}function Vg(t){t.yu=void 0}async function aS(t){t.du.forEach((e,n)=>{Sl(t,e)})}async function cS(t,e){Vg(t),Al(t)?(t.gu.hu(e),Cl(t)):t.gu.set("Unknown")}async function lS(t,e,n){if(t.gu.set("Online"),e instanceof Cg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await to(t,s)}else if(e instanceof Ai?t.yu.Gt(e):e instanceof Sg?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(Z.min()))try{const s=await Pg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Ve.EMPTY_BYTE_STRING,c.snapshotVersion)),Fg(r,a);const l=new Vn(c.target,a,1,c.sequenceNumber);Sl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){L("RemoteStore","Failed to raise snapshot:",s),await to(t,s)}}async function to(t,e,n){if(!Wr(e))throw e;t._u.add(1),await Xr(t),t.gu.set("Offline"),n||(n=()=>Pg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await qo(t)})}function Bg(t,e){return e().catch(n=>to(t,n,e))}async function Ko(t){const e=G(t),n=yn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;uS(e);)try{const r=await Gb(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,hS(e,r)}catch(r){await to(e,r)}$g(e)&&jg(e)}function uS(t){return Yn(t)&&t.fu.length<10}function hS(t,e){t.fu.push(e);const n=yn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function $g(t){return Yn(t)&&!yn(t).No()&&t.fu.length>0}function jg(t){yn(t).start()}async function fS(t){yn(t).eu()}async function dS(t){const e=yn(t);for(const n of t.fu)e.Xo(n.mutations)}async function pS(t,e,n){const s=t.fu.shift(),r=El.from(s,e,n);await Bg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ko(t)}async function gS(t,e){e&&yn(t).Yo&&await async function(n,s){if(r=s.code,nb(r)&&r!==T.ABORTED){const i=n.fu.shift();yn(n).Oo(),await Bg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ko(n)}var r}(t,e),$g(t)&&jg(t)}async function qh(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const s=Yn(n);n._u.add(3),await Xr(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await qo(n)}async function mS(t,e){const n=G(t);e?(n._u.delete(2),await qo(n)):e||(n._u.add(2),await Xr(n),n.gu.set("Unknown"))}function Ls(t){return t.pu||(t.pu=function(e,n,s){const r=G(e);return r.su(),new nS(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:aS.bind(null,t),Zr:cS.bind(null,t),Wo:lS.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),Al(t)?Cl(t):t.gu.set("Unknown")):(await t.pu.stop(),Vg(t))})),t.pu}function yn(t){return t.Iu||(t.Iu=function(e,n,s){const r=G(e);return r.su(),new sS(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:fS.bind(null,t),Zr:gS.bind(null,t),tu:dS.bind(null,t),Zo:pS.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await Ko(t)):(await t.Iu.stop(),t.fu.length>0&&(L("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new kl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rl(t,e){if(Wt("AsyncQueue",`${e}: ${t}`),Wr(t))return new B(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.comparator=e?(n,s)=>e(n,s)||$.comparator(n.key,s.key):(n,s)=>$.comparator(n.key,s.key),this.keyedMap=zs(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ps;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.Tu=new Ne($.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):W():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ss{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Ss(e,n,ps.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(){this.Au=void 0,this.listeners=[]}}class vS{constructor(){this.queries=new Ms(e=>ug(e),Vo),this.onlineState="Unknown",this.Ru=new Set}}async function wS(t,e){const n=G(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new yS),r)try{i.Au=await n.onListen(s)}catch(o){const a=Rl(o,`Initialization of query '${ic(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Dl(n)}async function _S(t,e){const n=G(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function ES(t,e){const n=G(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Dl(n)}function IS(t,e,n){const s=G(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Dl(t){t.Ru.forEach(e=>{e.next()})}class TS{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ss(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.key=e}}class qg{constructor(e){this.key=e}}class bS{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=te(),this.mutatedKeys=te(),this.Ku=hg(e),this.Gu=new ps(this.Ku)}get Qu(){return this.Lu}ju(e,n){const s=n?n.Wu:new Kh,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=vl(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;d&&g?d.data.isEqual(g.data)?y!==E&&(s.track({type:3,doc:g}),S=!0):this.zu(d,g)||(s.track({type:2,doc:g}),S=!0,(c&&this.Ku(g,c)>0||l&&this.Ku(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),S=!0):d&&!g&&(s.track({type:1,doc:d}),S=!0,(c||l)&&(a=!0)),S&&(g?(o=o.add(g),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,Wu:s,$i:a,mutatedKeys:i}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.Wu.Eu();i.sort((l,u)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return g(h)-g(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Ss(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new Kh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=te(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return e.forEach(s=>{this.qu.has(s)||n.push(new qg(s))}),this.qu.forEach(s=>{e.has(s)||n.push(new Hg(s))}),n}Zu(e){this.Lu=e.Hi,this.qu=te();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return Ss.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class SS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class CS{constructor(e){this.key=e,this.ec=!1}}class AS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Ms(a=>ug(a),Vo),this.ic=new Map,this.rc=new Set,this.oc=new Ne($.comparator),this.uc=new Map,this.cc=new Il,this.ac={},this.hc=new Map,this.lc=bs.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function kS(t,e){const n=FS(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await Qb(n.localStore,Gt(e));n.isPrimaryClient&&Lg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await RS(n,e,s,a==="current")}return r}async function RS(t,e,n,s){t.dc=(u,h,d)=>async function(g,y,E,S){let C=y.view.ju(E);C.$i&&(C=await $h(g.localStore,y.query,!1).then(({documents:Q})=>y.view.ju(Q,C)));const P=S&&S.targetChanges.get(y.targetId),K=y.view.applyChanges(C,g.isPrimaryClient,P);return Wh(g,y.targetId,K.Yu),K.snapshot}(t,u,h,d);const r=await $h(t.localStore,e,!0),i=new bS(e,r.Hi),o=i.ju(r.documents),a=Yr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Wh(t,n,c.Yu);const l=new SS(e,n,i);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function DS(t,e){const n=G(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!Vo(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await lc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ug(n.remoteStore,s.targetId),uc(n,s.targetId)}).catch(zr)):(uc(n,s.targetId),await lc(n.localStore,s.targetId,!0))}async function NS(t,e,n){const s=VS(t);try{const r=await function(i,o){const a=G(i),c=Re.now(),l=o.reduce((d,g)=>d.add(g.key),te());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Qt(),y=te();return a.Gi.getEntries(d,l).next(E=>{g=E,g.forEach((S,C)=>{C.isValidDocument()||(y=y.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(E=>{u=E;const S=[];for(const C of o){const P=ZT(C,u.get(C.key).overlayedDocument);P!=null&&S.push(new _n(C.key,P,og(P.value.mapValue),It.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,S,o)}).next(E=>{h=E;const S=E.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(d,E.batchId,S)})}).then(()=>({batchId:h.batchId,changes:Ig(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new Ne(ae)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await Jr(s,r.changes),await Ko(s.remoteStore)}catch(r){const i=Rl(r,"Failed to persist write");n.reject(i)}}async function Kg(t,e){const n=G(t);try{const s=await zb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?me(o.ec):r.removedDocuments.size>0&&(me(o.ec),o.ec=!1))}),await Jr(n,s,e)}catch(s){await zr(s)}}function zh(t,e,n){const s=G(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=G(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Dl(a)}(s.eventManager,e),r.length&&s.nc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function OS(t,e,n){const s=G(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new Ne($.comparator);o=o.insert(i,Ue.newNoDocument(i,Z.min()));const a=te().add(i),c=new jo(Z.min(),new Map,new De(ae),o,a);await Kg(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Nl(s)}else await lc(s.localStore,e,!1).then(()=>uc(s,e,n)).catch(zr)}async function PS(t,e){const n=G(t),s=e.batch.batchId;try{const r=await Kb(n.localStore,e);Wg(n,s,null),zg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Jr(n,r)}catch(r){await zr(r)}}async function xS(t,e,n){const s=G(t);try{const r=await function(i,o){const a=G(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(me(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Wg(s,e,n),zg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Jr(s,r)}catch(r){await zr(r)}}function zg(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Wg(t,e,n){const s=G(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function uc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(s=>{t.cc.containsKey(s)||Gg(t,s)})}function Gg(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Ug(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Nl(t))}function Wh(t,e,n){for(const s of n)s instanceof Hg?(t.cc.addReference(s.key,e),MS(t,s)):s instanceof qg?(L("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Gg(t,s.key)):W()}function MS(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(L("SyncEngine","New document in limbo: "+n),t.rc.add(s),Nl(t))}function Nl(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new $(_e.fromString(e)),s=t.lc.next();t.uc.set(s,new CS(n)),t.oc=t.oc.insert(n,s),Lg(t.remoteStore,new Vn(Gt(yl(n.path)),s,2,dl.at))}}async function Jr(t,e,n){const s=G(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=bl.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.Wo(r),await async function(a,c){const l=G(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Wr(u))throw u;L("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);l.Ui=l.Ui.insert(h,y)}}}(s.localStore,i))}async function LS(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const s=await Og(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new B(T.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Jr(n,s.ji)}}function US(t,e){const n=G(t),s=n.uc.get(e);if(s&&s.ec)return te().add(s.key);{let r=te();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function FS(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=US.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OS.bind(null,e),e.nc.Wo=ES.bind(null,e.eventManager),e.nc._c=IS.bind(null,e.eventManager),e}function VS(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xS.bind(null,e),e}class BS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Ho(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return qb(this.persistence,new jb,e.initialUser,this.It)}gc(e){return new Bb(Tl.Bs,this.It)}mc(e){return new Xb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $S{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>zh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=LS.bind(null,this.syncEngine),await mS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new vS}createDatastore(e){const n=Ho(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new tS(r));var r;return function(i,o,a,c){return new rS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>zh(this.syncEngine,a,0),o=Hh.C()?new Hh:new Jb,new oS(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new AS(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);L("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Xr(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=nt.UNAUTHENTICATED,this.clientId=ng.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Rl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function qS(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Og(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function KS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zS(t);L("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>qh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>qh(e.remoteStore,i)),t.onlineComponents=e}async function zS(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await qS(t,new BS)),t.offlineComponents}async function Qg(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await KS(t,new $S)),t.onlineComponents}function WS(t){return Qg(t).then(e=>e.syncEngine)}async function Gh(t){const e=await Qg(t),n=e.eventManager;return n.onListen=kS.bind(null,e.syncEngine),n.onUnlisten=DS.bind(null,e.syncEngine),n}const Qh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(t,e,n){if(!n)throw new B(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function GS(t,e,n,s){if(e===!0&&s===!0)throw new B(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yh(t){if(!$.isDocumentKey(t))throw new B(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xh(t){if($.isDocumentKey(t))throw new B(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ol(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function Bn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ol(t);throw new B(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,GS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mT;switch(n.type){case"gapi":const s=n.client;return new wT(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Qh.get(e);n&&(L("ComponentProvider","Removing Datastore"),Qh.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class Zr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Zr(this.firestore,e,this._query)}}class fn extends Zr{constructor(e,n,s){super(e,n,yl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new $(e))}withConverter(e){return new fn(this.firestore,e,this._path)}}function MC(t,e,...n){if(t=Ye(t),Yg("collection","path",e),t instanceof Pl){const s=_e.fromString(e,...n);return Xh(s),new fn(t,null,s)}{if(!(t instanceof ot||t instanceof fn))throw new B(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(_e.fromString(e,...n));return Xh(s),new fn(t.firestore,null,s)}}function QS(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=ng.R()),Yg("doc","path",e),t instanceof Pl){const s=_e.fromString(e,...n);return Yh(s),new ot(t,null,new $(s))}{if(!(t instanceof ot||t instanceof fn))throw new B(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(_e.fromString(e,...n));return Yh(s),new ot(t.firestore,t instanceof fn?t.converter:null,new $(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new xg(this,"async_queue_retry"),this.jc=()=>{const n=wa();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=wa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=wa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new Fn;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Wr(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(s=>{this.qc=s,this.Kc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Wt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(e,n,s){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const r=kl.createAndSchedule(this,e,n,s,i=>this.Jc(i));return this.Uc.push(r),r}Wc(){this.qc&&W()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Zh(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Cs extends Pl{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new YS,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jg(this),this._firestoreClient.terminate()}}function XS(t,e){const n=typeof t=="object"?t:Id(),s=typeof t=="string"?t:e||"(default)";return Mc(n,"firestore").getImmediate({identifier:s})}function Xg(t){return t._firestoreClient||Jg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Jg(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new DT(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new HS(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this._byteString=e}static fromBase64String(e){try{return new As(Ve.fromBase64String(e))}catch(n){throw new B(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new As(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=/^__.*__$/;class ZS{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new _n(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qr(e,this.data,n,this.fieldTransforms)}}class Zg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new _n(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function em(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class Ll{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Ll(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.oa(e),r}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.ea(),r}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return no(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(em(this.na)&&JS.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class eC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||Ho(e)}fa(e,n,s,r=!1){return new Ll({na:e,methodName:n,la:s,path:qe.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function tm(t){const e=t._freezeSettings(),n=Ho(t._databaseId);return new eC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tC(t,e,n,s,r,i={}){const o=t.fa(i.merge||i.mergeFields?2:0,e,n,r);Ul("Data must be an object, but it was:",o,s);const a=nm(s,o);let c,l;if(i.merge)c=new dt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=hc(e,h,n);if(!o.contains(d))throw new B(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);rm(u,d)||u.push(d)}c=new dt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ZS(new st(a),c,l)}class Wo extends xl{_toFieldTransform(e){if(e.na!==2)throw e.na===1?e.aa(`${this._methodName}() can only appear at the top level of your update data`):e.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wo}}function nC(t,e,n,s){const r=t.fa(1,e,n);Ul("Data must be an object, but it was:",r,s);const i=[],o=st.empty();Qn(s,(c,l)=>{const u=Fl(e,c,n);l=Ye(l);const h=r.ua(u);if(l instanceof Wo)i.push(u);else{const d=Go(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new dt(i);return new Zg(o,a,r.fieldTransforms)}function sC(t,e,n,s,r,i){const o=t.fa(1,e,n),a=[hc(e,s,n)],c=[r];if(i.length%2!=0)throw new B(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(hc(e,i[d])),c.push(i[d+1]);const l=[],u=st.empty();for(let d=a.length-1;d>=0;--d)if(!rm(l,a[d])){const g=a[d];let y=c[d];y=Ye(y);const E=o.ua(g);if(y instanceof Wo)l.push(g);else{const S=Go(y,E);S!=null&&(l.push(g),u.set(g,S))}}const h=new dt(l);return new Zg(u,h,o.fieldTransforms)}function Go(t,e){if(sm(t=Ye(t)))return Ul("Unsupported field value:",e,t),nm(t,e);if(t instanceof xl)return function(n,s){if(!em(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Go(o,s.ca(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return WT(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Re.fromDate(n);return{timestampValue:eo(s.It,r)}}if(n instanceof Re){const r=new Re(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:eo(s.It,r)}}if(n instanceof Ml)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof As)return{bytesValue:Ag(s.It,n._byteString)};if(n instanceof ot){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.aa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:_l(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${Ol(n)}`)}(t,e)}function nm(t,e){const n={};return sg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qn(t,(s,r)=>{const i=Go(r,e.ia(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function sm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof Ml||t instanceof As||t instanceof ot||t instanceof xl)}function Ul(t,e,n){if(!sm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ol(n);throw s==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+s)}}function hc(t,e,n){if((e=Ye(e))instanceof zo)return e._internalPath;if(typeof e=="string")return Fl(t,e);throw no("Field path arguments must be of type string or ",t,!1,void 0,n)}const rC=new RegExp("[~\\*/\\[\\]]");function Fl(t,e,n){if(e.search(rC)>=0)throw no(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zo(...e.split("."))._internalPath}catch{throw no(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function no(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new B(T.INVALID_ARGUMENT,a+t+c)}function rm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iC extends im{data(){return super.data()}}function Vl(t,e){return typeof e=="string"?Fl(t,e):e instanceof zo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class om extends im{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ki(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Vl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ki extends om{data(e={}){return super.data(e)}}class oC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ws(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ki(this._firestore,this._userDataWriter,s.key,s,new Ws(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new ki(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ws(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ki(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ws(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:aC(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function aC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lC{}function LC(t,...e){for(const n of e)t=n._apply(t);return t}class uC extends lC{constructor(e,n){super(),this.wa=e,this.ya=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new B(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ds(r,i);return function(a,c){if(cg(a)===null){const l=lg(a);l!==null&&hC(a,l,c.field)}}(s,o),o}(e._query,this.wa,this.ya);return new Zr(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Gr(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function UC(t,e="asc"){const n=e,s=Vl("orderBy",t);return new uC(s,n)}function hC(t,e,n){if(!n.isEqual(e))throw new B(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{convertValue(e,n="none"){switch(Wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){const s={};return Qn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ml(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ig(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(_r(e));default:return null}}convertTimestamp(e){const n=mn(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=_e.fromString(e);me(Ng(s));const r=new Er(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(n)||Wt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class am extends fC{constructor(e){super(),this.firestore=e}convertBytes(e){return new As(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function FC(t,e,n,...s){t=Bn(t,ot);const r=Bn(t.firestore,Cs),i=tm(r);let o;return o=typeof(e=Ye(e))=="string"||e instanceof zo?sC(i,"updateDoc",t._key,e,n,s):nC(i,"updateDoc",t._key,e),Bl(r,[o.toMutation(t._key,It.exists(!0))])}function VC(t){return Bl(Bn(t.firestore,Cs),[new wl(t._key,It.none())])}function BC(t,e){const n=Bn(t.firestore,Cs),s=QS(t),r=dC(t.converter,e);return Bl(n,[tC(tm(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,It.exists(!1))]).then(()=>s)}function $C(t,...e){var n,s,r;t=Ye(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Zh(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Zh(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof ot)l=Bn(t.firestore,Cs),u=yl(t._key.path),c={next:h=>{e[o]&&e[o](pC(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Bn(t,Zr);l=Bn(h.firestore,Cs),u=h._query;const d=new am(l);c={next:g=>{e[o]&&e[o](new oC(l,d,h,g))},error:e[o+1],complete:e[o+2]},cC(t._query)}return function(h,d,g,y){const E=new jS(y),S=new TS(d,E,g);return h.asyncQueue.enqueueAndForget(async()=>wS(await Gh(h),S)),()=>{E.Rc(),h.asyncQueue.enqueueAndForget(async()=>_S(await Gh(h),S))}}(Xg(l),u,a,c)}function Bl(t,e){return function(n,s){const r=new Fn;return n.asyncQueue.enqueueAndForget(async()=>NS(await WS(n),s,r)),r.promise}(Xg(t),e)}function pC(t,e,n){const s=n.docs.get(e._key),r=new am(t);return new om(t,r,e._key,s,new Ws(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){xs=n})(Dr),ws(new $n("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Cs(new yT(n.getProvider("auth-internal")),new ET(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new B(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Er(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),hn(Eh,"3.5.0",t),hn(Eh,"3.5.0","esm2017")})();var gC=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const mC=Symbol();var ef;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ef||(ef={}));function yC(){const t=Em(!0),e=t.run(()=>Tf({}));let n=[],s=[];const r=bc({install(i){r._a=i,i.provide(mC,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!gC?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const vC={apiKey:"AIzaSyAwnCdEJRe5ekWHX31Boy0aD-9gudlIL3w",authDomain:"todo-todo-bc747.firebaseapp.com",projectId:"todo-todo-bc747",storageBucket:"todo-todo-bc747.appspot.com",messagingSenderId:"286643079215",appId:"1:286643079215:web:0825c0e3e77cbab59b9eda"},wC=iE(vC),jC=XS(wC),_C=yC();xv(Bv).use(Zd).use(_C).mount("#app");export{SC as A,jC as B,pc as C,RC as D,BC as E,LC as F,VC as G,FC as H,QS as P,MC as R,UC as U,Lv as _,Je as a,Jy as b,Gy as c,TC as d,ed as e,CC as f,Tf as g,DC as h,bC as i,AC as j,c0 as k,Qy as l,OC as m,Vf as n,Xf as o,IC as p,XE as q,Ay as r,PC as s,EC as t,NC as u,kC as v,oy as w,xC as x,$C as y,kt as z};
