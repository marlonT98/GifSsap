import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.nterface';

const URL = environment.url_server;
const APIKEY = environment.api_key;

@Injectable({
  providedIn: 'root'
})



export class GifsService {

  //variables
  private _historial: string[] = [];
  resultados: Gif[] = [];

  //constructor
  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }


  //retorna el historial
  get historial() {
    return [...this._historial]
  }


  // busca gifts
  buscarGifs(query: string = '') {

    //aliminamos los espacios en blanco y pasamos a minusculas
    query = query.trim().toLowerCase();

    //si el valor de query no existe en el historial, la condición será verdadera
    if (!this._historial.includes(query)) {

      //añadiremos al historial
      this._historial.unshift(query);
      //con esto cortamos el array a 10 datos
      this._historial = this._historial.splice(0, 10);

      //guardamos el historial en el localStorage del navegador
      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    //llenamos los parametros
    const params = new HttpParams()
      .set('api_key', APIKEY)
      .set('limit', 20)
      .set('q', query);




    this.http.get<SearchGifsResponse>(`${URL}`, { params }).subscribe(res => {

      this.resultados = res.data;

      //guardamos el resultados en el localStorage del navegador
      localStorage.setItem('resultados', JSON.stringify(this.resultados));

    })



  }



}
