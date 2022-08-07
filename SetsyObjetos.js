const familia = ['Agustin', 'Sara','Macarena'];

const familia2 = new Set(familia);

familia2.add('Bernabe');
familia2.add('Javascript');


////////////////////////////////////
//objetos

const datos_P = {
    nombre:'Agustin',
    apellido:'Molina',
    edad:32,
    altura:176,
    eresDesarrollador:'si',
}

// const edad1 = "edad";

// console.log(datos_P[edad1]);

// const juntos = {...datos_P,...datos_B};
const juntos2 = [{...datos_P},
{nombre:'Sara',
apellido:'Iuale',
edad:3,
altura:050,
eresDesarrollador:'no',}];
// console.log(juntos2);

const mayor = juntos2.sort((a,b) => b.edad - a.edad);

console.log(mayor);

////////////////////////////////
//fechas

const fechaAhora = new Date();
const nacimiento = new Date(1990,3,10);
const masTarde = (fechaAhora > nacimiento);
const mes = nacimiento.getMonth() +1;
const dia = nacimiento.getDay();
const year = nacimiento.getFullYear();
console.log(year);

//////////////////////////
//prompt
const edad = prompt("¿Cuántos años tenes?")