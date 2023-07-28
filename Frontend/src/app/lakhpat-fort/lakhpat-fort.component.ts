import { Component } from '@angular/core';

@Component({
  selector: 'app-lakhpat-fort',
  templateUrl: './lakhpat-fort.component.html',
  styleUrls: ['./lakhpat-fort.component.css']
})
export class LakhpatFortComponent {
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
