import Cl_vLibro from "./Cl_vLibro.js";
interface iAdolescente {
    codigo: string
    precio: number
    saga: string
}

export default class Cl_vAdolescente extends Cl_vLibro{
    private divInSaga: HTMLElement;
    private inSaga: HTMLInputElement;
    private btnAceptarAdolescente: HTMLButtonElement;

    constructor() {
        super()
        this.divInSaga = this.crearHTMLElement({elementName: "divInSaga"});
        this.inSaga = this.crearHTMLInputElement({elementName: "inSaga"});
        this.btnAceptarAdolescente = this.crearHTMLButtonElement({elementName: "btnAceptarAdolescente"
            ,onclick: () =>this.controlador?.procesarAdolescente({
                codigo: this.codigo,
                precio: Number(this.precio),
                saga: this.saga,
            })
        });
    }

    get saga(): string{
        return this.inSaga.value;
    }

    show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Adolecente" });
    this.inSaga.value = "";
    this.divInSaga.hidden = ver === false;
    this.btnAceptarAdolescente.hidden = ver === false;

}
}
export {iAdolescente}