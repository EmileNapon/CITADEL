import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {HttpClient} from '@angular/common/http'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignService } from './service/sign.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  c1:any;
  form!:FormGroup


  constructor(private ser:SignService, private fb:FormBuilder,private http: HttpClient){

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      email: '',
      password:'',
      role:''
    });
  }

  submit(): void {
    const formData = this.form.getRawValue();

   // this.ser.postMessage(formData).subscribe(() => {
    //  this.getAllData();
    //});
    this.http.post('http://localhost:8000/',formData).subscribe(res => {console.log(res)});
    console.log(formData);
  }

  getAllData() {
    this.ser.getMessage().subscribe(data=>{
    this.c1=data, console.log(this.c1)
  });
  }

}
