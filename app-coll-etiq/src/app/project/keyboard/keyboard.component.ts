import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  @Output() characterClicked = new EventEmitter<string>();

  ngOnInit(): void {
    const keyboardIcon = document.querySelector('.bi-keyboard') as HTMLElement;
    const customKeyboard = document.getElementById('keyboard') as HTMLElement;

    keyboardIcon.addEventListener('click', function() {
      customKeyboard.classList.toggle('active');
    });
  }

  insertChar(char: string): void {
    this.characterClicked.emit(char);
  }
}
