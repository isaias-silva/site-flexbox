const mobile = window.document.getElementById("check-mobile");
const princi = window.document.querySelector("div#menu-center");
mobile.addEventListener("click", check);
let ativo = false;

function check() {
    princi.classList.toggle('ativado')
}