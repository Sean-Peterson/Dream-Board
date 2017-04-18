import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AuthService, private router:Router) { this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          this.router.navigate(['']);
        }
      }
    );
  }


  login() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    })
  }

  logout() {
      this.authService.logout();
      this.router.navigate(['login']);
    }

}
