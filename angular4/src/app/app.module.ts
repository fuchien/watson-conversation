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
  MdProgressSpinnerModule,
  MdDatepickerModule,
  MdToolbarModule,
  MdTabsModule,
  MdDialogModule,
  MdSlideToggleModule,
  MdExpansionModule,
  MdIconModule,
  MdButtonModule,
  MdInputModule,
  MdMenuModule } from '@angular/material'
  import 'hammerjs'
  
  import { AppComponent } from './app.component';
  import { ChatComponent } from './components/chat/chat.component';
  import { BallonsComponent } from './components/ballons/ballons.component';
  import { SettingsToneComponent } from './components/chat/settings/toneAnalyzer/settings.component.tone';
  import { LoginComponent } from './components/login/login.component';
  import { ErrorUserComponent } from './components/error-user/error-user.component';
  
  import { UserService } from './services/UserService/user.service';
  import { ConversationService } from './services/ConversationService/conversation.service';
  import { ToneService } from './services/ToneService/tone.service';
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
    ErrorUserComponent,
    SettingsToneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdNativeDateModule,
    MdCardModule,
    MdCheckboxModule,
    MdSlideToggleModule,
    MdIconModule,
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
    UserService,
    ToneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
