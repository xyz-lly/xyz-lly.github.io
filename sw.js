const CACHE = 'homepage-v1';
const PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png'
];

// Install: precache static files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
});

// Fetch: cache-first for static, network-first for content
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // Content/avatar/resume: network first (always fresh when online)
  if (url.pathname.startsWith('/assets/content.json') || url.pathname.startsWith('/assets/avatar.jpg') || url.pathname.startsWith('/assets/resume.pdf')) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }
  // Static assets: cache first
  event.respondWith(
    caches.match(event.request).then(r => r || fetch(event.request).then(res => {
      // Cache fetched files for future offline use
      if (res.ok && res.type === 'basic') {
        const clone = res.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, clone));
      }
      return res;
    }))
  );
});
