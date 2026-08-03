/* ============================================================
   DATA
============================================================ */
const SKILLS = {
  frontend: [
    { name:"React", level:95, desc:"Componentização, hooks e performance de render.", icon:"code" },
    { name:"JavaScript", level:90, desc:"ES6+, DOM, fetch e programação assíncrona.", icon:"code" },
    { name:"HTML5 &amp; CSS3", level:92, desc:"Semântica, responsividade e layouts modernos.", icon:"code" },
    { name:"TypeScript", level:90, desc:"Tipagem estrita para código previsível.", icon:"code" },
    { name:"Tailwind CSS", level:92, desc:"Design systems consistentes e rápidos.", icon:"layers" },
    { name:"Next.js", level:85, desc:"SSR, SSG e rotas otimizadas para SEO.", icon:"code" },
    { name:"Framer Motion", level:80, desc:"Animações fluidas orientadas a produto.", icon:"zap" },
    { name:"Acessibilidade (a11y)", level:88, desc:"Interfaces navegáveis por teclado e leitor de tela.", icon:"eye" },
  ],
  backend: [
    { name:"Node.js", level:92, desc:"APIs REST e serviços assíncronos escaláveis.", icon:"server" },
    { name:"GraphQL", level:82, desc:"Schemas eficientes para consumo de dados.", icon:"code" },
    { name:"Python", level:80, desc:"Automação, scripts e prototipagem rápida.", icon:"code" },
    { name:"Microserviços", level:75, desc:"Arquitetura desacoplada e resiliente.", icon:"layers" },
    { name:"WebSockets", level:83, desc:"Comunicação em tempo real entre serviços.", icon:"zap" },
  ],
  security: [
    { name:"OWASP Top 10", level:90, desc:"Prevenção das vulnerabilidades mais comuns.", icon:"shield" },
    { name:"Pentest Web", level:78, desc:"Testes de invasão em aplicações web.", icon:"shield" },
    { name:"Auth &amp; OAuth2", level:88, desc:"Fluxos de autenticação seguros de ponta a ponta.", icon:"lock" },
    { name:"Criptografia aplicada", level:74, desc:"Hashing, cifragem e gestão de segredos.", icon:"lock" },
    { name:"SAST/DAST", level:70, desc:"Análise estática e dinâmica de código.", icon:"shield" },
    { name:"Hardening de infra", level:76, desc:"Redução de superfície de ataque em produção.", icon:"server" },
  ],
  tools: [
    { name:"Git &amp; GitHub", level:95, desc:"Fluxo de versionamento e code review.", icon:"code" },
    { name:"Docker", level:87, desc:"Containers para ambientes consistentes.", icon:"layers" },
    { name:"CI/CD", level:84, desc:"Pipelines automatizados de build e deploy.", icon:"zap" },
    { name:"Figma", level:80, desc:"Prototipagem e handoff de design.", icon:"eye" },
    { name:"Vite", level:90, desc:"Build tool rápida para projetos modernos.", icon:"zap" },
    { name:"Postman", level:88, desc:"Testes e documentação de APIs.", icon:"code" },
  ],
  cloud: [
    { name:"Vercel", level:92, desc:"Deploy contínuo para frontends modernos.", icon:"cloud" },
  ],
  database: [
    { name:"PostgreSQL", level:90, desc:"Modelagem relacional e queries otimizadas.", icon:"database" },
    { name:"Prisma ORM", level:88, desc:"Acesso a dados tipado e seguro.", icon:"code" },
    { name:"Supabase", level:78, desc:"Backend-as-a-service para MVPs rápidos.", icon:"cloud" },
  ],
  Gamedev: [
    { name:"Unity", level:80, desc:"Desenvolvimento de jogos 2D e 3D.", icon:"zap" },
    { name:"Unreal Engine", level:70, desc:"Criação de experiências imersivas.", icon:"zap" },
  ],
};

const ICONS = {
  code:'<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  server:'<rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h.01M6 17h.01"/>',
  shield:'<path d="M12 2 3 6v6c0 5 3.8 9 9 10 5.2-1 9-5 9-10V6z"/>',
  lock:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',
  layers:'<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>',
  zap:'<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/>',
  eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>',
  cloud:'<path d="M17.5 19a4.5 4.5 0 000-9 6 6 0 00-11.4 1.5A4 4 0 006 19h11.5z"/>',
  database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
};

const PROJECTS = [
  {
    name:"NeuralCode", cat:"Terminal", catLabel:"Terminal", status:"Em produção",
    desc:"Terminal para minha empresa Neural A.I, focado em programção tipo ClaudeCode e Cursor.",
    tech:["Python"], github:"#", demo:"#",
  },
  {
    name:"NeuralAI", cat:"AI", catLabel:"AI", status:"Em produção",
    desc:"Minha propria AI, focada em programação, CyberSecurity e etc.",
    tech:["React","Tailwind CSS","JavaScript", "Python"], github:"#", demo:"#",
  },
];

/* ============================================================
   LOADER
============================================================ */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.classList.add("is-hidden"), 500);
});

/* ============================================================
   CUSTOM CURSOR
============================================================ */
(function initCursor(){
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring || window.matchMedia("(pointer: coarse)").matches) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  window.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
  });
  (function loop(){
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll("a, button, .skill-card, .project-card, input, textarea").forEach(el => {
    el.addEventListener("mouseenter", () => ring.classList.add("is-active"));
    el.addEventListener("mouseleave", () => ring.classList.remove("is-active"));
  });
})();

/* ============================================================
   THEME TOGGLE
============================================================ */
(function initTheme(){
  const toggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("portfolio-theme");
  const initial = stored || "dark";
  document.documentElement.setAttribute("data-theme", initial);
  toggle.setAttribute("aria-pressed", String(initial === "light"));

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
    toggle.setAttribute("aria-pressed", String(next === "light"));
  });
})();

/* ============================================================
   NAVBAR SCROLL BEHAVIOR
============================================================ */
(function initNavbar(){
  const navbar = document.getElementById("navbar");
  let lastY = window.scrollY;

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    navbar.classList.toggle("is-scrolled", y > 40);
    if (y > lastY && y > 200) navbar.classList.add("is-hidden");
    else navbar.classList.remove("is-hidden");
    lastY = y;

    document.getElementById("backToTop").classList.toggle("is-visible", y > 600);
  }, { passive:true });
})();

/* ============================================================
   MOBILE MENU
============================================================ */
(function initMobileMenu(){
  const btn = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");

  const close = () => {
    btn.classList.remove("is-active");
    menu.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    btn.classList.toggle("is-active", isOpen);
    btn.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
})();

/* ============================================================
   BACK TO TOP
============================================================ */
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ============================================================
   SCROLL REVEAL
============================================================ */
(function initReveal(){
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15, rootMargin:"0px 0px -60px 0px" });
  els.forEach(el => io.observe(el));
})();

/* ============================================================
   SKILLS RENDER + TABS
============================================================ */
function renderSkills(cat){
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = "";
  SKILLS[cat].forEach((skill, i) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.style.animationDelay = `${i * 60}ms`;
    card.innerHTML = `
      <div class="skill-card-head">
        <span class="skill-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${ICONS[skill.icon]}</svg></span>
        <h3>${skill.name}</h3>
      </div>
      <p class="skill-desc">${skill.desc}</p>
      <div class="skill-bar-track"><div class="skill-bar-fill" data-level="${skill.level}"></div></div>
      <div class="skill-level-label"><span>Proficiência</span><span>${skill.level}%</span></div>
    `;
    grid.appendChild(card);
  });

  requestAnimationFrame(() => {
    grid.querySelectorAll(".skill-bar-fill").forEach(bar => {
      requestAnimationFrame(() => { bar.style.width = bar.dataset.level + "%"; });
    });
  });
}

(function initSkillTabs(){
  const tabs = document.querySelectorAll(".skill-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => { t.classList.remove("is-active"); t.setAttribute("aria-selected","false"); });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected","true");
      renderSkills(tab.dataset.cat);
    });
  });
  renderSkills("frontend");
})();

/* ============================================================
   PROJECTS RENDER + FILTER
============================================================ */
function renderProjects(){
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";
  PROJECTS.forEach(p => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.dataset.cat = p.cat;
    card.innerHTML = `
      <div class="project-media">
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 4v14"/></svg>
        <span class="project-status">${p.status}</span>
        <div class="project-links">
          <a href="${p.github}" target="_blank" rel="noopener" aria-label="Repositório no GitHub de ${p.name}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.68-1.29-1.68-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.07.78 2.17v3.22c0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"/></svg>
          </a>
          <a href="${p.demo}" target="_blank" rel="noopener" aria-label="Demonstração ao vivo de ${p.name}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6M10 14 21 3"/></svg>
          </a>
        </div>
      </div>
      <div class="project-body">
        <div class="project-top">
          <h3>${p.name}</h3>
          <span class="project-cat">${p.catLabel}</span>
        </div>
        <p>${p.desc}</p>
        <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

(function initProjectFilters(){
  renderProjects();
  const chips = document.querySelectorAll(".filter-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      const filter = chip.dataset.filter;
      document.querySelectorAll(".project-card").forEach(card => {
        const match = filter === "todos" || card.dataset.cat === filter;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });
})();

/* ============================================================
   ANIMATED STAT COUNTERS
============================================================ */
(function initStats(){
  const stats = document.querySelectorAll(".stat-number");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1600;
      const start = performance.now();

      function tick(now){
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target).toLocaleString("pt-BR");
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString("pt-BR");
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold:0.5 });
  stats.forEach(el => io.observe(el));
})();

/* ============================================================
   HERO TERMINAL TYPING EFFECT
============================================================ */
(function initTyping(){
  const el = document.getElementById("typingLine");
  if (!el) return;
  const text = "deploy --env=production";
  let i = 0;
  function type(){
    if (i <= text.length){
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 65);
    }
  }
  setTimeout(type, 900);
})();

/* ============================================================
   CONTACT FORM
============================================================ */
(function initForm(){
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const submitBtn = form.querySelector(".form-submit");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()){
      status.style.color = "var(--warn)";
      status.textContent = "Preencha todos os campos corretamente.";
      form.reportValidity();
      return;
    }
    submitBtn.classList.add("is-loading");
    status.textContent = "";

    setTimeout(() => {
      submitBtn.classList.remove("is-loading");
      status.style.color = "var(--success)";
      status.textContent = "Mensagem enviada! Vou responder em breve.";
      form.reset();
    }, 1400);
  });
})();

/* ============================================================
   FOOTER YEAR
============================================================ */
document.getElementById("year").textContent = new Date().getFullYear();
