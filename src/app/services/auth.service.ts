import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string, passwordConfirmation: string, phoneNumber: string): Observable<any> {
    const body = { email, password, passwordConfirmation, phoneNumber};
    return this.http.post(`${this.apiUrl}/users/sign-up`, body);
  }

  signIn(identifier: string, password: string): Observable<any> {
    const body = { identifier, password};
    return this.http.post(`${this.apiUrl}/auth/sign-in`, body);
  }

  getLoggedInUserDetails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth`);
  }
}
