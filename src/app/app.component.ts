import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toolbar-test';

  add() {
    console.log('Add from ' + this.title);
  }

  test() {
    console.log('Test from ' + this.title);
  }
}
