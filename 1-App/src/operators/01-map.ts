import { fromEvent, range, Subscriber } from "rxjs";
import { map } from 'rxjs/operators';



// range(1,5).pipe(
//     map<number,string>( val => (val * 10).toString())
// ).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupEvent$ = keyup$.pipe(
    map(event => event.code)
);

//Debo de subscribirme al observable que retorna el pipe
keyupEvent$.subscribe(val => console.log('map', val));