import { Component } from '@angular/core';

@Component({
  selector: 'app-navghan-kuwo',
  templateUrl: './navghan-kuwo.component.html',
  styleUrls: ['./navghan-kuwo.component.css']
})
export class NavghanKuwoComponent {
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
