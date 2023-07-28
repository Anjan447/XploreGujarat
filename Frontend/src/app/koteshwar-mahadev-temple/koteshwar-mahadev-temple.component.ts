import { Component } from '@angular/core';

@Component({
  selector: 'app-koteshwar-mahadev-temple',
  templateUrl: './koteshwar-mahadev-temple.component.html',
  styleUrls: ['./koteshwar-mahadev-temple.component.css']
})
export class KoteshwarMahadevTempleComponent {
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
