import { Action } from '@ngrx/store';

export function selectedVehicleTypeReducer(
  state: string = './assets/auto.jpg',
  action: Action
) {
  switch (action.type) {
    case 'AUTO':
      return (state = './assets/auto.jpg');
    case 'MOTOR':
      return (state = './assets/motor.jpg');
    case 'SCOOTER':
      return (state = './assets/scooter.jpg');
    default:
      return state;
  }
}
