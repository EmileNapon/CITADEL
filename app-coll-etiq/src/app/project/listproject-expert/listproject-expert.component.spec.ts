import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprojectExpertComponent } from './listproject-expert.component';

describe('ListprojectExpertComponent', () => {
  let component: ListprojectExpertComponent;
  let fixture: ComponentFixture<ListprojectExpertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListprojectExpertComponent]
    });
    fixture = TestBed.createComponent(ListprojectExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
