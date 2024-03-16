// Inicializa ScrollReveal.js
ScrollReveal().reveal('.section-title', {
    origin: 'left', // Establece el origen de la animación
    distance: '200px', // Establece la distancia del desplazamiento
    duration: 2000, // Establece la duración de la animación en milisegundos
    easing: 'ease', // Establece la función de interpolación de la animación
    reset: true, // Restablece la animación en cada desplazamiento
    viewFactor: 0.3 // Define la proporción de elemento visible antes de activar la animación
});

//Función para close el menu
function closeMenu(){
    document.getElementsByClassName("nav-menu")[0].style.top ="-100%";
}
//Función para abrir el menu
function showMenu(){
    document.getElementsByClassName("nav-menu")[0].style.top ="0";
}

