import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicFlightBagComponent } from './electronic-flight-bag.component';

describe('ElectronicFlightBagComponent', () => {
  let component: ElectronicFlightBagComponent;
  let fixture: ComponentFixture<ElectronicFlightBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicFlightBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicFlightBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
