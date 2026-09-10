// Minimal service worker - present only so Chrome/PWABuilder consider
// this page installable. No offline caching: the page is small, changes
// several times a day, and always-fresh matters more than offline access.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
