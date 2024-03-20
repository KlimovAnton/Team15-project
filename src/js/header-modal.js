// by Anton

const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    closeBtn: document.querySelectorAll(".header-close-btn"),
    menu: document.querySelector("[data-menu]"),
    body: document.querySelector('body'),
  };

    refs.openMenuBtn.addEventListener("click", openModal);
    refs.closeMenuBtn.addEventListener("click", closeModal);
    refs.closeBtn.forEach(link => link.addEventListener('click', closeModal));

    function openModal() {
      refs.menu.classList.remove("is-hidden");
      refs.body.classList.add("no-scroll");
    }

    function closeModal() {
      refs.menu.classList.add("is-hidden");
      refs.body.classList.remove("no-scroll");
    }
