import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/users').pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return of([]);
      })
    );
  }
  postUser(body: any): Observable<any> {
    return this.http.post<any>(this.API_URL + '/users', body);
  }
  getUserResults(email: string): Observable<any> {
    return this.http
      .get<any>(this.API_URL + '/user/' + email + '/results')
      .pipe(
        catchError((error) => {
          console.error('Error fetching results:', error);
          return of([]);
        })
      );
  }
  getUserQuizzes(email: string): Observable<any> {
    return this.http
      .get<any>(this.API_URL + '/user/' + email + '/quizzes')
      .pipe(
        catchError((error) => {
          console.error('Error fetching quizzes:', error);
          return of([]);
        })
      );
  }
}
