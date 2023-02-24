const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileAddPlaceButton = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

const popupsList = document.querySelectorAll('.popup');

const profileEditPopup = document.querySelector('.popup_type_edit');
const profileNameInput = profileEditPopup.querySelector('.popup__input_data_name');
const profileJobInput = profileEditPopup.querySelector('.popup__input_data_job');
const profileForm = profileEditPopup.querySelector('.popup__form');

const cardsContainer = document.querySelector('.elements');
const placeCardTemplate = document.querySelector('#place-template').content;

const cardPopup = document.querySelector('.popup_type_card');
const cardNameInput = cardPopup.querySelector('.popup__input_data_place');
const cardLinkInput = cardPopup.querySelector('.popup__input_data_link');
const cardForm = cardPopup.querySelector('.popup__form');
const popupPlaceSaveButton = cardPopup.querySelector('.popup__button-save');

const imageZoomPopup = document.querySelector('.popup_type_image');
const imageZoom = imageZoomPopup.querySelector('.popup__picture');
const imageZoomName = imageZoomPopup.querySelector('.popup__picture-title');

/**
 * Open current popup
 */
function openPopup(currentPopup) {
  currentPopup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
}

/**
 * Close current popup
 */
function closePopup(currentPopup) {
  currentPopup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEscape);
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
 * Close popup with esc
 * @param {*} evt
 */
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup, formValidationConfig);
  }
}

/**
 * Open profile edit popup
 */
function openProfileEditPopup() {
  const profileNameValue = profileName.textContent;
  profileNameInput.value = profileNameValue;

  const profileJobValue = profileJob.textContent;
  profileJobInput.value = profileJobValue;

  openPopup(profileEditPopup);
  toggleButton(profileForm, formValidationConfig);
}
profileEditButton.addEventListener('click', openProfileEditPopup);

/**
 * Handle profile edit form submit
 * @param {*} evt
 */
function handleFormSubmit(evt) {
  evt.preventDefault();

  const profileNameInputValue = profileNameInput.value;
  profileName.textContent = profileNameInputValue;

  const profileJobInputValue = profileJobInput.value;
  profileJob.textContent = profileJobInputValue;

  const currentPopup = evt.currentTarget.closest('.popup');
  closePopup(currentPopup);
}
profileForm.addEventListener('submit', handleFormSubmit);

/**
 * Open add new place popup
 */
function openAddPlacePopup() {
  openPopup(cardPopup);
  toggleButton(cardForm, formValidationConfig);
}
profileAddPlaceButton.addEventListener('click', openAddPlacePopup);

/**
 * Create a new place
 * @param {*} place
 * @returns Place element
 */
function createSinglePlace(place) {
  const placeElement = placeCardTemplate.cloneNode(true);

  const placeImageElement = placeElement.querySelector('.element__image');
  const placeNameElement = placeElement.querySelector('.element__name');
  const placeLikeButton = placeElement.querySelector('.element__like-button');
  const placeTrashButton = placeElement.querySelector('.element__trash-button');

  placeImageElement.src = place.url;
  placeImageElement.alt = place.name;
  placeNameElement.textContent = place.name;

  placeLikeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_is-active');
  });

  placeTrashButton.addEventListener('click', function () {
    const listElement = placeTrashButton.closest('.element');
    listElement.remove();
  });

  const openImagePopup = function () {
    imageZoom.src = place.url;
    imageZoom.alt = place.name;
    imageZoomName.textContent = place.name;
    openPopup(imageZoomPopup);
  };
  placeImageElement.addEventListener('click', openImagePopup);

  return placeElement;
}

/**
 * Add place
 * @param {*} placeElement
 */
function addPlace(place) {
  const newPlace = createSinglePlace(place);
  cardsContainer.prepend(newPlace);
}

/**
 * Handle events for adding new elements
 * @param {*} evt
 */
function handleAddPlace(evt) {
  evt.preventDefault();

  const placeInputValue = cardNameInput.value;
  const linkInputValue = cardLinkInput.value;
  const place = {};
  place.name = placeInputValue;
  place.url = linkInputValue;
  addPlace(place);
  evt.target.closest('form').reset();

  const currentPopup = evt.currentTarget.closest('.popup');
  closePopup(currentPopup);
}
popupPlaceSaveButton.addEventListener('click', handleAddPlace);

/**
 * Add places from file 'cards.js'
 */
function renderCardPlace() {
  initialCards.forEach((item) => {
    const place = {};
    place.name = item.name;
    place.url = item.link;
    addPlace(place);
  });
}
renderCardPlace();
