import { translations } from './translations.js';
import { SKILLS } from './skills.js';

export function openSkillModal(title, skillKey) {
  const modal = document.getElementById('skill-modal');
  const titleEl = document.getElementById('skill-modal-title');
  const bodyEl = document.getElementById('skill-modal-body');
  const lang = localStorage.getItem('cv_lang') || 'en';
  const localizedTitle = (SKILLS[skillKey] && SKILLS[skillKey].title && SKILLS[skillKey].title[lang]) || title;
  titleEl.textContent = localizedTitle;
  const desc = (translations[lang] && translations[lang].skill_desc && translations[lang].skill_desc[skillKey]) || '';
  bodyEl.innerHTML = desc;
  modal.setAttribute('aria-hidden', 'false');
  const close = modal.querySelector('.skill-modal__close');
  if (close) close.focus();
}

export function closeSkillModal() {
  const modal = document.getElementById('skill-modal');
  if (modal) modal.setAttribute('aria-hidden', 'true');
}

export function initSkillModal() {
  document.querySelectorAll('[data-skill]').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      const key = el.getAttribute('data-skill');
      openSkillModal(el.innerText.trim(), key);
    });
  });

  document.querySelectorAll('[data-action="close"]').forEach(btn => {
    btn.addEventListener('click', () => closeSkillModal());
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSkillModal();
  });
}
