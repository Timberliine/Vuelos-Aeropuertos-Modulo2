export class RankerDeCiudades{
    ciudadQueMasPasajerosRecibioEl(dia, ciudades){
        let ciudadConMasPasajeros;
        let cantidadPasajeros=0;

        ciudades.forEach(c =>{
            if(cantidadPasajerosQueLlegaronEl(dia)> cantidadPasajeros){
                cantidadPasajeros=c.cantidadPasajerosQueLlegaronEl(dia);
                ciudadConMasPasajeros=c;
            }
        })
        return ciudadConMasPasajeros;
    }
}

