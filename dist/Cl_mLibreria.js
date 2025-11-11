import Cl_mNino from "./Cl_mNino.js";
export default class Cl_mLibreria {
    constructor() {
        this._cntLibroIlustrado = 0;
        this._acmPrecioIlustrado = 0;
        this._cntLibro = 0;
        this._cntLibroMayor100 = 0;
    }
    procesarLibro(mLibro) {
        if (mLibro instanceof Cl_mNino) {
            if (mLibro.ilustrado == "Si") {
                this._cntLibroIlustrado++;
                this._acmPrecioIlustrado += mLibro.precioPagar();
            }
        }
        this._cntLibro++;
        if (mLibro.precio >= 100) {
            this._cntLibroMayor100++;
        }
    }
    promedioIlustrado() {
        return this._acmPrecioIlustrado / this._cntLibroIlustrado;
    }
    porcentajeMayor100() {
        return (this._cntLibroMayor100 / this._cntLibro) * 100;
    }
}
