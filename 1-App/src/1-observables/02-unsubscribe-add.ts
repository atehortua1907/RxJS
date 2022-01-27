import {Observable, Observer} from 'rxjs'

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),    
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subscriber => {

    // Crear un contador, 1,2,3,4,5...
    let count = 0;

    const interval = setInterval(()=>{
        // Cada segundo
        count++;
        subscriber.next(count);

    }, 1000);

    setTimeout(()=>{
        subscriber.complete();
    },5000);

    setTimeout(() => {
        console.log("observable aún emitiendo info");
    }, 7000);

    return () => {
        clearInterval(interval);
        console.log(`Intervalo destruido, esto retorna cuando:
        un subscriptor ejecuta "unsubscribe()"
        o realiza el complete()`);
    }
});

const subs1 = intervalo$.subscribe(num => console.log('Subs_1', num));
const subs2 = intervalo$.subscribe(num => console.log('Subs_2', num));
const subs3 = intervalo$.subscribe(num => console.log('Subs_3', num));
const subs4 = intervalo$.subscribe(num => console.log("Subs_4", num));
const subs5 = intervalo$.subscribe(observer);

//Agrupar subscripciones:
// subs2.add(subs3)
//     .add() // no funciona
//Si se ha completado no se ejecuta el unsubscribe o viseversa
setTimeout(()=>{
    subs1.unsubscribe();
    subs2.unsubscribe();
    console.log('Completado timeout');
}, 4000);