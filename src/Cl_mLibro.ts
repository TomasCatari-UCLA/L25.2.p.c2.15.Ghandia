export default class Cl_mLibro {
    public _codigo:string = "";
    public _precio:number = 0;

    constructor({codigo,precio}:{codigo:string; precio:number}) {
        this.codigo = codigo;
        this.precio = precio;
    }
set codigo(codigo:string) {
    this._codigo = codigo;
}
get codigo(): string {
    return this._codigo;
}

set precio(precio:number) {
    this._precio = +precio;
}
get precio(): number {
    return this._precio;
}

precioPagar(): number {
    return 0;
}

toJSON() {
    return {
        codigo: this.codigo,
        precio: this.precio,
        precioPagar: this.precioPagar()
      }
    }

  
}


