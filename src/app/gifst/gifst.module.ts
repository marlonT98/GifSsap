import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './search/busqueda.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadosComponent } from './results/resultados.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    GifsPageComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPageComponent
  ]
})
export class GifstModule { }
