const desplegable = document.querySelector(".desplegable");
const overlay = document.querySelector(".overlay");
const buscarmobile = document.querySelector(".buscarmobile");

function abrir() {
    desplegable.style.display="flex";
    overlay.style.display="flex";
}

function cerrar() {
    desplegable.style.display="none";
    overlay.style.display="none";
}

function abrirBuscar () {
    buscarmobile.style.display="flex";
    document.getElementById("cart").style.display = "none";
    document.getElementById("glass").style.display = "none";
    document.getElementById("bars").style.display = "none";
}

function cerrarBuscar () {
    buscarmobile.style.display="none";
    document.getElementById("cart").style.display = "";
    document.getElementById("glass").style.display = "";
    document.getElementById("bars").style.display = "";
}