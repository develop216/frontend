import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
menuItems = [
  {name : 'Fil d\'Actualité', path: '/fil-actualite'},
  {name : 'Ajouter une publication', path: '/ajout-publication'},
  {name : 'Compte Personnel', path : '/compte'},
  {name : 'Abonnements', path : '/groupes'},
  {name : 'Paramètres', path: '/paramètres'},
  {name : 'logout', path: '/logout'}
];

isMenuOpen = false; // État du menu
isUserConnected = false; // État de connexion de l'utilisateur

constructor(private authService: AuthService) { }

ngOnInit(): void {
  this.isUserConnected = this.authService.isLoggedIn(); // Vérifiez si l'utilisateur est connecté
}

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen; // Inverser l'état du menu
}
}
