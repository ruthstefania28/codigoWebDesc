import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { InicioComponent } from './Components/inicio/inicio.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent} from './Components/footer/footer.component';
import {ManualComponent} from './Components/manual/manual.component';
import { TerminosComponent } from './Components/terminos/terminos.component';
import { from } from 'rxjs';
import { FormularioComponent } from './Components/formulario/formulario.component';

import {AppService} from './Services/app.service';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    FooterComponent,
    ManualComponent,
    TerminosComponent,
    FormularioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
