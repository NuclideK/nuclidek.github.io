import{s as u,e as r,i as d,n as c,d as l,a as _,t as h,c as b,b as g,f as k,g as a,h as z,j as p}from"./scheduler.jlYw4Pw6.js";import{S as w,i as y}from"./index.afzxeEEq.js";function m(n){let e,i;return{c(){e=_("p"),i=h(n[0]),this.h()},l(t){e=b(t,"P",{style:!0});var s=g(e);i=k(s,n[0]),s.forEach(l),this.h()},h(){a(e,"font-size",n[2]),a(e,"font-weight","bold"),a(e,"background",n[1]),a(e,"background-clip","text"),a(e,"-webkit-background-clip","text"),a(e,"-webkit-text-fill-color","transparent")},m(t,s){d(t,e,s),z(e,i)},p(t,s){s&1&&p(i,t[0]),s&4&&a(e,"font-size",t[2]),s&2&&a(e,"background",t[1])},d(t){t&&l(e)}}}function C(n){let e,i=n[0]&&n[1]&&n[2]&&m(n);return{c(){i&&i.c(),e=r()},l(t){i&&i.l(t),e=r()},m(t,s){i&&i.m(t,s),d(t,e,s)},p(t,[s]){t[0]&&t[1]&&t[2]?i?i.p(t,s):(i=m(t),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null)},i:c,o:c,d(t){t&&l(e),i&&i.d(t)}}}function S(n,e,i){let{message:t}=e,{color:s}=e,{size:f}=e;return n.$$set=o=>{"message"in o&&i(0,t=o.message),"color"in o&&i(1,s=o.color),"size"in o&&i(2,f=o.size)},[t,s,f]}class E extends w{constructor(e){super(),y(this,e,S,C,u,{message:0,color:1,size:2})}}export{E as C};
