const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClass: 'popup__input_type_error',
  buttonSelector: '.popup__button-save',
  buttonDisabledClass: 'button-save_inactive',
};

/**
 * Cancel form submission on backend
 * @param {*} event
 */
function disableSubmit(event) {
  event.preventDefault();
}

/**
 * Activate form validation
 * @param {*} config
 */
function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form) => {
    form.addEventListener('submit', disableSubmit);

    addInputListners(form, config);
    toggleButton(form, config);
  });
}

/**
 * Process input
 * @param {*} event
 * @param {*} config
 */
function handleFormInput(event, config) {
  const input = event.target;
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);
  console.log(errorElement);

  if (input.validity.valid) {
    input.classList.remove(config.errorClass);
    errorElement.textContent = '';
  } else {
    input.classList.add(config.errorClass);
    errorElement.textContent = input.validationMessage;
  }
}

/**
 * Toggle submit button
 * @param {*} form
 * @param {*} config
 */
const toggleButton = (form, config) => {
  const buttonSubmit = form.querySelector(config.buttonSelector);
  const isFormValid = form.checkValidity();

  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle('button-save_inactive', !isFormValid);
};

/**
 * Add event handlers to form inputs
 * @param {*} form
 * @param {*} config
 */
function addInputListners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));

  inputList.forEach(function (item) {
    item.addEventListener('input', (event) => {
      handleFormInput(event, config);
      toggleButton(form, config);
    });
  });
}

enableValidation(formValidationConfig);
