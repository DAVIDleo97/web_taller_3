import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { AutosComponent } from './screens/autos/autos.component';
import { ListaDeAutosComponent } from './components/lista-de-autos/lista-de-autos.component';
import { FormularioAutosComponent } from './components/formulario-autos/formulario-autos.component';
import { E404Component } from './screens/e404/e404.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './screens/login/login.component';
import { FormularioComponent } from './screens/formulario/formulario.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutosComponent,
    ListaDeAutosComponent,
    FormularioAutosComponent,
    E404Component,
    NavBarComponent,
    LoginComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
