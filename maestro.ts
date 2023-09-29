import { PersonalServicio } from "./personalservicio";
export class Maestro extends PersonalServicio{ 
    private departamento: string; 
    constructor( nombre:string, apellidos:string, CI:number, 
        estadocivil:string, aniodeincorporacion:number, numerodedespacho:number, departamento: string){
            super(nombre, apellidos, CI, estadocivil, aniodeincorporacion, numerodedespacho);
            this.departamento= departamento;
    }
    public CambioDepartamentoMaestro(nuevoDepartamento: string){
        this.departamento= nuevoDepartamento; 
    }
    public ReasignaciondeDespacho(){}
    
    public ImprimirInfo(){
        super.ImprimirInfo();
        console.log(`Departamento determinado: ${this.departamento}`); 
        
    }
   
}