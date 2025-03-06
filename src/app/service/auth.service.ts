import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private apiUrl = 'http://localhost:8080'; // URL de votre backend

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: {
          Authorization: 'Basic ' + window.btoa(email + ':' + password)
      },
      responseType: 'text' as 'text',
  };
  return this.http.post(this.apiUrl+"/api/auth", null, httpOptions);
  }


  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn= false;
    this.router.navigate(['/authentification']); // Rediriger vers la page de login
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  setToken(token:string) : void {
    localStorage.setItem('token', token);
}

isUserInRole(roleFromRoute: string) {
  const roles = sessionStorage.getItem("app.roles");

  if (roles!.includes(",")) {
      if (roles === roleFromRoute) {
          return true;
      }
  } else {
      const roleArray = roles!.split(",");
      for (let role of roleArray) {
          if (role === roleFromRoute) {
              return true;
          }
      }
  }
  return false;
}

}