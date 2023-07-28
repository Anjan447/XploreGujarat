import { Component } from '@angular/core';

@Component({
  selector: 'app-dinosaur-museum',
  templateUrl: './dinosaur-museum.component.html',
  styleUrls: ['./dinosaur-museum.component.css']
})
export class DinosaurMuseumComponent {
  toAbout() {
    document.getElementById("aboutLocation")!.scrollIntoView();
  }
  toGetThere() {
    document.getElementById("getThere")!.scrollIntoView();
  }
  toNearby() {
    document.getElementById("nearbyDestinations")!.scrollIntoView();
  }
  toTop() {
    document.getElementById("top")!.scrollIntoView();
  }
}
