import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { autoSubtypes } from '../../utils/auto-subtypes';
import { motorSubtypes } from '../../utils/motor-subtypes';
import { vehicleTypes } from '../../utils/vehicle-types';
import { KentekenCheck } from 'rdw-kenteken-check';
import { licensePlateValidator } from '../../utils/vehicle-information-form-validators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/state/app.state';

@Component({
  selector: 'app-vehicle-information-form',
  templateUrl: './vehicle-information-form.component.html',
  styleUrls: ['./vehicle-information-form.component.css'],
})
export class VehicleInformationFormComponent implements OnInit {
  vehicleInformationForm: FormGroup;
  vehicleTypes = vehicleTypes;
  autoSubtypes = autoSubtypes;
  motorSubtypes = motorSubtypes;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.vehicleInformationForm = this.fb.group({
      vehicleType: [this.vehicleTypes[0]],
      autoSubtype: [this.autoSubtypes[0]],
      motorSubtype: [null],
      licensePlate: [
        '',
        { validators: [licensePlateValidator], updateOn: 'blur' },
      ],
    });
  }

  ngOnInit(): void {
    this.onLicensePlateValueChanges();
    this.onVehicleTypeValueChanges();
  }

  onLicensePlateValueChanges() {
    this.vehicleInformationForm
      .get('licensePlate')
      ?.valueChanges.subscribe((value: string) => {
        if (value.trim().length === 6) {
          const kt = new KentekenCheck(value);
          this.vehicleInformationForm
            .get('licensePlate')
            ?.setValue(kt.formatLicense());
        }
      });
  }

  onVehicleTypeValueChanges() {
    this.vehicleInformationForm
      .get('vehicleType')
      ?.valueChanges.subscribe((value: string) => {
        this.store.dispatch({ type: value.toUpperCase() });
      });
  }

  getControlValue(control: string) {
    return this.vehicleInformationForm.get(control)?.value;
  }

  onSubmitForm() {
    if (this.vehicleInformationForm.invalid) return;

    console.log(this.vehicleInformationForm.value);
  }
}
