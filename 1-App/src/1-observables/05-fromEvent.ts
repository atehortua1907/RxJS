import { fromEvent } from "rxjs";

/**
 * Eventos del DOM
 */

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next', val)
};

//Imprimir las coordenadas del evento click

// src1$.subscribe(evt => {
//     console.log(evt.x);
//     console.log(evt.y);
// });

//Con destrecturación
src1$.subscribe(({x,y}) => {
    console.log(x, y);

});
src2$.subscribe(evento => {
    console.log(evento.key);
});
