import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ConversationService } from './../../../services/conversation.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  private username: string = ''
  private password: string = ''
  private myForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private conversationService: ConversationService
  ) {
    this.myForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  ngOnInit() {
  }

}
