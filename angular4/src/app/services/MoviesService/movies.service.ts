import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class MoviesService {

  private BASE_URL: string = 'https://api.themoviedb.org/3/movie'
  private API_KEY: string = 'e7af7935c4c1ded50816a8fbf0e67bf1'
  private static movies: any = []

  constructor(
    private _http: Http
  ) { }

  // PEGAR os filmes guardados no servico
  static getMovies() {
    return this.movies
  }

  // GUARDAR os filmes no servico
  static setMovies(movies) {
    this.movies.push(movies)
  }

  // limpar o ARRAY de filmes
  static clearMovies() {
    this.movies.length = 0
  }

  // PEGAR os filmes com a PAGINA = ID e tipoLancamento (upcoming, now_playing...)
  getMovies(id, tipoLancamento) {

    return this._http.get(`${this.BASE_URL}/${tipoLancamento}?api_key=${this.API_KEY}&language=pt-BR&page=${id}`)
      .map((res: Response) => res.json())
  }

  // PEGAR os detalhes do FILME
  getIdDetails(id) {

    return this._http.get(`${this.BASE_URL}/${id}?api_key=${this.API_KEY}&language=pt-BR`)
      .map((res: Response) => res.json())
  }

  // pegar a KEY do VIDEO
  getVideoKey(id) {

    return this._http.get(`${this.BASE_URL}/${id}/videos?api_key=${this.API_KEY}&language=pt-BR`)
      .map((res: Response) => res.json())
  }
}