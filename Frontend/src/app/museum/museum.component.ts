import { Component } from '@angular/core';

@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrls: ['./museum.component.css']
})
export class MuseumComponent {
  toAbout() {
    document.getElementById("about")!.scrollIntoView();
  }
  toMore(){
    document.getElementById("more")!.scrollIntoView();
  }
  toTop(){
    document.getElementById("top")!.scrollIntoView();
  }
}
