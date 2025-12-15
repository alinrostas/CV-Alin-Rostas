import { translations } from './translations.js';
import { buildSkillDescriptions } from './translations.js';
import { initSkillModal } from './modal.js';

function applyTranslations(lang) {
  if (typeof buildSkillDescriptions === 'function') buildSkillDescriptions(lang);

  const elems = document.querySelectorAll('[data-i18n]');
  elems.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = (translations[lang] && translations[lang][key]) || '';
    el.innerHTML = text;
  });

  if (translations[lang] && translations[lang].title) {
    document.title = translations[lang].title;
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) titleEl.textContent = translations[lang].title;
  }

  const btn = document.getElementById('btn-download');
  if (btn) {
    const cvAttr = btn.getAttribute('data-cv-' + lang);
    if (cvAttr) btn.setAttribute('href', cvAttr);
    const span = btn.querySelector('[data-i18n="download"]');
    if (span) span.textContent = translations[lang].download;
  }

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });

  localStorage.setItem('cv_lang', lang);
}

function initLang() {
  const stored = localStorage.getItem('cv_lang');
  const defaultLang = 'en';
  const lang = stored || defaultLang;

  const select = document.getElementById('language-select');
  if (select) {
    select.addEventListener('change', () => applyTranslations(select.value));
    select.value = lang;
  }

  applyTranslations(lang);
  initSkillModal();
}

document.addEventListener('DOMContentLoaded', initLang);
