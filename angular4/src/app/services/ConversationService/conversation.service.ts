import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { ChatModel } from "../../components/chat/chat.model"
import { Config } from './../../config';

@Injectable()
export class ConversationService {

  private url: string = `${Config.BackEndPoint}/conversation`
  private context: any = {}
  private static login: any = null

  constructor(
    private _http: Http
  ) {
    
  }

  static setLogin(login: object) {
    this.login = login
  }

  static getLogin(): any {
    return this.login
  }

  sendMessage(content: ChatModel) {

    content.setContext = this.context;
    let body = JSON.stringify({
      input: {
        text: content.getText
      },
      context: content.getContext,
      login: ConversationService.getLogin()
    })
    let headers = new Headers({'Content-type': 'application/json'})
    return this._http.post(this.url, body, {headers: headers})
      .map((res: Response) => {
        this.context = res.json().context
        return res.json()
      })
  }

}
