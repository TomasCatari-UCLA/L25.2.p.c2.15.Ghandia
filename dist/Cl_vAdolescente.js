import Cl_vLibro from "./Cl_vLibro.js";
export default class Cl_vAdolescente extends Cl_vLibro {
    constructor() {
        super();
        this.divInSaga = this.crearHTMLElement({ elementName: "divInSaga" });
        this.inSaga = this.crearHTMLInputElement({ elementName: "inSaga" });
        this.btnAceptarAdolescente = this.crearHTMLButtonElement({ elementName: "btnAceptarAdolescente",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarAdolescente({
                    codigo: this.codigo,
                    precio: Number(this.precio),
                    saga: this.saga,
                });
            }
        });
    }
    get saga() {
        return this.inSaga.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Adolecente" });
        this.inSaga.value = "";
        this.divInSaga.hidden = ver === false;
        this.btnAceptarAdolescente.hidden = ver === false;
    }
}
