import { Component } from '@angular/core';

@Component({
  selector: 'app-dumas-beach',
  templateUrl: './dumas-beach.component.html',
  styleUrls: ['./dumas-beach.component.css']
})
export class DumasBeachComponent {
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
