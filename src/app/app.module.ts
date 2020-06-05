import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { RedesComponent } from './redes/redes.component';
import { TituloComponent } from './titulo/titulo.component';

import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { SliderProductosComponent } from './slider-productos/slider-productos.component';
import { LoginComponent } from './login/login.component';
import { PieReservaComponent } from './pie-reserva/pie-reserva.component';
import { RegistroComponent } from './registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

const rutas:Routes = [

  {
    path: 'contacto',
    component:ContactoComponent
  },
  {
    path: 'nosotros',
    component:NosotrosComponent
  },
  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'servicios',
    component:ServiciosComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'login/registro',
    component:RegistroComponent
  },
  {
    path:'',
    redirectTo:'/home', pathMatch: 'full'
  }

]

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    NosotrosComponent,
    ServiciosComponent,
    ProductosComponent,
    RedesComponent,
    TituloComponent,
    SliderComponent,
    HomeComponent,
    SliderProductosComponent,
    LoginComponent,
    PieReservaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
