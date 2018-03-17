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

workbox.routing(
  'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css',
  workbox.strategies.networkFirst(),
);
workbox.routing(
  'https://use.fontawesome.com/releases/v5.0.6/css/all.css',
  workbox.strategies.networkFirst(),
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

const cached = [];

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(
  [
    'https://use.fontawesome.com/releases/v5.0.6/css/all.css',
    'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css',
  ].concat(cached),
);
