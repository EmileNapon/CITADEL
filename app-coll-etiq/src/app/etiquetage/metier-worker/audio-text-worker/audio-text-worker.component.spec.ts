import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioTextWorkerComponent } from './audio-text-worker.component';

describe('AudioTextWorkerComponent', () => {
  let component: AudioTextWorkerComponent;
  let fixture: ComponentFixture<AudioTextWorkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioTextWorkerComponent]
    });
    fixture = TestBed.createComponent(AudioTextWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
