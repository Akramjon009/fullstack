import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { CreatUser } from '../models/creat-user';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  baseUrl: string = 'https://localhost:7226/api/Users';

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
  Create(data: CreatUser): Observable<CreatUser>
  {
    return this.http.post<CreatUser>(this.baseUrl,data)
  }
}
