import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation/presentation.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    PresentationComponent,AuthComponent, LoginComponent, SignUpComponent, AcceuilComponent, 

  ],
  imports: [
    CommonModule,
    RouterModule,FormsModule,ReactiveFormsModule,HttpClientModule
    
  ]
})
export class AuthModule { }
