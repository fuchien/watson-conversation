import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { UserService } from './../../services/UserService/user.service';
import { ConversationService } from './../../services/ConversationService/conversation.service';

import { ErrorUserComponent } from '../error-user/error-user.component';
import { RequestOptions, Headers, Http } from '@angular/http';

// const CPF_REGEX = /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any
  user: Observable<firebase.User>

  inProgress: boolean = false
  private cpf: string = ''
  private myForm: FormGroup

  constructor(
    private router: Router,
    private userService: UserService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private http: Http,
    public afAuth: AngularFireAuth
  ) {

    // criar o FORMULARIO
    this.myForm = fb.group({
      'cpf': [null, Validators.compose([Validators.required, Validators.minLength(10)])]
    })

    this.user = this.afAuth.authState

    // verificar se a PESSOA ja fez login com o FACEBOOK
    this.afAuth.authState.subscribe(afAuth => {
      if(afAuth) {
        ConversationService.setLogin(afAuth.providerData[0])
        this.router.navigate(['/chat/filmes'])
      }
    })
  }

  ngOnInit() {
  }

  // o botao de LOGIN com o FACEBOOK
  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(user => {
      ConversationService.setLogin(user.user.providerData[0])
      this.router.navigate(['/chat/filmes'])
    })
    .catch((error) => {
      this.openDialog('Error. Please try again!')
    })
  }

  // abrir o DIALOG
  openDialog(msg: string): void {
    let dialogRef = this.dialog.open(ErrorUserComponent, {
      width: 'auto',
      data: msg
    });
  }

  // enviar os DADOS do FORM
  enviarDados(post, isValid: boolean) {

    // se o form esta VALIDO
    if (isValid) {

      let cpf = post.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4")
      this.cpf = cpf

      // mostrar a barra de PROGRESS
      this.inProgress = true

      this.userService.pegarUser(this.cpf)
        .subscribe(res => {

            // guardar os dados no SERVICE
            // manda para pagina de FILMES
            ConversationService.setLogin(res)
            this.router.navigate(['/chat/filmes'])
          }, err => {

            // remover a barra de PROGRESS
            // mostrar a MSG de ERRO
            this.inProgress = false
            this.openDialog(err.json().msg)
          })
    }
  }

  getFileUrl() {

    this.userService.getFileUrl()
      .subscribe(resp => {

        console.log(resp)
      })
  }
}