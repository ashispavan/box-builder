import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {

  @Input() boxes: Array<number>;

  @Input() count: number;

  public fontSize: number = 0;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.fontSize = (this.count * 5) + 16;
  }



}
