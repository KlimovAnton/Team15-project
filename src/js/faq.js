import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  // Accordion module
  new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
    onOpen: function (currentElement) {
      console.log(currentElement);
      currentElement.parentNode.classList.toggle('open');
    },
    onClose: function (currentElement) {
      console.log(currentElement);
      currentElement.parentNode.classList.toggle('open');
    },
  });

  // Select all arrow icons
  const arrowIcons = document.querySelectorAll('.arrow');

  // Add click event listener to each arrow icon
  arrowIcons.forEach(function (arrowIcon) {
    arrowIcon.addEventListener('click', function () {
      const faqItem = this.closest('.faq-item');

      const faqItemText = faqItem.querySelector('.faq-item-text');
      faqItemText.classList.toggle('show');
      this.classList.toggle('rotate');

      // Adjust the height
      if (window.innerWidth >= 1440) {
        const faqList = document.querySelector('.faq-list');
        const children = faqList.children;

        // index position of the clicked FAQ item
        const faqIndex = Array.from(children).indexOf(faqItem);
        let pairedIndex1, pairedIndex2;
        if (faqIndex % 2 === 0) {
          pairedIndex1 = faqIndex;
          pairedIndex2 = faqIndex + 1;
        } else {
          pairedIndex1 = faqIndex - 1;
          pairedIndex2 = faqIndex;
        }

        // paired FAQ items
        const pairedItem1 = children[pairedIndex1];
        const pairedItem2 = children[pairedIndex2];

        // same height for the paired FAQ items when expanding
        if (faqItemText.classList.contains('show')) {
          const height = faqItem.offsetHeight;
          pairedItem1.style.height = height + 'px';
          pairedItem2.style.height = height + 'px';
        } else {
          // Reset the height for the paired FAQ items when collapsing
          pairedItem1.style.height = '';
          pairedItem2.style.height = '';
        }
      }
    });
  });
});
