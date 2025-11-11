import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vLibro extends Cl_vGeneral {
    constructor() {
        super({ formName: "libroForm" });
        this.inCodigo = this.crearHTMLInputElement({ elementName: "inCodigo" });
        this.inPrecio = this.crearHTMLInputElement({ elementName: "inPrecio" });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
        this.btnCancelar = this.crearHTMLButtonElement({ elementName: "btnCancelar",
            onclick: () => {
                var _a;
                this.show({ ver: false });
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            },
        });
    }
    get codigo() {
        return this.inCodigo.value;
    }
    get precio() {
        return +this.inPrecio.value;
    }
    show({ ver = true, nombreTipo = "", }) {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inCodigo.value = "";
        this.inPrecio.value = "";
        this.inCodigo.focus();
    }
}
