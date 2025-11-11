/**15. GHANDIA
La librería Ghandia ofrece al publico joven una
gran diversidad de Libros. De cada libro se
conoce: Código y Precio. Para efectos de
calculo es necesario saber las siguientes
condiciones: en el caso de los libros para
niños se considera si es ilustrado y se le hace

ADOLESCENTES

un descuento del 10%. Ahora, cuando se
trata de libros para adolescentes se le hace
un incremento del 20% si el libro pertenece
a una saga. Por cada libro que se venda en la
librería se desea determinar el Precio a
Pagar, y por la Librería se requiere: calcular
el precio promedio de Venta de libros
ilustrados y el porcentaje de libros cuyo
precio es mayor a $100

                   NIÑOS
código     precio     ilustrado     descuento()     precioPagar()
11        $100,00         NO         $ 0,00            $100,00

20         $80,00         SI          $16,00           $64,00

55         $60,00         SI          $12,00           $48,00

77         $50,00         NO          $0,00            $50,00

ADOLESCENTES
código     precio      saga     incremento()     precioPagar()

22         $40,00       SI        $8,00            $48,00

33         $25,00       SI        $5,00            $30,00

44         $120,00      SI        $24,00           $144,00

88         $32,00       NO        $0,00            $32,00

Libros ilustrados: 2
Total vendido ilustrados: 112
Precio promedio ilustrados: $56,00

Libros precio mayor a $100: 2
Cantidad de libros: 8
% libros precio mayor a $100: 25%

*/
import Cl_mLibreria from "./Cl_mLibreria.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vLibreria from "./Cl_vLibreria.js";
import Cl_mNino from "./Cl_mNino.js";
import Cl_mAdolescente from "./Cl_mAdolescente.js";
import { librosAdolecente, librosNino } from "./_data.js";
export default class Cl_index {
    constructor() {
        const modelo = new Cl_mLibreria();
        const vista = new Cl_vLibreria();
        this.controlador = new Cl_controlador(modelo, vista);
        vista.controlador = this.controlador;
        this.iniciarDatos();
    }
    iniciarDatos() {
        this.controlador.procesarNino(new Cl_mNino(librosNino[0]));
        this.controlador.procesarNino(new Cl_mNino(librosNino[1]));
        this.controlador.procesarNino(new Cl_mNino(librosNino[2]));
        this.controlador.procesarNino(new Cl_mNino(librosNino[3]));
        this.controlador.procesarAdolescente(new Cl_mAdolescente(librosAdolecente[0]));
        this.controlador.procesarAdolescente(new Cl_mAdolescente(librosAdolecente[1]));
        this.controlador.procesarAdolescente(new Cl_mAdolescente(librosAdolecente[2]));
        this.controlador.procesarAdolescente(new Cl_mAdolescente(librosAdolecente[3]));
    }
}
