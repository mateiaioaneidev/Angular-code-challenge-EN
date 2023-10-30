import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInformationBannerComponent } from './vehicle-information-banner.component';

describe('VehicleInformationBannerComponent', () => {
  let component: VehicleInformationBannerComponent;
  let fixture: ComponentFixture<VehicleInformationBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleInformationBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleInformationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
