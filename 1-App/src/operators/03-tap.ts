import { range } from "rxjs";
import {map, tap} from 'rxjs/operators';

//tap: no modifica los valores emitidos
//util para depurar
//el tap recibe un observer y el complete se ejecuta cuando todo el
//observable del range ha terminado
const numeros$ = range(1,5).pipe(
    // tap(val => console.log('antes', val)),
    tap({
        next: value => console.log('antes', value),
        complete: () => console.log('se completo todo')
    }),
    map(val => val*10),
    tap(val => console.log('despues', val))
);

numeros$.subscribe(val => console.log('subs', val))
