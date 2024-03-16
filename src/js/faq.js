import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  // Accordion module
  new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
    onOpen: function (currentElement) {
      console.log(currentElement);
    },
  });

  // all arrows
  const arrowIcons = document.querySelectorAll('.arrow');

  // click event listener to each arrow
  arrowIcons.forEach(function (arrowIcon) {
    arrowIcon.addEventListener('click', function () {
      // parent FAQ item
      const faqItem = this.closest('.faq-item');

      // Toggle the visibility
      const faqItemText = faqItem.querySelector('.faq-item-text');
      faqItemText.classList.toggle('show');
      this.classList.toggle('rotate');
    });
  });
});
