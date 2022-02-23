'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5584004f99cdcaa691da495ab0e9e26b",
"assets/assets/3d_picture.png": "0a25fa7dfabdd11a290ee83971445a41",
"assets/assets/3d_screen.png": "2bddbddf0de3b9f51922549de7b0216f",
"assets/assets/animation_swipe.gif": "e945518c057c92b2c3a363300e524c1b",
"assets/assets/arrow_down.png": "efc7bd43a01bd4b9eb619d53d87da2ed",
"assets/assets/arrow_up.png": "c50bcac7a1fd29b5b0a42b5c5a90fd69",
"assets/assets/Asset%252018@3x.png": "0abbd8d58e9181a1df4b2430587e58f6",
"assets/assets/broadgate_logo.png": "1413e3ac8e6b9170ee98639bdd58e12e",
"assets/assets/broadgate_project.png": "8e9d84c6d76b45ba3f22b059fb862b37",
"assets/assets/configure-logo-dark.png": "326df2e8b20b9a58a951d05c83ae714c",
"assets/assets/data.json": "369d4f27818b87b8518a8a7570ff7431",
"assets/assets/detail_2d.png": "68fa9b648c92a3cc61d5d0b79c22043b",
"assets/assets/down-arrow.png": "76c019b6b15fcb85855239cb679ef8d6",
"assets/assets/floors_dots.png": "ca115cf0b9c7bf62a0f732e83c20c049",
"assets/assets/fonts/GothamBold.ttf": "db33e70bc9dee9fa9ae9737ad83d77ba",
"assets/assets/fonts/GothamBoldItalic.ttf": "9b92f7fc1500a19b09dc9053fbe46b0c",
"assets/assets/fonts/GothamBook.ttf": "b54724f54d4dd3f6796e3c4cc422f998",
"assets/assets/fonts/GothamBookItalic.ttf": "0281e72bd039997947cb7c2d00ae4b94",
"assets/assets/fonts/GothamLight.ttf": "8566e2336952927984495865df90963c",
"assets/assets/fonts/GothamLightItalic.ttf": "0f0e43f48efb679501feff0240c3eb55",
"assets/assets/fonts/GothamMedium.ttf": "77171d8f5b5283f9d47a3434704bf944",
"assets/assets/fonts/GothamMediumItalic.ttf": "b1951be38b528a44704a217b9c44ab55",
"assets/assets/fonts/GothamMedium_1.ttf": "77171d8f5b5283f9d47a3434704bf944",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/assets/Frame.png": "2cba6aaf3a83994a345798e4f48da43f",
"assets/assets/left-cgi-arrow.png": "068bd9ccd5c7b7dab4cf44dff7a2925d",
"assets/assets/logo.png": "3cc6bdca68984052224fa0fdf0b09f6d",
"assets/assets/lottie.js": "3e4bae5bf26e82ce1ab967861027965a",
"assets/assets/menu/360.png": "79890c13a3254478d23053dec6d30ff1",
"assets/assets/menu/arrows.png": "a8bb012acd88dc55b3829fa22db118b3",
"assets/assets/menu/camera.png": "bbd4dd88c87972c3836162566e887c9f",
"assets/assets/menu/points.png": "9d67e3b8f5822010ef0c0934f2b8b719",
"assets/assets/menu/square.png": "1056cf6b911b20de897c8ef2e052a831",
"assets/assets/menu/structure.png": "39d5964b87e66b782d312aa6b6c897ea",
"assets/assets/pdf_configure.png": "7333c7bf45f3b00ce80691257d542566",
"assets/assets/pdf_first_page.png": "c89024c9dd6f52d28fbbe6a2b8446db0",
"assets/assets/pdf_logo_green.png": "7455bb5de86392ee851c0dadaf01120a",
"assets/assets/pdf_morgan_capital.png": "120ff71f8ec87bedaf62c5bb34ab2d26",
"assets/assets/pdf_north_arrow.png": "fedb51dcdc374d7ac121d15827738ad4",
"assets/assets/powered_by_logo.png": "2adfd46690a9581ee78b10101dae41d4",
"assets/assets/project_logo.png": "c4ee07e7b676b0afb4510e1951e80007",
"assets/assets/right-cgi-arrow.png": "9656e1465ac0cde91400b8b0369f03f9",
"assets/assets/style_preview.png": "cafdbca6652f801f6b1b4cbb323df0c0",
"assets/assets/up-arrow.png": "da1bbf34f7bb078974834c2c48e8c045",
"assets/assets/wl-logo-png.png": "03af4cf72cfb5f82e00825d31b4c6e5a",
"assets/assets/wl-logo.PNG": "44d67389e79ae8dd47ec5fc00f259981",
"assets/FontManifest.json": "fc1b198de4fcfd2ae21fd6c2751ca085",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7d79a3e4ab14cc32d7707bb3da26f9ea",
"favicon.png": "b56f702d57573cd31c131c987ae085e5",
"index.html": "2ff520cb9e788780ccbeed15336a0eb2",
"/": "2ff520cb9e788780ccbeed15336a0eb2",
"index.html-e": "ae390dc542a81b7e23514b45e3883321",
"main.dart.js": "eecd316f1cf3603c790e93f3528a4ac0",
"manifest.json": "1e66f059afe7e26c395750aa24ea51fd",
"password_reset.html": "394d2324b1f388cef9616bbff677a743",
"version.json": "9339d2e8e603f1910d598f6f8f50e1e6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
