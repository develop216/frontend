import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../../service/publication.service';
import { Publication } from '../../model/publication';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-fil-actualite',
  templateUrl: './fil-actualite.component.html',
  styleUrls: ['./fil-actualite.component.css']
})
export class FilActualiteComponent implements OnInit {
  publications: Publication[] = [];

  constructor(private publicationService: PublicationService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadPublications();
  }

  loadPublications(): void {
    this.publicationService.getAllPublications().subscribe(
      (data: Publication[]) => {
        this.publications = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des publications', error);
      }
    );
  }

  togglePublication(publication: Publication): void {
    publication.isExpanded = !publication.isExpanded;
  }

logout(): void{
  this.authService.logout();
}

}