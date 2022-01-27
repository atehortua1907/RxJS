import {from, fromEvent, range} from 'rxjs'
import { filter, map } from 'rxjs/operators';

//filter: Filtra las emisiones que emite el observable que cumplan la condición (true)

//Aquí solo deja pasar los valores que sean impares 
// const range$ = range(1,10).pipe(
//     filter(val => val % 2 == 1)
// ).subscribe(console.log);


//utilización del index
// const range$ = range(20,10).pipe(
//     filter((val, i) => {
//         console.log('index', i);
//         return val % 2 == 1;
//     })
// ).subscribe(console.log);

interface Personaje{
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Jocker'
    },
];

from(personajes).pipe(    
    filter(personaje => personaje.tipo === 'heroe')
).subscribe(console.log);

//Encadenamiento de operadores, se ejecutan de arriba hacia abajo
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code), //<KeyboardEvent, string>
    filter(key => key === 'Enter')
);

keyup$.subscribe(console.log);