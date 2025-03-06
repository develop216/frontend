import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UtilisateurDTO {
  id: number;
  prenom: string;
  nom: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:8080/api/utilisateur';

  constructor(private http: HttpClient) {}

  getUtilisateurById(id: number): Observable<UtilisateurDTO> {
    return this.http.get<UtilisateurDTO>(`${this.apiUrl}/${id}`);
  }

  login(loginRequest: { email: string, password: string }): Observable<UtilisateurDTO> {
    return this.http.post<UtilisateurDTO>(`${this.apiUrl}/login`, loginRequest);
  }
}