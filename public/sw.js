if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>n(e,t),o={module:{uri:t},exports:i,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/7-Z59E6PHnXGUsznQOM4o/_buildManifest.js",revision:"2fb79615ae0864beddc7b8e2623251e6"},{url:"/_next/static/7-Z59E6PHnXGUsznQOM4o/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/724-447ba4a380010d85.js",revision:"7-Z59E6PHnXGUsznQOM4o"},{url:"/_next/static/chunks/724-447ba4a380010d85.js.map",revision:"af68330cd05bdb6e6e450ed5c5d99e64"},{url:"/_next/static/chunks/841-6dc1307c95dda5a3.js",revision:"7-Z59E6PHnXGUsznQOM4o"},{url:"/_next/static/chunks/841-6dc1307c95dda5a3.js.map",revision:"93d9e09e016dd5380e6c97f1cda991d5"},{url:"/_next/static/chunks/app/error-d2e3efcd5bea25dc.js",revision:"7-Z59E6PHnXGUsznQOM4o"},{url:"/_next/static/chunks/app/error-d2e3efcd5bea25dc.js.map",revision:"56563983b71908bf54c4fb05663e75ec"},{url:"/_next/static/chunks/app/global-error-3952ba3a45108867.js",revision:"7-Z59E6PHnXGUsznQOM4o"},{url:"/_next/static/chunks/app/global-error-3952ba3a45108867.js.map",revision:"45badbb5b236c102981361f7c845a8b2"},{url:"/_next/static/chunks/app/layout-b37b34db73890cbe.js",revision:"7-Z59E6PHnXGUsznQOM4o"},{url:"/_next/static/chunks/app/loading-afa70ec1b87f0dcc.js",revision:"7-Z59E6PHnXGUsznQOM4o"},{url:"/_next/static/chunks/app/not-found-f64d4dc4babeed56.js",revision:"7-Z59E6PHnXGUsznQOM4o"},{url:"/_next/static/chunks/app/not-found-f64d4dc4babeed56.js.map",revision:"51c44a6bd9893b44559f365f25987e06"},{url:"/_next/static/chunks/app/page-e5f34dde262d68b4.js",revision:"7-Z59E6PHnXGUsznQOM4o"},{url:"/_next/static/chunks/fd9d1056-941e5f1f12e506cd.js",revision:"7-Z59E6PHnXGUsznQOM4o"},{url:"/_next/static/chunks/fd9d1056-941e5f1f12e506cd.js.map",revision:"461ff2cef2ad631f0f49c04d3504fcfe"},{url:"/_next/static/chunks/framework-85738fe605d88fc1.js",revision:"7-Z59E6PHnXGUsznQOM4o"},{url:"/_next/static/chunks/framework-85738fe605d88fc1.js.map",revision:"fdb413454dc9e4219bdbc5916d1f0b4d"},{url:"/_next/static/chunks/main-61ef081f519167d8.js",revision:"7-Z59E6PHnXGUsznQOM4o"},{url:"/_next/static/chunks/main-61ef081f519167d8.js.map",revision:"4f953989f2b0c246947dee73aa4cfed6"},{url:"/_next/static/chunks/main-app-1ef21bc6ae02d003.js",revision:"7-Z59E6PHnXGUsznQOM4o"},{url:"/_next/static/chunks/main-app-1ef21bc6ae02d003.js.map",revision:"a1a973677c881f0ecca3aaadc9fc534b"},{url:"/_next/static/chunks/pages/_app-a965da442ab3b2df.js",revision:"7-Z59E6PHnXGUsznQOM4o"},{url:"/_next/static/chunks/pages/_app-a965da442ab3b2df.js.map",revision:"6a4826d6fc320d066e9bbd768d15dcc2"},{url:"/_next/static/chunks/pages/_error-e36ade2998e6e00d.js",revision:"7-Z59E6PHnXGUsznQOM4o"},{url:"/_next/static/chunks/pages/_error-e36ade2998e6e00d.js.map",revision:"77b342866ab5dc07552cf0887c0c0217"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-bf1a64d1eafd2816.js",revision:"7-Z59E6PHnXGUsznQOM4o"},{url:"/_next/static/chunks/webpack-bf1a64d1eafd2816.js.map",revision:"094cbbc59756b8c7193d50966336f825"},{url:"/apple-touch-icon.png",revision:"e14b86908e5a30daff6cf2ee52b61aaf"},{url:"/favicon.ico",revision:"6855ca9e7a743d683c3acaf90daf1343"},{url:"/icon-192-maskable.png",revision:"5108ccc0d884767a710bbf809f402c7b"},{url:"/icon-192.png",revision:"9422d985e9105432bbdeb8a3c9254a56"},{url:"/icon-512-maskable.png",revision:"2bf3edeb3f137f99687c65f8cba3b350"},{url:"/icon-512.png",revision:"39b81bb09ba79f137f227ca62da570d6"},{url:"/og_image.png",revision:"095fa99b2b5ad2660d62f42376319d01"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map