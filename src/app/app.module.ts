import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { AddCommentComponent } from './main/add-comment/add-comment.component';

import{FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ComentsComponent } from './coments/coments.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddCommentComponent,
    ComentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
