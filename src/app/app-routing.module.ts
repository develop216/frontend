import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilActualiteComponent} from './component/fil-actualite/fil-actualite.component';
import { CompteComponent } from './component/compte/compte.component';
import { GroupesComponent } from './component/groupes/groupes.component';
import { ParametresComponent } from './component/parametres/parametres.component';
import { AjoutPublicationComponent } from './component/ajout-publication/ajout-publication.component';
import { AuthentificationComponent } from './component/authentification/authentification.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
 // {path: 'authentification', component: AuthentificationComponent},
  {path: 'fil-actualite', component: FilActualiteComponent, canActivate: [AuthGuard]},
  {path: 'ajout-publication', component: AjoutPublicationComponent, canActivate: [AuthGuard]},
  {path: 'compte', component: CompteComponent, canActivate: [AuthGuard]},
  {path: 'groupes', component: GroupesComponent, canActivate: [AuthGuard]},
  {path: 'parametres', component: ParametresComponent, canActivate: [AuthGuard]},
  {path: 'authentification', component: AuthentificationComponent},
  {path: '', redirectTo: '/fil-actualite', pathMatch: 'full'},
  {path: '**', redirectTo: '/fil-actualite'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
