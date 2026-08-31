(function () {
  'use strict';
  var B = window.BUILDERS || [];
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); };
  var root = document.getElementById('profile');

  var id = new URLSearchParams(location.search).get('id');
  var idx = -1;
  for (var i = 0; i < B.length; i++) if (B[i].slug === id) { idx = i; break; }

  if (idx < 0) {
    root.innerHTML = '<div class="dempty"><h1>Builder not found</h1>' +
      '<p>That link does not point to anyone.</p>' +
      '<a class="btn btn--white btn--lg" href="builders.html">See all 20 builders</a></div>';
    return;
  }

  var b = B[idx];
  var prev = B[(idx - 1 + B.length) % B.length];
  var next = B[(idx + 1) % B.length];

  document.title = b.n + ' — ' + b.m + ' · Indie Hacker Program';

  var shade = function (hex, amt) {
    var n = parseInt(hex.slice(1), 16);
    var r = Math.max(0, Math.min(255, (n >> 16) + amt));
    var g = Math.max(0, Math.min(255, (n >> 8 & 255) + amt));
    var bl = Math.max(0, Math.min(255, (n & 255) + amt));
    return 'rgb(' + r + ',' + g + ',' + bl + ')';
  };

  var portrait = b.photo
    ? '<img src="' + esc(b.photo) + '" alt="' + esc(b.n) + '" />'
    : '<span class="pmono" style="background:linear-gradient(155deg,' + shade(b.c, 30) + ',' + shade(b.c, -62) + ')">' + esc(b.n[0]) + '</span>';

  var logo = b.logo
    ? '<img class="plogo__img" src="' + esc(b.logo) + '" alt="' + esc(b.company) + ' logo" />'
    : '<span class="plogo__mark" style="background:' + b.c + '">' + esc(b.company[0]) + '</span>';

  root.innerHTML =
    '<div class="phero">' +
      '<div class="phero__media"><span class="phero__frame">' + portrait + '</span></div>' +
      '<div class="phero__body">' +
        '<span class="ppill">' + esc(b.cat) + '</span>' +
        '<h1>' + esc(b.n) + '</h1>' +
        (b.h ? '<a class="phandle" href="https://x.com/' + esc(b.h.replace('@', '')) + '" target="_blank" rel="noopener noreferrer">' + esc(b.h) + '</a>' : '') +
        '<div class="plogo">' + logo + '<div><b>' + esc(b.company) + '</b><span>' + esc(b.p) + '</span></div></div>' +
        '<div class="pstat"><b>' + esc(b.m) + '</b><span>' + esc(b.ms) + '</span></div>' +
        '<p class="pone">' + esc(b.one) + '</p>' +
      '</div>' +
    '</div>' +

    '<div class="pfacts">' + b.facts.map(function (f) {
      return '<div class="pfact"><span>' + esc(f[0]) + '</span><b>' + esc(f[1]) + '</b></div>';
    }).join('') + '</div>' +

    '<div class="pbody">' +
      '<section><h2>The story</h2><p>' + esc(b.story) + '</p></section>' +
      '<section><h2>What you can copy</h2><p class="psteal">' + esc(b.steal) + '</p></section>' +
      '<a class="psrc" href="' + esc(b.src.u) + '" target="_blank" rel="noopener noreferrer">Source: ' + esc(b.src.l) +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></a>' +
      '<p class="pdisc">Publicly reported figure. ' + esc(b.n.split(' ')[0]) + ' is not part of this challenge and does not endorse it. Not a prediction of your results.</p>' +
    '</div>' +

    '<div class="pcta">' +
      '<h2>Be the next ' + esc(b.n.split(' ')[0]) + '.</h2>' +
      '<p>7-day challenge · ৳1,490 · lifetime access</p>' +
      '<a class="btn btn--white btn--lg" href="index.html#join">Join the challenge</a>' +
    '</div>' +

    '<nav class="pnav">' +
      '<a href="builder.html?id=' + encodeURIComponent(prev.slug) + '"><span>← Previous</span><b>' + esc(prev.n) + '</b></a>' +
      '<a class="pnav--next" href="builder.html?id=' + encodeURIComponent(next.slug) + '"><span>Next →</span><b>' + esc(next.n) + '</b></a>' +
    '</nav>';
})();
