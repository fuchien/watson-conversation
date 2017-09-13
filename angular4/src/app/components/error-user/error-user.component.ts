import { Component, OnInit, Inject } from '@angular/core';

import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-error-user',
  templateUrl: './error-user.component.html',
  styleUrls: ['./error-user.component.css']
})
export class ErrorUserComponent implements OnInit {

  constructor(
    public thisDialogRef: MdDialogRef<ErrorUserComponent>,
    @Inject(MD_DIALOG_DATA) public data: string
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.thisDialogRef.close();
  }

}