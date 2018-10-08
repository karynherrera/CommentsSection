import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { AddCommentComponent } from './main/add-comment/add-comment.component';

import{FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ComentsComponent } from './coments/coments.component';
import { ComentarioComponent } from './main/comentario/comentario.component';

import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ComentsServiceService } from 'src/app/services/coments-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddCommentComponent,
    ComentsComponent,
    ComentarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
  ],
  providers: [AngularFirestore, ComentsServiceService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
