import { fromEvent } from 'rxjs';
import { mergeMap, pluck } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList);

//Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

//Aquí podemos ver que por cada letra que escriba el mergeMap hace la petición,
//Esto puede que sirva pero no es eficiente, para eso se usa el switchMap
const url = 'https://httpbin.org/delay/1?arg=';
input$.pipe(
    pluck('target','value'),
    mergeMap(texto => ajax.getJSON(url+texto))
).subscribe(console.log);