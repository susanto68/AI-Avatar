// Service Worker for AI Avatar Assistant PWA
const CACHE_NAME = 'ai-avatar-v2.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/assets/avatars/computer-teacher.png',
  '/assets/avatars/english-teacher.png',
  '/assets/avatars/biology-teacher.png',
  '/assets/avatars/physics-teacher.png',
  '/assets/avatars/chemistry-teacher.png',
  '/assets/avatars/geography-teacher.png',
  '/assets/avatars/hindi-teacher.png',
  '/assets/avatars/mathematics-teacher.png',
  '/assets/avatars/doctor.png',
  '/assets/avatars/engineer.png',
  '/assets/avatars/lawyer.png'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
      .catch(() => {
        // Return offline page for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for offline functionality
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Handle background sync tasks
  console.log('Background sync triggered');
  return Promise.resolve();
} 