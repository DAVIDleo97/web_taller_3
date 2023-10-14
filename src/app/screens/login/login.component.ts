import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutoServiceService } from 'src/app/services/auto-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private servicio: AutoServiceService, private ruta: Router){}

  guardarJSON(nick: string, pass: string){
    const temp={
      id: nick,
      pass: pass,
    }
    return temp;
  }

  user: any=""

  ngOnInit() {
    this.servicio.getNick().subscribe((data) => {
      this.user = data;
    });
  }

  login(nick: string, pass: string) {
    const aux = this.guardarJSON(nick, pass);
    for (const item of this.user) {
      if (JSON.stringify(item) == JSON.stringify(aux)) {
        console.log('Encontrado');

        localStorage.setItem('login', 'true')
        this.ruta.navigate(['/autos'])
        break;

      } else {
        console.log('No Encontrado');
        //alert('No Encontrado');
        localStorage.setItem('login', 'false')
      }
    }
  }

}
