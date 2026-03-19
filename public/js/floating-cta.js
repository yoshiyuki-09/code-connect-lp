// floating-cta.js

(function () {
  // --- Header scroll behavior ---
  const header = document.getElementById('site-header');
  // ※モバイルのアドレスバー移動などで微少な scrollY が発生するため、
  //   小さなスクロールではヘッダーを隠さないように閾値を持たせる
  const HEADER_SCROLL_THRESHOLD = 30;

  function updateHeader() {
    if (!header) return;
    if (window.scrollY > HEADER_SCROLL_THRESHOLD) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  // --- Floating CTA visibility ---
  const floatingBtn = document.getElementById('floating-cta');
  const heroBtn = document.querySelector('#section-hero .btn-line-cta');
  const ctaSection = document.getElementById('section-cta');

  function updateFloating() {
    if (!floatingBtn) return;

    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY < 300) {
      floatingBtn.classList.remove('is-visible');
      return;
    }

    // Hide if hero CTA is still in viewport
    if (heroBtn) {
      const rect = heroBtn.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        floatingBtn.classList.remove('is-visible');
        return;
      }
    }

    // Hide if CTA section is in viewport
    if (ctaSection) {
      const rect = ctaSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        floatingBtn.classList.remove('is-visible');
        return;
      }
    }

    floatingBtn.classList.add('is-visible');
  }

  function onScroll() {
    updateHeader();
    updateFloating();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  // Initial state
  updateHeader();
  updateFloating();

  // --- Hero content fade-in from behind ---
  const heroEls = document.querySelectorAll('.hero-heading, .hero-sub, .hero-note, .hero-cta-wrap');
  if (heroEls.length) {
    requestAnimationFrame(function () {
      setTimeout(function () {
        heroEls.forEach(function (el) {
          el.classList.add('is-visible');
        });
      }, 80);
    });
  }
})();
