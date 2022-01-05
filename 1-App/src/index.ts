import { fromEvent, range, Subscriber } from "rxjs";
import { map, pluck } from 'rxjs/operators';



// range(1,5).pipe(
//     map<number,string>( val => (val * 10).toString())
// ).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

//map: Transforma el objeto
const keyupEvent$ = keyup$.pipe(
    map(event => event.code)
);

//pluck: extrae la propiedad indicada por parametro
//si necesito una propiedad interna, navego separado por comas, ejemplo:
//propiedad 'baseURI' del objeto 'target' del objeto que se recibe por el observable
const keyupPluck$ = keyup$.pipe(
    pluck('target','baseURI')
);

//Debo de subscribirme al observable que retorna el pipe

keyup$.subscribe(console.log);
keyupEvent$.subscribe(val => console.log('map =', val));
keyupPluck$.subscribe(val => console.log('pluck =', val));