import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  constructor(public authService: AuthService) {
    let user: any = sessionStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      this.authService.isLoggedIn = true;
      this.authService.user = user;
    }
    console.log(this.authService.user, this.authService.isLoggedIn);
  }
}
