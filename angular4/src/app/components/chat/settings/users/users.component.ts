import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {MdSnackBar} from '@angular/material';

import { UserService } from './../../../../services/UserService/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: Array<Object> = []

  constructor(
    private userService: UserService,
    public snackBar: MdSnackBar,
    private router: Router
  ) {
    
  }

  ngOnInit() {

    this.userService.pegarUsers()
      .subscribe(res => {

        this.users = res
      })
  }

  goSalvarUser() {
    this.router.navigate(['/chat/salvaruser'])
  }

  atualizarUser(user) {

    this.router.navigate(['/chat/salvaruser', user.id])
  }
  
  deletarUser(user) {

    this.userService.deletarUser(user.id)
      .subscribe(res => {
        let novosUsers = this.users.slice(0);
        let indice = novosUsers.indexOf(user);
        novosUsers.splice(indice, 1);
        this.users = novosUsers;
        this.snackBar.open(res.msg, 'OK', {
          duration: 3000
        });
      }, err => {
        this.snackBar.open(err.json().msg, 'OK', {
          duration: 3000
        });
      })
  }
}