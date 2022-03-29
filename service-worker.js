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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "11252ef20566ac85594152ff9c05f396"
  },
  {
    "url": "assets/css/0.styles.9964c9a7.css",
    "revision": "df60c43d1b0883a9cb6d22bc0e225903"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.77d623d1.js",
    "revision": "72fad40b96b550725717fb0a1a0529fd"
  },
  {
    "url": "assets/js/11.ed47a8a2.js",
    "revision": "fcedb551384050c04e75d9b1fc6320d8"
  },
  {
    "url": "assets/js/12.cc600389.js",
    "revision": "a6de8445ab98612f65fd1dcb116967c7"
  },
  {
    "url": "assets/js/13.3a38be39.js",
    "revision": "ccb73b7d5a0d4da4d47327feb5e93d9a"
  },
  {
    "url": "assets/js/14.6213e5f7.js",
    "revision": "a6e1f72916dbc9ffa624bac20e2f9004"
  },
  {
    "url": "assets/js/15.31de5bc4.js",
    "revision": "87495b50950e9d9b19652522a3164a63"
  },
  {
    "url": "assets/js/16.9c6bafb1.js",
    "revision": "bc1b0a30db26b71c575682d5dccdf285"
  },
  {
    "url": "assets/js/17.5ecef860.js",
    "revision": "9e205b87f8f1de9c5c80ae9ddfc5a84f"
  },
  {
    "url": "assets/js/18.03080878.js",
    "revision": "58f4a402508b1d8849c9f2cc726b1a6c"
  },
  {
    "url": "assets/js/19.8eaacf59.js",
    "revision": "93e3a308f566831c4e0cb9b5c4765927"
  },
  {
    "url": "assets/js/2.229ffa8a.js",
    "revision": "b38832ed653b3836a5bbdf17e7a2e97e"
  },
  {
    "url": "assets/js/3.fdfad8be.js",
    "revision": "37ffb1d7d2041a62e84f3c189a5ee478"
  },
  {
    "url": "assets/js/4.918f1a37.js",
    "revision": "864bcaa0b70eb6aee563772ffe7e3541"
  },
  {
    "url": "assets/js/5.a03455d7.js",
    "revision": "54cf5780d4873eac30849645832e50f7"
  },
  {
    "url": "assets/js/6.f4344879.js",
    "revision": "7e6f641756043f6033f1b1e01fccb6b1"
  },
  {
    "url": "assets/js/7.42838c95.js",
    "revision": "e36ad9285019cdf9b2ebdc16a74a0dae"
  },
  {
    "url": "assets/js/8.d39e7e74.js",
    "revision": "f9441f2825856c7da6164ff2f376efa6"
  },
  {
    "url": "assets/js/9.e8124ed9.js",
    "revision": "aa49ee63477331810b34af01567502d8"
  },
  {
    "url": "assets/js/app.cbbca95f.js",
    "revision": "d1f4bc3fde9b3bd669b191f6c8cd2ce0"
  },
  {
    "url": "config/index.html",
    "revision": "0cfe501f6a15d1f7f1fb7a776623173d"
  },
  {
    "url": "django/start.html",
    "revision": "78d2aa84774476d99fcffeb2c6a12285"
  },
  {
    "url": "guide/index.html",
    "revision": "24776b3b05e44370e176ccc42e78ebc6"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "ebc33cc4f1f0e7f4c4e4116a9525ad43"
  },
  {
    "url": "images/maskable_icon_x128.png",
    "revision": "3efb27691294b081f6b5e3de552cb181"
  },
  {
    "url": "images/maskable_icon_x192.png",
    "revision": "ef8082f2f2b13ed00faeccb9e290cf0c"
  },
  {
    "url": "images/maskable_icon_x384.png",
    "revision": "6cb38020d6542cea43ecf44a3b6a3dd2"
  },
  {
    "url": "images/maskable_icon_x48.png",
    "revision": "d305a1b17751d6d8001aec0382660b4b"
  },
  {
    "url": "images/maskable_icon_x512.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "images/maskable_icon_x72.png",
    "revision": "660309aed4d8fdad541c46e28fd779f1"
  },
  {
    "url": "images/maskable_icon_x96.png",
    "revision": "1cc1731bb5da7da8631f4f59359677ad"
  },
  {
    "url": "images/maskable_icon.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "index.html",
    "revision": "11cc2c50e34c42c51cbc21ea7548db6b"
  },
  {
    "url": "intro.html",
    "revision": "9dd27a2aa935b2f678a225e188149b64"
  },
  {
    "url": "javascript/start.html",
    "revision": "eb69fd0e3d743bf2e127ac96ad926a8d"
  },
  {
    "url": "react/start.html",
    "revision": "06c22f6855a229ad5a3aef7733e20b07"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
