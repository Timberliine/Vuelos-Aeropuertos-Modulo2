import { Aeropuerto } from "../entities/aeropuerto";
import { Vuelo } from "../entities/vuelo";

test("Dos vuelos salieron el 2024/06/07 de Buenos Aires", () =>{
    const aeropuertoBsAs= new Aeropuerto();

    const unVuelo = new Vuelo(40);
    unVuelo.aeropuertoSalida = aeropuertoBsAs;
    unVuelo.fechaHoraPartida = "2024-06-07";

    aeropuertoBsAs.agregarVuelo(unVuelo);

    const otroVuelo = new Vuelo(50);
    otroVuelo.aeropuertoSalida = aeropuertoBsAs;
    otroVuelo.fechaHoraPartida = "2024-06-07";

    aeropuertoBsAs.agregarVuelo(otroVuelo);

    const cantidadObtenida= aeropuertoBsAs.cantidadVuelosQuepartieron("2024-06-07");
    expect (cantidadObtenida).toBe(2);

});

test("Un vuelo llego el 2024/06/07 a Berlin", () =>{

});