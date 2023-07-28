import { Component } from '@angular/core';

@Component({
  selector: 'app-shoolpaneshwar',
  templateUrl: './shoolpaneshwar.component.html',
  styleUrls: ['./shoolpaneshwar.component.css']
})
export class ShoolpaneshwarComponent {
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
