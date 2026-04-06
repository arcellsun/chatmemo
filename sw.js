// v3
const CACHE_NAME = 'chatmemo-v3';
const urlsToCache = ['/chatmemo/','/chatmemo/index.html','/chatmemo/manifest.json','/chatmemo/icon-192.png','/chatmemo/icon-512.png','/chatmemo/icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
