import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import { ConversationService } from './../services/conversation.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router : Router
    ) {

    }

    canActivate() : boolean {
        let login = ConversationService.getLogin();
        if (login !== null) {
            return true;
        }

        this.router.navigate(['/']);
        return false;
    }
}
