import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Publication } from 'src/app/model/publication';
import { HttpClient } from '@angular/common/http';
import { PublicationService } from 'src/app/service/publication.service';
import { Utilisateur } from 'src/app/model/utilisateur';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ajout-publication',
  templateUrl: './ajout-publication.component.html',
  styleUrls: ['./ajout-publication.component.css']
})
export class AjoutPublicationComponent implements OnInit{
  publicationForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });
  selectedImage: File | undefined;
  publication: Publication = new Publication;
  arraydata: Publication[] = [];


constructor(private formBuilder: FormBuilder, private publicationService: PublicationService){
  this.publicationForm = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    selectedImage: [null]
  });
}

ngOnInit(): void {
}

onImageSelected(event: Event) {
  const fileInput = event.target as HTMLInputElement;
  if (fileInput.files) {
    this.selectedImage = fileInput.files[0];
  }
}

onSubmit() {
  if (this.publicationForm.valid) {
    this.publication.contenu = this.publicationForm.value.content;
    this.publication.titre = this.publicationForm.value.title;
    this.publication.utilisateur = new Utilisateur();
    this.publication.utilisateur = { id: 1 };
    this.publication.dateCreation = new Date();
    this.publication.dateMaj = new Date();
    
    //this.arraydata.push(this.publication);
    this.publicationService.addPublication(this.publication).subscribe(
      (response) => {
        console.log('Article ajouté avec succès:', response);
        this.publicationForm.reset();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la publication:', error);
      }
    );
    console.log('Article soumis:', this.publication);
    this.publicationForm.reset();
  } else {
    console.log("erreur lors de la validation")
  }
}


}