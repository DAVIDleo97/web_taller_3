import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutoServiceService } from 'src/app/services/auto-service.service';

@Component({
  selector: 'app-formulario-autos',
  templateUrl: './formulario-autos.component.html',
  styleUrls: ['./formulario-autos.component.css']
})
export class FormularioAutosComponent {

  constructor( private servicio:AutoServiceService, private ruta:Router){}

  guardarAutos(id:string, marca:string, modelo:string, anio: string, color:string){

    const temp={
      id: id,
      Marca: marca,
      Modelo: modelo,
      Anio: anio,
      Color: color
    }
    this.servicio.postAutos(temp).subscribe(p =>{})
    window.location.reload();

  }
  actualizarAutos(id:string, marca:string, modelo:string, anio: string, color:string){

    const temp={
      id: id,
      Marca: marca,
      Modelo: modelo,
      Anio: anio,
      Color: color
    }
    this.servicio.putAutos(temp, id).subscribe(p =>{})
    window.location.reload();

  }
  eliminarAutos(id:string){

    this.servicio.deleteAutos(id).subscribe();
    window.location.reload();

  }

  cerrar(){
    localStorage.setItem('login', 'false')
    this.ruta.navigate(['/inicio'])
  }

}
