// ============================================================
// PORTFOLIO APP — Rendering, Animations & Interactions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const D = PORTFOLIO_DATA;

  // ── Render Navigation ─────────────────────────────────────
  renderNavigation();
  // ── Render Hero ────────────────────────────────────────────
  renderHero();
  // ── Render About ───────────────────────────────────────────
  renderAbout();
  // ── Render Skills ──────────────────────────────────────────
  renderSkills();
  // ── Render Projects ────────────────────────────────────────
  renderProjects();
  // ── Render Experience ──────────────────────────────────────
  renderExperience();
  // ── Render Education ───────────────────────────────────────
  renderEducation();
  // ── Render Contact ─────────────────────────────────────────
  renderContact();
  // ── Render Footer ──────────────────────────────────────────
  renderFooter();
  // ── Setup Interactions ─────────────────────────────────────
  setupScrollReveal();
  setupNavbarScroll();
  setupMobileNav();
  setupBackToTop();
  setupTypingEffect();
  setupContactForm();

  // ═══════════════════════════════════════════════════════════
  // RENDERERS
  // ═══════════════════════════════════════════════════════════

  function renderNavigation() {
    const logo = document.getElementById('nav-logo');
    logo.textContent = `<${D.personal.name.split(' ')[0]} />`;

    const navLinks = document.getElementById('nav-links');
    let linksHtml = D.navLinks.map(link =>
      `<li><a href="${link.href}" class="navbar__link">${link.label}</a></li>`
    ).join('');

    linksHtml += `
      <li>
        <a href="${D.personal.resumeFile}" download class="navbar__resume-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Resume
        </a>
      </li>
    `;
    navLinks.innerHTML = linksHtml;
  }

  function renderHero() {
    document.getElementById('hero-name').textContent = D.personal.name;
    document.getElementById('hero-title').textContent = D.personal.title;
    document.getElementById('hero-desc').textContent = D.personal.heroDescription;

    // Avatar
    const avatarEl = document.getElementById('hero-avatar');
    if (D.personal.avatarImage) {
      avatarEl.innerHTML = `<img src="${D.personal.avatarImage}" alt="${D.personal.name}" />`;
    } else {
      avatarEl.textContent = D.personal.avatarEmoji;
    }

    // Resume buttons
    const resumeBtn = document.getElementById('hero-cta-resume');
    resumeBtn.href = D.personal.resumeFile;
    resumeBtn.download = '';

    const floatingResume = document.getElementById('floating-resume');
    floatingResume.href = D.personal.resumeFile;
    floatingResume.download = '';
  }

  function renderAbout() {
    document.getElementById('about-name').textContent = D.personal.name;

    // Avatar image or emoji for about card
    const aboutImage = document.getElementById('about-image');
    if (D.personal.avatarImage) {
      aboutImage.innerHTML = `<img src="${D.personal.avatarImage}" alt="${D.personal.name}" />`;
    } else {
      aboutImage.textContent = D.personal.avatarEmoji;
    }

    // Description paragraphs
    const descEl = document.getElementById('about-description');
    descEl.innerHTML = D.about.description.map(p => `<p>${p}</p>`).join('');

    // Stats
    const statsEl = document.getElementById('about-stats');
    statsEl.innerHTML = D.about.stats.map(stat => `
      <div class="about__stat">
        <div class="about__stat-value">${stat.value}</div>
        <div class="about__stat-label">${stat.label}</div>
      </div>
    `).join('');
  }

  function renderSkills() {
    const grid = document.getElementById('skills-grid');
    grid.innerHTML = D.skills.map((group, i) => `
      <div class="skill-card reveal reveal-delay-${Math.min(i + 1, 4)}">
        <div class="skill-card__header">
          <div class="skill-card__icon">${group.icon}</div>
          <h3 class="skill-card__category">${group.category}</h3>
        </div>
        ${group.items.map(skill => `
          <div class="skill-item">
            <div class="skill-item__header">
              <span class="skill-item__name">${skill.name}</span>
              <span class="skill-item__level">${skill.level}%</span>
            </div>
            <div class="skill-item__bar">
              <div class="skill-item__fill" data-level="${skill.level}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  function renderProjects() {
    // Extract unique categories
    const categories = ['all', ...new Set(D.projects.map(p => p.category))];

    // Render filter buttons
    const filtersEl = document.getElementById('projects-filters');
    filtersEl.innerHTML = categories.map(cat => `
      <button class="projects__filter-btn ${cat === 'all' ? 'active' : ''}" data-filter="${cat}">
        ${cat.charAt(0).toUpperCase() + cat.slice(1)}
      </button>
    `).join('');

    // Render project cards
    renderProjectCards('all');

    // Filter click handlers
    filtersEl.addEventListener('click', (e) => {
      if (e.target.classList.contains('projects__filter-btn')) {
        filtersEl.querySelectorAll('.projects__filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderProjectCards(e.target.dataset.filter);
      }
    });
  }

  function renderProjectCards(filter) {
    const grid = document.getElementById('projects-grid');
    const filtered = filter === 'all' ? D.projects : D.projects.filter(p => p.category === filter);

    grid.innerHTML = filtered.map((project, i) => `
      <div class="project-card reveal reveal-delay-${Math.min(i + 1, 4)}" data-category="${project.category}">
        <div class="project-card__image">
          <div class="project-card__image-gradient gradient-${(i % 6) + 1}">
            ${project.title.charAt(0)}
          </div>
          <div class="project-card__overlay">
            <a href="${project.liveUrl}" class="project-card__overlay-link" title="View Live" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
            <a href="${project.githubUrl}" class="project-card__overlay-link" title="View Code" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          </div>
        </div>
        <div class="project-card__body">
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__desc">${project.description}</p>
          <div class="project-card__tags">
            ${project.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

    // Re-observe reveals for newly inserted cards
    setupScrollReveal();
  }

  function renderExperience() {
    const timeline = document.getElementById('experience-timeline');
    timeline.innerHTML = D.experience.map((exp, i) => `
      <div class="timeline__item reveal reveal-delay-${Math.min(i + 1, 4)}">
        <div class="timeline__dot"></div>
        <div class="timeline__card">
          <span class="timeline__period">${exp.period}</span>
          <h3 class="timeline__role">${exp.role}</h3>
          <p class="timeline__company">${exp.company} <span>· ${exp.location}</span></p>
          <ul class="timeline__list">
            ${exp.description.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  function renderEducation() {
    const grid = document.getElementById('education-grid');
    grid.innerHTML = D.education.map((edu, i) => `
      <div class="education-card reveal reveal-delay-${Math.min(i + 1, 4)}">
        <div class="education-card__icon">${edu.icon}</div>
        <h3 class="education-card__degree">${edu.degree}</h3>
        <p class="education-card__institution">${edu.institution}</p>
        <p class="education-card__period">${edu.period}</p>
        <p class="education-card__desc">${edu.description}</p>
      </div>
    `).join('');
  }

  function renderContact() {
    const detailsEl = document.getElementById('contact-details');
    const contactIcons = {
      email: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
      phone: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
      location: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
    };

    detailsEl.innerHTML = `
      <div class="contact__detail">
        <div class="contact__detail-icon">${contactIcons.email}</div>
        <div>
          <div class="contact__detail-label">Email</div>
          <div class="contact__detail-value">${D.contact.email}</div>
        </div>
      </div>
      <div class="contact__detail">
        <div class="contact__detail-icon">${contactIcons.phone}</div>
        <div>
          <div class="contact__detail-label">Phone</div>
          <div class="contact__detail-value">${D.contact.phone}</div>
        </div>
      </div>
      <div class="contact__detail">
        <div class="contact__detail-icon">${contactIcons.location}</div>
        <div>
          <div class="contact__detail-label">Location</div>
          <div class="contact__detail-value">${D.contact.location}</div>
        </div>
      </div>
    `;

    // Social links
    const socialEl = document.getElementById('social-links');
    socialEl.innerHTML = D.social.map(s => `
      <a href="${s.url}" class="social-link" title="${s.platform}" target="_blank" rel="noopener">
        ${s.icon}
      </a>
    `).join('');
  }

  function renderFooter() {
    document.getElementById('footer-year').textContent = new Date().getFullYear();
    document.getElementById('footer-name').textContent = D.personal.name;
  }

  // ═══════════════════════════════════════════════════════════
  // INTERACTIONS
  // ═══════════════════════════════════════════════════════════

  function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');

          // Animate skill bars when revealed
          const skillBars = entry.target.querySelectorAll('.skill-item__fill');
          skillBars.forEach(bar => {
            bar.style.width = bar.dataset.level + '%';
            bar.classList.add('animated');
          });

          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal:not(.revealed)').forEach(el => observer.observe(el));
  }

  function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.navbar__link');
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
      // Toggle scrolled class
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Active link highlight
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }

  function setupMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      links.classList.toggle('open');
    });

    // Close mobile nav on link click
    links.addEventListener('click', (e) => {
      if (e.target.classList.contains('navbar__link')) {
        toggle.classList.remove('active');
        links.classList.remove('open');
      }
    });
  }

  function setupBackToTop() {
    const btn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function setupTypingEffect() {
    const strings = D.personal.typingStrings;
    const el = document.getElementById('typing-text');
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 100;

    function type() {
      const current = strings[stringIndex];

      if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        delay = 50;
      } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        delay = 100;
      }

      if (!isDeleting && charIndex === current.length) {
        delay = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % strings.length;
        delay = 500; // Pause before next string
      }

      setTimeout(type, delay);
    }

    type();
  }

  function setupContactForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = document.getElementById('form-submit');
      const originalContent = submitBtn.innerHTML;

      submitBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Message Sent!
      `;
      submitBtn.style.background = 'linear-gradient(135deg, #22d3ee, #22c55e)';

      setTimeout(() => {
        submitBtn.innerHTML = originalContent;
        submitBtn.style.background = '';
        form.reset();
      }, 3000);
    });
  }
});
