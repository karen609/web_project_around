const input001 = document.getElementById("input001");
const p001 = document.getElementById("p001");
const button001 = document.getElementById("button01");

button001.addEventListener("click", cambiartexto);

function cambiartexto() {
  p001.textContent = input001.value;
}