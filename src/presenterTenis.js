import JuegoTenis from './tenis.js';

const juego = new JuegoTenis();

const marcadorDiv = document.getElementById('marcador-tenis');
const btnJugador1 = document.getElementById('btn-jugador1');
const btnJugador2 = document.getElementById('btn-jugador2');

function actualizarMarcador() {
    marcadorDiv.textContent = juego.obtenerMarcador();
}

btnJugador1.addEventListener('click', () => {
    juego.anotarJugador1();
    actualizarMarcador();
});

btnJugador2.addEventListener('click', () => {
    juego.anotarJugador2();
    actualizarMarcador();
});

actualizarMarcador();
