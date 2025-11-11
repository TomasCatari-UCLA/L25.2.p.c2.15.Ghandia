import Cl_mAdolescente from "./Cl_mAdolescente.js";
import Cl_mNino from "./Cl_mNino.js";
import Cl_mLibro from "./Cl_mLibro.js";

export default class Cl_mLibreria {
    private _cntLibroIlustrado: number = 0;
    private _acmPrecioIlustrado: number = 0
    private _cntLibro: number = 0;
    private _cntLibroMayor100: number = 0;

    procesarLibro(mLibro:Cl_mLibro) {
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