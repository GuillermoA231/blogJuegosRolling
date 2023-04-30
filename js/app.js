const inputBuscar = document.querySelector('#inputBuscar');
const juegosTotales = document.querySelectorAll('.tarjetaDeJuego');
const juegoNoEncontrado = document.querySelector('#juegoNoEncontrado');

/* Logcia Input Buscar */
document.addEventListener('keyup', e => {
	if(e.key === 'Escape') e.target.value = '';
	if (e.target.matches('#inputBuscar')) {
		juegosTotales.forEach(juego => {
			juego.children[1].children[0].innerHTML.toLowerCase().includes(e.target.value.toLowerCase()) ? juego.classList.remove('oculto') : juego.classList.add('oculto');
		});
		const juegosOcultos = document.querySelectorAll('.oculto');
		juegosOcultos.length >= juegosTotales.length
			? juegoNoEncontrado.className = ''
			: juegoNoEncontrado.className = 'imgOculta';
	};
});