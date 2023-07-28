import { Component } from '@angular/core';

@Component({
  selector: 'app-don-hill-station',
  templateUrl: './don-hill-station.component.html',
  styleUrls: ['./don-hill-station.component.css']
})
export class DonHillStationComponent {
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
