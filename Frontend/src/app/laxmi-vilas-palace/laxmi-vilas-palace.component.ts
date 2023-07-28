import { Component } from '@angular/core';

@Component({
  selector: 'app-laxmi-vilas-palace',
  templateUrl: './laxmi-vilas-palace.component.html',
  styleUrls: ['./laxmi-vilas-palace.component.css']
})
export class LaxmiVilasPalaceComponent {
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
