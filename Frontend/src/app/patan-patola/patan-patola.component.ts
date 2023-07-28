import { Component } from '@angular/core';

@Component({
  selector: 'app-patan-patola',
  templateUrl: './patan-patola.component.html',
  styleUrls: ['./patan-patola.component.css']
})
export class PatanPatolaComponent {
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
