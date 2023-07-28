import { Component } from '@angular/core';

@Component({
  selector: 'app-rani-ki-vav',
  templateUrl: './rani-ki-vav.component.html',
  styleUrls: ['./rani-ki-vav.component.css']
})
export class RaniKiVavComponent {
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
