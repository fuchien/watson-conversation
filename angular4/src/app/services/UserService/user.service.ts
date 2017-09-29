import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

  // private url: string = `http://localhost:3004/users`
  // private url: string = `/users`
  private url: string = `https://bluehack.herokuapp.com/users`

  constructor(
    private _http: Http
  ) { }

  pegarUser(cpf) {

    return this._http.get(`https://bluehack.herokuapp.com/users` + `/${cpf}`)
      .map((res: Response) => res.json())
  }

  pegarUsers() {

    return this._http.get(`https://bluehack.herokuapp.com/users`)
      .map((res: Response) => res.json())
  }

  salvarUser(user) {
    
    let headers = new Headers({'Content-type': 'application/json'})

    if (user.id) {

      return this.atualizarUser(user)
    } else {

      let url = `https://bluehack.herokuapp.com/users` + `/user`
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

    return this._http.get(`https://bluehack.herokuapp.com/users` + `/user/${id}`)
      .map(res => res.json());
  }

  deletarUser(id) {

    return this._http.delete(`https://bluehack.herokuapp.com/users` + `/${id}`)
      .map(res => res.json())
  }

  atualizarUser(user) {

    let headers = new Headers({'Content-type': 'application/json'})
    let url = `https://bluehack.herokuapp.com/users` + `/user/${user.id}`
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

}
