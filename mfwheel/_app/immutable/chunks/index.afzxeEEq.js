import{u as $,n as _,H as y,b as S,d as b,I as E,J as w,K as I,L as p,M as O,N as C,O as x,P as L,Q as M,R as N,S as P,T as R}from"./scheduler.jlYw4Pw6.js";const o=new Set;let d;function T(){d={r:0,c:[],p:d}}function U(){d.r||$(d.c),d=d.p}function j(t,e){t&&t.i&&(o.delete(t),t.i(e))}function V(t,e,n,a){if(t&&t.o){if(o.has(t))return;o.add(t),d.c.push(()=>{o.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function z(t){t&&t.c()}function A(t,e){t&&t.l(e)}function B(t,e,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,n),p(()=>{const f=t.$$.on_mount.map(L).filter(w);t.$$.on_destroy?t.$$.on_destroy.push(...f):$(f),t.$$.on_mount=[]}),i.forEach(p)}function H(t,e){const n=t.$$;n.fragment!==null&&(O(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){t.$$.dirty[0]===-1&&(M.push(t),N(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,n,a,i,f,c=null,v=[-1]){const u=C;x(t);const s=t.$$={fragment:null,ctx:[],props:f,update:_,not_equal:i,bound:y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:y(),dirty:v,skip_bound:!1,root:e.target||u.$$.root};c&&c(s.root);let l=!1;if(s.ctx=n?n(t,e.props||{},(r,h,...g)=>{const m=g.length?g[0]:h;return s.ctx&&i(s.ctx[r],s.ctx[r]=m)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](m),l&&J(t,r)),h}):[],s.update(),l=!0,$(s.before_update),s.fragment=a?a(s.ctx):!1,e.target){if(e.hydrate){P();const r=S(e.target);s.fragment&&s.fragment.l(r),r.forEach(b)}else s.fragment&&s.fragment.c();e.intro&&j(t.$$.fragment),B(t,e.target,e.anchor),R(),E()}x(u)}class F{$$=void 0;$$set=void 0;$destroy(){H(this,1),this.$destroy=_}$on(e,n){if(!w(n))return _;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const K="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(K);export{F as S,j as a,z as b,U as c,A as d,H as e,T as g,D as i,B as m,V as t};
