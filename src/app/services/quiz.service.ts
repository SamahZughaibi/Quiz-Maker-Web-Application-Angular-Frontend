import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
 
@Injectable({
  providedIn: "root",
})
export class QuizService{
    private readonly API_URL = "http://localhost:8080/api";

    constructor(private http: HttpClient) {}

    getAllQuizzes(): Observable<any>{
      return this.http.get<any>(this.API_URL + "/quizzes").pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          return of([]);
        })
        );
    }
}