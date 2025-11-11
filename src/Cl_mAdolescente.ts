import Cl_mLibro from "./Cl_mLibro.js";

export default class Cl_mAdolescente extends Cl_mLibro{
    private _saga: string = "";

    constructor({codigo,precio,saga}:{codigo:string;precio:number;saga:string}) {
        super({codigo,precio});
        this.saga = saga;
    }
    set saga(saga: string) {
        this._saga = saga;
        }

    get saga(): string {
        return this._saga;
    }

    precioPagar(): number {
        if(this.saga == "si" || "SI") {
            return this.precio + (this.precio * 20/100);
        }
        else if (this.saga == "no" || "NO") {
            return this.precio;
        }
        else return 0;
    }

    toJSON() {
        return {
            ...super.toJSON(),
            saga: this.saga,
        }
    }
}