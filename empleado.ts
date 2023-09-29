import { PersonalServicio } from "./personalservicio";
export class Empleado extends PersonalServicio{
    private seccionAsignada: string; 
    constructor(nombre:string, apellidos:string, CI:number, 
        estadocivil:string, aniodeincorporacion:number, numerodedespacho:number, seccionAsignada: string){
        super(nombre, apellidos, CI, estadocivil, aniodeincorporacion, numerodedespacho);
        this.seccionAsignada= seccionAsignada; 
    }
    public CambiarSeccion(nuevaSeccion: string){
        this.seccionAsignada= nuevaSeccion; 
    }
    public ImprimirInfo(){
        super.ImprimirInfo();
        console.log(`Seccion asignada: ${this.seccionAsignada}`);
    }
}

