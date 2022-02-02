import { fromEvent, interval, of } from "rxjs";
import { map, mergeMap, take, takeUntil } from 'rxjs/operators';


//mergeMap: Maps each value to an Observable, then flattens all of these inner Observables using mergeAll.

const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
        map( number => letra + number),
        take(3)
    ))
)
//.subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('Complete')
// });

//Otro ejemplo:

const mouseDown$ = fromEvent( document, 'mousedown');
const mouseUp$ = fromEvent( document, 'mouseup');
const interval$ = interval(1000);

mouseDown$.pipe(
    mergeMap(()=> interval$.pipe(
        takeUntil( mouseUp$)
    ))
).subscribe(console.log);