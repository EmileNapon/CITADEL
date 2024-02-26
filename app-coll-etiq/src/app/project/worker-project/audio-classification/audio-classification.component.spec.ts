import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioClassificationComponent } from './audio-classification.component';

describe('AudioClassificationComponent', () => {
  let component: AudioClassificationComponent;
  let fixture: ComponentFixture<AudioClassificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioClassificationComponent]
    });
    fixture = TestBed.createComponent(AudioClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
