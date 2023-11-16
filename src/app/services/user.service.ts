import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
 
@Injectable({
  providedIn: "root",
})
export class UserService{
    private readonly API_URL = "http://localhost:8080/api";

    constructor(private http: HttpClient) {}

    getAllUsers(): Observable<any> {
        return this.http.get<any>(this.API_URL + "/users");
    }
}