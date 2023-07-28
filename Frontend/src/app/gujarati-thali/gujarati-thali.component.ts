import { Component } from '@angular/core';

@Component({
  selector: 'app-gujarati-thali',
  templateUrl: './gujarati-thali.component.html',
  styleUrls: ['./gujarati-thali.component.css']
})
export class GujaratiThaliComponent {
  toCuisine() {
    document.getElementById("cuisine")!.scrollIntoView();
  }
  toTop(){
    document.getElementById("top")!.scrollIntoView();
  }
}
