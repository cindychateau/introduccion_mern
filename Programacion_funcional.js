
function hacerPasta(pasta, hacerSalsa){
    console.log("Hervir el agua");
    console.log("Agregar "+pasta+" pasta al agua");

    hacerSalsa(); //Ejecutar aquello que yo recibí como hacerSalsa

    console.log("Pasta lista!");
}

function hacerSalsaAlfredo() {
    console.log("Revolvemos ingredientes y hacemos la salsa alfredo");
}

function hacerSalsaPesto() {
    console.log("Revolvemos ingredientes y hacemos la salsa pesto");
}

hacerPasta("Spagetti", hacerSalsaAlfredo);
console.log("---------");
hacerPasta("Fetuccini", hacerSalsaPesto);

const funcionCallback = () => {
    console.log("Algunos milisegundo después");
}

//1.- Hacemos referencia a la funcion callbackFunction
//2.- Pedimos que ejecute la función después de 3000milisegundos
setTimeout( funcionCallback, 3000); 


/***FUNCIONES PARA ARREGLOS***/
const estudiantes = ["Elena De Troya", "Juana De Arco", "Pedro Páramo", "Gabriel García"];

//MAP - nos hace una copia de arreglo y regresa con extra
const listaEstudiantes = estudiantes.map( estudiante => `<li>${estudiante}</li>` );
console.log(listaEstudiantes);

//var callBackMap = (estudiante, index) =>  `Estudiante[${index}]: ${estudiante}`;

const listaEstudiantes2 = estudiantes.map( callBackMap );
console.log(listaEstudiantes2);

const filtro = item => item.includes("De"); //CALLBACK

//FILTER - nos regresa el arreglo en base a la condición que nosotros indiquemos
const oLista = estudiantes.filter( filtro ); //Callback

/**
 * oLista = []
 * for(let i=0; i<estudiantes.length;i++){
 *  item = estudiantes[i];
 *  if(item.includes("De")){
 *      oLista.push(item);
 *  }
 * }
 * 
 */


console.log(oLista);

function callBackMap(estudiante, index) {
    return `Estudiante[${index}]: ${estudiante}`;
}