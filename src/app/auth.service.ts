import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  signUp(username: string, password: string, email: string, confirmPassword: string): Observable<any> {
    const body = { username, password, email, confirmPassword};
    return this.http.post(`${this.apiUrl}/auth/signup`, body);
  }
}
