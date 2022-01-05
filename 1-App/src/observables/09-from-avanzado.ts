import {of, from, Subscriber} from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
};

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

//forma tradicional
// for (let item of miIterable) {
//     console.log(item);    
// }

//con el from, el mismo resultado pero el from se presta para que trabajemos con operadores y observables
from(miIterable).subscribe(observer);

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]); //Mismo efecto del from con el spreed
// const source$ = from('David'); //itera cada caracter



//Una de las formas de trabajar con los fetch, pero...
//RXJs ya cuenta con htas para realizar peticiones ajax (en las proximas clases)
const source$ = from(fetch('https://api.github.com/users/klerith'));
source$.subscribe(async(resp) => {

    console.log(resp);
    const dataResp = await resp.json(); //esto sería otra promesa
    console.log(dataResp);
});