console.log('Hello world');

/*
1) Const y Let (Block Scope) DONE
2) Arrow Functions DONE
3) Modules (Imports and Exports) DONE
4) Template Literals DONE
5) Classes (Constructor, Super, Setters and Getters)
6) Default Parameters DONE
7) The Spread Operator DONE
8) Destructuring DONE
9) Rest Operator DONE
10) map(), filter(), reduce() DONE
11) Promesas, Async/Await
*/

//1) Const y Let (Block Scope)
var miVar = 5;
let miVar2 = 5;

if (true) {
    var miVar = 10;
    //const miVar2 = 10 //esto no funciona!! esta mal modificar una const
    miVar2 = 10;
}
/* 
console.log(miVar);
console.log(miVar2); */


//2) Arrow Functions
function calcDate(date) {
    return date * 2;
}

const multi = calcDate(123);
console.log(multi);

const calcSum = () => {
    const valTemp = val * 3;
    return valTemp * 3;
};

const calcSumShort = val => val * 3; //como hay un solo parametro puedo sacar el parentesis

//4) Template Literals

const nombreCom = (nombre, edad) => { //quiero recibir el nombre y la edad y quiero retornar "hola soy lean"
    //return "Soy " + nombre + " y tengo " + edad;
    return `Soy ${nombre} y tengo ${edad}`;
}

console.log(nombreCom('Lean',37));

const markup = `
<div class="wrapper">
<h2>Subtitulo</h2>
</div>`;

const parser = new DOMParser();
const htmlObject = parser.parseFromString(markup, "text/html").body.firstChild;
const container = document.querySelector('.container');

container.append(htmlObject);


//let es una variable que acepta variaciones
//const: si le quiero asignar un valor a una variable const no se puede.

//3) Modules (Imports and Exports)
import colors from './colors.js'
console.log(colors);

import actores, { peliculasCopadas, cantidadPeliculas } from './libreriaAmiga.js';

console.log( peliculasCopadas, cantidadPeliculas(peliculasCopadas));

//8) Destructuring

    //Destructuring de Objetos
    const miAnime = peliculasCopadas[2].nombre;
    const miAnimeOri = peliculasCopadas[2].origen;

    console.log('mi anime', miAnime, miAnimeOri);

    const { nombre, origen, anio } = peliculasCopadas[2]; 
    //como existe un campo que se llama nombre y uno que se llama origen, puedo poner estos corchetes
    //no puedo hacer un destructuring de algo que no existe
    console.log('mi anime', nombre, origen, anio);

    //esto que voy a hacer a continuacion me permite traer un campo de mi objeto y en vez de trbajarlo con el nombre de ese campo, me permite trabajarlo con el nombre de otra variable que yo elija
    //const { nombre: nombreGroso, origen, anio } = peliculasCopadas[2]; //me traje nombre pero lo voy a trabajar con otra varibale. una vez que haces esto, nombre no existe (es undefined)
    //const { nombreGroso, origen, anio } = peliculasCopadas[2]; 
    //defini la constante nombreGroso cuando puse "nombre: nombreGroso"


    //Destructuring de Arrays
    const numbers= [-100, -50, 0, 1, 50, 100]; 
    //con destructuring yo puedo crear constantes para una posicion en particular de un array
    //extraigo posiciones del array que necesite
    //arranco el dato que me sirve de un objeto o array (no lo exrtaigo) sino que le cambio la constante?
    //sirve para crear una constante con una posicion del array y usarla
    const [, , , pos3] = numbers; //no usamos corchetes porque estamos haciendo un destructuring de arrays
    console.log('pos3' , pos3); //empezando desde la izq me esta almacenando 


//6) Default Parameters

const miFunc = (nombre = 'N/A', edad = 1000) => `Yo soy ${nombre} y tengo ${edad}`;
miFunc('Lean');
console.log(miFunc('Lean', 37));

//7) The Spread Operator
//me permite juntar los arrays o los bjetos. puedo tomar todos los elementos de un array, todos los de otro y generar un nuevo array basado en esos dos arrays

const numNegativos = [-500, -300, -100];
const numPositivos = [100, 300, 500];
const tercerArray = [100, 3000];

const todosLosNumeros = [...numNegativos, ...numPositivos ,800, 900, 1000, ...tercerArray];
console.log('todos', todosLosNumeros);


    //Ejemplo con arrays 
    const hollywood = [...actores, ...peliculasCopadas];
    console.log('Holly', hollywood);

    //Ejemplo con objetos
    const paisEmpresa = {
        nombrePais: 'Argentina',
        monedaPais: 'Peso Argentino',
        fundacionPais: 1816,
      };
      
    const empresa = {
        nombreEmpresa: 'MaimoCorp',
        logoEmpresa: 'logo.svg',
      };

    const datosEmpresa = { ...paisEmpresa, ...empresa, direccion:'Hidalgo bla' };
    console.log('Empresa', datosEmpresa);

//9) Rest Operator
//permite pedirle a un objeto separar en una variable alguno de los elementos de eso y todo lo demas en alguna otra constante
//separo el nombre pais en otra variabl y fundacionPais y monedaPais en otra variable

const { nombrePais , ...institucional } = paisEmpresa; //declara la variable "institucional"
console.log('Emp', nombrePais, institucional);

const universidad = {
    name: 'Umai',
    website: 'https://multimedia.maimonides.edu',
    sedes: ['Caballito', 'Centro', 'Palermo'],
  };

const { name, website, ...sedes} = universidad;
console.log("la uni: ", name, website, sedes);

//10) map(), filter(), find()
//solo para arrays
//los tres recorren el array de manera automatica sin necesidad de hacer un loop o un for each
//map y filter me va a hacer una transformacion en cada elemento del array que yo le diga y devolver eso en un nuevo array con el filtro aplicado
//map producir una trnasformacion en cada elemento del array de manera automatica

//quiero que para cada posicion de el array numerosPositivos me lo multiplique por 2
console.log(numPositivos);

//NUNCA hacer algo sobre la constante que ya tenia, sino que creo una nueva constante con esa para utilizarla

const numPositivosDobles = numPositivos.map(numero => numero * 2);
console.log(numPositivosDobles);

//map es una funcion que adentro tiene una funcion callBack anonima
//como argumento de la funcion (entre parentesis) va lo que va a ser la posicion en cada momento.  
//cada map tiene adentro un index, o sea nombreArray.map((numero, index) => numero * 2)

const numMayor100EscritoMultiplicado = numPositivos.map((numero) => {
    return numero > 100 ? numero : numero * 2 //si numero es mayor a 100 escribo numero, sino lo multiplico por 2
});
console.log(numMayor100EscritoMultiplicado); 

const peliTitle1 = peliculasCopadas.map(pelicula => `<h2>${pelicula.nombre}</h2>`);
//primero la transformo en un bloque: tengo que tener un return

//con destructuring
const peliTitle2 = peliculasCopadas.map(
    ({nombre, anio, origen}) => 
    `<h2>${nombre}</h2>
    <h3>${anio}</h3>
    <p>${origen}</p>`
    );

const peliTitle3 = peliculasCopadas.map((pelicula) => {
    const  {nombre} = pelicula
    return `<h2>${nombre}</h2>`;
});

console.log(peliTitle1);
console.log(peliTitle2);
console.log(peliTitle3);

//FILTER
//recorre el array como el map pero le tengo que aplicar una condicion a la busqueda

const pelisUsa = peliculasCopadas.filter((pelicula)=>{ //en el argumento siempre hacemos referencia al singular del elemento. O sea si tengo "peliculas" pongo "pelicula"

    return pelicula.origen === 'USA'; //este return me pide una condicion de VERDADERO O FALSO
    //pelicula.origen es igual a USA? si si, devuelve esto, si no no devuelve
}) 
console.log(pelisUsa)

//con destructuring
const pelisUsa2 = peliculasCopadas.filter(({origen, anio})=> origen === 'USA' || parseInt(anio) >= 1990); 
console.log(pelisUsa2)


        //1) Desestructuring:

        const calificaciones = [
        { nombre: 'Juan', nota: 5 },
        { nombre: 'Camila', nota: 9 },
        { nombre: 'Martina', nota: 7.5 }
        ];

        // Extraer solo las propiedades necesarias
        calificaciones.forEach(({ nombre, nota }) => {
        console.log(`${nombre} se sacó un ${nota}.`);
        });


        //2) Filtrar elementos que contengan una letra en un array de strings:

        const palabras = ["hola", "adiós", "casa", "perro", "gato"];
        const palabrasFiltradas = palabras.filter(palabra => palabra.includes("o"));
        console.log(palabrasFiltradas); // ["hola", "adiós", "perro"]


        //clase 23/03
        
        const taxedProducts = photoProducts.map(({name, price, type }) => {
            return { name, price: price * 1.1, type };

        });

        console.log('taxedProducts', taxedProducts);


//clase del 23/03
const array2 = [
    {name:'Lean', age: 37},
    {name:'Jime', age: 22}
]

//el current value es lean y después jime
// 0+1+2+3+4
const initialValue = 0;
const sumWithInitial = array2.reduce(
    (accumulator, {age}) => accumulator + age,
    initialValue
);

console.log(sumWithInitial / array2.length);