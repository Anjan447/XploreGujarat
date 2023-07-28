import { Component } from '@angular/core';

@Component({
  selector: 'app-vadnagar',
  templateUrl: './vadnagar.component.html',
  styleUrls: ['./vadnagar.component.css']
})
export class VadnagarComponent {
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
