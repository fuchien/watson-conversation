import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MdDialog} from '@angular/material';

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

  private inProgress: boolean = false
  private cpf: string = ''
  private myForm: FormGroup

  constructor(
    private router: Router,
    private userService: UserService,
    public dialog: MdDialog,
    private fb: FormBuilder,
    private http: Http
  ) {
    this.myForm = fb.group({
      'cpf': [null, Validators.compose([Validators.required, Validators.minLength(10)])]
    })
  }

  ngOnInit() {
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      let formData:FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new Headers();
      /** No need to include Content-Type in Angular 4 */
      // headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      console.log(file)
      let options = new RequestOptions({ headers: headers });
      this.http.post(`http://localhost:3000/upload`, formData, options)
          .map(res => res.json())
          .subscribe(
              data => console.log('success'),
              error => console.log(error)
          )
    }
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
            this.router.navigate(['/chat/apis'])
          }, err => {
            this.inProgress = false
            this.openDialog(err.json().msg)
          })

      // this.userService.findUser(this.login)
      //   .subscribe(res => {
      //     ConversationService.setLogin(res)
      //     this.router.navigate(['/chat'])
      //   }, err => {
      //     this.inProgress = false
      //     this.openDialog(err.json().msg)
      //   })
    }
  }
}