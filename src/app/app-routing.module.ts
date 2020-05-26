import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './Components/inicio/inicio.component';
import {ManualComponent} from './Components/manual/manual.component';
import {FormularioComponent} from './Components/formulario/formulario.component';
import {TerminosComponent} from './Components/terminos/terminos.component';


const routes: Routes = [
  {path: 'inicio', component : InicioComponent},
  {path: 'terminos', component:TerminosComponent},
  {path: 'manual', component: ManualComponent},
  {path: '**', component : InicioComponent},
  {path: 'formulario', component:FormularioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
