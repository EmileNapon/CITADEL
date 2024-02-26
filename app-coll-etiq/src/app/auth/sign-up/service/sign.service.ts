import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignService {

url='http://localhost:8000/';

  constructor(private http: HttpClient) { }
getMessage(){
  return this.http.get(this.url);
}

postMessage(data:any){
  return this.http.post(this.url, data);
}
}
