import { Component } from '@angular/core';

@Component({
  selector: 'app-royal-car-collection',
  templateUrl: './royal-car-collection.component.html',
  styleUrls: ['./royal-car-collection.component.css']
})
export class RoyalCarCollectionComponent {

  toAbout() {
    document.getElementById("aboutLocation")!.scrollIntoView();
  }
  toGetThere() {
    document.getElementById("getThere")!.scrollIntoView();
  }
  toNearby() {
    document.getElementById("nearbyDestinations")!.scrollIntoView();
  }
  toTop() {
    document.getElementById("top")!.scrollIntoView();
  }
}
