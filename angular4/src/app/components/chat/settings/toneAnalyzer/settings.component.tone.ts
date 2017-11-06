import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {matSnackBar} from '@angular/material';

import { ToneService } from './../../../../services/ToneService/tone.service';

@Component({
  selector: 'app-settings-tone',
  templateUrl: './settings.component.tone.html',
  styleUrls: ['./settings.component.tone.css']
})
export class SettingsToneComponent implements OnInit {

  myForm: FormGroup

  username: string = ''
  password: string = ''

  isSave: boolean = false
  enviando: boolean = false
  private checkBoxValue: boolean = false

  constructor(
    private fb: FormBuilder,
    private toneService: ToneService,
    // public snackBar: matSnackBar
  ) {
    this.myForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  ngOnInit() {

    this.toneService.pegarCredenciais()
      .subscribe(res => {
        this.username = res.username
        this.password = res.password
      }, err => {
        // this.snackBar.open(err.json().msg, 'OK', {
        //   duration: 3000
        // });
      })
  }

  saveOrNot() {
    this.isSave = !this.isSave
  }

  enviarCredenciais(post, isValid: boolean) {
    
    if (isValid) {

      if (post.username === this.username && post.password === this.password) {
        // this.snackBar.open('As credenciais são iguais', 'OK', {
        //   duration: 3000
        // });
        return
      }

      this.enviando = true

      let credenciais = {
        username: post.username,
        password: post.password,
        save: this.isSave
      }
  
      this.toneService.enviarCredenciais(credenciais)
        .subscribe(res => {
          this.enviando = false
          // this.snackBar.open(res.msg, 'OK', {
          //   duration: 3000
          // });
        }, err => {
          // this.snackBar.open(err.json().msg, 'OK', {
          //   duration: 3000
          // });
        })
    }
  }

}