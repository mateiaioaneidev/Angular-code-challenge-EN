import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { VehicleInformationModule } from './features/vehicle-information/vehicle-information.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { selectedVehicleTypeReducer } from './shared/state/reducers/vehicle-type.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      selectedVehicleType: selectedVehicleTypeReducer,
    }),
    AppRoutingModule,
    VehicleInformationModule,
    RouterModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
