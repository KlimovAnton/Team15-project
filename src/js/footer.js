const elements = {
  form: document.querySelector('.js-footer-form'),
  closeBtn: document.querySelector('.js-modal-close-btn'),
  submitBtn: document.querySelector('.footer-form-btn'),
  modal: document.querySelector('.backdrop'),
  input: document.querySelector('.js-input'),
  messageBox: document.querySelector('.message-box'),
};

const resetStyles = () => {
  if (elements.messageBox.classList.contains("error")) {
    elements.messageBox.classList.remove('error');
  }

  if (elements.messageBox.classList.contains('success')) {
    elements.messageBox.classList.remove('success');
  }
    
  elements.messageBox.textContent = '';
  elements.input.setAttribute('aria-invalid', false);
  elements.input.setAttribute('aria-valid', false);
};

const setSuccessStyles = () => {
  elements.messageBox.classList.add('success');
  elements.messageBox.textContent = 'Success!';
  elements.input.setAttribute('aria-valid', true);
}

function initValidation(form) {
  const allValid = form.checkValidity();

  let maxLength = 20;

      if (elements.input.value.length > maxLength) {
        elements.input.value =
          elements.input.value.substring(0, maxLength) + '...';
      }
  
  if (!allValid) {
    elements.messageBox.classList.add('error');
    const message = getMessage(elements.input);
     elements.messageBox.textContent =
       message || elements.input.validationMessage;
    elements.input.setAttribute('aria-invalid', true);
  } else {
    resetStyles();
  }
  
  return allValid;
};
  

 elements.input.addEventListener('blur', () => {
   const isValid = initValidation(elements.form);

   if (isValid) {
     setSuccessStyles();
   }
 });
  
 elements.input.addEventListener('input', () => {
   if (elements.input.value.length > 2) {
     resetStyles();
     
     const isValid = elements.input.checkValidity();
     if (isValid) {
       setSuccessStyles();
     }
   }
  });

function getMessage(field) {
  const validity = field.validity;
  if (validity.valueMissing) return `Please enter your email`;
  if (validity.typeMismatch) return `Invalid email, try again!`;
}

elements.form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const allValid = initValidation(elements.form);

  if (allValid) {
    const { email, comment, button } = evt.currentTarget.elements;

    button.disabled = false;
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
      .catch(error => console.error('Error:', error));
  }
}

elements.closeBtn.addEventListener('click', handlerClick);

function handlerClick() {
  elements.modal.classList.add('is-hidden');
}

export { elements, resetStyles, setSuccessStyles, initValidation, getMessage, handlerSubmit, handlerClick };

// const elements = {
//   form: document.querySelector('.js-footer-form'),
//   closeBtn: document.querySelector('.js-modal-close-btn'),
//   submitBtn: document.querySelector('.footer-form-btn'),
//   modal: document.querySelector('.backdrop'),
//   input: document.querySelector('.js-input'),
//   errorBox: document.createElement('div'),
//   succesBox: document.createElement('div'),
// };

// function initValidation(form) {
//   form.setAttribute('novalidate', '');

//   elements.input.setAttribute('aria-invalid', false);
//   elements.input.setAttribute('aria-valid', false);
//   elements.errorBox.classList.add('error');
//   elements.succesBox.classList.add('succes');

//   elements.input.insertAdjacentElement('afterend', elements.errorBox);
//   elements.input.insertAdjacentElement('afterend', elements.succesBox);

//   elements.input.addEventListener('invalid', () => {
//     elements.input.setAttribute('aria-invalid', true);

//     elements.succesBox.textContent = '';
//     elements.input.setAttribute('aria-valid', false);

//     const message = getMessage(elements.input);
//     elements.errorBox.textContent = message || elements.input.validationMessage;
//     elements.submitBtn.disabled = true;
//   });

//   elements.input.addEventListener('blur', () => {
//     elements.input.checkValidity();
//   });

//   elements.input.addEventListener('input', () => {
//     const valid = elements.input.checkValidity();

//     let maxLength = 20;

//     if (elements.input.value.length > maxLength) {
//       elements.input.value =
//         elements.input.value.substring(0, maxLength) + '...';
//     }

//     if (valid) {
//       elements.input.setAttribute('aria-invalid', false);
//       elements.input.setAttribute('aria-valid', true);
//       elements.succesBox.textContent = 'Succes!';
//       elements.errorBox.textContent = '';
//     }
//   });
// }

// initValidation(elements.form);

// function getMessage(field) {
//   const validity = field.validity;
//   if (validity.valueMissing) return `Please enter your email`;
//   if (validity.typeMismatch) return `Invalid email, try again!`;
// }

// elements.form.addEventListener('submit', handlerSubmit);

// function handlerSubmit(evt) {
//   evt.preventDefault();

//   const allValid = elements.form.checkValidity();
//     if (!allValid) {
//       evt.preventDefault();
//     }

//   elements.input.setAttribute('aria-valid', false);
//   elements.succesBox.textContent = '';

//   const { email, comment, button } = evt.currentTarget.elements;

//   button.disabled = false;
//   const post = {
//     email: email.value,
//     comment: comment.value,
//   };

//   const options = {
//     method: 'POST',
//     body: JSON.stringify(post),
//     headers: {
//       'Content-type': 'application/json',
//     },
//   };
//   fetch('https://portfolio-js.b.goit.study/api-docs/', options)
//     .then(
//       resp => elements.modal.classList.remove('is-hidden'),

//       evt.currentTarget.reset()
//     )
//     .catch(error => console.error('Error:', error));
// }
// console.log(elements.closeBtn);
// elements.closeBtn.addEventListener('click', handlerClick);

// function handlerClick() {
//   elements.modal.classList.add('is-hidden');
// }

// export { elements, initValidation, getMessage, handlerSubmit, handlerClick };
