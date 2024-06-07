export class Ciudad{
    nombre;
    aeropuertos= [];

    agregarAeropuerto(aeropuerto){
        this.aeropuertos.push(aeropuerto);
    }

    cantidadAeropuertos(){
        return this.aeropuertos.length;
    }

    cantidadPasajerosQueLlegaronEl(dia){
        let cantidadPasajeros=0;
        this.aeropuertos.forEach(a =>{
            a.vuelosQueLlegaronHastaAquieElDia(dia).forEach(V =>{
                cantidadPasajeros += V.cantidadPasajeros()
            });
        });
        return cantidadPasajeros;
    }

    tenesAeropuerto(unAeropuerto){
        return this.aeropuertos.includes(unAeropuerto);
    }
//hacer el test.
}