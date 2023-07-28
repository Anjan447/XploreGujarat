import { Component } from '@angular/core';

@Component({
  selector: 'app-jain-temple',
  templateUrl: './jain-temple.component.html',
  styleUrls: ['./jain-temple.component.css']
})
export class JainTempleComponent {
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
