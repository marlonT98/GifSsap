import { Component } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {



  constructor(private gifsSvc: GifsService) { }

  get resultados() {
    return this.gifsSvc.resultados;
  }







}
