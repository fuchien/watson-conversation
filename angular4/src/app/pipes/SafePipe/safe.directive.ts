import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  // PIPE usado para mostrar VIDEOS de youtube na tela com seguranca
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 