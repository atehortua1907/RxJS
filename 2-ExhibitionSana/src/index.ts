import { fromEvent, Observable, Observer, of } from "rxjs";
import { filter, map, mapTo, pluck, tap } from 'rxjs/operators';

// //Observable
// const observableManual1$ = new Observable ( subs => {

//     subs.next('Hola');
//     subs.next('Buenas');
//     subs.next('Tardes');
//     subs.complete();

//     subs.next('chao');
// });


// //Observer
// observableManual1$.subscribe(console.log);
// observableManual1$.subscribe(value => console.log('obserber ', value) );
// observableManual1$.subscribe(
//     nextValue => console.log('obserber 2 ', nextValue),
//     error => console.log('error obserber 2 ', error),
//     () => console.info('obserber 2 complete')    
// );

// const observer3: Observer<any> = {
//     next: value => console.log('obserber', value),
//     error: error => console.log('obserber', error),
//     complete: () => console.log('obserber Complete ')    
// }


// const observer4: Observer<any> = {
//     next: value => console.log('obserber 4', value),
//     error: error => console.log('obserber 4', error),
//     complete: () => console.log('obserber 4 Complete ')    
// }
// // observableManual1$.subscribe(observer3);


// const observableManual2$ = new Observable (subs => {

//     let count = 0;

//     setInterval(()=>{
//         count++;
//         subs.next(count);
//     }, 1000);

//     setTimeout(() => {
//         subs.complete();
//     }, 5000);
// });


// observableManual2$.subscribe(observer3);
// observableManual2$.subscribe(observer4);


// const observer3: Observer<any> = {
//     next: value => console.log('obserber', value),
//     error: error => console.log('obserber', error),
//     complete: () => console.log('obserber Complete ')    
// }

// const obserVableOf$ = of(1,5,4,8, ...[10,12,14]);
// obserVableOf$.subscribe(observer3);


const keyupEvent$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupEventMap$ = keyupEvent$.pipe(
    map( event => event.which * 10)
);

const keyupEventMapTo$ = keyupEvent$.pipe(
    mapTo( 'Han levantado una tecla')
);

const keyupEventPluck$ = keyupEvent$.pipe(
    pluck('target', 'autofocus')
);

const keyupEventFilter$ = keyupEvent$.pipe(
    tap(event => console.log('info antes del filter => ', event)),
    filter(event => event.code === 'Enter'),
    pluck('target', 'baseURI')
);

keyupEvent$.subscribe(val => console.log('data completa del evento sin ningún operador: ', val));
keyupEventMap$.subscribe(value => console.log('map =>', value));
keyupEventMapTo$.subscribe(value => console.log('mapTo =>', value));
keyupEventPluck$.subscribe(value => console.log('pluck =>', value));
keyupEventFilter$.subscribe(value => console.log('tap + filter + pluck =>', value));