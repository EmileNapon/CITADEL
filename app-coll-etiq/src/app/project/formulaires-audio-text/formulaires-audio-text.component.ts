import { Component, OnInit } from '@angular/core';


import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import { FormBuilder, FormGroup, Validators,FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-formulaires-audio-text',
  templateUrl: './formulaires-audio-text.component.html',
  styleUrls: ['./formulaires-audio-text.component.css']
})
export class FormulairesAudioTextComponent {

 
  dataSource = new MatTableDataSource<any>();
  formulaireModification!: FormGroup; // Ajoutez cette ligne
  
  
  donnees: any;  // Définissez un champ pour stocker les 
  myForms: FormGroup[] = [];
  valeurs: any[] = [];
  //afficherTableau :boolean =false;
  
  
  //afficherIconeClavier: boolean[] = [];
  afficherIconeClavier : boolean[]=[true];
  afficherIconemicro : boolean[]=[true];
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private domSanitizer: DomSanitizer) {
    this.addForm(); // Ajouter un premier formulaire



    
  }

  addForm() {
    const formGroup = this.formBuilder.group({
      french: ['', [Validators.required, this.validateWordCount]],
      moore: ['', [Validators.required, this.validateWordCount]],
      audioUrl: ['']
    });
    this.myForms.push(formGroup);
    
    if (this.afficherIconeClavier.length > 0) {
      
      
      this.afficherIconeClavier[this.afficherIconeClavier.length-1]=true ;
      this.afficherIconemicro[this.afficherIconemicro.length-1]=true ;
      this.afficherIconeClavier.length++;
      this.afficherIconemicro.length++ ;
    }
   for(var i=1;i<this.afficherIconeClavier.length-2; i++){
    this.afficherIconeClavier[i]=false ;
    this.afficherIconemicro[i]=false;
   }
   if(this.afficherIconeClavier.length-2>=1){
    this.afficherIconeClavier[0]=false;
    this.afficherIconemicro[0]=false;
   }

    
  }
  
  validateWordCount(control: AbstractControl): ValidationErrors | null {
    const text = control.value;

    if (text === null || text === undefined) {
        return null; // Si le texte est null ou non défini, la validation est ignorée.
    }

    const wordCount = text.trim().split(/\s+/).length;

    if (wordCount > 5) {
        return { wordCountExceeded: true };
    }

    return null;
}

submitAllForms() {
  for (const formGroup of this.myForms) {
    if (formGroup.valid) {
      const index = this.myForms.indexOf(formGroup);
      const formData = formGroup.value;

      if (this.audioEnregistrements[index]?.url) {
        formData.url = this.audioEnregistrements[index].url;
      }

      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      this.http.post('http://127.0.0.1:8000/employe/postEmploye', formData, { headers }).subscribe(
        response => {
          console.log('Données envoyées avec succès', response);
          formGroup.reset();
        },
        error => {
          console.error('Erreur lors de l\'envoi des données : ', error);
        }
      );
    }
  }
}




  ajouterFormulaire() {
    
    if (this.myForms[this.myForms.length - 1].valid) {
      this.addForm(); // Ajouter un nouveau formulaire seulement si le dernier est valide

       
    }
   
  }

  formulaireValide(index: number) {
    return this.myForms[index].valid;
  }

  validerTousLesFormulaires() {
    let allValid = true;
    for (const formGroup of this.myForms) {
      if (!formGroup.valid) {
        allValid = false;
        break;
      }
      
    }
    return allValid;
  }
  

  afficherDonnees() { 
     
    this.http.get('http://127.0.0.1:8000/employe/getEmploye').subscribe(
    (data) => {
      this.dataSource.data = data as any[];
      console.log('Données récupérées avec succès :', data);
    },
    
    );
   // this.afficherTableau=true;
    
} 



  
  onCharacterClicked(char: string): void {
    const activeForm = this.myForms[this.myForms.length - 1];
    const mooreControl = activeForm.get('moore');
  
    if (mooreControl) {
      mooreControl.setValue(mooreControl.value + char);
    }
  }
  

  















// Définissez un tableau pour stocker les enregistrements audio
audioEnregistrements: { recording: boolean, recordRTC: any, url: any }[] = [];

startRecording(index: number) {
  let mediaConstraints = {
    video: false,
    audio: true
  };
  
  navigator.mediaDevices
    .getUserMedia(mediaConstraints)
    .then((stream) => {
      var options = {};
      var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
      let recorderInstance = new StereoAudioRecorder(stream, options);

      console.log('Recorder instance:', recorderInstance);

      this.audioEnregistrements[index] = { recording: true, recordRTC: recorderInstance, url: null };
      this.audioEnregistrements[index].recordRTC.record();
    })
    .catch((error) => {
      console.error('Erreur lors de l\'accès au microphone : ', error);
    });
}

//...

stopRecording(index: number) {
  if (this.audioEnregistrements[index]?.recording) {
    this.audioEnregistrements[index].recording = false;
    this.audioEnregistrements[index].recordRTC.stop((blob: Blob) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const audioArrayBuffer = reader.result as ArrayBuffer;
        const audioBlob = new Blob([audioArrayBuffer], { type: 'audio/wav' });
        this.audioEnregistrements[index].url = URL.createObjectURL(audioBlob);
      };
      reader.readAsArrayBuffer(blob);
      console.log('Recorder instance:', this.audioEnregistrements[index].recordRTC);
    });
  }
}



// Fonction pour écouter l'audio pour un formulaire spécifique
playAudio(index: number) {
  const audio = new Audio(this.audioEnregistrements[index]?.url);
  audio.play();
  
}








  
  

  toggleKeyboard() {
    const customKeyboard = document.getElementById('keyboard') as HTMLElement;
    customKeyboard.classList.toggle('active');
  }
  
 


}
