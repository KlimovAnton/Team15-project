import Accordion from 'accordion-js';

const aboutAccordionEl = document.querySelector('.about-me-list');
const aboutAccordionProps = {
  duration: 400,
  showMultiple: true,
  beforeOpen: currentElement => {
    const arrow = currentElement.querySelector('.about-svg-arrow');
    arrow.style.transition = 'transform 0.5s';
    arrow.style.transform = 'rotate(180deg)';
  },
  beforeClose: currentElement => {
    const arrow = currentElement.querySelector('.about-svg-arrow');
    arrow.style.transition = 'transform 0.5s';
    arrow.style.transform = 'rotate(0deg)';
  },
};

const aboutAccordion = new Accordion(aboutAccordionEl, aboutAccordionProps);
aboutAccordion.open(0);