import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent{
  @Input()
  icon = false;

  @Input()
  text = false;
  
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  backgroundColor?: string;

  @Input()
  LeftLabel = 'Label';

  @Input()
  centerLabel = 'Label';

  @Input()
  rightLabel = 'Label';

  @Input()
  outline = false;

  public get LeftClasses(): string[]{
    const mode = this.outline ? 'outline-button' : 'primary-button ';
    return ['button', `leftButton-${this.size}`, mode]
  }

  public get centerClasses(): string[]{
    const mode = this.outline ? 'outline-button' : 'primary-button ';
    return ['button', `button-${this.size}`, mode]
  }

  public get rightClasses(): string[]{
    const mode = this.outline ? 'outline-button' : 'primary-button ';
    return ['button', `rightButton-${this.size}`, mode]
  }

}
