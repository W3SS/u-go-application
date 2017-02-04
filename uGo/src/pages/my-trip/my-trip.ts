import { Component } from '@angular/core';
import { AddMyTripPage } from '../add-my-trip/add-my-trip';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-my-trip',
  templateUrl: 'my-trip.html'
})
export class MyTripPage {

  trips = [
    {
      name: 'Hua Hin',
      days: [1,2,3]
    }
  ]

  constructor(public navCtrl: NavController) {

  }

  openAddMyTrip() {
  	 this.navCtrl.push(AddMyTripPage);
  }
}
