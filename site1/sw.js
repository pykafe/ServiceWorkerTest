var CACHE_NAME = 'ourcache';

var urlsToCache = ['ServiceWorkerTest/site1/']

self.addEventListener('install', function(event) {
  console.log('Service worker is installing')
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  console.log('Hello wolrd');
});
