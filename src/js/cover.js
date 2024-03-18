const coversSection = document.querySelector('.section-cover');
let setTimeoutId;
let coverPictureArray = Array.from(
  coversSection.querySelectorAll('.cover-picture')
);

window.addEventListener('scroll', isInViewport);

function isInViewport() {
  const rect = coversSection.getBoundingClientRect();

  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    coverPictureArray.forEach((item, index) => {
      setTimeoutId = setTimeout(() => {
        item.classList.add('show');
      }, index * 50);
    });
  } else {
    clearTimeout(setTimeoutId);
    coverPictureArray.forEach(item => {
      item.classList.remove('show');
    });
  }
}
export { isInViewport };
