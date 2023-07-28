import { Component } from '@angular/core';

@Component({
  selector: 'app-buddhist-monastery',
  templateUrl: './buddhist-monastery.component.html',
  styleUrls: ['./buddhist-monastery.component.css']
})
export class BuddhistMonasteryComponent {
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
