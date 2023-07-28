import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  tohome() {
    document.getElementById("home")!.scrollIntoView();
  }
  tocarousel() {
    document.getElementById("carouselContainer")!.scrollIntoView();
  }
  todest() {
    document.getElementById("destinations")!.scrollIntoView();
  }
  tofair() {
    document.getElementById("fairs")!.scrollIntoView();
  }
}
