/* North Star Flooring & Construction — plain DOM, no build. All lookups guarded. */
(function () {
  'use strict';

  /* --- Mobile menu toggle --- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  function closeMenu() {
    if (!links || !toggle) return;
    links.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) { closeMenu(); toggle.focus(); }
    });
  }

  /* --- Scroll reveal --- */
  var faders = document.querySelectorAll('.fade-in');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && faders.length && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    faders.forEach(function (el) { io.observe(el); });
  } else {
    faders.forEach(function (el) { el.classList.add('visible'); });
  }

  /* --- Lightbox --- */
  var box = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');
  var lbClose = document.getElementById('lbClose');
  var lbPrev = document.getElementById('lbPrev');
  var lbNext = document.getElementById('lbNext');
  var items = Array.prototype.slice.call(document.querySelectorAll('.g-item'));
  var current = -1;
  var opener = null;

  function show(i) {
    if (!items.length || !lbImg) return;
    current = (i + items.length) % items.length;
    var btn = items[current];
    var img = btn.querySelector('img');
    if (!img) return;
    lbImg.src = img.getAttribute('src');
    lbImg.alt = img.getAttribute('alt') || '';
    if (lbCap) lbCap.textContent = btn.getAttribute('data-cap') || '';
  }
  function openBox(i) {
    if (!box) return;
    opener = document.activeElement;
    show(i);
    box.hidden = false;
    document.body.classList.add('lb-open');
    if (lbClose) lbClose.focus();
  }
  function closeBox() {
    if (!box || box.hidden) return;
    box.hidden = true;
    document.body.classList.remove('lb-open');
    if (opener && opener.focus) opener.focus();
  }
  if (box && items.length) {
    items.forEach(function (btn, i) {
      btn.addEventListener('click', function () { openBox(i); });
    });
    if (lbClose) lbClose.addEventListener('click', closeBox);
    if (lbPrev) lbPrev.addEventListener('click', function () { show(current - 1); });
    if (lbNext) lbNext.addEventListener('click', function () { show(current + 1); });
    box.addEventListener('click', function (e) { if (e.target === box) closeBox(); });
    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') { e.preventDefault(); closeBox(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); show(current - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); show(current + 1); }
      else if (e.key === 'Tab') {
        var f = [lbClose, lbPrev, lbNext].filter(Boolean);
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }
})();
