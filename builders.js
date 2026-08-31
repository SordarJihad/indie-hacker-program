(function () {
  'use strict';
  var B = window.BUILDERS || [];
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); };

  var shade = function (hex, amt) {
    var n = parseInt(hex.slice(1), 16);
    var r = Math.max(0, Math.min(255, (n >> 16) + amt));
    var g = Math.max(0, Math.min(255, (n >> 8 & 255) + amt));
    var b = Math.max(0, Math.min(255, (n & 255) + amt));
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };

  var card = function (b, i) {
    var rank = '#' + (i + 1 < 10 ? '0' : '') + (i + 1);
    var bg = b.photo
      ? 'background-image:url(' + esc(b.photo) + ')'
      : 'background-image:linear-gradient(155deg,' + shade(b.c, 30) + ',' + shade(b.c, -62) + ')';
    var mono = b.photo ? '' : '<span class="fcard__mono">' + esc(b.n[0]) + '</span>';
    return '<a class="fcard" href="builder.html?id=' + encodeURIComponent(b.slug) + '" data-tags="' + b.tags.join(' ') + '">' +
      '<span class="fcard__bg" style="' + bg + '">' + mono + '</span>' +
      '<span class="fcard__scrim"></span><span class="fcard__veil"></span>' +
      '<span class="fcard__front">' +
        '<span class="fcard__rank">' + rank + '</span>' +
        '<span class="fcard__name">' + esc(b.n) + '</span>' +
        '<span class="fcard__app">' + esc(b.company) + ' · ' + esc(b.yr) + '</span>' +
        '<span class="fcard__m">' + esc(b.m) + '</span>' +
        '<span class="fcard__ml">' + esc(b.ms) + '</span>' +
      '</span>' +
      '<span class="fcard__back">' +
        '<span class="fcard__bTop"><span class="fcard__pill">' + esc(b.cat) + '</span><span class="fcard__rank">' + rank + '</span></span>' +
        '<span class="fcard__name">' + esc(b.n) + '</span>' +
        '<span class="fcard__app">' + esc(b.p) + '</span>' +
        '<span class="fcard__mBig">' + esc(b.m) + '<em>' + esc(b.ms) + '</em></span>' +
        '<span class="fcard__box">' +
          '<span class="fcard__row"><span>Reported</span><span>' + esc(b.yr) + '</span></span>' +
          '<span class="fcard__row"><span>Team</span><span>' + esc(b.typ) + '</span></span>' +
          '<span class="fcard__sep"><span class="fcard__lbl">Started from</span>' + esc(b.one) + '</span>' +
        '</span>' +
        '<span class="fcard__open">Read the story →</span>' +
      '</span></a>';
  };

  var grid = $('#fgrid');
  if (grid) grid.innerHTML = B.map(card).join('');

  $$('.rchip').forEach(function (c) {
    c.addEventListener('click', function () {
      $$('.rchip').forEach(function (o) { o.classList.remove('is-active'); o.setAttribute('aria-selected', 'false'); });
      c.classList.add('is-active'); c.setAttribute('aria-selected', 'true');
      var f = c.dataset.f;
      $$('.fcard').forEach(function (el) {
        el.hidden = !(f === 'all' || el.dataset.tags.indexOf(f) > -1);
      });
    });
  });
})();
