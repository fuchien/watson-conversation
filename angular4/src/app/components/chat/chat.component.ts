import { Component, OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ChangeDetectorRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import { ConversationService } from './../../services/ConversationService/conversation.service';
import { BallonsComponent } from './../ballons/ballons.component';
import { ChatModel } from "./chat.model"

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('divBallons', { read: ViewContainerRef }) divBallons;

  private dialogMessage: string = ''
  private isAdmin: boolean = false

  constructor(
    private conversationService: ConversationService,
    private cdr: ChangeDetectorRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    
  }

  ngOnInit() {
    
    if (ConversationService.getLogin().admin === '1')
      this.isAdmin = true

    let chatData = new ChatModel()
    chatData.setContext = {}
    chatData.setText = ''
    this.conversationService.sendMessage(chatData)
      .subscribe(res => {
        let msg = res.output.text
        const factory = this.componentFactoryResolver.resolveComponentFactory(BallonsComponent);
        
        //Insere a mensagem do usuário no balão
        var ref = this.divBallons.createComponent(factory);
        ref.instance.setIsLeft = true;
        ref.instance.setMessage = msg;
        ref.changeDetectorRef.detectChanges();
      })
  }

  private eventKeyHandler(event, inputValue): void {

      if (event.keyCode == 13) {

          //Chama a função responsável por tratar as mensagens enviadas
          this.sendMsg(inputValue);
      }
  }

  sendMsg(msg) {

    let chatData = new ChatModel()
    chatData.setText = msg

    const factory = this.componentFactoryResolver.resolveComponentFactory(BallonsComponent);
    
    //Insere a mensagem do usuário no balão
    var ref = this.divBallons.createComponent(factory);
    ref.instance.setIsLeft = false;
    ref.instance.setMessage = msg;
    ref.changeDetectorRef.detectChanges();

    this.conversationService.sendMessage(chatData)
      .subscribe(res => {
        let msg = res.output.text
        const factory = this.componentFactoryResolver.resolveComponentFactory(BallonsComponent);
        
        //Insere a mensagem do usuário no balão
        var ref = this.divBallons.createComponent(factory);
        ref.instance.setIsLeft = true;
        ref.instance.setMessage = msg;
        ref.changeDetectorRef.detectChanges();
        this.updateScrollBar()
      })
    this.dialogMessage = null
    this.updateScrollBar()
  }

  //Função responsável por colocar a barra de rolagem exibindo a última mensagem
  private updateScrollBar(): void {
    //Deixa a div posicionada com a barra de rolagem em baixo
    if (document.querySelector("#divOverflow") != undefined) {
        document.querySelector("#divOverflow").scrollTop = document.querySelector("#divOverflow").scrollHeight;
    }
  }
}