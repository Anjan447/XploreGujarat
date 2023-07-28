import { Component } from '@angular/core';

@Component({
  selector: 'app-ranchodrai-temple',
  templateUrl: './ranchodrai-temple.component.html',
  styleUrls: ['./ranchodrai-temple.component.css']
})
export class RanchodraiTempleComponent {
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
