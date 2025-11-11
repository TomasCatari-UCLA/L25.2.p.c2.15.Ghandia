export default class Cl_mLibro {
    constructor({ codigo, precio }) {
        this._codigo = "";
        this._precio = 0;
        this.codigo = codigo;
        this.precio = precio;
    }
    set codigo(codigo) {
        this._codigo = codigo;
    }
    get codigo() {
        return this._codigo;
    }
    set precio(precio) {
        this._precio = +precio;
    }
    get precio() {
        return this._precio;
    }
    precioPagar() {
        return 0;
    }
    toJSON() {
        return {
            codigo: this.codigo,
            precio: this.precio,
            precioPagar: this.precioPagar()
        };
    }
}
