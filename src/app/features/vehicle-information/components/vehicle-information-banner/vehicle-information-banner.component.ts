import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/state/app.state';

@Component({
  selector: 'app-vehicle-information-banner',
  templateUrl: './vehicle-information-banner.component.html',
  styleUrls: ['./vehicle-information-banner.component.css'],
})
export class VehicleInformationBannerComponent implements OnInit {
  selectedVehicleType$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.selectedVehicleType$ = this.store.select('selectedVehicleType');
    this.selectedVehicleType$.subscribe((value) => console.log(value));
  }

  ngOnInit(): void {}
}
