/* ==========================================================================
   MAIN.JS : rendu du contenu (content.js), i18n, thème, animations,
   filtres projets, modal, particules.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------- STATE ---------------- */
  const state = {
    lang: localStorage.getItem("rk-lang") || "fr",
    theme: localStorage.getItem("rk-theme") || "dark",
    images: {},
    activeFilter: "all",
  };

  const CATEGORY_ICON = {
    ia: "fa-brain",
    vision: "fa-eye",
    graphics: "fa-cube",
    web: "fa-globe",
    embedded: "fa-microchip",
    systems: "fa-network-wired",
    algo: "fa-diagram-project",
  };

  const FALLBACK_IMAGES = {
    hero_photo: { available: true, src: "assets/images/profil_at_sigas.png", type: "local" },
    about_photo: { available: true, src: "assets/images/profil_at_sigas.png", type: "local" },
    og_image: { available: true, src: "assets/images/profil_at_sigas.png", type: "local" },
  };

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $all = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const el = (tag, attrs, children) => {
    const node = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === "class") node.className = v;
        else if (k === "html") node.innerHTML = v;
        else if (k === "text") node.textContent = v;
        else node.setAttribute(k, v);
      });
    }
    (children || []).forEach((c) => c && node.appendChild(c));
    return node;
  };

  function t() {
    return CONTENT[state.lang];
  }

  /* ---------------- IMAGES MANIFEST ----------------
     Chargé directement depuis le global IMAGES_MANIFEST défini par
     data/images.js (inclus via <script> avant ce fichier). Pas de fetch :
     ça fonctionne même en ouvrant index.html en double-clic (file://). */
  function loadImages() {
    if (typeof IMAGES_MANIFEST === "object" && IMAGES_MANIFEST) {
      state.images = IMAGES_MANIFEST;
    } else {
      console.warn("[portfolio] data/images.js introuvable ou mal chargé. Fallback minimal appliqué.");
      state.images = FALLBACK_IMAGES;
    }
  }

  function getImageEntry(id) {
    return state.images[id] || FALLBACK_IMAGES[id] || null;
  }

  /** Construit un <img> si l'image est disponible, sinon un placeholder dégradé + icône. */
  function buildMedia(imageId, categoryKeyForIcon, alt) {
    const entry = getImageEntry(imageId);
    const wrap = el("div", { class: "project-media" });
    if (entry && entry.available && entry.src) {
      const img = el("img", { src: entry.src, alt: alt || "", loading: "lazy" });
      img.addEventListener("error", () => {
        wrap.innerHTML = "";
        wrap.appendChild(placeholderNode(categoryKeyForIcon));
      });
      wrap.appendChild(img);
    } else {
      wrap.appendChild(placeholderNode(categoryKeyForIcon));
    }
    return wrap;
  }

  function placeholderNode(categoryKey) {
    const icon = CATEGORY_ICON[categoryKey] || "fa-image";
    return el("div", { class: "project-media-placeholder" }, [el("i", { class: "fa-solid " + icon })]);
  }

  function resolvedSrc(imageId) {
    const entry = getImageEntry(imageId);
    return entry && entry.available ? entry.src : "";
  }

  /* ---------------- THEME ---------------- */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    localStorage.setItem("rk-theme", state.theme);
  }
  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
  }

  /* ---------------- LANG ---------------- */
  function applyStaticI18n() {
    $all("[data-i18n]").forEach((n) => {
      const path = n.getAttribute("data-i18n").split(".");
      let v = t();
      path.forEach((p) => (v = v && v[p]));
      if (v != null) n.innerHTML = v;
    });
    document.documentElement.lang = state.lang;
    document.title = t().meta.title;
    const metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t().meta.description);
    $("#langToggleLabel").textContent = t().langToggle;
  }

  function toggleLang() {
    state.lang = state.lang === "fr" ? "en" : "fr";
    localStorage.setItem("rk-lang", state.lang);
    renderAll();
  }

  /* ---------------- NAVBAR ---------------- */
  function renderNav() {
    const links = t().nav.links;
    const navLinks = $("#navLinks");
    const mobileLinks = $("#mobileMenuLinks");
    navLinks.innerHTML = "";
    mobileLinks.innerHTML = "";
    links.forEach((l) => {
      const a1 = el("a", { href: "#" + l.key, text: l.label, "data-section": l.key, "data-nav-link": "" });
      const a2 = el("a", { href: "#" + l.key, text: l.label, "data-section": l.key, "data-nav-link": "" });
      navLinks.appendChild(a1);
      mobileLinks.appendChild(a2);
    });
    // Les boutons CV (#navCvBtn et .mobile-menu .btn-primary) portent déjà
    // data-i18n="nav.cv", déjà appliqué par applyStaticI18n() avant renderNav().
  }

  /* ---------------- HERO ---------------- */
  let typedInstance = null;
  function renderHero() {
    const h = t().hero;
    const heroPhotoSrc = resolvedSrc("hero_photo");
    const heroPhotoEl = $("#heroPhoto");
    heroPhotoEl.style.display = heroPhotoSrc ? "" : "none";
    heroPhotoEl.onerror = () => (heroPhotoEl.style.display = "none");
    heroPhotoEl.src = heroPhotoSrc;
    heroPhotoEl.alt = h.name;
    $("#heroName").textContent = h.name;
    $("#heroTagline").textContent = h.tagline;

    const badges = $("#heroBadges");
    badges.innerHTML = "";
    h.badges.forEach((b) => badges.appendChild(el("span", { text: b })));

    const stats = $("#heroStats");
    stats.innerHTML = "";
    h.statsInline.forEach((s) => {
      const card = el("div", { class: "hero-stat" }, [
        el("div", { class: "hero-stat-value" }, [
          el("span", { class: "count-target", "data-count": s.value }, [document.createTextNode("0")]),
          document.createTextNode(s.suffix),
        ]),
        el("div", { class: "hero-stat-label", text: s.label }),
      ]);
      stats.appendChild(card);
    });

    if (typedInstance) typedInstance.destroy();
    if (window.Typed) {
      typedInstance = new Typed("#typedRole", {
        strings: h.roles,
        typeSpeed: 42,
        backSpeed: 26,
        backDelay: 1400,
        loop: true,
        smartBackspace: true,
      });
    } else {
      $("#typedRole").textContent = h.roles[0];
    }

    animateCounters();
  }

  function animateCounters() {
    $all(".count-target").forEach((node) => {
      const target = Number(node.getAttribute("data-count"));
      if (window.countUp && window.countUp.CountUp) {
        const counter = new window.countUp.CountUp(node, target, { duration: 2 });
        if (!counter.error) counter.start();
        else node.textContent = target;
      } else {
        node.textContent = target;
      }
    });
  }

  /* ---------------- ABOUT ---------------- */
  function renderAbout() {
    const a = t().about;
    $("#aboutPhoto").src = resolvedSrc("about_photo") || resolvedSrc("hero_photo");
    $("#aboutPhoto").alt = a.title;

    const p = $("#aboutParagraphs");
    p.innerHTML = "";
    a.paragraphs.forEach((txt) => p.appendChild(el("p", { html: txt })));

    $("#aboutQuote").textContent = "“ " + a.quote + " ”";

    const grid = $("#factsGrid");
    grid.innerHTML = "";
    a.facts.forEach((f, i) => {
      grid.appendChild(
        el("div", { class: "fact-card", "data-aos": "fade-up", "data-aos-delay": String((i % 3) * 80) }, [
          el("div", { class: "fact-icon" }, [el("i", { class: "fa-solid " + f.icon })]),
          el("div", {}, [
            el("div", { class: "fact-label", text: f.label }),
            el("div", { class: "fact-value", text: f.value }),
          ]),
        ])
      );
    });
  }

  /* ---------------- SKILLS ---------------- */
  function renderSkills() {
    const s = t().skills;
    $("#skillsSubtitle").textContent = s.subtitle;
    const grid = $("#skillsGrid");
    grid.innerHTML = "";
    s.categories.forEach((cat, i) => {
      const tagWrap = el("div", { class: "skill-tags" });
      cat.items.forEach((it) => tagWrap.appendChild(el("span", { text: it })));
      grid.appendChild(
        el("div", { class: "skill-card", "data-aos": "fade-up", "data-aos-delay": String((i % 3) * 90) }, [
          el("div", { class: "skill-card-head" }, [
            el("div", { class: "skill-icon" }, [el("i", { class: "fa-solid " + cat.icon })]),
            el("h3", { text: cat.name }),
          ]),
          tagWrap,
        ])
      );
    });
  }

  /* ---------------- EXPERIENCE (TIMELINE) ---------------- */
  function renderExperience() {
    const e = t().experience;
    $("#experienceSubtitle").textContent = e.subtitle;
    const wrap = $("#timeline");
    wrap.innerHTML = "";
    wrap.appendChild(el("div", { class: "timeline-track" }, [el("div", { class: "timeline-progress", id: "timelineProgress" })]));
    e.items.forEach((item, i) => {
      const points = el("ul", { class: "timeline-points" });
      item.points.forEach((pt) => points.appendChild(el("li", { text: pt })));
      wrap.appendChild(
        el("div", { class: "timeline-item", "data-aos": "fade-up", "data-aos-delay": String(Math.min(i, 4) * 70) }, [
          el("div", { class: "timeline-dot" }, [el("i", { class: "fa-solid " + item.icon })]),
          el("div", { class: "timeline-card" }, [
            el("div", { class: "timeline-period", text: item.period }),
            el("h3", { text: item.title }),
            el("div", { class: "timeline-company" }, [
              el("i", { class: "fa-solid fa-location-dot" }),
              document.createTextNode(item.company + " · " + item.location),
            ]),
            points,
          ]),
        ])
      );
    });
  }

  /* ---------------- EPSIE ---------------- */
  function renderEpsie() {
    const ep = t().epsie;
    $("#epsieKicker").textContent = ep.kicker;
    $("#epsieTitle").textContent = ep.title;
    $("#epsieDesc").textContent = ep.description;
    $("#epsieLinkLabel").textContent = ep.linkLabel;
    $("#epsieLink").href = ep.link;
    const members = $("#epsieMembers");
    members.innerHTML = "";
    ep.members.forEach((m) => members.appendChild(el("span", { text: m })));
  }

  /* ---------------- PROJECTS ---------------- */
  function renderProjectFilters() {
    const p = t().projects;
    const wrap = $("#filters");
    wrap.innerHTML = "";
    p.filters.forEach((f) => {
      const btn = el("button", {
        class: "filter-btn" + (f.key === state.activeFilter ? " active" : ""),
        type: "button",
        text: f.label,
        "data-filter": f.key,
      });
      btn.addEventListener("click", () => {
        state.activeFilter = f.key;
        renderProjectFilters();
        applyProjectFilter();
      });
      wrap.appendChild(btn);
    });
  }

  function renderProjects() {
    const p = t().projects;
    $("#projectsSubtitle").textContent = p.subtitle;
    const grid = $("#projectsGrid");
    grid.innerHTML = "";
    p.items.forEach((proj, i) => {
      const tagWrap = el("div", { class: "project-tags" });
      proj.tags.slice(0, 4).forEach((tag) => tagWrap.appendChild(el("span", { text: tag })));

      const card = el(
        "div",
        {
          class: "project-card",
          "data-category": proj.category,
          "data-aos": "fade-up",
          "data-aos-delay": String((i % 3) * 90),
        },
        [
          buildMedia(proj.image, proj.category, proj.title),
          el("div", { class: "project-body" }, [
            el("h3", { text: proj.title }),
            el("p", { class: "project-summary", text: proj.summary }),
            tagWrap,
            el("span", { class: "project-more" }, [
              document.createTextNode(p.viewMore),
              el("i", { class: "fa-solid fa-arrow-right" }),
            ]),
          ]),
        ]
      );

      if (proj.featured) {
        card.querySelector(".project-media").appendChild(
          el("span", { class: "project-featured-badge" }, [
            el("i", { class: "fa-solid fa-star" }),
            document.createTextNode("Featured"),
          ])
        );
      }

      card.addEventListener("click", () => openModal(proj));
      grid.appendChild(card);
    });
    applyProjectFilter();
  }

  function applyProjectFilter() {
    $all(".project-card").forEach((card) => {
      const match = state.activeFilter === "all" || card.getAttribute("data-category") === state.activeFilter;
      card.classList.toggle("hide", !match);
    });
  }

  function openModal(proj) {
    const modal = $("#projectModal");
    $("#modalMedia").innerHTML = "";
    $("#modalMedia").appendChild(buildMedia(proj.image, proj.category, proj.title));
    $("#modalTitle").textContent = proj.title;
    $("#modalDescription").textContent = proj.description;
    const tagsWrap = $("#modalTags");
    tagsWrap.innerHTML = "";
    proj.tags.forEach((tag) => tagsWrap.appendChild(el("span", { text: tag })));

    $("#modalLinkLabel").textContent = t().projects.visit;
    const linkBtn = $("#modalLink");
    if (proj.link) {
      linkBtn.href = proj.link;
      linkBtn.style.display = "inline-flex";
    } else {
      linkBtn.style.display = "none";
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const modal = $("#projectModal");
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  /* ---------------- EDUCATION ---------------- */
  function renderEducation() {
    const ed = t().education;
    const grid = $("#educationGrid");
    grid.innerHTML = "";
    ed.items.forEach((item, i) => {
      const logoEntry = getImageEntry(item.logo);
      const logoNode =
        logoEntry && logoEntry.available && logoEntry.src
          ? el("img", { src: logoEntry.src, alt: item.school })
          : el("i", { class: "fa-solid fa-graduation-cap" });
      grid.appendChild(
        el("div", { class: "education-card", "data-aos": "fade-up", "data-aos-delay": String(i * 80) }, [
          el("div", { class: "education-logo" }, [logoNode]),
          el("div", {}, [
            el("div", { class: "education-period", text: item.period }),
            el("h3", { text: item.degree }),
            el("div", { class: "education-school", text: item.school }),
            el("div", { class: "education-details", text: item.details }),
          ]),
        ])
      );
    });

    $("#certificationsTitle").textContent = ed.certifications.title;
    const certs = $("#certificationsList");
    certs.innerHTML = "";
    ed.certifications.items.forEach((c) => {
      certs.appendChild(
        el("div", { class: "cert-chip" }, [
          el("i", { class: "fa-solid fa-circle-check" }),
          document.createTextNode(c.name),
          el("small", { text: "(" + c.issuer + ")" }),
        ])
      );
    });
  }

  /* ---------------- CONTACT ---------------- */
  function renderContact() {
    const c = t().contact;
    $("#contactSubtitle").textContent = c.subtitle;
    $("#availabilityTitle").textContent = c.availabilityTitle;
    $("#availabilityText").textContent = c.availability;
    $("#contactCtaLabel").textContent = c.ctaButton;

    const cards = $("#contactCards");
    cards.innerHTML = "";
    const items = [
      { icon: "fa-envelope", label: c.emailLabel, value: CONTACT_INFO.email, href: "mailto:" + CONTACT_INFO.email },
      { icon: "fa-phone", label: c.phoneLabel, value: CONTACT_INFO.phone, href: CONTACT_INFO.phoneHref },
      { icon: "fa-location-dot", label: c.locationLabel, value: c.location, href: null },
    ];
    items.forEach((it, i) => {
      const inner = [
        el("div", { class: "contact-card-icon" }, [el("i", { class: "fa-solid " + it.icon })]),
        el("div", {}, [
          el("div", { class: "contact-card-label", text: it.label }),
          el("div", { class: "contact-card-value", text: it.value }),
        ]),
      ];
      const node = it.href
        ? el("a", { class: "contact-card", href: it.href, "data-aos": "fade-up", "data-aos-delay": String(i * 80) }, inner)
        : el("div", { class: "contact-card", "data-aos": "fade-up", "data-aos-delay": String(i * 80) }, inner);
      cards.appendChild(node);
    });

    const socials = $("#contactSocials");
    socials.innerHTML = "";
    SOCIALS.filter((s) => s.url).forEach((s) => {
      const isExternal = s.url.startsWith("http");
      socials.appendChild(
        el(
          "a",
          {
            href: s.url,
            "aria-label": s.name,
            title: s.name,
            ...(isExternal ? { target: "_blank", rel: "noopener" } : {}),
          },
          [el("i", { class: s.icon })]
        )
      );
    });
  }

  /* ---------------- FOOTER ---------------- */
  function renderFooter() {
    $("#footerText").textContent = "© " + new Date().getFullYear() + " Régis KESSÉ. " + t().footer.text;
  }

  /* ---------------- OG IMAGE ---------------- */
  function renderMeta() {
    const og = getImageEntry("og_image");
    if (og && og.available && og.src) $("#og-image").setAttribute("content", og.src);
  }

  /* ---------------- RENDER ALL ---------------- */
  function renderAll() {
    applyStaticI18n();
    renderNav();
    renderHero();
    renderAbout();
    renderSkills();
    renderExperience();
    renderEpsie();
    renderProjectFilters();
    renderProjects();
    renderEducation();
    renderContact();
    renderFooter();
    renderMeta();
    bindNavLinks();
    if (window.AOS) AOS.refreshHard();
    initGsap();
  }

  /* ---------------- NAV BEHAVIOR ---------------- */
  function bindNavLinks() {
    $all("[data-nav-link]").forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileMenu();
      });
    });
  }

  function initScrollSpy() {
    const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            $all('.nav-links a, .mobile-menu-links a').forEach((a) => {
              a.classList.toggle("active", a.getAttribute("data-section") === id);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
  }

  function initNavbarScroll() {
    const nav = $("#navbar");
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initMobileMenu() {
    const hamburger = $("#hamburger");
    hamburger.addEventListener("click", () => {
      const open = $("#mobileMenu").classList.toggle("open");
      hamburger.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
  }
  function closeMobileMenu() {
    $("#mobileMenu").classList.remove("open");
    $("#hamburger").classList.remove("open");
    $("#hamburger").setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  function initBackToTop() {
    const btn = $("#backToTop");
    window.addEventListener(
      "scroll",
      () => {
        btn.style.opacity = window.scrollY > 500 ? "1" : "0";
        btn.style.pointerEvents = window.scrollY > 500 ? "auto" : "none";
      },
      { passive: true }
    );
    btn.style.opacity = "0";
    btn.style.transition = "opacity .3s ease";
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function initCursorGlow() {
    const glow = $("#cursorGlow");
    if (!glow || window.matchMedia("(hover: none)").matches) return;
    window.addEventListener("mousemove", (e) => {
      glow.classList.add("active");
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
  }

  function initModal() {
    $("#modalClose").addEventListener("click", closeModal);
    $("#projectModal").addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  /* ---------------- PHOTO LIGHTBOX (hero / about) ---------------- */
  function openLightbox(imgEl) {
    if (!imgEl || imgEl.style.display === "none" || !imgEl.getAttribute("src")) return;
    const lightbox = $("#photoLightbox");
    const lightboxImg = $("#lightboxImg");
    lightboxImg.src = imgEl.currentSrc || imgEl.src;
    lightboxImg.alt = imgEl.alt || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    const lightbox = $("#photoLightbox");
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function initLightbox() {
    $("#heroAvatarBtn").addEventListener("click", () => openLightbox($("#heroPhoto")));
    $("#aboutPhotoBtn").addEventListener("click", () => openLightbox($("#aboutPhoto")));
    $("#lightboxClose").addEventListener("click", closeLightbox);
    $("#photoLightbox").addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });
  }

  function initToggles() {
    $("#themeToggle").addEventListener("click", toggleTheme);
    $("#langToggle").addEventListener("click", toggleLang);
  }

  /* ---------------- PARTICLES ---------------- */
  function initParticles() {
    if (!window.tsParticles) return;
    tsParticles.load("particles-bg", {
      fpsLimit: 60,
      fullScreen: { enable: false },
      background: { color: "transparent" },
      particles: {
        number: { value: 55, density: { enable: true, area: 900 } },
        color: { value: ["#7c3aed", "#06b6d4", "#f472b6"] },
        links: { enable: true, color: "#6d5bd0", distance: 140, opacity: 0.22, width: 1 },
        move: { enable: true, speed: 0.6, outModes: { default: "out" } },
        opacity: { value: 0.55 },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "grab" }, resize: true },
        modes: { grab: { distance: 160, links: { opacity: 0.4 } } },
      },
      detectRetina: true,
    });
  }

  /* ---------------- GSAP EXTRAS ----------------
     Rejoué après chaque renderAll() (ex: changement de langue) car le DOM
     de la timeline est recréé à chaque rendu, on doit donc détruire les
     anciens ScrollTrigger (qui pointent vers des nœuds supprimés) avant
     d'en recréer de nouveaux. */
  function initGsap() {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" });
    ScrollTrigger.getAll().forEach((st) => st.kill());


    // Parallax léger sur les halos du hero
    gsap.to(".hero-glow--1", {
      y: 80,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 },
    });
    gsap.to(".hero-glow--2", {
      y: -60,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 },
    });

    // Timeline : la ligne se "dessine" au scroll
    const timelineEl = $("#timeline");
    const progressEl = $("#timelineProgress");
    if (timelineEl && progressEl) {
      gsap.fromTo(
        progressEl,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: timelineEl, start: "top 75%", end: "bottom 85%", scrub: 0.6 },
        }
      );
    }
  }

  /* ---------------- PRELOADER ---------------- */
  function hidePreloader() {
    const pre = $("#preloader");
    setTimeout(() => pre.classList.add("loaded"), 350);
  }

  /* ---------------- INIT ---------------- */
  async function init() {
    applyTheme();
    await loadImages();
    renderAll();

    if (window.AOS) AOS.init({ duration: 700, once: true, offset: 60, easing: "ease-out-cubic" });

    initNavbarScroll();
    initScrollSpy();
    initMobileMenu();
    initBackToTop();
    initCursorGlow();
    initModal();
    initLightbox();
    initToggles();
    initParticles();
    hidePreloader();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
