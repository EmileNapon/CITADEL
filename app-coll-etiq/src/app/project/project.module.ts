import { NgModule } from '@angular/core';
import { AudioClassificationComponent } from './worker-project/audio-classification/audio-classification.component';
import { TextClassificationComponent } from './worker-project/text-classification/text-classification.component';
import { TextTextComponent } from './worker-project/text-text/text-text.component';
import { AudioTextComponent } from './worker-project/audio-text/audio-text.component';
import { ProjectComponent } from './project.component';
import { RouterModule } from '@angular/router';
import { FormulairesTextTextComponent } from './formulaires-text-text/formulaires-text-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormulairesAudioTextComponent } from './formulaires-audio-text/formulaires-audio-text.component';
import {  HttpClientModule } from '@angular/common/http';


import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ListprojectExpertComponent } from './listproject-expert/listproject-expert.component';
import { KeyboardComponent } from './keyboard/keyboard.component';



@NgModule({
  declarations: [

    AudioClassificationComponent,
    TextClassificationComponent,
    TextTextComponent,
    AudioTextComponent,
    ProjectComponent,
    FormulairesTextTextComponent,
    FormulairesAudioTextComponent,

    ListprojectExpertComponent,
    KeyboardComponent
  ],
  imports: [
    CommonModule, RouterModule,FormsModule,ReactiveFormsModule,HttpClientModule,MatTableModule,MatSortModule

  ]
})
export class ProjectModule { }
