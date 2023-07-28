import { Component } from '@angular/core';

@Component({
  selector: 'app-taranga-caves',
  templateUrl: './taranga-caves.component.html',
  styleUrls: ['./taranga-caves.component.css']
})
export class TarangaCavesComponent {
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
