(()=>{var e,r,t={814:(e,r,t)=>{var o={"./1.js":[741,741],"./2.js":[260,260],"./3.js":[835,835]};function n(e){if(!t.o(o,e))return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=o[e],n=r[0];return t.e(r[1]).then((()=>t(n)))}n.keys=()=>Object.keys(o),n.id=814,e.exports=n}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>e+"."+{260:"8bd987fa33c1ae884b05",741:"f14c89b584c325fdabf3",835:"a05866c3c99f333df0de"}[e]+".js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="webpack-demo:",n.l=(t,o,a,i)=>{if(e[t])e[t].push(o);else{var c,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var s=u[d];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+a){c=s;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",r+a),c.src=t),e[t]=[o];var p=(r,o)=>{c.onerror=c.onload=null,clearTimeout(f);var n=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((e=>e(o))),r)return r(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),l&&document.head.appendChild(c)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.f.j=(r,t)=>{var o=n.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=a);var i=n.p+n.u(r),c=new Error;n.l(i,(t=>{if(n.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,a,[i,c,l]=t,u=0;for(o in c)n.o(c,o)&&(n.m[o]=c[o]);for(l&&l(n),r&&r(t);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[i[u]]=0},t=self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),console.log(1),n(814).forEach((async e=>{const r=await e,t=document.createElement("div");t.innerHTML=r.default.words,document.body.appendChild(t)})),console.log(2)})();