(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{9060:(e,t,n)=>{Promise.resolve().then(n.bind(n,766)),Promise.resolve().then(n.bind(n,96)),Promise.resolve().then(n.bind(n,3479)),Promise.resolve().then(n.t.bind(n,3704,23)),Promise.resolve().then(n.bind(n,8308)),Promise.resolve().then(n.t.bind(n,3999,23)),Promise.resolve().then(n.t.bind(n,4343,23))},3479:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(5155),a=n(2115);t.default=function(e){let{html:t,height:n=null,width:i=null,children:o,dataNtpc:l=""}=e;return(0,a.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(l)}})},[l]),(0,r.jsxs)(r.Fragment,{children:[o,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=i?"".concat(i,"px"):"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:t}}):null]})}},766:(e,t,n)=>{"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let a=n(5155),i=n(2115),o=function(e){return e&&e.__esModule?e:{default:e}}(n(6584));t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===r&&(r=n),(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(n,"'] = window['").concat(n,"'] || [];\n          function gtag(){window['").concat(n,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"');")}}),(0,a.jsx)(o.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===r){console.warn("@next/third-parties: GA has not been initialized");return}window[r]?window[r].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(r," does not exist"))}},96:(e,t,n)=>{"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let a=n(5155),i=n(2115),o=function(e){return e&&e.__esModule?e:{default:e}}(n(6584));t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:l,preview:s,dataLayer:u}=e;void 0===r&&(r=n);let d="dataLayer"!==n?"&l=".concat(n):"";return(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(u?"w[l].push(".concat(JSON.stringify(u),")"):"","\n      })(window,'").concat(n,"');")}}),(0,a.jsx)(o.default,{id:"_next-gtm","data-ntpc":"GTM",src:"https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(d).concat(l?"&gtm_auth=".concat(l):"").concat(s?"&gtm_preview=".concat(s,"&gtm_cookies_win=x"):"")})]})},t.sendGTMEvent=e=>{if(void 0===r){console.warn("@next/third-parties: GTM has not been initialized");return}window[r]?window[r].push(e):console.warn("@next/third-parties: GTM dataLayer ".concat(r," does not exist"))}},6584:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a.a});var r=n(3704),a=n.n(r),i={};for(let e in r)"default"!==e&&(i[e]=()=>r[e]);n.d(t,i)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3704:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return y},handleClientScriptLoad:function(){return h},initScriptLoader:function(){return m}});let r=n(306),a=n(9955),i=n(5155),o=r._(n(7650)),l=a._(n(2115)),s=n(1147),u=n(2815),d=n(8571),c=new Map,f=new Set,g=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},p=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:i,children:o="",strategy:l="afterInteractive",onError:s,stylesheets:d}=e,p=n||t;if(p&&f.has(p))return;if(c.has(t)){f.add(p),c.get(t).then(r,s);return}let h=()=>{a&&a(),f.add(p)},m=document.createElement("script"),_=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),h()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});i?(m.innerHTML=i.__html||"",h()):o?(m.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",h()):t&&(m.src=t,c.set(t,_)),(0,u.setAttributesFromProps)(m,e),"worker"===l&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",l),d&&g(d),document.body.appendChild(m)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>p(e))}):p(e)}function m(e){e.forEach(h),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function _(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:u="afterInteractive",onError:c,stylesheets:g,...h}=e,{updateScripts:m,scripts:_,getIsSsr:y,appDir:b,nonce:v}=(0,l.useContext)(s.HeadManagerContext),w=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;w.current||(a&&e&&f.has(e)&&a(),w.current=!0)},[a,t,n]);let x=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!x.current&&("afterInteractive"===u?p(e):"lazyOnload"===u&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>p(e))})),x.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(m?(_[u]=(_[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:c,...h}]),m(_)):y&&y()?f.add(t||n):y&&!y()&&p(e)),b){if(g&&g.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(o.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:v,crossOrigin:h.crossOrigin}:{as:"script",nonce:v,crossOrigin:h.crossOrigin}),(0,i.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===u&&n&&o.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:v,crossOrigin:h.crossOrigin}:{as:"script",nonce:v,crossOrigin:h.crossOrigin})}return null}Object.defineProperty(_,"__nextScript",{value:!0});let y=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return i}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},r=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function a(e){return["async","defer","noModule"].includes(e)}function i(e,t){for(let[i,o]of Object.entries(t)){if(!t.hasOwnProperty(i)||r.includes(i)||void 0===o)continue;let l=n[i]||i.toLowerCase();"SCRIPT"===e.tagName&&a(l)?e[l]=!!o:e.setAttribute(l,String(o)),(!1===o||"SCRIPT"===e.tagName&&a(l)&&(!o||"false"===o))&&(e.setAttribute(l,""),e.removeAttribute(l))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8308:(e,t,n)=>{"use strict";n.d(t,{D:()=>u,ThemeProvider:()=>s});var r=n(5155),a=n(2115);let i={setTheme:()=>{},logoUrl:"/images/logo.png",aboutUrl:"/images/shikhar.jpeg",aboutUrlSmall:"/images/shikhar.jpeg"},o={setTheme:()=>{},logoUrl:"/images/logo-light.png",aboutUrl:"/images/shikhar.jpeg",aboutUrlSmall:"/images/shikhar.jpeg"},l=a.createContext(i),s=e=>{let{initialTheme:t,children:n}=e,[s,u]=a.useState(t);return(0,r.jsx)(l.Provider,{value:{..."light"===s?o:i,setTheme:u},children:n})},u=()=>a.useContext(l)},3999:()=>{},4343:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[743,441,517,358],()=>t(9060)),_N_E=e.O()}]);