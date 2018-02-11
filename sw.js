importScripts("cache-polyfill.js");
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("perdola").then(function(cache) {
      return cache.addAll([
        "index.html",
        "compiled/style.min.css",
        "compiled/jssource.min.js",
        "compiled/sha3.min.js",
        "compiled/text-security-disc.eot",
        "compiled/text-security-disc.svg",
        "compiled/text-security-disc.ttf",
        "compiled/text-security-disc.woff",
        "data/sites.json",
        "data/themes.json",
        "logos/Adobe.svg",
        "logos/Airbnb.svg",
        "logos/AliExpress.svg",
        "logos/Alipay.svg",
        "logos/allegorithmic.svg",
        "logos/AlternativeTo.svg",
        "logos/Amazon.svg",
        "logos/Apple.svg",
        "logos/Artsy.svg",
        "logos/Baidu.svg",
        "logos/BBC.svg",
        "logos/Behance.svg",
        "logos/Bing.svg",
        "logos/Blend Swap.svg",
        "logos/Channel 4.svg",
        "logos/Chrono.gg.svg",
        "logos/Circle.svg",
        "logos/DeviantArt.svg",
        "logos/Discord.svg",
        "logos/Disqus.svg",
        "logos/Dribbble.svg",
        "logos/Dropbox.svg",
        "logos/Duolingo.svg",
        "logos/eBay.svg",
        "logos/Epic Games.svg",
        "logos/Etsy.svg",
        "logos/Evernote.svg",
        "logos/Facebook.svg",
        "logos/Factorio.svg",
        "logos/Fanatical.svg",
        "logos/FANDOM.svg",
        "logos/Firebox.svg",
        "logos/Firefox.svg",
        "logos/Flickr.svg",
        "logos/Forvo.svg",
        "logos/Freelancer.svg",
        "logos/Genius.svg",
        "logos/GeoGuessr.svg",
        "logos/Gfycat.svg",
        "logos/giffgaff.svg",
        "logos/GIPHY.svg",
        "logos/Github.svg",
        "logos/GOG.svg",
        "logos/Google.svg",
        "logos/Guilded.svg",
        "logos/HitFilm.svg",
        "logos/Humble Bundle.svg",
        "logos/IFTTT.svg",
        "logos/IMDb.svg",
        "logos/imgur.svg",
        "logos/Instagram.svg",
        "logos/itch.io.svg",
        "logos/itv.svg",
        "logos/JustGiving.svg",
        "logos/Ko-fi.svg",
        "logos/last.fm.svg",
        "logos/lernu.svg",
        "logos/Lingvist.svg",
        "logos/LinkedIn.svg",
        "logos/Lloyds Bank.svg",
        "logos/logo.svg",
        "logos/Mail.Ru.svg",
        "logos/Mapbox.svg",
        "logos/Mega.svg",
        "logos/Messenger.svg",
        "logos/Microsoft.svg",
        "logos/Minecraft.svg",
        "logos/Mojang.svg",
        "logos/MSN.svg",
        "logos/Native Instruments.svg",
        "logos/Netflix.svg",
        "logos/OpenStreetMap.svg",
        "logos/Opera.svg",
        "logos/osu!.png",
        "logos/Oxfam.svg",
        "logos/Pastebin.png",
        "logos/Patreon.svg",
        "logos/PayPal.svg",
        "logos/paysafecard.svg",
        "logos/PCPartPicker.svg",
        "logos/Pinterest.svg",
        "logos/pixiv.svg",
        "logos/plug.dj.svg",
        "logos/Pocket.svg",
        "logos/Prezi.svg",
        "logos/QQ.svg",
        "logos/Rabbit.svg",
        "logos/Reddit.svg",
        "logos/Rockstar Games Social Club.svg",
        "logos/Skype.svg",
        "logos/Snapchat.svg",
        "logos/Songsterr.svg",
        "logos/Soundcloud.svg",
        "logos/Spotify.svg",
        "logos/Stack Overflow.svg",
        "logos/Steam.svg",
        "logos/Streamable.svg",
        "logos/Tesco.svg",
        "logos/the Guardian.svg",
        "logos/TheCubicle.us.svg",
        "logos/tic.computer.svg",
        "logos/Tumblr.svg",
        "logos/Twitch.svg",
        "logos/Twitter.svg",
        "logos/Ubisoft.svg",
        "logos/Uplay.svg",
        "logos/Venmo.svg",
        "logos/Vidme.svg",
        "logos/Vimeo.svg",
        "logos/Vivaldi.svg",
        "logos/VK.svg",
        "logos/WeChat.svg",
        "logos/Wikipedia.svg",
        "logos/Wish.svg",
        "logos/Wordpress.svg",
        "logos/Xbox.svg",
        "logos/XDA Developers.svg",
        "logos/Yahoo.svg",
        "logos/YouTube.svg",
        "logos/YoYo Games.svg",
        "android-chrome-192x192.png",
        "android-chrome-512x512.png",
        "apple-touch-icon-114x114-precomposed.png",
        "apple-touch-icon-114x114.png",
        "apple-touch-icon-120x120-precomposed.png",
        "apple-touch-icon-120x120.png",
        "apple-touch-icon-144x144-precomposed.png",
        "apple-touch-icon-144x144.png",
        "apple-touch-icon-152x152-precomposed.png",
        "apple-touch-icon-152x152.png",
        "apple-touch-icon-180x180-precomposed.png",
        "apple-touch-icon-180x180.png",
        "apple-touch-icon-57x57-precomposed.png",
        "apple-touch-icon-57x57.png",
        "apple-touch-icon-60x60-precomposed.png",
        "apple-touch-icon-60x60.png",
        "apple-touch-icon-72x72-precomposed.png",
        "apple-touch-icon-72x72.png",
        "apple-touch-icon-76x76-precomposed.png",
        "apple-touch-icon-76x76.png",
        "apple-touch-icon-precomposed.png",
        "apple-touch-icon.png",
        "browserconfig.xml",
        "favicon-16x16.png",
        "favicon-32x32.png",
        "favicon.ico",
        "manifest.json",
        "mstile-144x144.png",
        "mstile-150x150.png",
        "mstile-310x150.png",
        "mstile-310x310.png",
        "mstile-70x70.png",
        "safari-pinned-tab.svg"
      ]);
    })
  );
});
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", function(event) {

  var cacheWhitelist = [];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
