import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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

    const swiperBtn = document.querySelector('.swiper-btn-wrap');
    swiperBtn.classList.remove('hidden');
  } catch (error) {
    console.error('Error fetching reviews:', error);
    alert('An error occurred while fetching reviews');
  }
}

function renderReviews(reviews) {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperWrapper.innerHTML = '';
  let reviewsList = '';
  for (const { author, avatar_url, review } of reviews) {
    reviewsList += `
      <li class="swiper-slide">
        <img class="review-avatar" src="${avatar_url}" alt="${author}" width="48" height="48" />
        <h3 class="review-autor">${author}</h3>
        <p class="review-text">${review}</p>
      </li>
    `;
  }
  swiperWrapper.insertAdjacentHTML('beforeend', reviewsList);
}

getReviews();

const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperContainer = document.querySelector('.swiper-container');

const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: true,
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
});

const nextButton = document.querySelector('.swiper-btn-next');
const prevButton = document.querySelector('.swiper-btn-prev');

function checkSlideCount() {
  if (swiper.slides.length === 0) {
    nextButton.setAttribute('disabled', 'disabled');
    nextButton.classList.add('swiper-button-disabled');
    prevButton.setAttribute('disabled', 'disabled');
    prevButton.classList.add('swiper-button-disabled');
  } else if (swiper.isBeginning) {
    prevButton.setAttribute('disabled', 'disabled');
    prevButton.classList.add('swiper-button-disabled');
    nextButton.removeAttribute('disabled');
    nextButton.classList.remove('swiper-button-disabled');
  } else if (swiper.isEnd) {
    nextButton.setAttribute('disabled', 'disabled');
    nextButton.classList.add('swiper-button-disabled');
    prevButton.removeAttribute('disabled');
    prevButton.classList.remove('swiper-button-disabled');
  } else {
    nextButton.removeAttribute('disabled');
    nextButton.classList.remove('swiper-button-disabled');
    prevButton.removeAttribute('disabled');
    prevButton.classList.remove('swiper-button-disabled');
  }
}

try {
  checkSlideCount();
  nextButton.addEventListener('click', () => {
    swiper.slideNext();
    checkSlideCount();
  });

  prevButton.addEventListener('click', () => {
    swiper.slidePrev();
    checkSlideCount();
  });
} catch (error) {
  console.error('Error fetching reviews:', error);
  alert('Not found');
}
