import { Persona } from "./persona";
export class PersonalServicio extends Persona{
     aniodeincorporacion: number; 
     numerodedespacho: number; 

    constructor(nombre:string, apellidos:string, CI:number, 
        estadocivil:string, aniodeincorporacion:number, numerodedespacho:number){
        super(nombre, apellidos, CI, estadocivil);
        this.aniodeincorporacion= aniodeincorporacion;
        this.numerodedespacho=numerodedespacho;

    }
    public ReasignaciondeDespacho(nuevoDespacho: number){
        this.numerodedespacho= nuevoDespacho;
    } 
    public TrasladodeSeccion(){}
    public ImprimirInfo(){
        super.ImprimirInfo();
        console.log(`Año de incorporacion: ${this.aniodeincorporacion}`);
        console.log(`Numero de despacho: ${this.numerodedespacho}`);
    }
}


