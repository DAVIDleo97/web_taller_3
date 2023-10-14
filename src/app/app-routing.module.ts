import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { AutosComponent } from './screens/autos/autos.component';
import { E404Component } from './screens/e404/e404.component';
import { FormularioComponent } from './screens/formulario/formulario.component';
import { CanActivateGuard } from './guard/can-activate.guard';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [

  {path: 'inicio', component: HomeComponent},
  {path: 'autos', component: AutosComponent, canActivate:[CanActivateGuard]},
  {path: 'formulario', component: FormularioComponent, canActivate:[CanActivateGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: E404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
