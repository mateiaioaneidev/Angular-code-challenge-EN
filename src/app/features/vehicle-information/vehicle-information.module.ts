import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleInformationRoutingModule } from './vehicle-information-routing.module';
import { VehicleInformationPageComponent } from './components/vehicle-information-page/vehicle-information-page.component';
import { VehicleInformationFormComponent } from './components/vehicle-information-form/vehicle-information-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { VehicleInformationBannerComponent } from './components/vehicle-information-banner/vehicle-information-banner.component';

@NgModule({
  declarations: [
    VehicleInformationPageComponent,
    VehicleInformationFormComponent,
    VehicleInformationBannerComponent,
  ],
  imports: [
    CommonModule,
    VehicleInformationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
  ],
})
export class VehicleInformationModule {}
