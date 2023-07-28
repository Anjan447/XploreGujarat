import { Component } from '@angular/core';

@Component({
  selector: 'app-ratanmahal-sloth',
  templateUrl: './ratanmahal-sloth.component.html',
  styleUrls: ['./ratanmahal-sloth.component.css']
})
export class RatanmahalSlothComponent {
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
