import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {  HttpClientModule } from '@angular/common/http';


import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DatasetsComponent } from './datasets.component';




@NgModule({
  declarations: [

    DatasetsComponent,
    
  ],
  imports: [
    CommonModule,RouterModule,FormsModule, ReactiveFormsModule, HttpClientModule, MatTableModule, MatSortModule
  ]
})
export class DatasetsModule { }
