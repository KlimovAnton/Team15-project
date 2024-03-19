
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function initializeSwiper() {
  document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('https://portfolio-js.b.goit.study/api/reviews');
      const reviews = await response.json();

      const swiperContainer = document.querySelector('.swiper-wrapper');

      if (reviews.length === 0) {
        const notFoundMessage = document.createElement('div');
        notFoundMessage.textContent = 'Not found';
        notFoundMessage.classList.add('not-found-message');
        swiperContainer.appendChild(notFoundMessage);
        return;
      }

      const slidesHTML = reviews.map(review => `
        <div class="swiper-slide">
          <img src="${review.avatar_url}" alt="${review.author}" class="review-avatar" width="48" height="48">
          <p class="review-author">${review.author}</p>
          <p class="review-text">${review.review}</p>
        </div>
      `).join('');
      
      swiperContainer.insertAdjacentHTML('beforeend', slidesHTML);

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
  });
  
// ЦЕ ДЛЯ ЗГОРТАННЯ ТЕКСТУ В СЛАЙДАХ
  document.addEventListener('DOMContentLoaded', () => {
    const swiperSlides = document.querySelectorAll('.swiper-slide');
  
    swiperSlides.forEach(slide => {
      const textContent = slide.textContent.trim();
      const maxLength = 100;
  
      if (textContent.length > maxLength) {
        const shortText = textContent.slice(0, maxLength) + 'read more';
        const fullText = textContent;
  
        slide.innerHTML = `
          <div class="read-more-content">
            <p class="short-text">${shortText}</p>
            <p class="full-text">${fullText}</p>
            <button class="read-more-button">Read more</button>
          </div>
        `;
  
        const readMoreButton = slide.querySelector('.read-more-button');
        const shortTextElement = slide.querySelector('.short-text');
        const fullTextElement = slide.querySelector('.full-text');
  
        readMoreButton.addEventListener('click', () => {
          shortTextElement.classList.toggle('hidden');
          fullTextElement.classList.toggle('hidden');
          readMoreButton.textContent = shortTextElement.classList.contains('hidden') ? 'Read less' : 'Read more';
        });
      }
    });
  });

}

initializeSwiper();