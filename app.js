!function(){var e={f:{},m:{},r:function(t){var n=e.m[t];if(n)return n.m.exports;var s=e.f[t];return s?((n=e.m[t]={}).exports={},n.m={exports:n.exports},s.call(n.exports,n.m,n.exports),n.m.exports):void 0}};e.f[0]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});const s=e.r(2),r=e.r(1);function o(e,t,n){const o=n.join(" ");return s.wire(r.$store,`:${t}`)`
    <button
      id=${e}
      class="button is-dark is-large"
      onclick=${t=>r.$store[`${e}Timer`]()}
      aria-label=${`${e} button`}
    >
      <i class=${o}></i>
    </button>
  `}function i({minutes:e,seconds:t}){s.bind(document.body)`
    <style>${"\n    #message {\n      color: #DDD;\n      font-size: 50px;\n      margin-bottom: 20px;\n    }\n\n    #timer {\n      font-size: 200px;\n      line-height: 1;\n      margin-bottom: 40px;\n    }\n\n    a {\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      color: #fff;\n      font-size: 18px;\n      text-decoration: none;\n    }\n\n    a:hover {\n      text-decoration: underline;\n    }\n  "}</style>

    <section id="app" class="hero is-info is-fullheight is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          
          <h2 class="title is-6">${r.$store.getQuote()}</h2>
          
          <div id="timer">
            <span id="minutes">${e}</span>
            <span id="middle">:</span>
            <span id="seconds">${t}</span>
          </div>

          <div id="buttons">
            ${r.$store.isPaused?o("start","play",["far","fa-play-circle"]):o("stop","play",["far","fa-pause-circle"])}
            
            ${o("reset","reset",["fas","fa-undo"])}
          </div>
          
        </div>
      </div>
    </section>

    <a href="https://github.com/alexandre-mouton-brady/pomodoro">Source Code</a>
  `}r.$store.setRenderer(i),i({minutes:r.$store.timer.getMinutes(),seconds:r.$store.timer.getSeconds()})},e.f[1]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});class n{constructor({minutes:e,seconds:t}){this.ticked=0,this.minutes=e,this.seconds=t}format(e){return e>=0&&e<10?`0${e.toString()}`:e.toString()}tick(){const{minutes:e,seconds:t,format:n}=this;return 0===t?(this.seconds=59,this.minutes=0===e?59:this.minutes-1):this.seconds=this.seconds-1,this.ticked=this.ticked+1,{minutes:n(this.minutes),seconds:n(this.seconds),ticked:this.ticked}}getMinutes(){return this.format(this.minutes)}getSeconds(){return this.format(this.seconds)}}t.$store=new class{constructor(){this.render=null,this.timerInterval=null,this.timer=new n({minutes:25,seconds:0}),this.isPaused=!0,this.quotes=["Only I can change my life. No one can do it for me.","In order to succeed, we must first believe that we can.","A will finds a way.","The secret of getting ahead is getting started.","If you can dream it, you can do it.","It always seems impossible until it's done.","What you do today can improve all your tomorrows.","Problems are not stop signs, they are guidelines."],this.currentQuote=0}startTimer(){this.isPaused=!1,this.timerInterval=setInterval(()=>{const{minutes:e,seconds:t,ticked:n}=this.timer.tick();"00"!==e||"00"!==t?(n%10==0&&this.nextQuote(),this.render({minutes:e,seconds:t})):this.resetTimer()},1e3),this.render({minutes:this.timer.getMinutes()||"25",seconds:this.timer.getSeconds()||"00"})}stopTimer(){clearInterval(this.timerInterval),this.isPaused=!0,this.render({minutes:this.timer.getMinutes(),seconds:this.timer.getSeconds()})}resetTimer(){clearInterval(this.timerInterval),this.timer=new n({minutes:25,seconds:0}),this.isPaused=!0,this.render({minutes:this.timer.getMinutes(),seconds:this.timer.getSeconds()})}nextQuote(){const{currentQuote:e,quotes:t}=this;e>=t.length-1?this.currentQuote=0:this.currentQuote=this.currentQuote+1}getQuote(){return this.quotes[this.currentQuote]}setRenderer(e){this.render=e}}},e.f[2]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});const s=e.r(3),r=e.r(6),o=e.r(7);n.wire=o.default;const i=e.r(13),l=e.r(17),a=e=>i.default.bind(e);n.bind=a;const c=r.default.define;function d(e){return arguments.length<2?null==e?o.content("html"):"string"==typeof e?d.wire(null,e):"raw"in e?o.content("html")(e):"nodeType"in e?d.bind(e):o.weakly(e,"html"):("raw"in e?o.content("html"):d.wire).apply(null,arguments)}d.Component=s.default,d.bind=a,d.define=c,d.diff=l.default,d.hyper=d,d.wire=o.default,s.setup(o.content),n.default=d},e.f[3]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});const s=e.r(5);function r(){}n.default=r,n.setup=function(e){const t=new s.WeakMap,n=Object.create;Object.defineProperties(r,{for:{configurable:!0,value(e,r){return((e,t,r)=>{switch(typeof r){case"object":case"function":const o=t.w||(t.w=new s.WeakMap);return o.get(r)||((e,t,n)=>(e.set(t,n),n))(o,r,new e);default:const i=t.p||(t.p=n(null));return i[r]||(i[r]=new e)}})(this,t.get(e)||(e=>{const n={w:null,p:null};return t.set(e,n),n})(e),null==r?"default":r)}}}),Object.defineProperties(r.prototype,{handleEvent:{value(e){const t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:o("html",e),svg:o("svg",e),state:o("state",function(){return this.defaultState}),defaultState:{get:()=>({})},setState:{value(e,t){const n=this.state,s="function"==typeof e?e.call(this,n):e;for(const e in s)n[e]=s[e];return!1!==t&&this.render(),this}}})};const o=(e,t)=>{const n="_"+e+"$";return{get(){return this[n]||(this[e]=t.call(this,e))},set(e){Object.defineProperty(this,n,{configurable:!0,value:e})}}}},e.f[4]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.G=document.defaultView,t.ELEMENT_NODE=1,t.TEXT_NODE=3,t.COMMENT_NODE=8,t.DOCUMENT_FRAGMENT_NODE=11,t.VOID_ELEMENTS=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i,t.OWNER_SVG_ELEMENT="ownerSVGElement",t.SVG_NAMESPACE="http://www.w3.org/2000/svg",t.CONNECTED="connected",t.DISCONNECTED="dis"+t.CONNECTED,t.EXPANDO="_hyper: ",t.SHOULD_USE_TEXT_CONTENT=/^style|textarea$/i,t.UID=t.EXPANDO+(Math.random()*new Date|0)+";",t.UIDC="\x3c!--"+t.UID+"--\x3e"},e.f[5]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});const s=e.r(4);let r=s.G.Event;n.Event=r;try{new r("Event")}catch(e){n.Event=r=function(e){const t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}n.Map=s.G.Map||function(){const e=[],t=[];return{get:n=>t[e.indexOf(n)],set(n,s){t[e.push(n)-1]=s}}},n.WeakMap=s.G.WeakMap||function(){return{get:e=>e[s.UID],set(e,t){Object.defineProperty(e,s.UID,{configurable:!0,value:t})}}},n.WeakSet=s.G.WeakSet||function(){const e=new n.WeakMap;return{add(t){e.set(t,!0)},has:t=>!0===e.get(t)}},n.isArray=Array.isArray||(e=>t=>"[object Array]"===e.call(t))({}.toString),n.trim=s.UID.trim||function(){return this.replace(/^\s+|\s+$/g,"")}},e.f[6]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});const n={},s=[],r=n.hasOwnProperty;let o=0;t.default={define:(e,t)=>{e in n||(o=s.push(e)),n[e]=t},invoke:(e,t)=>{for(let i=0;i<o;i++){let o=s[i];if(r.call(e,o))return n[o](e[o],t)}}}},e.f[7]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});const s=e.r(4),r=e.r(5),o=e.r(8),i=e.r(9),l=e.r(12),a=e.r(13),c=new r.WeakMap,d=e=>{let t,n,r,l,c;return function(d){d=i.unique(d);let u=l!==d;return u&&(l=d,r=o.fragment(document),n="svg"===e?document.createElementNS(s.SVG_NAMESPACE,"svg"):r,c=a.default.bind(n)),c.apply(null,arguments),u&&("svg"===e&&i.append(r,i.slice.call(n.childNodes)),t=f(r)),t}};n.content=d;const u=(e,t)=>{const n=t.indexOf(":");let s=c.get(e),r=t;return-1<n&&(r=t.slice(n+1),t=t.slice(0,n)||"html"),s||c.set(e,s={}),s[r]||(s[r]=d(t))};n.weakly=u;const f=e=>{const t=e.childNodes,n=t.length,o=[];for(let e=0;e<n;e++){let n=t[e];n.nodeType!==s.ELEMENT_NODE&&0===r.trim.call(n.textContent).length||o.push(n)}return 1===o.length?o[0]:new l.default(o)};n.default=((e,t)=>null==e?d(t||"html"):u(e,t||"html"))},e.f[8]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=((e,n)=>t.doc(e).createElement(n)),t.doc=(e=>e.ownerDocument||e),t.fragment=(e=>t.doc(e).createDocumentFragment()),t.text=((e,n)=>t.doc(e).createTextNode(n))},e.f[9]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});const s=e.r(10),r=e.r(4),o=e.r(11),i=e.r(8);n.append=o.hasAppend?(e,t)=>{e.append.apply(e,t)}:(e,t)=>{const n=t.length;for(let s=0;s<n;s++)e.appendChild(t[s])};const l=new RegExp("("+s.attrName+"=)(['\"]?)"+r.UIDC+"\\2","gi"),a=(e,t,n,s)=>"<"+t+n.replace(l,c)+s,c=(e,t,n)=>t+(n||'"')+r.UID+(n||'"');n.createFragment=((e,t)=>(r.OWNER_SVG_ELEMENT in e?h:f)(e,t.replace(s.attrSeeker,a)));const d=o.hasDoomedCloneNode?e=>{const t=e.cloneNode(),n=e.childNodes||[],s=n.length;for(let e=0;e<s;e++)t.appendChild(d(n[e]));return t}:e=>e.cloneNode(!0);n.importNode=o.hasImportNode?(e,t)=>e.importNode(t,!0):(e,t)=>d(t),n.slice=[].slice,n.unique=(e=>u(e));let u=e=>{if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((r.G.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){const e={};u=(t=>{const n="_"+t.join(r.UID);return e[n]||(e[n]=t)})}else u=(e=>e);return u(e)};const f=o.hasContent?(e,t)=>{const n=i.create(e,"template");return n.innerHTML=t,n.content}:(e,t)=>{const s=i.create(e,"template"),r=i.fragment(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){const e=RegExp.$1;s.innerHTML="<table>"+t+"</table>",n.append(r,n.slice.call(s.querySelectorAll(e)))}else s.innerHTML=t,n.append(r,n.slice.call(s.childNodes));return r},h=o.hasContent?(e,t)=>{const s=i.fragment(e),o=i.doc(e).createElementNS(r.SVG_NAMESPACE,"svg");return o.innerHTML=t,n.append(s,n.slice.call(o.childNodes)),s}:(e,t)=>{const s=i.fragment(e),o=i.create(e,"div");return o.innerHTML='<svg xmlns="'+r.SVG_NAMESPACE+'">'+t+"</svg>",n.append(s,n.slice.call(o.firstChild.childNodes)),s}},e.f[10]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});const n=" \\f\\n\\r\\t",s="[ "+n+"]+[^  \\f\\n\\r\\t\\/>\"'=]+";t.attrName=s;const r="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",o="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",i=new RegExp(r+s+o+"+)([ "+n+"]*/?>)","g");t.attrSeeker=i;const l=new RegExp(r+s+o+"*)([ "+n+"]*/>)","g");t.selfClosing=l},e.f[11]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});const s=e.r(8),r=s.fragment(document);n.hasAppend="append"in r,n.hasContent="content"in s.create(document,"template"),r.appendChild(s.text(r,"g")),r.appendChild(s.text(r,"")),n.hasDoomedCloneNode=1===r.cloneNode(!0).childNodes.length,n.hasImportNode="importNode"in document},e.f[12]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});const s=e.r(9),r=e.r(8);function o(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}n.default=o,o.prototype.insert=function(){const e=r.fragment(this.first);return s.append(e,this.childNodes),e},o.prototype.remove=function(){const e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{const n=r.doc(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e}},e.f[13]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});const s=e.r(5),r=e.r(4),o=e.r(14),i=e.r(9),l=e.r(10),a=new s.WeakMap,c=new s.Map;function d(){const e=arguments.length;for(let t=1;t<e;t++)this[t-1](arguments[t])}const u=l.selfClosing,f=(e,t,n)=>r.VOID_ELEMENTS.test(t)?e:"<"+t+n+"></"+t+">";n.default=function(e){const t=a.get(this);return t&&t.template===i.unique(e)?d.apply(t.updates,arguments):function(e){e=i.unique(e);const t=c.get(e)||function(e){const t=[],n=e.join(r.UIDC).replace(u,f),s=i.createFragment(this,n);o.default.find(s,t,e.slice());const l={fragment:s,paths:t};return c.set(e,l),l}.call(this,e),n=i.importNode(this.ownerDocument,t.fragment),s=o.default.create(n,t.paths);a.set(this,{template:e,updates:s}),d.apply(s,arguments),this.textContent="",this.appendChild(n)}.apply(this,arguments),this}},e.f[14]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});const s=e.r(4),r=e.r(3),o=e.r(12),i=e.r(15),l=e.r(16),a=e.r(6),c=e.r(17),d=e.r(8),u=e.r(5),f=e.r(9),h=new u.WeakSet;function p(){}p.prototype=Object.create(null);const m=e=>({html:e}),g=(e,t)=>"ELEMENT_NODE"in e?e:e.constructor===o.default?1/t<0?t?e.remove():e.last:t?e.insert():e.first:g(e.render(),t),E=(e,t,n)=>{const r=e.childNodes,o=r.length;for(let l=0;l<o;l++){let o=r[l];switch(o.nodeType){case s.ELEMENT_NODE:N(o,t,n),E(o,t,n);break;case s.COMMENT_NODE:o.textContent===s.UID&&(n.shift(),t.push(s.SHOULD_USE_TEXT_CONTENT.test(e.nodeName)?i.default.create("text",e):i.default.create("any",o)));break;case s.TEXT_NODE:s.SHOULD_USE_TEXT_CONTENT.test(e.nodeName)&&u.trim.call(o.textContent)===s.UIDC&&(n.shift(),t.push(i.default.create("text",e)))}}},N=(e,t,n)=>{const r=new p,o=e.attributes,l=f.slice.call(o),a=[],c=l.length;for(let e=0;e<c;e++){const c=l[e];if(c.value===s.UID){const e=c.name;if(!(e in r)){const s=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");r[e]=o[s]||o[s.toLowerCase()],t.push(i.default.create("attr",r[e],s))}a.push(c)}}const u=a.length;for(let t=0;t<u;t++)e.removeAttributeNode(a[t]);const h=e.nodeName;if(/^script$/i.test(h)){const t=d.create(e,h);for(let e=0;e<o.length;e++)t.setAttributeNode(o[e].cloneNode(!0));t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}},v=(e,t)=>{t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(m).then(t):Promise.resolve(a.default.invoke(e,t)).then(t)},b=e=>null!=e&&"then"in e,y=(e,t)=>{let n,i=!1;const l=h=>{switch(typeof h){case"string":case"number":case"boolean":i?n!==h&&(n=h,t[0].textContent=h):(i=!0,n=h,t=c.default(e.parentNode,t,[d.text(e,h)],g,e));break;case"object":case"undefined":if(null==h){i=!1,t=c.default(e.parentNode,t,[],g,e);break}default:if(i=!1,n=h,u.isArray(h))if(0===h.length)t.length&&(t=c.default(e.parentNode,t,[],g,e));else switch(typeof h[0]){case"string":case"number":case"boolean":l({html:h});break;case"object":if(u.isArray(h[0])&&(h=h.concat.apply([],h)),b(h[0])){Promise.all(h).then(l);break}default:t=c.default(e.parentNode,t,h,g,e)}else(e=>"ELEMENT_NODE"in e||e instanceof o.default||e instanceof r.default)(h)?t=c.default(e.parentNode,t,h.nodeType===s.DOCUMENT_FRAGMENT_NODE?f.slice.call(h.childNodes):[h],g,e):b(h)?h.then(l):"placeholder"in h?v(h,l):"text"in h?l(String(h.text)):"any"in h?l(h.any):"html"in h?t=c.default(e.parentNode,t,f.slice.call(f.createFragment(e,[].concat(h.html).join("")).childNodes),g,e):l("length"in h?f.slice.call(h):a.default.invoke(h,l))}};return l},_=(e,t,n)=>{const r=s.OWNER_SVG_ELEMENT in e;let o;if("style"===t)return l.default(e,n,r);if(/^on/.test(t)){let n=t.slice(2);return n===s.CONNECTED||n===s.DISCONNECTED?(M&&(M=!1,function(){const e=(e,n)=>{const r=new u.Event(n),o=e.length;for(let n=0;n<o;n++){let o=e[n];o.nodeType===s.ELEMENT_NODE&&t(o,r)}},t=(e,n)=>{h.has(e)&&e.dispatchEvent(n);const s=e.children,r=s.length;for(let e=0;e<r;e++)t(s[e],n)};try{new MutationObserver(t=>{const n=t.length;for(let r=0;r<n;r++){let n=t[r];e(n.removedNodes,s.DISCONNECTED),e(n.addedNodes,s.CONNECTED)}}).observe(document,{subtree:!0,childList:!0})}catch(t){document.addEventListener("DOMNodeRemoved",t=>{e([t.target],s.DISCONNECTED)},!1),document.addEventListener("DOMNodeInserted",t=>{e([t.target],s.CONNECTED)},!1)}}()),h.add(e)):t.toLowerCase()in e&&(n=n.toLowerCase()),t=>{o!==t&&(o&&e.removeEventListener(n,o,!1),o=t,t&&e.addEventListener(n,t,!1))}}if("data"===t||!r&&t in e)return n=>{o!==n&&(o=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};{let t=!1;const s=n.cloneNode(!0);return n=>{o!==n&&(o=n,s.value!==n&&(null==n?(t&&(t=!1,e.removeAttributeNode(s)),s.value=n):(s.value=n,t||(t=!0,e.setAttributeNode(s)))))}}},O=e=>{let t="";const n=s=>{t!==s&&(t=s,"object"==typeof s&&s?b(s)?s.then(n):"placeholder"in s?v(s,n):n("text"in s?String(s.text):"any"in s?s.any:"html"in s?[].concat(s.html).join(""):"length"in s?f.slice.call(s).join(""):a.default.invoke(s,n)):e.textContent=null==s?"":s)};return n};n.default={create:(e,t)=>{const n=[],s=t.length;for(let r=0;r<s;r++){const s=t[r],o=i.default.find(e,s.path);switch(s.type){case"any":n.push(y(o,[]));break;case"attr":n.push(_(o,s.name,s.node));break;case"text":n.push(O(o))}}return n},find:E};let M=!0},e.f[15]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});const s=e.r(4),r=(e,t,n)=>{e.unshift(e.indexOf.call(t.childNodes,n))};n.default={create:(e,t,n)=>({type:e,name:n,node:t,path:(e=>{const t=[];let n;switch(e.nodeType){case s.ELEMENT_NODE:case s.DOCUMENT_FRAGMENT_NODE:n=e;break;case s.COMMENT_NODE:n=e.parentNode,r(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)r(t,n,e);return t})(t)}),find:(e,t)=>{const n=t.length;for(let s=0;s<n;s++)e=e.childNodes[t[s]];return e}}},e.f[16]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});const n=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;t.default=((e,t,n)=>{if(n){const r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),s(r,n)}return s(e.style,n)});const s=(e,t)=>{let s,r;return o=>{switch(typeof o){case"object":if(o){if("object"===s){if(!t&&r!==o)for(const t in r)t in o||(e[t]="")}else t?e.value="":e.cssText="";const l=t?{}:e;for(const e in o){const t=o[e];l[e]="number"!=typeof t||n.test(e)?t:t+"px"}s="object",t?e.value=i(r=l):r=o;break}default:r!=o&&(s="string",r=o,t?e.value=o||"":e.cssText=o||"")}}},r=/([^A-Z])([A-Z]+)/g,o=(e,t,n)=>t+"-"+n.toLowerCase(),i=e=>{const t=[];for(const n in e)t.push(n.replace(r,o),":",e[n],";");return t.join("")}},e.f[17]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});const n=e=>e;t.default=((e,t,s,r,o)=>{const i=r||n,l=null==o?null:i(o,0);let a=0,c=0,d=t.length-1,u=t[0],f=t[d],h=s.length-1,p=s[0],m=s[h];for(;a<=d&&c<=h;)if(null==u)u=t[++a];else if(null==f)f=t[--d];else if(null==p)p=s[++c];else if(null==m)m=s[--h];else if(u==p)u=t[++a],p=s[++c];else if(f==m)f=t[--d],m=s[--h];else if(u==m)e.insertBefore(i(u,1),i(f,-0).nextSibling),u=t[++a],m=s[--h];else if(f==p)e.insertBefore(i(f,1),i(u,0)),f=t[--d],p=s[++c];else{let n=t.indexOf(p);if(n<0)e.insertBefore(i(p,1),i(u,0)),p=s[++c];else{let r=t[n];t[n]=null,e.insertBefore(i(r,1),i(u,0)),p=s[++c]}}if(a<=d||c<=h)if(a>d){const t=s[h+1],n=null==t?l:i(t,0);if(c===h)e.insertBefore(i(s[c],1),n);else{const t=e.ownerDocument.createDocumentFragment();for(;c<=h;)t.appendChild(i(s[c++],1));e.insertBefore(t,n)}}else if(null==t[a]&&a++,a===d)e.removeChild(i(t[a],-1));else{const n=e.ownerDocument.createRange();n.setStartBefore(i(t[a],-1)),n.setEndAfter(i(t[d],-1)),n.deleteContents()}return s})},e.r(0)}();