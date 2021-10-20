'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0f7aa82a13deccba66b6815f0994b5f6",
".git/config": "4a4948fcf90841a04a837bbe3565f7c3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "025128c5d7742cf1fab1901c1a8aaf22",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aa3dc584776c32a2dcdcec4d82fa69ce",
".git/logs/refs/heads/master": "aa3dc584776c32a2dcdcec4d82fa69ce",
".git/logs/refs/remotes/origin/master": "a613b9740594512d64f84039cfb8d0fa",
".git/objects/08/04b36fbda983a7ce7149c88901e3964546bc65": "9a7920bf6628b09b9bc5093111b5dd28",
".git/objects/0d/769760ed083b4657a5ea50ee36abbe08cd8f34": "6b20e6799b58153ff9c42dfc711359ec",
".git/objects/1e/c432610524b4748f446869d41429137079ed78": "1a1417b2501d60456531b65ae64d8c4d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/bab3a9827ae2b8a4ca8af39d1c731fe8a85a33": "099b76c16918704d6f7a30e4d430bdf4",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/b6abc10a05004bb027fa761c1a9801ca53d240": "761748ea74d941f78d2ad50df5ff7d5c",
".git/objects/40/5918b10a118fa54d834d4c3fadea3a6bcf9c1c": "bc38be73e50892810165cb3257e9c654",
".git/objects/41/813fe38989da281216ac8fdedeb4133555363c": "c383bcdae0047d4f09a6d0520dd795f2",
".git/objects/4d/cf7e73d8b740be4f871c3ad66c13464565af44": "4c3dd70214b92ff20b2b4f68829b2ad8",
".git/objects/4e/2f4c8bfb1eebaf939a1bfea9a669a5125ba795": "ac4f24cfb1af72ee19857c4a8071b447",
".git/objects/52/284710037fc14604ef435de038b5db96f67b09": "2148aa6c3c67aac652b555bf797febcf",
".git/objects/53/f3e6b1259a4860cf1b05ed0e78522f01c917cf": "834265a8458641c8d9f3bec1731c8587",
".git/objects/56/b305d8d9e981a8b0183862844d383d74050efc": "5ffe5d3bb2907f20255f6beda0f98ded",
".git/objects/5f/20c4c2b235c4944cb8a1369627252347aecfea": "83e8ecdf670d9a7332c404fa91988316",
".git/objects/62/6afd3a77c0236a0b188ae3457270d42340503c": "6020fc64ba883b6c6b8312894f23af3c",
".git/objects/63/c66e88ff2c934d0a55dce89570aff90c26b1fa": "85ae25c1b695adbb339ef4b7009b7108",
".git/objects/75/f6c6734ed4ba069cad7cb808d2371f982ae288": "3599f6d35594d9cdfd8ddab49532116a",
".git/objects/78/df43e58124862ab856106a70dfad8dfc1dfdee": "ccb0265bce68522f37481d05e354acdf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b17e9efd4c72a7da1163ed82699cd77e7b59f8": "ed5bfee5b0f005976994985eedda8e0a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/5d223956a52c1850b3fda5e14215def5953afe": "d255cd526060db5643fae319460d590c",
".git/objects/92/c3a16fed2bf030ef6c521a22917d34748967f8": "6fd01b5bab771a7789289ab883ba246f",
".git/objects/97/a4bc76f8dd04d9c0e3c3a18afbedb2c73e54c5": "aeb2bc83cc0be148b377fe51e1eba249",
".git/objects/9b/4bdfe705b1349f744f736154f3a9e2c11ac4f7": "7a9caf1fdcdfbf3eb554c081de105935",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/2862be48b48bdd54acc2c0949d416d8d356337": "d244d391dd84fef2d45830ae3104f8ab",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/fe41e1646ca8fb755c96cfdcc1a43aa1c2c34a": "234468250951a84a5c1255fb4b2d0226",
".git/objects/aa/e4eab7ce9dea0a5e6976e0206afda74f9235f1": "2845918518421015524c73c987e5ff67",
".git/objects/b2/f3e38bfd99673428d9482cbefd32c792bff323": "9f8a279d305784b6ac83fae1a20fda1c",
".git/objects/b5/3b32ecfa693cb5297b125378098e117f513b05": "29624ce4030350ee923102f487d35a64",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c9/719e095e67e959423df2b6bf5bc0a69d2cef1f": "cbf2c588c1cd28e81dc03d1b0ead47d6",
".git/objects/d7/acb6e7b02f59cab47493300c702538acaa9434": "ea8450abe4fc97535d3d4573db9cd00a",
".git/objects/dc/bdf12d0df31077bec7b1b1e01752c729615cbd": "40fe60feb3b49f762a0ff853543a1b35",
".git/objects/e5/217fa51b0aa0811122a1813b116e37eed86ff6": "b24bd17ad46396f68e6f418d8c27dc79",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/1916820f7b23084d7a7e03894d13f83e6156ee": "250e3325bc150fc27e59258a62a71d2f",
".git/objects/ed/6eab322b1686cf8f0722b0435cf770fbcad9f9": "2a726b0c602cb407420de9605b513134",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f6/e58f4e8d971114bcaf195292bbcf9d729151cb": "b374f6fb56fc58b286d574080d142548",
".git/objects/fe/c2653af7a925aa75aa11e8d49fb267deb96daf": "d81d96453f3dde30d8ceb77224acbdff",
".git/refs/heads/master": "0dc574b469481af8dad677606daf6135",
".git/refs/remotes/origin/master": "0dc574b469481af8dad677606daf6135",
"assets/AssetManifest.json": "607e12606790fb4a3c80b9e298198db6",
"assets/assets/gifs/cotizapackgif.gif": "67b701078a87e0d496d1f7051b556e5d",
"assets/assets/images/logo_colors.png": "39e763d444ac49c22d673f2ba80ab795",
"assets/assets/images/logo_white.png": "51da946712e68ab3c37678a00fb1e02c",
"assets/FontManifest.json": "554ec90cb98a060002d3e39b83a770f2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0a2d8cd68cb7530751f3b35fd646c310",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_credit_card/icons/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/packages/flutter_credit_card/icons/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "dfb3b78be34de5fc1485d4e5c6ac2836",
"/": "dfb3b78be34de5fc1485d4e5c6ac2836",
"index.zip": "46c6f282f00b3a95436fd41c7d2b3c41",
"main.dart.js": "d37170a3c93bd347e77513696737fe9c",
"manifest.json": "87ed2f1821a7a4767a36f87868325058",
"version.json": "046ab2e5fcca4275e3c800aa56c26dc3"
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
