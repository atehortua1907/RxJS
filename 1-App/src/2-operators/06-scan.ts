import { from} from "rxjs";
import { map, reduce, scan } from 'rxjs/operators';

const numeros = [1,2,3,4,5];

// const totalAcumulador = (acc, cur) => {
//     return acc + cur;
// };

const totalAcumulador = (acc, cur) =>  acc + cur;

//reduce
from(numeros).pipe(
    reduce(totalAcumulador)
).subscribe(console.log);

//scan
from(numeros).pipe(
    scan(totalAcumulador)
).subscribe(console.log);

//el scan da cabida al patron => Redux
interface Usuario{
    id?:string,
    autenticado?:boolean,
    token?:string,
    edad?:number
};

const users: Usuario[] = [
    {id:'dav', autenticado: false, token: null},
    {id:'dav', autenticado: true, token: 'ABC'},
    {id:'dav', autenticado: true, token: 'ABC123'},
];

const state$ = from(users).pipe(
    scan<Usuario, Usuario>((acc:any, cur:any) => {
        return {...acc, ...cur}
    }, {edad: 33})
);

const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log);