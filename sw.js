const CACHE = 'ptt-v5';

self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});

// Local notification scheduling
const scheduledTimers = [];

self.addEventListener('message', e => {
  if (e.data.type === 'SCHEDULE_NOTIFICATIONS') {
    scheduledTimers.forEach(id => clearTimeout(id));
    scheduledTimers.length = 0;
    scheduleAll(e.data.times, 'exercise');
    scheduleAll(e.data.journalTimes || [], 'journal');
  }
});

function scheduleAll(times, type) {
  const now = new Date();
  times.forEach(t => {
    const [h, m] = t.split(':').map(Number);
    const next = new Date(now);
    next.setHours(h, m, 0, 0);
    if (next <= now) next.setDate(next.getDate() + 1);
    const delay = next - now;
    const isJournal = type === 'journal';
    const id = setTimeout(() => {
      self.registration.showNotification(
        isJournal ? "Sam's Rehab Tracker — Journal reminder" : "Sam's Rehab Tracker — Time to exercise!", {
        body: isJournal ? 'Don\'t forget to log your pain scores and journal entry today' : 'Your rehab session is due. Keep up the great work',
        icon: '/Sam-s-Rehab-Tracker-/favicon_io-3/android-chrome-192x192.png',
        badge: '/Sam-s-Rehab-Tracker-/favicon_io-3/favicon-32x32.png',
        tag: isJournal ? 'ptt-journal-reminder' : 'ptt-reminder',
        renotify: true,
        data: { url: '/Sam-s-Rehab-Tracker-/' }
      });
      scheduleAll([t], type);
    }, delay);
    scheduledTimers.push(id);
  });
}

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then(list => {
      if (list.length) return list[0].focus();
      return clients.openWindow('/Sam-s-Rehab-Tracker-/');
    })
  );
});
