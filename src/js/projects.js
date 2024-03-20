import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const projectSliderElement = document.querySelector('.project-container');
const projectSliderProps = {
  speed: 1000,
  allowTouchMove: false,
  navigation: {
    nextEl: '.slide-next',
    prevEl: '.slide-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
};
const projectSlider = new Swiper(projectSliderElement, projectSliderProps);