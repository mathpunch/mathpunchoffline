const CACHE_NAME = 'mathpunch-v3-cache';
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/offline.html',
    
    // Games Section
    '/kitty/',                
    '/dog/',                 
    '/bear/',                
    '/snake/',               
    '/shark/',               
    '/zebra/',               
    '/turtle/',              
    '/doggy/',              
    '/fox/',                
    '/bat/',                
    '/wolf/',               
    '/monkey/',             

    // Emulator Games
    '/game-ds-mario-kart.zip',
    '/game-gba-pokemon-red.zip',
    '/game-gba-lego-star-wars.zip',

    // Other Sections
    '/crab/',                // MathPunch AI
    '/requests/',            // Game requests form
    '/adblocker/',           // Adblocker link
    '/chatting/',            // Chatting page
    '/backup-links/',        // Backup links
    '/new-site-beta/',       // New site beta
    '/prank-shortcut/',      // Prank shortcut

    // Static Assets (CSS, JS, Images)
    '/assets/css/style.css',
    '/assets/js/script.js',
    '/assets/images/logo.png'
];

// Install event - cache all files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

// Fetch event - serve cached content
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        }).catch(() => caches.match('/offline.html'))
    );
});
