import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';
import { AddPlacePage } from '../add-place/add-place.page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  addPlacePage = AddPlacePage;

  constructor(public navCtrl: NavController) {
  }
}