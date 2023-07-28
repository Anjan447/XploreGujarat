import { Component } from '@angular/core';

@Component({
  selector: 'app-rajchandra-ashram',
  templateUrl: './rajchandra-ashram.component.html',
  styleUrls: ['./rajchandra-ashram.component.css']
})
export class RajchandraAshramComponent {
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
