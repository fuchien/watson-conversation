import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MdDialog} from '@angular/material';

import { UserService } from './../../services/UserService/user.service';
import { ConversationService } from './../../services/ConversationService/conversation.service';

import { ErrorUserComponent } from '../error-user/error-user.component';

const CPF_REGEX = /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private inProgress: boolean = false
  private login: string = ''
  private myForm: FormGroup

  constructor(
    private router: Router,
    private userService: UserService,
    public dialog: MdDialog,
    private fb: FormBuilder
  ) {
    this.myForm = fb.group({
      'login': [null, Validators.pattern(CPF_REGEX)]
    })
  }

  ngOnInit() {
  }

  openDialog(msg: string): void {
    let dialogRef = this.dialog.open(ErrorUserComponent, {
      width: 'auto',
      data: msg
    });
  }

  enviarDados(post, isValid: boolean) {

    if (isValid) {

      this.login = post.login
      this.inProgress = true

      this.userService.findUser(this.login)
        .subscribe(res => {
          ConversationService.setLogin(res)
          this.router.navigate(['/chat'])
        }, err => {
          this.inProgress = false
          this.openDialog(err.json().msg)
        })
    }
  }
}