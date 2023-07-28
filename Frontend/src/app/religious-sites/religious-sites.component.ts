import { Component } from '@angular/core';

@Component({
  selector: 'app-religious-sites',
  templateUrl: './religious-sites.component.html',
  styleUrls: ['./religious-sites.component.css']
})
export class ReligiousSitesComponent {
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
