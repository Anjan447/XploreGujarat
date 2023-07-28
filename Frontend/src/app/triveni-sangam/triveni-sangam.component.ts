import { Component } from '@angular/core';

@Component({
  selector: 'app-triveni-sangam',
  templateUrl: './triveni-sangam.component.html',
  styleUrls: ['./triveni-sangam.component.css']
})
export class TriveniSangamComponent {
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
