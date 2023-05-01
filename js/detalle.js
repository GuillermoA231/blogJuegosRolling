const sr = ScrollReveal ({
    distance:'65px',
    duration:2600,
    delay:450,
    reset:true
  });
  
  sr.reveal('.hero-text',{delay:200,origin:'top'});
  sr.reveal('.hero-img',{delay:450,origin:'top'});

  /*Muestra anuncio */
const anuncio = new bootstrap.Modal(document.getElementById("anuncio"))
function mostrarModal() {
    anuncio.show()
}
function cerrarModal(){
  anuncio.hide()
}

const cerrarModalBtn = document.getElementById("cerrar-modal")
cerrarModalBtn.addEventListener("click", cerrarModal)


setTimeout(mostrarModal, 4000);