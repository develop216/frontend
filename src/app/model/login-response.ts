import { UtilisateurDTO } from "./utilisateur-dto";

export interface LoginResponse {

    token: string;
    // Ajoutez d'autres champs renvoyés par le backend, par exemple:
    utilisateur?: UtilisateurDTO; // Si le backend renvoie les infos de l'utilisateur
    //  userId?: number;  //  Si le backend renvoie l'id
    //  username?: string; // Si le backend renvoie le nom de l'utilisateur
}
