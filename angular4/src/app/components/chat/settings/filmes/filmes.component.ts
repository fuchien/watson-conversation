import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from './../../../../services/MoviesService/movies.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  movies: any = []

  constructor(
    private moviesService: MoviesService,
    private _router: Router
  ) { }

  ngOnInit() {

    // TODA vez que inicia o component ZERA o array de FILMES
    MoviesService.clearMovies()

    let upComingToday = new Date()

    let upComingAfter30 = new Date()
    upComingAfter30.setDate(upComingAfter30.getDate()+30)

    // buscar filmes UPCOMING
    this.getMovies(3, 'upcoming', this.formatDate(upComingToday), this.formatDate(upComingAfter30))

    let nowPlayingBefore30 = new Date()
    nowPlayingBefore30.setDate(nowPlayingBefore30.getDate()-30)

    let nowPlayingYesterday = new Date()
    nowPlayingYesterday.setDate(nowPlayingYesterday.getDate()-1)
    // buscar filmes NOWPLAYING
    this.getMovies(3, 'now_playing', this.formatDate(nowPlayingBefore30), this.formatDate(nowPlayingYesterday))
  }

  formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  
    return [year, month, day].join('-');
  }

  getMovies(qtdePages, tipoLancamento, dataInicio, dataFinal) {

    // fazer a buscar pega qtdePages
    for (let x=1; x<=qtdePages; x++) {

      // funcao getMovies com a qtdePage e tipoLancamento
      this.moviesService.getMovies(x, tipoLancamento)
        .subscribe(resp => {
    
          // criar um array de lista
          let listaMovies = []

          // filtrar o resultado da busca dos filmes
          // entre dataInicio e dataFinal
          let filmes = resp.results.filter(filme => {
            return filme.release_date > dataInicio && filme.release_date < dataFinal
          })
    
          // colocar o ARRAY FILMES em ordem decrescente
          filmes.sort(this.compare).forEach(filme => {
    
            // se backdrop_path estiver VAZIO coloca o poster_path
            if (filme.backdrop_path == undefined)
              filme.backdrop_path = filme.poster_path
    
            // se os 2 paths estiverem VAZIO ou poster_path
            // remove o filme da lista
            if (filme.backdrop_path == undefined && filme.poster_path == undefined
                  || filme.poster_path == undefined)
              return

            // depois das validacoes da PUSH no array LISTAMOVIES
            listaMovies.push(filme)
          })
    
          // correr o array listaMovies e setar no SERVICE
          listaMovies.forEach(filmes => {
            MoviesService.setMovies(filmes)
          })
    
          // colocar os FILMES do service no ARRAY MOVIES para mostrar na tela
          this.movies = MoviesService.getMovies()
        })
    }
  }

  // botao do DETALHES
  // mandar para a pagina de DETALHES com o ID do filme
  goDetails(id) {

    this._router.navigate(['/chat/details', id])
  }

  // comparar as DATAS para ORDEM DECRESCENTE
  compare(a,b) {
    return a.release_date < b.release_date;
  }
}