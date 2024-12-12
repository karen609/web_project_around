const button = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closed = document.querySelector(".popup__close-button");



function toggleOpened () {
  popup.classList.toggle("popup_opened")
}
button.addEventListener("click",()=>toggleOpened());
closed.addEventListener("click",()=>toggleOpened());

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector(".profile__name")
  let jobInput = document.querySelector(".profile__occupation")
}
formElement.addEventListener('submit', handleProfileFormSubmit);


