import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { KeyboardComponent } from '../keyboard/keyboard.component';
KeyboardComponent
@Component({
  selector: 'app-listproject-expert',
  templateUrl: './listproject-expert.component.html',
  styleUrls: ['./listproject-expert.component.css']
})
export class ListprojectExpertComponent {
  afficherTableau: boolean = false;
  dataSource = new MatTableDataSource<any>();
  dataSources = new MatTableDataSource<any>();
  dataRows: any[] = [];

  boutonDesactive = false;

  donnees: any;  // Définissez un champ pour stocker les données

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



  afficherDonneesEmployer() {
    this.http.get('http://127.0.0.1:8000/employe/getEmploye').subscribe(
      (data) => {
       
        this.dataSource.data = data as any[];
        this.dataRows = data as any[];
        this.dataRows.forEach(row => row.editMode = false);
        console.log('Données récupérées avec succès :', data);
        
      },
    );


  }


 


  





  toggleEditMode(row: any) {
    row.editMode = !row.editMode;
    
  }

  supprimerLigne(row: any) {
    const index = this.dataRows.indexOf(row);
    if (index >= 0) {
      this.dataRows.splice(index, 1);
      this.dataSource.data = this.dataRows; // Mettez à jour la source de données du tableau
      
    }
  }
  

  



  onCharacterClicked(char: string): void {
    const activeForm = this.dataRows[this.dataRows.length - 1];
    const mooreControl = activeForm.get('moore');
  
    if (mooreControl) {
      mooreControl.setValue(mooreControl.value + char);
    }
  }














  envoyerDonneesExpert() {
    // Supprimer la colonne 'date_saisie' et la propriété 'editMode' de chaque ligne
    const donneesSansDateSaisie = this.dataRows.map(row => {
      const { date_saisie, editMode, ...rest } = row;
      return rest;
    });
  
    console.log('Données à envoyer :', donneesSansDateSaisie);
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    this.http.post('http://127.0.0.1:8000/expert/postExpert', JSON.stringify(donneesSansDateSaisie), { headers }).subscribe(
      response => {
        console.log('Données envoyées avec succès', response);
        this.boutonDesactive = false; // Réactiver le bouton après l'envoi
      },
      error => {
        console.error('Erreur lors de l\'envoi des données', error);
      }
    );
  }
  
  toggleKeyboard() {
    const customKeyboard = document.getElementById('keyboard') as HTMLElement;
    customKeyboard.classList.toggle('active');
    console.log('ytdzfcguvhibjohpjokpjophiogiucgxfy')
  }
  
   



}
