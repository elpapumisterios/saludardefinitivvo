

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
test('jugador 1 anota 3 puntos: 40-30', () => {
    const juego = new JuegoTenis();
    juego.anotarJugador1();
    juego.anotarJugador1();
    juego.anotarJugador1();
    juego.anotarJugador2();
    juego.anotarJugador2();
    expect(juego.obtenerMarcador()).toBe('40-30');
} );  
test('jugador 2 anota deuce: Deuce', () => {
    const juego = new JuegoTenis();
    juego.anotarJugador1();
    juego.anotarJugador1();
    juego.anotarJugador1();
    juego.anotarJugador2();
    juego.anotarJugador2();
    juego.anotarJugador2();
    expect(juego.obtenerMarcador()).toBe('Deuce');
} );
test('jugador 1 anota ventaja: Ventaja Jugador 1', () => {
    const juego = new JuegoTenis();
    juego.anotarJugador1();
    juego.anotarJugador1();
    juego.anotarJugador1();
    juego.anotarJugador2();
    juego.anotarJugador2();
    juego.anotarJugador2();
    juego.anotarJugador1();
    expect(juego.obtenerMarcador()).toBe('Ventaja Jugador 1');
} );
test('jugador 1 gana el juego: Game para Jugador 1', () => {
    const juego = new JuegoTenis();
    juego.anotarJugador1();
    juego.anotarJugador1();
    juego.anotarJugador1();
    juego.anotarJugador2();
    juego.anotarJugador2();
    juego.anotarJugador2();
    juego.anotarJugador1();
    juego.anotarJugador1();
    expect(juego.obtenerMarcador()).toBe('Game para Jugador 1');
} );  
