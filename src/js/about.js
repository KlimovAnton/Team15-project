import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function () {
  const aboutSwiperItem = document.querySelector('.swiper-container');
  const aboutSwiperProps = {
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  };
  const aboutSlider = new Swiper(aboutSwiperItem, aboutSwiperProps);
});
