import { Component } from '@angular/core';

@Component({
  selector: 'app-great-rann-of-kutch',
  templateUrl: './great-rann-of-kutch.component.html',
  styleUrls: ['./great-rann-of-kutch.component.css']
})
export class GreatRannOfKutchComponent {
  toAbout() {
    document.getElementById("aboutLocation")!.scrollIntoView();
  }
  toGetThere() {
    document.getElementById("getThere")!.scrollIntoView();
  }
  toNearby() {
    document.getElementById("nearbyDestinations")!.scrollIntoView();
  }
}
