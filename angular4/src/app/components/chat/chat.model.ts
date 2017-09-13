import {Injectable} from "@angular/core"

@Injectable()
export class ChatModel {

    constructor() {

    }

    private text : string;
    private context : object;

    //Define qual o valor do texto a ser enviado para o Conversation
    set setText(text : string) {
        this.text = text;
    }

    //Define o objeto de contexto do Conversation
    set setContext(context : object) {
        this.context = context;
    }

    //Obtém o valor definido a ser enviado para o Conversation
    get getText() : string {
        return this.text;
    }

    //Obtém o objeto de contexto definido para ser enviado ao Conversation
    get getContext() : object {
        return this.context;
    }
}