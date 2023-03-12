const cacheName = 'khaled-portfolio-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/assets/logo.png',
  '/assets/logo-72.png',
  '/assets/logo-96.png',
  '/assets/logo-128.png',
  '/assets/logo-144.png',
  '/assets/logo-152.png',
  '/assets/logo-192.png',
  '/assets/logo-384.png',
  '/assets/logo-512.png',
  '/assets/portfolioThumbnail.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
