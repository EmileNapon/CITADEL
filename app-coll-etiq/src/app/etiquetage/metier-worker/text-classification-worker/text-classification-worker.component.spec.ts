import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextClassificationWorkerComponent } from './text-classification-worker.component';

describe('TextClassificationWorkerComponent', () => {
  let component: TextClassificationWorkerComponent;
  let fixture: ComponentFixture<TextClassificationWorkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextClassificationWorkerComponent]
    });
    fixture = TestBed.createComponent(TextClassificationWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
