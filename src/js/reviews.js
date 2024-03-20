import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperContainer = document.querySelector('.reviews-wrapper-check');
const swiperWrapper = {
  speed: 1000,
  navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
      },
      keyboard: {
        enabled: true,
      },
      touch: true,
      slidesPerView: 1,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
      allowSlideNext: true,
    };

const reviewSlider = new Swiper(swiperContainer, swiperWrapper);
// const swiper = new Swiper('.reviews-wrapper', {
//   navigation: {
//     nextEl: '.swiper-btn-next',
//     prevEl: '.swiper-btn-prev',
//   },
//   keyboard: {
//     enabled: true,
//   },
//   mousewheel: true,
//   touch: true,
//   slidesPerView: 1,
//   spaceBetween: 16,
//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 16,
//     },
//     1440: {
//       slidesPerView: 4,
//       spaceBetween: 16,
//     },
//   },
//   allowSlideNext: true,
// });

// const nextButton = document.querySelector('.swiper-btn-next');
// const prevButton = document.querySelector('.swiper-btn-prev');

// function checkSlideCount() {
//   if (swiper.slides.length === 0) {
//     nextButton.setAttribute('disabled', 'disabled');
//     nextButton.classList.add('swiper-button-disabled');
//     prevButton.setAttribute('disabled', 'disabled');
//     prevButton.classList.add('swiper-button-disabled');
//   } else if (swiper.isBeginning) {
//     prevButton.setAttribute('disabled', 'disabled');
//     prevButton.classList.add('swiper-button-disabled');
//     nextButton.removeAttribute('disabled');
//     nextButton.classList.remove('swiper-button-disabled');
//   } else if (swiper.isEnd) {
//     nextButton.setAttribute('disabled', 'disabled');
//     nextButton.classList.add('swiper-button-disabled');
//     prevButton.removeAttribute('disabled');
//     prevButton.classList.remove('swiper-button-disabled');
//   } else {
//     nextButton.removeAttribute('disabled');
//     nextButton.classList.remove('swiper-button-disabled');
//     prevButton.removeAttribute('disabled');
//     prevButton.classList.remove('swiper-button-disabled');
//   }
// }

// try {
//   checkSlideCount();
//   nextButton.addEventListener('click', () => {
//     swiper.slideNext();
//     checkSlideCount();
//   });

//   prevButton.addEventListener('click', () => {
//     swiper.slidePrev();
//     checkSlideCount();
//   });
// } catch (error) {
//   console.error('Error fetching reviews:', error);
//   alert('Not found');
// }
