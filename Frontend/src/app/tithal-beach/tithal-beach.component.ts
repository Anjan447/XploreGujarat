import { Component } from '@angular/core';

@Component({
  selector: 'app-tithal-beach',
  templateUrl: './tithal-beach.component.html',
  styleUrls: ['./tithal-beach.component.css']
})
export class TithalBeachComponent {
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
