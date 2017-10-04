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

  movie: Movie = new Movie()
  videoUrl: string = ''
  buscando: boolean = true

  constructor(
    private _location: Location,
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private youtubeService: YoutubeService
  ) {

    this.route.params.subscribe(params => {
      
        let id = params['id'];
        if(id) {

          this.moviesService.getIdDetails(id)
            .subscribe(movie => {

              this.movie = movie

              this.moviesService.getVideoKey(this.movie.id)
                .subscribe(res => {

                  if (res.results[0] != undefined) {

                    this.buscando = false
                    this.videoUrl = `https://www.youtube.com/embed/${res.results[0].key}`
                  } else {

                    this.youtubeService.searchVideo(this.movie.title)
                      .subscribe(resp => {
                        
                        this.buscando = false
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

export class Movie {
  overview: string
  poster_path: string
  release_date: string
  title: string
  tagline: string
  id: string
  backdrop_path: string
}