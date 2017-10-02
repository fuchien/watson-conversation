import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  private videoUrl: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }
  
  ngOnInit() {
  }
  
  set setVideoUrl(value: string)
  {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

  get getVideoUrl() {
      return this.videoUrl;
  }
}