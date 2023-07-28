import { Component } from '@angular/core';

@Component({
  selector: 'app-maqbara',
  templateUrl: './maqbara.component.html',
  styleUrls: ['./maqbara.component.css']
})
export class MaqbaraComponent {
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
