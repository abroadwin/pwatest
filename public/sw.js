if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const t=e=>n(e,i),r={module:{uri:i},exports:o,require:t};s[i]=Promise.all(c.map((e=>r[e]||t(e)))).then((e=>(a(...e),o)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/PLzID1wxLgxF7KAVHiqsj/_buildManifest.js",revision:"f60a94b7c960abe5567da476e34da286"},{url:"/_next/static/PLzID1wxLgxF7KAVHiqsj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-41c7a067006caf69.js",revision:"41c7a067006caf69"},{url:"/_next/static/chunks/pages/_app-3a2e600c38de7582.js",revision:"3a2e600c38de7582"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/index-5d26f7fc262f7ea6.js",revision:"5d26f7fc262f7ea6"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/27d177a30947857b.css",revision:"27d177a30947857b"},{url:"/_next/static/css/955229c28454e75a.css",revision:"955229c28454e75a"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/favicons/apple-touch-icon.png",revision:"b0470c976bc6c12a03e131aa3c1134dd"},{url:"/favicons/favicon.ico",revision:"8da435549438a7202cadc61c6a1775af"},{url:"/favicons/icon-192.png",revision:"5e3b66816247d1d183f26c91767eb70f"},{url:"/favicons/icon-512.png",revision:"36c23c02ed14fa1297c9b8dc9e8f7565"},{url:"/favicons/icon.svg",revision:"2fbd9cee2c6e29a20849fb53425af954"},{url:"/favicons/maskable-icon-192.png",revision:"2faf9a1d6404d8c855337ac01db7bd3e"},{url:"/favicons/maskable-icon-512.png",revision:"088733402a844f4c415bd17032cd6e78"},{url:"/icons/apple-touch-icon.png",revision:"b0470c976bc6c12a03e131aa3c1134dd"},{url:"/icons/favicon.ico",revision:"8da435549438a7202cadc61c6a1775af"},{url:"/icons/favicons/apple-touch-icon.png",revision:"b0470c976bc6c12a03e131aa3c1134dd"},{url:"/icons/favicons/favicon.ico",revision:"8da435549438a7202cadc61c6a1775af"},{url:"/icons/favicons/icon-192.png",revision:"5e3b66816247d1d183f26c91767eb70f"},{url:"/icons/favicons/icon-512.png",revision:"36c23c02ed14fa1297c9b8dc9e8f7565"},{url:"/icons/favicons/icon.svg",revision:"2fbd9cee2c6e29a20849fb53425af954"},{url:"/icons/favicons/maskable-icon-192.png",revision:"2faf9a1d6404d8c855337ac01db7bd3e"},{url:"/icons/favicons/maskable-icon-512.png",revision:"088733402a844f4c415bd17032cd6e78"},{url:"/icons/icon-192.png",revision:"5e3b66816247d1d183f26c91767eb70f"},{url:"/icons/icon-512.png",revision:"36c23c02ed14fa1297c9b8dc9e8f7565"},{url:"/icons/icon.svg",revision:"2fbd9cee2c6e29a20849fb53425af954"},{url:"/icons/maskable-icon-192.png",revision:"2faf9a1d6404d8c855337ac01db7bd3e"},{url:"/icons/maskable-icon-512.png",revision:"088733402a844f4c415bd17032cd6e78"},{url:"/manifest.json",revision:"f7e75332a6cbfd6e4d16437393feeada"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
