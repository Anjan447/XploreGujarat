import { Component } from '@angular/core';

@Component({
  selector: 'app-chhari-dhand',
  templateUrl: './chhari-dhand.component.html',
  styleUrls: ['./chhari-dhand.component.css']
})
export class ChhariDhandComponent {
  toAbout() {
    document.getElementById("aboutLocation")!.scrollIntoView();
  }
  toGetThere() {
    document.getElementById("getThere")!.scrollIntoView();
  }
  toNearby() {
    document.getElementById("nearbyDestinations")!.scrollIntoView();
  }
  toTop() {
    document.getElementById("top")!.scrollIntoView();
  }

}
