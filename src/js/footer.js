const elements = {
  form: document.querySelector('.js-footer-form'),
  closeBtn: document.querySelector('.js-modal-close-btn'),
  modal: document.querySelector('.backdrop'),
  input: document.querySelector('.js-input'),
};

elements.input.setAttribute('aria-invalid', false);
elements.input.setAttribute('aria-valid', false);
const errorBox = document.createElement('div');
errorBox.classList.add('error');
const succesBox = document.createElement('div');
succesBox.classList.add('succes');

function initValidation(form) {
  form.setAttribute('novalidate', '');

  form.addEventListener('submit', event => {
    const allValid = form.checkValidity();
    if (!allValid) {
      event.preventDefault();
    }
  });
 
  elements.input.insertAdjacentElement('afterend', errorBox);
  elements.input.insertAdjacentElement('afterend', succesBox);

  elements.input.addEventListener('blur', () => {
    elements.input.checkValidity();
  });

  elements.input.addEventListener('input', () => {
    const valid = elements.input.checkValidity();
    if (valid) {
      elements.input.setAttribute('aria-invalid', false);
      elements.input.setAttribute('aria-valid', true);
      succesBox.textContent = 'Succes!';
      errorBox.textContent = '';
      return;
    } 
    else {
      elements.input.setAttribute('aria-valid', false);
      succesBox.textContent = ''
      elements.input.setAttribute('aria-invalid', true);
      errorBox.textContent = 'Invalid email, try again!';
    }
  });
}

initValidation(elements.form);

elements.form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  
  succesBox.classList.remove('succes');
  elements.input.setAttribute('aria-valid', false);
  succesBox.textContent = '';


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


