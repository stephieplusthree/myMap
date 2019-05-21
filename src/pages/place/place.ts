import { Component } from '@angular/core';
import { NavParams, ViewController } from '@ionic/angular';

import { Place } from '../../models/place';
import { PlaceService } from '../../providers/place-service';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html'
})
export class PlacePage {
  place: Place;
  index: number;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController,
              private placesService: PlaceService) {
    this.place = this.navParams.get('place');
    this.index = this.navParams.get('index');
  }

  onLeave() {
    this.viewCtrl.dismiss();
  }

  onDelete() {
    this.placesService.deletePlace(this.index);
    this.onLeave();
  }
}