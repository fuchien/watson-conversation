import {
  Component,
  ElementRef,
  ViewChild,
  Output,
  OnInit,
  EventEmitter
} from "@angular/core";

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ballons',
  templateUrl: './ballons.component.html',
  styleUrls: ['./ballons.component.css']
})
export class BallonsComponent implements OnInit {

  @ViewChild('divContentBallon') divContentBallon: ElementRef;

    private videoUrl: SafeResourceUrl;
    video: boolean = false
    
    constructor(public sanitizer: DomSanitizer) { }
    
    ngOnInit() {
    }

    set setVideoUrl(value: string) {
        this.video = true
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
    
    get getVideoUrl() {
        return this.videoUrl;
    }

    //Variáveis de propriedades
    private elementSideValue: string;
    
    //Variáveis de controle da interface
    isSara: boolean;
    
    //Propriedade para informar se o balão deve ficar a direita ou a esquerda do diálogo
    set setIsLeft(value: boolean) {
        this.elementSideValue = (value == false ? "RIGHT" : "LEFT");
        this.isSara = value;
    }
    
    //Informa pela propriedade o valor a ser exibido no balão
    set setMessage(value: string) {
        this.divContentBallon.nativeElement.innerHTML = value;
    }  
    
    //Função responsável por verificar se aplicará o css do balão de diálogo
    //do Watson (lado esquerdo) ou do usuário logado (lado direito)
    getBallowClass() {
        if (this.elementSideValue == undefined ||
            this.elementSideValue == null ||
            this.elementSideValue == "LEFT") {
            return "divBallon ballonLeft";
        }
    
        return "divBallon ballonRight";
    }
}
