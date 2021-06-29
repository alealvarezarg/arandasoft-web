import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginModel } from '../model/login-model';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public activeLogin: User;

  constructor(private http: HttpClient) { }

  loginByCredentials(credentials: LoginModel) {
    let loginUrl = environment.loginUrl;
    return this.http.post<User>(loginUrl, credentials);
  }
}
