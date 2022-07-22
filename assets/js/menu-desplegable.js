const desplegable = document.querySelector(".desplegable");
const overlay = document.querySelector(".overlay");
const buscarmobile = document.querySelector(".buscarmobile");
const emergenteOverlay = document.querySelector(".emergente-overlay");
const emergenteCant = document.querySelector(".emergente");
const vermasResena = document.querySelector(".resena-vermas");
const vermenosResena = document.querySelector(".resena-vermenos");
const resenaDescripcion = document.querySelector(".resena__descripcion");
const ocultarFilas = document.getElementById("ocultar-fila");
const vermasFilas = document.querySelector(".tabla-vermas-f");
const vermenosFilas = document.querySelector(".tabla-vermenos-f");
const vermas_OP = document.querySelector(".opinion-vermas");
const vermenos_OP = document.querySelector(".opinion-vermenos");

// Habilitar o deshabilitar scroll

function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}

///////////////////////////////////

function abrir() {
    desplegable.style.display="flex";
    overlay.style.display="flex";
}

function cerrar() {
    desplegable.style.display="none";
    overlay.style.display="none";
}

function cerrarEmergenteCant() {
    emergenteCant.style.display="none";
    emergenteOverlay.style.display="none";
    enableScroll();
}

function abrirEmergenteCant() {
    // Si hay algun tipo de problemas, tener en cuenta que puede ser con el scree.width u otros
    if (window.innerWidth< 700) {
        emergenteCant.style.display="flex";
        emergenteOverlay.style.display="flex";
        disableScroll(); 
    } else {
        document.getElementById("submenu-oculto").style.display = "block";
        document.getElementById("arrow-right").style.display = "none";
        document.getElementById("arrow-down").style.display = "block";
        }
}

function cerrarEmergenteCant() {
    if (window.innerWidth < 700 ) {
        emergenteCant.style.display="none";
        emergenteOverlay.style.display="none";
        enableScroll();
    } else {
        document.getElementById("submenu-oculto").style.display = "none";
        document.getElementById("arrow-right").style.display = "block";
        document.getElementById("arrow-down").style.display = "none";
    }
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

// Ver más Reseña

function vermasR() {
    resenaDescripcion.style.display = "flex";
    vermasResena.style.display="none";
    vermenosResena.style.display="flex";
}

function vermenosR() {
    resenaDescripcion.style.display = "-webkit-box";
    vermasResena.style.display="flex";
    vermenosResena.style.display="none";
}

// Ver más filas

function vermasF(){
    document.getElementById('ocultar-fila').style.display = 'table-row';
    document.getElementById('ocultar-fila2').style.display = 'table-row';
    document.getElementById('ocultar-fila3').style.display = 'table-row';
    document.getElementById('ocultar-fila4').style.display = 'table-row';
    document.getElementById('ocultar-fila5').style.display = 'table-row';
    document.getElementById('ocultar-fila6').style.display = 'table-row';
    vermasFilas.style.display="none";
    vermenosFilas.style.display="flex";
}

function vermenosF() {
    document.getElementById('ocultar-fila').style.display = 'none';
    document.getElementById('ocultar-fila2').style.display = 'none';
    document.getElementById('ocultar-fila3').style.display = 'none';
    document.getElementById('ocultar-fila4').style.display = 'none';
    document.getElementById('ocultar-fila5').style.display = 'none';
    document.getElementById('ocultar-fila6').style.display = 'none';
    vermasFilas.style.display="flex";
    vermenosFilas.style.display="none";
}

// Ver más opiniones

function vermasOP() {
    if (window.innerWidth < 1024) {
        document.getElementById('users-ocultos').style.display = "block";
        vermas_OP.style.display="none";
        vermenos_OP.style.display="flex";
    } else {
        document.getElementById('users-ocultos').style.display = "grid";
        vermas_OP.style.display="none";
        vermenos_OP.style.display="flex";
    }
}

function vermenosOP() {
    document.getElementById('users-ocultos').style.display = "none";
    vermas_OP.style.display="flex";
    vermenos_OP.style.display="none";
}
