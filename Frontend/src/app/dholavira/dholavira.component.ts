import { Component } from '@angular/core';

@Component({
  selector: 'app-dholavira',
  templateUrl: './dholavira.component.html',
  styleUrls: ['./dholavira.component.css']
})
export class DholaviraComponent {
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
