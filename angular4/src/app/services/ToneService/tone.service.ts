import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class ToneService {

  // private url: string = `http://localhost:3004/apiswatson/tone`
  private url: string = `/apiswatson/tone`

  constructor(
    private _http: Http
  ) { }

  enviarCredenciais(credenciais) {
    
    let body = JSON.stringify({
      username: credenciais.username,
      password: credenciais.password,
      text: 'Estou muito feliz'
    })
    let headers = new Headers({'Content-type': 'application/json'})
    return this._http.post(this.url, body, {headers: headers})
      .map((res: Response) => {
        return res.json()
      })
  }
}