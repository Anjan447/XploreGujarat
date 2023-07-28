import { Component } from '@angular/core';

@Component({
  selector: 'app-statue',
  templateUrl: './statue.component.html',
  styleUrls: ['./statue.component.css']
})
export class StatueComponent {
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
