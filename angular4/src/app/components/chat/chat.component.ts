import { Component, OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ChangeDetectorRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { ConversationService } from './../../services/ConversationService/conversation.service';
import { MoviesService } from './../../services/MoviesService/movies.service';
import { YoutubeService } from './../../services/YoutubeService/youtube.service';
import { BallonsComponent } from './../ballons/ballons.component';
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
  carregarMsg: boolean = false

  constructor(
    private conversationService: ConversationService,
    private cdr: ChangeDetectorRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private youtubeService: YoutubeService,
    private moviesService: MoviesService,
    public afAuth: AngularFireAuth,
    private _router: Router
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

        // criar balao da primeira msg do Watson
        // colocar os atributos necessarios
        // manter na LEFT com a IMG do WATSON
        let msg = res.output.text
        const factory = this.componentFactoryResolver.resolveComponentFactory(BallonsComponent);
        let ref = this.divBallons.createComponent(factory);
        ref.instance.setIsLeft = true;
        ref.instance.setMessage = msg;
        ref.changeDetectorRef.detectChanges();

        // pegar os MOVIES
        // this.moviesService.getMovies()
        //   .subscribe(res => {

        //     let title = []
        //     let movies = res.results.filter(filme => {
        //       return filme.release_date > '2017-10-01' && filme.release_date < '2017-10-31'
        //     })

        //     movies.forEach(movie => {
              
        //       let keys = Object.keys(movie)

        //       title.push(movie.title)
        //     });

            // http://image.tmdb.org/t/p/w185/<IMAGE>

            // criar balao com o titulo do MOVIE
            // const factoryMovie = this.componentFactoryResolver.resolveComponentFactory(BallonsComponent);
            // let refMovie = this.divBallons.createComponent(factoryMovie);
            // refMovie.instance.setIsLeft = true;
            // refMovie.instance.setMessage = `${movies[0].title} -- Data de lançamento: ${movies[0].release_date}`;
            // refMovie.changeDetectorRef.detectChanges();
      //     })
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
    
    // criar balao com a MSG do USUARIO
    // colocar os atributos e deixar o balao no RIGHT
    const factory = this.componentFactoryResolver.resolveComponentFactory(BallonsComponent);
    let ref = this.divBallons.createComponent(factory);
    ref.instance.setIsLeft = false;
    ref.instance.setMessage = msg;
    ref.changeDetectorRef.detectChanges();
    
    // mostrar o CARREGAMENTO de DIGITAR
    this.carregarMsg = true

    // mandar a msg do USUARIO para CONVERSATION
    this.conversationService.sendMessage(chatData)
      .subscribe(res => {

        //Verifica se deve criar o componente de vídeos do Youtube
        const watsonDefinitionVideoIntentId = true;
        if (watsonDefinitionVideoIntentId) {

          // procurar o VIDEO com a MSG do USUARIO
          this.youtubeService.searchVideo(msg)
            .subscribe(res => {

              // remover o CARREGAMENTO do digitar
              this.carregarMsg = false
              
              // criar balao com o VIDEO do filme em que o USUARIO digitou
              const factory = this.componentFactoryResolver.resolveComponentFactory(BallonsComponent);
              var ref = this.divBallons.createComponent(factory);
              ref.instance.setIsLeft = true;
              // setar o TITULO do video
              // SE setou, ele cria mais um balao com o VIDEO
              ref.instance.setMessage = res[0].snippet.title;
              ref.instance.setVideoUrl = `https://www.youtube.com/embed/${res[0].id.videoId}`;
              ref.changeDetectorRef.detectChanges();

              // scrollTop na TELA
              this.updateScrollBar()
            })
        }
        
        // let msg = res.output.text
        // const factory = this.componentFactoryResolver.resolveComponentFactory(BallonsComponent);
        
        //Insere a mensagem do usuário no balão
        // var ref = this.divBallons.createComponent(factory);
        // ref.instance.setIsLeft = true;
        // ref.instance.setMessage = msg;
        // ref.changeDetectorRef.detectChanges();

        // scrollTop na TELA
        this.updateScrollBar()
      })

    // ESVAZIAR o INPUT e dar scrollTop na TELA
    this.dialogMessage = null
    this.updateScrollBar()
  }

  logout() {
    this.afAuth.auth.signOut()
    this._router.navigate([''])
  }

  //Função responsável por colocar a barra de rolagem exibindo a última mensagem
  private updateScrollBar(): void {
    //Deixa a div posicionada com a barra de rolagem em baixo
    if (document.querySelector("#divOverflow") != undefined) {
        document.querySelector("#divOverflow").scrollTop = document.querySelector("#divOverflow").scrollHeight;
    }
  }
}