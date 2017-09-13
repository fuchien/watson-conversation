import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MdNativeDateModule,
  MdCardModule,
  MdCheckboxModule,
  MdSelectModule,
  MdProgressBarModule,
  MdDatepickerModule,
  MdToolbarModule,
  MdTabsModule,
  MdDialogModule,
  MdExpansionModule,
  MdIconModule,
  MdButtonModule,
  MdInputModule,
  MdMenuModule } from '@angular/material'
import 'hammerjs'

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';

import { UserService } from './services/user.service';
import { ConversationService } from './services/conversation.service';
import { BallonsComponent } from './components/ballons/ballons.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorUserComponent } from './components/error-user/error-user.component';

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
        canActivate: [AuthGuard]
    }
  ];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    BallonsComponent,
    LoginComponent,
    ErrorUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdNativeDateModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdDialogModule,
    MdTabsModule,
    MdProgressBarModule,
    MdSelectModule,
    MdExpansionModule,
    MdDatepickerModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdMenuModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    BallonsComponent,
    ErrorUserComponent
],
  providers: [
    ConversationService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
