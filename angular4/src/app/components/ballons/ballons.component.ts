import {
  Component,
  ElementRef,
  ViewChild,
  Output,
  OnInit,
  EventEmitter
} from "@angular/core";

@Component({
  selector: 'app-ballons',
  templateUrl: './ballons.component.html',
  styleUrls: ['./ballons.component.css']
})
export class BallonsComponent implements OnInit {

  @ViewChild('divContentBallon') divContentBallon: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  //Variáveis de propriedades
  private elementSideValue: string;
  
  //Variáveis de controle da interface
  private isSara: boolean;

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
