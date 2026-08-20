// Grab every FAQ question button on the page
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('span');

    // Toggle this answer open/closed
    const isOpen = answer.style.display === 'block';
    answer.style.display = isOpen ? 'none' : 'block';
    icon.textContent = isOpen ? '+' : '−';
  });
});