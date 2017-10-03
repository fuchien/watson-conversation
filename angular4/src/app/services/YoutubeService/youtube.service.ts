import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class YoutubeService {

  private BASE_URL: string = 'https://www.googleapis.com/youtube/v3/search'
  private API_KEY: string = 'AIzaSyBZt1day2zN1PjpgzRgkZ3tFfyigMygkyM'

  constructor(
    private _http: Http
  ) { }

  searchVideo(query) {

    let q = `${query} trailer legendado`

    return this._http.get(`${this.BASE_URL}?q=${q}&part=snippet&key=${this.API_KEY}`)
      .map((res: Response) => res.json())
      .map(json => json.items)
      .map(items => {
        let videos = []
        items.map(item => {
          if (item.id.videoId != undefined) {
            videos.push(item)
          }
        })
        return videos
      })
  }
}