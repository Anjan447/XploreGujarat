import { Component } from '@angular/core';

@Component({
  selector: 'app-kirti-toran',
  templateUrl: './kirti-toran.component.html',
  styleUrls: ['./kirti-toran.component.css']
})
export class KirtiToranComponent {
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
