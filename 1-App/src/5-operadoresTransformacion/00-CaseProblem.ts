import { fromEvent } from 'rxjs';
import { debounceTime, map, pluck, tap} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList);

//Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

input$.pipe(
    debounceTime(500), //emite valores cada tiempo determinado (parametro)
    pluck('target','value'),
    map( value => 
        ajax.getJSON(
            `https://api.github.com/search/users?q=${ value }`
    ))
).subscribe( resp => { //se recibe un observable
    resp.pipe()
    .subscribe(console.log)
});

//En este ejemplo recibimos observables lo que requiere subscribirse en cada nivel
//Esto se soluciona con los operadores de transformación o Flattens Observables indicados a continuación
//En los siguientes archivos
