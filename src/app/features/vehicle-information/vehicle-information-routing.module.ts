import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleInformationPageComponent } from './components/vehicle-information-page/vehicle-information-page.component';

const routes: Routes = [
  { path: '', component: VehicleInformationPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleInformationRoutingModule {}
