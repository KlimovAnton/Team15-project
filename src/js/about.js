import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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

const aboutMeElement = document.querySelector('.about-swiper');
const aboutSliderList = document.querySelector('.about-swiper-list');
const aboutSliderButton = document.querySelector('.about-swiper-btn');
function handleAboutSliderButton() {
  const aboutSliderItem = document.querySelectorAll('.about-swiper-item');
  const sliderCollection = [];
  for (const item of aboutSliderItem) {
    sliderCollection.push(item.textContent.trim());
  }
  sliderCollection[6] = sliderCollection[0];
  const aboutSliderListLastEl = aboutSliderList.lastElementChild;
  aboutSliderListLastEl.textContent = sliderCollection[6];
}
const aboutMeProps = {
  watchOverflow: false,
  oneWayMovement: true,
  rewind: true,
  speed: 900,
  allowTouchMove: false,

  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: '.about-swiper-btn',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
};
const aboutMeSlider = new Swiper(aboutMeElement, aboutMeProps);
aboutSliderButton.addEventListener('click', handleAboutSliderButton);