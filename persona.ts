export class Persona{
    private nombre: string;
    private apellidos: string; 
    private CI: number; 
    private estadocivil: string; 
    constructor(nombre: string, apellidos: string, CI: number, estadocivil: string){
        this.nombre= nombre; 
        this.apellidos= apellidos;
        this.CI= CI;
        this.estadocivil= estadocivil;
    }
    private getnombre(): string {
        return this.nombre;
    }
    private setnombre(value: string) {
        this.nombre = value;
    }
    private getapellidos(): string {
        return this.apellidos;
    }
    private setapellidos(value: string) {
        this.apellidos = value;
    }
    private getCI(): number {
        return this.CI;
    }
    private setCI(value: number) {
        this.CI = value;
    }
    private getestadocivil(): string {
        return this.estadocivil;
    }
    private setestadocivil(value: string) {
        this.estadocivil = value;
    }

    public CambiarEstadoCivil(nuevoestadoCivil: string){
        this.estadocivil= nuevoestadoCivil;
    }
    public ImprimirInfo(){
        console.log(`Nombre: ${this.nombre} Apellidos: ${this.apellidos}`);
        console.log(`Identificacion: ${this.CI}`);
        console.log(`Estado civil: ${this.estadocivil}`);
    }
}

