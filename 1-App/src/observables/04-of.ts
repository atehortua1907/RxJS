import {of} from 'rxjs';

/**
 * of emite los elementos enviados
 */

// const obs$ = of([1,2,3,4,5,6]);
// const obs$ = of(...[1,2,3,4,5,6], 2,3,8,9);
// const obs$ = of([1,2], {});
// const obs$ = of([1,2], {a:1, b:2}, function(), true, Promise.resolve(true));
//Con tipado
const obs$ = of<number>(...[1,2,3,4,5,6], 2,3,8,9);


//Ejemplo sincrono
console.log('Inicio del Obs$');
obs$.subscribe( 
    next => console.log('next', next),
    null,
    () => console.log('Completado')
);
console.log('Fin del Obs$');