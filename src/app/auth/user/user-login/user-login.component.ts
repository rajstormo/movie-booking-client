import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NotificationService } from '../../../notification.service';
import { RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent {
  
  constructor(private authService: AuthService, private notifyService:NotificationService, private router:Router) {}

  handleLoginData(loginData:any) {
    this.authService.handleLogin(loginData).subscribe((data:any) => {
      localStorage.setItem("token", JSON.stringify(data.accessToken));
      this.authService.userLoginInfo = data.user;
      this.notifyService.showSuccess("","Login Successfull");
      this.router.navigate(["/movies"]);
    }, (error) => { 
      this.notifyService.showError(error.error.error,"");
    })
  };

}
