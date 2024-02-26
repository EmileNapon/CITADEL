import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetageComponent } from './etiquetage.component';

describe('EtiquetageComponent', () => {
  let component: EtiquetageComponent;
  let fixture: ComponentFixture<EtiquetageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtiquetageComponent]
    });
    fixture = TestBed.createComponent(EtiquetageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
