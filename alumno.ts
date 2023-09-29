import { Persona } from "./persona";
export class Alumno extends Persona{
    public curso: number;
    constructor(nombre:string, apellidos:string, CI:number, 
        estadocivil:string, curso:number){
        super(nombre, apellidos, CI, estadocivil);
        this.curso=curso; 
    }
    public CambioDeEstadoCivil(){}
    public MatriculacionAlumnoNuevoCurso(nuevoCurso: number){
        this.curso= nuevoCurso; 
    }
    public ImprimirInfo(){
        super.ImprimirInfo();
        console.log(`Curso matriculado: ${this.curso}`);
    }

}