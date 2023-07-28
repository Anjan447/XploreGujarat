import { Component } from '@angular/core';

@Component({
  selector: 'app-flora-fauna',
  templateUrl: './flora-fauna.component.html',
  styleUrls: ['./flora-fauna.component.css']
})
export class FloraFaunaComponent {
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
