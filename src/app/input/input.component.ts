import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent{
  @Input()
  label = false;

  @Input()
  labelText = 'Input Label';

  @Input()
  message = 'Input caption message';

  @Input()
  leftIcon = false;

  @Input()
  rightIcon = false;

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  public get classes(): string[] {
    //const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['', `${this.size}`];
  }
}
