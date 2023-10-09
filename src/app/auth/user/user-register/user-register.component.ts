import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NotificationService } from '../../../notification.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent {

  constructor(private authService: AuthService, private router:Router, private notifyService:NotificationService) {}

  handleSubmit(register: {}) {
    this.authService.createNewUser(register).subscribe((data: any) => {
      if (data.success) {
        this.notifyService.showSuccess(data.success, "Success");
        this.router.navigate(['/login'])
      }
    }, (error) => {
      this.notifyService.showError(error.error.error, "Error");
    })
  }

}
