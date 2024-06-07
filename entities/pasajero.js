   export class Pasajero{
    nombre;
    apellido;
    vuelos= [];

    agregarVuelo(unVuelo){
      this.vuelos.push(unVuelo);
    }

    cantidadVuelos(){
      return this.vuelos.length;
    }
//hacer el test,.
    constructor(nombre,apellido){
      this.nombre=nombre;
      this.apellido=apellido;
    }

    cantidadVecesQueVisitaste(unaCiudad){
      //consideramos que un pasajero visito una ciudad si partio de un aeropuerto que estaba en esa ciudad
      return this.vuelos.filter(V => unaCiudad.tenesAeropuerto(V.aeropuertoSalida)).length;
    }
   } 