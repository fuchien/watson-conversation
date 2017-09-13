import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ToneService } from './../../../../services/ToneService/tone.service';

@Component({
  selector: 'app-settings-tone',
  templateUrl: './settings.component.tone.html',
  styleUrls: ['./settings.component.tone.css']
})
export class SettingsToneComponent implements OnInit {

  private myForm: FormGroup

  private username: string = ''
  private password: string = ''
  private isSave: boolean = false
  private enviando: boolean = false

  constructor(
    private fb: FormBuilder,
    private toneService: ToneService
  ) {
    this.myForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  ngOnInit() {
  }

  saveOrNot() {
    this.isSave = !this.isSave
  }

  enviarCredenciais(post, isValid: boolean) {
    
    if (isValid) {

      this.enviando = true

      this.username = post.username
      this.password = post.password
      let credenciais = {
        username: this.username,
        password: this.password
      }

      this.toneService.enviarCredenciais(credenciais)
        .subscribe(res => console.log(res))
    }
  }

}