const coversSection = document.getElementById('covers');

window.addEventListener('scroll', () => {
  if (isInViewport(coversSection)) {
    coversSection.querySelectorAll('.cover-line').forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 100);
    });
  }
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export { isInViewport };
