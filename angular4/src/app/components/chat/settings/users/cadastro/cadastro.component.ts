import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CadastroModel } from './cadastro.model'

import Chart from 'chart.js';

import { UserService } from './../../../../../services/UserService/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @ViewChild('myChart') myChart: ElementRef;

  private myForm: FormGroup
  private enviando: boolean = false
  private user: CadastroModel = new CadastroModel()
  
  private admin = [
    {value: '1', viewValue: '1'},
    {value: '0', viewValue: '0'}
  ];

  constructor(
    private fb: FormBuilder,
    public snackBar: MdSnackBar,
    private userService: UserService,
    private _location: Location,
    private route: ActivatedRoute
  ) {

    this.route.params.subscribe(params => {
      
        let id = params['id'];
        
        if(id) {

          this.userService.pegarPorId(id)
            .subscribe(user => {
              this.user = user
            }, erro => {
              console.log(erro)
            });
        }

    });

    this.myForm = fb.group({
      'nome': [null, Validators.required],
      'cpf': [null, Validators.required],
      'descricao': [null, Validators.required],
      'admin': [null, Validators.required]
    })
  }

  ngOnInit() {

    let ctx: CanvasRenderingContext2D  = this.myChart.nativeElement.getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
  }

  goBack() {

    this._location.back()
  }

  salvarUser(post, isValid) {
    
    if (isValid) {
      this.enviando = true
      
      let user = {
        nome: post.nome,
        cpf: post.cpf,
        descricao: post.descricao,
        admin: post.admin,
        id: this.user.id
      }
  
      this.userService.salvarUser(user)
        .subscribe(res => {
          this.enviando = false
          this.user = new CadastroModel()
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
}