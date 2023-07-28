import { Component } from '@angular/core';

@Component({
  selector: 'app-jambughoda',
  templateUrl: './jambughoda.component.html',
  styleUrls: ['./jambughoda.component.css']
})
export class JambughodaComponent {
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
