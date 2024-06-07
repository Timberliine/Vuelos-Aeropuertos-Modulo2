export class RankeadorDeAeropuertos{

    aeropuertoConMenorCantidadDeEscalas(aeropuertos){
        let aeropuertoConMenorEscalas;
        let cantidadMenorEscala=999999999;

        aeropuertos.forEach(a => {
            if(a.cantidadEscalas < cantidadMenorEscala){
                cantidadMenorEscala=a.cantidadEscalas();
                aeropuertoConMenorEscalas = a;
            }
        });
// hacer el test.
        return aeropuertoConMenorEscalas;
    }
}