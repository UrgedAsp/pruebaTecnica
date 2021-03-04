import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'

// Modulo de Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes propios
import { ProductoComponent } from './producto/producto.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // Componentes propios
    ProductoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Rutas
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
