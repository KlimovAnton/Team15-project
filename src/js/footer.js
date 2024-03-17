const elements = {
  form: document.querySelector('.js-footer-form'),
  closeBtn: document.querySelector('.js-modal-close-btn'),
  modal: document.querySelector('.backdrop'),
  input: document.querySelector('.js-input'),
};

console.log(elements.input);

elements.input.addEventListener('change', handlerChange);

function handlerChange(evt) {
  console.log(evt);
  const isValid = evt.target.checkValidity();
  console.log(isValid);
}

elements.form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  const { email, comment } = evt.currentTarget.elements;

  const post = {
    email: email.value,
    comment: comment.value,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json',
    },
  };
  fetch('https://portfolio-js.b.goit.study/api-docs/', options)
    .then(
      resp => elements.modal.classList.remove('is-hidden'),

      evt.currentTarget.reset()
    )
    .catch();
}

elements.closeBtn.addEventListener('click', handlerClick);

function handlerClick() {
  elements.modal.classList.add('is-hidden');
}


