import { Component } from '@angular/core';

@Component({
  selector: 'app-nargol-beach',
  templateUrl: './nargol-beach.component.html',
  styleUrls: ['./nargol-beach.component.css']
})
export class NargolBeachComponent {
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
