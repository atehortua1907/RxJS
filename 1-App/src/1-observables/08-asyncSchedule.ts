import { asyncScheduler, subscribeOn } from "rxjs";

// setTimeout(() => {}, 3000);
// setInterval(()=> {}, 3000);

const saludar = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);

//Esto hace lo mismo que la función setTimeout
// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, 'David'); // el tercer argumento
//son los parametros de la función (argumento1), solo recibe un parametro,
//por lo que es recomendable que la función reciba un objeto

const subs = asyncScheduler.schedule(function(state){
    console.log('state', state);
    this.schedule(state+1, 1000); //Envía valores cada segundo de forma recursiva
}, 3000, 0);

//Dos formas de terminar la suscripcion
// setTimeout(()=>{subs.unsubscribe()}, 6000);
asyncScheduler.schedule(()=> subs.unsubscribe(), 6000);



