import { Component } from '@angular/core';

@Component({
  selector: 'app-buddhist-caves',
  templateUrl: './buddhist-caves.component.html',
  styleUrls: ['./buddhist-caves.component.css']
})
export class BuddhistCavesComponent {
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
