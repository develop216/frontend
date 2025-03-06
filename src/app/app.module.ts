import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilActualiteComponent } from './component/fil-actualite/fil-actualite.component';
import { MenuComponent } from './component/menu/menu.component';
import { CompteComponent } from './component/compte/compte.component';
import { GroupesComponent } from './component/groupes/groupes.component';
import { ParametresComponent } from './component/parametres/parametres.component';
import { AjoutPublicationComponent } from './component/ajout-publication/ajout-publication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { AuthentificationComponent } from './component/authentification/authentification.component';
import { AuthService } from './service/auth.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { PresenceCalendarComponent } from './component/presence-calendar/presence-calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    FilActualiteComponent,
    AjoutPublicationComponent,
    MenuComponent,
    CompteComponent,
    GroupesComponent,
    ParametresComponent,
    AuthentificationComponent,
    PresenceCalendarComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
