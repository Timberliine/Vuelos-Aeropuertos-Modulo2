export class Vuelo {
      pasajeros= [];
    tripulacion= [];
    fechaHoraPartida;
    aeropuertoSalida;
    aeropuertoDestino;

    agregarPasajero(pasajero){
        this.pasajeros.push(pasajero);
    }

    capacidadOcupadaPorPasajeros(){
        return ( this.pasajeros.length * 100) / this.avion.cantAsientos;
    }
}