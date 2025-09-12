const CACHE_NAME = "reporte-cache-v1";
const urlsToCache = [
  "index.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "plantilla.pdf"
];

// Instalar y guardar en caché
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Servir desde caché si no hay conexión
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});


