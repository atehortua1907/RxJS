import { fromEvent } from 'rxjs';
import { debounceTime, map, mergeAll, pluck, tap} from 'rxjs/operators';
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
    )),
    mergeAll(),
    pluck('items')
).subscribe( console.log ); // ya no recibe un observable sino la data procesada (SIN TIPADO)