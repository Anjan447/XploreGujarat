import { Component } from '@angular/core';

@Component({
  selector: 'app-mitiyala',
  templateUrl: './mitiyala.component.html',
  styleUrls: ['./mitiyala.component.css']
})
export class MitiyalaComponent {
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
