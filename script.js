
const portfolioData = {
  name: "Rahul Ranjan",
  title: "Aspiring Full-Stack Developer | React.js",
  github: "https://github.com/rahul-ranjan971",
  linkedin: "https://www.linkedin.com/in/rahul-ranjan-640945317",
  whatsapp: "9718395963",
  phone: "9718395963",
  email: "rranjan.1212.7465@gmail.com",
  resume: "Rahul_Ranjan_Resume_Updated.pdf",
  location: "India",
  heroEyebrow: "BCA Student | React Developer | Aspiring Full-Stack Developer",
  heroSummary: "I build responsive React interfaces and am expanding my backend skills to create complete web applications.",
  about:
    "I am a BCA student with hands-on experience building responsive web interfaces using React, JavaScript and Tailwind CSS. I am now developing backend and database skills to grow into a full-stack developer.",
  trustStats: [
    {
      key: "projects-built",
      value: "Real GitHub Work"
    },
    {
      key: "learning",
      value: "Always Improving"
    },
    {
      key: "frontend",
      value: "React, JavaScript, Tailwind CSS"
    },
    {
      key: "opportunities",
      value: "Open to Opportunities"
    }
  ],
  skills: [
    { title: "HTML5", detail: "Semantic page structure and accessible markup." },
    { title: "CSS3", detail: "Responsive layouts, visual styling and cross-device presentation." },
    { title: "JavaScript", detail: "ES6+ syntax and interactive client-side functionality." },
    { title: "React.js", detail: "Reusable components and component-driven user interfaces." },
    { title: "Tailwind CSS", detail: "Utility-first styling for consistent responsive interfaces." },
    { title: "Vite", detail: "Modern frontend development and build tooling." },
    { title: "Git & GitHub", detail: "Version control and public project collaboration workflows." },
    { title: "Backend Development", detail: "Currently building backend and database fundamentals." }
  ],
  projectSettings: {
    featuredRepos: ["udaan-foundation", "northpeak-digital", "admin-panel"],
    excludeRepos: ["portfolio-website", "animation-in-css", "project-sheryians-first-page", "sheriyans-first-page"],
    maxProjects: 6,
    manualProjects: [],
    showManualProjects: false,
    cacheKey: "rahul-portfolio-project-cache",
    cacheTtlMs: 1000 * 60 * 60 * 6
  },
  projectLanguageHints: {
    "udaan-foundation": ["React.js", "Tailwind CSS", "Vite"],
    "northpeak-digital": ["React.js", "Tailwind CSS", "Vite"],
    "admin-panel": ["HTML", "CSS", "JavaScript"]
  },
  fallbackProjects: [
    {
      name: "udaan-foundation",
      description: "A responsive NGO website presenting the organisation's mission, causes, impact stories, gallery and donation-focused content, built with reusable React components and Tailwind CSS.",
      html_url: "https://github.com/rahul-ranjan971/udaan-foundation",
      homepage: "https://udaan-foundation.vercel.app",
      stargazers_count: 0,
      language: "JavaScript",
      languages: ["React.js", "Tailwind CSS", "Vite"],
      source: "fallback"
    },
    {
      name: "northpeak-digital",
      description: "A responsive digital agency website built with React, Tailwind CSS and Vite, featuring reusable interface components and structured agency sections.",
      html_url: "https://github.com/rahul-ranjan971/northpeak-digital",
      homepage: "",
      stargazers_count: 0,
      language: "JavaScript",
      languages: ["React.js", "Tailwind CSS", "Vite"],
      source: "fallback"
    },
    {
      name: "admin-panel",
      description: "An administrative web interface built with HTML, CSS and JavaScript, focused on structured layouts, interactive elements and responsive presentation.",
      html_url: "https://github.com/rahul-ranjan971/admin-panel",
      homepage: "https://rahul-ranjan971.github.io/admin-panel/",
      stargazers_count: 0,
      language: "HTML",
      languages: ["HTML", "CSS", "JavaScript"],
      source: "fallback"
    }
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/rahul-ranjan971"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rahul-ranjan-640945317"
    }
  ],
  typingPhrases: [
    "Frontend Developer",
    "Future Full Stack Developer",
    "Clean UI Builder"
  ]
};

const state = {
  activeSection: "home",
  currentTheme: "light",
  pointer: { x: 0, y: 0 },
  cursorRAF: 0,
  scrollRAF: 0,
  contactInView: false,
  projectsInView: false
};

const selectors = {
  body: document.body,
  loader: document.getElementById("loader"),
  themeToggle: document.getElementById("theme-toggle"),
  menuToggle: document.getElementById("menu-toggle"),
  mobileDrawer: document.getElementById("mobile-drawer"),
  navOverlay: document.getElementById("nav-overlay"),
  navLinks: document.querySelectorAll("[data-nav-link], .desktop-nav__list a"),
  typedTitle: document.getElementById("typed-title"),
  heroEyebrow: document.getElementById("hero-eyebrow"),
  heroSummary: document.getElementById("hero-summary"),
  aboutSummary: document.getElementById("about-summary"),
  projectsGrid: document.getElementById("projects-grid"),
  projectsStatus: document.getElementById("projects-status"),
  projectsEmpty: document.getElementById("projects-empty"),
  skeletonGrid: document.getElementById("projects-skeletons"),
  projectTemplate: document.getElementById("project-card-template"),
  copyEmailBtn: document.getElementById("copy-email-btn"),
  copyEmailFeedback: document.getElementById("copy-email-feedback"),
  emailLink: document.getElementById("email-link"),
  callLink: document.getElementById("call-link"),
  whatsappLink: document.getElementById("whatsapp-link"),
  linkedinLink: document.getElementById("linkedin-link"),
  footerLinkedinLink: document.getElementById("footer-linkedin-link"),
  contactForm: document.getElementById("contact-form"),
  contactFormFeedback: document.getElementById("contact-form-feedback"),
  backToTop: document.getElementById("back-to-top"),
  floatingContactCTA: document.getElementById("floating-contact-cta"),
  cursorGlow: document.getElementById("cursor-glow"),
  footerYear: document.getElementById("footer-year")
};

const media = {
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)"),
  prefersDark: window.matchMedia("(prefers-color-scheme: dark)"),
  hoverFine: window.matchMedia("(hover: hover) and (pointer: fine)"),
  desktop: window.matchMedia("(min-width: 992px)")
};

document.addEventListener("DOMContentLoaded", () => {
  hydrateStaticContent();
  setupTheme();
  setupNavigation();
  setupTypingEffect();
  setupRevealAnimations();
  setupBackToTop();
  setupCursorGlow();
  setupMagneticButtons();
  setupInteractiveHoverTargets();
  setupCopyEmail();
  setupContactForm();
  setupFooterYear();
  loadProjects();
  markPageReady();
});

window.addEventListener("load", () => {
  window.setTimeout(markPageReady, 200);
});

function hydrateStaticContent() {
  document.title = `${portfolioData.name} | Frontend Developer Portfolio for Recruiters`;

  if (selectors.heroEyebrow) {
    selectors.heroEyebrow.textContent = portfolioData.heroEyebrow;
  }

  if (selectors.heroSummary) {
    selectors.heroSummary.textContent = portfolioData.heroSummary;
  }

  if (selectors.aboutSummary) {
    selectors.aboutSummary.textContent = portfolioData.about;
  }

  document.querySelectorAll("[data-stat]").forEach((node) => {
    const match = portfolioData.trustStats.find((item) => item.key === node.dataset.stat);
    if (match) {
      node.textContent = match.value;
    }
  });

  document.querySelectorAll("#skills-grid .skill-card").forEach((card, index) => {
    const skill = portfolioData.skills[index];

    if (!skill) {
      return;
    }

    const title = card.querySelector("h3");
    const detail = card.querySelector("p");

    if (title) {
      title.textContent = skill.title;
    }

    if (detail) {
      detail.textContent = skill.detail;
    }
  });

  applyContactContent();
}

function applyContactContent() {
  const contactLocation = document.getElementById("contact-location");
  const linkedResumeButtons = document.querySelectorAll('a[href="resume.pdf"]');
  const githubButtons = document.querySelectorAll('a[href="https://github.com/rahul-ranjan971"]');
  const footerName = document.querySelector(".site-footer__name");
  const brandName = document.querySelector(".brand-mark__text strong");
  const brandSub = document.querySelector(".brand-mark__text span");

  if (footerName) {
    footerName.textContent = portfolioData.name;
  }

  if (brandName) {
    brandName.textContent = portfolioData.name;
  }

  if (brandSub) {
    brandSub.textContent = portfolioData.title.split("|")[0].trim();
  }

  if (contactLocation) {
    contactLocation.textContent = portfolioData.location;
  }

  linkedResumeButtons.forEach((link) => {
    link.setAttribute("href", portfolioData.resume);
  });

  githubButtons.forEach((link) => {
    link.setAttribute("href", portfolioData.github);
  });

  if (selectors.floatingContactCTA) {
    selectors.floatingContactCTA.textContent = `Contact ${portfolioData.name.split(" ")[0]}`;
  }

  const emailValue = getEmailValue();
  const emailLinkEnabled = Boolean(emailValue);

  if (selectors.emailLink) {
    selectors.emailLink.textContent = emailLinkEnabled ? `Email ${portfolioData.name.split(" ")[0]}` : "Email Update Later";

    if (emailLinkEnabled) {
      selectors.emailLink.href = `mailto:${emailValue}`;
      selectors.emailLink.removeAttribute("aria-disabled");
      selectors.emailLink.removeAttribute("tabindex");
    } else {
      selectors.emailLink.href = "#";
      selectors.emailLink.setAttribute("aria-disabled", "true");
      selectors.emailLink.setAttribute("tabindex", "-1");
    }
  }

  applyContactLink(selectors.callLink, getPhoneHref(), isPlaceholder(portfolioData.phone) ? "Call" : "Call Rahul");
  applyContactLink(
    selectors.whatsappLink,
    getWhatsappHref(),
    isPlaceholder(portfolioData.whatsapp) ? "WhatsApp" : "Message on WhatsApp"
  );
  applyContactLink(
    selectors.linkedinLink,
    getSafeExternalUrl(portfolioData.linkedin),
    isPlaceholder(portfolioData.linkedin) ? "LinkedIn" : "LinkedIn Profile"
  );
  applyContactLink(
    selectors.footerLinkedinLink,
    getSafeExternalUrl(portfolioData.linkedin),
    "LinkedIn"
  );
}

function setupTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");
  const initialTheme = savedTheme || (media.prefersDark.matches ? "dark" : "light");

  applyTheme(initialTheme);

  if (selectors.themeToggle) {
    selectors.themeToggle.addEventListener("click", () => {
      const nextTheme = state.currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("portfolio-theme", nextTheme);
      applyTheme(nextTheme);
    });
  }

  media.prefersDark.addEventListener("change", (event) => {
    if (!localStorage.getItem("portfolio-theme")) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });
}

function applyTheme(theme) {
  state.currentTheme = theme;
  selectors.body.dataset.theme = theme;
  selectors.body.classList.remove("theme-pending");
  updateThemeMeta(theme);
}

function updateThemeMeta(theme) {
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  if (!themeColorMeta) {
    return;
  }

  themeColorMeta.setAttribute("content", theme === "dark" ? "#091017" : "#f4efe8");
}

function setupNavigation() {
  if (selectors.menuToggle) {
    selectors.menuToggle.addEventListener("click", () => {
      const expanded = selectors.menuToggle.getAttribute("aria-expanded") === "true";
      expanded ? closeMenu() : openMenu();
    });
  }

  selectors.navOverlay?.addEventListener("click", closeMenu);

  document.querySelectorAll("[data-close-menu]").forEach((button) => {
    button.addEventListener("click", closeMenu);
  });

  selectors.navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) {
        return;
      }

      setActiveNav(visibleEntry.target.id);
    },
    {
      rootMargin: "-30% 0px -50% 0px",
      threshold: [0.2, 0.45, 0.7]
    }
  );

  sections.forEach((section) => observer.observe(section));
  setActiveNav("home");
}

function openMenu() {
  // Don't open on desktop — desktop nav handles navigation
  if (media.desktop.matches) return;
  if (!selectors.mobileDrawer || !selectors.menuToggle || !selectors.navOverlay) return;

  selectors.body.classList.add("menu-open");
  selectors.navOverlay.style.display = "block";
  selectors.mobileDrawer.style.display = "flex";

  // Force reflow so transitions play
  selectors.navOverlay.offsetHeight;

  selectors.mobileDrawer.classList.add("is-open");
  selectors.navOverlay.classList.add("is-visible");
  selectors.mobileDrawer.setAttribute("aria-hidden", "false");
  selectors.menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  if (!selectors.mobileDrawer || !selectors.menuToggle || !selectors.navOverlay) return;

  selectors.body.classList.remove("menu-open");
  selectors.mobileDrawer.classList.remove("is-open");
  selectors.navOverlay.classList.remove("is-visible");
  selectors.mobileDrawer.setAttribute("aria-hidden", "true");
  selectors.menuToggle.setAttribute("aria-expanded", "false");

  // Hide after transition completes
  const dur = parseFloat(getComputedStyle(selectors.mobileDrawer).transitionDuration) * 1000 || 350;
  setTimeout(() => {
    if (!selectors.mobileDrawer.classList.contains("is-open")) {
      selectors.navOverlay.style.display = "";
      selectors.mobileDrawer.style.display = "";
    }
  }, dur);
}

function setActiveNav(sectionId) {
  state.activeSection = sectionId;
  selectors.navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const isActive = href === `#${sectionId}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function setupTypingEffect() {
  if (!selectors.typedTitle) {
    return;
  }

  if (media.reducedMotion.matches) {
    selectors.typedTitle.textContent = portfolioData.title;
    return;
  }

  const phrases = portfolioData.typingPhrases;
  let phraseIndex = 0;
  let charIndex = phrases[0].length;
  let isDeleting = false;

  selectors.typedTitle.textContent = phrases[0];

  const tick = () => {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex -= 1;
    } else {
      charIndex += 1;
    }

    selectors.typedTitle.textContent = currentPhrase.slice(0, charIndex);

    if (!isDeleting && charIndex >= currentPhrase.length) {
      selectors.typedTitle.textContent = currentPhrase;
      isDeleting = true;
      window.setTimeout(tick, 1100);
      return;
    }

    if (isDeleting && charIndex <= 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      charIndex = 0;
    }

    const delay = isDeleting ? 42 : 78;
    window.setTimeout(tick, delay);
  };

  window.setTimeout(tick, 900);
}

function setupRevealAnimations() {
  const revealTargets = document.querySelectorAll(
    ".section-copy, .trust-card, .skill-card, .project-card, .about-highlight, .resume-panel, .contact-card, .site-footer__inner"
  );

  if (media.reducedMotion.matches) {
    revealTargets.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-on-scroll", "is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealTargets.forEach((node) => {
    node.classList.add("reveal-on-scroll");
    revealObserver.observe(node);
  });
}

function setupBackToTop() {
  if (selectors.backToTop) {
    selectors.backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: media.reducedMotion.matches ? "auto" : "smooth" });
    });
  }

  const updateVisibility = () => {
    const shouldShow = window.scrollY > 560;
    const isMobile = window.innerWidth < 768;
    const showFloatingCta =
      window.scrollY > 280 &&
      isMobile &&
      !state.projectsInView &&
      !state.contactInView;

    selectors.backToTop?.classList.toggle("is-visible", shouldShow && !isMobile);
    selectors.floatingContactCTA?.classList.toggle("is-visible", showFloatingCta);
  };

  const onScroll = () => {
    if (state.scrollRAF) {
      return;
    }

    state.scrollRAF = window.requestAnimationFrame(() => {
      updateVisibility();
      state.scrollRAF = 0;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateVisibility();

  const contactSection = document.getElementById("contact");
  const projectsSection = document.getElementById("projects");
  if (contactSection) {
    const contactObserver = new IntersectionObserver(
      (entries) => {
        state.contactInView = entries.some((entry) => entry.isIntersecting);
        updateVisibility();
      },
      {
        threshold: 0.25
      }
    );

    contactObserver.observe(contactSection);
  }

  if (projectsSection) {
    const projectsObserver = new IntersectionObserver(
      (entries) => {
        state.projectsInView = entries.some((entry) => entry.isIntersecting);
        updateVisibility();
      },
      {
        threshold: 0.2
      }
    );

    projectsObserver.observe(projectsSection);
  }
}

function setupCursorGlow() {
  if (!selectors.cursorGlow || !media.hoverFine.matches || media.reducedMotion.matches || !media.desktop.matches) {
    selectors.cursorGlow?.remove();
    return;
  }

  const renderCursor = () => {
    selectors.cursorGlow.style.transform = `translate(${state.pointer.x}px, ${state.pointer.y}px) translate(-50%, -50%)`;
    state.cursorRAF = 0;
  };

  window.addEventListener("pointermove", (event) => {
    state.pointer.x = event.clientX;
    state.pointer.y = event.clientY;
    selectors.cursorGlow.classList.add("is-active");

    if (!state.cursorRAF) {
      state.cursorRAF = window.requestAnimationFrame(renderCursor);
    }
  });

  window.addEventListener("pointerleave", () => {
    selectors.cursorGlow.classList.remove("is-active");
  });
}

function setupMagneticButtons() {
  if (!media.hoverFine.matches || media.reducedMotion.matches) {
    return;
  }

  document
    .querySelectorAll(".button, .desktop-nav__list a, .brand-mark, .icon-button")
    .forEach((element) => {
      element.classList.add("magnetic-ready");

      element.addEventListener("pointermove", (event) => {
        const rect = element.getBoundingClientRect();
        const offsetX = (event.clientX - rect.left - rect.width / 2) * 0.08;
        const offsetY = (event.clientY - rect.top - rect.height / 2) * 0.08;
        element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });

      const resetTransform = () => {
        element.style.transform = "";
      };

      element.addEventListener("pointerleave", resetTransform);
      element.addEventListener("blur", resetTransform);
    });
}

function setupInteractiveHoverTargets() {
  if (!selectors.cursorGlow || !media.hoverFine.matches || media.reducedMotion.matches) {
    return;
  }

  document
    .querySelectorAll(".desktop-nav__list a, .brand-mark, .icon-button, .site-header .button")
    .forEach((target) => {
      target.addEventListener("pointerenter", () => {
        selectors.cursorGlow.classList.add("is-active");
        selectors.cursorGlow.style.opacity = "0.9";
      });

      target.addEventListener("pointerleave", () => {
        selectors.cursorGlow.style.opacity = "";
      });
    });
}

async function loadProjects() {
  renderProjectsLoadingState();

  try {
    const repositories = await fetchCuratedRepos();
    const curated = normalizeProjects(repositories);

    if (!curated.length) {
      throw new Error("No featured repositories were returned by GitHub.");
    }

    renderProjects(curated, "Featured projects loaded live from GitHub.");
  } catch (error) {
    const fallback = normalizeProjects(portfolioData.fallbackProjects);
    renderProjects(
      fallback,
      "Showing curated project details because live GitHub data is temporarily unavailable.",
      true
    );
  }
}

function renderProjectsLoadingState() {
  if (selectors.projectsStatus) {
    selectors.projectsStatus.textContent = "Loading curated projects from GitHub.";
  }

  selectors.projectsGrid?.replaceChildren();
  selectors.projectsEmpty?.setAttribute("hidden", "");
  selectors.skeletonGrid?.removeAttribute("hidden");
}

async function fetchCuratedRepos() {
  const endpoint = new URL("https://api.github.com/users/rahul-ranjan971/repos");
  endpoint.searchParams.set("per_page", "100");
  endpoint.searchParams.set("sort", "updated");

  const response = await fetch(endpoint.toString(), {
    headers: {
      Accept: "application/vnd.github+json"
    }
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed with status ${response.status}`);
  }

  const repos = await response.json();
  const filteredRepos = repos
    .filter((repo) => !repo.fork)
    .filter((repo) => !repo.archived)
    .filter((repo) => repo.size > 0)
    .filter((repo) => !portfolioData.projectSettings.excludeRepos.includes(repo.name))
    .filter((repo) => portfolioData.projectSettings.featuredRepos.includes(repo.name))
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, portfolioData.projectSettings.maxProjects);

  const hydratedRepos = filteredRepos.map((repo) => ({
    ...repo,
    languages: getLanguageHints(repo.name, repo.language)
  }));

  if (portfolioData.projectSettings.showManualProjects) {
    return hydratedRepos.concat(portfolioData.projectSettings.manualProjects);
  }

  return hydratedRepos;
}

function normalizeProjects(projects) {
  return projects.map((project) => ({
    name: project.name,
    description: project.description || getFallbackDescription(project.name),
    githubUrl: project.html_url,
    liveUrl: typeof project.homepage === "string" ? project.homepage.trim() : "",
    stars: project.stargazers_count ?? 0,
    updatedAt: project.updated_at,
    primaryLanguage: project.language || "Web",
    languages: Array.isArray(project.languages) && project.languages.length
      ? project.languages
      : [project.language || "Web"],
    source: project.source || "live"
  }));
}

function renderProjects(projects, statusMessage, isFallback = false) {
  if (!selectors.projectsGrid || !selectors.projectTemplate) {
    return;
  }

  selectors.projectsGrid.replaceChildren();
  selectors.skeletonGrid?.setAttribute("hidden", "");

  const fragment = document.createDocumentFragment();

  projects.forEach((project) => {
    const node = selectors.projectTemplate.content.firstElementChild.cloneNode(true);
    const title = node.querySelector("[data-project-name]");
    const description = node.querySelector("[data-project-description]");
    const tags = node.querySelector("[data-project-tags]");
    const stars = node.querySelector("[data-project-stars]");
    const language = node.querySelector("[data-project-language]");
    const updated = node.querySelector("[data-project-updated]");
    const github = node.querySelector("[data-project-github]");
    const demo = node.querySelector("[data-project-demo]");
    const overlay = node.querySelector("[data-project-overlay]");
    const liveBadge = node.querySelector("[data-project-live-badge]");

    if (title) {
      title.textContent = humanizeRepoName(project.name);
    }

    if (description) {
      description.textContent = project.description;
    }

    if (tags) {
      tags.replaceChildren();
      project.languages.slice(0, 3).forEach((item) => {
        const badge = document.createElement("span");
        badge.textContent = item;
        tags.appendChild(badge);
      });
    }

    if (stars) {
      stars.textContent = `${project.stars} ${project.stars === 1 ? "star" : "stars"}`;
    }

    if (language) {
      language.textContent = `Primary: ${project.primaryLanguage}`;
    }

    if (updated) {
      updated.textContent = `Updated ${formatDate(project.updatedAt)}`;
    }

    if (github) {
      github.href = project.githubUrl;
      github.setAttribute("aria-label", `View ${project.name} repository on GitHub`);
    }

    const preferredUrl = project.liveUrl || project.githubUrl;

    if (overlay) {
      overlay.href = preferredUrl;
      overlay.setAttribute(
        "aria-label",
        project.liveUrl
          ? `Open live demo for ${project.name}`
          : `Open ${project.name} repository on GitHub`
      );
    }

    if (demo) {
      if (project.liveUrl) {
        demo.hidden = false;
        demo.href = project.liveUrl;
        demo.setAttribute("aria-label", `View live demo for ${project.name}`);
      } else {
        demo.hidden = true;
      }
    }

    if (liveBadge) {
      liveBadge.hidden = !project.liveUrl;
    }

    fragment.appendChild(node);
  });

  selectors.projectsGrid.appendChild(fragment);
  selectors.projectsGrid.classList.toggle("has-two-cards", projects.length <= 2);
  selectors.projectsEmpty?.toggleAttribute("hidden", projects.length > 2);

  if (selectors.projectsStatus) {
    selectors.projectsStatus.textContent = statusMessage;
    selectors.projectsStatus.dataset.mode = isFallback ? "fallback" : "live";
  }

  if (!media.reducedMotion.matches) {
    selectors.projectsGrid.querySelectorAll(".project-card").forEach((card) => {
      card.classList.add("reveal-on-scroll");
      requestAnimationFrame(() => card.classList.add("is-visible"));
    });
  }
}

function setupCopyEmail() {
  if (!selectors.copyEmailBtn || !selectors.copyEmailFeedback) {
    return;
  }

  selectors.copyEmailBtn.addEventListener("click", async () => {
    const emailValue = getEmailValue() || portfolioData.email;

    try {
      await navigator.clipboard.writeText(emailValue);
      selectors.copyEmailFeedback.textContent = "Email copied successfully.";
    } catch (error) {
      selectors.copyEmailFeedback.textContent = "Could not copy automatically. Please copy it manually.";
    }
  });
}

function setupContactForm() {
  if (!selectors.contactForm || !selectors.contactFormFeedback) {
    return;
  }

  const fields = Array.from(
    selectors.contactForm.querySelectorAll("input, textarea")
  );

  fields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => clearFieldError(field));
  });

  selectors.contactForm.addEventListener("submit", (event) => {
    const isFormValid = fields.every((field) => validateField(field));

    if (!isFormValid) {
      selectors.contactFormFeedback.textContent =
        "Please complete the required fields before sending.";
      return;
    }

    selectors.contactFormFeedback.textContent = "Sending message...";
  });
}

function validateField(field) {
  const wrapper = field.closest(".form-field");

  if (!wrapper) {
    return true;
  }

  let valid = true;

  if (field.hasAttribute("required") && !field.value.trim()) {
    valid = false;
  }

  if (valid && field.type === "email" && field.value.trim()) {
    valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
  }

  wrapper.classList.toggle("is-invalid", !valid);
  return valid;
}

function clearFieldError(field) {
  const wrapper = field.closest(".form-field");
  wrapper?.classList.remove("is-invalid");
}

function setupFooterYear() {
  if (selectors.footerYear) {
    selectors.footerYear.textContent = String(new Date().getFullYear());
  }
}

function markPageReady() {
  selectors.body.classList.remove("is-loading");
  selectors.body.classList.add("is-ready");
}

function getEmailValue() {
  if (isPlaceholder(portfolioData.email)) {
    return "";
  }

  return portfolioData.email.trim();
}

function getPhoneHref() {
  if (isPlaceholder(portfolioData.phone)) {
    return "";
  }

  const digits = portfolioData.phone.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : "";
}

function getWhatsappHref() {
  if (isPlaceholder(portfolioData.whatsapp)) {
    return "";
  }

  const digits = portfolioData.whatsapp.replace(/[^\d]/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}

function getSafeExternalUrl(value) {
  if (isPlaceholder(value)) {
    return "";
  }

  try {
    const url = new URL(value);
    return url.toString();
  } catch (error) {
    return "";
  }
}

function applyContactLink(element, href, label) {
  if (!element) {
    return;
  }

  element.textContent = label;

  if (!href) {
    element.setAttribute("href", "#");
    element.setAttribute("aria-disabled", "true");
    element.setAttribute("tabindex", "-1");
    element.removeAttribute("target");
    element.removeAttribute("rel");
    return;
  }

  element.setAttribute("href", href);
  element.removeAttribute("aria-disabled");
  element.removeAttribute("tabindex");

  if (href.startsWith("http")) {
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noopener noreferrer");
  }
}

function isPlaceholder(value) {
  return !value || /update later/i.test(value);
}

function humanizeRepoName(name) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getFallbackDescription(repoName) {
  const match = portfolioData.fallbackProjects.find((project) => project.name === repoName);
  return match?.description || "A real project from Rahul Ranjan's GitHub profile.";
}

function getLanguageHints(repoName, primaryLanguage) {
  const hints = portfolioData.projectLanguageHints[repoName];

  if (Array.isArray(hints) && hints.length) {
    return hints;
  }

  return [primaryLanguage || "Web"];
}

function formatDate(value) {
  if (!value) {
    return "recently";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "recently";
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date);
}
