class Vehiculo {

    constructor(anio, marca, modelo, color, ruedas){
        this.anio = anio;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ruedas = ruedas;
    }

    acelerar() {
        return "Aceleremos!";
    }

}

class Auto extends Vehiculo {

    constructor(anio, marca, modelo, color, ruedas, placas) {
        super(anio, marca, modelo, color, ruedas); // Haciendo referencia a mi clase padre y utilizo el constructor que el padre tiene
        this.placas = placas || "123"; //Si existe placas? -> this.placas = places y si no-> this.placas = "123"
        this.motor = "automatico"; //Asignar directamente un atributo con un valor
    }

    acelerar() {
        //let mensaje_padre = super.acelerar();
        return "RUMMM! ";
    }

}

const auto1 = new Vehiculo(1991, "Honda", "Civic", "rojo", 4);
console.log(auto1.marca);
console.log(auto1.acelerar());

const auto2 = new Auto();
//auto2.marca = "Mazda";
console.log(auto2.marca);
console.log(auto2.acelerar());