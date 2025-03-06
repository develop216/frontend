import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, map, Observable, of, switchMap, throwError } from 'rxjs';
import { Publication } from '../model/publication'; // Assurez-vous de créer ce modèle.
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private apiUrl = 'http://localhost:8080/api/publications'; // URL de votre backend

  constructor(private http: HttpClient) { }

  getAllPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.apiUrl).pipe(
        map((publications: Publication[]) => {
            return publications.map(pub => {
                // Vérifiez si utilisateur est présent dans la publication
                if (pub.utilisateur) {
                    pub.username = `${pub.utilisateur.prenom} ${pub.utilisateur.nom}`; // Construire le nom d'utilisateur
                } else {
                    pub.username = 'Anonyme'; // Valeur par défaut s'il n'y a pas d'utilisateur
                }
                pub.isExpanded = false;
                return pub;
            });
        }),
        catchError(error => {
            console.error('Erreur lors de la récupération des publications:', error);
            return of([]); // Renvoie un tableau vide en cas d'erreur
        })
    );
}

 // Exemple de la méthode pushPublication - à adapter selon vos besoins
 pushPublication(publication: Publication): Observable<Publication> {
  console.log("pushpublication");
  // Ajoutez votre logique de mise à jour, si nécessaire
  return this.http.put<Publication>(this.apiUrl, publication).pipe(catchError(error => {
    console.error('Erreur lors de l\'ajout de la publication:', error);
    // Propager l'erreur
    return throwError(() => new Error('Erreur lors de l\'ajout de la publication'));
  }));
}

  // Méthode pour ajouter une publication
  addPublication(publication: Publication): Observable<Publication> {
    console.log("url : " + this.apiUrl);
    return this.http.post<Publication>(this.apiUrl, publication).pipe(
      catchError(error => {
        console.error('Erreur lors de l\'ajout de la publication:', error);
        // Propager l'erreur
        return throwError(() => new Error('Erreur lors de l\'ajout de la publication'));
      })
    );
  }
}

function switchmap(arg0: (publications: Publication[]) => Observable<{ username: string; id: number; titre: string; contenu: string; dateCreation: Date; utilisateurId: number; }[]>): import("rxjs").OperatorFunction<Publication[], Publication[]> {
  throw new Error('Function not implemented.');
}
