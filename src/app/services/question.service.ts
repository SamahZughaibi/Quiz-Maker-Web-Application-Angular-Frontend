import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
 
@Injectable({
  providedIn: "root",
})
export class QuestionService{
    private readonly API_URL = "http://localhost:8080/api";
    
    constructor(private http: HttpClient) {}

    getQuestions(): Observable<any>{
      return this.http.get<any>(this.API_URL + "/questions").pipe(
        catchError(error => {
          console.error('Error fetching questions:', error);
          return of([]);
        })
      );
    }
    postQuestion(body: any): Observable<any>{
      return this.http.post<any>(this.API_URL + "/quizzes/questions", body);
    }
    getQuestionChoices(id: number): Observable<any>{
      return this.http.get<any>(this.API_URL + "/questions/" + id + "/choices").pipe(
        catchError(error => {
          console.error('Error fetching choices:', error);
          return of([]);
        })
      );
    }
    deleteQuestion(questionId: number): Observable<any>{
      return this.http.delete<any>(this.API_URL + "/questions/" + questionId);
    }
}