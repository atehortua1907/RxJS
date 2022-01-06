import { fromEvent } from "rxjs";
import { first, map, take, tap } from "rxjs/operators";


const click$ = fromEvent<PointerEvent>(document, 'click');

//first se completa apenas emite el primer valor
//first(condition o predicate), emite y se completa apenas cumpla la condición
click$.pipe(
    // take(1) //toma una emisión y se completa
    // first() //hace lo mismo que el take 1 pero es mas evidente y directo
    tap(event => console.log('tap clientY: ', event.clientY)),
    map(({clientX, clientY}) => ({clientX, clientY})), //map para transformar la info y poder destructurar
    first(event => event.clientY >= 150) //con condición
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete') 
});