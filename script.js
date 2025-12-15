// Simple language switcher for the static CV
// Persists selected language in localStorage, defaults to 'en'

import { translations, buildSkillDescriptions } from './assets/js/translations.js';
import { SKILLS } from './assets/js/skills.js';

function applyTranslations(lang) {
  const elems = document.querySelectorAll('[data-i18n]');
  elems.forEach(el => {
    const key = el.getAttribute('data-i18n');
    // Handle skill descriptions separately if they are nested under skill_desc
    let text = (translations[lang] && translations[lang][key]);
    if (!text && key.startsWith('skill_desc_')) {
      const skillKey = key.replace('skill_desc_', '');
      text = (translations[lang].skill_desc && translations[lang].skill_desc[skillKey]) || '';
    }
    text = text || ''; // Ensure text is not undefined

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

  buildSkillDescriptions(lang); // Build skill descriptions for the current language

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
  
  buildSkillDescriptions(lang); // Initial build of skill descriptions
  applyTranslations(lang);
}

// Skill Modal Logic
const skillModal = document.getElementById('skill-modal');
const skillModalTitle = document.getElementById('skill-modal-title');
const skillModalBody = document.getElementById('skill-modal-body');

function openSkillModal(skillKey, lang) {
  const skill = SKILLS[skillKey];
  if (skill) {
    skillModalTitle.innerHTML = skill.title[lang] || skill.title.en;
    skillModalBody.innerHTML = skill.desc[lang] || skill.desc.en;
    skillModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
  }
}

function closeSkillModal() {
  skillModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Restore scrolling
}

document.addEventListener('DOMContentLoaded', () => {
  initLang();

  // Add event listeners to skill tags
  document.querySelectorAll('.tag[data-skill]').forEach(tag => {
    tag.addEventListener('click', () => {
      const skillKey = tag.getAttribute('data-skill');
      const currentLang = localStorage.getItem('cv_lang') || 'en';
      openSkillModal(skillKey, currentLang);
    });
  });

  // Add event listeners to close modal
  skillModal.querySelector('.skill-modal__close').addEventListener('click', closeSkillModal);
  skillModal.querySelector('.skill-modal__backdrop').addEventListener('click', closeSkillModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && skillModal.getAttribute('aria-hidden') === 'false') {
      closeSkillModal();
    }
  });
}
);
