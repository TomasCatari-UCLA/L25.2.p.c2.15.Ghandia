import Cl_vLibro from "./Cl_vLibro.js";
interface iNino{codigo: string;precio: number;ilustrado: string;}

export default class Cl_vNino extends Cl_vLibro{
    private divInIlustrado: HTMLElement;
    private inIlustrado: HTMLInputElement;
    private btnAceptarNino: HTMLButtonElement;

    constructor() {
        super(); 
        this.divInIlustrado = this.crearHTMLElement({elementName: "divInIlustrado"});
        this.inIlustrado = this.crearHTMLInputElement({elementName: "inIlustrado"});
        this.btnAceptarNino = this.crearHTMLButtonElement({elementName: "btnAceptarNino"
            ,onclick: () =>this.controlador?.procesarNino({
                codigo: this.codigo,
                precio: this.precio,
                ilustrado: this.ilustrado,
            })
        });
    }

    get ilustrado(): string{
        return this.inIlustrado.value;
    }

    show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Nino" });
    this.inIlustrado.value = "";
    this.divInIlustrado.hidden = ver === false;
    this.btnAceptarNino.hidden = ver === false;
    }
}

export {iNino};