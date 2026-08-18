(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header scroll state ---------- */
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");

  navToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  revealEls.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  const worldCards = document.querySelectorAll(".world-card");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const ioCards = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            ioCards.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    worldCards.forEach((el) => ioCards.observe(el));
  } else {
    worldCards.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Hero pointer parallax (desktop only) ---------- */
  const heroVisual = document.getElementById("heroVisual");
  const heroLayers = heroVisual ? heroVisual.querySelectorAll(".hero__layer") : [];
  const isTouch = matchMedia("(hover: none), (pointer: coarse)").matches;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = null;

  function animateParallax() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    heroLayers.forEach((layer) => {
      const depth = Number(layer.dataset.depth || 0);
      const x = currentX * depth;
      const y = currentY * depth;
      layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });

    if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
      rafId = requestAnimationFrame(animateParallax);
    } else {
      rafId = null;
    }
  }

  if (heroVisual && !isTouch && !reduceMotion) {
    heroVisual.addEventListener("mousemove", (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = relX * -1;
      targetY = relY * -1;
      if (!rafId) rafId = requestAnimationFrame(animateParallax);
    });

    heroVisual.addEventListener("mouseleave", () => {
      targetX = 0;
      targetY = 0;
      if (!rafId) rafId = requestAnimationFrame(animateParallax);
    });
  }

  /* ---------- Hero scroll focus ---------- */
  const heroSection = document.querySelector(".hero");
  const heroMain = heroVisual ? heroVisual.querySelector(".hero__layer--main") : null;

  function onHeroScroll() {
    if (!heroSection || !heroMain || reduceMotion) return;
    const rect = heroSection.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.min(Math.max(-rect.top / (rect.height * 0.4), 0), 1);
    const scale = 1 + progress * 0.05;
    const shiftX = progress * 10;
    heroMain.style.transform = `scale(${scale}) translateX(${shiftX}px)`;
  }

  window.addEventListener("scroll", onHeroScroll, { passive: true });
  onHeroScroll();

  /* ---------- Preise tabs ---------- */
  const tabs = document.querySelectorAll(".preise-tab");
  const panels = document.querySelectorAll(".preise-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      panels.forEach((p) => p.classList.remove("is-active"));

      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add("is-active");
    });
  });

  /* ---------- Termin form (mailto fallback) ---------- */
  const form = document.getElementById("terminForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const telefon = form.telefon.value.trim();
      const email = form.email.value.trim();
      const behandlung = form.behandlung.value;
      const nachricht = form.nachricht.value.trim();

      if (!name || !email) {
        status.textContent = "Bitte Name und E-Mail-Adresse angeben.";
        return;
      }

      const subject = `Terminanfrage: ${behandlung}`;
      const bodyLines = [
        `Name: ${name}`,
        telefon ? `Telefon: ${telefon}` : null,
        `E-Mail: ${email}`,
        `Gewünschte Behandlung: ${behandlung}`,
        "",
        nachricht || "(keine weitere Nachricht)",
      ].filter(Boolean);

      const mailto = `mailto:s.g.sieler@t-online.de?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      window.location.href = mailto;
      status.textContent = "Ihr E-Mail-Programm wird geöffnet – bitte Anfrage dort absenden.";
    });
  }
})();
