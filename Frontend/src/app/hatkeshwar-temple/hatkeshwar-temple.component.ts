import { Component } from '@angular/core';

@Component({
  selector: 'app-hatkeshwar-temple',
  templateUrl: './hatkeshwar-temple.component.html',
  styleUrls: ['./hatkeshwar-temple.component.css']
})
export class HatkeshwarTempleComponent {
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
