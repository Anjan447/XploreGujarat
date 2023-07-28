import { Component } from '@angular/core';

@Component({
  selector: 'app-bachuchara-mata-temple',
  templateUrl: './bachuchara-mata-temple.component.html',
  styleUrls: ['./bachuchara-mata-temple.component.css']
})
export class BachucharaMataTempleComponent {
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
