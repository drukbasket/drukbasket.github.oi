const CACHE_NAME = "drukbasket-v1";
const ASSETS = [
  "/",
  "/drukbasket/Phone/index.html",
  "/drukbasket/Phone/manifest.json",
  "/drukbasket/icons/icon-192.png",
  "/drukbasket/icons/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
