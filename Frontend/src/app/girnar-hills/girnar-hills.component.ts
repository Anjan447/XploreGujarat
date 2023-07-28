import { Component } from '@angular/core';

@Component({
  selector: 'app-girnar-hills',
  templateUrl: './girnar-hills.component.html',
  styleUrls: ['./girnar-hills.component.css']
})
export class GirnarHillsComponent {
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
