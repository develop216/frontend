import { Utilisateur } from "./utilisateur";

export class Publication {
    id!: number; // Utilisé pour l'identifiant de la publication
    titre!: string; //titre de la publication
    contenu!: string; // Contenu de la publication
    dateCreation!: Date; // Date de création
    dateMaj!:Date;
    utilisateur!: Utilisateur;  // Id de l'utilisateur qui a créé la publication  
    username?: string; // Username
    isExpanded?: boolean;


   
   
}
