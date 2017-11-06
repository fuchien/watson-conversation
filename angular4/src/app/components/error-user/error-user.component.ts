import { Component, OnInit, Inject } from '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-error-user',
  templateUrl: './error-user.component.html',
  styleUrls: ['./error-user.component.css'],
  // providers: [
  //   {provide: MD_DIALOG_DATA, useValue: {} },
  //   {provide: MdDialogRef, useValue: {} }
  // ]
})
export class ErrorUserComponent implements OnInit {

  _injectedValue: any

  constructor(
    public thisDialogRef: MatDialogRef<ErrorUserComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    if(this.data) {
      this._injectedValue = this.data;
    }
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.thisDialogRef.close();
  }

}