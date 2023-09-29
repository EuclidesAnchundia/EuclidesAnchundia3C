import { Persona } from "./persona";
import { Alumno } from "./alumno";
import { PersonalServicio } from "./personalservicio";
import { Maestro } from "./maestro";

const persona1 = new Persona ("Marcos", "Mera Franco", 1304558934, "Casado");
persona1.ImprimirInfo();
persona1.CambiarEstadoCivil("Divorciado");
persona1.ImprimirInfo();

const almuno1= new Alumno("Ambar", "Lopez Delgado", 1317005431, "Soltera", 5);
almuno1.ImprimirInfo();
almuno1.MatriculacionAlumnoNuevoCurso(6);
almuno1.ImprimirInfo();

const maestro1 = new Maestro("Maria", "Palacios Alcivar", 1304560334, "Casada", 2018, 8, "Arquitectura");
maestro1.ImprimirInfo();
maestro1.CambioDepartamentoMaestro("Fisica");
maestro1.ImprimirInfo();

const personalservicio1= new PersonalServicio("Juan", "Hoppe Mero", 1309573349, "Soltero", 2021, 30);
personalservicio1.ImprimirInfo();
