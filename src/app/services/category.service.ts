import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addCategory(categoryData: { name: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/category/add`, categoryData);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/category`);
  }
}
