// const PeliculaUno = {
//     "nombre": "harry",
//     "id": 01,
// reproducir() {
//     return `reproduciendo pelicula...${this.nombre}`
// }
// }

class Pelicula {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }

    reproducir() {
        return `reproduciendo pelicula...${this.nombre}`
    }

}

class Serie extends Pelicula {

    constructor(nombre, id, cap) {
        super(nombre, id);
        this.cap = cap;
    }

    reproducirCapitulo() {
        return `Reproduciendo capitulo ${this.cap} de la pelicula ${this.nombre}`
    }
}

const pe = new Pelicula("steven", 1);
const pe2 = new Pelicula("MI vida en 2 minutos", 2);
const peIns = new Serie("The Seven Deadly", 3, 55);

// console.log(pe.reproducir())
// console.log(pe2.reproducir())
console.log(peIns.reproducir())
console.log(peIns.reproducirCapitulo())