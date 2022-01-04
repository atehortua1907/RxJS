import { interval, timer } from "rxjs";
import { hasOnlyExpressionInitializer } from "typescript";

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
};

const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5); //desde ahora mas 5 segundos

const interval$ = interval(1000); //cada cierto tiempo (parametro) emite valores consecutivos
// const timer$ = timer(2000); //Despues del tiempo cumplido en el intervalo se ejecuta
// const timer$ = timer(2000, 1000); //Despues de dos segundos, emita valores cada un segundo
const timer$ = timer(hoyEn5); //una buena forma de programar alguna tarea


//Forma de validar la asincronia, javascript ejecuta lo asincrono apenas pueda
console.log('Inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');