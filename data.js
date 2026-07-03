/* ============================================================
   data.js
   ------------------------------------------------------------
   QUESTO E' IL FILE DA MODIFICARE PER CAMBIARE I CONTENUTI.
   Non serve toccare HTML/CSS/JS per aggiornare testi, link o
   aggiungere/rimuovere progetti: basta editare gli oggetti qui sotto.

   Struttura:
   - SITE.name / SITE.role / SITE.tagline / SITE.heroImage -> header
   - SITE.socials -> lista icone social sotto il nome
   - PROJECTS.pc / PROJECTS.mobile / PROJECTS.itch -> le 3 macrosezioni
     (tab). Ogni elemento dell'array e' un progetto/gioco.
   - I18N -> stringhe fisse dell'interfaccia (menu, bottoni, ecc.)
     in italiano e inglese.
   ============================================================ */

const SITE = {
  name: "Nome Cognome",              // <-- il tuo nome/nome da dev
  role: { it: "Sviluppatore di videogiochi indie", en: "Indie Game Developer" },
  tagline: {
    it: "Creo piccoli mondi giocabili, dal prototipo alla pubblicazione.",
    en: "I build small playable worlds, from prototype to release."
  },
  // Immagine di sfondo dietro l'header. Metti il file in /images e cambia il path.
  heroImage: "images/hero-placeholder.svg",
  email: "tuamail@esempio.com",

  // Aggiungi/rimuovi social semplicemente aggiungendo/togliendo righe.
  // "icon" deve corrispondere a una chiave definita in main.js -> ICONS
  socials: [
    { name: "itch.io",   url: "https://itch.io/profile/tuonome",        icon: "itch" },
    { name: "GitHub",    url: "https://github.com/tuonome",             icon: "github" },
    { name: "Twitter/X", url: "https://twitter.com/tuonome",            icon: "twitter" },
    { name: "YouTube",   url: "https://youtube.com/@tuonome",           icon: "youtube" },
    { name: "Instagram", url: "https://instagram.com/tuonome",          icon: "instagram" },
    { name: "Discord",   url: "https://discord.gg/tuoserver",           icon: "discord" }
  ]
};

/* ------------------------------------------------------------
   PROGETTI
   Ogni progetto ha:
   - id: usato nell'URL della pagina di dettaglio (project.html?id=...)
   - title, short, description: testi in it/en
   - cover: immagine principale (usata nella card)
   - orientation: "landscape" o "portrait" (cambia il formato della card,
     usa "portrait" per gli screenshot verticali dei giochi mobile)
   - gallery: array di immagini per la pagina di dettaglio
   - tags: elenco breve (engine, genere, piattaforma...)
   - links: pulsanti (store, itch, trailer...)
------------------------------------------------------------- */
const PROJECTS = {

  pc: [
    {
      id: "gioco-pc-1",
      orientation: "landscape",
      cover: "images/pc-gioco-1-cover.svg",
      gallery: [
        "images/pc-gioco-1-cover.svg",
        "images/pc-gioco-1-01.svg",
        "images/pc-gioco-1-02.svg"
      ],
      title: { it: "Nome Gioco PC", en: "PC Game Name" },
      short: {
        it: "Breve descrizione in una riga del gioco per PC.",
        en: "Short one-line description of the PC game."
      },
      description: {
        it: "Descrizione più estesa del progetto: genere, meccaniche principali, cosa lo rende particolare. Tienila concisa, 3-4 frasi al massimo.",
        en: "Longer project description: genre, core mechanics, what makes it distinct. Keep it concise, 3-4 sentences max."
      },
      tags: ["Unity", "C#", "Steam"],
      links: [
        { label: { it: "Pagina Steam", en: "Steam page" }, url: "https://store.steampowered.com/", type: "primary" },
        { label: { it: "Trailer", en: "Trailer" }, url: "https://youtube.com/", type: "secondary" }
      ]
    }
  ],

  mobile: [
    {
      id: "gioco-mobile-1",
      orientation: "portrait",
      cover: "images/mobile-gioco-1-cover.svg",
      gallery: [
        "images/mobile-gioco-1-cover.svg",
        "images/mobile-gioco-1-01.svg",
        "images/mobile-gioco-1-02.svg"
      ],
      title: { it: "Nome Gioco Mobile 1", en: "Mobile Game Name 1" },
      short: {
        it: "Breve descrizione del gioco mobile, disponibile su Google Play.",
        en: "Short description of the mobile game, available on Google Play."
      },
      description: {
        it: "Descrizione più estesa: tipo di gioco, target, particolarità tecniche o di design.",
        en: "Longer description: game type, target audience, technical or design highlights."
      },
      tags: ["Unity", "Android", "Google Play"],
      links: [
        { label: { it: "Google Play", en: "Google Play" }, url: "https://play.google.com/", type: "primary" }
      ]
    },
    {
      id: "gioco-mobile-2",
      orientation: "portrait",
      cover: "images/mobile-gioco-2-cover.svg",
      gallery: [
        "images/mobile-gioco-2-cover.svg",
        "images/mobile-gioco-2-01.svg",
        "images/mobile-gioco-2-02.svg"
      ],
      title: { it: "Nome Gioco Mobile 2", en: "Mobile Game Name 2" },
      short: {
        it: "Breve descrizione del secondo gioco mobile.",
        en: "Short description of the second mobile game."
      },
      description: {
        it: "Descrizione più estesa del secondo progetto mobile.",
        en: "Longer description of the second mobile project."
      },
      tags: ["Unity", "Android", "Google Play"],
      links: [
        { label: { it: "Google Play", en: "Google Play" }, url: "https://play.google.com/", type: "primary" }
      ]
    }
  ],

  itch: [
    {
      id: "itch-progetto-1",
      orientation: "landscape",
      cover: "images/itch-1-cover.svg",
      gallery: [ "images/itch-1-cover.svg" ],
      title: { it: "Nome Progetto Itch", en: "Itch Project Name" },
      short: {
        it: "Gioco o asset pubblicato su itch.io.",
        en: "Game or asset published on itch.io."
      },
      description: {
        it: "Descrizione breve del progetto/asset pack disponibile su itch.io.",
        en: "Short description of the project/asset pack available on itch.io."
      },
      tags: ["Itch.io", "Free/Paid"],
      links: [
        { label: { it: "Vedi su itch.io", en: "View on itch.io" }, url: "https://itch.io/", type: "primary" }
      ]
    }
  ]
};

/* ------------------------------------------------------------
   TRADUZIONI INTERFACCIA (menu, bottoni, titoli di sezione...)
   Per aggiungere una lingua: duplica il blocco "it" o "en",
   cambia la chiave (es. "fr") e aggiorna il selettore lingua in main.js
------------------------------------------------------------- */
const I18N = {
  it: {
    navPc: "PC",
    navMobile: "Mobile",
    navItch: "Itch & Asset",
    heroCta: "Guarda i progetti",
    sectionPcTitle: "/progetti/pc",
    sectionMobileTitle: "/progetti/mobile",
    sectionItchTitle: "/progetti/itch",
    sectionPcDesc: "Giochi sviluppati per PC, principalmente distribuiti su Steam.",
    sectionMobileDesc: "Giochi mobile pubblicati su Google Play.",
    sectionItchDesc: "Giochi e asset pubblicati su itch.io.",
    listLabel: "elenco",
    backHome: "Torna alla home",
    detailsBtn: "Dettagli",
    langSwitch: "EN",
    themeLight: "Tema chiaro",
    themeDark: "Tema scuro",
    footerText: "Realizzato a mano, con troppo caffè.",
    skipIntro: "Salta intro"
  },
  en: {
    navPc: "PC",
    navMobile: "Mobile",
    navItch: "Itch & Assets",
    heroCta: "See the projects",
    sectionPcTitle: "/projects/pc",
    sectionMobileTitle: "/projects/mobile",
    sectionItchTitle: "/projects/itch",
    sectionPcDesc: "Games developed for PC, mainly distributed on Steam.",
    sectionMobileDesc: "Mobile games published on Google Play.",
    sectionItchDesc: "Games and assets published on itch.io.",
    listLabel: "list",
    backHome: "Back to home",
    detailsBtn: "Details",
    langSwitch: "IT",
    themeLight: "Light theme",
    themeDark: "Dark theme",
    footerText: "Handmade, with too much coffee.",
    skipIntro: "Skip intro"
  }
};
