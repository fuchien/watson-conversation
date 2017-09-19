import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MdNativeDateModule,
  MdCardModule,
  MdCheckboxModule,
  MdSelectModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdDatepickerModule,
  MdToolbarModule,
  MdTabsModule,
  MdTableModule,
  MdDialogModule,
  MdSlideToggleModule,
  MdExpansionModule,
  MdSnackBarModule,
  MdListModule,
  MdIconModule,
  MdButtonModule,
  MdInputModule,
  MdMenuModule
} from '@angular/material'
import 'hammerjs'

import { KzMaskDirective } from './components/login/mask.directive';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { BallonsComponent } from './components/ballons/ballons.component';
import { SettingsToneComponent } from './components/chat/settings/toneAnalyzer/settings.component.tone';
import { LoginComponent } from './components/login/login.component';
import { ErrorUserComponent } from './components/error-user/error-user.component';

import { UserService } from './services/UserService/user.service';
import { ConversationService } from './services/ConversationService/conversation.service';
import { ToneService } from './services/ToneService/tone.service';
import { UsersComponent } from './components/chat/settings/users/users.component';
import { ApisComponent } from './components/chat/settings/apis/apis.component';

import { AuthGuard } from './guards/auth.guards';
import { CadastroComponent } from './components/chat/settings/users/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    BallonsComponent,
    LoginComponent,
    ErrorUserComponent,
    SettingsToneComponent,
    KzMaskDirective,
    UsersComponent,
    ApisComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdNativeDateModule,
    MdCardModule,
    MdCheckboxModule,
    MdSlideToggleModule,
    MdIconModule,
    MdSnackBarModule,
    MdListModule,
    MdTableModule,
    MdDialogModule,
    MdProgressSpinnerModule,
    MdTabsModule,
    MdProgressBarModule,
    MdSelectModule,
    MdExpansionModule,
    MdDatepickerModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdMenuModule,
    HttpModule
  ],
  entryComponents: [
    BallonsComponent,
    ErrorUserComponent
],
  providers: [
    ConversationService,
    AuthGuard,
    UserService,
    ToneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
