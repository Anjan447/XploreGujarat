import { Component } from '@angular/core';

@Component({
  selector: 'app-sun-temple',
  templateUrl: './sun-temple.component.html',
  styleUrls: ['./sun-temple.component.css']
})
export class SunTempleComponent {
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
