class JuegoTenis {
    constructor() {
        this.puntosJugador1 = 0;
        this.puntosJugador2 = 0;
    }

    obtenerMarcador() {
        const puntos = ['Love', '15', '30', '40'];

        if (this.puntosJugador1 >= 3 && this.puntosJugador2 >= 3) {
            if (this.puntosJugador1 === this.puntosJugador2) return 'Deuce';
            if (this.puntosJugador1 > this.puntosJugador2) return 'Ventaja Jugador 1';
            return 'Ventaja Jugador 2';
        }

        if (this.puntosJugador1 >= 4) return 'Game para Jugador 1';
        if (this.puntosJugador2 >= 4) return 'Game para Jugador 2';

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
