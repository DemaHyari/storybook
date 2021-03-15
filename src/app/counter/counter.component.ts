import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  @Input()
  counter = 0;

  @Input()
  size: 'small' | 'large' = 'large';

  @Input()
  primary = false;

  @Input()
  primaryInverted = false;

  @Input()
  important = false;

  @Input()
  added = false;

  @Input()
  removed = false;

  public get classes(): string[] {
    let mode = '';
    if (this.primary) {
      mode = 'primary';
    } else if (this.primaryInverted) {
      mode = 'primaryInverted';
    } else if (this.important) {
      mode = 'important';
    } else if (this.added) {
      mode = 'added';
    } else if (this.removed) {
      mode = 'removed';
    }
    return ['counter', this.size, mode];
  }
}
