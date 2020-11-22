import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftSelectionComponent } from './aircraft-selection.component';

describe('AircraftSelectionComponent', () => {
  let component: AircraftSelectionComponent;
  let fixture: ComponentFixture<AircraftSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AircraftSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
