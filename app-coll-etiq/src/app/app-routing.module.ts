import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PresentationComponent } from './auth/presentation/presentation.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AcceuilComponent } from './auth/acceuil/acceuil.component';
import { ListDomainComponent } from './etiquetage/list-domain/list-domain.component';
import { EtiquetageComponent } from './etiquetage/etiquetage.component';
import { AudioClassificationWorkerComponent } from './etiquetage/metier-worker/audio-classification-worker/audio-classification-worker.component';
import { AudioTextWorkerComponent } from './etiquetage/metier-worker/audio-text-worker/audio-text-worker.component';
import { TextClassificationWorkerComponent } from './etiquetage/metier-worker/text-classification-worker/text-classification-worker.component';
import { TextTextWorkerComponent } from './etiquetage/metier-worker/text-text-worker/text-text-worker.component';
import { ProjectComponent } from './project/project.component';
import { AudioClassificationComponent } from './project/worker-project/audio-classification/audio-classification.component';
import { AudioTextComponent } from './project/worker-project/audio-text/audio-text.component';
import { TextClassificationComponent } from './project/worker-project/text-classification/text-classification.component';
import { TextTextComponent } from './project/worker-project/text-text/text-text.component';
import { FormulairesTextTextComponent } from './project/formulaires-text-text/formulaires-text-text.component';
import { FormulairesAudioTextComponent } from './project/formulaires-audio-text/formulaires-audio-text.component';
import { ListprojectExpertComponent } from './project/listproject-expert/listproject-expert.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { DataComponent } from './data/data.component';
import { TextToTextComponent } from './data/text-to-text/text-to-text.component';
import { ListComponent } from './data/list/list.component';

const routes: Routes = [
  {path:'',component:PresentationComponent},
  {path:'auth',component:AuthComponent,children:[
    {path:'presentation', component:PresentationComponent},
    {path:'login', component:LoginComponent},
    {path:'sign', component:SignUpComponent},
    {path:'acceuil', component:AcceuilComponent},]},



    {path:'data',component:DataComponent,children:[
      {path:'text-to-text', component:TextToTextComponent},
      {path:'list', component:ListComponent},]},
  
      {path:'datasets',component:DatasetsComponent},

  {path:'etiquetage',component:EtiquetageComponent,children:[
    {path:'list-domain', component:ListDomainComponent},
      {path:'audio-classification-worker', component:AudioClassificationWorkerComponent},
      {path:'audio-text-worker', component:AudioTextWorkerComponent},
      {path:'text-classification-worker', component:TextClassificationWorkerComponent},
      {path:'text-text-worker', component:TextTextWorkerComponent}]},
    {path:'project',component:ProjectComponent,children:[
      {path:'audio-classification', component:AudioClassificationComponent},
      {path:'listProjetExpert', component:ListprojectExpertComponent},
      {path:'audio-text', component:AudioTextComponent},
      {path:'text-classification', component:TextClassificationComponent},
      {path:'text-text', component:TextTextComponent},
      {path:'formulaires-text-text', component:FormulairesTextTextComponent},
      {path:'formulaires-audio-text', component:FormulairesAudioTextComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
