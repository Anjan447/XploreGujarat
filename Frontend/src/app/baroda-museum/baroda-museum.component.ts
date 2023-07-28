import { Component } from '@angular/core';

@Component({
  selector: 'app-baroda-museum',
  templateUrl: './baroda-museum.component.html',
  styleUrls: ['./baroda-museum.component.css']
})
export class BarodaMuseumComponent {
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
