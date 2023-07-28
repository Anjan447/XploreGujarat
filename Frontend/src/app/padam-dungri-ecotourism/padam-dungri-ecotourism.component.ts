import { Component } from '@angular/core';

@Component({
  selector: 'app-padam-dungri-ecotourism',
  templateUrl: './padam-dungri-ecotourism.component.html',
  styleUrls: ['./padam-dungri-ecotourism.component.css']
})
export class PadamDungriEcotourismComponent {
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
