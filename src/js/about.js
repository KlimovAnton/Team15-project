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

// document.addEventListener('DOMContentLoaded', function () {
//   const accordionHeaders = document.querySelectorAll('.about-accordion-header');

//   accordionHeaders.forEach(header => {
//     header.addEventListener('click', function () {
//       const content = this.nextElementSibling;
//       content.classList.toggle('active');
//       console.log('log');
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const accordionHeaders = document.querySelectorAll('.accordion-header');

//   accordionHeaders.forEach(header => {
//     header.addEventListener('click', function () {
//       const content = this.nextElementSibling;
//       if (content.classList.contains('active')) {
//         content.classList.remove('active');
//       } else {
//         content.classList.add('active');
//       }
//     });
//   });
// });
