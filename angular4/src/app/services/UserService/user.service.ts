import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

  private url: string = `http://localhost:3004/users`
  // private url: string = `/users`

  constructor(
    private _http: Http
  ) { }

  user(cpf) {

    return this._http.get(this.url + `/${cpf}`)
      .map((res: Response) => res.json())
  }

  findUser(login) {

    let body = JSON.stringify({
      login: login,
      // nome: 'Eduardo',
      // cpf: '444.444.444-44',
      // descricao: 'Estagiario',
      // admin: '1'
    })
    let headers = new Headers({'Content-type': 'application/json'})
    return this._http.post(this.url, body, {headers: headers})
      .map((res: Response) => {
        return res.json()
      })
  }

}
