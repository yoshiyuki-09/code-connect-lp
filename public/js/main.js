const LINE_URL = "#line-url-placeholder";
const FORM_URL = "#form-url-placeholder";

document.addEventListener('DOMContentLoaded', function () {
  // Set LINE URL on all .btn-line-cta elements
  document.querySelectorAll('.btn-line-cta').forEach((btn) => {
    btn.setAttribute('href', LINE_URL);
  });

  // Set form URL on all .btn-form-cta elements
  document.querySelectorAll('.btn-form-cta').forEach((btn) => {
    btn.setAttribute('href', FORM_URL);
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all other items
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('is-open');
        }
      });

      // Toggle current item
      item.classList.toggle('is-open', !isOpen);
    });
  });
});
