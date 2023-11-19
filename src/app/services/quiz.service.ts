import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private readonly API_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getAllQuizzes(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/quizzes').pipe(
      catchError((error) => {
        console.error('Error fetching quizzes:', error);
        return of([]);
      })
    );
  }

  postQuiz(body: any): Observable<any> {
    return this.http.post<any>(this.API_URL + '/users/quizzes', body);
  }

  getQuizQuestions(quizId: number): Observable<any> {
    return this.http
      .get<any>(this.API_URL + '/quizzes/' + quizId + '/questions')
      .pipe(
        catchError((error) => {
          console.error('Error fetching questions:', error);
          return of([]);
        })
      );
  }

  deleteQuiz(quizId: number): Observable<any>{
    return this.http.delete<any>(this.API_URL + "/quizzes/" + quizId);
  }

}

