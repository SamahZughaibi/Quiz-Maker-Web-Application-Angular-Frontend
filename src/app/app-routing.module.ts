import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { MyResultsPageComponent } from './components/my-results-page/my-results-page.component';
import { UserHomepageComponent } from './components/user-homepage/user-homepage.component';
import { QuizTakingFormPageComponent } from './components/quiz-taking-form-page/quiz-taking-form-page.component';
import { QuizCreatingFormPageComponent } from './components/quiz-creating-form-page/quiz-creating-form-page.component';
import { UserInfoPageComponent } from './components/user-info-page/user-info-page.component';

const routes: Routes = [
  {
    path: " ",
    component: AppComponent
  },
  {
    path: "/login",
    component: LoginPageComponent
  },
  {
    path: "/register",
    component: RegisterPageComponent
  },
  {
    path: "/myResults",
    component: MyResultsPageComponent
  },
  {
    path: "/home",
    component: UserHomepageComponent
  },
  {
    path: "/quizTakingForm",
    component: QuizTakingFormPageComponent
  },
  {
    path: "/createNewQuiz",
    component: QuizCreatingFormPageComponent
  },
  {
    path: "/userInfo",
    component: UserInfoPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
