import { Component } from '@angular/core';

@Component({
  selector: 'app-kirti-mandir',
  templateUrl: './kirti-mandir.component.html',
  styleUrls: ['./kirti-mandir.component.css']
})
export class KirtiMandirComponent {
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
