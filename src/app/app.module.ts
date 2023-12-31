import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {ClipboardModule} from '@angular/cdk/clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UserHomepageComponent } from './components/user-homepage/user-homepage.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { MyQuizzesPageComponent } from './components/quizzes-page/my-quizzes-page.component';
import { MyResultsPageComponent } from './components/my-results-page/my-results-page.component';
import { QuizTakingFormPageComponent } from './components/quiz-taking-form-page/quiz-taking-form-page.component';
import { UserInfoPageComponent } from './components/user-info-page/user-info-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { QuizResultPageComponent } from './components/quiz-result-page/quiz-result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginPageComponent,
    UserHomepageComponent,
    RegisterPageComponent,
    MyQuizzesPageComponent,
    MyResultsPageComponent,
    QuizTakingFormPageComponent,
    UserInfoPageComponent,
    WelcomePageComponent,
    QuizResultPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
