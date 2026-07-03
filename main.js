/* ============================================================
   main.js
   Logica del sito. Non contiene testi/contenuti (quelli sono in
   data.js): qui c'e' solo comportamento (tema, lingua, tab, render).
   Normalmente non serve modificare questo file per aggiornare
   contenuti: per quello usa data.js.
   ============================================================ */

/* -------- icone SVG usate per i social e i toggle -------- */
const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>`,
  itch: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.13 3 1 6.09v13.4S1.86 21 3.03 21h5.09c1.11 0 1.4-.53 1.4-1.36v-4.9h5v4.86c0 .8.34 1.4 1.5 1.4h4.94c1.36 0 2.04-.6 2.04-1.72V6.1L20.87 3H3.13Zm.35 2h17l1.2 1.7c-.14.55-.6.9-1.28.9-1.03 0-1.68-.7-1.7-1.6H17.6c-.02.9-.68 1.6-1.6 1.6s-1.58-.7-1.6-1.6h-1.1c-.02.9-.68 1.6-1.6 1.6s-1.58-.7-1.6-1.6H9c-.02.9-.68 1.6-1.6 1.6s-1.58-.7-1.6-1.6H4.6c-.02.9-.68 1.6-1.6 1.6-.6 0-1.1-.3-1.3-.75L3.48 5Zm10.24 5.4c-.9 0-1.7.24-2.42.7-.55-.46-1.32-.7-2.13-.7-1.6 0-3.07 1.02-3.07 3v6.6c0 .48.2.7.7.7h3.24c.48 0 .68-.2.68-.66v-4.4c0-.55.34-.86.85-.86.5 0 .82.32.82.86v4.4c0 .48.2.66.68.66h3.2c.5 0 .7-.2.7-.66v-4.4c0-.55.32-.86.83-.86.5 0 .84.32.84.86v4.4c0 .48.2.66.68.66h1.9c.5 0 .7-.24.7-.7v-6.7c0-1.96-1.55-2.9-3.1-2.9-.83 0-1.6.22-2.2.66Z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.7l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4H5.3l12.4 16Z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.5s-.23-1.64-.94-2.36c-.9-.95-1.9-.95-2.36-1.01C16.9 2.8 12 2.8 12 2.8h-.01s-4.89 0-8.19.33c-.46.06-1.46.06-2.36 1.01C.73 4.86.5 6.5.5 6.5S.27 8.42.27 10.34v1.32C.27 13.58.5 15.5.5 15.5s.23 1.64.94 2.36c.9.96 2.08.93 2.6 1.03 1.9.18 8.06.33 8.06.33s4.9-.01 8.2-.34c.46-.06 1.46-.06 2.36-1.02.71-.72.94-2.36.94-2.36s.23-1.92.23-3.84v-1.32c0-1.92-.23-3.84-.23-3.84ZM9.7 14.9V7.9l6.5 3.5-6.5 3.5Z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4.61.24 1.05.52 1.5.98.46.45.74.9.98 1.5.17.47.36 1.27.4 2.44.07 1.28.08 1.66.08 4.86s-.01 3.58-.08 4.86c-.05 1.17-.24 1.97-.4 2.44a4.1 4.1 0 0 1-.98 1.5c-.45.46-.9.74-1.5.98-.47.17-1.27.36-2.44.4-1.28.07-1.66.08-4.86.08s-3.58-.01-4.86-.08c-1.17-.05-1.97-.24-2.44-.4a4.1 4.1 0 0 1-1.5-.98 4.1 4.1 0 0 1-.98-1.5c-.17-.47-.36-1.27-.4-2.44C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.86c.05-1.17.24-1.97.4-2.44.24-.6.52-1.05.98-1.5.45-.46.9-.74 1.5-.98.47-.17 1.27-.36 2.44-.4C8.42 2.2 8.8 2.2 12 2.2Zm0 1.9c-3.14 0-3.5.01-4.75.07-.96.05-1.48.2-1.83.34-.46.18-.79.4-1.13.75-.35.34-.57.67-.75 1.13-.14.35-.3.87-.34 1.83C3.1 8.5 3.1 8.86 3.1 12s0 3.5.07 4.75c.05.96.2 1.48.34 1.83.18.46.4.79.75 1.13.34.35.67.57 1.13.75.35.14.87.3 1.83.34 1.25.06 1.61.07 4.75.07s3.5-.01 4.75-.07c.96-.05 1.48-.2 1.83-.34.46-.18.79-.4 1.13-.75.35-.34.57-.67.75-1.13.14-.35.3-.87.34-1.83.06-1.25.07-1.61.07-4.75s0-3.5-.07-4.75c-.05-.96-.2-1.48-.34-1.83a3 3 0 0 0-.75-1.13 3 3 0 0 0-1.13-.75c-.35-.14-.87-.3-1.83-.34-1.25-.06-1.61-.07-4.75-.07Zm0 3.35a4.55 4.55 0 1 1 0 9.1 4.55 4.55 0 0 1 0-9.1Zm0 1.9a2.65 2.65 0 1 0 0 5.3 2.65 2.65 0 0 0 0-5.3Zm4.73-2.1a1.06 1.06 0 1 1 0 2.13 1.06 1.06 0 0 1 0-2.13Z"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.9A18.5 18.5 0 0 0 15.9 3.5c-.2.35-.43.83-.6 1.2a17.2 17.2 0 0 0-5.13 0c-.16-.37-.4-.85-.6-1.2A18.6 18.6 0 0 0 5.2 4.9C2.5 8.9 1.8 12.8 2.1 16.7a18.6 18.6 0 0 0 5.63 2.83c.46-.62.86-1.29 1.2-1.99-.66-.25-1.29-.55-1.89-.92.16-.11.32-.24.47-.36a13.3 13.3 0 0 0 11.16 0c.15.13.31.25.47.36-.6.37-1.23.68-1.89.92.34.7.74 1.37 1.2 1.99a18.6 18.6 0 0 0 5.63-2.83c.36-4.5-.75-8.36-3.28-11.8ZM9.68 14.4c-.94 0-1.71-.87-1.71-1.94 0-1.07.75-1.94 1.71-1.94.96 0 1.73.88 1.71 1.94 0 1.07-.75 1.94-1.71 1.94Zm6.64 0c-.94 0-1.71-.87-1.71-1.94 0-1.07.76-1.94 1.71-1.94.96 0 1.73.88 1.71 1.94 0 1.07-.74 1.94-1.71 1.94Z"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.7 14.9A8.9 8.9 0 0 1 9.1 3.3a9.5 9.5 0 1 0 11.6 11.6Z"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 5h5v5M9 15 19 5M13 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7"/></svg>`
};

/* -------- stato lingua / tema -------- */
const state = {
  lang: localStorage.getItem("site-lang") || "it",
  theme: localStorage.getItem("site-theme") || "dark"
};

function applyTheme(){
  document.documentElement.setAttribute("data-theme", state.theme);
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.innerHTML = state.theme === "dark" ? ICONS.sun : ICONS.moon;
}
function toggleTheme(){
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("site-theme", state.theme);
  applyTheme();
}

function t(key){ return (I18N[state.lang] && I18N[state.lang][key]) || key; }

function applyLang(){
  document.documentElement.setAttribute("lang", state.lang);
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) langBtn.textContent = t("langSwitch");
  renderProjects(); // ricrea le card nella lingua corrente
}
function toggleLang(){
  state.lang = state.lang === "it" ? "en" : "it";
  localStorage.setItem("site-lang", state.lang);
  applyLang();
}

/* -------- header / hero + social -------- */
function renderHero(){
  const nameEl = document.getElementById("site-name");
  if (nameEl) nameEl.textContent = SITE.name;
  const roleEl = document.getElementById("site-role");
  if (roleEl) roleEl.textContent = SITE.role[state.lang];
  const tagEl = document.getElementById("site-tagline");
  if (tagEl) tagEl.textContent = SITE.tagline[state.lang];
  const hero = document.querySelector(".hero");
  if (hero) hero.style.setProperty("--hero-image", `url(${SITE.heroImage})`);

  const socialsEl = document.getElementById("socials");
  if (socialsEl){
    socialsEl.innerHTML = SITE.socials.map(s=>`
      <a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}" title="${s.name}">
        ${ICONS[s.icon] || ICONS.link}
      </a>`).join("");
  }
}

/* -------- render card di un progetto -------- */
function projectCardHTML(p, category){
  const orientClass = p.orientation === "portrait" ? "portrait" : "";
  const img = p.cover
    ? `<img src="${p.cover}" alt="${p.title[state.lang]}" loading="lazy">`
    : `<div class="ph">Screenshot</div>`;
  return `
  <article class="project-card ${orientClass}" id="${category}-${p.id}">
    <div class="project-thumb placeholder">${img}</div>
    <div class="project-info">
      <h3>${p.title[state.lang]}</h3>
      <p class="short">${p.short[state.lang]}</p>
      <div class="tag-row">${p.tags.map(tag=>`<span class="tag">${tag}</span>`).join("")}</div>
      <div class="card-actions">
        ${p.links.map(l=>`<a class="btn ${l.type}" href="${l.url}" target="_blank" rel="noopener">${l.label[state.lang]}</a>`).join("")}
        <a class="btn secondary" href="project.html?cat=${category}&id=${p.id}">${t("detailsBtn")}</a>
      </div>
    </div>
  </article>`;
}

function sideNavHTML(items, category){
  return items.map((p,i)=>`
    <li><a href="#${category}-${p.id}" data-target="${category}-${p.id}">
      <span class="idx">${String(i+1).padStart(2,"0")}</span>${p.title[state.lang]}
    </a></li>`).join("");
}

function renderProjects(){
  const map = [
    { key:"pc", listId:"list-pc", navId:"nav-pc" },
    { key:"mobile", listId:"list-mobile", navId:"nav-mobile" },
    { key:"itch", listId:"list-itch", navId:"nav-itch" }
  ];
  map.forEach(({key,listId,navId})=>{
    const items = PROJECTS[key] || [];
    const list = document.getElementById(listId);
    const nav = document.getElementById(navId);
    if (list) list.innerHTML = items.map(p=>projectCardHTML(p,key)).join("");
    if (nav) nav.innerHTML = sideNavHTML(items,key);
  });
  setupScrollSpy();
}

/* -------- tabs -------- */
function setupTabs(){
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      buttons.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
      document.getElementById(btn.dataset.panel).classList.add("active");
    });
  });
}

/* -------- scroll spy per la sidebar -------- */
let spyObserver;
function setupScrollSpy(){
  if (spyObserver) spyObserver.disconnect();
  const cards = document.querySelectorAll(".project-card");
  if (!cards.length) return;
  spyObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      const link = document.querySelector(`.side-nav a[data-target="${entry.target.id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        document.querySelectorAll(".side-nav a.active").forEach(a=>a.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });
  cards.forEach(c=>spyObserver.observe(c));
}

/* -------- intro / boot sequence -------- */
function playIntro(){
  const introEl = document.getElementById("intro");
  if (!introEl) return;
  const alreadySeen = sessionStorage.getItem("intro-seen");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (alreadySeen || reduce){
    introEl.classList.add("hidden");
    return;
  }
  const lines = state.lang === "it"
    ? [`whoami`, `> ${SITE.name}`, `cat ruolo.txt`, `> ${SITE.role.it}`, `ls progetti/`, `> pc/  mobile/  itch/`, `avvio interfaccia...`]
    : [`whoami`, `> ${SITE.name}`, `cat role.txt`, `> ${SITE.role.en}`, `ls projects/`, `> pc/  mobile/  itch/`, `booting interface...`];

  introEl.innerHTML = lines.map((l,i)=>{
    const isPrompt = !l.startsWith(">");
    return `<div class="line" style="animation-delay:${i*0.35}s">${isPrompt ? `<span class="prompt">$</span>${l}` : l}</div>`;
  }).join("") + `<span class="cursor"></span>`;

  const skipBtn = document.getElementById("skip-intro");
  if (skipBtn) skipBtn.textContent = t("skipIntro");

  const finish = ()=>{
    introEl.classList.add("hidden");
    sessionStorage.setItem("intro-seen", "1");
  };
  skipBtn?.addEventListener("click", finish);
  setTimeout(finish, lines.length*350 + 900);
}

/* -------- pagina di dettaglio progetto -------- */
function renderDetailPage(){
  const root = document.getElementById("project-detail");
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  const id = params.get("id");
  const p = (PROJECTS[cat] || []).find(item=>item.id === id);

  if (!p){
    root.innerHTML = `<div class="container detail-body"><p>Progetto non trovato.</p></div>`;
    return;
  }

  document.title = `${p.title[state.lang]} — ${SITE.name}`;
  root.innerHTML = `
    <header class="detail-header">
      <div class="container">
        <a class="back-link" href="index.html#${cat === 'pc' ? 'panel-pc' : cat === 'mobile' ? 'panel-mobile' : 'panel-itch'}">&larr; <span data-i18n="backHome">${t("backHome")}</span></a>
        <div class="eyebrow">${cat}/${p.id}</div>
        <h1>${p.title[state.lang]}</h1>
        <div class="tag-row">${p.tags.map(tag=>`<span class="tag">${tag}</span>`).join("")}</div>
      </div>
    </header>
    <div class="container">
      <div class="detail-gallery">
        ${p.gallery.map(src=>`<img src="${src}" alt="${p.title[state.lang]} screenshot" loading="lazy">`).join("")}
      </div>
      <div class="detail-body">
        <p>${p.description[state.lang]}</p>
        <div class="card-actions">
          ${p.links.map(l=>`<a class="btn primary" href="${l.url}" target="_blank" rel="noopener">${l.label[state.lang]}</a>`).join("")}
        </div>
      </div>
    </div>
  `;
}

/* -------- init -------- */
function init(){
  applyTheme();
  document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
  document.getElementById("lang-toggle")?.addEventListener("click", toggleLang);

  renderHero();
  setupTabs();
  applyLang(); // applica testi statici + renderProjects()
  playIntro();
  renderDetailPage();
}

document.addEventListener("DOMContentLoaded", init);
