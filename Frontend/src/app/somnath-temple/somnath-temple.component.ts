import { Component } from '@angular/core';

@Component({
  selector: 'app-somnath-temple',
  templateUrl: './somnath-temple.component.html',
  styleUrls: ['./somnath-temple.component.css']
})
export class SomnathTempleComponent {
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
