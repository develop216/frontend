import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilisateurDTO } from '../model/utilisateur-dto';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:8080/api/utilisateur'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) { }

  // Récupérer un utilisateur par son ID (Exemple)
  getUtilisateurById(id: number): Observable<UtilisateurDTO> {
    return this.http.get<UtilisateurDTO>(`${this.apiUrl}/${id}`);
  }

  //  Si ton backend a un endpoint pour récupérer les informations de l'utilisateur courant
  getUtilisateurCourant(): Observable<UtilisateurDTO> {
    return this.http.get<UtilisateurDTO>(`${this.apiUrl}/me`); // Remplacez '/me' par le bon endpoint
  }
}
