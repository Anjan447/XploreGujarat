import { Component } from '@angular/core';

@Component({
  selector: 'app-gir',
  templateUrl: './gir.component.html',
  styleUrls: ['./gir.component.css']
})
export class GirComponent {
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
