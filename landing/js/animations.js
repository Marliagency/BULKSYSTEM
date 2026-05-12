'use strict';

// === SCROLL REVEAL ===
const initScrollReveal = () => {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
};

// === ANIMATED COUNTER ===
const animateCounter = (element, target, duration = 1800) => {
  const start = performance.now();
  const startVal = 0;

  const tick = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(startVal + (target - startVal) * eased);
    element.textContent = current < target ? `+${current}` : `+${target}`;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

// Trigger counters when social-proof-bar enters viewport
const initCounters = () => {
  const bar = document.getElementById('social-proof-bar');
  if (!bar) return;

  let triggered = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !triggered) {
      triggered = true;
      const counterEl = bar.querySelector('[data-counter="200"]');
      if (counterEl) animateCounter(counterEl, 200);
      observer.disconnect();
    }
  }, { threshold: 0.5 });

  observer.observe(bar);
};

// === NAVBAR SCROLL EFFECT ===
const initNavbar = () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
};

// === HERO ENTRY ANIMATIONS ===
const initHeroAnimations = () => {
  const hero = document.getElementById('hero');
  if (!hero) return;
  // Class is already applied in HTML; CSS handles the animation
  // Progress bar animation on load
  const bar = document.getElementById('heroProgressBar');
  if (bar) {
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.transition = 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s';
      bar.style.width = '60%';
    }, 100);
  }
};

// Init all
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initCounters();
  initHeroAnimations();
});
