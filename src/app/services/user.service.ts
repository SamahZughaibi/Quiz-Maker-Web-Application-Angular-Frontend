import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
 
@Injectable({
  providedIn: "root",
})
export class UserService{
    private readonly API_URL = "http://localhost:8080/api";

    constructor(private http: HttpClient) {}

    getAllUsers(): Observable<any> {
        return this.http.get<any>(this.API_URL + "/users").pipe(
            catchError(error => {
              console.error('Error fetching users:', error);
              return of([]);
            })
          );
    }
    postUser(body: any): Observable<any>{
      return this.http.post<any>(this.API_URL + "/users", body);
    }
}