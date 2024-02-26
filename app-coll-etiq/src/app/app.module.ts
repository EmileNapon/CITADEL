import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { EtiquetageModule } from './etiquetage/etiquetage.module';
import { ProjectModule } from './project/project.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DatasetsModule } from './datasets/datasets.module';
import { DataModule } from './data/data.module';





@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule,AuthModule,EtiquetageModule,ProjectModule, FormsModule,CommonModule, HttpClientModule,ReactiveFormsModule, BrowserAnimationsModule,MatTableModule,MatSortModule, DatasetsModule ,DataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
