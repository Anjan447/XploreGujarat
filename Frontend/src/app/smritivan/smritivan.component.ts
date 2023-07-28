import { Component } from '@angular/core';

@Component({
  selector: 'app-smritivan',
  templateUrl: './smritivan.component.html',
  styleUrls: ['./smritivan.component.css']
})
export class SmritivanComponent {
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
