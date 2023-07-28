import { Component } from '@angular/core';

@Component({
  selector: 'app-nirona',
  templateUrl: './nirona.component.html',
  styleUrls: ['./nirona.component.css']
})
export class NironaComponent {
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
