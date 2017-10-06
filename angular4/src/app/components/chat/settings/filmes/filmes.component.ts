import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from './../../../../services/MoviesService/movies.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  movies = []

  constructor(
    private moviesService: MoviesService,
    private _router: Router
  ) { }

  ngOnInit() {

    let lista = []
    // pegar os MOVIES
    this.moviesService.getMoviesUpComing()
      .subscribe(res => {

        let filmesUpComing = res.results.filter(filmeUpComing => {
          return filmeUpComing.release_date > '2017-10-01' && filmeUpComing.release_date < '2017-10-31'
        })

        filmesUpComing.sort(this.compare).forEach(filmeUpComing => {
          lista.push(filmeUpComing)
        })

        this.moviesService.getMoviesNowPlaying()
          .subscribe(resp => {
            let filmesNowPlaying = resp.results.filter(filmeNowPlaying => {
              return filmeNowPlaying.release_date > '2017-09-01' && filmeNowPlaying.release_date < '2017-09-31'
            })
    
            filmesNowPlaying.sort(this.compare).forEach(filmeNowPlaying => {
              lista.push(filmeNowPlaying)
            })

            lista.forEach(filmes => {
              if (filmes.backdrop_path == undefined)
                filmes.backdrop_path = filmes.poster_path
            })
            
            this.movies = lista
          })
      })
  }

  goDetails(id) {

    this._router.navigate(['/chat/details', id])
  }

  compare(a,b) {
    return a.release_date < b.release_date;
  }
}