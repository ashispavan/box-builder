import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.scss']
})
export class ActionPanelComponent implements OnInit {

  @Output() increaseCount: EventEmitter<any> = new EventEmitter();

  @Output() decreaseCount: EventEmitter<any> = new EventEmitter();

  @Input() count: number;

  constructor() { }

  ngOnInit() {
  }

  public addBox(): void {
    this.increaseCount.emit();
  }

  public removeBox(): void {
    this.decreaseCount.emit();
  }

}
