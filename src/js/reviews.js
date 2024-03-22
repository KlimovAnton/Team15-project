import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// api
async function getReviews() {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    const reviews = await response.json();

    if (reviews.length === 0) {
      alert('Not found');
      return;
    }

    renderReviews(reviews);

    // swiper
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

    const swiperBtn = document.querySelector('.swiper-btn-wrap');

    swiperBtn.classList.remove('hidden');
  } catch (error) {
    console.error('Error fetching reviews:', error);
    alert('An error occurred while fetching reviews');
  }
}

// html-code
function renderReviews(reviews) {
  const swiperWrapper = document.querySelector('.reviews-wrapper');
  swiperWrapper.innerHTML = '';
  let reviewsList = '';
  for (const { author, avatar_url, review } of reviews) {
    reviewsList += `
        <li class="swiper-slide swiper-style">
          <img class="review-avatar" src="${avatar_url}" alt="${author}" width="48" height="48" />
          <h3 class="review-autor">${author}</h3>
          <p class="review-text">${review}</p>
        </li>
      `;
  }
  swiperWrapper.insertAdjacentHTML('beforeend', reviewsList);
}

getReviews();

// const swiperContainer = document.querySelector('.reviews-wrapper-check');
// const swiperWrapper = {
//   speed: 1000,
//   navigation: {
//         nextEl: '.swiper-btn-next',
//         prevEl: '.swiper-btn-prev',
//       },
//       keyboard: {
//         enabled: true,
//       },
//       touch: true,
//       slidesPerView: 1,
//       spaceBetween: 16,
//       breakpoints: {
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 16,
//         },
//         1440: {
//           slidesPerView: 4,
//           spaceBetween: 16,
//         },
//       },
//       allowSlideNext: true,
//     };

// const reviewSlider = new Swiper(swiperContainer, swiperWrapper);

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
