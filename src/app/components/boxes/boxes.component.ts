import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {

  @Input() boxes: Array<number>;

  constructor() { }

  ngOnInit() {
  }



}