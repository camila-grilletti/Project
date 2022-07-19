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
    if (screen.width < 500) {
        document.getElementById("logo").style.display = "none";
    } else {
        document.getElementById("logo").style.display = "";
    }
}

function cerrarBuscar () {
    buscarmobile.style.display="none";
    document.getElementById("cart").style.display = "";
    document.getElementById("glass").style.display = "";
    document.getElementById("bars").style.display = "";
    if (screen.width < 500) {
        document.getElementById("logo").style.display = "";
    }
}