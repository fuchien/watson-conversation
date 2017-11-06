import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatNativeDateModule,
  MatCardModule,
  MatCheckboxModule,
  MatSelectModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatTabsModule,
  MatTableModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule
} from '@angular/material'
import 'hammerjs'
import { AngularFireModule } from 'angularfire2'
// New imports to update based on AngularFire2 version 4
import { AngularFireAuthModule } from 'angularfire2/auth';

import { KzMaskDirective } from './components/login/mask.directive';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { BallonsComponent } from './components/ballons/ballons.component';
import { SettingsToneComponent } from './components/chat/settings/toneAnalyzer/settings.component.tone';
import { LoginComponent } from './components/login/login.component';
import { ErrorUserComponent } from './components/error-user/error-user.component';
import { UsersComponent } from './components/chat/settings/users/users.component';
import { ApisComponent } from './components/chat/settings/apis/apis.component';

import { UserService } from './services/UserService/user.service';
import { ConversationService } from './services/ConversationService/conversation.service';
import { MoviesService } from './services/MoviesService/movies.service';
import { ToneService } from './services/ToneService/tone.service';
import { YoutubeService } from './services/YoutubeService/youtube.service';

import { AuthGuard } from './guards/auth.guards';
import { CadastroComponent } from './components/chat/settings/users/cadastro/cadastro.component';
import { CarregarDirective } from './components/chat/carregar.directive';
import { FilmesComponent } from './components/chat/settings/filmes/filmes.component';
import { DetailsComponent } from './components/chat/settings/details/details.component';
import { SafePipe } from './pipes/SafePipe/safe.directive';

export const firebaseConfig = {
  apiKey: "AIzaSyArIptzYWVDJNxwr21ftD-vFROX6U42xe4",
  authDomain: "authentication-9ca94.firebaseapp.com",
  databaseURL: "https://authentication-9ca94.firebaseio.com",
  projectId: "authentication-9ca94",
  storageBucket: "authentication-9ca94.appspot.com",
  messagingSenderId: "781141565823"
}

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
    CadastroComponent,
    CarregarDirective,
    FilmesComponent,
    DetailsComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSelectModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  entryComponents: [
    BallonsComponent,
    ErrorUserComponent
  ],
  providers: [
    ConversationService,
    AuthGuard,
    UserService,
    ToneService,
    YoutubeService,
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
