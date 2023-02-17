const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

const popupsList = document.querySelectorAll('.popup');

const profileEditPopup = document.querySelector('.popup_type_edit');
const profileNameInput = profileEditPopup.querySelector('.popup__input_data_name');
const profileJobInput = profileEditPopup.querySelector('.popup__input_data_job');
const profileForm = profileEditPopup.querySelector('.popup__form');

/**
 * Open current popup
 */
function openPopup(currentPopup) {
  currentPopup.classList.add('popup_is-opened');
}

/**
 * Close current popup
 */
function closePopup(currentPopup) {
  currentPopup.classList.remove('popup_is-opened');
}

/** Close popup with close button or overlay */
popupsList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_is-opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(popup);
    }
  });
});

/**
 * Open profile edit popup
 */
function openProfileEditPopup() {
  const profileNameValue = profileName.textContent;
  profileNameInput.value = profileNameValue;

  const profileJobValue = profileJob.textContent;
  profileJobInput.value = profileJobValue;

  openPopup(profileEditPopup);
}
profileEditButton.addEventListener('click', openProfileEditPopup);

/**
 * Handle profile edit form submit
 * @param {*} evt 
 */
function handleFormSubmit (evt) {
    evt.preventDefault();

    const profileNameInputValue = profileNameInput.value;
    profileName.textContent = profileNameInputValue;

    const profileJobInputValue = profileJobInput.value;
    profileJob.textContent = profileJobInputValue;

    const currentPopup = evt.currentTarget.closest('.popup');
    closePopup(currentPopup);
}
profileForm.addEventListener('submit', handleFormSubmit);


