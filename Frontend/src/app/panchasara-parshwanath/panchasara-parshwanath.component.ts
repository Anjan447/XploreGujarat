import { Component } from '@angular/core';

@Component({
  selector: 'app-panchasara-parshwanath',
  templateUrl: './panchasara-parshwanath.component.html',
  styleUrls: ['./panchasara-parshwanath.component.css']
})
export class PanchasaraParshwanathComponent {
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
