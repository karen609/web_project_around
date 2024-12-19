const button = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closed = document.querySelector(".popup__close-button");
const profileName = document.getElementById("#profilename");
const profileJob = document.getElementById("#profilejob");
const formName = document.getElementById("#formname");
const formJob = document.getElementById("#formjob");
const buttonSubmit= document.getElementById("#buttonsubmit");




function toggleOpened () {
  popup.classList.toggle("popup_opened")
}
button.addEventListener("click",toggleOpened);
closed.addEventListener("click",toggleOpened);

function cambiarTexto() {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
}

buttonSubmit.addEventListener("click", cambiarTexto);



