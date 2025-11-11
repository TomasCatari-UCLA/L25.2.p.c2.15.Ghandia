import Cl_vGeneral from "./Cl_vGeneral.js";
import Cl_vNino from "./Cl_vNino.js";
import Cl_vAdolescente from "./Cl_vAdolescente.js";
export default class Cl_vLibreria extends Cl_vGeneral {
    constructor() {
        super({ formName: "mainForm" });
        this._vNino = new Cl_vNino();
        this._vAdolescente = new Cl_vAdolescente();
        this.datLibros = this.crearHTMLElement({ elementName: "datLibros" });
        this.lblPromedioIlustrado = this.crearHTMLElement({ elementName: "promedioIlustrado" });
        this.lblPorcentajeMayor100 = this.crearHTMLElement({ elementName: "porcentajeMayor100" });
        this.btnAgregarNino = this.crearHTMLButtonElement({
            elementName: "btnAgregarNino",
            onclick: () => {
                this.show({ ver: false });
                this._vNino.show();
            },
        });
        this.btnAgregarAdolescente = this.crearHTMLButtonElement({
            elementName: "btnAgregarAdolescente",
            onclick: () => {
                this.show({ ver: false });
                this._vAdolescente.show();
            },
        });
        this.datLibros.innerHTML = "";
        this._vNino.show({ ver: false });
        this._vAdolescente.show({ ver: false });
    }
    set controlador(controlador) {
        super.controlador = controlador;
        this.vNino.controlador = controlador;
        this.vAdolescente.controlador = controlador;
    }
    get vNino() {
        return this._vNino;
    }
    get vAdolescente() {
        return this._vAdolescente;
    }
    reportarLibro({ datLibros, precioPagar, promedioIlustrado, porcentajeMayor100 }) {
        this.datLibros.innerHTML += `
            <td class="colString">${datLibros.codigo}</td>
            <td class="colNumber">$${`${datLibros.precio}`}</td>
            <td class="colString">${datLibros.ilustrado ? datLibros.ilustrado : "--"}</td>
            <td class="colString">${datLibros.saga ? datLibros.saga : "--"}</td>
            <td class="colCurrency">${`$.${datLibros.precioPagar.toFixed(2)}`}</td>
        `;
        this.lblPromedioIlustrado.innerHTML = promedioIlustrado.toFixed(2);
        this.lblPorcentajeMayor100.innerHTML = porcentajeMayor100.toFixed(2);
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vNino.show({ ver: false });
            this.vAdolescente.show({ ver: false });
        }
    }
}
