class JuegoTenis {
    constructor() {
        this.puntosJugador1 = 0;
        this.puntosJugador2 = 0;
    }

   obtenerMarcador() {
    const puntos = ['Love', '15', '30', '40'];

    // Condición de Game
    if (this.puntosJugador1 >= 4 && this.puntosJugador1 - this.puntosJugador2 >= 2) {
        return 'Game para Jugador 1';
    }
    if (this.puntosJugador2 >= 4 && this.puntosJugador2 - this.puntosJugador1 >= 2) {
        return 'Game para Jugador 2';
    }

    // Condición de Deuce y Ventaja
    if (this.puntosJugador1 >= 3 && this.puntosJugador2 >= 3) {
        if (this.puntosJugador1 === this.puntosJugador2) return 'Deuce';
        if (this.puntosJugador1 > this.puntosJugador2) return 'Ventaja Jugador 1';
        return 'Ventaja Jugador 2';
    }

    // Marcadores normales
    return `${puntos[this.puntosJugador1]}-${puntos[this.puntosJugador2]}`;
}

    anotarJugador1() {
        this.puntosJugador1++;
    }

    anotarJugador2() {
        this.puntosJugador2++;
    }
}

// 👇 ESTA LÍNEA ES IMPORTANTE
module.exports = JuegoTenis;
