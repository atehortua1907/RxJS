import { fromEvent, interval } from "rxjs";
import { takeUntil, skip, tap } from "rxjs/operators";

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';
document.querySelector('body').append(button);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(button, 'click');

//skip omite la cantidad de emisiones indicadas en el parametro
const clickBtn$ = fromEvent(button, 'click').pipe(
    tap(() => console.log('tap antes del skip')),
    skip(1),
    tap(() => console.log('tap despues del skip')),
);

//takeUntil, se emiten valores hasta que se emita un valor desde otro observable
counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});