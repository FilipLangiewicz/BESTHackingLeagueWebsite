let currentLang = 'pl';

document.getElementById('language-flag').addEventListener('click', () => {
currentLang = currentLang === 'pl' ? 'en' : 'pl';

document.getElementById('language-flag').src = currentLang === 'pl' ? 'flags/gb.png' : 'flags/pl.png';
document.getElementById('language-flag').alt = currentLang === 'pl' ? 'English' : 'Polski';

document.querySelectorAll('[data-pl][data-en]').forEach(el => {
    const translation = el.getAttribute(`data-${currentLang}`);
    el.innerHTML = translation.replaceAll('\\n', '<br>');});
});
