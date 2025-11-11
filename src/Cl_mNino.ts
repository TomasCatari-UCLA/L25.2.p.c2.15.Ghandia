import Cl_mLibro from "./Cl_mLibro.js";

export default class Cl_mNino extends Cl_mLibro{
    private _ilustrado: string = "";

    constructor({codigo,precio,ilustrado}:{codigo:string; precio:number; ilustrado:string}) {
        super({codigo,precio});
        this.ilustrado = ilustrado;
    } 

    set ilustrado(ilustrado: string) {
        this._ilustrado = ilustrado;
    }

    get ilustrado(): string {
        return this._ilustrado;
    }

    precioPagar(): number {
        if(this.ilustrado == "Si" ) {
            return this.precio - (this.precio * 10/100);
        }
        else if (this.ilustrado == "No" ) {
            return this.precio;
        }
        else return 0;
    }

      toJSON() {
        return {
            ...super.toJSON(),
            ilustrado: this.ilustrado,

        }
    }
}