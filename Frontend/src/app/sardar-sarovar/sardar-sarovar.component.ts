import { Component } from '@angular/core';

@Component({
  selector: 'app-sardar-sarovar',
  templateUrl: './sardar-sarovar.component.html',
  styleUrls: ['./sardar-sarovar.component.css']
})
export class SardarSarovarComponent {
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
