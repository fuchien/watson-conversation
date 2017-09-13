import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

  private url: string = `http://localhost:3004/users/user`
  // private url: string = `/users/user`

  constructor(
    private _http: Http
  ) { }

  findUser(login) {

    let body = JSON.stringify({
      login: login,
      // nome: 'Júlio',
      // cpf: '333.333.333-33',
      // description: 'b6'
    })
    let headers = new Headers({'Content-type': 'application/json'})
    return this._http.post(this.url, body, {headers: headers})
      .map((res: Response) => {
        return res.json()
      })
  }

}
