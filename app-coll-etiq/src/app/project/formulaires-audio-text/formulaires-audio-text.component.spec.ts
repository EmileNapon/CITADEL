import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairesAudioTextComponent } from './formulaires-audio-text.component';

describe('FormulairesAudioTextComponent', () => {
  let component: FormulairesAudioTextComponent;
  let fixture: ComponentFixture<FormulairesAudioTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulairesAudioTextComponent]
    });
    fixture = TestBed.createComponent(FormulairesAudioTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
