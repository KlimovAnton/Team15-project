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