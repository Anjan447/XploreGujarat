import { Component } from '@angular/core';

@Component({
  selector: 'app-ashoke-edicts',
  templateUrl: './ashoke-edicts.component.html',
  styleUrls: ['./ashoke-edicts.component.css']
})
export class AshokeEdictsComponent {
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
