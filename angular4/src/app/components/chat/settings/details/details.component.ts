import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { YoutubeService } from './../../../../services/YoutubeService/youtube.service';
import { MoviesService } from './../../../../services/MoviesService/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie: Movie
  videoUrl: string = ''
  buscando: boolean = true

  constructor(
    private _location: Location,
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private youtubeService: YoutubeService
  ) {

    this.route.params.subscribe(params => {
      
      // pegar a variavel da ROTA
      let id = params['id'];

      // validar se EXISTE a variavel
      if(id) {

        // pegar os DETALHES do filme do ID
        this.moviesService.getIdDetails(id)
          .subscribe(movie => {

            // setar na VARIAVEL MOVIE para mostrar os DETALHES na TELA
            this.movie = movie

            // pegar o KEY do VIDEO
            this.moviesService.getVideoKey(this.movie.id)
              .subscribe(res => {

                // validar se ESTA VAZIO ou NAO a KEY
                if (res.results[0] != undefined) {

                  // remover o SPIN de carregamento
                  this.buscando = false

                  // mostrar o VIDEO do YOUTUBE na tela
                  this.videoUrl = `https://www.youtube.com/embed/${res.results[0].key}`

                  // SE ESTIVER VAZIO
                  // faca outra BUSCA direto no YOUTUBE com o TITULO do filme
                } else {

                  // procurar o VIDEO com o TITULO no YOUTUBE
                  this.youtubeService.searchVideo(this.movie.title)
                    .subscribe(resp => {
                      
                      // remover o SPIN de carregamento
                      this.buscando = false

                      // mostrar o VIDEO do YOUTUBE na tela
                      this.videoUrl = `https://www.youtube.com/embed/${resp[0].id.videoId}`
                    })
                }
              })
          }, erro => {
            console.log(erro)
          });
      }

    });
  }

  ngOnInit() {
  }

}

export interface Movie {
  overview: string
  poster_path: string
  release_date: string
  title: string
  tagline: string
  id: string
  backdrop_path: string
}