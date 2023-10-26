import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  //It is root component so it should not contain any data because it will exist in global scope
  //and that will be an anti-pattern
}
