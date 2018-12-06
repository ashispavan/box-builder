import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public count: number = 0;

  public boxes: Array<number> = [];

  constructor() {

  }

  public incrementCount(): void {
    this.count++;
    this.boxes.push(this.count);
  }

  public decrementCount(): void {
    this.count--;
    this.boxes.pop();
  }

}
