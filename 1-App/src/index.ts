import {Observable, Observer} from 'rxjs'

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]:', value),
    error: error => console.warn('error [obs]: ', error),    
    complete: () => console.info('completado [obs]')
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {
    
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    subs.complete();

    //Despues de aquí no 
});

// obs$.subscribe(console.log); // Para ecmascript 6

//Es una manera, pero ya esta deprecated
// obs$.subscribe(
//     value => console.log('next', value),
//     error => console.warn('error', error),
//     () => console.info('Completado')
// );

obs$.subscribe(observer);