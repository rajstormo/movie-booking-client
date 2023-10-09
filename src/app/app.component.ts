import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-booking-client';
  
  
  constructor(private authService: AuthService, private http: HttpClient) {}

  checkUserLoginStatus() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
      })
    };

    this.http.get('http://localhost:3000/api/login-status', httpOptions).subscribe((data:any) => {
      console.log(data);
      this.authService.userLoginInfo = data.user;
    })
  }

  ngOnInit():void {
    this.checkUserLoginStatus();
  }
}
