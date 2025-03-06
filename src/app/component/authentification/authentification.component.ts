import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router'; // Importez le Router
import { jwtDecode, JwtPayload } from 'jwt-decode';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null; // Pour afficher les erreurs
  

  constructor(private authService: AuthService, private router: Router) {
    this.email = '';
    this.password = '';
  }


  onLogin() {
    sessionStorage.removeItem("app.token");
    this.authService.login(this.email, this.password)
    .subscribe({
      next: (response) => {
        if(response && response.token){
        sessionStorage.setItem("app.token", response.token);

        const decodedToken = jwtDecode<JwtPayload>(response.token);
        // @ts-ignore
        sessionStorage.setItem("app.roles",  decodedToken.scope);

        this.router.navigateByUrl("/fil-actualite");
    }
    else {
      this.errorMessage = 'Login or password incorrect';
    }
  },
    error: (error) => {
      console.error(`Erreur lors de l'authentification ${error.status}`, error);
      this.errorMessage = 'Login failed. Please check your credentials';
    } 
  });
  }

}
