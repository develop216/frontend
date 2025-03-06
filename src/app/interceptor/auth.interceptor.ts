import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    // Récupérer l'utilisateur actuellement connecté
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);

    //Vérifier si l'utilisateur est connecté et possède un token
    if(currentUser && currentUser.token){
      //Cloner la requête et ajouter l'en-tête d'autorisation
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(req);
  }
}
