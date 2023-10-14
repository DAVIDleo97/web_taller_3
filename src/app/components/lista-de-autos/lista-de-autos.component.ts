import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutoServiceService } from 'src/app/services/auto-service.service';

@Component({
  selector: 'app-lista-de-autos',
  templateUrl: './lista-de-autos.component.html',
  styleUrls: ['./lista-de-autos.component.css']
})
export class ListaDeAutosComponent {

  constructor( private servicio: AutoServiceService, private ruta: Router){}

  dataAuto: any;

  ngOnInit(){
    this.servicio.getAutos().subscribe(autos =>{
      this.dataAuto = autos
    })
  }

  cerrar(){
    localStorage.setItem('login', 'false')
    this.ruta.navigate(['/inicio'])
  }

}
