import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioClassificationWorkerComponent } from './audio-classification-worker.component';

describe('AudioClassificationWorkerComponent', () => {
  let component: AudioClassificationWorkerComponent;
  let fixture: ComponentFixture<AudioClassificationWorkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioClassificationWorkerComponent]
    });
    fixture = TestBed.createComponent(AudioClassificationWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
