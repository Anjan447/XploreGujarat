import { Component } from '@angular/core';

@Component({
  selector: 'app-ahmedpur-mandvi',
  templateUrl: './ahmedpur-mandvi.component.html',
  styleUrls: ['./ahmedpur-mandvi.component.css']
})
export class AhmedpurMandviComponent {
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
