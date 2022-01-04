import {Observable, Observer, Subject, Subscriber} from 'rxjs'

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),    
    complete: () => console.info('completado')
};

//Nota: Para que un observable se ejecute al menos debe de haber un subscriptor activo

const intervalo$ = new Observable<number>(subs => {

    const  intervalID = setInterval(
        () => subs.next(Math.random()),
        1000
    );

    return () => {
        clearInterval(intervalID);
        console.log("Intervalo destruido");
    };
});

//De esta manera el observable emite valores distintos
// const subs1 = intervalo$.subscribe(rnd => console.log('subs1 ', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2 ', rnd));


//Con el subject (un tipo de observable), puedo recibir el mismo valor del Observable

/**
 * 1-Casteo múltiple (muchas subscripciones estaran sujetas a la misma fuente)
 * 2-También es un observer
 * 3-Se puede manejar el Next, error y complete
 */

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

//En lugar de suscribirse al Observable original, se suscriben al subject
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);


setTimeout(() => {
    subject$.next(10);
    subject$.complete(); // El subject complete no libera memoria, no realiza el return del obervable
    //Para eso debemos de unsubscribe el suscriptor:

    subscription.unsubscribe();
}, 3500);