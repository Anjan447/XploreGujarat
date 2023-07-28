import { Component } from '@angular/core';

@Component({
  selector: 'app-bhalka-tirth',
  templateUrl: './bhalka-tirth.component.html',
  styleUrls: ['./bhalka-tirth.component.css']
})
export class BhalkaTirthComponent {
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
