import Cl_mLibro from "./Cl_mLibro.js";
export default class Cl_mNino extends Cl_mLibro {
    constructor({ codigo, precio, ilustrado }) {
        super({ codigo, precio });
        this._ilustrado = "";
        this.ilustrado = ilustrado;
    }
    set ilustrado(ilustrado) {
        this._ilustrado = ilustrado;
    }
    get ilustrado() {
        return this._ilustrado;
    }
    precioPagar() {
        if (this.ilustrado == "Si") {
            return this.precio - (this.precio * 10 / 100);
        }
        else if (this.ilustrado == "No") {
            return this.precio;
        }
        else
            return 0;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { ilustrado: this.ilustrado });
    }
}
