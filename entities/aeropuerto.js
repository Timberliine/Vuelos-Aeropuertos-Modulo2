export class Aeropuerto{
    nombre;
    vuelos=[];
    escalas= [];

    vuelosQueLlegaronHastaAquiElDia(dia){
        return this.vuelosQueLlegaronHastaAqui().filter(V => V.llegasteEnFecha(dia));
    }
    agregarEscala(unaEscala){
        this.escalas.push(unaEscala);
    }


    vuelosQuePartieronDeMi(){
        return this.vuelos.filter((V) => V.partisteDe(this));
    }

    vuelosQueLlegaronDeMi(){
        return this.vuelos.filter((V)=> V.llegasteA(this));
    }
    agregarVuelo(vuelo){
        this.vuelos.push(vuelo);
    }

    cantidadVuelosQuepartieron(fecha){
        let cantidad=0;
        const vuelosDeLaFecha = this.vuelosQuePartieronDeMi().filter(V => V.salisteEnFecha(fecha));
        cantidad= vuelosDeLaFecha.length;
        return cantidad;
    }

    cantidadVuelosQueLlegaron(fecha){
        return this.vuelosQueLlegaronHastaAqui().filter(V.llegasteEnFecha(fecha)).length;
    }

    cantidadDeEscalas(){
        return this.escalas.length;
    }
}