

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
 

test('judador 2 anota 1 punto: 15-15', () => {
    const juego = new JuegoTenis();
    juego.anotarJugador1();
    juego.anotarJugador2();
    expect(juego.obtenerMarcador()).toBe('15-15');
} );
test('jugador 1 anota 2 puntos: 30-15', () => {
    const juego = new JuegoTenis();
    juego.anotarJugador1();
    juego.anotarJugador1();
    juego.anotarJugador2();
    expect(juego.obtenerMarcador()).toBe('30-15');
} );
test('jugador 2 anota 2 puntos: 30-30', () => {
    const juego = new JuegoTenis();
    juego.anotarJugador1();
    juego.anotarJugador1();
    juego.anotarJugador2();
    juego.anotarJugador2();
    expect(juego.obtenerMarcador()).toBe('30-30');
} );