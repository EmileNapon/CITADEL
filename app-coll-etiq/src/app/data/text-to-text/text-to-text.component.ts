import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-to-text',
  templateUrl: './text-to-text.component.html',
  styleUrls: ['./text-to-text.component.css']
})
export class TextToTextComponent {



  afficherTableau: boolean = false;
  dataSources = new MatTableDataSource<any>();
 

  boutonDesactive = false;

  constructor(private http: HttpClient, private fb : FormBuilder) {


  }

  DonneesExpert() {  
    this.afficherTableau = true; 
    this.http.get('http://127.0.0.1:8000/expert/getExpert').subscribe(
    (data) => {
      this.dataSources.data = data as any[];
      console.log('Données récupérées avec succès :', data);
    },
      
    );

}

exportToCSV() {
  const data: any[] = this.dataSources.data;

  const csvContent = "data:text/csv;charset=utf-8," +
    data.map((row: any) => `${row.french},${row.moore}`).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "donnees.csv");
  document.body.appendChild(link);

  link.click();
}

}
