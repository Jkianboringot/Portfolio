/**
 * animations.js  — waits for loader.js to inject HTML before wiring animations
 */

(function () {
  "use strict";

  /* ── Animation rules: which selector → which direction ── */
  const RULES = [
    /* Hero */
    { sel: ".intro-img",      cls: "anim-fade-left"  },
    { sel: ".intro-headline", cls: "anim-fade-right" },
    { sel: ".border-text",    cls: "anim-fade-up", delay: 1 },
    { sel: ".intro-title",    cls: "anim-fade-up", delay: 2 },
    { sel: ".comment",        cls: "anim-fade-up", delay: 3 },
    { sel: ".social-icons",   cls: "anim-fade-up", delay: 4 },
    { sel: ".scroll-down",    cls: "anim-fade-in", delay: 5 },

    /* Titles */
    { sel: ".section-title",  cls: "anim-fade-up" },
    { sel: ".blog-title",     cls: "anim-fade-up" },

    /* About */
    { sel: ".about-intro",    cls: "anim-fade-left"  },
    { sel: ".rouded",         cls: "anim-fade-right" },

    /* Git / brand */
    { sel: ".git-img",        cls: "anim-fade-up" },
    { sel: ".brand",          cls: "anim-fade-in" },

    /* Experience — stagger each item */
    { sel: ".timeline-item",  cls: "anim-fade-up", stagger: true },

    /* Projects — stagger each card */
    { sel: ".blog-item",      cls: "anim-fade-up", stagger: true },

    /* Contact */
    { sel: ".contact-box",    cls: "anim-fade-left"  },
    { sel: ".contact-form",   cls: "anim-fade-right" },
  ];

  /* ── Observer shared across all observed elements ── */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("anim-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
  );

  /* ── Already-processed guard so we don't double-add classes ── */
  const tagged = new WeakSet();

  function applyAnimations() {
    RULES.forEach(({ sel, cls, delay, stagger }) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        if (tagged.has(el)) return;      /* skip already-wired elements */
        tagged.add(el);

        el.classList.add(cls);
        if (delay)   el.classList.add(`anim-delay-${delay}`);
        if (stagger) el.classList.add(`anim-delay-${(i % 6) + 1}`);

        io.observe(el);
      });
    });
  }

  /* ── Watch for loader.js injecting content into the page ── */
  const mo = new MutationObserver(() => {
    applyAnimations();     /* pick up any newly added elements */
  });

  mo.observe(document.body, { childList: true, subtree: true });

  /* ── Also run immediately for anything already in the DOM ── */
  applyAnimations();

})();