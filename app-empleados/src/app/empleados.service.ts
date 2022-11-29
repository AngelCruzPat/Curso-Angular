import { Empleado } from "./empleado.model";

export class EmpleadosService{

    empleados:Empleado[]=[

        new Empleado("Angel", "Cruz", "Presidente", 7800),
        new Empleado("Andrea", "Suares", "Directora", 5800),
        new Empleado("Maria", "Fernandez", "Jefa Seccion", 3800),
        new Empleado("Laura", "Lopes", "Administrativo", 2800)
    
      ];

      agregarEmpleadoServicio(empleado:Empleado){

        this.empleados.push(empleado);

      }

      encontrarEmpleado(indice:number){
        let empleado:Empleado=this.empleados[indice];

        return empleado;
      }

      actualizarEmpleado(indice:number, empleado:Empleado ){
        let empleadoModificar=this.empleados[indice];

        empleadoModificar.nombre=empleado.nombre;
        empleadoModificar.apellido=empleado.apellido;
        empleadoModificar.cargo=empleado.cargo;
        empleadoModificar.salario=empleado.salario;

      }

      eliminarEmpleado(indice:number){
        this.empleados.splice(indice,1);


      }

}