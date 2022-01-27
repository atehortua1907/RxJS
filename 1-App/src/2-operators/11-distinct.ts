import { distinct, from, of, tap } from "rxjs";

const numeros$ = of(...[1,1,1,3,2,5,1,3,4,4]);

//distinct emite valores no repetidos

numeros$.pipe(
    tap(val => console.log('tap: ', val)),
    distinct() // ===
    
).subscribe({
    next: val => console.log('next ', val),
    complete: () => console.log('complete')
});

interface Personaje{
    nombre: string
};

const personajes : Personaje[] = [
    {nombre : 'Megaman'},
    {nombre : 'X'},
    {nombre : 'Zero'},
    {nombre : 'Goku'},
    {nombre : 'Megaman'},
    {nombre : 'Zero'},
];

from(personajes).pipe(
    distinct(p => p.nombre) //Cuando es un objeto hay que comparar por alguna propiedad
).subscribe(console.log);