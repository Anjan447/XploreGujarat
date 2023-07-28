import { Component } from '@angular/core';

@Component({
  selector: 'app-prabhas-patan',
  templateUrl: './prabhas-patan.component.html',
  styleUrls: ['./prabhas-patan.component.css']
})
export class PrabhasPatanComponent {
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
