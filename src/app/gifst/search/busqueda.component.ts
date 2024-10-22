import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './Busqueda.component.html',
  styleUrls: ['./Busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private gifsSvc:GifsService){


  }


  //busqueda de un gif
  buscar(termino:string){

    const valor = this.txtBuscar.nativeElement.value;


    if( valor.trim().length == 0){
      return;
    }

    this.gifsSvc.buscarGifs( valor);
    this.txtBuscar.nativeElement.value="";
    
  }

  //limpiamos las busquedas
  limpiar(){
    localStorage.removeItem('historial');
    localStorage.removeItem('resultados');
    location.reload();
  }



}
