

import JuegoTenis, { Tenis } from "./tenis.js";

test('Marcador inicial 0-0', () => {
    const juego = new JuegoTenis();
    expect(juego.obtenerMarcador()).toBe('Love-Love');
} );

test('Jugador 1 anota un punto: 15-0', () => {
    const juego = new JuegoTenis();
    juego.anotarJugador1();
    expect(juego.obtenerMarcador()).toBe('15-Love');
} );
 
