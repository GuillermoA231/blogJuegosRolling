let inputNombreUsuario = document.getElementById('inputNombreUsuario');
let TextAreaComentario = document.getElementById('TextAreaComentario');
let formularioComentario = document.querySelector('form');
const comentarios = document.getElementById("comentarios");
let fechaActual = new Date();

formularioComentario.addEventListener('submit', agregarComentario);

function agregarComentario(e){
    e.preventDefault();
    const usuario = inputNombreUsuario.value.trim();
    const comentario = TextAreaComentario.value.trim();
    if(comentario !== "" && usuario !== ""){
        const listItem = document.createElement("li"); // Crear un nuevo elemento li
        listItem.className = "list-group-item mt-2 animate__animated animate__lightSpeedInLeft"; // Agregar clases de Bootstrap
        listItem.innerHTML = `<h5><strong>${usuario}</strong> ${comentario}</h5> <span class="text-secondary">${obtenerFechaHora()}</span><hr>`;
        comentarios.appendChild(listItem); // Agregar el elemento li a la lista
        inputNombreUsuario.value = ""; // Limpiar el input
        TextAreaComentario.value = ""; // Limpiar el input
        console.log(`${usuario}: ${comentario}`)
    }
}


function obtenerFechaHora() {
    let fechaActual = new Date();
    const dia = fechaActual.getDay(),
    mes = fechaActual.getMonth(),
    anio = fechaActual.getFullYear() 

    // jueves x de Abril del x
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    //fecha.innerHTML = `${daysOfWeek[fechaActual.getDay()]} ${fechaActual.getDate()} de ${monthsOfYear[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`

    let horaActual = fechaActual.getHours(),
        minutosActuales = fechaActual.getMinutes(),
        segundosActuales = fechaActual.getSeconds();

    if (segundosActuales < 10) {
        segundosActuales = '0' + segundosActuales;
    }
    if (minutosActuales < 10) {
        minutosActuales = '0' + minutosActuales;
    }
    if (horaActual < 10) {
        horaActual = '0' + horaActual;
    }
    /* horaActual >= 12? mediodia.innerHTML = 'PM' : mediodia.innerHTML = 'AM';
    horaActual = horaActual % 12;
    horaActual = horaActual ? horaActual : 12; */
    //horaActual > 12? horaActual -=12: horaActual;

    return `${horaActual}:${minutosActuales}:${segundosActuales} - ${dia}/${mes}/${anio}`;
}