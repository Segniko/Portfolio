!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d468d5cc-3d8a-434c-b100-5cf9d2631af1",e._sentryDebugIdIdentifier="sentry-dbid-d468d5cc-3d8a-434c-b100-5cf9d2631af1")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{51428:function(e,t,n){Promise.resolve().then(n.bind(n,15549)),Promise.resolve().then(n.t.bind(n,45086,23)),Promise.resolve().then(n.t.bind(n,34466,23))},15549:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return v}});var c=n(57437),o=n(2265),a=["light","dark"],r="(prefers-color-scheme: dark)",s="undefined"==typeof window,l=o.createContext(void 0),i=e=>o.useContext(l)?e.children:o.createElement(m,{...e}),d=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:c=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:m=d,defaultTheme:v=c?"system":"light",attribute:b="data-theme",value:g,children:p,nonce:w}=e,[_,S]=o.useState(()=>h(i,v)),[k,T]=o.useState(()=>h(i)),E=g?Object.values(g):m,C=o.useCallback(e=>{let t=e;if(!t)return;"system"===e&&c&&(t=y());let o=g?g[t]:t,r=n?f():null,l=document.documentElement;if("class"===b?(l.classList.remove(...E),o&&l.classList.add(o)):o?l.setAttribute(b,o):l.removeAttribute(b),s){let e=a.includes(v)?v:null,n=a.includes(t)?t:e;l.style.colorScheme=n}null==r||r()},[]),I=o.useCallback(e=>{let t="function"==typeof e?e(e):e;S(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),x=o.useCallback(e=>{T(y(e)),"system"===_&&c&&!t&&C("system")},[_,t]);o.useEffect(()=>{let e=window.matchMedia(r);return e.addListener(x),x(e),()=>e.removeListener(x)},[x]),o.useEffect(()=>{let e=e=>{e.key===i&&I(e.newValue||v)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[I]),o.useEffect(()=>{C(null!=t?t:_)},[t,_]);let N=o.useMemo(()=>({theme:_,setTheme:I,forcedTheme:t,resolvedTheme:"system"===_?k:_,themes:c?[...m,"system"]:m,systemTheme:c?k:void 0}),[_,I,t,k,c,m]);return o.createElement(l.Provider,{value:N},o.createElement(u,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:c,enableColorScheme:s,storageKey:i,themes:m,defaultTheme:v,attribute:b,value:g,children:p,attrs:E,nonce:w}),p)},u=o.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:c,enableSystem:s,enableColorScheme:l,defaultTheme:i,value:d,attrs:m,nonce:u}=e,h="system"===i,f="class"===c?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(m.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(c,"',s='setAttribute';"),y=l?(a.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=d?d[e]:e,r=t?e+"|| ''":"'".concat(o,"'"),s="";return l&&n&&!t&&a.includes(e)&&(s+="d.style.colorScheme = '".concat(e,"';")),"class"===c?t||o?s+="c.add(".concat(r,")"):s+="null":o&&(s+="d[s](n,".concat(r,")")),s},b=t?"!function(){".concat(f).concat(v(t),"}()"):s?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(r,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(v(d?"x[e]":"e",!0),"}").concat(h?"":"else{"+v(i,!1,!1)+"}").concat(y,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(v(d?"x[e]":"e",!0),"}else{").concat(v(i,!1,!1),";}").concat(y,"}catch(t){}}();");return o.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:b}})}),h=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(r)),e.matches?"dark":"light");function v(e){let{children:t,...n}=e;return(0,c.jsx)(i,{...n,"data-sentry-element":"NextThemesProvider","data-sentry-component":"ThemeProvider","data-sentry-source-file":"provider.tsx",children:t})}},34466:function(){},45086:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}}},function(e){e.O(0,[220,991,971,399,744],function(){return e(e.s=51428)}),_N_E=e.O()}]);