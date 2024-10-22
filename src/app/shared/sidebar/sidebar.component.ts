import { Component } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {



  constructor( private gifsSvc:GifsService ){}

  get historial(){
    return this.gifsSvc.historial;
  }

  buscar(termino:string){

    this.gifsSvc.buscarGifs( termino );

  }

}
