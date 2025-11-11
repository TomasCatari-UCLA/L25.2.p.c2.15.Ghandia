import Cl_mLibro from "./Cl_mLibro.js";
export default class Cl_mAdolescente extends Cl_mLibro {
    constructor({ codigo, precio, saga }) {
        super({ codigo, precio });
        this._saga = "";
        this.saga = saga;
    }
    set saga(saga) {
        this._saga = saga;
    }
    get saga() {
        return this._saga;
    }
    precioPagar() {
        if (this.saga == "si" || "SI") {
            return this.precio + (this.precio * 20 / 100);
        }
        else if (this.saga == "no" || "NO") {
            return this.precio;
        }
        else
            return 0;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { saga: this.saga });
    }
}
