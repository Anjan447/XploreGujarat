import { Component } from '@angular/core';

@Component({
  selector: 'app-damodar-kund',
  templateUrl: './damodar-kund.component.html',
  styleUrls: ['./damodar-kund.component.css']
})
export class DamodarKundComponent {
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
