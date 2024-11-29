const cacheName = 'offline-cache-v1';
const filesToCache = [
  '/', // Cache the homepage
  'index.html',
  'sw.js',
  'https://mathpunch.github.io/kitty/',
  'https://mathpunch.github.io/dog/',
  'https://mathpunch.github.io/bear/',
  'https://mathpunch.github.io/snake/',
  'https://mathpunch.github.io/shark/',
  'https://mathpunch.github.io/zebra/',
  'https://mathpunch.github.io/turtle/',
  'https://mathpunch.github.io/doggy/',
  'https://mathpunch.github.io/fox/',
  'https://mathpunch.github.io/bat/',
  'https://mathpunch.github.io/wolf/',
  'https://mathpunch.github.io/monkey/',
  'https://mathpunch.github.io/flashy/Mario%20Kart.zip',
  'https://mathpunch.github.io/Licky/Pokemon%20Red%20Fire.zip',
  'https://mathpunch.github.io/didactic-fortnight/LEGO%20Star%20Wars%20II.zip',
  'https://mathpunch.github.io/ixlmathgg/games/kitty',
  'https://mathpunch.github.io/ixlmathgg/games/dog',
  'https://mathpunch.github.io/ixlmathgg/games/bear',
  'https://mathpunch.github.io/ixlmathgg/games/snake',
  'https://mathpunch.github.io/ixlmathgg/games/shark',
  'https://mathpunch.github.io/ixlmathgg/games/zebra',
  'https://mathpunch.github.io/ixlmathgg/games/turtle',
  'https://mathpunch.github.io/ixlmathgg/games/doggy',
  'https://mathpunch.github.io/ixlmathgg/games/fox',
  'https://mathpunch.github.io/ixlmathgg/games/bat',
  'https://mathpunch.github.io/ixlmathgg/games/wolf',
  'https://mathpunch.github.io/ixlmathgg/games/monkey',
  'https://mathpunch.github.io/ixlmathgg/flashy/Mario%20Kart.zip',
  'https://mathpunch.github.io/ixlmathgg/Licky/Pokemon%20Red%20Fire.zip',
  'https://mathpunch.github.io/ixlmathgg/didactic-fortnight/LEGO%20Star%20Wars%20II.zip',
  // Add more URLs for your games, images, and other resources as needed

  // You may also want to cache static assets like images, stylesheets, and scripts
  'https://mathpunch.github.io/style.css',
  'https://mathpunch.github.io/script.js',
  'https://mathpunch.github.io/image1.jpg',
  'https://mathpunch.github.io/image2.png',
  'https://mathpunch.github.io/assets/some-other-file.js',
  // Add more static assets or pages here as needed
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [cacheName];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // If there's a cached version, return it
      if (cachedResponse) {
        return cachedResponse;
      }

      // Otherwise, fetch the content from the network
      return fetch(event.request);
    })
  );
});
