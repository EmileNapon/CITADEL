import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDomainComponent } from './list-domain/list-domain.component';
import { EtiquetageComponent } from './etiquetage.component';
import { RouterModule } from '@angular/router';
import { AudioTextWorkerComponent } from './metier-worker/audio-text-worker/audio-text-worker.component';
import { TextTextWorkerComponent } from './metier-worker/text-text-worker/text-text-worker.component';
import { AudioClassificationWorkerComponent } from './metier-worker/audio-classification-worker/audio-classification-worker.component';
import { TextClassificationWorkerComponent } from './metier-worker/text-classification-worker/text-classification-worker.component';




@NgModule({
  declarations: [
    ListDomainComponent,
    EtiquetageComponent,
    AudioTextWorkerComponent,
    TextTextWorkerComponent,
    AudioClassificationWorkerComponent,
    TextClassificationWorkerComponent,
    
  ],
  imports: [
    CommonModule, RouterModule
  ]
})
export class EtiquetageModule { }
