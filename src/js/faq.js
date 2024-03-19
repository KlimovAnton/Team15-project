import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  // Initialize the Accordion module
  new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
    onOpen: function (currentElement) {
      console.log(currentElement);
      currentElement.parentNode.classList.toggle('open');
    },
    onClose: function (currentElement) {
      console.log(currentElement);
      // Toggle the 'open' class on the parent .faq-item
      currentElement.parentNode.classList.toggle('open');
    },
  });

  // Select all arrow icons
  const arrowIcons = document.querySelectorAll('.arrow');

  // Add click event listener to each arrow icon
  arrowIcons.forEach(function (arrowIcon) {
    arrowIcon.addEventListener('click', function () {
      // Get the parent FAQ item
      const faqItem = this.closest('.faq-item');

      // Toggle the visibility of the associated paragraph
      const faqItemText = faqItem.querySelector('.faq-item-text');
      faqItemText.classList.toggle('show');

      // Toggle rotation of the arrow icon
      this.classList.toggle('rotate');
    });
  });
});
