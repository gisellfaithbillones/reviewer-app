import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewerService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createReviewerSession(formData: FormData): Observable<any> {
    return this.http.post(`$this.apiUrl/reviewers/content`, formData);
  }

  getReviewerByUserId(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/reviewers/${userId}`);
  }
}

