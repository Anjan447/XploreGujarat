import { Component } from '@angular/core';

@Component({
  selector: 'app-adi-kadi-vav',
  templateUrl: './adi-kadi-vav.component.html',
  styleUrls: ['./adi-kadi-vav.component.css']
})
export class AdiKadiVavComponent {
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
