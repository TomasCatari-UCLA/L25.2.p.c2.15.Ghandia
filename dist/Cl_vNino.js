import Cl_vLibro from "./Cl_vLibro.js";
export default class Cl_vNino extends Cl_vLibro {
    constructor() {
        super();
        this.divInIlustrado = this.crearHTMLElement({ elementName: "divInIlustrado" });
        this.inIlustrado = this.crearHTMLInputElement({ elementName: "inIlustrado" });
        this.btnAceptarNino = this.crearHTMLButtonElement({ elementName: "btnAceptarNino",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarNino({
                    codigo: this.codigo,
                    precio: this.precio,
                    ilustrado: this.ilustrado,
                });
            }
        });
    }
    get ilustrado() {
        return this.inIlustrado.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Nino" });
        this.inIlustrado.value = "";
        this.divInIlustrado.hidden = ver === false;
        this.btnAceptarNino.hidden = ver === false;
    }
}
