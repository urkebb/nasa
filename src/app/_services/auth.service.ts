import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn!: boolean;
  user!: User | null;

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post<User>(
      `https://jsonplaceholder.typicode.com/users`,
      data
    );
  }
}
