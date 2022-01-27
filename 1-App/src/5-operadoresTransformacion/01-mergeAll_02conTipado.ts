import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, mergeAll, pluck, tap} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsers } from '../interfaces/github-users.interface';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList);

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[]) => {

    console.log(usuarios);
    orderList.innerHTML = '';
    usuarios.map(user => {
        
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'Ver Página';
        anchor.target = '_blank';

        li.append( img );
        li.append( user.login + ' ');
        li.append( anchor );

        orderList.append(li);
    });
    
}

//Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500), //emite valores cada tiempo determinado (parametro)
    // pluck('target','value'), //el pluck no se puede tipar por obsoleto, entonces se reemplaza por map
    map<KeyboardEvent, string>(resp => resp.target['value']),
    map<string, Observable<GithubUsers>>( value => 
        ajax.getJSON(
            `https://api.github.com/search/users?q=${ value }`
    )),
    mergeAll<Observable<GithubUsers>>(),
    // pluck('items')
    map<GithubUsers, GithubUser[]>(resp => resp.items)
).subscribe( mostrarUsuarios );