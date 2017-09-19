import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './components/chat/settings/users/cadastro/cadastro.component';
import { ApisComponent } from './components/chat/settings/apis/apis.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/chat/settings/users/users.component';

import { AuthGuard } from './guards/auth.guards';


const appRoutes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'chat',
        component: ChatComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'apis',
                component: ApisComponent
            },
            {
                path: 'users',
                component: UsersComponent,
                // children: [
                //     {
                //         path: 'salvaruser',
                //         component: CadastroComponent
                //     }
                // ]
            },
            {
                path: 'salvaruser',
                component: CadastroComponent
            },
            {
                path: 'salvaruser/:id',
                component: CadastroComponent
            }
        ] 
    },
    {
        path: '**',
        component: LoginComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);