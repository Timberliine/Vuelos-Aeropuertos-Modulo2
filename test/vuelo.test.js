import { Vuelo } from "../entities/vuelo.js";
import { Pasajero } from "../entities/pasajero.js";
import { Avion } from "../entities/avion.js";

test("La capacidad de pasajeros es 50% (avion con 4 asientos)", () =>{
const unAvion= new Avion ();
    unAvion.cantAsientos=4;
Vuelo.pasajeros= [4];

const pasajero1= new Pasajero("Belen", "Zebbibo");
const pasajero2= new Pasajero("Ramirez", "Tomas");

const unVuelo = new Vuelo();
unVuelo.avion= unAvion;

unVuelo.agregarPasajero(pasajero1);
unVuelo.agregarPasajero(pasajero2);

const capacidadEsperada = 50;
const capacidadObtenida = unVuelo.capacidadOcupadaPorPasajeros();

expect(capacidadObtenida).toBe(capacidadEsperada);
});