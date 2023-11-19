import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
 
@Injectable({
  providedIn: "root",
})
export class ChoiceService{
    private readonly API_URL = "http://localhost:8080/api";
    
    constructor(private http: HttpClient) {}

    postChoice(body: any): Observable<any>{
      return this.http.post<any>(this.API_URL + "/questions/choices", body);
    }
    deleteChoice(choiceId: number): Observable<any>{
      return this.http.delete<any>(this.API_URL + "/choices/" + choiceId);
    }
}