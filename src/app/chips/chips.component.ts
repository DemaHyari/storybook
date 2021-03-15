import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})

export class ChipsComponent {
  @Input()
  rounded = false;

  @Input()
  outline = false;

  @Input()
  size: 'small' | 'large' = 'large';

  @Input()
  label = 'Default Chip';

  //Colors
  @Input()
  default = false;

  @Input()
  primary = false;

  @Input()
  warning = false;

  @Input()
  positive = false;

  @Input()
  error = false;

  //Types
  @Input()
  selected = false;

  @Input()
  iconic = false;

  @Input()
  counter = false;

  @Input()
  count = 25;

  @Input()
  userImage = false;

  @Input()
  addable = false;

  @Input()
  removable = false;

  @Input()
  disabled = false;

  public get classes(): string[] {
    let mode = '';
    if(this.default){
      mode = 'default'
    }else if(this.primary){
      mode = 'primary'
    }else if(this.warning){
      mode = 'warning'
    }else if(this.positive){
      mode = 'positive'
    }else if(this.error){
      mode = 'error'
    }

    if(this.rounded){
      mode += ' rounded'
    }
    if(this.outline){
      mode += ' outline'
    }
    if(this.disabled){
      mode += ' disabled'
    }
    return [`${this.size}`, mode];
  }
}
