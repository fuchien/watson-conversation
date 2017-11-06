import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Config } from './../../config';

@Injectable()
export class UserService {

  private url: string = `${Config.BackEndPoint}/users`

  constructor(
    private _http: Http
  ) { }

  pegarUser(cpf) {

    return this._http.get(`${this.url}/${cpf}`)
      .map((res: Response) => res.json())
  }

  pegarUsers() {

    return this._http.get(this.url)
      .map((res: Response) => res.json())
  }

  salvarUser(user) {
    
    let headers = new Headers({'Content-type': 'application/json'})

    if (user.id) {

      return this.atualizarUser(user)
    } else {

      let url = `${this.url}/user`
      let body = JSON.stringify({
        nome: user.nome,
        cpf: user.cpf,
        descricao: user.descricao,
        admin: user.admin
      })

      return this._http.post(url, body, {headers: headers})
        .map((res: Response) => {
          return res.json()
        })
      }
  }

  pegarPorId(id) {

    return this._http.get(`${this.url}/user/${id}`)
      .map(res => res.json());
  }

  deletarUser(id) {

    return this._http.delete(`${this.url}/${id}`)
      .map(res => res.json())
  }

  atualizarUser(user) {

    let headers = new Headers({'Content-type': 'application/json'})
    let url = `${this.url}/user/${user.id}`
    let body = JSON.stringify({
      nome: user.nome,
      cpf: user.cpf,
      descricao: user.descricao,
      admin: user.admin,
      id: user.id
    })

    return this._http.put(url, body, {headers: headers})
      .map((res: Response) => {
        return res.json()
      })
  }

  getFileUrl() {
    
    let body =  {
        "auth": {
            "identity": {
                "methods": [
                    "password"
                ],
              "password": {
                    "user": {
                          "id": "607cfe92a2514aebac4d3e19485e4a3a",
                          "password": "Ac1)Nh)q=3YEOicD"
                  }
                }
            },
          "scope": {
                "project": {
                    "id": "4a3f3cb016564740b0ffa168cb40e934"
              }
            }
        }
    }
    let headers = new Headers({ 'Content-type': 'application/json' });

    return this._http.post(`https://identity.open.softlayer.com/v3/auth/tokens`, body, {headers: headers})
        .map(res => res.json())
  }

}
