import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers= [1,3,5];
  evenNumbers=[2,4,6,8];
  onlyOdd = false;

  toggle() {
    this.onlyOdd=!this.onlyOdd   //onlyOdd needs to equal what it doesn't already equal, thus toggling back and forth, the opposite of whateber it currently is/ 
  }
}
