'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "da6cf0f03aa2c9bc96d638b386243c62",
"index.html": "90e681f33ab09a071d6add2704194281",
"/": "90e681f33ab09a071d6add2704194281",
"main.dart.js": "54b62d4bdf70fbef5742ba1f8d233114",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0e7a7ef7b42a11239c064f1efa5e2cea",
"assets/AssetManifest.json": "0dc7979ceedcb169f481185b7be133a1",
"assets/NOTICES": "dd92c5634f2f69ebbbdcd554674c5c71",
"assets/FontManifest.json": "a7164a6bb53d9bcde65c65bc8c7702c7",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "69087f3d260150793c1b9649e711f639",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "f8bd0410b87f09785bb2854a2b0701cb",
"assets/fonts/MaterialIcons-Regular.otf": "2b31f6a82021f7e2a4a22d6a46d8a1d3",
"assets/assets/images/del_logo.png": "60466d7b83f1e7fe31c930283111614e",
"assets/assets/images/Consignor.png": "4c8910be8bcedcf2d24172805b384e91",
"assets/assets/images/empty_user.png": "7d5cdd284d843d9cc1e4f888d69bda15",
"assets/assets/images/launcher_logo.png": "4a625cea6eb7abc8b33cb352294701ee",
"assets/assets/images/placeholder.png": "a9196dfe80715fabdbdcb64d252c8f84",
"assets/assets/images/logo.png": "6300e2d06990384846032cabe0d53060",
"assets/assets/images/logo_no_bg.png": "d0e8b0e034a08bec63ad66fcb6bc5ddf",
"assets/assets/lang/en_US.json": "ddc7590e2cdef655e18296a174332bd0",
"assets/assets/lang/pt_BR.json": "f10b7a07325189c9298bf707ec4cde66",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/uom.png": "171ac4c8da543b65b89efd5b059f2593",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/menu_inventory.svg": "7090735208a62607891f9727e85d6801",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/chart.svg": "49914fc9cccb480852fab42820fa19ac",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/done_document.png": "5a6eb946edda35b4bd4a7e328e7197d8",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/menu_list.svg": "ceb734c3ccec4f31725b8c0334b1489c",
"assets/assets/icons/sad.png": "897214eddd02715001c2f31451feed82",
"assets/assets/icons/database.svg": "823bed6684a77babb13d80606d288627",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/product.png": "d5010d3e6317b3dd4c9c7aa400447a05",
"assets/assets/icons/sm_right_arrow.svg": "e138b3d13f2067f5b1c06f06016f9b9f",
"assets/assets/icons/in.png": "fc5494fcf9afb8b06493c01d9cda990f",
"assets/assets/icons/box-open.png": "184c6dbf6f7e5560d65bcbe343786924",
"assets/assets/icons/truck-moving.png": "5f2e90f60e41f8043d6effd1b3ea9fcb",
"assets/assets/icons/md_whse.svg": "81f0e4ccb310d359880c32dff4968f27",
"assets/assets/icons/gl_account.png": "0a35235ae06862751c5da69b6348049c",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/settings.svg": "2f93d69a741e066d8bd2c59d578fb8ca",
"assets/assets/icons/out.png": "b3f7a8e80bfa93dd862a33fdfeebb357",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/home.png": "90b84bd4a090a61e6a298aee11b10bd6",
"assets/assets/icons/shop.png": "e9818ecc8cf3edcc48eaa36ee51f1cec",
"assets/assets/icons/user.png": "687abc399b15485869f1029f00c08d01",
"assets/assets/icons/account.png": "c8e86c9cb74777d405814a3e3d21f73c",
"assets/assets/icons/sign_in.svg": "44c49efcabd968ec77dc97c6d186ac37",
"assets/assets/icons/uom_group.png": "d530d1f074651c363464c93ba79d938b",
"assets/assets/icons/md_uom.svg": "d1cf43fb7f7e4b6f43d9539bf4dc6513",
"assets/assets/icons/list.png": "4564029af36d56500073bcff7e3a8c72",
"assets/assets/icons/close.svg": "46f645699757687815ed1978f28717a3",
"assets/assets/icons/shopping-cart-check.svg": "54a01d858cf5479ea0b552d835b236fa",
"assets/assets/icons/save.svg": "a4d7516d9139f2484845ab1575309e66",
"assets/assets/icons/branch.png": "a41b49b9d6fab5b3742f649fd04bbde5",
"assets/assets/icons/shopping-cart.png": "750d2937ea0b7e1154dd30d1c4177042",
"assets/assets/icons/back.svg": "9e25f8f050a45d9f72397aafeabb503b",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/banking.svg": "ecc73445c46384df30af10c8b03738ab",
"assets/assets/icons/delete_document.png": "ffe46c04b6056ab1d61b0ebb3cfe111f",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/trash.svg": "9b8d46c07ebbc7e651133c437f87a194",
"assets/assets/icons/tags.png": "11bb25136950760e37f9d18cd2770bdc",
"assets/assets/icons/sign_out.svg": "7ee1604a4dff559d6e08fa0e45968327",
"assets/assets/icons/bp_accounts.svg": "170ba19a4b4f5059e43ab91f17195cc5",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/credit-card.png": "5701cdb4961049011dd9a0e40196d150",
"assets/assets/icons/bank.png": "05e43f28011c8a87e933ab04f56d63e2",
"assets/assets/icons/warehouse.png": "3f8026d97ba87919910c8d6823a0486e",
"assets/assets/icons/item_group.png": "ae11e88c6b4e71abe8165b23c571caad",
"assets/assets/icons/md_users.svg": "6acda37d44794cf5a03e144b7617657d",
"assets/assets/icons/user_account.png": "279f0030f4db7aceb605dcbbac3bc901",
"assets/assets/icons/menu_tag.svg": "51f92b2a3ba29bc13378b6a1ff820fb6",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/add_document.svg": "dd06e4f27f38109ccb83cdb36197eab6",
"assets/assets/icons/open_document.png": "bb03e7b2260724b72551b84b3ef3cd24",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/folder_1.svg": "3178bcd03ed9dfd56e06147241847b00",
"assets/assets/icons/shopping-cart.svg": "b995ff2ca1c1275f0af54889696a5095",
"assets/assets/icons/stats.svg": "49914fc9cccb480852fab42820fa19ac",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/fonts/OpenSans-Italic.ttf": "dda9a792f39932b64e514669ae19f907",
"assets/assets/fonts/OpenSans-Bold.ttf": "8ff9b5735ccb338267f0034d83fe8214",
"assets/assets/fonts/OpenSans-Regular.ttf": "22ab03a6b890f2f142a137a38bf1d4ae",
"assets/assets/fonts/OpenSans-BoldItalic.ttf": "210de434db54de4a6a73d1cf8604e224",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
