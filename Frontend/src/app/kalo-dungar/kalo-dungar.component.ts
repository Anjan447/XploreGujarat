import { Component } from '@angular/core';

@Component({
  selector: 'app-kalo-dungar',
  templateUrl: './kalo-dungar.component.html',
  styleUrls: ['./kalo-dungar.component.css']
})
export class KaloDungarComponent {
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
