import Cl_mLibreria from "./Cl_mLibreria.js";
import Cl_mLibro from "./Cl_mLibro.js";
import Cl_mNino from "./Cl_mNino.js";
import Cl_mAdolescente from "./Cl_mAdolescente.js";
import Cl_vLibreria from "./Cl_vLibreria.js";
import {iNino} from "./Cl_vNino.js";
import {iAdolescente} from "./Cl_vAdolescente.js";

export default class Cl_controlador {
    public modelo: Cl_mLibreria;
    public vista: Cl_vLibreria;

    constructor(modelo: Cl_mLibreria, vista: Cl_vLibreria) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarNino(data: iNino) {
        const mNino = new Cl_mNino({
            codigo: data.codigo,
            precio: data.precio,
            ilustrado: data.ilustrado
        })
        this.modelo.procesarLibro(mNino);
        this.reportarLibro({mLibro: mNino})
    }

    procesarAdolescente(data: iAdolescente) {
        const mAdolescente = new Cl_mAdolescente({
            codigo: data.codigo,
            precio: data.precio,
            saga: data.saga
        })
        this.modelo.procesarLibro(mAdolescente);
        this.reportarLibro({mLibro: mAdolescente})
    }

    reportarLibro({mLibro}: {mLibro: Cl_mLibro}) {
        this.vista.reportarLibro({
            datLibros: mLibro.toJSON(),
            precioPagar:mLibro.precioPagar(),
            promedioIlustrado: this.modelo.promedioIlustrado(),
            porcentajeMayor100: this.modelo.porcentajeMayor100()
        });
        this.vista.show();
    }   
}