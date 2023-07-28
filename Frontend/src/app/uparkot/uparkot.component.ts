import { Component } from '@angular/core';

@Component({
  selector: 'app-uparkot',
  templateUrl: './uparkot.component.html',
  styleUrls: ['./uparkot.component.css']
})
export class UparkotComponent {
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
