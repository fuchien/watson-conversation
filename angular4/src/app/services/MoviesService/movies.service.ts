import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class MoviesService {

  private BASE_URL: string = 'https://api.themoviedb.org/3/movie'
  private API_KEY: string = 'e7af7935c4c1ded50816a8fbf0e67bf1'

  constructor(
    private _http: Http
  ) { }

  getMoviesUpComing() {

    return this._http.get(`${this.BASE_URL}/upcoming?api_key=${this.API_KEY}&language=pt-BR`)
      .map((res: Response) => res.json())
  }

  getMoviesNowPlaying() {
    
    return this._http.get(`${this.BASE_URL}/now_playing?api_key=${this.API_KEY}&language=pt-BR`)
      .map((res: Response) => res.json())
  }

  getIdDetails(id) {

    return this._http.get(`${this.BASE_URL}/${id}?api_key=${this.API_KEY}&language=pt-BR`)
      .map((res: Response) => res.json())
  }

  getVideoKey(id) {

    return this._http.get(`${this.BASE_URL}/${id}/videos?api_key=${this.API_KEY}&language=pt-BR`)
      .map((res: Response) => res.json())
  }
}