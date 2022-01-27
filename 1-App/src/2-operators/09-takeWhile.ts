import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";


const click$ = fromEvent<PointerEvent>(document, 'click');

//takeWhile, emite valores hasta que la condición NO se cumpla
//con el segundo argumento en true, indica que incluya el valor que rompió la condición
click$.pipe(
    map(({x,y}) => ({x,y})),
    // takeWhile(({y}) => y <= 150)
    takeWhile(({y}) => y <= 150, true)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});
