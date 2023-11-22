import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { MyResultsPageComponent } from './components/my-results-page/my-results-page.component';
import { UserHomepageComponent } from './components/user-homepage/user-homepage.component';
import { QuizTakingFormPageComponent } from './components/quiz-taking-form-page/quiz-taking-form-page.component';
import { UserInfoPageComponent } from './components/user-info-page/user-info-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { MyQuizzesPageComponent } from './components/quizzes-page/my-quizzes-page.component';
import { QuizResultPageComponent } from './components/quiz-result-page/quiz-result-page.component';

const routes: Routes = [
  {
    path: "",
    component: WelcomePageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "register",
    component: RegisterPageComponent
  },
  {
    path: "myResults",
    component: MyResultsPageComponent
  },
  {
    path: "home",
    component: UserHomepageComponent
  },
  {
    path: "quizTakingForm",
    component: QuizTakingFormPageComponent
  },
  {
    path: "userInfo",
    component: UserInfoPageComponent
  },
  {
    path: "myQuizzes",
    component: MyQuizzesPageComponent
  },
  {
    path: "quizResults",
    component: QuizResultPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
