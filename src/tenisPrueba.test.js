
import JuegoTenis, { Tenis } from "./tenis.js";

test('Marcador inicial 0-0', () => {
    const juego = new JuegoTenis();
    expect(juego.obtenerMarcador()).toBe('Love-Love');
} );
 
