import { Component } from '@angular/core';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent {
  toCuisine() {
    document.getElementById("cuisine")!.scrollIntoView();
  }
  toThali() {
    document.getElementById("thali")!.scrollIntoView();
  }
  toDal() {
    document.getElementById("dal")!.scrollIntoView();
  }
  toFestival() {
    document.getElementById("festival")!.scrollIntoView();
  }
  toSweet() {
    document.getElementById("sweet")!.scrollIntoView();
  }
  toTop(){
    document.getElementById("top")!.scrollIntoView();
  }

}
