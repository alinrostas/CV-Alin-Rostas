// Simple language switcher for the static CV
// Persists selected language in localStorage, defaults to 'en'

const translations = {
  en: {
    select_label: 'Select language:',
    title: 'Alin Rostas - UI/UX Designer & Frontend Developer',
    download: 'Download CV (.pdf)',
    skills_heading: 'Technical Skills',
    uiux: 'UI/UX Design',
    frontend: 'Frontend Dev',
    tools: 'Tools & Methodologies',
    languages_heading: 'Languages',
    about_heading: 'About Me',
    about_text: `Hybrid UI/UX Designer with a solid background in Frontend Development (over 4 years experience). Specialised in turning complex requirements into intuitive, technically-feasible interfaces. My passion is closing the gap between design and code, ensuring an efficient handover process.`,
    experience_heading: 'Professional Experience',
    job1_title: 'UI/UX Designer & Frontend Developer',
    job1_company: 'VALEO IT Services International',
    job1_period: 'Apr 2021 – Present',
    job1_b1: '<strong>Design & Implementation:</strong> Designing interfaces in Figma and implementing them using HTML/CSS/JS, ensuring technical feasibility from the start.',
    job1_b2: '<strong>Prototyping:</strong> Creating interactive prototypes to validate user flows with stakeholders.',
    job1_b3: '<strong>Collaboration:</strong> Acting as a bridge between design and backend teams, reducing visual implementation errors.',
    job2_title: 'Support Engineer (Jira & Confluence)',
    job2_company: 'VALEO IT Services International',
    job2_period: 'Sept 2020 – June 2023',
    job2_b1: 'Optimising workflows in Jira to increase team efficiency.',
    job2_b2: 'Diagnosing user issues, building empathy that informs current UX decisions.',
    job3_title: 'Marketing Designer',
    job3_company: 'Auchan Retail Romania',
    job3_period: 'Aug 2015 – Aug 2017',
    job3_b1: 'Developed visual materials (2D/3D) for promotional campaigns and in-store signage.',
    job4_title: 'IT Support Specialist',
    job4_company: 'VALEO IT Services International',
    job4_period: 'Aug 2017 – Sept 2020',
    job4_b1: 'Provided technical support for internal employees, ensuring smooth operation of hardware and software systems.',
    job4_b2: 'Managed user accounts, diagnosed network issues, and maintained IT assets.',
    job4_b3: 'Served as the first point of contact for technical incidents.',
    footer: '© 2025 Alin Rostas. Built with HTML & CSS.'
  },
  ro: {
    select_label: 'Selectează limba:',
    title: 'Alin Rostas - UI/UX Designer & Frontend Developer',
    download: 'Descarcă CV (.pdf)',
    skills_heading: 'Competențe Tehnice',
    uiux: 'Design UI/UX',
    frontend: 'Frontend Dev',
    tools: 'Unelte & Metodologii',
    languages_heading: 'Limbi Străine',
    about_heading: 'Despre mine',
    about_text: `UI/UX Designer hibrid cu o bază solidă în Frontend Development (peste 4 ani experiență). Specializat în transformarea cerințelor complexe în interfețe intuitive și fezabile tehnic. Pasiunea mea este să reduc distanța dintre design și cod, asigurând un proces de predare (handover) eficient.`,
    experience_heading: 'Experiență Profesională',
    job1_title: 'UI/UX Designer & Frontend Developer',
    job1_company: 'VALEO IT Services International',
    job1_period: 'Apr 2021 – Prezent',
    job1_b1: '<strong>Design & Implementare:</strong> Proiectarea interfețelor în Figma și implementarea lor directă folosind HTML/CSS/JS, asigurând fezabilitatea tehnică din start.',
    job1_b2: '<strong>Prototyping:</strong> Crearea de prototipuri interactive pentru validarea fluxurilor de utilizare cu stakeholderii.',
    job1_b3: '<strong>Colaborare:</strong> Punte de legătură între echipele de design și backend, reducând erorile de implementare vizuală.',
    job2_title: 'Support Engineer (Jira & Confluence)',
    job2_company: 'VALEO IT Services International',
    job2_period: 'Sept 2020 – Iun 2023',
    job2_b1: 'Optimizarea fluxurilor de lucru (workflows) în Jira pentru a crește eficiența echipelor.',
    job2_b2: 'Diagnosticarea problemelor utilizatorilor, dezvoltând o empatie profundă care informează deciziile actuale de UX.',
    job3_title: 'Marketing Designer',
    job3_company: 'Auchan Retail România',
    job3_period: 'Aug 2015 – Aug 2017',
    job3_b1: 'Dezvoltarea materialelor vizuale (2D/3D) pentru campanii promoționale și semnalistică in-store.',
    job4_title: 'IT Support Specialist',
    job4_company: 'VALEO IT Services International',
    job4_period: 'Aug 2017 – Sept 2020',
    job4_b1: 'Furnizarea suportului tehnic pentru angajații interni, asigurând funcționarea optimă a echipamentelor hardware și a sistemelor software.',
    job4_b2: 'Gestionarea conturilor de utilizator, diagnosticarea problemelor de rețea și întreținerea bunurilor IT.',
    job4_b3: 'Punctul de contact principal pentru incidente tehnice.',
    footer: '© 2025 Alin Rostas. Construit cu HTML & CSS.'
  },
  de: {
    select_label: 'Sprache wählen:',
    title: 'Alin Rostas - UI/UX Designer & Frontend Entwickler',
    download: 'CV herunterladen (.pdf)',
    skills_heading: 'Technische Fähigkeiten',
    uiux: 'UI/UX Design',
    frontend: 'Frontend-Entwicklung',
    tools: 'Tools & Methoden',
    languages_heading: 'Sprachen',
    about_heading: 'Über mich',
    about_text: `Hybrid UI/UX Designer mit solidem Hintergrund in der Frontend-Entwicklung (über 4 Jahre Erfahrung). Spezialisiert darauf, komplexe Anforderungen in intuitive, technisch umsetzbare Schnittstellen zu überführen. Meine Leidenschaft ist es, die Lücke zwischen Design und Code zu schließen und einen effizienten Handover-Prozess zu gewährleisten.`,
    experience_heading: 'Berufserfahrung',
    job1_title: 'UI/UX Designer & Frontend Entwickler',
    job1_company: 'VALEO IT Services International',
    job1_period: 'Apr 2021 – Heute',
    job1_b1: '<strong>Design & Implementierung:</strong> Gestaltung von Oberflächen in Figma und Umsetzung mit HTML/CSS/JS, um technische Machbarkeit sicherzustellen.',
    job1_b2: '<strong>Prototyping:</strong> Erstellung interaktiver Prototypen zur Validierung von Nutzerabläufen mit Stakeholdern.',
    job1_b3: '<strong>Zusammenarbeit:</strong> Vermittlung zwischen Design- und Backend-Teams zur Reduzierung visueller Implementierungsfehler.',
    job2_title: 'Support Engineer (Jira & Confluence)',
    job2_company: 'VALEO IT Services International',
    job2_period: 'Sept 2020 – Juni 2023',
    job2_b1: 'Optimierung von Workflows in Jira zur Steigerung der Team-Effizienz.',
    job2_b2: 'Fehlerdiagnose bei Nutzern, Aufbau von Empathie, die aktuelle UX-Entscheidungen informiert.',
    job3_title: 'Marketing Designer',
    job3_company: 'Auchan Retail Romania',
    job3_period: 'Aug 2015 – Aug 2017',
    job3_b1: 'Entwicklung visueller Materialien (2D/3D) für Werbekampagnen und In-Store-Signage.',
    job4_title: 'IT Support Specialist',
    job4_company: 'VALEO IT Services International',
    job4_period: 'Aug 2017 – Sept 2020',
    job4_b1: 'Bereitstellung technischen Supports für interne Mitarbeiter zur Sicherstellung des reibungslosen Betriebs von Hardware- und Softwaresystemen.',
    job4_b2: 'Verwaltung von Benutzerkonten, Diagnose von Netzwerkproblemen und Wartung von IT-Assets.',
    job4_b3: 'Erster Ansprechpartner für technische Vorfälle.',
    footer: '© 2025 Alin Rostas. Erstellt mit HTML & CSS.'
  }
};

// Education translations
translations.en.education_heading = 'Education';
translations.en.edu1_institution = 'West University of Timisoara';
translations.en.edu1_degree = "Bachelor's Degree in Computer Science";
translations.en.edu1_location = 'Timișoara, RO';
translations.en.edu1_graduation = 'Graduated 2014';
translations.en.edu2_institution = 'Food Industry High School';
translations.en.edu2_degree = 'High School Diploma';
translations.en.edu2_location = 'Satu Mare, RO';
translations.en.edu2_graduation = 'Graduated 2009';

translations.ro.education_heading = 'Educație';
translations.ro.edu1_institution = 'Universitatea de Vest din Timișoara';
translations.ro.edu1_degree = "Licență în Informatică";
translations.ro.edu1_location = 'Timișoara, RO';
translations.ro.edu1_graduation = 'Absolvent 2014';
translations.ro.edu2_institution = 'Liceul Industriei Alimentare';
translations.ro.edu2_degree = 'Diplomă de Bacalaureat';
translations.ro.edu2_location = 'Satu Mare, RO';
translations.ro.edu2_graduation = 'Absolvent 2009';

translations.de.education_heading = 'Ausbildung';
translations.de.edu1_institution = 'West-Universität Timișoara';
translations.de.edu1_degree = 'Bachelor in Informatik';
translations.de.edu1_location = 'Timișoara, RO';
translations.de.edu1_graduation = 'Abschluss 2014';
translations.de.edu2_institution = 'Berufsfachschule Lebensmittelindustrie';
translations.de.edu2_degree = 'Abschluss der Sekundarstufe';
translations.de.edu2_location = 'Satu Mare, RO';
translations.de.edu2_graduation = 'Abschluss 2009';

// Sidebar language labels/proficiency translations
translations.en.lang_ro_label = 'Romanian:';
translations.en.lang_ro_level = 'Native';
translations.en.lang_en_label = 'English:';
translations.en.lang_en_level = 'Advanced';

translations.ro.lang_ro_label = 'Română:';
translations.ro.lang_ro_level = 'Nativ';
translations.ro.lang_en_label = 'Engleză:';
translations.ro.lang_en_level = 'Avansat';

translations.de.lang_ro_label = 'Rumänisch:';
translations.de.lang_ro_level = 'Muttersprache';
translations.de.lang_en_label = 'Englisch:';
translations.de.lang_en_level = 'Fortgeschritten';

function applyTranslations(lang) {
  const elems = document.querySelectorAll('[data-i18n]');
  elems.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = (translations[lang] && translations[lang][key]) || '';
    // Use innerHTML to allow markup in some entries
    el.innerHTML = text;
  });

  // Update document title
  if (translations[lang] && translations[lang].title) {
    document.title = translations[lang].title;
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) titleEl.textContent = translations[lang].title;
  }

  // Update CV link if language-specific file provided via data attributes
  const btn = document.getElementById('btn-download');
  if (btn) {
    const cvAttr = btn.getAttribute('data-cv-' + lang);
    if (cvAttr) btn.setAttribute('href', cvAttr);
    // update visible label
    const span = btn.querySelector('[data-i18n="download"]');
    if (span) span.textContent = translations[lang].download;
  }

  // mark active button
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });

  localStorage.setItem('cv_lang', lang);
}

function initLang() {
  const stored = localStorage.getItem('cv_lang');
  const defaultLang = 'en';
  const lang = stored || defaultLang;

  // attach handler to dropdown
  const select = document.getElementById('language-select');
  if (select) {
    select.addEventListener('change', () => applyTranslations(select.value));
    select.value = lang;
  }

  applyTranslations(lang);
}

document.addEventListener('DOMContentLoaded', initLang);
