import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MdDialog} from '@angular/material';
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
    public dialog: MdDialog,
    private fb: FormBuilder,
    private http: Http,
    public afAuth: AngularFireAuth
  ) {
    this.myForm = fb.group({
      'cpf': [null, Validators.compose([Validators.required, Validators.minLength(10)])]
    })

    this.user = this.afAuth.authState

    this.afAuth.authState.subscribe(afAuth => {
      if(afAuth) {
        ConversationService.setLogin(afAuth.providerData[0])
        this.router.navigate(['/chat/filmes'])
      }
    })
  }

  ngOnInit() {

  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(user => {
      ConversationService.setLogin(user.user.providerData[0])
      this.router.navigate(['/chat/filmes'])
    })
    .catch(function (error){
      alert('${error.message} Please try again')
    })
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  openDialog(msg: string): void {
    let dialogRef = this.dialog.open(ErrorUserComponent, {
      width: 'auto',
      data: msg
    });
  }

  enviarDados(post, isValid: boolean) {

    if (isValid) {

      let cpf = post.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4")
      this.cpf = cpf
      this.inProgress = true

      this.userService.pegarUser(this.cpf)
        .subscribe(res => {
            ConversationService.setLogin(res)
            this.router.navigate(['/chat/filmes'])
          }, err => {
            this.inProgress = false
            this.openDialog(err.json().msg)
          })
    }
  }
}