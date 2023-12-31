import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
 
@Injectable({
  providedIn: "root",
})
export class QuizResultService{
    private readonly API_URL = "http://localhost:8080/api";
    
    constructor(private http: HttpClient) {}

    postResult(body: any): Observable<any>{
      return this.http.post<any>(this.API_URL + "/results", body);
    }
    getResults(): Observable<any>{
      return this.http.get<any>(this.API_URL + '/results');
    }
}