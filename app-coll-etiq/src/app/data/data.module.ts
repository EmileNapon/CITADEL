import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data.component';
import { TextToTextComponent } from './text-to-text/text-to-text.component';




import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {  HttpClientModule } from '@angular/common/http';


import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ListComponent } from './list/list.component';




@NgModule({
  declarations: [
    DataComponent,
    TextToTextComponent,
    ListComponent
  ],
  imports: [
    CommonModule,  CommonModule,RouterModule,FormsModule, ReactiveFormsModule, HttpClientModule, MatTableModule, MatSortModule
  ]
})
export class DataModule { }
