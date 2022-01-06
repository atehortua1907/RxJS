import { from, of } from "rxjs";
import { distinctUntilChanged, tap } from "rxjs/operators";

const numeros$ = of(...[1,1,'1',3,2,5,1,3,4,4]);

//distinctUntilChanged emite valores distintos (previosValue != currentValue) así ya se hayan emitido antes

numeros$.pipe(
    // tap(val => console.log('tap: ', val)),
    distinctUntilChanged()
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
    {nombre : 'X'},
    {nombre : 'Zero'},
    {nombre : 'Goku'},
    {nombre : 'Megaman'},
    {nombre : 'Zero'},
];

from(personajes).pipe(    
    distinctUntilChanged((previous, current) => previous.nombre === current.nombre)
).subscribe(console.log);