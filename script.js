document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.faq-toggle');

    const isOpen = answer.style.height && answer.style.height !== '0px';

    // Zamknij wszystkie inne
    document.querySelectorAll('.faq-answer').forEach(ans => {
      if (ans !== answer) {
        ans.style.height = '0px';
      }
    });

    document.querySelectorAll('.faq-toggle').forEach(iconEl => {
      if (iconEl !== icon) {
        iconEl.textContent = "+";
        iconEl.classList.remove('rotate');
      }
    });

if (isOpen) {
  answer.classList.remove('open');
  answer.style.height = '0px';
  icon.textContent = "+";
  icon.classList.remove('rotate');
} else {
  answer.classList.add('open');
  answer.style.height = answer.scrollHeight + 'px';
  icon.textContent = "−";
  icon.classList.add('rotate');
}
  });
});
