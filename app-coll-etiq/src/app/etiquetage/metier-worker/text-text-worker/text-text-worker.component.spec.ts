import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTextWorkerComponent } from './text-text-worker.component';

describe('TextTextWorkerComponent', () => {
  let component: TextTextWorkerComponent;
  let fixture: ComponentFixture<TextTextWorkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextTextWorkerComponent]
    });
    fixture = TestBed.createComponent(TextTextWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
