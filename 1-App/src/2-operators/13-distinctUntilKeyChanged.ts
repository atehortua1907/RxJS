import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

//distinctUntilKeyChanged emite valores distintos cuando la propiedad indicada de un objeto cambia en el fluto

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
    distinctUntilKeyChanged('nombre')
).subscribe(console.log);