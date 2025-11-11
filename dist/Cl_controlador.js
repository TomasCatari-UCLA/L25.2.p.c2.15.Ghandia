import Cl_mNino from "./Cl_mNino.js";
import Cl_mAdolescente from "./Cl_mAdolescente.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarNino(data) {
        const mNino = new Cl_mNino({
            codigo: data.codigo,
            precio: data.precio,
            ilustrado: data.ilustrado
        });
        this.modelo.procesarLibro(mNino);
        this.reportarLibro({ mLibro: mNino });
    }
    procesarAdolescente(data) {
        const mAdolescente = new Cl_mAdolescente({
            codigo: data.codigo,
            precio: data.precio,
            saga: data.saga
        });
        this.modelo.procesarLibro(mAdolescente);
        this.reportarLibro({ mLibro: mAdolescente });
    }
    reportarLibro({ mLibro }) {
        this.vista.reportarLibro({
            datLibros: mLibro.toJSON(),
            precioPagar: mLibro.precioPagar(),
            promedioIlustrado: this.modelo.promedioIlustrado(),
            porcentajeMayor100: this.modelo.porcentajeMayor100()
        });
        this.vista.show();
    }
}
