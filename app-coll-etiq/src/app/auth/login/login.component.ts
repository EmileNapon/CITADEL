
import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!:FormGroup
 
  

  constructor(private fb: FormBuilder, private router: Router, private http:HttpClient){}
  
  
   ngOnInit(): void {
      this.form = this.fb.group({
        name: '',
        email: '',
        password: ''
    });
     
   }
   submit(): void {
    this.http.post('http://localhost:8000/api/reg', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/login']));
  }

}
