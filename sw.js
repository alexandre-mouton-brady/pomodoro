/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js',
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

const cached = [
  {
    "url": "app.js",
    "revision": "46294378e31122e6baf3d365c119bd09"
  },
  {
    "url": "favicon.png",
    "revision": "4d0d9bee536248456f0d5345c638b0b7"
  },
  {
    "url": "icons/android-icon-144x144.png",
    "revision": "523cd16ac620a4aba1121849adbb7278"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "261e30f51ba3e53ffaffda98d134251a"
  },
  {
    "url": "icons/android-icon-36x36.png",
    "revision": "98e7afa495c6c3fc23dc90a43f4ea69e"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "371d57ffa456e58e2020cc5a07bb59d3"
  },
  {
    "url": "icons/android-icon-512x512.png",
    "revision": "4d0d9bee536248456f0d5345c638b0b7"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "b2890a143b42c206ddc8632c182ce4ee"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "a7cbec11fad00ac195668c2f0bb875a7"
  },
  {
    "url": "index.html",
    "revision": "e8300c273522c39928af6d78d00b68bd"
  }
];

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(
  [
    'https://use.fontawesome.com/releases/v5.0.6/css/all.css',
    'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css',
  ].concat(cached),
);
