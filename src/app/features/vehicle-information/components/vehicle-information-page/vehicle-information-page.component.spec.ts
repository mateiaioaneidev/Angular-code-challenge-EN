import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInformationPageComponent } from './vehicle-information-page.component';

describe('VehicleInformationPageComponent', () => {
  let component: VehicleInformationPageComponent;
  let fixture: ComponentFixture<VehicleInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleInformationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
