import { Component } from '@angular/core';

@Component({
  selector: 'app-narayan-sarovar',
  templateUrl: './narayan-sarovar.component.html',
  styleUrls: ['./narayan-sarovar.component.css']
})
export class NarayanSarovarComponent {
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
