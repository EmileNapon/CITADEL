import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairesTextTextComponent } from './formulaires-text-text.component';

describe('FormulairesTextTextComponent', () => {
  let component: FormulairesTextTextComponent;
  let fixture: ComponentFixture<FormulairesTextTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulairesTextTextComponent]
    });
    fixture = TestBed.createComponent(FormulairesTextTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
