const button = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closed = document.querySelector(".popup__close-button");
const profileName = document.getElementById("profilename");
const profileJob = document.getElementById("profilejob");
const formName = document.getElementById("formname");
const formJob = document.getElementById("formjob");
const buttonSubmit= document.getElementById("buttonsubmit")



function toggle_opened () {
  popup.classList.toggle("popup_opened")
}
button.addEventListener("click",()=>toggle_opened());
closed.addEventListener("click",()=>toggle_opened());

function cambiarTexto (evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  popup.classList.toggle("popup_opened")
}
buttonSubmit.addEventListener("click",cambiarTexto);

