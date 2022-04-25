var variable = "Hola";

//console.log(variable);

const constante = "No podemos cambiarla"; //Variables constantes NO pueden cambiar su valor

//constante = "Ya la cambié";

let i = 0; //Variables let solamente funcionan en su respectivo BLOQUE de código
for (i=0; i<5;i++){
    console.log(i);
}

//console.log(i);

const alumnos = ["Juan", "Jhonny", "Javier", "Luciano"];

function imprimirNombres() {
    //let index = 0;
    //let name; //LET si pueden ser cambiadas en su valor
    for(let index=0; index<alumnos.length; index++){
        const name = alumnos[index];
        //name = alumnos[index];
        console.log(name+' alumno está en '+index);
    }

    //console.log("El último nombre e index fueron: "+name+":"+index);
}

imprimirNombres();

console.log(nombre);
var nombre = "Elena de Troya"; //Solamente las variables var pueden accesarse antes de que se declaren
//let nombre2 = "Juana de Arco";
let nombre2;

helloWorld();

function helloWorld() {
    let nombre2 = "Juana de Arco";
    console.log("Hola "+nombre2);
}

console.log(nombre2);

for(let i=0;i<5;i++){
    console.log(i);
    for(let j=0;j<2;j++){
        console.log(i, j);
    }
}

// for(let i=0;i<10;i++){
//     console.log(i);
// }

// console.log(i);
// console.log("Hello "+nombre);

//Desestructuración
const animales = ["tortuga", "perro", "pez", "gato"];
console.log(animales[0]);

//En base a la estructura de mi arreglo, guardamos en las variables los valores
var [primerAnimal, segundoAnimal, tercerAnimal, cuartoAnimal]= animales;
/*
 * primerAnimal = animales[0];
 * segundoAnimal = animales[1];
 * tercerAnimal = animales[2];
 * cuartoAnimal = animales[3];
 */
console.log(tercerAnimal);

primerAnimal = "ballena";
console.log(primerAnimal);

const alumno = {
    nombre:"Elena",
    apellido:"De Troya",
    email:"elena@codingdojo.com",
    password:"ConstraseñaSegura123"
};

const {email, password} = alumno; //Guardamos en una variable email aquel atributo con nombre email
/*
 *email = alumno['email']; 
 * password = alumno['password']
 */
console.log(email);

const {nombre: nombreElena} = alumno //Guardamos en una variable nombreElena el atributo nombre
console.log(nombreElena);

const alumno2 = {
    nombre: "Juana",
    apellido: "De Arco",
    email: "juana@codingdojo.com",
    password: "ContaSegura112",
    direcciones:
        [
            {
                direccion: 'Francia 123',
                ciudad: 'Paris'
            },
            {
                direccion: 'Sócrates 112',
                ciudad: 'Roma'
            },
            {
                direccion: 'Milan 22',
                ciudad: 'Milan1'
            },
            {
                direccion: 'Milan 22',
                ciudad: 'Milan2'
            },
            {
                direccion: 'Milan 22',
                ciudad: 'Milan3'
            }
        ]
};

const { direcciones: [dir1, dir2] } = alumno2;
console.log(dir1);

const { direcciones: [ {ciudad: ciudadDir} ] } = alumno2; //Obtenemos la ciudad de la primera dirección
console.log(ciudadDir);

const { direcciones: [ ,{ciudad: ciudadDir2} ] } = alumno2;
console.log(ciudadDir2);

const { direcciones: [ , , {ciudad: ciudadDir3} ] } = alumno2;
console.log(ciudadDir3);

const { direcciones: [{ciudad: ciudadDir1}, , , {ciudad: ciudadDir4} ] } = alumno2;
console.log(ciudadDir4);

//SPREAD
const [primerAnimalito, ...restoAnimales] = animales; //Guardamos en restoAnimales todos los animales que NO son el primer animal
console.log(primerAnimalito);
console.log(restoAnimales);

const { nombre:primerNombre, apellido: apellidoJuana, ...restoAtributos } = alumno2;
console.log(primerNombre);
console.log(apellidoJuana);
console.log(restoAtributos);

const {nombre:pn,...copia_alumno2} = alumno2;
console.log(copia_alumno2);

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

function hola(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

const holaFlecha = (nombre, apellido) => {
    console.log(`Hola ${nombre} ${apellido}`);
}

const holaSimple = (nombre, apellido) => console.log(`Hola ${nombre} ${apellido}`);

const holaFlechaReturn = (nombre, apellido) => {
    return `Hello ${nombre} ${apellido}`;
}

const holaReturnSimple = (nombre, apellido) => `Hello ${nombre} ${apellido}`;

const holaSinVariables = () => "Hola mundo";

hola("Elena", "De Troya");
holaSimple("Juana", "De Arco");

var texto = holaFlechaReturn("Pedro", "Paramo");
console.log(texto);

var texto2 = holaReturnSimple("Gabriel", "García Marquez");
console.log(texto2);

var texto3 = holaSinVariables();
console.log(texto3);

let num1 = 1;
let num2 = 2;
if(num1 > num2) {
    console.log("num1 es mayor a num2");
} else {
    console.log("num2 es mayor a num1");
}

console.log("--------------");

//Ternario
// CONDICION ? SI SE CUMPLE CONDICION : SI NO SE CUMPLE CONDICION
console.log( num1 > num2 ? "num1 es mayor a num2" : "num2 es mayor a num1");

var lluvia = true;
var soleado = false;

console.log( lluvia ? 
                soleado ?
                    "Va a haber un arcoris" : 
                    "Lleva paraguas"
                : 
                "Diviértete" );


if(num1 > num2) {
    console.log("num1 es mayor a num2");
}else if(num2 > num1) {
    console.log("num2 es mayor a num1");
}else {
    console.log("num1 y num2 son iguales");
}

num1 = 1;
num2 = 1;
console.log( num1 > num2 ?
                "num1 es mayor a num2" :
                num2 > num1 ?
                    "num2 es mayor a num1":
                    "num1 y num2 son iguales"
);

console.log(lluvia ? "Está lloviendo":"");

const weather = (lluvia, soleado) =>  lluvia ? soleado ? "Va a haber un arcoris" : "Lleva paraguas" : "Diviértete"

function weather2 (lluvia, soleado) {
    if(lluvia) {
        if(soleado){
            return "Va a haber un arcoiris";
        } else {
            return "Lleva paraguas";
        }
    } else {
        return "Diviértete";
    }
}

const funcionPrueba = numero => numero > 5 ? numero*5 : numero;

var textW = weather(lluvia, soleado);
console.log(textW);