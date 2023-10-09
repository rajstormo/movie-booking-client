import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private registerUrl = 'http://localhost:3000/api/auth/register';
  private loginUrl = 'http://localhost:3000/api/auth/login';

  userLoginInfo:any = {};
  constructor(private http:HttpClient) { }

  createNewUser(userData:{}) {
    return this.http.post(this.registerUrl, userData);
  }
  
  handleLogin(loginData:any) {
    return this.http.post(this.loginUrl, loginData);
  }
}
