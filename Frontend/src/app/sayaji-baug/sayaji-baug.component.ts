import { Component } from '@angular/core';

@Component({
  selector: 'app-sayaji-baug',
  templateUrl: './sayaji-baug.component.html',
  styleUrls: ['./sayaji-baug.component.css']
})
export class SayajiBaugComponent {
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
