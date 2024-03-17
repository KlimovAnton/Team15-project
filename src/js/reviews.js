
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('https://portfolio-js.b.goit.study/api/reviews');
    const reviews = await response.json();

    const slidesHTML = reviews.map(review => `
      <div class="swiper-slide">
        <img src="${review.avatar_url}" alt="${review.author}" class="review-avatar" width="48" height="48">
        <p class="review-author">${review.author}</p>
        <p class="review-text">${review.review}</p>
      </div>
    `).join('');

    const swiperContainer = document.querySelector('.swiper-wrapper');
    swiperContainer.innerHTML = slidesHTML;

    const swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      slidesPerView: 1,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 16
        },
      },
      allowSlideNext: true,
    });

    if (swiper.slides.length === 0) {
      alert('Not found');
    }

  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
});