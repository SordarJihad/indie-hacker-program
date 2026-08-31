/* =========================================================
   Indie Hacker Program — funnel page
   EDIT ME: when the Cohort 01 price goes up
   ========================================================= */
var DEADLINE = '2026-09-14T23:59:59+06:00';

(function () {
  'use strict';

  var B = window.BUILDERS || [];
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); };
  var href = function (b) { return 'builder.html?id=' + encodeURIComponent(b.slug); };

  var yr = $('#yr'); if (yr) yr.textContent = new Date().getFullYear();

  window.avatar = function (b, cls) {
    return b.photo
      ? '<img class="' + cls + '" src="' + esc(b.photo) + '" alt="' + esc(b.n) + '" loading="lazy" />'
      : '<span class="' + cls + ' av--mono" style="background:linear-gradient(150deg,' + b.c + ',rgba(0,0,0,.55))">' + esc(b.n[0]) + '</span>';
  };

  /* ---------- rotating proof headline ---------- */
  var ROTOR = [null, 'jack-friks', 'ben-tossell', 'danny-postma', 'damon-chen', 'pieter-levels'];
  var SLOT = 2400;
  var find = function (slug) { for (var i = 0; i < B.length; i++) if (B[i].slug === slug) return B[i]; return null; };

  var rotor = $('#rotor');
  if (rotor && B.length) {
    var DUR = ROTOR.length * SLOT;
    var slotPct = 100 / ROTOR.length;
    var pIn = (slotPct * 0.767).toFixed(2);
    var pOut = (slotPct * 0.883).toFixed(2);
    var pBack = (100 - slotPct * 0.117).toFixed(2);
    var sheet = document.createElement('style');
    sheet.textContent =
      '@keyframes rotor-prefix{0%,' + pOut + '%{opacity:1}' + (+pOut + 0.01) + '%,' + pBack + '%{opacity:.001}' + (+pBack + 0.01) + '%,100%{opacity:1}}' +
      '@keyframes rotor-name{0%,' + pIn + '%{filter:blur(0);opacity:1;transform:translateY(0)}' +
      pOut + '%{filter:blur(6px);opacity:.001;transform:translateY(-12px)}' +
      (+pOut + 0.01) + '%,' + pBack + '%{filter:blur(6px);opacity:.001;transform:translateY(12px)}' +
      '100%{filter:blur(0);opacity:1;transform:translateY(0)}}';
    document.head.appendChild(sheet);

    rotor.innerHTML = '<span class="rotor__stack">' + ROTOR.map(function (slug, k) {
      var b = slug ? find(slug) : null;
      var d = 'animation-delay:' + (-(DUR - k * SLOT)) + 'ms;animation-duration:' + DUR + 'ms';
      var inner =
        '<span class="rotor__pre" style="' + d + '">Be the next</span>' +
        '<span class="rotor__name" style="' + d + '">' +
          (b ? '<span class="rotor__av">' + window.avatar(b, 'rotor__img') + '</span>' : '') +
          '<span class="rotor__t">' + esc(b ? b.n : 'indie hacker') + '</span>' +
        '</span>';
      return b
        ? '<a class="rotor__v" href="' + href(b) + '">' + inner + '</a>'
        : '<span class="rotor__v">' + inner + '</span>';
    }).join('') + '</span>';
  }

  /* ---------- the six steps ---------- */
  var DAYS = [
    ['Lock the idea', 'Pick something people already pay for, small enough to finish this week.', 'An idea you can actually build'],
    ['Draw the screens', 'Decide what a user sees, and what they do right before they pay you.', 'A design you can click through'],
    ['Build the core', 'AI writes the code. You read it, fix it, and get it running.', 'Your app running on your screen'],
    ['Login and payments', 'Accounts, permissions, and a way to take money.', 'A working payment button'],
    ['The AI feature', 'The part that makes it worth paying for every month.', 'The reason someone subscribes'],
    ['Launch it', 'Landing page, domain, and out the door in front of real people.', 'A live URL you can send anyone'],
    ['First users, first taka', 'Where to post it, what to say, and how to get people in.', 'Real people using your product']
  ];

  var strip = $('#daystrip');
  if (strip) {
    strip.innerHTML = DAYS.map(function (d, i) {
      return '<li class="ds"><span class="ds__d">Day ' + (i + 1) + '</span>' +
        '<span class="ds__t">' + esc(d[0]) + '</span></li>';
    }).join('');
  }

  var dayGrid = $('#dayGrid');
  if (dayGrid) {
    dayGrid.innerHTML = DAYS.map(function (d, i) {
      return '<article class="day reveal' + (i === 6 ? ' day--last' : '') + '">' +
        '<span class="day__n">Day ' + (i + 1) + '</span>' +
        '<h3>' + esc(d[0]) + '</h3>' +
        '<p>' + esc(d[1]) + '</p>' +
        '<span class="day__out"><i></i>' + esc(d[2]) + '</span>' +
      '</article>';
    }).join('');
  }

  /* ---------- what you get ---------- */
  var GET = [
    ['The 7-day plan', 'What to do each day, in order, so you never open the laptop wondering where you left off.', '৳6,000'],
    ['A real product built beside you', 'Empty folder to paying customer, errors left in.', '৳4,000'],
    ['The prompt pack', 'Copy-paste prompts for every step. You never guess what to type.', '৳2,000'],
    ['Starter files and setup', 'The boring parts done for you, ready to copy.', '৳1,500'],
    ['Client scripts and rates', 'What to say to a shop or agency, and what to charge them.', '৳2,000'],
    ['Getting paid in dollars', 'The routes that actually work from Bangladesh.', '৳1,200'],
    ['The builder community', 'Ask when you are stuck at 1am. Show what you shipped. Yours for life.', '৳3,000'],
    ['Everything added later', 'New material is free, forever.', '৳1,500']
  ];

  var getList = $('#getList');
  if (getList) {
    getList.innerHTML = GET.map(function (g) {
      return '<li class="reveal"><span class="get__ic" aria-hidden="true"></span>' +
        '<span class="get__t"><b>' + esc(g[0]) + '</b><i>' + esc(g[1]) + '</i></span>' +
        '<span class="get__v">' + esc(g[2]) + '</span></li>';
    }).join('');
  }

  var orderList = $('#orderList');
  if (orderList) {
    orderList.innerHTML = GET.map(function (g) {
      return '<li>' + esc(g[0]) + '</li>';
    }).join('');
  }

  /* ---------- builder proof row ---------- */
  var fpile = $('#fpile');
  if (fpile && B.length) {
    fpile.innerHTML = B.slice(0, 8).map(function (b) {
      return '<a class="fp" href="' + href(b) + '">' +
        window.avatar(b, 'fp__img') +
        '<span class="fp__n">' + esc(b.n) + '</span>' +
        '<span class="fp__m">' + esc(b.m) + '</span>' +
        '<span class="fp__s">' + esc(b.ms) + '</span></a>';
    }).join('');
  }

  /* =======================================================
     HERO VIDEO
     Silent looping preview = the "this is a video" cue.
     Driven through the YouTube Player API rather than raw
     iframe params, because params alone cannot suppress the
     paused / end-screen overlay — we catch those states and
     seek back to 0 instead. Tapping for sound unmutes and
     restarts from the beginning without reloading the embed.
     ======================================================= */
  var vidWrap = $('#lvid'), vidMedia = $('#lvidMedia'), vidPlay = $('#lvidPlay'),
      vidFrame = $('#lvidFrame'), vidToggle = $('#lvidToggle');

  if (vidWrap && vidMedia) {
    var VID = (vidWrap.dataset.vid || '').trim();
    var MP4 = (vidWrap.dataset.mp4 || '').trim();
    var player = null;

    if (MP4) {
      /* Self-hosted clip: the only way to guarantee no source branding at
         all. YouTube draws its own title/logo overlay on pause, hover and
         end, and no supported parameter removes it. */
      vidWrap.classList.add('is-file');
      vidMedia.innerHTML = '<video id="lvidFile" playsinline muted loop preload="metadata"' +
        (reduced ? '' : ' autoplay') + ' src="' + esc(MP4) + '"></video>';
      var file = $('#lvidFile');
      file.addEventListener('playing', function () { vidWrap.classList.add('is-live'); });
      if (!reduced) { var p = file.play(); if (p && p.catch) p.catch(function () {}); }

      vidPlay.addEventListener('click', function () {
        vidWrap.classList.add('is-playing');
        vidToggle.hidden = false;
        file.loop = false;
        file.muted = false;
        file.currentTime = 0;
        file.play();
      });
      vidToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        file.muted = !file.muted;
        vidWrap.classList.toggle('is-muted', file.muted);
        vidToggle.setAttribute('aria-label', file.muted ? 'Unmute' : 'Mute');
      });
      vidFrame.addEventListener('click', function (e) {
        if (e.target.closest('.lvid__toggle')) return;
        if (!vidWrap.classList.contains('is-playing')) { vidPlay.click(); return; }
        if (file.paused) file.play(); else file.pause();
      });
    } else if (!VID) {
      vidWrap.classList.add('is-empty');
      vidMedia.innerHTML = '<span class="lvid__ph">Add your YouTube id to <code>data-vid</code></span>';
    } else {
      var loadApi = function (cb) {
        if (window.YT && window.YT.Player) { cb(); return; }
        var prev = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function () { if (prev) prev(); cb(); };
        if (!document.getElementById('yt-api')) {
          var tag = document.createElement('script');
          tag.id = 'yt-api';
          tag.src = 'https://www.youtube.com/iframe_api';
          document.head.appendChild(tag);
        }
      };

      var buildPlayer = function () {
        vidMedia.innerHTML = '<div id="ytHost"></div>';
        player = new YT.Player('ytHost', {
          host: 'https://www.youtube-nocookie.com',
          videoId: VID,
          playerVars: {
            /* controls off: the preview must be chrome-free. The real
               player is built fresh on tap, with controls. */
            autoplay: 1, mute: 1, controls: 0, rel: 0, playsinline: 1,
            disablekb: 1, iv_load_policy: 3, fs: 0
          },
          events: {
            onReady: function (e) {
              e.target.mute();
              if (reduced) return;
              e.target.playVideo();
              /* some browsers ignore the first play call; nudge it briefly */
              var tries = 0;
              var nudge = setInterval(function () {
                if (++tries > 6 || vidWrap.classList.contains('is-live') ||
                    vidWrap.classList.contains('is-playing')) { clearInterval(nudge); return; }
                try { e.target.playVideo(); } catch (err) { clearInterval(nudge); }
              }, 700);
            },
            onStateChange: function (e) {
              if (reduced) return;
              if (vidWrap.classList.contains('is-playing')) {
                /* viewer is in control now — only kill the end screen */
                if (e.data === YT.PlayerState.ENDED) { e.target.seekTo(0, true); e.target.pauseVideo(); }
                return;
              }
              /* Only lift our cover once it is genuinely rolling. Until then
                 the viewer sees our own card, never YouTube's cued/paused UI. */
              if (e.data === YT.PlayerState.PLAYING) {
                vidWrap.classList.add('is-live');
                return;
              }
              if (e.data === YT.PlayerState.ENDED) {
                e.target.seekTo(0, true);
                e.target.playVideo();
              } else if (e.data === YT.PlayerState.PAUSED ||
                         e.data === YT.PlayerState.CUED ||
                         e.data === -1) {
                vidWrap.classList.remove('is-live');
                e.target.playVideo();
              }
            }
          }
        });
      };

      /* only spin it up once the card is actually on screen */
      var started = false;
      var start = function () {
        if (started) return;
        started = true;
        loadApi(buildPlayer);
      };
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (e, o) {
          if (e[0].isIntersecting) { start(); o.disconnect(); }
        }, { threshold: 0.25 }).observe(vidWrap);
      } else {
        start();
      }

      /* Unmute = restart from 0 with sound. The player is never handed
         over to YouTube's own UI, so nothing on screen identifies the
         source: no controls, title, logo, or end screen at any point. */
      var playWithSound = function () {
        if (!player || !player.unMute) return;
        vidWrap.classList.add('is-playing');
        vidToggle.hidden = false;
        player.unMute();
        player.setVolume(100);
        player.seekTo(0, true);
        player.playVideo();
      };

      vidPlay.addEventListener('click', playWithSound);

      /* our own mute toggle, since there are no native controls */
      vidToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        if (!player) return;
        var muted = player.isMuted();
        if (muted) { player.unMute(); player.setVolume(100); }
        else { player.mute(); }
        vidWrap.classList.toggle('is-muted', !muted);
        vidToggle.setAttribute('aria-label', muted ? 'Mute' : 'Unmute');
      });

      /* clicking the frame: start with sound, or pause/resume once running */
      vidFrame.addEventListener('click', function (e) {
        if (e.target.closest('.lvid__toggle')) return;
        if (!vidWrap.classList.contains('is-playing')) { playWithSound(); return; }
        if (!player) return;
        if (player.getPlayerState && player.getPlayerState() === YT.PlayerState.PLAYING) player.pauseVideo();
        else player.playVideo();
      });
    }
  }

  /* =======================================================
     SaaS EXAMPLES — one name at a time, cinematic swap
     Names only, with a monogram mark: no third-party logo
     files are shipped or hotlinked. Drop a real asset path
     into `logo` if you license one and it renders instead.
     ======================================================= */
  /* Brand marks. Source picked per brand for the crispest available art:
     Simple Icons serves clean SVG for some, Google's icon service serves
     high-resolution app icons for the ones Simple Icons no longer carries
     (Canva, ChatGPT and Truecaller were withdrawn from that set).
     These are third-party trademarks, shown only to identify well known
     products as examples. Swap `src` for a locally hosted file if you
     license the assets. */
  var SAAS = [
    { n: 'Zoom',         c: '0B5CFF', src: 'https://cdn.simpleicons.org/zoom/0B5CFF' },
    { n: 'Canva',        c: '00C4CC', src: 'https://www.google.com/s2/favicons?domain=canva.com&sz=256' },
    { n: 'ChatGPT',      c: '0C0C0F', src: 'https://www.google.com/s2/favicons?domain=chatgpt.com&sz=256' },
    { n: 'Google Drive', c: '1FA463', src: 'https://cdn.simpleicons.org/googledrive/1FA463' },
    { n: 'Truecaller',   c: '0087FF', src: 'https://www.google.com/s2/favicons?domain=truecaller.com&sz=256' },
    { n: 'Grammarly',    c: '15C39A', src: 'https://cdn.simpleicons.org/grammarly/15C39A' }
  ];

  var brand = $('#brand');
  if (brand) {
    /* Official marks are served from the Simple Icons CDN, uniformly sized.
       They are third-party trademarks shown only to identify well known SaaS
       products. If one fails to load we fall back to a monogram. */
    brand.innerHTML = SAAS.map(function (b, i) {
      return '<span class="brand__i' + (i === 0 ? ' is-on' : '') + '">' +
        '<span class="brand__mark" data-fallback="' + esc(b.n[0]) + '" style="--bc:#' + b.c + '">' +
          '<img src="' + esc(b.src) + '" alt="" loading="lazy" />' +
        '</span>' +
        '<span class="brand__n">' + esc(b.n) + '</span></span>';
    }).join('');

    $$('.brand__mark img', brand).forEach(function (img) {
      img.addEventListener('error', function () {
        var host = img.parentElement;
        host.classList.add('is-mono');
        host.textContent = host.dataset.fallback;
      });
    });

    if (!reduced && SAAS.length > 1) {
      var bi = 0;
      var items = $$('.brand__i', brand);
      setInterval(function () {
        items[bi].classList.remove('is-on');
        items[bi].classList.add('is-out');
        var prev = items[bi];
        setTimeout(function () { prev.classList.remove('is-out'); }, 520);
        bi = (bi + 1) % items.length;
        items[bi].classList.add('is-on');
      }, 2200);
    }
  }

  /* ---------- inline company rotator (sits inside a sentence) ---------- */
  var INLINE = [
    { n: 'Facebook', d: 'facebook.com' },
    { n: 'YouTube',  d: 'youtube.com' },
    { n: 'Canva',    d: 'canva.com' },
    { n: 'Shopify',  d: 'shopify.com' },
    { n: 'Airbnb',   d: 'airbnb.com' }
  ];
  var inl = $('#inl');
  if (inl) {
    inl.innerHTML = INLINE.map(function (b, i) {
      return '<span class="inl__i' + (i === 0 ? ' is-on' : '') + '">' +
        '<img src="https://www.google.com/s2/favicons?domain=' + b.d + '&sz=64" alt="" ' +
        'onerror="this.style.display=\'none\'" />' + esc(b.n) + '</span>';
    }).join('');
    if (!reduced && INLINE.length > 1) {
      var ii = 0, items = $$('.inl__i', inl);
      setInterval(function () {
        items[ii].classList.remove('is-on');
        ii = (ii + 1) % items.length;
        items[ii].classList.add('is-on');
      }, 1900);
    }
  }

  /* =======================================================
     SECTION 2 — THE SAAS MATH
     Two sliders, one number. The result counts to its new
     value rather than snapping, so dragging feels physical.
     ======================================================= */
  var rngCust = $('#rngCust'), rngPrice = $('#rngPrice');
  if (rngCust && rngPrice) {
    var elCust = $('#calcCust'), elPrice = $('#calcPrice'), elOut = $('#calcOut'),
        calcBox = $('.calc'), calcSr = $('#calcSr');
    var money = function (n) { return '$' + Math.round(n).toLocaleString('en-US'); };

    /* paint the filled part of each track */
    var paint = function (el) {
      var min = +el.min, max = +el.max;
      el.style.setProperty('--fill', ((el.value - min) / (max - min) * 100) + '%');
    };

    var shown = 10000, raf = null, bumpT = null, settleT = null;
    var settle = function (target) {
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      shown = target;
      elOut.textContent = money(target);
    };
    var countTo = function (target) {
      clearTimeout(settleT);
      if (reduced || document.hidden) { settle(target); return; }
      if (raf) cancelAnimationFrame(raf);
      var from = shown, start = null, dur = 260;
      var step = function (ts) {
        if (start === null) start = ts;
        var p = Math.min(1, (ts - start) / dur);
        var eased = 1 - Math.pow(1 - p, 3);
        shown = from + (target - from) * eased;
        elOut.textContent = money(shown);
        if (p < 1) raf = requestAnimationFrame(step); else { settle(target); }
      };
      raf = requestAnimationFrame(step);
      /* rAF is throttled in background tabs and stalls mid-count, which would
         leave a wrong number on screen. Land on the exact value regardless. */
      settleT = setTimeout(function () { settle(target); }, dur + 90);
    };

    var update = function () {
      var c = +rngCust.value, p = +rngPrice.value;
      elCust.textContent = c.toLocaleString('en-US');
      elPrice.textContent = '$' + p;
      paint(rngCust); paint(rngPrice);
      countTo(c * p);
      if (!reduced) {
        calcBox.classList.add('is-bump');
        clearTimeout(bumpT);
        bumpT = setTimeout(function () { calcBox.classList.remove('is-bump'); }, 180);
      }
    };

    rngCust.addEventListener('input', update);
    rngPrice.addEventListener('input', update);

    /* Screen readers: announce once the slider is released, not on every
       tick — a live region on the number itself would talk over itself. */
    var announce = function () {
      if (!calcSr) return;
      calcSr.textContent = rngCust.value + ' customer, প্রতিজন $' + rngPrice.value +
        ' — মাসে ' + money(+rngCust.value * +rngPrice.value);
    };
    rngCust.addEventListener('change', announce);
    rngPrice.addEventListener('change', announce);

    paint(rngCust); paint(rngPrice);

    /* count up from zero the first time it scrolls into view */
    if ('IntersectionObserver' in window && !reduced) {
      new IntersectionObserver(function (e, o) {
        if (!e[0].isIntersecting) return;
        shown = 0;
        countTo(+rngCust.value * +rngPrice.value);
        o.disconnect();
      }, { threshold: 0.4 }).observe(calcBox);
    }
  }

  /* ---------- countdown ---------- */
  var target = new Date(DEADLINE).getTime();
  var clocks = ['#clock', '#planTimer', '#finaleClock'].map(function (s) { return $(s); }).filter(Boolean);
  var stickyClock = $('#stickyClock');
  var pad = function (n) { return n < 10 ? '0' + n : '' + n; };
  var tick = function () {
    var left = Math.max(0, target - Date.now());
    var d = Math.floor(left / 864e5), h = Math.floor(left % 864e5 / 36e5),
        m = Math.floor(left % 36e5 / 6e4), s = Math.floor(left % 6e4 / 1e3);
    clocks.forEach(function (c) {
      var set = function (k, v) { var el = c.querySelector('[data-' + k + ']'); if (el) el.textContent = pad(v); };
      set('d', d); set('h', h); set('m', m); set('s', s);
    });
    if (stickyClock) stickyClock.textContent = left === 0 ? 'Last chance'
      : (d > 0 ? d + 'd left' : pad(h) + ':' + pad(m) + ':' + pad(s) + ' left');
    if (left === 0) {
      document.body.classList.add('offer-over');
      $$('[data-overtext]').forEach(function (el) {
        if (el.textContent !== el.dataset.overtext) el.textContent = el.dataset.overtext;
      });
    }
  };
  if (clocks.length) { tick(); setInterval(tick, 1000); }

  /* ---------- sticky CTA ---------- */
  var sticky = $('#stickyCta'), joinSec = $('#join');
  var onScroll = function () {
    if (sticky && joinSec) {
      var r = joinSec.getBoundingClientRect();
      sticky.hidden = !(window.scrollY > 700 && !(r.top < window.innerHeight && r.bottom > 0));
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- reveal ---------- */
  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          var el = e.target;
          setTimeout(function () { el.classList.add('is-in'); }, Math.min(i * 60, 240));
          io.unobserve(el);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    $$('.reveal').forEach(function (el) { io.observe(el); });

    /* Failsafe: a fast flick or an anchor jump can skip past an element
       without the observer ever sampling it, which would leave that whole
       section invisible. Sweep anything at or above the fold on every
       scroll settle and reveal it outright. */
    var sweeping = false;
    var sweep = function () {
      sweeping = false;
      $$('.reveal').forEach(function (el) {
        if (el.classList.contains('is-in')) return;
        if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
          el.classList.add('is-in');
          io.unobserve(el);
        }
      });
    };
    var queueSweep = function () {
      if (sweeping) return;
      sweeping = true;
      /* rAF is throttled in background/hidden tabs, so pair it with a timer:
         whichever runs first reveals, the other is a harmless no-op. */
      requestAnimationFrame(sweep);
      setTimeout(sweep, 140);
    };
    window.addEventListener('scroll', queueSweep, { passive: true });
    window.addEventListener('resize', queueSweep);
    window.addEventListener('hashchange', function () { setTimeout(sweep, 60); });
    window.addEventListener('load', function () { setTimeout(sweep, 120); });
    /* whatever is on screen at load must never wait for an event */
    setTimeout(sweep, 0);
    setTimeout(sweep, 400);
  } else {
    $$('.reveal').forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- FAQ ---------- */
  var FAQ = [
    ['Can it really happen in 7 days?', 'Launching, yes — that is what the week is for, and it is a small product, not a big one. Getting users and revenue takes longer than a week for everybody, including the people on this page. Anyone who tells you otherwise is selling you something worse than this.'],
    ['I have a job. Will I have time?', 'Two to three hours a day. Everything is recorded, so the seven days do not have to be seven days in a row — plenty of people do day 3 on a Saturday.'],
    ['Why is it only ৳1,490?', 'It is Round 01. Everything is on demand, so one more person costs me nothing, and I would rather have a full room than a high price. It goes up after this round.'],
    ['Do I need to know how to code?', 'No. The AI writes the code — you read it, check it, and ask for changes. What you actually need is a few hours a day and the patience to keep going when day 3 breaks.'],
    ['How much money will I make?', 'I am not going to give you a number. The builders on this page publish theirs, and those took months or years — that is their result, not a forecast for you. What this week gives you is the skill and a live product. The rest is your work and your market.'],
    ['Is it in Bangla?', 'Explained in Bangla, with English for the technical terms because that is how everyone actually says them. Prompts and code are in English, ready to copy.'],
    ['I do not have an idea yet.', 'Day 1 hands you 30 ideas that already have paying customers, and the filter for picking one. Nobody loses the first day staring at a blank page.'],
    ['How do I take payments from other countries?', 'Day 4 covers it — the routes that work from Bangladesh, and how to price in dollars.'],
    ['What do I keep afterwards?', 'Everything, forever. The recordings, prompts, starter files, scripts, and the community. Anything added later is free too.'],
    ['How does the refund work?', 'Finish all seven days and do the work. If you end the week with nothing you can open in a browser, email us and we send the ৳1,490 back. We will ask to see the seven days — that is the only condition.']
  ];

  var faqList = $('#faqList');
  if (faqList) {
    faqList.innerHTML = FAQ.map(function (f, i) {
      return '<div class="fq"><button class="fq__q" aria-expanded="false" aria-controls="fa' + i + '">' +
        '<span>' + f[0] + '</span><span class="fq__ic" aria-hidden="true"></span></button>' +
        '<div class="fq__a" id="fa' + i + '" role="region"><p>' + f[1] + '</p></div></div>';
    }).join('');
    $$('.fq__q').forEach(function (b) {
      b.addEventListener('click', function () {
        var item = b.parentElement, panel = item.querySelector('.fq__a');
        var open = item.classList.contains('is-open');
        $$('.fq').forEach(function (o) {
          o.classList.remove('is-open');
          o.querySelector('.fq__a').style.maxHeight = null;
          o.querySelector('.fq__q').setAttribute('aria-expanded', 'false');
        });
        if (!open) {
          item.classList.add('is-open');
          panel.style.maxHeight = panel.scrollHeight + 'px';
          b.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* =======================================================
     ORDER FORM
     ======================================================= */
  var form = $('#enrollForm');
  if (!form) return;

  var fields = { name: $('#f-name'), phone: $('#f-phone'), email: $('#f-email'), pass: $('#f-pass') };
  var errs = { name: $('#e-name'), phone: $('#e-phone'), email: $('#e-email'), pass: $('#e-pass') };
  var wrapOf = function (input) { return input.closest('.field'); };

  fields.phone.addEventListener('input', function () {
    var v = fields.phone.value.replace(/\D/g, '');
    if (v.indexOf('880') === 0) v = v.slice(3);
    if (v.indexOf('0') === 0) v = v.slice(1);
    v = v.slice(0, 10);
    var out = v;
    if (v.length > 4) out = v.slice(0, 4) + ' ' + v.slice(4);
    if (v.length > 7) out = v.slice(0, 4) + ' ' + v.slice(4, 7) + ' ' + v.slice(7);
    fields.phone.value = out;
  });

  var meter = $('#meter'), meterLabel = $('#meterLabel');
  var score = function (p) {
    var s = 0;
    if (p.length >= 8) s++;
    if (/\d/.test(p)) s++;
    if (/[a-z]/.test(p) && /[A-Z]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p) || p.length >= 14) s++;
    return s;
  };
  fields.pass.addEventListener('input', function () {
    var p = fields.pass.value;
    meter.hidden = p.length === 0;
    var s = score(p);
    meter.setAttribute('data-s', String(s));
    meterLabel.textContent = ['', 'দুর্বল', 'চলবে', 'ভালো', 'শক্ত'][s] || 'দুর্বল';
  });

  var eye = $('#togglePass');
  eye.addEventListener('click', function () {
    var showing = fields.pass.type === 'text';
    fields.pass.type = showing ? 'password' : 'text';
    eye.setAttribute('aria-pressed', String(!showing));
    eye.setAttribute('aria-label', showing ? 'পাসওয়ার্ড দেখান' : 'পাসওয়ার্ড লুকান');
  });

  var rules = {
    name: function (v) {
      if (!v.trim()) return 'নামটা লিখুন।';
      if (v.trim().length < 3) return 'নামটা লিখুন।';
      return '';
    },
    phone: function (v) {
      var d = v.replace(/\D/g, '');
      if (!d) return 'ফোন নম্বরটা দিন।';
      if (d.length !== 10) return '+880 এর পরে ১০ ডিজিট লিখুন, যেমন 1712 345 678।';
      if (d[0] !== '1') return '+880 এর পরে নম্বরটা 1 দিয়ে শুরু হবে।';
      return '';
    },
    email: function (v) {
      if (!v.trim()) return 'Email টা দিন।';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())) return 'Email টা ঠিক মনে হচ্ছে না।';
      return '';
    },
    pass: function (v) {
      if (!v) return 'একটা পাসওয়ার্ড দিন।';
      if (v.length < 8) return 'অন্তত ৮ অক্ষর দিন।';
      if (!/\d/.test(v)) return 'অন্তত একটা সংখ্যা রাখুন।';
      return '';
    }
  };

  var validate = function (key) {
    var msg = rules[key](fields[key].value);
    var w = wrapOf(fields[key]);
    if (msg) { w.classList.add('is-invalid'); w.classList.remove('is-valid'); errs[key].textContent = msg; return false; }
    w.classList.remove('is-invalid'); w.classList.add('is-valid'); errs[key].textContent = '';
    return true;
  };

  Object.keys(fields).forEach(function (k) {
    fields[k].addEventListener('blur', function () { validate(k); });
    fields[k].addEventListener('input', function () {
      if (wrapOf(fields[k]).classList.contains('is-invalid')) validate(k);
    });
  });

  var btn = $('#submitBtn'), done = $('#done');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true, first = null;
    Object.keys(fields).forEach(function (k) {
      var good = validate(k);
      if (!good && !first) first = fields[k];
      ok = ok && good;
    });
    if (!ok) { first.focus(); return; }

    btn.classList.add('is-loading');
    btn.disabled = true;

    /* NOTE: no backend wired yet — replace this block with a POST to your API. */
    setTimeout(function () {
      var payload = {
        name: fields.name.value.trim(),
        phone: '+880' + fields.phone.value.replace(/\D/g, ''),
        email: fields.email.value.trim().toLowerCase(),
        pay: (document.querySelector('input[name="pay"]:checked') || {}).value || 'bkash',
        price: 1490,
        round: '01',
        createdAt: new Date().toISOString()
      };
      try { localStorage.setItem('ihp_enrollment', JSON.stringify(payload)); } catch (err) {}
      $('#doneName').textContent = payload.name.split(' ')[0];
      $('#doneEmail').textContent = payload.email;
      form.hidden = true;
      var head = $('.co__head');
      if (head) head.hidden = true;
      done.hidden = false;
      done.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
      btn.classList.remove('is-loading');
      btn.disabled = false;
    }, 1100);
  });

  $('#againBtn').addEventListener('click', function () {
    form.reset();
    Object.keys(fields).forEach(function (k) { wrapOf(fields[k]).classList.remove('is-valid', 'is-invalid'); });
    meter.hidden = true;
    done.hidden = true;
    form.hidden = false;
    var head2 = $('.co__head');
    if (head2) head2.hidden = false;
    fields.name.focus();
  });

})();
