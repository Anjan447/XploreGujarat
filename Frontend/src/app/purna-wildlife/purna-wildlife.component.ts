import { Component } from '@angular/core';

@Component({
  selector: 'app-purna-wildlife',
  templateUrl: './purna-wildlife.component.html',
  styleUrls: ['./purna-wildlife.component.css']
})
export class PurnaWildlifeComponent {
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
