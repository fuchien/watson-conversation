import { Component, OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ChangeDetectorRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import { ConversationService } from './../../services/ConversationService/conversation.service';
import { YoutubeService } from './../../services/YoutubeService/youtube.service';
import { BallonsComponent } from './../ballons/ballons.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ChatModel } from "./chat.model"

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('divBallons', { read: ViewContainerRef }) divBallons;

  dialogMessage: string = ''
  isAdmin: boolean

  constructor(
    private conversationService: ConversationService,
    private cdr: ChangeDetectorRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private youtubeService: YoutubeService
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

        //Verifica se deve criar o componente de vídeos do Youtube
        // const watsonDefinitionVideoIntentId = true;
        // if (watsonDefinitionVideoIntentId) {

        //     const youtubeFactory = this.componentFactoryResolver.resolveComponentFactory(YoutubeComponent);
        //     var youtubeRef = this.divBallons.createComponent(youtubeFactory);
        //     youtubeRef.instance.setVideoUrl = `https://www.youtube.com/embed/?listType=search&list=${this.videoValue}`;
        // }

        let msg = res.output.text
        const factory = this.componentFactoryResolver.resolveComponentFactory(BallonsComponent);
        
        //Insere a mensagem do usuário no balão
        var ref = this.divBallons.createComponent(factory);
        ref.instance.setIsLeft = true;
        ref.instance.setMessage = msg;
        ref.changeDetectorRef.detectChanges();
      })
  }

  eventKeyHandler(event, inputValue): void {

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

        //Verifica se deve criar o componente de vídeos do Youtube
        const watsonDefinitionVideoIntentId = true;
        if (watsonDefinitionVideoIntentId) {

          this.youtubeService.searchVideo(`${msg} legendado`)
            .subscribe(res => {
              
              const factory = this.componentFactoryResolver.resolveComponentFactory(BallonsComponent);
              var ref = this.divBallons.createComponent(factory);
              ref.instance.setIsLeft = true;
              ref.instance.setMessage = res[0].snippet.title;
              ref.instance.setVideoUrl = `https://www.youtube.com/embed/${res[0].id.videoId}`;
              ref.changeDetectorRef.detectChanges();
              this.updateScrollBar()
            })

          // const youtubeFactory = this.componentFactoryResolver.resolveComponentFactory(YoutubeComponent);
          // var youtubeRef = this.divBallons.createComponent(youtubeFactory);
          // youtubeRef.instance.setVideoUrl = `https://www.youtube.com/results?search_query=msg`;
          // https://www.googleapis.com/youtube/v3/search?q=dota2&part=snippet&key=AIzaSyBZt1day2zN1PjpgzRgkZ3tFfyigMygkyM
          // https://www.youtube.com/embed/VIDEO_ID
        }
        
        // let msg = res.output.text
        // const factory = this.componentFactoryResolver.resolveComponentFactory(BallonsComponent);
        
        //Insere a mensagem do usuário no balão
        // var ref = this.divBallons.createComponent(factory);
        // ref.instance.setIsLeft = true;
        // ref.instance.setMessage = msg;
        // ref.changeDetectorRef.detectChanges();
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